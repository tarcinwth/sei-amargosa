function getUrlExtension(url) {
    if (typeof browser === "undefined") {
        return chrome.runtime.getURL(url);
    } else {
        return browser.runtime.getURL(url);
    }
}
function pathExtensionSEIPro() {
    var URL_SPRO = getUrlExtension("js/sei-pro.js");
        URL_SPRO = URL_SPRO.toString().replace('js/sei-pro.js', '');
    return URL_SPRO;
}
function loadFontIcons(elementTo, target = $('html')) {
    var iconBoxSlim = (localStorage.getItem('seiSlim')) ? true : false;
    var pathExtension = pathExtensionSEIPro();
    if (target.find('link[data-style="seipro-fonticon"]').length == 0 && target.find('style[data-style="seipro-fonticon"]').length == 0) {
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            datastyle: "seipro-fonticon",
            href: getUrlExtension("css/fontawesome.pro.min.css") 
        }).appendTo(elementTo);
        
        var htmlStyleFont = '<style type="text/css" data-style="seipro-fonticon" data-index="2">'+
                            '    @font-face {\n'+
                            '       font-family: "Font Awesome 5 Pro";\n'+
                            '       font-style: normal;\n'+
                            '       font-weight: 900;\n'+
                            '       font-display: block;\n'+
                            '       src: url('+pathExtension+'webfonts/pro/fa-solid-900.eot) !important;\n'+
                            '       src: url('+pathExtension+'webfonts/pro/fa-solid-900.eot?#iefix) format("embedded-opentype"),url('+pathExtension+'webfonts/pro/fa-solid-900.woff2) format("woff2"),url('+pathExtension+'webfonts/pro/fa-solid-900.woff) format("woff"),url('+pathExtension+'webfonts/pro/fa-solid-900.ttf) format("truetype"),url('+pathExtension+'webfonts/pro/fa-solid-900.svg#fontawesome) format("svg") !important;\n'+
                            '   }\n'+
                            '   @font-face {\n'+
                            '       font-family: \"Font Awesome 5 Pro";\n'+
                            '       font-style: normal;\n'+
                            '       font-weight: 400;\n'+
                            '       font-display: block;\n'+
                            '       src: url('+pathExtension+'webfonts/pro/fa-regular-400.eot) !important;\n'+
                            '       src: url('+pathExtension+'webfonts/pro/fa-regular-400.eot?#iefix) format("embedded-opentype"),url('+pathExtension+'webfonts/pro/fa-regular-400.woff2) format("woff2"),url('+pathExtension+'webfonts/pro/fa-regular-400.woff) format("woff"),url('+pathExtension+'webfonts/pro/fa-regular-400.ttf) format("truetype"),url('+pathExtension+'webfonts/pro/fa-regular-400.svg#fontawesome) format("svg") !important;\n'+
                            '   }\n'+
                            (iconBoxSlim ?
                            '   @font-face { \n'+
                            '       font-family: "Font Awesome 5 Pro";\n'+
                            '       font-style: normal;\n'+
                            '       font-weight: 300;\n'+
                            '       font-display: block;\n'+
                            '       src: url('+pathExtension+'webfonts/pro/fa-light-300.eot) !important;\n'+
                            '       src: url('+pathExtension+'webfonts/pro/fa-light-300.eot?#iefix) format("embedded-opentype"), url('+pathExtension+'webfonts/pro/fa-light-300.woff2) format("woff2"), url('+pathExtension+'webfonts/pro/fa-light-300.woff) format("woff"), url('+pathExtension+'webfonts/pro/fa-light-300.ttf) format("truetype"), url('+pathExtension+'webfonts/pro/fa-light-300.svg#fontawesome) format("svg") !important; }\n'+
                            '   }\n'+
                            '   @font-face {\n'+
                            '       font-family: \"Font Awesome 5 Duotone\";\n'+
                            '       font-style: normal;\n'+
                            '       font-weight: 900;\n'+
                            '       font-display: block;\n'+
                            '       src: url('+pathExtension+'webfonts/pro/fa-duotone-900.eot) !important;\n'+
                            '       src: url('+pathExtension+'webfonts/pro/fa-duotone-900.eot?#iefix) format(\"embedded-opentype\"), url('+pathExtension+'webfonts/pro/fa-duotone-900.woff2) format("woff2"), url('+pathExtension+'webfonts/pro/fa-duotone-900.woff) format("woff"), url('+pathExtension+'webfonts/pro/fa-duotone-900.ttf) format("truetype"), url('+pathExtension+'webfonts/pro/fa-duotone-900.svg#fontawesome) format("svg") !important; }\n'+
                            '   }\n'
                            : '')
                            '</style>';
        target.find('head').append(htmlStyleFont);
    }
}
function loadStyleDesign() {
    var body = document.body;
    if (localStorage.getItem('seiSlim')) {
        body.classList.add("seiSlim");
        body.classList.add("seiSlim_arvore");
        if (localStorage.getItem('darkModePro')) {
            body.classList.add("dark-mode");
        }
    }
    if (parent.isNewSEI) {
        body.classList.add("newSEI");
    }
}
loadStyleDesign();
function loadScriptSafe(path, callback) {
    var filename = path.split('/').pop().split('?')[0];
    if ($('script[src*="' + filename + '"]').length > 0) {
        if (callback) callback();
        return;
    }
    $.getScript(path, callback);
}

loadFontIcons('head');
loadScriptSafe(getUrlExtension("js/lib/jquery.toolbar.min.js"));
loadScriptSafe(getUrlExtension("js/lib/jmespath.min.js"));
loadScriptSafe(getUrlExtension("js/lib/purify.min.js"));
loadScriptSafe(getUrlExtension("js/lib/dropzone.min.js"));
loadScriptSafe(getUrlExtension("js/lib/disable-amd.js"), function() {
    loadScriptSafe(getUrlExtension("js/lib/moment.min.js"), function() {
        loadScriptSafe(getUrlExtension("js/lib/restore-amd.js"));
    });
});

loadScriptSafe(getUrlExtension("js/sei-functions-pro.js"), function() {
    loadScriptSafe(getUrlExtension("js/sei-pro-arvore.js"));
});

