import{_ as e,V as p,W as i,X as n,Y as s,$ as l,a0 as t,C as c}from"./framework-a71e09ed.js";const o="/blog/assets/mode-5b447b31.png",d="/blog/assets/source-map-1-804079bc.png",u="/blog/assets/source-map-2-7868c662.png",r={},k={href:"https://github.com/Stephen-wzw/webpack-demo",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>前面介绍了 webpack loader 打包 JavaScript、CSS、图片和字体等模块资源，这次介绍 webpack 中的另外一个核心：<strong>插件</strong>。</p><blockquote><p>webpack 官方文档描述了二者区别：loader 用于转换某些类型的模块，而插件可以执行范围更广的任务，包括：打包优化、资源管理、注入环境变量等。</p></blockquote><h2 id="清理-dist-文件" tabindex="-1"><a class="header-anchor" href="#清理-dist-文件" aria-hidden="true">#</a> 清理 dist 文件</h2><p>在前面的项目中，每次重新打包其实都略去了一步：手动删除 dist 文件夹。在 webpack5 以前，可以借助 <code>CleanWebpackPlugin</code> 来帮我们完成这个操作。而 webpack5 中，在 <code>output</code> 中设置 <code>clean: true</code> 即可。</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> const path = require(&quot;path&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   output: {
</span><span class="token prefix unchanged"> </span><span class="token line">     filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     path: path.resolve(__dirname, &quot;dist&quot;), // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">     publicPath: &#39;./dist/&#39;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     clean: true
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   module: {
</span><span class="token prefix unchanged"> </span><span class="token line">     ...
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="htmlwebpackplugin" tabindex="-1"><a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a> <code>HtmlWebpackPlugin</code></h2><p>在之前的项目中，<code>index.html</code> 文件编写在根目录下，而最终打包的 dist 文件中没有 <code>index.html</code> 文件。在进行项目部署的时候，必然也是需要有对应的入口文件 <code>index.html</code>。</p><p>对 <code>index.html</code> 进行打包处理可以使用 <code>HtmlWebpackPlugin</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> html-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> const path = require(&quot;path&quot;);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   output: {
</span><span class="token prefix unchanged"> </span><span class="token line">     filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     path: path.resolve(__dirname, &quot;dist&quot;), // 需要使用绝对路径
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">     publicPath: &#39;./dist/&#39;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     publicPath: &#39;&#39;,
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     clean: true
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   module: {
</span><span class="token prefix unchanged"> </span><span class="token line">     ...
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   plugins: [
</span><span class="token prefix inserted">+</span><span class="token line">     new HtmlWebpackPlugin({
</span><span class="token prefix inserted">+</span><span class="token line">       title: &quot;webpack-plugin&quot;
</span><span class="token prefix inserted">+</span><span class="token line">     })
</span><span class="token prefix inserted">+</span><span class="token line">   ]
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> };
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当执行 <code>npm run build</code> 时，会自动生成一个 <code>index.html</code> 文件，它在默认情况下是根据 ejs 的一个模板生成的。</p><blockquote><p>在 <code>HtmlWebpackPlugin</code> 源码中，有一个 <code>default_index.ejs</code> 模块。</p></blockquote><p>当我们想自定义一个模板时，比如开发 Vue 项目时，需要一个挂载后续组件的根标签。</p><p>这时我们修改下项目目录结构：</p><p><strong>project</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> webpack-demo
</span><span class="token prefix unchanged"> </span><span class="token line"> |- node_modules
</span><span class="token prefix unchanged"> </span><span class="token line"> |- package-lock.json
</span><span class="token prefix unchanged"> </span><span class="token line"> |- package.json
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> |- index.html
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> |- /public
</span><span class="token prefix inserted">+</span><span class="token line">   |- favicon.ico
</span><span class="token prefix inserted">+</span><span class="token line">   |- index.html
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> |- /src
</span><span class="token prefix unchanged"> </span><span class="token line">   |- /css
</span><span class="token prefix unchanged"> </span><span class="token line">     |- style.css
</span><span class="token prefix unchanged"> </span><span class="token line">     |- title.less
</span><span class="token prefix unchanged"> </span><span class="token line">   |- /font
</span><span class="token prefix unchanged"> </span><span class="token line">     |- iconfont.css
</span><span class="token prefix unchanged"> </span><span class="token line">     |- iconfont.eot
</span><span class="token prefix unchanged"> </span><span class="token line">     |- iconfont.ttf
</span><span class="token prefix unchanged"> </span><span class="token line">     |- iconfont.woff
</span><span class="token prefix unchanged"> </span><span class="token line">     |- iconfont.woff2
</span><span class="token prefix unchanged"> </span><span class="token line">   |- /img
</span><span class="token prefix unchanged"> </span><span class="token line">     |- avatar.png
</span><span class="token prefix unchanged"> </span><span class="token line">     |- wallpaper.png
</span><span class="token prefix unchanged"> </span><span class="token line">   |- /js
</span><span class="token prefix unchanged"> </span><span class="token line">     |- format.js
</span><span class="token prefix unchanged"> </span><span class="token line">     |- math.js  
</span><span class="token prefix unchanged"> </span><span class="token line">   |- index.js
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>public/index.html</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= BASE_URL %&gt;favicon.ico<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>&lt;%= htmlWebpackPlugin.options.title %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>We&#39;re sorry but &lt;%= htmlWebpackPlugin.options.title %&gt; doesn&#39;t work properly without JavaScript enabled. Please enable it to continue.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- built files will be auto injected --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时可以修改 <code>webpack.config.js</code>：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> const path = require(&quot;path&quot;);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   output: {
</span><span class="token prefix unchanged"> </span><span class="token line">     filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     path: path.resolve(__dirname, &quot;dist&quot;), // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">     publicPath: &#39;&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">     clean: true
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   module: {
</span><span class="token prefix unchanged"> </span><span class="token line">     ...
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   plugins: [
</span><span class="token prefix unchanged"> </span><span class="token line">     new HtmlWebpackPlugin({
</span><span class="token prefix unchanged"> </span><span class="token line">       title: &quot;webpack-plugin&quot;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       template: &quot;./public/index.html&quot;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     })
</span><span class="token prefix unchanged"> </span><span class="token line">   ]
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是现在打包仍然会报错：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ERROR <span class="token keyword">in</span>   ReferenceError: BASE_URL is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为在编译的时候，有一个 <code>BASE_URL</code>：<code>&lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;</code>，但是我们并没有设置过这个值，因此会报错，这时我们可以使用 <code>DefinePlugin</code> 插件。</p><h2 id="defineplugin" tabindex="-1"><a class="header-anchor" href="#defineplugin" aria-hidden="true">#</a> <code>DefinePlugin</code></h2><p><code>DefinePlugin</code> 允许在编译时创建配置的全局变量，是 webpack 内置的插件，不需要单独安装。</p><p><strong>webpack.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> const path = require(&quot;path&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line"> const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const { DefinePlugin } = require(&quot;webpack&quot;);
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   output: {
</span><span class="token prefix unchanged"> </span><span class="token line">     filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     path: path.resolve(__dirname, &quot;dist&quot;), // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">     publicPath: &#39;&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">     clean: true
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   module: {
</span><span class="token prefix unchanged"> </span><span class="token line">     ...
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   plugins: [
</span><span class="token prefix unchanged"> </span><span class="token line">     new HtmlWebpackPlugin({
</span><span class="token prefix unchanged"> </span><span class="token line">       title: &quot;webpack-plugin&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">       template: &quot;./public/index.html&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">     }),
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     new DefinePlugin({
</span><span class="token prefix inserted">+</span><span class="token line">       BASE_URL: &quot;&#39;./&#39;&quot;
</span><span class="token prefix inserted">+</span><span class="token line">     })
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ]
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在重新输入 <code>npm run build</code> 进行打包，则不会出现刚才的错误。</p><h2 id="copywebpackplugin" tabindex="-1"><a class="header-anchor" href="#copywebpackplugin" aria-hidden="true">#</a> <code>CopyWebpackPlugin</code></h2><p>经过上述步骤的处理后，虽然打包成功，但是网站图标没有被打包进 <code>dist</code> 文件夹。在 Vue 项目的打包过程中，如果我们将一些文件夹放到 <code>public</code> 文件夹中，那么这个目录会被复制到 <code>dist</code> 文件夹中。</p><p>这个功能可以通过 <code>CopyWebpackPlugin</code> 完成。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> copy-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> const path = require(&quot;path&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line"> const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line"> const { DefinePlugin } = require(&quot;webpack&quot;);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const CopyPlugin = require(&quot;copy-webpack-plugin&quot;);
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   output: {
</span><span class="token prefix unchanged"> </span><span class="token line">     filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     path: path.resolve(__dirname, &quot;dist&quot;), // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">     publicPath: &#39;&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">     clean: true
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   module: {
</span><span class="token prefix unchanged"> </span><span class="token line">     ...
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   plugins: [
</span><span class="token prefix unchanged"> </span><span class="token line">     new HtmlWebpackPlugin({
</span><span class="token prefix unchanged"> </span><span class="token line">       title: &quot;webpack-plugin&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">       template: &quot;./public/index.html&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">     }),
</span><span class="token prefix unchanged"> </span><span class="token line">     new DefinePlugin({
</span><span class="token prefix unchanged"> </span><span class="token line">       BASE_URL: &quot;&#39;./&#39;&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">     }),
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     new CopyPlugin({
</span><span class="token prefix inserted">+</span><span class="token line">       patterns: [
</span><span class="token prefix inserted">+</span><span class="token line">         {
</span><span class="token prefix inserted">+</span><span class="token line">           from: &quot;public&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">           globOptions: {
</span><span class="token prefix inserted">+</span><span class="token line">             ignore: [&#39;**/index.html&#39;]
</span><span class="token prefix inserted">+</span><span class="token line">           }
</span><span class="token prefix inserted">+</span><span class="token line">         }
</span><span class="token prefix inserted">+</span><span class="token line">       ]
</span><span class="token prefix inserted">+</span><span class="token line">     })      
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ]
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制的规则可以在 <code>patterns</code> 中设置：</p><ul><li><code>from</code>：设置从哪个源开始复制；</li><li><code>to</code>：复制到的位置，省略则复制到打包的目录下；</li><li><code>globOptions</code>：设置一些额外的选项。<code>ignore</code> 设置忽略的文件，这里设置为忽略 <code>index.html</code>，因为它已经通过 <code>HtmlWebpackPlugin</code> 完成了打包。</li></ul><p>重新执行 <code>npm run build</code> 进行打包，可以看到 <code>favicon.ico</code> 被复制到了 <code>dist</code> 文件夹中，并且浏览器也能正确显示网站图标了。</p><blockquote><p>若没显示网站图标，可以清下缓存试试。</p></blockquote><h2 id="mode-配置" tabindex="-1"><a class="header-anchor" href="#mode-配置" aria-hidden="true">#</a> Mode 配置</h2><p>前面打包的过程中，其实一直报了一个警告：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>WARNING <span class="token keyword">in</span> configuration
The <span class="token string">&#39;mode&#39;</span> option has not been set, webpack will fallback to <span class="token string">&#39;production&#39;</span> <span class="token keyword">for</span> this value.
Set <span class="token string">&#39;mode&#39;</span> option to <span class="token string">&#39;development&#39;</span> or <span class="token string">&#39;production&#39;</span> to <span class="token builtin class-name">enable</span> defaults <span class="token keyword">for</span> each environment.
You can also <span class="token builtin class-name">set</span> it to <span class="token string">&#39;none&#39;</span> to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>webpack 提供 <code>mode</code> 配置选项，告知 webpack 使用相应模式的内置优化。</p><ul><li><code>development</code>：会将 <code>DefinePlugin</code> 中 <code>p<wbr>rocess.env.NODE_ENV</code> 的值设置为 <code>development</code>，为模块和 chunk 启用有效的名；</li><li><code>production</code>：会将 <code>DefinePlugin</code> 中 <code>p<wbr>rocess.env.NODE_ENV</code> 的值设置为 <code>production</code>。为模块和 chunk 启用确定性的混淆名称，<code>FlagDependencyUsagePlugin</code>，<code>FlagIncludedChunksPlugin</code>，<code>ModuleConcatenationPlugin</code>，<code>NoEmitOnErrorsPlugin</code> 和 <code>TerserPlugin</code>。</li><li><code>none</code>：不使用任何默认优化。</li></ul><figure><img src="`+o+`" alt="mode配置" tabindex="0" loading="lazy"><figcaption>mode配置</figcaption></figure><p>在开发阶段，通常会设置 <code>mode: development</code>。</p><p>为了演示它的作用，可以在 <code>format.js</code> 中写个错误代码：</p><p><strong>format.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> const priceFormat = function () {
</span><span class="token prefix unchanged"> </span><span class="token line">   return &quot;￥100.8&quot;;
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span><span class="token prefix unchanged"> </span><span class="token line"> 
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const content = &quot;hello webpack&quot;;
</span><span class="token prefix inserted">+</span><span class="token line"> console.log(content1.length);
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> // CommonJS
</span><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   priceFormat,
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台上会报错，但是不会显示具体在原文件的哪个位置。</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果需要显示错误的具体位置，那么需要在 <code>webpack.config.js</code> 中配置开发模式：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">// 省略其他 
</span><span class="token prefix unchanged"> </span><span class="token line">module.exports = {
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  mode: &quot;development&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">  devtool: &quot;source-map&quot;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">}
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>source-map</code> 可以帮我们快速定位错误位置，在开发模式中，会默认设置 <code>devtool: &quot;source-map&quot;</code>。</p><p>此时重新打包后，在控制台就会出现错误的具体位置，能够快速帮我们解决 bug。</p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>webpack5 除了 loader 外，还有插件这一核心概念，他能执行范围更广的任务。</p><p>在这个案例中，我们首先介绍了如何清理 <code>dist</code> 文件夹；然后介绍如何打包 <code>index.html</code> 文件；接着是两个插件 <code>DefinePlugin</code> 和 <code>CopyWebpackPlugin</code> 的使用，它们可以帮助我们实现 Vue 打包中的一些功能；最后介绍了 webpack 的 <code>mode</code> 配置。</p>',57);function g(m,b){const a=c("ExternalLinkIcon");return p(),i("div",null,[n("blockquote",null,[n("p",null,[s("项目地址："),n("a",k,[s("https://github.com/Stephen-wzw/webpack-demo"),l(a)])])]),v])}const f=e(r,[["render",g],["__file","0008、webpack插件.html.vue"]]);export{f as default};
