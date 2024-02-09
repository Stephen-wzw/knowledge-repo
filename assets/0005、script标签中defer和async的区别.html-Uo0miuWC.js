import{_ as c,r as o,o as a,c as n,a as t,d as e,b as s,w as i,e as d}from"./app-_LprvjBg.js";const p={},l=t("p",null,[e("HTML 中在页面插入 JavaScript 的主要方式就是使用 "),t("code",null,"<script>"),e(" 元素，可以直接在页面中嵌入 JavaScript 代码，但是一般来说，通常会通过 "),t("code",null,"src"),e(" 属性来引入外部脚本。")],-1),m=t("code",null,"src",-1),h=d("<p>而使用 <code>defer</code> 和 <code>async</code> 都可以<strong>异步加载</strong>外部的 JavaScript 脚本，主要区别如下：</p><ul><li><strong>执行顺序</strong>：多个带 <code>async</code> 属性的标签，不能保证加载的顺序；多个带 <code>defer</code> 属性的标签，按照加载顺序执行；</li><li><strong>脚本何时执行</strong>：<code>async</code> 属性表示脚本加载完成后立即执行，不会等到文档解析完成。<code>defer</code> 属性表示脚本加载完成后还需等到所有元素解析完成，即 <code>DOMContentLoaded</code> 事件触发前完成。</li></ul>",2);function _(f,y){const r=o("RouteLink");return a(),n("div",null,[l,t("p",null,[e("在"),s(r,{to:"/frontend/basic/html/0002%E3%80%81src%E5%92%8Chref%E7%9A%84%E5%8C%BA%E5%88%AB.html"},{default:i(()=>[e("src和href的区别")]),_:1}),e("中提到了 "),m,e(" 会暂停当前页面的加载，直到获取、解析并执行完这个 JS 文件。这样就会阻塞后续文档的加载。")]),h])}const g=c(p,[["render",_],["__file","0005、script标签中defer和async的区别.html.vue"]]),E=JSON.parse('{"path":"/frontend/basic/html/0005%E3%80%81script%E6%A0%87%E7%AD%BE%E4%B8%ADdefer%E5%92%8Casync%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"script 标签中 defer 和 async 的区别","lang":"zh-CN","frontmatter":{"title":"script 标签中 defer 和 async 的区别","date":"2022-07-25T00:00:00.000Z","category":["HTML"],"tag":["HTML"],"description":"HTML 中在页面插入 JavaScript 的主要方式就是使用 <script> 元素，可以直接在页面中嵌入 JavaScript 代码，但是一般来说，通常会通过 src 属性来引入外部脚本。 在中提到了 src 会暂停当前页面的加载，直到获取、解析并执行完这个 JS 文件。这样就会阻塞后续文档的加载。 而使用 defer 和 async 都可以异步...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/frontend/basic/html/0005%E3%80%81script%E6%A0%87%E7%AD%BE%E4%B8%ADdefer%E5%92%8Casync%E7%9A%84%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:title","content":"script 标签中 defer 和 async 的区别"}],["meta",{"property":"og:description","content":"HTML 中在页面插入 JavaScript 的主要方式就是使用 <script> 元素，可以直接在页面中嵌入 JavaScript 代码，但是一般来说，通常会通过 src 属性来引入外部脚本。 在中提到了 src 会暂停当前页面的加载，直到获取、解析并执行完这个 JS 文件。这样就会阻塞后续文档的加载。 而使用 defer 和 async 都可以异步..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-25T10:47:40.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"HTML"}],["meta",{"property":"article:published_time","content":"2022-07-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-25T10:47:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"script 标签中 defer 和 async 的区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-25T10:47:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[],"git":{"createdTime":1677733227000,"updatedTime":1679741260000,"contributors":[{"name":"Stephen-wzw","email":"wzw15292257101@163.com","commits":1},{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":1}]},"readingTime":{"minutes":0.87,"words":260},"filePathRelative":"frontend/basic/html/0005、script标签中defer和async的区别.md","localizedDate":"2022年7月25日","excerpt":"","autoDesc":true}');export{g as comp,E as data};
