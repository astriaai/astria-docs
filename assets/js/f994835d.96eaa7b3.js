"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[6614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Overview"},o="Astria Fine-tuning API - Overview",s={unversionedId:"api/overview",id:"api/overview",title:"Overview",description:"Billing",source:"@site/docs/api/0-overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/docs/api/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/0-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/category/api"},next:{title:"Tunes",permalink:"/docs/category/tunes"}},l={},c=[{value:"Billing",id:"billing",level:2},{value:"Storage",id:"storage",level:2},{value:"API key",id:"api-key",level:2},{value:"REST API",id:"rest-api",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Idempotency",id:"idempotency",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"astria-fine-tuning-api---overview"},"Astria Fine-tuning API - Overview"),(0,r.kt)("h2",{id:"billing"},"Billing"),(0,r.kt)("p",null,"The API uses account credits just like the web interface. See section below for 'Create a new fine-tune' for development purposes using ",(0,r.kt)("code",null,"branch=fast"),". Once you're ready for production, you can ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#billing"},"purchase credits")," and adjust the quantity on the checkout page to how much you need.\nThe billing page contains an option to set automatic top-off when account balance becomes negative. This will insure that your API calls will not fail due to insufficient balance. Make sure to set the amount to at least a week worth of API calls to avoid hitting the rate limit on top-off."),(0,r.kt)("h2",{id:"storage"},"Storage"),(0,r.kt)("p",null,"Generated images, training pictures and models, will be automatically deleted 30 days after the training time ended. You may delete the fine-tune object including the trained model, training images, and generated images at any time before using the delete API calls. You may opt-in to automatically ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#billing"},"extend model storage")," "),(0,r.kt)("h2",{id:"api-key"},"API key"),(0,r.kt)("p",null,"Astria uses bearer ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," headers scheme to authentication. API calls you include headers with headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Authorization: Bearer sd_XXXXXX\n")),(0,r.kt)("p",null,"Find your API key on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#api"},"API settings")," under your account settings."),(0,r.kt)("h2",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,"Astria API is built as a REST API. Main resources are ",(0,r.kt)("inlineCode",{parentName:"p"},"tune")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt")," and each one has all the CRUD operations. Prompts are usually used as a nested resource on top of tunes (i.e: ",(0,r.kt)("inlineCode",{parentName:"p"},"/tunes/:id/prompts"),")."),(0,r.kt)("h2",{id:"error-codes"},"Error Codes"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Pay attention to 504 error below and turn on idempotency for your account to avoid duplicate objects.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"422")," - Validation error - Log these errors and use an exception tracking system such as Rollbar or Sentry to get notified. Do not retry these requests."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"500")," - Internal server error - Such requests should be retried with exponential backoff and wait start time of 30 seconds."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"504")," - Gateway timeout - This error indicates that the request processing took more than the 30 seconds which is set as the max request timeout. In most cases the request would probably have been processed and you should avoid retrying it. In order to get the response see Idempotency section"),(0,r.kt)("h2",{id:"idempotency"},"Idempotency"),(0,r.kt)("p",null,"Idempotency is a principle in programming which means that the same operation (a request in our case) can be made multiple times without changing the result. This can be useful when a request is interrupted and you want to make sure it is processed only once, and avoid duplicate objects."),(0,r.kt)("p",null,"Idempotency can be enabled for the account in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#api"},"API settings"),". "),(0,r.kt)("p",null,"For tunes request with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", idempotency will return the existing tune object and will not create a new one. This is useful for cases where you want to make sure you don't create duplicate tunes. In this case set the tune title to a unique value such as a UUID which identifies the transaction."),(0,r.kt)("p",null,"For prompts request with the same attributes, idempotency will return the existing prompt object and will not create a new one. Prompt attributes considered for the idempotency are id, text, trained_at, started_training_at, created_at, updated_at, tune_id, user_id, cfg_scale, steps, seed, process_ip, trials, callback, negative_prompt, is_api, super_resolution, face_correct, public, is_video, community, public_at, community_at, ar, num_images, controlnet, denoising_strength, use_lpw, controlnet_conditioning_scale, fail_message, failed_at, w, h, hires_fix, scheduler, prompt_likes_count, controlnet_txt2img, inpaint_faces "),(0,r.kt)("h1",{id:"auto-top-off"},"Auto top-off"),(0,r.kt)("p",null,"To allow your account to work without disruption, top-off feature can be enabled to refill account each time account balance reaches zero. Auto top-off can be enabled in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.astria.ai/users/edit#billing"},"billing page"),".\nIt is recommended to set the top-off amount to at least a week worth of API calls to avoid hitting the rate limit on top-off - Frequent top-offs can cause credit card charges to fail or bank declines leading."))}d.isMDXComponent=!0}}]);