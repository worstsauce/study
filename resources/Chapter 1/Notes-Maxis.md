# Notes by @MaxisJaisi

## Chapter 1: **Vector Spaces** 

### $\mathbf{R}^n$ and $\mathbf{C}^n$

A **field**, normally denoted by $\mathbf{F}$, is a structure with a couple of operations defined on it. The first operation is normally called addition: $\bigoplus : \mathbf{F} \times \mathbf{F} \to \mathbf{F}$. The second is usually called multiplication: $\bigotimes : \mathbf{F} \times \mathbf{F} \to \mathbf{F}$. We are not done yet, as we need to impose further restrictions on the operations to create a field:

1. $ \left(\mathbf{F}, \bigoplus \right)$ is an abelian group, with the unique identity $0$.

2. $ \left(\mathbf{F}-\{0\}, \bigotimes \right)$ is an abelian group, with the unique identity $1$.

3. Addition and multiplication are connected by the law of distributivity: $a\bigotimes \left(b \bigoplus c \right) = \left(a \bigotimes b \right) \bigoplus \left(a \bigoplus c \right)$

In Axler's book, fields are usually just $\mathbf{R}$ or $\mathbf{C}$, for concreteness. There are numerous consequences of the field properties which I'll take for granted. They can be found in many books.

### Definition of Vector Space

A vector space $\mathsf{V}$ is a structure with the operations $+ : \mathbf{F} \times \mathbf{F} \to \mathbf{F}$ (addition), and $\bigotimes : \mathbf{F} \times \mathsf{V} \to \mathsf{V}$ (left scalar multiplication). Again, we need to impose further restrictions:

1. $ \left(\mathsf{V}, + \right) $ is an abelian group with the unique identity element $\mathbf{0}$.

2. $\alpha (\beta \mathbf{x}) = (\alpha \beta) \mathbf{x}$ for $\alpha, \beta \in \mathbf{F}$ and $\mathbf{x} \in \mathsf{V}$ 

3. $1 \mathbf{x} = \mathbf{x}$ for $1 \in \mathbf{F}$ and $\mathbf{x} \in \mathsf{V}$

4. $(\alpha+\beta)\mathbf{x} = \alpha \mathbf{x} + \beta \mathbf{x}$ and $\alpha (\mathbf{x} + \mathbf{y}) = \alpha \mathbf{x} + \alpha \mathbf{y}$ for $\alpha, \beta \in \mathbf{F}$ and $\mathbf{x}, \mathbf{y} \in \mathsf{V}$.

**Consequences of the vector space axioms**

1. $0 \mathbf{x} = \alpha \mathbf{0} = \mathbf{0}$

2. $(-1) \mathbf{x} = -\mathbf{x}$

3. $\alpha \mathbf{x} = \mathbf{0} \implies \alpha = 0$ or $\mathbf{x} = \mathbf{0}$

### Subspaces

**Subspaces**

Let $\mathsf{U} \subseteq \mathsf{V}$ be a subspace. Then $\mathsf{U}$ satisfies the following properties:

1. $\mathbf{0} \in \mathsf{U}$

2. $\mathbf{u}, \mathbf{v} \in \mathsf{U} \implies \mathbf{u+v} \in \mathsf{U}$ 

3. $\alpha \in \mathbf{F}, \mathbf{x} \in \mathsf{U} \implies \alpha \mathbf{x} \in \mathsf{U}$

if and only if $\mathsf{U}$ is a subspace of $\mathsf{V}$. 

_Proof_: If $\mathsf{U}$ is a subspace, then (1), (2), and (3) hold by definition. Now suppose (1), (2), and (3) hold for $\mathsf{U}$. Then addition, and left scalar multiplication make sense. To show that $\mathsf{U}$ satisfies the other vector space axioms, realise that $\mathsf{U}$ is a subset of $\mathsf{V}$.

**Sum of vector subspaces**

Let $U_1$ and $U_2$ be subspaces of $V$. Construct the set $ W=  \{\ u_1 + u_2 \colon \forall u_1 \forall u_2(u_1 \in U_1 \land u_2 \in U_2)\, \}$. We call $W$ the sum of subspaces $U_1$ and $U_2$. We can check that $W$ is a subspace. Indeed, $W$ contains $\mathbf{0}$, and is closed under sums and scalar multiplication.

**Theorem**: [_Sum of subspaces is the smallest containing subspace_]

_Let $U_1$ and $U_2$ be subspaces of $V$. Then $W = U_1 + U_2$ is the smallest subspace containing $U_1$ and $U_2$._

