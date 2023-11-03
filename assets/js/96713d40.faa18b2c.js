"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[4762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),p=n(1980),s=n(7392),u=n(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[p,s]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=p??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,r]),tabValues:r}}var g=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:t,block:n,selectedValue:l,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(c(t),p(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(_,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return o.createElement(b,(0,a.Z)({key:String(t)},e))}},6856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162);const l={title:"Create a prompt",hide_table_of_contents:!0},p=void 0,s={unversionedId:"api/prompt/create",id:"api/prompt/create",title:"Create a prompt",description:"Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images.",source:"@site/docs/api/1-prompt/1-create.md",sourceDirName:"api/1-prompt",slug:"/api/prompt/create",permalink:"/docs/api/prompt/create",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/1-prompt/1-create.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a prompt",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"The prompt object",permalink:"/docs/api/prompt/prompt"},next:{title:"Retrieve a prompt",permalink:"/docs/api/prompt/retrieve"}},u={},c=[{value:"Parameters",id:"parameters",level:3},{value:"<code>text</code> (required)",id:"text-required",level:4},{value:"<code>negative_prompt</code> (optional)",id:"negative_prompt-optional",level:4},{value:"<code>callback</code> (optional)",id:"callback-optional",level:4},{value:"<code>ar</code> (optional)",id:"ar-optional",level:4},{value:"<code>num_images</code> (optional)",id:"num_images-optional",level:4},{value:"<code>super_resolution</code> (optional)",id:"super_resolution-optional",level:4},{value:"<code>inpaint_faces</code> (optional)",id:"inpaint_faces-optional",level:4},{value:"<code>hires_fix</code> (optional)",id:"hires_fix-optional",level:4},{value:"<code>face_correct</code> (optional)",id:"face_correct-optional",level:4},{value:"<code>face_swap</code> (optional)",id:"face_swap-optional",level:4},{value:"<code>cfg_scale</code> (optional)",id:"cfg_scale-optional",level:4},{value:"<code>steps</code> (optional)",id:"steps-optional",level:4},{value:"<code>use_lpw</code> (optional)",id:"use_lpw-optional",level:4},{value:"<code>w</code> (optional)",id:"w-optional",level:4},{value:"<code>h</code> (optional)",id:"h-optional",level:4},{value:"<code>scheduler</code> (optional)",id:"scheduler-optional",level:4},{value:"<code>color_grading</code> (optional)",id:"color_grading-optional",level:4},{value:"<code>film_grain</code> (optional)",id:"film_grain-optional",level:4},{value:"Img2Img / ControlNet",id:"img2img--controlnet",level:2},{value:"<code>controlnet</code> (optional)",id:"controlnet-optional",level:4},{value:"<code>denoising_strength</code> (optional)",id:"denoising_strength-optional",level:4},{value:"<code>controlnet_conditioning_scale</code> (optional)",id:"controlnet_conditioning_scale-optional",level:4},{value:"<code>controlnet_txt2img</code> (optional)",id:"controlnet_txt2img-optional",level:4},{value:"<code>input_image</code> (optional)",id:"input_image-optional",level:4},{value:"<code>input_image_url</code> (optional)",id:"input_image_url-optional",level:4},{value:"<code>mask_image</code> (optional)",id:"mask_image-optional",level:4},{value:"<code>mask_image_url</code> (optional)",id:"mask_image_url-optional",level:4},{value:"Returns",id:"returns",level:3},{value:"POST /tunes/:id/prompts",id:"post-tunesidprompts",level:4},{value:"Response",id:"response",level:4}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"api-method"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"text-required"},(0,o.kt)("inlineCode",{parentName:"h4"},"text")," (required)"),(0,o.kt)("p",null,"Description of the image."),(0,o.kt)("h4",{id:"negative_prompt-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"negative_prompt")," (optional)"),(0,o.kt)("p",null,"A comma separated list of words that should not appear in the image."),(0,o.kt)("h4",{id:"callback-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"callback")," (optional)"),(0,o.kt)("p",null,"a URL that will be called when the prompt is done processing. The callback is a POST request where the body contains the prompt object."),(0,o.kt)("h4",{id:"ar-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"ar")," (optional)"),(0,o.kt)("p",null,"Apect-Ratio. ",(0,o.kt)("inlineCode",{parentName:"p"},"1:1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"portrait"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"16:9"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"landscape"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"anamorphic")),(0,o.kt)("h4",{id:"num_images-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"num_images")," (optional)"),(0,o.kt)("p",null,"Number of images to generate. Range: 1-8."),(0,o.kt)("h4",{id:"super_resolution-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"super_resolution")," (optional)"),(0,o.kt)("p",null,"Boolean. X4 super-resolution."),(0,o.kt)("h4",{id:"inpaint_faces-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"inpaint_faces")," (optional)"),(0,o.kt)("p",null,"Boolean. Requires super-resolution on. Inpaints faces."),(0,o.kt)("h4",{id:"hires_fix-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"hires_fix")," (optional)"),(0,o.kt)("p",null,"Boolean. Super resolution details. Available only when super_resolution is true. Adds details."),(0,o.kt)("h4",{id:"face_correct-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"face_correct")," (optional)"),(0,o.kt)("p",null,"Boolean. Runs another AI model on top to correct the face in the image."),(0,o.kt)("h4",{id:"face_swap-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"face_swap")," (optional)"),(0,o.kt)("p",null,"Boolean. Uses training images to swap face and enhance resemblance."),(0,o.kt)("h4",{id:"cfg_scale-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"cfg_scale")," (optional)"),(0,o.kt)("p",null,"Float. How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt). Range 0-15"),(0,o.kt)("h4",{id:"steps-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"steps")," (optional)"),(0,o.kt)("p",null,"Integer. Number of diffusion steps to run . Range 0-50"),(0,o.kt)("h4",{id:"use_lpw-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"use_lpw")," (optional)"),(0,o.kt)("p",null,"Boolean. Use weighted prompts."),(0,o.kt)("h4",{id:"w-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"w")," (optional)"),(0,o.kt)("p",null,"width - In multiples of 8."),(0,o.kt)("h4",{id:"h-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"h")," (optional)"),(0,o.kt)("p",null,"height - In multiples of 8."),(0,o.kt)("h4",{id:"scheduler-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"scheduler")," (optional)"),(0,o.kt)("p",null,"enum: ",(0,o.kt)("inlineCode",{parentName:"p"},"euler"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"euler_a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dpm++2m_karras"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dpm++sde_karras"),". If not specified the default ",(0,o.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit"},"account scheduler")," will be used."),(0,o.kt)("h4",{id:"color_grading-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"color_grading")," (optional)"),(0,o.kt)("p",null,"enum: ",(0,o.kt)("inlineCode",{parentName:"p"},"Film Velvia"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Film Portra"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Ektar"),"."),(0,o.kt)("h4",{id:"film_grain-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"film_grain")," (optional)"),(0,o.kt)("p",null,"boolean - Adds noise to the image to make it look more realistic."),(0,o.kt)("h2",{id:"img2img--controlnet"},"Img2Img / ControlNet"),(0,o.kt)("h4",{id:"controlnet-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"controlnet")," (optional)"),(0,o.kt)("p",null,"BETA. Requires input_image. Possible values: lineart, canny, depth, mlsd, hed, pose, pose_with_hand, pose_with_face, pose_face_and_hand, tile, qr."),(0,o.kt)("h4",{id:"denoising_strength-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"denoising_strength")," (optional)"),(0,o.kt)("p",null,"For img2img. 1.0 - Take prompt. 0.0 - Take image. Range: 0.0-1.0"),(0,o.kt)("h4",{id:"controlnet_conditioning_scale-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"controlnet_conditioning_scale")," (optional)"),(0,o.kt)("p",null,"Strength of controlnet conditioning. 0.0-1.0"),(0,o.kt)("h4",{id:"controlnet_txt2img-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"controlnet_txt2img")," (optional)"),(0,o.kt)("p",null,"Boolean toggle. True for text to image controlnet. False for image to image controlnet."),(0,o.kt)("h4",{id:"input_image-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"input_image")," (optional)"),(0,o.kt)("p",null,"Binary multi-part request with the image. Used in conjunction with controlnet parameter."),(0,o.kt)("h4",{id:"input_image_url-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"input_image_url")," (optional)"),(0,o.kt)("p",null,"URL to an image. Used in conjunction with controlnet parameter."),(0,o.kt)("h4",{id:"mask_image-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"mask_image")," (optional)"),(0,o.kt)("p",null,"Binary multi-part request with one channel mask image. Used in conjunction with input_image parameter for inpainting"),(0,o.kt)("h4",{id:"mask_image_url-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},"mask_image_url")," (optional)"),(0,o.kt)("p",null,"URL to a one channel mask image. Used in conjunction with input_image_url parameter for inpainting."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"Returns a prompt object if successful which will start processing if tune is processed.")),(0,o.kt)("div",null,(0,o.kt)("h4",{id:"post-tunesidprompts"},"POST /tunes/:id/prompts"),(0,o.kt)(r.Z,{groupId:"lang",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/1/prompts \\\n          -F prompt[text]="a painting of sks man in the style of Van Gogh" \\\n          -F prompt[negative_prompt]="old, blemish, wrin" \\\n          -F prompt[super_resolution]=true \\\n          -F prompt[face_correct]=true \\\n          -F prompt[callback]="https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1" \n'))),(0,o.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const fetch = require(`node-fetch');\nconst FormData = require('form-data');\n\nconst API_URL = 'https://api.astria.ai/tunes/1/prompts';\nconst API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key\nconst headers = { Authorization: `Bearer ${API_KEY}` }\n\nconst form = new FormData();\nform.append('prompt[text]', 'a painting of sks man in the style of Van Gogh');\nform.append('prompt[negative_prompt]', 'old, blemish, wrin');\nform.append('prompt[super_resolution]', true);\nform.append('prompt[face_correct]', true);\nform.append('prompt[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1');\n\nfetch(API_URL, {\n  method: 'POST',\n  headers: headers,\n  body: form\n}).then(response => response.json())\n\n\n"))),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nAPI_URL = 'https://api.astria.ai/tunes/1/prompts'\nAPI_KEY = 'YOUR_API_KEY'  # Replace with your actual API key\n\nheaders = {\n    'Authorization': f'Bearer {API_KEY}'\n}\n\ndata = {\n  'prompt[text]': 'a painting of sks man in the style of Van Gogh',\n  'prompt[negative_prompt]': 'old, blemish, wrin',\n  'prompt[super_resolution]': True,\n  'prompt[face_correct]': True,\n  'prompt[callback]': 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1'\n}\nfiles = []\nfiles.append((f\"tune[prompts_attributes][{i}][input_image]\", load_image(prompt['input_image'])))\n\nresponse = requests.post(API_URL, headers=headers, data=data)\n")))),(0,o.kt)("h4",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "callback": "https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1",\n  "text": "a painting of sks man in the style of Van Gogh",\n  "negative_prompt": "old, blemish, wrinkles, mole",\n  "cfg_scale": null,\n  "steps": null,\n  "seed": null,\n  "trained_at": null,\n  "started_training_at": null,\n  "created_at": "2022-10-06T16:12:54.505Z",\n  "updated_at": "2022-10-06T16:12:54.505Z",\n  "tune_id": 1,\n  "url": "http://api.astria.ai/tunes/1/prompts/1.json"\n}\n')))))}h.isMDXComponent=!0}}]);