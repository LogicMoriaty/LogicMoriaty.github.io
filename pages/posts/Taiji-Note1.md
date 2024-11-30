---
share: "true"
title: Note for Lensed Gravitational Waves
cover: https://cdn.jsdelivr.net/gh/LogicMoriaty/source/card1/img(25).webp
date: 2024-11-30
updated: 2024-11-30
categories: Taiji
tags:
  - Taiji
top: 1
excerpt: 
---
# Introduction

Why we need to study the gravitational lensing?

Gravitational lensing has a wide range of applications in the study of cosmology, the large scale structure, exoplanets, dark matter, and so on. 


# Lensing effect

The gravitationally lensed waveforms are related to the unlensed waveforms through
$$
\tilde{h}_{+,\times}^{L}(f) = F(f) \tilde{h}_{+,\times}(f)
$$
where the multiplicative, complex-valued amplification factor $F(f)$ [87] is given by the diffraction integral [57,88,89]
$$
F(f) = \frac{f(1+z_{L})}{i} \frac{d_{L}d_{S}}{d_{LS}}\int d^{2} x e^{i 2\pi f (1+z_{L})\tau(x)} 
$$
Where $x$ are the angular coordinates that paramatrize the two-dimensional lens plane, $d_{L}$, $d_{S}$ and $d_{LS}$ are the angular diameter distances to lens at redshift $z_{L}$, that to the source at the redshift $z_{S}$, and that between the lens and the source, respectively.

The ray travel time $\tau(x)$ is given by the sum of the geometrical delay and the gravitational Shapiro delay,
$$
\tau(x) = \frac{d_{L}d_{S}}{cd_{LS}}\left( \frac{1}{2} \lvert x-y \rvert ^{2} - \phi(x) + \phi _{m}(y) \right)
$$
Where $y$ is the dimensionless source position. $\phi(x)$ is the lensing potential. $\phi _{m}(x)$ is the phase modulation (相位调制) that makes the minimum value of the time delay zero.

We rewrite the amplification factor $F(f)$ in terms of the dimensionless quantity
$$
\omega = 2 \pi f (1 + z_{L}) \frac{d_{S}}{d_{L}d_{LS}} 
$$
Where $\xi$ is the normalization constant of the length in the lens plane.

The diffraction integral needs to be performed over the entire lensing plane. This integral is conditionally convergent because the integrand is a highly oscillatory phase factor of unity absolute value.

[57] L. Dai, S.-S. Li, B. Zackay, S. Mao, and Y. Lu, Phys. Rev. D 98, 104029 (2018).
[87] The readers should not confuse the lensing amplification factor $F(f)$ with the detector antenna pattern functions $F_{\alpha}^{+}(t)$ and $F_{\alpha}^{-}(t)$.
[88] J. Ehlers and P. Schneider, in Proceedings of the 13th Conference on General Relativity and Gravitation (GR-13) (1993), pp. 21–40, https://inspirehep.net/literature/1624221.
[89] D. Sun and X. Fan, arXiv: 1911.08268.

## Asymptotic expansion
Direct integration of the diffraction integral is well known to be difficult and will typically take a prohibitive amount of time to achieve the desired precision.

In order to calculate $F(f)$ more efficiently, we use the asymptotic expansion (渐进展开) method. 

For any smoothly varying function $f(z)$ multiplied by a fast oscillating phase factor, the following integral can be reexpressed as
$$
\int ^{\infty}_{0}  dz e^{i\omega z }f(z) = \int ^{b}_{0} dz e^{i\omega z} f(z) + e^{i\omega b} \sum_{n=1}^{\infty} \frac{(-1)^{n}}{(i\omega)^{n}} \frac{\partial ^{n-1}f}{\partial z^{n-1}} \Big|_{z = b}   
$$
Reference [83] suggests that truncating the infinites series at $n=7$ achieves sufficient accuracy.

## Amplification factor

In the low frequency regime, defined by $\omega \leq 10$, wave diffraction causes amplitude and phase distortions in the complex number $F(f)$. In this wave diffraction regime, we compute $F(f)$ by evaluating the diffraction integral using the asymptotic expansion method explained in the previous paragraph.

