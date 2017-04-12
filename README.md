# Linear Algebra Done Right Study Group

All discussion happens in [the issues page](https://github.com/worstsauce/study/issues).

TODO:

- [ ] Add small tutorial on how to make MathJax work for Github.
- [ ] Explain each label.

# How to MathJax + Github

Install the [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/?src=ss) or [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extensions.

You need to add [this userscript](https://raw.githubusercontent.com/worstsauce/study/master/mathjax-in-github.js) which will load MathJax on Github. (Important: Due to some bug this shouldn't work unless you do the following: (for Firefox) go to `about:config`, click `I'll be careful, I promise!`, then search for `security.csp.enable` and set its value to `false`. Don't forget to set this value back to its default `true` when you no longer want to use MathJax with Github!)

Then it should work as usual.
