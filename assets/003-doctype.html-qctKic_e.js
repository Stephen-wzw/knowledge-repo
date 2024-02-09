import{_ as t,o as e,c as a,e as n}from"./app-_LprvjBg.js";const s={},o=n(`<p>在 HTML 中，每个 HTML 文档必须以 DOCTYPE 开头，它的目的在于告诉浏览器应该以什么样的文档类型定义（Document Type Definition, DTD）来解析文档。</p><div class="hint-container info"><p class="hint-container-title">DTD</p><p>DTD：文档类型定义，是一套关于标记符的语法规则。</p><p>在 HTML5 以前，HTML 都是基于标准通用标记语言（Standard Generalized Markup Language，SGML）来实现的，而 SGML 使用 DTD 来定义不同版本的语法。</p></div><p>那么不同的 DOCTYPE 有什么区别呢，这就涉及到了浏览器的渲染模式。</p><h2 id="浏览器渲染模式" tabindex="-1"><a class="header-anchor" href="#浏览器渲染模式"><span>浏览器渲染模式</span></a></h2><p>目前浏览器的排版引擎使用三种渲染模式，之所以会出现三种渲染模式，是因为以前并没有一个统一的标准，当 W3C 创立网络标准后，现在需要兼容以前的页面，因此出现了不同的渲染模式。</p><ul><li>怪异模式（Quirks mode）：以一种宽松的向后兼容的方式解析页面；</li><li>接近标准模式（Almost standards mode）：尝试以新标准处理旧标准的页面；</li><li>标准模式（Standards mode）：遵循浏览器支持的最新标准渲染解析页面。</li></ul><p>不同的 DOCTYPE 会决定浏览器以不同的渲染模式解析页面，如果文档没有声明或者使用了错误的 DOCTYPE，那么会导致浏览器以怪异模式来渲染页面。</p><h2 id="html4-doctype" tabindex="-1"><a class="header-anchor" href="#html4-doctype"><span>HTML4 DOCTYPE</span></a></h2><p>HTML4 的 DOCTYPE 类型一共有三种：</p><p><strong>HTML4 Strict</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/strict.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>HTML4 Transitional</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/loose.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>HTML4 Frameset</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01 Frameset//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/frameset.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="html5-doctype" tabindex="-1"><a class="header-anchor" href="#html5-doctype"><span>HTML5 DOCTYPE</span></a></h2><p>因为 HTML5 不基于 SGML，没有为之定义的 DTD，所以理论上 HTML5 不需要再声明 DOCTYPE。</p><p>但是前面提到了：<strong>如果文档没有声明或者使用了错误的 DOCTYPE，那么会导致浏览器以怪异模式来渲染页面</strong>。因此，HTML5 使用了以下 DOCTYPE：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),l=[o];function p(i,c){return e(),a("div",null,l)}const d=t(s,[["render",p],["__file","003-doctype.html.vue"]]),m=JSON.parse('{"path":"/frontend/basic/html/003-doctype.html","title":"DOCTYPE","lang":"zh-CN","frontmatter":{"title":"DOCTYPE","date":"2023-03-22T00:00:00.000Z","icon":"doc","category":["HTML"],"tag":["frontend","html","basic-knowledge"],"description":"在 HTML 中，每个 HTML 文档必须以 DOCTYPE 开头，它的目的在于告诉浏览器应该以什么样的文档类型定义（Document Type Definition, DTD）来解析文档。 DTD DTD：文档类型定义，是一套关于标记符的语法规则。 在 HTML5 以前，HTML 都是基于标准通用标记语言（Standard Generalized M...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/basic/html/003-doctype.html"}],["meta",{"property":"og:title","content":"DOCTYPE"}],["meta",{"property":"og:description","content":"在 HTML 中，每个 HTML 文档必须以 DOCTYPE 开头，它的目的在于告诉浏览器应该以什么样的文档类型定义（Document Type Definition, DTD）来解析文档。 DTD DTD：文档类型定义，是一套关于标记符的语法规则。 在 HTML5 以前，HTML 都是基于标准通用标记语言（Standard Generalized M..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-25T10:47:40.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"frontend"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:tag","content":"basic-knowledge"}],["meta",{"property":"article:published_time","content":"2023-03-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-25T10:47:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DOCTYPE\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-25T10:47:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 浏览器渲染模式","slug":"浏览器渲染模式","link":"#浏览器渲染模式","children":[]},{"level":2,"title":"2 HTML4 DOCTYPE","slug":"html4-doctype","link":"#html4-doctype","children":[]},{"level":2,"title":"3 HTML5 DOCTYPE","slug":"html5-doctype","link":"#html5-doctype","children":[]}],"git":{"createdTime":1679482294000,"updatedTime":1679741260000,"contributors":[{"name":"Stephen-wzw","email":"wzw15292257101@163.com","commits":1},{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":1.64,"words":493},"filePathRelative":"frontend/basic/html/003-doctype.md","localizedDate":"2023年3月22日","excerpt":"","autoDesc":true}');export{d as comp,m as data};
