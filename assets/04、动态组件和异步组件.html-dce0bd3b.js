import{_ as n,V as a,W as s,a0 as t}from"./framework-a71e09ed.js";const e={},p=t(`<h2 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h2><p>有时需要点击标签切换不同组件，这时可以使用 Vue-Router 实现，但其实还有另外两个不同的实现思路：</p><ul><li>通过 <code>v-if</code> 判断显示不同的组件；</li><li>动态组件</li></ul><h3 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if" aria-hidden="true">#</a> <code>v-if</code></h3><p>当组件返回单个根节点时，非 prop 的 attribute 会自动添加到根节点的 attribute 中。例如在 date-picker 组件实例中：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentTab === &#39;home&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>home</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>home</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentTab === &#39;about&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>about</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>about</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>category</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但当标签变多时，这种方法就显得非常繁琐。下面使用动态组件实现。</p><h3 id="动态组件-1" tabindex="-1"><a class="header-anchor" href="#动态组件-1" aria-hidden="true">#</a> 动态组件</h3><p>动态组件使用 <code>component</code> 组件，并通过 attribute <code>is</code> 控制显示哪个组件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentTab<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述示例中，currentTab 可以包括：</p><ul><li>已注册组件的名字；</li><li>一个组件选项对象。</li></ul><h3 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> <code>keep-alive</code></h3><p>当在这些组件之间切换的时候，有时候会想保持某些组件的状态，以免重复渲染造成的性能问题。这时可以使用 <code>keep-alvie</code> 内置组件将其包裹起来：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 失活的组件将会被缓存！--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentTab<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="keep-alive-属性" tabindex="-1"><a class="header-anchor" href="#keep-alive-属性" aria-hidden="true">#</a> <code>keep-alive</code> 属性</h4><p><code>keep-alive</code> 有一些属性：</p><ul><li><code>include</code> - String | RegExp | Array：只有名称匹配的组件会被缓存；</li><li><code>exlcude</code> - String | RegExp | Array：任何匹配的组件都不会被缓存；</li><li><code>max</code> - number | string：最多可以缓存都少组件实例，一旦超过最大值，那么缓存组件最远没有访问的实例将会被销毁。</li></ul><blockquote><p><code>include</code>、<code>exclude</code> 首先检查组件自身的 <code>name</code> 选项。</p></blockquote><h4 id="缓存组件的生命周期" tabindex="-1"><a class="header-anchor" href="#缓存组件的生命周期" aria-hidden="true">#</a> 缓存组件的生命周期</h4><p>对于缓存组件来说，再次进入时，不会执行 <code>create</code> 或 <code>mounted</code> 等生命周期函数。</p><p>但是有时候确实希望监听到何时重新进入到了组件，何时离开了组件，此时可以使用 <code>activated</code> 和 <code>deactivated</code> 监听。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;activated&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">deactivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;deactivated&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件" aria-hidden="true">#</a> 异步组件</h2><p>默认情况下，在构建整个组件树的过程中，因为组件和组件之间是通过模块化直接依赖的，那么 webpack 在打包过程中会将组件模块打包到一个文件中（比如 app.js）。</p><p>但是当项目不断扩大，app.js 文件的内容过大，会造成首屏渲染速度过慢。</p><p>因此我们希望在打包的过程中，对一些不需要立即使用的组件，可以单独对他们进行拆分，拆分成一个个小的代码块 chunk.js。这些 chunk.js 代码会在需要时从服务器下载下来使用。</p><p>为了实现这个效果，Vue 有一个 <code>defineAsyncComponent</code> 方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./AsyncComp.vue&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    AsyncComponent
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),c=[p];function o(l,i){return a(),s("div",null,c)}const d=n(e,[["render",o],["__file","04、动态组件和异步组件.html.vue"]]);export{d as default};
