---
share: "true"
title: 广相笔记——第二章 爱因斯坦引力场方程
cover: https://cdn.jsdelivr.net/gh/LogicMoriaty/source/card1/img(14).webp
date: 2023-11-17
updated: 2023-11-17
categories: 广义相对论 笔记
tags:
  - 笔记
  - 广义相对论
top: 1
excerpt: 物质告诉时空如何弯曲，时空告诉物体如何运动。     ——惠勒
---
# 广义相对论的基本原理
## 基本原理
这一节主要说明了广义相对论的 3 个基本原理。

- **度规是引力场函数。** 有引力存在的时空是 4- 维黎曼时空流形，其度规张量是描述引力的场的函数，满足 Einstein 引力场方程。
- **广义协变性原理（广义相对性原理）**。物理规律具有广义协变性，即，在任意坐标系物理规律都具有相同的形式。物理规律对于一切参考系都是平权的。
- **等效原理**。物质运动规律满足惯性质量与引力质量相等的等效原理。


## 广相中的黎曼时空度规

平直时空度规
$$
ds^{2} = \eta _{\mu \nu}dx^{\mu} dx^{\nu}, \quad \mu,\nu = 0,1,2,3 \quad x^{0} = ct
$$
其中
$$
\eta _{\mu \nu} = \begin{bmatrix}
-1 &  0  & 0  & 0  \\
0  & 1  &  0 &  0 \\
0 &  0 & 1  & 0 \\
0  & 0  & 0  & 1
\end{bmatrix}, \quad \det(\eta _{\mu \nu}) = -1
$$

定义黎曼时空度规
$$
ds^{2} = g_{\mu \nu}dx^{\mu}dx^{\nu}
$$
因为黎曼流形和欧式空间在局部是同胚的，所以在无穷小时空局部范围内可以通过坐标变换将黎曼时空度规变为平直时空度规。
$$
\eta _{\mu \nu} = \frac{\partial x'^{\lambda}}{\partial x^{\mu}}  \frac{\partial x'^{\sigma}}{\partial x^{\nu}} g_{\lambda \sigma}
$$
黎曼时空中
$$
g = \det (g_{\mu \nu} )<0
$$

# 短程线
## 短程线方程

求短程线方程的主要思路就是，由对曲线的弧长取极值来求解短程线方程。

首先有一个曲线方程
$$
x^{\mu } = x^{\mu}(\sigma)
$$
线元为
$$
ds^{2} = g_{\mu \nu}dx^{\mu}dx^{\nu}
$$
定义曲线的切失
$$
\dot{x}^{\mu} = \frac{dx^{\mu}}{d\sigma}
$$
对于曲线上两点 $\sigma_{1}$ 和 $\sigma_{2}$ 之间的弧长为
$$
l = \int _{\sigma_{1}}^{\sigma_{2}} ds = \int _{\sigma_{1}}^{\sigma_{2}} \sqrt{ g_{\mu \nu}\dot{x}^{\mu }\dot{x}^{\nu } } \, d\sigma  
$$

