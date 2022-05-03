"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[24552],{61592:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var d=n(34086);const r=(0,d.Uk)("框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 "),a={href:"https://developers.weixin.qq.com/miniprogram/dev/component/",target:"_blank",rel:"noopener noreferrer"},o=(0,d.Uk)("组件文档"),l=(0,d.Uk)("。"),i=(0,d.uE)('<p>什么是组件:</p><ul><li><p>组件是视图层的基本组成单元。</p></li><li><p>组件自带一些功能与微信风格一致的样式。</p></li><li><p>一个组件通常包括 <strong>开始标签</strong> 和 <strong>结束标签</strong>，属性 用来修饰这个组件，内容 在两个标签之内。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;tagname property=&quot;value&quot;&gt;\nContent goes here ...\n&lt;/tagname&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>所有组件与属性都是小写，以连字符 <code>-</code> 连接</p></div></li></ul>',2),p=(0,d.uE)('<h2 id="属性类型" tabindex="-1"><a class="header-anchor" href="#属性类型" aria-hidden="true">#</a> 属性类型</h2><table><thead><tr><th>类型</th><th>描述</th><th>注解</th></tr></thead><tbody><tr><td>Boolean</td><td>布尔值</td><td>组件写上该属性，不管是什么值都被当作 <code>true</code>；只有组件上没有该属性时，属性值才为 <code>false</code>。<br>如果属性值为变量，变量的值会被转换为 Boolean 类型</td></tr><tr><td>Number</td><td>数字</td><td>1, 2.5</td></tr><tr><td>String</td><td>字符串</td><td>&quot;string&quot;</td></tr><tr><td>Array</td><td>数组</td><td>[ 1, &quot;string&quot; ]</td></tr><tr><td>Object</td><td>对象</td><td>{ key: value }</td></tr><tr><td>EventHandler</td><td>事件处理函数名</td><td><code>&quot;handlerName&quot;</code> 是 <code>Page</code> 中定义的事件处理函数名</td></tr><tr><td>Any</td><td>任意属性</td><td></td></tr></tbody></table><h2 id="公共属性" tabindex="-1"><a class="header-anchor" href="#公共属性" aria-hidden="true">#</a> 公共属性</h2><p>所有组件都有以下属性:</p><table><thead><tr><th>属性名</th><th>类型</th><th>描述</th><th>注解</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>组件的唯一标示</td><td>保持整个页面唯一</td></tr><tr><td>class</td><td>String</td><td>组件的样式类</td><td>在对应的 WXSS 中定义的样式类</td></tr><tr><td>style</td><td>String</td><td>组件的内联样式</td><td>可以动态设置的内联样式</td></tr><tr><td>hidden</td><td>Boolean</td><td>组件是否显示</td><td>所有组件默认显示</td></tr><tr><td>data-*</td><td>Any</td><td>自定义属性</td><td>组件上触发的事件时，会发送给事件处理函数</td></tr><tr><td>bind* / catch*</td><td>EventHandler</td><td>组件的事件</td><td>详见事件</td></tr></tbody></table><h2 id="特殊属性" tabindex="-1"><a class="header-anchor" href="#特殊属性" aria-hidden="true">#</a> 特殊属性</h2><p>几乎所有组件都有各自定义的属性，可以对该组件的功能或样式进行修饰，请参考各个组件的定义。</p>',7),s={},c=(0,n(82831).Z)(s,[["render",function(t,e){const n=(0,d.up)("ExternalLinkIcon");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("p",null,[r,(0,d._)("a",a,[o,(0,d.Wm)(n)]),l]),i,(0,d.kq)(" more "),p],64)}]])},82831:(t,e)=>{e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[t,d]of e)n[t]=d;return n}},72435:(t,e,n)=>{n.r(e),n.d(e,{data:()=>d});const d={key:"v-15c673f8",path:"/code/mini-app/guide/view/component.html",title:"基础组件",lang:"zh-CN",frontmatter:{title:"基础组件",icon:"plugin",category:["小程序"],summary:"框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 组件文档。\n什么是组件:\n\n\n组件是视图层的基本组成单元。\n\n\n组件自带一些功能与微信风格一致的样式。\n\n\n一个组件通常包括 开始标签 和 结束标签，属性 用来修饰这个组件，内容 在两个标签之内。\n&lt;tagname property=&quot;value&quot;&gt;\nContent goes here ...\n&lt;/tagname&gt;\n123注意\n所有组件与属性都是小写，以连字符 - 连接\n\n\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/view/component.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"基础组件"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-03-12T11:27:20.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-03-12T11:27:20.000Z"}]]},excerpt:'<p>框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/component/" target="_blank" rel="noopener noreferrer">组件文档<ExternalLinkIcon/></a>。</p>\n<p>什么是组件:</p>\n<ul>\n<li>\n<p>组件是视图层的基本组成单元。</p>\n</li>\n<li>\n<p>组件自带一些功能与微信风格一致的样式。</p>\n</li>\n<li>\n<p>一个组件通常包括 <strong>开始标签</strong> 和 <strong>结束标签</strong>，属性 用来修饰这个组件，内容 在两个标签之内。</p>\n<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>&lt;tagname property=&quot;value&quot;&gt;\nContent goes here ...\n&lt;/tagname&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>\n<p>所有组件与属性都是小写，以连字符 <code v-pre>-</code> 连接</p>\n</div>\n</li>\n</ul>\n',headers:[{level:2,title:"属性类型",slug:"属性类型",children:[]},{level:2,title:"公共属性",slug:"公共属性",children:[]},{level:2,title:"特殊属性",slug:"特殊属性",children:[]}],git:{createdTime:1604856934e3,updatedTime:161554844e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:1.5,words:449},filePathRelative:"code/mini-app/guide/view/component.md"}}}]);