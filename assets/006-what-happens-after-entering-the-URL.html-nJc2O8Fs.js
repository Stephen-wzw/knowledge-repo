const e=JSON.parse('{"key":"v-31bc2c75","path":"/frontend/browser/006-what-happens-after-entering-the-URL.html","title":"输入 URL 后发生了什么","lang":"zh-CN","frontmatter":{"title":"输入 URL 后发生了什么","date":"2021-12-11T00:00:00.000Z","category":["计算机网络"],"tag":["vue"],"description":"先看看大致流程： 1. 生成 HTTP 请求消息：当用户在浏览器中输入网址，浏览器就会对 URL 进行解析；然后浏览器会根据网址的含义来生成请求消息； 2. 向 DNS 服务器查询 Web 服务器的 IP 地址：请求消息生成后，浏览器向 DNS 服务器查询域名对应的 IP 地址，然后委托操作系统（浏览器本身并没有网络通讯的能力）向 Web 服务器发送请...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/browser/006-what-happens-after-entering-the-URL.html"}],["meta",{"property":"og:title","content":"输入 URL 后发生了什么"}],["meta",{"property":"og:description","content":"先看看大致流程： 1. 生成 HTTP 请求消息：当用户在浏览器中输入网址，浏览器就会对 URL 进行解析；然后浏览器会根据网址的含义来生成请求消息； 2. 向 DNS 服务器查询 Web 服务器的 IP 地址：请求消息生成后，浏览器向 DNS 服务器查询域名对应的 IP 地址，然后委托操作系统（浏览器本身并没有网络通讯的能力）向 Web 服务器发送请..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-07T05:30:24.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:published_time","content":"2021-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T05:30:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"输入 URL 后发生了什么\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-07T05:30:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 生成 HTTP 请求消息","slug":"生成-http-请求消息","link":"#生成-http-请求消息","children":[{"level":3,"title":"1.1 省略文件名的情况","slug":"省略文件名的情况","link":"#省略文件名的情况","children":[]},{"level":3,"title":"1.2 生成请求消息","slug":"生成请求消息","link":"#生成请求消息","children":[]}]},{"level":2,"title":"2 向 DNS 服务器查询域名 IP 地址","slug":"向-dns-服务器查询域名-ip-地址","link":"#向-dns-服务器查询域名-ip-地址","children":[]},{"level":2,"title":"3 协议栈","slug":"协议栈","link":"#协议栈","children":[]},{"level":2,"title":"4 网卡","slug":"网卡","link":"#网卡","children":[]}],"git":{"createdTime":1707283824000,"updatedTime":1707283824000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":3,"words":901},"filePathRelative":"frontend/browser/006-what-happens-after-entering-the-URL.md","localizedDate":"2021年12月11日","excerpt":"","autoDesc":true}');export{e as data};
