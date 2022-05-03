"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83562],{42978:(e,n,a)=>{a.r(n),a.d(n,{default:()=>d});const s=(0,a(34086).uE)('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><code>null</code> 与 <code>undefined</code> 都可以表示“没有”，含义非常相似。将一个变量赋值为 <code>undefined</code> 或 <code>null</code>，老实说，语法效果几乎没区别。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let a = undefined;\n// 或者\nlet a = null;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面代码中，变量 <code>a</code> 分别被赋值为 <code>undefined</code> 和 <code>null</code>，这两种写法的效果几乎等价。</p><p>在 <code>if</code> 语句中，它们都会被自动转为 <code>false</code>，相等运算符(<code>==</code>)甚至直接报告两者相等。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if (!undefined) {\n  console.log(&quot;undefined is false&quot;);\n}\n// undefined is false\n\nif (!null) {\n  console.log(&quot;null is false&quot;);\n}\n// null is false\n\nundefined == null;\n// true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>从上面代码可见，两者的行为是何等相似! 谷歌公司开发的 JavaScript 语言的替代品 Dart 语言，就明确规定只有 <code>null</code>，没有 <code>undefined</code>!</p><p>既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗? 这与历史原因有关。</p><p>1995 年 JavaScript 诞生时，最初像 Java 一样，只设置了 <code>null</code> 表示&quot;无&quot;。根据 C 语言的传统，<code>null</code> 可以自动转为 <code>0</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Number(null); // 0\n5 + null; // 5\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面代码中，<code>null</code> 转为数字时，自动变成 0。</p><p>但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，<code>null</code> 就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果 <code>null</code> 自动转为 0，很不容易发现错误。</p><p>因此，他又设计了一个 <code>undefined</code>。区别是这样的: <code>null</code> 是一个表示“空”的对象，转为数值时为 <code>0</code>；<code>undefined</code> 是一个表示&quot;此处无定义&quot;的原始值，转为数值时为 <code>NaN</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Number(undefined); // NaN\n5 + undefined; // NaN\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="用法和含义" tabindex="-1"><a class="header-anchor" href="#用法和含义" aria-hidden="true">#</a> 用法和含义</h2><p>对于 <code>null</code> 和 <code>undefined</code>，大致可以像下面这样理解。</p><p><code>null</code> 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入 <code>null</code>，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入 <code>null</code>，表示未发生错误。</p><p><code>undefined</code> 表示“未定义”，下面是返回 <code>undefined</code> 的典型场景。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// 变量声明了，但没有赋值\nlet i;\ni; // undefined\n\n// 调用函数时，应该提供的参数没有提供，该参数等于 undefined\nfunction f(x) {\n  return x;\n}\nf(); // undefined\n\n// 对象没有赋值的属性\nconst o = new Object();\no.p; // undefined\n\n// 函数没有返回值时，默认返回 undefined\nfunction f() {}\nf(); // undefined\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',19),l={},d=(0,a(82831).Z)(l,[["render",function(e,n){return s}]])},82831:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},56222:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-eb21e1be",path:"/code/language/js/types/null-undefined.html",title:"null 和 undefined",lang:"zh-CN",frontmatter:{title:"null 和 undefined",date:"2019-09-21T00:00:00.000Z",icon:"null",category:["JavaScript"],summary:"概述 null 与 undefined 都可以表示“没有”，含义非常相似。将一个变量赋值为 undefined 或 null，老实说，语法效果几乎没区别。 上面代码中，变量 a 分别被赋值为 undefined 和 null，这两种写法的效果几乎等价。 在 if 语句中，它们都会被自动转为 false，相等运算符(==)甚至直接报告两者相等。 从上面代码可见",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/types/null-undefined.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"null 和 undefined"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-09-21T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"",headers:[{level:2,title:"概述",slug:"概述",children:[]},{level:2,title:"用法和含义",slug:"用法和含义",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:5}]},readingTime:{minutes:2.14,words:643},filePathRelative:"code/language/js/types/null-undefined.md"}}}]);