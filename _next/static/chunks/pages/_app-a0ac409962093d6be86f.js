_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"+YzT":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),c=n.n(o),i=(n("K9S6"),n("q1tI")),l=n.n(i),s=n("y8DL"),u=n("vUet"),f=n("qUpC"),d=n("Wzyw"),p=Function.prototype.bind.call(Function.prototype.call,[].slice);var b=n("lcWJ"),v=n("F9IU"),m=n("ILyh"),h=n("Qdst"),y=function(){},j=l.a.forwardRef((function(e,t){var n,o,c=e.as,s=void 0===c?"ul":c,u=e.onSelect,f=e.activeKey,d=e.role,j=e.onKeyDown,O=Object(a.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),x=Object(i.useReducer)((function(e){return!e}),!1)[1],g=Object(i.useRef)(!1),w=Object(i.useContext)(m.a),C=Object(i.useContext)(h.a);C&&(d=d||"tablist",f=C.activeKey,n=C.getControlledId,o=C.getControllerId);var E=Object(i.useRef)(null),N=function(e){var t=E.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",p(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var c=o+e;return c>=r.length&&(c=0),c<0&&(c=r.length-1),r[c]},P=function(e,t){null!=e&&(u&&u(e,t),w&&w(e,t))};Object(i.useEffect)((function(){if(E.current&&g.current){var e=E.current.querySelector("[data-rb-event-key].active");e&&e.focus()}g.current=!1}));var S=Object(b.a)(t,E);return l.a.createElement(m.a.Provider,{value:P},l.a.createElement(v.a.Provider,{value:{role:d,activeKey:Object(m.b)(f),getControlledId:n||y,getControllerId:o||y}},l.a.createElement(s,Object(r.a)({},O,{onKeyDown:function(e){var t;switch(j&&j(e),e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),P(t.dataset.rbEventKey,e),g.current=!0,x())},ref:S,role:d}))))})),O=n("Mj5q"),x=n("iKII"),g=l.a.forwardRef((function(e,t){var n,o,p,b=Object(s.a)(e,{activeKey:"onSelect"}),v=b.as,m=void 0===v?"div":v,h=b.bsPrefix,y=b.variant,O=b.fill,x=b.justify,g=b.navbar,w=b.className,C=b.children,E=b.activeKey,N=Object(a.a)(b,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),P=Object(u.a)(h,"nav"),S=!1,k=Object(i.useContext)(f.a),I=Object(i.useContext)(d.a);return k?(o=k.bsPrefix,S=null==g||g):I&&(p=I.cardHeaderBsPrefix),l.a.createElement(j,Object(r.a)({as:m,ref:t,activeKey:E,className:c()(w,(n={},n[P]=!S,n[o+"-nav"]=S,n[p+"-"+y]=!!p,n[P+"-"+y]=!!y,n[P+"-fill"]=O,n[P+"-justified"]=x,n))},N),C)}));g.displayName="Nav",g.defaultProps={justify:!1,fill:!1},g.Item=O.a,g.Link=x.a;t.a=g},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),l=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var l=0,s=d.length;l<s;l++){var u=d[l];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var f=a.props[u],p=r[u]||new Set;"name"===u&&c||!p.has(f)?(p.add(f),r[u]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}b.rewind=function(){};var v=b;t.default=v},F9IU:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);a.displayName="NavContext",t.a=a},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},ILyh:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("q1tI"),a=n.n(r).a.createContext(null),o=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=a},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=a.a.createContext&&a.a.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return e&&e.map((function(e,t){return a.a.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function u(e){return function(t){return a.a.createElement(f,i({attr:i({},e.attr)},t),s(e.child))}}function f(e){var t=function(t){var n,r=e.attr,o=e.size,c=e.title,s=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&a.a.createElement("title",null,c),e.children)};return void 0!==c?a.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(o)}},Mj5q:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),c=n.n(o),i=n("q1tI"),l=n.n(i),s=n("vUet"),u=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.children,u=e.as,f=void 0===u?"div":u,d=Object(a.a)(e,["bsPrefix","className","children","as"]);return n=Object(s.a)(n,"nav-item"),l.a.createElement(f,Object(r.a)({},d,{ref:t,className:c()(o,n)}),i)}));u.displayName="NavItem",t.a=u},NbYv:function(e,t,n){"use strict";var r=n("nKUr");t.a=function(){return Object(r.jsx)("a",{href:"https://ko-fi.com/I2I51WSPZ",target:"_blank",children:Object(r.jsx)("img",{height:"36",style:{border:"0px",height:"36px"},src:"https://cdn.ko-fi.com/cdn/kofi1.png?v=2",alt:"Buy Me a Coffee at ko-fi.com"})})}},Qdst:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);t.a=a},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),c=(n("qXWd"),n("48fX")),i=n("tCBg"),l=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var r=n("cpVT"),a=n("nKUr");n("q4sD");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=n("g4pe"),d=n.n(f),p=n("q1tI"),b=n.n(p),v=n("wx14"),m=n("zLVn"),h=n("TSYQ"),y=n.n(h),j=n("y8DL"),O=n("YdCC"),x=n("vUet"),g=b.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(m.a)(e,["bsPrefix","className","as"]);n=Object(x.a)(n,"navbar-brand");var c=a||(o.href?"a":"span");return b.a.createElement(c,Object(v.a)({},o,{ref:t,className:y()(r,n)}))}));g.displayName="NavbarBrand";var w=g,C=n("vYJ8"),E=n("qUpC"),N=b.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(m.a)(e,["children","bsPrefix"]);return r=Object(x.a)(r,"navbar-collapse"),b.a.createElement(E.a.Consumer,null,(function(e){return b.a.createElement(C.a,Object(v.a)({in:!(!e||!e.expanded)},a),b.a.createElement("div",{ref:t,className:r},n))}))}));N.displayName="NavbarCollapse";var P=N,S=n("ZCiN"),k=b.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.label,c=e.as,i=void 0===c?"button":c,l=e.onClick,s=Object(m.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(x.a)(n,"navbar-toggler");var u=Object(p.useContext)(E.a)||{},f=u.onToggle,d=u.expanded,h=Object(S.a)((function(e){l&&l(e),f&&f()}));return"button"===i&&(s.type="button"),b.a.createElement(i,Object(v.a)({},s,{ref:t,onClick:h,"aria-label":o,className:y()(r,n,!d&&"collapsed")}),a||b.a.createElement("span",{className:n+"-icon"}))}));k.displayName="NavbarToggle",k.defaultProps={label:"Toggle navigation"};var I=k,_=n("ILyh"),M=Object(O.a)("navbar-text",{Component:"span"}),R=b.a.forwardRef((function(e,t){var n=Object(j.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,a=n.expand,o=n.variant,c=n.bg,i=n.fixed,l=n.sticky,s=n.className,u=n.children,f=n.as,d=void 0===f?"nav":f,h=n.expanded,O=n.onToggle,g=n.onSelect,w=n.collapseOnSelect,C=Object(m.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),N=Object(x.a)(r,"navbar"),P=Object(p.useCallback)((function(){g&&g.apply(void 0,arguments),w&&h&&O&&O(!1)}),[g,w,h,O]);void 0===C.role&&"nav"!==d&&(C.role="navigation");var S=N+"-expand";"string"===typeof a&&(S=S+"-"+a);var k=Object(p.useMemo)((function(){return{onToggle:function(){return O&&O(!h)},bsPrefix:N,expanded:!!h}}),[N,h,O]);return b.a.createElement(E.a.Provider,{value:k},b.a.createElement(_.a.Provider,{value:P},b.a.createElement(d,Object(v.a)({ref:t},C,{className:y()(s,N,a&&S,o&&N+"-"+o,c&&"bg-"+c,l&&"sticky-"+l,i&&"fixed-"+i)}),u)))}));R.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},R.displayName="Navbar",R.Brand=w,R.Toggle=I,R.Collapse=P,R.Text=M;var q=R,K=n("7vrA"),T=n("+YzT"),A=n("NbYv"),D=n("3Z9Z"),L=n("JI6e"),H=n("ma3e");function U(){return Object(a.jsx)(K.a,{fluid:!0,children:Object(a.jsx)(D.a,{className:"bg-light p-4",children:Object(a.jsx)(L.a,{children:Object(a.jsx)(K.a,{children:Object(a.jsxs)("footer",{children:[Object(a.jsxs)("span",{className:"float-left text-muted",children:["Made freely by ",Object(a.jsxs)("a",{className:"text-muted",href:"https://twitter.com/joshmarcushills",children:[Object(a.jsx)(H.b,{})," joshmarcushills"]})]}),Object(a.jsx)("span",{className:"float-right",children:Object(a.jsxs)("a",{className:"text-muted",href:"https://github.com/joshhills/steam-review-facts",children:[Object(a.jsx)(H.a,{})," View Code"]})})]})})})})})}var z=n("20a2");function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}var B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(s,e);var t,n,r,l=Y(s);function s(){return o(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props.children,t=this.props.router;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)("title",{children:"Steam Review Explorer"}),Object(a.jsx)("meta",{name:"Steam Review Explorer",content:"Explore the facts behind Steam product reviews"})]}),Object(a.jsx)(q,{bg:"light",expand:"lg",children:Object(a.jsxs)(K.a,{children:[Object(a.jsx)(q.Brand,{href:"/steam-review-facts",children:"Steam Review Explorer"}),Object(a.jsx)(q.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(q.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsxs)(T.a,{className:"mr-auto",children:[Object(a.jsx)(T.a.Link,{onClick:function(){return t.push("/")},children:"Home"}),Object(a.jsx)(T.a.Link,{onClick:function(){return t.push("/about")},children:"About"})]}),Object(a.jsx)(A.a,{})]})]})}),Object(a.jsx)(K.a,{className:"pt-5 pb-5",children:e}),Object(a.jsx)(U,{})]})}}])&&c(t.prototype,n),r&&c(t,r),s}(p.Component),Q=Object(z.withRouter)(B);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e){var t=e.Component,n=e.pageProps;return Object(a.jsx)(Q,{children:Object(a.jsx)(t,F({},n))})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},iKII:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),c=n.n(o),i=n("q1tI"),l=n.n(i),s=n("dbZe"),u=n("ZCiN"),f=(n("2W6z"),n("F9IU")),d=n("ILyh"),p=l.a.forwardRef((function(e,t){var n=e.active,o=e.className,s=e.eventKey,p=e.onSelect,b=e.onClick,v=e.as,m=Object(a.a)(e,["active","className","eventKey","onSelect","onClick","as"]),h=Object(d.b)(s,m.href),y=Object(i.useContext)(d.a),j=Object(i.useContext)(f.a),O=n;if(j){m.role||"tablist"!==j.role||(m.role="tab");var x=j.getControllerId(h),g=j.getControlledId(h);m["data-rb-event-key"]=h,m.id=x||m.id,m["aria-controls"]=g||m["aria-controls"],O=null==n&&null!=h?j.activeKey===h:n}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=O);var w=Object(u.a)((function(e){b&&b(e),null!=h&&(p&&p(h,e),y&&y(h,e))}));return l.a.createElement(v,Object(r.a)({},m,{ref:t,onClick:w,className:c()(o,O&&"active")}))}));p.defaultProps={disabled:!1};var b=p,v=n("vUet"),m={disabled:!1,as:s.a},h=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,i=e.className,s=e.href,u=e.eventKey,f=e.onSelect,d=e.as,p=Object(a.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(v.a)(n,"nav-link"),l.a.createElement(b,Object(r.a)({},p,{href:s,ref:t,eventKey:u,as:d,disabled:o,onSelect:f,className:c()(i,n,o&&"disabled")}))}));h.displayName="NavLink",h.defaultProps=m;t.a=h},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},q4sD:function(e,t,n){},qUpC:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);a.displayName="NavbarContext",t.a=a},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},vYJ8:function(e,t,n){"use strict";var r,a=n("wx14"),o=n("zLVn"),c=n("TSYQ"),i=n.n(c),l=n("7j6X"),s=n("q1tI"),u=n.n(s),f=n("dRu9"),d=n("wsUu"),p=n("Qg85"),b=n("z+q/"),v={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function m(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=v[e];return n+parseInt(Object(l.a)(t,r[0]),10)+parseInt(Object(l.a)(t,r[1]),10)}var h=((r={})[f.c]="collapse",r[f.d]="collapsing",r[f.b]="collapsing",r[f.a]="collapse show",r),y={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:m},j=u.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,c=e.onEntered,l=e.onExit,v=e.onExiting,y=e.className,j=e.children,O=e.dimension,x=void 0===O?"height":O,g=e.getDimensionValue,w=void 0===g?m:g,C=Object(o.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"===typeof x?x():x,N=Object(s.useMemo)((function(){return Object(p.a)((function(e){e.style[E]="0"}),n)}),[E,n]),P=Object(s.useMemo)((function(){return Object(p.a)((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),r)}),[E,r]),S=Object(s.useMemo)((function(){return Object(p.a)((function(e){e.style[E]=null}),c)}),[E,c]),k=Object(s.useMemo)((function(){return Object(p.a)((function(e){e.style[E]=w(E,e)+"px",Object(b.a)(e)}),l)}),[l,w,E]),I=Object(s.useMemo)((function(){return Object(p.a)((function(e){e.style[E]=null}),v)}),[E,v]);return u.a.createElement(f.e,Object(a.a)({ref:t,addEndListener:d.a},C,{"aria-expanded":C.role?C.in:null,onEnter:N,onEntering:P,onEntered:S,onExit:k,onExiting:I}),(function(e,t){return u.a.cloneElement(j,Object(a.a)({},t,{className:i()(y,j.props.className,h[e],"width"===E&&"width")}))}))}));j.defaultProps=y,t.a=j}},[[0,0,1,6,2,3]]]);