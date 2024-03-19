"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[9075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),i=n(6550),l=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,p]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},4336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={hide_table_of_contents:!0},l="FaceID",p={unversionedId:"features/faceid",id:"features/faceid",title:"FaceID",description:"BETA",source:"@site/docs/features/faceid.md",sourceDirName:"features",slug:"/features/faceid",permalink:"/docs/features/faceid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/faceid.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Face Swap",permalink:"/docs/features/face-swap"},next:{title:"Latent Consistency Models",permalink:"/docs/features/lcm"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Notes",id:"notes",level:2},{value:"API",id:"api",level:2},{value:"Step 1: Create fine-tune",id:"step-1-create-fine-tune",level:3},{value:"POST /tunes",id:"post-tunes",level:4},{value:"Response",id:"response",level:4},{value:"Step 2: Create prompts",id:"step-2-create-prompts",level:3},{value:"POST /tunes/:id/prompts",id:"post-tunesidprompts",level:4}],d={toc:c},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faceid"},"FaceID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BETA")),(0,r.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"1.5rem"}},(0,r.kt)("div",null,(0,r.kt)("figcaption",null,"Input images"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"source.png",src:n(3957).Z,width:"2000",height:"2203"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,(0,r.kt)("a",{href:"https://www.astria.ai/gallery?text=faceid"},"FaceID")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"faceid-output.png",src:n(5703).Z,width:"1044",height:"1556"}))),(0,r.kt)("div",null,(0,r.kt)("figcaption",null,(0,r.kt)("a",{href:"https://www.astria.ai/gallery?text=faceid_portrait"},"FaceID portrait")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"faceid-output.png",src:n(5753).Z,width:"1044",height:"1556"})))),(0,r.kt)("div",{className:"api-method"},(0,r.kt)("div",null,(0,r.kt)("p",null,"See example prompts in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/gallery?text=faceid"},"gallery")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"FaceID is a model adapter allowing to generate image while preserving a person identity without fine-tuning. Input images can be as few as just one image. The adapter was trained on human faces and cannot be used for pets or other subjects."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate a placeholder fine-tune dataset which will contain the person images. The fine-tune will not go through training and will be immediately ready.\n",(0,r.kt)("img",{alt:"faceid-new-fine-tune.png",src:n(1158).Z,width:"740",height:"544"})),(0,r.kt)("li",{parentName:"ol"},"Generate the image using the FaceID adapter using a syntax similar to LoRA - ",(0,r.kt)("inlineCode",{parentName:"li"},"<faceid:ID:1>")," ")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"cfg_scale=3")),(0,r.kt)("li",{parentName:"ol"},"FaceID can work nicely together with ",(0,r.kt)("a",{parentName:"li",href:"/docs/features/face-swap"},"Face Swap")," to improve similarity."),(0,r.kt)("li",{parentName:"ol"},"Disable Face-Swap in case your prompt is animation style. Additionally, make sure to select an animated model from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.astria.ai/gallery/tunes?title=pixar"},"gallery"),". "),(0,r.kt)("li",{parentName:"ol"},"For fast generation use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/features/lcm"},"LCM schedulers"),"."),(0,r.kt)("li",{parentName:"ol"},"For realistic images, please consider enabling face-correct to improve facial features."),(0,r.kt)("li",{parentName:"ol"},"When creating a fine-tune: Base-model is only used as a default for UI generation but does not affect FaceID."),(0,r.kt)("li",{parentName:"ol"},"When creating a fine-tune: ",(0,r.kt)("inlineCode",{parentName:"li"},"steps")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"training_face_correct")," are not used for FaceID.")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"FaceID is an adapter loaded on top of a base model. As such the inference needs to take place on a model from the gallery.\nThe fine-tune's ",(0,r.kt)("inlineCode",{parentName:"p"},"trained_at")," is set upon creation and there is no training time. As such no callback is needed."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you are receiving ",(0,r.kt)("inlineCode",{parentName:"p"},"422")," error ",(0,r.kt)("inlineCode",{parentName:"p"},"model_type=faceid is not supported. Use a checkpoint instead")," - Change the request URL to ",(0,r.kt)("a",{parentName:"p",href:"https://api.astria.ai/tunes/690204/prompts"},"https://api.astria.ai/tunes/690204/prompts")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"690204")," as a hard-coded tune_id of Realistic Vision v5.1 from the gallery. See explanation above. "))),(0,r.kt)("div",null,(0,r.kt)("h3",{id:"step-1-create-fine-tune"},"Step 1: Create fine-tune"),(0,r.kt)("h4",{id:"post-tunes"},"POST /tunes"),(0,r.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'# With images as multipart/form-data\n# Hard coded tune id of Realistic Vision v5.1 from the gallery - https://www.astria.ai/gallery/tunes \n# https://www.astria.ai/gallery/tunes/690204/prompts\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \\\n          -F tune[title]="John Doe - UUID - 1234-6789-1234-56789" \\\n          -F tune[name]=man \\\n          -F tune[model_type]="faceid" \\\n          -F tune[callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&tune_id=1" \\\n          -F tune[base_tune_id]=690204 \\\n          -F "tune[images][]=@1.jpg" \\\n          -F "tune[images][]=@2.jpg" \\\n          -F "tune[images][]=@3.jpg" \\\n          -F "tune[images][]=@4.jpg"\n\n# With image_urls as form-data\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \\\n          -F tune[title]="John Doe - UUID - 1234-6789-1234-56789" \\\n          -F tune[name]=man \\\n          -F tune[model_type]="faceid" \\\n          -F tune[callback]="https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1" \\\n          -F tune[base_tune_id]=690204 \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg"\n          \n# As JSON\ncat > data.json <<- EOM\n{\n  "tune": {\n    "title": "John Doe - UUID - 1234-6789-1234-56789",\n    "name": "man",\n    "model_type": "faceid",\n    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1",\n    "image_urls": [\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg"\n    ]\n  }\n}\nEOM\n\ncurl -X POST -H"Content-Type: application/json" -H "Authorization: Bearer $API_KEY" --data @data.json  https://api.astria.ai/tunes          \n'))),(0,r.kt)(s.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// NodeJS 16\n// With image_urls and fetch()\n// For NodeJS 18 - do NOT import the below as it is built-in\nimport fetch from \"node-fetch\";\n\nconst API_KEY = 'sd_XXXXXX';\nconst DOMAIN = 'https://api.astria.ai';\n\nfunction createTune() {\n  let options = {\n    method: 'POST',\n    headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      tune: {\n        \"title\": 'John Doe - UUID - 1234-6789-1234-56789',\n        // Hard coded tune id of Realistic Vision v5.1 from the gallery - https://www.astria.ai/gallery/tunes \n        // https://www.astria.ai/gallery/tunes/690204/prompts\n        \"base_tune_id\": 690204,\n        \"name\": \"man\",\n        \"model_type\": \"faceid\",\n        \"image_urls\": [\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\"\n        ]\n      }\n    })\n  };\n  return fetch(DOMAIN + '/tunes', options)\n    .then(r => r.json())\n    .then(r => console.log(r))\n}\n\ncreateTune()\n\n\n/// With form-data, fetch()\n// For NodeJS 18 - do NOT import the two below as they are built-in\nimport fetch from \"node-fetch\";\nimport FormData from 'form-data';\nimport fs from 'fs';\n\nconst API_KEY = 'sd_XXXX';\nconst DOMAIN = 'https://api.astria.ai';\nfunction createTune() {\n  let formData = new FormData();\n  formData.append('tune[title]', 'John Doe - UUID - 1234-6789-1234-56789');\n  formData.append('tune[model_type]', 'faceid');\n  // Hard coded tune id of Realistic Vision v5.1 from the gallery - https://www.astria.ai/gallery/tunes \n  // https://www.astria.ai/gallery/tunes/690204/prompts\n  formData.append('tune[base_tune_id]', 690204);\n  formData.append('tune[name]', 'man');\n  // Load all JPGs from ./samples directory and append to FormData\n  let files = fs.readdirSync('./samples');\n  files.forEach(file => {\n    if(file.endsWith('.jpg')) {\n      formData.append('tune[images][]', fs.createReadStream(`./samples/${file}`), file);\n    }\n  });\n  formData.append('tune[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1');\n\n  let options = {\n    method: 'POST',\n    headers: {\n      'Authorization': 'Bearer ' + API_KEY\n    },\n    body: formData\n  };\n  return fetch(DOMAIN + '/tunes', options)\n    .then(r => r.json())\n    .then(r => console.log(r));\n}\n\ncreateTune();\n\n"))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nheaders = {\'Authorization\': f\'Bearer {API_KEY}\'}\n\ndef load_image(file_path):\n  with open(file_path, "rb") as f:\n    return f.read()\n\n# Assuming `tune.images` are already defined in your context\n# If not, you should define them before the below code\n\nimage_data = load_image("assets/image.jpeg")\n\ndata = {\n  "tune[title]": "John Doe - UUID - 1234-6789-1234-56789",\n  "tune[name]": "man",\n  "tune[base_tune_id]": 690204,\n  "tune[model_type]": "faceid",\n  "tune[token]": "ohwx"\n}\nfiles = []\n\nfor image in tune.images:\n  image_data = load_image(image)  # Assuming image is a file path\n  files.append(("tune[images][]", image_data))\n\nAPI_URL = \'https://api.astria.ai/tunes\'\nresponse = requests.post(API_URL, data=data, files=files, headers=headers)\nresponse.raise_for_status()\n\n')))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n[\n  {\n    "id": 1,\n    "title": "John Doe",\n    "name": "woman",\n    "token": "ohwx",\n    "base_tune_id": null,\n    "args": null,\n    "steps": null,\n    "face_crop": null,\n    "training_face_correct": false,\n    "ckpt_url": "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "ckpt_urls": [\n      "https://sdbooth2-production.s3.amazonaws.com/mock"\n    ],\n    "eta": "2023-10-02T14:32:40.363Z",\n    "trained_at": "2023-10-02T14:32:40.363Z",\n    "started_training_at": "2023-10-02T14:32:05.229Z",\n    "expires_at": "2023-11-01T14:32:40.363Z",\n    "created_at": "2023-10-02T14:32:05.067Z",\n    "branch": "sd15",\n    "model_type": "faceid",\n    "updated_at": "2023-10-02T14:32:40.363Z",\n    "url": "https://www.astria.ai/tunes/788416.json",\n    "orig_images": [\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock"\n    ]\n  },\n  {\n    "id": 775459,\n    "title": "Marry Jane",\n    "name": null,\n    "is_api": false,\n    "token": "ohwx",\n    "base_tune_id": null,\n    "args": null,\n    "steps": null,\n    "face_crop": null,\n    "training_face_correct": null,\n    "ckpt_url": "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "ckpt_urls": [\n      "https://sdbooth2-production.s3.amazonaws.com/mock"\n    ],\n    "eta": "2023-09-23T16:07:49.137Z",\n    "trained_at": "2023-09-23T16:07:49.137Z",\n    "started_training_at": "2023-09-23T16:07:37.334Z",\n    "expires_at": "2023-10-23T16:07:49.137Z",\n    "created_at": "2023-09-23T16:07:36.606Z",\n    "branch": "sd15",\n    "model_type": "faceid",\n    "updated_at": "2023-09-23T16:07:49.138Z",\n    "url": "https://www.astria.ai/tunes/775459.json",\n    "orig_images": [\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock"\n    ]\n  }\n ]\n')),(0,r.kt)("h3",{id:"step-2-create-prompts"},"Step 2: Create prompts"),(0,r.kt)("h4",{id:"post-tunesidprompts"},"POST /tunes/:id/prompts"),(0,r.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'# Note the hard-coded 690204 which is the tune_id of Realistic Vision v5.1 from the gallery\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/690204/prompts \\\n          -F prompt[text]="<faceid:tune_id:strength> woman trekking in the alps" \\\n          -F prompt[negative_prompt]="" \\\n          -F prompt[super_resolution]=true \\\n          -F prompt[face_correct]=true \\\n          -F prompt[face_swap]=true \\\n          -F prompt[callback]="https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1" \n'))),(0,r.kt)(s.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fetch = require('node-fetch');\nconst FormData = require('form-data');\n\n// Note the hard-coded 690204 which is the tune_id of Realistic Vision v5.1 from the gallery\nconst API_URL = 'https://api.astria.ai/tunes/690204/prompts';\nconst API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key\nconst headers = { Authorization: `Bearer ${API_KEY}` }\n\nconst form = new FormData();\nform.append('prompt[text]', '<faceid:tune_id:strength> woman trekking in the alps');\nform.append('prompt[negative_prompt]', '');\nform.append('prompt[super_resolution]', true);\nform.append('prompt[face_correct]', true);\nform.append('prompt[face_swap]', true);\nform.append('prompt[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1');\n\nfetch(API_URL, {\n  method: 'POST',\n  headers: headers,\n  body: form\n}).then(response => response.json())\n\n\n"))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\n# Note the hard-coded 690204 which is the tune_id of Realistic Vision v5.1 from the gallery\nAPI_URL = 'https://api.astria.ai/tunes/690204/prompts'\nAPI_KEY = 'YOUR_API_KEY'  # Replace with your actual API key\n\nheaders = {\n    'Authorization': f'Bearer {API_KEY}'\n}\n\ndata = {\n  'prompt[text]': '<faceid:tune_id:strength> woman trekking in the alps',\n  'prompt[negative_prompt]': '',\n  'prompt[super_resolution]': True,\n  'prompt[face_correct]': True,\n  'prompt[face_swap]': True,\n  'prompt[callback]': 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1'\n}\nfiles = []\nfiles.append((f\"tune[prompts_attributes][{i}][input_image]\", load_image(prompt['input_image'])))\n\nresponse = requests.post(API_URL, headers=headers, data=data)\n")))))))}h.isMDXComponent=!0},1158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/faceid-new-fine-tune-cc128107ac919832509e97a8ca45918b.png"},5703:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/faceid-output-8799f088b000a2adc1d94447c8a3e096.jpg"},5753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/faceid-portrait-output-46eed1b926c1c5e3b055ad7ffb68676a.jpg"},3957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ai-photoshoot-input-3e9da4e3f5e050cbe4f36788a62521de.png"}}]);