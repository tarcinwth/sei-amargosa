(function () {
  function updateDadosProcesso(idElement, value, callback = false) {
    if ($('#frmCheckerProcessoPro').length === 0) {
      if (typeof getCheckerProcessoPro === 'function') {
        getCheckerProcessoPro();
      }
    }

    const url = (typeof dadosProcessoPro !== 'undefined' && dadosProcessoPro.propProcesso)
      ? dadosProcessoPro.propProcesso.action
      : undefined;

    if (typeof url !== 'undefined' && url !== '') {
      $('#frmCheckerProcessoPro').attr('src', url).unbind().on('load', function () {
        const iframe = $(this).contents();
        iframe.find('#' + idElement).val(value);
        $(this).unbind();
        iframe.find('#btnSalvar, #sbmSalvar').trigger('click');
        if (typeof callback === 'function') callback();
      });
      return true;
    }

    return false;
  }

  function getLinksProcessoAjax(id_procedimento, callback) {
    const href = url_host.replace('controlador.php', '') + 'controlador.php?acao=procedimento_trabalhar&id_procedimento=' + String(id_procedimento);
    if (href !== null) {
      $.ajax({ url: href }).done(function (html) {
        const $html = $(html);
        const urlArvore = $html.find('#ifrArvore').attr('src');
        $.ajax({ url: urlArvore }).done(function (htmlArvore) {
          if (typeof callback === 'function') callback(getLinksArvoreAjax(htmlArvore));
        });
      });
    }
  }

  function getInteressadosProcesso(txtInteressado, callback) {
    if (typeof window.linkPesquisaInteressado !== 'undefined') {
      getInteressadosProcessoAjax(window.linkPesquisaInteressado, txtInteressado, callback);
      return true;
    }

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
      return true;
    }

    return false;
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

  function hasProcessControlContext() {
    return !!($('#ifrArvore').length || $('#frmCheckerProcessoPro').length || $('#ifrVisualizacao').length);
  }

  function startProcessControlObserver() {
    if (typeof window === 'undefined' || typeof MutationObserver === 'undefined' || window.__seiProcessControlObserverActive) {
      return;
    }

    const observer = new MutationObserver(function () {
      if (hasProcessControlContext()) {
        initProcessControlModule(true);
      }
    });

    const target = document.documentElement || document.body;
    if (target) {
      observer.observe(target, { childList: true, subtree: true, attributes: true });
      window.__seiProcessControlObserverActive = true;
      window.__seiProcessControlObserver = observer;
    }
  }

  function initProcessControlModule(force = false) {
    if (typeof window === 'undefined') return;

    window.SEIProModules = window.SEIProModules || {};
    window.SEIProModules.processo = window.SEIProModules.processo || {};

    if (window.SEIProModules.processo.initialized && !force) {
      return;
    }

    if (!hasProcessControlContext()) {
      startProcessControlObserver();
      return;
    }

    window.SEIProModules.processo.updateDadosProcesso = updateDadosProcesso;
    window.SEIProModules.processo.getLinksProcessoAjax = getLinksProcessoAjax;
    window.SEIProModules.processo.getInteressadosProcesso = getInteressadosProcesso;
    window.SEIProModules.processo.setInteressadosSend = setInteressadosSend;
    window.SEIProModules.processo.init = initProcessControlModule;
    window.SEIProModules.processo.initialized = true;

    startProcessControlObserver();
  }

  if (typeof window !== 'undefined') {
    initProcessControlModule();
    setTimeout(function () {
      initProcessControlModule(true);
    }, 500);
  }
})();
