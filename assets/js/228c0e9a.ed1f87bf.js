"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[2956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={},i="The pack object",p={unversionedId:"api/pack/pack",id:"api/pack/pack",title:"The pack object",description:"A pack represents a list of grouped prompts, as well as the fine-tune to be created from the training images.",source:"@site/docs/api/2-pack/0-pack.md",sourceDirName:"api/2-pack",slug:"/api/pack/pack",permalink:"/docs/api/pack/pack",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packs",permalink:"/docs/category/packs"},next:{title:"List all packs",permalink:"/docs/api/pack/list"}},s={},l=[{value:"Advantages",id:"advantages",level:2},{value:"Example user flow",id:"example-user-flow",level:2},{value:"Getting started",id:"getting-started",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-pack-object"},"The pack object"),(0,n.kt)("p",null,"A pack represents a list of grouped prompts, as well as the fine-tune to be created from the training images. "),(0,n.kt)("h2",{id:"advantages"},"Advantages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Test new prompts, ideas and themes on a bulk of models quickly to assure consistent high-quality results."),(0,n.kt)("li",{parentName:"ol"},"Move fast from the creative process of creating prompts to the deployment of new themes in production."),(0,n.kt)("li",{parentName:"ol"},"Avoid mismatch between hard-coded JSONs and the actual prompts."),(0,n.kt)("li",{parentName:"ol"},"Run tests for new prompts and quickly iterate."),(0,n.kt)("li",{parentName:"ol"},"Aggregate likes for prompts to improve the quality of the generated images and tighten the feedback loop. "),(0,n.kt)("li",{parentName:"ol"},"Packs allows sending users feedback (",(0,n.kt)("inlineCode",{parentName:"li"},"likes"),") information back to the API, which can be used to keep track of the user's preferences and improve the quality of the generated images over the original prompt id.")),(0,n.kt)("h2",{id:"example-user-flow"},"Example user flow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /packs")," Display a list of packs to the user. See ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/pack/list/"},"docs")),(0,n.kt)("li",{parentName:"ol"},"User selects a pack, a class name (man/woman) and training images"),(0,n.kt)("li",{parentName:"ol"},"Call ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /p/:id/tunes")," with title, (training) images, and class name -  to create a new fine-tune model using a pack. See ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/pack/tunes/create/"},"docs")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /tunes/:id/prompts")," to get a list of prompts and their status"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /prompts/:id/likes")," to send feedback to the API. See ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/like/create/"},"docs")),(0,n.kt)("li",{parentName:"ol"},"Sort prompts by likes"),(0,n.kt)("li",{parentName:"ol"},"Present packs sorted by aggregated likes")),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create your first pack from the GUI ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/packs"},"packs")," page."),(0,n.kt)("li",{parentName:"ol"},"Assign prompts to the pack from the ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/prompts"},"prompts tab"),".")))}d.isMDXComponent=!0}}]);