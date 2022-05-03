"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[64215],{23618:(n,e,s)=>{s.r(e),s.d(e,{default:()=>m});var a=s(34086);const c=(0,a._)("p",null,"本章介绍如何对 Shell 脚本除错。",-1),l=(0,a.uE)('<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误" aria-hidden="true">#</a> 常见错误</h2><p>编写 Shell 脚本的时候，一定要考虑到命令失败的情况，否则很容易出错。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#! /bin/bash\n\ndir_name=/path/not/exist\n\ncd $dir_name\nrm *\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面脚本中，如果目录 <code>$dir_name</code> 不存在，<code>cd $dir_name</code> 命令就会执行失败。这时，就不会改变当前目录，脚本会继续执行下去，导致 <code>rm *</code> 命令删光当前目录的文件。</p><p>如果改成下面的样子，也会有问题。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cd $dir_name &amp;&amp; rm *\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面脚本中，只有 <code>cd $dir_name</code> 执行成功，才会执行 <code>rm *</code>。但是，如果变量 <code>$dir_name</code> 为空，<code>cd</code> 就会进入用户主目录，从而删光用户主目录的文件。</p><p>下面的写法才是正确的。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[[ -d $dir_name ]] &amp;&amp; cd $dir_name &amp;&amp; rm *\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面代码中，先判断目录 <code>$dir_name</code> 是否存在，然后才执行其他操作。</p><p>如果不放心删除什么文件，可以先打印出来看一下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[[ -d $dir_name ]] &amp;&amp; cd $dir_name &amp;&amp; echo rm *\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面命令中，<code>echo rm *</code> 不会删除文件，只会打印出来要删除的文件。</p><h2 id="bash-的-x-参数" tabindex="-1"><a class="header-anchor" href="#bash-的-x-参数" aria-hidden="true">#</a> <code>bash</code> 的 <code>-x</code> 参数</h2><p><code>bash</code> 的 <code>-x</code> 参数可以在执行每一行命令之前，打印该命令。这样就不用自己输出执行的命令，一旦出错，比较容易追查。</p><p>下面是一个脚本 <code>script.sh</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># script.sh\necho hello world\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>加上 <code>-x</code> 参数，执行每条命令之前，都会显示该命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ bash -x script.sh\n+ echo hello world\nhello world\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面例子中，行首为 <code>+</code> 的行，显示该行是所要执行的命令，下一行才是该命令的执行结果。</p><p>下面再看一个 <code>-x</code> 写在脚本内部的例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#! /bin/bash -x\n# trouble: script to demonstrate common errors\n\nnumber=1\nif [ $number = 1 ]; then\n  echo &quot;Number is equal to 1.&quot;\nelse\n  echo &quot;Number is not equal to 1.&quot;\nfi\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>上面的脚本执行之后，会输出每一行命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trouble\n+ number=1\n+ &#39;[&#39; 1 = 1 &#39;]&#39;\n+ echo &#39;Number is equal to 1.&#39;\nNumber is equal to 1.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出的命令之前的 <code>+</code> 号，是由系统变量 <code>PS4</code> 决定，可以修改这个变量。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ export PS4=&#39;$LINENO + &#39;\n$ trouble\n5 + number=1\n7 + &#39;[&#39; 1 = 1 &#39;]&#39;\n8 + echo &#39;Number is equal to 1.&#39;\nNumber is equal to 1.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',26),r=(0,a.Uk)("另外，"),i=(0,a._)("code",null,"set",-1),u=(0,a.Uk)(" 命令也可以设置 Shell 的行为参数，有利于脚本除错，详见 "),b=(0,a.Uk)("set 命令"),d=(0,a.Uk)(" 一章。"),p=(0,a.uE)('<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>有一些环境变量常用于除错。</p><h3 id="lineno" tabindex="-1"><a class="header-anchor" href="#lineno" aria-hidden="true">#</a> LINENO</h3><p>变量 <code>LINENO</code> 返回它在脚本里面的行号。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash\n\necho &quot;This is line $LINENO&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>执行上面的脚本 <code>test.sh</code>，<code>$LINENO</code> 会返回 <code>3</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./test.sh\nThis is line 3\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="funcname" tabindex="-1"><a class="header-anchor" href="#funcname" aria-hidden="true">#</a> FUNCNAME</h3><p>变量 <code>FUNCNAME</code> 返回一个数组，内容是当前的函数调用堆栈。该数组的 0 号成员是当前调用的函数，1 号成员是调用当前函数的函数，以此类推。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash\n\nfunction func1()\n{\n  echo &quot;func1: FUNCNAME0 is ${FUNCNAME[0]}&quot;\n  echo &quot;func1: FUNCNAME1 is ${FUNCNAME[1]}&quot;\n  echo &quot;func1: FUNCNAME2 is ${FUNCNAME[2]}&quot;\n  func2\n}\n\nfunction func2()\n{\n  echo &quot;func2: FUNCNAME0 is ${FUNCNAME[0]}&quot;\n  echo &quot;func2: FUNCNAME1 is ${FUNCNAME[1]}&quot;\n  echo &quot;func2: FUNCNAME2 is ${FUNCNAME[2]}&quot;\n}\n\nfunc1\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>执行上面的脚本 <code>test.sh</code>，结果如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./test.sh\nfunc1: FUNCNAME0 is func1\nfunc1: FUNCNAME1 is main\nfunc1: FUNCNAME2 is\nfunc2: FUNCNAME0 is func2\nfunc2: FUNCNAME1 is func1\nfunc2: FUNCNAME2 is main\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面例子中，执行 <code>func1</code> 时，变量 <code>FUNCNAME</code> 的 0 号成员是 <code>func1</code>，1 号成员是调用 <code>func1</code> 的主脚本 <code>main</code>。执行 <code>func2</code> 时，变量 <code>FUNCNAME</code> 的 0 号成员是 <code>func2</code>，1 号成员是调用 <code>func2</code> 的 <code>func1</code>。</p><h3 id="bash-source" tabindex="-1"><a class="header-anchor" href="#bash-source" aria-hidden="true">#</a> BASH_SOURCE</h3><p>变量 <code>BASH_SOURCE</code> 返回一个数组，内容是当前的脚本调用堆栈。该数组的 0 号成员是当前执行的脚本，1 号成员是调用当前脚本的脚本，以此类推，跟变量 <code>FUNCNAME</code> 是一一对应关系。</p><p>下面有两个子脚本 <code>lib1.sh</code> 和 <code>lib2.sh</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># lib1.sh\nfunction func1()\n{\n  echo &quot;func1: BASH_SOURCE0 is ${BASH_SOURCE[0]}&quot;\n  echo &quot;func1: BASH_SOURCE1 is ${BASH_SOURCE[1]}&quot;\n  echo &quot;func1: BASH_SOURCE2 is ${BASH_SOURCE[2]}&quot;\n  func2\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># lib2.sh\nfunction func2()\n{\n  echo &quot;func2: BASH_SOURCE0 is ${BASH_SOURCE[0]}&quot;\n  echo &quot;func2: BASH_SOURCE1 is ${BASH_SOURCE[1]}&quot;\n  echo &quot;func2: BASH_SOURCE2 is ${BASH_SOURCE[2]}&quot;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>然后，主脚本 <code>main.sh</code> 调用上面两个子脚本。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash\n# main.sh\n\nsource lib1.sh\nsource lib2.sh\n\nfunc1\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>执行主脚本 <code>main.sh</code>，会得到下面的结果。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./main.sh\nfunc1: BASH_SOURCE0 is lib1.sh\nfunc1: BASH_SOURCE1 is ./main.sh\nfunc1: BASH_SOURCE2 is\nfunc2: BASH_SOURCE0 is lib2.sh\nfunc2: BASH_SOURCE1 is lib1.sh\nfunc2: BASH_SOURCE2 is ./main.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面例子中，执行函数 <code>func1</code> 时，变量 <code>BASH_SOURCE</code> 的 0 号成员是 <code>func1</code> 所在的脚本 <code>lib1.sh</code>，1 号成员是主脚本 <code>main.sh</code>；执行函数 <code>func2</code> 时，变量 <code>BASH_SOURCE</code> 的 0 号成员是 <code>func2</code> 所在的脚本 <code>lib2.sh</code>，1 号成员是调用 <code>func2</code> 的脚本 <code>lib1.sh</code>。</p><h3 id="bash-lineno" tabindex="-1"><a class="header-anchor" href="#bash-lineno" aria-hidden="true">#</a> BASH_LINENO</h3><p>变量 <code>BASH_LINENO</code> 返回一个数组，内容是每一轮调用对应的行号。<code>${BASH_LINENO[$i]}</code> 跟 <code>${FUNCNAME[$i]}</code> 是一一对应关系，表示 <code>${FUNCNAME[$i]}</code> 在调用它的脚本文件 <code>${BASH_SOURCE[$i+1]}</code> 里面的行号。</p><p>下面有两个子脚本 <code>lib1.sh</code> 和 <code>lib2.sh</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># lib1.sh\nfunction func1()\n{\n  echo &quot;func1: BASH_LINENO is ${BASH_LINENO[0]}&quot;\n  echo &quot;func1: FUNCNAME is ${FUNCNAME[0]}&quot;\n  echo &quot;func1: BASH_SOURCE is ${BASH_SOURCE[1]}&quot;\n\n  func2\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># lib2.sh\nfunction func2()\n{\n  echo &quot;func2: BASH_LINENO is ${BASH_LINENO[0]}&quot;\n  echo &quot;func2: FUNCNAME is ${FUNCNAME[0]}&quot;\n  echo &quot;func2: BASH_SOURCE is ${BASH_SOURCE[1]}&quot;\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>然后，主脚本 <code>main.sh</code> 调用上面两个子脚本。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash\n# main.sh\n\nsource lib1.sh\nsource lib2.sh\n\nfunc1\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>执行主脚本 <code>main.sh</code>，会得到下面的结果。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./main.sh\nfunc1: BASH_LINENO is 7\nfunc1: FUNCNAME is func1\nfunc1: BASH_SOURCE is main.sh\nfunc2: BASH_LINENO is 8\nfunc2: FUNCNAME is func2\nfunc2: BASH_SOURCE is lib1.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面例子中，函数 <code>func1</code> 是在 <code>main.sh</code> 的第 7 行调用，函数 <code>func2</code> 是在 <code>lib1.sh</code> 的第 8 行调用的。</p>',33),o={},m=(0,s(82831).Z)(o,[["render",function(n,e){const s=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[c,(0,a.kq)(" more "),l,(0,a._)("p",null,[r,i,u,(0,a.Wm)(s,{to:"/linux/bash/set.html"},{default:(0,a.w5)((()=>[b])),_:1}),d]),p],64)}]])},82831:(n,e)=>{e.Z=(n,e)=>{const s=n.__vccOpts||n;for(const[n,a]of e)s[n]=a;return s}},60733:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-a32bc7e6",path:"/linux/bash/debug.html",title:"脚本除错",lang:"zh-CN",frontmatter:{title:"脚本除错",icon:"debug",author:"阮一峰",category:["Linux"],tag:["Bash"],copyright:'本教程采用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh" rel="noopener noreferrer" target="_blank">知识共享 署名-相同方式共享 3.0协议</a>',summary:"本章介绍如何对 Shell 脚本除错。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/debug.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"脚本除错"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-12T05:50:30.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"阮一峰"}],["meta",{property:"article:tag",content:"Bash"}],["meta",{property:"article:modified_time",content:"2022-02-12T05:50:30.000Z"}]]},excerpt:"<p>本章介绍如何对 Shell 脚本除错。</p>\n",headers:[{level:2,title:"常见错误",slug:"常见错误",children:[]},{level:2,title:"bash 的 -x 参数",slug:"bash-的-x-参数",children:[]},{level:2,title:"环境变量",slug:"环境变量",children:[{level:3,title:"LINENO",slug:"lineno",children:[]},{level:3,title:"FUNCNAME",slug:"funcname",children:[]},{level:3,title:"BASH_SOURCE",slug:"bash-source",children:[]},{level:3,title:"BASH_LINENO",slug:"bash-lineno",children:[]}]}],git:{createdTime:1591204114e3,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:4.27,words:1281},filePathRelative:"linux/bash/debug.md"}}}]);