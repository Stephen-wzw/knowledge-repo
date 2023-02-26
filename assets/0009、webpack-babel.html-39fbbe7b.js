import{_ as e,V as p,W as l,X as n,Y as s,$ as i,a0 as t,C as c}from"./framework-a71e09ed.js";const o={},d={href:"https://github.com/Stephen-wzw/webpack-demo",target:"_blank",rel:"noopener noreferrer"},r=t(`<p>babel 是一个工具链，主要用于旧浏览器或环境中将 ECMAScript 2015+ 的代码转换成向后兼容版本的 JavaScript。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// babel 转换后</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>babel 本身可以作为一个独立的工具单独使用，但是在实际开发中，通常会在 webpack 等构建工具中配置 babel 来对其使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> babel-loader @babel/core <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>@babel/core</code> 是 babel 的核心代码，必须安装。</p></blockquote><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>安装完成后，修改 <code>webpack.config.js</code> 及 <code>index.js</code>：</p><p><strong>webpack.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ...
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   mode: &quot;development&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   devtool: &quot;source-map&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   output: {
</span><span class="token prefix unchanged"> </span><span class="token line">     filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     path: path.resolve(__dirname, &quot;dist&quot;), // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">     publicPath: &#39;&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">     clean: true
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   module: {
</span><span class="token prefix unchanged"> </span><span class="token line">     ...
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     {
</span><span class="token prefix inserted">+</span><span class="token line">       test: /\\./js$/,
</span><span class="token prefix inserted">+</span><span class="token line">       loader: &quot;babel-loader&quot;
</span><span class="token prefix inserted">+</span><span class="token line">     }
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   plugins: [
</span><span class="token prefix unchanged"> </span><span class="token line">     ...
</span><span class="token prefix unchanged"> </span><span class="token line">   ]
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>index.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ...
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> // babel
</span><span class="token prefix inserted">+</span><span class="token line"> const messages = [1, 2, 3];
</span><span class="token prefix inserted">+</span><span class="token line"> messages.map((n) =&gt; n + 1);
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新执行打包后，查看 <code>bundle.js</code>，发现打包后的文件仍然是 es6 语法：</p><p><strong>bundle.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 babel 在转换过程中，需要使用对应插件转换对应语法，因此我们需要安装相应插件。</p><p>比如需要转换箭头函数，可以安装 <code>@babel/plugin-transform-arrow-functions</code>，需要将 <code>const</code> 转换为 <code>var</code>，则需要安装 <code>@babel/plugin-transform-block-scoping</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/plugin-transform-arrow-functions @babel/plugin-transform-block-scoping <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功后修改下 <code>babel-loader</code> 的配置：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> {
</span><span class="token prefix unchanged"> </span><span class="token line">   test: /\\.js$/,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   loader: &quot;babel-loader&quot;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   use: {
</span><span class="token prefix inserted">+</span><span class="token line">     loader: &quot;babel-loader&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">     options: {
</span><span class="token prefix inserted">+</span><span class="token line">       plugins: [
</span><span class="token prefix inserted">+</span><span class="token line">         &quot;@babel/plugin-transform-arrow-functions&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">         &quot;@babel/plugin-transform-block-scoping&quot;
</span><span class="token prefix inserted">+</span><span class="token line">       ]
</span><span class="token prefix inserted">+</span><span class="token line">     }
</span><span class="token prefix inserted">+</span><span class="token line">   }
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时再执行下 <code>npm run build</code> 重新打包，查看 <code>bundle.js</code> 可以看到已经做了转换：</p><p><strong>bundle.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果要转换的内容过多，一个个插件安装起来比较麻烦，可以使用 babel 提供的预设（preset）。</p><p>常见的预设有三个：</p><ul><li>env</li><li>react</li><li>TypeScript</li></ul><p>在这里安装 <code>@babel/preset-env</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/preset-env <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>webpack.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> {
</span><span class="token prefix unchanged"> </span><span class="token line">   test: /\\.js$/,
</span><span class="token prefix unchanged"> </span><span class="token line">   use: {
</span><span class="token prefix unchanged"> </span><span class="token line">     loader: &quot;babel-loader&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     options: {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">       plugins: [
</span><span class="token prefix deleted">-</span><span class="token line">         &quot;@babel/plugin-transform-arrow-functions&quot;,
</span><span class="token prefix deleted">-</span><span class="token line">         &quot;@babel/plugin-transform-block-scoping&quot;
</span><span class="token prefix deleted">-</span><span class="token line">       ],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       presets: [
</span><span class="token prefix inserted">+</span><span class="token line">         &quot;@babel/preset-env&quot;
</span><span class="token prefix inserted">+</span><span class="token line">       ]
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     }
</span><span class="token prefix unchanged"> </span><span class="token line">   }
</span><span class="token prefix unchanged"> </span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>npm run build</code> 重新打包，查看 <code>bundle.js</code> 也可以达到一样的效果。</p><h2 id="babel-的配置文件" tabindex="-1"><a class="header-anchor" href="#babel-的配置文件" aria-hidden="true">#</a> babel 的配置文件</h2><p>可以将 bebel 的配置信息放到一个独立的文件，有两种方式：</p><ul><li>babel.config.json(或者 .js, .cjs, .mjs) 文件</li><li>.babelrc.json(或者 .babelrc, .js, .cjs, .mjs) 文件</li></ul><p>这二者的区别在于前者是早期使用较多的配置方式，但是对于配置 Monorepos 项目比较麻烦；后者是 babel7 以后的配置方式，可以直接用于 Monorepos 项目的子包，更加推荐。</p><p>在项目中新增 <code>babel.config.js</code>，并修改 <code>webpack.config.js</code>：</p><p><strong>babel.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@babel/preset-env&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>webpack.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> {
</span><span class="token prefix deleted">-</span><span class="token line">   test: /\\.js$/,
</span><span class="token prefix deleted">-</span><span class="token line">   use: {
</span><span class="token prefix deleted">-</span><span class="token line">     loader: &quot;babel-loader&quot;,
</span><span class="token prefix deleted">-</span><span class="token line">     options: {
</span><span class="token prefix deleted">-</span><span class="token line">       // plugins: [
</span><span class="token prefix deleted">-</span><span class="token line">       //   &quot;@babel/plugin-transform-arrow-functions&quot;,
</span><span class="token prefix deleted">-</span><span class="token line">       //   &quot;@babel/plugin-transform-block-scoping&quot;
</span><span class="token prefix deleted">-</span><span class="token line">       // ],
</span><span class="token prefix deleted">-</span><span class="token line">       presets: [
</span><span class="token prefix deleted">-</span><span class="token line">         &quot;@babel/preset-env&quot;
</span><span class="token prefix deleted">-</span><span class="token line">       ]
</span><span class="token prefix deleted">-</span><span class="token line">     }
</span><span class="token prefix deleted">-</span><span class="token line">   }
</span><span class="token prefix deleted">-</span><span class="token line"> }
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> {
</span><span class="token prefix inserted">+</span><span class="token line">   test: /\\.js$/,
</span><span class="token prefix inserted">+</span><span class="token line">   loader: &quot;babel-loader&quot;
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新打包后，语法转换仍然生效。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>webpack 中的 <code>babel-loader</code> 依赖于 <code>@babel/core</code>，而他生效需要借助不同的语法转换插件，当需要转换的内容过多时，可以使用 babel 提供的预设完成。同时 babel 还能单独写一个配置文件。</p>`,43);function u(k,b){const a=c("ExternalLinkIcon");return p(),l("div",null,[n("blockquote",null,[n("p",null,[s("项目地址："),n("a",d,[s("https://github.com/Stephen-wzw/webpack-demo"),i(a)])])]),r])}const m=e(o,[["render",u],["__file","0009、webpack-babel.html.vue"]]);export{m as default};
