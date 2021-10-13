"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29965],{62884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],l={},s="Solo",p={unversionedId:"guide/solo/what-is-solo",id:"guide/solo/what-is-solo",isDocsHomePage:!1,title:"Solo",description:"What is Solo?",source:"@site/external/wasp/documentation/docs/guide/solo/what-is-solo.md",sourceDirName:"guide/solo",slug:"/guide/solo/what-is-solo",permalink:"/wasp/guide/solo/what-is-solo",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Off-ledger Requests",permalink:"/wasp/guide/core_concepts/smartcontract-interaction/off-ledger-requests"},next:{title:"First Example",permalink:"/wasp/guide/solo/first-example"}},c=[{value:"What is Solo?",id:"what-is-solo",children:[]},{value:"Installation",id:"installation",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solo"},"Solo"),(0,r.kt)("h2",{id:"what-is-solo"},"What is Solo?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/packages/solo"},(0,r.kt)("em",{parentName:"a"},"Solo"))," is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols before deploying them on the distributed network."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," tests are written in Go. Go (version 1.16) needs to be installed on your machine."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," is part of the ",(0,r.kt)("em",{parentName:"p"},"Wasp")," codebase repository, if you clone the entire repo, you'll have access to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp.git\n")),(0,r.kt)("p",null,"Alternatively, the Solo package can be installed separately using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/iotaledger/wasp/packages/solo\n")),(0,r.kt)("p",null,"In Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get -buildmode=exe github.com/iotaledger/wasp/packages/solo\n")),(0,r.kt)("p",null,"To run Rust/Wasm smart contracts you will also need ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," and ",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-pack/installer/"},"wasm-pack")," installed.\nYou can use any development environment for Rust and Go.\nThe GoLand environment with the Rust plugin is a good combination."),(0,r.kt)("p",null,"You can find example implementations of smart contracts (including source code\nand tests) in the Wasp repository, in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/rust"},"contracts/rust folder"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can find the documentation for all the functionality available in solo in ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/iotaledger/wasp/packages/solo"},"go-docs"),"."))),(0,r.kt)("p",null,"In the following pages some usage examples will be presented. The example code can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples"},"here"),"."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);