利用变分法，令
$$
F(x, \dot{x}) = \sqrt{ g_{\mu \nu}d\dot{x}^{\mu}d\dot{x}^{\nu} }
$$
对弧长求极值，将 $F(x,\dot{x})$ 代入欧拉方程
$$
\frac{\partial F}{\partial x^{\mu }} - \frac{d}{d \sigma} \frac{\partial F}{\partial \dot{x}^{\mu}} = 0
$$
因为
$$\begin{aligned}
\frac{\partial F}{\partial x^{\mu}}& =-\:\frac{1}{2}\frac{1}{\sqrt{-g_{\alpha\beta}\dot{x}^{\alpha}\dot{x}^{\beta}}}\partial_{\mu}g_{\alpha\beta}\dot{x}^{\alpha}\dot{x}^{\beta}, && (2.21)  \\
\frac{\partial F}{\partial\dot{x}^{\mu}}& =-\frac{1}{2}\frac{1}{\sqrt{-g_{\alpha\beta}\dot{x}^{\alpha}\dot{x}^{\beta}}}\left(g_{\mu\beta}\dot{x}^{\beta}+g_{\alpha\mu}\dot{x}^{\alpha}\right), && (2.22)  \\
\frac{\mathrm{d}}{\mathrm{d}\sigma}\frac{\partial F}{\partial\dot{x}^{\mu}}& =-\frac{1}{2}\frac{1}{\frac{\mathrm{d}s}{\mathrm{d}\sigma}}\left(\partial_{\nu}g_{\mu\beta}\frac{\mathrm{d}x^{\nu}}{\mathrm{d}\sigma}\frac{\mathrm{d}x^{\beta}}{\mathrm{d}\sigma}+\partial_{\nu}g_{\alpha\mu}\frac{\mathrm{d}x^{\nu}}{\mathrm{d}\sigma}\frac{\mathrm{d}x^{\alpha}}{\mathrm{d}\sigma}+2g_{\alpha\mu}\frac{\mathrm{d}^{2}x^{\alpha}}{\mathrm{d}\sigma^{2}}\right)  \\
&+\frac12\left(g_{\mu\beta}\frac{\mathrm{d}x^{\beta}}{\mathrm{d}\sigma}+g_{\alpha\mu}\frac{\mathrm{d}x^{\alpha}}{\mathrm{d}\sigma}\right)\frac{\frac{\mathrm{d}^2s}{\mathrm{d}\sigma^2}}{\left(\frac{\mathrm{d}s}{\mathrm{d}\sigma}\right)^2},&& (2.23)  \\
\frac{\mathrm{d}s}{\mathrm{d}\sigma}&= \sqrt{-g_{\alpha\beta}\dot{x}^{\alpha}\dot{x}^{\beta}}, && (2.24) 
\end{aligned}$$


将上面的式子代入欧拉方程，并代入黎曼流形联络，即克氏符公式
$$
\Gamma _{\mu \nu}^{\lambda} = \frac{1}{2}g^{\lambda \sigma}(\partial _{\mu}g_{\sigma \nu} + \partial _{\nu}g_{\sigma \mu} - \partial _{\sigma}g_{\mu \nu})
$$
可得，
$$
\frac{\mathrm{d}^2x^\lambda}{\mathrm{d}\sigma^2}+\Gamma_{\mu\nu}^\lambda\frac{\mathrm{d}x^\mu}{\mathrm{d}\sigma}\frac{\mathrm{d}x^\nu}{\mathrm{d}\sigma}-\frac{\mathrm{d}x^\lambda}{\mathrm{d}\sigma}\frac{\frac{\mathrm{d}^2s}{\mathrm{d}\sigma^2}}{\frac{\mathrm{d}s}{\mathrm{d}\sigma}}=0.
$$

令 $\sigma = s$，得典型的短程线方程
$$
\frac{d^{2}x^{\lambda}}{ds^{2}} + \Gamma ^{\lambda}_{\mu \nu}  \frac{dx^{\mu}}{ds} \frac{dx^{\nu}}{ds} = 0
$$
## 矢量场的平行移动
如果一条曲线上的每个点的切矢都平行，则这条曲线在黎曼时空中被称为测地线，所以我们现在要计算黎曼时空中的测地线方程，就是从切矢是否平行角度出发。

首先我们先考虑在欧氏空间中的切矢平行的条件。在欧氏空间中，如果一个单位矢量场满足
$$
v^{\lambda}(x + dx) = v^{\lambda}(x)
$$
即
$$
d v^{\lambda}(x) = 0
$$
也就是方向在曲线上的每个点都相同，则这个矢量沿这条曲线平行移动。
设这条曲线的方程为 $x^{\mu} = x^{\mu}(x)$，则平行移动的条件为
$$
\frac{ \partial v^{\lambda} }{ \partial x^{\mu}}  \frac{d x^{\mu}}{ds}  = 0 
$$
根据广义协变性原理，将偏微商换为协变微商
$$
(\nabla _{\mu}v^{\lambda})\dot{x}^{\mu} = 0
$$
其中协变微商
$$
\nabla _{\mu}v^{\lambda} = \partial _{\mu}v^{\lambda} + \Gamma ^{\lambda}_{\mu \nu}v^{\nu }
$$
测地线这里我们想要知道的是切矢是否平行，所以将 $v^{\lambda}$ 换为切矢，平行条件为
$$
(\nabla _{\mu}\dot{x}^{\lambda})\dot{x}^{\mu} = 0
$$
所以代入并利用微分的莱布尼兹法则化简得，
$$
\frac{d u^{\lambda}}{ds} + \Gamma ^{\lambda}_{\mu \nu} u^{\mu}u^{\nu} = 0 
$$
这里的 $u = \dot{x}$。从这里我们看到测地线方程的形式与短程线方程的形式相同，所以我们就证明了黎曼时空中，短程线就是测地线，或者说测地线就是短程线。

