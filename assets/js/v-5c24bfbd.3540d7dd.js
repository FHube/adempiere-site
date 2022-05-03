"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[53462],{18695:(e,n,s)=>{s.r(n),s.d(n,{default:()=>l});const a=(0,s(34086).uE)('<h1 id="标准-i-o" tabindex="-1"><a class="header-anchor" href="#标准-i-o" aria-hidden="true">#</a> 标准 I/O</h1><h2 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h2><p><code>echo</code> 命令用于将指定内容输出到显示屏(标准输出)。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ echo this is a test\nthis is a test\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>它的参数如下。</p><ul><li><code>-e</code> 解释转义字符。</li><li><code>-n</code> 不输出行尾的换行符</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ echo &quot;a\\nb&quot;\na\\nb\n\n$ echo -e &quot;a\\nb&quot;\na\nb\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面代码中，如果不加 <code>-e</code> 参数，<code>\\n</code> 就会按字面形式输出；加了以后，就被解释成了换行符。</p><p>引号之中可以包括多个换行符，即可以输出多行文本。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>echo &quot;&lt;HTML&gt;\n    &lt;HEAD&gt;\n          &lt;TITLE&gt;Page Title&lt;/TITLE&gt;\n    &lt;/HEAD&gt;\n    &lt;BODY&gt;\n          Page body.\n    &lt;/BODY&gt;\n&lt;/HTML&gt;&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h2><p><code>read</code> 命令被用来从标准输入读取单行数据。这个命令可以用来读取键盘输入，当使用重定向的时候，读取文件中的一行数据。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>read [-options] [variable...]\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面的 variable 用来存储输入数值的一个或多个变量名。如果没有提供变量名，shell 变量 <code>REPLY</code> 会包含数据行。</p><p>基本上，read 会把来自标准输入的字段赋值给具体的变量。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>echo -n &quot;Please enter an integer -&gt; &quot;\nread int\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>read</code> 可以给多个变量赋值。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash\n# read-multiple: read multiple values from keyboard\necho -n &quot;Enter one or more values &gt; &quot;\nread var1 var2 var3 var4 var5\necho &quot;var1 = &#39;$var1&#39;&quot;\necho &quot;var2 = &#39;$var2&#39;&quot;\necho &quot;var3 = &#39;$var3&#39;&quot;\necho &quot;var4 = &#39;$var4&#39;&quot;\necho &quot;var5 = &#39;$var5&#39;&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>上面脚本的用法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ read-multiple\nEnter one or more values &gt; a b c d e\nvar1 = &#39;a&#39;\nvar2 = &#39;b&#39;\nvar3 = &#39;c&#39;\nvar4 = &#39;d&#39;\nvar5 = &#39;e&#39;\n\n$ read-multiple\nEnter one or more values &gt; a\nvar1 = &#39;a&#39;\nvar2 = &#39;&#39;\nvar3 = &#39;&#39;\nvar4 = &#39;&#39;\nvar5 = &#39;&#39;\n\n$ read-multiple\nEnter one or more values &gt; a b c d e f g\nvar1 = &#39;a&#39;\nvar2 = &#39;b&#39;\nvar3 = &#39;c&#39;\nvar4 = &#39;d&#39;\nvar5 = &#39;e f g&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>如果 read 命令接受到变量值数目少于期望的数字，那么额外的变量值为空，而多余的输入数据则会 被包含到最后一个变量中。</p><p>如果 read 命令之后没有列出变量名，则一个 shell 变量 <code>REPLY</code>，将会包含所有的输入。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash\n# read-single: read multiple values into default variable\necho -n &quot;Enter one or more values &gt; &quot;\nread\necho &quot;REPLY = &#39;$REPLY&#39;&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面脚本的输出结果如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ read-single\nEnter one or more values &gt; a b c d\nREPLY = &#39;a b c d&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>read 命令的参数如下。</p><ul><li><code>-a array</code> 把输入赋值到数组 array 中，从索引号零开始。</li><li><code>-d delimiter</code> 用字符串 delimiter 中的第一个字符指示输入结束，而不是一个换行符。</li><li><code>-e</code> 使用 Readline 来处理输入。这使得与命令行相同的方式编辑输入。</li><li><code>-n num</code> 读取 num 个输入字符，而不是整行。</li><li><code>-p prompt</code> 为输入显示提示信息，使用字符串 prompt。</li><li><code>-r</code> Raw mode. 不把反斜杠字符解释为转义字符。</li><li><code>-s</code> Silent mode. 不会在屏幕上显示输入的字符。当输入密码和其它确认信息的时候，这会很有帮助。</li><li><code>-t seconds</code> 超时. 几秒钟后终止输入。read 会返回一个非零退出状态，若输入超时。</li><li><code>-u fd</code> 使用文件描述符 fd 中的输入，而不是标准输入。</li></ul><p><code>-p</code> 的例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>read -p &quot;Enter one or more values &gt; &quot;\necho &quot;REPLY = &#39;$REPLY&#39;&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>-t</code> 和 <code>-s</code> 的例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>if read -t 10 -sp &quot;Enter secret pass phrase &gt; &quot; secret_pass; then\n    echo -e &quot;\\nSecret pass phrase = &#39;$secret_pass&#39;&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面这个脚本提示用户输入一个密码，并等待输入 10 秒钟。如果在特定的时间内没有完成输入， 则脚本会退出并返回一个错误。因为包含了一个 -s 选项，所以输入的密码不会出现在屏幕上。</p><p>Shell 的内部变量 <code>IFS</code> 可以控制输入字段的分离。例如，这个 /etc/passwd 文件包含的数据行 使用冒号作为字段分隔符。通过把 IFS 的值更改为单个冒号，我们可以使用 read 读取 /etc/passwd 中的内容，并成功地把字段分给不同的变量。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash\n# read-ifs: read fields from a file\nFILE=/etc/passwd\nread -p &quot;Enter a user name &gt; &quot; user_name\nfile_info=$(grep &quot;^$user_name:&quot; $FILE)\nif [ -n &quot;$file_info&quot; ]; then\n    IFS=&quot;:&quot; read user pw uid gid name home shell &lt;&lt;&lt; &quot;$file_info&quot;\n    echo &quot;User = &#39;$user&#39;&quot;\n    echo &quot;UID = &#39;$uid&#39;&quot;\n    echo &quot;GID = &#39;$gid&#39;&quot;\n    echo &quot;Full Name = &#39;$name&#39;&quot;\n    echo &quot;Home Dir. = &#39;$home&#39;&quot;\n    echo &quot;Shell = &#39;$shell&#39;&quot;\nelse\n    echo &quot;No such user &#39;$user_name&#39;&quot; &gt;&amp;2\n    exit 1\nfi\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Shell 允许在一个命令之前立即发生一个或多个变量赋值。这些赋值为跟随着的命令更改环境变量。这个赋值的影响是暂时的；只是在命令存在期间改变环境变量。</p><p>虽然通常 read 命令接受标准输入，但是您不能这样做:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>echo “foo” | read\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我们期望这个命令能生效，但是它不能。这个命令将显示成功，但是 REPLY 变量 总是为空。为什么会这样?</p><p>答案与 shell 处理管道线的方式有关系。在 bash(和其它 shells，例如 sh)中，管道线 会创建子 shell。它们是 shell 的副本，且用来执行命令的环境变量在管道线中。上面示例中，read 命令将在子 shell 中执行。</p><p>在类 Unix 的系统中，子 shell 执行的时候，会为进程创建父环境的副本。当进程结束 之后，环境副本就会被破坏掉。这意味着一个子 shell 永远不能改变父进程的环境。read 赋值变量， 然后会变为环境的一部分。在上面的例子中，read 在它的子 shell 环境中，把 foo 赋值给变量 REPLY， 但是当命令退出后，子 shell 和它的环境将被破坏掉，这样赋值的影响就会消失。</p><p>使用 here 字符串是解决此问题的一种方法。</p><p>下面是生成菜单的一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash\n# read-menu: a menu driven system information program\nclear\necho &quot;\nPlease Select:\n\n    1. Display System Information\n    2. Display Disk Space\n    3. Display Home Space Utilization\n    0. Quit\n&quot;\nread -p &quot;Enter selection [0-3] &gt; &quot;\n\nif [[ $REPLY =~ ^[0-3]$ ]]; then\n    if [[ $REPLY == 0 ]]; then\n        echo &quot;Program terminated.&quot;\n        exit\n    fi\n    if [[ $REPLY == 1 ]]; then\n        echo &quot;Hostname: $HOSTNAME&quot;\n        uptime\n        exit\n    fi\n    if [[ $REPLY == 2 ]]; then\n        df -h\n        exit\n    fi\n    if [[ $REPLY == 3 ]]; then\n        if [[ $(id -u) -eq 0 ]]; then\n            echo &quot;Home Space Utilization (All Users)&quot;\n            du -sh /home/*\n        else\n            echo &quot;Home Space Utilization ($USER)&quot;\n            du -sh $HOME\n        fi\n        exit\n    fi\nelse\n    echo &quot;Invalid entry.&quot; &gt;&amp;2\n    exit 1\nfi\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>',43),r={},l=(0,s(82831).Z)(r,[["render",function(e,n){return a}]])},82831:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},6487:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-5c24bfbd",path:"/linux/bash/archives/deleted/stdio.html",title:"标准 I/O",lang:"zh-CN",frontmatter:{summary:"标准 I/O echo echo 命令用于将指定内容输出到显示屏(标准输出)。 它的参数如下。 -e 解释转义字符。; -n 不输出行尾的换行符; 上面代码中，如果不加 -e 参数，\\n 就会按字面形式输出；加了以后，就被解释成了换行符。 引号之中可以包括多个换行符，即可以输出多行文本。 read read 命令被用来从标准输入读取单行数据。这个命令可以用来",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/archives/deleted/stdio.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"标准 I/O"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-27T06:58:54.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-27T06:58:54.000Z"}]]},excerpt:"",headers:[{level:2,title:"echo",slug:"echo",children:[]},{level:2,title:"read",slug:"read",children:[]}],git:{createdTime:1591204114e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:4.93,words:1478},filePathRelative:"linux/bash/archives/deleted/stdio.md"}}}]);