if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>l(s,n),t={module:{uri:n},exports:o,require:u};e[n]=Promise.all(r.map((s=>t[s]||u(s)))).then((s=>(i(...s),o)))}}define(["./workbox-7d6a3f4d"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"e2544655a66d61f73e29c974baf12340"},{url:"assets/404.5106b01a.js",revision:null},{url:"assets/404.html.32fbd238.js",revision:null},{url:"assets/404.html.8c557a26.js",revision:null},{url:"assets/app.79fca6ce.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/blogs.html.0187d980.js",revision:null},{url:"assets/blogs.html.b7865e5a.js",revision:null},{url:"assets/books.html.49224914.js",revision:null},{url:"assets/books.html.d6e29a7a.js",revision:null},{url:"assets/community-examples.html.101de687.js",revision:null},{url:"assets/community-examples.html.48542968.js",revision:null},{url:"assets/community.html.3f5d4018.js",revision:null},{url:"assets/community.html.954cf19f.js",revision:null},{url:"assets/docker.html.154d50bc.js",revision:null},{url:"assets/docker.html.3b32392a.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.1fd2ab31.js",revision:null},{url:"assets/index.html.37d3164e.js",revision:null},{url:"assets/Layout.dab2108d.js",revision:null},{url:"assets/mention-of-nuxt.html.9cff58eb.js",revision:null},{url:"assets/mention-of-nuxt.html.b54e54fd.js",revision:null},{url:"assets/modules.html.8782af61.js",revision:null},{url:"assets/modules.html.c8b12ecb.js",revision:null},{url:"assets/nuxt-v1-label.dc2b2b3e.js",revision:null},{url:"assets/official-examples.html.02a31252.js",revision:null},{url:"assets/official-examples.html.f551ec9e.js",revision:null},{url:"assets/official-resources.html.11dfc944.js",revision:null},{url:"assets/official-resources.html.88e7f2b2.js",revision:null},{url:"assets/open-source-projects-using-nuxt.html.15762209.js",revision:null},{url:"assets/open-source-projects-using-nuxt.html.2de69ea5.js",revision:null},{url:"assets/projects-using-nuxt.html.0a5a37c6.js",revision:null},{url:"assets/projects-using-nuxt.html.545a729c.js",revision:null},{url:"assets/showcase.html.4e8a2d09.js",revision:null},{url:"assets/showcase.html.a62f7202.js",revision:null},{url:"assets/starter-template.html.2a46e026.js",revision:null},{url:"assets/starter-template.html.d69312f0.js",revision:null},{url:"assets/style.f712a39a.css",revision:null},{url:"assets/tools.html.c077f306.js",revision:null},{url:"assets/tools.html.f5c0068d.js",revision:null},{url:"assets/tutorials.html.a8d30bd7.js",revision:null},{url:"assets/tutorials.html.d20f42c5.js",revision:null},{url:"google80e84fabb895736c.html",revision:"563e229d19ded39e6065aa2059e87364"},{url:"hero.png",revision:"dd2078e66324b5927fe4525d06af1287"},{url:"icons/android-chrome-192x192.png",revision:"5f6b5c3647efb003f844b362140e6d50"},{url:"icons/android-chrome-512x512.png",revision:"f17729bc05612a117136a4825e6df2a8"},{url:"icons/apple-touch-icon.png",revision:"73481864ed4f84a6e048a0151ab3259e"},{url:"icons/favicon-16x16.png",revision:"a0240aae057b307db2563cc9ca82ef33"},{url:"icons/favicon-32x32.png",revision:"001a3e0f7ce1039c66ee4b467345c681"},{url:"icons/mstile-150x150.png",revision:"a3fbd53052c98628c98f0c984bade80b"},{url:"icons/nuxt-v1-label.svg",revision:"dcf77077d730cad3615aff936bd34621"},{url:"icons/nuxt-v2-label.svg",revision:"adf60c785ea93a01b9bb545f5981f815"},{url:"icons/nuxt-v3-label.svg",revision:"3126cfd42bd79ef123332103338b096f"},{url:"icons/safari-pinned-tab.svg",revision:"88bae38ca7ddda2d0f167057fff6bc39"},{url:"index.html",revision:"57e366a8eac336fd91cbfdd7deb19069"},{url:"logo.png",revision:"9211627441c4938eb8650b4bdf14630d"},{url:"resources/blogs.html",revision:"c8f294c68284dbef25906bf0386b6637"},{url:"resources/books.html",revision:"e7b9e67ef74475947a6a87a884db5194"},{url:"resources/community-examples.html",revision:"48f137ab02c6de50aad96f4ad8ce57f2"},{url:"resources/community.html",revision:"75d1639352c0ad3663b2d9d13f6c6347"},{url:"resources/docker.html",revision:"68c16912f4efb9cbf391ae2cc161ce2f"},{url:"resources/mention-of-nuxt.html",revision:"47de50c77665b9d6d6cd6c829babbfdb"},{url:"resources/modules.html",revision:"ed0984245baea2500d6d11df8da8d8b5"},{url:"resources/official-examples.html",revision:"1d3bcfc6ff9875eb2caf06d0b616b5f8"},{url:"resources/official-resources.html",revision:"139744dae7895bb8f5f0e40df565aaa8"},{url:"resources/open-source-projects-using-nuxt.html",revision:"38d359864f2ec2939c950c685ff952a5"},{url:"resources/projects-using-nuxt.html",revision:"0286b9de884d3825045307e0dfdc9fd4"},{url:"resources/showcase.html",revision:"3f7a24f21ad3cbbdc07d6ec8ce618a12"},{url:"resources/starter-template.html",revision:"6fae7286ef4d2fd0d1b0e8e6a678311d"},{url:"resources/tools.html",revision:"0be05391df453198a71418327e026634"},{url:"resources/tutorials.html",revision:"18104e54ab15f9530ad8475bacc81b89"}],{})}));
