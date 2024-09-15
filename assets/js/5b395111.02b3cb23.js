"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[2920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l="Multi-Controlnet",i={unversionedId:"features/multi-controlnet",id:"features/multi-controlnet",title:"Multi-Controlnet",description:"Available only for Backend V1",source:"@site/docs/features/multi-controlnet.md",sourceDirName:"features",slug:"/features/multi-controlnet",permalink:"/docs/features/multi-controlnet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LoRA",permalink:"/docs/features/lora"},next:{title:"Multi-Pass inference",permalink:"/docs/features/multi-pass-inference"}},p={},s=[{value:"Syntax",id:"syntax",level:3},{value:"<code>--controlnets</code>",id:"--controlnets",level:4},{value:"<code>--controlnet_weights</code>",id:"--controlnet_weights",level:4},{value:"Example",id:"example",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-controlnet"},"Multi-Controlnet"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Available only for ",(0,o.kt)("a",{parentName:"strong",href:"/docs/features/backend-v1"},"Backend V1"))),(0,o.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"1.5rem"}},(0,o.kt)("div",null,(0,o.kt)("figcaption",null,"Input image"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Input image",src:n(3566).Z,width:"1024",height:"1288"}))),(0,o.kt)("div",null,(0,o.kt)("figcaption",null,"Controlnet reference+pose"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Controlnet reference+pose",src:n(5205).Z,width:"1024",height:"1293"}))),(0,o.kt)("div",null,(0,o.kt)("figcaption",null,"Controlnet pose only"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Controlnet pose only",src:n(9436).Z,width:"1024",height:"1293"})))),(0,o.kt)("p",null,"Use multiple controlnet to get better consistency and precision."),(0,o.kt)("p",null,"See example prompts in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.astria.ai/gallery?text=controlnets"},"gallery"),". More about ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-cases/controlnet"},"controlnet"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"Below parameters should be used as text inside the prompt text at the ",(0,o.kt)("strong",{parentName:"p"},"end")," of the prompt:"),(0,o.kt)("h4",{id:"--controlnets"},(0,o.kt)("inlineCode",{parentName:"h4"},"--controlnets")),(0,o.kt)("p",null,"Space separated list of controlnets.\nFor SD1.5: ",(0,o.kt)("inlineCode",{parentName:"p"},"pose"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"depth"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mlsd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"canny"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lineart"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"normal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"faceid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reference"),"\nFor SDXL: ",(0,o.kt)("inlineCode",{parentName:"p"},"canny"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pose"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"depth"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")),(0,o.kt)("h4",{id:"--controlnet_weights"},(0,o.kt)("inlineCode",{parentName:"h4"},"--controlnet_weights")),(0,o.kt)("p",null,"Space separated list of weights for each controlnet. Range 0-1. Default: 1"),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Reference + Pose example from above"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ohwx woman --controlnets pose reference --controlnet_weights 1 0.8\nnum_images=1\nnegative_prompt=\nseed=\nsteps=30\ncfg_scale=\ncontrolnet=pose\ninput_image_url=https://sdbooth2-production.s3.amazonaws.com/wh7m8lvx42dtz1n8av4fx37pb2jz\nmask_image_url=\ndenoising_strength=0.8\ncontrolnet_conditioning_scale=0.4\ncontrolnet_txt2img=false\nsuper_resolution=true\ninpaint_faces=true\nface_correct=false\nfilm_grain=true\nface_swap=true\nhires_fix=true\nbackend_version=1\nprompt_expansion=undefined\nar=1:1\nscheduler=dpm++sde_karras\ncolor_grading=\nuse_lpw=true\nw=\nh=\n")))}d.isMDXComponent=!0},3566:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/multicontrolnet-input-image-d6e9d27f5983e2891f6cfd968d2606ab.jpeg"},9436:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/multicontrolnet-pose-only-749e87d50cb4b2dcb92b5a30658a2382.jpeg"},5205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/multicontrolnet-reference-pose-0e21c6720606e3ed31b031cb7594b3ab.jpeg"}}]);