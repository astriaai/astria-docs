"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[1599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Toonify",s={unversionedId:"use-cases/toonify",id:"use-cases/toonify",title:"Toonify",description:"Input image",source:"@site/docs/use-cases/50-toonify.md",sourceDirName:"use-cases",slug:"/use-cases/toonify",permalink:"/docs/use-cases/toonify",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Product placement",permalink:"/docs/use-cases/product-shots"},next:{title:"Video Generation",permalink:"/docs/use-cases/video-generation"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"toonify"},"Toonify"),(0,o.kt)("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"1.5rem"}},(0,o.kt)("div",null,(0,o.kt)("figcaption",null,"Input image"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"source.png",src:n(1681).Z,width:"580",height:"773"}))),(0,o.kt)("div",null,(0,o.kt)("figcaption",null,"Output Controlnet tile, model: Disney Pixar"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"generated.png",src:n(1728).Z,width:"580",height:"761"})))))}f.isMDXComponent=!0},1681:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/toonify-input-66c7836358b6b2985ca6a595275d8448.png"},1728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/toonify-output-d1468b1833dfd31e77a91d483951331f.png"}}]);