import{_ as r,c as i,a as e,d as n,b as s,e as o,o as l,r as p}from"./app-CSq6u7Y0.js";const c={},d={class:"hint-container tip"},m={href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bilibili.com/video/BV12T4y1N7T9?from=search&seid=2220018938681661072&spm_id_from=333.337.0.0",target:"_blank",rel:"noopener noreferrer"};function b(h,t){const a=p("ExternalLinkIcon");return l(),i("div",null,[e("div",d,[t[3]||(t[3]=e("p",{class:"hint-container-title"},"提示",-1)),t[4]||(t[4]=e("p",null,"服务器系统：centos 7.9。",-1)),e("p",null,[t[1]||(t[1]=n("其他系统可以参照 ")),e("a",m,[t[0]||(t[0]=n("官网")),s(a)]),t[2]||(t[2]=n(" 进行搭建。"))]),t[5]||(t[5]=e("p",null,"为了方便一键配置部署环境，因此选择宝塔面板。",-1))]),t[8]||(t[8]=o(`<h2 id="安装宝塔面板" tabindex="-1"><a class="header-anchor" href="#安装宝塔面板"><span>安装宝塔面板</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> install.sh http://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大概过两分钟即可安装成功，复制外网面板地址到浏览器打开，输入下面的 <code>username</code> 和 <code>password</code>。进去之后会弹出 <code>推荐安装套件</code>，因为只要部署 <code>vuepress</code>， 因此这里安装 <code>nginx</code> 就好。选择编译安装，更加稳定。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step1-install-bt.png" alt="step1-install-bt" tabindex="0" loading="lazy"><figcaption>step1-install-bt</figcaption></figure><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step2-install-nginx.png" alt="step2-install-nginx" tabindex="0" loading="lazy"><figcaption>step2-install-nginx</figcaption></figure><p>如果之后忘记用户名和密码，可以通过以下命令查找：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@xxxx ~<span class="token punctuation">]</span><span class="token comment"># bt</span>
<span class="token punctuation">[</span>root@xxxx ~<span class="token punctuation">]</span><span class="token comment"># 14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>`,8)),e("ul",null,[e("li",null,[e("a",u,[t[6]||(t[6]=n("宝塔 Linux 面板安装教程")),s(a)])]),e("li",null,[e("a",g,[t[7]||(t[7]=n("阿里云服务器 ECS 新手搭建网站视频教程（详细版）")),s(a)])])])])}const x=r(c,[["render",b],["__file","003-configure-bt.html.vue"]]),y=JSON.parse('{"path":"/backend/linux/practice/003-configure-bt.html","title":"配置宝塔面板","lang":"zh-CN","frontmatter":{"title":"配置宝塔面板","date":"2021-05-12T00:00:00.000Z","icon":"baota","category":["linux"],"tag":["项目部署","bt"],"description":" 提示 服务器系统：centos 7.9。 其他系统可以参照 官网 进行搭建。 为了方便一键配置部署环境，因此选择宝塔面板。 安装宝塔面板 大概过两分钟即可安装成功，复制外网面板地址到浏览器打开，输入下面的 username 和 password。进去之后会弹出 推荐安装套件，因为只要部署 vuepress， 因此这里安装 nginx 就好。选择编译安...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/backend/linux/practice/003-configure-bt.html"}],["meta",{"property":"og:title","content":"配置宝塔面板"}],["meta",{"property":"og:description","content":" 提示 服务器系统：centos 7.9。 其他系统可以参照 官网 进行搭建。 为了方便一键配置部署环境，因此选择宝塔面板。 安装宝塔面板 大概过两分钟即可安装成功，复制外网面板地址到浏览器打开，输入下面的 username 和 password。进去之后会弹出 推荐安装套件，因为只要部署 vuepress， 因此这里安装 nginx 就好。选择编译安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step1-install-bt.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T15:43:46.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"配置宝塔面板"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"项目部署"}],["meta",{"property":"article:tag","content":"bt"}],["meta",{"property":"article:published_time","content":"2021-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T15:43:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置宝塔面板\\",\\"image\\":[\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step1-install-bt.png\\",\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/step2-install-nginx.png\\"],\\"datePublished\\":\\"2021-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-06T15:43:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 安装宝塔面板","slug":"安装宝塔面板","link":"#安装宝塔面板","children":[]},{"level":2,"title":"2 参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1704774654000,"updatedTime":1730907826000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":2}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"backend/linux/practice/003-configure-bt.md","localizedDate":"2021年5月12日","excerpt":"","autoDesc":true}');export{x as comp,y as data};
