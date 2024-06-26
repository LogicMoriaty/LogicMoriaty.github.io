---
share: "true"
title: 文献翻译1——PycWB：A User-friendly, Modular, and Python-based Framework for Gravitational Wave Unmodelled Search
cover: https://cdn.jsdelivr.net/gh/LogicMoriaty/source/card1/img(21).webp
date: 2024-4-13
updated: 2024-4-13
categories: 文献翻译
tags:
  - 文献翻译
top: 1
---


# Abstract

>Unmodelled searches and reconstruction is a critical aspect of gravitational wave data analysis, requiring sophisticated software tools for robust data analysis. This paper introduces PycWB, a user-friendly and modular Python-based framework developed to enhance such analyses based on the widely used unmodelled search and reconstruction algorithm Coherent Wave Burst (cWB). The main features include a transition from C++ scripts to YAML format for user-defined parameters, improved modularity, and a shift from complex class-encapsulated algorithms to compartmentalized modules. The PycWB architecture facilitates efficient dependency management, better error-checking, and the use of parallel computation for performance enhancement. Moreover, the use of Python harnesses its rich library of packages, facilitating post-production analysis and visualization. The PycWB framework is designed to improve the user experience and accelerate the development of unmodelled gravitational wave analysis.

无模型搜索和重构是引力波数据分析的关键方面，需要使用复杂的软件工具进行稳健的数据分析。本文介绍了 PycWB，这是一个用户友好且模块化的基于 Python 的框架，旨在增强基于广泛使用的无模型搜索和重构算法 Coherent Wave Burst（cWB）的此类分析。主要特点包括以便用户定义参数的从 C++脚本到 YAML 格式的过渡，改进的模块化，以及从复杂的类封装算法到分隔的模块的转变。PycWB 架构促进了有效的依赖管理，更好的错误检查，以及使用并行计算以提高性能。此外，使用 Python 可以利用其丰富的包库，便于后期生产分析和可视化。PycWB 框架旨在改善用户体验并加速无模型引力波分析的开发。

# Motivation and Significance

> The choice of programming language significantly influences the design and usage of scientific software. The benefits of having a Python-based software or Python interface for critical software in gravitational waves (GW) data analysis are outlined in [1, 2]. Python, as of now, is on its way to becoming the default programming language in GW data analysis. This statement can be corroborated by the emergence of Python-based gravitational waveform models like pySEOBNR [2], gwsurrogate [3], inference software like BILBY [4], PyCBC-inference [5]. And the success and wide usage of GW data analysis algorithms like PyCBC [6].

编程语言的选择显著影响科学软件的设计和使用。在引力波（GW）数据分析中使用基于 Python 的软件或 Python 接口的好处已在相关文献中得到阐述。目前，Python 正逐渐成为 GW 数据分析中的默认编程语言。这一说法可以通过如下事实得到支持：出现了基于 Python 的引力波形模型，例如 pySEOBNR，gwsurrogate；推理软件，如 BILBY, PyCBC-inference；以及广泛使用的 GW 数据分析算法 PyCBC的成功。这些发展表明，Python 在引力波数据分析领域中的重要性与日俱增。

>Despite these advancements, there remain several opportunities where Python-based software can accelerate the usage and development of GW data analysis algorithms. One specific example is the so-called unmodelled search and waveform reconstruction algorithms in GW data analysis. The lack of readily available Python-based open-source software restricts the development and usage of un-modelled algorithms, limiting it primarily to researchers proficient in languages like C/C++ which is a low-level programming language. Creating Python-based solutions and interfaces will enhance participation and development in the field.

尽管取得了这些进展，Python 基于软件在促进引力波（GW）数据分析算法的使用和发展方面仍存在许多机会。一个具体的例子是引力波数据分析中所谓的无模型搜索和波形重构算法。目前缺乏现成的基于 Python 的开源软件，这限制了无模型算法的开发和使用，主要局限于精通 C/C++这类低级编程语言的研究人员。创建基于 Python 的解决方案和接口将增强该领域的参与和发展。

