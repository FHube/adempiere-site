"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22345],{22689:(e,n,a)=>{a.r(n),a.d(n,{default:()=>c});var s=a(34086);const r=(0,s.uE)("<p>JavaScript 一共提供了 8 个比较运算符。</p><ul><li><code>&gt;</code> 大于运算符</li><li><code>&lt;</code> 小于运算符</li><li><code>&lt;=</code> 小于或等于运算符</li><li><code>&gt;=</code> 大于或等于运算符</li><li><code>==</code> 相等运算符</li><li><code>===</code> 严格相等运算符</li><li><code>!=</code> 不相等运算符</li><li><code>!==</code> 严格不相等运算符</li></ul><p>这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。</p>",3),l=(0,s.uE)('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>比较运算符用于比较两个值的大小，然后返回一个布尔值，表示是否满足指定的条件。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>2 &gt; 1; // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码比较 <code>2</code> 是否大于 <code>1</code>，返回 <code>true</code>。</p><blockquote><p>注意，比较运算符可以比较各种类型的值，不仅仅是数值。</p></blockquote><h2 id="非相等运算符-字符串的比较" tabindex="-1"><a class="header-anchor" href="#非相等运算符-字符串的比较" aria-hidden="true">#</a> 非相等运算符: 字符串的比较</h2><p>字符串按照字典顺序进行比较。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;cat&quot; &gt; &quot;dog&quot;; // false\n&quot;cat&quot; &gt; &quot;catalog&quot;; // false\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;cat&quot; &gt; &quot;Cat&quot;; // true&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码中，小写的 <code>c</code> 的 Unicode 码点(<code>99</code>)大于大写的 <code>C</code> 的 Unicode 码点(<code>67</code>)，所以返回 <code>true</code>。</p><p>由于所有字符都有 Unicode 码点，因此汉字也可以比较。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;大&quot; &gt; &quot;小&quot;; // false\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码中，“大”的 Unicode 码点是 22823，“小”是 23567，因此返回 <code>false</code>。</p><h2 id="非相等运算符-非字符串的比较" tabindex="-1"><a class="header-anchor" href="#非相等运算符-非字符串的比较" aria-hidden="true">#</a> 非相等运算符: 非字符串的比较</h2><p>如果两个运算子之中，至少有一个不是字符串，需要分成以下两种情况。</p><h3 id="原始类型值" tabindex="-1"><a class="header-anchor" href="#原始类型值" aria-hidden="true">#</a> 原始类型值</h3><p>如果两个运算子都是原始类型的值，则是先转成数值再比较。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>5 &gt; &quot;4&quot;; // true\n// 等同于 5 &gt; Number(&#39;4&#39;)\n// 即 5 &gt; 4\n\ntrue &gt; false; // true\n// 等同于 Number(true) &gt; Number(false)\n// 即 1 &gt; 0\n\n2 &gt; true; // true\n// 等同于 2 &gt; Number(true)\n// 即 2 &gt; 1\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>上面代码中，字符串和布尔值都会先转成数值，再进行比较。</p><p>这里需要注意与 <code>NaN</code> 的比较。任何值(包括 <code>NaN</code> 本身)与 <code>NaN</code> 比较，返回的都是 <code>false</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>1 &gt; NaN; // false\n1 &lt;= NaN; // false\n&quot;1&quot; &gt; NaN; // false\n&quot;1&quot; &lt;= NaN; // false\nNaN &gt; NaN; // false\nNaN &lt;= NaN; // false\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>如果运算子是对象，会转为原始类型的值，再进行比较。</p><p>对象转换成原始类型的值，算法是先调用 <code>valueOf</code> 方法；如果返回的还是对象，再接着调用 <code>toString</code> 方法，详细解释参见《数据类型的转换》一章。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const x = [2];\n\nx &gt; &quot;11&quot;; // true\n// 等同于 [2].valueOf().toString() &gt; &#39;11&#39;\n// 即 &#39;2&#39; &gt; &#39;11&#39;\n\nx.valueOf = function () {\n  return &quot;1&quot;;\n};\nx &gt; &quot;11&quot;; // false\n// 等同于 [2].valueOf() &gt; &#39;11&#39;\n// 即 &#39;1&#39; &gt; &#39;11&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>两个对象之间的比较也是如此。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>[2] &gt; [1] // true\n// 等同于 [2].valueOf().toString() &gt; [1].valueOf().toString()\n// 即 &#39;2&#39; &gt; &#39;1&#39;\n\n[2] &gt; [11] // true\n// 等同于 [2].valueOf().toString() &gt; [11].valueOf().toString()\n// 即 &#39;2&#39; &gt; &#39;11&#39;\n\n{ x: 2 } &gt;= { x: 1 } // true\n// 等同于 { x: 2 }.valueOf().toString() &gt;= { x: 1 }.valueOf().toString()\n// 即 &#39;[object Object]&#39; &gt;= &#39;[object Object]&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="严格相等运算符" tabindex="-1"><a class="header-anchor" href="#严格相等运算符" aria-hidden="true">#</a> 严格相等运算符</h2><p>JavaScript 提供两种相等运算符: <code>==</code>和<code>===</code>。</p><p>简单说，它们的区别是相等运算符(<code>==</code>)比较两个值是否相等，严格相等运算符(<code>===</code>)比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符(<code>===</code>)直接返回 <code>false</code>，而相等运算符(<code>==</code>)会将它们转换成同一个类型，再用严格相等运算符进行比较。</p><p>本节介绍严格相等运算符的算法。</p><h3 id="不同类型的值" tabindex="-1"><a class="header-anchor" href="#不同类型的值" aria-hidden="true">#</a> 不同类型的值</h3><p>如果两个值的类型不同，直接返回 <code>false</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>1 === &quot;1&quot;; // false\ntrue === &quot;true&quot;; // false\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面代码比较数值的 <code>1</code> 与字符串的“1”、布尔值的 <code>true</code> 与字符串 <code>&quot;true&quot;</code>，因为类型不同，结果都是 <code>false</code>。</p><h3 id="同一类的原始类型值" tabindex="-1"><a class="header-anchor" href="#同一类的原始类型值" aria-hidden="true">#</a> 同一类的原始类型值</h3><p>同一类型的原始类型的值(数值、字符串、布尔值)比较时，值相同就返回 <code>true</code>，值不同就返回 <code>false</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>1 === 0x1; // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码比较十进制的 <code>1</code> 与十六进制的 <code>1</code>，因为类型和值都相同，返回 <code>true</code>。</p><p>需要注意的是，<code>NaN</code> 与任何值都不相等(包括自身)。另外，正 <code>0</code> 等于负 <code>0</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>(NaN ===\n  NaN + // false\n    0) ===\n  -0; // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="复合类型值" tabindex="-1"><a class="header-anchor" href="#复合类型值" aria-hidden="true">#</a> 复合类型值</h3><p>两个复合类型(对象、数组、函数)的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>{} === {} // false\n[] === [] // false\n(function () {} === function () {}) // false\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面代码分别比较两个空对象、两个空数组、两个空函数，结果都是不相等。原因是对于复合类型的值，严格相等运算比较的是，它们是否引用同一个内存地址，而运算符两边的空对象、空数组、空函数的值，都存放在不同的内存地址，结果当然是 <code>false</code>。</p><p>如果两个变量引用同一个对象，则它们相等。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const v1 = {};\nconst v2 = v1;\n\nv1 === v2; // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意，对于两个对象的比较，严格相等运算符比较的是地址，而大于或小于运算符比较的是值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const obj1 = {};\nconst obj2 = {};\n\nobj1 &gt; obj2; // false\nobj1 &lt; obj2; // false\nobj1 === obj2; // false\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面的三个比较，前两个比较的是值，最后一个比较的是地址，所以都返回 <code>false</code>。</p><h3 id="undefined-和-null" tabindex="-1"><a class="header-anchor" href="#undefined-和-null" aria-hidden="true">#</a> undefined 和 null</h3><p><code>undefined</code> 和 <code>null</code> 与自身严格相等。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>undefined === undefined; // true\nnull === null; // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>由于变量声明后默认值是 <code>undefined</code>，因此两个只声明未赋值的变量是相等的。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let v1;\nlet v2;\n\nv1 === v2; // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="严格不相等运算符" tabindex="-1"><a class="header-anchor" href="#严格不相等运算符" aria-hidden="true">#</a> 严格不相等运算符</h2><p>严格相等运算符有一个对应的“严格不相等运算符”(<code>!==</code>)，它的算法就是先求严格相等运算符的结果，然后返回相反值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>1 !== &quot;1&quot;; // true\n// 等同于\n!(1 === &quot;1&quot;);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面代码中，感叹号<code>!</code>是求出后面表达式的相反值。</p><h2 id="相等运算符" tabindex="-1"><a class="header-anchor" href="#相等运算符" aria-hidden="true">#</a> 相等运算符</h2><p>相等运算符用来比较相同类型的数据时，与严格相等运算符完全一样。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>1 == 1.0;\n// 等同于\n1 === 1.0;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>比较不同类型的数据时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较。下面分成四种情况，讨论不同类型的值互相比较的规则。</p><h3 id="原始类型值-1" tabindex="-1"><a class="header-anchor" href="#原始类型值-1" aria-hidden="true">#</a> 原始类型值</h3><p>原始类型的值会转换成数值再进行比较。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>1 == true; // true\n// 等同于 1 === Number(true)\n\n0 == false; // true\n// 等同于 0 === Number(false)\n\n2 == true; // false\n// 等同于 2 === Number(true)\n\n2 == false; // false\n// 等同于 2 === Number(false)\n\n&quot;true&quot; == true; // false\n// 等同于 Number(&#39;true&#39;) === Number(true)\n// 等同于 NaN === 1\n\n&quot;&quot; == 0; // true\n// 等同于 Number(&#39;&#39;) === 0\n// 等同于 0 === 0\n\n&quot;&quot; == false; // true\n// 等同于 Number(&#39;&#39;) === Number(false)\n// 等同于 0 === 0\n\n&quot;1&quot; == true; // true\n// 等同于 Number(&#39;1&#39;) === Number(true)\n// 等同于 1 === 1\n\n&quot;\\n  123  \\t&quot; == 123; // true\n// 因为字符串转为数字时，省略前置和后置的空格\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>上面代码将字符串和布尔值都转为数值，然后再进行比较。具体的字符串与布尔值的类型转换规则，参见《数据类型转换》一章。</p><h3 id="对象与原始类型值比较" tabindex="-1"><a class="header-anchor" href="#对象与原始类型值比较" aria-hidden="true">#</a> 对象与原始类型值比较</h3><p>对象(这里指广义的对象，包括数组和函数)与原始类型的值比较时，对象转换成原始类型的值，再进行比较。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// 对象与数值比较时，对象转为数值\n[1] == 1; // true\n// 等同于 Number([1]) == 1\n\n// 对象与字符串比较时，对象转为字符串\n[1] == &quot;1&quot;; // true\n// 等同于 String([1]) == &#39;1&#39;\n[1, 2] == &quot;1,2&quot;; // true\n// 等同于 String([1, 2]) == &#39;1,2&#39;\n\n// 对象与布尔值比较时，两边都转为数值\n[1] == true; // true\n// 等同于 Number([1]) == Number(true)\n[2] == true; // false\n// 等同于 Number([2]) == Number(true)\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>上面代码中，数组 <code>[1]</code> 与数值进行比较，会先转成数值，再进行比较；与字符串进行比较，会先转成字符串，再进行比较；与布尔值进行比较，对象和布尔值都会先转成数值，再进行比较。</p><h3 id="undefined-和-null-1" tabindex="-1"><a class="header-anchor" href="#undefined-和-null-1" aria-hidden="true">#</a> undefined 和 null</h3><p><code>undefined</code> 和 <code>null</code> 与其他类型的值比较时，结果都为 <code>false</code>，它们互相比较时结果为 <code>true</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>false == null; // false\nfalse == undefined; // false\n\n0 == null; // false\n0 == undefined; // false\n\nundefined == null; // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="相等运算符的缺点" tabindex="-1"><a class="header-anchor" href="#相等运算符的缺点" aria-hidden="true">#</a> 相等运算符的缺点</h3><p>相等运算符隐藏的类型转换，会带来一些违反直觉的结果。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>0 == &quot;&quot;; // true\n0 == &quot;0&quot;; // true\n\n2 == true; // false\n2 == false; // false\n\nfalse == &quot;false&quot;; // false\nfalse == &quot;0&quot;; // true\n\nfalse == undefined; // false\nfalse == null; // false\nnull == undefined; // true\n\n&quot; \\t\\r\\n &quot; == 0; // true\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>上面这些表达式都不同于直觉，很容易出错。因此建议不要使用相等运算符(<code>==</code>)，最好只使用严格相等运算符(<code>===</code>)。</p><h2 id="不相等运算符" tabindex="-1"><a class="header-anchor" href="#不相等运算符" aria-hidden="true">#</a> 不相等运算符</h2><p>相等运算符有一个对应的“不相等运算符”(<code>!=</code>)，它的算法就是先求相等运算符的结果，然后返回相反值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>1 != &quot;1&quot;; // false\n\n// 等同于\n!(1 == &quot;1&quot;);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',82),i={},c=(0,a(82831).Z)(i,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s.kq)(" more "),l],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},3579:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-c1f11850",path:"/code/language/js/operators/comparison.html",title:"比较运算符",lang:"zh-CN",frontmatter:{title:"比较运算符",icon:"compare",date:"2019-09-26T00:00:00.000Z",category:["JavaScript"],summary:"JavaScript 一共提供了 8 个比较运算符。\n\n&gt; 大于运算符\n&lt; 小于运算符\n&lt;= 小于或等于运算符\n&gt;= 大于或等于运算符\n== 相等运算符\n=== 严格相等运算符\n!= 不相等运算符\n!== 严格不相等运算符\n\n这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/operators/comparison.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"比较运算符"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-09-26T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>JavaScript 一共提供了 8 个比较运算符。</p>\n<ul>\n<li><code v-pre>&gt;</code> 大于运算符</li>\n<li><code v-pre>&lt;</code> 小于运算符</li>\n<li><code v-pre>&lt;=</code> 小于或等于运算符</li>\n<li><code v-pre>&gt;=</code> 大于或等于运算符</li>\n<li><code v-pre>==</code> 相等运算符</li>\n<li><code v-pre>===</code> 严格相等运算符</li>\n<li><code v-pre>!=</code> 不相等运算符</li>\n<li><code v-pre>!==</code> 严格不相等运算符</li>\n</ul>\n<p>这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。</p>\n",headers:[{level:2,title:"概述",slug:"概述",children:[]},{level:2,title:"非相等运算符: 字符串的比较",slug:"非相等运算符-字符串的比较",children:[]},{level:2,title:"非相等运算符: 非字符串的比较",slug:"非相等运算符-非字符串的比较",children:[{level:3,title:"原始类型值",slug:"原始类型值",children:[]},{level:3,title:"对象",slug:"对象",children:[]}]},{level:2,title:"严格相等运算符",slug:"严格相等运算符",children:[{level:3,title:"不同类型的值",slug:"不同类型的值",children:[]},{level:3,title:"同一类的原始类型值",slug:"同一类的原始类型值",children:[]},{level:3,title:"复合类型值",slug:"复合类型值",children:[]},{level:3,title:"undefined 和 null",slug:"undefined-和-null",children:[]}]},{level:2,title:"严格不相等运算符",slug:"严格不相等运算符",children:[]},{level:2,title:"相等运算符",slug:"相等运算符",children:[{level:3,title:"原始类型值",slug:"原始类型值-1",children:[]},{level:3,title:"对象与原始类型值比较",slug:"对象与原始类型值比较",children:[]},{level:3,title:"undefined 和 null",slug:"undefined-和-null-1",children:[]},{level:3,title:"相等运算符的缺点",slug:"相等运算符的缺点",children:[]}]},{level:2,title:"不相等运算符",slug:"不相等运算符",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:7}]},readingTime:{minutes:7.27,words:2182},filePathRelative:"code/language/js/operators/comparison.md"}}}]);