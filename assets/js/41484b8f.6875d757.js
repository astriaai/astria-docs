"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[2532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Video Generation",description:"Generate videos using text"},i=void 0,s={unversionedId:"use-cases/video-generation",id:"use-cases/video-generation",title:"Video Generation",description:"Generate videos using text",source:"@site/docs/use-cases/60-video-generation.md",sourceDirName:"use-cases",slug:"/use-cases/video-generation",permalink:"/docs/use-cases/video-generation",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Video Generation",description:"Generate videos using text"},sidebar:"tutorialSidebar",previous:{title:"Toonify",permalink:"/docs/use-cases/toonify"},next:{title:"FAQ",permalink:"/docs/use-cases/faq"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To generate video use the regular prompt text box, and enter the frame number followed by a colon and the prompt to activate video generation ",(0,o.kt)("inlineCode",{parentName:"p"},"frame number: prompt")," Don\u2019t forget to use your model\u2019s token. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"  0: portrait of ohwx woman with eyes closed\n  25: portrait of ohwx woman with eyes opened\n  50: portrait of ohwx woman smiling\n")),(0,o.kt)("p",null,"Notice that the last prompt marks the end of the video generation and will not be rendered.\nWhen not specified in the prompt, our default camera movement is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"  translation_z=0:(-0.5)\n  rotation_3d_x=0:(2*sin(3.14*t/100)/80)\n  rotation_3d_y=0:(2*sin(3.14*t/100)/40)\n  rotation_3d_z=0:(2*sin(3.14*t/50)/40)\n")),(0,o.kt)("p",null,"The camera will slowly pull back and wiggle-rotate slightly.\nYou can always adjust the camera movement by adding parameters at the start of the prompt. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"  translation_x=0:(-2)\n  translation_y=0:(1)\n  translation_z=0:(0.5)\n  rotation_3d_x=0:(0)\n  rotation_3d_y=0:(1.5)\n  rotation_3d_z=0:(0)\n  0: portrait of ohwx woman with eyes closed\n  25: portrait of ohwx woman with eyes opened\n  50: portrait of ohwx woman smiling\n")),(0,o.kt)("p",null,"The X-axis is a left/right translation; a positive translation shifts the camera to the right."),(0,o.kt)("p",null,"The Y-axis is an up/down translation; a positive translation shifts the camera upward."),(0,o.kt)("p",null,"The Z-axis is a forward/backward translation; a positive translation shifts the camera forward."),(0,o.kt)("h1",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"Here is a partial list of parameters you can use in the prompt line to achieve certain control and effects:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"strength_schedule=0:(0.50)")," How \u201cloose\u201d is the image generation from the previous frame. Lower numbers increase the probability of realizing the next prompt, but decrease the probability of temporal coherence."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"seed=1")," A starting point for an outcome (-1=random starting point)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"diffusion_cadence=2")," Blending of frames in the sequence"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.astria.ai/gallery/video"},"video gallery")," for inspiration. You can always copy/paste prompts to your tune. Don\u2019t forget to change the token accordingly."),(0,o.kt)("p",null,"The video module is based on the Deforum Stable Diffusion notebook, and use the same parameters."))}d.isMDXComponent=!0}}]);