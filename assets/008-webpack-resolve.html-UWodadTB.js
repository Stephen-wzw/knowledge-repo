import{_ as a,r as t,o,c as p,a as e,d as n,b as i,e as c}from"./app-_LprvjBg.js";const l={},r={href:"https://github.com/Stephen-wzw/webpack-demo",target:"_blank",rel:"noopener noreferrer"},d=c(`<p>在开发中会有各种各样的模块，这些文件可能自己编写，也可能来自第三方库。<code>resolve</code> 选项能设置模块如何被解析。webpack 会提供合理的默认值，但是还是可能会修改一些解析的细节。</p><h2 id="webpack-解析规则" tabindex="-1"><a class="header-anchor" href="#webpack-解析规则"><span>webpack 解析规则</span></a></h2><h3 id="绝对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径"><span>绝对路径</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;/home/me/file&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;C:\\\\Users\\\\me\\\\file&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于以及获得文件的绝对路径，因此不需要再做进一步解析。</p><h3 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径"><span>相对路径</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;../src/file1&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./file2&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，使用 <code>import</code> 或 <code>require</code> 的资源文件所处的目录，被认为是上下文目录。在 <code>import/require</code> 中给定的相对路径，会拼接此上下文路径，来生成模块的绝对路径。</p><h3 id="模块路径" tabindex="-1"><a class="header-anchor" href="#模块路径"><span>模块路径</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;module/lib/file&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>模块会在 resolve.modules 中指定检索模块，默认值为 [&#39;node_modules]，所以默认是从 <code>node_modules</code> 下查找文件。</p><h3 id="确定文件还是文件夹" tabindex="-1"><a class="header-anchor" href="#确定文件还是文件夹"><span>确定文件还是文件夹</span></a></h3><p>一旦根据上述规则解析路径后，resolver 将会检查路径是指向文件还是文件夹。如果路径指向文件：</p><ul><li>如果文件具有扩展名，则直接将文件打包。</li><li>否则，将使用 <code>resolve.extensions</code> 选项作为文件扩展名来解析，此选项会告诉解析器在解析中能够接受那些扩展名（例如 .js，.jsx）。</li></ul><p>如果路径指向一个文件夹，则进行如下步骤寻找具有正确扩展名的文件：</p><ul><li>根据 <code>resolve.mainFields</code> 配置中的字段顺序查找，默认值是 <code>[&#39;index&#39;]</code>；</li><li>然后使用 <code>resolve.extensions</code> 选项，以类似的方式解析文件扩展名。</li></ul><h2 id="extensions-和-alias-配置" tabindex="-1"><a class="header-anchor" href="#extensions-和-alias-配置"><span><code>extensions</code> 和 <code>alias</code> 配置</span></a></h2><p><code>extensions</code> 选项可以在解析到文件时自动添加扩展名。默认值为 <code>[&#39;.wasm&#39;, &#39;.mjs&#39;, &#39;.js&#39;, &#39;.json&#39;]</code>。</p><p><code>alias</code> 可以为路径配置别名，当项目结构比较深时，一个文件的路径可能加上 <code>../../../</code> 这种路径片段。就可以给常见的路径配置别名了。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.wasm&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.mjs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.ts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;js&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function u(k,m){const s=t("ExternalLinkIcon");return o(),p("div",null,[e("blockquote",null,[e("p",null,[n("项目地址："),e("a",r,[n("https://github.com/Stephen-wzw/webpack-demo"),i(s)])])]),d])}const b=a(l,[["render",u],["__file","008-webpack-resolve.html.vue"]]),h=JSON.parse('{"path":"/frontend/engineering/build-tool/webpack/008-webpack-resolve.html","title":"webpack-resolve","lang":"zh-CN","frontmatter":{"title":"webpack-resolve","date":"2022-05-17T00:00:00.000Z","category":["工程化"],"tag":["项目打包","webpack"],"description":" 项目地址：https://github.com/Stephen-wzw/webpack-demo 在开发中会有各种各样的模块，这些文件可能自己编写，也可能来自第三方库。resolve 选项能设置模块如何被解析。webpack 会提供合理的默认值，但是还是可能会修改一些解析的细节。 webpack 解析规则 绝对路径 由于以及获得文件的绝对路径，因此不...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/engineering/build-tool/webpack/008-webpack-resolve.html"}],["meta",{"property":"og:title","content":"webpack-resolve"}],["meta",{"property":"og:description","content":" 项目地址：https://github.com/Stephen-wzw/webpack-demo 在开发中会有各种各样的模块，这些文件可能自己编写，也可能来自第三方库。resolve 选项能设置模块如何被解析。webpack 会提供合理的默认值，但是还是可能会修改一些解析的细节。 webpack 解析规则 绝对路径 由于以及获得文件的绝对路径，因此不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T08:28:24.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"项目打包"}],["meta",{"property":"article:tag","content":"webpack"}],["meta",{"property":"article:published_time","content":"2022-05-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T08:28:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webpack-resolve\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-07T08:28:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 webpack 解析规则","slug":"webpack-解析规则","link":"#webpack-解析规则","children":[{"level":3,"title":"1.1 绝对路径","slug":"绝对路径","link":"#绝对路径","children":[]},{"level":3,"title":"1.2 相对路径","slug":"相对路径","link":"#相对路径","children":[]},{"level":3,"title":"1.3 模块路径","slug":"模块路径","link":"#模块路径","children":[]},{"level":3,"title":"1.4 确定文件还是文件夹","slug":"确定文件还是文件夹","link":"#确定文件还是文件夹","children":[]}]},{"level":2,"title":"2 extensions 和 alias 配置","slug":"extensions-和-alias-配置","link":"#extensions-和-alias-配置","children":[]}],"git":{"createdTime":1704616104000,"updatedTime":1704616104000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":1.74,"words":522},"filePathRelative":"frontend/engineering/build-tool/webpack/008-webpack-resolve.md","localizedDate":"2022年5月17日","excerpt":"","autoDesc":true}');export{b as comp,h as data};
