webpackJsonp([5],{0:function(e,t,n){e.exports=n(58)},38:function(e,t){e.exports=window.ReactDOM},39:function(e,t){"use strict";function n(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var a=n[r];" "==a.charAt(0);)a=a.substring(1);if(a.indexOf(t)!=-1)return a.substring(t.length,a.length)}return""}function r(e,t,n){var r=30,a=new Date;a.setTime(a.getTime()+24*r*60*60*1e3),document.cookie=e+"="+escape(t)+";path="+n.path+";expires="+a.toGMTString()}function a(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(n){var r,a,l,o,i,s,u,c="",f=0;for(n=t(n);f<n.length;)r=n.charCodeAt(f++),a=n.charCodeAt(f++),l=n.charCodeAt(f++),o=r>>2,i=(3&r)<<4|a>>4,s=(15&a)<<2|l>>6,u=63&l,isNaN(a)?s=u=64:isNaN(l)&&(u=64),c=c+e.charAt(o)+e.charAt(i)+e.charAt(s)+e.charAt(u);return c},this.decode=function(t){var r,a,l,o,i,s,u,c="",f=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<t.length;)o=e.indexOf(t.charAt(f++)),i=e.indexOf(t.charAt(f++)),s=e.indexOf(t.charAt(f++)),u=e.indexOf(t.charAt(f++)),r=o<<2|i>>4,a=(15&i)<<4|s>>2,l=(3&s)<<6|u,c+=String.fromCharCode(r),64!=s&&(c+=String.fromCharCode(a)),64!=u&&(c+=String.fromCharCode(l));return c=n(c)};var t=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t},n=function(e){for(var t="",n=0,r=0,a=0,l=0;n<e.length;)r=e.charCodeAt(n),r<128?(t+=String.fromCharCode(r),n++):r>191&&r<224?(a=e.charCodeAt(n+1),t+=String.fromCharCode((31&r)<<6|63&a),n+=2):(a=e.charCodeAt(n+1),l=e.charCodeAt(n+2),t+=String.fromCharCode((15&r)<<12|(63&a)<<6|63&l),n+=3);return t}}function l(){var e=navigator.userAgent;return{mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1}}function o(e){return Math.round(1e3*e).toFixed()/10}Object.defineProperty(t,"__esModule",{value:!0});var i=new a;t.getCookie=n,t.setCookie=r,t.base64=i,t.getDevice=l,t.formatPercentage=o},55:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),u=r(s),c=n(16),f=n(39),p=function(e){function t(e){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),i(t,[{key:"componentWillMount",value:function(){userInfo.name=f.base64.decode((0,f.getCookie)("name")),userInfo.avatar=f.base64.decode((0,f.getCookie)("avatar"))}},{key:"signOut",value:function(){(0,f.setCookie)("name","",{path:"/"}),(0,f.setCookie)("avatar","",{path:"/"}),(0,f.setCookie)("id","",{path:"/"}),(0,f.setCookie)("email","",{path:"/"}),location.reload()}},{key:"render",value:function(){userInfo.avatar;return u.default.createElement("div",null,u.default.createElement("nav",{className:"navbar navbar-inverse",style:{"margin-bottom":"1px"}},u.default.createElement("div",{className:"container-fluid"},u.default.createElement("div",{className:"navbar-header"},u.default.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"},u.default.createElement("span",{className:"sr-only"},"Toggle navigation"),u.default.createElement("span",{className:"icon-bar"}),u.default.createElement("span",{className:"icon-bar"}),u.default.createElement("span",{className:"icon-bar"})),u.default.createElement("a",{className:"navbar-brand",href:"#"},"Voting")),u.default.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},u.default.createElement("ul",{className:"nav navbar-nav"},u.default.createElement("li",{className:"active"},u.default.createElement("a",{href:"/"},"Home ",u.default.createElement("span",{className:"sr-only"},"(current)"))),u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/list"},"All Polls")),userInfo.name&&u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/list/"+userInfo.name},"My Polls")),userInfo.name&&u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/new"},"Create a new Poll"))),u.default.createElement("ul",{className:"nav navbar-nav navbar-right"},u.default.createElement("li",null,u.default.createElement("a",null,userInfo.name&&u.default.createElement("img",{src:userInfo.avatar,width:"20px",style:{"border-radius":"3px"}}))),u.default.createElement("li",{className:"dropdown"},u.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},u.default.createElement("span",{className:"glyphicon glyphicon-user"}),u.default.createElement("span",{className:"caret"})),u.default.createElement("ul",{className:"dropdown-menu"},u.default.createElement("li",null,u.default.createElement("a",{href:"/login/github?currentPath="+location.pathname},userInfo.name?userInfo.name:"Sign in")),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/elevenBeans/WeVoting",target:"_blank"},"Github resposity")),u.default.createElement("li",{role:"separator",className:"divider"}),u.default.createElement("li",null,u.default.createElement("a",{href:"http://bin11.cn",target:"_blank"},"About author")),userInfo.name&&u.default.createElement("li",null,u.default.createElement("a",{href:"",onClick:this.signOut}," Sign out ")))))))))}}]),t}(s.Component);t.default=p},58:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),o=r(l),i=n(38),s=n(16),u=n(81),c=n(55),f=r(c),p=u.presets.slideLeft,d=function(e){var t=e.children,n=e.location;return p="POP"===n.action?u.presets.slideRight:u.presets.slideLeft,o.default.createElement("div",null,o.default.createElement(f.default,null),o.default.createElement(u.RouteTransition,a({className:"transition-wrapper",pathname:n.pathname,runOnMount:!1},p),t))},y={path:"/",component:d,indexRoute:{getComponent:function(e,t){n.e(4,function(e){t(null,n(57).default)})}},childRoutes:[{path:"new",getComponent:function(e,t){n.e(2,function(e){t(null,n(60).default)})}},{path:"list(/:name)",getComponent:function(e,t){n.e(3,function(e){t(null,n(59).default)})}},{path:"detail/(:id)",getComponent:function(e,t){n.e(1,function(e){t(null,n(56).default)})}}]};(0,i.render)(o.default.createElement(s.Router,{key:Math.random(),history:s.browserHistory,routes:y}),document.getElementById("app"))},81:function(e,t,n){var r,a,l;(function(e){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i,s){"object"===o(t)&&"object"===o(e)?e.exports=s(n(1)):(a=[n(1)],r=s,l="function"==typeof r?r.apply(t,a):r,!(void 0!==l&&(e.exports=l)))}(void 0,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1);Object.defineProperty(t,"RouteTransition",{enumerable:!0,get:function(){return r(a).default}});var l=n(19);Object.defineProperty(t,"presets",{enumerable:!0,get:function(){return r(l).default}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),l=r(a),o=n(3),i=n(18),s=r(i),u=l.default.createClass({displayName:"RouteTransition",propTypes:{className:a.PropTypes.string,component:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.bool]),pathname:a.PropTypes.string.isRequired,atEnter:a.PropTypes.object.isRequired,atActive:a.PropTypes.object.isRequired,atLeave:a.PropTypes.object.isRequired,mapStyles:a.PropTypes.func,runOnMount:a.PropTypes.bool,style:a.PropTypes.object},getDefaultProps:function(){return{component:"div",runOnMount:!0,mapStyles:function(e){return e}}},getDefaultStyles:function(){return this.props.runOnMount?this.props.children?[{key:this.props.pathname,data:this.props.children,style:this.props.atEnter}]:[]:null},getStyles:function(){return this.props.children?[{key:this.props.pathname,data:this.props.children,style:(0,s.default)(this.props.atActive)}]:[]},willEnter:function(){return this.props.atEnter},willLeave:function(){return(0,s.default)(this.props.atLeave)},renderRoute:function(e){var t={style:this.props.mapStyles(e.style),key:e.key};return this.props.component?(0,a.createElement)(this.props.component,t,e.data):(0,a.cloneElement)(e.data,t)},renderRoutes:function(e){return l.default.createElement("div",{className:this.props.className,style:this.props.style},e.map(this.renderRoute))},render:function(){return l.default.createElement(o.TransitionMotion,{defaultStyles:this.getDefaultStyles(),styles:this.getStyles(),willEnter:this.willEnter,willLeave:this.willLeave},this.renderRoutes)}});t.default=u},function(t,n){t.exports=e},function(e,t,n){function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n(4);t.Motion=r(a);var l=n(12);t.StaggeredMotion=r(l);var o=n(13);t.TransitionMotion=r(o);var i=n(15);t.spring=r(i);var s=n(16);t.presets=r(s);var u=n(17);t.reorderKeys=r(u)},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(5),o=r(l),i=n(6),s=r(i),u=n(7),c=r(u),f=n(8),p=r(f),d=n(10),y=r(d),m=n(11),h=r(m),v=n(2),g=r(v),b=1e3/60,P=g.default.createClass({displayName:"Motion",propTypes:{defaultStyle:v.PropTypes.objectOf(v.PropTypes.number),style:v.PropTypes.objectOf(v.PropTypes.oneOfType([v.PropTypes.number,v.PropTypes.object])).isRequired,children:v.PropTypes.func.isRequired,onRest:v.PropTypes.func},getInitialState:function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||s.default(n),a=o.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},wasAnimating:!1,animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyle:null,clearUnreadPropStyle:function(e){var t=!1,n=this.state,r=n.currentStyle,l=n.currentVelocity,o=n.lastIdealStyle,i=n.lastIdealVelocity;for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];"number"==typeof u&&(t||(t=!0,r=a({},r),l=a({},l),o=a({},o),i=a({},i)),r[s]=u,l[s]=0,o[s]=u,i[s]=0)}t&&this.setState({currentStyle:r,currentVelocity:l,lastIdealStyle:o,lastIdealVelocity:i})},startAnimationIfNecessary:function(){var e=this;this.animationID=y.default(function(){var t=e.props.style;if(h.default(e.state.currentStyle,t,e.state.currentVelocity))return e.wasAnimating&&e.props.onRest&&e.props.onRest(),e.animationID=null,e.wasAnimating=!1,void(e.accumulatedTime=0);e.wasAnimating=!0;var n=p.default(),r=n-e.prevTime;if(e.prevTime=n,e.accumulatedTime=e.accumulatedTime+r,e.accumulatedTime>10*b&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();var a=(e.accumulatedTime-Math.floor(e.accumulatedTime/b)*b)/b,l=Math.floor(e.accumulatedTime/b),o={},i={},s={},u={};for(var f in t)if(t.hasOwnProperty(f)){var d=t[f];if("number"==typeof d)s[f]=d,u[f]=0,o[f]=d,i[f]=0;else{for(var y=e.state.lastIdealStyle[f],m=e.state.lastIdealVelocity[f],v=0;v<l;v++){var g=c.default(b/1e3,y,m,d.val,d.stiffness,d.damping,d.precision);y=g[0],m=g[1]}var P=c.default(b/1e3,y,m,d.val,d.stiffness,d.damping,d.precision),S=P[0],T=P[1];s[f]=y+(S-y)*a,u[f]=m+(T-m)*a,o[f]=y,i[f]=m}}e.animationID=null,e.accumulatedTime-=l*b,e.setState({currentStyle:s,currentVelocity:u,lastIdealStyle:o,lastIdealVelocity:i}),e.unreadPropStyle=null,e.startAnimationIfNecessary()})},componentDidMount:function(){this.prevTime=p.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=p.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){null!=this.animationID&&(y.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=this.props.children(this.state.currentStyle);return e&&g.default.Children.only(e)}});t.default=P,e.exports=t.default},function(e,t){function n(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=0);return t}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){function n(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){function n(e,t,n,a,l,o,i){var s=-l*(t-a),u=-o*n,c=s+u,f=n+c*e,p=t+f*e;return Math.abs(f)<i&&Math.abs(p-a)<i?(r[0]=a,r[1]=0,r):(r[0]=p,r[1]=f,r)}t.__esModule=!0,t.default=n;var r=[];e.exports=t.default},function(e,t,n){(function(t){(function(){var n,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},a=n()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(t,n(9))},function(e,t){function n(){u=!1,o.length?s=o.concat(s):c=-1,s.length&&r()}function r(){if(!u){var e=setTimeout(n);u=!0;for(var t=s.length;t;){for(o=s,s=[];++c<t;)o&&o[c].run();c=-1,t=s.length}o=null,u=!1,clearTimeout(e)}}function a(e,t){this.fun=e,this.array=t}function l(){}var o,i=e.exports={},s=[],u=!1,c=-1;i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new a(e,t)),1!==s.length||u||setTimeout(r,0)},a.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=l,i.addListener=l,i.once=l,i.off=l,i.removeListener=l,i.removeAllListeners=l,i.emit=l,i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){for(var r=n(8),a="undefined"==typeof window?{}:window,l=["moz","webkit"],o="AnimationFrame",i=a["request"+o],s=a["cancel"+o]||a["cancelRequest"+o],u=0;u<l.length&&!i;u++)i=a[l[u]+"Request"+o],s=a[l[u]+"Cancel"+o]||a[l[u]+"CancelRequest"+o];if(!i||!s){var c=0,f=0,p=[],d=1e3/60;i=function(e){if(0===p.length){var t=r(),n=Math.max(0,d-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},s=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return i.call(a,e)},e.exports.cancel=function(){s.apply(a,arguments)}},function(e,t){function n(e,t,n){for(var r in t)if(t.hasOwnProperty(r)){if(0!==n[r])return!1;var a="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){for(var r=0;r<e.length;r++)if(!v.default(e[r],t[r],n[r]))return!1;return!0}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(5),i=r(o),s=n(6),u=r(s),c=n(7),f=r(c),p=n(8),d=r(p),y=n(10),m=r(y),h=n(11),v=r(h),g=n(2),b=r(g),P=1e3/60,S=b.default.createClass({displayName:"StaggeredMotion",propTypes:{defaultStyles:g.PropTypes.arrayOf(g.PropTypes.objectOf(g.PropTypes.number)),styles:g.PropTypes.func.isRequired,children:g.PropTypes.func.isRequired},getInitialState:function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(u.default),a=r.map(function(e){return i.default(e)});return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyles:null,clearUnreadPropStyle:function(e){for(var t=this.state,n=t.currentStyles,r=t.currentVelocities,a=t.lastIdealStyles,o=t.lastIdealVelocities,i=!1,s=0;s<e.length;s++){var u=e[s],c=!1;for(var f in u)if(u.hasOwnProperty(f)){var p=u[f];"number"==typeof p&&(c||(c=!0,i=!0,n[s]=l({},n[s]),r[s]=l({},r[s]),a[s]=l({},a[s]),o[s]=l({},o[s])),n[s][f]=p,r[s][f]=0,a[s][f]=p,o[s][f]=0)}}i&&this.setState({currentStyles:n,currentVelocities:r,lastIdealStyles:a,lastIdealVelocities:o})},startAnimationIfNecessary:function(){var e=this;this.animationID=m.default(function(){var t=e.props.styles(e.state.lastIdealStyles);if(a(e.state.currentStyles,t,e.state.currentVelocities))return e.animationID=null,void(e.accumulatedTime=0);var n=d.default(),r=n-e.prevTime;if(e.prevTime=n,e.accumulatedTime=e.accumulatedTime+r,e.accumulatedTime>10*P&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();for(var l=(e.accumulatedTime-Math.floor(e.accumulatedTime/P)*P)/P,o=Math.floor(e.accumulatedTime/P),i=[],s=[],u=[],c=[],p=0;p<t.length;p++){var y=t[p],m={},h={},v={},g={};for(var b in y)if(y.hasOwnProperty(b)){var S=y[b];if("number"==typeof S)m[b]=S,h[b]=0,v[b]=S,g[b]=0;else{for(var T=e.state.lastIdealStyles[p][b],I=e.state.lastIdealVelocities[p][b],w=0;w<o;w++){var O=f.default(P/1e3,T,I,S.val,S.stiffness,S.damping,S.precision);T=O[0],I=O[1]}var E=f.default(P/1e3,T,I,S.val,S.stiffness,S.damping,S.precision),k=E[0],_=E[1];m[b]=T+(k-T)*l,h[b]=I+(_-I)*l,v[b]=T,g[b]=I}}u[p]=m,c[p]=h,i[p]=v,s[p]=g}e.animationID=null,e.accumulatedTime-=o*P,e.setState({currentStyles:u,currentVelocities:c,lastIdealStyles:i,lastIdealVelocities:s}),e.unreadPropStyles=null,e.startAnimationIfNecessary()})},componentDidMount:function(){this.prevTime=d.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=d.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){null!=this.animationID&&(m.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=this.props.children(this.state.currentStyles);return e&&b.default.Children.only(e)}});t.default=S,e.exports=t.default},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return null==t?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,r){for(var a=0;a<t.length;a++)if(t[a].key===e.key)return{key:t[a].key,data:t[a].data,style:n[r]};return{key:e.key,data:e.data,style:n[r]}})}function l(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(var a=0;a<r.length;a++)if(!S.default(e[a],t[a].style,n[a]))return!1;return!0}function o(e,t,n,r,a,l,o,i){for(var s=m.default(n,r,function(e,n){var r=t(n);return null==r?null:S.default(a[e],r,l[e])?null:{key:n.key,data:n.data,style:r}}),c=[],f=[],p=[],d=[],y=0;y<s.length;y++){for(var h=s[y],v=null,g=0;g<n.length;g++)if(n[g].key===h.key){v=g;break}if(null==v){var b=e(h);c[y]=b,p[y]=b;var P=u.default(h.style);f[y]=P,d[y]=P}else c[y]=a[v],p[y]=o[v],f[y]=l[v],d[y]=i[v]}return[s,c,f,p,d]}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(5),u=r(s),c=n(6),f=r(c),p=n(7),d=r(p),y=n(14),m=r(y),h=n(8),v=r(h),g=n(10),b=r(g),P=n(11),S=r(P),T=n(2),I=r(T),w=1e3/60,O=I.default.createClass({displayName:"TransitionMotion",propTypes:{defaultStyles:T.PropTypes.arrayOf(T.PropTypes.shape({key:T.PropTypes.string.isRequired,data:T.PropTypes.any,style:T.PropTypes.objectOf(T.PropTypes.number).isRequired})),styles:T.PropTypes.oneOfType([T.PropTypes.func,T.PropTypes.arrayOf(T.PropTypes.shape({key:T.PropTypes.string.isRequired,data:T.PropTypes.any,style:T.PropTypes.objectOf(T.PropTypes.oneOfType([T.PropTypes.number,T.PropTypes.object])).isRequired}))]).isRequired,children:T.PropTypes.func.isRequired,willLeave:T.PropTypes.func,willEnter:T.PropTypes.func},getDefaultProps:function(){return{willEnter:function(e){return f.default(e.style)},willLeave:function(){return null}}},getInitialState:function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,a=e.willLeave,l="function"==typeof n?n():n,i=void 0;i=null==t?l:t.map(function(e){for(var t=0;t<l.length;t++)if(l[t].key===e.key)return l[t];return e});var s=null==t?l.map(function(e){return f.default(e.style)}):t.map(function(e){return f.default(e.style)}),c=null==t?l.map(function(e){return u.default(e.style)}):t.map(function(e){return u.default(e.style)}),p=o(r,a,i,l,s,c,s,c),d=p[0],y=p[1],m=p[2],h=p[3],v=p[4];return{currentStyles:y,currentVelocities:m,lastIdealStyles:h,lastIdealVelocities:v,mergedPropsStyles:d}},animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyles:null,clearUnreadPropStyle:function(e){for(var t=o(this.props.willEnter,this.props.willLeave,this.state.mergedPropsStyles,e,this.state.currentStyles,this.state.currentVelocities,this.state.lastIdealStyles,this.state.lastIdealVelocities),n=t[0],r=t[1],a=t[2],l=t[3],s=t[4],u=0;u<e.length;u++){var c=e[u].style,f=!1;for(var p in c)if(c.hasOwnProperty(p)){var d=c[p];"number"==typeof d&&(f||(f=!0,r[u]=i({},r[u]),a[u]=i({},a[u]),l[u]=i({},l[u]),s[u]=i({},s[u]),n[u]={key:n[u].key,data:n[u].data,style:i({},n[u].style)}),r[u][p]=d,a[u][p]=0,l[u][p]=d,s[u][p]=0,n[u].style[p]=d)}}this.setState({currentStyles:r,currentVelocities:a,mergedPropsStyles:n,lastIdealStyles:l,lastIdealVelocities:s})},startAnimationIfNecessary:function(){var e=this;this.animationID=b.default(function(){var t=e.props.styles,n="function"==typeof t?t(a(e.state.mergedPropsStyles,e.unreadPropStyles,e.state.lastIdealStyles)):t;if(l(e.state.currentStyles,n,e.state.currentVelocities,e.state.mergedPropsStyles))return e.animationID=null,void(e.accumulatedTime=0);var r=v.default(),i=r-e.prevTime;if(e.prevTime=r,e.accumulatedTime=e.accumulatedTime+i,e.accumulatedTime>10*w&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();for(var s=(e.accumulatedTime-Math.floor(e.accumulatedTime/w)*w)/w,u=Math.floor(e.accumulatedTime/w),c=o(e.props.willEnter,e.props.willLeave,e.state.mergedPropsStyles,n,e.state.currentStyles,e.state.currentVelocities,e.state.lastIdealStyles,e.state.lastIdealVelocities),f=c[0],p=c[1],y=c[2],m=c[3],h=c[4],g=0;g<f.length;g++){var b=f[g].style,P={},S={},T={},I={};for(var O in b)if(b.hasOwnProperty(O)){var E=b[O];if("number"==typeof E)P[O]=E,S[O]=0,T[O]=E,I[O]=0;else{for(var k=m[g][O],_=h[g][O],M=0;M<u;M++){var C=d.default(w/1e3,k,_,E.val,E.stiffness,E.damping,E.precision);k=C[0],_=C[1]}var x=d.default(w/1e3,k,_,E.val,E.stiffness,E.damping,E.precision),A=x[0],N=x[1];P[O]=k+(A-k)*s,S[O]=_+(N-_)*s,T[O]=k,I[O]=_}}m[g]=T,h[g]=I,p[g]=P,y[g]=S}e.animationID=null,e.accumulatedTime-=u*w,e.setState({currentStyles:p,currentVelocities:y,lastIdealStyles:m,lastIdealVelocities:h,mergedPropsStyles:f}),e.unreadPropStyles=null,e.startAnimationIfNecessary()})},componentDidMount:function(){this.prevTime=v.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),"function"==typeof e.styles?this.unreadPropStyles=e.styles(a(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):this.unreadPropStyles=e.styles,null==this.animationID&&(this.prevTime=v.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){null!=this.animationID&&(b.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=a(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&I.default.Children.only(t)}});t.default=O,e.exports=t.default},function(e,t){function n(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;for(var l={},a=0;a<t.length;a++)l[t[a].key]=a;for(var o=[],a=0;a<t.length;a++)o[a]=t[a];for(var a=0;a<e.length;a++)if(!l.hasOwnProperty(e[a].key)){var i=n(a,e[a]);null!=i&&o.push(i)}return o.sort(function(e,n){var a=l[e.key],o=l[n.key],i=r[e.key],s=r[n.key];if(null!=a&&null!=o)return l[e.key]-l[n.key];if(null!=i&&null!=s)return r[e.key]-r[n.key];if(null!=a){for(var u=0;u<t.length;u++){var c=t[u].key;if(r.hasOwnProperty(c)){if(a<l[c]&&s>r[c])return-1;if(a>l[c]&&s<r[c])return 1}}return 1}for(var u=0;u<t.length;u++){var c=t[u].key;if(r.hasOwnProperty(c)){if(o<l[c]&&i>r[c])return 1;if(o>l[c]&&i<r[c])return-1}}return-1})}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return l({},s,t,{val:e})}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=a;var o=n(16),i=r(o),s=l({},i.default.noWobble,{precision:.01});e.exports=t.default},function(e,t){t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},function(e,t,n){(function(n){function r(){"development"===n.env.NODE_ENV&&(a||(a=!0,console.error("`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API.")))}t.__esModule=!0,t.default=r;var a=!1;e.exports=t.default}).call(t,n(9))},function(e,t,n){function r(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return t[n]="number"==typeof r?(0,a.spring)(r):r,t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a=n(3)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a={stiffness:200,damping:22},l={stiffness:360,damping:25},o={stiffness:330,damping:30},i={atEnter:{opacity:0},atLeave:{opacity:(0,r.spring)(0,a)},atActive:{opacity:(0,r.spring)(1,a)}},s={atEnter:{scale:.8,opacity:0},atLeave:{scale:(0,r.spring)(.8,l),opacity:(0,r.spring)(0,l)},atActive:{scale:(0,r.spring)(1,l),opacity:1},mapStyles:function(e){return{opacity:e.opacity,transform:"scale("+e.scale+")"}}},u={atEnter:{opacity:0,offset:100},atLeave:{opacity:(0,r.spring)(0,a),offset:(0,r.spring)(-100,o)},atActive:{opacity:(0,r.spring)(1,o),offset:(0,r.spring)(0,o)},mapStyles:function(e){return{opacity:e.opacity,transform:"translateX("+e.offset+"%)"}}},c={atEnter:{opacity:0,offset:-100},atLeave:{opacity:(0,r.spring)(0,a),offset:(0,r.spring)(100,o)},atActive:{opacity:(0,r.spring)(1,o),offset:(0,r.spring)(0,o)},mapStyles:function(e){return{opacity:e.opacity,transform:"translateX("+e.offset+"%)"}}};t.default={fade:i,pop:s,slideLeft:u,slideRight:c}}])})}).call(t,n(99)(e))},99:function(e,t){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}});