import{_ as e,o as a,c as t,e as n}from"./app-SoEpyUBO.js";const s={},o=n(`<h2 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span><code>category</code></span></a></h2><p>接口路径：<code>/category</code>。</p><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span><code>list</code></span></a></h3><p>请求方法：<code>GET</code>。</p><p>描述：获取所有分类的列表。</p><p>请求参数：无。</p><p>响应数据：<code>Category[]</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Category</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  description<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">goods</span><span class="token operator">:</span> Commodity<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Commodity</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">price</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  description<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create" tabindex="-1"><a class="header-anchor" href="#create"><span><code>create</code></span></a></h3><p>请求方法：<code>POST</code>。</p><p>描述：创建分类。</p><p>请求参数：<code>Category</code>。</p><p>响应数据：<code>category_id: number</code>。</p>`,13),p=[o];function r(c,i){return a(),t("div",null,p)}const d=e(s,[["render",r],["__file","04-api.html.vue"]]),m=JSON.parse('{"path":"/project/imperial-kitchen/04-api.html","title":"接口设计","lang":"zh-CN","frontmatter":{"title":"接口设计","date":"2024-07-11T00:00:00.000Z","icon":"api","category":["Project"],"tag":["kitchen"],"description":"category 接口路径：/category。 list 请求方法：GET。 描述：获取所有分类的列表。 请求参数：无。 响应数据：Category[]。 create 请求方法：POST。 描述：创建分类。 请求参数：Category。 响应数据：category_id: number。 ","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/project/imperial-kitchen/04-api.html"}],["meta",{"property":"og:title","content":"接口设计"}],["meta",{"property":"og:description","content":"category 接口路径：/category。 list 请求方法：GET。 描述：获取所有分类的列表。 请求参数：无。 响应数据：Category[]。 create 请求方法：POST。 描述：创建分类。 请求参数：Category。 响应数据：category_id: number。 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-23T10:53:00.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"kitchen"}],["meta",{"property":"article:published_time","content":"2024-07-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-23T10:53:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-23T10:53:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 category","slug":"category","link":"#category","children":[{"level":3,"title":"1.1 list","slug":"list","link":"#list","children":[]},{"level":3,"title":"1.2 create","slug":"create","link":"#create","children":[]}]}],"git":{"createdTime":1721731980000,"updatedTime":1721731980000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"project/imperial-kitchen/04-api.md","localizedDate":"2024年7月11日","excerpt":"","autoDesc":true}');export{d as comp,m as data};
