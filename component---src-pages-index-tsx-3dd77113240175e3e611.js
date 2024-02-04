(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{3150:function(e,t,n){var r=n(9720).w_;e.exports.C=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M12,20c-4.411,0-8-3.589-8-8 s3.567-8,7.953-8C16.391,4,20,7.589,20,12S16.411,20,12,20z"}},{tag:"path",attr:{d:"M11 7H13V14H11zM11 15H13V17H11z"}}]})(e)}},9881:function(e,t,n){var r=n(9720).w_;e.exports.L=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}}]})(e)}},6699:function(e,t,n){var r=n(9720).w_;e.exports.g=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(e)}},6159:function(e,t,n){var r=n(9720).w_;e.exports.i=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}},2091:function(e,t,n){"use strict";n.d(t,{hW:function(){return c}});var r=n(3150),a=n(9881),l=n(7294),s=n(5103);const o="info",c="error",i={[o]:l.createElement(a.L,{size:18}),[c]:l.createElement(r.C,{size:18})},m={[o]:"text-blue-600 bg-blue-100",[c]:"text-red-600 bg-red-100"};t.ZP=e=>{const{children:t,type:n}=e;return t?l.createElement("div",{className:"py-3 px-4 rounded-md "+m[n]},l.createElement(s.Z,null,l.createElement("div",{className:"mr-3"},i[n]),l.createElement("div",{className:"text-sm"},t))):null}},8288:function(e,t,n){"use strict";var r=n(4578),a=n(7294),l=n(2091);let s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hasError:!1},n}(0,r.Z)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}};var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t),this.setState({hasError:!0})},n.render=function(){const{children:e}=this.props,{hasError:t}=this.state;return t?a.createElement(l.ZP,{type:l.hW},"Component has crashed"):e},t}(a.Component);t.Z=s},3400:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(2059);var l=e=>{const{tag:t}=e;return r.createElement("span",{key:t.name,className:"inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0"},t.name)};var s=e=>{const{tags:t,className:n="",numToShow:s=1/0}=e;if(!t)return null;const o="  "+n;return r.createElement("div",{className:o},r.createElement(a.Z,{items:t,toHide:(e,t)=>t>=s,onRender:e=>r.createElement(l,{key:e.name,tag:e}),itemClassName:"mr-2 mb-2"}))}},8757:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(7294),a=n(6699),l=n(6945);var s=e=>{const{avatar:t,className:n}=e;return r.createElement("div",{className:n||""},r.createElement(l.Z,{image:t}))},o=n(7195),c=n(1705);var i=()=>{const e={url:o._.projects.path+"/"},t={url:o._.blog.path+"/"},n=r.createElement("span",{className:"inline-block"},r.createElement(c.Z,{link:e,className:"underline font-semibold"},"projects")),a=r.createElement("span",{className:"inline-block"},r.createElement(c.Z,{link:t,className:"underline font-semibold"},"articles"));return r.createElement("p",{className:"font-light"},"Hi there! I'm Awal Hossain, a seasoned Full Stack Web Developer with in-depth Proficiency in crafting exceptional web solutions. Most of my work & open-source ",n," are focused on one thing – ",r.createElement("i",null,"to learn in depth & help people learn"),". I thrive in dynamic environments, readily embracing new challenges, and constantly expanding my knowledge. Staying ahead of industry trends is my commitment. I also write ",a," about life, web-development and machine learning.")},m=n(4519),u=n(6159);var d=e=>{const{location:t}=e;return r.createElement("div",{className:"flex flex-row items-center font-light"},r.createElement(u.i,{className:"mr-1 w-4 h-4"}),r.createElement("div",null,t.name))},f=n(3400),v=n(8629);var p=e=>{const{profile:t}=e,n=t.avatar?r.createElement("div",{className:"mr-0 mb-6 sm:mr-6 sm:mb-0 text-center"},r.createElement(s,{avatar:t.avatar,className:"w-64 h-64 rounded-full overflow-hidden"})):null,l=[(null==t?void 0:t.firstName)||"",(null==t?void 0:t.lastName)||""].join(" "),o=l?r.createElement("div",{className:"flex flex-row text-center"},r.createElement(m.Z,{level:m._.h1,className:"mb-1 uppercase font-extrabold"},l)):null,c=null!=t&&t.position?r.createElement("div",{className:"mb-3 font-light text-gray-500 flex flex-row items-center"},r.createElement(a.g,{className:"mr-1 w-4 h-4"}),t.position):null,u=((null==t?void 0:t.summary)||[]).map((e=>r.createElement("div",{key:e,className:"text-center sm:text-left mb-0"},e))),p=(null!=t&&t.summary,null!=t&&t.location?r.createElement("div",{className:"mb-3 text-gray-500"},r.createElement(d,{location:t.location})):null),h=null!=t&&t.tags?r.createElement("div",{className:"mb-4"},r.createElement(f.Z,{tags:t.tags})):null,E=r.createElement(v.Z,{links:null==t?void 0:t.socialLinks});return r.createElement("div",null,r.createElement("div",{className:"flex justify-center flex-col items-center sm:flex-row mb-12"},n,r.createElement("div",{className:"flex flex-col justify-center items-center sm:items-start"},o,c,p,h,E)),r.createElement("div",null,r.createElement(i,null)))},h=n(7170),E=n(8288),g=n(7943);var x=e=>{const{profile:t}=e,n=t.summary&&t.summary.length?t.summary[0]:"";return r.createElement(h.Z,null,r.createElement(g.ZP,{title:t.position+". "+n,description:t.firstName+" "+t.lastName+". "+t.position+". "+n}),r.createElement(E.Z,null,r.createElement(p,{profile:t})))},N=n(2996);var y=()=>r.createElement(x,{profile:N.N})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3dd77113240175e3e611.js.map