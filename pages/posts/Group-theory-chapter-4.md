---
share: "true"
title: 群论笔记——第四章 李群与李代数
cover: https://cdn.jsdelivr.net/gh/LogicMoriaty/source/card1/img(1).webp
date: 2023-10-11
updated: 2023-10-11
categories: 群论
tags:
  - 笔记
  - 群论
top: 1
---
# 李群的定义和线性表示
## 李群的定义
::: note **李群**
李群 $G$ 是一种特殊的**连续群**，群元 $g$ 可以用 $r$ 个独立实参数 $\alpha \equiv (\alpha_{1}, \alpha_{2},\dots,\alpha _{r})$ 来标记： $g(\alpha)\equiv g(\alpha_{1}, \alpha_{2},\dots,\alpha _{r})$。
:::

参数 $\alpha$ 可以在有限或无限范围内连续变化， $\alpha$ 的所有取值构成一个参数空间，称为 **群参数空间**。

如果 $g(\alpha)$ 满足以下 5 个条件，则称群 $G = \{ g(\alpha) \}$ 为 $r$ 阶李群。
1. **封闭性**：对于任意给定的参数 $\alpha$ 和 $\beta$，总可以在群参数空间中找到 $\gamma$，使得 $g (\gamma) = g(\alpha)g(\beta)$，参数 $\gamma$ 为实参数 $\alpha, \beta$ 的**实参数**
$$
\gamma= f(\alpha, \beta)
$$
即 $\gamma_{i} = f_{i}(\alpha_{1},\dots,\alpha _{r};\beta_{1},\dots,\beta _{r})$，称为**李群的结构函数**。
   
2. **结合律**：$(g (\alpha) g (\beta)) g (\gamma) = g(\alpha)(g(\beta)g(\gamma))$，即 $f (f (\alpha, \beta),\gamma) = f(\alpha , f(\beta, \gamma))$
   
   
3. **存在恒元 $g(\alpha_{0})$**：群参数空间中存在参数 $\alpha_{0}$，使得对任意群参数 $\alpha$ 都有
   $$
g(\alpha) = g(\alpha_{0})g(\alpha) = g(\alpha)g(\alpha_{0})
$$
也即
$$
\alpha = f(\alpha_{0}, \alpha) = f(\alpha, \alpha_{0})
$$

4. **存在逆元**：对于任意群参数 $\alpha$, 存在群参数 $\bar{\alpha}$，使得：
   $$
g(\alpha)g(\bar{\alpha}) = g(\bar{\alpha})g(\alpha) = g(\alpha_{0})
$$
$$
\alpha_{0} = f(\alpha,\bar{\alpha}) = f(\bar{\alpha}, \alpha)
$$
5. **结构函数 $\gamma = f(\alpha,\beta)$ 是解析函数**.

注：
- 通常我们选择 $\alpha_{0} = 0$ 作为恒元对应的群参数的取值，即：$(\alpha_{01}, \alpha_{02},\dots,\alpha _{0r} ) = (0,0,\dots,0)$。
- 若 $\alpha$ 取值范围有界，则称李群 $G$ 为**紧致李群**。这里要求所有参数 $\alpha _{k}(k = 1,2,\dots,r)$ 的取值范围都有界。例：$SO(3)$ 群为 3 阶紧致李群，n 维平移群为 n 阶非紧致李群。
- **在上述描述中，所有的希腊字母代表的参数事实上式一组参数**。
- **当 $\alpha, \beta$ 是小量时， $f (\alpha + \beta) = \alpha +\beta$。**
- **当 $\alpha$ 是小量时，  $\bar{\alpha} = -\alpha$，其中 $g (\bar{\alpha}) = g^{-1}(\alpha)$。**
- **连通性**。一个李群如果具有如下性质，则称为单连通的：任意群元都能连续的变到恒元。用群参数的语言来描述则为：任意群元所对应的群参数都能连续地经过群参数的允许区域变到零。

---
## $n$ 维空间中带 $r$ 个实参数的线性坐标变换
考虑 $n$ 维空间中带 $r$ 个实参数的线性坐标变换，变换后的坐标为变换前坐标以及变换参数的函数，即
$$
x_{i}' = \varphi _{i}(x_{1},x_{2},\dots,x_{n};\alpha_{1},\alpha _{2},\dots,\alpha _{r}) \quad (i = 1,2,\dots,n)
$$
或
$$
x_{i}' = \varphi _{i}(x;\alpha)
$$
其中 $\alpha$ 是群 $G$ 的独立参数，表示成矩阵的形式：
$$
\begin{bmatrix}
x_{1}' \\
\vdots \\
x_{n}'
\end{bmatrix} = g(\alpha)\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}
$$

满足前面 5 个条件的 $g(\alpha)$ 构成 $r$ 阶李群 $G = \{ g(\alpha) \}$

---
## 李群的线性表示
李群的线性表示是一种将群元映射到表示矩阵的同态关系：
$$
G = \{ g(\alpha) \} \to D(G) = \{ D(g_{\alpha})\equiv D(\alpha) \}
$$
其中 $D(\alpha)$ 称为 $\alpha$ 的**函数矩阵**，满足李群的法则：
$$
\begin{align}
D(\alpha)D(\beta) &= D(\gamma), \gamma =f(\alpha,\beta) \\
D(\alpha_{0})D(\alpha) &= ED(\alpha) = D(\alpha) \\
D(\alpha)D(\bar{\alpha}) &= D(\alpha_{0}) = E, D(\bar{\alpha})= D^{-1}(\alpha)
\end{align}
$$

另外我们还要求 **$D(\alpha)$ 是 2 阶光滑的**。

