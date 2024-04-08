"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[2247],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(i),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return i?n.createElement(g,o(o({ref:t},c),{},{components:i})):n.createElement(g,o({ref:t},c))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1034:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={title:"Fine-tuning guide",description:"The guide for high quality avatars and AI photography"},o="Fine-tuning guide",s={unversionedId:"use-cases/finetuning-guide",id:"use-cases/finetuning-guide",title:"Fine-tuning guide",description:"The guide for high quality avatars and AI photography",source:"@site/docs/use-cases/05-finetuning-guide.md",sourceDirName:"use-cases",slug:"/use-cases/finetuning-guide",permalink:"/docs/use-cases/finetuning-guide",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Fine-tuning guide",description:"The guide for high quality avatars and AI photography"},sidebar:"tutorialSidebar",previous:{title:"AI Photoshoot",permalink:"/docs/use-cases/ai-photoshoot"},next:{title:"SDXL training",permalink:"/docs/use-cases/sdxl-training"}},l={},p=[{value:"Tracking subject similarity",id:"tracking-subject-similarity",level:2},{value:"Fine-tuning training tips",id:"fine-tuning-training-tips",level:2},{value:"Prompt generation tips",id:"prompt-generation-tips",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fine-tuning-guide"},"Fine-tuning guide"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," The guide for high quality avatars and AI photography")),(0,r.kt)("p",null,"When building an app for avatars or professional AI photoshoot, you should consider two aspects"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Similarity to the original subject"),(0,r.kt)("li",{parentName:"ol"},"High quality generation which look professional")),(0,r.kt)("h2",{id:"tracking-subject-similarity"},"Tracking subject similarity"),(0,r.kt)("p",null,"Make sure to test results on a person you closely know and can judge similarity. Create a list of candidate prompts and run them on 2-3 subjects. For each prompt ask the person to rate how many of the images look similar. Finally sum the ratios for each prompt and compare prompts. Improve the prompts or reconsider a different prompt if similarity is low. Alternatively, consider switching to a different base model to match ethnicity or avoid biased models."),(0,r.kt)("h2",{id:"fine-tuning-training-tips"},"Fine-tuning training tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enable ",(0,r.kt)("strong",{parentName:"li"},"Face-detection")," in your ",(0,r.kt)("a",{parentName:"li",href:"https://www.astria.ai/users/edit#profile"},"account settings page")," - This will augment the training dataset with face-crops from the original training images. This should increase similarity to the subject but can also cause generations to be more toward close-ups instead of nice medium or long shots. In this case you might need to adjust the prompts to use emphasis weights."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Base model")," - Select plain SD15 for better resemblance. Select  ",(0,r.kt)("a",{parentName:"li",href:"https://www.astria.ai/gallery/tunes/690204/prompts"},"Realistic Vision V5.1")," as a base model for nicer pictures. These models are good in realistic results. If you\u2019d like to get generations that are more artistic - consider ",(0,r.kt)("a",{parentName:"li",href:"https://www.astria.ai/gallery/tunes/538238/prompts"},"Deliberate")," or Reliberate as a base model. For a more diverse ethnically and possibly better similarity to subjects, consider ",(0,r.kt)("a",{parentName:"li",href:"https://www.astria.ai/tunes/753832/prompts"},"Life Like Ethnicities"),".\nFinally, we suggest checking training on ",(0,r.kt)("a",{parentName:"li",href:"/docs/use-cases/sdxl-training"},"SDXL with text-embedding + LoRA"),".")),(0,r.kt)("h2",{id:"prompt-generation-tips"},"Prompt generation tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"width and height")," to ",(0,r.kt)("strong",{parentName:"li"},"512 x 640")," - to match Instagram aspect ratio of 4:5 and also create good portraits. Avoid higher aspect ratios as you might get artifacts such as duplicate heads."),(0,r.kt)("li",{parentName:"ol"},"Enable ",(0,r.kt)("strong",{parentName:"li"},"face-inpainting")," - This is one of Astria\u2019s unique features and allows creating long shots while avoiding deformed faces."),(0,r.kt)("li",{parentName:"ol"},"Weighted prompts - when a prompt has multiple keywords that collide and reduce similarity - use the parenthesis syntax for emphasis to increase similarity, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"(ohwx man)"),"\nOn the flip side, try to avoid weighted prompts altogether to preserve similarity to subject."),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/docs/use-cases/controlnet"},"Controlnet")," with input image to preserve composition and create unique long-shots. Enable ",(0,r.kt)("inlineCode",{parentName:"li"},"controlnet_txt2img")," if you\u2019d like to create more variation and draw more from the prompt. Increase denoising_strength=1")))}d.isMDXComponent=!0}}]);