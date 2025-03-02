"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function _(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(_,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},8987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Create a tune",hide_table_of_contents:!0},s=void 0,p={unversionedId:"api/tune/create",id:"api/tune/create",title:"Create a tune",description:"Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images.",source:"@site/docs/api/0-tune/1-create.md",sourceDirName:"api/0-tune",slug:"/api/tune/create",permalink:"/docs/api/tune/create",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a tune",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"The tune object",permalink:"/docs/api/tune/"},next:{title:"Retrieve a tune",permalink:"/docs/api/tune/retrieve"}},u={},c=[{value:"Parameters",id:"parameters",level:3},{value:"<code>name</code> (required)",id:"name-required",level:4},{value:"<code>title</code> (required)",id:"title-required",level:4},{value:"<code>images</code> (required)",id:"images-required",level:4},{value:"<code>image_urls</code> (required)",id:"image_urls-required",level:4},{value:"<code>callback</code> (optional)",id:"callback-optional",level:4},{value:"<code>branch</code> (optional)",id:"branch-optional",level:4},{value:"<code>steps</code> (optional)",id:"steps-optional",level:4},{value:"<code>token</code> (optional)",id:"token-optional",level:4},{value:"<code>face_crop</code> (optional)",id:"face_crop-optional",level:4},{value:"<code>training_face_correct</code> (optional)",id:"training_face_correct-optional",level:4},{value:"<code>base_tune_id</code> (optional)",id:"base_tune_id-optional",level:4},{value:"<code>model_type</code> (optional)",id:"model_type-optional",level:4},{value:"<code>auto_extend</code> (optional)",id:"auto_extend-optional",level:4},{value:"<code>preset</code> (optional)",id:"preset-optional",level:4},{value:"<code>characteristics</code> (optional)",id:"characteristics-optional",level:4},{value:"<code>prompts_attributes</code> (optional)",id:"prompts_attributes-optional",level:4},{value:"Returns",id:"returns",level:3},{value:"POST /tunes",id:"post-tunes",level:4},{value:"Response",id:"response",level:4}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"api-method"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("h4",{id:"name-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (required)"),(0,r.kt)("p",null,"A class name the describes the fine-tune. e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"man"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"woman"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"girl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"style")),(0,r.kt)("h4",{id:"title-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")," (required)"),(0,r.kt)("p",null,"Describes the fine-tune. Ideally a UUID related to the transaction. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/overview"},"idempotency")," for more information."),(0,r.kt)("h4",{id:"images-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"images")," (required)"),(0,r.kt)("p",null,"An array of images to train the fine-tune with. The images can be uploaded as multipart/form-data or as image_urls."),(0,r.kt)("h4",{id:"image_urls-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"image_urls")," (required)"),(0,r.kt)("p",null,"An array of images to train the fine-tune with. The images can be uploaded as multipart/form-data or as image_urls."),(0,r.kt)("h4",{id:"callback-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback")," (optional)"),(0,r.kt)("p",null,"A webhook URL to be called when the tune is finished training. The webhook will receive a POST request with the tune object. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/overview#callbacks"},"more on callbacks"),"."),(0,r.kt)("h4",{id:"branch-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"branch")," (optional)"),(0,r.kt)("p",null,"Enum: ",(0,r.kt)("inlineCode",{parentName:"p"},"sd15"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sdxl1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fast"),". Will default to the ",(0,r.kt)("inlineCode",{parentName:"p"},"base_tune")," branch if not specified, or to ",(0,r.kt)("inlineCode",{parentName:"p"},"sd15")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"base_tune")," is not specified."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"branch=fast")," for ",(0,r.kt)("a",{parentName:"p",href:"https://docs.astria.ai/docs/api/overview#mock-testing"},"mock testing"))),(0,r.kt)("h4",{id:"steps-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"steps")," (optional)"),(0,r.kt)("p",null,"Training steps. Recommended leaving blank in order to allow better defaults set by the system."),(0,r.kt)("h4",{id:"token-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"token")," (optional)"),(0,r.kt)("p",null,"Unique short text to which the features will be embedded into. Default ",(0,r.kt)("inlineCode",{parentName:"p"},"ohwx")," for SDXL and ",(0,r.kt)("inlineCode",{parentName:"p"},"sks")," for SD15."),(0,r.kt)("h4",{id:"face_crop-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"face_crop")," (optional)"),(0,r.kt)("p",null,"Detects faces in training images and augments training set with cropped faces. Defaults to ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit"},"account setting")),(0,r.kt)("h4",{id:"training_face_correct-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"training_face_correct")," (optional)"),(0,r.kt)("p",null,"Enhance training images using GFPGAN. Consider enabling if input image are low quality or low resolution. May result in over-smoothing."),(0,r.kt)("h4",{id:"base_tune_id-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"base_tune_id")," (optional)"),(0,r.kt)("p",null,"Training on top of former fine-tune or a different baseline model from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/gallery/tunes"},"gallery")," (id in the URL). e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"690204")," - Realistic Vision v5.1"),(0,r.kt)("h4",{id:"model_type-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"model_type")," (optional)"),(0,r.kt)("p",null,"Enum: ",(0,r.kt)("inlineCode",{parentName:"p"},"lora"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pti"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"faceid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," for checkpoint.\nFor SDXL1 - API will default to ",(0,r.kt)("inlineCode",{parentName:"p"},"pti")," and will ignore ",(0,r.kt)("inlineCode",{parentName:"p"},"model_type")," parameter."),(0,r.kt)("h4",{id:"auto_extend-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"auto_extend")," (optional)"),(0,r.kt)("p",null,"Boolean: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the tune will be automatically extended when it expires. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". See ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/pricing"},"pricing"),". "),(0,r.kt)("h4",{id:"preset-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"preset")," (optional)"),(0,r.kt)("p",null,"Enum: ",(0,r.kt)("inlineCode",{parentName:"p"},"flux-lora-focus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flux-lora-portrait"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flux-lora-fast")," see details in the GUI, ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/use-cases/flux-finetuning/"},"Flux lora training")," for more information."),(0,r.kt)("h4",{id:"characteristics-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"characteristics")," (optional)"),(0,r.kt)("p",null,"A free-form object that can be used to templatize the prompts text. e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},'{"eye_color": "blue eyes"}')," would than be used in the prompt text as ",(0,r.kt)("inlineCode",{parentName:"p"},"ohwx woman, {{eye_color}}, holding flowers"),"."),(0,r.kt)("h4",{id:"prompts_attributes-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"prompts_attributes")," (optional)"),(0,r.kt)("p",null,"Array of prompts entities with all attributes. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/prompt/create"},"create prompt")," for more information."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Returns a tune object if successful which will start training immediately and call callback once training is complete.")),(0,r.kt)("div",null,(0,r.kt)("h4",{id:"post-tunes"},"POST /tunes"),(0,r.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'# With images as multipart/form-data\n# Hard coded tune id of Realistic Vision v5.1 from the gallery - https://www.astria.ai/gallery/tunes \n# https://www.astria.ai/gallery/tunes/690204/prompts\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \\\n          -F tune[title]="John Doe - UUID - 1234-6789-1234-56789" \\\n          -F tune[name]=man \\\n          -F tune[branch]="fast" \\\n          -F tune[callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&tune_id=1" \\\n          -F tune[base_tune_id]=690204 \\\n          -F tune[token]=ohwx \\\n          -F "tune[prompts_attributes][0][text]=ohwx man on space circa 1979 on cover of time magazine" \\\n          -F tune[prompts_attributes][0][callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&prompt_id=1&tune_id=1" \\\n          -F "tune[images][]=@1.jpg" \\\n          -F "tune[images][]=@2.jpg" \\\n          -F "tune[images][]=@3.jpg" \\\n          -F "tune[images][]=@4.jpg"\n\n# With image_urls as form-data\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \\\n          -F tune[title]="Grumpy cat - UUID - 1234-6789-1234-56789" \\\n          -F tune[name]=cat \\\n          -F tune[branch]="fast" \\\n          -F tune[callback]="https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1" \\\n          -F tune[base_tune_id]=690204 \\\n          -F tune[token]=ohwx \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \\\n          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg"\n          \n# As JSON\ncat > data.json <<- EOM\n{\n  "tune": {\n    "title": "Grumpy Cat - UUID - 1234-6789-1234-56789",\n    "name": "cat",\n    "branch": "fast",\n    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1",\n    "image_urls": [\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg",\n      "https://i.imgur.com/HLHBnl9.jpeg"\n    ],\n    "prompts_attributes": [\n      {\n        "text": "ohwx cat in space circa 1979 French illustration",\n        "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1"\n      },\n      {\n        "text": "ohwx cat getting into trouble viral meme",\n        "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1"\n      }\n    ]\n  }\n}\nEOM\n\ncurl -X POST -H"Content-Type: application/json" -H "Authorization: Bearer $API_KEY" --data @data.json  https://api.astria.ai/tunes          \n'))),(0,r.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// NodeJS 16\n// With image_urls and fetch()\n// For NodeJS 18 - do NOT import the below as it is built-in\nimport fetch from \"node-fetch\";\n\nconst API_KEY = 'sd_XXXXXX';\nconst DOMAIN = 'https://api.astria.ai';\n\nfunction createTune() {\n  let options = {\n    method: 'POST',\n    headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      tune: {\n        \"title\": 'John Doe - UUID - 1234-6789-1234-56789',\n        // Hard coded tune id of Realistic Vision v5.1 from the gallery - https://www.astria.ai/gallery/tunes \n        // https://www.astria.ai/gallery/tunes/690204/prompts\n        \"base_tune_id\": 690204,\n        \"name\": \"cat\",\n        \"branch\": \"fast\",\n        \"image_urls\": [\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\",\n          \"https://i.imgur.com/HLHBnl9.jpeg\"\n        ],\n        \"prompts_attributes\": [\n          {\n            \"text\": \"ohwx cat in space circa 1979 French illustration\",\n            \"callback\": \"https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1\"\n          },\n          {\n            \"text\": \"ohwx cat getting into trouble viral meme\",\n            \"callback\": \"https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=2\"\n          }\n        ]\n      }\n    })\n  };\n  return fetch(DOMAIN + '/tunes', options)\n    .then(r => r.json())\n    .then(r => console.log(r))\n}\n\ncreateTune()\n\n\n/// With form-data, fetch() and nested prompts\n// For NodeJS 18 - do NOT import the two below as they are built-in\nimport fetch from \"node-fetch\";\nimport FormData from 'form-data';\nimport fs from 'fs';\n\nconst API_KEY = 'sd_XXXX';\nconst DOMAIN = 'https://api.astria.ai';\nfunction createTune() {\n  let formData = new FormData();\n  formData.append('tune[title]', 'John Doe - UUID - 1234-6789-1234-56789');\n  // formData.append('tune[branch]', 'fast');\n  // Hard coded tune id of Realistic Vision v5.1 from the gallery - https://www.astria.ai/gallery/tunes \n  // https://www.astria.ai/gallery/tunes/690204/prompts\n  formData.append('tune[base_tune_id]', 690204);\n  formData.append('tune[name]', 'man');\n  formData.append('tune[prompts_attributes][0][callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1');\n  formData.append('tune[prompts_attributes][0][input_image]', fs.createReadStream(`./samples/pose.png`));\n  formData.append('tune[prompts_attributes][0][text]',\"ohwx man inside spacesuit in space\")\n  // Load all JPGs from ./samples directory and append to FormData\n  let files = fs.readdirSync('./samples');\n  files.forEach(file => {\n    if(file.endsWith('.jpg')) {\n      formData.append('tune[images][]', fs.createReadStream(`./samples/${file}`), file);\n    }\n  });\n  formData.append('tune[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1');\n\n  let options = {\n    method: 'POST',\n    headers: {\n      'Authorization': 'Bearer ' + API_KEY\n    },\n    body: formData\n  };\n  return fetch(DOMAIN + '/tunes', options)\n    .then(r => r.json())\n    .then(r => console.log(r));\n}\n\ncreateTune();\n\n"))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nheaders = {\'Authorization\': f\'Bearer {API_KEY}\'}\n\ndef load_image(file_path):\n  with open(file_path, "rb") as f:\n    return f.read()\n\n# Assuming `prompts` and `tune.images` are already defined in your context\n\nimage_data = load_image("assets/image.jpeg")\n\ndata = {\n  "tune[title]": "John Doe - UUID - 1234-6789-1234-56789",\n  "tune[name]": "man",\n  "tune[base_tune_id]": 690204,\n  "tune[branch]": "fast",\n  "tune[token]": "ohwx"\n}\nfiles = []\nfor i, prompt in enumerate(prompts):\n  data.update({\n    f"tune[prompts_attributes][{i}][text]": prompt[\'text\'],\n    f"tune[prompts_attributes][{i}][negative_prompt]": prompt[\'negative_prompt\'],\n    f"tune[prompts_attributes][{i}][face_correct]": "true",\n    f"tune[prompts_attributes][{i}][inpaint_faces]": "true",\n    f"tune[prompts_attributes][{i}][super_resolution]": "true",\n  })\n  if prompt[\'image_data\']:\n    data.update({\n      f"tune[prompts_attributes][{i}][controlnet]" : prompt[\'controlnet\'],\n    })\n    files.append((f"tune[prompts_attributes][{i}][input_image]", load_image(prompt[\'input_image\'])))\n\nfor image in tune.images:\n  image_data = load_image(image)  # Assuming image is a file path\n  files.append(("tune[images][]", image_data))\n\nAPI_URL = \'https://api.astria.ai/tunes\'\nresponse = requests.post(API_URL, data=data, files=files, headers=headers)\nresponse.raise_for_status()\n\n')))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "id": 1,\n  "title": "John Doe - UUID - 1234-6789-1234-56789",\n  "name": "woman",\n  "token": "ohwx",\n  "base_tune_id": null,\n  "args": null,\n  "steps": null,\n  "face_crop": null,\n  "training_face_correct": false,\n  "ckpt_url": "https://sdbooth2-production.s3.amazonaws.com/mock",\n  "ckpt_urls": [\n    "https://sdbooth2-production.s3.amazonaws.com/mock"\n  ],\n  "eta": "2023-10-02T14:32:40.363Z",\n  "trained_at": "2023-10-02T14:32:40.363Z",\n  "started_training_at": "2023-10-02T14:32:05.229Z",\n  "expires_at": "2023-11-01T14:32:40.363Z",\n  "created_at": "2023-10-02T14:32:05.067Z",\n  "branch": "sdxl1",\n  "model_type": "lora",\n  "updated_at": "2023-10-02T14:32:40.363Z",\n  "url": "https://www.astria.ai/tunes/788416.json",\n  "orig_images": [\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock",\n    "https://sdbooth2-production.s3.amazonaws.com/mock"\n  ]\n}\n')))))}h.isMDXComponent=!0}}]);