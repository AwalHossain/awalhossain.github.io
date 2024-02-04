(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[823],{3150:function(e,n,a){var t=a(9720).w_;e.exports.C=function(e){return t({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M12,20c-4.411,0-8-3.589-8-8 s3.567-8,7.953-8C16.391,4,20,7.589,20,12S16.411,20,12,20z"}},{tag:"path",attr:{d:"M11 7H13V14H11zM11 15H13V17H11z"}}]})(e)}},9881:function(e,n,a){var t=a(9720).w_;e.exports.L=function(e){return t({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}}]})(e)}},4363:function(e,n,a){var t=a(9720).w_;e.exports.v=function(e){return t({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}},550:function(e,n,a){var t=a(9720).w_;e.exports.T=function(e){return t({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}},1886:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return c}});var t=a(1151),s=a(7294);function l(e){const n=Object.assign({p:"p",strong:"strong",hr:"hr",span:"span",img:"img",h2:"h2",a:"a",blockquote:"blockquote"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,s.createElement(n.strong,null,"Introduction:"),"\nAfter successfully connecting to your VPS, let's perform some basic setup steps on our Ubuntu VPS. This guide will walk you through updating packages, installing Nginx, creating a user with appropriate permissions, configuring Nginx, setting up firewall rules, obtaining SSL certification, and deploying your project using GitHub Actions."),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Updating and Upgrading Packages:"),"\nFirst, ensure your system is up to date by running:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> update\n<span class="token function">sudo</span> <span class="token function">apt</span> upgrade</code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Installing Nginx:"),"\nInstall Nginx using the following command:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx</code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Creating a User and Setting Permissions:"),"\nCreate a new user and grant it sudo permissions:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> adduser <span class="token punctuation">[</span>your_user_name<span class="token punctuation">]</span>\n<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> <span class="token punctuation">[</span>your_user_name<span class="token punctuation">]</span></code></pre></div>'}}),"\n",s.createElement(n.p,null,"Grant permissions for the user to create folders and write files:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> <span class="token punctuation">[</span>your_directory_path<span class="token punctuation">]</span></code></pre></div>'}}),"\n",s.createElement(n.p,null,"for me it's [your_directory_path] is /var/www,\nthis sudo chmod -R 777 is the command to provide permission to write or create folder as user,\ninside square bracket you need to put directory path,after that you have to switch to that user"),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Creating Project Directory and Switching Users:"),"\nSwitch to the newly created user and set up your project directory:\nHere you will have to create a folder where you will do your necessary work, for me i'll work as name streaming,\nyou need to navigate to your directory where you want to create folder, for me it's /var/www,\nand this directory only available after nginx install."),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">su</span> - <span class="token punctuation">[</span>your_user_name<span class="token punctuation">]</span>\n<span class="token builtin class-name">cd</span> /var/www\n<span class="token function">mkdir</span> streaming\n<span class="token builtin class-name">cd</span> streaming</code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Configuring GitHub Actions:"),"\nCreate a GitHub repository and configure GitHub Actions to deploy your project automatically.\ni've already created a repository name streaming. go to your repository setting and find action,\nyou will see a option call runner, click that and you will see a option call add runner, click that and after that click self-hosted runner,\nhere you will see differen os option, choose linux and follow the instruction."),"\n",s.createElement(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6dv4bfrnb9vcvxl8p7ed.png",alt:"Image description"}),"\n",s.createElement(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bvtmvzmkw044kjqwrrgz.png",alt:"Image description"}),"\n",s.createElement(n.p,null,"At very last step you need to install some packgae to make your runner active all the time.\nif you run ./run.sh, it will stay active for momentary but\nif exit it will be in offline. Sohere we have install a packgae to make it active all the time"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> ./svc.sh <span class="token function">install</span></code></pre></div>'}}),"\n",s.createElement(n.p,null,"after that run it"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> ./svc.sh start</code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,"It will be active all the time, and you can see it in your repository setting, runner option."),"\n",s.createElement(n.h2,{id:"environmentenv-setup",style:{position:"relative"}},"Environment(.env) Setup",s.createElement(n.a,{href:"#environmentenv-setup","aria-label":"environmentenv setup permalink",className:"gatsby-remark-autolink-header-anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"It's important step to add environment variable in your project before deploying it automatically,\nyou can add environment variable in your repository setting, go to your repository setting and find secret,"),"\n",s.createElement(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aedhpnfjmdqtwqv2wr59.png",alt:"Image description"}),"\n",s.createElement(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f0puwmb9j6swtrf2m0rx.png",alt:"Image description"}),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Installing Node.js and PM2:"),"\nInstall Node.js LTS version and PM2 for running your project in the background:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://deb.nodesource.com/setup_lts.x <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-E</span> <span class="token function">bash</span> -\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nodejs\n<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pm2@latest</code></pre></div>'}}),"\n",s.createElement(n.blockquote,null,"\n",s.createElement(n.p,null,"You may encounter an error while downloading this package as a user.\nTo avoid this, you can switch to the root user by running the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">exit</code>'}})," command,\nthen proceed with the installation. After that, we'll configure Nginx.\nYou can perform these steps as a root user or as a regular user.\nFor this guide, I'll be executing these steps as a root user.\nTo switch to the root user, use the command ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cd /root</code>'}}),"."),"\n"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">node</span> <span class="token parameter variable">-v</span>\n<span class="token function">npm</span> <span class="token parameter variable">-v</span></code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Configuring Nginx:"),"\nEdit the default Nginx configuration file to proxy requests to your application:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/nginx/sites-available/default</code></pre></div>'}}),"\n",s.createElement(n.p,null,"you'll see default file now let's edit this default file\nAdd the following configuration:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="nginx"><pre class="language-nginx"><code class="language-nginx"> <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n            <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5000</span><span class="token punctuation">;</span>\n            <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>\n            <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>\n            <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">\'upgrade\'</span></span><span class="token punctuation">;</span>\n            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>\n            <span class="token directive"><span class="token keyword">proxy_cache_bypass</span> <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(n.p,null,"**proxy_pass http://localhost:5000 **: This command tells Nginx to forward requests it receives to http://localhost:5000, which is the address of the application you're running. Replace 5000 with the port number your application is running on."),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"proxy_http_version 1.1"),": This command sets the version of the HTTP protocol that will be used for the proxy request. In this case, it's HTTP/1.1."),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"proxy_set_header Upgrade $http_upgrade"),": This command sets the Upgrade HTTP header to the value of the $http_upgrade variable. This is used for handling WebSocket connections."),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"proxy_set_header Connection 'upgrade'"),": This command sets the Connection HTTP header to the value 'upgrade'. This is also used for handling WebSocket connections."),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"proxy_set_header Host $host"),": This command sets the Host HTTP header to the value of the $host variable. This is used to pass the original host header to the proxied server."),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"proxy_cache_bypass $http_upgrade"),": This command tells Nginx to bypass the cache when the $http_upgrade variable is set. This is useful for WebSocket connections, which should not be cached."),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"N.B:")," You can replaced localhost:5000 with your port number"),"\n",s.createElement(n.p,null,"Then, restart Nginx:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> systemctl restart nginx</code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Firewall Configuration:"),"\nConfigure the firewall using UFW:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> ufw allow OpenSSH\n<span class="token function">sudo</span> ufw allow <span class="token string">\'Nginx Full\'</span>\n<span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span></code></pre></div>'}}),"\n",s.createElement(n.h2,{id:"domain-setting",style:{position:"relative"}},"Domain Setting",s.createElement(n.a,{href:"#domain-setting","aria-label":"domain setting permalink",className:"gatsby-remark-autolink-header-anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"If you have custom domain and you want to use that domain for your project,\nyou need to add your domain name in the default file, you can find this file in /etc/nginx/sites-available/default, open this file and\nadd your domain name as server_name and save it."),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">     server_name api.reely.tech<span class="token punctuation">;</span>\n\n        location / <span class="token punctuation">{</span>\n            proxy_pass http://localhost:5000<span class="token punctuation">;</span>\n            proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>\n            proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>\n            proxy_set_header Connection <span class="token string">\'upgrade\'</span><span class="token punctuation">;</span>\n            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>\n            proxy_cache_bypass <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"SSL Certification:"),"\nFirst Make sure that Nginx Full rule is available"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">ufw status</code></pre></div>'}}),"\n",s.createElement(n.p,null,"Install SSL certification using Let's Encrypt:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> certbot python3-certbot-nginx\n<span class="token function">sudo</span> certbot <span class="token parameter variable">--nginx</span> <span class="token parameter variable">-d</span> example.com <span class="token parameter variable">-d</span> www.example.com</code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Adjusting Nginx Configuration for File Upload:"),"\nEdit the Nginx configuration file to allow larger file uploads:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/nginx/nginx.conf</code></pre></div>'}}),"\n",s.createElement(n.p,null,"Add the following line inside the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">http</code>'}})," block:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="nginx"><pre class="language-nginx"><code class="language-nginx"><span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">100M</span></span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(n.p,null,"Reload Nginx:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> systemctl reload nginx</code></pre></div>'}}),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"GitHub Actions Deployment:"),"\nSet up GitHub Actions by creating a ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.github/workflows/main.yml</code>'}})," file in your repository with the provided configuration."),"\n",s.createElement(n.h2,{id:"github-actions",style:{position:"relative"}},"Github Actions",s.createElement(n.a,{href:"#github-actions","aria-label":"github actions permalink",className:"gatsby-remark-autolink-header-anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"Now we are going to use github actions to deploy our project automatically. so let's go to our github repository and create a folder name .github and inside that folder create a folder name workflows and inside that folder create a file name main.yml. so the path will be .github/workflows/main.yml. now let's copy and paste this code in main.yml file"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">name: Node.js CI\n\non:\n  push:\n    branches: <span class="token punctuation">[</span> master <span class="token punctuation">]</span>\n  pull_request:\n    branches: <span class="token punctuation">[</span> master <span class="token punctuation">]</span>\n\njobs:\n        build:\n        runs-on: self-hosted\n        strategy:\n        matrix:\n                node-version: <span class="token punctuation">[</span><span class="token number">14</span>.x<span class="token punctuation">]</span>\n        steps:\n        - uses: actions/checkout@v2\n        - name: Use Node.js <span class="token variable">${{ matrix.node-version }</span><span class="token punctuation">}</span>\n                uses: actions/setup-node@v1\n                with:\n                node-version: <span class="token variable">${{ matrix.node-version }</span><span class="token punctuation">}</span>\n        - name: <span class="token function">npm</span> install, build, and <span class="token builtin class-name">test</span>\n                run: <span class="token operator">|</span>\n                <span class="token function">npm</span> <span class="token function">install</span>\n                <span class="token function">npm</span> run build --if-present\n                <span class="token function">npm</span> run <span class="token builtin class-name">test</span> --if-present\n        - name: Deploy to VPS\n                pm2 start <span class="token function">npm</span> <span class="token parameter variable">--name</span> <span class="token string">"streaming"</span> -- start\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"configure githbu actions according to your need. This one is for very important cause\nit will deploy your project automatically after push to master branch. so don't forget to configure it according to your need.,"),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Conclusion:"),"\nBy following these steps, you can set up and deploy your project on an Ubuntu VPS with Nginx, GitHub Actions, SSL certification, and proper firewall configuration. This comprehensive guide ensures a smooth deployment process for your web application."),"\n",s.createElement(n.hr),"\n",s.createElement(n.p,null,s.createElement(n.strong,null,"Keywords:")," Ubuntu VPS, Nginx, GitHub Actions, SSL Certification, Firewall Configuration, Node.js, PM2, Deployment, Let's Encrypt, File Upload, Configuration, GitHub Repository."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)},r=a(7084);console.log("3821838164","checking post template query");const i=e=>{const{data:n,children:a}=e;return s.createElement(r.Z,{post:n}," ",a," ")};function c(e){return s.createElement(i,e,s.createElement(o,e))}},7084:function(e,n,a){"use strict";a.d(n,{Z:function(){return g}});var t=a(7294),s=a(4363),l=a(550),o=a(2717),r=a(8288),i=a(9737),c=a(5103);var p=e=>{var n,a,p,u,d,g,h;const{post:m,children:f}=e,v=null!=m&&null!==(n=m.mdx)&&void 0!==n&&null!==(a=n.frontmatter)&&void 0!==a&&a.date?t.createElement(c.Z,{className:"mr-6 mb-6 text-gray-500 text-sm"},t.createElement(s.v,{className:"mr-1"}),null==m||null===(p=m.mdx)||void 0===p?void 0:p.frontmatter.date):null,y=null!=m&&null!==(u=m.mdx)&&void 0!==u&&u.timeToRead?t.createElement(c.Z,null,t.createElement(l.T,{className:"mr-1"}),(0,o.j)(null==m||null===(d=m.mdx)||void 0===d?void 0:d.timeToRead)," min to read"):null;return t.createElement("div",{className:"flex flex-col items-center"},t.createElement("article",{className:"w-full prose prose-sm sm:prose overflow-hidden prose-red",style:{maxWidth:"860px"}},t.createElement(i.Z,null,(null===(g=m.mdx)||void 0===g||null===(h=g.frontmatter)||void 0===h?void 0:h.title)||""),t.createElement(c.Z,null,v,y),t.createElement(r.Z,null,f)))},u=a(7170),d=a(7943);var g=e=>{var n,a,s,l,o,r,i,c,g,h,m;const{post:f,children:v}=e;return console.log(f,"post",v,"children"),t.createElement(u.Z,null,t.createElement(d.ZP,{title:(null===(n=f.mdx)||void 0===n||null===(a=n.frontmatter)||void 0===a?void 0:a.title)||"",titleMode:d.H0,description:(null===(s=f.mdx)||void 0===s||null===(l=s.frontmatter)||void 0===l?void 0:l.summary)||"",image:(null===(o=f.mdx)||void 0===o||null===(r=o.frontmatter)||void 0===r||null===(i=r.cover)||void 0===i||null===(c=i.childImageSharp)||void 0===c||null===(g=c.gatsbyImageData)||void 0===g||null===(h=g.images)||void 0===h||null===(m=h.fallback)||void 0===m?void 0:m.src)||"",type:d.Sp}),t.createElement(p,{post:f},v),t.createElement("div",{className:"flex flex-row justify-center items-center mt-16"},t.createElement("div",{className:"max-w-md"})))}},2091:function(e,n,a){"use strict";a.d(n,{hW:function(){return i}});var t=a(3150),s=a(9881),l=a(7294),o=a(5103);const r="info",i="error",c={[r]:l.createElement(s.L,{size:18}),[i]:l.createElement(t.C,{size:18})},p={[r]:"text-blue-600 bg-blue-100",[i]:"text-red-600 bg-red-100"};n.ZP=e=>{const{children:n,type:a}=e;return n?l.createElement("div",{className:"py-3 px-4 rounded-md "+p[a]},l.createElement(o.Z,null,l.createElement("div",{className:"mr-3"},c[a]),l.createElement("div",{className:"text-sm"},n))):null}},8288:function(e,n,a){"use strict";var t=a(4578),s=a(7294),l=a(2091);let o=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={hasError:!1},a}(0,t.Z)(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}};var a=n.prototype;return a.componentDidCatch=function(e,n){console.error(e,n),this.setState({hasError:!0})},a.render=function(){const{children:e}=this.props,{hasError:n}=this.state;return n?s.createElement(l.ZP,{type:l.hW},"Component has crashed"):e},n}(s.Component);n.Z=o},9737:function(e,n,a){"use strict";var t=a(7294),s=a(4519);n.Z=e=>{const{children:n,className:a=""}=e,l="mb-6 uppercase font-extrabold "+a;return t.createElement(s.Z,{level:s._.h1,className:l},n)}},5103:function(e,n,a){"use strict";var t=a(7294);n.Z=e=>{const{children:n,className:a="",responsive:s=!1,style:l={}}=e;if(!n)return null;const o=s?"flex flex-col sm:flex-row items-center":"flex flex-row items-center";return t.createElement("div",{style:l,className:o+" "+a},n)}},2717:function(e,n,a){"use strict";a.d(n,{j:function(){return t}});const t=e=>{if("number"!=typeof e)return null;return Math.ceil(1*e)||1}},1151:function(e,n,a){"use strict";a.d(n,{ah:function(){return l}});var t=a(7294);const s=t.createContext({});function l(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-deploy-index-mdx-5adf3b8163c9b41c8414.js.map