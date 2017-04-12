// ==UserScript==
// @name           Run MathJax inside Github
// @namespace      https://www.mathjax.org/
// @author         David Cervone
// @version        0
// @description    Runs MathJax on any page with Github.com
// @match          *://*.github.com/*
// @copyright
// ==/UserScript==
(function () {

  function LoadMathJax() {
    if (!window.MathJax) {
      if (document.body.innerHTML.match(/$|\\\[|\\\(|<([a-z]+:)math/)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
        script.text = [
          "MathJax.Hub.Config({",
          "  tex2jax: {inlineMath: [['$','$'],['\\\\\(','\\\\\)']]}",
          "});"
        ].join("\n");
        var parent = (document.head || document.body || document.documentElement);
        parent.appendChild(script);
      }
    }
  };

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.text = "(" + LoadMathJax + ")()";
  var parent = (document.head || document.body || document.documentElement);
  setTimeout(function () {
    parent.appendChild(script);
    parent.removeChild(script);
  },0);

})();
