webpackJsonp([1],{0:function(e,t,n){e.exports=n(43)},15:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return React.createElement("div",{className:"container"},React.createElement("hr",null),React.createElement("footer",null,React.createElement("p",{style:{"font-size":"14px"}},"© 2016  ",React.createElement("a",{href:"https://github.com/elevenBeans",target:"_blank"},"@elevenbeans"))))};t.default=n},40:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),u=a(s),c=n(12),f=n(44),p=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),i(t,[{key:"componentWillMount",value:function(){appInfo.userName=(0,f.getCookie)("userName"),appInfo.avatar=(0,f.getCookie)("avatar")}},{key:"signOut",value:function(){(0,f.setCookie)("userName",""),(0,f.setCookie)("avatar",""),location.reload()}},{key:"render",value:function(){appInfo.avatar;return u.default.createElement("div",null,u.default.createElement("nav",{className:"navbar navbar-inverse",style:{"margin-bottom":"1px"}},u.default.createElement("div",{className:"container-fluid"},u.default.createElement("div",{className:"navbar-header"},u.default.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"},u.default.createElement("span",{className:"sr-only"},"Toggle navigation"),u.default.createElement("span",{className:"icon-bar"}),u.default.createElement("span",{className:"icon-bar"}),u.default.createElement("span",{className:"icon-bar"})),u.default.createElement("a",{className:"navbar-brand",href:"#"},"Voting")),u.default.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},u.default.createElement("ul",{className:"nav navbar-nav"},u.default.createElement("li",{className:"active"},u.default.createElement("a",{href:"/"},"Home ",u.default.createElement("span",{className:"sr-only"},"(current)"))),u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/list"},"All Polls"))),u.default.createElement("ul",{className:"nav navbar-nav navbar-right"},u.default.createElement("li",null,u.default.createElement("a",null,appInfo.userName&&u.default.createElement("img",{src:appInfo.avatar,width:"20px",style:{"border-radius":"3px"}}))),u.default.createElement("li",{className:"dropdown"},u.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},u.default.createElement("span",{className:"glyphicon glyphicon-user"}),u.default.createElement("span",{className:"caret"})),u.default.createElement("ul",{className:"dropdown-menu"},u.default.createElement("li",null,u.default.createElement("a",{href:"/login/github"},appInfo.userName?appInfo.userName:"Sign in")),appInfo.userName&&u.default.createElement("li",null,u.default.createElement("a",{href:"#"}," Setting ")),u.default.createElement("li",{role:"separator",className:"divider"}),u.default.createElement("li",null,u.default.createElement("a",{href:"http://bin11.cn",target:"_blank"},"About author")),appInfo.userName&&u.default.createElement("li",null,u.default.createElement("a",{href:"#",onClick:this.signOut}," Sign out ")))))))))}}]),t}(s.Component);t.default=p},41:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),u=a(s),c=n(15),f=a(c),p=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"detailpage"},"detail page~",u.default.createElement(f.default,null))}}]),t}(s.Component);t.default=p},42:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),u=n(12),c=n(15),f=a(c),p=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),i(t,[{key:"render",value:function(){return React.createElement("div",{className:"homepage"},React.createElement("div",{style:{"background-color":"#eee"}},React.createElement("div",{className:"jumbotron"},React.createElement("div",{className:"container"},React.createElement("h1",{style:{"font-size":"36px"}},"Let's voting!"),React.createElement("p",{className:"lead"},'This voting app is built by @elevenbeans, following the instructions of "Build a Voting App | Free Code Camp". ',React.createElement("br",null),"Github Name: elevenBeans"),!appInfo.userName&&React.createElement("p",null,React.createElement("a",{style:{"font-weight":"100","font-size":"14px","border-radius":"3px"},className:"btn btn-lg btn-primary",href:"/login/github",role:"button",onClick:this.signIn},"Sign in with Github"))))),React.createElement("div",{className:"container"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-12"},React.createElement("h2",null,"View more polls?"),React.createElement("p",{className:"lead"},"You can select a poll to see the results and vote, or sign-in to make a new poll."),React.createElement("p",null,React.createElement(u.Link,{className:"btn btn-default",to:"/list",role:"button"},"View all polls »"))))),React.createElement(f.default,null))}}]),t}(s.Component);t.default=p},43:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n(1),o=a(l),i=n(77),s=n(12),u=n(58),c=n(42),f=a(c),p=n(40),d=a(p),m=n(41),y=a(m),h=n(45),v=a(h);e.hot.accept();var b=u.presets.slideLeft,g=function(e){var t=e.children,n=e.location;return b="POP"===n.action?u.presets.slideRight:u.presets.slideLeft,o.default.createElement("div",null,o.default.createElement(d.default,null),o.default.createElement(u.RouteTransition,r({className:"transition-wrapper",pathname:n.pathname,runOnMount:!1},b),t))};(0,i.render)(o.default.createElement(s.Router,{key:Math.random(),history:s.browserHistory},o.default.createElement(s.Route,{path:"/",component:g},o.default.createElement(s.IndexRoute,{component:f.default}),o.default.createElement(s.Route,{path:"list",component:v.default}),o.default.createElement(s.Route,{path:"detail",component:y.default}))),document.getElementById("app"))},44:function(e,t){"use strict";function n(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var r=n[a];" "==r.charAt(0);)r=r.substring(1);if(r.indexOf(t)!=-1)return r.substring(t.length,r.length)}return""}function a(e,t){var n=30,a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+a.toGMTString()}Object.defineProperty(t,"__esModule",{value:!0}),t.getCookie=n,t.setCookie=a},45:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),u=n(12),c=n(15),f=a(c),p=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),i(t,[{key:"render",value:function(){return React.createElement("div",{className:"listpage"},React.createElement(u.Link,{to:"/detail"},React.createElement("div",{className:"panel panel-default"},React.createElement("div",{className:"panel-heading"},React.createElement("h3",{className:"panel-title"},"Panel title")),React.createElement("div",{className:"panel-body"},"Panel content,Panel contentPanel contentPanel contentPanel content,Panel contentPanel contentPanel contentPanel content"))),React.createElement(u.Link,{to:"/detail"},React.createElement("div",{className:"panel panel-info"},React.createElement("div",{className:"panel-heading"},React.createElement("h3",{className:"panel-title"},"Panel title")),React.createElement("div",{className:"panel-body"},"Panel content,Panel contentPanel content,Panel content,Panel content"))),React.createElement(u.Link,{to:"/detail"},React.createElement("div",{className:"panel panel-warning"},React.createElement("div",{className:"panel-heading"},React.createElement("h3",{className:"panel-title"},"Panel title")),React.createElement("div",{className:"panel-body"},"Panel content,Panel content"))),React.createElement(u.Link,{to:"/detail"},React.createElement("div",{className:"panel panel-success"},React.createElement("div",{className:"panel-heading"},React.createElement("h3",{className:"panel-title"},"Panel title")),React.createElement("div",{className:"panel-body"},"Panel content"))),React.createElement(f.default,null))}}]),t}(s.Component);t.default=p},58:function(e,t,n){var a,r,l;(function(e){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i,s){"object"===o(t)&&"object"===o(e)?e.exports=s(n(1)):(r=[n(1)],a=s,l="function"==typeof a?a.apply(t,r):a,!(void 0!==l&&(e.exports=l)))}(void 0,function(e){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.defineProperty(t,"RouteTransition",{enumerable:!0,get:function(){return a(r).default}});var l=n(19);Object.defineProperty(t,"presets",{enumerable:!0,get:function(){return a(l).default}})},function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),l=a(r),o=n(3),i=n(18),s=a(i),u=l.default.createClass({displayName:"RouteTransition",propTypes:{className:r.PropTypes.string,component:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.bool]),pathname:r.PropTypes.string.isRequired,atEnter:r.PropTypes.object.isRequired,atActive:r.PropTypes.object.isRequired,atLeave:r.PropTypes.object.isRequired,mapStyles:r.PropTypes.func,runOnMount:r.PropTypes.bool,style:r.PropTypes.object},getDefaultProps:function(){return{component:"div",runOnMount:!0,mapStyles:function(e){return e}}},getDefaultStyles:function(){return this.props.runOnMount?this.props.children?[{key:this.props.pathname,data:this.props.children,style:this.props.atEnter}]:[]:null},getStyles:function(){return this.props.children?[{key:this.props.pathname,data:this.props.children,style:(0,s.default)(this.props.atActive)}]:[]},willEnter:function(){return this.props.atEnter},willLeave:function(){return(0,s.default)(this.props.atLeave)},renderRoute:function(e){var t={style:this.props.mapStyles(e.style),key:e.key};return this.props.component?(0,r.createElement)(this.props.component,t,e.data):(0,r.cloneElement)(e.data,t)},renderRoutes:function(e){return l.default.createElement("div",{className:this.props.className,style:this.props.style},e.map(this.renderRoute))},render:function(){return l.default.createElement(o.TransitionMotion,{defaultStyles:this.getDefaultStyles(),styles:this.getStyles(),willEnter:this.willEnter,willLeave:this.willLeave},this.renderRoutes)}});t.default=u},function(t,n){t.exports=e},function(e,t,n){function a(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var r=n(4);t.Motion=a(r);var l=n(12);t.StaggeredMotion=a(l);var o=n(13);t.TransitionMotion=a(o);var i=n(15);t.spring=a(i);var s=n(16);t.presets=a(s);var u=n(17);t.reorderKeys=a(u)},function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n(5),o=a(l),i=n(6),s=a(i),u=n(7),c=a(u),f=n(8),p=a(f),d=n(10),m=a(d),y=n(11),h=a(y),v=n(2),b=a(v),g=1e3/60,P=b.default.createClass({displayName:"Motion",propTypes:{defaultStyle:v.PropTypes.objectOf(v.PropTypes.number),style:v.PropTypes.objectOf(v.PropTypes.oneOfType([v.PropTypes.number,v.PropTypes.object])).isRequired,children:v.PropTypes.func.isRequired,onRest:v.PropTypes.func},getInitialState:function(){var e=this.props,t=e.defaultStyle,n=e.style,a=t||s.default(n),r=o.default(a);return{currentStyle:a,currentVelocity:r,lastIdealStyle:a,lastIdealVelocity:r}},wasAnimating:!1,animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyle:null,clearUnreadPropStyle:function(e){var t=!1,n=this.state,a=n.currentStyle,l=n.currentVelocity,o=n.lastIdealStyle,i=n.lastIdealVelocity;for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];"number"==typeof u&&(t||(t=!0,a=r({},a),l=r({},l),o=r({},o),i=r({},i)),a[s]=u,l[s]=0,o[s]=u,i[s]=0)}t&&this.setState({currentStyle:a,currentVelocity:l,lastIdealStyle:o,lastIdealVelocity:i})},startAnimationIfNecessary:function(){var e=this;this.animationID=m.default(function(){var t=e.props.style;if(h.default(e.state.currentStyle,t,e.state.currentVelocity))return e.wasAnimating&&e.props.onRest&&e.props.onRest(),e.animationID=null,e.wasAnimating=!1,void(e.accumulatedTime=0);e.wasAnimating=!0;var n=p.default(),a=n-e.prevTime;if(e.prevTime=n,e.accumulatedTime=e.accumulatedTime+a,e.accumulatedTime>10*g&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();var r=(e.accumulatedTime-Math.floor(e.accumulatedTime/g)*g)/g,l=Math.floor(e.accumulatedTime/g),o={},i={},s={},u={};for(var f in t)if(t.hasOwnProperty(f)){var d=t[f];if("number"==typeof d)s[f]=d,u[f]=0,o[f]=d,i[f]=0;else{for(var m=e.state.lastIdealStyle[f],y=e.state.lastIdealVelocity[f],v=0;v<l;v++){var b=c.default(g/1e3,m,y,d.val,d.stiffness,d.damping,d.precision);m=b[0],y=b[1]}var P=c.default(g/1e3,m,y,d.val,d.stiffness,d.damping,d.precision),T=P[0],E=P[1];s[f]=m+(T-m)*r,u[f]=y+(E-y)*r,o[f]=m,i[f]=y}}e.animationID=null,e.accumulatedTime-=l*g,e.setState({currentStyle:s,currentVelocity:u,lastIdealStyle:o,lastIdealVelocity:i}),e.unreadPropStyle=null,e.startAnimationIfNecessary()})},componentDidMount:function(){this.prevTime=p.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=p.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){null!=this.animationID&&(m.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=this.props.children(this.state.currentStyle);return e&&b.default.Children.only(e)}});t.default=P,e.exports=t.default},function(e,t){function n(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=0);return t}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){function n(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t){function n(e,t,n,r,l,o,i){var s=-l*(t-r),u=-o*n,c=s+u,f=n+c*e,p=t+f*e;return Math.abs(f)<i&&Math.abs(p-r)<i?(a[0]=r,a[1]=0,a):(a[0]=p,a[1]=f,a)}t.__esModule=!0,t.default=n;var a=[];e.exports=t.default},function(e,t,n){(function(t){(function(){var n,a,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-r)/1e6},a=t.hrtime,n=function(){var e;return e=a(),1e9*e[0]+e[1]},r=n()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,n(9))},function(e,t){function n(){u=!1,o.length?s=o.concat(s):c=-1,s.length&&a()}function a(){if(!u){var e=setTimeout(n);u=!0;for(var t=s.length;t;){for(o=s,s=[];++c<t;)o&&o[c].run();c=-1,t=s.length}o=null,u=!1,clearTimeout(e)}}function r(e,t){this.fun=e,this.array=t}function l(){}var o,i=e.exports={},s=[],u=!1,c=-1;i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new r(e,t)),1!==s.length||u||setTimeout(a,0)},r.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=l,i.addListener=l,i.once=l,i.off=l,i.removeListener=l,i.removeAllListeners=l,i.emit=l,i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){for(var a=n(8),r="undefined"==typeof window?{}:window,l=["moz","webkit"],o="AnimationFrame",i=r["request"+o],s=r["cancel"+o]||r["cancelRequest"+o],u=0;u<l.length&&!i;u++)i=r[l[u]+"Request"+o],s=r[l[u]+"Cancel"+o]||r[l[u]+"CancelRequest"+o];if(!i||!s){var c=0,f=0,p=[],d=1e3/60;i=function(e){if(0===p.length){var t=a(),n=Math.max(0,d-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},s=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return i.call(r,e)},e.exports.cancel=function(){s.apply(r,arguments)}},function(e,t){function n(e,t,n){for(var a in t)if(t.hasOwnProperty(a)){if(0!==n[a])return!1;var r="number"==typeof t[a]?t[a]:t[a].val;if(e[a]!==r)return!1}return!0}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){for(var a=0;a<e.length;a++)if(!v.default(e[a],t[a],n[a]))return!1;return!0}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(5),i=a(o),s=n(6),u=a(s),c=n(7),f=a(c),p=n(8),d=a(p),m=n(10),y=a(m),h=n(11),v=a(h),b=n(2),g=a(b),P=1e3/60,T=g.default.createClass({displayName:"StaggeredMotion",propTypes:{defaultStyles:b.PropTypes.arrayOf(b.PropTypes.objectOf(b.PropTypes.number)),styles:b.PropTypes.func.isRequired,children:b.PropTypes.func.isRequired},getInitialState:function(){var e=this.props,t=e.defaultStyles,n=e.styles,a=t||n().map(u.default),r=a.map(function(e){return i.default(e)});return{currentStyles:a,currentVelocities:r,lastIdealStyles:a,lastIdealVelocities:r}},animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyles:null,clearUnreadPropStyle:function(e){for(var t=this.state,n=t.currentStyles,a=t.currentVelocities,r=t.lastIdealStyles,o=t.lastIdealVelocities,i=!1,s=0;s<e.length;s++){var u=e[s],c=!1;for(var f in u)if(u.hasOwnProperty(f)){var p=u[f];"number"==typeof p&&(c||(c=!0,i=!0,n[s]=l({},n[s]),a[s]=l({},a[s]),r[s]=l({},r[s]),o[s]=l({},o[s])),n[s][f]=p,a[s][f]=0,r[s][f]=p,o[s][f]=0)}}i&&this.setState({currentStyles:n,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:o})},startAnimationIfNecessary:function(){var e=this;this.animationID=y.default(function(){var t=e.props.styles(e.state.lastIdealStyles);if(r(e.state.currentStyles,t,e.state.currentVelocities))return e.animationID=null,void(e.accumulatedTime=0);var n=d.default(),a=n-e.prevTime;if(e.prevTime=n,e.accumulatedTime=e.accumulatedTime+a,e.accumulatedTime>10*P&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();for(var l=(e.accumulatedTime-Math.floor(e.accumulatedTime/P)*P)/P,o=Math.floor(e.accumulatedTime/P),i=[],s=[],u=[],c=[],p=0;p<t.length;p++){var m=t[p],y={},h={},v={},b={};for(var g in m)if(m.hasOwnProperty(g)){var T=m[g];if("number"==typeof T)y[g]=T,h[g]=0,v[g]=T,b[g]=0;else{for(var E=e.state.lastIdealStyles[p][g],w=e.state.lastIdealVelocities[p][g],S=0;S<o;S++){var _=f.default(P/1e3,E,w,T.val,T.stiffness,T.damping,T.precision);E=_[0],w=_[1]}var I=f.default(P/1e3,E,w,T.val,T.stiffness,T.damping,T.precision),O=I[0],R=I[1];y[g]=E+(O-E)*l,h[g]=w+(R-w)*l,v[g]=E,b[g]=w}}u[p]=y,c[p]=h,i[p]=v,s[p]=b}e.animationID=null,e.accumulatedTime-=o*P,e.setState({currentStyles:u,currentVelocities:c,lastIdealStyles:i,lastIdealVelocities:s}),e.unreadPropStyles=null,e.startAnimationIfNecessary()})},componentDidMount:function(){this.prevTime=d.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=d.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){null!=this.animationID&&(y.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=this.props.children(this.state.currentStyles);return e&&g.default.Children.only(e)}});t.default=T,e.exports=t.default},function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return null==t?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,a){for(var r=0;r<t.length;r++)if(t[r].key===e.key)return{key:t[r].key,data:t[r].data,style:n[a]};return{key:e.key,data:e.data,style:n[a]}})}function l(e,t,n,a){if(a.length!==t.length)return!1;for(var r=0;r<a.length;r++)if(a[r].key!==t[r].key)return!1;for(var r=0;r<a.length;r++)if(!T.default(e[r],t[r].style,n[r]))return!1;return!0}function o(e,t,n,a,r,l,o,i){for(var s=y.default(n,a,function(e,n){var a=t(n);return null==a?null:T.default(r[e],a,l[e])?null:{key:n.key,data:n.data,style:a}}),c=[],f=[],p=[],d=[],m=0;m<s.length;m++){for(var h=s[m],v=null,b=0;b<n.length;b++)if(n[b].key===h.key){v=b;break}if(null==v){var g=e(h);c[m]=g,p[m]=g;var P=u.default(h.style);f[m]=P,d[m]=P}else c[m]=r[v],p[m]=o[v],f[m]=l[v],d[m]=i[v]}return[s,c,f,p,d]}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=n(5),u=a(s),c=n(6),f=a(c),p=n(7),d=a(p),m=n(14),y=a(m),h=n(8),v=a(h),b=n(10),g=a(b),P=n(11),T=a(P),E=n(2),w=a(E),S=1e3/60,_=w.default.createClass({displayName:"TransitionMotion",propTypes:{defaultStyles:E.PropTypes.arrayOf(E.PropTypes.shape({key:E.PropTypes.string.isRequired,data:E.PropTypes.any,style:E.PropTypes.objectOf(E.PropTypes.number).isRequired})),styles:E.PropTypes.oneOfType([E.PropTypes.func,E.PropTypes.arrayOf(E.PropTypes.shape({key:E.PropTypes.string.isRequired,data:E.PropTypes.any,style:E.PropTypes.objectOf(E.PropTypes.oneOfType([E.PropTypes.number,E.PropTypes.object])).isRequired}))]).isRequired,children:E.PropTypes.func.isRequired,willLeave:E.PropTypes.func,willEnter:E.PropTypes.func},getDefaultProps:function(){return{willEnter:function(e){return f.default(e.style)},willLeave:function(){return null}}},getInitialState:function(){var e=this.props,t=e.defaultStyles,n=e.styles,a=e.willEnter,r=e.willLeave,l="function"==typeof n?n():n,i=void 0;i=null==t?l:t.map(function(e){for(var t=0;t<l.length;t++)if(l[t].key===e.key)return l[t];return e});var s=null==t?l.map(function(e){return f.default(e.style)}):t.map(function(e){return f.default(e.style)}),c=null==t?l.map(function(e){return u.default(e.style)}):t.map(function(e){return u.default(e.style)}),p=o(a,r,i,l,s,c,s,c),d=p[0],m=p[1],y=p[2],h=p[3],v=p[4];return{currentStyles:m,currentVelocities:y,lastIdealStyles:h,lastIdealVelocities:v,mergedPropsStyles:d}},animationID:null,prevTime:0,accumulatedTime:0,unreadPropStyles:null,clearUnreadPropStyle:function(e){for(var t=o(this.props.willEnter,this.props.willLeave,this.state.mergedPropsStyles,e,this.state.currentStyles,this.state.currentVelocities,this.state.lastIdealStyles,this.state.lastIdealVelocities),n=t[0],a=t[1],r=t[2],l=t[3],s=t[4],u=0;u<e.length;u++){var c=e[u].style,f=!1;for(var p in c)if(c.hasOwnProperty(p)){var d=c[p];"number"==typeof d&&(f||(f=!0,a[u]=i({},a[u]),r[u]=i({},r[u]),l[u]=i({},l[u]),s[u]=i({},s[u]),n[u]={key:n[u].key,data:n[u].data,style:i({},n[u].style)}),a[u][p]=d,r[u][p]=0,l[u][p]=d,s[u][p]=0,n[u].style[p]=d)}}this.setState({currentStyles:a,currentVelocities:r,mergedPropsStyles:n,lastIdealStyles:l,lastIdealVelocities:s})},startAnimationIfNecessary:function(){var e=this;this.animationID=g.default(function(){var t=e.props.styles,n="function"==typeof t?t(r(e.state.mergedPropsStyles,e.unreadPropStyles,e.state.lastIdealStyles)):t;if(l(e.state.currentStyles,n,e.state.currentVelocities,e.state.mergedPropsStyles))return e.animationID=null,void(e.accumulatedTime=0);var a=v.default(),i=a-e.prevTime;if(e.prevTime=a,e.accumulatedTime=e.accumulatedTime+i,e.accumulatedTime>10*S&&(e.accumulatedTime=0),0===e.accumulatedTime)return e.animationID=null,void e.startAnimationIfNecessary();for(var s=(e.accumulatedTime-Math.floor(e.accumulatedTime/S)*S)/S,u=Math.floor(e.accumulatedTime/S),c=o(e.props.willEnter,e.props.willLeave,e.state.mergedPropsStyles,n,e.state.currentStyles,e.state.currentVelocities,e.state.lastIdealStyles,e.state.lastIdealVelocities),f=c[0],p=c[1],m=c[2],y=c[3],h=c[4],b=0;b<f.length;b++){var g=f[b].style,P={},T={},E={},w={};for(var _ in g)if(g.hasOwnProperty(_)){var I=g[_];if("number"==typeof I)P[_]=I,T[_]=0,E[_]=I,w[_]=0;else{for(var O=y[b][_],R=h[b][_],N=0;N<u;N++){var k=d.default(S/1e3,O,R,I.val,I.stiffness,I.damping,I.precision);O=k[0],R=k[1]}var M=d.default(S/1e3,O,R,I.val,I.stiffness,I.damping,I.precision),j=M[0],x=M[1];P[_]=O+(j-O)*s,T[_]=R+(x-R)*s,E[_]=O,w[_]=R}}y[b]=E,h[b]=w,p[b]=P,m[b]=T}e.animationID=null,e.accumulatedTime-=u*S,e.setState({currentStyles:p,currentVelocities:m,lastIdealStyles:y,lastIdealVelocities:h,mergedPropsStyles:f}),e.unreadPropStyles=null,e.startAnimationIfNecessary()})},componentDidMount:function(){this.prevTime=v.default(),this.startAnimationIfNecessary()},componentWillReceiveProps:function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),"function"==typeof e.styles?this.unreadPropStyles=e.styles(r(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):this.unreadPropStyles=e.styles,null==this.animationID&&(this.prevTime=v.default(),this.startAnimationIfNecessary())},componentWillUnmount:function(){null!=this.animationID&&(g.default.cancel(this.animationID),this.animationID=null)},render:function(){var e=r(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&w.default.Children.only(t)}});t.default=_,e.exports=t.default},function(e,t){function n(e,t,n){for(var a={},r=0;r<e.length;r++)a[e[r].key]=r;for(var l={},r=0;r<t.length;r++)l[t[r].key]=r;for(var o=[],r=0;r<t.length;r++)o[r]=t[r];for(var r=0;r<e.length;r++)if(!l.hasOwnProperty(e[r].key)){var i=n(r,e[r]);null!=i&&o.push(i)}return o.sort(function(e,n){var r=l[e.key],o=l[n.key],i=a[e.key],s=a[n.key];if(null!=r&&null!=o)return l[e.key]-l[n.key];if(null!=i&&null!=s)return a[e.key]-a[n.key];if(null!=r){for(var u=0;u<t.length;u++){var c=t[u].key;if(a.hasOwnProperty(c)){if(r<l[c]&&s>a[c])return-1;if(r>l[c]&&s<a[c])return 1}}return 1}for(var u=0;u<t.length;u++){var c=t[u].key;if(a.hasOwnProperty(c)){if(o<l[c]&&i>a[c])return 1;if(o>l[c]&&i<a[c])return-1}}return-1})}t.__esModule=!0,t.default=n,e.exports=t.default},function(e,t,n){function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return l({},s,t,{val:e})}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=r;var o=n(16),i=a(o),s=l({},i.default.noWobble,{precision:.01});e.exports=t.default},function(e,t){t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},function(e,t,n){(function(n){function a(){"development"===n.env.NODE_ENV&&(r||(r=!0,console.error("`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API.")))}t.__esModule=!0,t.default=a;var r=!1;e.exports=t.default}).call(t,n(9))},function(e,t,n){function a(e){return Object.keys(e).reduce(function(t,n){var a=e[n];return t[n]="number"==typeof a?(0,r.spring)(a):a,t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=n(3)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r={stiffness:200,damping:22},l={stiffness:360,damping:25},o={stiffness:330,damping:30},i={atEnter:{opacity:0},atLeave:{opacity:(0,a.spring)(0,r)},atActive:{opacity:(0,a.spring)(1,r)}},s={atEnter:{scale:.8,opacity:0},atLeave:{scale:(0,a.spring)(.8,l),opacity:(0,a.spring)(0,l)
},atActive:{scale:(0,a.spring)(1,l),opacity:1},mapStyles:function(e){return{opacity:e.opacity,transform:"scale("+e.scale+")"}}},u={atEnter:{opacity:0,offset:100},atLeave:{opacity:(0,a.spring)(0,r),offset:(0,a.spring)(-100,o)},atActive:{opacity:(0,a.spring)(1,o),offset:(0,a.spring)(0,o)},mapStyles:function(e){return{opacity:e.opacity,transform:"translateX("+e.offset+"%)"}}},c={atEnter:{opacity:0,offset:-100},atLeave:{opacity:(0,a.spring)(0,r),offset:(0,a.spring)(100,o)},atActive:{opacity:(0,a.spring)(1,o),offset:(0,a.spring)(0,o)},mapStyles:function(e){return{opacity:e.opacity,transform:"translateX("+e.offset+"%)"}}};t.default={fade:i,pop:s,slideLeft:u,slideRight:c}}])})}).call(t,n(76)(e))},76:function(e,t){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},77:function(e,t){e.exports=window.ReactDOM}});