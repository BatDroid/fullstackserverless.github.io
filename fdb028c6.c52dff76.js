(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),a=(r(0),r(184));const o={id:"00",title:"aws-amplify-react-hooks",author:null,author_title:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438",author_url:"https://github.com/react-native-village",author_image_url:"https://avatars3.githubusercontent.com/u/6774813?s=460&u=6e1faef60abb6e3a9f746fd96569e2377975c9ec&v=4",tags:["\u0434\u0438\u043c\u043a\u0430\u0420\u0435\u0430\u043a\u0442\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439","Apollo","AWSAmplify","\u0437\u0430\u043c\u0435\u0442\u043a\u0438","Redux","MobX","reactnative"]},l={permalink:"/blog/00",source:"@site/blog/2019-04-09.md",description:"\u0421\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c AWS Amplify \u0441 Redux, MobX \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a AWS Amplify \u044d\u0442\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0435\u0439\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440, \u043d\u043e \u0438 \u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0441 Apollo.",date:"2019-04-09T00:00:00.000Z",tags:[{label:"\u0434\u0438\u043c\u043a\u0430\u0420\u0435\u0430\u043a\u0442\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439",permalink:"/blog/tags/\u0434\u0438\u043c\u043a\u0430\u0440\u0435\u0430\u043a\u0442\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439"},{label:"Apollo",permalink:"/blog/tags/apollo"},{label:"AWSAmplify",permalink:"/blog/tags/aws-amplify"},{label:"\u0437\u0430\u043c\u0435\u0442\u043a\u0438",permalink:"/blog/tags/\u0437\u0430\u043c\u0435\u0442\u043a\u0438"},{label:"Redux",permalink:"/blog/tags/redux"},{label:"MobX",permalink:"/blog/tags/mob-x"},{label:"reactnative",permalink:"/blog/tags/reactnative"}],title:"aws-amplify-react-hooks",readingTime:.335,truncated:!1,prevItem:{title:"Startup Village",permalink:"/blog/01"}},i=[],c={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0421\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c AWS Amplify \u0441 Redux, MobX \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a AWS Amplify \u044d\u0442\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0435\u0439\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440, \u043d\u043e \u0438 \u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0441 Apollo."),Object(a.b)("p",null,"\u0418\u0437 \u043c\u0438\u043d\u0443\u0441\u043e\u0432 #AWSAmplify \u0445\u043e\u0447\u0443 \u043d\u0430\u0437\u0432\u0430\u0442\u044c \u0442\u043e, \u0447\u0442\u043e \u0445\u0443\u043a\u0438 #Apollo c \u0435\u0433\u043e loading \u0438 error \u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u044e\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u043d\u0430 \u0444\u0440\u043e\u043d\u0442\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u043f\u0438\u0441\u0430\u043b open source ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-village/aws-amplify-react-hooks"}),"\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0440\u0435\u0448\u0430\u0435\u0442 \u044d\u0442\u043e \u043d\u0435\u0434\u043e\u0440\u0430\u0437\u0443\u043c\u0435\u043d\u0438\u0435. \u041f\u0440\u0430\u0432\u0434\u043e \u0435\u0435 \u0435\u0449\u0435 \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u043e DataStore."))}p.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},f=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),s=n,m=f["".concat(l,".").concat(s)]||f[s]||b[s]||o;return r?a.a.createElement(m,i({ref:t},p,{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);