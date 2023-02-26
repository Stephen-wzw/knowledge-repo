import{_ as n,V as s,W as a,a0 as t}from"./framework-a71e09ed.js";const p={},e=t(`<h2 id="父传子-props" tabindex="-1"><a class="header-anchor" href="#父传子-props" aria-hidden="true">#</a> 父传子 <code>props</code></h2><p>父组件向子组件传值，通过 <code>props</code> 属性。这个属性可以在<strong>子组件</strong>上注册一些自定义的 <code>attribute</code>。父组件给这些 <code>attribute</code> 赋值，子组件通过 <code>attribute</code> 的名称获取到对应的值。</p><p><code>props</code> 有两种用法：</p><ul><li>字符串数组：字符即为 <code>attribute</code> 的名称</li><li>对象类型：指定 <code>attribute</code> 名称的同时，指定传递的类型、是否必须、默认值、校验等等。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串数组</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对象类型</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 基础的类型检查，null 和 undefined 会通过任何类型的检查</span>
  <span class="token literal-property property">propsA</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
  <span class="token comment">// 多个可能的类型</span>
  <span class="token literal-property property">propsB</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 必填的字符串</span>
  <span class="token literal-property property">propsC</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 带有默认值的数字</span>
  <span class="token literal-property property">propsD</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">100</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 带有默认值的对象</span>
  <span class="token literal-property property">propsE</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 对象或数组默认值必须从一个工厂函数获取</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 自定义验证函数</span>
  <span class="token literal-property property">propsF</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这个值必须匹配下列字符串的一个</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;waring&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;danger&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">propsG</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
    <span class="token comment">// 与对象或数组的默认值不同，这不是一个工厂函数，而是一个用作默认值的函数</span>
    <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;Default Function&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传值" tabindex="-1"><a class="header-anchor" href="#传值" aria-hidden="true">#</a> 传值</h3><p>当在父组件用 <code>prop</code> 给子组件传值时，除了字符串类型可以静态传值，其他类型都需要使用 <code>v-bind</code> 动态绑定告诉 Vue 这不是一个字符串。</p><p>当需要传递一个对象的所有 property 的时候，可以丢弃 <code>v-bind</code> 参数：</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>post: {
  id: 1,
  title: &#39;My Journey with Vue&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;blog-post v-bind=&quot;post&quot;&gt;&lt;/blog-post&gt;

&lt;!-- 等价于 --&gt;

&lt;blog-post
  v-bind:id=&quot;post.id&quot;
  v-bind:title=&quot;post.title&quot;
&gt;&lt;/blog-post&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单向数据流" tabindex="-1"><a class="header-anchor" href="#单向数据流" aria-hidden="true">#</a> 单向数据流</h3><p>所有的 <code>prop</code> 都使得其父子 <code>prop</code> 之间形成了一个<strong>单向下行绑定</strong>：父级 <code>prop</code> 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致应用的数据流向难以理解。</p><p>而且，每次父级组件发生变更时，子组件中所有的 <code>prop</code> 都将会刷新为最新的值。这意味着<strong>不</strong>应该在一个子组件内部改变 <code>prop</code>。</p><p>这里有两种常见的试图变更一个 prop 的情形：</p><ol><li><p><strong>这个 <code>prop</code> 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用</strong>。在这种情况下，最好定义一个本地的 data property 并将这个 <code>prop</code> 用作其初始值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;initialCounter&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>initialCounter
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>这个 prop 以一种原始的值传入且需要进行转换</strong>。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">normalizedSize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p>注意在 JavaScript 中对象和数组是引用类型，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身<strong>将会</strong>影响到父组件的状态。</p></blockquote><p>如果确实需要实现父子组件中某一个 <code>prop</code> 的双向绑定，应该通过<strong>自定义事件</strong>（子向父通信）实现。</p><h3 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h3><p>HTML 中对 <code>attribute</code> 的大小写是不敏感的，浏览器会把所有大写字符解释为小写字符，这意味着当在使用在 DOM 中的模板时，驼峰命名的 <code>props</code> 需要使用等价的短横线命名。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-comp</span> <span class="token attr-name">messageInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>camelCase<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-comp</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 等价于 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-comp</span> <span class="token attr-name">message-info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>kebab-case<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-comp</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此推荐使用短横线命名，在 .vue 文件中驼峰命名生效的原因在于 Vue 给我们做了转换。</p><h2 id="子传父-emit" tabindex="-1"><a class="header-anchor" href="#子传父-emit" aria-hidden="true">#</a> 子传父 <code>$emit</code></h2><p>子组件自定义事件，通过 <code>$emit</code> 触发。大致用法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;myEvent&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token attr-name">@my-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doSomething<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不同于 Vue@2.x 的是，自定义事件现在和 <code>props</code> 一样，需要先定义 <code>emits</code>，然后由子组件发出，最后再父组件接受。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child-comp1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;button @click=&quot;increment&quot;&gt;+1&lt;/button&gt;
    &lt;button @click=&quot;decrement&quot;&gt;-1&lt;/button&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sub&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;+1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;sub&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样 <code>emits</code> 也能使用对象类型定义，能够添加对指定事件的验证。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child-comp2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;input type=&quot;text&quot; v-model.number=&quot;num&quot;&gt;
    &lt;button @click=&quot;incrementN&quot;&gt;+1&lt;/button&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当参数大于 10 时，才触发</span>
    <span class="token function-variable function">addN</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">incrementN</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;+N&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;addN&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","01、父子组件通信.html.vue"]]);export{r as default};