>The Coherent Wave Burst (cWB) algorithm has been at the forefront of advancements in GW astrophysics [7]. The range of applicability of cWB for GW transient data analysis is very wide as it is an all-sky morphology-independent algorithm i.e. it does not rely on the waveform models or the sky direction of the source. Instead cWB relies on the coherent energy produced by the GW signal in the network of detectors. cWB has played a major role in the discovery of the first detection of GW signal GW150914 [8] and more recently it has proved itself to be a crucial method to detect interesting transient GW signals that are not well modelled like GW190521 [9, 10]. cWB is routinely used in a variety of GW transient searches for the LIGO-Virgo-KAGRA collaborations like IMBH searches [11], eBBH searches [12] and generic searches for transients with short [13] and long duration [14].

Coherent Wave Burst (cWB) 算法一直处于引力波（GW）天体物理学进步的前沿【7】。cWB 对 GW 瞬变数据分析的适用范围非常广泛，因为它是一种全天空、形态独立的算法，即它不依赖于波形模型或源的天空方向。相反，cWB 依赖于 GW 信号在探测器网络中产生的相干能量。cWB 在发现首个 GW 信号 GW150914的探测中发挥了重要作用【8】，而且最近它已证明自己是检测未被充分建模的有趣瞬变 GW 信号的关键方法，如 GW190521【9, 10】。cWB 常规用于 LIGO-Virgo-KAGRA 合作组织的各种 GW 瞬变搜索，如中等质量黑洞（IMBH）搜索【11】、极端质量比二元黑洞（eBBH）搜索【12】以及短【13】和长持续时间【14】瞬变事件的通用搜索。这些应用展示了 cWB 作为一种多功能和强大的工具在 GW 研究领域中的核心地位。

>While cWB offers an extensive array of functionalities and scripts, however, it falls short in facilitating user-specific modifications not inherently supported by the framework. Although cWB does provide plugin support, these plugins are required to access and manipulate global variables at the specific point of invocation. This approach demands a comprehensive understanding of the underlying code and risks unintentional disruptions or alterations to the variables. Moreover, the lack of clear dependencies between the modules further complicates the task for developers aiming to make modifications as the understanding of the interaction between different components becomes challenging. The PycWB framework addresses these issues and offers a more straightforward and stable environment for customization and code alteration.

尽管 cWB 提供了广泛的功能和脚本，但在支持用户特定修改方面却有所不足，这些修改并非框架固有支持的。虽然 cWB 确实提供了插件支持，但这些插件需要在调用的特定点访问和操作全局变量。这种方法要求用户对底层代码有全面的理解，且存在对变量进行无意中的干扰或更改的风险。此外，模块之间缺乏清晰的依赖关系，这进一步增加了开发者进行修改的难度，因为理解不同组件之间的交互变得具有挑战性。

PycWB 框架针对这些问题提供了解决方案，并为定制和代码修改提供了一个更直接和稳定的环境。它通过采用更加模块化的架构来简化依赖关系和模块间的交互，从而降低了开发者需要理解和修改底层代码的难度。此外，PycWB 使用 Python 语言的优势，提高了代码的可读性和易用性，允许开发者更容易地引入新的功能或进行调整，以适应不断变化的研究需求。这使得 PycWB 成为一个适合于广泛引力波数据分析社区的、用户友好的开发平台。

>This paper introduces PycWB, a modularized Python package for the cWB algorithm. This package will enable the easier integration of the future machine learning algorithm and new Python-based waveform models. The remainder of this paper is structured as follows: Section 2 provides an introduction to the structure and features of PycWB. Then, in Section 3, we present several use cases that demonstrate the user-friendliness and efficiency of PycWB, comparing its application with the traditional cWB. Finally, we share our conclusions and insights on the impact and potential of our new framework in the concluding section.

本文介绍了 PycWB，这是一个为 cWB 算法设计的模块化 Python 包。该包将使将来的机器学习算法和新的基于 Python 的波形模型更容易集成。本文的结构如下：第二部分介绍了 PycWB 的结构和特点。接着，在第三部分，我们展示了几个使用案例，这些案例展示了 PycWB 的用户友好性和效率，并将其应用与传统的 cWB 进行了比较。最后，在结论部分，我们分享了关于我们新框架的影响和潜力的结论和见解。

