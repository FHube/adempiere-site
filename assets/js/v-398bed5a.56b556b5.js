"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15012],{25257:(n,e,s)=>{s.r(e),s.d(e,{default:()=>t});var a=s(34086);const r=(0,a.uE)('<h2 id="使用-typescript-进行-vue-开发" tabindex="-1"><a class="header-anchor" href="#使用-typescript-进行-vue-开发" aria-hidden="true">#</a> 使用 TypeScript 进行 Vue 开发</h2><p>在使用 <code>Typescript</code> 进行 Vue2.X 版本开发时，需要引入 <code>vue-property-decorator</code> 这个包进行开发。</p><p>本质上就是写法上与 <code>js</code> 有所不同，而且需要额外注明变量的类型。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>有 7 个装饰器和 1 个功能(Mixin):</p><ul><li>@Emit</li><li>@Inject</li><li>@Model</li><li>@Prop</li><li>@Provide</li><li>@Watch</li><li>@Component(由 <code>vue-class-component</code> 提供)</li><li>Mixins(mixins 由 <code>vue-class-component</code> 提供的辅助函数)</li></ul><h2 id="prop-decorator" tabindex="-1"><a class="header-anchor" href="#prop-decorator" aria-hidden="true">#</a> @Prop() decorator</h2><p><code>prop</code> 属性的装饰器</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { Vue, Component, Prop } from &quot;vue-property-decorator&quot;;\n\n@Component\nexport default class YourComponent extends Vue {\n  @Prop(Number) private readonly propA!: number;\n\n  @Prop({ default: &quot;default value&quot; }) private readonly propB!: string;\n\n  @Prop([String, Boolean]) private readonly propC!: string | boolean;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>相当于</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {\n  props: {\n    propA: {\n      type: Number,\n    },\n    propB: {\n      default: &quot;default value&quot;,\n    },\n    propC: {\n      type: [String, Boolean],\n    },\n  },\n};\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>需要在装饰器的参数中填入 <code>js</code> 写法中对应 prop 的值。</p><p>在后方使用 <code>private readonly</code> 标识符表示这是一个私有且只读的属性，它与 props 的性质相同。</p><p>在 prop 的名称后面使用 <code>!: &lt;类型&gt;</code> 再次声明该属性的定义类型。</p><p>注意:</p><p>每个 prop 的默认值需要定义为与上面显示的示例代码相同。</p><p>不支持以下的形式:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  @Prop() prop = &#39;default value&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="watch-decorator" tabindex="-1"><a class="header-anchor" href="#watch-decorator" aria-hidden="true">#</a> @Watch() decorator</h2><p><code>watch</code> 属性的装饰器。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { Vue, Component, Watch } from &quot;vue-property-decorator&quot;;\n\n@Component\nexport default class YourComponent extends Vue {\n  @Watch(&quot;child&quot;)\n  onChildChanged(val: string, oldVal: string) {}\n\n  @Watch(&quot;person&quot;, { immediate: true, deep: true })\n  onPersonChanged1(val: Person, oldVal: Person) {}\n\n  @Watch(&quot;person&quot;)\n  onPersonChanged2(val: Person, oldVal: Person) {}\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>相当于</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {\n  watch: {\n    &#39;child&#39;: [\n      {\n        handler: &#39;onChildChanged&#39;,\n        immediate: false,\n        deep: false\n      }\n    ],\n    &#39;person&#39;: [\n      {\n        handler: &#39;onPersonChanged1&#39;,\n        immediate: true,\n        deep: true\n      },\n      {\n        handler: &#39;onPersonChanged2&#39;,\n        immediate: false,\n        deep: false\n      }\n    ]\n  },\n  methods: {\n    onChildChanged(val, oldVal) { },\n    onPersonChanged1(val, oldVal) { }\n    onPersonChanged2(val, oldVal) { }\n  }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>主要使用以上两个装饰器。</p><hr><p>以下装饰器很少使用:</p><h2 id="model-decorator" tabindex="-1"><a class="header-anchor" href="#model-decorator" aria-hidden="true">#</a> @Model() decorator</h2><p><code>model</code> 属性的装饰器</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { Vue, Component, Model } from &quot;vue-property-decorator&quot;;\n\n@Component\nexport default class YourComponent extends Vue {\n  @Model(&quot;change&quot;, { type: Boolean }) readonly checked!: boolean;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>相当于</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>export default {\n  model: {\n    prop: &quot;checked&quot;,\n    event: &quot;change&quot;,\n  },\n  props: {\n    checked: {\n      type: Boolean,\n    },\n  },\n};\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="emit-decorator" tabindex="-1"><a class="header-anchor" href="#emit-decorator" aria-hidden="true">#</a> @Emit() decorator</h2><p>由 <code>@Emit $emit</code> 返回值修饰的函数后跟其原始参数。如果返回值是 promise，则在发出之前将其解析。</p><p>如果未通过 event 参数提供事件的名称，则使用函数名称。在这种情况下， camelCase 名称将转换为 kebab-case。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { Vue, Component, Emit } from &quot;vue-property-decorator&quot;;\n\n@Component\nexport default class YourComponent extends Vue {\n  count = 0;\n\n  @Emit()\n  addToCount(n: number) {\n    this.count += n;\n  }\n\n  @Emit(&quot;reset&quot;)\n  resetCount() {\n    this.count = 0;\n  }\n\n  @Emit()\n  returnValue() {\n    return 10;\n  }\n\n  @Emit()\n  promise() {\n    return new Promise((resolve) =&gt; {\n      setTimeout(() =&gt; {\n        resolve(20);\n      }, 0);\n    });\n  }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>相当于</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {\n  data() {\n    return {\n      count: 0,\n    };\n  },\n  methods: {\n    addToCount(n) {\n      this.count += n;\n      this.$emit(&quot;add-to-count&quot;, n);\n    },\n    resetCount() {\n      this.count = 0;\n      this.$emit(&quot;reset&quot;);\n    },\n    returnValue() {\n      this.$emit(&quot;return-value&quot;, 10);\n    },\n    promise() {\n      const promise = new Promise((resolve) =&gt; {\n        setTimeout(() =&gt; {\n          resolve(20);\n        }, 0);\n      });\n\n      promise.then((value) =&gt; {\n        this.$emit(&quot;promise&quot;, value);\n      });\n    },\n  },\n};\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="provide-decorator" tabindex="-1"><a class="header-anchor" href="#provide-decorator" aria-hidden="true">#</a> @Provide() decorator</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { Component, Inject, Provide, Vue } from &quot;vue-property-decorator&quot;;\n\nconst symbol = Symbol(&quot;baz&quot;);\n\n@Component\nexport class MyComponent extends Vue {\n  @Inject() readonly foo!: string;\n  @Inject(&quot;bar&quot;) readonly bar!: string;\n  @Inject({ from: &quot;optional&quot;, default: &quot;default&quot; }) readonly optional!: string;\n  @Inject(symbol) readonly baz!: string;\n\n  @Provide() foo = &quot;foo&quot;;\n  @Provide(&quot;bar&quot;) baz = &quot;bar&quot;;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>相当于</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const symbol = Symbol(&quot;baz&quot;);\n\nexport const MyComponent = Vue.extend({\n  inject: {\n    foo: &quot;foo&quot;,\n    bar: &quot;bar&quot;,\n    optional: { from: &quot;optional&quot;, default: &quot;default&quot; },\n    [symbol]: symbol,\n  },\n  data() {\n    return {\n      foo: &quot;foo&quot;,\n      baz: &quot;bar&quot;,\n    };\n  },\n  provide() {\n    return {\n      foo: this.foo,\n      bar: this.baz,\n    };\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="ts-组件案例" tabindex="-1"><a class="header-anchor" href="#ts-组件案例" aria-hidden="true">#</a> TS 组件案例</h2>',42),l=(0,a.Uk)("点击此处"),p={},t=(0,s(82831).Z)(p,[["render",function(n,e){const s=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(s,{to:"/code/vue/ts-demo.html"},{default:(0,a.w5)((()=>[l])),_:1})])])],64)}]])},82831:(n,e)=>{e.Z=(n,e)=>{const s=n.__vccOpts||n;for(const[n,a]of e)s[n]=a;return s}},46134:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-398bed5a",path:"/code/vue/ts-decorator.html",title:"在 Vue 中使用 Typescript",lang:"zh-CN",frontmatter:{title:"在 Vue 中使用 Typescript",icon:"typescript",category:["基础"],tag:["TypeScript"],summary:"使用 TypeScript 进行 Vue 开发 在使用 Typescript 进行 Vue2.X 版本开发时，需要引入 vue-property-decorator 这个包进行开发。 本质上就是写法上与 js 有所不同，而且需要额外注明变量的类型。 用法 有 7 个装饰器和 1 个功能(Mixin): @Emit; @Inject; @Model; @Pro",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/vue/ts-decorator.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"在 Vue 中使用 Typescript"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"TypeScript"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"",headers:[{level:2,title:"使用 TypeScript 进行 Vue 开发",slug:"使用-typescript-进行-vue-开发",children:[]},{level:2,title:"用法",slug:"用法",children:[]},{level:2,title:"@Prop() decorator",slug:"prop-decorator",children:[]},{level:2,title:"@Watch() decorator",slug:"watch-decorator",children:[]},{level:2,title:"@Model() decorator",slug:"model-decorator",children:[]},{level:2,title:"@Emit() decorator",slug:"emit-decorator",children:[]},{level:2,title:"@Provide() decorator",slug:"provide-decorator",children:[]},{level:2,title:"TS 组件案例",slug:"ts-组件案例",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:2.47,words:740},filePathRelative:"code/vue/ts-decorator.md"}}}]);