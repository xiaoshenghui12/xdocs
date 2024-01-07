import{_ as s,o as n,c as a,V as l}from"./chunks/framework.3745025a.js";const i=JSON.parse('{"title":"踩坑日记","description":"","frontmatter":{},"headers":[],"relativePath":"blog/puddle.md","filePath":"blog/puddle.md"}'),p={name:"blog/puddle.md"},o=l(`<h1 id="踩坑日记" tabindex="-1">踩坑日记 <a class="header-anchor" href="#踩坑日记" aria-label="Permalink to &quot;踩坑日记&quot;">​</a></h1><blockquote><p>希望把坑坑洼洼填成广阔平原，种满鲜花。</p></blockquote><h2 id="_2024-01-07-this-refs获取dom元素失败" tabindex="-1">2024.01.07 - this.$refs获取dom元素失败？ <a class="header-anchor" href="#_2024-01-07-this-refs获取dom元素失败" aria-label="Permalink to &quot;2024.01.07 - this.$refs获取dom元素失败？&quot;">​</a></h2><p>最近在写uniapp多端app，需要获取页面中的dom元素。<br> 我心想：这不难，不就是<code>this.$refs</code>进行获取吗？<br> 在调试时我想打印组件实例，没想到发现竟然无效。<br> 于是我查看文档发现: <code>非H5端不能用于获取内置组件实例</code>。<br> 随即，我又想起了微信小程序的一个API：<code>SelectorQuery</code>, 便在uniapp官网搜寻了一番。<br> 果然，uniapp中有类似的方法<code>uni.createSelectorQuery()</code><a href="https://uniapp.dcloud.net.cn/api/ui/nodes-info.html#createselectorquery" target="_blank" rel="noreferrer">节点信息</a>。 按照官网的解释，<code>返回一个 SelectorQuery 对象实例</code></p><ul><li>用法：</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createSelectorQuery</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">selectViewport</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scrollOffset</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">竖直滚动位置</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> view </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createSelectorQuery</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">in</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">select</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fields</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">scrollOffset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">得到节点信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">节点的宽为</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">boundingClientRect</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">得到布局位置信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">节点离页面顶部的距离为</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>提示： <ul><li>需要在生命周期 mounted 后进行调用。</li><li>默认需要使用到 selectorQuery.in 方法。</li><li>支付宝小程序不支持in(component)，使用无效果</li></ul></li></ul>`,7),e=[o];function t(r,c,F,y,D,A){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};