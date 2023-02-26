import{_ as a,V as i,W as s,X as o,Y as e,$ as r,a1 as c,a0 as n,C as l}from"./framework-a71e09ed.js";const t={},u=n(`<h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2><h3 id="rgba" tabindex="-1"><a class="header-anchor" href="#rgba" aria-hidden="true">#</a> rgba()</h3><p><code>rgba()</code> 通过红绿蓝表示颜色，第四个参数为可选的透明度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rgba(255, 255, 255); /* white */
rgba(255, 255, 255, .5); /* white with 50% opacity */
rgba(255 255 255 / 0.5); /* CSS Colors 4 space-separated values */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hsla" tabindex="-1"><a class="header-anchor" href="#hsla" aria-hidden="true">#</a> HSLA</h3><p><code>hsla()</code> 函数符号根据其色调、饱和度和亮度分量表示给定颜色。一个可选的 alpha 分量表示颜色的透明度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hsla(100, 100%, 50%, 1); /* #5f0 */
hsla(235, 100%, 50%, .5);/* #0015ff with 50% opacity */
hsla(235 100% 50% / 1); /* CSS Colors 4 space-separated values */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文字阴影-text-shadow" tabindex="-1"><a class="header-anchor" href="#文字阴影-text-shadow" aria-hidden="true">#</a> 文字阴影 <code>text-shadow</code></h2><p><code>text-shadow</code> 为文字添加阴影。可以为文字与 <code>text-decorations</code> 添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在 X 和 Y 方向的偏移量、模糊半径和颜色值组成。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取值：每一个阴影都能有两到三个 px 参数，前两个是 x y 轴偏移量，后一个可选的为阴影半径。</p><ul><li><code>color</code>: 可选，如没制定颜色，则使用 UA 自行选择；</li><li><code>offset-x</code> <code>offset-y</code>: 必选，阴影相对文字在 x y 轴上的偏移量；</li><li><code>blur-radius</code>：阴影半径，产生模糊效果。</li></ul><h2 id="盒子阴影-box-shadow" tabindex="-1"><a class="header-anchor" href="#盒子阴影-box-shadow" aria-hidden="true">#</a> 盒子阴影 <code>box-shadow</code></h2><p><code>box-shadow</code> 为盒子添加阴影效果。和 <code>text-shadow</code> 类似，多了一个阴影扩散参数 <code>spread-radius</code>。</p><p>取值：每一个阴影都能有两到四个 px 参数，前两个是 x y 轴偏移量，后一个可选的为 <code>blur-radius</code> 阴影半径，最后一个为 <code>spread-radius</code> 扩散半径。</p><ul><li><code>color</code>: 可选，如没制定颜色，则使用 UA 自行选择；</li><li><code>offset-x</code> <code>offset-y</code>: 必选，阴影相对文字在 x y 轴上的偏移量；</li><li><code>blur-radius</code>：阴影半径，产生模糊效果。</li><li><code>spread-radius</code>：阴影扩散半径。</li></ul><h2 id="边框圆角-border-radius" tabindex="-1"><a class="header-anchor" href="#边框圆角-border-radius" aria-hidden="true">#</a> 边框圆角 <code>border-radius</code></h2><p><code>border-radius</code> 设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个 (椭) 圆与边框的交集形成圆角效果。</p><p>该属性是一个简写属性，是为了将这四个属性 <code>border-top-left-radius</code>、<code>border-top-right-radius</code>、<code>border-bottom-right-radius</code>，和 <code>border-bottom-left-radius</code> 简写为一个属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>border-radius: 10% 30% 50% 70%;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="盒模型-box-sizing" tabindex="-1"><a class="header-anchor" href="#盒模型-box-sizing" aria-hidden="true">#</a> 盒模型 <code>box-sizing</code></h2>`,21);function h(b,x){const d=l("RouterLink");return i(),s("div",null,[u,o("p",null,[e("见"),r(d,{to:"/css/0005%E3%80%81%E5%B1%85%E4%B8%AD.html"},{default:c(()=>[e("居中")]),_:1}),e("。")])])}const p=a(t,[["render",h],["__file","0006、CSS3新属性.html.vue"]]);export{p as default};
