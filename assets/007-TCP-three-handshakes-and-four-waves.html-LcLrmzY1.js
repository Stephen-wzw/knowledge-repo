import{_ as o,r as n,o as r,c,a as e,d as a,b as s,e as i}from"./app-_LprvjBg.js";const p="/blog/assets/image/computer-science/networking/007/three.png",d="/blog/assets/image/computer-science/networking/007/four.png",l={},g=i('<p>传输层控制协议（Transmission Control Protocol, TCP）是一种面向连接的、可靠的、基于字节流的传输层通信协议。</p><h2 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手"><span>三次握手</span></a></h2><p>三报文握手具体过程（客户端和服务端交换三个报文段）：</p><figure><img src="'+p+'" alt="三次握手" tabindex="0" loading="lazy"><figcaption>三次握手</figcaption></figure><p><strong>第一次握手：</strong></p><p>起初两端都处于 <code>CLOSED</code> 关闭状态。一开始，服务器就进入监听状态，被动等待客户端的连接请求。</p><p>在打算建立 TCP 连接时，客户端将同步请求标志 <code>SYN=1</code> 和随机初始序号 <code>seq=x</code> 发送给服务器，客户端进入 <code>SYN-SENT</code> （同步已发送）状态，等待服务器确认。</p><p><strong>第二次握手：</strong></p><p>服务器收到数据包后由同步位 <code>SYN=1</code> 得知客户端请求建立连接。</p><p>服务器发送同步请求标志 <code>SYN=1</code>、确认标志 <code>ACK=1</code>、随机初始序号 <code>seq=y</code> 以及确认号字段 <code>ack=x+1</code>，发送给客户端，并进入 <code>SYN-RCVD</code> （同步已接收）状态。</p><p><strong>第三次握手：</strong></p><p>客户端收到确认后，检查 <code>ack</code> 是否为 <code>x+1</code>，<code>ACK</code> 是否为 <code>1</code>，如果正确则发送确认标志 <code>ACK=1</code>、序号 <code>seq=x+1</code> 以及确认号 <code>ack=y+1</code>，并进入连接已建立状态 <code>ESTABLISHED</code>。</p><p>服务器收到消息后，检查 <code>ack</code> 是否为 <code>y+1</code>，<code>ACK</code> 是否为 <code>1</code>，如果成功则建立连接。 进入连接已建立状态 <code>ESTABLISHED</code>。</p><p><strong>能否采用两报文握手？</strong></p><p>如果客户端发出连接请求，但因网络延迟而未收到确认，于是客户端再次发送一个连接请求，服务端收到确认，由于是两次握手，此时就会建立连接，等数据传输完毕后，释放连接。</p><p>此时第一个请求报文经过一段时间到达服务端，于是服务端收到确认，由于采用两次握手，此时就已同意建立连接，客户端不需要对服务端的确认报文发出响应，也不继续发送数据，导致连接一直建立，浪费资源。</p><h2 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手"><span>四次挥手</span></a></h2><p>四报文挥手来释放连接（现二者均处于连接已建立状态，假设客户端主动关闭 TCP 连接）：</p><figure><img src="'+d+'" alt="四次挥手" tabindex="0" loading="lazy"><figcaption>四次挥手</figcaption></figure><p><strong>第一次挥手：</strong></p><p>客户端发送 TCP 连接释放报文段，并进入<strong>终止等待 1 状态</strong>。</p><p>该报文段首部种的终止位 FIN 和确认位 ACK 都设置为 1 ，表明这是一个 TCP 连接释放报文段，同时也对之前收到的报文段进行确认。</p><p>序号 seq = u，它等于之前客户端已经传送过的数据的最后一个字节的序号加 1 。确认号 ack 的值设置为 v ，它等于 TCP 客户进程之前已收到的数据的最后一个字节的序号加 1 。</p><p><strong>第二次挥手：</strong></p><p>服务端收到连接释放报文段后，会发送一个普通的 TCP 确认报文段并进入<strong>关闭等待状态</strong>。</p><p>该报文段首部中的确认位 ACK 被设置为 1；seq 设置为 v，它等于服务端之前已传送过的数据的最后一个字节的序号加 1 。确认号 ack 字段的值被设置为 u + 1，这是对连接释放报文的确认。</p><p>这个时候，客户端不能给服务端发送信息报文，只能接收。但是服务端要是还有信息要传给客户端，仍能传送。</p><p><strong>第三次挥手：</strong></p><p>客户端收到确认报文段后就进入<strong>终止等待 2 状态</strong>，当服务器数据发送完毕后，给客户端发送 TCP 连接释放报文段并进入<strong>最后确认状态</strong>。</p><p>该报文段首部中的终止位 FIN 和确认位 ACK 的值都设置为 1 ，seq = w ，ack = u + 1 。</p><p><strong>第四次挥手：</strong></p><p>客户端收到连接释放报文段后，需要向服务端发送 TCP 确认报文段，并进入<strong>时间等待状态</strong>。</p><p>首部中的确认位 ACK = 1 ，seq = u + 1 ，ack = w + 1 ，这是对 TCP 连接释放报文段的确认。</p><p>服务端 收到该报文后就进入<strong>关闭状态</strong>，而 客户端 还要经过 2MSL 后才能进入<strong>关闭状态</strong>。</p><blockquote><p>MSL，最长报文段寿命，一般为 2 分钟。</p></blockquote><p><strong>为什么最后还要等待两个时间周期呢？</strong></p><ul><li>客户端的最后一个 ACK 报文在传输的时候丢失，服务器并没有接收到这个报文。这个候时候服务器就会超时重传这个 FIN 消息，然后客户端就会重新返回最后一个 ACK 报文，等待两个时间周期，完成关闭。</li><li>如果不等待这两个时间周期，服务器重传的那条消息就不会收到。服务器就因为接收不到客户端的信息而无法正常关闭。</li></ul><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>',38),m={href:"https://www.bilibili.com/video/BV1c4411d7jb",target:"_blank",rel:"noopener noreferrer"};function h(u,C){const t=n("ExternalLinkIcon");return r(),c("div",null,[g,e("p",null,[e("a",m,[a("计算机网络微课堂"),s(t)])])])}const T=o(l,[["render",h],["__file","007-TCP-three-handshakes-and-four-waves.html.vue"]]),P=JSON.parse('{"path":"/computer-science/networking/007-TCP-three-handshakes-and-four-waves.html","title":"TCP 三次握手与四次挥手","lang":"zh-CN","frontmatter":{"title":"TCP 三次握手与四次挥手","date":"2022-05-06T00:00:00.000Z","icon":"hand","category":["计算机网络"],"tag":["TCP"],"description":"传输层控制协议（Transmission Control Protocol, TCP）是一种面向连接的、可靠的、基于字节流的传输层通信协议。 三次握手 三报文握手具体过程（客户端和服务端交换三个报文段）： 三次握手三次握手 第一次握手： 起初两端都处于 CLOSED 关闭状态。一开始，服务器就进入监听状态，被动等待客户端的连接请求。 在打算建立 TCP...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/computer-science/networking/007-TCP-three-handshakes-and-four-waves.html"}],["meta",{"property":"og:title","content":"TCP 三次握手与四次挥手"}],["meta",{"property":"og:description","content":"传输层控制协议（Transmission Control Protocol, TCP）是一种面向连接的、可靠的、基于字节流的传输层通信协议。 三次握手 三报文握手具体过程（客户端和服务端交换三个报文段）： 三次握手三次握手 第一次握手： 起初两端都处于 CLOSED 关闭状态。一开始，服务器就进入监听状态，被动等待客户端的连接请求。 在打算建立 TCP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dribble-njr.github.io/blog/blog/assets/image/computer-science/networking/007/three.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-07T05:30:24.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"TCP 三次握手与四次挥手"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"TCP"}],["meta",{"property":"article:published_time","content":"2022-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T05:30:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP 三次握手与四次挥手\\",\\"image\\":[\\"https://dribble-njr.github.io/blog/blog/assets/image/computer-science/networking/007/three.png\\",\\"https://dribble-njr.github.io/blog/blog/assets/image/computer-science/networking/007/four.png\\"],\\"datePublished\\":\\"2022-05-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-07T05:30:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 三次握手","slug":"三次握手","link":"#三次握手","children":[]},{"level":2,"title":"2 四次挥手","slug":"四次挥手","link":"#四次挥手","children":[]},{"level":2,"title":"3 参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1677733227000,"updatedTime":1707283824000,"contributors":[{"name":"Stephen-wzw","email":"wzw15292257101@163.com","commits":2},{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":4.24,"words":1271},"filePathRelative":"computer-science/networking/007-TCP-three-handshakes-and-four-waves.md","localizedDate":"2022年5月6日","excerpt":"","autoDesc":true}');export{T as comp,P as data};
