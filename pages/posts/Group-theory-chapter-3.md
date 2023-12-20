---
share: "true"
title: 群论笔记——第三章 点群
cover: https://cdn.jsdelivr.net/gh/LogicMoriaty/source/card1/img(16).webp
date: 2023-12-19
updated: 2023-12-19
categories: 群论
tags:
  - 笔记
  - 群论
top: 1
---
# 实正交群 $O(3)$
## 实正交变换矩阵

对于 $R^{3}$ 空间中的矢量，**实正交变换前后，矢量的模长保持不变**。也就是 $(gx)^{T}(gx) = x^{T}x$，其中 $g$ 为实正交变换矩阵，$x$ 为矢量。所以

$$
g^{T}g = E  \leftrightarrow g ^{-1} = g
$$

两边同时取行列式可得

$$
\det (g^{T})\det(g) = (\det(g))^{2} = 1
$$

因此

$$
\det(g) =\pm 1
$$

>所以实正交变换矩阵主要有两个特点，一个是其与其自身的转置的乘积为单位矩阵，另一个是行列式为 $\pm 1$。

