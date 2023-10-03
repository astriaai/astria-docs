"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=l??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},8987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={title:"Create a tune",hide_table_of_contents:!0},l=void 0,u={unversionedId:"api/tune/create",id:"api/tune/create",title:"Create a tune",description:"Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images.",source:"@site/docs/api/0-tune/1-create.md",sourceDirName:"api/0-tune",slug:"/api/tune/create",permalink:"/docs/api/tune/create",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/0-tune/1-create.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a tune",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"The tune object",permalink:"/docs/api/tune/"},next:{title:"Retrieve a tune",permalink:"/docs/api/tune/retrieve"}},c={},p=[{value:"Parameters",id:"parameters",level:3},{value:"<code>name</code> (required)",id:"name-required",level:4},{value:"<code>title</code> (required)",id:"title-required",level:4},{value:"<code>images</code> (required)",id:"images-required",level:4},{value:"<code>image_urls</code> (required)",id:"image_urls-required",level:4},{value:"<code>callback</code> (optional)",id:"callback-optional",level:4},{value:"<code>branch</code> (optional)",id:"branch-optional",level:4},{value:"<code>steps</code> (optional)",id:"steps-optional",level:4},{value:"<code>face_crop</code> (optional)",id:"face_crop-optional",level:4},{value:"<code>base_tune_id</code> (optional)",id:"base_tune_id-optional",level:4},{value:"Returns",id:"returns",level:3},{value:"POST /tunes",id:"post-tunes",level:4},{value:"Response",id:"response",level:4}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"api-method"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("h4",{id:"name-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (required)"),(0,r.kt)("p",null,"A class name the describes the fine-tune. e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"man"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"woman"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"girl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"style")),(0,r.kt)("h4",{id:"title-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")," (required)"),(0,r.kt)("p",null,"Describes the fine-tune. Ideally a UUID related to the transaction. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/overview"},"idempotency")," for more information."),(0,r.kt)("h4",{id:"images-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"images")," (required)"),(0,r.kt)("p",null,"An array of images to train the fine-tune with. The images can be uploaded as multipart/form-data or as image_urls."),(0,r.kt)("h4",{id:"image_urls-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"image_urls")," (required)"),(0,r.kt)("p",null,"An array of images to train the fine-tune with. The images can be uploaded as multipart/form-data or as image_urls."),(0,r.kt)("h4",{id:"callback-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback")," (optional)"),(0,r.kt)("p",null,"A webhook URL to be called when the tune is finished training. The webhook will receive a POST request with the tune object."),(0,r.kt)("h4",{id:"branch-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"branch")," (optional)"),(0,r.kt)("p",null,"Enum: ",(0,r.kt)("inlineCode",{parentName:"p"},"sd15"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sdxl1")),(0,r.kt)("h4",{id:"steps-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"steps")," (optional)"),(0,r.kt)("p",null,"Training steps. Recommended leaving blank in order to allow better defaults set by the system."),(0,r.kt)("h4",{id:"face_crop-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"face_crop")," (optional)"),(0,r.kt)("p",null,"Detects faces in training images and augments training set with cropped faces. Defaults to ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit"},"account setting")),(0,r.kt)("h4",{id:"base_tune_id-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"base_tune_id")," (optional)"),(0,r.kt)("p",null,"Training on top of former fine-tune or a different baseline model from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/gallery/tunes"},"gallery")," (id in the URL)"),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Returns a tune object if successful which will start training immediately and call callback once training is complete.")),(0,r.kt)("div",null,(0,r.kt)("h4",{id:"post-tunes"},"POST /tunes"),(0,r.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'# With images as multipart/form-data\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \\\n          -F tune[callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&tune_id=1" \\\n          -F tune[title]="my portrait" \\\n          -F tune[branch]="fast" \\\n          -F tune[name]=man \\\n          -F tune[token]=sks \\\n          -F "tune[prompts_attributes][0][text]=sks man on space circa 1979 on cover of time magazine" \\\n          -F tune[prompts_attributes][0][callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&prompt_id=1&tune_id=1" \\\n          -F "tune[images][]=@1.jpg" \\\n          -F "tune[images][]=@2.jpg" \\\n          -F "tune[images][]=@3.jpg" \\\n          -F "tune[images][]=@4.jpg"\n\n# With image_urls as form-data\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \\\n          -F tune[callback]="https://optional-callback-url.com/to-your-service-when-ready" \\\n          -F tune[title]="grumpy cat" \\\n          -F tune[branch]="fast" \\\n          -F tune[name]=cat \\\n          -F tune[token]=sks \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg"\n          \n# As JSON\ncat > data.json <<- EOM\n{\n  "tune": {\n    "name": "cat",\n    "branch": "fast",\n    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1",\n    "image_urls": [\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg"\n    ],\n    "title": "grumpy cat with prompts",\n    "prompts_attributes": [\n      {\n        "text": "sks cat in space circa 1979 French illustration",\n        "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1"\n      },\n      {\n        "text": "sks cat getting into trouble viral meme",\n        "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1"\n      }\n    ]\n  }\n}\nEOM\n\ncurl -X POST -H"Content-Type: application/json" -H "Authorization: Bearer $API_KEY" --data @data.json  https://api.astria.ai/tunes          \n'))),(0,r.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// NodeJS 16\n// With image_urls and fetch()\nimport fetch from \"node-fetch\";\n\nconst API_KEY = 'sd_XXXXXX';\nconst DOMAIN = 'https://api.astria.ai';\n\nfunction createTune() {\n  let options = {\n    method: 'POST',\n    headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      tune: {\n        \"title\": 'My Tune',\n        \"name\": \"cat\",\n        \"branch\": \"fast\",\n        \"image_urls\": [\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\"\n        ]\n      }\n    })\n  };\n  return fetch(DOMAIN + '/tunes', options)\n    .then(r => r.json())\n    .then(r => console.log(r))\n}\n\ncreateTune()\n\n\n/// With form-data, fetch() and nested prompts\nimport FormData from 'form-data';\nimport fs from 'fs';\nimport fetch from \"node-fetch\";\n\nconst API_KEY = 'sd_XXXX';\nconst DOMAIN = 'https://api.astria.ai';\nfunction createTune() {\n  let formData = new FormData();\n  formData.append('tune[title]', '1527');\n  // formData.append('tune[branch]', 'fast');\n  formData.append('tune[name]', 'man');\n  formData.append('tune[controlnet]', 'pose');\n  formData.append('tune[prompts_attributes][0][callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1');\n  formData.append('tune[prompts_attributes][0][input_image]', fs.createReadStream(`./samples/pose.png`));\n  formData.append('tune[prompts_attributes][0][text]',\"sks man inside spacesuit in space\")\n  // Load all JPGs from ./samples directory and append to FormData\n  let files = fs.reavddirSync('./samples');\n  files.forEach(file => {\n    if(file.endsWith('.jpg')) {\n      formData.append('tune[images][]', fs.createReadStream(`./samples/${file}`), file);\n    }\n  });\n  formData.append('tune[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1');\n\n  let options = {\n    method: 'POST',\n    headers: {\n      'Authorization': 'Bearer ' + API_KEY\n    },\n    body: formData\n  };\n  return fetch(DOMAIN + '/tunes', options)\n    .then(r => r.json())\n    .then(r => console.log(r));\n}\n\ncreateTune();\n\n"))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"})),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n[\n  {\n    "id": 1,\n    "title": "John Doe",\n    "name": "woman",\n    "token": "ohwx",\n    "base_tune_id": null,\n    "args": null,\n    "steps": null,\n    "face_crop": null,\n    "ckpt_url": "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "ckpt_urls": [\n      "https://sdbooth2-production.s3.amazonaws.com/mock"\n    ],\n    "trained_at": "2023-10-02T14:32:40.363Z",\n    "started_training_at": "2023-10-02T14:32:05.229Z",\n    "expires_at": "2023-11-01T14:32:40.363Z",\n    "created_at": "2023-10-02T14:32:05.067Z",\n    "branch": "sdxl1",\n    "model_type": "lora",\n    "updated_at": "2023-10-02T14:32:40.363Z",\n    "url": "https://www.astria.ai/tunes/788416.json",\n    "orig_images": [\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock"\n    ]\n  },\n  {\n    "id": 775459,\n    "title": "Marry Jane",\n    "name": null,\n    "is_api": false,\n    "token": "ohwx",\n    "base_tune_id": null,\n    "args": null,\n    "steps": null,\n    "face_crop": null,\n    "ckpt_url": "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "ckpt_urls": [\n      "https://sdbooth2-production.s3.amazonaws.com/mock"\n    ],\n    "trained_at": "2023-09-23T16:07:49.137Z",\n    "started_training_at": "2023-09-23T16:07:37.334Z",\n    "expires_at": "2023-10-23T16:07:49.137Z",\n    "created_at": "2023-09-23T16:07:36.606Z",\n    "branch": "sdxl1",\n    "model_type": "lora",\n    "updated_at": "2023-09-23T16:07:49.138Z",\n    "url": "https://www.astria.ai/tunes/775459.json",\n    "orig_images": [\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock",\n      "https://sdbooth2-production.s3.amazonaws.com/mock"\n    ]\n  }\n ]\n')))))}h.isMDXComponent=!0}}]);