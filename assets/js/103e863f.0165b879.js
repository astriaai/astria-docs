"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[8830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=g({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const s={title:"Inspect image",hide_table_of_contents:!0},l=void 0,c={unversionedId:"api/images/inspect",id:"api/images/inspect",title:"Inspect image",description:"Inspects an image to extract attributes both for filtering/warning about bad training set images and as characteristics to be added to the fine tune.",source:"@site/docs/api/4-images/1-inspect.md",sourceDirName:"api/4-images",slug:"/api/images/inspect",permalink:"/docs/api/images/inspect",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Inspect image",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/docs/category/images"},next:{title:"Flux API usage",permalink:"/docs/api/flux-api"}},u={},p=[{value:"Parameters",id:"parameters",level:3},{value:"<code>name</code> (required)",id:"name-required",level:4},{value:"<code>file</code> (required)",id:"file-required",level:4},{value:"<code>file_url</code> (optional)",id:"file_url-optional",level:4},{value:"Returns",id:"returns",level:3},{value:"POST /images/inspect",id:"post-imagesinspect",level:4},{value:"Response",id:"response",level:4},{value:"Example implementation",id:"example-implementation",level:3}],m={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"api-method"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Inspects an image to extract attributes both for filtering/warning about bad training set images and as ",(0,r.kt)("inlineCode",{parentName:"p"},"characteristics")," to be added to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/tune/create/#characteristics-optional"},"the fine tune"),"."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("h4",{id:"name-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (required)"),(0,r.kt)("p",null,"Class name of the object to be inspected in the image. Currently only ",(0,r.kt)("inlineCode",{parentName:"p"},"man"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"woman")," are supported. "),(0,r.kt)("h4",{id:"file-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"file")," (required)"),(0,r.kt)("p",null,"The image to inspect."),(0,r.kt)("h4",{id:"file_url-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"file_url")," (optional)"),(0,r.kt)("p",null,"The image url to inspect if ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," is not provided."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The below JSON schema is returned. It is possible that some attributes will not be returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "type": "object",\n    "properties": {\n      # Templating\n      "name": {\n        "type": "string",\n        "enum": ["man", "woman", "boy", "girl", "baby", "cat", "dog", "NONE"],\n      },\n      "ethnicity": {\n        "type": "string",\n        "enum": ["caucasian", "black", "hispanic", "korean", "japanese", "chinese", "philippine"]\n      },\n      "age": {\n        "type": "string",\n        "enum": ["20 yo", "30 yo", "40 yo", "50 yo", "60 yo", "70 yo"]\n      },\n      "glasses": {\n        "type": "string",\n        "enum": ["glasses", "NONE"]\n      },\n      "eye_color": {\n        "type": "string",\n        "enum": ["blue eyes", "brown eyes", "green eyes", "gray eyes", "black eyes", "NONE"],\n      },\n      "hair_color": {\n        "type": "string",\n        "enum": ["blonde", "brunette", "red hair", "black hair", "NONE"]\n      },\n      "hair_length": {\n        "type": "string",\n        "enum": ["short hair", "medium hair", "long hair", "NONE"]\n      },\n      "hair_style": {\n        "type": "string",\n        "enum": ["dreadlocks", "bald", "cornrows", "straight hair", "curly hair", "wavy hair", "NONE"]\n      },\n      "facial_hair": {\n        "type": "string",\n        "enum": ["mustache", "beard", "goatee", "NONE"]\n      },\n      "is_bald": {\n        "type": "string",\n        "enum": ["bald", "NONE"]\n      },\n      # Filtering helpers\n      "funny_face": {\n        "type": "boolean",\n      },\n      "wearing_sunglasses": {\n        "type": "boolean",\n      },\n      "wearing_hat": {\n        "type": "boolean",\n      },\n      "blurry": {\n        "type": "boolean",\n      },\n      "includes_multiple_people": {\n        "type": "boolean",\n      },\n      "full_body_image_or_longshot": {\n        "type": "boolean",\n      },\n      "selfie": {\n        "type": "boolean",\n      },\n    }\n  }\n\n'))),(0,r.kt)("div",null,(0,r.kt)("h4",{id:"post-imagesinspect"},"POST /images/inspect"),(0,r.kt)(i.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'\ncurl -X POST "https://api.astria.ai/images/inspect" \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -F "name=man" \\\n  -F "file=@/path/to/your/image.jpg"\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nurl = "https://api.astria.ai/images/inspect"\nheaders = {\n    "Authorization": "Bearer YOUR_API_KEY"\n}\nfiles = {\n    "file": open("/path/to/your/image.jpg", "rb")\n}\ndata = {\n    "name": "man"\n}\n\nresponse = requests.post(url, headers=headers, files=files, data=data)\nprint(response.json())\n'))),(0,r.kt)(o.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const axios = require(\'axios\');\nconst FormData = require(\'form-data\');\nconst fs = require(\'fs\');\n\nconst url = "https://api.astria.ai/images/inspect";\nconst form = new FormData();\nform.append("name", "man");\nform.append("file", fs.createReadStream("/path/to/your/image.jpg"));\n\naxios.post(url, form, {\n    headers: {\n        "Authorization": `Bearer YOUR_API_KEY`,\n        ...form.getHeaders()\n    }\n})\n.then(response => {\n    console.log(response.data);\n})\n.catch(error => {\n    console.error(error);\n});\n')))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "age": "20 yo",\n  "blurry": false,\n  "ethnicity": "caucasian",\n  "eye_color": "brown eyes",\n  "facial_hair": "",\n  "full_body_image_or_longshot": false,\n  "funny_face": false,\n  "glasses": "",\n  "hair_color": "brunette",\n  "hair_length": "medium hair",\n  "hair_style": "wavy hair",\n  "includes_multiple_people": false,\n  "is_bald": "",\n  "name": "woman",\n  "selfie": true,\n  "wearing_hat": false,\n  "wearing_sunglasses": false\n}\n')))),(0,r.kt)("h3",{id:"example-implementation"},"Example implementation"),(0,r.kt)("p",null,"The images inspect API is meant to be used by the client-side of your app. The /images/inspect needs to be proxied by your server to avoid exposing your API key to the client."),(0,r.kt)("p",null,"The example below implements two behaviors"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createWarning")," notifies the user about an attribute is true such as ",(0,r.kt)("inlineCode",{parentName:"li"},"funny_face")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"wearing_sunglasses"),". The function expects a form input element containing the class ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," selected by the user."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"aggregateCharacteristics")," aggregates the most common values for each key in the characteristics object and sets the ",(0,r.kt)("inlineCode",{parentName:"li"},"characteristicsInputTarget")," value to the aggregated characteristics.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"  async inspect(previewEl, file) {\n    const form = document.getElementById('new_tune');\n    const formValues = Object.fromEntries(new FormData(form));\n    const name = formValues['tune[name]'];\n\n    const formData = new FormData();\n    formData.append('file', file);\n    formData.append('name', name);\n    // Proxy the request to avoid exposing the API key\n    const response = await fetch('/images/inspect', {\n      method: 'POST',\n      body: formData\n    })\n    const data = await response.json();\n    if(!data['name']) {\n      this.createWarning(previewEl, `Could not detect image`);\n    }\n    // iterate over hash and if value is true, add a warning message\n    Object.keys(data).forEach((key) => {\n      if(key === 'name') {\n        if (data[key] === '') {\n          this.createWarning(previewEl, `Could not detect ${name} in the image`)\n        } else if(data[key] && data[key] !== name) {\n          this.createWarning(previewEl, `Could not detect ${name} in the image (2)`)\n        }\n      } else  if(data[key] === true) {\n        const warning = capitalizeFirstLetter(key.replace(/_/g, \" \"));\n        this.createWarning(previewEl, warning);\n      }\n    });\n    this.characteristics.push(data);\n    this.aggregateCharacteristics();\n    previewEl.querySelector('.loading').classList.add('d-none');\n    previewEl.querySelector('.remove-btn').classList.remove('d-none');\n  }\n\n\n  aggregateCharacteristics() {\n    const aggregated = {};\n    // Iterate over this.characteristics and select value which is more common into this.aggregatedCharacteristics\n    // use only the characeteristics that are string\n    this.characteristics.forEach((characteristic) => {\n      Object.keys(characteristic).forEach((key) => {\n        if (typeof characteristic[key] === 'string') {\n          if (aggregated[key]) {\n            aggregated[key].push(characteristic[key]);\n          } else {\n            aggregated[key] = [characteristic[key]];\n          }\n        }\n      });\n    });\n    console.log('aggregated', aggregated);\n  \n    const commonValues = {};\n    // find most common value for each key and set aggregatedCharacteristics to that value\n    Object.keys(aggregated).forEach((key) => {\n      const values = aggregated[key];\n      const mostCommonValue = values.sort((a, b) =>\n        values.filter(v => v === a).length - values.filter(v => v === b).length\n      ).pop();\n      commonValues[key] = mostCommonValue;\n    });\n    console.log('commonValues', commonValues);\n    this.characteristicsInputTarget.value = JSON.stringify(commonValues);\n  }\n  \n")))}g.isMDXComponent=!0}}]);