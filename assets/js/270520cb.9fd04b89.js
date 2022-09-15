"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3282],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(7294),r=n(6010),s=n(1048),i=n(3609),l=n(1943),p=n(2957);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:d,groupId:f,className:g}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:j}=(0,l.U)(),[T,N]=(0,o.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=f){const e=v[f];null!=e&&e!==T&&h.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==T&&(C(t),N(a),null!=f&&j(f,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},g)},h.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:w,onClick:w},s,{className:(0,r.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,s.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},5572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),o=(n(7294),n(4137)),r=n(4259),s=n(425);const i={title:"TypeScript Config option"},l=void 0,p={unversionedId:"getting-started/options/tsconfig",id:"version-29.0/getting-started/options/tsconfig",title:"TypeScript Config option",description:"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.",source:"@site/versioned_docs/version-29.0/getting-started/options/tsconfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/tsconfig",permalink:"/ts-jest/docs/getting-started/options/tsconfig",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/tsconfig.md",tags:[],version:"29.0",lastUpdatedBy:"Tom Mrazauskas",lastUpdatedAt:1663225398,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{title:"TypeScript Config option"}},c={},u=[{value:"Examples",id:"examples",level:3},{value:"Path to a <code>tsconfig</code> file",id:"path-to-a-tsconfig-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4},{value:"Disable auto-lookup",id:"disable-auto-lookup",level:4}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," option allows you to define which ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," JSON file to use. An inline ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options")," object can also be specified instead of a file path."),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. If it cannot find one, it will use the default TypeScript ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options"),"; except, ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2015")," is used as ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ES5"),"."),(0,o.kt)("p",null,"If you need to use defaults and force ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," to use the defaults even if there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project, you can set this option to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"path-to-a-tsconfig-file"},"Path to a ",(0,o.kt)("inlineCode",{parentName:"h4"},"tsconfig")," file"),(0,o.kt)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"<rootDir>")," in the path to start from the project root dir."),(0,o.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    '<regex_match_files': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          "tsconfig": "tsconfig.test.json"\n        }\n      ]\n    }\n  }\n}\n')))),(0,o.kt)("h4",{id:"inline-compiler-options"},"Inline compiler options"),(0,o.kt)("p",null,"Refer to the TypeScript ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options")," for reference.\nIt's basically the same object you'd put in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"compilerOptions"),"."),(0,o.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    '<regex_match_files': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "importHelpers": true\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,o.kt)("h4",{id:"disable-auto-lookup"},"Disable auto-lookup"),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    '<regex_match_files': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(s.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "tsconfig": false\n          }\n        }\n      ]\n    }\n  }\n}\n')))))}d.isMDXComponent=!0}}]);