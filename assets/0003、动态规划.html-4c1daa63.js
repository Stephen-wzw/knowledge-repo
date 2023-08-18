const e=JSON.parse('{"key":"v-1a91d468","path":"/computer-science/algorithm/0003%E3%80%81%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html","title":"动态规划","lang":"zh-CN","frontmatter":{"title":"动态规划","date":"2022-08-01T00:00:00.000Z","category":["LeetCode"],"tag":["动态规划"],"description":"动态规划的一般形式是求最值，核心问题就是穷举。将所有可行的子问题答案穷举出来（二叉树的分解问题形式），然后在其中寻找最值。 动态规划需要判断问题是否具备最优子问题，还需要写出正确的状态转移方程，另外，由于动态规划存在重叠子问题，需要优化穷举过程（备忘录或 dp 数组），否则会超时。 基础 动态规划问题其实都可以使用暴力递归求解，如何消除重叠子问题就可以...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/computer-science/algorithm/0003%E3%80%81%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html"}],["meta",{"property":"og:site_name","content":"My Konwledge Base"}],["meta",{"property":"og:title","content":"动态规划"}],["meta",{"property":"og:description","content":"动态规划的一般形式是求最值，核心问题就是穷举。将所有可行的子问题答案穷举出来（二叉树的分解问题形式），然后在其中寻找最值。 动态规划需要判断问题是否具备最优子问题，还需要写出正确的状态转移方程，另外，由于动态规划存在重叠子问题，需要优化穷举过程（备忘录或 dp 数组），否则会超时。 基础 动态规划问题其实都可以使用暴力递归求解，如何消除重叠子问题就可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-25T10:47:40.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"动态规划"}],["meta",{"property":"article:published_time","content":"2022-08-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-25T10:47:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"动态规划\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-25T10:47:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[{"level":3,"title":"斐波那契数","slug":"斐波那契数","link":"#斐波那契数","children":[]},{"level":3,"title":"零钱兑换","slug":"零钱兑换","link":"#零钱兑换","children":[]},{"level":3,"title":"爬楼梯","slug":"爬楼梯","link":"#爬楼梯","children":[]},{"level":3,"title":"使用最小花费爬楼梯","slug":"使用最小花费爬楼梯","link":"#使用最小花费爬楼梯","children":[]},{"level":3,"title":"不同路径","slug":"不同路径","link":"#不同路径","children":[]},{"level":3,"title":"不同路径Ⅱ","slug":"不同路径ii","link":"#不同路径ii","children":[]},{"level":3,"title":"整数拆分","slug":"整数拆分","link":"#整数拆分","children":[]}]},{"level":2,"title":"子序列问题","slug":"子序列问题","link":"#子序列问题","children":[{"level":3,"title":"最长递增子序列","slug":"最长递增子序列","link":"#最长递增子序列","children":[]},{"level":3,"title":"最大子数组和","slug":"最大子数组和","link":"#最大子数组和","children":[]},{"level":3,"title":"最长公共子序列","slug":"最长公共子序列","link":"#最长公共子序列","children":[]},{"level":3,"title":"两个字符串的删除操作","slug":"两个字符串的删除操作","link":"#两个字符串的删除操作","children":[]},{"level":3,"title":"两个字符串的最小ASCII删除和","slug":"两个字符串的最小ascii删除和","link":"#两个字符串的最小ascii删除和","children":[]},{"level":3,"title":"编辑距离","slug":"编辑距离","link":"#编辑距离","children":[]},{"level":3,"title":"最长回文子序列","slug":"最长回文子序列","link":"#最长回文子序列","children":[]},{"level":3,"title":"让字符串成为回文串的最少插入次数","slug":"让字符串成为回文串的最少插入次数","link":"#让字符串成为回文串的最少插入次数","children":[]}]},{"level":2,"title":"01 背包","slug":"_01-背包","link":"#_01-背包","children":[{"level":3,"title":"分割等和子集","slug":"分割等和子集","link":"#分割等和子集","children":[]},{"level":3,"title":"最后一块石头的重量 II","slug":"最后一块石头的重量-ii","link":"#最后一块石头的重量-ii","children":[]}]}],"git":{"createdTime":1677733227000,"updatedTime":1679741260000,"contributors":[{"name":"Stephen-wzw","email":"wzw15292257101@163.com","commits":1},{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":11.84,"words":3553},"filePathRelative":"computer-science/algorithm/0003、动态规划.md","localizedDate":"2022年8月1日","excerpt":"","autoDesc":true}');export{e as data};
