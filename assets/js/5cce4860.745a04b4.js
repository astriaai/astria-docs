"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[2585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={},i="Multi-Pass inference",l={unversionedId:"features/multi-pass-inference",id:"features/multi-pass-inference",title:"Multi-Pass inference",description:"BETA",source:"@site/docs/features/multi-pass-inference.md",sourceDirName:"features",slug:"/features/multi-pass-inference",permalink:"/docs/features/multi-pass-inference",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/multi-pass-inference.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LoRAs",permalink:"/docs/features/loras"},next:{title:"Multi-Person",permalink:"/docs/features/multiperson"}},o={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Example prompt",id:"example-prompt",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-pass-inference"},"Multi-Pass inference"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BETA")),(0,r.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr 1fr 1fr",gap:"1.5rem"}},(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Gym"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"source.png",src:n(7306).Z,width:"3072",height:"4608"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Hiking"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generated.png",src:n(5605).Z,width:"3072",height:"4608"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Posh"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generated.png",src:n(6149).Z,width:"1536",height:"2304"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Swimsuit"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generated.png",src:n(2626).Z,width:"1536",height:"2304"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Fashion"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"source.png",src:n(5101).Z,width:"3072",height:"4608"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Starwars"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generated.png",src:n(2092).Z,width:"2048",height:"3070"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Mech-warrior"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generated.png",src:n(4406).Z,width:"3072",height:"4608"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Dreamy"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"generated.png",src:n(2056).Z,width:"3072",height:"4608"})))),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"The prompt is divided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"BREAK")," keyword such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1st ",(0,r.kt)("strong",{parentName:"li"},"base prompt")," used to generate the background and scene. "),(0,r.kt)("li",{parentName:"ul"},"2nd ",(0,r.kt)("strong",{parentName:"li"},"common prompt")," that's concatenated to each person prompt and the base prompt to avoid repetition."),(0,r.kt)("li",{parentName:"ul"},"3rd ",(0,r.kt)("strong",{parentName:"li"},"person prompt")," Describe what the person is wearing or holding.")),(0,r.kt)("p",null,"To load the person checkpoint or LoRA use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<lora:ID:1>")," syntax."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note that multi-pass works specifically well with ",(0,r.kt)("inlineCode",{parentName:"p"},"SD15")," models, while ",(0,r.kt)("inlineCode",{parentName:"p"},"SDXL")," models are not recommended.")),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Base prompt first pass allows to use the full breadth of an unmodified model. As such image compositions, fabrics and textures and details will show much better."),(0,r.kt)("li",{parentName:"ul"},"Separating the person from the background allows to prompt in more details on clothing, accessories and colors."),(0,r.kt)("li",{parentName:"ul"},"Better similarity to the original subject.")),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/gallery?branch=sd15&is_multiperson=true"},"gallery")," for more examples."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/pricing"},"pricing")," for the cost of this feature."),(0,r.kt)("h2",{id:"example-prompt"},"Example prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"a model in preppy style, old money aesthetic, posh style, elite school stlye, luxurious style, gossip girl neo-prep style, ralph lauren style, country club style, ivy league style\n--tiled_upscale\nBREAK\nBREAK sks woman old money aesthetic, posh style, elite school, luxurious, gossip girl neo-prep style, ralph lauren style, ivy league style  <lora:753945:1>\nnum_images=4\nnegative_prompt=asian, , old, , multiple heads, 2 heads, elongated body, double image, 2 faces, multiple people, double head, , (nsfw), nsfw, nsfw, nsfw, nude, nude, nude, porn, porn, porn, naked, naked, nude, porn, black and white, monochrome, skin marks, skin lesions, pimples, <cyberrealistic-neg>, <badhandv4>, <negative-hand>, black and white, monochrome, greyscale, black and white, monochrome, greyscale, (black and white, monochrome, greyscale), frilly, frilled, lacy, ruffled, armpit hair, victorian, (sunglasses), (sunglasses), (deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, ex BREAK BREAK sunglasses, snow, skiing, ski resorts, snowboard\nseed=33504\nsteps=30\ncfg_scale=\ncontrolnet=\ninput_image_url=\nmask_image_url=\ndenoising_strength=\ncontrolnet_conditioning_scale=\ncontrolnet_txt2img=false\nsuper_resolution=true\ninpaint_faces=true\nface_correct=false\nfilm_grain=true\nface_swap=true\nhires_fix=false\nprompt_expansion=false\nar=1:1\nscheduler=dpm++sde_karras\ncolor_grading=\nuse_lpw=true\nw=512\nh=768\n")))}d.isMDXComponent=!0},7306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multipass-1-3fad6ed550153c10fa613cda7ce94924.jpeg"},5605:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multipass-2-e292d27c95dd1cbda105cc0b51f780af.jpeg"},6149:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multipass-3-83a8fa2dd107d0d25f4c8574df30e1eb.jpeg"},2626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multipass-4-bdd36b76b18a0a09e94b2745cfd4b182.jpeg"},5101:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multipass-xl-1-199f63a9bca7524238c55680f6fbc708.jpeg"},2092:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multipass-xl-2-22fd2a63e7df9c89239ae4056945a21c.jpeg"},4406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multipass-xl-3-afae0bb7b3da2b9a5d6ccd02e75e6095.jpeg"},2056:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multipass-xl-4-7c04a47cf6322e0c81353d960c4a6a03.jpeg"}}]);