What does it mean to say that $A$ is the smallest set containing $U_1$ and $U_2$? It means that if you give me any set $X$ containing $U_1$ and $U_2$, the set **must** contain $A$.

_Proof_: We first claim that $W$ contains $U_1$ and $U_2$. Indeed, every vector of the form $u_1 + 0$ and $0 + u_2$ are in $W$, and these vectors are just the vectors in $U_1$ and $U_2$.

Let $X$ be a subspace of $V$ containing $U_1$ and $U_2$. We must show that $X$ contains $W$. Take any $u_1 \in U_1$ and $u_2 \in U_2$. They must be in $X$. Furthermore, since $X$ is a subspace, $u_1 + u_2 \in X$. Thus $X$ contains $\{\ u_1 + u_2 : u_1 \in U_1 \text{and} \ u_2 \in U_2 \} = W$.

**Direct Sums**

If we impose the condition that every  $x \in W=U_1 + U_2$ can be written as the sum $u_1 + u_2$ in one way only, we get a new type of subspace, called the **direct sum** of $U_1$ and $U_2$. We write it as $W = U_1 \bigoplus U_2$


**Theorem**: _$W = U_1 \bigoplus U_2$ if and only if $\mathbf{u_1} + \mathbf{u_2} = \mathbf{0}$ implies $\mathbf{u_1}=\mathbf{0}$ and $\mathbf{u_2} = \mathbf{0}$._

_Proof_: Suppose $W = U_1 \bigoplus U_2$. One way to write $\mathbf{0} = \mathbf{u_1} + \mathbf{u_2}$ is to let $\mathbf{u_1}=\mathbf{0}$ and $\mathbf{u_2}=\mathbf{0}$, which, by definition, is the only way. 

Now suppose $\mathbf{u_1} + \mathbf{u_2} = \mathbf{0}$ implies $\mathbf{u_1}=\mathbf{0}$ and $\mathbf{u_2} = \mathbf{0}$. Let $\mathbf{x} \in W$. We are required to show that the representation $\mathbf{x} = \mathbf{u_1} + \mathbf{u_2}$ is unique. To this end, suppose $\mathbf{x} = \mathbf{v_1} + \mathbf{v_2}$ is another representation. Then $\mathbf{0} = (\mathbf{u_1} - \mathbf{v_1}) + (\mathbf{u_2} - \mathbf{v_2})$, which implies $\mathbf{u_1} = \mathbf{v_1}$ and $\mathbf{u_2} = \mathbf{v_2}$.

**Theorem**: _$W = U_1 \bigoplus U_2$ if and only if $U_1 \cap U_2 = \{\mathbf{0} \}$._


_Proof_: Suppose $W = U_1 \bigoplus U_2$. We need to show $U_1 \cap U_2 = \{\mathbf{0} \}$. Consider $\mathbf{x} \in U_1 \cap U_2$. We need to show that $\mathbf{x} = \mathbf{0}$. To this end we note that $\mathbf{-x} \in U_2$. Thus $\mathbf{0} = \mathbf{x}+(\mathbf{-x})$. But we're considering the direct sum of $U_1$ and $U_2$, so $\mathbf{x} = \mathbf{0}$. 

Alternatively, just observe that $\mathbf{x} = \mathbf{x} + \mathbf{0}$ and $\mathbf{x} = \mathbf{0} + \mathbf{x}$, where $\mathbf{x} \in U_1$ in the first equality and $\mathbf{x} \in U_2$ in the second equality. But there is only a single way to write $\mathbf{x}$ as a sum of two vectors from $U_1$ and $U_2$, which forces $\mathbf{x} = \mathbf{0}$.

Now suppose $U_1 \cap U_2 = \{\mathbf{0} \}$, and consider $\mathbf{u_1} \in U_1$ and $\mathbf{u_2} \in U_2$. We need to show that $\mathbf{0} = \mathbf{u_1} + \mathbf{u_2}$ implies $\mathbf{u_1} =\mathbf{0}, \mathbf{u_2}=\mathbf{0}$. Indeed, $\mathbf{0} = \mathbf{u_1} + \mathbf{u_2}$ implies $\mathbf{u_1} = \mathbf{-u_2}$, and since $\mathbf{u_2} \in U_2$, $\mathbf{-u_2} \in U_2$, so $\mathbf{u_1} \in U_2$, which implies that $\mathbf{u_1} \in U_1 \cap U_2$. Thus $\mathbf{u_1} = \mathbf{0} = \mathbf{u_2}$.
