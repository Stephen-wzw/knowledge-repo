import{_ as r,r as a,o,c as d,a as e,d as t,b as i,e as l}from"./app-_LprvjBg.js";const s={},c=l(`<p>超文本传输协议（HyperText Transfer Protocol, HTTP）一般是用于浏览器和服务器之间传输文字、图片、音频视频等超文本数据的应用层协议。</p><h2 id="http-协议特性" tabindex="-1"><a class="header-anchor" href="#http-协议特性"><span>HTTP 协议特性</span></a></h2><ul><li>简单：HTTP 基本的报文格式就是 header + body，头部信息也是 key-value 的简单文本形式，易于理解，降低了学习和使用的门槛。</li><li>灵活易扩展：HTTP/1.0 出现的 HTTP headers 让协议扩展变得非常容易，只要服务端和客户端对新 headers 达成语义一致，新功能就可以被添加进来。</li><li>无连接：每次连接只处理一个请求。服务器处理完客户端的请求，并收到客户端的应答后，就会断开连接，HTTP 1.1 可以开启长连接。</li><li>无状态：对于事物处理没有记忆能力。因此浏览器无法保存用户的登录信息，每次进行需要登录才能执行的操作时，都需要输入用户名和密码。而 cookie 可以创建有状态的会话。好处在于服务器不会记忆 HTTP 的状态，能减轻服务器的压力。</li><li>明文传输：给调试带来便利性，但是用户毫无隐私可言，不安全。</li></ul><h2 id="http-报文格式" tabindex="-1"><a class="header-anchor" href="#http-报文格式"><span>HTTP 报文格式</span></a></h2><h3 id="请求报文格式" tabindex="-1"><a class="header-anchor" href="#请求报文格式"><span>请求报文格式</span></a></h3><p>客户端发送 HTTP 请求到服务器的请求消息：<strong>请求行、请求头、空行和请求体四个部分组成。</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>POST / HTTP1.1
Host:www.wrox.com
User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
Content-Type:application/x-www-form-urlencoded
Content-Length:40
Connection: Keep-Alive

name=Professional%20Ajax&amp;publisher=Wiley
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一部分：请求行，请求方法 + URI + HTTP 版本。</p><p>第二部分：请求头部。</p><p>第三部分：空行。</p><p>第四部分：请求数据。</p><h3 id="响应报文格式" tabindex="-1"><a class="header-anchor" href="#响应报文格式"><span>响应报文格式</span></a></h3><p>服务器响应也由四个部分组成，分别是：<strong>响应行、响应头、空行和响应体</strong>。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>HTTP/1.1 200 OK
Date: Fri, 22 May 2009 06:07:21 GMT
Content-Type: text/html; charset=UTF-8

&lt;html&gt;
  &lt;head&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;!--body goes here--&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-常见状态码" tabindex="-1"><a class="header-anchor" href="#http-常见状态码"><span>HTTP 常见状态码</span></a></h2><ul><li>1xx：提示信息，表示目前是协议处理的中间状态，还需进一步操作；</li><li>2xx：成功，表示请求已被成功收到并正确处理；</li><li>3xx：重定向，资源位置发生变动，需要客户端重新发送请求；</li><li>4xx：客户端错误，请求报文有误，服务器无法处理；</li><li>5xx：服务器错误，服务器在处理请求时内部发生了错误。</li></ul><table><thead><tr><th>常见状态码</th><th>状态描述</th></tr></thead><tbody><tr><td>200 OK</td><td>客户端请求成功</td></tr><tr><td>400 Bad Request</td><td>客户端请求有语法错误，不能被服务器所理解</td></tr><tr><td>401 Unauthorized</td><td>请求未经授权，这个状态代码必须和 WWW-Authenticate 报头域一起使用</td></tr><tr><td>403 Forbidden</td><td>服务器收到请求，但是拒绝提供服务</td></tr><tr><td>404 Not Found</td><td>请求资源不存在，举个例子：输入了错误的 URL</td></tr><tr><td>500 Internal Server Error</td><td>服务器发生不可预期的错误</td></tr><tr><td>503 Server Unavailable</td><td>服务器当前不能处理客户端的请求，一段时间后可能恢复正常</td></tr></tbody></table>`,17),p={class:"hint-container tip"},h=e("p",{class:"hint-container-title"},"提示",-1),T={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"},m=l('<h2 id="http-常见的字段" tabindex="-1"><a class="header-anchor" href="#http-常见的字段"><span>HTTP 常见的字段</span></a></h2><ul><li>Host：指定服务器的域名；</li><li>Content-length：服务器返回数据时，告知本次响应的数据长度；</li><li>Connection：客户端告知服务器使用 TCP 持久连接（HTTP1.1 的改进），以便其他请求复用，字段值为 <code>Connection: keep-alive</code>；</li><li>Accept：客户端请求时，表明自己可以接受哪些数据格式，<code>Accept: */*</code>，表明可以接受任何格式；</li><li>Content-Type：服务器响应时告知客户端本次数据的格式，<code>Content-Type: text/html; charset=utf-8</code>，表明发送的是网页，编码是 UTF-8；</li><li>Accept-Encoding：客户端可以接受哪些压缩方法；</li><li>Content-Encoding：服务器返回的数据使用了何种压缩格式，<code>Content-Encoding: gzip</code>。</li></ul>',2),v={class:"hint-container tip"},u=e("p",{class:"hint-container-title"},"提示",-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener noreferrer"};function g(P,H){const n=a("ExternalLinkIcon");return o(),d("div",null,[c,e("div",p,[h,e("p",null,[t("详细状态码请见"),e("a",T,[t("MDN 文档"),i(n)]),t("。")])]),m,e("div",v,[u,e("p",null,[t("详细字段请见"),e("a",b,[t("MDN 文档"),i(n)]),t("。")])])])}const _=r(s,[["render",g],["__file","002-HTTP-overview.html.vue"]]),y=JSON.parse('{"path":"/computer-science/networking/002-HTTP-overview.html","title":"HTTP 概述","lang":"zh-CN","frontmatter":{"title":"HTTP 概述","date":"2022-04-20T00:00:00.000Z","icon":"STARTUP","category":["计算机网络"],"tag":["HTTP"],"description":"超文本传输协议（HyperText Transfer Protocol, HTTP）一般是用于浏览器和服务器之间传输文字、图片、音频视频等超文本数据的应用层协议。 HTTP 协议特性 简单：HTTP 基本的报文格式就是 header + body，头部信息也是 key-value 的简单文本形式，易于理解，降低了学习和使用的门槛。 灵活易扩展：HTTP...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/computer-science/networking/002-HTTP-overview.html"}],["meta",{"property":"og:title","content":"HTTP 概述"}],["meta",{"property":"og:description","content":"超文本传输协议（HyperText Transfer Protocol, HTTP）一般是用于浏览器和服务器之间传输文字、图片、音频视频等超文本数据的应用层协议。 HTTP 协议特性 简单：HTTP 基本的报文格式就是 header + body，头部信息也是 key-value 的简单文本形式，易于理解，降低了学习和使用的门槛。 灵活易扩展：HTTP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-07T06:34:07.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"HTTP"}],["meta",{"property":"article:published_time","content":"2022-04-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T06:34:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP 概述\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-07T06:34:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 HTTP 协议特性","slug":"http-协议特性","link":"#http-协议特性","children":[]},{"level":2,"title":"2 HTTP 报文格式","slug":"http-报文格式","link":"#http-报文格式","children":[{"level":3,"title":"2.1 请求报文格式","slug":"请求报文格式","link":"#请求报文格式","children":[]},{"level":3,"title":"2.2 响应报文格式","slug":"响应报文格式","link":"#响应报文格式","children":[]}]},{"level":2,"title":"3 HTTP 常见状态码","slug":"http-常见状态码","link":"#http-常见状态码","children":[]},{"level":2,"title":"4 HTTP 常见的字段","slug":"http-常见的字段","link":"#http-常见的字段","children":[]}],"git":{"createdTime":1677733227000,"updatedTime":1707287647000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":3},{"name":"Stephen-wzw","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":3.3,"words":990},"filePathRelative":"computer-science/networking/002-HTTP-overview.md","localizedDate":"2022年4月20日","excerpt":"","autoDesc":true}');export{_ as comp,y as data};
