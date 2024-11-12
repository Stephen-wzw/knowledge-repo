import{_ as r,c as p,a as n,d as s,b as o,e as t,w as d,r as a,o as u}from"./app-CdPUGIcU.js";const m={},c={href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/JanDeDobbeleer/oh-my-posh",target:"_blank",rel:"noopener noreferrer"},g={href:"https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=zh-cn&gl=CN",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/PowerShell/PowerShell/releases",target:"_blank",rel:"noopener noreferrer"},w={href:"https://ohmyposh.dev/docs/installation/windows",target:"_blank",rel:"noopener noreferrer"},b={href:"https://ohmyposh.dev/docs/themes",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.nerdfonts.com/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.nerdfonts.com/font-downloads",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.nerdfonts.com/font-downloads",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.nerdfonts.com/font-downloads",target:"_blank",rel:"noopener noreferrer"},S={href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/vim/vim",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/neovim/neovim",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"},j={href:"https://mridgers.github.io/clink/",target:"_blank",rel:"noopener noreferrer"};function q(C,e){const l=a("ExternalLinkIcon"),i=a("RouteLink");return u(),p("div",null,[e[46]||(e[46]=n("p",null,"在 Windows 上的开发体验，特别是在终端方面，相较于 macOS，常常让人觉得差了一点「味道」。macOS 上的 iTerm2 配合 oh-my-zsh，颜值高、功能强大，让开发者得以拥有流畅且美观的工作体验。而 Windows 默认的命令提示符（cmd）和 PowerShell，外观简单，功能也不够灵活。",-1)),n("p",null,[e[2]||(e[2]=s("幸运的是，随着 ")),n("a",c,[e[0]||(e[0]=s("Windows Terminal")),o(l)]),e[3]||(e[3]=s(" 的推出，我们终于可以在 Windows 上获得更现代的终端体验。Windows Terminal 拥有标签页支持、强大的配色和字体自定义功能，通过集成 ")),n("a",h,[e[1]||(e[1]=s("oh-my-posh")),o(l)]),e[4]||(e[4]=s(" 进行美化、安装支持丰富符号的字体、以及配置一些常用的开发工具，我们可以让 Windows 终端焕然一新，达到高颜值和高效兼具的效果。"))]),e[47]||(e[47]=n("p",null,"接下来，让我们一步步将 Windows 终端打造成一个高效、好看且符合开发者习惯的环境，为平时的开发工作增添一份愉悦和舒适。",-1)),e[48]||(e[48]=n("h2",{id:"安装-windows-terminal",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-windows-terminal"},[n("span",null,"安装 Windows Terminal")])],-1)),n("p",null,[e[6]||(e[6]=s("Windows Terminal 是微软官方推出的现代终端工具，支持多标签页、GPU 加速、Unicode 和 Emoji 显示等特性，推荐直接在 ")),n("a",g,[e[5]||(e[5]=s("微软商店")),o(l)]),e[7]||(e[7]=s(" 直接安装 Windows Terminal。"))]),e[49]||(e[49]=n("p",null,"然后设置一下透明度，这里我选择的是 80%，并打开亚克力效果，这会让终端跟随底色增加透明模糊效果。",-1)),e[50]||(e[50]=n("h2",{id:"升级-powershell-7-x",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#升级-powershell-7-x"},[n("span",null,"升级 PowerShell 7.x")])],-1)),e[51]||(e[51]=n("p",null,"Windows 10 或 Windows 11 默认的 PowerShell 版本较低，无法使用更多新特性，推荐升级到 PowerShell 7.x，PowerShell 7.x 是跨平台的，并且修复了很多 PowerShell 5.1 中的兼容性问题。",-1)),e[52]||(e[52]=n("p",null,"安装方式：",-1)),n("ul",null,[n("li",null,[e[9]||(e[9]=s("访问 ")),n("a",v,[e[8]||(e[8]=s("PowerShell GitHub Release 页面")),o(l)]),e[10]||(e[10]=s(" 下载适合你系统的版本。"))]),e[11]||(e[11]=t(`<li>或者，可以直接通过 Windows 包管理器 安装（需要 Windows 10 1809 或更高版本）：<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>winget install <span class="token operator">--</span>id Microsoft<span class="token punctuation">.</span>Powershell <span class="token operator">--</span>source winget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>如果你使用 Chocolatey 包管理器，也可以通过以下命令安装：<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>choco install powershell-core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,2))]),e[53]||(e[53]=n("p",null,"安装完后，重新启动 Windows Terminal 以使用 PowerShell 7。",-1)),e[54]||(e[54]=n("h2",{id:"安装-oh-my-posh",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-oh-my-posh"},[n("span",null,"安装 oh-my-posh")])],-1)),n("p",null,[n("a",w,[e[12]||(e[12]=s("安装 oh-my-posh")),o(l)]),e[13]||(e[13]=s(" 可以使用如下命令："))]),e[55]||(e[55]=t(`<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>winget install JanDeDobbeleer<span class="token punctuation">.</span>OhMyPosh <span class="token operator">-</span>s winget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1)),n("p",null,[e[15]||(e[15]=s("这会安装 ")),e[16]||(e[16]=n("code",null,"oh-my-posh.exe",-1)),e[17]||(e[17]=s(" 和 oh-my-posh 的所有最新 ")),n("a",b,[e[14]||(e[14]=s("主题")),o(l)]),e[18]||(e[18]=s("。"))]),e[56]||(e[56]=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了重新加载 PATH，建议重新启动终端。如果 oh-my-posh 未被识别为命令，可以重新运行安装程序，或手动将其添加到 PATH。 例如：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$env</span>:PATH <span class="token operator">+=</span> <span class="token string">&quot;;C:\\Users\\&lt;username&gt;\\AppData\\Local\\Programs\\oh-my-posh\\bin&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>为了在打开终端后自动加载 oh-my-posh，需要在 PowerShell 配置文件 <code>$PROFILE</code> 中添加以下内容：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>oh-my-posh init pwsh <span class="token operator">--</span>config <span class="token string">&quot;<span class="token variable">$env</span>:POSH_THEMES_PATH\\jandedobbeleer.omp.json&quot;</span> <span class="token punctuation">|</span> <span class="token function">Invoke-Expression</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--config</code> 参数指定主题配置文件路径，<code>$env:POSH_THEMES_PATH</code> 是 oh-my-posh 主题文件夹路径，可以通过 <code>Get-PoshThemes</code> 查看所有主题。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>$PROFILE</code> 文件类似 <code>~/.zshrc</code> 或 <code>~/.bashrc</code>，以下命令会使用系统默认的文本编辑器打开：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>notepad <span class="token variable">$PROFILE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑完成后，可以使用 <code>. $PROFILE</code> 重新加载配置。</p></div><h3 id="设置字体" tabindex="-1"><a class="header-anchor" href="#设置字体"><span>设置字体</span></a></h3>`,6)),n("p",null,[e[22]||(e[22]=s("oh-my-posh 使用 ")),n("a",k,[e[19]||(e[19]=s("Nerd Fonts")),o(l)]),e[23]||(e[23]=s(" 做为设计字体，官方推荐安装 ")),n("a",y,[e[20]||(e[20]=s("Meslo Nerd Font")),o(l)]),e[24]||(e[24]=s("。这里我选择了 ")),n("a",f,[e[21]||(e[21]=s("BitstromWera Nerd Font")),o(l)]),e[25]||(e[25]=s("。"))]),n("p",null,[e[27]||(e[27]=s("可以在 ")),n("a",x,[e[26]||(e[26]=s("Nerd Fonts")),o(l)]),e[28]||(e[28]=s(" 页面下载和预览字体。也可以通过 oh-my-posh 提供的 CLI 安装："))]),e[57]||(e[57]=t(`<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>oh-my-posh font install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后，需要在 Windows Terminal 中设置字体，按 <code>CTRL + SHIFT + ,</code> 打开配置文件，在 <code>defaults</code> 属性下添加：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;font&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MesloLGM Nerd Font&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用了 VSCode，可以在 <code>settings.json</code> 中添加：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;terminal.integrated.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bitstream Vera Sans Mono Nerd Font&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h2><h3 id="chocolatey" tabindex="-1"><a class="header-anchor" href="#chocolatey"><span>Chocolatey</span></a></h3>`,7)),n("p",null,[n("a",S,[e[29]||(e[29]=s("Chocolatey")),o(l)]),e[30]||(e[30]=s(" 是一个 Windows 下的包管理器，可以方便地安装和管理软件。"))]),e[58]||(e[58]=t(`<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Set-ExecutionPolicy</span> Bypass <span class="token operator">-</span>Scope <span class="token keyword">Process</span> <span class="token operator">-</span>Force<span class="token punctuation">;</span> <span class="token namespace">[System.Net.ServicePointManager]</span>::SecurityProtocol = <span class="token namespace">[System.Net.SecurityProtocolType]</span>::Tls12<span class="token punctuation">;</span> <span class="token function">iex</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">New-Object</span> System<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>WebClient<span class="token punctuation">)</span><span class="token punctuation">.</span>DownloadString<span class="token punctuation">(</span><span class="token string">&#39;https://community.chocolatey.org/install.ps1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vim" tabindex="-1"><a class="header-anchor" href="#vim"><span>vim</span></a></h3>`,2)),n("p",null,[e[33]||(e[33]=s("PowerShell 默认不支持 vim，需要安装 ")),n("a",P,[e[31]||(e[31]=s("vim")),o(l)]),e[34]||(e[34]=s(" 或 ")),n("a",T,[e[32]||(e[32]=s("neovim")),o(l)]),e[35]||(e[35]=s("。"))]),e[59]||(e[59]=t(`<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>choco install vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后即可使用 <code>vim</code> 命令，再也不用使用 <code>notepad</code> 打开文件了。</p><h3 id="autojump" tabindex="-1"><a class="header-anchor" href="#autojump"><span>autojump</span></a></h3>`,3)),n("p",null,[n("a",W,[e[36]||(e[36]=s("autojump")),o(l)]),e[37]||(e[37]=s(" 是一个跨平台的命令行工具，可以快速跳转到指定目录，类似 oh-my-zsh 的 ")),e[38]||(e[38]=n("code",null,"z",-1)),e[39]||(e[39]=s(" 插件。"))]),n("p",null,[e[41]||(e[41]=s("下载并安装 ")),n("a",j,[e[40]||(e[40]=s("Clink")),o(l)]),e[42]||(e[42]=s("，它会将一些命令行增强功能添加到 Windows 命令提示符中。Clink 安装后需要在系统路径中添加，以便 PowerShell 和其他终端可以调用它。"))]),e[60]||(e[60]=t(`<div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>choco install autojump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后，在 PowerShell 中运行 <code>j</code> 即可使用。</p><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>git</span></a></h3><p>使用 Chocolatey 安装 git：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>choco install git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后，配置 git 用户信息：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name <span class="token string">&quot;Your Name&quot;</span>
git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email <span class="token string">&quot;your.email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh"><span>ssh</span></a></h3><p>PowerShell 默认自带 ssh 客户端，可以直接使用。</p><p>生成 ssh key：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>ssh-keygen <span class="token operator">-</span>t rsa <span class="token operator">-</span>C <span class="token string">&quot;your_email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将生成的 ssh key 添加到 GitHub，在 <code>Settings</code> -&gt; <code>SSH and GPG keys</code> 页面添加。</p><p>然后使用 <code>ssh -T git@github.com</code> 测试连接。</p><p>如果出现以下报错，可以更改 ssh 客户端配置。</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>ssh: connect to host github<span class="token punctuation">.</span>com port 22: Connection refused
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>C:\\Users\\&lt;username&gt;\\.ssh\\config</code> 文件（没有则创建）中添加以下内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Host github.com
  HostName ssh.github.com
  Port 443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时再使用 <code>ssh -T git@github.com</code> 测试连接，应该就可以正常连接了。</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>ssh <span class="token operator">-</span>T git@github<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="node" tabindex="-1"><a class="header-anchor" href="#node"><span>node</span></a></h3>`,20)),n("p",null,[e[44]||(e[44]=s("推荐使用 ")),o(i,{to:"/frontend/engineering/basic/06-fnm-nvm.html"},{default:d(()=>e[43]||(e[43]=[s("fnm")])),_:1}),e[45]||(e[45]=s(" 安装 node。"))])])}const H=r(m,[["render",q],["__file","02-windows-terminal-beauty.html.vue"]]),O=JSON.parse('{"path":"/computer-science/operating-system/02-windows-terminal-beauty.html","title":"美化 Windows 终端","lang":"zh-CN","frontmatter":{"title":"美化 Windows 终端","date":"2024-11-07T00:00:00.000Z","icon":"terminal","category":["操作系统"],"tag":["Windows","terminal","oh-my-posh"],"description":"在 Windows 上的开发体验，特别是在终端方面，相较于 macOS，常常让人觉得差了一点「味道」。macOS 上的 iTerm2 配合 oh-my-zsh，颜值高、功能强大，让开发者得以拥有流畅且美观的工作体验。而 Windows 默认的命令提示符（cmd）和 PowerShell，外观简单，功能也不够灵活。 幸运的是，随着 Windows Ter...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/computer-science/operating-system/02-windows-terminal-beauty.html"}],["meta",{"property":"og:title","content":"美化 Windows 终端"}],["meta",{"property":"og:description","content":"在 Windows 上的开发体验，特别是在终端方面，相较于 macOS，常常让人觉得差了一点「味道」。macOS 上的 iTerm2 配合 oh-my-zsh，颜值高、功能强大，让开发者得以拥有流畅且美观的工作体验。而 Windows 默认的命令提示符（cmd）和 PowerShell，外观简单，功能也不够灵活。 幸运的是，随着 Windows Ter..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-07T07:22:24.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:tag","content":"terminal"}],["meta",{"property":"article:tag","content":"oh-my-posh"}],["meta",{"property":"article:published_time","content":"2024-11-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-07T07:22:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"美化 Windows 终端\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-07T07:22:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 安装 Windows Terminal","slug":"安装-windows-terminal","link":"#安装-windows-terminal","children":[]},{"level":2,"title":"2 升级 PowerShell 7.x","slug":"升级-powershell-7-x","link":"#升级-powershell-7-x","children":[]},{"level":2,"title":"3 安装 oh-my-posh","slug":"安装-oh-my-posh","link":"#安装-oh-my-posh","children":[{"level":3,"title":"3.1 设置字体","slug":"设置字体","link":"#设置字体","children":[]}]},{"level":2,"title":"4 环境配置","slug":"环境配置","link":"#环境配置","children":[{"level":3,"title":"4.1 Chocolatey","slug":"chocolatey","link":"#chocolatey","children":[]},{"level":3,"title":"4.2 vim","slug":"vim","link":"#vim","children":[]},{"level":3,"title":"4.3 autojump","slug":"autojump","link":"#autojump","children":[]},{"level":3,"title":"4.4 git","slug":"git","link":"#git","children":[]},{"level":3,"title":"4.5 ssh","slug":"ssh","link":"#ssh","children":[]},{"level":3,"title":"4.6 node","slug":"node","link":"#node","children":[]}]}],"git":{"createdTime":1730964144000,"updatedTime":1730964144000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":4.35,"words":1305},"filePathRelative":"computer-science/operating-system/02-windows-terminal-beauty.md","localizedDate":"2024年11月7日","excerpt":"","autoDesc":true}');export{H as comp,O as data};
