"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[8830],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),r=t(7294),i=t(6010),o=t(2466),s=t(6550),l=t(1980),c=t(7392),u=t(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,c]=g({queryString:t,groupId:a}),[m,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=l??m;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var f=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==s&&(m(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:d,onClick:p},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function k(e){const n=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function w(e){const n=(0,f.Z)();return r.createElement(k,(0,a.Z)({key:String(n)},e))}},243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),i=t(4866),o=t(5162);const s={title:"Inspect image",hide_table_of_contents:!0},l=void 0,c={unversionedId:"api/images/inspect",id:"api/images/inspect",title:"Inspect image",description:"Inspects an image to extract attributes both for filtering/warning about bad training set images and as characteristics to be added to the fine tune.",source:"@site/docs/api/4-images/1-inspect.md",sourceDirName:"api/4-images",slug:"/api/images/inspect",permalink:"/docs/api/images/inspect",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Inspect image",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/docs/category/images"},next:{title:"Flux API usage",permalink:"/docs/api/flux-api"}},u={},m=[{value:"Parameters",id:"parameters",level:3},{value:"<code>name</code> (required)",id:"name-required",level:4},{value:"<code>file</code> (required)",id:"file-required",level:4},{value:"<code>file_url</code> (optional)",id:"file_url-optional",level:4},{value:"Returns",id:"returns",level:3},{value:"POST /images/inspect",id:"post-imagesinspect",level:4},{value:"Response",id:"response",level:4},{value:"Example implementation",id:"example-implementation",level:3}],p={toc:m},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"api-method"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Inspects an image to extract attributes both for filtering/warning about bad training set images and as ",(0,r.kt)("inlineCode",{parentName:"p"},"characteristics")," to be added to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/tune/create/#characteristics-optional"},"the fine tune"),"."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("h4",{id:"name-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (required)"),(0,r.kt)("p",null,"Class name of the object to be inspected in the image. Currently only ",(0,r.kt)("inlineCode",{parentName:"p"},"man"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"woman")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," are supported. "),(0,r.kt)("h4",{id:"file-required"},(0,r.kt)("inlineCode",{parentName:"h4"},"file")," (required)"),(0,r.kt)("p",null,"The image to inspect."),(0,r.kt)("h4",{id:"file_url-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"file_url")," (optional)"),(0,r.kt)("p",null,"The image url to inspect if ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," is not provided."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The below JSON schema is returned. It is possible that some attributes will not be returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "type": "object",\n    "properties": {\n      # Templating\n      "name": {\n        "type": "string",\n        "enum": ["man", "woman", "boy", "girl", "baby", "cat", "dog", "NONE"],\n      },\n      "ethnicity": {\n        "type": "string",\n        "enum": ["caucasian", "black", "hispanic", "korean", "japanese", "chinese", "philippine"]\n      },\n      "age": {\n        "type": "string",\n        "enum": ["20 yo", "30 yo", "40 yo", "50 yo", "60 yo", "70 yo"]\n      },\n      "glasses": {\n        "type": "string",\n        "enum": ["glasses", "NONE"]\n      },\n      "eye_color": {\n        "type": "string",\n        "enum": ["blue eyes", "brown eyes", "green eyes", "gray eyes", "black eyes", "NONE"],\n      },\n      "hair_color": {\n        "type": "string",\n        "enum": ["blonde", "brunette", "red hair", "black hair", "NONE"]\n      },\n      "hair_length": {\n        "type": "string",\n        "enum": ["short hair", "medium hair", "long hair", "NONE"]\n      },\n      "hair_style": {\n        "type": "string",\n        "enum": ["dreadlocks", "bald", "cornrows", "straight hair", "curly hair", "wavy hair", "NONE"]\n      },\n      "facial_hair": {\n        "type": "string",\n        "enum": ["mustache", "beard", "goatee", "NONE"]\n      },\n      "is_bald": {\n        "type": "string",\n        "enum": ["bald", "NONE"]\n      },\n      # Filtering helpers\n      "funny_face": {\n        "type": "boolean",\n      },\n      "wearing_sunglasses": {\n        "type": "boolean",\n      },\n      "wearing_hat": {\n        "type": "boolean",\n      },\n      "blurry": {\n        "type": "boolean",\n      },\n      "includes_multiple_people": {\n        "type": "boolean",\n      },\n      "full_body_image_or_longshot": {\n        "type": "boolean",\n      },\n      "selfie": {\n        "type": "boolean",\n      },\n    }\n  }\n\n'))),(0,r.kt)("div",null,(0,r.kt)("h4",{id:"post-imagesinspect"},"POST /images/inspect"),(0,r.kt)(i.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'\ncurl -X POST "https://api.astria.ai/images/inspect" \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -F "name=man" \\\n  -F "file=@/path/to/your/image.jpg"\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nurl = "https://api.astria.ai/images/inspect"\nheaders = {\n    "Authorization": "Bearer YOUR_API_KEY"\n}\nfiles = {\n    "file": open("/path/to/your/image.jpg", "rb")\n}\ndata = {\n    "name": "man"\n}\n\nresponse = requests.post(url, headers=headers, files=files, data=data)\nprint(response.json())\n'))),(0,r.kt)(o.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const axios = require(\'axios\');\nconst FormData = require(\'form-data\');\nconst fs = require(\'fs\');\n\nconst url = "https://api.astria.ai/images/inspect";\nconst form = new FormData();\nform.append("name", "man");\nform.append("file", fs.createReadStream("/path/to/your/image.jpg"));\n\naxios.post(url, form, {\n    headers: {\n        "Authorization": `Bearer YOUR_API_KEY`,\n        ...form.getHeaders()\n    }\n})\n.then(response => {\n    console.log(response.data);\n})\n.catch(error => {\n    console.error(error);\n});\n')))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "age": "20 yo",\n  "blurry": false,\n  "ethnicity": "caucasian",\n  "eye_color": "brown eyes",\n  "facial_hair": "",\n  "full_body_image_or_longshot": false,\n  "funny_face": false,\n  "glasses": "",\n  "hair_color": "brunette",\n  "hair_length": "medium hair",\n  "hair_style": "wavy hair",\n  "includes_multiple_people": false,\n  "is_bald": "",\n  "name": "woman",\n  "selfie": true,\n  "wearing_hat": false,\n  "wearing_sunglasses": false\n}\n')))),(0,r.kt)("h3",{id:"example-implementation"},"Example implementation"),(0,r.kt)("p",null,"The images inspect API is meant to be used by the client-side of your app. The /images/inspect needs to be proxied by your server to avoid exposing your API key to the client."),(0,r.kt)("p",null,"The example below implements two behaviors"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createWarning")," notifies the user about an attribute is true such as ",(0,r.kt)("inlineCode",{parentName:"li"},"funny_face")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"wearing_sunglasses"),". The function expects a form input element containing the class ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," selected by the user."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"aggregateCharacteristics")," aggregates the most common values for each key in the characteristics object and sets the ",(0,r.kt)("inlineCode",{parentName:"li"},"characteristicsInputTarget")," value to the aggregated characteristics.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"  async inspect(previewEl, file) {\n    const form = document.getElementById('new_tune');\n    const formValues = Object.fromEntries(new FormData(form));\n    const name = formValues['tune[name]'];\n    const csrfToken = document.querySelector(\"[name='csrf-token']\").content;\n    const formData = new FormData();\n    formData.append('authenticity_token', csrfToken);\n    formData.append('name', name);\n  \n    // Check if file is an image and readable\n    if (file.type.startsWith('image/')) {\n      try {\n        const resizedFile = await this.resizeImage(file);\n        formData.append('file', resizedFile || file);\n      } catch (error) {\n        console.warn('Image resizing failed, uploading original file:', error);\n        formData.append('file', file);\n      }\n    } else {\n      formData.append('file', file);\n    }\n  \n    const response = await fetch('/images/inspect', {\n      method: 'POST',\n      body: formData,\n    });\n    const data = await response.json();\n    if (!data['name']) {\n      this.createWarning(previewEl, `Could not detect image`);\n    }\n  \n    // Iterate over hash and add warning messages for each true value\n    Object.keys(data).forEach((key) => {\n      if (key === 'name') {\n        if (data[key] === '') {\n          this.createWarning(previewEl, `Could not detect ${name} in the image`);\n        } else if (data[key] && data[key] !== name) {\n          this.createWarning(previewEl, `Could not detect ${name} in the image (2)`);\n        }\n      } else if (data[key] === true) {\n        const warning = capitalizeFirstLetter(key.replace(/_/g, \" \"));\n        this.createWarning(previewEl, warning);\n      }\n    });\n  \n    this.characteristics.push(data);\n    this.aggregateCharacteristics();\n    previewEl.querySelector('.loading').classList.add('d-none');\n    previewEl.querySelector('.remove-btn').classList.remove('d-none');\n  }\n  \n  // Helper function to resize the image\n  async resizeImage(file) {\n    return new Promise((resolve, reject) => {\n      const img = new Image();\n      const reader = new FileReader();\n  \n      reader.onload = (e) => {\n        img.onload = () => {\n          const canvas = document.createElement('canvas');\n          const maxDimension = 512; // Set max dimension for resizing\n          let width = img.width;\n          let height = img.height;\n  \n          if (width <= maxDimension && height <= maxDimension) {\n            console.log(`Image is already smaller than ${maxDimension}x${maxDimension}`)\n            resolve(file);\n            return;\n          }\n          // Calculate new dimensions while maintaining aspect ratio\n          if (width > height) {\n            if (width > maxDimension) {\n              height = Math.round(height * maxDimension / width);\n              width = maxDimension;\n            }\n          } else {\n            if (height > maxDimension) {\n              width = Math.round(width * maxDimension / height);\n              height = maxDimension;\n            }\n          }\n          console.log(`Resizing image to ${width}x${height} from ${img.width}x${img.height}`)\n  \n          canvas.width = width;\n          canvas.height = height;\n          const ctx = canvas.getContext('2d');\n          ctx.drawImage(img, 0, 0, width, height);\n  \n          canvas.toBlob((blob) => {\n            resolve(blob ? new File([blob], file.name, { type: file.type }) : null);\n          }, file.type, 0.9); // Adjust quality if needed\n        };\n  \n        img.onerror = reject;\n        img.src = e.target.result;\n      };\n  \n      reader.onerror = reject;\n      reader.readAsDataURL(file);\n    });\n  }\n\n\n  aggregateCharacteristics() {\n    const aggregated = {};\n    // Iterate over this.characteristics and select value which is more common into this.aggregatedCharacteristics\n    // use only the characeteristics that are string\n    this.characteristics.forEach((characteristic) => {\n      Object.keys(characteristic).forEach((key) => {\n        if (typeof characteristic[key] === 'string') {\n          if (aggregated[key]) {\n            aggregated[key].push(characteristic[key]);\n          } else {\n            aggregated[key] = [characteristic[key]];\n          }\n        }\n      });\n    });\n    console.log('aggregated', aggregated);\n  \n    const commonValues = {};\n    // find most common value for each key and set aggregatedCharacteristics to that value\n    Object.keys(aggregated).forEach((key) => {\n      const values = aggregated[key];\n      const mostCommonValue = values.sort((a, b) =>\n        values.filter(v => v === a).length - values.filter(v => v === b).length\n      ).pop();\n      commonValues[key] = mostCommonValue;\n    });\n    console.log('commonValues', commonValues);\n    this.characteristicsInputTarget.value = JSON.stringify(commonValues);\n  }\n  \n")))}g.isMDXComponent=!0}}]);