# 度规的弱引力场和低速近似（牛顿近似）与牛顿第二定律

> 这节主要的目标其实就是要求出牛顿近似下的测地线方程，也就是找到广义相对论退化为经典力学的近似条件，牛顿近似下的测地线方程也就是经典力学中的牛顿第二定律。
## 弱引力场近似

**弱引力场近似**，其实也就是考虑黎曼度规是平直度规的小偏离，即
$$
g_{\mu \nu}= \eta _{\mu \nu}  + h_{\mu \nu}
$$
其中 $h_{\mu \nu}$ 也就是黎曼度规对于平直度规的偏离。

## 牛顿近似

**牛顿近似**，其实就是在上面弱引力场近似的基础上，再加上低速近似，用数学公式表达也就是
$$
\frac{v}{c}\ll 1,\quad  \lvert h_{\mu \nu} \rvert \ll 1 
$$
在这个条件下，线元可以表示为
$$
\mathrm{d}s^2=-c^2\mathrm{d}t^2\left[1-h_{00}\right]+\left[\left (\mathrm{d}x^1\right)^2+\left (\mathrm{d}x^2\right)^2+\left (\mathrm{d}x^3\right)^2\right].
$$
对比黎曼度规的线元
$$
\mathrm{d}s^2=g_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu=g_{ij}\mathrm{d}x^i\mathrm{d}x^j+g_{i0}\mathrm{d}x^i\mathrm{d}x^0+g_{0i}\mathrm{d}x^0\mathrm{d}x^i+g_{00}\mathrm{d}x^0\mathrm{d}x^0
$$
可以得到，
$$
g_{ij} = \delta _{ij},\quad g_{i0} = g_{0i} = 0,\quad g_{00} = -[1-h_{00}]
$$
$$
g ^{ij} = \delta ^{ij}, \quad g ^{0i} = g ^{i 0} =0, \quad g ^{00} = - \frac{1}{1-h_{00}}
$$
即
$$
[g_{\mu\nu}]=\begin{bmatrix}-(1-h_{00})&\:0\:0\:0\\0&1\:0\:0\\0&0\:1\:0\\0&0\:0\:1\end{bmatrix},\quad[g_{\mu\nu}]^{-1}=\begin{bmatrix}-\dfrac{1}{1-h_{00}}&\:0\:0\:0\\0&1\:0\:0\\0&0\:1\:0\\0&0\:0\:1\end{bmatrix}.
$$


因为当 $h_{00}$ 很小的时候， $-\frac1{1-h_{00}}=-(1+h_{00})$，所以 $g ^{00} = -(1+ h_{00})$。

>在知道了度规之后，为了得到我们最后的目标，牛顿近似下的测地线方程，我们就需要计算 3 个部分，联络，坐标的一阶导和坐标的二阶导。

---

代入计算黎曼联络 $\Gamma ^{\lambda}_{\mu \nu}$。这里的计算要分类讨论，先计算 $\lambda = 1,2,3$ 的情况，再计算 $\lambda = 0$ 的情况。

最终计算出来的非零元为
$$
\Gamma ^{i}_{00} = -\frac{1}{2}\partial _{i}h_{00}
$$
$$
\Gamma ^{0}_{0j} = -\frac{1}{2}(1 + h_{00})\partial _{j}h_{00}
$$
保留一阶小量，也就是当 $h_{00}\ll 1$ 时，
$$
\Gamma_{0i}^{0}=\Gamma_{i0}^{0}=-\frac{1}{2}\partial_{i}h_{00}.
$$
---

