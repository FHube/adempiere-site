"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[21300],{52581:(e,n,a)=>{a.r(n),a.d(n,{default:()=>v});var t=a(34086);const s=(0,t._)("p",null,"小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。",-1),o=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,"为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。")],-1),i=(0,t.uE)('<h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2><p>小程序根目录下的 <code>app.json</code> 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置 tabBar 等。</p><p>以下是一个包含了部分常用配置选项的 <code>app.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{\n  &quot;pages&quot;: [&quot;pages/index/index&quot;, &quot;pages/logs/index&quot;],\n  &quot;window&quot;: {\n    &quot;navigationBarTitleText&quot;: &quot;Demo&quot;\n  },\n  &quot;tabBar&quot;: {\n    &quot;list&quot;: [\n      {\n        &quot;pagePath&quot;: &quot;pages/index/index&quot;,\n        &quot;text&quot;: &quot;首页&quot;\n      },\n      {\n        &quot;pagePath&quot;: &quot;pages/logs/logs&quot;,\n        &quot;text&quot;: &quot;日志&quot;\n      }\n    ]\n  },\n  &quot;networkTimeout&quot;: {\n    &quot;request&quot;: 10000,\n    &quot;downloadFile&quot;: 10000\n  },\n  &quot;debug&quot;: true,\n  &quot;navigateToMiniProgramAppIdList&quot;: [&quot;wxe5f52902cf4de896&quot;]\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>',4),r=(0,t.Uk)("更多详情请见 "),l=(0,t.Uk)("全局配置文档"),p=(0,t.uE)('<h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2><p>每一个小程序页面也可以使用同名 <code>.json</code> 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 <code>app.json</code> 的 <code>window</code> 中相同的配置项。</p><p>例如:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{\n  &quot;navigationBarBackgroundColor&quot;: &quot;#ffffff&quot;,\n  &quot;navigationBarTextStyle&quot;: &quot;black&quot;,\n  &quot;navigationBarTitleText&quot;: &quot;微信接口功能演示&quot;,\n  &quot;backgroundColor&quot;: &quot;#eeeeee&quot;,\n  &quot;backgroundTextStyle&quot;: &quot;light&quot;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',4),u=(0,t.Uk)("更多详情请见 "),c=(0,t.Uk)("页面配置文档"),d={id:"索引配置",tabindex:"-1"},m=(0,t._)("a",{class:"header-anchor",href:"#索引配置","aria-hidden":"true"},"#",-1),b=(0,t.Uk)(" 索引配置 "),g=(0,t.uE)('<p>微信现已开放小程序内搜索，开发者可以通过 sitemap.json 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code>user-agent</code>: <code>mpcrawler</code> 及场景值 <code>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p><h3 id="具体配置说明" tabindex="-1"><a class="header-anchor" href="#具体配置说明" aria-hidden="true">#</a> 具体配置说明</h3><ol><li>页面收录设置: 可对整个小程序的索引进行关闭，小程序管理后台-设置-基本设置-页面收录设置</li><li>sitemap 配置: 可对特定页面的索引进行关闭</li></ol><h3 id="sitemap-配置" tabindex="-1"><a class="header-anchor" href="#sitemap-配置" aria-hidden="true">#</a> sitemap 配置</h3><p>小程序根目录下的 sitemap.json 文件用来配置小程序及其页面是否允许被微信索引。</p>',5),q=(0,t.Uk)("完整配置项说明请参考 "),h=(0,t.Uk)("sitemap 配置"),f={},v=(0,a(82831).Z)(f,[["render",function(e,n){const a=(0,t.up)("RouterLink"),f=(0,t.up)("Badge");return(0,t.wg)(),(0,t.iD)(t.HY,null,[s,o,(0,t.kq)(" more "),i,(0,t._)("p",null,[r,(0,t.Wm)(a,{to:"/code/mini-app/guide/config/app-config.html"},{default:(0,t.w5)((()=>[l])),_:1})]),p,(0,t._)("p",null,[u,(0,t.Wm)(a,{to:"/code/mini-app/guide/config/page-config.html"},{default:(0,t.w5)((()=>[c])),_:1})]),(0,t._)("h2",d,[m,b,(0,t.Wm)(f,{text:"初学无需阅读",type:"grey"})]),g,(0,t._)("p",null,[q,(0,t.Wm)(a,{to:"/code/mini-app/guide/config/sitemap-config.html"},{default:(0,t.w5)((()=>[h])),_:1})])],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,t]of n)a[e]=t;return a}},23798:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-0419817f",path:"/code/mini-app/guide/config/",title:"配置",lang:"zh-CN",frontmatter:{title:"配置",icon:"config",category:["小程序"],summary:"小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。\n提示\n为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/config/"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"配置"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:01:38.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:01:38.000Z"}]]},excerpt:'<p>小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。</p>\n<div class="custom-container tip"><p class="custom-container-title">提示</p>\n<p>为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。</p>\n</div>\n',headers:[{level:2,title:"全局配置",slug:"全局配置",children:[]},{level:2,title:"页面配置",slug:"页面配置",children:[]},{level:2,title:"索引配置",slug:"索引配置",children:[{level:3,title:"具体配置说明",slug:"具体配置说明",children:[]},{level:3,title:"sitemap 配置",slug:"sitemap-配置",children:[]}]}],git:{createdTime:1644163298e3,updatedTime:1644163298e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.01,words:602},filePathRelative:"code/mini-app/guide/config/README.md"}}}]);