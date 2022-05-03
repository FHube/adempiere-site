"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[19574],{60299:(e,a,i)=>{i.r(a),i.d(a,{default:()=>s});const n=(0,i(34086).uE)('<h1 id="时间管理" tabindex="-1"><a class="header-anchor" href="#时间管理" aria-hidden="true">#</a> 时间管理</h1><h2 id="date-命令" tabindex="-1"><a class="header-anchor" href="#date-命令" aria-hidden="true">#</a> date 命令</h2><p><code>date</code> 命令用于输出当前时间</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ date\n2016年 03月 14日 星期一 17:32:35 CST\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>date</code> 命令后面用加号(<code>+</code>)指定显示的格式。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ date +%d_%b_%Y\n10_Sep_2018\n\n$ date +%D\n09/10/18\n\n$ date +%F-%T\n2018-09-10-11:09:51\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>完整的格式参数如下。</p><ul><li>%a 星期名的缩写(Sun)</li><li>%A 星期名的全称(Sunday)</li><li>%b 月份的缩写(Jan)</li><li>%B 月份的全称(January)</li><li>%c 日期和时间(Thu Mar 3 23:05:25 2005)</li><li>%C 世纪，就是年份数省略后两位(20)</li><li>%d 一个月的第几天(01)</li><li>%D 日期，等同于<code>%m/%d/%y</code></li><li>%e 一个月的第几天，用空格补零，等同于<code>%_d</code></li><li>%F 完整的日期，等同于<code>%Y-%m-%d</code></li><li>%g last two digits of year of ISO week number (see %G)</li><li>%G year of ISO week number (see %V); normally useful only with %V</li><li>%h 等同于<code>%b</code></li><li>%H 小时(00..23)</li><li>%I 小时(01..12)</li><li>%j day of year (001..366)</li><li>%k hour ( 0..23)</li><li>%l hour ( 1..12)</li><li>%m month (01..12)</li><li>%M minute (00..59)</li><li>%N nanoseconds (000000000..999999999)</li><li>%p locale’s equivalent of either AM or PM; blank if not known</li><li>%P like %p, but lower case</li><li>%r locale’s 12-hour clock time (e.g., 11:11:04 PM)</li><li>%R 24-hour hour and minute; same as %H:%M</li><li>%s seconds since 1970-01-01 00:00:00 UTC</li><li>%S second (00..60)</li><li>%T time; same as %H:%M:%S</li><li>%u day of week (1..7); 1 is Monday</li><li>%U week number of year, with Sunday as first day of week (00..53)</li><li>%V ISO week number, with Monday as first day of week (01..53)</li><li>%w day of week (0..6); 0 is Sunday</li><li>%W week number of year, with Monday as first day of week (00..53)</li><li>%x locale’s date representation (e.g., 12/31/99)</li><li>%X locale’s time representation (e.g., 23:13:48)</li><li>%y last two digits of year (00..99)</li><li>%Y year</li><li>%z +hhmm numeric timezone (e.g., -0400)</li><li>%😒 +hh:mm numeric timezone (e.g., -04:00)</li><li>%:😒 +hh:mm:ss numeric time zone (e.g., -04:00:00)</li><li>%Z alphabetic time zone abbreviation (e.g., EDT)</li></ul><h2 id="cal-命令" tabindex="-1"><a class="header-anchor" href="#cal-命令" aria-hidden="true">#</a> cal 命令</h2><p><code>cal</code> 命令用于显示日历。不带有参数时，显示的是当前月份。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cal\n      三月 2016\n日 一 二 三 四 五 六\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30 31\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',11),l={},s=(0,i(82831).Z)(l,[["render",function(e,a){return n}]])},82831:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,n]of a)i[e]=n;return i}},31076:(e,a,i)=>{i.r(a),i.d(a,{data:()=>n});const n={key:"v-39cb0835",path:"/linux/bash/archives/time.html",title:"时间管理",lang:"zh-CN",frontmatter:{summary:"时间管理 date 命令 date 命令用于输出当前时间 date 命令后面用加号(+)指定显示的格式。 完整的格式参数如下。 %a 星期名的缩写(Sun); %A 星期名的全称(Sunday); %b 月份的缩写(Jan); %B 月份的全称(January); %c 日期和时间(Thu Mar 3 23:05:25 2005); %C 世纪，就是年份数省",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/archives/time.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"时间管理"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-27T06:58:54.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-27T06:58:54.000Z"}]]},excerpt:"",headers:[{level:2,title:"date 命令",slug:"date-命令",children:[]},{level:2,title:"cal 命令",slug:"cal-命令",children:[]}],git:{createdTime:1591204114e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:1.61,words:482},filePathRelative:"linux/bash/archives/time.md"}}}]);