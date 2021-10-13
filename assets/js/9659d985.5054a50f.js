"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[62189],{20810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=["components"],l={},c="Docker",p={unversionedId:"misc/docker",id:"misc/docker",isDocsHomePage:!1,title:"Docker",description:"This page describes the configuration of the Wasp node in combination with Docker.",source:"@site/external/wasp/documentation/docs/misc/docker.md",sourceDirName:"misc",slug:"/misc/docker",permalink:"/wasp/misc/docker",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running a Node",permalink:"/wasp/guide/chains_and_nodes/running-a-node"},next:{title:"Configuring wasp-cli",permalink:"/wasp/guide/chains_and_nodes/wasp-cli"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Running a Wasp node",id:"running-a-wasp-node",children:[{value:"Configuration",id:"configuration",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("p",null,"This page describes the configuration of the Wasp node in combination with Docker."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The dockerfile is separated into several stages which effectively splits Wasp into four small pieces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Testing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Unit testing"),(0,o.kt)("li",{parentName:"ul"},"Integration testing"))),(0,o.kt)("li",{parentName:"ul"},"Wasp CLI"),(0,o.kt)("li",{parentName:"ul"},"Wasp Node")),(0,o.kt)("h2",{id:"running-a-wasp-node"},"Running a Wasp node"),(0,o.kt)("p",null,"Checkout the project, switch to 'develop' and build the main image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone -b develop https://github.com/iotaledger/wasp.git\n$ cd wasp\n$ docker build -t wasp-node .\n")),(0,o.kt)("p",null,"The build process will copy the docker_config.json file into the image which will use it when the node gets started. "),(0,o.kt)("p",null,"By default, the build process will use ",(0,o.kt)("inlineCode",{parentName:"p"},"-tags rocksdb")," as a build argument. This argument can be modified with ",(0,o.kt)("inlineCode",{parentName:"p"},"--build-arg BUILD_TAGS=<tags>"),"."),(0,o.kt)("p",null,"Depending on the use case, Wasp requires a different GoShimmer hostname which can be changed at this part inside the docker_config.json file: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  "nodeconn": {\n    "address": "goshimmer:5000"\n  },\n')),(0,o.kt)("p",null,"The Wasp node can be started like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run wasp-node\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After the build process has been completed, it is still possible to inject a different configuration file into a new container. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run -v $(pwd)/alternative_docker_config.json:/run/config.json wasp-node\n")),(0,o.kt)("p",null,"Further configuration is possible using arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run wasp-node --nodeconn.address=alt_goshimmer:5000 \n")),(0,o.kt)("p",null,"To get a list of all available arguments, run the node with the argument '--help'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run wasp-node --help\n")),(0,o.kt)("h1",{id:"wasp-cli"},"Wasp CLI"),(0,o.kt)("p",null,"It is possible to create a micro image that just contains the wasp-cli application without any Wasp node related additions."),(0,o.kt)("p",null,"This might be helpful if it's required to control but not to run a Wasp node."),(0,o.kt)("p",null,"The image can be created like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$docker build --target wasp-cli -t wasp-cli . \n")),(0,o.kt)("p",null,"Like with the Wasp node setup, the container gets started by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run wasp-cli\n")),(0,o.kt)("p",null,"and can be controlled with further arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run wasp-cli --help\n")),(0,o.kt)("h1",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Wip"))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=i,f=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);