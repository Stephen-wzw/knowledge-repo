import{_ as r,r as a,o as i,c as l,a as e,d as t,b as o,e as s}from"./app-1w-mojc_.js";const c={},d=e("h2",{id:"技术方案选型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#技术方案选型"},[e("span",null,"技术方案选型")])],-1),p=e("h3",{id:"flutter-vs-react-native",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flutter-vs-react-native"},[e("span",null,"Flutter vs React Native")])],-1),h={href:"https://flutter.dev/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://reactnative.dev/",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[t("考虑到 Flutter 使用 "),e("code",null,"dart"),t(" 语言，而 React Native 使用 "),e("code",null,"js"),t("，学习成本相对而言较少，因此决定使用 React Native。")],-1),m={href:"https://www.thedroidsonroids.com/blog/flutter-vs-react-native-comparison",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.thedroidsonroids.com/blog/top-cross-platform-app-development-frameworks",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"expo-go-vs-react-native-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#expo-go-vs-react-native-cli"},[e("span",null,"Expo Go vs React Native CLI")])],-1),b=e("p",null,"如果您是移动开发的新手，最简单的入门方法就是使用 Expo Go。Expo 是一套围绕 React Native 构建的工具和服务，虽然它有很多功能，但目前与我们最相关的功能是它能让你在几分钟内编写出一个 React Native 应用程序。您只需要一个最新版本的 Node.js 和一部手机或模拟器。",-1),x=e("p",null,"如果你已经熟悉移动开发，你可能想使用 React Native CLI。它需要 Xcode 或 Android Studio 才能开始使用。如果你已经安装了这些工具之一，应该可以在几分钟内开始运行。如果没有安装这些工具，则需要花费大约一个小时进行安装和配置。",-1),f=e("p",null,"考虑到快速实现一个 MVP，最终选择了 Expo。",-1),N=e("h3",{id:"next-or-node",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#next-or-node"},[e("span",null,"Next or Node")])],-1),k={href:"https://docs.expo.dev/guides/using-nextjs/",target:"_blank",rel:"noopener noreferrer"},R=e("p",null,"因此确定使用 Expo + Node.js + Monorepo 的方案，这样可以使得项目结构更加清晰，便于管理和维护。",-1),j=e("h2",{id:"monorepo-搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#monorepo-搭建"},[e("span",null,"Monorepo 搭建")])],-1),w=e("p",null,[t("最初使用 "),e("code",null,"pnpm"),t(" workspaces 搭建 Monorepo 项目，然而安装依赖后启动报错：")],-1),y={href:"https://github.com/expo/expo/issues/22413",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/pnpm/pnpm/issues/4286",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,[t("查询到上述两个 issue 后，在目录中添加 "),e("code",null,".npmrc"),t(" 文件后重新安装依赖项目启动成功。")],-1),T=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`node-linker=hoisted
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),P=e("p",null,[t("考虑到可能还会遇到其他兼容问题，最终选择官方推荐的 "),e("code",null,"yarn 1.x"),t(" workspaces。")],-1),C={href:"https://docs.expo.dev/guides/monorepos/",target:"_blank",rel:"noopener noreferrer"},M=s(`<h3 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- packages
  - mobile
  - server
  - types
- package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 imperial-kitchen 文件夹中 使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx create-expo-app mobile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用 expo router，必须添加环境变量：<code>EXPO_USE_METRO_WORKSPACE_ROOT=1</code></p></div>`,5);function I(O,S){const n=a("ExternalLinkIcon");return i(),l("div",null,[d,p,e("p",null,[t("目前，"),e("a",h,[t("Flutter"),o(n)]),t(" 和 "),e("a",u,[t("React Native"),o(n)]),t(" 是最流行的跨端解决方案。")]),v,e("ul",null,[e("li",null,[e("a",m,[t("Flutter vs. React Native – Which is Better for Your Project in 2024?"),o(n)])]),e("li",null,[e("a",_,[t("4 Most Popular Cross-Platform App Development Frameworks for 2024"),o(n)])])]),g,b,x,f,N,e("p",null,[t("最初，考虑使用 Expo 与 Next.js 结合的方案来实现前后端不分离的全栈项目。然而，"),e("a",k,[t("Expo 官方"),o(n)]),t(" 提到 Next.js 只能用于 Expo for Web，无法实现跨端需求。")]),R,j,w,e("ul",null,[e("li",null,[e("a",y,[t("Pnpm not working with Expo"),o(n)])]),e("li",null,[e("a",E,[t("[bug] - Pnpm not working with expo"),o(n)])])]),F,T,P,e("p",null,[t("以下按照 "),e("a",C,[t("Work with monorepos"),o(n)]),t(" 搭建项目。")]),M])}const Z=r(c,[["render",I],["__file","01-init.html.vue"]]),z=JSON.parse('{"path":"/project/imperial-kitchen/01-init.html","title":"初始化项目","lang":"zh-CN","frontmatter":{"title":"初始化项目","date":"2024-05-09T00:00:00.000Z","icon":"STARTUP","category":["Project"],"tag":["init project","kitchen"],"description":"技术方案选型 Flutter vs React Native 目前，Flutter 和 React Native 是最流行的跨端解决方案。 考虑到 Flutter 使用 dart 语言，而 React Native 使用 js，学习成本相对而言较少，因此决定使用 React Native。 Flutter vs. React Native – Whic...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/project/imperial-kitchen/01-init.html"}],["meta",{"property":"og:title","content":"初始化项目"}],["meta",{"property":"og:description","content":"技术方案选型 Flutter vs React Native 目前，Flutter 和 React Native 是最流行的跨端解决方案。 考虑到 Flutter 使用 dart 语言，而 React Native 使用 js，学习成本相对而言较少，因此决定使用 React Native。 Flutter vs. React Native – Whic..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-12T06:37:11.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"init project"}],["meta",{"property":"article:tag","content":"kitchen"}],["meta",{"property":"article:published_time","content":"2024-05-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-12T06:37:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"初始化项目\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-12T06:37:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 技术方案选型","slug":"技术方案选型","link":"#技术方案选型","children":[{"level":3,"title":"1.1 Flutter vs React Native","slug":"flutter-vs-react-native","link":"#flutter-vs-react-native","children":[]},{"level":3,"title":"1.2 Expo Go vs React Native CLI","slug":"expo-go-vs-react-native-cli","link":"#expo-go-vs-react-native-cli","children":[]},{"level":3,"title":"1.3 Next or Node","slug":"next-or-node","link":"#next-or-node","children":[]}]},{"level":2,"title":"2 Monorepo 搭建","slug":"monorepo-搭建","link":"#monorepo-搭建","children":[{"level":3,"title":"2.1 init","slug":"init","link":"#init","children":[]}]}],"git":{"createdTime":1715495831000,"updatedTime":1715495831000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":1.9,"words":571},"filePathRelative":"project/imperial-kitchen/01-init.md","localizedDate":"2024年5月9日","excerpt":"","autoDesc":true}');export{Z as comp,z as data};
