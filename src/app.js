import "./app.scss";

console.log("testando hot module replacement 9");

/* Navbar */
function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");

  navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

if (module.hot) {
  module.hot.accept();
}

/* Hot Module Replacement Plugin
if (module.hot) {
  module.hot.accept("./App.scss");
}

/* Snippet for Hot Module Replacement Plugin works with Style.scss or so */

if (module.hot) {
  const hotEmitter = require("webpack/hot/emitter");
  const DEAD_CSS_TIMEOUT = 2000;

  hotEmitter.on("webpackHotUpdate", function(currentHash) {
    document.querySelectorAll("link[href][rel=stylesheet]").forEach(link => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
      const newLink = link.cloneNode();
      newLink.href = nextStyleHref;

      link.parentNode.appendChild(newLink);
      setTimeout(() => {
        link.parentNode.removeChild(link);
      }, DEAD_CSS_TIMEOUT);
    });
  });
}
