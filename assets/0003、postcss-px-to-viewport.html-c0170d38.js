import{_ as e,V as p,W as t,X as s,Y as n,$ as o,a0 as l,C as r}from"./framework-a71e09ed.js";const c={},i=l(`<p>由于 px 是固定单位，所以在不同设备上显示的大小是固定的，而不同设备又有不同大小，为了适配不同设备的单位大小，需要将 px 转换为视口单位。</p><p>确定方案之后，那么思考如何将 px 转为视口单位呢，一个一个算？不太可能，因为你事先并不知道用户手中的设备是什么大小，这样换算得到的结果并不能满足所有用户的需求，因此需要一个更为适用的方法。</p><p>这就需要用到一个插件：<code>postcss-px-to-viewport</code>。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install postcss-px-to-viewport --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数配置" tabindex="-1"><a class="header-anchor" href="#参数配置" aria-hidden="true">#</a> 参数配置</h2><p>新建 <code>postcss.config.js</code>，默认配置如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;postcss-px-to-viewport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">unitToConvert</span><span class="token operator">:</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span>        <span class="token comment">// 需要转换的单位</span>
      <span class="token literal-property property">viewportWidth</span><span class="token operator">:</span> <span class="token number">320</span><span class="token punctuation">,</span>         <span class="token comment">// 设计稿的视口宽度</span>
      <span class="token literal-property property">unitPrecision</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>           <span class="token comment">// 单位转换后保留的精度</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>            <span class="token comment">// 能转换的vw属性列表</span>
      <span class="token literal-property property">viewportUnit</span><span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span>         <span class="token comment">// 希望使用的视口单位</span>
      <span class="token literal-property property">fontViewportUnit</span><span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// 字体使用的视口单位</span>
      <span class="token literal-property property">selectorBlackList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>      <span class="token comment">// 需要忽略的css选择器</span>
      <span class="token literal-property property">minPixelValue</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>           <span class="token comment">// 设置最小的转换数值，如果为1，只有大于1的值才会被转换</span>
      <span class="token literal-property property">mediaQuery</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>          <span class="token comment">// 媒体查询中是否需要转换单位</span>
      <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// 是否直接更换属性值</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>         <span class="token comment">// 忽略一些文件比如 node_modules</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>         <span class="token comment">// 如果设置了 include，则仅转换匹配的文件</span>
      <span class="token literal-property property">landscape</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>           <span class="token comment">// 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)</span>
      <span class="token literal-property property">landscapeUnit</span><span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span>        <span class="token comment">// 横屏时使用的单位</span>
      <span class="token literal-property property">landscapeWidth</span><span class="token operator">:</span> <span class="token number">568</span>         <span class="token comment">// 横屏时使用的视口宽度</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d={href:"https://github.com/evrone/postcss-px-to-viewport",target:"_blank",rel:"noopener noreferrer"},u=s("p",null,"当全部设置完成后，重新运行项目，查看 css 属性，即可发现所有 px 单位全部变成了 vw 单位。",-1),k=s("p",null,"切换不同的设备时，大小会随之发生变化。",-1);function m(v,b){const a=r("ExternalLinkIcon");return p(),t("div",null,[i,s("p",null,[n("详细配置见 "),s("a",d,[n("postcss-px-to-viewport"),o(a)]),n("。")]),u,k])}const x=e(c,[["render",m],["__file","0003、postcss-px-to-viewport.html.vue"]]);export{x as default};
