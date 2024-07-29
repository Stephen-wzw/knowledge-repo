import{_ as n,r as s,o as l,c as o,a as t,d as e,b as r,e as a}from"./app-SoEpyUBO.js";const d={},c=a('<p>在前端开发中移动端开发技能必不可少。当我们遇到类似于这样的问题：</p><ul><li>移动端 <code>Canvas</code> 渲染失败</li><li>微信获取 <code>openId</code> 回调页不匹配</li><li>微信浏览器文件上传失败</li><li>支付宝，微信 <code>H5</code> 支付域名校验不匹配</li><li>生产环境 BUG，测试环境无法复现</li><li>当后端接口启用 <code>cors</code> 跨域时，本地环境无法访问</li></ul><p><code>Chrome</code> 模拟器和微信开发者工具等都无法完美复现我们遇到的问题，这时候我们需要用到 <code>whistle</code> 来实现真机调试</p><h2 id="whistle" tabindex="-1"><a class="header-anchor" href="#whistle"><span>Whistle</span></a></h2>',4),p={href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>它的作用可以理解为用 Node 开一个代理服务器，将我们需要调试的设备代理到 <code>whistle</code> 后，由 <code>whistle</code> 进行代理请求。同时 <code>whistle</code> 支持类似于 hosts 的转发规则，我们可以通过正则或者内置的一些指令对我们需要进行代理的域名进行转发，添加插件等。</p><h3 id="安装启动" tabindex="-1"><a class="header-anchor" href="#安装启动"><span>安装启动</span></a></h3><p>安装 <code>whistle</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> whistle <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 <code>whistle</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>w2 start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动完成后，默认会在 <code>localhost:8899</code> 端口监听。</p><h3 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理"><span>设置代理</span></a></h3><h4 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端"><span>移动端</span></a></h4><p>电脑与手机连接同一 wifi，在手机端 wifi 中设置代理为手动，输入代理 ip（启动 <code>whistle</code> 后在控制台中打印的局域网 ip），端口号为 <code>8899</code>。</p><p>保存后移动端则已经设置好代理，在手机浏览器中访问互联网，即可以在 <code>whistle</code> 控制台中抓取到相应的网络请求。</p><h4 id="pc-端" tabindex="-1"><a class="header-anchor" href="#pc-端"><span>PC 端</span></a></h4><p>PC 端有时也需要通过 <code>whistle</code> 控制台设置代理修改请求信息或者配置 <code>source map</code> 文件，下面介绍如何使用 <code>Proxy switchyOmega</code> 插件设置代理。</p><p>在扩展商店中搜索安装 <code>Proxy switchyOmega</code> 插件，下载完成后，默认会有一个 <code>proxy</code> 的情景模式，设置代理服务器为 <code>127.0.0.1</code>，端口号为 <code>8899</code> 保存并应用选项。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240729163103.png" alt="设置情景模式" tabindex="0" loading="lazy"><figcaption>设置情景模式</figcaption></figure><p>这里还推荐修改一个配置，将默认配置改为系统代理，避免日常使用时被代理到 <code>whistle</code>，无法科学上网。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240729163028.png" alt="修改默认配置" tabindex="0" loading="lazy"><figcaption>修改默认配置</figcaption></figure><h3 id="安装证书" tabindex="-1"><a class="header-anchor" href="#安装证书"><span>安装证书</span></a></h3>`,18),m={href:"https://wproxy.org/whistle/webui/https.html",target:"_blank",rel:"noopener noreferrer"},g=a(`<h2 id="真机调试" tabindex="-1"><a class="header-anchor" href="#真机调试"><span>真机调试</span></a></h2><p>打开 <code>whistle</code> 控制台，左侧有个 <code>Rules</code>，在这里面可以进行一些跳转规则的分组，配置。</p><h3 id="resmerge" tabindex="-1"><a class="header-anchor" href="#resmerge"><span>resMerge</span></a></h3><p>由于大部分 webapp 是嵌入到 webview 中，因此需要更改响应结果中的 <code>webAppUrl</code> 路径。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://xxxx resMerge://(webAppUrl=https://localhost:3000/index.html?isWebApp=true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="注入-eruda" tabindex="-1"><a class="header-anchor" href="#注入-eruda"><span>注入 eruda</span></a></h3>`,6),u=t("code",null,"whistle.inspect",-1),b={href:"https://github.com/liriliri/eruda",target:"_blank",rel:"noopener noreferrer"},w=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>w2 i whistle.inspect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://localhost:3000/index.html whistle.inspect://eruda disable://cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个配置的作用是当访问到 <code>localhost:3000</code> 时，页面会自动注入 <code>eruda</code> 调试工具。</p>`,4);function v(x,f){const i=s("ExternalLinkIcon");return l(),o("div",null,[c,t("p",null,[t("a",p,[e("whistle"),r(i)]),e("（读音[ˈwɪsəl]，拼音[wēisǒu]）基于 Node 实现的跨平台 web 调试代理工具。")]),h,t("p",null,[e("参考 "),t("a",m,[e("官方文档"),r(i)]),e(" 即可。")]),g,t("p",null,[e("安装 "),u,e(" 插件，该插件即成了 "),t("a",b,[e("eruda"),r(i)]),e(" 等调试工具，用来在移动端页面上模拟 Chrome 开发者工具功能的模块。")]),w])}const y=n(d,[["render",v],["__file","017-whistle-debug-real-phone.html.vue"]]),k=JSON.parse('{"path":"/frontend/practice/017-whistle-debug-real-phone.html","title":"whistle 调试真机","lang":"zh-CN","frontmatter":{"title":"whistle 调试真机","date":"2024-07-29T00:00:00.000Z","icon":"debug","category":["practice"],"tag":["debug"],"description":"在前端开发中移动端开发技能必不可少。当我们遇到类似于这样的问题： 移动端 Canvas 渲染失败 微信获取 openId 回调页不匹配 微信浏览器文件上传失败 支付宝，微信 H5 支付域名校验不匹配 生产环境 BUG，测试环境无法复现 当后端接口启用 cors 跨域时，本地环境无法访问 Chrome 模拟器和微信开发者工具等都无法完美复现我们遇到的问题...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/practice/017-whistle-debug-real-phone.html"}],["meta",{"property":"og:title","content":"whistle 调试真机"}],["meta",{"property":"og:description","content":"在前端开发中移动端开发技能必不可少。当我们遇到类似于这样的问题： 移动端 Canvas 渲染失败 微信获取 openId 回调页不匹配 微信浏览器文件上传失败 支付宝，微信 H5 支付域名校验不匹配 生产环境 BUG，测试环境无法复现 当后端接口启用 cors 跨域时，本地环境无法访问 Chrome 模拟器和微信开发者工具等都无法完美复现我们遇到的问题..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240729163103.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-29T08:46:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"whistle 调试真机"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"debug"}],["meta",{"property":"article:published_time","content":"2024-07-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-29T08:46:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"whistle 调试真机\\",\\"image\\":[\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240729163103.png\\",\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/20240729163028.png\\"],\\"datePublished\\":\\"2024-07-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-29T08:46:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 Whistle","slug":"whistle","link":"#whistle","children":[{"level":3,"title":"1.1 安装启动","slug":"安装启动","link":"#安装启动","children":[]},{"level":3,"title":"1.2 设置代理","slug":"设置代理","link":"#设置代理","children":[{"level":4,"title":"1.2.1 移动端","slug":"移动端","link":"#移动端","children":[]},{"level":4,"title":"1.2.2 PC 端","slug":"pc-端","link":"#pc-端","children":[]}]},{"level":3,"title":"1.3 安装证书","slug":"安装证书","link":"#安装证书","children":[]}]},{"level":2,"title":"2 真机调试","slug":"真机调试","link":"#真机调试","children":[{"level":3,"title":"2.1 resMerge","slug":"resmerge","link":"#resmerge","children":[]},{"level":3,"title":"2.2 注入 eruda","slug":"注入-eruda","link":"#注入-eruda","children":[]}]}],"git":{"createdTime":1722242800000,"updatedTime":1722242800000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":2.52,"words":755},"filePathRelative":"frontend/practice/017-whistle-debug-real-phone.md","localizedDate":"2024年7月29日","excerpt":"","autoDesc":true}');export{y as comp,k as data};
