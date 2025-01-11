import{_ as r,c as o,a as t,d as l,b as n,w as p,e as i,r as d,o as c}from"./app-B3ZoAXip.js";const h={},u={class:"hint-container tip"},g={href:"https://www.w3.org/TR/2021/REC-css-cascade-3-20210211",target:"_blank",rel:"noopener noreferrer"},f={class:"hint-container info"},x={href:"https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/#stages-examples",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/#biblio-css-transitions-1",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/#biblio-css-animations-1",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.w3.org/TR/selectors-3/#specificity",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/#biblio-css-animations-1",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/#biblio-css-transitions-1",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.w3.org/TR/2021/REC-css-cascade-3-20210211/#valdef-all-inherit",target:"_blank",rel:"noopener noreferrer"},C={class:"hint-container tip"},k={href:"https://www.w3.org/TR/CSS2/visuren.html#box-gen",target:"_blank",rel:"noopener noreferrer"};function S(A,e){const a=d("ExternalLinkIcon"),s=d("RouteLink");return c(),o("div",null,[t("div",u,[e[2]||(e[2]=t("p",{class:"hint-container-title"},"W3C 规范",-1)),t("p",null,[t("a",g,[e[0]||(e[0]=l("REC-css-cascade-3")),n(a)]),e[1]||(e[1]=l("。"))])]),e[35]||(e[35]=t("p",null,[l("CSS 的基本设计原则之一是 "),t("a",{href:"#%E5%B1%82%E5%8F%A0"},"层叠"),l("，它允许多个样式表影响文档的表示。")],-1)),e[36]||(e[36]=t("p",null,"当不同的声明尝试为同一元素设置值时，必须以某种方式解决冲突。",-1)),e[37]||(e[37]=t("p",null,[l("而在默认情况下，若没有声明为元素设置值时，则会通过 "),t("a",{href:"#%E7%BB%A7%E6%89%BF"},"继承"),l(" 或使用属性的默认值来计算最终的结果。")],-1)),t("div",f,[e[6]||(e[6]=t("p",{class:"hint-container-title"},"相关信息",-1)),t("p",null,[e[4]||(e[4]=l("与层叠密切相关的概念是 ")),n(s,{to:"/frontend/basic/css/002-selector.md/#%E4%BC%98%E5%85%88%E7%BA%A7"},{default:p(()=>e[3]||(e[3]=[l("优先级")])),_:1}),e[5]||(e[5]=l("。"))])]),e[38]||(e[38]=i('<h2 id="值的计算过程" tabindex="-1"><a class="header-anchor" href="#值的计算过程"><span>值的计算过程</span></a></h2><p>一旦浏览器将 HTML 文档解析并生成了 DOM Tree，那么必须给每一个元素都设置对应的样式。</p><p>最终的 CSS 属性值会经过多个步骤的计算：</p><ul><li>首先，收集每个元素上每一个属性应用的所有 <a href="#%E5%A3%B0%E6%98%8E%E5%80%BC-declared-values">声明值</a>；</li><li>层叠产生 <a href="#%E5%B1%82%E5%8F%A0%E5%80%BC-cascaded-values">层叠值</a>，每个元素的每个属性最多有一个层叠值；</li><li>默认值将产生 <a href="#%E6%8C%87%E5%AE%9A%E5%80%BC-specified-values">指定值</a>，每个元素的每个属性正好有一个指定值；</li><li>解析值的依赖关系将产生 <a href="#%E8%AE%A1%E7%AE%97%E5%80%BC-computed-values">计算值</a>，每个元素的每个属性正好有一个计算值；</li><li>格式化文档会生成 <a href="#%E4%BD%BF%E7%94%A8%E5%80%BC-used-values">使用值</a>，一个元素只有在一个给定的属性适用于该元素时才具有该属性的使用值； <blockquote><p>我的理解是：若一个元素没有该属性，则没有使用值。</p></blockquote></li><li>最后，根据显示环境的不同，将使用值转换为 <a href="#%E5%AE%9E%E9%99%85%E5%80%BC-actual-values">实际值</a>。与使用值一样，元素上的给定属性可能有也可能没有实际值。</li></ul><h3 id="声明值-declared-values" tabindex="-1"><a class="header-anchor" href="#声明值-declared-values"><span>声明值 Declared Values</span></a></h3><p>每个应用于元素的属性声明都会给该属性提供一个声明值，这些值会被层叠处理以选择一个单一的「获胜值」。</p><h3 id="层叠值-cascaded-values" tabindex="-1"><a class="header-anchor" href="#层叠值-cascaded-values"><span>层叠值 Cascaded Values</span></a></h3><p>层叠值代表层叠的结果：它是赢得层叠的声明值（在层叠的输出中被排序在前面）。如果层叠的输出是一个空列表，那就没有层叠值。</p><h3 id="指定值-specified-values" tabindex="-1"><a class="header-anchor" href="#指定值-specified-values"><span>指定值 Specified Values</span></a></h3><p>指定值是一个给定的属性值，是样式表作者为该元素设置的。它是把层叠值通过默认过程处理的结果，保证每个元素上的每个属性都有一个指定的值。</p><p>在许多情况下，指定值是层叠的值。然而，如果根本没有层叠值，那么就会取默认的值。</p><h3 id="计算值-computed-values" tabindex="-1"><a class="header-anchor" href="#计算值-computed-values"><span>计算值 Computed Values</span></a></h3><p>计算值是对指定值进行解析的结果，通常是将其绝对化以准备继承。</p><div class="hint-container tip"><p class="hint-container-title">注意</p><p>计算值是在继承过程中父代传递给子代的值。由于历史原因，它不一定是 <code>getComputedStyle()</code> 函数返回的值，该函数有可能会返回 <a href="#%E4%BD%BF%E7%94%A8%E5%80%BC-used-values">使用值</a>。<code>CSSOM</code> 除外，计算值是一个抽象的数据表示：它们的定义反映了该数据表示，而不是该数据如何被序列化。例如，序列化规则通常允许省略某些在解析过程中隐含的值，但这些值仍然是计算值的一部分。</p></div><div class="hint-container info"><p class="hint-container-title">EXAMPLE</p><p>一个指定的值可以是绝对的（如 <code>red</code> 或 <code>2px</code>），也可以是相对的（如 <code>auto</code>、<code>2em</code>）。计算一个相对值通常会将其绝对化：</p><ul><li>相对单位的值（<code>em</code>、<code>ex</code>、<code>vh</code>、<code>vw</code>）必须通过与合适的参考尺寸相乘而成为绝对值</li><li>某些关键字（如 <code>smaller</code>、<code>bloder</code>）必须根据其定义进行替换</li><li>某些属性的百分比必须乘以一个参考值（由属性定义）</li><li>有效的相对 URL 必须被解析为绝对值</li></ul></div><div class="hint-container tip"><p class="hint-container-title">注意</p><p>一般来说，计算值会尽可能地解析指定值，而不需要执行其他难以并行的操作，例如解析网络请求或从元素和它的父级元素以外的地方检索值。</p></div><p>即使该属性不适用，计算值也会存在。然而一些属性可能会根据该属性是否适用于该元素而改变它们确定计算值的方式。</p><h3 id="使用值-used-values" tabindex="-1"><a class="header-anchor" href="#使用值-used-values"><span>使用值 Used Values</span></a></h3><p>使用值是将计算值和完成任何剩余计算的结果，使其成为文档格式化中使用的绝对理论值。</p><div class="hint-container info"><p class="hint-container-title">EXAMPLE</p><p>比如，在不知道该元素的祖先布局的情况下，<code>width: auto</code> 声明不能被解析为一个长度，所以计算值是 <code>auto</code>，而使用值是一个绝对长度，如 <code>100px</code>。</p></div><p>如果一个属性不适用于这个元素或盒子类型，那么它对该类型的盒子或元素没有直接的格式化效果，因此对该属性没有使用值。</p><div class="hint-container info"><p class="hint-container-title">EXAMPLE</p><p>例如，<code>flex</code> 属性在不是 <code>flex</code> 项目的元素上没有使用值。</p></div><div class="hint-container tip"><p class="hint-container-title">注意</p><p>定义为适用于「所有元素」的属性适用于所有元素和显示类型，但不一定适用于所有伪元素类型，因为伪元素通常有自己的特定渲染模型或其他限制。然而，<code>::before</code> 和 <code>::after</code> 伪元素被定义为几乎完全像普通元素一样，因此被定义为接受所有适用于「所有元素」的属性。</p></div><h3 id="实际值-actual-values" tabindex="-1"><a class="header-anchor" href="#实际值-actual-values"><span>实际值 Actual Values</span></a></h3><p>原则上，一个使用值是可以被使用的，但是用户代理可能无法在特定的环境中使用这个值。</p><p>例如，用户代理可能只能呈现整数像素宽度的边框，因此必须近似宽度的使用值。</p><p>另外，一个元素的字体大小可能需要根据字体的可用性和字体大小调整属性的值来调整。</p><p>实际值就是进行此类调整后的使用值。</p><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h3>',29)),t("blockquote",null,[t("p",null,[e[8]||(e[8]=l("完整例子见 ")),t("a",x,[e[7]||(e[7]=l("Examples")),n(a)])])]),e[39]||(e[39]=i('<table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">获胜值</th><th style="text-align:center;">层叠值</th><th style="text-align:center;">指定值</th><th style="text-align:center;">计算值</th><th style="text-align:center;">使用值</th><th style="text-align:center;">实际值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>text-align</code></td><td style="text-align:center;"><code>text-align: left</code></td><td style="text-align:center;"><code>left</code></td><td style="text-align:center;"><code>left</code></td><td style="text-align:center;"><code>left</code></td><td style="text-align:center;"><code>left</code></td><td style="text-align:center;"><code>left</code></td></tr><tr><td style="text-align:center;"><code>width</code></td><td style="text-align:center;">(none)</td><td style="text-align:center;">(none)</td><td style="text-align:center;"><code>auto</code>（继承的值）</td><td style="text-align:center;"><code>auto</code></td><td style="text-align:center;"><code>120px</code></td><td style="text-align:center;"><code>120px</code></td></tr><tr><td style="text-align:center;"><code>border-width</code></td><td style="text-align:center;"><code>border-width: inherit</code></td><td style="text-align:center;"><code>inherit</code></td><td style="text-align:center;"><code>4.2px</code></td><td style="text-align:center;"><code>4.2px</code></td><td style="text-align:center;"><code>4.2px</code></td><td style="text-align:center;"><code>4px</code></td></tr><tr><td style="text-align:center;"><code>font-size</code></td><td style="text-align:center;"><code>font-size: 1.2em</code></td><td style="text-align:center;"><code>1.2em</code></td><td style="text-align:center;"><code>1.2em</code></td><td style="text-align:center;"><code>14.1px</code></td><td style="text-align:center;"><code>14.1px</code></td><td style="text-align:center;"><code>14px</code></td></tr><tr><td style="text-align:center;"><code>width</code></td><td style="text-align:center;"><code>width: 80%</code></td><td style="text-align:center;"><code>80%</code></td><td style="text-align:center;"><code>80%</code></td><td style="text-align:center;"><code>80%</code></td><td style="text-align:center;"><code>354.2px</code></td><td style="text-align:center;"><code>354px</code></td></tr></tbody></table><h2 id="层叠" tabindex="-1"><a class="header-anchor" href="#层叠"><span>层叠</span></a></h2><p>层叠接收一个无序的列表，该列表是给定元素上给定属性的声明值，按照下面确定的声明优先级对它们进行排序，然后输出一个单一的 <a href="#%E5%B1%82%E5%8F%A0%E5%80%BC-cascaded-values">层叠值</a>。</p><h3 id="层叠排列顺序" tabindex="-1"><a class="header-anchor" href="#层叠排列顺序"><span>层叠排列顺序</span></a></h3><p>层叠根据以下标准对声明进行排序，其优先级由高到低排列：</p><h4 id="起源和重要性" tabindex="-1"><a class="header-anchor" href="#起源和重要性"><span>起源和重要性</span></a></h4><p>一个声明的起源是基于它的来源，而它的重要性是指它是否用 <code>!important</code> 声明（见 <a href="#%E9%87%8D%E8%A6%81%E5%A3%B0%E6%98%8E-important-%E6%B3%A8%E9%87%8A">下文</a>）。各种起源的优先级按降序排列如下：</p>',7)),t("ol",null,[t("li",null,[e[10]||(e[10]=l("过渡声明 ")),t("a",v,[e[9]||(e[9]=l("css-transitions-1")),n(a)])]),e[13]||(e[13]=t("li",null,"重要的用户代理声明",-1)),e[14]||(e[14]=t("li",null,"重要的用户声明",-1)),e[15]||(e[15]=t("li",null,"重要的作者声明",-1)),t("li",null,[e[12]||(e[12]=l("动画声明 ")),t("a",b,[e[11]||(e[11]=l("css-animations-1")),n(a)])]),e[16]||(e[16]=t("li",null,"正常的作者声明",-1)),e[17]||(e[17]=t("li",null,"正常的用户声明",-1)),e[18]||(e[18]=t("li",null,"正常的用户代理声明",-1))]),e[40]||(e[40]=t("p",null,"来自这个列表中较早起源的声明胜过来自较晚起源的声明。",-1)),e[41]||(e[41]=t("h4",{id:"特异性",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#特异性"},[t("span",null,"特异性")])],-1)),t("p",null,[e[20]||(e[20]=l("选择器模块 ")),t("a",m,[e[19]||(e[19]=l("Calculating a selector's specificity")),n(a)]),e[21]||(e[21]=l(" 描述了如何计算一个选择器的特异性。具有最高特异性的声明获胜。"))]),e[42]||(e[42]=i('<h4 id="出现顺序" tabindex="-1"><a class="header-anchor" href="#出现顺序"><span>出现顺序</span></a></h4><p>文档中最后一个出现的声明获胜。这是为了：</p><ul><li>来自导入的样式表的声明被排序，就像它们的样式表被替换成了 <code>@import</code> 规则。</li><li>来自独立于原生文档的样式表的声明被视为按照链接顺序连接起来的，由主文档语言决定。</li><li>来自样式属性的声明是根据样式属性出现的元素的文档顺序来排序的，并且都放在任何样式表之后。</li></ul><p><strong>级联的输出</strong>是一个（可能是空的）排序的列表，其中包括每个元素上的每个属性的声明值。</p><h3 id="层叠来源" tabindex="-1"><a class="header-anchor" href="#层叠来源"><span>层叠来源</span></a></h3><p>每个样式规则都有一个级联原点，它决定了它在哪里进入级联。CSS定义了三个核心原点：</p><h5 id="作者起源" tabindex="-1"><a class="header-anchor" href="#作者起源"><span>作者起源</span></a></h5><p>作者根据文档语言的惯例为一个源文档指定样式表。例如，在HTML中，样式表可以包含在文档中，也可以从外部链接。</p><h5 id="用户起源" tabindex="-1"><a class="header-anchor" href="#用户起源"><span>用户起源</span></a></h5><p>用户可能能够为一个特定的文档指定样式信息。例如，用户可以指定一个包含样式表的文件，或者用户代理可以提供一个生成用户样式表的界面（或者表现得像它一样）。</p><h5 id="用户代理的起源" tabindex="-1"><a class="header-anchor" href="#用户代理的起源"><span>用户代理的起源</span></a></h5><p>符合要求的用户代理必须应用一个默认的样式表（或者表现得像他们一样）。一个用户代理的默认样式表应该以满足文档语言的一般表现期望的方式呈现文档语言的元素（例如，对于视觉浏览器，HTML中的EM元素使用斜体字呈现）。例如，见HTML用户代理样式表。[HTML]</p><p>对CSS的扩展定义了以下额外的起源：</p><h5 id="动画起源" tabindex="-1"><a class="header-anchor" href="#动画起源"><span>动画起源</span></a></h5>',14)),t("p",null,[e[23]||(e[23]=l("CSS动画 ")),t("a",E,[e[22]||(e[22]=l("css-animations-1")),n(a)]),e[24]||(e[24]=l(' 在运行时产生代表其效果的 "虚拟 "规则。'))]),e[43]||(e[43]=t("h5",{id:"过渡起源",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#过渡起源"},[t("span",null,"过渡起源")])],-1)),t("p",null,[e[26]||(e[26]=l("与CSS动画一样，CSS过渡 ")),t("a",y,[e[25]||(e[25]=l("css-transitions-1")),n(a)]),e[27]||(e[27]=l(' 在运行时产生代表其效果的 "虚拟 "规则。'))]),e[44]||(e[44]=i('<h3 id="重要声明-important-注释" tabindex="-1"><a class="header-anchor" href="#重要声明-important-注释"><span>重要声明： <code>!important</code> 注释</span></a></h3><p>CSS 试图在作者和用户的样式表之间建立一种权力平衡。</p><p>默认情况下，作者的样式表中的规则优先于用户的样式表中的规则，而用户的样式表又优先于用户代理的默认样式表中的规则。</p><p>为了平衡这一点，一个声明可以被标记为重要的，这将增加它在级联中的权重并颠倒优先顺序。</p><p>一个重要的声明优先于一个普通的声明。作者和用户的样式表都可以包含重要声明，用户源的重要声明优先于作者源的重要声明。</p><p>这个CSS特性通过让有特殊要求的用户（大字体、颜色组合等）控制表现形式来提高文档的可访问性。</p><p>所有来源的重要声明都优先于动画的声明。这允许作者在重要情况下覆盖动画值。(动画值通常优先于所有其他规则)。</p><p>用户代理样式表也可能包含重要的声明。这些声明覆盖了所有作者和用户的声明。</p><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h2><p>当级联不产生一个值时，必须以其他方式找到指定的值。</p><p>继承的属性通过继承从它们的父元素中获取它们的默认值；所有其它的属性都采取它们的初始值。</p><p>作者可以通过inherit和initial关键字明确要求继承或初始化。</p><h3 id="初始值" tabindex="-1"><a class="header-anchor" href="#初始值"><span>初始值</span></a></h3><p>每个属性都有一个初始值，在该属性的定义表中定义。如果该属性不是一个继承的属性，并且级联没有产生一个值，那么该属性的指定值就是其初始值。</p><h3 id="继承性" tabindex="-1"><a class="header-anchor" href="#继承性"><span>继承性</span></a></h3><p>继承将属性值从父元素传播到它们的子元素。一个元素上的属性的继承值是该元素的父元素上的属性的计算值。对于根元素，它没有父元素，继承值是属性的初始值。</p><p>伪元素根据为每个伪元素描述的虚构的标签序列来继承。</p><p>有些属性是继承的属性，这在其属性定义表中有定义。这意味着，除非层叠的结果是一个值，否则该值将由继承来决定。</p>',18)),t("p",null,[e[29]||(e[29]=l("一个属性也可以明确地被继承。参见 ")),t("a",w,[e[28]||(e[28]=l("继承关键字")),n(a)]),e[30]||(e[30]=l("。"))]),t("div",C,[e[34]||(e[34]=t("p",{class:"hint-container-title"},"注意",-1)),t("p",null,[e[32]||(e[32]=l("继承遵循文档树，不被 ")),t("a",k,[e[31]||(e[31]=l("匿名盒子")),n(a)]),e[33]||(e[33]=l(" 拦截，也不被盒子树的其他操作所影响。"))])]),e[45]||(e[45]=i('<h3 id="明确默认" tabindex="-1"><a class="header-anchor" href="#明确默认"><span>明确默认</span></a></h3><p>下面定义了几个 CSS 范围内的属性值；声明一个属性拥有这些值，明确地指定了一个特定的默认行为。所有的CSS属性都可以接受这些值。</p><h4 id="重置一个属性-initial-关键字" tabindex="-1"><a class="header-anchor" href="#重置一个属性-initial-关键字"><span>重置一个属性：<code>initial</code> 关键字</span></a></h4><p>如果一个属性的层叠值是 <code>initial</code> 关键字，那么该属性的 <a href="#%E6%8C%87%E5%AE%9A%E5%80%BC-specified-values">指定值</a> 就是其初始值。</p><h4 id="显式继承-inherit-关键字" tabindex="-1"><a class="header-anchor" href="#显式继承-inherit-关键字"><span>显式继承：<code>inherit</code> 关键字</span></a></h4><p>如果一个属性的层叠值是 <code>inherit</code> 关键字，那么该属性的指定值和计算值就是继承值。</p><h4 id="擦除所有声明-unset-关键字" tabindex="-1"><a class="header-anchor" href="#擦除所有声明-unset-关键字"><span>擦除所有声明：<code>unset</code> 关键字</span></a></h4><p>如果一个属性的层叠值是<code> unset</code>关键字，那么如果它是一个继承的属性，这将被视为继承，如果它不是，这将被视为初始。</p><p>这个关键字有效地抹去了在层叠中较早出现的所有声明的值，正确地继承或不继承都适合于该属性（或一个速记的所有长文）。</p>',9))])}const T=r(h,[["render",S],["__file","005-cascade-inheritance.html.vue"]]),R=JSON.parse('{"path":"/frontend/basic/css/005-cascade-inheritance.html","title":"层叠和继承","lang":"zh-CN","frontmatter":{"title":"层叠和继承","date":"2023-03-28T00:00:00.000Z","icon":"cascades","category":["CSS"],"tag":["frontend","css","basic-knowledge"],"description":" W3C 规范 REC-css-cascade-3。 CSS 的基本设计原则之一是 层叠，它允许多个样式表影响文档的表示。 当不同的声明尝试为同一元素设置值时，必须以某种方式解决冲突。 而在默认情况下，若没有声明为元素设置值时，则会通过 继承 或使用属性的默认值来计算最终的结果。 相关信息 与层叠密切相关的概念是 。 值的计算过程 一旦浏览器将 HTM...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/basic/css/005-cascade-inheritance.html"}],["meta",{"property":"og:title","content":"层叠和继承"}],["meta",{"property":"og:description","content":" W3C 规范 REC-css-cascade-3。 CSS 的基本设计原则之一是 层叠，它允许多个样式表影响文档的表示。 当不同的声明尝试为同一元素设置值时，必须以某种方式解决冲突。 而在默认情况下，若没有声明为元素设置值时，则会通过 继承 或使用属性的默认值来计算最终的结果。 相关信息 与层叠密切相关的概念是 。 值的计算过程 一旦浏览器将 HTM..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T15:43:46.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"frontend"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:tag","content":"basic-knowledge"}],["meta",{"property":"article:published_time","content":"2023-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T15:43:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"层叠和继承\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-06T15:43:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 值的计算过程","slug":"值的计算过程","link":"#值的计算过程","children":[{"level":3,"title":"1.1 声明值 Declared Values","slug":"声明值-declared-values","link":"#声明值-declared-values","children":[]},{"level":3,"title":"1.2 层叠值 Cascaded Values","slug":"层叠值-cascaded-values","link":"#层叠值-cascaded-values","children":[]},{"level":3,"title":"1.3 指定值 Specified Values","slug":"指定值-specified-values","link":"#指定值-specified-values","children":[]},{"level":3,"title":"1.4 计算值 Computed Values","slug":"计算值-computed-values","link":"#计算值-computed-values","children":[]},{"level":3,"title":"1.5 使用值 Used Values","slug":"使用值-used-values","link":"#使用值-used-values","children":[]},{"level":3,"title":"1.6 实际值 Actual Values","slug":"实际值-actual-values","link":"#实际值-actual-values","children":[]},{"level":3,"title":"1.7 例子","slug":"例子","link":"#例子","children":[]}]},{"level":2,"title":"2 层叠","slug":"层叠","link":"#层叠","children":[{"level":3,"title":"2.1 层叠排列顺序","slug":"层叠排列顺序","link":"#层叠排列顺序","children":[{"level":4,"title":"2.1.1 起源和重要性","slug":"起源和重要性","link":"#起源和重要性","children":[]},{"level":4,"title":"2.1.2 特异性","slug":"特异性","link":"#特异性","children":[]},{"level":4,"title":"2.1.3 出现顺序","slug":"出现顺序","link":"#出现顺序","children":[]}]},{"level":3,"title":"2.2 层叠来源","slug":"层叠来源","link":"#层叠来源","children":[]},{"level":3,"title":"2.3 重要声明： !important 注释","slug":"重要声明-important-注释","link":"#重要声明-important-注释","children":[]}]},{"level":2,"title":"3 继承","slug":"继承","link":"#继承","children":[{"level":3,"title":"3.1 初始值","slug":"初始值","link":"#初始值","children":[]},{"level":3,"title":"3.2 继承性","slug":"继承性","link":"#继承性","children":[]},{"level":3,"title":"3.3 明确默认","slug":"明确默认","link":"#明确默认","children":[{"level":4,"title":"3.3.1 重置一个属性：initial 关键字","slug":"重置一个属性-initial-关键字","link":"#重置一个属性-initial-关键字","children":[]},{"level":4,"title":"3.3.2 显式继承：inherit 关键字","slug":"显式继承-inherit-关键字","link":"#显式继承-inherit-关键字","children":[]},{"level":4,"title":"3.3.3 擦除所有声明：unset 关键字","slug":"擦除所有声明-unset-关键字","link":"#擦除所有声明-unset-关键字","children":[]}]}]}],"git":{"createdTime":1682394949000,"updatedTime":1730907826000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":2}]},"readingTime":{"minutes":11.1,"words":3331},"filePathRelative":"frontend/basic/css/005-cascade-inheritance.md","localizedDate":"2023年3月28日","excerpt":"","autoDesc":true}');export{T as comp,R as data};