通过这种结构，本文旨在全面展示 PycWB 如何提供一个改进的、适应未来发展的平台，并强调其在促进引力波数据分析领域创新中的潜力。这包括如何通过提供更加灵活的工具配置和更高的算法效率来优化研究者的工作流程，以及通过支持最新的科学发展来保持研究的前沿性。

# Software Description

>The software framework in focus is implemented in Python and leverages the coherent Wave Burst (cWB) software originally developed on ROOT [15]. The description of the core cWB algorithm and the code can be found here [16, 17]. The native pyROOT interface of ROOT has immensely facilitated this Python implementation, saving the need for rewriting the entire suite of algorithms used for cWB. Instead, the core cWB code is integrated, specifically the WAT module, which is included in the package and automatically compiled upon installation using pip. The installation process is streamlined to avoid the usually intricate cWB setup.

本文关注的软件框架是用 Python 实现的，并利用了最初在 ROOT 上开发的 Coherent Wave Burst（cWB）软件。核心 cWB 算法和代码的描述可以在这里找到【16, 17】。ROOT 的原生 pyROOT 接口极大地便利了这一 Python 实现，避免了重写用于 cWB 的整套算法的需求。相反，核心 cWB 代码被集成进来，特别是 WAT 模块，该模块包含在软件包中，并在使用 pip 安装时自动编译。安装过程被简化，以避免通常复杂的 cWB 设置。

这种实施方式不仅保持了原有算法的性能和功能，还通过利用 Python 的广泛支持和易用性，提高了软件的可访问性和灵活性。这使得用户可以更容易地定制和扩展 cWB 的功能，以适应不断发展的研究需求。通过这种集成方式，PycWB 为广泛的研究社区提供了一个强大且用户友好的工具，以探索和分析引力波数据。

## User Configurations

>The PycWB framework makes it simpler for users to set their own parameters. Instead of using C++ scripts like before, PycWB uses YAML format, a more user-friendly way that doesn’t need C++ knowledge. Users or developers can easily set their own parameters using a Python dictionary. This dictionary is set up like a JSON schema, allowing flexibility in defining parameters. This system makes sure the user inputs are correct, checks them against the types and ranges that are already set, and provides default values when needed. Additionally it can automatically generate guides or instructions from this schema, keeping users updated with the software’s requirements. This new approach makes it simpler for users to work with the software, manage their settings, and helps in faster development.

PycWB 框架使用户设置自己的参数变得更简单。与以往使用 C++脚本不同，PycWB 采用了 YAML 格式，这是一种更加用户友好的方式，不需要 C++知识。用户或开发者可以轻松使用 Python 字典来设置自己的参数。这个字典被设置成类似 JSON schema 的形式，允许在定义参数时具有灵活性。这个系统确保用户输入是正确的，它会根据已设定的类型和范围进行检查，并在需要时提供默认值。此外，它还可以从这个 schema 自动生成指南或说明，使用户随时了解软件的要求。这种新方法使用户使用软件、管理设置变得更简单，并有助于加快开发速度。

通过这种设计，PycWB 极大地提高了软件的可配置性和易用性。用户可以通过直观的方式参与到算法的配置中，而无需深入了解复杂的代码细节。这种易于理解的配置方法不仅提高了用户体验，也降低了错误设置参数的风险，使得软件更加稳定和可靠。这对于快速实现新的研究想法或调整分析策略特别有价值。

# Illustrative Examples

## Real Data Analysis

>To validate the performance of PycWB, we conducted identical analyses on real LIGOVirgo events GW150914[8], GW170809[22], and GW190521 [9] using both cWB and PycWB. For the cWB analysis, we used the cwb gwosc command to download data from GWOSC [23, 24] and process them.

为了验证 PycWB 的性能，我们对真实的 LIGO-Virgo 事件 GW150914【8】、GW170809【22】和 GW190521【9】进行了相同的分析，同时使用了 cWB 和 PycWB 进行处理。对于 cWB 分析，我们使用了 `cwb gwosc` 命令从 GWOSC【23, 24】下载数据并处理它们。

```
cwb_gwosc GW=EVENT_ID IFO=V1 TAG=TSTXY all
```

>For PycWB, we utilized the same user configuration file and data, executing the analysis via a simple command.

```
pycwb_search user_parameters.yaml
```







