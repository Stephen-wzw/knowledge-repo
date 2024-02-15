import{_ as p,r as o,o as c,c as l,a as n,d as a,b as t,e}from"./app-BqGNHhnW.js";const i={},u=e(`<p><code>JavaScript</code> 中数组是一种特殊的对象，用于存储多个值。数组的每个元素都有一个数字索引，用于访问数组中的元素。</p><p>常见初始化数组的方式：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组是一种线性表数据结构，它用一组连续的内存空间，来存储一组具有相同类型的数据。</p><p>常见的解题思路有：</p><ul><li>二分查找</li><li>双指针</li><li>滑动窗口</li><li>暴力解法</li></ul><h2 id="n-数之和" tabindex="-1"><a class="header-anchor" href="#n-数之和"><span>n 数之和</span></a></h2><p>一般思路为使用哈希表、双指针、排序等方法。</p><h3 id="两数之和" tabindex="-1"><a class="header-anchor" href="#两数之和"><span>两数之和</span></a></h3>`,9),r={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"原题链接",-1),d={href:"https://leetcode-cn.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>思路：使用哈希表存储遍历过的元素，每次遍历时，判断哈希表中是否存在 <code>target - nums[i]</code>，如果存在则返回结果。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> diff <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三数之和" tabindex="-1"><a class="header-anchor" href="#三数之和"><span>三数之和</span></a></h3>`,3),v={class:"hint-container tip"},b=n("p",{class:"hint-container-title"},"原题链接",-1),h={href:"https://leetcode-cn.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>思路：使用双指针，先对数组进行排序，然后遍历数组，使用双指针分别指向当前元素的下一个元素和数组的最后一个元素，计算三数之和，然后移动指针。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本题不能无脑使用 <code>for</code> 循环套两数之和哈希表，因为会有重复的结果。</p></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length

  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>

  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 因为排序过，若大于 0 ，则后面不可能有三个数和等于 0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token comment">// 如果和前一个数相等，因为不能出现重复的答案，因此跳过这个元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token comment">// 若左指针与下一位相等，为了去除重复，则将 left 加 1</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          left<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 若右指针与上一位相等，为了去除重复，则将 right 减 1</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          right<span class="token operator">--</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 若左右没有与下一位相等，则继续寻找</span>
        left<span class="token operator">++</span>
        right<span class="token operator">--</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 若和大于 0，说明 nums[r] 太大，right 左移</span>
        left<span class="token operator">++</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 若和小于 0，说明 nums[L] 太小，left 右移</span>
        right<span class="token operator">--</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针"><span>双指针</span></a></h2><h3 id="接雨水" tabindex="-1"><a class="header-anchor" href="#接雨水"><span>接雨水</span></a></h3>`,5),y={class:"hint-container tip"},f=n("p",{class:"hint-container-title"},"原题链接",-1),w={href:"https://leetcode.cn/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},_={href:"https://leetcode-cn.com/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},x=e(`<p>思路：使用双指针，分别指向数组的头尾，计算当前面积，然后移动高度较小的指针。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">maxArea</span><span class="token punctuation">(</span>height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    right <span class="token operator">=</span> height<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> weight <span class="token operator">=</span> right <span class="token operator">-</span> left

    <span class="token keyword">if</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>height<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> weight<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      left<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>height<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> weight<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      right<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function T(N,S){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,n("div",r,[k,n("p",null,[n("a",d,[a("1. 两数之和"),t(s)])])]),m,n("div",v,[b,n("p",null,[n("a",h,[a("15. 三数之和"),t(s)])])]),g,n("div",y,[f,n("p",null,[n("a",w,[a("11. 盛最多水的容器"),t(s)])]),n("p",null,[n("a",_,[a("42. 接雨水"),t(s)])])]),x])}const Z=p(i,[["render",T],["__file","01-array.html.vue"]]),z=JSON.parse('{"path":"/computer-science/algorithm/01-array.html","title":"数组","lang":"zh-CN","frontmatter":{"title":"数组","date":"2024-02-15T00:00:00.000Z","icon":"array","category":["algorithm"],"tag":["数组","二分查找","双指针"],"description":"JavaScript 中数组是一种特殊的对象，用于存储多个值。数组的每个元素都有一个数字索引，用于访问数组中的元素。 常见初始化数组的方式： 数组是一种线性表数据结构，它用一组连续的内存空间，来存储一组具有相同类型的数据。 常见的解题思路有： 二分查找 双指针 滑动窗口 暴力解法 n 数之和 一般思路为使用哈希表、双指针、排序等方法。 两数之和 原题链...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/computer-science/algorithm/01-array.html"}],["meta",{"property":"og:title","content":"数组"}],["meta",{"property":"og:description","content":"JavaScript 中数组是一种特殊的对象，用于存储多个值。数组的每个元素都有一个数字索引，用于访问数组中的元素。 常见初始化数组的方式： 数组是一种线性表数据结构，它用一组连续的内存空间，来存储一组具有相同类型的数据。 常见的解题思路有： 二分查找 双指针 滑动窗口 暴力解法 n 数之和 一般思路为使用哈希表、双指针、排序等方法。 两数之和 原题链..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-15T10:39:28.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"数组"}],["meta",{"property":"article:tag","content":"二分查找"}],["meta",{"property":"article:tag","content":"双指针"}],["meta",{"property":"article:published_time","content":"2024-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-15T10:39:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数组\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-15T10:39:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 n 数之和","slug":"n-数之和","link":"#n-数之和","children":[{"level":3,"title":"1.1 两数之和","slug":"两数之和","link":"#两数之和","children":[]},{"level":3,"title":"1.2 三数之和","slug":"三数之和","link":"#三数之和","children":[]}]},{"level":2,"title":"2 双指针","slug":"双指针","link":"#双指针","children":[{"level":3,"title":"2.1 接雨水","slug":"接雨水","link":"#接雨水","children":[]}]}],"git":{"createdTime":1707993568000,"updatedTime":1707993568000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":2.45,"words":736},"filePathRelative":"computer-science/algorithm/01-array.md","localizedDate":"2024年2月15日","excerpt":"","autoDesc":true}');export{Z as comp,z as data};
