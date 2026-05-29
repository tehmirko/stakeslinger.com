// Stakeslinger — language toggle + footer year
(function () {
  var STORE_KEY = "sl_lang";
  var supported = ["en", "de"];

  function detect() {
    var saved = localStorage.getItem(STORE_KEY);
    if (saved && supported.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return nav === "de" ? "de" : "en";
  }

  function apply(lang) {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(STORE_KEY, lang);
    var btns = document.querySelectorAll(".lang-toggle button");
    btns.forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-set-lang") === lang);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(detect());

    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () {
        apply(b.getAttribute("data-set-lang"));
      });
    });

    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
