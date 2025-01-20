"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[1213],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));a(4996);const l=a.p+"assets/images/upscale-input-179b70105f9adc67180b6789f7f56553.jpg",i=a.p+"assets/images/upscale-result-3a748db52d0105807252262fcdfc5d05.jpg",s=a.p+"assets/images/upscale-lenna-in-bbba5c1db5c20f8aa84f4f7ce7f37763.png",o=(a.p,a.p+"assets/images/upscale-lenna-out2-3c908eb514c4734ff3df76c0c72b777c.jpg"),p={hide_table_of_contents:!0,image:"./img/upscale/upscale-lenna-out2.jpg"},c="Upscale",u={unversionedId:"use-cases/upscale",id:"use-cases/upscale",title:"Upscale",description:"Low-res input",source:"@site/docs/use-cases/upscale.md",sourceDirName:"use-cases",slug:"/use-cases/upscale",permalink:"/docs/use-cases/upscale",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0,image:"./img/upscale/upscale-lenna-out2.jpg"},sidebar:"tutorialSidebar",previous:{title:"AI Interior Design",permalink:"/docs/use-cases/room-redesign"},next:{title:"Features",permalink:"/docs/category/features"}},d={image:a(7575).Z},m=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"POST /tunes/:id/prompts",id:"post-tunesidprompts",level:4}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},f=g("Tabs"),h=g("TabItem"),y={toc:m},k="wrapper";function b(e){let{components:t,...p}=e;return(0,r.kt)(k,(0,n.Z)({},y,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upscale"},"Upscale"),(0,r.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"1.5rem"}},(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Low-res input"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upscale-input",src:a(744).Z,width:"1152",height:"768"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,(0,r.kt)("a",{href:"https://www.astria.ai/gallery?text=only_upscale"},"Upscaled result")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upscale-result",src:a(718).Z,width:"2048",height:"1366"})))),(0,r.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"1.5rem"}},(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Low-res input"),(0,r.kt)("div",{style:{backgroundImage:"url("+l+")",backgroundPosition:"50% 20%",backgroundSize:3e3,width:"100%",height:300}})),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,(0,r.kt)("a",{href:"https://www.astria.ai/gallery?text=only_upscale"},"Upscaled result")),(0,r.kt)("div",{style:{backgroundImage:"url('"+i+"')",backgroundPosition:"50% 20%",backgroundSize:3e3,width:"100%",height:300}}))),(0,r.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"1.5rem"}},(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Low-res input"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upscale-input",src:a(6733).Z,width:"512",height:"512"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,(0,r.kt)("a",{href:"https://www.astria.ai/gallery?text=only_upscale"},"Upscaled result")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"upscale-result",src:a(7575).Z,width:"1024",height:"1024"})))),(0,r.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"1.5rem"}},(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Low-res input"),(0,r.kt)("div",{style:{backgroundImage:"url("+s+")",backgroundPosition:"50% 20%",backgroundSize:1e3,width:"100%",height:300}})),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,(0,r.kt)("a",{href:"https://www.astria.ai/gallery?text=only_upscale"},"Upscaled result")),(0,r.kt)("div",{style:{backgroundImage:"url('"+o+"')",backgroundPosition:"50% 20%",backgroundSize:1e3,width:"100%",height:300}}))),(0,r.kt)("div",{className:"api-method"},(0,r.kt)("div",null,(0,r.kt)("p",null,"See example prompts in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/gallery?text=only_upscale"},"gallery"),". Also check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/upscale"},"free upscaling tool page"),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Upscaling uses model and text guidance to add details to original image. Depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"denoising_strength")," the model can hallucinate more details shifting away from the original image. For applying tiled upscaling straight after image generation see ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/tiled-upscale"},"tiled upscaling"),". "),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("a",{parentName:"li",href:"https://www.astria.ai/prompts"},"prompts")," generate page - Set an input image in the Controlnet/img2img section."),(0,r.kt)("li",{parentName:"ol"},"Add a text prompt ending with ",(0,r.kt)("inlineCode",{parentName:"li"},"--only_upscale")),(0,r.kt)("li",{parentName:"ol"},"Select a model from the dropdown that matches the style and content of the input image.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Example prompt for the result above"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"masterpiece, best quality, highres, <lora:more_details:0.5> <lora:SDXLrender_v2.0:1> --only_upscale\nnum_images=1\nnegative_prompt=(worst quality, low quality, normal quality:2) JuggernautNegative-neg\nseed=\nsteps=16\ncfg_scale=6.0\ncontrolnet=\ninput_image_url=https://sdbooth2-production.s3.amazonaws.com/cvrx6g5wx5tbiuz9ivoah1j19why\nmask_image_url=\ndenoising_strength=0.1\ncontrolnet_conditioning_scale=\ncontrolnet_txt2img=false\nsuper_resolution=false\ninpaint_faces=false\nface_correct=false\nfilm_grain=false\nface_swap=false\nhires_fix=false\nbackend_version=1\nprompt_expansion=undefined\nar=1:1\nscheduler=euler_a\ncolor_grading=\nuse_lpw=false\nw=\nh=\n"))),(0,r.kt)("div",null,(0,r.kt)("h4",{id:"post-tunesidprompts"},"POST /tunes/:id/prompts"),(0,r.kt)(f,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(h,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'# Note the hard-coded 690204 which is the tune_id of Realistic Vision v5.1 from the gallery\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/690204/prompts \\\n          -F prompt[text]=very detailed, masterpiece, intricate details, UHD, 8K --only_upscale <lora:add_detail:1>" \\\n          -F prompt[negative_prompt]="lowres, medium quality, lack of details, bad quality, worst quality, blur, blurry, pixelated, jpeg artifacts" \\\n          -F prompt[callback]="https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1" \n'))),(0,r.kt)(h,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fetch = require('node-fetch');\nconst FormData = require('form-data');\n\n// Note the hard-coded 690204 which is the tune_id of Realistic Vision v5.1 from the gallery\nconst API_URL = 'https://api.astria.ai/tunes/690204/prompts';\nconst API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key\nconst headers = { Authorization: `Bearer ${API_KEY}` }\n\nconst form = new FormData();\nform.append('prompt[text]', 'very detailed, masterpiece, intricate details, UHD, 8K --only_upscale <lora:add_detail:1>');\nform.append('prompt[negative_prompt]', 'lowres, medium quality, lack of details, bad quality, worst quality, blur, blurry, pixelated, jpeg artifacts');\nform.append('prompt[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1');\n\nfetch(API_URL, {\n  method: 'POST',\n  headers: headers,\n  body: form\n}).then(response => response.json())\n\n\n"))),(0,r.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\n# Note the hard-coded 690204 which is the tune_id of Realistic Vision v5.1 from the gallery\nAPI_URL = 'https://api.astria.ai/tunes/690204/prompts'\nAPI_KEY = 'YOUR_API_KEY'  # Replace with your actual API key\n\nheaders = {\n    'Authorization': f'Bearer {API_KEY}'\n}\n\ndata = {\n  'prompt[text]': 'very detailed, masterpiece, intricate details, UHD, 8K --only_upscale <lora:add_detail:1>',\n  'prompt[negative_prompt]': 'lowres, medium quality, lack of details, bad quality, worst quality, blur, blurry, pixelated, jpeg artifacts',\n  'prompt[callback]': 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1'\n}\nfiles = []\nfiles.append((f\"tune[prompts_attributes][{i}][input_image]\", load_image(prompt['input_image'])))\n\n\nresponse = requests.post(API_URL, headers=headers, data=data)\n")))))))}b.isMDXComponent=!0},744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upscale-input-179b70105f9adc67180b6789f7f56553.jpg"},6733:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upscale-lenna-in-bbba5c1db5c20f8aa84f4f7ce7f37763.png"},7575:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upscale-lenna-out2-3c908eb514c4734ff3df76c0c72b777c.jpg"},718:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upscale-result-3a748db52d0105807252262fcdfc5d05.jpg"}}]);