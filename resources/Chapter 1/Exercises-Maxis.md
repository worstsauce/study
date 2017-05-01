# Solutions by @MaxisJaisi

## Chapter 1: **Vector Spaces**


### **Notes on 1.B**

_Exercise 1_

Since $V$ is an abelian group with respect to vector addition, $-(-\mathbf{v})=\mathbf{v}$ must hold. The reason is that $-(-\mathbf{v})$ is the (additive) inverse of $-\mathbf{v}$. But we know that $\mathbf{v}$ is the inverse of $-\mathbf{v}$. Since inverses in a group are unique, we obtain our desired result.

_Exercise 2_

If $a=0$, we're done. Suppose $a \neq 0$. Then $a^{-1} a \mathbf{v} = a^{-1} \mathbf{0}$ ($a^{-1}$ exists since nonzero elements of a field are invertible) implies $\mathbf{v}=\mathbf{0}$ ($a\mathbf{0}=\mathbf{0}$ by Proposition 1.29 on page 16). 

_Exercise 3_

We can show a more general statement: For every $\mathbf{v},\mathbf{w} \in V$, there exists a unique $\mathbf{x} \in V$ satisfying $\mathbf{v}+\mathbf{x}=\mathbf{w}$.

To prove this, we first show existence. We claim that $\mathbf{x} = (\mathbf{-v}) + \mathbf{w} $ satisfies the above requirement. Indeed, $\mathbf{v}+\mathbf{x}=\mathbf{v}+[(\mathbf{-v})+(\mathbf{w})] = [\mathbf{v}+(\mathbf{-v})]+\mathbf{w} = \mathbf{0}+\mathbf{w}=\mathbf{w}$ (here we used the fact that $(V,+)$ is an abelian group).

Uniqueness follows from the fact that $\mathbf{v}+\mathbf{x}=\mathbf{w}+\mathbf{x} \implies \mathbf{v}=\mathbf{w}$ (cancellation property in an abelian group). Indeed, suppose $\mathbf{x_1}, \mathbf{x_2}$ both satisfy $\mathbf{v}+\mathbf{x_1} = \mathbf{w}$ and $\mathbf{v}+\mathbf{x_2}=\mathbf{w}$ respectively. Then $\mathbf{v}+\mathbf{x_1}=\mathbf{v}+\mathbf{x_2}$, whence $\mathbf{x_1}=\mathbf{x_2}$.

_Exercise 4_

The empty set is not an abelian group. There is no identity element. 

_Exercise 5_

Essentially, we are asked to show the given axiom is equivalent to the axiom of additive inverse. 

Suppose $0\mathbf{v}=\mathbf{0}$ for every $\mathbf{v} \in V$. We need to show that given any $\mathbf{v} \in V$, there exists $\mathbf{w}$ satisfying $\mathbf{v}+\mathbf{w}=\mathbf{0}$. I claim that we can take $\mathbf{w}=(-1) \mathbf{v}$. Indeed, $\mathbf{v} + (-1) \mathbf{v} = 1 \mathbf{v} + (-1) \mathbf{v} = [1+(-1)] \mathbf{v} = 0 \mathbf{v} = \mathbf{0}$. 

Suppose for every $\mathbf{v} \in V$ there exists $\mathbf{w} \in V$ satisfying $\mathbf{v}+\mathbf{w} = \mathbf{0}$.  Then $0 \mathbf{v} = (0+0) \mathbf{v} = 0 \mathbf{v} + 0 \mathbf{v}$. This forces $0 \mathbf{v}$ to be $\mathbf{0}$, and we're done. 

Or we could just peek at Prop 1.29, page 16... 

_Exercise 6_

