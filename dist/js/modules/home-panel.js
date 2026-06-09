(function () {
  const HOME_PANEL_CACHE_KEY = 'seiProHomePanelOrder';

  function injectHomePanelStyles() {
    if ($('#sei-pro-home-panel-styles').length > 0) return;

    $('<style id="sei-pro-home-panel-styles">' +
      '.sei-home-optimized .panelHomePro{margin-bottom:8px;border-radius:6px;box-shadow:0 1px 2px rgba(0,0,0,.08);}'+
      '.sei-home-optimized .titlePanelHome{padding-bottom:2px;}'+
      '.sei-home-optimized .panelHomePro .ui-sortable-handle{cursor:grab;}'+
      '.sei-home-optimized tr.home-highlight{background-color:rgba(255,245,204,.65);}'+
      '.sei-home-optimized tr.home-urgent{box-shadow:inset 3px 0 0 #ff9800;}'+
      '.sei-home-optimized tr.home-unread{font-weight:600;}'+
      '</style>').appendTo('head');
  }

  function getCachedPanelOrder() {
    try {
      const cached = sessionStorage.getItem(HOME_PANEL_CACHE_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch (e) {
      return null;
    }
  }

  function applyCachedPanelOrder() {
    const cached = getCachedPanelOrder();
    if (!cached || !Array.isArray(cached) || !$('#panelHomePro').length) return;

    const panels = $('.panelHomePro').get();
    if (panels.length === 0) return;

    const orderMap = new Map(cached.map((item, index) => [String(item.name || item.id), index]));
    panels.sort(function (a, b) {
      const left = orderMap.get($(a).attr('id')) ?? Number($(a).data('order') || 9999);
      const right = orderMap.get($(b).attr('id')) ?? Number($(b).data('order') || 9999);
      return left - right;
    });

    const $container = $('#panelHomePro');
    panels.forEach(function (panel) { $container.append(panel); });
  }

  function setSortDivPanel() {
    if (getOptionsPro('panelSortPro')) {
      if ($('#panelHomePro').hasClass('ui-sortable')) {
        setTimeout(function () {
          $('#panelHomePro').sortable().sortable('refresh');
          controleSortDivPanel();
        }, 1000);
      } else {
        $('#panelHomePro').sortable({
          items: '.panelHomePro',
          cursor: 'grabbing',
          handle: '.titlePanelHome',
          forceHelperSize: true,
          opacity: 0.5,
          update: function (event, ui) {
            const orderPanelHome = [];
            $('.panelHomePro').each(function (index) {
              orderPanelHome.push({ name: $(this).attr('id'), index: index });
              $(this).data('order', index).attr('data-order', index);
            });
            try {
              sessionStorage.setItem(HOME_PANEL_CACHE_KEY, JSON.stringify(orderPanelHome));
            } catch (e) {}
            setOptionsPro('orderPanelHome', orderPanelHome);
          }
        });
        controleSortDivPanel();
      }
    }
  }

  function controleSortDivPanel() {
    $('#panelHomePro .titlePanelHome')
      .unbind()
      .mouseenter(function () {
        $('#panelHomePro').sortable('enable');
      })
      .mouseleave(function () {
        $('#panelHomePro').sortable('disable');
      });
  }

  function setPlaceHoldChosen(this_) {
    const emptyvalue = ($(this_).val() !== null) ? $(this_).val().trim() : '';
    const placeholder = $(this_).data('placeholder');
    const chosenMin = $(this_).hasClass('chosen-min');
    const id = $(this_).attr('id');

    if (id && $('#'+id+'_chosen').length > 0 && (emptyvalue === '0' || emptyvalue === '') && placeholder) {
      $('#'+id+'_chosen').find('.chosen-single span').text(placeholder);
      if (chosenMin) $('#'+id+'_chosen').addClass('chosen-min');
    }
  }

  function forcePlaceHoldChosen() {
    $('select').each(function () {
      const _this = $(this);
      const placeholder = _this.data('placeholder');
      if (placeholder) {
        setPlaceHoldChosen(this);
        _this.unbind().on('change', function () {
          setPlaceHoldChosen(this);
        });
      }
    });
  }

  function initChosenReplace(mode, this_ = false, force = false) {
    if (typeof $().chosen === 'undefined') return;

    const _this = $(this_);
    const _parent = (_this.closest('.popup-wrapper').length > 0) ? _this.closest('.popup-wrapper') : _this.closest('.ui-dialog');

    if (mode === 'panel') {
      $('.panelHome select')
        .not('[multiple]')
        .filter(function () {
          return !($(this).css('visibility') === 'hidden' || $(this).css('display') === 'none') || force;
        })
        .chosen({
          placeholder_text_single: ' ',
          no_results_text: 'Nenhum resultado encontrado',
          normalize_search_text: function (text) {
            return removeAcentos(text.toLowerCase());
          }
        });
    } else if (mode === 'box_init') {
      _parent.find('select')
        .not('[multiple]')
        .filter(function () {
          return !($(this).css('visibility') === 'hidden' || $(this).css('display') === 'none') || force;
        })
        .chosen({
          placeholder_text_single: ' ',
          no_results_text: 'Nenhum resultado encontrado',
          normalize_search_text: function (text) {
            return removeAcentos(text.toLowerCase());
          }
        });
    }
  }

  function initHomePanelModule() {
    if (typeof $ === 'undefined' || typeof getOptionsPro !== 'function') return;
    if (!$('#panelHomePro').length) return;

    injectHomePanelStyles();
    $('#panelHomePro').addClass('sei-home-optimized');
    applyCachedPanelOrder();
    setSortDivPanel();
    forcePlaceHoldChosen();
    initChosenReplace('panel');
  }

  function refreshHomePanels() {
    injectHomePanelStyles();
    $('#panelHomePro').addClass('sei-home-optimized');
    applyCachedPanelOrder();
    setSortDivPanel();
    forcePlaceHoldChosen();
    initChosenReplace('panel', false, true);
  }

  if (typeof window !== 'undefined') {
    window.SEIProModules = window.SEIProModules || {};
    window.SEIProModules.home = {
      init: initHomePanelModule,
      refresh: refreshHomePanels
    };

    setTimeout(initHomePanelModule, 1000);
  }
})();
