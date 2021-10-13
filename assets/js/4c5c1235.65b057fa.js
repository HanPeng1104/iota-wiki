"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34834],{65045:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],s={},c="Creating a Chain; Core Contracts",l={unversionedId:"tutorial/03",id:"tutorial/03",isDocsHomePage:!1,title:"Creating a Chain; Core Contracts",description:"In a test we can deploy one or several chains, deploy smart contracts on them,",source:"@site/external/wasp/documentation/docs/tutorial/03.md",sourceDirName:"tutorial",slug:"/tutorial/03",permalink:"/wasp/tutorial/03",tags:[],version:"current",frontMatter:{}},p=[{value:"Writing and compiling first Rust smart contract",id:"writing-and-compiling-first-rust-smart-contract",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-chain-core-contracts"},"Creating a Chain; Core Contracts"),(0,o.kt)("p",null,"In a test we can deploy one or several chains, deploy smart contracts on them,\nand invoke them."),(0,o.kt)("p",null,"In the example ",(0,o.kt)("inlineCode",{parentName:"p"},"TestTutorial1"),", the statement\n",(0,o.kt)("inlineCode",{parentName:"p"},'chain := env.NewChain(nil, "ex1")')," creates and deploys a new chain ",(0,o.kt)("inlineCode",{parentName:"p"},"ex1")," in the\nenvironment of the test. Several chains may be deployed in the test."),(0,o.kt)("p",null,"Deploying a chain automatically means deployment of all core smart contracts on\nit. The core contracts are responsible for the vital functions of the chain and\nprovide infrastructure for all other smart contracts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/root"},"root"),". Responsible for the initialization of the chain, maintains\nthe global parameters, and the registry of deployed contracts. It also handles\nfees and performs other functions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/default"},"_default"),". Any request that cannot be handled by any of the\nother deployed contracts ends up here.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/accounts"},"accounts"),". Responsible for the on-chain ledger of accounts. The\non-chain accounts contain colored tokens, which are controlled by smart\ncontracts and addresses on the UTXO Ledger.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/blob"},"blob"),". Responsible for the immutable registry of binary objects of\narbitrary size. One blob is a collection of named binary chunks of data. For\nexample, a blob can be used to store a collections of ",(0,o.kt)("em",{parentName:"p"},"wasm")," binaries, needed\nto deploy ",(0,o.kt)("em",{parentName:"p"},"WebAssembly")," smart contracts. Each blob in the registry is\nreferenced by its hash which is deterministically calculated from its data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/blocklog"},"blocklog"),". Keeps track of the blocks, requests and event that were\nprocessed by the chain."))),(0,o.kt)("h2",{id:"writing-and-compiling-first-rust-smart-contract"},"Writing and compiling first Rust smart contract"),(0,o.kt)("p",null,"In this section we will create a new smart contract. We will write its code in\nRust, and then will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasplib")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/rust/wasmlib"},"library"),"\nand  ",(0,o.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-pack/installer/"},"wasm-pack")," to compile it into a WebAssembly (",(0,o.kt)("em",{parentName:"p"},"wasm"),") binary."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This tutorial is not a tutorial of the ISCP smart contract development\nenvironment: for that we will provide other tutorials. The only goal of these\nexamples is an introduction to fundamental principles of ISCP smart contracts."))),(0,o.kt)("p",null,"We assume you already have Rust and ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-pack"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-pack/installer/"},"installed"),"."),(0,o.kt)("p",null,"We will be using the examples from the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp")," repository located in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/docOps/tutorial/rust-example"},"https://github.com/iotaledger/wasp/tree/develop/docOps/tutorial/rust-example")," directory."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rust-example")," smart contract is a simple smart contract which stores a\nstring in its state upon request and allows to retrieve the stored string by\ncalling a view. The smart contract also implements an entry point which allows\nthe creator of the smart contract instance to withdraw all iotas contained in\nthe smart contract's account on the chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmlib::*;\n\nconst PARAM_STRING: &str = "paramString";\nconst VAR_STRING: &str = "storedString";\n\n#[no_mangle]\nfn on_load() {\n    // declare entry points of the smart contract\n    let exports = ScExports::new();\n    exports.add_func("storeString", store_string);\n    exports.add_view("getString", get_string);\n    exports.add_func("withdrawIota", withdraw_iota);\n}\n\n// storeString entry point stores a string provided as parameters\n// in the state as a value of the key \'storedString\'\n// panics if parameter is not provided\nfn store_string(ctx: &ScFuncContext) {\n    // take parameter paramString\n    let par = ctx.params().get_string(PARAM_STRING);\n    // require parameter exists\n    ctx.require(par.exists(), "string parameter not found");\n\n    // store the string in "storedString" variable\n    ctx.state().get_string(VAR_STRING).set_value(&par.value());\n    // log the text\n    let msg = "Message stored: ".to_string() + &par.value();\n    ctx.log(&msg);\n}\n\n// getString view returns the string value of the key \'storedString\'\n// The call return result as a key/value dictionary.\n// the returned value in the result is under key \'paramString\'\nfn get_string(ctx: &ScViewContext) {\n    // take the stored string\n    let s = ctx.state().get_string(VAR_STRING).value();\n    // return the string value in the result dictionary\n    ctx.results().get_string(PARAM_STRING).set_value(&s);\n}\n\n// withdraw_iota sends all iotas contained in the contract\'s account\n// to the caller\'s L1 address.\n// Panics of the caller is not an address\n// Panics if the address is not the creator of the contract is the caller\n// The caller will be address only if request is sent from the wallet on the L1, not a smart contract\nfn withdraw_iota(ctx: &ScFuncContext) {\n    let creator = ctx.contract_creator();\n    let caller = ctx.caller();\n\n    ctx.require(creator == caller, "not authorised");\n    ctx.require(caller.is_address(), "caller must be an address");\n\n    let bal = ctx.balances().balance(&ScColor::IOTA);\n    if bal > 0 {\n        ctx.transfer_to_address(&caller.address(), ScTransfers::new(&ScColor::IOTA, bal))\n    }\n}\n')),(0,o.kt)("p",null,"Running the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-pack build")," command will produce something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:/Users/evaldas/.cargo/bin/wasm-pack.exe build -- --color=always\n[INFO]: Checking for the Wasm target...\n[INFO]: Compiling to Wasm...\n    Finished release [optimized] target(s) in 0.05s\n[INFO]: Installing wasm-bindgen...\n[INFO]: Optimizing wasm binaries with `wasm-opt`...\n[INFO]: :-) Done in 0.80s\n[INFO]: :-) Your wasm pkg is ready to publish at C:\\Users\\evaldas\\Documents\\proj\\Go\\src\\github.com\\iotaledger\\wasp\\docOps\\tutorial-examples\\pkg.\n")),(0,o.kt)("p",null,"The 17KB file ",(0,o.kt)("inlineCode",{parentName:"p"},"example_tutorial_bg.wasm")," is the binary of the smart contract. We\nwill be using it in further examples. The file contains everything needed to\ndeploy the smart contract on a chain run on the ISCP network."))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);