(function () {
  const linksCache = {};

  function getTreeFrameContext() {
    const mainFrame = $('#ifrArvore');
    if (mainFrame.length && mainFrame.contents().length) {
      return mainFrame.contents();
    }

    const visualFrame = $('#ifrVisualizacao');
    if (visualFrame.length) {
      const innerFrame = visualFrame.contents().find($ifrArvoreHtml);
      if (innerFrame.length && innerFrame.contents().length) {
        return innerFrame.contents();
      }
    }

    return null;
  }

  function hasTreeContext() {
    return !!($('#ifrArvore').length || ($('#ifrVisualizacao').length && $($ifrVisualizacao).contents().find($ifrArvoreHtml).length));
  }

  function startArvoreObserver() {
    if (typeof window === 'undefined' || typeof MutationObserver === 'undefined' || window.__seiArvoreObserverActive) {
      return;
    }

    const observer = new MutationObserver(function () {
      if (hasTreeContext()) {
        initArvoreAnexosModule(true);
      }
    });

    const target = document.documentElement || document.body;
    if (target) {
      observer.observe(target, { childList: true, subtree: true, attributes: true });
      window.__seiArvoreObserverActive = true;
      window.__seiArvoreObserver = observer;
    }
  }

  function scrollToElementArvore(id_documento) {
    const ifrArvore = getTreeFrameContext();
    if (!ifrArvore) return false;

    const target = ifrArvore.find('#anchor' + id_documento);
    if (target.length) {
      ifrArvore.find('html, body').stop(true, true).animate({
        scrollTop: target.offset().top
      }, 250);
      return true;
    }

    return false;
  }

  function getLinksProcessoAjax(id_procedimento, callback) {
    if (!id_procedimento) {
      if (typeof callback === 'function') callback([]);
      return;
    }

    const key = String(id_procedimento);
    if (linksCache[key]) {
      if (typeof callback === 'function') callback(linksCache[key]);
      return;
    }

    const href = url_host.replace('controlador.php', '') + 'controlador.php?acao=procedimento_trabalhar&id_procedimento=' + key;
    if (href !== null) {
      $.ajax({ url: href, cache: true }).done(function (html) {
        const $html = $(html);
        const urlArvore = $html.find('#ifrArvore').attr('src') || $html.find('#ifrVisualizacao').attr('src');

        if (!urlArvore) {
          if (typeof callback === 'function') callback([]);
          return;
        }

        $.ajax({ url: urlArvore, cache: true }).done(function (htmlArvore) {
          const links = getLinksArvoreAjax(htmlArvore) || [];
          linksCache[key] = links;
          if (typeof callback === 'function') callback(links);
        }).fail(function () {
          if (typeof callback === 'function') callback([]);
        });
      }).fail(function () {
        if (typeof callback === 'function') callback([]);
      });
    }
  }

  function getInteressadosProcesso(txtInteressado, callback) {
    if (typeof window.linkPesquisaInteressado !== 'undefined') {
      getInteressadosProcessoAjax(window.linkPesquisaInteressado, txtInteressado, callback);
    } else {
      let id_procedimento = getParamsUrlPro($('#frmCheckerProcessoPro').attr('src'));
      id_procedimento = typeof id_procedimento !== 'undefined' && id_procedimento !== null && id_procedimento && typeof id_procedimento.id_procedimento !== 'undefined' ? id_procedimento.id_procedimento : false;
      if (id_procedimento) {
        getLinksProcessoAjax(id_procedimento, function (arrayLinksArvore) {
          const urlAlterarProc = jmespath.search(arrayLinksArvore, "[?name=='Enviar Processo'] | [0].url");
          if (urlAlterarProc !== null) {
            $.ajax({ url: urlAlterarProc }).done(function (htmlDoc) {
              const link = $.map(htmlDoc.split('\n'), function (v) {
                if (v.indexOf('controlador_ajax.php?acao_ajax=unidade_auto_completar_envio_processo') !== -1) {
                  return $.map(v.split("'"), function (substr, i) {
                    return (i % 2 && substr.indexOf('controlador_ajax.php?acao_ajax=unidade_auto_completar_envio_processo') !== -1) ? substr : null;
                  });
                }
              });
              if (link.length) {
                window.linkPesquisaInteressado = link[0];
                getInteressadosProcessoAjax(window.linkPesquisaInteressado, txtInteressado, callback);
              }
            });
          }
        });
      }
    }
  }

  function getInteressadosProcessoAjax(link, txtInteressado, callback) {
    $.ajax({
      type: 'POST',
      url: link,
      dataType: 'text',
      data: { palavras_pesquisa: txtInteressado },
      success: function (result) {
        const html_result = $(result.replace('<?xml version="1.0" encoding="iso-8859-1"?>', '')).html();
        const id_result = $(html_result).map(function () {
          return { id: $(this).attr('id'), descricao: $(this).attr('descricao') };
        }).get();
        if (typeof callback === 'function') callback(id_result);
      }
    });
  }

  function setInteressadosSend() {
    const ifrArvoreHtml = $($ifrVisualizacao).contents().find($ifrArvoreHtml);
    if (ifrArvoreHtml.length) {
      const interessados = ifrArvoreHtml.contents().find('.interessadoSeiPro').map(function () {
        return { id: $(this).data('id'), descricao: $(this).text() };
      }).get();
      if (interessados.length) {
        const arrayInter = [];
        interessados.filter(function (item) {
          const i = arrayInter.findIndex(x => (x.id === item.id && x.descricao === item.descricao));
          if (i <= -1) arrayInter.push(item);
          return null;
        });
        interessadosSendPro = arrayInter;
        return arrayInter;
      }
    }
    return false;
  }

  function initArvoreAnexosModule(force = false) {
    if (typeof window === 'undefined') return;

    window.SEIProModules = window.SEIProModules || {};
    window.SEIProModules.arvore = window.SEIProModules.arvore || {};

    if (window.SEIProModules.arvore.initialized && !force) {
      return;
    }

    window.SEIProModules.arvore.getLinks = function (idProcedimento, callback) {
      return getLinksProcessoAjax(idProcedimento, callback);
    };

    window.SEIProModules.arvore.scrollTo = function (idDocumento) {
      scrollToElementArvore(idDocumento);
      return true;
    };

    window.SEIProModules.arvore.getDocumentLinks = function (idProcedimento) {
      return new Promise(function (resolve, reject) {
        try {
          getLinksProcessoAjax(idProcedimento, function (links) {
            resolve(links || []);
          });
        } catch (error) {
          reject(error);
        }
      });
    };

    window.SEIProModules.arvore.getInteressados = function (txtInteressado, callback) {
      return getInteressadosProcesso(txtInteressado, callback);
    };

    window.SEIProModules.arvore.setInteressadosSend = setInteressadosSend;
    window.SEIProModules.arvore.init = initArvoreAnexosModule;
    window.SEIProModules.arvore.initialized = true;

    startArvoreObserver();
  }

  if (typeof window !== 'undefined') {
    initArvoreAnexosModule();
    setTimeout(function () {
      initArvoreAnexosModule(true);
    }, 500);
  }
})();
