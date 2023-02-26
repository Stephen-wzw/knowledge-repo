import{_ as n,V as s,W as a,a0 as p}from"./framework-a71e09ed.js";const e={},t=p(`<p>在 JavaScript 中使用 class 时，可以很方便地创建类和继承，然而在 ES6 之前的规范中，是使用构造函数和基于原型的继承模式，而 class 仅仅是它们的语法糖。因此在了解 ES6 class 之前，有必要了解以前模拟类和继承的方法。</p><p>首先来看看在 JavaScript 中是如何创建一个对象的。</p><h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><p>工厂模式是一种常见的设计模式，通过工厂方法返回想要的对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  o<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  o<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  o<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> o
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token comment">// { name: &#39;wang&#39;, age: 18, sayName: [Function (anonymous)] }</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工厂模式虽然可以解决创建多个类似对象的问题，但是它创建的对象没有标识。</p><h2 id="构造函数模式" tabindex="-1"><a class="header-anchor" href="#构造函数模式" aria-hidden="true">#</a> 构造函数模式</h2><p>在 JavaScript 中，任何函数只要使用 new 操作符调用就是构造函数，而不使用 new 操作符调用的函数就是普通函数。</p><p>构造函数也称构造器（constructor），是创建对象时会调用的函数。</p><blockquote><p>箭头函数不能使用 new 调用。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;hou&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span> <span class="token comment">// Person { name: &#39;wang&#39;, age: 18, sayName: [Function (anonymous)] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">// Person { name: &#39;hou&#39;, age: 18, sayName: [Function (anonymous)] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用构造函数创建对象时，它<strong>打印出了对象标识</strong>，也就是说它解决了工厂模式没有对象标识的问题。</p><p><strong>构造函数存在的问题：</strong></p><p>首先让我们来看看 new 操作的过程：</p><ol><li>首先创建一个空对象；</li><li>将空对象的原型赋值为构造函数的 prototype 对象；</li><li>让构造函数的 this 指向这个空对象，执行构造函数的代码；</li><li>判断构造函数返回值的类型，如果是基本类型，则返回创建的对象，如果是引用类型，则返回这个引用类型。</li></ol><p>注意到第三步，构造函数的问题在于定义的方法会在每个实例上都创建一次。</p><p>要解决这个问题，可以把函数定义转移到构造函数外部：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span>sayName <span class="token operator">=</span> sayName
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;hou&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果这个对象需要多个方法，就要在全局作用域上定义多个函数，这会污染全局作用域。这个问题可以通过原型模型来解决。</p><h2 id="原型模式" tabindex="-1"><a class="header-anchor" href="#原型模式" aria-hidden="true">#</a> 原型模式</h2><p>在了解原型模式的具体过程前，先来看看隐式原型和显示原型的概念。</p><h3 id="隐式原型和显示原型" tabindex="-1"><a class="header-anchor" href="#隐式原型和显示原型" aria-hidden="true">#</a> 隐式原型和显示原型</h3><h4 id="隐式原型" tabindex="-1"><a class="header-anchor" href="#隐式原型" aria-hidden="true">#</a> 隐式原型</h4><p>在通过对象访问属性时，会按照这个属性的名称开始搜索。搜索开始于对象实例本身。如果在这个实例上发现了给定的名称，则返回该名称对应的值。如果没有找到这个属性，则搜索会沿着**原型链（隐式原型）**继续查找。</p><p>每个<strong>对象</strong>都有一个特殊的内置属性 <code>[[prototype]]</code>，这个特殊的对象指向另外一个对象。早期的 ECMA 没有规范如何去查看 <code>[[prototype]]</code>，因此浏览器给对象提供一个 <code>__proto__</code> 属性来查看这个属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span>sayName <span class="token operator">=</span> sayName
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token comment">// 查看对象隐式原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">// {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES5 之后提供了 <code>Object.getPrototypeOf()</code> 查看：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 查看对象隐式原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="显式原型" tabindex="-1"><a class="header-anchor" href="#显式原型" aria-hidden="true">#</a> 显式原型</h4><p>函数作为对象，也拥有隐式原型 <code>[[prototype]]</code> 属性。</p><p>此外，每个函数都会创建一个 <code>prototype</code> 属性，称为函数的显式原型。这个属性指向原型对象，包含应该由特定引用类型的实例共享的属性和方法。所有原型对象自动获得一个名为 <code>constructor</code> 的属性，指回与之关联的构造函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">//   constructor: {</span>
<span class="token comment">//     value: [Function: foo],</span>
<span class="token comment">//     writable: true,</span>
<span class="token comment">//     enumerable: false,</span>
<span class="token comment">//     configurable: true</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原型模式具体实现过程" tabindex="-1"><a class="header-anchor" href="#原型模式具体实现过程" aria-hidden="true">#</a> 原型模式具体实现过程</h3><p>了解了隐式原型和显式原型后，我们就可以来看看原型模式具体是如何实现的了。</p><p>JavaScript 利用每个函数都有一个<strong>显式原型</strong> <code>prototype</code> 属性（这个属性是一个对象，包含应该由特定引用类型的实例共享的属性和方法），将需要共享的函数或属性放在这个原型对象上，而新创建的实例对象，就会通过它的<strong>隐式原型 <code>__proto__</code></strong> 顺着原型链往上找，就可以很好的解决构造函数模式污染全局作用域的问题。</p><p>让我们回忆一下前面 <code>new</code> 关键字的步骤时：</p><ol><li>首先创建一个空对象；</li><li>将空对象的原型赋值为构造函数的 <code>prototype</code> 对象；</li><li>让构造函数的 <code>this</code> 指向这个空对象，执行构造函数的代码；</li><li>判断构造函数返回值的类型，如果是基本类型，则返回创建的对象，如果是引用类型，则返回这个引用类型。</li></ol><p>其中第 2 步就是：<strong>构造函数的显示原型会被赋值给新对象的隐式原型</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;wang&quot;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
person1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// wang</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面定义原型时语法有点冗余，因此常用对象字面量直接重写函数原型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使 constructor 属性不可枚举</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&quot;constructor&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原型模式存在的问题" tabindex="-1"><a class="header-anchor" href="#原型模式存在的问题" aria-hidden="true">#</a> 原型模式存在的问题</h3><p>原型模式是实现所有原生引用类型的模式，所有原生引用类型的构造函数（包括Object、Array、String 等）都在原型上定义了实例方法，因此我们才能调用那些方法。</p><p>但原型模式也有它的问题：</p><ul><li>弱化了向构造函数传递初始化参数的能力，会导致所有实例默认都取得相同的属性值；</li><li>原型上的引用属性是在实例间共享的，因此修改一个会影响其他实例。</li></ul><p>来看一个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;neymar&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使 constructor 属性不可枚举</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&quot;constructor&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 1. 无法向构造函数传参</span>
<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;messi&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 原型上的引用属性在实例间共享</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>friends<span class="token punctuation">)</span> <span class="token comment">// [ &#39;neymar&#39;, &#39;messi&#39; ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span>friends<span class="token punctuation">)</span> <span class="token comment">// [ &#39;neymar&#39;, &#39;messi&#39; ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>friends <span class="token operator">===</span> person2<span class="token punctuation">.</span>friends<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时在 1 处无法向构造函数传参，而且在 2 处修改 <code>person1.friends</code> 也会影响到 <code>person2</code> 实例，因为他们指向的原型中的同一个地址。</p><p>为了解决这个问题，可以<strong>组合使用构造函数和原型模式</strong>。</p><h2 id="组合使用构造函数和原型模式" tabindex="-1"><a class="header-anchor" href="#组合使用构造函数和原型模式" aria-hidden="true">#</a> 组合使用构造函数和原型模式</h2><p>首先来回忆一下构造函数和原型模式各自的问题：</p><ul><li>构造函数模式：如果这个对象需要多个方法，就要在全局作用域上定义多个函数，会污染全局作用域；</li><li>原型模式：弱化了向构造函数传递初始化参数的能力，引用属性会存在共享问题。</li></ul><p>既然他们分开使用都会存在一些问题，因此可以组合使用这两种模式：<strong>通过构造函数初始化对象的属性，通过原型对象实现方法的复用</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> friends</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span>friends <span class="token operator">=</span> friends
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使 constructor 属性不可枚举</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&quot;constructor&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> Person<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;neymar&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;hou&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;messi&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;hou&#39;</span><span class="token punctuation">)</span>
person2<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>friends<span class="token punctuation">)</span> <span class="token comment">// [ &#39;neymar&#39;, &#39;hou&#39; ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span>friends<span class="token punctuation">)</span> <span class="token comment">// [ &#39;messi&#39;, &#39;wang&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时不仅可以传递初始化参数，而且修改各自的 <code>friends</code> 属性都互不影响。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>以上就是 JavaScript 中创建对象的四种主要方式，包括工厂模式、构造函数模式、原型模式及组合使用构造函数和原型模式。让我们来回忆一下前面三种各自的缺点：</p><ul><li>工厂模式：无法解决对象标识问题；</li><li>构造函数模式：对象需要多个方法，就要在全局作用域上定义多个函数，这会污染全局作用域；</li><li>原型模式：弱化了向构造函数传递初始化参数的能力，引用属性会存在共享问题。</li></ul>`,58),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","0002、创建对象.html.vue"]]);export{r as default};
