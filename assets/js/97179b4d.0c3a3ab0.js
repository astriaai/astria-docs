"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[5139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},3714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={hide_table_of_contents:!0},s="Flux API usage",u={unversionedId:"api/flux-api",id:"api/flux-api",title:"Flux API usage",description:"For an overview of Flux fine-tuning, see Flux fine-tuning",source:"@site/docs/api/05-flux-api.md",sourceDirName:"api",slug:"/api/flux-api",permalink:"/docs/api/flux-api",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Delete a like",permalink:"/docs/api/like/delete"},next:{title:"SDXL API usage",permalink:"/docs/api/sdxl-api"}},p={},c=[{value:"Step 1: Fine-tune a lora model",id:"step-1-fine-tune-a-lora-model",level:3},{value:"POST /tunes",id:"post-tunes",level:4},{value:"Step 2: Generate images using the fine-tuned model",id:"step-2-generate-images-using-the-fine-tuned-model",level:3},{value:"POST /tunes/:id/prompts",id:"post-tunesidprompts",level:4}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flux-api-usage"},"Flux API usage"),(0,r.kt)("p",null,"For an overview of Flux fine-tuning, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/use-cases/flux-finetuning/"},"Flux fine-tuning")),(0,r.kt)("div",{className:"api-method"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Unlike SD15 checkpoint training, Flux is trained as a LoRA model type. As such, inference is taking place a on a base line model such as Flux1.dev and ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt.text")," should specify the loaded lora such as ",(0,r.kt)("inlineCode",{parentName:"p"},"<lora:123456:1>")," - will load lora with id=123456 and strength=1"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/lora"},"LoRA docs")," on lora syntax"),(0,r.kt)("p",null,"With Flux you cannot combine multiple LoRAs."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To avoid cloning inference details of different model types such as Flux LoRA vs SD1.5 checkpoint, please consider using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/pack/pack/"},"Packs API"),". Packs will help you abstract the inference logic so that you do not have to hard-code prompts and parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"w,h, cfg_scale")," in your backend. Moreover this will allow the creative department to launch packs, make modifications and even track likes, without needing to touch the backend code.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you are receiving ",(0,r.kt)("inlineCode",{parentName:"p"},"422")," error ",(0,r.kt)("inlineCode",{parentName:"p"},"model_type=lora is not supported. Use a checkpoint instead")," - Change the request URL to ",(0,r.kt)("a",{parentName:"p",href:"https://api.astria.ai/tunes/1504944/prompts"},"https://api.astria.ai/tunes/1504944/prompts")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"1504944")," as a hard-coded tune_id of Flux1.Dev from the gallery. See explanation above."))),(0,r.kt)("div",null,(0,r.kt)("h3",{id:"step-1-fine-tune-a-lora-model"},"Step 1: Fine-tune a lora model"),(0,r.kt)("h4",{id:"post-tunes"},"POST /tunes"),(0,r.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'# With images as multipart/form-data\n# Hard coded tune id of Flux1.dev from the gallery - https://www.astria.ai/gallery/tunes \n# https://www.astria.ai/gallery/tunes/1504944/prompts\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \\\n          -F tune[title]="John Doe - UUID - 1234-6789-1234-56789" \\\n          -F tune[name]=man \\\n          -F tune[callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&tune_id=1" \\\n          -F tune[base_tune_id]=1504944 \\\n          -F tune[model_type]="lora" \\\n          -F "tune[images][]=@1.jpg" \\\n          -F "tune[images][]=@2.jpg" \\\n          -F "tune[images][]=@3.jpg" \\\n          -F "tune[images][]=@4.jpg"\n\n# With image_urls as form-data\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \\\n          -F tune[title]="Grumpy cat - UUID - 1234-6789-1234-56789" \\\n          -F tune[name]=cat \\\n          -F tune[callback]="https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1" \\\n          -F tune[base_tune_id]=1504944 \\\n          -F tune[model_type]="lora" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg"\n          \n# As JSON\ncat > data.json <<- EOM\n{\n  "tune": {\n    "title": "Grumpy Cat - UUID - 1234-6789-1234-56789",\n    "name": "cat",\n    "base_tune_id": 1504944,\n    "model_type": "lora",\n    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1",\n    "image_urls": [\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg"\n    ]\n  }\n}\nEOM\n\ncurl -X POST -H"Content-Type: application/json" -H "Authorization: Bearer $API_KEY" --data @data.json  https://api.astria.ai/tunes          \n'))),(0,r.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// NodeJS 16\n// With image_urls and fetch()\n// For NodeJS 18 - do NOT import the below as it is built-in\nimport fetch from \"node-fetch\";\n\nconst API_KEY = 'sd_XXXXXX';\nconst DOMAIN = 'https://api.astria.ai';\n\nfunction createTune() {\n  let options = {\n    method: 'POST',\n    headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      tune: {\n        \"title\": 'John Doe - UUID - 1234-6789-1234-56789',\n        // Hard coded tune id of Flux1.dev from the gallery - https://www.astria.ai/gallery/tunes \n        // https://www.astria.ai/gallery/tunes/1504944/prompts\n        \"base_tune_id\": 1504944,\n        \"name\": \"cat\",\n        \"image_urls\": [\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\"\n        ],\n      }\n    })\n  };\n  return fetch(DOMAIN + '/tunes', options)\n    .then(r => r.json())\n    .then(r => console.log(r))\n}\n\ncreateTune()\n\n\n/// With form-data, fetch() and nested prompts\n// For NodeJS 18 - do NOT import the two below as they are built-in\nimport fetch from \"node-fetch\";\nimport FormData from 'form-data';\nimport fs from 'fs';\n\nconst API_KEY = 'sd_XXXX';\nconst DOMAIN = 'https://api.astria.ai';\nfunction createTune() {\n  let formData = new FormData();\n  formData.append('tune[title]', 'John Doe - UUID - 1234-6789-1234-56789');\n  // Hard coded tune id of Flux1.dev from the gallery - https://www.astria.ai/gallery/tunes \n  // https://www.astria.ai/gallery/tunes/1504944/prompts\n  formData.append('tune[base_tune_id]', 1504944);\n  formData.append('tune[model_type]', 'lora');\n  formData.append('tune[name]', 'man');\n  // Load all JPGs from ./samples directory and append to FormData\n  let files = fs.readdirSync('./samples');\n  files.forEach(file => {\n    if(file.endsWith('.jpg')) {\n      formData.append('tune[images][]', fs.createReadStream(`./samples/${file}`), file);\n    }\n  });\n  formData.append('tune[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1');\n\n  let options = {\n    method: 'POST',\n    headers: {\n      'Authorization': 'Bearer ' + API_KEY\n    },\n    body: formData\n  };\n  return fetch(DOMAIN + '/tunes', options)\n    .then(r => r.json())\n    .then(r => console.log(r));\n}\n\ncreateTune();\n\n"))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nheaders = {\'Authorization\': f\'Bearer {API_KEY}\'}\n\ndef load_image(file_path):\n  with open(file_path, "rb") as f:\n    return f.read()\n\n# Assuming `prompts` and `tune.images` are already defined in your context\n\nimage_data = load_image("assets/image.jpeg")\n\ndata = {\n  "tune[title]": "John Doe - UUID - 1234-6789-1234-56789",\n  "tune[name]": "man",\n  "tune[base_tune_id]": 1504944,\n  "tune[model_type]": "lora",\n}\nfiles = []\n\nfor image in tune.images:\n  image_data = load_image(image)  # Assuming image is a file path\n  files.append(("tune[images][]", image_data))\n\nAPI_URL = \'https://api.astria.ai/tunes\'\nresponse = requests.post(API_URL, data=data, files=files, headers=headers)\nresponse.raise_for_status()\n\n')))),(0,r.kt)("h3",{id:"step-2-generate-images-using-the-fine-tuned-model"},"Step 2: Generate images using the fine-tuned model"),(0,r.kt)("h4",{id:"post-tunesidprompts"},"POST /tunes/:id/prompts"),(0,r.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'# Note the hard-coded 1504944 which is the tune_id of Flux1.dev from the gallery\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/1504944/prompts \\\n          -F prompt[text]="<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh" \\\n          -F prompt[negative_prompt]="old, blemish, wrin" \\\n          -F prompt[super_resolution]=true \\\n          -F prompt[face_correct]=true \\\n          -F prompt[callback]="https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1" \n'))),(0,r.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fetch = require('node-fetch');\nconst FormData = require('form-data');\n\n// Note the hard-coded 1504944 which is the tune_id of Flux1.dev from the gallery\nconst API_URL = 'https://api.astria.ai/tunes/1504944/prompts';\nconst API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key\nconst headers = { Authorization: `Bearer ${API_KEY}` }\n\nconst form = new FormData();\nform.append('prompt[text]', '<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh');\nform.append('prompt[negative_prompt]', 'old, blemish, wrin');\nform.append('prompt[super_resolution]', true);\nform.append('prompt[face_correct]', true);\nform.append('prompt[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1');\n\nfetch(API_URL, {\n  method: 'POST',\n  headers: headers,\n  body: form\n}).then(response => response.json())\n\n\n"))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\n# Note the hard-coded 1504944 which is the tune_id of Flux1.dev from the gallery\nAPI_URL = 'https://api.astria.ai/tunes/1504944/prompts'\nAPI_KEY = 'YOUR_API_KEY'  # Replace with your actual API key\n\nheaders = {\n    'Authorization': f'Bearer {API_KEY}'\n}\n\ndata = {\n  'prompt[text]': '<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh',\n  'prompt[negative_prompt]': 'old, blemish, wrin',\n  'prompt[super_resolution]': True,\n  'prompt[face_correct]': True,\n  'prompt[callback]': 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1'\n}\nfiles = []\n\nresponse = requests.post(API_URL, headers=headers, data=data)\n")))))))}h.isMDXComponent=!0}}]);