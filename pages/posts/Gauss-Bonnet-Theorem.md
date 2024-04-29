---
share: "true"
title: 黑洞弱引力透镜偏转角计算方法——Gauss Bonnet Theorem
cover: https://cdn.jsdelivr.net/gh/LogicMoriaty/source/card1/img(23).webp
date: 2024-4-29
updated: 2024-4-29
categories: 黑洞
tags:
  - 黑洞
  - 引力透镜
top: 1
excerpt: 这节主要介绍计算旋转黑洞弱引力透镜偏转角的方法——Gauss-Bonnet定理
---

>这节主要介绍计算旋转黑洞弱引力透镜偏转角的方法——Gauss-Bonnet 定理。

在正式介绍 Gauss-Bonnet 定理之前，我们先了解一下多面体的欧拉示性数。

# 多面体的欧拉示性数

1750 年欧拉提出了多面体 $K$ 的拓扑不变量的概念，用欧拉示性数表示为
$$
\chi (K) = a_{0} - a_{1} + a_{2}
$$
其中， $a_{0}$ 为多面体的顶点数， $a_{1}$ 为棱数， $a_{2}$ 为面数。

For example,
- 四面体
$$
\begin{align}
a_{0} &= 4,\quad a_{1} = 6, \quad a_{2} = 4, \\
\chi &= 4 - 6 + 4 = 2 
\end{align}
$$
- 五面体
$$
\begin{align}
a_{0} &= 6, \quad a_{1} = 9, \quad a_{2} = 5, \\
\chi  &= 6 - 9 + 5 = 2
\end{align}
$$


# 二维闭曲面的欧拉示性数

从多面体的欧拉示性数进行推广，考虑二维闭曲面的示性数。二维闭曲面 $\Sigma$ 的欧拉示性数 $\chi(\Sigma)$ 由 Gauss-Bonnet 定理决定
$$
\chi(\Sigma) = \frac{1}{2\pi} \int _{\Sigma} K  dS, \quad K = - \frac{R_{1212}}{g} 
$$
其中 $R_{\lambda \sigma \mu \nu}$ 为 $\Sigma$ 上的曲率张量，$g$ 为度规 $g_{\mu \nu}$ 的行列式， $K$ 称为 $\Sigma$ 上的高斯曲率。

通过上式，可以计算出二维球面 $S^{2}$ 和二维环面 $T^{2}$ 的欧拉示性数分别为
$$
\chi(S^{2}) = 2, \quad \chi(T^{2}) = 0
$$
所以可以看到四面体、五面体与二维球面同胚。





