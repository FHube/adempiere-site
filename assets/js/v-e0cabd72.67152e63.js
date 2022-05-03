"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[45921],{94001:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});const d=(0,a(34086).uE)('<p><code>Behavior</code> 注册一个 behavior，接受一个 Object 类型的参数。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>定义段</th><th>类型</th><th>是否必填</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>properties</td><td>Object Map</td><td>否</td><td>同组件的属性</td><td></td></tr><tr><td>data</td><td>Object</td><td>否</td><td>同组件的数据</td><td></td></tr><tr><td>methods</td><td>Object</td><td>否</td><td>同自定义组件的方法</td><td></td></tr><tr><td>behaviors</td><td>String Array</td><td>否</td><td>引入其它的 behavior</td><td></td></tr><tr><td>created</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>attached</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>ready</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>moved</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr><tr><td>detached</td><td>Function</td><td>否</td><td>生命周期函数</td><td></td></tr></tbody></table><details class="custom-block details"><summary>代码示例</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// my-behavior.js\nmodule.exports = Behavior({\n  behaviors: [],\n  properties: {\n    myBehaviorProperty: {\n      type: String,\n    },\n  },\n  data: {\n    myBehaviorData: {},\n  },\n  attached() {},\n  methods: {\n    myBehaviorMethod() {},\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details>',4),n={},r=(0,a(82831).Z)(n,[["render",function(t,e){return d}]])},82831:(t,e)=>{e.Z=(t,e)=>{const a=t.__vccOpts||t;for(const[t,d]of e)a[t]=d;return a}},55057:(t,e,a)=>{a.r(e),a.d(e,{data:()=>d});const d={key:"v-e0cabd72",path:"/code/mini-app/guide/custom-component/behavior.html",title:"Behavior",lang:"zh-CN",frontmatter:{title:"Behavior",category:["小程序"],summary:"Behavior 注册一个 behavior，接受一个 Object 类型的参数。 参数 定义段 类型 是否必填 描述 最低版本 ---------- ------------ -------- ------------------- -------- properties Object Map 否 同组件的属性 data Object 否 同组件的数据 m",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/custom-component/behavior.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"Behavior"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-19T12:39:17.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-19T12:39:17.000Z"}]]},excerpt:"",headers:[{level:2,title:"参数",slug:"参数",children:[]}],git:{createdTime:1611059957e3,updatedTime:1611059957e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:.49,words:147},filePathRelative:"code/mini-app/guide/custom-component/behavior.md"}}}]);