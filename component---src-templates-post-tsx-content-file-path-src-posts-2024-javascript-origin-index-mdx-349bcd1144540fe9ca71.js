(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[590],{3150:function(e,t,n){var r=n(9720).w_;e.exports.C=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M12,20c-4.411,0-8-3.589-8-8 s3.567-8,7.953-8C16.391,4,20,7.589,20,12S16.411,20,12,20z"}},{tag:"path",attr:{d:"M11 7H13V14H11zM11 15H13V17H11z"}}]})(e)}},9881:function(e,t,n){var r=n(9720).w_;e.exports.L=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}}]})(e)}},4363:function(e,t,n){var r=n(9720).w_;e.exports.v=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}},550:function(e,t,n){var r=n(9720).w_;e.exports.T=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}},1805:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(1151),l=n(7294);function a(e){const t=Object.assign({p:"p",span:"span",ol:"ol",li:"li",img:"img",h2:"h2",a:"a",strong:"strong",blockquote:"blockquote"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Ryan Dhal created NodeJs in 2009 using the Chrome V8 engine and a C++ library called ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">libuv</code>'}}),". But before a deep dive into NodeJs, you must first understand how Javascript works. Let's start by talking about the chrome V8 engine."),"\n",l.createElement(t.p,null,"V8 is the name of the Javascript engine that powers the Google Chrome browser. This engine takes our Javascript code and executes it while browsing with Chrome. V8 provides the runtime environment in which JavaScript executes. There are several Javascript engines, which you will find for each major internet browser."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"V8 – Open-source JavaScript Engine developed by Google"),"\n",l.createElement(t.li,null,"SpiderMonkey – The JavaScript Engine powering Mozilla Firefox"),"\n",l.createElement(t.li,null,"JavaScriptCore–Open-source JavaScript Engine developed by Apple"),"\n",l.createElement(t.li,null,"Rhino – Open-source JavaScript Engine managed by Mozilla"),"\n",l.createElement(t.li,null,"Chakra– A JavaScript Engine for Microsoft Edge"),"\n",l.createElement(t.li,null,"JerryScript – A JavaScript engine for the Internet of Things (Iot)."),"\n"),"\n",l.createElement(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7n4txhci8ydhq63l33ur.jpg",alt:"Javascript Engine"}),"\n",l.createElement(t.h2,{id:"nowlets-see-whats-actually-happening-inside-these-engine",style:{position:"relative"}},"Now,Let's see what's actually happening inside these engine.",l.createElement(t.a,{href:"#nowlets-see-whats-actually-happening-inside-these-engine","aria-label":"nowlets see whats actually happening inside these engine permalink",className:"gatsby-remark-autolink-header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"When we deliver a Javascript file inside this engine, first it does something called ",l.createElement(t.a,{href:"https://www.geeksforgeeks.org/introduction-of-lexical-analysis/"},"lexical analysis"),", which breaks the code into something called tokens to identify their meaning, so that the engine can know what the code is trying to do."),"\n",l.createElement(t.p,null,"These tokens are formed into what we call an ",l.createElement(t.a,{href:"https://www.twilio.com/blog/abstract-syntax-trees"},"AST")," (abstract syntax tree) and once it is formed, it goes through something called interpreter, profiler, and compiler."),"\n",l.createElement(t.p,null,"The interpreter converts each high-level program statement one by one into machine code, but when it interprets the same lines of code a few times, it gets slower. But when the compiler sees the same code running again and again, it just replaces the function with the exact result that we want to return. And these sorts of edits that compiler do are called optimizations."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Interpreter Or Compiler. Which one is Faster??")),"\n",l.createElement(t.p,null,"Both the interpreter and the compiler have advantages and disadvantages. It takes a little longer for the compiler to start up, but the code will eventually execute quicker. An interpreter, on the other hand, can get up and running quite quickly. However, it does not do any optimizations."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">JIT Compiler</code>'}}),"\nIn order to resolve this issue, Google came up with a solution. They invented a JIT compiler, or just in time compiler, by combining compiler and interpreter, and this is exactly what browsers started doing. Browsers started mixing compilers, specifically this JIT compilers, for just in time compilation to make the engines faster."),"\n"),"\n",l.createElement(t.p,null,'Now, if the same lines of code are executed a few times, the interpreter will tell the compiler, "Hey, here\'s some code for you to optimize," and the compiler will take it on. The compiler either compiles or modifies the code. So, interpreter allows us to run the code right away, and the compiler and profiler allows us to optimize the code.'),"\n",l.createElement(t.p,null,"After going through the interpreter, profiler, and compiler, the entire engine will spit out code that our CPU will understand, which will then be shown on our monitor and that's how Javascript engine actually works."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"In the following part, I'll explain how libuv interacts with NodeJs."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(7084);console.log("3821838164","checking post template query");const s=e=>{const{data:t,children:n}=e;return l.createElement(i.Z,{post:t}," ",n," ")};function c(e){return l.createElement(s,e,l.createElement(o,e))}},7084:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),l=n(4363),a=n(550),o=n(2717),i=n(8288),s=n(9737),c=n(5103);var u=e=>{var t,n,u,d,m,h,p;const{post:g,children:v}=e,f=null!=g&&null!==(t=g.mdx)&&void 0!==t&&null!==(n=t.frontmatter)&&void 0!==n&&n.date?r.createElement(c.Z,{className:"mr-6 mb-6 text-gray-500 text-sm"},r.createElement(l.v,{className:"mr-1"}),null==g||null===(u=g.mdx)||void 0===u?void 0:u.frontmatter.date):null,w=null!=g&&null!==(d=g.mdx)&&void 0!==d&&d.timeToRead?r.createElement(c.Z,null,r.createElement(a.T,{className:"mr-1"}),(0,o.j)(null==g||null===(m=g.mdx)||void 0===m?void 0:m.timeToRead)," min to read"):null;return r.createElement("div",{className:"flex flex-col items-center"},r.createElement("article",{className:"w-full prose prose-sm sm:prose overflow-hidden prose-red",style:{maxWidth:"860px"}},r.createElement(s.Z,null,(null===(h=g.mdx)||void 0===h||null===(p=h.frontmatter)||void 0===p?void 0:p.title)||""),r.createElement(c.Z,null,f,w),r.createElement(i.Z,null,v)))},d=n(7170),m=n(7943);var h=e=>{var t,n,l,a,o,i,s,c,h,p,g;const{post:v,children:f}=e;return console.log(v,"post",f,"children"),r.createElement(d.Z,null,r.createElement(m.ZP,{title:(null===(t=v.mdx)||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.title)||"",titleMode:m.H0,description:(null===(l=v.mdx)||void 0===l||null===(a=l.frontmatter)||void 0===a?void 0:a.summary)||"",image:(null===(o=v.mdx)||void 0===o||null===(i=o.frontmatter)||void 0===i||null===(s=i.cover)||void 0===s||null===(c=s.childImageSharp)||void 0===c||null===(h=c.gatsbyImageData)||void 0===h||null===(p=h.images)||void 0===p||null===(g=p.fallback)||void 0===g?void 0:g.src)||"",type:m.Sp}),r.createElement(u,{post:v},f),r.createElement("div",{className:"flex flex-row justify-center items-center mt-16"},r.createElement("div",{className:"max-w-md"})))}},2091:function(e,t,n){"use strict";n.d(t,{hW:function(){return s}});var r=n(3150),l=n(9881),a=n(7294),o=n(5103);const i="info",s="error",c={[i]:a.createElement(l.L,{size:18}),[s]:a.createElement(r.C,{size:18})},u={[i]:"text-blue-600 bg-blue-100",[s]:"text-red-600 bg-red-100"};t.ZP=e=>{const{children:t,type:n}=e;return t?a.createElement("div",{className:"py-3 px-4 rounded-md "+u[n]},a.createElement(o.Z,null,a.createElement("div",{className:"mr-3"},c[n]),a.createElement("div",{className:"text-sm"},t))):null}},8288:function(e,t,n){"use strict";var r=n(4578),l=n(7294),a=n(2091);let o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hasError:!1},n}(0,r.Z)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}};var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t),this.setState({hasError:!0})},n.render=function(){const{children:e}=this.props,{hasError:t}=this.state;return t?l.createElement(a.ZP,{type:a.hW},"Component has crashed"):e},t}(l.Component);t.Z=o},9737:function(e,t,n){"use strict";var r=n(7294),l=n(4519);t.Z=e=>{const{children:t,className:n=""}=e,a="mb-6 uppercase font-extrabold "+n;return r.createElement(l.Z,{level:l._.h1,className:a},t)}},5103:function(e,t,n){"use strict";var r=n(7294);t.Z=e=>{const{children:t,className:n="",responsive:l=!1,style:a={}}=e;if(!t)return null;const o=l?"flex flex-col sm:flex-row items-center":"flex flex-row items-center";return r.createElement("div",{style:a,className:o+" "+n},t)}},2717:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});const r=e=>{if("number"!=typeof e)return null;return Math.ceil(1*e)||1}},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return a}});var r=n(7294);const l=r.createContext({});function a(e){const t=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-javascript-origin-index-mdx-349bcd1144540fe9ca71.js.map