"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[41536],{23873:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});const a=(0,n(34086).uE)('<h2 id="管理修改" tabindex="-1"><a class="header-anchor" href="#管理修改" aria-hidden="true">#</a> 管理修改</h2><p>Git 比其他版本控制系统设计得优秀，因为 Git 跟踪并管理的是修改，而非文件。</p><p>您会问，什么是修改? 比如您新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。</p><p>为什么说 Git 管理的是修改，而不是文件呢? 我们还是做实验。第一步，对 readme.txt 做一个修改，比如加一行内容:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cat readme.txt\nGit is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后，添加:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git add readme.txt\n# nothing\n$ git status\n  On branch master\n  Changes to be committed:\n    (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)\n        modified:   readme.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>然后，再修改 readme.txt:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cat readme.txt\nGit is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes of files.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>提交:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git commit -m &quot;git tracks changes&quot;\n[master 519219b] git tracks changes\n 1 file changed, 1 insertion(+)\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>提交后，再看看状态:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git status\nOn branch master\nChanges not staged for commit:\n  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)\n  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)\n\n    modified:   readme.txt\n\nno changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>怎么第二次的修改没有被提交? 我们回顾一下操作过程:</p><p>第一次修改 → <code>git add</code> → 第二次修改 → <code>git commit</code></p><p>您看，我们前面讲了，Git 管理的是修改，当您用 <code>git add</code> 命令后，在工作区的第一次修改被放入暂存区，准备提交，但是，在工作区的第二次修改并没有放入暂存区，所以，<code>git commit</code> 只负责把暂存区的修改提交了，也就是第一次的修改被提交了，第二次的修改不会被提交。</p><p>提交后，用 <code>git diff HEAD -- readme.txt</code> 命令可以查看工作区和版本库里面最新版本的区别:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git diff HEAD -- readme.txt\ndiff --git a/readme.txt b/readme.txt\nindex 76d770f..a9c5755 100644\n--- a/readme.txt\n+++ b/readme.txt\n@@ -1,4 +1,4 @@\n Git is a distributed version control system.\n Git is free software distributed under the GPL.\n Git has a mutable index called stage.\n-Git tracks changes.\n+Git tracks changes of files.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>可见，第二次修改确实没有被提交。</p><p>那怎么提交第二次修改呢? 您可以继续 <code>git add</code> 再 <code>git commit</code>，也可以别着急提交第一次修改，先 <code>git add</code> 第二次修改，再 <code>git commit</code>，就相当于把两次修改合并后一块提交了:</p><p>第一次修改 → <code>git add</code> → 第二次修改 → <code>git add</code> → <code>git commit</code></p><p>好，现在，把第二次修改提交了，然后开始小结。</p><h3 id="管理小结" tabindex="-1"><a class="header-anchor" href="#管理小结" aria-hidden="true">#</a> 管理小结</h3><p>现在，您又理解了 Git 是如何跟踪修改的，每次修改，如果不用 <code>git add</code> 到暂存区，那就不会加入到 <code>commit</code> 中。</p><h2 id="撤消对文件的修改" tabindex="-1"><a class="header-anchor" href="#撤消对文件的修改" aria-hidden="true">#</a> 撤消对文件的修改</h2><p>自然，您是不会犯错的。不过现在是凌晨两点，您正在赶一份工作报告，您在 readme.txt 中添加了一行:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cat readme.txt\nGit is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes of files.\nMy stupid boss still prefers SVN.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在您准备提交前，一杯咖啡起了作用，您猛然发现了 <code>&#39;stupid boss&#39;</code> 可能会让您丢掉这个月的奖金!</p><p>既然错误发现得很及时，就可以很容易地纠正它。您可以删掉最后一行，手动把文件恢复到上一个版本的状态。如果用 <code>git status</code> 查看一下:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git status\nOn branch master\nChanges not staged for commit:\n  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)\n  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)\n\n    modified:   readme.txt\n\nno changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>您可以发现，Git 会告诉您，<code>git checkout -- &lt;file&gt;</code> 可以丢弃工作区的修改:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git checkout -- readme.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>命令 <code>git checkout -- readme.txt</code> 意思就是，把 readme.txt 文件在工作区的修改全部撤销，这里有两种情况:</p><p>一种是 readme.txt 自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；</p><p>一种是 readme.txt 已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。</p><p>总之，就是让这个文件回到最近一次 <code>git commit</code> 或 <code>git add</code> 时的状态。</p><p>现在，看看 readme.txt 的文件内容:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cat readme.txt\nGit is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes of files.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>文件内容果然复原了。</p><p><code>git checkout -- file</code> 命令中的 <code>--</code> 很重要，没有 <code>--</code>，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到 <code>git checkout</code> 命令。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请务必记得 <code>git checkout -- &lt;file&gt;</code> 是一个危险的命令。您对那个文件在本地的任何修改都会消失——Git 会用最近提交的版本覆盖掉它。</p><p>除非您确实清楚不想要对那个文件的本地修改了，否则请不要使用这个命令。</p></div><h2 id="取消暂存的文件" tabindex="-1"><a class="header-anchor" href="#取消暂存的文件" aria-hidden="true">#</a> 取消暂存的文件</h2><p>现在假定是凌晨 3 点，您不但写了一些胡话，还 <code>git add</code> 到暂存区了:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cat readme.txt\nGit is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes of files.\nMy stupid boss still prefers SVN.\n\ngit add readme.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>庆幸的是，在 <code>commit</code> 之前，您发现了这个问题。用 <code>git status</code> 查看一下，修改只是添加到了暂存区，还没有提交:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git status\nOn branch master\nChanges to be committed:\n  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)\n\n    modified:   readme.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Git 同样告诉我们，用命令 <code>git reset HEAD &lt;file&gt;</code> 可以把暂存区的修改撤销掉(unstage)，重新放回工作区:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git reset HEAD readme.txt\nUnstaged changes after reset:\nM    readme.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>git reset</code> 命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用 <code>HEAD</code> 时，表示当前的指针(最新的版本)。</p><p>再用 <code>git status</code> 查看一下，现在暂存区是干净的，工作区有修改:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git status\nOn branch master\nChanges not staged for commit:\n  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)\n  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)\n\n    modified:   readme.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>还记得如何丢弃工作区的修改吗?</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git checkout -- readme.txt\n\n$ git status\nOn branch master\nnothing to commit, working tree clean\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>整个世界终于清静了!</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>那么如果您想要丢弃工作区和暂存区全部更改呢? 不要忘了 <code>HEAD</code> 就是当前指针，所以</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git reset --hard HEAD\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>就是丢弃工作区与暂存区的全部文件啦。</p></div><p>现在，假设您不但改错了东西，还从暂存区提交到了版本库，怎么办呢? 还记得版本回退一节吗? 可以回退到上一个版本。不过，这是有条件的，就是您还没有把自己的本地版本库推送到远程。还记得 Git 是分布式版本控制系统吗? 我们后面会讲到远程版本库，一旦您把 <code>stupid boss</code> 提交推送到远程版本库，您就真的惨了……</p><h3 id="撤销小结" tabindex="-1"><a class="header-anchor" href="#撤销小结" aria-hidden="true">#</a> 撤销小结</h3><p>场景 1: 当您改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 <code>git checkout -- file</code>。</p><p>场景 2: 当您不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令 <code>git reset HEAD &lt;file&gt;</code>，就回到了场景 1，第二步按场景 1 操作。</p><p>场景 3: 已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。</p><hr><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h2><h3 id="如何删除文件" tabindex="-1"><a class="header-anchor" href="#如何删除文件" aria-hidden="true">#</a> 如何删除文件</h3><p>在 Git 中，删除也是一个修改操作，我们实战一下，先添加一个新文件 test.txt 到 Git 并且提交:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git add test.txt\n\n$ git commit -m &quot;add test.txt&quot;\n[master b84166e] add test.txt\n 1 file changed, 1 insertion(+)\n create mode 100644 test.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>一般情况下，您通常直接在文件管理器中把没用的文件删了，或者用 <code>rm</code> 命令删了:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rm test.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个时候，Git 知道您删除了文件，因此，工作区和版本库就不一致了，<code>git status</code> 命令会立刻告诉您哪些文件被删除了:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git status\nOn branch master\nChanges not staged for commit:\n  (use &quot;git add/rm &lt;file&gt;...&quot; to update what will be committed)\n  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)\n\n    deleted:    test.txt\n\nno changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>现在您有两个选择，一是确实要从版本库中删除该文件，那就用命令 <code>git rm</code> 删掉，并且 <code>git commit</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ git rm test.txt\nrm &#39;test.txt&#39;\n\n$ git commit -m &quot;remove test.txt&quot;\n[master d46f35e] remove test.txt\n 1 file changed, 1 deletion(-)\n delete mode 100644 test.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>现在，文件就从版本库中被删除了。</p><h3 id="撤销删除" tabindex="-1"><a class="header-anchor" href="#撤销删除" aria-hidden="true">#</a> 撤销删除</h3><p>另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git checkout -- test.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>git checkout</code> 其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。</p><h3 id="删除小结" tabindex="-1"><a class="header-anchor" href="#删除小结" aria-hidden="true">#</a> 删除小结</h3><p>命令 <code>git rm</code> 用于删除一个文件。如果一个文件已经被提交到版本库，那么您永远不用担心误删，但是要小心，您只能恢复文件到最新版本，您会丢失最近一次提交后您修改的内容。</p>',78),t={},i=(0,n(82831).Z)(t,[["render",function(e,s){return a}]])},82831:(e,s)=>{s.Z=(e,s)=>{const n=e.__vccOpts||e;for(const[e,a]of s)n[e]=a;return n}},67889:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-efa0f806",path:"/software/git/change.html",title:"修改管理",lang:"zh-CN",frontmatter:{title:"修改管理",icon:"change",author:"廖雪峰",category:["Git"],tag:["Git","软件"],copyright:"Copyright by 廖雪峰 Edited by Mr.Hope",summary:"管理修改 Git 比其他版本控制系统设计得优秀，因为 Git 跟踪并管理的是修改，而非文件。 您会问，什么是修改? 比如您新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。 为什么说 Git 管理的是修改，而不是文件呢? 我们还是做实验。第一步，对 read",head:[["meta",{property:"og:url",content:"https://mrhope.site/software/git/change.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"修改管理"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-12T05:50:30.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"廖雪峰"}],["meta",{property:"article:tag",content:"Git"}],["meta",{property:"article:tag",content:"软件"}],["meta",{property:"article:modified_time",content:"2022-02-12T05:50:30.000Z"}]]},excerpt:"",headers:[{level:2,title:"管理修改",slug:"管理修改",children:[{level:3,title:"管理小结",slug:"管理小结",children:[]}]},{level:2,title:"撤消对文件的修改",slug:"撤消对文件的修改",children:[]},{level:2,title:"取消暂存的文件",slug:"取消暂存的文件",children:[{level:3,title:"撤销小结",slug:"撤销小结",children:[]}]},{level:2,title:"删除文件",slug:"删除文件",children:[{level:3,title:"如何删除文件",slug:"如何删除文件",children:[]},{level:3,title:"撤销删除",slug:"撤销删除",children:[]},{level:3,title:"删除小结",slug:"删除小结",children:[]}]}],git:{createdTime:1591204114e3,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:10}]},readingTime:{minutes:7.76,words:2329},filePathRelative:"software/git/change.md"}}}]);