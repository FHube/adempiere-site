"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[30377],{27325:(n,s,e)=>{e.r(s),e.d(s,{default:()=>p});var a=e(34086);const r=(0,a._)("p",null,"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。",-1),l=(0,a.uE)('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>由于 Centos 仍然是用 GitV1，本教程使用 Ubuntu 20.04 进行教学。</p></div><h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h2><p>为了能供自动部署到服务器，我们需要让服务器的网站目录成为一个 Git 仓库，这样我们可以在 GitHub Actions 中，通过向服务器对应 GitHub 仓库推送网站内容，使服务器网站获得自动更新。下面是服务器侧的部署配置</p><h3 id="添加账户" tabindex="-1"><a class="header-anchor" href="#添加账户" aria-hidden="true">#</a> 添加账户</h3><p>为了安全，首先需要使用命令创建 Git 用户，为了安全请务必设置密码。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sudo adduser git\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后，查看部署目录所在组，git 用户添加到组中。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usermod -a -G &lt;目录所在组&gt; git\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后将部署目录的权限设置为 <code>775</code>，即允许同组访问。这样 git 就有权限访问部署目录。</p><h3 id="添加权限" tabindex="-1"><a class="header-anchor" href="#添加权限" aria-hidden="true">#</a> 添加权限</h3><p>创建 <code>~/.ssh/</code> 文件夹，生成 <code>authorized_keys</code> 文件，并设置其权限为 <code>600</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir -p ~/.ssh/\n\ntouch ~/.ssh/authorized_keys\n\nchmod 600 ~/.ssh/authorized_keys\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>之后将需要赋予权限的用户公钥依次粘贴至该文件，这样相关用户即可以使用对应私钥，向服务器相关仓库推送代码。</p><h3 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库" aria-hidden="true">#</a> 创建仓库</h3><p>回到 <code>/home/git/</code>，创建所需的文件夹:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cd ~\nmkdir &lt;仓库名&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>进入文件夹，使用</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git init --separate-git-dir=. &lt;部署位置&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这会将 git 库保持在 <code>/home/git/&lt;仓库名&gt;</code> 下，同时将工作区设置到部署文件夹中。</p><p>接下来执行:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git config receive.denyCurrentBranch ignore\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这是由于 Git 默认拒绝外部对当前分支的推送操作，因为这可能会覆盖或变更工作区文件。</p><p>设置完毕后，Git 会允许外部对当前工作区分支进行推送操作。</p><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h2><p>在 GitHub 一侧，我们需要通过 GitHub Action，在新代码推送时自动构建网站，并部署到 GitHub 的 gh-pages 分支。之后，GitHub Action 将该分支的变动推送服务器的对应仓库，完成网站的自动部署。</p><p>之后只需要使用 GitHub Action 通过 Git 推送到 <code>git@&lt;domain&gt;:&lt;部署目录&gt; gh-pages</code> 即可。</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code># 自动部署的名称\nname: GitHub pages deploy\n\n# 自动部署的条件\non:\n  push:\n    branches:\n      - master\n\njobs:\n  # 构建网站并部署到 GitHub Pages\n  deploy-gh-pages:\n    # 运行环境\n    runs-on: ubuntu-latest\n\n    # 步骤\n    steps:\n      # 第一步: 下载源码\n      - name: Checkout\n        # action 配置详见 https://github.com/actions/checkout\n        uses: actions/checkout@v3\n        with:\n          # 如果本项目包含了子模块 (git submodules)，需要将此项设置为 true\n          # submodules: true\n\n          # 这是获取历史 commit 的深度，默认为 1，即只拉取最后一个 commit\n          # 这样可以加快拉取速度\n          #\n          # 如果项目使用 VuePress，为了正确通过 Git 历史提交记录生成页面的最后更新时间\n          # 需要设置为 0 以拉取完整的 git 历史提交\n          # fetch-depth: 0\n\n          # 如果子模块包含私有仓库，需要设置 ssh key 或 token 以保证拥有拉取相应仓库的权限\n          # 您可以将 ssh-key 设置为 github 绑定公钥对应的私钥\n          # 也可以新建一个具有相关仓库访问权限的 github token\n          # token:\n\n      # 缓存 node_modules 以避免重复安装\n      - uses: actions/cache@v3\n        id: node-modules\n        with:\n          # 需要缓存的路径\n          path: node_modules/\n          # 缓存的 key\n          key: ${{ runner.os }}-node-modules-${{ hashFiles(&#39;yarn.lock&#39;) }}\n          # 恢复 key\n          restore-keys: |\n            ${{ runner.os }}-node-modules-\n\n      # 安装依赖\n      - name: Install Deps\n        # 只有没有命中缓存才会执行\n        if: steps.node-modules.outputs.cache-hit != &#39;true&#39;\n        # 严格按照 yarn.lock 安装依赖\n        run: yarn install --frozen-lockfile\n\n      # 构建项目\n      - name: Build\n        # 项目的构建命令\n        run: yarn run build\n\n      # 第四步，部署\n      - name: Deploy\n        # action 配置详见 https://github.com/JamesIves/github-pages-deploy-action\n        uses: JamesIves/github-pages-deploy-action@v4\n        with:\n          # 部署到的分支\n          branch: gh-pages\n          # 需要部署的文件夹\n          folder: dist\n\n  # 部署到服务器\n  deploy-server:\n    runs-on: ubuntu-latest\n    # 确保在部署到 GitHub Pages 之后执行\n    needs: deploy-gh-pages\n    steps:\n      # 检出网站代码\n      - name: Checkout\n        uses: actions/checkout@v3\n        with:\n          # 检出 gh-pages 分支\n          ref: gh-pages\n          # 获取全部的历史提交\n          fetch-depth: 0\n\n      # 配置环境\n      - name: Configuration environment\n        # 写入私钥、配置 Git 用户名，写入服务器地址\n        # 您需要自行将服务器的私钥写入 secrets 的 SSH_PRIVATE_KEY\n        run: |\n          mkdir -p ~/.ssh/\n          echo &quot;${{ secrets.SSH_PRIVATE_KEY }}&quot; &gt; ~/.ssh/id_rsa\n          chmod 600 ~/.ssh/id_rsa\n          ssh-keyscan &lt;your domain&gt; &gt;&gt; ~/.ssh/known_hosts\n          git config --global user.name &#39;Your Name&#39;\n          git config --global user.email &#39;You email&#39;\n\n      # 部署到服务器\n      - name: Deploy\n        # 使用 Git 将网站代码强制推送到远程的网站目录\n        # 并使用 SSH 连接服务器进入网站目录手动切换到最新提交\n        run: |\n          git push -f git@&lt;your domain&gt;:&lt;deploy dir&gt; gh-pages\n          ssh git@&lt;your domain&gt; &quot;cd &lt;deploy dir&gt; &amp;&amp; git reset --hard HEAD&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br></div></div>',27),i={},p=(0,e(82831).Z)(i,[["render",function(n,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a.kq)(" more "),l],64)}]])},82831:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}},1398:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-1637646f",path:"/code/github/deploy.html",title:"自动部署",lang:"zh-CN",frontmatter:{title:"自动部署",icon:"network",category:["GitHub"],tag:["Git","deploy"],summary:"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/github/deploy.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"自动部署"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-03-31T03:20:18.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Git"}],["meta",{property:"article:tag",content:"deploy"}],["meta",{property:"article:modified_time",content:"2022-03-31T03:20:18.000Z"}]]},excerpt:"<p>本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。</p>\n",headers:[{level:2,title:"服务器",slug:"服务器",children:[{level:3,title:"添加账户",slug:"添加账户",children:[]},{level:3,title:"添加权限",slug:"添加权限",children:[]},{level:3,title:"创建仓库",slug:"创建仓库",children:[]}]},{level:2,title:"GitHub Actions",slug:"github-actions",children:[]}],git:{createdTime:1613646054e3,updatedTime:1648696818e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:8}]},readingTime:{minutes:3.83,words:1150},filePathRelative:"code/github/deploy.md"}}}]);