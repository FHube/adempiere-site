"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[49738],{38310:(e,n,s)=>{s.r(n),s.d(n,{default:()=>v});var a=s(34086);const l=(0,a._)("p",null,[(0,a.Uk)("该操作将检出您的存储库 "),(0,a._)("code",null,"$GITHUB_WORKSPACE"),(0,a.Uk)("，使您的工作流可以访问它。")],-1),r=(0,a.uE)('<p>默认情况下，对于触发工作流的 ref / SHA，为了速度仅提取一次提交。如需获取所有分支和标签的所有历史记录，需要设置设置 <code>fetch-depth: 0</code>。</p><p>身份验证令牌保留在本地 Git 配置中。这使您的脚本可以运行经过身份验证的 Git 命令。在工作后清理期间将删除令牌。</p><p>设置 <code>persist-credentials: false</code> 取消保留。</p><h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数</h2><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3><p>需要检出的 ref，即可以填入特定分支、commitID 或 tag。默认为触发当前工作流的 ref。</p><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h3>',7),t=(0,a.Uk)("个人访问令牌，又称 Personal access token (PAT)，用于配置机器 Git 配置，以运行需要身份验证的 Git 命令，详见 "),i=(0,a.Uk)("GitHub Token"),c=(0,a.Uk)("。"),p=(0,a._)("div",null,[(0,a._)("p",null,[(0,a.Uk)("默认为工作流提供的 "),(0,a._)("code",{"v-pre":""},"${{ github.token }}")])],-1),o=(0,a.uE)('<h3 id="fetch-depth" tabindex="-1"><a class="header-anchor" href="#fetch-depth" aria-hidden="true">#</a> fetch-depth</h3><p>要获取的提交数。 <code>0</code> 表示所有分支和标签的所有历史记录。</p><p>默认为 <code>1</code></p><h3 id="submodules" tabindex="-1"><a class="header-anchor" href="#submodules" aria-hidden="true">#</a> submodules</h3><p>是否检出子模块。<code>true</code> 检出子模块 <code>recursive</code> 会递归检出子模块。</p><p>默认为 <code>false</code></p><h2 id="其他参数" tabindex="-1"><a class="header-anchor" href="#其他参数" aria-hidden="true">#</a> 其他参数</h2><h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> repository</h3><p>带有作者的仓库名，如 <code>Hope-Studio/innenu-app</code>，默认为当前仓库。</p><h3 id="persist-credentials" tabindex="-1"><a class="header-anchor" href="#persist-credentials" aria-hidden="true">#</a> persist-credentials</h3><p>是否将 token 等信息用于本地的 Git 配置，以便后续 Git 命令可以访问。</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3><p><code>$GITHUB_WORKSPACE</code> 下用于放置存储库的相对路径</p><p>默认为 <code>./</code></p><h3 id="ssh-key" tabindex="-1"><a class="header-anchor" href="#ssh-key" aria-hidden="true">#</a> ssh-key</h3><p>用于获取仓库的 SSH 私钥，用于配置机器 Git 配置，以运行需要身份验证的 Git 命令。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>默认的 token 有权限拉取工作流所在的仓库。</p><p>如果仓库包含了存放于其他代码托管商或私有的 submodules，或是的仓库，可能需要设置上述两选项之一，才能拉取对应 submodule。</p></div><h3 id="ssh-known-hosts" tabindex="-1"><a class="header-anchor" href="#ssh-known-hosts" aria-hidden="true">#</a> ssh-known-hosts</h3><p>除了用户和全局主机密钥数据库外的已知主机。可以使用 <code>ssh-keyscan</code> 获得主机的公共 SSH 密钥。 例如，<code>ssh-keyscan github.com</code>。 github.com 的公钥总是隐式添加的。</p><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>当您需要获取其他代码托管商的仓库时，需要设置此选项</p></div><h3 id="ssh-strict" tabindex="-1"><a class="header-anchor" href="#ssh-strict" aria-hidden="true">#</a> ssh-strict</h3><p>是否进行严格的 ssh 校验，默认为 <code>true</code>，即不检查 IP，而是检查 Host 给出的密钥指纹是否匹配。</p><h3 id="clean" tabindex="-1"><a class="header-anchor" href="#clean" aria-hidden="true">#</a> clean</h3><p>是否在拉取代码前执行 <code>git clean -ffdx &amp;&amp; git reset --hard HEAD</code>。</p><p>默认为 <code>true</code></p><h3 id="lfs" tabindex="-1"><a class="header-anchor" href="#lfs" aria-hidden="true">#</a> lfs</h3><p>是否下载 Git-LFS 文件。</p><p>默认为 <code>false</code></p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><ul><li><p>获取所有标签与历史:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>- uses: actions/checkout@v3\n  with:\n    fetch-depth: 0\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>检出特定分支</p></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>- uses: actions/checkout@v3\n  with:\n    ref: my-branch\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>检出 <code>HEAD^</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>- uses: actions/checkout@v3\n  with:\n    fetch-depth: 2\n- run: git checkout HEAD^\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>并列检出多个 repo</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>- name: Checkout\n  uses: actions/checkout@v3\n  with:\n    path: main\n\n- name: Checkout tools repo\n  uses: actions/checkout@v3\n  with:\n    repository: my-org/my-tools\n    path: my-tools\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>嵌套检出多个 repo</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>- name: Checkout\n  uses: actions/checkout@v3\n\n- name: Checkout tools repo\n  uses: actions/checkout@v3\n  with:\n    repository: my-org/my-tools\n    path: my-tools\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>检出多个私有 repo</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>- name: Checkout\n  uses: actions/checkout@v3\n  with:\n    path: main\n\n- name: Checkout private tools\n  uses: actions/checkout@v3\n  with:\n    repository: my-org/my-private-tools\n    token: ${{ secrets.GitHub_PAT }} # `GitHub_PAT` is a secret that contains your PAT\n    path: my-tools\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul>',32),u=(0,a._)("div",{class:"custom-container info"},[(0,a._)("p",{class:"custom-container-title"},"相关信息"),(0,a._)("div",null,[(0,a._)("p",null,[(0,a._)("code",{"v-pre":""},"${{ github.token }}"),(0,a.Uk)(" 仅限于当前存储库，因此，如果要签出其他私有存储库，则需要提供自己的 PAT。")])])],-1),d=(0,a.uE)('<ul><li><p>检出 PR HEAD commit 而不是 merge commit</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>- uses: actions/checkout@v3\n  with:\n    ref: ${{ github.event.pull_request.head.sha }}\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>当关闭 PR 时将其检出</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>on:\n  pull_request:\n    branches: [main]\n    types: [opened, synchronize, closed]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>使用内置 token 进行提交</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>on: push\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: |\n          date &gt; generated.txt\n          git config user.name github-actions\n          git config user.email github-actions@github.com\n          git add .\n          git commit -m &quot;generated&quot;\n          git push\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><h2 id="地址" tabindex="-1"><a class="header-anchor" href="#地址" aria-hidden="true">#</a> 地址</h2>',2),h=(0,a.Uk)("地址: "),m={href:"https://github.com/actions/checkout",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("https://github.com/actions/checkout"),g={},v=(0,s(82831).Z)(g,[["render",function(e,n){const s=(0,a.up)("RouterLink"),g=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a.kq)(" more "),r,(0,a._)("p",null,[t,(0,a.Wm)(s,{to:"/code/github/token.html"},{default:(0,a.w5)((()=>[i])),_:1}),c]),p,o,u,d,(0,a._)("p",null,[h,(0,a._)("a",m,[b,(0,a.Wm)(g)])])],64)}]])},82831:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},38405:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-74f1f99e",path:"/code/github/actions/checkout.html",title:"checkout",lang:"zh-CN",frontmatter:{title:"checkout",date:"2021-02-18T00:00:00.000Z",category:["GitHub"],tag:["action","workflow"],summary:"该操作将检出您的存储库 $GITHUB_WORKSPACE，使您的工作流可以访问它。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/github/actions/checkout.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"checkout"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-03-31T03:20:18.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"action"}],["meta",{property:"article:tag",content:"workflow"}],["meta",{property:"article:published_time",content:"2021-02-18T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-03-31T03:20:18.000Z"}]]},excerpt:"<p>该操作将检出您的存储库 <code v-pre>$GITHUB_WORKSPACE</code>，使您的工作流可以访问它。</p>\n",headers:[{level:2,title:"常用参数",slug:"常用参数",children:[{level:3,title:"ref",slug:"ref",children:[]},{level:3,title:"token",slug:"token",children:[]},{level:3,title:"fetch-depth",slug:"fetch-depth",children:[]},{level:3,title:"submodules",slug:"submodules",children:[]}]},{level:2,title:"其他参数",slug:"其他参数",children:[{level:3,title:"repository",slug:"repository",children:[]},{level:3,title:"persist-credentials",slug:"persist-credentials",children:[]},{level:3,title:"path",slug:"path",children:[]},{level:3,title:"ssh-key",slug:"ssh-key",children:[]},{level:3,title:"ssh-known-hosts",slug:"ssh-known-hosts",children:[]},{level:3,title:"ssh-strict",slug:"ssh-strict",children:[]},{level:3,title:"clean",slug:"clean",children:[]},{level:3,title:"lfs",slug:"lfs",children:[]}]},{level:2,title:"例子",slug:"例子",children:[]},{level:2,title:"地址",slug:"地址",children:[]}],git:{createdTime:1613646054e3,updatedTime:1648696818e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:5}]},readingTime:{minutes:3,words:899},filePathRelative:"code/github/actions/checkout.md"}}}]);