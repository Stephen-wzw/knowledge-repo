import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-2adb92ff.js";const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAC4CAIAAADYE2+FAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAMxSURBVHic7d3BapRnFIDhM5nEpii6kpAsKl0USa2geFPegjfgVXkLcdcWuggUWkSwi6LB1NJO94IS6stMJnmeCzjf4ef9mW/1z2K1Wg2kdja9AFeQquipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6O3G805P5+Rkzs7isVfAgwfz5MnsXIvXuK7q5ct5/nxevYrHXgFPn86jR6r6X87P582bef06HnsFvH276Q3W51q8OqyZquipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6NVfcFyv1Szez/6H+WrTi1zAX1/Pn4u1Pe/lcvb3Z29vTcd9ZLur+jB7P8/3p/Ptphe5gF+/mxezWNfzvn17Hj6cw8M1HfeR7a7qn1n+Pkc/zg+bXuQC/jicn3bWduO4e3fu3dtYVe5V9FRFT1X0VEVPVfRURU9V9FRFT1X0VEVPVfRURU9V9FRFT1X0VEVPVfRURU9V9FRFT1X0VEVPVfRURU9V9FRFT1X0VEVPVfRURU9V9FRFT1X0VEVPVfRURU9V9FRFT1X0VEVPVfRURU9V9FRFT1X0VEVPVfRURU9V9FRFT1X0VEVPVfTq/4jf2Znd3dnbi8d+0t78u5zVNrwbi8WmN1ifuqrHj+fZs3n3Lh77CYu/d+eXb+a3g/Uc90WOjq5PWHVVx8dzfBzP/Iz3s3gxc7K+A7mIbfjtYNuoip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqroqYqequipip6q6KmKnqro1d8FXa/lcg4O5v79Te9x+dy5M7dubez0xWq12tjhX2y1mrOzOT/f9B6Xz3I5N2/OjRubOX27q+Jycq+ipyp6qqKnKnqqoqcqeqqipyp6qqKnKnqqoqcqeqqipyp6qqKnKnqqoqcqeqqipyp6qqL3H1lRQAR5+V2jAAAAAElFTkSuQmCC",i="/blog/assets/svg-demo-1e33df96.svg",p={},c=e(`<h2 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h2><p>Canvas 是画布，通过 JavaScript 来绘制 2D 图形，是逐像素进行绘制，位置发生改变，就会重新进行绘制。</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 确保浏览器支持&lt;canvas&gt;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 绘制红色矩形</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#ff0000&#39;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
  <span class="token comment">// 绘制半透明蓝色矩形</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;rgba(0,0,255,0.5)&#39;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="canvas-demo" tabindex="0" loading="lazy"><figcaption>canvas-demo</figcaption></figure><p>特点如下：</p><ul><li>依赖分辨率</li><li>不支持事件处理器</li><li>弱的文本渲染能力</li><li>能够以 .png 或 .jpg 格式保存图片</li><li>最适合图像密集型的游戏，其中的许多对象会被频繁绘制</li></ul><h2 id="svg" tabindex="-1"><a class="header-anchor" href="#svg" aria-hidden="true">#</a> SVG</h2><p>可缩放矢量图形（Scalable Vector Graphics，SVG）是基于可扩展标记语言 XML 描述的 2D 图形语言，SVG 可以为某个元素附加 JavaScript 事件处理器。</p><div class="language-SVG line-numbers-mode" data-ext="SVG"><pre class="language-SVG"><code>&lt;svg version=&quot;1.1&quot;
     baseProfile=&quot;full&quot;
     width=&quot;300&quot; height=&quot;200&quot;
     xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;

  &lt;rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;red&quot; /&gt;

  &lt;circle cx=&quot;150&quot; cy=&quot;100&quot; r=&quot;80&quot; fill=&quot;green&quot; /&gt;

  &lt;text x=&quot;150&quot; y=&quot;125&quot; font-size=&quot;60&quot; text-anchor=&quot;middle&quot; fill=&quot;white&quot;&gt;SVG&lt;/text&gt;

&lt;/svg&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="svg-demo" tabindex="0" loading="lazy"><figcaption>svg-demo</figcaption></figure><p>其特点如下：</p><ul><li>不依赖分辨率</li><li>支持事件处理器</li><li>最适合带有大型渲染区域的应用程序（比如谷歌地图）</li><li>复杂度高会减慢渲染速度</li><li>不适合游戏应用</li></ul>',13),l=[c];function o(u,q){return s(),a("div",null,l)}const v=n(p,[["render",o],["__file","008-canvas-svg.html.vue"]]);export{v as default};