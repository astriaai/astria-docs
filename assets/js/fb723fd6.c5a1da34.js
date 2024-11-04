"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[8946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),p=r(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==i&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},6440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={hide_table_of_contents:!0},s="SDXL API usage",u={unversionedId:"api/sdxl-api",id:"api/sdxl-api",title:"SDXL API usage",description:"For general tips on SDXL training and inference, see SDXL training",source:"@site/docs/api/20-sdxl-api.md",sourceDirName:"api",slug:"/api/sdxl-api",permalink:"/docs/api/sdxl-api",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Create a theme",permalink:"/docs/api/themes/create"}},p={},c=[{value:"POST /tunes/:id/prompts",id:"post-tunesidprompts",level:4}],d={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdxl-api-usage"},"SDXL API usage"),(0,a.kt)("p",null,"For general tips on SDXL training and inference, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/use-cases/sdxl-training"},"SDXL training")),(0,a.kt)("div",{className:"api-method"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Unlike SD15 checkpoint training, SDXL on Astria is trained as a LoRA+text-embedding. As such, inference is taking place a on a base line model such as SDXL 1.0 and ",(0,a.kt)("inlineCode",{parentName:"p"},"prompt.text")," should specify the loaded lora such as ",(0,a.kt)("inlineCode",{parentName:"p"},"<lora:123456:0.83>")," - will load lora with id=123456 and strength=0.83"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/lora"},"LoRA docs")," on lora syntax"),(0,a.kt)("p",null,"With SDXL you cannot combine multiple LoRAs."),(0,a.kt)("p",null,"Use any SDXL model from ",(0,a.kt)("a",{parentName:"p",href:"https://www.astria.ai/gallery/tunes?branch=sdxl1"},"the gallery")," to do inference."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If you are receiving ",(0,a.kt)("inlineCode",{parentName:"p"},"422")," error ",(0,a.kt)("inlineCode",{parentName:"p"},"model_type=pti is not supported. Use a checkpoint instead")," - Change the request URL to ",(0,a.kt)("a",{parentName:"p",href:"https://api.astria.ai/tunes/666678/prompts"},"https://api.astria.ai/tunes/666678/prompts")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"666678")," as a hard-coded tune_id of SDXL 1.0 from the gallery. See explanation above."))),(0,a.kt)("div",null,(0,a.kt)("h4",{id:"post-tunesidprompts"},"POST /tunes/:id/prompts"),(0,a.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'# Note the hard-coded 666678 which is the tune_id of SDXL 1.0 from the gallery\ncurl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/666678/prompts \\\n          -F prompt[text]="<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh" \\\n          -F prompt[negative_prompt]="old, blemish, wrin" \\\n          -F prompt[super_resolution]=true \\\n          -F prompt[face_correct]=true \\\n          -F prompt[callback]="https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1" \n'))),(0,a.kt)(l.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fetch = require('node-fetch');\nconst FormData = require('form-data');\n\n// Note the hard-coded 666678 which is the tune_id of SDXL 1.0 from the gallery\nconst API_URL = 'https://api.astria.ai/tunes/666678/prompts';\nconst API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key\nconst headers = { Authorization: `Bearer ${API_KEY}` }\n\nconst form = new FormData();\nform.append('prompt[text]', '<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh');\nform.append('prompt[negative_prompt]', 'old, blemish, wrin');\nform.append('prompt[super_resolution]', true);\nform.append('prompt[face_correct]', true);\nform.append('prompt[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1');\n\nfetch(API_URL, {\n  method: 'POST',\n  headers: headers,\n  body: form\n}).then(response => response.json())\n\n\n"))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\n# Note the hard-coded 666678 which is the tune_id of SDXL 1.0 from the gallery\nAPI_URL = 'https://api.astria.ai/tunes/666678/prompts'\nAPI_KEY = 'YOUR_API_KEY'  # Replace with your actual API key\n\nheaders = {\n    'Authorization': f'Bearer {API_KEY}'\n}\n\ndata = {\n  'prompt[text]': '<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh',\n  'prompt[negative_prompt]': 'old, blemish, wrin',\n  'prompt[super_resolution]': True,\n  'prompt[face_correct]': True,\n  'prompt[callback]': 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1'\n}\nfiles = []\nfiles.append((f\"tune[prompts_attributes][{i}][input_image]\", load_image(prompt['input_image'])))\n\nresponse = requests.post(API_URL, headers=headers, data=data)\n")))))))}f.isMDXComponent=!0}}]);