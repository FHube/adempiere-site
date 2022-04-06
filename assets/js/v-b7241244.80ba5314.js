"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[90456],{44196:(n,s,a)=>{a.r(s),a.d(s,{default:()=>R});var t=a(66252);const e=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,"此部分在初步学习小程序的时候直接略过即可。")],-1),p=(0,t._)("h2",{id:"wxml-节点信息",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#wxml-节点信息","aria-hidden":"true"},"#"),(0,t.Uk)(" WXML 节点信息")],-1),c={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("节点信息查询 API"),l=(0,t.Uk)(" 可以用于获取节点属性、样式、在界面上的位置等信息。"),u=(0,t._)("p",null,"最常见的用法是使用这个接口来查询某个节点的当前位置，以及界面的滚动位置。",-1),i={class:"custom-block details"},r=(0,t.uE)('<summary>代码示例</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> query <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nquery<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&quot;#the-id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// #the-id 节点的上边界坐标(相对于显示区域)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nquery<span class="token punctuation">.</span><span class="token function">selectViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollOffset</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span> <span class="token comment">// 显示区域的竖直滚动位置</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nquery<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',2),k=(0,t.Uk)("上述示例中， "),m=(0,t._)("code",null,"#the-id",-1),d=(0,t.Uk)(" 是一个节点选择器，与 CSS 的选择器相近但略有区别，请参见 "),b={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("SelectorQuery.select"),h=(0,t.Uk)(" 的相关说明。"),v=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,[(0,t.Uk)("在自定义组件或包含自定义组件的页面中，推荐使用 "),(0,t._)("code",null,"this.createSelectorQuery"),(0,t.Uk)(" 来代替 "),(0,t._)("code",null,"wx.createSelectorQuery"),(0,t.Uk)(" ，这样可以确保在正确的范围内选择节点。")])],-1),f=(0,t._)("h2",{id:"wxml-节点布局相交状态",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#wxml-节点布局相交状态","aria-hidden":"true"},"#"),(0,t.Uk)(" WXML 节点布局相交状态")],-1),w={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("节点布局相交状态 API"),x=(0,t.Uk)(" 可用于监听两个或多个组件节点在布局位置上的相交状态。这一组 API 常常可以用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。"),_=(0,t.uE)('<p>这一组 API 涉及的主要概念如下。</p><ul><li>参照节点: 监听的参照节点，取它的布局区域作为参照区域。如果有多个参照节点，则会取它们布局区域的 <strong>交集</strong> 作为参照区域。页面显示区域也可作为参照区域之一。</li><li>目标节点: 监听的目标，默认只能是一个节点(使用 selectAll 选项时，可以同时监听多个节点)。</li><li>相交区域: 目标节点的布局区域与参照区域的相交区域。</li><li>相交比例: 相交区域占参照区域的比例。</li><li>阈值: 相交比例如果达到阈值，则会触发监听器的回调函数。阈值可以有多个。</li></ul><details class="custom-block details"><summary>代码示例</summary><p>以下示例代码可以在目标节点(用选择器 <code>.target-class</code> 指定)每次进入或离开页面显示区域时，触发回调函数。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    wx<span class="token punctuation">.</span><span class="token function">createIntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">relativeToViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token string">&quot;.target-class&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// 目标节点 id</span>\n        res<span class="token punctuation">.</span>dataset<span class="token punctuation">;</span> <span class="token comment">// 目标节点 dataset</span>\n        res<span class="token punctuation">.</span>intersectionRatio<span class="token punctuation">;</span> <span class="token comment">// 相交区域占目标节点的布局区域的比例</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">;</span> <span class="token comment">// 相交区域</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>left<span class="token punctuation">;</span> <span class="token comment">// 相交区域的左边界坐标</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// 相交区域的上边界坐标</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>width<span class="token punctuation">;</span> <span class="token comment">// 相交区域的宽度</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">// 相交区域的高度</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>以下示例代码可以在目标节点(用选择器 <code>.target-class</code> 指定)与参照节点(用选择器 <code>.relative-class</code> 指定)在页面显示区域内相交或相离，且相交或相离程度达到目标节点布局区域的 20%和 50%时，触发回调函数。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    wx<span class="token punctuation">.</span><span class="token function">createIntersectionObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">thresholds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">relativeTo</span><span class="token punctuation">(</span><span class="token string">&quot;.relative-class&quot;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">relativeToViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token string">&quot;.target-class&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">.</span>intersectionRatio<span class="token punctuation">;</span> <span class="token comment">// 相交区域占目标节点的布局区域的比例</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">;</span> <span class="token comment">// 相交区域</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>left<span class="token punctuation">;</span> <span class="token comment">// 相交区域的左边界坐标</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// 相交区域的上边界坐标</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>width<span class="token punctuation">;</span> <span class="token comment">// 相交区域的宽度</span>\n        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">// 相交区域的高度</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details><div class="custom-container warning"><p class="custom-container-title">注意</p><p>与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏(如遇祖先节点中 overflow 样式为 <code>hidden</code> 的节点)或遮盖(如遇 <code>fixed</code> 定位的节点)。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在自定义组件或包含自定义组件的页面中，推荐使用 <code>this.createIntersectionObserver</code> 来代替 <code>wx.createIntersectionObserver</code> ，这样可以确保在正确的范围内选择节点。</p></div>',5),q={},R=(0,a(83744).Z)(q,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,p,(0,t._)("p",null,[(0,t._)("a",c,[o,(0,t.Wm)(a)]),l]),u,(0,t._)("details",i,[r,(0,t._)("p",null,[k,m,d,(0,t._)("a",b,[g,(0,t.Wm)(a)]),h])]),v,f,(0,t._)("p",null,[(0,t._)("a",w,[y,(0,t.Wm)(a)]),x]),_],64)}]])},84667:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-b7241244",path:"/code/mini-app/guide/view/selector.html",title:"获取界面上的节点信息",lang:"zh-CN",frontmatter:{title:"获取界面上的节点信息",icon:"select",category:["小程序"],summary:"此部分在初步学习小程序的时候直接略过即可。 WXML 节点信息 节点信息查询 API 可以用于获取节点属性、样式、在界面上的位置等信息。 最常见的用法是使用这个接口来查询某个节点的当前位置，以及界面的滚动位置。 代码示例 上述示例中， #the-id 是一个节点选择器，与 CSS 的选择器相近但略有区别，请参见 SelectorQuery.select 的相",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/view/selector.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"获取界面上的节点信息"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-19T13:09:25.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-19T13:09:25.000Z"}]]},excerpt:"",headers:[{level:2,title:"WXML 节点信息",slug:"wxml-节点信息",children:[]},{level:2,title:"WXML 节点布局相交状态",slug:"wxml-节点布局相交状态",children:[]}],git:{createdTime:1611033126e3,updatedTime:1611061765e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:3.08,words:923},filePathRelative:"code/mini-app/guide/view/selector.md"}}}]);