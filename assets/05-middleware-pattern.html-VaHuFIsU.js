import{_ as n,o as s,c as a,e as t}from"./app-X_7Zfu5i.js";const e={},p=t(`<h2 id="中间件模式" tabindex="-1"><a class="header-anchor" href="#中间件模式"><span>中间件模式</span></a></h2><p>中间件模式是一种行为设计模式， 允许你将请求沿着处理者链进行发送。收到请求后，每个处理者均可对请求进行处理，或将其传递给链上的下个处理者。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Express 就使用了中间件模式处理请求。中间件模式是 Express 核心架构的一部分，它允许你在处理请求的过程中，通过一系列中间件函数来对请求和响应对象进行操作。中间件在请求-响应生命周期中充当「处理链」中的一个节点，既可以终止请求（发送响应），也可以将请求传递给下一个中间件。</p></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行某些逻辑</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用 next() 将请求传递给下一个中间件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240918173949.png" alt="20240918173949" tabindex="0" loading="lazy"><figcaption>20240918173949</figcaption></figure><h2 id="express-中间件" tabindex="-1"><a class="header-anchor" href="#express-中间件"><span>Express 中间件</span></a></h2><p>Express 通过 <code>app.use()</code> 来定义中间件，并作用于整个应用程序的请求处理过程。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Request received at:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 继续到下一个中间件</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单的中间件实现" tabindex="-1"><a class="header-anchor" href="#简单的中间件实现"><span>简单的中间件实现</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MiddlewareManager</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> readonly middlewares<span class="token operator">:</span> Middleware<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>middlewares <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">func</span><span class="token operator">:</span> Middleware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>middlewares<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> CustomIncomingMessage<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> ServerResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">runner</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">index</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> middleware <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>middlewares<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>middleware<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">middleware</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">runner</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">runner</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","05-middleware-pattern.html.vue"]]),d=JSON.parse('{"path":"/reading/patterns/vanilla/05-middleware-pattern.html","title":"中间件模式","lang":"zh-CN","frontmatter":{"title":"中间件模式","date":"2024-09-18T00:00:00.000Z","icon":"middleware","author":"patterns","category":["reading"],"tag":["design pattern","vanilla","middleware-pattern"],"description":"中间件模式 中间件模式是一种行为设计模式， 允许你将请求沿着处理者链进行发送。收到请求后，每个处理者均可对请求进行处理，或将其传递给链上的下个处理者。 相关信息 Express 就使用了中间件模式处理请求。中间件模式是 Express 核心架构的一部分，它允许你在处理请求的过程中，通过一系列中间件函数来对请求和响应对象进行操作。中间件在请求-响应生命周...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/reading/patterns/vanilla/05-middleware-pattern.html"}],["meta",{"property":"og:title","content":"中间件模式"}],["meta",{"property":"og:description","content":"中间件模式 中间件模式是一种行为设计模式， 允许你将请求沿着处理者链进行发送。收到请求后，每个处理者均可对请求进行处理，或将其传递给链上的下个处理者。 相关信息 Express 就使用了中间件模式处理请求。中间件模式是 Express 核心架构的一部分，它允许你在处理请求的过程中，通过一系列中间件函数来对请求和响应对象进行操作。中间件在请求-响应生命周..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240918173949.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-18T10:01:10.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"中间件模式"}],["meta",{"property":"article:author","content":"patterns"}],["meta",{"property":"article:tag","content":"design pattern"}],["meta",{"property":"article:tag","content":"vanilla"}],["meta",{"property":"article:tag","content":"middleware-pattern"}],["meta",{"property":"article:published_time","content":"2024-09-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-18T10:01:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中间件模式\\",\\"image\\":[\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240918173949.png\\"],\\"datePublished\\":\\"2024-09-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-18T10:01:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"patterns\\"}]}"]]},"headers":[{"level":2,"title":"1 中间件模式","slug":"中间件模式","link":"#中间件模式","children":[]},{"level":2,"title":"2 Express 中间件","slug":"express-中间件","link":"#express-中间件","children":[]},{"level":2,"title":"3 简单的中间件实现","slug":"简单的中间件实现","link":"#简单的中间件实现","children":[]}],"git":{"createdTime":1726653670000,"updatedTime":1726653670000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":1.21,"words":363},"filePathRelative":"reading/patterns/vanilla/05-middleware-pattern.md","localizedDate":"2024年9月18日","excerpt":"","autoDesc":true}');export{u as comp,d as data};
