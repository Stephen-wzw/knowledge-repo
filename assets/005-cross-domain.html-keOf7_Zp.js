import{_ as e,o as t,c as n,e as i}from"./app-_LprvjBg.js";const a={},o=i(`<p>跨域是因为浏览器的同源策略，协议、域名、端口三者不一致即会造成跨域问题。</p><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors"><span>CORS</span></a></h2><p>简单请求和非简单请求</p><h3 id="简单请求" tabindex="-1"><a class="header-anchor" href="#简单请求"><span>简单请求</span></a></h3><p>请求方法：</p><ul><li>HEAD</li><li>GET</li><li>POST</li></ul><p>请求头：</p><ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Last-Event-ID</li><li>Content-Type</li></ul><p>对于简单请求，浏览器会在请求头信息增加一个 origin 字段，该字段用来说明本次请求来自哪个源：协议+端口+域名。</p><p>服务器根据这个值来决定是否同意这次请求，如果 origin 指定的源在允许范围内，服务器就返回如下响应头：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Access-Control-Allow-Origin: http://api.bob.com 和 origin 一致
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器至少设置 Access-Control-Allow-Origin。</p><h3 id="非简单请求" tabindex="-1"><a class="header-anchor" href="#非简单请求"><span>非简单请求</span></a></h3><p>需要进行 options 预检请求。</p><p>请求头</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Access-Control-Request-Method 必须
Access-Control-Request-Headers 逗号分隔符，指定请求会额外发送的头信息字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应头：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Access-Control-Allow-Origin: http://api.bob.com 和 origin 一致
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: FooBar
Access-Control-Max-Age: 1728000 本次预检的有效期，秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[o];function r(s,c){return t(),n("div",null,l)}const p=e(a,[["render",r],["__file","005-cross-domain.html.vue"]]),m=JSON.parse('{"path":"/frontend/browser/005-cross-domain.html","title":"跨域","lang":"zh-CN","frontmatter":{"title":"跨域","date":"2022-05-06T00:00:00.000Z","category":["浏览器"],"tag":["跨域"],"description":"跨域是因为浏览器的同源策略，协议、域名、端口三者不一致即会造成跨域问题。 CORS 简单请求和非简单请求 简单请求 请求方法： HEAD GET POST 请求头： Accept Accept-Language Content-Language Last-Event-ID Content-Type 对于简单请求，浏览器会在请求头信息增加一个 origi...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/browser/005-cross-domain.html"}],["meta",{"property":"og:title","content":"跨域"}],["meta",{"property":"og:description","content":"跨域是因为浏览器的同源策略，协议、域名、端口三者不一致即会造成跨域问题。 CORS 简单请求和非简单请求 简单请求 请求方法： HEAD GET POST 请求头： Accept Accept-Language Content-Language Last-Event-ID Content-Type 对于简单请求，浏览器会在请求头信息增加一个 origi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-07T05:30:24.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"跨域"}],["meta",{"property":"article:published_time","content":"2022-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T05:30:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跨域\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-07T05:30:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 CORS","slug":"cors","link":"#cors","children":[{"level":3,"title":"1.1 简单请求","slug":"简单请求","link":"#简单请求","children":[]},{"level":3,"title":"1.2 非简单请求","slug":"非简单请求","link":"#非简单请求","children":[]}]}],"git":{"createdTime":1707283824000,"updatedTime":1707283824000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":0.99,"words":297},"filePathRelative":"frontend/browser/005-cross-domain.md","localizedDate":"2022年5月6日","excerpt":"","autoDesc":true}');export{p as comp,m as data};
