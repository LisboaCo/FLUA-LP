(function () {
  window.dataLayer = window.dataLayer || [];

  var UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];

  // Le as UTMs da URL e mantem em sessao para nao perder a origem ao navegar entre LPs.
  function readUtms() {
    var params = new URLSearchParams(window.location.search);
    var stored = {};

    try {
      stored = JSON.parse(sessionStorage.getItem("flua_utms") || "{}");
    } catch (e) {
      stored = {};
    }

    UTM_KEYS.forEach(function (key) {
      var value = params.get(key);
      if (value) stored[key] = value;
    });

    try {
      sessionStorage.setItem("flua_utms", JSON.stringify(stored));
    } catch (e) {
      /* modo privado / storage bloqueado */
    }

    return stored;
  }

  window.fluaUtms = readUtms();

  // Anexa as UTMs guardadas a qualquer URL (checkout, WhatsApp, etc).
  window.fluaWithUtms = function (url) {
    try {
      var target = new URL(url, window.location.origin);
      Object.keys(window.fluaUtms).forEach(function (key) {
        if (!target.searchParams.has(key)) target.searchParams.set(key, window.fluaUtms[key]);
      });
      return target.toString();
    } catch (e) {
      return url;
    }
  };

  window.fluaTrack = window.fluaTrack || function (eventName, payload) {
    window.dataLayer.push(Object.assign({ event: eventName }, window.fluaUtms, payload || {}));
  };

  window.fluaTrack("page_view", {
    page_name: document.title,
    path: window.location.pathname
  });
})();
