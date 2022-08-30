import{_ as e,c as s,o as a,a as n}from"./app.a1e80dd1.js";const D=JSON.parse('{"title":"@obewds/vue-tw-inline","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Tailwind CSS Integration","slug":"tailwind-css-integration","link":"#tailwind-css-integration","children":[]},{"level":2,"title":"Importing","slug":"importing","link":"#importing","children":[{"level":3,"title":"Template syntax","slug":"template-syntax","link":"#template-syntax","children":[]},{"level":3,"title":"Script setup syntax","slug":"script-setup-syntax","link":"#script-setup-syntax","children":[]},{"level":3,"title":"Composition API syntax","slug":"composition-api-syntax","link":"#composition-api-syntax","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[{"level":3,"title":"bgPalette","slug":"bgpalette","link":"#bgpalette","children":[]},{"level":3,"title":"bgColor","slug":"bgcolor","link":"#bgcolor","children":[]},{"level":3,"title":"borderPalette","slug":"borderpalette","link":"#borderpalette","children":[]},{"level":3,"title":"borderColor","slug":"bordercolor","link":"#bordercolor","children":[]},{"level":3,"title":"tag","slug":"tag","link":"#tag","children":[]},{"level":3,"title":"text","slug":"text","link":"#text","children":[]},{"level":3,"title":"textPalette","slug":"textpalette","link":"#textpalette","children":[]},{"level":3,"title":"textColor","slug":"textcolor","link":"#textcolor","children":[]}]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[{"level":3,"title":"#default","slug":"default","link":"#default","children":[]}]},{"level":2,"title":"Uninstall","slug":"uninstall","link":"#uninstall","children":[]}],"relativePath":"index.md"}'),l={name:"index.md"},t=n(`<h1 id="obewds-vue-tw-inline" tabindex="-1">@obewds/vue-tw-inline <a class="header-anchor" href="#obewds-vue-tw-inline" aria-hidden="true">#</a></h1><p>Welcome to the docs page for OBE:WDS&#39;s <code>VueTwInline.vue</code> component for <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a>!</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install @obewds/vue-tw-inline --save-dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><br><h2 id="tailwind-css-integration" tabindex="-1">Tailwind CSS Integration <a class="header-anchor" href="#tailwind-css-integration" aria-hidden="true">#</a></h2><p>Inherited from and prefaced in the <a href="https://obewds.github.io/vue-tw-el/#tailwind-css-integration" target="_blank" rel="noreferrer">@obewds/vue-tw-el</a> docs.</p><p>Detailed in the <a href="https://obewds.github.io/obewds-tw-config" target="_blank" rel="noreferrer">@obewds/obewds-tw-config</a> docs.</p><br><h2 id="importing" tabindex="-1">Importing <a class="header-anchor" href="#importing" aria-hidden="true">#</a></h2><h3 id="template-syntax" tabindex="-1">Template syntax <a class="header-anchor" href="#template-syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VueTwInline</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="script-setup-syntax" tabindex="-1">Script setup syntax <a class="header-anchor" href="#script-setup-syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VueTwInline</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vue-tw-inline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="composition-api-syntax" tabindex="-1">Composition API syntax <a class="header-anchor" href="#composition-api-syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VueTwInline</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vue-tw-inline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> VueTwInline </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><br><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><h3 id="bgpalette" tabindex="-1">bgPalette <a class="header-anchor" href="#bgpalette" aria-hidden="true">#</a></h3><p>Detailed in the <a href="https://obewds.github.io/vue-tw-el/#bgpalette" target="_blank" rel="noreferrer">@obewds/vue-tw-el</a> docs.</p><br><h3 id="bgcolor" tabindex="-1">bgColor <a class="header-anchor" href="#bgcolor" aria-hidden="true">#</a></h3><p>Detailed in the <a href="https://obewds.github.io/vue-tw-el/#bgcolor" target="_blank" rel="noreferrer">@obewds/vue-tw-el</a> docs.</p><br><h3 id="borderpalette" tabindex="-1">borderPalette <a class="header-anchor" href="#borderpalette" aria-hidden="true">#</a></h3><p>Detailed in the <a href="https://obewds.github.io/vue-tw-el/#borderpalette" target="_blank" rel="noreferrer">@obewds/vue-tw-el</a> docs.</p><br><h3 id="bordercolor" tabindex="-1">borderColor <a class="header-anchor" href="#bordercolor" aria-hidden="true">#</a></h3><p>Detailed in the <a href="https://obewds.github.io/vue-tw-el/#bordercolor" target="_blank" rel="noreferrer">@obewds/vue-tw-el</a> docs.</p><br><h3 id="tag" tabindex="-1">tag <a class="header-anchor" href="#tag" aria-hidden="true">#</a></h3><p>\u2705 Type <code>String</code><br> \u2705 Required<br> \u2705 Validates</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VueTwInline</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>The majority of HTML inline level tags passed into the <code>tag</code> prop are valid. However, the component does <strong><em>exclude all</em></strong> of the inline <a href="https://developer.mozilla.org/en-US/docs/Glossary/Empty_element" target="_blank" rel="noreferrer">HTML Empty Elements</a>, as well as excluding <strong><em>each</em></strong> of the following elements due to runtime issues/errors, so the <code>body</code>, <code>head</code>, <code>html</code>, <code>noscript</code>, <code>script</code>, <code>slot</code> and <code>template</code> elements are also excluded and won&#39;t validate!</p></blockquote><br><h3 id="text" tabindex="-1">text <a class="header-anchor" href="#text" aria-hidden="true">#</a></h3><p>Detailed in the <a href="https://obewds.github.io/vue-el/#text" target="_blank" rel="noreferrer">@obewds/vue-el</a> docs.</p><br><h3 id="textpalette" tabindex="-1">textPalette <a class="header-anchor" href="#textpalette" aria-hidden="true">#</a></h3><p>Detailed in the <a href="https://obewds.github.io/vue-tw-el/#textpalette" target="_blank" rel="noreferrer">@obewds/vue-tw-el</a> docs.</p><br><h3 id="textcolor" tabindex="-1">textColor <a class="header-anchor" href="#textcolor" aria-hidden="true">#</a></h3><p>Detailed in the <a href="https://obewds.github.io/vue-tw-el/#textcolor" target="_blank" rel="noreferrer">@obewds/vue-tw-el</a> docs.</p><br><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="default" tabindex="-1">#default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><p>Detailed in the <a href="https://obewds.github.io/vue-el/#default" target="_blank" rel="noreferrer">@obewds/vue-el</a> docs.</p><br><h2 id="uninstall" tabindex="-1">Uninstall <a class="header-anchor" href="#uninstall" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm uninstall @obewds/vue-tw-inline</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,50),o=[t];function r(p,i,c,d,h,b){return a(),s("div",null,o)}const y=e(l,[["render",r]]);export{D as __pageData,y as default};
