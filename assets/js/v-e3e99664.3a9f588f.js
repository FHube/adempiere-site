"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[99973],{11948:(e,s,n)=>{n.r(s),n.d(s,{default:()=>I});var a=n(34086);const r=(0,a._)("p",null,"CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。",-1),l=(0,a._)("p",null,"选择器所选择的元素，叫做“选择器的对象”。",-1),c=(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,'<img src="/logo.svg" alt="logo" style="max-width: 150px" />\n\n<p class="paragraph">Mr.Hope is handsome!</p>\n<p id="par">Mr.Hope is very handsome!</p>\n')]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br")])],-1),i=(0,a._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,a._)("pre",{class:"language-css"},[(0,a._)("code",null,"p {\n  color: red;\n}\n\n.paragraph {\n  color: red;\n}\n\n#par {\n  color: blue;\n}\n")]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br")])],-1),t=(0,a.uE)('<p>在上文中，CSS 选择器选中了对应的 HTML 元素并为其应用样式规则。</p><h2 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器" aria-hidden="true">#</a> ID 选择器</h2><p>ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。</p><p>HTML 可以用 ID 属性来设置 ID 选择器，CSS 中 ID 选择器以 <code>#</code> 来定义。</p><p>以下的样式规则应用于元素属性 <code>id=&quot;para1&quot;</code>:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>#para1 {\n  text-align: center;\n  color: red;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>ID 的全称是 Identify，是身份标识的意思。ID 的实际作用是为这个 HTML 标签绑定一个页面内唯一的标识符。因此，每一个 HTML 页面出现的 ID 应该仅被使用一次，以 ID 来代指这个元素。</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>ID 属性不要以数字开头，数字开头的 ID 在 <code>Mozilla/Firefox</code> 浏览器中不起作用。</p></div><h2 id="class-选择器" tabindex="-1"><a class="header-anchor" href="#class-选择器" aria-hidden="true">#</a> Class 选择器</h2><p>Class 选择器用于描述一组元素的样式，class 选择器有别于 ID 选择器，class 可以在多个元素中使用。</p><p>Class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以句点 (<code>.</code>) 显示:</p><p>在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.center {\n  text-align: center;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="标签选择器" tabindex="-1"><a class="header-anchor" href="#标签选择器" aria-hidden="true">#</a> 标签选择器</h2><p>标签选择器用于指定一个 HTML 标签的样式。通常，浏览器会为每个特定的 HTML 标签指定一个默认样式，但是不同的浏览器的默认样式可能有细微的区别。</p><p>有些时候想要覆盖浏览器的默认样式，或者说想在所有浏览器中保持统一样式，即可使用标签选择器指定标签的默认样式。在 CSS 指定的标签样式会覆盖掉浏览器默认指定的样式。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>/* 确保所有浏览器的段落标签的字体大小均为16像素。*/\np {\n  font-size: 16px;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2><p>属性选择器根据一个元素上的某个标签的属性的存在以选择元素的不同方式:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>a[title] {\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者根据一个有特定值的标签属性是否存在来选择:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>a[href=&quot;https://example.com&quot;]\n{\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="伪类与伪元素" tabindex="-1"><a class="header-anchor" href="#伪类与伪元素" aria-hidden="true">#</a> 伪类与伪元素</h2><h3 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h3><p>选择器可以包含伪类，用来样式化一个元素的特定状态。</p><p>例如 <code>:hover</code> 伪类会在鼠标指针悬浮到一个元素上的时候选择这个元素:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>a:hover {\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其他的常见伪类还有 <code>:visited</code> <code>:active</code> <code>:focus</code> 等。</p><h3 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h3><p>选择器也可以包含伪元素，选择一个元素的某个部分而不是元素自己。</p><p>例如 <code>::first-line</code> 会选择一个元素(下面的情况中是 <code>&lt;p&gt;</code>)中的第一行。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>p::first-line {\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其他的常见伪元素还有 <code>::before</code> <code>::after</code> <code>::fist-letter</code> <code>::last-child</code> 等。</p>',33),o={class:"custom-container info"},p=(0,a._)("p",{class:"custom-container-title"},"相关信息",-1),d=(0,a.Uk)("关于全部的伪类与伪元素选择器，请见 "),u={href:"https://www.runoob.com/cssref/css-selectors.html",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("菜鸟教程"),b=(0,a.Uk)(" 或 "),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("MDN 伪类"),v=(0,a.Uk)(),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",target:"_blank",rel:"noopener noreferrer"},C=(0,a.Uk)("MDN 伪元素"),f=(0,a.Uk)("。"),S=(0,a.uE)('<h2 id="通用选择器" tabindex="-1"><a class="header-anchor" href="#通用选择器" aria-hidden="true">#</a> 通用选择器</h2><p>通用选择器 <code>*</code> 会选中所有元素</p><h2 id="选择器列表" tabindex="-1"><a class="header-anchor" href="#选择器列表" aria-hidden="true">#</a> 选择器列表</h2><p>可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。例如:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>p,\nli,\n.tag,\n#link {\n  color: red;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p>选择器可以通过运算符，构成更加复杂的选择器。</p><p>常见的运算符主要有四种:</p><ul><li><p>后代选择器</p><p>以空格分隔，用于选取某元素的后代元素</p></li><li><p>子元素选择器</p><p>以大于号 <code>&gt;</code> 分隔，只能选择作为某元素子元素的元素</p></li><li><p>相邻兄弟选择器</p><p>加号 <code>+</code> 分隔，选择紧接某元素后的另一元素。</p></li><li><p>通用兄弟选择器</p><p>波浪线 <code>~</code> 分隔，选择紧接一元素后所有的同级的另一元素</p></li></ul><div class="custom-container tip"><p class="custom-container-title">选择器案例</p><ul><li><p><code>p{ }</code>: 为所有 <strong>p</strong> 元素指定一个样式。</p></li><li><p><code>.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的元素指定一个样式。</p></li><li><p><code>.marked p{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 元素内的 <strong>p</strong> 元素指定一个样式。</p></li><li><p><code>p.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的 <strong>p</strong> 元素指定一个样式。</p></li></ul></div>',10),k={class:"custom-container info"},x=(0,a._)("p",{class:"custom-container-title"},"相关信息",-1),D=(0,a.Uk)("更多高级选择器，请见 "),M={href:"https://www.runoob.com/cssref/css-selectors.html",target:"_blank",rel:"noopener noreferrer"},H=(0,a.Uk)("菜鸟教程"),T=(0,a.Uk)(" 或 "),w={href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#%E9%80%89%E6%8B%A9%E5%99%A8%E5%8F%82%E8%80%83%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("MDN 参考表"),E={},I=(0,n(82831).Z)(E,[["render",function(e,s){const n=(0,a.up)("CodeDemo"),E=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,l,(0,a.kq)(" more "),(0,a.Wm)(n,{id:"code-demo-d379cd88",title:"%E6%A1%88%E4%BE%8B",code:"%7B%22html%22%3A%22%3Cimg%20src%3D%5C%22%2Flogo.svg%5C%22%20alt%3D%5C%22logo%5C%22%20style%3D%5C%22max-width%3A%20150px%5C%22%20%2F%3E%5Cn%5Cn%3Cp%20class%3D%5C%22paragraph%5C%22%3EMr.Hope%20is%20handsome!%3C%2Fp%3E%5Cn%3Cp%20id%3D%5C%22par%5C%22%3EMr.Hope%20is%20very%20handsome!%3C%2Fp%3E%5Cn%22%2C%22css%22%3A%22p%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%5Cn.paragraph%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%5Cn%23par%20%7B%5Cn%20%20color%3A%20blue%3B%5Cn%7D%5Cn%22%7D"},{default:(0,a.w5)((()=>[c,i])),_:1}),t,(0,a._)("div",o,[p,(0,a._)("p",null,[d,(0,a._)("a",u,[m,(0,a.Wm)(E)]),b,(0,a._)("a",h,[g,(0,a.Wm)(E)]),v,(0,a._)("a",_,[C,(0,a.Wm)(E)]),f])]),S,(0,a._)("div",k,[x,(0,a._)("p",null,[D,(0,a._)("a",M,[H,(0,a.Wm)(E)]),T,(0,a._)("a",w,[y,(0,a.Wm)(E)])])])],64)}]])},82831:(e,s)=>{s.Z=(e,s)=>{const n=e.__vccOpts||e;for(const[e,a]of s)n[e]=a;return n}},3430:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-e3e99664",path:"/code/website/css/intro/selector.html",title:"选择器",lang:"zh-CN",frontmatter:{title:"选择器",icon:"select",date:"2019-09-05T00:00:00.000Z",category:["CSS"],tag:["CSS"],summary:"CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。\n选择器所选择的元素，叫做“选择器的对象”。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/css/intro/selector.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"选择器"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-03T17:06:01.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"CSS"}],["meta",{property:"article:published_time",content:"2019-09-05T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-04-03T17:06:01.000Z"}]]},excerpt:"<p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p>\n<p>选择器所选择的元素，叫做“选择器的对象”。</p>\n",headers:[{level:2,title:"ID 选择器",slug:"id-选择器",children:[]},{level:2,title:"Class 选择器",slug:"class-选择器",children:[]},{level:2,title:"标签选择器",slug:"标签选择器",children:[]},{level:2,title:"属性选择器",slug:"属性选择器",children:[]},{level:2,title:"伪类与伪元素",slug:"伪类与伪元素",children:[{level:3,title:"伪类",slug:"伪类",children:[]},{level:3,title:"伪元素",slug:"伪元素",children:[]}]},{level:2,title:"通用选择器",slug:"通用选择器",children:[]},{level:2,title:"选择器列表",slug:"选择器列表",children:[]},{level:2,title:"运算符",slug:"运算符",children:[]}],git:{createdTime:1605516411e3,updatedTime:1649005561e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:7}]},readingTime:{minutes:3.89,words:1167},filePathRelative:"code/website/css/intro/selector.md"}}}]);