接下来，我们计算坐标的一阶导 $\frac{d x^{\mu}}{ds}$，我们在一开始的时候已经计算了牛顿近似下的线元
$$
\begin{aligned}
\mathrm{ds}^{2}& =-\left.c^2\mathrm{d}t^2\left(1-h_{00}\right)+\left[\left(\mathrm{d}x^1\right)^2+\left(\mathrm{d}x^2\right)^2+\left(\mathrm{d}x^3\right)^2\right]\right.   \\
&=-\left.c^2\mathrm{d}t^2\left\{\left(1-h_{00}\right)-\frac{1}{c^2}\left[\left(\frac{\mathrm{d}x^1}{\mathrm{d}t}\right)^2+\left(\frac{\mathrm{d}x^2}{\mathrm{d}t}\right)^2+\left(\frac{\mathrm{d}x^3}{\mathrm{d}t}\right)^2\right]\right\},\right. 
\end{aligned}
$$
再在牛顿近似下
$$
\mathrm{d}s^2=-c^2\mathrm{d}t^2\left(1-h_{00}\right).
$$
所以
$$
\frac{\mathrm{d}x^0}{\mathrm{d}s}=\frac{1}{\sqrt{1-h_{00}}},\quad\frac{\mathrm{d}x^i}{\mathrm{d}s}=\frac{1}{c}\frac{\mathrm{d}x^i}{\mathrm{d}t}\frac{1}{\sqrt{1-h_{00}}}.
$$
---
再计算坐标的二阶导 $\frac{d^{2} x^{\mu}}{ds^{2}}$，

最后的计算结果为
$$
\frac{\mathrm{d}^2x^i}{\mathrm{d}s^2}=\frac{1}{c^2}\frac{\mathrm{d}^2x^i}{\mathrm{d}t^2}\frac{1}{1-h_{00}}.
$$

---
## 牛顿近似下的测地线方程


将上面求得的三个部分代入到测地线方程中，则牛顿近似下测地线方程仅由
$$
\frac{\mathrm{d}^2x^i}{\mathrm{d}s^2}+\Gamma_{00}^i\frac{\mathrm{d}x^0}{\mathrm{d}s}\frac{\mathrm{d}x^0}{\mathrm{d}s}=0,
$$
即
$$
\begin{aligned}\frac{1}{c^2}\frac{1}{1-h_{00}}\frac{\mathrm{d}^2x^i}{\mathrm{d}t^2}+\Gamma_{00}^i\frac{1}{1-h_{00}}=0,\end{aligned}
$$
再进一步化简得
$$
\frac{d^{2} x^{i}}{dt^{2} } + c^{2} \Gamma ^{i}_{00}= 0 
$$
再代入上面求得的联络
$$
\frac{d^{2} x^{i}}{dt^{2} } = \frac{1}{2} c^{2} \partial _{i}h_{00}  
$$
令 
$$
\frac{1}{2 }c^{2} h_{00} = -\phi
$$
即
$$
h_{00} =-\frac{2\phi}{c^{2}}
$$
也就是
$$
g_{00} = -\left( 1 + \frac{2\phi}{c^{2}} \right)
$$
所以最终的牛顿近似下的测地线方程为
$$
\frac{d^{2} x^{i}}{dt^{2} } = - \partial _{i}\phi 
$$
因为根据**第一条基本原理度规是引力场函数**，度规是描述引力场的，所以 $\phi$ 也就是描述引力场的函数，所以当 $\phi$ 是牛顿引力势时，上面的测地线方程正好就是牛顿引力场中的牛顿第二定律方程。

>所以，广义相对论包含了牛顿第二定律，上式揭示了度规与引力势之间的关系。


# 爱因斯坦引力场方程
## 广义相对论的基本假设

可以说广义相对论有 3 个基本原理和 3 个基本假设。

广义相对论是建立在以下 3 条基本假设上的引力理论。

- **有引力场存在的时空是四维黎曼流形，即度规张量 $g_{\mu \nu}$ 是描述引力场的函数， $g_{\mu \nu}$ 共有 10 个分量**。
>至于为什么共有 10 个分量，后面的小节会进行说明。

- **产生引力场的物质源（这里除引力场以外）为物质的能量-动量张量 $T^{\mu \nu}$，能动张量是黎曼流形上的二阶对称张量**。
- **爱因斯坦引力场方程为**
$$
R^{ \mu \nu} - \frac{1}{2}g^{\mu \nu}R = \frac{8\pi G}{c^{4}}T^{\mu \nu}
$$
方程左边为**反映时空几何**的爱因斯坦张量，方程右边是**反映引力源物质**的能动张量。

