# Linear Algebra Done Right Study Group

All discussion happens in [the issues page](https://github.com/worstsauce/study/issues).

Happy studying! :)

If you want to participate in this study group please leave a message in the [discussion thread]() so that I give you the necessary privelages so that you can add labels and similar stuff.

# Making issues

For notes make [something like this](https://gist.github.com/bestsauce/11867d8e3e84b981daede7c3a4739b87). For exercises [something like this](https://gist.github.com/bestsauce/8e1c73c8909c3cc00e77d657a21596c6) (I'll be updating them with each new chapter).

# Labels

Make two `Chapter x` issues, one with the `Notes` label and the other with `Exercises` label. As you study along you may add the additional `help wanted` label to get some help (e.g. hint), or `question` if it's just a question (e.g. can anyone check if my solution is correct?), and remove them once you're done.

# How to MathJax + Github

Install the [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/?src=ss) or [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extensions.

You need to add [this userscript](https://raw.githubusercontent.com/worstsauce/study/master/mathjax-in-github.js) which will load MathJax on Github. (Important: Due to some bug this shouldn't work unless you do the following: (for Firefox) go to `about:config`, click `I'll be careful, I promise!`, then search for `security.csp.enable` and set its value to `false`. Don't forget to set this value back to its default `true` when you no longer want to use MathJax with Github!)

Then it should work as usual. And here's some $\LaTeX$ to test: $\displaystyle\int_0^1 \dfrac{x^2}{x+1}\ \mathrm{d}x$.

$$\boxed{\ \oint_{\partial \Sigma} \mathbf{E} \cdot \mathrm{d}\boldsymbol{\ell}  = - \overset{\color{white}{.}}{\frac{\mathrm{d}}{\mathrm{d}t}} \underset{\color{white}{.}}{\iint_\Sigma} \mathbf{B} \cdot \mathrm{d}\mathbf{S}\ }$$
