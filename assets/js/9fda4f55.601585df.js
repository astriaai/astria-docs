"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[4868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={},s="Changes",o={unversionedId:"changes",id:"changes",title:"Changes",description:"* 2024-02-08 Deprecate prompt aspect-ratio. Use width and height instead for better results (backward compatability available).",source:"@site/docs/0-changes.md",sourceDirName:".",slug:"/changes",permalink:"/docs/changes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/0-changes.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Use cases",permalink:"/docs/category/use-cases"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"changes"},"Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2024-02-08 Deprecate prompt aspect-ratio. Use width and height instead for better results (backward compatability available)."),(0,n.kt)("li",{parentName:"ul"},"2024-02-08 Added ",(0,n.kt)("inlineCode",{parentName:"li"},"--fix_bindi")," to remove dot on the forehead."),(0,n.kt)("li",{parentName:"ul"},"2024-01-30 Deprecated prompt expansion."),(0,n.kt)("li",{parentName:"ul"},"2024-01-25 ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/upscale"},"Upscale only")," Allows you to upscale an existing image."),(0,n.kt)("li",{parentName:"ul"},"2024-01-17 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/faceid"},"FaceID")," Preserve identity without fine-tuning."),(0,n.kt)("li",{parentName:"ul"},"2024-01-03 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/tiled-upscale"},"Tiled upscale")," improved upscaling."),(0,n.kt)("li",{parentName:"ul"},"2024-01-03 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/multi-pass-inference"},"Multi pass inference")," unlocks new level of detail, image composition and similarity."),(0,n.kt)("li",{parentName:"ul"},"2023-12-14 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/prompt-masking"},"Prompt masking")," feature added - to support ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/product-shots"},"product shots")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/masked-portraits"},"Masked Portraits")),(0,n.kt)("li",{parentName:"ul"},"2023-11-27 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/lcm"},"LCM")," (Latent Consistency Models) scheduler allows inference in 6 steps "),(0,n.kt)("li",{parentName:"ul"},"2023-11-01 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/multiperson"},"Multi-person")," inference using LoRA and SD15 models "),(0,n.kt)("li",{parentName:"ul"},"2023-10-29 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/face-swap"},"Face-Swap")," feature added - uses training images to improve inference time similarity"),(0,n.kt)("li",{parentName:"ul"},"2023-10-22 ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/themes"},"Themes")," - Have ChatGPT create 10 prompts for you from a short 2-4 word theme description.")))}d.isMDXComponent=!0}}]);