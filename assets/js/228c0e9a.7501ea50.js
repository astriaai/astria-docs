"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[2956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),k=n,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||i;return a?r.createElement(u,o(o({ref:t},c),{},{components:a})):r.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={},o="The pack object",s={unversionedId:"api/pack/pack",id:"api/pack/pack",title:"The pack object",description:"A pack is a collection of prompts. A pack also contains the configuration for fine-tuning such as using LoRA/FaceID/Checkpoint, base model and preset.",source:"@site/docs/api/2-pack/0-pack.md",sourceDirName:"api/2-pack",slug:"/api/pack/pack",permalink:"/docs/api/pack/pack",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packs",permalink:"/docs/category/packs"},next:{title:"List all packs",permalink:"/docs/api/pack/list"}},p={},l=[{value:"Advantages",id:"advantages",level:2},{value:"Example user flow",id:"example-user-flow",level:2},{value:"Tips",id:"tips",level:2},{value:"Getting started",id:"getting-started",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-pack-object"},"The pack object"),(0,n.kt)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/IUI6F5zVaAM?ab_channel=Astria_AI",title:"How to fine tune explainer",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",null,"A pack is a collection of prompts. A pack also contains the configuration for fine-tuning such as using LoRA/FaceID/Checkpoint, base model and preset."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/astriaai/headshots-starter?tab=readme-ov-file#incoming-changes"},"headshot-starter")," open-source project now supports packs.")),(0,n.kt)("h2",{id:"advantages"},"Advantages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Test new prompts, ideas and themes on a bulk of models quickly to assure consistent high-quality results."),(0,n.kt)("li",{parentName:"ol"},"Move fast from the creative process of creating prompts to the deployment of new themes in production."),(0,n.kt)("li",{parentName:"ol"},"Avoid mismatch between hard-coded JSONs and the actual prompts."),(0,n.kt)("li",{parentName:"ol"},"Decouple the creative process from your code and avoid mirroring inference API details in your codebase."),(0,n.kt)("li",{parentName:"ol"},"Run user tests in production for new prompts and quickly iterate."),(0,n.kt)("li",{parentName:"ol"},"Aggregate likes for prompts to improve the quality of the generated images and tighten the feedback loop. "),(0,n.kt)("li",{parentName:"ol"},"Sort packs by aggregated likes to present the best packs to the user.")),(0,n.kt)("h2",{id:"example-user-flow"},"Example user flow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /packs")," Display a list of packs to the user. See ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/pack/list/"},"docs")),(0,n.kt)("li",{parentName:"ol"},"User selects a pack, a class name (man/woman) and training images"),(0,n.kt)("li",{parentName:"ol"},"User selects image to upload. Images are inspected using the ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/images/inspect/"},"Image Inspect API")," to warn against bad quality images and detect characteristics of the training images for templating with ",(0,n.kt)("inlineCode",{parentName:"li"},"characteristics"),"."),(0,n.kt)("li",{parentName:"ol"},"Call ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /p/:id/tunes")," with title, (training) images, class name and ",(0,n.kt)("inlineCode",{parentName:"li"},"characteristics")," - to create a new fine-tune model using a pack. See ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/pack/tunes/create/"},"docs")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /tunes/:id/prompts")," to get a list of prompts and their status"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /prompts/:id/likes")," to send feedback to the API. See ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/like/create/"},"docs")),(0,n.kt)("li",{parentName:"ol"},"Sort prompts by likes"),(0,n.kt)("li",{parentName:"ol"},"Present packs sorted by aggregated likes")),(0,n.kt)("h2",{id:"tips"},"Tips"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Packs should include multiple classes, like ",(0,n.kt)("inlineCode",{parentName:"li"},"man")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"woman")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"cat")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"dog"),". Astria will use the relevant filters when a new tune is created according to the tune class"),(0,n.kt)("li",{parentName:"ol"},"Pack cover image is taken from the last prompt added to the pack. If you'd like to change the pack cover image, you can do so by removing the last prompt from the pack and adding it again. The pack cover image will be updated to the last prompt added to the pack.")),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click your email in the header to access ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/packs"},"my packs"),", and create your first pack. ",(0,n.kt)("img",{alt:"create_pack.png",src:a(2491).Z,width:"762",height:"916"})),(0,n.kt)("li",{parentName:"ol"},"Assign prompts to the pack from the ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/prompts"},"prompts tab"),".",(0,n.kt)("img",{alt:"assign_prompts.png",src:a(5941).Z,width:"1198",height:"280"})),(0,n.kt)("li",{parentName:"ol"},"Once a pack is assigned a new tag shows next to the prompt indicating that it is assigned to the pack.")))}m.isMDXComponent=!0},5941:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/assign_prompts-b3a88dc38694dc14d78752a498d1f4ec.png"},2491:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_pack-54e08c82617726b7fff50eb99b6e9818.png"}}]);