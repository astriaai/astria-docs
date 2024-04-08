"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[7721],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},i="AI Photoshoot",s={unversionedId:"use-cases/ai-photoshoot",id:"use-cases/ai-photoshoot",title:"AI Photoshoot",description:"Overview",source:"@site/docs/use-cases/0-ai-photoshoot.md",sourceDirName:"use-cases",slug:"/use-cases/ai-photoshoot",permalink:"/docs/use-cases/ai-photoshoot",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use cases",permalink:"/docs/category/use-cases"},next:{title:"Fine-tuning guide",permalink:"/docs/use-cases/finetuning-guide"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a model",id:"1-create-a-model",level:3},{value:"2. Generate images",id:"2-generate-images",level:3},{value:"Tips for training images",id:"tips-for-training-images",level:2},{value:"Tips for inference",id:"tips-for-inference",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ai-photoshoot"},"AI Photoshoot"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,'The term "AI Photoshoot", "AI Headshots" or "AI Avatars" refers to the process of creating a generative AI model from around 16 images of a person. This model can then be used to create professional photography imagery of the person, without requiring high-end camera equipment, lighting, or wardrobe.'),(0,n.kt)("p",null,"AI headshots are particularly useful for social profile photos, such as those used on LinkedIn or Facebook, as well as on dating sites."),(0,n.kt)("p",null,"Another recent trend is the creation of virtual social influencers - consistent characters that do not exist in reality, but can be generated consistently in different scenes and everyday life."),(0,n.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"1.5rem"}},(0,n.kt)("div",null,(0,n.kt)("figcaption",null,"Training images"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"source.png",src:a(3957).Z,width:"2000",height:"2203"}))),(0,n.kt)("div",null,(0,n.kt)("figcaption",null,"Output images"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"generated.png",src:a(8642).Z,width:"2000",height:"2203"})))),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-create-a-model"},"1. Create a model"),(0,n.kt)("p",null,'At this stage, we will create a 2GB numeric (AI) model file that contains the "features" of a person. This is not the part where we generate new images, but only train a dedicated AI model.'),(0,n.kt)("p",null,"To begin, go to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.astria.ai/tunes/new"},"New tune")," page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Title")," - Enter the person's name, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"Elon Musk"),". Or choose whatever title that fits your needs. Choosing a title is not a part of the actual training of the model."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Class Name")," - Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"man")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"woman"),", or possibly ",(0,n.kt)("inlineCode",{parentName:"p"},"boy, girl, cat"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"dog"),". This is highly important as it is a part of the actual technical training of your model. We automatically generate images of the \"class\" while training, and by comparing them to your images (the training set), the model 'learns' your subject's unique features."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Base tune")," - Select a baseline model on which you would like to train. For realistic generations, we recommend using ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://www.astria.ai/gallery/tunes/690204/prompts"},"Realistic Vision v5.1")),", while for more artistic trainings, use ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://www.astria.ai/gallery/tunes/538238/prompts"},"Deliberate")),"."),(0,n.kt)("p",null,"Other settings are optional and can be changed to your preference."),(0,n.kt)("h3",{id:"2-generate-images"},"2. Generate images"),(0,n.kt)("p",null,"Even before the model is ready, you can prepare a queue of prompts (texts) that will be fed into the model and used to generate models."),(0,n.kt)("h2",{id:"tips-for-training-images"},"Tips for training images"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Upload both portrait and full body shots of the person"),(0,n.kt)("li",{parentName:"ol"},"Use 26 pictures of your subject. Preferably cropped to 1:1 aspect ratio."),(0,n.kt)("li",{parentName:"ol"},"Use 6 photos of full body or entire object + 10 medium shot photos from the chest up + 10 close-ups."),(0,n.kt)("li",{parentName:"ol"},"Variation is key - Change body pose for every picture, use pictures from different days backgrounds and lighting. Every picture of your subject should introduce new info about your subject."),(0,n.kt)("li",{parentName:"ol"},"Avoid pictures taken at the same hour/day. For example few pictures with the same shirt will make the model learn the shirt as well as part of the subject."),(0,n.kt)("li",{parentName:"ol"},"Always pick a new background."),(0,n.kt)("li",{parentName:"ol"},"Do not upload pictures mixed with other people"),(0,n.kt)("li",{parentName:"ol"},"Do not upload upload funny faces")),(0,n.kt)("h2",{id:"tips-for-inference"},"Tips for inference"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"ohwx woman/man")," at the ",(0,n.kt)("em",{parentName:"li"},"beginning")," of the sentence."),(0,n.kt)("li",{parentName:"ol"},"Textual inversion can reduce similarity. Try to avoid it. Specifically TIs such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ng_deepnegative_v1_75t")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"CyberRealistic"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/loras"},"LoRA")," can reduce similarity. Keep LoRA strength low.")))}d.isMDXComponent=!0},3957:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ai-photoshoot-input-3e9da4e3f5e050cbe4f36788a62521de.png"},8642:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ai-photoshoot-output-eae27ea09d0f21a7514e4b20b020fc24.png"}}]);