爱因斯坦方程是 $g ^{\mu \nu}$ 的二阶非线性偏微分方程，是广义相对论的核心内容。

---
那么从爱因斯坦方程的这个形式中，我们能得到什么信息呢？

我们可以注意到这个方程中有 $g ^{\mu \nu}$，所以我们可以先试试乘上一个 $g_{\nu \lambda}$，将其化为 $\delta ^{\mu}_{\nu}$，并对其他张量进行指标缩并，得到
$$
R_{\nu}^{\mu}-\frac{1}{2}\delta_{\nu}^{\mu}R=\frac{8\pi G}{c^{4}}T_{\nu}^{\mu}.
$$

令 $\mu =\nu$，并爱因斯坦求和得
$$
\begin{align}
R - \frac{1}{2} 4R &= \frac{8\pi G }{c^{4}}T \\
R &= - \frac{8\pi G}{c^{4}}T
\end{align}
$$
所以再将 $R$ 带回爱因斯坦场方程可得
$$
R_{\nu}^{\mu}=\frac{8\pi G}{c^{4}}\left(T_{\nu}^{\mu}-\frac{1}{2}\delta_{\nu}^{\mu}T\right).
$$
再由比安基不等式可得
$$
\nabla_\mu G^{\mu\nu}=\nabla_\mu\left(R^{\mu\nu}-\frac{1}{2}g^{\mu\nu}R\right)=0,
$$
所以也就得到能动张量的协变散度为 0
$$
\nabla _{\mu}T^{\mu \nu}=0
$$
## 能动张量的协变散度为 0 的内涵

>上面我们求得了能动张量的协变散度为 0，那么这其中的内涵或者说物理意义是什么呢？

可以直接说明结论，**能动张量协变散度为 0 $\nabla _{\mu}T^{\mu \nu} = 0$ 与能量-动量守恒定律有关**。并且还隐含了物质运动的方程，也就是可以从能动张量协变散度为 0 推出质点运动的测地线方程。

能动张量
$$
T^{ \mu \nu} = \rho c^{2} u^{\mu}u^{\nu}
$$
其中， $\rho = m \delta ^{3}(x - x(s))$，$u^{\mu} = \frac{d  x^{\mu}}{ds}$。

因为质点的物质密度流为
$$
j^{\mu} = \rho u^{\mu}
$$
所以代入到方程 $\nabla _{\mu}T^{\mu \nu} = 0$，得
$$
c^2\nabla_\mu\left(j^\mu\right)u^\nu+j^\mu c^2\nabla_\mu\left(u^\nu\right)=0,
$$
如果物质密度流是守恒流，即
$$
\nabla _{\mu}j^{\mu } = 0
$$
代入到上式，便最终可化简出测地线方程，这里过程省略，具体过程可以看书，或者自己推导。

最终结论就是质点运动规律由测地线方程来描述。

## 牛顿近似下的静态引力场方程

>目前我们学到的广义相对论核心的两个物理方程，其实就是测地线方程和爱因斯坦场方程，我们前面已经计算了牛顿近似下的测地线方程，接下来，我们再来计算牛顿近似下的爱因斯坦场方程，来看看爱因斯坦场方程又对应经典中的什么结论。

**从静态的爱因斯坦场方程出发，考虑牛顿近似，推导泊松方程和牛顿的万有引力势**。这便是我们的目标和思路。

爱因斯坦场方程大致有 2 个部分，也就是 **Ricci 张量和能动张量**。

---

我们先考虑**能动张量**
$$
T^{\mu \nu} = \rho c^{2} u^{\mu }u^{\nu}
$$
因为这里是静态的，也就是引力源物质静止，四速度中的所有空间分量为 0，所以能动张量的所有空间相关分量均为 0，不为 0 的分量仅有
$$
T^{00}=\rho c^{2}u^{0}u^{0}=\rho c^{2}\frac{\mathrm{d}x^{0}}{\mathrm{d}s}\frac{\mathrm{d}x^{0}}{\mathrm{d}s},
$$
即
$$
T^{00}=\rho c^4\left(\frac{\mathrm{d}t}{\mathrm{d}s}\right)^2.
$$

