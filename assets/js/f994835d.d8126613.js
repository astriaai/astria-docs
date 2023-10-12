"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[6614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Overview"},o="Astria Fine-tuning API - Overview",s={unversionedId:"api/overview",id:"api/overview",title:"Overview",description:"Billing",source:"@site/docs/api/0-overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/docs/api/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/0-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/category/api"},next:{title:"Tunes",permalink:"/docs/category/tunes"}},l={},u=[{value:"Billing",id:"billing",level:2},{value:"Mock testing",id:"mock-testing",level:2},{value:"Auto top off",id:"auto-top-off",level:2},{value:"Storage",id:"storage",level:2},{value:"Authorization",id:"authorization",level:2},{value:"REST API",id:"rest-api",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Idempotency",id:"idempotency",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"astria-fine-tuning-api---overview"},"Astria Fine-tuning API - Overview"),(0,a.kt)("h2",{id:"billing"},"Billing"),(0,a.kt)("p",null,"The API uses account balance just like the web interface. See the ",(0,a.kt)("a",{parentName:"p",href:"https://www.astria.ai/pricing"},"pricing")," page for more details."),(0,a.kt)("h2",{id:"mock-testing"},"Mock testing"),(0,a.kt)("p",null,"The API allows creating a mock ",(0,a.kt)("inlineCode",{parentName:"p"},"Tune")," object with attribute  ",(0,a.kt)("inlineCode",{parentName:"p"},"branch=fast"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.astria.ai/docs/api/tune/create#branch-optional"},"Create a tune documentation"),"]. API call for creating ",(0,a.kt)("inlineCode",{parentName:"p"},"fast")," tune is free, and subsequent prompt calls will return mock images without incurring any charges. This is useful for testing your integration with the API.\nOnce you're ready for production, you can ",(0,a.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#billing"},"purchase credits")," and adjust the quantity on the checkout page to how much you need."),(0,a.kt)("h2",{id:"auto-top-off"},"Auto top off"),(0,a.kt)("p",null,"To allow your account to work without disruption, top-off feature can be enabled to refill account each time account balance reaches zero. Auto top-off can be enabled in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#billing"},"billing page"),".\nIt is recommended to set the top-off amount to at least a week worth of API calls to avoid hitting the rate limit on top-off - Frequent top-offs can cause credit card charges to fail or bank declines leading."),(0,a.kt)("h2",{id:"storage"},"Storage"),(0,a.kt)("p",null,"Generated images, training pictures and models, will be automatically deleted 30 days after the training has ended. You may delete the fine-tune object including the trained model, training images, and generated images at any time before using the delete API calls. You may opt-in to automatically ",(0,a.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#billing"},"extend model storage")," "),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"The API uses bearer ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," headers scheme. API calls should include the header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Authorization: Bearer sd_XXXXXX\n")),(0,a.kt)("p",null,"Find your API key on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#api"},"API settings")," under your account settings."),(0,a.kt)("h2",{id:"rest-api"},"REST API"),(0,a.kt)("p",null,"Astria API is built as a REST API. Main resources are ",(0,a.kt)("inlineCode",{parentName:"p"},"tune")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"prompt")," and each one has all the CRUD operations. Prompts are usually used as a nested resource on top of tunes (i.e: ",(0,a.kt)("inlineCode",{parentName:"p"},"/tunes/:id/prompts"),")."),(0,a.kt)("h2",{id:"error-codes"},"Error Codes"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Pay attention to 504 error below and turn on idempotency for your account to avoid duplicate objects.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"422")," - Validation error - Log these errors and use an exception tracking system such as Rollbar or Sentry to get notified. Do not retry these requests."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"500")," - Internal server error - Such requests should be retried with exponential backoff and wait start time of 30 seconds."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"504")," - Gateway timeout - This error indicates that the request processing took more than the 30 seconds which is set as the max request timeout. In most cases the request would probably have been processed and you should avoid retrying it. In order to get the response see Idempotency section"),(0,a.kt)("h2",{id:"idempotency"},"Idempotency"),(0,a.kt)("p",null,"Idempotency is a principle in programming which means that the same operation (a request in our case) can be made multiple times without changing the result. This can be useful when a request is interrupted and you want to make sure it is processed only once, and avoid duplicate objects."),(0,a.kt)("p",null,"Idempotency can be enabled for the account in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#api"},"API settings"),". "),(0,a.kt)("p",null,"For tunes request with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),", idempotency will return the existing tune object and will not create a new one. This is useful for cases where you want to make sure you don't create duplicate tunes. In this case set the tune title to a unique value such as a UUID which identifies the transaction."),(0,a.kt)("p",null,"For prompts request with the same attributes, idempotency will return the existing prompt object and will not create a new one. Prompt attributes considered for the idempotency are ",(0,a.kt)("inlineCode",{parentName:"p"},"id, text, tune_id, cfg_scale, steps, seed, callback, negative_prompt, super_resolution, face_correct, ar, num_images, controlnet, denoising_strength, use_lpw, controlnet_conditioning_scale, w, h, hires_fix, scheduler, controlnet_txt2img, inpaint_faces")))}d.isMDXComponent=!0}}]);