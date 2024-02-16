import{_ as e,o as t,c as i,e as a}from"./app-v1HKdGPu.js";const n={},r=a(`<h2 id="关于版本控制" tabindex="-1"><a class="header-anchor" href="#关于版本控制"><span>关于版本控制</span></a></h2><p>版本控制系统类型：</p><ol><li>本地版本控制——复制项目保存不同版本</li><li>集中式版本控制——服务器损坏则丢失所有数据</li><li>分布式版本控制——本地和服务器都保存版本历史</li></ol><h2 id="git-是什么" tabindex="-1"><a class="header-anchor" href="#git-是什么"><span>Git 是什么</span></a></h2><h3 id="直接记录快照-而非差异比较" tabindex="-1"><a class="header-anchor" href="#直接记录快照-而非差异比较"><span>直接记录快照，而非差异比较</span></a></h3><p>大部分版本控制系统以文件变更列表的方式存储信息，这类系统（CVS、Subversion、Perforce、Bazaar 等等） 将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 （它们通常称作 <strong>基于差异（delta-based）</strong> 的版本控制）。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/deltas.png" alt="存储每个文件与初始版本的差异。" tabindex="0" loading="lazy"><figcaption>存储每个文件与初始版本的差异。</figcaption></figure><p>Git 将数据视为一系列快照。每当提交更新或保存项目状态时，Git 就会对当时的全部文件创建一个快照并保存这个快照的索引。如果文件没有修改，Git 不会重新存储该文件，而是只保留一个链接指向之前存储的文件。整个方式更像是一个 <strong>快照流</strong>。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/snapshots.png" alt="Git 存储项目随时间改变的快照。" tabindex="0" loading="lazy"><figcaption>Git 存储项目随时间改变的快照。</figcaption></figure><h3 id="近乎所有操作都是本地执行" tabindex="-1"><a class="header-anchor" href="#近乎所有操作都是本地执行"><span>近乎所有操作都是本地执行</span></a></h3><p>Git 绝大多数操作都只需要访问本地文件和资源，一般不需要网络。</p><h3 id="git-保证完整性" tabindex="-1"><a class="header-anchor" href="#git-保证完整性"><span>Git 保证完整性</span></a></h3><p>Git 中的所有数据在存储前都会使用哈希值来计算校验和，因此可以保证整个项目的完整性。</p><p>SHA-1 散列（hash, 哈希）由 40 个十六进制字符（0-9 和 a-f）组成的字符串，基于 Git 中文件的内容或目录结构计算出来。 SHA-1 哈希看起来是这样：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>24b9da6552252987aa493b52f8696cd6d3b00373
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-一般只添加数据" tabindex="-1"><a class="header-anchor" href="#git-一般只添加数据"><span>Git 一般只添加数据</span></a></h3><p>执行的 Git 操作，几乎只往 Git 数据库中 <strong>添加</strong> 数据，Git 几乎不会执行任何可能导致文件不可恢复的操作。</p><h3 id="git-三种状态" tabindex="-1"><a class="header-anchor" href="#git-三种状态"><span>Git 三种状态</span></a></h3><p>Git 有三种状态，你的文件可能处于其中之一： <strong>已提交（committed）</strong>、<strong>已修改（modified）</strong> 和 <strong>已暂存（staged）</strong>。</p><ul><li>已提交表示数据已经安全地保存在本地数据库中。</li><li>已修改表示修改了文件，但还没保存到数据库中。</li><li>已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。</li></ul><p>这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。</p><figure><img src="https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/areas.png" alt="工作区、暂存区以及 Git 目录。" tabindex="0" loading="lazy"><figcaption>工作区、暂存区以及 Git 目录。</figcaption></figure><p>工作区是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。</p><p>暂存区是一个文件，保存了下次将要提交的文件列表信息，一般在 Git 仓库目录中。 按照 Git 的术语叫做「索引」，不过一般说法还是叫「暂存区」。</p><p>Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据。</p><p>基本的 Git 工作流程如下：</p><ol><li>在工作区中修改文件。</li><li>将你想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区。</li><li>提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录。</li></ol><p>如果 Git 目录中保存着特定版本的文件，就属于 <strong>已提交</strong> 状态。 如果文件已修改并放入暂存区，就属于 <strong>已暂存</strong> 状态。 如果自上次检出后，作了修改但还没有放到暂存区域，就是 <strong>已修改</strong> 状态。</p><h2 id="初始化配置" tabindex="-1"><a class="header-anchor" href="#初始化配置"><span>初始化配置</span></a></h2><p>Git 自带一个 <code>git config</code> 工具帮助设置控制 Git 外观和行为的配置变量，这些变量存储在三个不同的位置：</p><ol><li><code>/etc/gitconfig</code> 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果在执行 <code>git config</code> 时带上 <code>--system</code> 选项，那么它就会读写该文件中的配置变量。 （由于它是系统配置文件，因此你需要管理员或超级用户权限来修改它。）</li><li><code>~/.gitconfig</code> 或 <code>~/.config/git/config</code> 文件：只针对当前用户。 你可以传递 <code>--global</code> 选项让 Git 读写此文件，这会对你系统上 <strong>所有</strong> 的仓库生效。</li><li>当前使用仓库的 Git 目录中的 <code>config</code> 文件（即 <code>.git/config</code>）：针对该仓库。 你可以传递 <code>--local</code> 选项让 Git 强制读写此文件，虽然默认情况下用的就是它。（当然，你需要进入某个 Git 仓库中才能让该选项生效。）</li></ol><p>每一个级别会覆盖上一级别的配置，所以 <code>.git/config</code> 的配置变量会覆盖 <code>/etc/gitconfig</code> 中的配置变量。</p><p>使用以下命令查看所有配置及它们所在的文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span> --show-origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="用户信息" tabindex="-1"><a class="header-anchor" href="#用户信息"><span>用户信息</span></a></h3><p>每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;John Doe&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email johndoe@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查配置信息" tabindex="-1"><a class="header-anchor" href="#检查配置信息"><span>检查配置信息</span></a></h3><p>可以使用 <code>git config --list</code> 命令来列出所有 Git 当时能找到的配置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助"><span>获取帮助</span></a></h2><p>使用 <code>git help</code> 获取 Git 命令的全面帮助手册。</p><p>使用 <code>git -h</code> 获取更加简明的输出。</p>`,43),s=[r];function l(o,c){return t(),i("div",null,s)}const g=e(n,[["render",l],["__file","01-getting-started.html.vue"]]),p=JSON.parse('{"path":"/reading/pro-git/01-getting-started.html","title":"起步","lang":"zh-CN","frontmatter":{"title":"起步","date":"2023-09-28T00:00:00.000Z","icon":"creative","category":["READING"],"tag":["git"],"description":"关于版本控制 版本控制系统类型： 本地版本控制——复制项目保存不同版本 集中式版本控制——服务器损坏则丢失所有数据 分布式版本控制——本地和服务器都保存版本历史 Git 是什么 直接记录快照，而非差异比较 大部分版本控制系统以文件变更列表的方式存储信息，这类系统（CVS、Subversion、Perforce、Bazaar 等等） 将它们存储的信息看作...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/reading/pro-git/01-getting-started.html"}],["meta",{"property":"og:title","content":"起步"}],["meta",{"property":"og:description","content":"关于版本控制 版本控制系统类型： 本地版本控制——复制项目保存不同版本 集中式版本控制——服务器损坏则丢失所有数据 分布式版本控制——本地和服务器都保存版本历史 Git 是什么 直接记录快照，而非差异比较 大部分版本控制系统以文件变更列表的方式存储信息，这类系统（CVS、Subversion、Perforce、Bazaar 等等） 将它们存储的信息看作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/deltas.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-07T08:47:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"起步"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2023-09-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T08:47:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"起步\\",\\"image\\":[\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/deltas.png\\",\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/snapshots.png\\",\\"https://raw.githubusercontent.com/dribble-njr/typora-njr/master/img/areas.png\\"],\\"datePublished\\":\\"2023-09-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-07T08:47:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 关于版本控制","slug":"关于版本控制","link":"#关于版本控制","children":[]},{"level":2,"title":"2 Git 是什么","slug":"git-是什么","link":"#git-是什么","children":[{"level":3,"title":"2.1 直接记录快照，而非差异比较","slug":"直接记录快照-而非差异比较","link":"#直接记录快照-而非差异比较","children":[]},{"level":3,"title":"2.2 近乎所有操作都是本地执行","slug":"近乎所有操作都是本地执行","link":"#近乎所有操作都是本地执行","children":[]},{"level":3,"title":"2.3 Git 保证完整性","slug":"git-保证完整性","link":"#git-保证完整性","children":[]},{"level":3,"title":"2.4 Git 一般只添加数据","slug":"git-一般只添加数据","link":"#git-一般只添加数据","children":[]},{"level":3,"title":"2.5 Git 三种状态","slug":"git-三种状态","link":"#git-三种状态","children":[]}]},{"level":2,"title":"3 初始化配置","slug":"初始化配置","link":"#初始化配置","children":[{"level":3,"title":"3.1 用户信息","slug":"用户信息","link":"#用户信息","children":[]},{"level":3,"title":"3.2 检查配置信息","slug":"检查配置信息","link":"#检查配置信息","children":[]}]},{"level":2,"title":"4 获取帮助","slug":"获取帮助","link":"#获取帮助","children":[]}],"git":{"createdTime":1695872569000,"updatedTime":1707295678000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1},{"name":"wangziwenbj01","email":"wangziwenbj01@kanyun.com","commits":1}]},"readingTime":{"minutes":4.64,"words":1392},"filePathRelative":"reading/pro-git/01-getting-started.md","localizedDate":"2023年9月28日","excerpt":"","autoDesc":true}');export{g as comp,p as data};