---
$$
ds^{2} = g_{\mu \nu}dx^{\mu}dx^{\nu} 
$$
所以
$$
g_{\mu \nu} u^{\mu}u^{\nu} = -1
$$
所以
$$
g_{00}c^2\left(\frac{\mathrm{d}t}{\mathrm{d}s}\right)^2=-1,
$$
所以
$$
\left(\frac{\mathrm{d}t}{\mathrm{d}s}\right)^2=-\frac{1}{c^2}\frac{1}{g_{00}}.
$$
---
所以能动张量的不为 0 分量为
$$
T^{00}=-\rho c^{2}\frac{1}{g_{00}}.
$$
因为
$$
T_0^0=g_{0\lambda}T^{\lambda0}=g_{00}T^{00},
$$
所以
$$
T^{0}_{0} = -\rho c^{2}
$$

由这个，我们也可以推出
$$
R_0^0=\frac{8\pi G}{c^4}\left(T_0^0-\frac{1}{2}T\right),
$$
所以
$$
R_{0}^{0}=-\frac{4\pi G}{c^{2}}\rho.
$$

---
接下来，我们再来计算 **Ricci 张量**
$$
R_{\mu\nu}=\partial_{\lambda}\Gamma_{\nu\mu}^{\lambda}-\partial_{\nu}\Gamma_{\lambda\mu}^{\lambda}+\Gamma_{\lambda\alpha}^{\lambda}\Gamma_{\nu\mu}^{\alpha}-\Gamma_{\nu\alpha}^{\lambda}\Gamma_{\lambda\mu}^{\alpha},
$$
前面我们已经计算过，在牛顿近似下，联络不为 0 的分量
$$
\Gamma_{00}^{i}=\frac{1}{c^{2}}\partial_{i}\phi,\quad\Gamma_{0i}^{0}=\frac{1}{c^{2}}\partial_{i}\phi.
$$
所以在牛顿近似下，Ricci 张量的 $R^{0}_{0}$ 分量为
$$
R_{0}^{0}=g^{00}R_{00}=-\frac{1}{c^{2}}\Delta\phi,\quad\Delta=\partial_{i}\partial_{i}.
$$
---
综上所述，我们便推出了**泊松方程**
$$
\Delta \phi = 4\pi G\rho
$$
---
然后对于静止的点源，有
$$
\rho = M \delta ^{3}(r)
$$
又因为格林函数
$$
\Delta \frac{1}{r} = -4\pi \delta ^{3}(r)
$$
所以
$$
\phi  = - \frac{GM}{r}
$$
这样我们便推出了**牛顿的万有引力势**。

---

所以综上所述，广义相对论包含了牛顿第二定律和万有引力公式，并且度规是决定引力场的函数
$$
g_{00}=-\left(1+\frac{2\phi}{c^2}\right)=-\left(1-\frac{2GM}{rc^2}\right).
$$

# 爱因斯坦引力理论的作用量

>上一节主要是通过直接给出爱因斯坦场方程的假设，这一节主要是通过作用量变分来具体推导爱因斯坦引力场方程。







# 广义相对论中的坐标条件

爱因斯坦场方程共有 10 个方程， $g_{\mu \nu}$ 共有 10 个分量。

但是因为比安基等式天然成立，便消去了其中 4 个方程的独立性。
$$
\nabla_{\mu}(R^{\mu\nu}-\frac{1}{2}g^{\mu\nu}R)=0,
$$

也就是只有 6 个方程是独立的，所以我们如果要唯一地求出所有的 $g_{\mu \nu}$ ，就需要再引入 4 个附加条件。

>一般来说附加条件不是广义协变的，这些附加条件实际上是对坐标选择的任意性施加了某种限制，所以这 4 个附加条件在广义相对论中被称为**坐标条件**。

坐标条件可以有两种形式，
- **度规满足如下四个方程**
$$
f_\sigma\left(g^{\mu\nu},\partial_\lambda g^{\mu\nu}\right)=0,\quad\sigma=1,2,3,4
$$
- **直接给定度规中四个分量的具体形式**。

苏联物理学家 Fock 提出 Fock 坐标条件
$$
\partial _{\mu}(\sqrt{ -g } g ^{\mu \nu}) = 0
$$
又被称为协和坐标条件，是惯性系条件。


