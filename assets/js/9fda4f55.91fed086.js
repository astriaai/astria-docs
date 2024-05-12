"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[4868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2713:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},o="Changes",s={unversionedId:"changes",id:"changes",title:"Changes",description:"* 2024-05-10 Added Lineart for SDXL1",source:"@site/docs/0-changes.md",sourceDirName:".",slug:"/changes",permalink:"/docs/changes",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Use cases",permalink:"/docs/category/use-cases"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"changes"},"Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2024-05-10 Added Lineart for SDXL1 "),(0,n.kt)("li",{parentName:"ul"},"2024-05-06 ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/room-redesign"},"Interior design"),' - improved "Segment Room" (',(0,n.kt)("inlineCode",{parentName:"li"},"segroom"),") controlnet to handle empty rooms. "),(0,n.kt)("li",{parentName:"ul"},"2024-05-05 ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/pack/pack/"},"Packs")," + ",(0,n.kt)("a",{parentName:"li",href:"/docs/api/like/create/"},"Likes")," API - Control prompts from within Astria and experiment faster. "),(0,n.kt)("li",{parentName:"ul"},"2024-05-03 ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/virtual-try-on"},"Virtual Try-on")," - Improved quality "),(0,n.kt)("li",{parentName:"ul"},"2024-04-20 ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/room-redesign"},"Interior design"),' - Added "Segment Room" controlnet for Backend V1, and MLSD for SDXL to be used. '),(0,n.kt)("li",{parentName:"ul"},"2024-04-17 Showcase ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/virtual-try-on"},"virtual try-on")," - add reference clothes to a person in an image. "),(0,n.kt)("li",{parentName:"ul"},"2024-04-04 Added support for face-inpainting, hires-fix and tiled upscale for faceid on Backend V1. "),(0,n.kt)("li",{parentName:"ul"},"2024-04-04 Lightning schedulers for Backend V1 to support lightning models such as ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/gallery/tunes/1194447/prompts"},"RealVis XL Lightning")," "),(0,n.kt)("li",{parentName:"ul"},"2024-04-04 V1: Lightning schedulers to support lightning models such as ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/gallery/tunes/1194447/prompts"},"RealVis XL Lightning")," "),(0,n.kt)("li",{parentName:"ul"},"2024-03-27 Upgraded ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/themes"},"Themes")," to use Claude Opus and adjust for both SDXL and SD15 prompting."),(0,n.kt)("li",{parentName:"ul"},"2024-03-20 ",(0,n.kt)("a",{parentName:"li",href:"https://astria.ai/upscale"},"Free Upscale")," tool"),(0,n.kt)("li",{parentName:"ul"},"2024-03-17 Controlnet ",(0,n.kt)("inlineCode",{parentName:"li"},"composition")," support for Backend V1. Examples in the ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/gallery?controlnet=composition"},"gallery")),(0,n.kt)("li",{parentName:"ul"},"2024-03-14 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/multi-controlnet"},"Multi-controlnet + Controlnet reference")," is available for Backend V1"),(0,n.kt)("li",{parentName:"ul"},"2024-03-10 New ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/backend-v1"},"Backend version v1")," for inference - Higher quality, better samplers, faster inference, and more features."),(0,n.kt)("li",{parentName:"ul"},"2024-03-05 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jabir-zheng/TCD"},"TCD")," sampler gets better results than LCM in 4-8 steps for SDXL models and is available on the samplers dropdown in the Advanced settings of the prompt."),(0,n.kt)("li",{parentName:"ul"},"2024-02-16 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/faceid"},"FaceID Portrait")," has better color balance and similarity and is well suited for portraits."),(0,n.kt)("li",{parentName:"ul"},"2024-02-08 Deprecate prompt aspect-ratio. Use width and height instead for better results (backward compatability available)."),(0,n.kt)("li",{parentName:"ul"},"2024-02-08 Added ",(0,n.kt)("inlineCode",{parentName:"li"},"--fix_bindi")," to remove dot on the forehead."),(0,n.kt)("li",{parentName:"ul"},"2024-01-30 Deprecated prompt expansion."),(0,n.kt)("li",{parentName:"ul"},"2024-01-25 ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/upscale"},"Upscale only")," Allows you to upscale an existing image."),(0,n.kt)("li",{parentName:"ul"},"2024-01-17 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/faceid"},"FaceID")," Preserve identity without fine-tuning."),(0,n.kt)("li",{parentName:"ul"},"2024-01-03 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/tiled-upscale"},"Tiled upscale")," improved upscaling."),(0,n.kt)("li",{parentName:"ul"},"2024-01-03 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/multi-pass-inference"},"Multi pass inference")," unlocks new level of detail, image composition and similarity."),(0,n.kt)("li",{parentName:"ul"},"2023-12-14 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/prompt-masking"},"Prompt masking")," feature added - to support ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/product-shots"},"product shots")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/masked-portraits"},"Masked Portraits")),(0,n.kt)("li",{parentName:"ul"},"2023-11-27 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/lcm"},"LCM")," (Latent Consistency Models) scheduler allows inference in 6 steps "),(0,n.kt)("li",{parentName:"ul"},"2023-11-01 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/multiperson"},"Multi-person")," inference using LoRA and SD15 models "),(0,n.kt)("li",{parentName:"ul"},"2023-10-29 ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/face-swap"},"Face-Swap")," feature added - uses training images to improve inference time similarity"),(0,n.kt)("li",{parentName:"ul"},"2023-10-22 ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/themes"},"Themes")," - Have ChatGPT create 10 prompts for you from a short 2-4 word theme description.")))}m.isMDXComponent=!0}}]);