The notorious extended real number line makes its appearance again. (=

No, $\ \mathbf{R}$ $\cup$  {$\infty$} $ \cup$ {$-\infty$} isn't a vector space, because $t + \infty = \infty$ for every $t \in \mathbf{R}$ destroys uniqueness of additive identity. 

### **Notes on 1.C**

_Exercise 7_

Take $\\{(a,b) : a \in \mathbf{Z} \ \text{and} \ b \in \mathbf{Z} \\} = U \subset \mathbf{R}^2$. $U$'s clearly closed under vector addition, taking inverses, and contains $(0,0)$ but fails the scalar multiplication test.

_Exercise 8_

Take any two non-parallel lines passing through $(0,0) \in \mathbf{R}^2$. The subset consisting of the two non-parallel lines respect scalar multiplication, but does not respect closure under addition.

_Exercise 11_

Note that this disposes off Ex 10, as it's a more general statement; we could potentially be intersecting an uncountable number of subspaces.

Let $V$ be a vector space. Consider the intersection of the family of subspaces $\bigcap_{i \in I} U_{i}$ of $V$, where $I$ is an indexing set. We want to show that $\bigcap_{i \in I} U_{i}$ itself is a subspace of $V$.

We start by showing that $\mathbf{0} \in \bigcap_{i \in I} U_{i}$. This is true, because each $U_{i}$ is a subspace, so $\mathbf{0} \in U_{i}$ for every $i \in I$, so $\mathbf{0}$ is in the intersection of every subspace $U_{i}$, whence the result follows.

Next, we show that $\bigcap_{i \in I} U_{i}$ is closed under vector addition. Let $\mathbf{x}, \mathbf{y} \in \bigcap_{i \in I} U_{i}$. Then $\mathbf{x} \in U_{i}$ for every $i \in I$. Likewise, $\mathbf{y} \in U_{i}$ for every $i \in I$, hence $\mathbf{x}, \mathbf{y} \in U_{i}$ for each $i \in I$. Now $\mathbf{x} + \mathbf{y} \in U_{i}$ for each $i \in I$, which simply means $\mathbf{x} + \mathbf{y} \in \bigcap_{i \in I} U_{i}$.

Finally, we show that $\bigcap_{i \in I} U_{i}$ is closed under scalar multiplication. Let $c$ be a scalar from $V$'s base field, and $\mathbf{x}$ a vector in $\bigcap_{i \in I} U_{i}$. Then, as before, $\mathbf{x} \in U_{i}$ for every $i \in I$, so $c\mathbf{x} \in U_{i}$ for every $i \in I$, and we obtain our desired result.

_Exercise 12_ 

**Remark**: The other direction in this problem turned out to be surprisingly hard for me at first to show directly. It was only when I drew a picture of two non-parallel lines going through the origin that I knew how to proceed using contradiction. The geometry of the situation was that I could pick a vector on one of the lines (not $\mathbf{0}$), and another non-$\mathbf{0}$ vector on the other line, and it's quite clear that the sum cannot be in the union of the two lines. I now realise that the argument can be cleaned up considerably if I prove the contrapositive instead, but I'll leave the argument as it is; I don't want to erase the evidence of my struggle.

Let $U_1, U_2$ be subspaces of $V$. We need to show that $U_1 \cup \ U_2$ is a subspace of $V$ if and only if $U_1 \subseteq U_2$ or $U_2 \subseteq U_1$. 

Without loss of generality, let $U_1 \neq U_2$ be subspaces of $V$. Again, without loss of generality, we can suppose $U_1 \subset U_2$. Then it is easy to see that $U_1 \cup U_2$ is a subspace. Indeed, $\mathbf{0} \in U_1 \cup U_2$ owing to the fact that $U_1$ and $U_2$ are subspaces.

Take $\mathbf{x}, \mathbf{y} \in U_1 \cup U_2$. There are a few cases to consider. In the case where $\mathbf{x}$ and $\mathbf{y}$ are in both $U_1$ and $U_2$, we clearly have $\mathbf{x} + \mathbf{y} \in U_1 \cup U_2$. Next, without loss of generality, we consider the case where $\mathbf{x} \in U_1$ and $\mathbf{y} \in U_2$  (exclusive case). Then since $U_1 \subset U_2$, we have $\mathbf{x} \in U_2$, so $\mathbf{x} + \mathbf{y} \in U_1 \cup U_2$.

Lastly we show closure under scalar multiplication. Let $a \in \mathbf{F}$ and $\mathbf{x} \in U_1 \cup U_2$. Without loss of generality, take $\mathbf{x}$ in $U_1$ but not in $U_2$. Again, since $U_1 \subset U_2$, we immediately obtain $a\mathbf{x} \in U_1 \subset U_2$, whence the result follows.

We now come to the hard direction. Assume $U_1 \cup U_2$ is a subspace. We are required to show that $U_1 \subseteq U_2$ or $U_2 \subseteq U_1$.

This turns out to be quite difficult to show directly, so we'll attempt a contradiction. Suppose $U_1 \not\subset U_2$ and $U_2 \not\subset U_1$. $U_1$ and $U_2$ cannot be disjoint, because $\mathbf{0}$ must be in both $U_1$ and $U_2$. Take $\mathbf{x} \in U_1$ and $\mathbf{y} \in U_2$, where $\mathbf{x}, \mathbf{y} \notin U_1 \cap U_2$. Then $\mathbf{x}, \mathbf{y} \in U_1 \cup U_2$, so $\mathbf{x} + \mathbf{y} \in U_1 \cup U_2$. This means either $\mathbf{x+y} \in U_1$ or $\mathbf{x+y} \in U_2$ (we're considering the exclusive case here, without loss of generality). If $\mathbf{x+y} \in U_1$, then $(\mathbf{x+y})+\mathbf{-x}=\mathbf{y} \in U_1$, which is a contradiction. If $\mathbf{x+y} \in U_2$, we're also doomed: $(\mathbf{x+y})+\mathbf{-y}=\mathbf{x} \in U_2$.

_Exercise 24_

**Remark**: I learned the fact that every function $f$ can be written as an even and an odd function uniquely while working through the first few chapters of Spivak's Calculus some time ago, so this isn't completely new. I doubt I would've hit upon the result if it weren't for Spivak's exercise...

The set of real-valued even functions forms a subspace, as well as the set of real-valued odd functions, as can be verified. 

The heart of the problem is to show that every function $f : \mathbf{R} \rightarrow \mathbf{R}$ can be written as the sum of an odd and an even function uniquely. Indeed, let $f$ be a function from the reals to the reals. Then the value of $f$ at $x$, $f(x)$, can be written as $f(x) = \frac{1}{2}[f(x)+f(-x)] + \frac{1}{2}[f(x)-f(-x)]$, where $\frac{1}{2}[f(x)+f(-x)]$ is even, and $\frac{1}{2}[f(x)-f(-x)]$ is odd.

To show uniqueness, suppose $f(x) = E(x) + O(x)$ and $f(x) = E'(x) + O'(x)$. Then $E(x)+O(x)=E'(x)+O'(x)$, which implies $E(x)-E'(x)=O'(x)-O(x)$. $E(x)-E'(x) = g(x)$ is even, and $O'(x)-O(x) = g(x)$ is odd. Hence $g(x)$ is both even and odd, from which we can conclude that $g(x) = 0$ for every $x$. Thus both sides are identically $0$, which concludes the proof.
