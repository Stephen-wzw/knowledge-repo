import{_ as t,V as a,W as r,X as e,Y as l,$ as n,a0 as d,C as s}from"./framework-a71e09ed.js";const T={},o=d(`<p>整个 HTTP 的演变史就是一个在不断优化性能的过程。</p><h2 id="http-0-9-单行协议" tabindex="-1"><a class="header-anchor" href="#http-0-9-单行协议" aria-hidden="true">#</a> HTTP/0.9 - 单行协议</h2><p>最初版本的 HTTP 协议并没有版本号，后来它的版本号被定位在 0.9 以区分后来的版本。</p><p>HTTP/0.9 极其简单：请求由单行指令构成，以唯一可用方法 GET 开头，其后跟目标资源的路径（一旦连接到服务器，协议、服务器、端口号这些都不是必须的）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /mypage.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HTTP/0.9 的响应内容不包含 HTTP 头，这意味着只有 HTML 文件可以传送，无法传送其他类型的文件；也没有状态码或错误代码；一旦出现问题，一个特殊的包含问题描述信息的 HTML 文件将会被返回。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;HTML&gt;
这是一个非常简单的HTML页面
&lt;/HTML&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ul><li>请求只有一个请求行；</li><li>响应只有一个响应体，且只能返回 HTML 文件；</li></ul><h2 id="http-1-0-构建可扩展性" tabindex="-1"><a class="header-anchor" href="#http-1-0-构建可扩展性" aria-hidden="true">#</a> HTTP/1.0 - 构建可扩展性</h2><p>由于 HTTP/0.9 协议的应用十分有限，HTTP/1.0 在其基础上增加了很多新特性：</p><ul><li>协议版本信息现在会随着每个请求行发送。</li><li>状态码在响应开始时发送，使浏览器能了解请求执行成功或失败，并调整相应行为（如更新或使用本地缓存）。</li><li>引入了 HTTP 头的概念，使协议变得灵活易扩展。</li><li>Content-Type 头使传输除 HTML 文件以为其他类型文件的可能。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 请求
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

// 响应
200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
&lt;HTML&gt;
一个包含图片的页面
  &lt;IMG SRC=&quot;/myimage.gif&quot;&gt;
&lt;/HTML&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-1-1" tabindex="-1"><a class="header-anchor" href="#http-1-1" aria-hidden="true">#</a> HTTP/1.1</h2><p>HTTP/1.0 采用短连接方式，即每次请求一个文件都需要和浏览器建立 TCP 连接，当收到响应后就会立即关闭连接，这样会造成不必要的时间开销。</p><p>为了减少时延，浏览器通常会建立多个并行的 TCP 连接同时请求多个对象。但是这会占用大量服务器的资源。</p><p>HTTP/1.1 相比于 HTTP/1.0 性能上的改进：</p><ul><li>使用 TCP 长连接的方式改善了 HTTP/1.0 短连接造成的性能开销；</li><li>支持管道网络传输，只要第一个请求发出，不必等待响应，就可以直接发送第二个请求，减少整体的响应时间（流水线方式工作）。</li></ul><p>但是 HTTP/1.1 还是有性能瓶颈：</p><ul><li>只能压缩 body 部分，请求/响应头部未经压缩就发送，头部信息越多延迟越大；</li><li>发送冗长的首部，每次互相发送相同的首部造成的浪费比较多；</li><li>服务器是按请求顺序响应的，如果服务器响应过慢，会导致客户端一直请求不到后面的数据，也就是<strong>队头阻塞</strong>；</li><li>没有请求优先级控制；</li><li>请求只能从客户端开始，服务器只能被动响应。</li></ul><h2 id="http-2-0" tabindex="-1"><a class="header-anchor" href="#http-2-0" aria-hidden="true">#</a> HTTP/2.0</h2><p>HTTP/2.0 是基于 HTTPS 的，所以安全性有所保证。HTTP/2.0 相比 HTTP/1.1 性能上的改进：</p><ul><li>头部压缩：如果同时发出多个请求，他们的头是一样或相似的，那么协议会消除重复的部分；</li><li>采用二进制格式：头信息和数据体都是二进制，并统称为帧，头信息帧和数据帧，增加了数据传输的效率；</li><li>多路复用：可以在一个连接中并发多个请求或响应，而不用按照顺序一一对应，解决了队头阻塞的问题；</li><li>可以指定数据流的优先级；</li><li>服务器可以主动向客户端发送消息。</li></ul><p>缺陷在于：多个 HTTP 请求复用一个 TCP 连接，一旦发生丢包现象，就会触发 TCP 的重传机制，这样在一个 TCP 连接中的所有 HTTP 请求都必须等待这个丢了的包被重传回来。</p><h2 id="http-3-0" tabindex="-1"><a class="header-anchor" href="#http-3-0" aria-hidden="true">#</a> HTTP/3.0</h2><p>HTTP/2.0 基于 TCP 传输层，导致丢包下阻塞所有 HTTP 请求的问题，因此 HTTP/3.0 把 HTTP 下层的 TCP 协议改成了 UDP。</p><p>UDP 是不可靠传输，但是基于 UDP 的 QUIC 协议可以实现类似 TCP 的可靠传输。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,28),c={href:"https://xiaolincoding.com/network/2_http/http_interview.html#http-1-1%E3%80%81http-2%E3%80%81http-3-%E6%BC%94%E5%8F%98",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP#%E5%90%8Ehttp2%E8%BF%9B%E5%8C%96",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.bilibili.com/video/BV1c4411d7jb?p=73",target:"_blank",rel:"noopener noreferrer"};function u(v,P){const i=s("ExternalLinkIcon");return a(),r("div",null,[o,e("p",null,[e("a",c,[l("3.1 HTTP 常见面试题 | 小林coding (xiaolincoding.com)"),n(i)])]),e("p",null,[e("a",h,[l("HTTP的发展 - HTTP | MDN (mozilla.org)"),n(i)])]),e("p",null,[e("a",p,[l("计算机网络微课堂（有字幕无背景音乐版）_哔哩哔哩_bilibili"),n(i)])])])}const H=t(T,[["render",u],["__file","0007、HTTP性能演变.html.vue"]]);export{H as default};
