"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4269],{41003:(e,a,n)=>{n.r(a),n.d(a,{default:()=>o});var l=n(34086);const s=(0,l.uE)('<blockquote><p>基础库 2.9.3 开始支持</p></blockquote><div class="custom-container tip"><p class="custom-container-title">提示</p><p>此部分在初步学习小程序的时候直接略过即可。</p></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>在 WXML 中，普通的属性的绑定是单向的。例如:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;input value=&quot;{{value}}&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果使用 <code>this.setData({ value: &#39;leaf&#39; })</code> 来更新 value ，<code>this.data.value</code> 和输入框的中显示的值都会被更新为 <code>leaf</code> ；但如果用户修改了输入框里的值，却不会同时改变 <code>this.data.value</code> 。</p><p>如果需要在用户输入的同时改变 <code>this.data.value</code> ，需要借助简易双向绑定机制。此时，可以在对应项目之前加入 <code>model:</code> 前缀:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;input model:value=&quot;{{value}}&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样，如果输入框的值被改变了， <code>this.data.value</code> 也会同时改变。同时， WXML 中所有绑定了 value 的位置也会被一同更新， 数据监听器 也会被正常触发。</p>',9),t={href:"https://developers.weixin.qq.com/s/8jXvobmV7vcj",target:"_blank",rel:"noopener noreferrer"},i=(0,l.Uk)("在开发者工具中预览效果"),r=(0,l.uE)('<h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h2><p>用于双向绑定的表达式有如下限制:</p><ol><li><p>只能是一个单一字段的绑定，如</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;input model:value=&quot;值为 {{value}}&quot; /&gt;\n&lt;input model:value=&quot;{{ a + b }}&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>都是非法的；</p></li><li><p>目前，尚不能 <code>data</code> 路径，如</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;input model:value=&quot;{{ a.b }}&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样的表达式目前暂不支持。</p></li></ol><h2 id="在自定义组件中使用" tabindex="-1"><a class="header-anchor" href="#在自定义组件中使用" aria-hidden="true">#</a> 在自定义组件中使用</h2><h3 id="传递双向绑定" tabindex="-1"><a class="header-anchor" href="#传递双向绑定" aria-hidden="true">#</a> 传递双向绑定</h3><p>双向绑定同样可以使用在自定义组件上。</p><p>如下的自定义组件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// custom-component.js\nComponent({\n  properties: {\n    myValue: String,\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;!-- custom-component.wxml --&gt;\n&lt;input model:value=&quot;{{myValue}}&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这个自定义组件将自身的 <code>myValue</code> 属性双向绑定到了组件内输入框的 <code>value</code> 属性上。这样，如果页面这样使用这个组件:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;custom-component model:my-value=&quot;{{pageValue}}&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当输入框的值变更时，自定义组件的 <code>myValue</code> 属性会同时变更，这样，页面的 <code>this.data.pageValue</code> 也会同时变更，页面 WXML 中所有绑定了 <code>pageValue</code> 的位置也会被一同更新。</p><h3 id="触发双向绑定更新" tabindex="-1"><a class="header-anchor" href="#触发双向绑定更新" aria-hidden="true">#</a> 触发双向绑定更新</h3><p>自定义组件还可以自己触发双向绑定更新，做法就是: 使用 <code>setData</code> 设置自身的属性。例如:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// custom-component.js\nComponent({\n  properties: {\n    myValue: String,\n  },\n  methods: {\n    update() {\n      // 更新 myValue\n      this.setData({\n        myValue: &quot;leaf&quot;,\n      });\n    },\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>如果页面这样使用这个组件:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;custom-component model:my-value=&quot;{{pageValue}}&quot; /&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当组件使用 <code>setData</code> 更新 <code>myValue</code> 时，页面的 <code>this.data.pageValue</code> 也会同时变更，页面 WXML 中所有绑定了 <code>pageValue</code> 的位置也会被一同更新。</p>',18),d={},o=(0,n(82831).Z)(d,[["render",function(e,a){const n=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l._)("a",t,[i,(0,l.Wm)(n)])])]),r],64)}]])},82831:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,l]of a)n[e]=l;return n}},47010:(e,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l={key:"v-bbd42168",path:"/code/mini-app/guide/view/model.html",title:"简易双向绑定",lang:"zh-CN",frontmatter:{title:"简易双向绑定",icon:"async",category:["小程序"],summary:"\" 基础库 2.9.3 开始支持\" 此部分在初步学习小程序的时候直接略过即可。 语法 在 WXML 中，普通的属性的绑定是单向的。例如: 如果使用 this.setData({ value: 'leaf' }) 来更新 value ，this.data.value 和输入框的中显示的值都会被更新为 leaf ；但如果用户修改了输入框里的值，却不会同时改变 t",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/view/model.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"简易双向绑定"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-27T06:58:54.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-27T06:58:54.000Z"}]]},excerpt:"",headers:[{level:2,title:"语法",slug:"语法",children:[]},{level:2,title:"限制",slug:"限制",children:[]},{level:2,title:"在自定义组件中使用",slug:"在自定义组件中使用",children:[{level:3,title:"传递双向绑定",slug:"传递双向绑定",children:[]},{level:3,title:"触发双向绑定更新",slug:"触发双向绑定更新",children:[]}]}],git:{createdTime:1610980523e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:5}]},readingTime:{minutes:1.92,words:575},filePathRelative:"code/mini-app/guide/view/model.md"}}}]);