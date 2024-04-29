---
share: "true"
title: 量子力学复习
cover: https://cdn.jsdelivr.net/gh/LogicMoriaty/source/card1/img(22).webp
date: 2024-4-15
updated: 2024-4-15
categories: 复习
tags:
  - 量子力学
  - 复习
top: 1
---

# 量子力学发展早期的经典实验和假说

## 光的波粒二象性

- 黑体辐射实验——普朗克的能量量子假说
- 光电效应实验——爱因斯坦的光量子假说
- 康普顿散射实验——证实了光子的能量和动量公式的正确性，证实了在微观基元过程中，能量守恒定律和动量守恒定律成立，证明了相对论力学是正确的。
- 粒子-反粒子对的湮灭和产生

## 微观物质的波粒二象性
- 原子的线状光谱与玻尔的氢原子模型假说
- 德布罗意的物质波假说——单电子衍射实验
- 戴维逊-革末实验
- 玻尔的互补原理与单电子双缝干涉实验
 

# 基本概念
## 五大公设

::: tip 状态公设（波函数公设）
微观粒子的状态由归一化波函数 $\Psi(\mathbf{r},t)$ 描述，其模方 $\lvert \Psi (\mathbf{r}, t) \rvert ^{2}$ 表示 $t$ 时刻该粒子在空间的概率密度分布。
:::

::: tip 算符公设
微观粒子的物理量由线性厄米算符描述，坐标算符 $\hat{r} = \mathbf{r}$，动量算符 $\hat{p} = -i \hbar \frac{d}{dr}$。


物理量 $\hat{O}$ 在状态 $\Psi(\hat{r},t)$ 的平均值 $\overline{O} = \int \Psi ^{*} (\mathbf{r},t) \hat{O}\Psi(\mathbf{r},t) d^{3}r$
:::

::: tip 测量公设
对处于状态 $\Psi(\mathbf{r},t)$ 的微观粒子的力学量 $\hat{A}$ 进行测量，测量值为其本征值 $a_{n}$，其中 $\hat{A}\psi _{n}(\mathbf{r}) = a_{n}\psi _{n}(\mathbf{r}),(n = 1, 2, \dots)$。

每个本征值 $a_{n}$ 出现的概率为 $\lvert a_{n} \rvert^{2}$，其中 $\Psi (\mathbf{r}, t) = \sum_{n}c_{n}\psi _{n}(\mathbf{r})$ 和 $c_{n} = \int \psi _{n}^{*}(\mathbf{r})\Psi(\mathbf{r},t)  d^{3}\mathbf{r}$。
:::

::: tip 动力学公设
微观粒子状态 $\Psi(\mathbf{r},t)$ 的变化率服从薛定谔方程
$$
i \hbar \frac{\partial \Psi(\mathbf{r},t)}{\partial t} = \hat{H}\Psi(\mathbf{r},t), \quad \hat{H} = - \frac{\hbar^{2}}{2m}\nabla^{2} + V(\mathbf{r})
$$
:::

::: tip 全同性公设
 微观全同粒子根据其自旋量子数为 $\frac{1}{2}$ 的奇数和偶数倍分为费米子和玻色子，费米子波函数服从交换反对称性，玻色子波函数服从交换对称性。
:::

## 量子力学正统解释

::: tip 玻尔的互补原理
对微观系统的完备描述必须引入波动性与粒子性两种相互依赖又互相排斥的属性，二者缺一不可，但却无法同时在一个实验中展现。
:::

::: tip 海森堡的不确定关系
若力学量 $\hat{A}$ 和 $\hat{B}$ 满足 $[\hat{A}, \hat{B}] = i\hat{C}$，则反映在任意状态 $\Psi(\mathbf{r},t)$ 时 $\hat{A}$ 和 $\hat{B}$ 不确定度的量 $\Delta A = \sqrt{ \overline{\hat{A}^{2}} - \overline{\hat{A}}^{2} }$ 和 $\Delta B = \sqrt{ \overline{\hat{B}^{2}} - \overline{\hat{B}}^{2} }$ 满足
$$
\Delta A \Delta B \geq \frac{\lvert \overline{\hat{C}} \rvert }{2}
$$
其中 $\overline{\hat{O}} = \int \Psi ^{*}(\mathbf{r},t)\hat{O}\Psi(\mathbf{r},t) d^{3}\mathbf{r}$。
:::

::: tip 玻恩的概率解释（波函数的统计诠释）
微观粒子处于归一化波函数 $\Psi(\mathbf{r},t)$ 描述的状态，则 $t$ 时刻在 $\mathbf{r}$ 处 $d^{3}\mathbf{r}$ 体积元内发现该粒子的概率为
$$
dP(\mathbf{r}) = \lvert \Psi(\mathbf{r},t) \rvert^{2}d^{3}\mathbf{r} 
$$
:::

::: tip 测量导致的状态塌缩
在状态 $\Psi(\mathbf{r},t)$ 对力学量 $\hat{A}$ 测量，测量值一定为 $\hat{A}$ 的某一本征值，若得到本征值 $a _{m}$，则微观粒子的状态将由 $\Psi(\mathbf{r},t)$ 瞬时地坍缩到 $a_{m}$ 的本征态 $\psi _{m}(\mathbf{r})$。
:::


## 经典方程

### 克莱因-戈登方程
按照相对论力学，质量为 $m_{0}$ 的粒子自由运动时，能量-动量关系为
$$
E^{2} = c^{2} \mathbf{}{p}^{2} +m_{0}^{2} c^{4}
$$
因此，相对论波动方程为
$$
(c^{2} \hat{p}^{2} + m_{0}^{2}c^{4} - \hat{E}^{2}) \psi =0
$$
克莱因-戈登方程为
$$
\nabla^{2}\psi - \frac{1}{c^{2}} \frac{\partial^{2} }{\partial t^{2}}\psi - \frac{m_{0}^{2}c^{2}}{\hbar^{2}}\psi = 0
$$
这个方程比电磁波的波动方程多了一个质量项，不能保证粒子数守恒，可以描述自旋为 $0$ 的粒子（玻色子，例如 $\pi ^{0}$ 介子）的运动。
# 经典问题

### 由薛定谔方程推导流守恒方程

### 粒子的一维自由运动

## 一维平底势阱中的粒子

### 一维无限深平底势阱

### 一维有限深平底势阱

### $\delta$ 势阱

## 一维谐振子

## 势垒贯穿

