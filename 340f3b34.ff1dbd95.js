(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{213:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),m=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=m(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(r),d=n,b=l["".concat(c,".").concat(d)]||l[d]||u[d]||o;return r?i.a.createElement(b,a(a({ref:t},p),{},{components:r})):i.a.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),i=r(7),o=(r(0),r(213)),c={id:"asepritedocument_slices",sidebar_label:"Slices",hide_title:!0,slug:"asepritedocument_slices"},a={unversionedId:"api/asepritedocument_slices",id:"api/asepritedocument_slices",isDocsHomePage:!1,title:"asepritedocument_slices",description:"MonoGame.Aseprite",source:"@site/docs\\api\\asepritedocument_slices.md",slug:"/api/asepritedocument_slices",permalink:"/monogame-aseprite/api/asepritedocument_slices",editUrl:"https://github.com/manbeardgames/monogame-aseprite.github.io/tree/develop/docs/api/asepritedocument_slices.md",version:"current",sidebar_label:"Slices",sidebar:"apiSideBar",previous:{title:"asepritedocument_frames",permalink:"/monogame-aseprite/api/asepritedocument_frames"},next:{title:"asepritedocument_tags",permalink:"/monogame-aseprite/api/asepritedocument_tags"}},s=[{value:"MonoGame.Aseprite.Documents.MonoGame.Aseprite.Documents.AsepriteDocument",id:"monogameasepritedocumentsmonogameasepritedocumentsasepritedocument",children:[]},{value:"AsepriteDocument.Slices Property",id:"asepritedocumentslices-property",children:[]}],p={rightToc:s};function m(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"index"},Object(o.b)("a",Object(n.a)({parentName:"h4"},{href:"index",title:"index"}),"MonoGame.Aseprite")),Object(o.b)("h3",{id:"monogameasepritedocumentsmonogameasepritedocumentsasepritedocument"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"monogame_aseprite_documents",title:"MonoGame.Aseprite.Documents"}),"MonoGame.Aseprite.Documents"),".",Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"asepritedocument",title:"MonoGame.Aseprite.Documents.AsepriteDocument"}),"AsepriteDocument")),Object(o.b)("h2",{id:"asepritedocumentslices-property"},"AsepriteDocument.Slices Property"),Object(o.b)("p",null,"Gets the collection of defined slices, with the dictionary key",Object(o.b)("br",{parentName:"p"}),"\n","being the name of the slice.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"public System.Collections.Generic.Dictionary<string,MonoGame.Aseprite.Documents.AsepriteSlice> Slices { get; set; }\n")),Object(o.b)("h4",{id:"property-value"},"Property Value"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2",title:"System.Collections.Generic.Dictionary`2"}),"System.Collections.Generic.Dictionary","<"),Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/System.String",title:"System.String"}),"System.String"),Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2",title:"System.Collections.Generic.Dictionary`2"}),","),Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"asepriteslice",title:"MonoGame.Aseprite.Documents.AsepriteSlice"}),"AsepriteSlice"),Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2",title:"System.Collections.Generic.Dictionary`2"}),">"),"  "))}m.isMDXComponent=!0}}]);