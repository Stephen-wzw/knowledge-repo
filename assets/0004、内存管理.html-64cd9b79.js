import{_ as o,V as t,W as r,X as a,Y as e,$ as s,a0 as c,C as p}from"./framework-a71e09ed.js";const i="/blog/assets/V8-stack-heap-eeb8cbb1.png",l="/blog/assets/mark-clear-591b7a3f.png",d="/blog/assets/generations-17614e02.svg",u="/blog/assets/Scavenge-1-eef37ba5.svg",g="/blog/assets/Scavenge-2-e09e9ff8.svg",h="/blog/assets/three-phases-44d4ac14.svg",m="/blog/assets/marking-789b4fbb.png",v="/blog/assets/sweeping-7c096aee.png",f="/blog/assets/compaction-f456ce45.png",b="/blog/assets/parallel-dcc8579c.svg",k="/blog/assets/incremental-72143d72.svg",_="/blog/assets/concurrent-c97c7f65.svg",x={},S=c(`<p>像 C、C++ 等编程语言都需要手动管理内存，在创建变量时需要申请（<code>malloc()</code>），不需要用了之后在释放内存空间（<code>free()</code>）。而 JavaScript、Java、Python 等都是自动管理内存，在创建变量时自动分配内存，而在不使用后自动释放，释放的过程称为<strong>垃圾回收</strong>。</p><p>虽然不同语言管理内存的方式不同，但是内存声明周期是基本一致的：</p><ol><li>分配你所需要的内存</li><li>使用分配到的内存（读、写）</li><li>不需要时将其释放</li></ol><p>第二步的使用内存就很常见了，我们写的代码就是这一步，因此这里介绍第一步和第三步的基本内容。</p><h2 id="分配内存空间" tabindex="-1"><a class="header-anchor" href="#分配内存空间" aria-hidden="true">#</a> 分配内存空间</h2><p>现在来看看 V8 引擎是如何给不同变量分配内存的。</p><p>V8 主要有三种内存空间：</p><ul><li>代码空间：主要存储可执行代码；</li><li>栈空间：JavaScript 对于<strong>基本数据类型</strong>内存的分配会在执行时直接在栈空间进行分配；</li><li>堆空间：JavaScript 对于<strong>复杂数据类型</strong>内存的分配会在堆内存中开辟一块空间，并且将这块空间的指针（地址）返回给变量引用（存放在栈空间）。</li></ul><p>下面看看例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;heap&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当代码执行到第二行时，栈底是 <code>a</code>，栈顶是 <code>b</code>，此时 <code>b</code> 的值是一个复杂数据类型，那么会在堆空间中为这个数据分配一个空间，并把 <code>b</code> 的变量值赋值为这个空间的地址。</p><figure><img src="`+i+`" alt="堆和栈" tabindex="0" loading="lazy"><figcaption>堆和栈</figcaption></figure><p>那么，为什么要将复杂数据类型放在堆空间，而不是一起放在栈空间呢？</p><p>因为 V8 引擎需要用栈来维护程序执行期间上下文的状态，如果栈空间分配的内存过大，那么会影响到上下文切换的效率，从而导致代码执行速度过慢。</p><p>因此，栈空间不会设置太大，主要用来存放基本数据类型（占用空间小），而像复杂数据类型，因为他们的占用空间一般较大，因此会被存放在堆空间中。</p><h2 id="常见的垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#常见的垃圾回收算法" aria-hidden="true">#</a> 常见的垃圾回收算法</h2><p>了解了如何分配不同变量的内存后，第二步的读写其实已经包含在代码里了，最关键的一步就是如何将不再需要的<strong>内存回收</strong>。</p><p>在整个垃圾回收的过程中，最困难的地方在于如何找到“哪些被分配的内存确实已经不再需要了”，而这个步骤没有任何算法可以准确的判断，只是一个近似的过程。</p><p>下面先介绍几种常见的垃圾回收算法，再介绍 V8 的垃圾回收机制。</p><h3 id="引用计数算法" tabindex="-1"><a class="header-anchor" href="#引用计数算法" aria-hidden="true">#</a> 引用计数算法</h3><p>这是最初级的垃圾收集算法。此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。当一个对象有一个引用指向它时，它的引用数就会 <code>+1</code>；当没有引用时，即引用数为 <code>0</code>，这个对象就可以被销毁了。</p><p>但是一个很大的弊端是会产生循环引用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  o<span class="token punctuation">.</span>a <span class="token operator">=</span> o2<span class="token punctuation">;</span> <span class="token comment">// o 引用 o2</span>
  o2<span class="token punctuation">.</span>a <span class="token operator">=</span> o<span class="token punctuation">;</span> <span class="token comment">// o2 引用 o</span>

  <span class="token keyword">return</span> <span class="token string">&quot;azerty&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行 <code>f()</code> 时，创建了两个对象并相互引用。函数执行结束后，会离开函数作用域，因此它们已经没有用了，按照常理来说应该被销毁。但是因为它们至少都有一次引用，所以不会被回收，造成内存泄露。</p><h3 id="标记清除算法" tabindex="-1"><a class="header-anchor" href="#标记清除算法" aria-hidden="true">#</a> 标记清除算法</h3><p>这个算法把“对象是否不再需要”简化定义为“对象是否可以获得”，简称“可达性”。</p><p>这个算法假定设置一个叫做根（root）的对象（在Javascript里，根是全局对象）。垃圾回收器将定期从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象。</p><img src="`+l+'" width="50%" height="50%"><p>在上图中，<code>g</code> 和 <code>h</code> 对象互相引用，如果采用<strong>引用计数算法</strong>，那么这两个对象将不会被垃圾回收。但是使用标记清除算法，因为根对象没有对它们引用，因此会被垃圾回收。这样，循环引用的问题就不存在了。</p><h2 id="v8-垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#v8-垃圾回收机制" aria-hidden="true">#</a> V8 垃圾回收机制</h2><p>在过去几年，V8 垃圾回收发生了很多变化。以前的垃圾回收器是一个连续的过程，在进行垃圾回收的过程中会暂停其他活动（全停顿，stop-the-world），而现在 V8 的垃圾回收器转变成了具有<strong>增量回退</strong>的<strong>并行</strong>、<strong>并发</strong>垃圾回收器。</p><p>任何垃圾回收器都会执行下面几个基本任务：</p><ol><li><p><strong>标记</strong>活动对象和非活动对象</p></li><li><p><strong>回收或者重排</strong>非活动对象占据的内存</p></li><li><p><strong>合并或者整理</strong>内存（可选）</p></li></ol><p>这些任务可以按顺序执行，也可以任意交错执行。一种直接的方法是暂停 JavaScript 执行，并在主线程上按顺序执行这些任务。这可能会导致主线程出现卡顿和延迟问题，并降低程序吞吐量。</p><h3 id="v8-内存限制" tabindex="-1"><a class="header-anchor" href="#v8-内存限制" aria-hidden="true">#</a> V8 内存限制</h3><p>在介绍 V8 垃圾回收机制之前，我们先来探讨一下为什么需要垃圾回收。</p><ul><li>当创建一个对象时，就会分配大量内存</li><li>在 V8 中限制 64 位的机器大约 1.4GB，32 位机器大约为 0.7GB</li><li>操作系统会自动进行栈内存的分配和释放，而堆内存，则由 V8 引擎进行释放</li></ul><h3 id="分代堆布局" tabindex="-1"><a class="header-anchor" href="#分代堆布局" aria-hidden="true">#</a> 分代堆布局</h3><p>V8 中的堆被分成不同的区域，称为代：分为新生代（进一步分为 <code>nursery</code> 和 <code>intermediate</code>），和一个老生代。对象首先被分配到 <code>nursery</code>。如果它们在下一个 GC 中幸存下来，这时候我们把它们移动到<code>intermediate</code> 子代，如果再经过下一次垃圾回收这个对象仍然存活，这时候我们就会把这个对象移动到老生代（这个策略称为<strong>对象晋升策略</strong>）。</p><figure><img src="'+d+'" alt="分代布局" tabindex="0" loading="lazy"><figcaption>分代布局</figcaption></figure><blockquote><p>在垃圾回收中有一个重要的术语：“代际假说”，指大多数对象在新生代就会被回收。从垃圾回收的角度来看，大部分对象一经分配之后就几乎马上变成不可达状态。</p></blockquote><p>根据 V8 堆中分为不同的区域，可以容易地想到 V8 有两个不同的垃圾回收器：清理新生区的副垃圾回收器和清理老生区的主垃圾回收器。</p><p>下面就一一介绍 V8 中的两个垃圾回收器。</p><h3 id="副垃圾回收器——清道夫-scavenge" tabindex="-1"><a class="header-anchor" href="#副垃圾回收器——清道夫-scavenge" aria-hidden="true">#</a> 副垃圾回收器——清道夫（Scavenge）</h3><p>副垃圾回收器（Scavenger）从新生代中回收垃圾。</p><p>在清理时，初始的空闲区域称之为 <code>To-Space</code>，复制对象过来的区域称之为<code>From-Space</code>；在最坏的情况下，如果每一个对象在清理的时候存活了下来，那我们就要从 <code>From-Space</code> 复制每一个对象到 <code>To-Space</code> 中。</p><p>清除步骤（Evacuation）会将所有的活动对象移动到连续的一块内存中，并且标记它们（图中的小圆圈，代表已经经历过一次 GC）；然后会将两块内存空间互换，即把 <code>To-Space</code> 变成 <code>From-Space</code>，<code>From-Space</code> 变成 <code>To-Space</code>。</p><figure><img src="'+u+'" alt="副垃圾回收器-1" tabindex="0" loading="lazy"><figcaption>副垃圾回收器-1</figcaption></figure><p>如果仅仅是凭借这一策略，我们就会很快的耗尽新生代的内存空间；为了新生代的内存空间不被耗尽，在下一次垃圾回收的时候，我们会把活动对象移动（evacuate）到老生代，而不是 <code>To-Space</code>。</p><p>在下图中，两块内存空间已经互换，而且 <code>From-Space</code> 又有一个新的对象，假定这个对象在第一次 GC 时存活了下来，那么它将被复制到 <code>To-Space</code> 中。而 <code>From-Space</code> 中已经经历过一次 GC 的对象（通过这个小圆圈的标记得知），假如它们又存活下来，则会被复制到老生区（<strong>对象晋升策略</strong>）。</p><p>Scavenge 的最后一步是把移动后的对象的指针地址更新，每一个被复制对象都会留下一个转发地址（forwarding-address），用于更新指针以指向新的地址。</p><figure><img src="'+g+'" alt="副垃圾回收器-2" tabindex="0" loading="lazy"><figcaption>副垃圾回收器-2</figcaption></figure><p>在副垃圾回收器回收过程中，实际上执行了三个步骤：标记、清除和指针更新。</p><h3 id="主垃圾回收器-——-全量标记和整理-full-mark-compact" tabindex="-1"><a class="header-anchor" href="#主垃圾回收器-——-全量标记和整理-full-mark-compact" aria-hidden="true">#</a> 主垃圾回收器 —— 全量标记和整理（Full Mark-Compact）</h3><p>主垃圾回收器从整个堆（heap）中收集垃圾。</p><figure><img src="'+h+'" alt="three-phases" tabindex="0" loading="lazy"><figcaption>three-phases</figcaption></figure><p>标记阶段是利用对象的可达性确定对象是否活跃。从初始的根对象开始，垃圾回收器会跟踪每一个指向其他对象的指针，将其标记为可访问的，同时跟踪对象中每一个属性的指针。整个过程递归进行，直到标记到运行时每一个可访问的对象。</p><img src="'+m+'" width="40%"><p>清除阶段将非活动对象进行清除。</p><img src="'+v+'" width="40%"><p>一般来说，频繁回收对象后，内存中就会存在大量不连续空间，我们把这些不连续的内存空间称为内存碎片。当内存中出现了大量的内存碎片之后，如果需要分配较大连续内存的时候，就有可能出现内存不足的情况。所以最后一步需要整理这些内存碎片，但这步其实是可选的，因为有的垃圾回收器不会产生内存碎片。</p><img src="'+f+'" width="40%"><h2 id="orinoco" tabindex="-1"><a class="header-anchor" href="#orinoco" aria-hidden="true">#</a> Orinoco</h2><p>Orinoco 是 V8 垃圾回收器项目的代号，它利用最新的和最好的垃圾回收技术来降低主线程挂起的时间， 比如：并行（parallel）垃圾回收，增量（incremental）垃圾回收和并发（concurrent）垃圾回收。</p><p>2011 年，V8 从 stop-the-world 标记切换到增量标记。</p><p>2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。在 Chrome 64 和Node.js v10 中已启用，它将标记时间缩短了60%<sub>70%。还有并行技术，它将新生代的垃圾回收时间缩短了20%</sub>50%。</p><h3 id="并行垃圾回收-parallel" tabindex="-1"><a class="header-anchor" href="#并行垃圾回收-parallel" aria-hidden="true">#</a> 并行垃圾回收（Parallel）</h3><p>并行是主线程和协助线程同时执行同样的工作，但是这仍然是一种 <code>stop-the-world</code> 的垃圾回收方式，但是垃圾回收全停顿时间等于总时间除以参与的线程数量（加上一些同步开销）。</p><figure><img src="'+b+'" alt="parallel" tabindex="0" loading="lazy"><figcaption>parallel</figcaption></figure><h3 id="增量垃圾回收-incremental" tabindex="-1"><a class="header-anchor" href="#增量垃圾回收-incremental" aria-hidden="true">#</a> 增量垃圾回收（Incremental）</h3><p>增量式垃圾回收是主线程间歇性的去做少量的垃圾回收的方式。同时让垃圾回收和 JavaScript 应用逻辑交替进行，这意味着堆的状态可能已经发生了变化，有可能会导致之前的增量回收工作完全无效。</p><p>从图中可以看出并没有减少主线程暂停的总时间（事实上，通常会略微增加）。通过允许 JavaScript 间歇执行，同时也间歇性地去做垃圾回收工作，应用程序仍然可以在用户输入或者执行动画的时候得到及时的响应。</p><figure><img src="'+k+'" alt="incremental" tabindex="0" loading="lazy"><figcaption>incremental</figcaption></figure><h3 id="并发垃圾回收-concurrent" tabindex="-1"><a class="header-anchor" href="#并发垃圾回收-concurrent" aria-hidden="true">#</a> 并发垃圾回收（Concurrent）</h3><p>并发是主线程持续执行 JavaScript，而辅助线程完全在后台执行垃圾回收。这种方式是这三种技术中最难的一种：JavaScript 堆里面的内容随时都有可能发生变化，从而使之前做的工作完全无效，主线程和辅助线程极有可能在同一时间去更改同一个对象。这种方式的优势也非常明显，主线程不会被挂起，JavaScript 可以自由地执行。</p><figure><img src="'+_+'" alt="concurrent" tabindex="0" loading="lazy"><figcaption>concurrent</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>首先介绍了内存管理的一般流程，分为三大步，可以自己回想一下。</p><p>然后是 V8 如何分配内存：基本数据类型存放在栈空间，复杂数据类型存放在堆空间，以及为什么要这样做。</p><p>接着又介绍了常见的垃圾回收算法，主要包括引用计数法和标记清除法。</p><p>最后介绍了 V8 的垃圾回收机制以及做出的优化。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',82),V={href:"https://v8.dev/blog/trash-talk",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management",target:"_blank",rel:"noopener noreferrer"},w={href:"https://time.geekbang.org/column/article/129596",target:"_blank",rel:"noopener noreferrer"},C={href:"https://juejin.cn/post/6844904016325902344",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.nodejs.red/#/nodejs/memory?id=v8%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6",target:"_blank",rel:"noopener noreferrer"};function J(j,z){const n=p("ExternalLinkIcon");return t(),r("div",null,[S,a("p",null,[a("a",V,[e("Trash talk: the Orinoco garbage collector · V8"),s(n)])]),a("p",null,[a("a",y,[e("内存管理 - JavaScript | MDN (mozilla.org)"),s(n)])]),a("p",null,[a("a",w,[e("12 | 栈空间和堆空间：数据是如何存储的？"),s(n)])]),a("p",null,[a("a",C,[e("一文搞懂V8引擎的垃圾回收"),s(n)])]),a("p",null,[a("a",E,[e("Memory 内存管理和 V8 垃圾回收机制 (nodejs.red)"),s(n)])])])}const T=o(x,[["render",J],["__file","0004、内存管理.html.vue"]]);export{T as default};