In the intermediate and high frequency regime, defined by $\omega >10$, the result is approximated by geometric optics, which predicts that the overall amplification factor is the sum of the amplification factor of all geometric images $j= 1,2,\dots$ . It has the following expression [88-91]
$$
F_{\text{geo}}(\omega) = \sum_{j} \lvert \mu _{j} \rvert ^{1/2}e^{i\left( \omega \tau _{j} - \frac{\pi}{2} n_{j} \right)}
$$
Where the magnification factor of the $j$ -th geometric image is given by
$$
\mu _{j} = \left[   \det \left( I - \frac{\partial^{2} \phi(x_{j})}{\partial x \partial x} \right)  \right]^{-1}
$$
Where $I$ is the $2\times 2$ identity matrix, and $\partial^{2}\phi /  \partial x \partial x$ denotes the $2 \times 2$ Hessian matrix of the lensing potential $\phi(x)$. We define $\tau _{j} = \tau(x_{j})$ to be the total light travel time along the ray trajectory corresponding to the $j$ -th image and set $n_{j} = 0,1,2$ depending on if the position of the $j$ -th image $x_{j}$ is a minimum, saddle (鞍点), or maximum point of $\tau(x)$, respectively [90-92].

$F_{\text{geo}}$ is not an extremely accurate approximation of the exact amplification factor in the intermediate to high frequency regime. Consequently, corrections need to be introduced to improve accuracy.

In order to better match the amplification factor in geometrical optics approximation with the exact value, we include the postgeometrical optics correction $\delta F$ [84,85], which is the sum of terms for correction to the geometric magnification of images $\delta F_{m}$ and an additional contribution $\delta F_{c}$ from the diffracted image that arises at the cuspy lens center. Including the postgeometric optics correction beyond the geometrical optics limit $F$ can be rewritten as
$$
F(\omega) = \sum_{j} \lvert \mu _{j} \rvert ^{\frac{1}{2}\left( 1+ \frac{i}{\omega}\Delta _{j} \right)}e^{i (\omega \tau _{j} - \frac{\pi}{2}n_{j})}
$$
Where 
$$
\Delta _{j} = \frac{1}{16} \left[  \frac{1}{2 \alpha^{2}_{j}} \psi _{j}^{(4)} + \frac{5}{12\alpha _{j}^{3}}\psi _{j}^{(3)2}  + \frac{1}{\alpha _{j}^{2}}\frac{\psi _{j}^{(3)}}{\lvert x_{j} \rvert } + \frac{\alpha _{j}- \beta _{j}}{\alpha _{j}\beta _{j}} \frac{1}{\lvert x_{j} \rvert ^{2}} \right]
$$
With the coefficients defined as
$$
\alpha _{j} = \frac{1}{2} \left( 1 - \frac{d^{2} \psi(\lvert x_{j} \rvert )}{dx^{2}} \right), \quad \beta _{j} = \frac{1}{2} \left( 1 - \frac{1}{\lvert x_{j} \rvert } \frac{d\psi (\lvert x_{j} \rvert )}{dx} \right)
$$
The second term in Eq. (12) is the correction to the magnification factor of the geometric image,
$$
\delta F_{m}(\omega) = \frac{i}{\omega} \sum_{j} \Delta _{j} \lvert \mu _{j} \rvert ^{\frac{1}{2}} e^{i(\omega \tau _{j}- \frac{\pi}{2} n_{j})}
$$
The correction term $\delta F_{c}$ arises from the central density cusp of the lens. Different lens models have different $\delta F_{c}$.

# Lensing model

- The point mass lens is the simplest lensing model. 
- The SIS model lens represents the early type galaxies.
- The NFW lens is suitable for the lensing models of the cold dark matter halos.

## Point mass lens

The point mass lens has all of its mass concentrated at one point.

Its mass identity is described by [84,93]
$$
\rho (\mathrm{r}) = M_{L}\delta ^{3}(\mathrm{r})
$$
Where $M_{L}$ is the lens mass. 

