import{_ as e,r as t,o,c as p,a as c,d as n,b as l,w as i,e as s}from"./app-cQIp57Sg.js";const d={},u=s("<p>ECMAScript 有 7 种简单数据类型（也称为原始类型）：<code>Undefined</code>、<code>Null</code>、<code>Boolean</code>、<code>Number</code>、<code>String</code>、<code>Symbol</code> 和 <code>BigInt</code>。</p><p><code>Symbol</code>（符号）是 ES6 新增的，<code>BigInt</code> 是 ES10 新增。</p><p>还有一种复杂数据类型叫 <code>Object</code>（对象）。<code>Object</code> 是一种 <strong>无序</strong> 键值对的集合。</p><p>不同的数据存放在不同的空间中：</p><ul><li>栈空间：JavaScript 对于 <strong>基本数据类型</strong> 内存的分配会在执行时直接在栈空间进行分配；</li><li>堆空间：JavaScript 对于 <strong>复杂数据类型</strong> 内存的分配会在堆内存中开辟一块空间，并且将这块空间的指针（地址）返回给变量引用（存放在栈空间）。</li></ul>",5),r=s(`<p>因此，栈空间不会设置太大，主要用来存放基本数据类型（占用空间小），而像复杂数据类型，因为他们的占用空间一般较大，因此会被存放在堆空间中。</p><h2 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined"><span><code>Undefined</code></span></a></h2><p>该类型只有一个值，即 <code>undefined</code>，当时用 <code>var</code>、<code>let</code> 没有初始化时，就相当于给变量赋值为了 <code>undefined</code>。</p><h2 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span><code>Null</code></span></a></h2><p>该类型同样只有一个值 <code>null</code>，表示一个空对象指针，因此使用 <code>typeof</code> 操作符判断会返回 <code>object</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">null</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span> <span class="token comment">// &#39;object&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在定义将来要保存对象值的变量时，建议使用 <code>null</code> 来初始化，不要使用其他值（如 <code>undefined</code>）。</p><p>这样，只要检查这个变量的值是不是 <code>null</code> 就可以知道这个变量是否在后来被重新赋予了一个对象的引用，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>car <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// car 是一个对象的引用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean"><span><code>Boolean</code></span></a></h2><p>布尔类型有两个字面值：<code>true</code> 和 <code>false</code>。</p><p>虽然布尔值只有两个，但所有其他 ECMAScript 类型的值都有相应布尔值的等价形式。要将一个其他类型的值转换为布尔值，可以调用特定的 <code>Boolean()</code> 转型函数：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span>
<span class="token keyword">let</span> messageAsBoolean <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>转换规则如下：</p><table><thead><tr><th>数据类型</th><th>转换为 <code>true</code> 的值</th><th>转换为 <code>false</code> 的值</th></tr></thead><tbody><tr><td>Boolean</td><td><code>true</code></td><td><code>false</code></td></tr><tr><td>String</td><td>非空字符串</td><td><code>&quot;&quot;</code>（空字符串）</td></tr><tr><td>Number</td><td>非零数值（包括无穷值）</td><td><code>0</code>、<code>NaN</code></td></tr><tr><td>Object</td><td>任意对象</td><td><code>null</code></td></tr><tr><td>Undefined</td><td>-</td><td><code>undefined</code></td></tr></tbody></table><h2 id="number" tabindex="-1"><a class="header-anchor" href="#number"><span><code>Number</code></span></a></h2><p><code>Number</code> 类型使用 IEEE 754 格式表示整数和浮点值（在某些语言中也叫双精度值）。</p><p>可以用字面量表示十进制、八进制、十六进制，对于八进制字面量，第一个数字必须是零（0），十六进制数值前缀为 <code>0x</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> intNum <span class="token operator">=</span> <span class="token number">55</span> <span class="token comment">// 整数</span>

<span class="token keyword">let</span> octalNum1 <span class="token operator">=</span> <span class="token number">070</span> <span class="token comment">// 八进制的56</span>
<span class="token keyword">let</span> octalNum2 <span class="token operator">=</span> <span class="token number">079</span> <span class="token comment">// 无效的八进制值，当成 79 处理</span>
<span class="token keyword">let</span> octalNum3 <span class="token operator">=</span> <span class="token number">08</span> <span class="token comment">// 无效的八进制值，当成 8 处理</span>

<span class="token keyword">let</span> hexNum1 <span class="token operator">=</span> <span class="token number">0xa</span> <span class="token comment">// 十六进制10</span>
<span class="token keyword">let</span> hexNum2 <span class="token operator">=</span> <span class="token number">0x1f</span> <span class="token comment">// 十六进制31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用八进制和十六进制格式创建的数值在所有数学操作中都被视为十进制数值。</p></div><h3 id="浮点数" tabindex="-1"><a class="header-anchor" href="#浮点数"><span>浮点数</span></a></h3><p>要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不<br> 是必须有整数，但推荐加上。下面是几个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> floatNum1 <span class="token operator">=</span> <span class="token number">1.1</span>
<span class="token keyword">let</span> floatNum2 <span class="token operator">=</span> <span class="token number">0.1</span>
<span class="token keyword">let</span> floatNum3 <span class="token operator">=</span> <span class="token number">.1</span> <span class="token comment">// 有效，但不推荐</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为存储浮点值使用的内存空间是存储整数值的两倍，所以 ECMAScript 总是想方设法把值转换为整数。在小数点后面没有数字的情况下，数值就会变成整数。</p><p>类似地，如果数值本身就是整数，只是小数点后面跟着 0（如1.0），那它也会被转换为整数，如下例所示：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> floatNum1 <span class="token operator">=</span> <span class="token number">1.</span><span class="token punctuation">;</span> <span class="token comment">// 小数点后面没有数字，当成整数 1 处理</span>
<span class="token keyword">let</span> floatNum2 <span class="token operator">=</span> <span class="token number">10.0</span><span class="token punctuation">;</span> <span class="token comment">// 小数点后面是零，当成整数 10 处理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>科学计数法：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> floatNum <span class="token operator">=</span> <span class="token number">3.125e7</span><span class="token punctuation">;</span> <span class="token comment">// 等于31250000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>0.1 加 0.2 得到的不是 0.3，而是 0.300 000 000 000 000 04。</p><p>之所以存在这种舍入错误，是因为使用了 IEEE 754 数值，这种错误并非 ECMAScript 所独有，其他使用相同格式的语言也有这个问题。</p></div><h3 id="值的范围" tabindex="-1"><a class="header-anchor" href="#值的范围"><span>值的范围</span></a></h3><p>ECMAScript 可以表示的最小数值保存在 <code>Number.MIN_VALUE</code> 中；可以表示的最大数值保存在 <code>Number.MAX_VALUE</code> 中。</p><p>如果某个计算得到的数值结果超出了 JavaScript 可以表示的范围，那么这个数值会被自动转换为一个 <strong>无穷值</strong>。</p><p>任何无法表示的负数以 <code>-Infinity</code>（负无穷大）表示，任何无法表示的正数以 <code>Infinity</code>（正无穷大）表示。</p><p><code>isFinite()</code> 函数可以确定一个值是否有限大：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">+</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isFinite</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊值-nan" tabindex="-1"><a class="header-anchor" href="#特殊值-nan"><span>特殊值 <code>NaN</code></span></a></h3><p>表示不是数值（Not a Number），用于表示本来要返回数值的操作失败了。</p><p>在 ECMAScript 中，<code>0</code>、<code>+0</code> 或 <code>-0</code> 相除会返回 <code>NaN</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token operator">/</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果分子是非 <code>0</code> 值，分母是有符号 <code>0</code> 或无符号 <code>0</code>，则会返回 <code>Infinity</code> 或 <code>-Infinity</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Infinity</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -Infinity</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>isNaN()</code> 函数可以判断一个数值是否为 <code>NaN</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，10 是数值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，可以转换为数值10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true，不可以转换为数值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，可以转换为数值1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">内置函数和操作符的工作方式</p><p><code>isNaN()</code> 可以用于测试对象。此时，首先会调用对象的 <code>valueOf()</code> 方法，然后再确定返回的值是否可以转换为数值。如果不能，再调用 <code>toString()</code> 方法，并测试其返回值。</p></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span><code>String</code></span></a></h2><p><code>String</code>（字符串）数据类型表示零或多个 16 位 Unicode 字符序列。字符串可以使用双引号（&quot;）、单引号（&#39;）或反引号（\`）表示。</p><p>反引号可以使用字符串插值 <code>\${}</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> exponent <span class="token operator">=</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 以前，字符串插值是这样实现的：</span>
<span class="token keyword">let</span> interpolatedString <span class="token operator">=</span> value <span class="token operator">+</span> <span class="token string">&#39; to the &#39;</span> <span class="token operator">+</span> exponent <span class="token operator">+</span> <span class="token string">&#39; power is &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>value <span class="token operator">*</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 现在，可以用模板字面量这样实现：</span>
<span class="token keyword">let</span> interpolatedTemplateLiteral <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> value <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> exponent <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> power is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> value <span class="token operator">*</span> value <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>interpolatedString<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5 to the second power is 25</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>interpolatedTemplateLiteral<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5 to the second power is 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol-类型" tabindex="-1"><a class="header-anchor" href="#symbol-类型"><span><code>Symbol</code> 类型</span></a></h2><p><code>Symbol</code> 是 ES6 新增，表示 <strong>唯一、不可变</strong> 的符号，确保对象属性使用唯一标识符，不会发生属性冲突的危险。</p><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3><p>可以使用 <code>Symbol()</code> 函数初始化，调用这个函数时，可以传入一个字符串参数作为对符号的描述，但是传入相同的字符串描述返回的仍然是不同的符号。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbol1 <span class="token operator">===</span> symbol2<span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token keyword">let</span> symbol3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> symbol4 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbol3 <span class="token operator">===</span> symbol4<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Symbol()</code> 函数不是构造函数，因此不能进行 new 操作，这是为了避免创建符号包装对象，如果确实想使用符号包装对象，可以用 <code>Object()</code> 函数。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> symbol <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// TypeError: Symbol is not a constructor</span>
<span class="token keyword">let</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> wrappedSymbol <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>mySymbol<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> wrappedSymbol<span class="token punctuation">)</span> <span class="token comment">// object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局符号注册表" tabindex="-1"><a class="header-anchor" href="#全局符号注册表"><span>全局符号注册表</span></a></h3><p>如果需要创建两个相同的符号，以便在运行时的不同文件共用符号实例，可以使用 <code>Symbol.for()</code> 方法。</p><p>这个方法在第一次使用字符串调用时，会检查全局运行时注册表，发现不存在对应的符号，则会生成一个新符号实例并添加到注册表中；后续调用相同的字符串时同样会检查注册表，发现存在则返回该字符串对应的符号实例。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fooSymbol <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 全局注册新符号</span>
<span class="token keyword">let</span> otherFooSymbol <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 重用已有符号</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooSymbol <span class="token operator">===</span> otherFooSymbol<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传递给 <code>Symbol.for()</code> 方法的任意值都会被转化为字符串：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> emptySymbol <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emptySymbol<span class="token punctuation">)</span> <span class="token comment">// Symbol(undefined)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用 <code>Symbol.keyFor()</code> 来查询全局注册表，这个方法接受符号，返回对应的字符串键，如果查询的不是全局符号，则会返回 <code>undefined</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 创建全局符号</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// foo</span>

<span class="token comment">// 创建普通符号</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>

<span class="token comment">// 如果传给 Symbol.keyFor() 的不是符号，则该方法抛出 TypeError：</span>
Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// TypeError: 123 is not a symbol</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景——使用符号作为属性" tabindex="-1"><a class="header-anchor" href="#应用场景——使用符号作为属性"><span>应用场景——使用符号作为属性</span></a></h3><p>一般用来作为对象的唯一属性名，这就包括了对象字面量属性和 <code>Object.defineProperty()</code> / <code>Object.defineProperties()</code> 定义的属性，对象字面量只能在计算属性语法中使用符号作为属性。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  s3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;baz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  s4 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;qux&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 1. 对象字面量</span>
<span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>s1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;foo val&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这样也可以：o[s1] = &#39;foo val&#39;;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// {Symbol(foo): foo val}</span>

<span class="token comment">// 2. Object.defineProperty()</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;bar val&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// {Symbol(foo): foo val, Symbol(bar): bar val}</span>

<span class="token comment">// 3. Object.defineProperties()</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>s3<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;baz val&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>s4<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;qux val&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
<span class="token comment">// {Symbol(foo): foo val, Symbol(bar): bar val,</span>
<span class="token comment">// Symbol(baz): baz val, Symbol(qux): qux val}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 引入了一些内置符号，比如 <code>Symbol.iterator</code> 属性，用以定义在 <code>for-of</code> 循环中的迭代行为。</p><p><code>Symbol.hasInstance</code> 属性会由 <code>instanceof</code> 操作符使用，确定一个实例的原型链上是否有当前构造函数。这个属性定义在 Function 的原型上，因此默认在所有函数和类上都可以调用。</p><h2 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint"><span>BigInt</span></a></h2><p><code>BigInt</code> ES10 新增，是一种数字类型的数据，可以表示任意精度格式的 <strong>整数</strong>，使用 <code>BigInt</code> 可以安全地存储和操作大整数。</p><p><code>BigInt</code> 可以表示大于 <code>2^53 - 1</code> 的整数（可以用 <code>Number</code> 表示的最大数字），<code>BigInt</code> 类型的数据必须添加后缀 <code>n</code>，或者直接使用 <code>BigInt()</code> 函数，它和 <code>Symbol()</code> 一样，不是构造函数，因此也不能和 <code>new</code> 操作符一起使用。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> theBiggestInt <span class="token operator">=</span> <span class="token number">9007199254740991n</span>

<span class="token keyword">const</span> alsoHuge <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">9007199254740991</span><span class="token punctuation">)</span>
<span class="token comment">// ↪ 9007199254740991n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code>BigInt</code> 和 <code>Number</code> 是两种不同的类型，因此：</p><ul><li>不能用于 <code>Math</code> 对象中的方法；</li><li>不能和任何 <code>Number</code> 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 <code>BigInt</code> 变量在转换成 <code>Number</code> 变量时可能会丢失精度。</li></ul><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span><code>Object</code></span></a></h2><p>可以通过创建 <code>Object</code> 类型的实例来创建自己的对象，然后再给对象添加属性和方法：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每个 <code>Object</code> 实例都有如下属性和方法：</p><ul><li><code>constructor</code>：用于创建当前对象的函数。在前面的例子中，这个属性的值就是 <code>Object()</code> 函数。</li><li><code>hasOwnProperty(propertyName)</code>：用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串（如 <code>o.hasOwnProperty(&quot;name&quot;)</code>）或符号。</li><li><code>isPrototypeOf(object)</code>：用于判断当前对象是否为另一个对象的原型。</li><li><code>propertyIsEnumerable(propertyName)</code>：用于判断给定的属性是否可以使用 <code>for-in</code> 语句枚举。与 <code>hasOwnProperty()</code> 一样，属性名必须是字符串。</li><li><code>toLocaleString()</code>：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。</li><li><code>toString()</code>：返回对象的字符串表示。</li><li><code>valueOf()</code>：返回对象对应的字符串、数值或布尔值表示。通常与 <code>toString()</code> 的返回值相同。</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>严格来讲，ECMA-262 中对象的行为不一定适合 JavaScript 中的其他对象。</p><p>比如浏览器环境中的 BOM 和 DOM 对象，都是由宿主环境定义和提供的宿主对象。</p><p>而宿主对象不受 ECMA-262 约束，所以它们可能会也可能不会继承 <code>Object</code>。</p></div>`,80);function k(m,v){const a=t("RouteLink");return o(),p("div",null,[u,c("p",null,[n("这么做的原因是 "),l(a,{to:"/frontend/browser/02-V8.html"},{default:i(()=>[n("JS 引擎")]),_:1}),n(" 需要用栈来维护程序执行期间上下文的状态，如果栈空间分配的内存过大，那么会影响到上下文切换的效率，从而导致代码执行速度过慢。")]),r])}const g=e(d,[["render",k],["__file","002-types.html.vue"]]),y=JSON.parse('{"path":"/frontend/basic/javascript/002-types.html","title":"数据类型","lang":"zh-CN","frontmatter":{"title":"数据类型","date":"2024-04-14T00:00:00.000Z","icon":"type","category":["JavaScript"],"tag":["language basic"],"description":"ECMAScript 有 7 种简单数据类型（也称为原始类型）：Undefined、Null、Boolean、Number、String、Symbol 和 BigInt。 Symbol（符号）是 ES6 新增的，BigInt 是 ES10 新增。 还有一种复杂数据类型叫 Object（对象）。Object 是一种 无序 键值对的集合。 不同的数据存放在...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/basic/javascript/002-types.html"}],["meta",{"property":"og:title","content":"数据类型"}],["meta",{"property":"og:description","content":"ECMAScript 有 7 种简单数据类型（也称为原始类型）：Undefined、Null、Boolean、Number、String、Symbol 和 BigInt。 Symbol（符号）是 ES6 新增的，BigInt 是 ES10 新增。 还有一种复杂数据类型叫 Object（对象）。Object 是一种 无序 键值对的集合。 不同的数据存放在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T05:32:00.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"language basic"}],["meta",{"property":"article:published_time","content":"2024-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-15T05:32:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-15T05:32:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 Undefined","slug":"undefined","link":"#undefined","children":[]},{"level":2,"title":"2 Null","slug":"null","link":"#null","children":[]},{"level":2,"title":"3 Boolean","slug":"boolean","link":"#boolean","children":[]},{"level":2,"title":"4 Number","slug":"number","link":"#number","children":[{"level":3,"title":"4.1 浮点数","slug":"浮点数","link":"#浮点数","children":[]},{"level":3,"title":"4.2 值的范围","slug":"值的范围","link":"#值的范围","children":[]},{"level":3,"title":"4.3 特殊值 NaN","slug":"特殊值-nan","link":"#特殊值-nan","children":[]}]},{"level":2,"title":"5 String","slug":"string","link":"#string","children":[]},{"level":2,"title":"6 Symbol 类型","slug":"symbol-类型","link":"#symbol-类型","children":[{"level":3,"title":"6.1 基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"6.2 全局符号注册表","slug":"全局符号注册表","link":"#全局符号注册表","children":[]},{"level":3,"title":"6.3 应用场景——使用符号作为属性","slug":"应用场景——使用符号作为属性","link":"#应用场景——使用符号作为属性","children":[]}]},{"level":2,"title":"7 BigInt","slug":"bigint","link":"#bigint","children":[]},{"level":2,"title":"8 Object","slug":"object","link":"#object","children":[]}],"git":{"createdTime":1713094652000,"updatedTime":1713159120000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":3}]},"readingTime":{"minutes":9.63,"words":2888},"filePathRelative":"frontend/basic/javascript/002-types.md","localizedDate":"2024年4月14日","excerpt":"","autoDesc":true}');export{g as comp,y as data};