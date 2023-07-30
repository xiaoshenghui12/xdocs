import{_ as a,o as n,c as l,a as e,V as s}from"./chunks/framework.b1ba171e.js";const b=JSON.parse('{"title":"git 使用体验。","description":"","frontmatter":{},"headers":[],"relativePath":"other/git的使用体验.md","filePath":"other/git的使用体验.md"}'),o={name:"other/git的使用体验.md"},p=s(`<h1 id="git-使用体验。" tabindex="-1">git 使用体验。 <a class="header-anchor" href="#git-使用体验。" aria-label="Permalink to &quot;git 使用体验。&quot;">​</a></h1><blockquote><p>需求：1.提交一个html文件到gitee的仓库（&quot;测试库-xiao&quot;）里面。</p></blockquote><h2 id="_1-首次提交" tabindex="-1">1.首次提交： <a class="header-anchor" href="#_1-首次提交" aria-label="Permalink to &quot;1.首次提交：&quot;">​</a></h2><p>首次提交，先输入github/gitlab等的用户名和邮箱</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">用户名</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 例如我的：xiao-shenghui</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">邮箱</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 例如我的：1653618993@qq.com</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 查看邮箱和用户名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-进入项目路径-初始化仓库。" tabindex="-1">2.进入项目路径,初始化仓库。 <a class="header-anchor" href="#_2-进入项目路径-初始化仓库。" aria-label="Permalink to &quot;2.进入项目路径,初始化仓库。&quot;">​</a></h2><p>鼠标右键，git-bush-here.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>会新建一个.git 文件。</p><h2 id="_3-查看状态" tabindex="-1">3.查看状态 <a class="header-anchor" href="#_3-查看状态" aria-label="Permalink to &quot;3.查看状态&quot;">​</a></h2><blockquote><p>查看与上次提交相比，目前是否有修改文件</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><img src="https://img-blog.csdnimg.cn/img_convert/e57b26e0495a11945e597c3850b6b000.png">`,13),t=s(`<h2 id="_4-将修改后的文件存入暂存区" tabindex="-1">4.将修改后的文件存入暂存区 <a class="header-anchor" href="#_4-将修改后的文件存入暂存区" aria-label="Permalink to &quot;4.将修改后的文件存入暂存区&quot;">​</a></h2><blockquote><p>对于出行红色的文件，需要全部加入到暂存区域</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># (注意空格后面有一个点)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时可以再次用 git status 查看有没有红色的。</p><h2 id="_5-提交修改代码" tabindex="-1">5.提交修改代码 <a class="header-anchor" href="#_5-提交修改代码" aria-label="Permalink to &quot;5.提交修改代码&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">注释内容</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-如何修改最近一次的commit信息" tabindex="-1">git 如何修改最近一次的commit信息 <a class="header-anchor" href="#git-如何修改最近一次的commit信息" aria-label="Permalink to &quot;git 如何修改最近一次的commit信息&quot;">​</a></h3><ol><li>git commit --amend</li><li>进入vim操作界面之后, 点击字母键 i 然后进入INSERT模式，然后对commit信息进行修改，然后ESC 然后 :wq 保存退出</li><li>然后执行 git log 会发现最近的一次commit信息被修改成功了</li><li>最后按Q可以退出浏览模式。</li></ol><h2 id="_6-链接已有仓库" tabindex="-1">6.链接已有仓库 <a class="header-anchor" href="#_6-链接已有仓库" aria-label="Permalink to &quot;6.链接已有仓库&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">仓库链接.git</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 注意 origin 是变量名，自定义的，默认的远程仓库名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 例如我的测试库：https://gitee.com/xiaoshenghui/test-library-xiao.git </span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/xiaoshenghui/test-library-xiao.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_6-拉取远程与本地合并" tabindex="-1">6.拉取远程与本地合并 <a class="header-anchor" href="#_6-拉取远程与本地合并" aria-label="Permalink to &quot;6.拉取远程与本地合并&quot;">​</a></h2><blockquote><p>提交之后，需要先把远程代码拉取过来与本地合并，这样本地文件就是最新的了。</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 分支名一般为master，也可以手动创建分支名，git checkout -b &quot;分支名&quot;（&quot;#master_name&quot;或者&quot;master_name&quot;, 带引号）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_7-推送本地到远程合并" tabindex="-1">7.推送本地到远程合并 <a class="header-anchor" href="#_7-推送本地到远程合并" aria-label="Permalink to &quot;7.推送本地到远程合并&quot;">​</a></h2><blockquote><p>将本地的分支版本,上传到远程并合并</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 分支名一般为master，也可以手动创建分支名 git checkout -b $master_name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_8-链接仓库报错" tabindex="-1">8. 链接仓库报错？ <a class="header-anchor" href="#_8-链接仓库报错" aria-label="Permalink to &quot;8. 链接仓库报错？&quot;">​</a></h2><blockquote><p>当已经链接了仓库，如何更换仓库？</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 删除已经链接的仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/xiaoshenghui/xxx.git</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 链接新的仓库</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>如何同时连接多个仓库？</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/xxx</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 链接gitee仓库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 换一个仓库变量名即可</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 同时链接github仓库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 同理，push或者pull的时候，也要更换仓库名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 推送到github</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 推送到gitee</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>如何查看当前链接的远程仓库？</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 查看当前链接的仓库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 打印如下结果</span></span>
<span class="line"><span style="color:#FFCB6B;">origin</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">https://gitee.com/xiao-shenghui/code-road-blog-xiao.git</span><span style="color:#A6ACCD;"> (fetch)</span></span>
<span class="line"><span style="color:#FFCB6B;">origin</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">https://gitee.com/xiao-shenghui/code-road-blog-xiao.git</span><span style="color:#A6ACCD;"> (push)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="分支操作-不常用" tabindex="-1">分支操作(不常用) <a class="header-anchor" href="#分支操作-不常用" aria-label="Permalink to &quot;分支操作(不常用)&quot;">​</a></h2><ul><li>git branch =&gt; 查看分支</li><li>git branch 分支 =&gt; 创建分支</li><li>git checkout 分支 =&gt; 切换分支</li><li>git merge 分支 =&gt; 合并分支，需要切换到主分支上才能合并其它的分支</li><li>git switch -c 分支名 创建并切换分支</li><li>git branch -D 分支名 删除分支</li></ul>`,25);function r(i,c,C,y,u,d){return n(),l("div",null,[p,e(" 绿色的是已经在暂存区的修改文件，红色的是没有存入暂存区的修改文件。 **提示**：如果查看到红色的，需要先暂存才能提交。 "),t])}const m=a(o,[["render",r]]);export{b as __pageData,m as default};
