import{_ as d,r as i,o as c,c as o,a as e,d as s,b as a,w as r,e as t}from"./app-_LprvjBg.js";const p={},u=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>git 私服作用：</strong></p><ul><li>自己电脑和公司（或者实验室）电脑随时同步资料</li><li>GitHub、Gitee 私有仓库都是限流的，文件一旦多了，或者有图片文件，<code>git pull</code> 的时候半天拉不下来</li><li>保存一些隐私文件</li></ul></div><h2 id="开始搭建" tabindex="-1"><a class="header-anchor" href="#开始搭建"><span>开始搭建</span></a></h2><ul><li>服务器：centos7.9</li><li>本地电脑: Windows10</li></ul><p>如果服务器没装 git 可以使用以下命令安装：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建-git-用户" tabindex="-1"><a class="header-anchor" href="#创建-git-用户"><span>创建 git 用户</span></a></h2>`,6),h=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>adduser <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>后面所有的操作都在 git 用户下进行：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@instance-5fcyjde7 ~<span class="token punctuation">]</span>su - <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看一下自己所在的目录，是不是在 git 目录下面：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>git@instance-5fcyjde7 ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">pwd</span>
/home/git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器端密钥管理" tabindex="-1"><a class="header-anchor" href="#服务器端密钥管理"><span>服务器端密钥管理</span></a></h2><p>创建 <code>.ssh</code> 目录，如果 <code>.ssh</code> 已经存在了，可以忽略这一项。方便每次操作 Git 仓库的时候不用再去输入密码。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/
<span class="token function">mkdir</span> .ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 <code>.ssh</code> 文件下，创建一个 <code>authorized_keys</code> 文件，并给 <code>authorized_keys</code> 文件设置权限。这个文件用来存放客户端的公钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
<span class="token function">touch</span> authorized_keys
<span class="token function">chmod</span> <span class="token number">700</span> /home/git/.ssh
<span class="token function">chmod</span> <span class="token number">600</span> /home/git/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来要把客户端的公钥放在 Git 服务器上，我们再回到客户端，创建一个公钥。</p><p>在我们自己的电脑上，有公钥和私钥。两个文件分别是：<code>id_rsa</code> 和 <code>id_rsa.pub</code>。</p><p>如果是 Windows 系统公钥私钥的目录在 <code>C:\\Users\\用户名.ssh</code> 下。</p><p>如果是 Mac 或者 Linux， 公钥和私钥的目录这里 <code>cd ~/.ssh/</code>， 如果发现自己的电脑上没有公钥私钥，那就自己创建一个。</p><p>创建密钥的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建密钥的过程中，一路点击回车就可以了，不需要填任何东西。把刚刚生成的 <code>id_rsa.pub</code>，拷贝到 Git 服务器的 <code>/home/git/.ssh/</code> 目录。</p><p>在 Git 服务器上，将公钥添加到 <code>authorized_keys</code> 文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/git/.ssh/
<span class="token function">cat</span> id_rsa.pub <span class="token operator">&gt;&gt;</span> authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户直接登录 Git 服务器，验证是否配置成功：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> git@git 服务器 <span class="token function">ip</span>
<span class="token comment"># 例如：</span>
<span class="token function">ssh</span> git@127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果可以免密登录，那就说明服务器端密钥配置成功了。</p><p>在这里我还出现了一个错误：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED<span class="token operator">!</span>     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY<span class="token operator">!</span>
Someone could be eavesdropping on you right now <span class="token punctuation">(</span>man-in-the-middle attack<span class="token punctuation">)</span><span class="token operator">!</span>
It is also possible that a <span class="token function">host</span> key has just been changed.
The fingerprint <span class="token keyword">for</span> the RSA key sent by the remote <span class="token function">host</span> is
<span class="token number">51</span>:82:00:1c:7e:6f:ac:ac:de:f1:53:08:1c:7d:55:68.
Please contact your system administrator.
Add correct <span class="token function">host</span> key <span class="token keyword">in</span> /Users/isaacalves/.ssh/known_hosts to get rid of this message.
Offending RSA key <span class="token keyword">in</span> /Users/isaacalves/.ssh/known_hosts:12
RSA <span class="token function">host</span> key <span class="token keyword">for</span> <span class="token number">104.131</span>.16.158 has changed and you have requested strict checking.
Host key verification failed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现这个错误的原因是因为我更新了 <code>ssh key</code>，使用以下命令删除无效的 key 即可：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-R</span> <span class="token string">&quot;服务器 ip&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="服务器端部署-git-仓库" tabindex="-1"><a class="header-anchor" href="#服务器端部署-git-仓库"><span>服务器端部署 Git 仓库</span></a></h2><p>接下来在服务器上部署 git 仓库。</p><p>登录到 Git 服务器端，切换为 Git 账户。如果是 root 账户切换成 Git 账户：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是其他账户切换为 Git 账户：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> - <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入 git 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个文件夹名为 <code>world.git</code>，<code>.git</code> 后缀表明这是一个 git 仓库而不是别的什么文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>git@localhost git<span class="token punctuation">]</span><span class="token comment"># mkdir world.git</span>
<span class="token punctuation">[</span>git@localhost git<span class="token punctuation">]</span><span class="token comment"># cd word.git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化 word 仓库：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> init <span class="token parameter variable">--bare</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想创建多个仓库，就在 <strong>git</strong> 用户下的 <code>~/git</code> 目录创建多个文件夹并<strong>初始化</strong>就可以了。</p><p>现在服务端的 Git 仓库就部署完了，接下来就能像平时使用 github 一样使用这个 Git 私服了。</p><h2 id="客户端连接远程仓库" tabindex="-1"><a class="header-anchor" href="#客户端连接远程仓库"><span>客户端连接远程仓库</span></a></h2><p>在自己的电脑上创建一个文件夹也叫做 <code>world</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>其实这里命名是随意的，但是我们为了和 Git 服务端的仓库名称保持同步。这样更直观我们操作的是哪一个仓库。</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> world
<span class="token builtin class-name">cd</span> world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 <code>world</code> 文件，并初始化操作：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> world
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>world</code> 目录上创建一个测试文件，并且将其添加到 Git 私服中：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">touch</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">test</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;test git server&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将本地仓库和远端仓库同步：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@服务器 ip:world.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时这个 <code>test</code> 测试文件就已经提交到我们的 Git 远端私服上了。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>`,52),g={href:"https://mp.weixin.qq.com/s/8m5zK29sX0D9NM_YB8KDNQ",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.digitalocean.com/community/questions/warning-remote-host-identification-has-changed",target:"_blank",rel:"noopener noreferrer"};function v(b,k){const l=i("RouteLink"),n=i("ExternalLinkIcon");return c(),o("div",null,[u,e("p",null,[s("创建一个 Git 的 Linux 账户，这个账户只做 Git 私服的操作，之后就要设置 Linux Git 账户的密码，但由于我之前已经 "),a(l,{to:"/backend/linux/practice/001-set-the-ssh.html"},{default:r(()=>[s("设置了 ssh 登录")]),_:1}),s("，因此不用设置密码。")]),h,e("ul",null,[e("li",null,[e("a",g,[s("手把手来搭建 Git 私服！"),a(n)])]),e("li",null,[e("a",m,[s("WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED"),a(n)])])])])}const y=d(p,[["render",v],["__file","002-build-git-server.html.vue"]]),x=JSON.parse('{"path":"/backend/linux/practice/002-build-git-server.html","title":"搭建 git 私服","lang":"zh-CN","frontmatter":{"title":"搭建 git 私服","date":"2021-05-12T00:00:00.000Z","icon":"git1","category":["linux"],"tag":["项目部署","git"],"description":" 提示 git 私服作用： 自己电脑和公司（或者实验室）电脑随时同步资料 GitHub、Gitee 私有仓库都是限流的，文件一旦多了，或者有图片文件，git pull 的时候半天拉不下来 保存一些隐私文件 开始搭建 服务器：centos7.9 本地电脑: Windows10 如果服务器没装 git 可以使用以下命令安装： 创建 git 用户 创建一个 ...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/backend/linux/practice/002-build-git-server.html"}],["meta",{"property":"og:title","content":"搭建 git 私服"}],["meta",{"property":"og:description","content":" 提示 git 私服作用： 自己电脑和公司（或者实验室）电脑随时同步资料 GitHub、Gitee 私有仓库都是限流的，文件一旦多了，或者有图片文件，git pull 的时候半天拉不下来 保存一些隐私文件 开始搭建 服务器：centos7.9 本地电脑: Windows10 如果服务器没装 git 可以使用以下命令安装： 创建 git 用户 创建一个 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-09T04:30:54.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"项目部署"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2021-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-09T04:30:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"搭建 git 私服\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-09T04:30:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 开始搭建","slug":"开始搭建","link":"#开始搭建","children":[]},{"level":2,"title":"2 创建 git 用户","slug":"创建-git-用户","link":"#创建-git-用户","children":[]},{"level":2,"title":"3 服务器端密钥管理","slug":"服务器端密钥管理","link":"#服务器端密钥管理","children":[]},{"level":2,"title":"4 服务器端部署 Git 仓库","slug":"服务器端部署-git-仓库","link":"#服务器端部署-git-仓库","children":[]},{"level":2,"title":"5 客户端连接远程仓库","slug":"客户端连接远程仓库","link":"#客户端连接远程仓库","children":[]},{"level":2,"title":"6 参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1704774654000,"updatedTime":1704774654000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":3.87,"words":1161},"filePathRelative":"backend/linux/practice/002-build-git-server.md","localizedDate":"2021年5月12日","excerpt":"","autoDesc":true}');export{y as comp,x as data};