Then $\xi$ can be chosen as the Einstein radius $\xi = r_{E} = \sqrt{ 4 M_{L} d_{LS} d_{L} / d_{S} }$. The dimensionless lensing potential is $\phi (\mathrm{x}) = \ln \lvert \mathrm{x} \rvert$.

The multiplicative factor $F(f)$ of the point mass lens is [2]
$$
F(\omega) = \exp \left[  \frac{\pi \omega}{4} + \frac{i\omega}{2} \left( \ln \frac{\omega}{2} - 2 \phi _{m}(y) \right) \right] \times \Gamma \left( 1 - \frac{i\omega}{2} \right)_{1}F_{1}\left(  \frac{i\omega}{2}, 1, y^{2} \frac{i \omega}{2} \right)
$$
Where $\phi _{m}(y) = \frac{(x_{m} - y)^{2}}{2} - \ln x_{m}$ with $x_{m} = (y+\sqrt{ y^{2} + 4 }) / 2$ .
Here $\Gamma(z)$ is the Euler gamma function, and $_{1}F_{1}(a,b,z)$ is Kummer's confluent hypergeometric function.

In the geometric optics regime $\omega>10$, the amplification factor is 
$$
F_{\text{geo}} = \lvert \mu _{+} \rvert ^{\frac{1}{2}} - i \lvert \mu _{-} \rvert ^{\frac{1}{2}} e^{i\omega \Delta \tau}
$$
Where the magnification of the two geometric images are $\mu _{\pm } = \frac{1}{2} \pm \frac{y^{2} +2}{2y\sqrt{ y^{2}  +4}}$, and the time delay between the two images is $\Delta \tau = y \frac{\sqrt{ y^{2} +4 }}{ 2} + \ln \left[ \frac{\sqrt{ y^{2} + 4 } +y}{\sqrt{ y^{2} +4 } -y} \right]$.

In the point mass model, the term that corresponds to the diffracted image at the center of lens $\delta F_{c}$ is zero [85], and the postgeometric correction to the amplification of the geometric images $\delta F_{m}$ is the only contribution of $\delta F$. We have
$$
\delta F(\omega) = \frac{i}{3\omega} \frac{4 x_{+}^{2} - 1}{(x_{+}^{2}+1)^{3}(x_{+}^{2} -1)} \lvert \mu _{+} \rvert ^{\frac{1}{2}} + \frac{1}{3\omega} \frac{4x_{-}^{2} - 1}{(x_{-}^{2} + 1)^{3}(x_{-}^{2} - 1)} \lvert \mu _{-} \rvert ^{\frac{1}{2}} e^{i\omega \Delta \tau}
$$
Where $x_{\pm} = \frac{y\pm \sqrt{ y^{2}+2 }}{2}$ are the positions of both geometric images.

## Singular isothermal sphere

The SIS lens has a density profile[84,93,94]
$$
\rho(\mathrm{r})  = \frac{\sigma _{v}^{2}}{2\pi r^{2}}
$$
Where $\sigma _{v}$ is the velocity dispersion and $\xi$ can be chosen as the Einstein radius $\xi = r_{E} = 4\pi \sigma _{v}^{2} \frac{d_{LS}d_{L}}{d_{S}}$. Thus, the mass inside this region is $M_{Lz} = 4\pi \sigma _{v}^{2} \frac{d_{LS}d_{L}}{d_{S}}$. The dimensionless lensing potential is $\phi (\mathrm{x}) = \lvert \mathrm{x} \rvert$.

No close-form analytic result is known for the amplification factor from a SIS lens.
In the wave diffraction regime $\omega <10$, we rely on calculating the diffraction integral numerically using the asymptotic expansion method introduced before.



# Fisher parameter estimation
## GW data analysis

Bayesian gravitational wave data analysis is used to infer the properties of gravitational wave sources and make predictions about their parameters (see below what are in detail the parameters we are talking about). It combines the principles of Bayesian statistics with the analysis of gravitational wave signals detected by ground-based observatories like LIGO and Virgo.

