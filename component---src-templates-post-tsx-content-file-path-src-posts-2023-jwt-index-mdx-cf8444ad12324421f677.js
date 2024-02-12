(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[912],{7688:function(e,t,n){var r=n(3584).YH;e.exports.U=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M12,20c-4.411,0-8-3.589-8-8 s3.567-8,7.953-8C16.391,4,20,7.589,20,12S16.411,20,12,20z"}},{tag:"path",attr:{d:"M11 7H13V14H11zM11 15H13V17H11z"}}]})(e)}},2960:function(e,t,n){var r=n(3584).YH;e.exports.o=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}}]})(e)}},440:function(e,t,n){var r=n(3584).YH;e.exports.y=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}},6611:function(e,t,n){var r=n(3584).YH;e.exports.D=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}},4336:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(4552),a=n(1504);function o(e){const t=Object.assign({p:"p",blockquote:"blockquote",strong:"strong",img:"img"},(0,r.MN)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"When I first heard the jwt token name, it gave me a headache. I can still remember how terrified I was that day. I was telling myself what the hell is this new thing that I need to implement in order to verify the user and api."),"\n",a.createElement(t.p,null,"However, after working on a few projects, I feel forced into making this statement"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Jwt token is an excellent approach to validate any user against a database."),"\n"),"\n",a.createElement(t.blockquote,null,"\n"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"What is jwt token??")),"\n",a.createElement(t.p,null,"Jwt is an abbreviation for Json Web Token. A JWT is a mechanism to verify the owner/user. It’s encoded. When a server receives a JWT, it can guarantee the data it contains can be trusted because it’s signed by the source. No middleman can modify a JWT once it’s sent."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Creating JWT token")),"\n",a.createElement(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h0p7aa68qzatt0b4jp1j.png",alt:"Image description"}),"\n",a.createElement(t.p,null,"If you take a look at the above picture closely, you will get an idea how developers generate the jwt token."),"\n",a.createElement(t.p,null,"When a developer creates a JWT token with a method called jwt.sign(), it contains elements such as the user id, JWT_SECRET, and expiration date. JWT_SECRET helps to make a sign token that won't work anywhere unless the secret is given. The expiration date will determine how long this token will be valid.\nAfter successfully generating a jwt token, All you have to do now is transmit the jwt token to the frontend and save it in localstorage or Cookie.\n."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"How does JWT Token work ?")),"\n",a.createElement(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c96pmydcjiy73q12cxpu.png",alt:"Image description"}),"\n",a.createElement(t.p,null,"Let's have a look at how it works now. Let's say you need to access your data from the dashboard, but how will that website validate your identity and prevent a hacker from gaining access to your information?"),"\n",a.createElement(t.p,null,"Simply said, the provided jwt token will be checked against the database.\nIf that website discovers a user id associated with the jwt token, it will grant you access to the dashboard."),"\n",a.createElement(t.p,null,"So, I used the jwt.verify() function, which accepts two parameters: token and JWT SECRET, to check the jwt token. It will allow you to enter if both input values are true."),"\n",a.createElement(t.p,null,"Take a look at the above picture to better understand."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.MN)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=n(1056);console.log("3821838164","checking post template query");const i=e=>{const{data:t,children:n}=e;return a.createElement(c.c,{post:t}," ",n," ")};function s(e){return a.createElement(i,e,a.createElement(l,e))}},1056:function(e,t,n){"use strict";n.d(t,{c:function(){return h}});var r=n(1504),a=n(440),o=n(6611),l=n(3100),c=n(3572),i=n(6248),s=n(240);var u=e=>{var t,n,u,d,m,h,p;const{post:v,children:f}=e,g=null!=v&&null!==(t=v.mdx)&&void 0!==t&&null!==(n=t.frontmatter)&&void 0!==n&&n.date?r.createElement(s.c,{className:"mr-6 mb-6 text-gray-500 text-sm"},r.createElement(a.y,{className:"mr-1"}),null==v||null===(u=v.mdx)||void 0===u?void 0:u.frontmatter.date):null,w=null!=v&&null!==(d=v.mdx)&&void 0!==d&&d.timeToRead?r.createElement(s.c,null,r.createElement(o.D,{className:"mr-1"}),(0,l.s)(null==v||null===(m=v.mdx)||void 0===m?void 0:m.timeToRead)," min to read"):null;return r.createElement("div",{className:"flex flex-col items-center"},r.createElement("article",{className:"w-full prose prose-sm sm:prose overflow-hidden prose-red",style:{maxWidth:"860px"}},r.createElement(i.c,null,(null===(h=v.mdx)||void 0===h||null===(p=h.frontmatter)||void 0===p?void 0:p.title)||""),r.createElement(s.c,null,g,w),r.createElement(c.c,null,f)))},d=n(6536),m=n(3960);var h=e=>{var t,n,a,o,l,c,i,s,h,p,v;const{post:f,children:g}=e;return console.log(f,"post",g,"children"),r.createElement(d.c,null,r.createElement(m.cp,{title:(null===(t=f.mdx)||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.title)||"",titleMode:m.cV,description:(null===(a=f.mdx)||void 0===a||null===(o=a.frontmatter)||void 0===o?void 0:o.summary)||"",image:(null===(l=f.mdx)||void 0===l||null===(c=l.frontmatter)||void 0===c||null===(i=c.cover)||void 0===i||null===(s=i.childImageSharp)||void 0===s||null===(h=s.gatsbyImageData)||void 0===h||null===(p=h.images)||void 0===p||null===(v=p.fallback)||void 0===v?void 0:v.src)||"",type:m.YX}),r.createElement(u,{post:f},g),r.createElement("div",{className:"flex flex-row justify-center items-center mt-16"},r.createElement("div",{className:"max-w-md"})))}},3752:function(e,t,n){"use strict";n.d(t,{sT:function(){return i}});var r=n(7688),a=n(2960),o=n(1504),l=n(240);const c="info",i="error",s={[c]:o.createElement(a.o,{size:18}),[i]:o.createElement(r.U,{size:18})},u={[c]:"text-blue-600 bg-blue-100",[i]:"text-red-600 bg-red-100"};t.cp=e=>{const{children:t,type:n}=e;return t?o.createElement("div",{className:"py-3 px-4 rounded-md "+u[n]},o.createElement(l.c,null,o.createElement("div",{className:"mr-3"},s[n]),o.createElement("div",{className:"text-sm"},t))):null}},3572:function(e,t,n){"use strict";var r=n(2804),a=n(1504),o=n(3752);let l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hasError:!1},n}(0,r.c)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}};var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t),this.setState({hasError:!0})},n.render=function(){const{children:e}=this.props,{hasError:t}=this.state;return t?a.createElement(o.cp,{type:o.sT},"Component has crashed"):e},t}(a.Component);t.c=l},6248:function(e,t,n){"use strict";var r=n(1504),a=n(3900);t.c=e=>{const{children:t,className:n=""}=e,o="mb-6 uppercase font-extrabold "+n;return r.createElement(a.c,{level:a.y.h1,className:o},t)}},240:function(e,t,n){"use strict";var r=n(1504);t.c=e=>{const{children:t,className:n="",responsive:a=!1,style:o={}}=e;if(!t)return null;const l=a?"flex flex-col sm:flex-row items-center":"flex flex-row items-center";return r.createElement("div",{style:o,className:l+" "+n},t)}},3100:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});const r=e=>{if("number"!=typeof e)return null;return Math.ceil(1*e)||1}},4552:function(e,t,n){"use strict";n.d(t,{MN:function(){return o}});var r=n(1504);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2023-jwt-index-mdx-cf8444ad12324421f677.js.map