::: warning
需要注意的是，**结构函数并不依赖于表示**，只要两个群同构，它们的结构函数就应该是一致的，换言之，李群的结构函数仅由李群的结构决定。
:::

---
## 李群的线性表示的生成元

假设在恒元附近 （$\alpha_{0}$ 附近）， $\alpha$ 与恒元附近的群元的表示矩阵存在**一一对应关系**，则可以将 $D(\alpha)$ 在 $\alpha_{0}$ 附近展开：
$$
D(\alpha)=D(\alpha_{0})+\left.\frac{\partial D(\alpha)}{\partial\alpha_{k}}\right|_{\alpha=\alpha_{0}}(\alpha_{k}-\alpha_{0k})=E+(\alpha_{k}-\alpha_{0k})I_{k}
$$
定义 $I_{k} = \left.\frac{\partial D (\alpha)}{\partial \alpha _{k}}\right|_{\alpha = \alpha_{0}}$ 为李群的线性表示的**生成元**。

为简单起见，可以令 $\alpha_{0} = 0$，则上式简化为：
$$
D(\alpha) = E +  \left.\frac{\partial D (\alpha)}{\partial \alpha _{k}}\right|_{\alpha = 0} \alpha _{k} = E + \alpha _{k}I_{k}
$$
为了与物理联系起来，在物理学的研究中通常引入 $\tilde{I}_{k}= iI_{k}$，则
$$
D(\alpha) = E - i \alpha _{k}\tilde{I}_{k}
$$

---

## 生成元的线性无关性

::: note 生成元的线性无关性
**$r$ 阶李群的生成元是线性无关的。
:::

---
## 几个例子
### $SO(2)$ 群

$SO(2)$ 群只有一个独立的群参数，所以是**一阶李群**。
表示矩阵为：
$$
D(\omega) = \begin{bmatrix}
\cos \omega & -\sin \omega \\
\sin \omega & \cos \omega 
\end{bmatrix} \quad \omega \in [0, 2\pi]
$$
因为群参数 $\omega$ 是有界的，所以 $SO(2)$ 群是 **紧致**的。

当 $\omega = 0$ 时，  $D (0) = E$，因此 $\omega_{0} = 0$ 是恒元对应的群参数的取值，根据生成元的定义：
$$
\left.\left.I=\left.\frac{\partial D(\omega)}{\partial\omega}\right|_{\omega=0}=\left.\left[\begin{array}{cc}-\sin\omega&-\cos\omega\\\cos\omega&-\sin\omega\end{array}\right.\right.\right]\right|_{\omega=0}=\left[\begin{array}{cc}0&-1\\1&0\end{array}\right]
$$


### $GL(2, R)$ 群：2 维空间实线性变换群
表示矩阵为：
$$
D(\alpha) = \begin{bmatrix}
\alpha_{1} & \alpha_{2} \\
\alpha_{3} & \alpha_{4} 
\end{bmatrix}, \quad \det D(\alpha)\neq 0
$$
在计算生成元之前，先要确定恒元对应的群参数 $\alpha_{0}$ 的取值， $GL(2,R)$ 群有四个独立的群参数，恒元是二阶的单位矩阵，所以相应地： $\alpha_{0} = (\alpha _{01},\alpha _{02}, \alpha _{03}, \alpha _{04}) = (1, 0 ,0, 1)$。

根据生成元的定义
$$
I_k=\left.\frac{\partial D(\alpha)}{\partial\alpha_k}\right|_{\alpha=\alpha_0}
$$
有
$$
\begin{align}
\left.I_1=\left.\frac{\partial D(\alpha)}{\partial\alpha_1}\right|_{\alpha=\alpha_0}=\left[\begin{array}{cc}1&0\\0&0\end{array}\right.\right]\left|\begin{array}{c}\alpha_1=1\\\alpha_2=0\\\alpha_3=0\\\alpha_4=1\end{array}\right.=\left[\begin{array}{cc}1&0\\0&0\end{array}\right] \\
\left.I_2=\left.\frac{\partial D(\alpha)}{\partial\alpha_2}\right|_{\alpha=\alpha_0}=\left[\begin{array}{cc}0&1\\0&0\end{array}\right.\right]\left|\begin{array}{c}\alpha_1=1\\\alpha_2=0\\\alpha_3=0\\\alpha_4=1\end{array}\right.=\left[\begin{array}{cc}0&1\\0&0\end{array}\right] \\
\left.I_3=\left.\frac{\partial D(\alpha)}{\partial\alpha_3}\right|_{\alpha=\alpha_0}=\left[\begin{array}{cc}0&0\\1&0\end{array}\right.\right]\left|\begin{array}{c}\alpha_1=1\\\alpha_2=0\\\alpha_3=0\\\alpha_4=1\end{array}\right.=\left[\begin{array}{cc}0&0\\1&0\end{array}\right] \\
\left.I_4=\left.\frac{\partial D(\alpha)}{\partial\alpha_4}\right|_{\alpha=\alpha_0}=\left[\begin{array}{cc}0&0\\0&1\end{array}\right.\right]\left|\begin{array}{c}\alpha_1=1\\\alpha_2=0\\\alpha_3=0\\\alpha_4=1\end{array}\right.=\left[\begin{array}{cc}0&0\\0&1\end{array}\right]
\end{align}
$$

### $GL(n, R)$ 群： $n$ 维空间实线性变换群



### 二维实特殊线性变换群： $SL(2, R)$ 群（**3 阶非紧致李群**）



###  $SO(3)$ 群（**3 阶紧致李群**）


### 二维特殊幺正变换群： $SU(2)$ 群（**3 阶紧致李群**）


## 有限群元的生成


## $SO(3)$ 群的欧拉角 $(\alpha, \beta, \gamma)$ （了解）


