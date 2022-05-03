"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[18510],{81509:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var i=n(34086);const l=(0,i._)("p",null,"Linux 中大量使用脚本语言，而不是 C 语言!",-1),p=(0,i.uE)('<p>说到在 Linux 下的编程，很多人会想到用 C 语言，Linux 的内核、shell、基础命令程序，也的确是用 C 语言编写的，这首先证明了一点，C 语言很强很通用。</p><p>到目前为止，C 语言依然垄断着计算机工业中几乎所有的系统编程，而且也正因为是 C 语言，才使得 Unix 以及后来的 Linux 能够这么广泛地被人们去研究、去改进、去制作自己的分支，以至于我们能在各种硬件平台上使用它们。</p><p>但是细心的人会发现，Linux 启动过程中所涉及的各种程序，很少有 C 语言的痕迹。它们大多是脚本程序。不单单在启动过程中是这样，那些用于安装软件的工具 yum、apt-get，甚至是 configure 和 Makefile 也都是脚本程序。而且您可能还没注意到，那些用于系统管理的工具，如配置 ADSL 拨号上网的工具、配置守护进程的工具等，很多也都是脚本程序。</p><p>大量使用脚本程序，是所有类 Unix 系统不同于其他系统的一个显著特征，催生人们在 Linux 中大量使用脚本来编写程序，并不仅仅是因为脚本对人直观、容易修改这种显著特性所决定的。另外一个主要的原因就是 Linux 所支持的脚本语言种类十分丰富。</p><p>所有类 Unix 系统所必备的 shell，其本身就是一个强大的脚本解释器。所以从 shell 诞生的那一天起，shell 就是那些不懂 C 语言，又必须在 Unix 上编写程序的用户们的首选工具。</p><p>这就给了人们一种新的选择，使用 shell 编程不用去理会让人头晕的指针；shell 程序可以直接利用系统命令来完成一些需要用大量 C 代码的功能；shell 编程不用去理会数据类型，不用考虑烦人的数值和字符数据的转换问题；shell 程序同样提供顺序、选择分支和循环这三种能够构建任意算法的基础设施。因此，shell 很快就能够被非专业用户所接受、掌握，并编写出非常实用的程序。</p><p>随着时间的推移，这些非专业用户想往更高的方向发展，遇到了一些 shell 处理起来会很“蹩脚”的问题，比如分析文本和修改文本(别忘了“万般皆文本”)。这个时候他们会发现 有 awk 和 sed。也只需要写几行脚本就能将这些问题处理得很好。而且它们也跟 shell 配合得天衣无缝。或许这个时候会觉得加入了 awk 和 sed 的 shell 脚本有些难看，不过没关系，还有 Perl 和 TCL。Perl 天生就是为处理文本而存在的，TCL 也不含糊。</p><p>如果觉得这些语言都太老气了，有些过时了，不要紧，还有 Python、Ruby 等这些现代脚本语言，它们除了不能写操作系统内核之外，几乎什么都能干，而且还是面向对象的。</p><p>不管怎样，在 Linux 下能够选择的脚本语言都是极其丰富的。它们最大的特点就是简单、好学且资料丰富。简单就意味着容易维护，好学就容易吸引用户，资料丰富就不会在解决 bug 上出现障碍。即便是专业的程序员，也会因为这些特点而特别偏好脚本语言，导致的一个结果就是脚本程序在 Linux 中的大爆发。</p><p>为什么不选择 C 语言呢?</p><h2 id="c-语言并不是最佳选择" tabindex="-1"><a class="header-anchor" href="#c-语言并不是最佳选择" aria-hidden="true">#</a> C 语言并不是最佳选择</h2><p>C 语言是 Unix 的母语，这是毋庸罝疑的。前面也说过，正是因为有了 C 语言，才使得 Unix 有了今天的成就。但为什么在 Linux 中有这么多程序，甚至是关键程序，不用 C 语言编写呢?</p><p>脚本程序由于是解释执行的，在执行效率上自然是会有很大损失的。并且大家都知道，C 语言所编写的程序又是以效率著称的。但是 C 语言是一种编译型语言，要想让 C 语言的程序能够运行，必须经过编译和链接这两个步骤。</p><p>要知道，能够将由几十个源代码文件构成的 C 语言程序，有条不紊地编译完成并能最终链接成一个可执行程序，本身就是一件费时又费力的事情，如果一旦程序有问题，还必须使用专门的调试工具一点点地去跟踪判断，修正之后再重复那些复杂的编译和链接步骤，这又是一个极需技巧的事情。积累并掌握技巧又是一件费时又费力的事情。</p><p>在早些年，计算机性能不佳的时候，这些付出或许是值得的。但是放到现在，处理器的速度至少快了几千倍，内存大了几千倍，硬盘甚至大了几万倍，而价格却更低了。从经济角度分析，机器的时间成本早己远远低于人的时间成本了。那么 C 语言在机器效率上的优势根本没有任何意义。脚本程序能够给人节省下来的时间成本，则更具经济效益。 要论机器效率，汇编语言比 C 语言要好上几十倍，但是目前还有谁在用汇编语言编程呢?</p><p>C 语言在设计的时候，最主要的一个目标就是能够让程序员自己处理内存管理的问题。这使得 C 语言很强大但又太过于灵活，导致了很多陷阱的出现。稍微一不注意，程序中就会存在难以发觉的 Bug，甚至是严重的安全漏洞。程序员们大多是要以时间或失败为代价去积累经验，才能尽量避免这些问题的发生。而且效率在大多数应用中根本就不是问题，首要的是正确。脚本程序的简单和直观正是正确的起点，C 语言的灵活却是错误的根源。</p><p>但是，C 语言并不是一无是处，也是 Unix 的精华。C 语言作为通用程序设计语言是所向无敌的。C 语言本身也非常简洁和紧凑，资料丰富且容易学习。C 语言之后的少数语言设计，为了不被 C 语言所吞并，不得不进行大的改动，比如引进垃圾回收机制等，以和 C 语言能够在功能上保持足够距离。也正是因为这样，C 语言始终没有消失，只是它的光辉在 Linux 中稍稍地被脚本程序所遮挡了一下。</p><h2 id="脚本语言也有不足" tabindex="-1"><a class="header-anchor" href="#脚本语言也有不足" aria-hidden="true">#</a> 脚本语言也有不足</h2><p>虽然效率并不是脚本程序的缺点，但是种类过于丰富却是一个极大不足。编写一个复杂的应用，往往很难使用一种脚本语言包杆到底，因为脚本语言都有自己适用的场景，为了能够快速有效地完成某个应用，就需扬长避短，利用多种脚本语言混合编程。</p><p>多脚本语言的混合编程是一种知识密集型的编程方法，但不是编码密集型的(这是能够被普遍接受的原因)。为了能够良好地使用这种方法，就要求程序员不仅仅要具备相当数量的多种语言知识，还必须具备能够判断这些语言的适用场景、以及如何将它们有效地组合在一起的经验。</p><p>实际上，混合编程并不是脚本语言的专利，任何编程语言都行，只要您能找准那些语言的特点。比如笔者就曾经使用过 Basic 和 C 进行混合编程，去完成一个 DOS 版万年历程序。为了支持鼠标点击操作，用 C 完成了鼠标中断的处理。余下的部分都用 Basic 来完成。</p><p>在 Linux 中大量应用脚本程序的场景，好多都是这种混合编程的典范。比如 Linux 的启动过程，主程序 init 是用 C 语言写的，具体到启动流程的各个环节则是 shell 脚本程序。</p>',22),a={},r=(0,n(82831).Z)(a,[["render",function(e,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[l,(0,i.kq)(" more "),p],64)}]])},82831:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,i]of t)n[e]=i;return n}},8499:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i={key:"v-56f593aa",path:"/linux/intro/language.html",title:"语言",lang:"zh-CN",frontmatter:{title:"语言",icon:"language",date:"2019-11-16T00:00:00.000Z",category:["Linux"],summary:"Linux 中大量使用脚本语言，而不是 C 语言!\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/intro/language.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"语言"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-11-16T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>Linux 中大量使用脚本语言，而不是 C 语言!</p>\n",headers:[{level:2,title:"C 语言并不是最佳选择",slug:"c-语言并不是最佳选择",children:[]},{level:2,title:"脚本语言也有不足",slug:"脚本语言也有不足",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:7.28,words:2183},filePathRelative:"linux/intro/language.md"}}}]);