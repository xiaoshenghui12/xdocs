import{_ as s,o as a,c as n,V as l}from"./chunks/framework.b1ba171e.js";const C=JSON.parse('{"title":"NodeJs","description":"","frontmatter":{},"headers":[],"relativePath":"tool/nodejs.md","filePath":"tool/nodejs.md"}'),o={name:"tool/nodejs.md"},p=l(`<h1 id="nodejs" tabindex="-1">NodeJs <a class="header-anchor" href="#nodejs" aria-label="Permalink to &quot;NodeJs&quot;">​</a></h1><h2 id="nodejs学习路径" tabindex="-1">NodeJs学习路径 <a class="header-anchor" href="#nodejs学习路径" aria-label="Permalink to &quot;NodeJs学习路径&quot;">​</a></h2><ul><li>JavaScript 基础語法 +</li><li>Nodejs内置APl模块(s、path,http等）</li><li>第三方API模块(express.mysql 等）</li></ul><h2 id="fs文件系统模块" tabindex="-1">fs文件系统模块 <a class="header-anchor" href="#fs文件系统模块" aria-label="Permalink to &quot;fs文件系统模块&quot;">​</a></h2><ul><li>文件写入内容</li></ul><blockquote><p><code>fs.writeFile()</code> 示例代码<br> 参数1：文件路径<br> 参数2：写入内容<br> 参数3：编码格式<br> 参数4：回调函数(可携带<code>err参数</code>,错误对象)<br> function writeFile(path, data, options,callback)</p></blockquote><ul><li>读取文件内容</li></ul><blockquote><p><code>fs.readFile()</code> 示例代码<br> 参数1：文件路径<br> 参数2：编码格式<br> 参数3：回调函数(可携带<code>err和data参数</code>,错误对象和数据)<br> function readFile(path, options, callback)</p></blockquote><ul><li>删除文件</li></ul><blockquote><p><code>fs.unlink</code> 示例代码<br> 参数1：文件路径<br> 参数2：回调函数(err)</p></blockquote><ul><li>文件读取失败？</li></ul><blockquote><p>如果<code>xxx.txt</code>位于当前<code>js</code>文件目录之下，使用相对路径会读取失败。<br> 解决: 修改为绝对路径。<br><code>__dirname</code>可以获取当前文件所在目录，所以<code>./</code>可以写作<code>__dirname</code>, 避免读取失败。 <code>__filename</code>可以获取当前文件绝对路径。</p></blockquote><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ul><li>引入</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>写入文件</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">测试1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">写入失败</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件写入成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>读取内容</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件读取失败</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件内容为:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>删除文件</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unlink</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件删除失败</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件删除成功！</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="nodejs模块化" tabindex="-1">Nodejs模块化 <a class="header-anchor" href="#nodejs模块化" aria-label="Permalink to &quot;Nodejs模块化&quot;">​</a></h2><h3 id="导出方式" tabindex="-1">导出方式 <a class="header-anchor" href="#导出方式" aria-label="Permalink to &quot;导出方式&quot;">​</a></h3><blockquote><p>核心: <code>moulde.exports</code> 指向的对象可以暴露出去,<br><code>exports</code>默认和moulde.exports指向一样，<br> exports其实不具有暴露功能，只是借用了正主的功能。</p></blockquote><ul><li>方式一: exports.name = name</li><li>方式二: module.exports = {}</li></ul><h3 id="引入方式" tabindex="-1">引入方式 <a class="header-anchor" href="#引入方式" aria-label="Permalink to &quot;引入方式&quot;">​</a></h3><blockquote><p>核心: require()函数, 将每一个文件看作一个模块，引入导出的对象。<br> 引入查找顺序:</p></blockquote><ul><li>加了文件后缀，以后缀为准。</li><li>未加文件后缀: <ul><li>查找当前目录下文件 <ul><li>1，直接查找文件X</li><li>2，查找X.js文件</li><li>3，查找X.json文件</li><li>4，查找X.node文件</li></ul></li><li>如果当前文件未找到，将X作为一个<strong>目录</strong><ul><li>1，查找X/index.js文件</li><li>2，查找X/index.json文件</li><li>3，查找X/index.node文件</li></ul></li><li>如果没有找到，那么报错：not found</li></ul></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// nodejs 导出 a.js</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name </span><span style="color:#676E95;font-style:italic;">//module.exports == exports</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// nodejs 引入 main.js</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="esmodule模块化" tabindex="-1">ESModule模块化 <a class="header-anchor" href="#esmodule模块化" aria-label="Permalink to &quot;ESModule模块化&quot;">​</a></h2><h3 id="导出方式-1" tabindex="-1">导出方式 <a class="header-anchor" href="#导出方式-1" aria-label="Permalink to &quot;导出方式&quot;">​</a></h3><blockquote><p>核心: exports关键字, ES6增强型写法，不是对象字面量的意思。</p></blockquote><ul><li>方式一: 在语句声明前，直接加exports</li><li>方式二: 将所有要导出的，放到exports的{}中, as起别名</li><li>方式三: default export，默认导出</li></ul><h3 id="引入方式-1" tabindex="-1">引入方式 <a class="header-anchor" href="#引入方式-1" aria-label="Permalink to &quot;引入方式&quot;">​</a></h3><blockquote><p>核心: import 关键字</p></blockquote><ul><li>方式一：import {标识符列表} from &#39;模块&#39;， <ul><li>这里的{}也不是一个对象，里面只是存放导入的标识符列表内容</li></ul></li><li>方式二：导入时，通过as关键字给标识符起别名</li><li>方式三：通过 * 将模块功能放到一个模块功能对象（a module object）上</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ESModule 导出 a.js</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ESModule 引入 main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">nameA</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(nameA)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,37),e=[p];function r(t,c,i,D,y,F){return a(),n("div",null,e)}const d=s(o,[["render",r]]);export{C as __pageData,d as default};