_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],d=r[l]||new Set;"name"===l&&c||!d.has(f)?(d.add(f),r[l]=d):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=a.a.createContext&&a.a.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function u(e){return e&&e.map((function(e,t){return a.a.createElement(e.tag,i({key:t},e.attr),u(e.child))}))}function l(e){return function(t){return a.a.createElement(f,i({attr:i({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var n,r=e.attr,o=e.size,c=e.title,u=s(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&a.a.createElement("title",null,c),e.children)};return void 0!==c?a.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(o)}},NbYv:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("nKUr");function a(){return Object(r.jsx)("a",{href:"https://ko-fi.com/I2I51WSPZ",target:"_blank",children:Object(r.jsx)("img",{height:"36",style:{border:"0px",height:"36px"},src:"https://cdn.ko-fi.com/cdn/kofi1.png?v=2",alt:"Buy Me a Coffee at ko-fi.com"})})}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),c=(n("qXWd"),n("48fX")),i=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return re}));var r=n("cpVT"),a=n("nKUr");n("q4sD");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=n("g4pe"),p=n.n(f),d=n("q1tI"),b=n.n(d),h=n("wx14"),m=n("zLVn"),v=n("TSYQ"),y=n.n(v),j=n("y8DL"),O=n("YdCC"),g=n("vUet"),x=b.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(m.a)(e,["bsPrefix","className","as"]);n=Object(g.a)(n,"navbar-brand");var c=a||(o.href?"a":"span");return b.a.createElement(c,Object(h.a)({},o,{ref:t,className:y()(r,n)}))}));x.displayName="NavbarBrand";var w,E=x,P=n("7j6X"),_=n("dRu9"),C=n("wsUu"),N=n("Qg85"),M=n("z+q/"),S={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function k(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=S[e];return n+parseInt(Object(P.a)(t,r[0]),10)+parseInt(Object(P.a)(t,r[1]),10)}var I=((w={})[_.c]="collapse",w[_.d]="collapsing",w[_.b]="collapsing",w[_.a]="collapse show",w),R={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:k},T=b.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,a=e.onEntered,o=e.onExit,c=e.onExiting,i=e.className,s=e.children,u=e.dimension,l=void 0===u?"height":u,f=e.getDimensionValue,p=void 0===f?k:f,v=Object(m.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),j="function"===typeof l?l():l,O=Object(d.useMemo)((function(){return Object(N.a)((function(e){e.style[j]="0"}),n)}),[j,n]),g=Object(d.useMemo)((function(){return Object(N.a)((function(e){var t="scroll"+j[0].toUpperCase()+j.slice(1);e.style[j]=e[t]+"px"}),r)}),[j,r]),x=Object(d.useMemo)((function(){return Object(N.a)((function(e){e.style[j]=null}),a)}),[j,a]),w=Object(d.useMemo)((function(){return Object(N.a)((function(e){e.style[j]=p(j,e)+"px",Object(M.a)(e)}),o)}),[o,p,j]),E=Object(d.useMemo)((function(){return Object(N.a)((function(e){e.style[j]=null}),c)}),[j,c]);return b.a.createElement(_.e,Object(h.a)({ref:t,addEndListener:C.a},v,{"aria-expanded":v.role?v.in:null,onEnter:O,onEntering:g,onEntered:x,onExit:w,onExiting:E}),(function(e,t){return b.a.cloneElement(s,Object(h.a)({},t,{className:y()(i,s.props.className,I[e],"width"===j&&"width")}))}))}));T.defaultProps=R;var A=T,D=n("qUpC"),H=b.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(m.a)(e,["children","bsPrefix"]);return r=Object(g.a)(r,"navbar-collapse"),b.a.createElement(D.a.Consumer,null,(function(e){return b.a.createElement(A,Object(h.a)({in:!(!e||!e.expanded)},a),b.a.createElement("div",{ref:t,className:r},n))}))}));H.displayName="NavbarCollapse";var q=H,B=n("ZCiN"),X=b.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.label,c=e.as,i=void 0===c?"button":c,s=e.onClick,u=Object(m.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(g.a)(n,"navbar-toggler");var l=Object(d.useContext)(D.a)||{},f=l.onToggle,p=l.expanded,v=Object(B.a)((function(e){s&&s(e),f&&f()}));return"button"===i&&(u.type="button"),b.a.createElement(i,Object(h.a)({},u,{ref:t,onClick:v,"aria-label":o,className:y()(r,n,!p&&"collapsed")}),a||b.a.createElement("span",{className:n+"-icon"}))}));X.displayName="NavbarToggle",X.defaultProps={label:"Toggle navigation"};var U=X,z=n("ILyh"),K=Object(O.a)("navbar-text",{Component:"span"}),L=b.a.forwardRef((function(e,t){var n=Object(j.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,a=n.expand,o=n.variant,c=n.bg,i=n.fixed,s=n.sticky,u=n.className,l=n.children,f=n.as,p=void 0===f?"nav":f,v=n.expanded,O=n.onToggle,x=n.onSelect,w=n.collapseOnSelect,E=Object(m.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),P=Object(g.a)(r,"navbar"),_=Object(d.useCallback)((function(){x&&x.apply(void 0,arguments),w&&v&&O&&O(!1)}),[x,w,v,O]);void 0===E.role&&"nav"!==p&&(E.role="navigation");var C=P+"-expand";"string"===typeof a&&(C=C+"-"+a);var N=Object(d.useMemo)((function(){return{onToggle:function(){return O&&O(!v)},bsPrefix:P,expanded:!!v}}),[P,v,O]);return b.a.createElement(D.a.Provider,{value:N},b.a.createElement(z.a.Provider,{value:_},b.a.createElement(p,Object(h.a)({ref:t},E,{className:y()(u,P,a&&C,o&&P+"-"+o,c&&"bg-"+c,s&&"sticky-"+s,i&&"fixed-"+i)}),l)))}));L.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},L.displayName="Navbar",L.Brand=E,L.Toggle=U,L.Collapse=q,L.Text=K;var W=L,Y=n("7vrA"),V=n("+YzT"),F=n("NbYv"),Q=n("3Z9Z"),Z=n("JI6e"),G=n("ma3e");function J(){return Object(a.jsx)(Y.a,{fluid:!0,children:Object(a.jsx)(Q.a,{className:"bg-light p-4 mt-4",children:Object(a.jsx)(Z.a,{children:Object(a.jsx)(Y.a,{children:Object(a.jsxs)("footer",{children:[Object(a.jsxs)("span",{className:"float-left",children:["Made freely by ",Object(a.jsxs)("a",{className:"text-muted",href:"https://twitter.com/joshmarcushills",children:[Object(a.jsx)(G.b,{})," joshmarcushills"]})]}),Object(a.jsx)("span",{className:"float-right",children:Object(a.jsxs)("a",{className:"text-muted",href:"https://github.com/joshhills/steam-review-facts",children:[Object(a.jsx)(G.a,{})," View Code"]})})]})})})})})}function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}var ee=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(u,e);var t,n,r,s=$(u);function u(){return o(this,u),s.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(p.a,{children:[Object(a.jsx)("title",{children:"Steam Review Explorer"}),Object(a.jsx)("meta",{name:"Steam Review Explorer",content:"Explore the facts behind Steam product reviews"})]}),Object(a.jsx)(W,{bg:"light",expand:"lg",children:Object(a.jsxs)(Y.a,{children:[Object(a.jsx)(W.Brand,{href:"/steam-review-facts",children:"Steam Review Explorer"}),Object(a.jsx)(W.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(W.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsxs)(V.a,{className:"mr-auto",children:[Object(a.jsx)(V.a.Link,{href:"/steam-review-facts",children:"Home"}),Object(a.jsx)(V.a.Link,{href:"/steam-review-facts/about",children:"About"})]}),Object(a.jsx)(F.a,{})]})]})}),Object(a.jsx)(Y.a,{children:e}),Object(a.jsx)(J,{})]})}}])&&c(t.prototype,n),r&&c(t,r),u}(d.Component);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e){var t=e.Component,n=e.pageProps;return Object(a.jsx)(ee,{children:Object(a.jsx)(t,ne({},n))})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},q4sD:function(e,t,n){},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}}},[[0,0,2,4,1,3]]]);