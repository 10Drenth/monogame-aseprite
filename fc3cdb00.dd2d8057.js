(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(213)),o={id:"animatedsprite_addanimation_animation_",sidebar_label:"AddAnimation(Animation)",hide_title:!0,slug:"animatedsprite_addanimation_animation_"},m={unversionedId:"api/animatedsprite_addanimation_animation_",id:"api/animatedsprite_addanimation_animation_",isDocsHomePage:!1,title:"animatedsprite_addanimation_animation_",description:"MonoGame.Aseprite",source:"@site/docs\\api\\animatedsprite_addanimation_animation_.md",slug:"/api/animatedsprite_addanimation_animation_",permalink:"/monogame-aseprite/api/animatedsprite_addanimation_animation_",editUrl:"https://github.com/manbeardgames/monogame-aseprite.github.io/tree/develop/docs/api/animatedsprite_addanimation_animation_.md",version:"current",sidebar_label:"AddAnimation(Animation)",sidebar:"apiSideBar",previous:{title:"animatedsprite_width",permalink:"/monogame-aseprite/api/animatedsprite_width"},next:{title:"animatedsprite_addanimation_string__int__int_",permalink:"/monogame-aseprite/api/animatedsprite_addanimation_string__int__int_"}},p=[{value:"MonoGame.Aseprite.Graphics.MonoGame.Aseprite.Graphics.AnimatedSprite",id:"monogameasepritegraphicsmonogameasepritegraphicsanimatedsprite",children:[]},{value:"AnimatedSprite.AddAnimation(MonoGame.Aseprite.Graphics.Animation) Method",id:"animatedspriteaddanimationmonogameasepritegraphicsanimation-method",children:[{value:"Remarks",id:"remarks",children:[]}]}],c={rightToc:p};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"index"},Object(r.b)("a",Object(n.a)({parentName:"h4"},{href:"index",title:"index"}),"MonoGame.Aseprite")),Object(r.b)("h3",{id:"monogameasepritegraphicsmonogameasepritegraphicsanimatedsprite"},Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"monogame_aseprite_graphics",title:"MonoGame.Aseprite.Graphics"}),"MonoGame.Aseprite.Graphics"),".",Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"animatedsprite",title:"MonoGame.Aseprite.Graphics.AnimatedSprite"}),"AnimatedSprite")),Object(r.b)("h2",{id:"animatedspriteaddanimationmonogameasepritegraphicsanimation-method"},"AnimatedSprite.AddAnimation(MonoGame.Aseprite.Graphics.Animation) Method"),Object(r.b)("p",null,"Adds the given ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"animation",title:"MonoGame.Aseprite.Graphics.Animation"}),"Animation")," to the animations dictionary  "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"public void AddAnimation(MonoGame.Aseprite.Graphics.Animation animation);\n")),Object(r.b)("h4",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"animation")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"animation",title:"MonoGame.Aseprite.Graphics.Animation"}),"Animation"),Object(r.b)("br",{parentName:"p"}),"\n","The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"animation",title:"MonoGame.Aseprite.Graphics.Animation"}),"Animation")," to add  "),Object(r.b)("h4",{id:"exceptions"},"Exceptions"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException",title:"System.ArgumentException"}),"System.ArgumentException"),Object(r.b)("br",{parentName:"p"}),"\n","Thrown if the animation provided has a name that is already present in",Object(r.b)("br",{parentName:"p"}),"\n","the animation dictionary  "),Object(r.b)("h3",{id:"remarks"},"Remarks"),Object(r.b)("p",null,"Animations are stored in the dictionary by name, so each animation",Object(r.b)("br",{parentName:"p"}),"\n","must have a unique name  "))}s.isMDXComponent=!0},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},d=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),l=n,u=d["".concat(o,".").concat(l)]||d[l]||b[l]||r;return a?i.a.createElement(u,m(m({ref:t},c),{},{components:a})):i.a.createElement(u,m({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=l;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);