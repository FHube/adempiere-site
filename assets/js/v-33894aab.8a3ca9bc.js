"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35201],{64699:(e,n,s)=>{s.r(n),s.d(n,{default:()=>l});var a=s(34086);const r=(0,a._)("p",null,"本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。",-1),t=(0,a.uE)('<h2 id="sreen-ts" tabindex="-1"><a class="header-anchor" href="#sreen-ts" aria-hidden="true">#</a> Sreen.ts</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { Module } from &quot;vuex&quot;;\nimport { BaseState } from &quot;../state&quot;;\n\nexport interface SWState {\n  status: string; // service-worker 状态\n  error?: Error;\n}\n\nconst swState: SWState = { status: &quot;&quot; };\n\nconst swModule: Module&lt;SWState, BaseState&gt; = {\n  state: swState,\n  mutations: {\n    /**\n     * @description: 设置 Service Worker 状态\n     *\n     * @param state swState\n     * @param status ServiceWorker状态\n     */\n    swState(state: SWState, status: string): void {\n      state.status = status;\n    },\n\n    /**\n     * @description: 设置 Service Worker 错误\n     *\n     * @param state imagestate\n     * @param error 遇到的错误\n     */\n    swError(state: SWState, error: Error): void {\n      state.status = &quot;error&quot;;\n      state.error = error;\n    },\n  },\n};\n\nexport default swModule;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>本文件包含了完整的一份 state、数个 mutation 和一个 action。</p>',3),p={},l=(0,s(82831).Z)(p,[["render",function(e,n){return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a.kq)(" more "),t],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},35750:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-33894aab",path:"/code/vue/vuex/demo.html",title:"模块案例",lang:"zh-CN",frontmatter:{title:"模块案例",icon:"discover",category:["Vue"],tag:["Vuex","Demo"],summary:"本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/vue/vuex/demo.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"模块案例"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Vuex"}],["meta",{property:"article:tag",content:"Demo"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。</p>\n",headers:[{level:2,title:"Sreen.ts",slug:"sreen-ts",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:.43,words:129},filePathRelative:"code/vue/vuex/demo.md"}}}]);