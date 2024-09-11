import{_ as t,r as e,o,c as p,a as n,d as s,b as c,e as i}from"./app-GIHD_PNT.js";const l={},r=i(`<p>webview 开发时，iOS 中 safari 浏览器对图片元素的 <code>touch</code> 事件有默认行为，会调出图片预览等功能，因此我们可以通过 <code>preventDefault</code> 方法来阻止默认行为。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> usePreventTouchEvent <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token operator">=</span> HTMLDivElement<span class="token operator">&gt;</span><span class="token punctuation">(</span>containerRef<span class="token operator">:</span> React<span class="token punctuation">.</span>RefObject<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> preventDefaultBehavior <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> touchEvents<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;touchend&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;touchmove&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> dragContainer <span class="token operator">=</span> containerRef<span class="token punctuation">.</span>current

    <span class="token keyword">if</span> <span class="token punctuation">(</span>dragContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      touchEvents<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>eventType<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        dragContainer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> preventDefaultBehavior<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          passive<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        touchEvents<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>eventType<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          dragContainer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> preventDefaultBehavior<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>containerRef<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> usePreventTouchEvent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u={class:"hint-container warning"},d=n("p",{class:"hint-container-title"},"注意",-1),k=n("p",null,[s("在 iOS 上，需要增加 "),n("code",null,"{ passive: false }"),s(" 参数，否则会导致 "),n("code",null,"touch"),s(" 事件的 "),n("code",null,"preventDefault()"),s(" 行为失效。")],-1),v={href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive",target:"_blank",rel:"noopener noreferrer"};function m(h,b){const a=e("ExternalLinkIcon");return o(),p("div",null,[r,n("div",u,[d,k,n("p",null,[s("详细见："),n("a",v,[s("addEventListener#passive"),c(a)]),s("。")])])])}const g=t(l,[["render",m],["__file","019-ios-prevent-touch.html.vue"]]),y=JSON.parse('{"path":"/frontend/practice/019-ios-prevent-touch.html","title":"iOS 阻止 touch 事件默认行为","lang":"zh-CN","frontmatter":{"title":"iOS 阻止 touch 事件默认行为","date":"2024-09-11T00:00:00.000Z","icon":"prevent-touch","category":["practice"],"tag":["兼容"],"description":"webview 开发时，iOS 中 safari 浏览器对图片元素的 touch 事件有默认行为，会调出图片预览等功能，因此我们可以通过 preventDefault 方法来阻止默认行为。 注意 在 iOS 上，需要增加 { passive: false } 参数，否则会导致 touch 事件的 preventDefault() 行为失效。 详细见：a...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/practice/019-ios-prevent-touch.html"}],["meta",{"property":"og:title","content":"iOS 阻止 touch 事件默认行为"}],["meta",{"property":"og:description","content":"webview 开发时，iOS 中 safari 浏览器对图片元素的 touch 事件有默认行为，会调出图片预览等功能，因此我们可以通过 preventDefault 方法来阻止默认行为。 注意 在 iOS 上，需要增加 { passive: false } 参数，否则会导致 touch 事件的 preventDefault() 行为失效。 详细见：a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T03:50:22.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"兼容"}],["meta",{"property":"article:published_time","content":"2024-09-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T03:50:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iOS 阻止 touch 事件默认行为\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T03:50:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[],"git":{"createdTime":1726026622000,"updatedTime":1726026622000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"frontend/practice/019-ios-prevent-touch.md","localizedDate":"2024年9月11日","excerpt":"","autoDesc":true}');export{g as comp,y as data};
