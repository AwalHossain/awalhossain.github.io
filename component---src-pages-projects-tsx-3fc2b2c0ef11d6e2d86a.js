(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[644],{2960:function(e,t,a){var r=a(3584).YH;e.exports.o=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}}]})(e)}},440:function(e,t,a){var r=a(3584).YH;e.exports.y=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}},2268:function(e,t,a){var r=a(3584).YH;e.exports.u=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"}}]})(e)}},6620:function(e,t,a){"use strict";var r=a(1504);t.c=e=>{const{children:t,className:a=""}=e;if(!t)return null;const n="bg-gray-200 px-1 rounded text-xs "+a;return r.createElement("div",{className:n},t)}},9928:function(e,t,a){"use strict";var r=a(1504),n=a(4804);t.c=e=>{const{className:t,hoverClassName:a="",children:o,...i}=e,s="hover:bg-black hover:text-white "+a,l=t+" bg-white py-1 px-2 rounded shadow-sm border border-solid border-gray-300";return r.createElement(n.c,Object.assign({},i,{className:l,hoverClassName:s}),o)}},4340:function(e,t,a){"use strict";a.d(t,{ui:function(){return n}});var r=a(1504);const n="row";t.cp=e=>{const{children:t,mode:a}=e;if(!t)return null;const o="transition duration-200 ease-in-out shadow-lg rounded-md overflow-hidden bg-gray-100 flex flex-col",i=a===n?o+" sm:flex-row items-stretch":""+o;return r.createElement("div",{className:i},t)}},8576:function(e,t,a){"use strict";a.d(t,{c5:function(){return n}});var r=a(1504);const n="row",o="column";t.cp=e=>{const{children:t,className:a="",mode:i=o}=e;if(!t)return null;const s="p-6 "+a,l=i===n?s+" sm:w-3/5 lg:w-3/4":""+s;return r.createElement("div",{className:l,style:{flex:1}},t)}},5540:function(e,t,a){"use strict";a.d(t,{QJ:function(){return o}});var r=a(1504),n=a(4804);const o="row";t.cp=e=>{const{children:t,className:a,mode:i,link:s}=e,l=s&&s.url?"cursor-pointer":"";if(!t)return null;const c="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block "+a+" "+l,d=i===o?c+" sm:h-auto sm:w-2/5 lg:w-1/4":""+c,u=s&&s.url?r.createElement(n.c,{link:s,formatted:!1},t):t;return r.createElement("div",{className:d},u)}},8184:function(e,t,a){"use strict";var r=a(1504),n=a(3900),o=a(4804);t.c=e=>{const{children:t,link:a}=e;if(!t)return null;const i=r.createElement(n.c,{level:n.y.h3},t),s=a?r.createElement(o.c,{link:a},i):null;return r.createElement("div",{className:"mb-3"},s||i)}},4496:function(e,t,a){"use strict";a.d(t,{ag:function(){return n}});var r=a(1504);const n="list",o="grid";t.cp=e=>{const{children:t,mode:a=o}=e;if(!t)return null;const n="grid gap-12 grid-cols-1",i=a===o?n+" sm:grid-cols-2 lg:grid-cols-3":""+n;return r.createElement("div",{className:i},t)}},7548:function(e,t,a){"use strict";var r=a(440),n=a(1504),o=a(240);const i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=(e,t)=>""+i[e.getMonth()]+(t?" "+e.getDate()+", ":" ")+e.getFullYear();t.c=e=>{const{startDate:t,endDate:a,className:i="",withDay:l=!1}=e;if(!t&&!a)return null;const c=t?s(new Date(t),l):null,d=t&&a?" → ":null,u=a?s(new Date(a),l):null;return n.createElement("div",{className:i},n.createElement(o.c,null,n.createElement(r.y,{className:"mr-1"}),n.createElement("div",null,c,d,u)))}},6248:function(e,t,a){"use strict";var r=a(1504),n=a(3900);t.c=e=>{const{children:t,className:a=""}=e,o="mb-6 uppercase font-extrabold "+a;return r.createElement(n.c,{level:n.y.h1,className:o},t)}},7948:function(e,t,a){"use strict";a.d(t,{c:function(){return i}});var r=a(1504),n=a(4640);var o=e=>{const{tag:t}=e;return r.createElement("span",{key:t.name,className:"inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0"},t.name)};var i=e=>{const{tags:t,className:a="",numToShow:i=1/0}=e;if(!t)return null;const s="  "+a;return r.createElement("div",{className:s},r.createElement(n.c,{items:t,toHide:(e,t)=>t>=i,onRender:e=>r.createElement(o,{key:e.name,tag:e}),itemClassName:"mr-2 mb-2"}))}},4324:function(e,t,a){"use strict";a.d(t,{U:function(){return r}});const r={"Reely-A-MERN-Video-Streaming-App":{id:"Reely-A-MERN-Video-Streaming-App",name:"🎥 Reely- A MERN Video Streaming App",server:{url:"https://github.com/awalHossain/video_streaming_service_server/"},client:{url:"https://github.com/AwalHossain/video_streaming_client"},demoURL:{url:"https://reely.tech"},cover:{srcPath:"projects/video-streaming/reely.png"},startDate:"2023-04-25",endDate:"2024-01-25",summary:["MERN Video Streaming is a cutting-edge, open-source platform for video streaming"],tags:[{name:"JavaScript"},{name:"TypeScript"},{name:"Redux Toolkit"},{name:"NodeJs"},{name:"ExpressJs"},{name:"ExpressJs"},{name:"Socket.io"},{name:"BullMQ"},{name:"MongoDB"},{name:"Redis"}],gitHubRepo:{owner:"AwalHossain",repo:"video_streaming_service_server"},details:[{title:"Home Page",image:{srcPath:"projects/video-streaming/cover.png"},date:"2024-01-30",link:{url:"#",caption:"video list"}},{title:"Video upload and processing",image:{srcPath:"projects/video-streaming/up.png"},date:"2024-01-30",link:{url:"https://news.ycombinator.com/front?day=2021-04-16",caption:"Hacker News archive"}},{title:"Video streaming",image:{srcPath:"projects/video-streaming/pl.png"},date:"2021-01-30",link:{url:"https://www.producthunt.com/posts/js-image-carver",caption:"Product page"}}],features:[["Users can upload videos and optionally, images to the server. The progress of video processing is displayed in real-time","Users can browse and play videos, similar to YouTube. Each video displays its view count, duration, and upload time","Users can like and unlike videos, enhancing engagement and interaction","A tag system is implemented to display related videos when a user plays a video","Users can manage their own videos, including updating and deleting.","The frontend is optimized with React.memo, useMemo, and useCallback for efficient rendering"],["Real-time video processing with notifications upon completion","Three-tier backend services for API, video conversion, and HTTP serving","Converts any format video into MP4 and applies a watermark if an image is provided","Create thumbnail from the video","Transforms the video into adaptive bitrate HLS format (480p & 1080p) for optimal streaming quality.","Upon successful conversion, the video is uploaded to a CDN bucket storage. This allows users to stream videos seamlessly from anywhere in the world.","BullMQ manages the job queue, passing one job to the next upon completion"]],overview:"MERN Video Streaming is a cutting-edge, open-source platform for video streaming, offering a comprehensive, full-stack solution utilizing the latest MERN stack technologies. With MERN Video Streaming, users can easily upload, manage, and stream videos on demand, providing a seamless experience. This project features a video processing capability that provides real-time notifications upon completion.The backend is comprised of three services, utilizing Redis messaging for communication. These include an API server, a video conversion service, and an HTTP server serving HLS video files. On the client side, the project uses create-react-app and MUI library, along with socket.io-client and React Context.",featured:{isFeatured:!0,priority:1,title:"Reely MERN Video Streaming App",cover:{srcPath:"projects/video-streaming/reely.png"},summary:["MERN Video Streaming is a cutting-edge, open-source platform for video streaming"],id:"Reely-A-MERN-Video-Streaming-App"},youtubeURL:"https://youtu.be/RCRwublmR9E"},"Bookish-A-Book-Management-Site":{id:"Bookish-A-Book-Management-Site",name:"📚 Bookish- A Book Management Site",server:{url:"https://github.com/AwalHossain/Bookish"},client:{url:"https://github.com/AwalHossain/Bookish"},demoURL:{url:"https://bookishly.netlify.app/"},cover:{srcPath:"projects/bookish/book.png"},startDate:"2023-09-18",endDate:"2023-09-27",summary:["Bookish is a web application that allows users to discover, review, and manage books"],tags:[{name:"ReactJS"},{name:"NodeJs"},{name:"ExpressJs"},{name:"MongoDB"},{name:"RTK"},{name:"Tailwind CSS"}],gitHubRepo:{owner:"AwalHossain",repo:"video_streaming_service_server"},details:[{title:"Add new Book to the list",image:{srcPath:"projects/bookish/addBook.png"},date:"2023-08-30",link:{url:"",caption:""}},{title:"Home page",image:{srcPath:"projects/bookish/home.png"},date:"2023-07-30",link:{url:"",caption:""}},{title:"Reading List",image:{srcPath:"projects/bookish/read.png"},date:"2023-07-30",link:{url:"",caption:""}}],featured:{isFeatured:!0,priority:2,title:"Bookish- A Book Management Site",cover:{srcPath:"projects/bookish/book.png"},summary:["Bookish is a web application that allows users to discover, review, and manage books"],id:"Bookish-A-Book-Management-Site"},features:[["Users can browse a list of all books on the website, or they can search for books by title, author, or genre","Users can filter the list of books by title, author, genre, publication date, and other criteria","Logged-in users can add reviews for books they have read. Reviews should include a rating, a brief summary, and any other thoughts the user has about the book","Logged-in users can add books to their wishlist and reading list","Logged-in users can add books to the website by providing the title, author, genre, publication date, and other information.","Logged-in users can delete books they have added to the website"]],overview:"Bookish is a user-friendly web application designed to cater to book enthusiasts by providing a platform for discovering, reviewing, and managing books. With a focus on simplicity and intuitive design, Bookish offers a range of features to enhance the user experience. At its core, Bookish enables users to explore a vast collection of books through various means. Whether browsing through a comprehensive list or conducting targeted searches by title, author, or genre, users can easily find books of interest. Additionally, the application provides robust filtering options, allowing users to refine their search results based on specific criteria such as title, author, genre, and publication date.",youtubeURL:""},"DevBlog-a-developer-blog-site":{id:"DevBlog-a-developer-blog-site",name:"📝 DevBlog: Developer Community Blog Site",client:{url:"https://github.com/AwalHossain/Dev-Blog"},demoURL:{url:"https://bookishly.netlify.app/"},cover:{srcPath:"projects/devblog/blog.png"},startDate:"2023-06-25",endDate:"2023-07-12",summary:["Dev-Blog is a user-friendly blog site featuring several blogs on various topics related to development"],tags:[{name:"JavaScript"},{name:"TypeScript"},{name:"Redux Toolkit"},{name:"NodeJs"},{name:"ExpressJs"},{name:"Tailwind CSS"}],gitHubRepo:{owner:"AwalHossain",repo:"Dev-Blog"},details:[{title:"Blog post list",image:{srcPath:"projects/devblog/cover.png"},date:"2023-04-30",link:{url:"",caption:""}},{title:"Blog Details",image:{srcPath:"projects/devblog/detail.png"},date:"2023-04-30",link:{url:"",caption:""}},{title:"Save Blog to Reading List",image:{srcPath:"projects/devblog/save.png"},date:"2023-04-30",link:{url:"",caption:""}}],featured:{isFeatured:!0,priority:4,title:"DevBlog: Developer Community Blog Site",cover:{srcPath:"projects/devblog/blog.png"},summary:["Dev-Blog is a user-friendly blog site featuring several blogs on various topics related to development"],id:"DevBlog-a-developer-blog-site"},features:[["Display all blogs in an organized grid layout","Users can filter blogs based on their preferences","Sorting: Blogs can be sorted by newest addition, most liked, and default","Users can like blogs and save them for later reading"]],overview:"Dev-Blog is a user-friendly blog site featuring several blogs on various topics related to development. The site utilizes a grid system to display all the blogs, allowing users to filter and sort them based on their preferences. Users can also like and save blogs for reading later. This project is built using React, Node.js, MongoDB, RTK Query, and TypeScript. Note that the site is still a work in progress, with additional features such as commenting, authentication, and the ability to add new blogs planned for future development.",youtubeURL:""},"pc-builder":{id:"pc-builder",name:"💻 PC Builder",client:{url:"https://github.com/AwalHossain/PC-Builder"},demoURL:{url:"https://pc-builder-chi-seven.vercel.app"},cover:{srcPath:"projects/pcBuilder/cover.png"},startDate:"2023-08-15",endDate:"2023-08-25",summary:["Discover and customize your dream PC with our intuitive builder, featuring organized component categories"],tags:[{name:"NextJs"},{name:"Redux Toolkit"},{name:"Next-auth"},{name:"Redis"}],gitHubRepo:{owner:"AwalHossain",repo:"video_streaming_service_server"},details:[{title:"Home page",image:{srcPath:"projects/pcBuilder/home.png"},date:"2023-08-30",link:{url:"#",caption:"home page"}},{title:"Product Details",image:{srcPath:"projects/pcBuilder/detail.png"},date:"2023-08-30",link:{url:"#",caption:"PC Builder page"}},{title:"Pc Builder",image:{srcPath:"projects/pcBuilder/pcbuild.png"},date:"2023-08-30",link:{url:"#",caption:"PC Builder page"}}],featured:{isFeatured:!0,priority:3,title:"PC Builder",cover:{srcPath:"projects/pcBuilder/cover.png"},summary:["Discover and customize your dream PC with our intuitive builder, featuring organized component categories"],id:"pc-builder"},features:[["Users can browse and select components for their PC build","Users can view detailed information about each component","Users can add and remove components from their build","Users can view the total cost of their build","Users can save their build for later viewing"]],overview:"The PC Builder application is a comprehensive, user-friendly platform designed to assist both tech enthusiasts and novices in creating their ideal personal computer setup. This web-based tool provides a streamlined, intuitive interface where users can browse through a wide array of PC components, view detailed information about each product, and select the components they want to include in their build. The application is deployed on Vercel and can be accessed via a live link, making it easily accessible to users worldwide.",youtubeURL:""},"health-coach":{id:"health-coach",name:"🩺 Health-Coach",client:{url:"https://github.com/AwalHossain/-healthcare-related-website-AwalHossain"},demoURL:{url:"https://healthcare-services-c55cf.web.app"},cover:{srcPath:"projects/health/cover.png"},startDate:"2022-06-25",endDate:"2022-06-29",summary:["Healthcoach is your all-in-one platform for achieving holistic wellness, offering personalized coaching, diverse health options, and expert guidance."],tags:[{name:"ReactJs"},{name:"ReduxJs"},{name:"Firebase"},{name:"MongoDB"}],gitHubRepo:{owner:"AwalHossain",repo:"-healthcare-related-website-AwalHossain"},details:[{title:"Home page",image:{srcPath:"projects/health/home.png"},date:"2023-08-30",link:{url:"#",caption:"home page"}},{title:"Login Page",image:{srcPath:"projects/health/login.png"},date:"2023-08-30",link:{url:"#",caption:"Loging page"}},{title:"Specialists",image:{srcPath:"projects/health/specialist.png"},date:"2023-08-30",link:{url:"#",caption:"Specialist"}}],featured:{isFeatured:!0,priority:6,title:"Health-Coach",cover:{srcPath:"projects/health/cover.png"},summary:["Healthcoach is your all-in-one platform for achieving holistic wellness, offering personalized coaching, diverse health options, and expert guidance."],id:"health-coach"},features:[["User can able choose trainer for their health training program","User will able set meeting with professional health coach","User can track their progress and set goals for their health journey","User can access a library of educational resources and articles on various health topics","User can connect with a community of like-minded individuals for support and motivation"]],overview:"At Healthcoach, our mission is to guide individuals on their journey towards holistic health and well-being. We understand that achieving optimal health requires a multifaceted approach, which is why we offer a comprehensive range of services and resources designed to empower our users to become the best version of themselves.",youtubeURL:""}}},8864:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var r=a(1504),n=a(8764),o=a(1095);const i="undefined"==typeof document,s=()=>{const e=i?"":document.location.search.substring(1);return new URLSearchParams(e)},l=(e,t)=>{const a=(e=>s().get(e))(e);return null===a?t:a};var c=a(240);const d="endDateAsc",u="endDateDesc",m={[d]:{title:"➚ ASC",hidden:!1},[u]:{title:"➘ DESC"}},p=Object.keys(m).filter((e=>!m[e].hidden));var h=e=>{const{onSort:t,sortBy:a}=e,n=Object.keys(m).filter((e=>{const t=m[e];return!(null!=t&&t.hidden)})).map((e=>{const t=m[e];return r.createElement("option",{key:e,value:e},t.title)}));return r.createElement("div",null,r.createElement(c.c,null,r.createElement("div",{className:"text-sm text-gray-500 mr-1"},"Sort by:"),r.createElement("div",null,r.createElement("select",{onChange:e=>{const a=e.target.value;t(a)},defaultValue:a,className:"text-sm"},n))))},g=a(4496),v=a(2960),f=a(9584),b=a(2268),y=a(6620),w=a(9928),k=a(4340);var E=e=>{const{children:t,className:a="px-4 pb-4"}=e;return t?r.createElement("div",{className:a},r.createElement(c.c,{className:"justify-between"},t)):null},D=a(8576),N=a(5540),B=a(8184),R=a(7548),x=a(2784),j=a(4804),P=a(7948);var S=e=>{const{project:t}=e;if(!t)return null;const a=null!=t&&t.tags?r.createElement("div",null,r.createElement(P.c,{tags:t.tags,numToShow:3})):null,n=r.createElement(R.c,{startDate:t.startDate,endDate:t.endDate,className:"text-xs text-gray-500"}),i=t.summary?t.summary.map(((e,t)=>r.createElement("p",{key:t},e))):null,s=i?r.createElement("div",{className:"mb-3 font-light"},i):null,l=t.archived?void 0:(0,o._)(t.id),d=t.demoURL&&!t.archived?r.createElement(w.c,{link:t.demoURL,startEnhancer:r.createElement(b.u,null),className:"mr-4"},"Demo"):null,u=t.client&&!t.archived?r.createElement(w.c,{link:t.client,startEnhancer:r.createElement(f.w,null)},"Client"):null,m=t.server&&!t.archived?r.createElement(w.c,{link:t.server,startEnhancer:r.createElement(f.w,null)},"Server"):null,p=t.cover?r.createElement(x.c,{image:t.cover}):null,h=null!=t&&t.archived?r.createElement(E,null,'" Archived "'):null,g=d||u||m?r.createElement(E,null,d,r.createElement(c.c,{className:"space-x-3"},u,m)):null,S=null!=t&&t.links&&null!=t&&t.links.length?null==t?void 0:t.links.map(((e,t)=>r.createElement("li",{key:t},r.createElement(j.c,{link:e,className:"text-sm underline",separatorClassName:"w-1",startEnhancer:r.createElement(v.o,{size:14})},(null==e?void 0:e.caption)||"Read more")))):null,A=(null!=t&&t.details&&t.details.length&&(c.c,j.c,(0,o._)(t.id),y.c,t.details.length),S?r.createElement("ul",{className:"mt-3"},S):null);return r.createElement(k.cp,null,r.createElement(N.cp,{link:l},p),r.createElement(D.cp,null,r.createElement(B.c,{link:l},t.name),r.createElement(c.c,{className:"mb-3 justify-between"},r.createElement("div",null,n)),s,a,A),g,h)};var A=e=>{const{projects:t}=e,a=t.map((e=>r.createElement(S,{project:e,key:e.id})));return r.createElement(g.cp,null,a)},H=a(6536),U=a(6248),C=a(3960);const M="sort",T={[u]:{sort:(e,t)=>null!=e&&e.endDate&&t.endDate&&e.endDate!==t.endDate?e.endDate>t.endDate?-1:1:0},[d]:{sort:(e,t)=>null!=e&&e.endDate&&t.endDate&&e.endDate!==t.endDate?e.endDate<t.endDate?-1:1:0}},L=()=>{const e=u,t=l(M,e);return p.includes(t)?t:e};console.log(L(),"defaultOption");var J=e=>{const{projects:t}=e,{0:a,1:l}=(0,r.useState)(L()),{0:d,1:u}=(0,r.useState)((0,o.M)(t));(0,r.useEffect)((()=>{const e=(0,n.c)(d).sort(T[a].sort);u(e),console.log((0,n.c)(d).sort(T[a].sort),"filteredProjects new one")}),[a]);const m=d.length;return r.createElement(H.c,null,r.createElement(C.cp,{title:"Projects",description:"Projects and experiments that help people learn"}),r.createElement(c.c,null,r.createElement(U.c,null,"Projects"),r.createElement(y.c,{className:"ml-3 self-start"},m)),r.createElement(c.c,{className:"mb-6 justify-between"},r.createElement(h,{onSort:e=>{((e,t)=>{if(i)return;const a=s();a.set(e,t);const r="?"+a.toString()+document.location.hash;window.history.pushState(null,"",r)})(M,e),l(e)},sortBy:a}),r.createElement(c.c,{className:"ml-3"},r.createElement("div",{className:"text-sm text-gray-500 mr-1"},"Total stars:"))),r.createElement(A,{projects:d}))},_=a(4324);var z=()=>r.createElement(J,{projects:_.U})},1095:function(e,t,a){"use strict";a.d(t,{M:function(){return n},_:function(){return o}});var r=a(1836);function n(e){return Object.keys(e).map((t=>{const a={...e[t]};return a.id=t,a}))}function o(e){return{url:r.q.projects.path+"/"+e+"#details"}}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-3fc2b2c0ef11d6e2d86a.js.map