The goal of Bayesian gravitational wave data analysis is to extract this information from the noisy gravitational wave signals detected by the observatories:

$$s(t) = h_0(t) + n(t)$$

where $h_0(t)$ is the true (unknown) signal and $n(t)$ is the detector noise, assumed to be Gaussian and stationary.

Mathematically, Bayes' theorem can be expressed as:
$$p(\vec{\theta}|s) \propto \pi(\vec{\theta}){\mathcal{L}}(s|\vec{\theta})$$

where $p(\vec{\theta}|d)$ is the posterior distribution, ${\mathcal{L}}(d|\vec{\theta})$ is the likelihood function, $\pi(\vec{\theta})$ is the prior distribution, and we neglected the evidence or marginal likelihood at the denominator.

To perform Bayesian gravitational wave data analysis, we use various techniques such as Markov Chain Monte Carlo (MCMC) sampling and nested sampling. The mostly used software is `bilby`, and typically full Baysian parameter estimation is computationally expensive.

## Fisher-matrix approximation

The gravitational-wave likelihood is defined as the probability of noise realization:

$$ {\mathcal{L}}(d|\vec{\theta}) \propto \exp\left[-\frac{1}{2}\langle s - h(\vec{\theta})| s - h(\vec{\theta}) \rangle \right] $$
The inner product $\langle \cdot|\cdot\rangle$ measures the overlap between two signals given the noise characteristics of the detector:
$$ \langle a, b \rangle \equiv 4\operatorname{Re}\int_{f_{\rm min}}^{f_{\rm max}} \frac{\tilde{a}(f)\tilde{b}^*(f)}{S_n(f)}df $$
We can approximate the likelihood by expanding the template around the true signal:
$$ h(\vec{\theta})  = h_0 + \Delta \theta^i h_i$$
so that the likelihood becomes a **multivariarte Gaussian distribution**:
$$ p(\vec{\theta}|s)\propto \pi(\vec{\theta}) \exp\left[-\frac{1}{2}\langle n|n\rangle + \Delta \theta^k\langle n|h_k\rangle - \frac{1}{2}\Delta \theta^i \langle h_i|h_j\rangle \Delta \theta^j \right] $$
1. The truncation in the expansion is done at first-order in partial derivatives, known as **linearized signal approximation** (LSA)

2. LSA approximation is equivalent to the leading term in **posterior expansion as a series in 1/SNR** (this is the reason why Fisher matrix is said to work in high-SNR limit) [see Vallisneri 2008]

In Fisher matrix context we usually work in zero-noise approximation, so that the first two terms cancel and we define the Fisher matrix as:

$$ F_{ij} = \langle h_i|h_j\rangle$$
So 
$$
p(\Delta \vec{\theta}) = N \exp\left( -\frac{1}{2} \Delta \theta ^{i} F_{ij}\Delta \theta ^{j} \right)
$$
The Fisher information matrix can be calculated as:
$$
F_{ij}=     \braket{ \frac{\partial h}{\partial \theta _{i}} | \frac{\partial h}{\partial \theta _{j}}  } 
$$

The Fisher likelihood is therefore simply given by:
$$ {\mathcal{L}} \propto \exp\left[-\frac{1}{2} \left(\vec{\theta} - \vec{\theta}_{\rm inj}\right)^{\rm T} F \left(\vec{\theta} - \vec{\theta}_{\rm inj}\right) \right] $$
The inverse of the Fisher matrix gives us the covariance matrix among parameters:
$$ \sigma_i = \sqrt{\Sigma_{ii}} \ \leftrightarrow  \Sigma_{ij} = \left[F^{-1}\right]_{ij}$$
This is the basic math behind Fisher matrix codes, like `GWFish`

## Why Fisher analysis?

**When studying the performance of a new detector, such as the Einstein Telescope, which has a much improved sensitivity and is predicted to detect entire populations of events ($10^6$ events per years against the current tens that we are detecting), we want a tool to make forecasts in a reasonable amount of time. Since we still do not have a fast full parameter estimation, the Fisher matrix approximation is the state-of-the-art for forecasts.**









 











