Span

Let $V$ be a vector space. Let $U$ be a subset of $V$. The \textbf{span} of $U$ is the smallest subspace which contains $U$. It is immediate from this definition that $\operatorname{span}(\emptyset) = \{0\}$. Furthermore, $\operatorname{span}(U)$ contains every possible linear combination of every list of vectors in $U$.

Let $W$ be the set of all possible linear combinations of any list of vectors in $U$. It can be checked that $W$ is a subspace, and $W$ contains $U$. Any subspace which contains all possible linear combinations of any list of vectors in $U$ must also contain $W$. Thus $W$ is the smallest subspace containing $U$.

We now have two equivalent definitions of the span of a set of vectors.

Linear Independence

Let $(v_1, v_2, \dots, v_m)$ be a list of vectors, and consider, $a_1 v_1 + \dots + a_m v_m$, where $a_1, \dots, a_m$ are arbitrary scalars. We further suppose that $a_1 = \dots = a_m = 0$ whenever $a_1 v_1 + \dots + a_m v_m = \mathbf{0}$. The list of vectors is said to be \textbf{linearly independent}. The representation of any vector by a linear combination of a linearly independent list of vectors must be unique.


A \textbf{linearly dependent} list of vectors is one which is not linearly independent. 

Examples

\item A nonzero vector is linearly independent.
\item Two vectors which are scalar multiples of each other are linearly dependent.
\item Any list of vectors which includes $\mathbf{0}$ must be linearly dependent.
\item Any list of vectors which contains at least one vector which is a linear combination of the others must be linearly dependent.


\begin{theorem}[Linear Dependence Lemma]

Let $v_1, \dots, v_m$ be linearly dependent. Then there exists a vector $v_i$ such that $v_i$ is in the span of its preceding vectors. Furthermore, the span of the remaining list after removing $v_i$ equals the span of the original list.
\end{theorem}

\begin{proof}
Since $v_1, \dots, v_m$ is linearly dependent, there exist scalars $a_1, \dots, a_m$, not all zero, such that $a_1 v_1 + \dots + a_m v_m = \mathbf{0}$. Let the last vector in the linear combination with a nonzero scalar coefficient be $v_i$. Then the proceeding vectors must have zero coefficients, so we can write $a_1 v_i + \dots + a_{i-1} v_{i-1} + a_i v_i = \mathbf{0}$. Then $v_i = \frac{a_1}{a_i} v_1 + \dots + \frac{a_{i-1}}{a_i} v_{i-1}$, which means that $v_i$ is a linear combination of the vectors $v_1, \dots, v_i$, or in other words, $v_i \in \operatorname{span}(v_1, \dots, v_{i-1})$.

\medskip
Next, we need to show that any vector in $\operatorname{span}(v_1, \dots, v_m)$ can be written as a linear combination of the list of vectors with $v_i$ removed. Indeed, given a vector $\mathbf{v} = a_1 v_1 + a_i v_i + \dots + v_m$, we can substitute the expression for $v_i$ obtained above and see that $\mathbf{v}$ is written as a linear combination of vectors in the list with $v_i$ absent. 
\end{proof}

\newpage

\begin{theorem}[Exchange Lemma]
Let $V$ be a finite dimensional vector space. Then the length of any independent list of vectors in $V$ must not exceed the length of any list of vectors which spans $V$.
\end{theorem}

\begin{proof}
Let $u_1, \dots, u_m$ be a linearly independent list in $V$, and $w_1, \dots, w_n$ be a list which spans $V$. We are required to show that $m \leq n$, and we do so by considering an exchange algorithm:

\begin{enumerate}
\item[Step 1.] Adjoin $u_1$ at the beginning of $w_1, \dots, w_n$. We get a new list $u_1, w_1, \dots, w_n$, which must be linearly dependent. Scan the list for a $w_i$ which is in the span of its preceding vectors. Delete the vector. The remaining list of length $n$ will still span $V$.
\item[Step m.] Adjoin $u_j$ after $u_{j-1}$ in the list obtained in Step $m-1$. We get a new list which must be linearly dependent. Scan the list for a $w_i$ which is in the span of its preceding vectors. Delete the vector. The remaining list of length $n$ will still span $V$.
\end{enumerate}

The algorithm terminates after we've exhausted our supply of $u_j$'s. Our algorithm ensures that we can delete at least $m$ $w_i$'s. Hence $m \leq n$.
\end{proof}

\section{Bases}

Let $V$ be a finite dimensional vector space. A \textbf{basis} of $V$  is a linearly independent spanning list which spans $V$.

\medskip
\noindent
Any vector in $V$ can be written in only one way with respect to a chosen basis of $V$.

\medskip
\noindent
Given any list in $V$ which spans the space, we can do a systematic search-and-kill process to reduce the list to a linearly independent list which still spans $V$. We do this by searching for a vector which is in the span of its preceding vectors, and deleting it. Continue killing vectors this way until there are no vectors which are in the span of their preceding vectors. In other words, we can always obtain a basis from a spanning list of vectors.

\medskip
\noindent
We can also extend a linearly independent list in $V$ to a basis of $V$. Let $u_1, \dots, u_m$ be a linearly independent list, and $b_1, \dots, b_n$ be a basis. Consider the list $v_1, \dots, v_m, b_1, \dots, b_n$. The new list must be linearly dependent. By applying the search-and-kill process mentioned above, some of the $b_j$'s get killed, but the $v_i$'s will remain unscathed, because they are linearly independent. After we are done, the final list will be a basis of $V$.

\begin{theorem}
Let $U$ be a subspace of a finite dimensional vector space $V$. Then there exists a subspace $W$ such that $V = U \oplus W$.
\end{theorem}

\begin{proof}
\end{proof}

\begin{theorem}[Basis length is invariant]
Let $B_1 = b_1, \dots, b_m$ and $B_2 = b'_1, \dots, b'_n$ be the bases of a finite dimensional vector space, $V$. Then $m=n$.
\end{theorem}

\begin{proof}
$B_1$ is linearly independent, and $B_2$ spans $V$. Thus $m \leq n$. $B_2$ is linearly independent, and $B_1$ spans $V$. Thus $n \leq m$. Hence $m=n$.
\end{proof}

\newpage
\section{Dimension}
The \textbf{dimension} of a vector space $V$ is the length of any basis of $V$. Basis is well-defined because of \textbf{Theorem 8.2}.

\medskip
\noindent
If $V$ is a finite-dimensional vector space, and $U$ is a subspace of $V$, then $\operatorname{dim}(U) \leq \operatorname{dim}(V)$. Equality holds if and only if $U=V$.

\medskip
\noindent
Every linearly independent list of vectors in $V$ with length $\operatorname{dim}(V)$ must be a basis of $V$.

\medskip
\noindent
Every spanning list of vectors in $V$ with length $\operatorname{dim}(V)$ must be a basis of $V$.


\medskip
\noindent
The notion of dimension gives an easy proof of the fact that $U$ is finite dimensional whenever $V$ is (here $U$ is a subspace of $V$). Indeed, the basis of $U$ is a linearly independent list in $V$. But its length must be finite, because there is a list of finite length which spans $V$.

\begin{theorem}
Let $V$ be a finite-dimensional vector space, and let $U_1$ and $U_2$ be it subspaces. Then 

$\operatorname{dim}(U_1 + U_2) = \operatorname{dim}(U_1) + \operatorname{dim}(U_2) - \operatorname{dim}(U_1 \cap U_2)$
\end{theorem}

\begin{proof}
\end{proof}

