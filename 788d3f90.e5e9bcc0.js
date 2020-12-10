(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(213)),r={id:"installation",title:"Installation",sidebar_label:"Installation"},l={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"This serves to document how to download and add the MonoGame.Aseprite library to your project.",source:"@site/docs\\getting-started\\installation.md",slug:"/getting-started/installation",permalink:"/monogame-aseprite/getting-started/installation",editUrl:"https://github.com/manbeardgames/monogame-aseprite.github.io/tree/develop/docs/getting-started/installation.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/monogame-aseprite/"},next:{title:"Importing an Aseprite File",permalink:"/monogame-aseprite/getting-started/importing-aseprite-file"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Downloading",id:"downloading",children:[]},{value:"Adding Content Pipeline Reference",id:"adding-content-pipeline-reference",children:[{value:"Content Pipeline Tool",id:"content-pipeline-tool",children:[]},{value:"Editing Content File Directly",id:"editing-content-file-directly",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This serves to document how to download and add the ",Object(o.b)("strong",{parentName:"p"},"MonoGame.Aseprite")," library to your project."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.monogame.net/downloads/"}),"MonoGame 3.8")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.monogame.net/articles/getting_started/2_creating_a_new_project_vs.html"}),"A MonoGame project"))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Support for MonoGame 3.7 has ended with the current version of MonoGame.Aseprite."))),Object(o.b)("h2",{id:"downloading"},"Downloading"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Monogame.Aseprite")," is distributed via a NuGet package.  You can add the NuGet package to your project from within your IDE, such as the NuGet Package Manger in Visual Studio.  Just search for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nuget.org/packages/MonoGame.Aseprite/"}),"MonoGame.Aseprite")),Object(o.b)("p",null,"Or if you prefer to add it using a command line interface, you can do one of the following"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Package Manager CLI"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Install-Package MonoGame.Aseprite -Version 2.0.0-beta")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},".NET CLI"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"dotnet add package MonoGame.Aseprite --version 2.0.0-beta")),Object(o.b)("p",null,"Installing the package does two things."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"First, it downloads ",Object(o.b)("inlineCode",{parentName:"li"},"MonoGame.Aseprite.dll")," and ",Object(o.b)("inlineCode",{parentName:"li"},"MonoGame.Aseprite.ContentPipeline.dll"),".  "),Object(o.b)("li",{parentName:"ol"},"Second, it automatically adds a reference in your project for ",Object(o.b)("inlineCode",{parentName:"li"},"MonoGame.Aseprite"),".")),Object(o.b)("p",null,"After installing the NuGet package, we need to add the content pipeline reference manually."),Object(o.b)("h2",{id:"adding-content-pipeline-reference"},"Adding Content Pipeline Reference"),Object(o.b)("p",null,"When the NuGet package is installed, it includes the ",Object(o.b)("inlineCode",{parentName:"p"},"MonoGame.Aseprite.ContentPipeline.dll")," file. If your NuGet packages are installed in the default location on you system, then the file path should be"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"NuGet, by default, will install the package files in the following location"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"C:\\Users\\[User]\\.nuget\\pacakages\\monogame-aseprite\\[Version]\\contentFiles\\netstandard2.0\\MonoGame.Aseprite.ContentPipeline.dll\n")),Object(o.b)("p",{parentName:"div"},"Where ",Object(o.b)("strong",{parentName:"p"},"[User]")," is your username and ",Object(o.b)("strong",{parentName:"p"},"[Version]")," is the version number of the MonoGame.Aseprite package."))),Object(o.b)("p",null,"To add the ",Object(o.b)("inlineCode",{parentName:"p"},"MonoGame.Aseprite.ContentPipeline.dll")," as a reference to the content pipeline, you can do this either using the Content Pipeline Tool or by editing the Content file directly.  Both ways are provided below."),Object(o.b)("h3",{id:"content-pipeline-tool"},"Content Pipeline Tool"),Object(o.b)("p",null,"To add the refernce using the Content Pipeline Tool:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open your projects ",Object(o.b)("inlineCode",{parentName:"li"},"Content.mgcb")," file using the ",Object(o.b)("strong",{parentName:"li"},"Monogame Content Pipeline Tool")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Content")," node in the ",Object(o.b)("strong",{parentName:"li"},"Project")," panel"),Object(o.b)("li",{parentName:"ol"},"Scroll down in the ",Object(o.b)("strong",{parentName:"li"},"Properties")," panel and click to edit the ",Object(o.b)("strong",{parentName:"li"},"References")," field"),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("strong",{parentName:"li"},"Reference Editor")," window that opens, click the ",Object(o.b)("strong",{parentName:"li"},"Add")," button"),Object(o.b)("li",{parentName:"ol"},"Navigate to the location of the ",Object(o.b)("inlineCode",{parentName:"li"},"MonoGame.Aseprite.ContentPipeline.dll")," file as mentioned above and select it to add it.")),Object(o.b)("h3",{id:"editing-content-file-directly"},"Editing Content File Directly"),Object(o.b)("p",null,"To add the reference by editing the content file directly:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open your projects ",Object(o.b)("inlineCode",{parentName:"li"},"Content.mbcb")," file in a text editor"),Object(o.b)("li",{parentName:"ol"},"Locate the ",Object(o.b)("inlineCode",{parentName:"li"},"References")," section and edit it to include the path to the ",Object(o.b)("inlineCode",{parentName:"li"},"MonoGame.Aseprite.ContentPipeline.dll")," file as shown below")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"#-------------------------------- References --------------------------------#\n\n/reference:C:\\Users\\[User]\\.nuget\\packages\\monogame.aseprite\\[Version]\\contentFiles\\netstandard2.0\n")),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"That's it, if you completed the above steps, you're good to go. Next step would be read about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/monogame-aseprite/getting-started/importing-aseprite-file"}),"importing an aseprite file using the MGCB Editor"),"."))}b.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||o;return n?i.a.createElement(u,l(l({ref:t},p),{},{components:n})):i.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);