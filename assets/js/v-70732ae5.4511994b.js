"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[96605],{22486:(e,n,a)=>{a.r(n),a.d(n,{default:()=>u});var s=a(34086);const l=(0,s.Uk)("此部分是高效复用小程序代码的方式。"),r=(0,s._)("p",null,"模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。",-1),t=(0,s._)("p",null,[(0,s.Uk)("模块只有通过 "),(0,s._)("code",null,"module.exports"),(0,s.Uk)(" 或者 "),(0,s._)("code",null,"exports"),(0,s.Uk)(" 才能对外暴露接口。")],-1),o=(0,s.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li><code>exports</code> 是 <code>module.exports</code> 的一个引用，因此在模块里边随意更改 <code>exports</code> 的指向会造成未知的错误。所以更推荐开发者采用 <code>module.exports</code> 来暴露模块接口，除非您已经清晰知道这两者的关系。</li><li>小程序目前不支持直接引入 <code>node_modules</code> , 开发者需要使用到 <code>node_modules</code> 时候建议拷贝出相关的代码到小程序的目录中，或者使用小程序支持的 npm 功能。</li></ul></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// common.js\nconst sayHello = (name) =&gt; {\n  console.log(`Hello ${name} !`);\n};\n\nconst sayGoodbye = (name) =&gt; {\n  console.log(`Goodbye ${name} !`);\n};\n\nmodule.exports.sayHello = sayHello;\nexports.sayGoodbye = sayGoodbye;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>​ 在需要使用这些模块的文件中，使用 <code>require</code> 将公共代码引入</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const common = require(&quot;common.js&quot;);\n\nPage({\n  helloMINA() {\n    common.sayHello(&quot;MINA&quot;);\n  },\n  goodbyeMINA() {\n    common.sayGoodbye(&quot;MINA&quot;);\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',4),p={id:"文件作用域",tabindex:"-1"},c=(0,s._)("a",{class:"header-anchor",href:"#文件作用域","aria-hidden":"true"},"#",-1),i=(0,s.Uk)(" 文件作用域 "),d=(0,s.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>在 JavaScript 文件中声明的变量和函数只在该文件中有效；不同的文件中可以声明相同名字的变量和函数，不会互相影响。</p></div><p>通过全局函数 <code>getApp</code> 可以获取全局的应用实例，如果需要全局的数据可以在 <code>App()</code> 中设置，如:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// app.js\nApp({\n  globalData: 1,\n});\n// a.js\n// The localValue can only be used in file a.js.\nlet localValue = &quot;a&quot;;\n// Get the app instance.\nconst app = getApp();\n// Get the global data and change it.\napp.globalData++;\n// b.js\n// You can redefine localValue in file b.js, without interference with the localValue in a.js.\nlet localValue = &quot;b&quot;;\n// If a.js it run before b.js, now the globalData shoule be 2.\nconsole.log(getApp().globalData);\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="object-module" tabindex="-1"><a class="header-anchor" href="#object-module" aria-hidden="true">#</a> Object module</h3><p>当前模块对象</p><p>属性</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>exports</td><td>Object</td><td>模块向外暴露的对象，使用 require 引用该模块时可以获取</td></tr></tbody></table><h3 id="object-exports" tabindex="-1"><a class="header-anchor" href="#object-exports" aria-hidden="true">#</a> Object exports</h3><p>module.exports 的引用</p><h3 id="any-require-string-path" tabindex="-1"><a class="header-anchor" href="#any-require-string-path" aria-hidden="true">#</a> any require(string path)</h3><p>引入模块。返回模块通过 <code>module.exports</code> 或 <code>exports</code> 暴露的接口。</p><p>参数</p><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>path</td><td>string</td><td>需要引入模块文件相对于当前文件的相对路径，或 npm 模块名，或 npm 模块路径。不支持绝对路径</td></tr></tbody></table><p>示例代码</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// common.js\nconst sayHello = (name) =&gt; {\n  console.log(`Hello ${name} !`);\n};\n\nconst sayGoodbye = (name) =&gt; {\n  console.log(`Goodbye ${name} !`);\n};\n\nmodule.exports.sayHello = sayHello;\nexports.sayGoodbye = sayGoodbye;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const common = require(&quot;common.js&quot;);\n\nPage({\n  helloMINA() {\n    common.sayHello(&quot;MINA&quot;);\n  },\n  goodbyeMINA() {\n    common.sayGoodbye(&quot;MINA&quot;);\n  },\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',17),b={},u=(0,a(82831).Z)(b,[["render",function(e,n){const a=(0,s.up)("Badge");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("p",null,[l,(0,s.Wm)(a,{text:"重要",type:"error"})]),r,t,(0,s.kq)(" more "),o,(0,s._)("h2",p,[c,i,(0,s.Wm)(a,{text:"务必理解",type:"error"})]),d],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},61822:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-70732ae5",path:"/code/mini-app/guide/service/module.html",title:"模块化",lang:"zh-CN",frontmatter:{title:"模块化",icon:"module",category:["小程序"],summary:"此部分是高效复用小程序代码的方式。\n模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。\n模块只有通过 module.exports 或者 exports 才能对外暴露接口。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/service/module.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"模块化"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-03-21T09:22:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-03-21T09:22:34.000Z"}]]},excerpt:'<p>此部分是高效复用小程序代码的方式。<Badge text="重要" type="error" /></p>\n<p>模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。</p>\n<p>模块只有通过 <code v-pre>module.exports</code> 或者 <code v-pre>exports</code> 才能对外暴露接口。</p>\n',headers:[{level:2,title:"文件作用域",slug:"文件作用域",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"Object module",slug:"object-module",children:[]},{level:3,title:"Object exports",slug:"object-exports",children:[]},{level:3,title:"any require(string path)",slug:"any-require-string-path",children:[]}]}],git:{createdTime:1604856934e3,updatedTime:1616318554e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:1.88,words:565},filePathRelative:"code/mini-app/guide/service/module.md"}}}]);