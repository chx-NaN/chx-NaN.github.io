if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>d(e,s),l={module:{uri:s},exports:a,require:n};i[s]=Promise.all(c.map((e=>l[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/20/hello-world/index.html",revision:"68eb4addcfe7edef7a0f6818d1b93546"},{url:"2022/03/20/我的第一篇博客/index.html",revision:"a255fc4ca1a173b0787372cefc5989be"},{url:"2022/03/21/HTML学习笔记/index.html",revision:"90aeec14fed54edafede8073125bb9da"},{url:"404.html",revision:"8934937e546f2b0d3707e9f77804c797"},{url:"about/index.html",revision:"0c241b2d1b28482aa6be285c04c83493"},{url:"archives/2022/03/index.html",revision:"5fa520beea22fa2fb1db79027d02df84"},{url:"archives/2022/index.html",revision:"f0373aa6e2859a480f49813c42c3be63"},{url:"archives/index.html",revision:"dcca54144c3e1d8f45043bd3eeb6511d"},{url:"categories/index.html",revision:"150ccc6d2b8f69b19e7e9d0bf464b623"},{url:"categories/笔记/index.html",revision:"b60a0454893452abfaf79a2d123878da"},{url:"css/iconfont.css",revision:"cb1cbb7840b4a41ae53da1f256067fc6"},{url:"css/index.css",revision:"d5ddd39d0c25d27a535ea3d2d16aafa8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"9c7439fd065a145540ecf48ae010bb4b"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"7dc455ec6cd55fe5864cf472a3bda5bb"},{url:"tags/html/index.html",revision:"12c2c455a429b8b9f19396442da8a293"},{url:"tags/index.html",revision:"db3c2f55201285459e266ebc6c160164"},{url:"tags/笔记/index.html",revision:"2b8302d36085c85041a533ef65e2fab0"}],{})}));
//# sourceMappingURL=service-worker.js.map
