"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[68805],{29903:(e,n,a)=>{a.r(n),a.d(n,{default:()=>c});var s=a(34086);const r=(0,s._)("p",null,"本章介绍 Bash 字符串操作的语法。",-1),l=(0,s.uE)('<h2 id="字符串的长度" tabindex="-1"><a class="header-anchor" href="#字符串的长度" aria-hidden="true">#</a> 字符串的长度</h2><p>获取字符串长度的语法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>${#varname}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下面是一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ myPath=/home/cam/book/long.file.name\n$ echo ${#myPath}\n29\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>大括号 <code>{}</code> 是必需的，否则 Bash 会将 <code>$#</code> 理解成脚本的参数个数，将变量名理解成文本。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ echo $#myvar\n0myvar\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面例子中，Bash 将 <code>$#</code> 和 <code>myvar</code> 分开解释了。</p><h2 id="子字符串" tabindex="-1"><a class="header-anchor" href="#子字符串" aria-hidden="true">#</a> 子字符串</h2><p>字符串提取子串的语法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>${varname:offset:length}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面语法的含义是返回变量 <code>$varname</code> 的子字符串，从位置 <code>offset</code> 开始(从 <code>0</code> 开始计算)，长度为 <code>length</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ count=frogfootman\n$ echo ${count:4:4}\nfoot\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面例子返回字符串 <code>frogfootman</code> 从 4 号位置开始的长度为 4 的子字符串 <code>foot</code>。</p><p>这种语法不能直接操作字符串，只能通过变量来读取字符串，并且不会改变原始字符串。变量前面的美元符号可以省略。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 报错\n$ echo ${&quot;hello&quot;:2:3}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面例子中，<code>&quot;hello&quot;</code> 不是变量名，导致 Bash 报错。</p><p>如果省略 <code>length</code>，则从位置 <code>offset</code> 开始，一直返回到字符串的结尾。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ count=frogfootman\n$ echo ${count:4}\nfootman\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面例子是返回变量 <code>count</code> 从 4 号位置一直到结尾的子字符串。</p><p>如果 <code>offset</code> 为负值，表示从字符串的末尾开始算起。注意，负数前面必须有一个空格， 以防止与 <code>${variable:-word}</code> 的变量的设置默认值语法混淆。这时，如果还指定 <code>length</code>，则 <code>length</code> 不能小于零。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ foo=&quot;This string is long.&quot;\n$ echo ${foo: -5}\nlong.\n$ echo ${foo: -5:2}\nlo\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面例子中，<code>offset</code> 为 <code>-5</code>，表示从倒数第 5 个字符开始截取，所以返回 <code>long.</code>。如果指定长度为 <code>2</code>，则返回 <code>lo</code>。</p><h2 id="搜索和替换" tabindex="-1"><a class="header-anchor" href="#搜索和替换" aria-hidden="true">#</a> 搜索和替换</h2><p>Bash 提供字符串搜索和替换的多种方法。</p><h3 id="字符串头部的模式匹配" tabindex="-1"><a class="header-anchor" href="#字符串头部的模式匹配" aria-hidden="true">#</a> 字符串头部的模式匹配</h3><p>以下两种语法可以检查字符串开头，是否匹配给定的模式。如果匹配成功，就删除匹配的部分，返回剩下的部分。原始变量不会发生变化。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 如果 pattern 匹配变量 variable 的开头，\n# 删除最短匹配(非贪婪匹配)的部分，返回剩余部分\n${variable#pattern}\n\n# 如果 pattern 匹配变量 variable 的开头，\n# 删除最长匹配(贪婪匹配)的部分，返回剩余部分\n${variable##pattern}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面两种语法会删除变量字符串开头的匹配部分(将其替换为空)，返回剩下的部分。区别是一个是最短匹配(又称非贪婪匹配)，另一个是最长匹配(又称贪婪匹配)。</p><p>匹配模式 <code>pattern</code> 可以使用 <code>*</code>、<code>?</code>、<code>[]</code> 等通配符。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ myPath=/home/cam/book/long.file.name\n\n$ echo ${myPath#/*/}\ncam/book/long.file.name\n\n$ echo ${myPath##/*/}\nlong.file.name\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面例子中，匹配的模式是 <code>/*/</code>，其中 <code>*</code> 可以匹配任意数量的字符，所以最短匹配是 <code>/home/</code>，最长匹配是 <code>/home/cam/book/</code>。</p><p>下面写法可以删除文件路径的目录部分，只留下文件名。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ path=/home/cam/book/long.file.name\n\n$ echo ${path##*/}\nlong.file.name\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面例子中，模式 <code>*/</code> 匹配目录部分，所以只返回文件名。</p><p>下面再看一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ phone=&quot;555-456-1414&quot;\n$ echo ${phone#*-}\n456-1414\n$ echo ${phone##*-}\n1414\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果匹配不成功，则返回原始字符串。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ phone=&quot;555-456-1414&quot;\n$ echo ${phone#444}\n555-456-1414\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面例子中，原始字符串里面无法匹配模式 <code>444</code>，所以原样返回。</p><p>如果要将头部匹配的部分，替换成其他内容，采用下面的写法。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 模式必须出现在字符串的开头\n${variable/#pattern/string}\n\n# 示例\n$ foo=JPG.JPG\n$ echo ${foo/#JPG/jpg}\njpg.JPG\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面例子中，被替换的 <code>JPG</code> 必须出现在字符串头部，所以返回 <code>jpg.JPG</code>。</p><h3 id="字符串尾部的模式匹配" tabindex="-1"><a class="header-anchor" href="#字符串尾部的模式匹配" aria-hidden="true">#</a> 字符串尾部的模式匹配</h3><p>以下两种语法可以检查字符串结尾，是否匹配给定的模式。如果匹配成功，就删除匹配的部分，返回剩下的部分。原始变量不会发生变化。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 如果 pattern 匹配变量 variable 的结尾，\n# 删除最短匹配(非贪婪匹配)的部分，返回剩余部分\n${variable%pattern}\n\n# 如果 pattern 匹配变量 variable 的结尾，\n# 删除最长匹配(贪婪匹配)的部分，返回剩余部分\n${variable%%pattern}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面两种语法会删除变量字符串结尾的匹配部分(将其替换为空)，返回剩下的部分。区别是一个是最短匹配(又称非贪婪匹配)，另一个是最长匹配(又称贪婪匹配)。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ path=/home/cam/book/long.file.name\n\n$ echo ${path%.*}\n/home/cam/book/long.file\n\n$ echo ${path%%.*}\n/home/cam/book/long\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面例子中，匹配模式是 <code>.*</code>，其中 <code>*</code> 可以匹配任意数量的字符，所以最短匹配是 <code>.name</code>，最长匹配是 <code>.file.name</code>。</p><p>下面写法可以删除路径的文件名部分，只留下目录部分。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ path=/home/cam/book/long.file.name\n\n$ echo ${path%/*}\n/home/cam/book\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面例子中，模式 <code>/*</code> 匹配文件名部分，所以只返回目录部分。</p><p>下面的写法可以替换文件的后缀名。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ file=foo.png\n$ echo ${file%.png}.jpg\nfoo.jpg\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面的例子将文件的后缀名，从 <code>.png</code> 改成了 <code>.jpg</code>。</p><p>下面再看一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ phone=&quot;555-456-1414&quot;\n$ echo ${phone%-*}\n555-456\n$ echo ${phone%%-*}\n555\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果匹配不成功，则返回原始字符串。</p><p>如果要将尾部匹配的部分，替换成其他内容，采用下面的写法。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 模式必须出现在字符串的结尾\n${variable/%pattern/string}\n\n# 示例\n$ foo=JPG.JPG\n$ echo ${foo/%JPG/jpg}\nJPG.jpg\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面例子中，被替换的 <code>JPG</code> 必须出现在字符串尾部，所以返回 <code>JPG.jpg</code>。</p><h3 id="任意位置的模式匹配" tabindex="-1"><a class="header-anchor" href="#任意位置的模式匹配" aria-hidden="true">#</a> 任意位置的模式匹配</h3><p>以下两种语法可以检查字符串内部，是否匹配给定的模式。如果匹配成功，就删除匹配的部分，换成其他的字符串返回。原始变量不会发生变化。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 如果 pattern 匹配变量 variable 的一部分，\n# 最长匹配(贪婪匹配)的那部分被 string 替换，但仅替换第一个匹配\n${variable/pattern/string}\n\n# 如果 pattern 匹配变量 variable 的一部分，\n# 最长匹配(贪婪匹配)的那部分被 string 替换，所有匹配都替换\n${variable//pattern/string}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面两种语法都是最长匹配(贪婪匹配)下的替换，区别是前一个语法仅仅替换第一个匹配，后一个语法替换所有匹配。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ path=/home/cam/foo/foo.name\n\n$ echo ${path/foo/bar}\n/home/cam/bar/foo.name\n\n$ echo ${path//foo/bar}\n/home/cam/bar/bar.name\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面例子中，前一个命令只替换了第一个 <code>foo</code>，后一个命令将两个 <code>foo</code> 都替换了。</p><p>下面的例子将分隔符从 <code>:</code> 换成换行符。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ echo -e ${PATH//:/&#39;\\n&#39;}\n/usr/local/bin\n/usr/bin\n/bin\n...\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面例子中，<code>echo</code> 命令的 <code>-e</code> 参数，表示将替换后的字符串的 <code>\\n</code> 字符，解释为换行符。</p><p>模式部分可以使用通配符。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ phone=&quot;555-456-1414&quot;\n$ echo ${phone/5?4/-}\n55-56-1414\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面的例子将 <code>5-4</code> 替换成 <code>-</code>。</p><p>如果省略了 <code>string</code> 部分，那么就相当于匹配的部分替换成空字符串，即删除匹配的部分。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ path=/home/cam/foo/foo.name\n\n$ echo ${path/.*/}\n/home/cam/foo/foo\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面例子中，第二个斜杠后面的 <code>string</code> 部分省略了，所以模式 <code>.*</code> 匹配的部分 <code>.name</code> 被删除后返回。</p><p>前面提到过，这个语法还有两种扩展形式。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 模式必须出现在字符串的开头\n${variable/#pattern/string}\n\n# 模式必须出现在字符串的结尾\n${variable/%pattern/string}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="改变大小写" tabindex="-1"><a class="header-anchor" href="#改变大小写" aria-hidden="true">#</a> 改变大小写</h2><p>下面的语法可以改变变量的大小写。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 转为大写\n${varname^^}\n\n# 转为小写\n${varname,,}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>下面是一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ foo=heLLo\n$ echo ${foo^^}\nHELLO\n$ echo ${foo,,}\nhello\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',83),p={},c=(0,a(82831).Z)(p,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s.kq)(" more "),l],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},20185:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-5e9f82a1",path:"/linux/bash/string.html",title:"字符串操作",lang:"zh-CN",frontmatter:{title:"字符串操作",icon:"string",author:"阮一峰",category:["Linux"],tag:["Bash"],copyright:'本教程采用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh" rel="noopener noreferrer" target="_blank">知识共享 署名-相同方式共享 3.0协议</a>',summary:"本章介绍 Bash 字符串操作的语法。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/string.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"字符串操作"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-12T05:50:30.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"阮一峰"}],["meta",{property:"article:tag",content:"Bash"}],["meta",{property:"article:modified_time",content:"2022-02-12T05:50:30.000Z"}]]},excerpt:"<p>本章介绍 Bash 字符串操作的语法。</p>\n",headers:[{level:2,title:"字符串的长度",slug:"字符串的长度",children:[]},{level:2,title:"子字符串",slug:"子字符串",children:[]},{level:2,title:"搜索和替换",slug:"搜索和替换",children:[{level:3,title:"字符串头部的模式匹配",slug:"字符串头部的模式匹配",children:[]},{level:3,title:"字符串尾部的模式匹配",slug:"字符串尾部的模式匹配",children:[]},{level:3,title:"任意位置的模式匹配",slug:"任意位置的模式匹配",children:[]}]},{level:2,title:"改变大小写",slug:"改变大小写",children:[]}],git:{createdTime:1591204114e3,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:6.34,words:1903},filePathRelative:"linux/bash/string.md"}}}]);