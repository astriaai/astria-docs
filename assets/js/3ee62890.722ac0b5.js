"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[2247],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>g});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),m=n,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return i?r.createElement(g,o(o({ref:t},u),{},{components:i})):r.createElement(g,o({ref:t},u))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1034:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=i(7462),n=(i(7294),i(3905));const a={title:"Fine-tuning guide",description:"The guide for high quality avatars"},o="Fine-tuning guide",s={unversionedId:"use-cases/finetuning-guide",id:"use-cases/finetuning-guide",title:"Fine-tuning guide",description:"The guide for high quality avatars",source:"@site/docs/use-cases/05-finetuning-guide.md",sourceDirName:"use-cases",slug:"/use-cases/finetuning-guide",permalink:"/docs/use-cases/finetuning-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-cases/05-finetuning-guide.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Fine-tuning guide",description:"The guide for high quality avatars"},sidebar:"tutorialSidebar",previous:{title:"AI Photoshoot",permalink:"/docs/use-cases/ai-photoshoot"},next:{title:"SDXL training",permalink:"/docs/use-cases/sdxl-training"}},l={},c=[{value:"Tracking subject similarity",id:"tracking-subject-similarity",level:2},{value:"Fine-tuning training tips",id:"fine-tuning-training-tips",level:2},{value:"Prompt generation tips",id:"prompt-generation-tips",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fine-tuning-guide"},"Fine-tuning guide"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," The guide for high quality avatars")),(0,n.kt)("p",null,"When building an app for avatars or professional AI photoshoot, you should consider two aspects"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Similarity to the original subject"),(0,n.kt)("li",{parentName:"ol"},"High quality generation which look professional")),(0,n.kt)("h2",{id:"tracking-subject-similarity"},"Tracking subject similarity"),(0,n.kt)("p",null,"Make sure to test results on a person you closely know and can judge similarity. Create a list of candidate prompts and run them on 2-3 subjects. For each prompt ask the person to rate how many of the images look similar. Finally sum the ratios for each prompt and compare prompts. Improve the prompts or reconsider a different prompt if similarity is low. Alternatively, consider switching to a different base model to match ethnicity or avoid biased models."),(0,n.kt)("h2",{id:"fine-tuning-training-tips"},"Fine-tuning training tips"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Enable ",(0,n.kt)("strong",{parentName:"li"},"Face-detection")," in your ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/users/edit#profile"},"account settings page")," - This will augment the training dataset with face-crops from the original training images. This should increase similarity to the subject but can also cause generations to be more toward close-ups instead of nice medium or long shots. In this case you might need to adjust the prompts to use emphasis weights."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Base model")," - Select plain SD15 for better resemblance. Select  ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/tunes/627443/prompts"},"Realistic Vision V3.0")," or ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/gallery/tunes/678865/prompts"},"V5.0")," as a base model for nicer pictures - but make sure to test prompts on subjects you know. These models are exceptionally good in realistic results. If you\u2019d like to get generations that are more artistic - consider Deliberate or Reliberate as a base model. For a more diverse ethnically and possibly better similarity to subjects, consider ",(0,n.kt)("a",{parentName:"li",href:"https://www.astria.ai/tunes/753832/prompts"},"Life Like Ethnicities"),".\nFinally we suggest checking Astria\u2019s latest training on ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/sdxl-training"},"SDXL with text-embedding + LoRA"),".")),(0,n.kt)("h2",{id:"prompt-generation-tips"},"Prompt generation tips"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("strong",{parentName:"li"},"width and height")," to ",(0,n.kt)("strong",{parentName:"li"},"512 x 640")," - to match Instagram aspect ratio of 4:5 and also create good portraits. Avoid higher aspect ratios as you might get artifacts such as duplicate heads."),(0,n.kt)("li",{parentName:"ol"},"Enable ",(0,n.kt)("strong",{parentName:"li"},"face-inpainting")," - This is one of Astria\u2019s unique features and allows creating long shots while avoiding deformed faces."),(0,n.kt)("li",{parentName:"ol"},"Weighted prompts - when a prompt has multiple keywords that collide and reduce similarity - use the parenthesis syntax for emphasis to increase similarity, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"(sks man)"),"\nOn the flip side, try to avoid weighted prompts altogether to preserve similarity to subject."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/docs/use-cases/controlnet"},"Controlnet")," with input image to preserve composition and create unique long-shots. Enable ",(0,n.kt)("inlineCode",{parentName:"li"},"controlnet_txt2img")," if you\u2019d like to create more variation and draw more from the prompt. Increase denoising_strength=1"),(0,n.kt)("li",{parentName:"ol"},"Enable ",(0,n.kt)("strong",{parentName:"li"},"face-correct")," - uses a specific model such as GFPGAN to correct faces.")))}d.isMDXComponent=!0}}]);