## Exercises 2.A

### Exercise 8

Assume that $v_1,\ldots,v_m$ linearly independent, then

$$\begin{align}
\neg\big(\exists a_1,\ldots,a_m : 0=a_1v_1+\ldots+a_mv_m\big)
& \implies \neg\big(\exists a_1,\ldots,a_m : 0=a_1(\lambda v_1)+\ldots+a_m(\lambda v_m)\big)
\\\\
& \implies \lambda v_1,\ldots,\lambda v_m \text{ is linearly independent}
\\\\
\end{align}$$ ($\lambda\neq0$, the $a_1,\ldots,a_m$ are not all $0$)

### Exercise 11

We'll use here the fact that $$\big\\{p\iff q\big\\}\iff \big\\{(\neg p\implies \neg q)\land(p\implies q)\big\\}$$ 

So first part, assume $w\in\operatorname{span}(v_1,\ldots,v_m)$, hence $w=a_1v_1+\ldots+a_mv_m$, thus $0=(-1)w+a_1v_1+\ldots+a_mv_m$, which establishes that the list $w,v_1,\ldots,v_m$ is linearly dependent.

Second part, assume that $w\notin\operatorname{span}(v_1,\ldots,v_m)$, then $$\begin{align}
\neg\big(\exists a_1,\ldots,a_m : w=a_1v_1+\ldots+a_mv_m\big)
& \implies \neg\big(\exists a_1,\ldots,a_m : 0=cw-ca_1v_1-\ldots-ca_mv_m\big)
\\\\
& \implies \neg\big(\exists d_0,\ldots,d_m : 0=d_0w+d_1v_1+\ldots+d_mv_m\big)
\\\\
& \implies w,v_1,\ldots,v_m \text{ is linearly independent}
\\\\
\end{align}$$ ($c\neq0$, the $a_1,\ldots,a_m$ are not all $0$)
