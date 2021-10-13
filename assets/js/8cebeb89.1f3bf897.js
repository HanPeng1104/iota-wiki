"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39898],{18775:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),o=["components"],s={keywords:["ISCP","Wasp-cli","Configuration","Goshimmer","command line"],description:"How to configure the wasp-cli. Requirements and configuration parameters.",image:"/img/logo/WASP_logo_dark.png"},c="Configuring wasp-cli",p={unversionedId:"guide/chains_and_nodes/wasp-cli",id:"guide/chains_and_nodes/wasp-cli",isDocsHomePage:!1,title:"Configuring wasp-cli",description:"How to configure the wasp-cli. Requirements and configuration parameters.",source:"@site/external/wasp/documentation/docs/guide/chains_and_nodes/wasp-cli.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/wasp-cli",permalink:"/wasp/guide/chains_and_nodes/wasp-cli",tags:[],version:"current",frontMatter:{keywords:["ISCP","Wasp-cli","Configuration","Goshimmer","command line"],description:"How to configure the wasp-cli. Requirements and configuration parameters.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/wasp/misc/docker"},next:{title:"Setting Up a Chain",permalink:"/wasp/guide/chains_and_nodes/setting-up-a-chain"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-wasp-cli"},"Configuring wasp-cli"),(0,a.kt)("p",null,"Here we describe step by step instructions how to use wasp-cli to interact with Wasp nodes on the Goshimmer network."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"After going through the instructions on ",(0,a.kt)("a",{parentName:"p",href:"/wasp/guide/chains_and_nodes/running-a-node"},"Running a node"),", you should have the wasp-cli binary available in your system."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can create a basic default configuration by running ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp-cli init"),". This will create a configuration file named ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," in the current directory."),(0,a.kt)("p",null,"Then, we need to tell ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp-cli")," the location of the Goshimmer node and the\ncommittee of Wasp nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ wasp-cli set goshimmer.api 127.0.0.1:8080\n\n$ wasp-cli set wasp.0.api 127.0.0.1:9090\n$ wasp-cli set wasp.0.nanomsg 127.0.0.1:5550\n$ wasp-cli set wasp.0.peering 127.0.0.1:4000\n\n$ wasp-cli set wasp.1.api 127.0.0.1:9091\n$ wasp-cli set wasp.1.nanomsg 127.0.0.1:5551\n$ wasp-cli set wasp.1.peering 127.0.0.1:4001\n\n...\n")),(0,a.kt)("p",null,"Alternatively, you can edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," file and include the desired server locations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the goshimmer api address:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "goshimmer": {\n    "api": "127.0.0.1:8080",\n    "faucetpowtarget": -1\n  },\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The API/nanomsg/peering address for each Wasp node:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"wasp": {\n    "0": {\n      "api": "127.0.0.1:9090",\n      "nanomsg": "127.0.0.1:5550",\n      "peering": "127.0.0.1:4000"\n    },\n    "1": {\n      ...\n    },\n  }\n')))))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);