import{_ as a,V as s,W as n,a0 as t}from"./framework-a71e09ed.js";const e={},p=t(`<p>在 HTML 中，每个 HTML 文档必须以 DOCTYPE 开头，它的目的在于告诉浏览器应该以什么样的文档类型定义（Document Type Definition, DTD）来解析文档。</p><p><strong>在 HTML5 以前，HTML 都是基于标准通用标记语言（Standard Generalized Markup Language，SGML）来实现的，而 SGML 使用 DTD 来定义不同版本的语法。</strong></p><blockquote><p>DTD 是一套关于标记符的语法规则。</p></blockquote><p>那么不同的 DOCTYPE 有什么区别呢，这就涉及到了浏览器的渲染模式。</p><h2 id="浏览器渲染模式" tabindex="-1"><a class="header-anchor" href="#浏览器渲染模式" aria-hidden="true">#</a> 浏览器渲染模式</h2><p>目前浏览器的排版引擎使用三种渲染模式，之所以会出现三种渲染模式，是因为以前并没有一个统一的标准，当 W3C 创立网络标准后，现在需要兼容以前的页面，因此出现了不同的渲染模式。</p><ul><li>怪异模式（Quirks mode）：以一种宽松的向后兼容的方式解析页面；</li><li>接近标准模式（Almost standards mode）：尝试以新标准处理旧标准的页面；</li><li>标准模式（Standards mode）：遵循浏览器支持的最新标准渲染解析页面。</li></ul><p>不同的 DOCTYPE 会决定浏览器以不同的渲染模式解析页面，如果文档没有声明或者使用了错误的 DOCTYPE，那么会导致浏览器以怪异模式来渲染页面。</p><h2 id="html4-doctype" tabindex="-1"><a class="header-anchor" href="#html4-doctype" aria-hidden="true">#</a> HTML4 DOCTYPE</h2><p>HTML4 的 DOCTYPE 类型一共有三种：</p><p><strong>HTML4 Strict</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/strict.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>HTML4 Transitional</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/loose.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>HTML4 Frameset</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01 Frameset//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/frameset.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="html5" tabindex="-1"><a class="header-anchor" href="#html5" aria-hidden="true">#</a> HTML5</h2><p>因为 HTML5 不基于 SGML，没有为之定义的 DTD，所以理论上 HTML5 不需要再声明 DOCTYPE。</p><p>但是前面提到了：<strong>如果文档没有声明或者使用了错误的 DOCTYPE，那么会导致浏览器以怪异模式来渲染页面</strong>。因此，HTML5 使用了以下 DOCTYPE：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),l=[p];function o(c,d){return s(),n("div",null,l)}const r=a(e,[["render",o],["__file","0001、DOCTYPE.html.vue"]]);export{r as default};
