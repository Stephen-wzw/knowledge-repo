import{_ as t,c as n,a as i,d as l,b as r,e as s,o as c,r as d}from"./app-CSq6u7Y0.js";const o={},h={href:"https://github.com/dribble-njr/imperial-kitchen.git%E3%80%82",target:"_blank",rel:"noopener noreferrer"};function p(u,e){const a=d("ExternalLinkIcon");return c(),n("div",null,[i("p",null,[e[1]||(e[1]=l("欢迎来到 Imperial Kitchen 御膳房项目！项目地址：")),i("a",h,[e[0]||(e[0]=l("https://github.com/dribble-njr/imperial-kitchen.git。")),r(a)])]),e[2]||(e[2]=s(`<h2 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介"><span>项目简介</span></a></h2><p>Imperial Kitchen 御膳房是一个家庭厨房的点菜应用，旨在帮助方便快捷地选择菜品并下单。</p><h2 id="产品功能设计" tabindex="-1"><a class="header-anchor" href="#产品功能设计"><span>产品功能设计</span></a></h2><h3 id="角色设计" tabindex="-1"><a class="header-anchor" href="#角色设计"><span>角色设计</span></a></h3><p>家庭成员：</p><ul><li>点菜：查看菜品菜单，选择菜品下单。</li><li>查看订单状态：可以查看自己点的菜是否被接受，正在做，还是已经做好。</li><li>评价：可以对已经完成的菜品进行评价和反馈。</li></ul><p>管理员（厨师）：</p><ul><li>菜单管理：添加、编辑、删除菜品信息（名称、价格、描述、图片等）。</li><li>接收订单：家庭成员点菜后，管理员可以接受或拒绝订单。</li><li>制作进度：管理员可以更新每个订单的进度（如「已接受」、「正在做」、「已完成」等）。</li><li>菜品评价管理：查看和管理用户的评价。</li></ul><h3 id="功能模块" tabindex="-1"><a class="header-anchor" href="#功能模块"><span>功能模块</span></a></h3><h4 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h4><ul><li>登录/注册：家庭成员和管理员需要登录。可以通过简单的用户名和密码，或者基于家庭邀请码来注册。</li><li>权限管理：家庭成员的权限是点菜、查看和评价；管理员则可以管理菜品和订单。</li></ul><h4 id="菜单管理" tabindex="-1"><a class="header-anchor" href="#菜单管理"><span>菜单管理</span></a></h4><ul><li>查看菜单：家庭成员可以看到当前的可选菜品，带有详细信息和图片。</li><li>添加菜品（管理员）：管理员可以在后台添加新菜品，填写菜品的名称、图片、描述、价格等。</li><li>编辑/删除菜品（管理员）：管理员可以修改或删除已有菜品，保持菜单的实时更新。</li></ul><h4 id="订单系统" tabindex="-1"><a class="header-anchor" href="#订单系统"><span>订单系统</span></a></h4><ul><li>下单（家庭成员）：家庭成员可以从菜单中选择菜品并提交订单。</li><li>订单状态更新（管理员）：管理员在接收到订单后，可以更新状态（接受、制作中、完成等）。</li><li>订单历史：家庭成员可以查看自己的历史订单和状态，管理员可以查看所有的订单记录。</li></ul><h4 id="菜品评价" tabindex="-1"><a class="header-anchor" href="#菜品评价"><span>菜品评价</span></a></h4><ul><li>用户评价：家庭成员可以对已经完成的菜品进行评价，写下反馈并打分。</li><li>评价管理（管理员）：管理员可以查看评价，改进菜品。</li></ul><h3 id="核心流程" tabindex="-1"><a class="header-anchor" href="#核心流程"><span>核心流程</span></a></h3><ol><li>家庭成员登录并查看菜单。</li><li>家庭成员选择菜品并提交订单。</li><li>管理员在后台查看订单，并更新订单状态。</li><li>家庭成员可以查看订单状态变化。</li><li>订单完成后，家庭成员可以对菜品进行评价。</li></ol><h3 id="后续可以扩展的功能" tabindex="-1"><a class="header-anchor" href="#后续可以扩展的功能"><span>后续可以扩展的功能</span></a></h3><ul><li>通知功能：当订单状态更新时，向家庭成员发送推送通知。</li><li>个性化推荐：根据用户历史点菜记录，推荐他们可能喜欢的菜品。</li><li>多家庭支持：如果有多个家庭用户，也可以扩展为多人共享的家庭账户。</li></ul><h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈</span></a></h2><ul><li>前端：使用 <code>Expo</code> 和 <code>React Native</code> 开发移动端应用。</li><li>后端：使用 <code>Node.js</code> 和 <code>Express</code> 开发服务器端接口。</li><li>数据库：使用 <code>MongoDB</code> 存储菜品和订单信息。</li><li>其他工具：使用 <code>TypeScript</code> 编写代码，使用 <code>yarn workspace</code> 管理多包项目。</li></ul><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2><ol><li>克隆项目到本地：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/your-username/imperial-kitchen.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装依赖：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> imperial-kitchen
<span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动前端应用：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> workspace mobile start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>启动后端服务器：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> workspace server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="贡献" tabindex="-1"><a class="header-anchor" href="#贡献"><span>贡献</span></a></h2><p>欢迎贡献代码！如果您有任何建议或发现了问题，请在 GitHub 上提出问题或提交拉取请求。</p>`,34))])}const b=t(o,[["render",p],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/project/imperial-kitchen/","title":"Imperial Kitchen 御膳房","lang":"zh-CN","frontmatter":{"title":"Imperial Kitchen 御膳房","date":"2024-05-09T00:00:00.000Z","icon":"creative","category":["Project"],"tag":["kitchen","御膳房"],"description":"欢迎来到 Imperial Kitchen 御膳房项目！项目地址：https://github.com/dribble-njr/imperial-kitchen.git。 项目简介 Imperial Kitchen 御膳房是一个家庭厨房的点菜应用，旨在帮助方便快捷地选择菜品并下单。 产品功能设计 角色设计 家庭成员： 点菜：查看菜品菜单，选择菜品下单。...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/project/imperial-kitchen/"}],["meta",{"property":"og:title","content":"Imperial Kitchen 御膳房"}],["meta",{"property":"og:description","content":"欢迎来到 Imperial Kitchen 御膳房项目！项目地址：https://github.com/dribble-njr/imperial-kitchen.git。 项目简介 Imperial Kitchen 御膳房是一个家庭厨房的点菜应用，旨在帮助方便快捷地选择菜品并下单。 产品功能设计 角色设计 家庭成员： 点菜：查看菜品菜单，选择菜品下单。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T15:43:46.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"kitchen"}],["meta",{"property":"article:tag","content":"御膳房"}],["meta",{"property":"article:published_time","content":"2024-05-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T15:43:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Imperial Kitchen 御膳房\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-06T15:43:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 项目简介","slug":"项目简介","link":"#项目简介","children":[]},{"level":2,"title":"2 产品功能设计","slug":"产品功能设计","link":"#产品功能设计","children":[{"level":3,"title":"2.1 角色设计","slug":"角色设计","link":"#角色设计","children":[]},{"level":3,"title":"2.2 功能模块","slug":"功能模块","link":"#功能模块","children":[{"level":4,"title":"2.2.1 用户管理","slug":"用户管理","link":"#用户管理","children":[]},{"level":4,"title":"2.2.2 菜单管理","slug":"菜单管理","link":"#菜单管理","children":[]},{"level":4,"title":"2.2.3 订单系统","slug":"订单系统","link":"#订单系统","children":[]},{"level":4,"title":"2.2.4 菜品评价","slug":"菜品评价","link":"#菜品评价","children":[]}]},{"level":3,"title":"2.3 核心流程","slug":"核心流程","link":"#核心流程","children":[]},{"level":3,"title":"2.4 后续可以扩展的功能","slug":"后续可以扩展的功能","link":"#后续可以扩展的功能","children":[]}]},{"level":2,"title":"3 技术栈","slug":"技术栈","link":"#技术栈","children":[]},{"level":2,"title":"4 使用说明","slug":"使用说明","link":"#使用说明","children":[]},{"level":2,"title":"5 贡献","slug":"贡献","link":"#贡献","children":[]}],"git":{"createdTime":1715495831000,"updatedTime":1730907826000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":3}]},"readingTime":{"minutes":3.03,"words":909},"filePathRelative":"project/imperial-kitchen/README.md","localizedDate":"2024年5月9日","excerpt":"","autoDesc":true}');export{b as comp,g as data};
