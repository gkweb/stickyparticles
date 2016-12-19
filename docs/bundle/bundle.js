!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(1),t.exports=n(48)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}n(2),n(3);var r=n(4),o=i(r),a=n(5),s=i(a);(0,o.default)(function(){new s.default({element:document.querySelector("[data-component=canvas]")})})},function(t,e){/*!
	Copyright (C) 2013-2015 by Andrea Giammarchi - @WebReflection
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	
	*/
!function(t){"use strict";function e(){return h.createDocumentFragment()}function n(t){return h.createElement(t)}function i(t,e){if(!t)throw new Error("Failed to construct "+e+": 1 argument required, but only 0 present.")}function r(t){if(1===t.length)return o(t[0]);for(var n=e(),i=F.call(t),r=0;r<t.length;r++)n.appendChild(o(i[r]));return n}function o(t){return"string"==typeof t?h.createTextNode(t):t}for(var a,s,l,c,u,h=t.document,f=Object.prototype.hasOwnProperty,d=Object.defineProperty||function(t,e,n){return f.call(n,"value")?t[e]=n.value:(f.call(n,"get")&&t.__defineGetter__(e,n.get),f.call(n,"set")&&t.__defineSetter__(e,n.set)),t},v=[].indexOf||function(t){for(var e=this.length;e--&&this[e]!==t;);return e},p=function(t){if(!t)throw"SyntaxError";if(w.test(t))throw"InvalidCharacterError";return t},y=function(t){var e="undefined"==typeof t.className,n=e?t.getAttribute("class")||"":t.className,i=e||"object"==typeof n,r=(i?e?n:n.baseVal:n).replace(m,"");r.length&&Y.push.apply(this,r.split(w)),this._isSVG=i,this._=t},g={get:function(){return new y(this)},set:function(){}},b="dom4-tmp-".concat(Math.random()*+new Date).replace(".","-"),m=/^\s+|\s+$/g,w=/\s+/,E=" ",x="classList",_=function(t,e){return this.contains(t)?e||this.remove(t):(void 0===e||e)&&(e=!0,this.add(t)),!!e},S=t.DocumentFragment&&DocumentFragment.prototype,M=t.Node,O=(M||Element).prototype,L=t.CharacterData||M,C=L&&L.prototype,k=t.DocumentType,T=k&&k.prototype,A=(t.Element||M||t.HTMLElement).prototype,K=t.HTMLSelectElement||n("select").constructor,j=K.prototype.remove,q=t.ShadowRoot,P=t.SVGElement,R=/ /g,N="\\ ",X=function(t){var e="querySelectorAll"===t;return function(n){var i,r,o,a,s,l,c=this.parentNode;if(c){for(o=this.getAttribute("id")||b,a=o===b?o:o.replace(R,N),l=n.split(","),r=0;r<l.length;r++)l[r]="#"+a+" "+l[r];n=l.join(",")}if(o===b&&this.setAttribute("id",o),s=(c||this)[t](n),o===b&&this.removeAttribute("id"),e)for(r=s.length,i=new Array(r);r--;)i[r]=s[r];else i=s;return i}},B=(function(t){"query"in t||(t.query=A.query),"queryAll"in t||(t.queryAll=A.queryAll)}),Y=["matches",A.matchesSelector||A.webkitMatchesSelector||A.khtmlMatchesSelector||A.mozMatchesSelector||A.msMatchesSelector||A.oMatchesSelector||function(t){var e=this.parentNode;return!!e&&-1<v.call(e.querySelectorAll(t),this)},"closest",function(t){for(var e,n=this;(e=n&&n.matches)&&!n.matches(t);)n=n.parentNode;return e?n:null},"prepend",function(){var t=this.firstChild,e=r(arguments);t?this.insertBefore(e,t):this.appendChild(e)},"append",function(){this.appendChild(r(arguments))},"before",function(){var t=this.parentNode;t&&t.insertBefore(r(arguments),this)},"after",function(){var t=this.parentNode,e=this.nextSibling,n=r(arguments);t&&(e?t.insertBefore(n,e):t.appendChild(n))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var t=this.parentNode;t&&t.replaceChild(r(arguments),this)},"remove",function(){var t=this.parentNode;t&&t.removeChild(this)},"query",X("querySelector"),"queryAll",X("querySelectorAll")],F=Y.slice,D=Y.length;D;D-=2)if(s=Y[D-2],s in A||(A[s]=Y[D-1]),"remove"===s&&(K.prototype[s]=function(){return 0<arguments.length?j.apply(this,arguments):A.remove.call(this)}),/^(?:before|after|replace|replaceWith|remove)$/.test(s)&&(!L||s in C||(C[s]=Y[D-1]),!k||s in T||(T[s]=Y[D-1])),/^(?:append|prepend)$/.test(s))if(S)s in S||(S[s]=Y[D-1]);else try{e().constructor.prototype[s]=Y[D-1]}catch(t){}if(B(h),S)B(S);else try{B(e().constructor.prototype)}catch(t){}q&&B(q.prototype),n("a").matches("a")||(A[s]=function(t){return function(n){return t.call(this.parentNode?this:e().appendChild(this),n)}}(A[s])),y.prototype={length:0,add:function(){for(var t,e=0;e<arguments.length;e++)t=arguments[e],this.contains(t)||Y.push.call(this,s);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(t){return function(e){return D=t.call(this,s=p(e)),-1<D}}([].indexOf||function(t){for(D=this.length;D--&&this[D]!==t;);return D}),item:function(t){return this[t]||null},remove:function(){for(var t,e=0;e<arguments.length;e++)t=arguments[e],this.contains(t)&&Y.splice.call(this,D,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:_,toString:function(){return Y.join.call(this,E)}},!P||x in P.prototype||d(P.prototype,x,g),x in h.documentElement?(c=n("div")[x],c.add("a","b","a"),"a b"!=c&&(l=c.constructor.prototype,"add"in l||(l=t.TemporaryTokenList.prototype),u=function(t){return function(){for(var e=0;e<arguments.length;)t.call(this,arguments[e++])}},l.add=u(l.add),l.remove=u(l.remove),l.toggle=_)):d(A,x,g),"contains"in O||d(O,"contains",{value:function(t){for(;t&&t!==this;)t=t.parentNode;return this===t}}),"head"in h||d(h,"head",{get:function(){return a||(a=h.getElementsByTagName("head")[0])}}),function(){for(var e,n=t.requestAnimationFrame,i=t.cancelAnimationFrame,r=["o","ms","moz","webkit"],o=r.length;!i&&o--;)n=n||t[r[o]+"RequestAnimationFrame"],i=t[r[o]+"CancelAnimationFrame"]||t[r[o]+"CancelRequestAnimationFrame"];i||(n?(e=n,n=function(t){var n=!0;return e(function(){n&&t.apply(this,arguments)}),function(){n=!1}},i=function(t){t()}):(n=function(t){return setTimeout(t,15,15)},i=function(t){clearTimeout(t)})),t.requestAnimationFrame=n,t.cancelAnimationFrame=i}();try{new t.CustomEvent("?")}catch(e){t.CustomEvent=function(t,e){function n(n,r){var o=h.createEvent(t);if("string"!=typeof n)throw new Error("An event name must be provided");return"Event"==t&&(o.initCustomEvent=i),null==r&&(r=e),o.initCustomEvent(n,r.bubbles,r.cancelable,r.detail),o}function i(t,e,n,i){this.initEvent(t,e,n),this.detail=i}return n}(t.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}try{new Event("_")}catch(e){e=function(t){function e(t,e){i(arguments.length,"Event");var n=h.createEvent("Event");return e||(e={}),n.initEvent(t,!!e.bubbles,!!e.cancelable),n}return e.prototype=t.prototype,e}(t.Event||function(){}),d(t,"Event",{value:e}),Event!==e&&(Event=e)}try{new KeyboardEvent("_",{})}catch(e){e=function(e){function n(t){for(var e=[],n=["ctrlKey","Control","shiftKey","Shift","altKey","Alt","metaKey","Meta","altGraphKey","AltGraph"],i=0;i<n.length;i+=2)t[n[i]]&&e.push(n[i+1]);return e.join(" ")}function r(t,e){for(var n in e)e.hasOwnProperty(n)&&!e.hasOwnProperty.call(t,n)&&(t[n]=e[n]);return t}function o(t,e,n){try{e[t]=n[t]}catch(t){}}function a(e,a){i(arguments.length,"KeyboardEvent"),a=r(a||{},c);var u,f=h.createEvent(s),d=a.ctrlKey,v=a.shiftKey,p=a.altKey,y=a.metaKey,g=a.altGraphKey,b=l>3?n(a):null,m=String(a.key),w=String(a.char),E=a.location,x=a.keyCode||(a.keyCode=m)&&m.charCodeAt(0)||0,_=a.charCode||(a.charCode=w)&&w.charCodeAt(0)||0,S=a.bubbles,M=a.cancelable,O=a.repeat,L=a.locale,C=a.view||t;if(a.which||(a.which=a.keyCode),"initKeyEvent"in f)f.initKeyEvent(e,S,M,C,d,p,v,y,x,_);else if(0<l&&"initKeyboardEvent"in f){switch(u=[e,S,M,C],l){case 1:u.push(m,E,d,v,p,y,g);break;case 2:u.push(d,p,v,y,x,_);break;case 3:u.push(m,E,d,p,v,y,g);break;case 4:u.push(m,E,b,O,L);break;default:u.push(char,m,E,b,O,L)}f.initKeyboardEvent.apply(f,u)}else f.initEvent(e,S,M);for(m in f)c.hasOwnProperty(m)&&f[m]!==a[m]&&o(m,f,a);return f}var s,l=0,c={char:"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,altGraphKey:!1,repeat:!1,locale:navigator.language,detail:0,bubbles:!1,cancelable:!1,keyCode:0,charCode:0,which:0};try{var u=h.createEvent("KeyboardEvent");u.initKeyboardEvent("keyup",!1,!1,t,"+",3,!0,!1,!0,!1,!1),l="+"==(u.keyIdentifier||u.key)&&3==(u.keyLocation||u.location)&&(u.ctrlKey?u.altKey?1:3:u.shiftKey?2:4)||9}catch(t){}return s=0<l?"KeyboardEvent":"Event",a.prototype=e.prototype,a}(t.KeyboardEvent||function(){}),d(t,"KeyboardEvent",{value:e}),KeyboardEvent!==e&&(KeyboardEvent=e)}try{new MouseEvent("_",{})}catch(e){e=function(e){function n(e,n){i(arguments.length,"MouseEvent");var r=h.createEvent("MouseEvent");return n||(n={}),r.initMouseEvent(e,!!n.bubbles,!!n.cancelable,n.view||t,n.detail||1,n.screenX||0,n.screenY||0,n.clientX||0,n.clientY||0,!!n.ctrlKey,!!n.altKey,!!n.shiftKey,!!n.metaKey,n.button||0,n.relatedTarget||null),r}return n.prototype=e.prototype,n}(t.MouseEvent||function(){}),d(t,"MouseEvent",{value:e}),MouseEvent!==e&&(MouseEvent=e)}}(window),function(t){"use strict";function e(){}function n(t,e,i){function r(t){r.once&&(t.currentTarget.removeEventListener(t.type,e,r),r.removed=!0),r.passive&&(t.preventDefault=n.preventDefault),"function"==typeof r.callback?r.callback.call(this,t):r.callback&&r.callback.handleEvent(t),r.passive&&delete t.preventDefault}return r.type=t,r.callback=e,r.capture=!!i.capture,r.passive=!!i.passive,r.once=!!i.once,r.removed=!1,r}var i=t.WeakMap||function(){function t(t,e,n){s=n,a=!1,i=void 0,t.dispatchEvent(e)}function e(t){this.value=t}function n(){r++,this.__ce__=new o("@DOMMap:"+r+Math.random())}var i,r=0,a=!1,s=!1;return e.prototype.handleEvent=function(t){a=!0,s?t.currentTarget.removeEventListener(t.type,this,!1):i=this.value},n.prototype={constructor:n,delete:function(e){return t(e,this.__ce__,!0),a},get:function(e){t(e,this.__ce__,!1);var n=i;return i=void 0,n},has:function(e){return t(e,this.__ce__,!1),a},set:function(n,i){return t(n,this.__ce__,!0),n.addEventListener(this.__ce__.type,new e(i),!1),this}},n}();e.prototype=(Object.create||Object)(null),n.preventDefault=function(){};var r,o=t.CustomEvent,a=(Object.prototype.hasOwnProperty,t.dispatchEvent),s=t.addEventListener,l=t.removeEventListener,c=0,u=function(){c++},h=[].indexOf||function(t){for(var e=this.length;e--&&this[e]!==t;);return e},f=function(t){return"".concat(t.capture?"1":"0",t.passive?"1":"0",t.once?"1":"0")};try{s("_",u,{once:!0}),a(new o("_")),a(new o("_")),l("_",u,{once:!0})}catch(t){}1!==c&&!function(){function o(t){return function(i,r,o){if(o&&"boolean"!=typeof o){var a,l,c,u=s.get(this),d=f(o);u||s.set(this,u=new e),i in u||(u[i]={handler:[],wrap:[]}),l=u[i],a=h.call(l.handler,r),a<0?(a=l.handler.push(r)-1,l.wrap[a]=c=new e):c=l.wrap[a],d in c||(c[d]=n(i,r,o),t.call(this,i,c[d],c[d].capture))}else t.call(this,i,r,o)}}function a(t){return function(e,n,i){if(i&&"boolean"!=typeof i){var r,o,a,l,c=s.get(this);if(c&&e in c&&(a=c[e],o=h.call(a.handler,n),-1<o&&(r=f(i),l=a.wrap[o],r in l))){t.call(this,e,l[r],l[r].capture),delete l[r];for(r in l)return;a.handler.splice(o,1),a.wrap.splice(o,1),0===a.handler.length&&delete c[e]}}else t.call(this,e,n,i)}}var s=new i;r=function(t){if(t){var e=t.prototype;e.addEventListener=o(e.addEventListener),e.removeEventListener=a(e.removeEventListener)}},t.EventTarget?r(EventTarget):(r(t.Text),r(t.Element||t.HTMLElement),r(t.HTMLDocument),r(t.Window||{prototype:t}),r(t.XMLHttpRequest))}()}(self)},function(t,e){/*!
	 * @copyright Copyright (c) 2016 IcoMoon.io
	 * @license   Licensed under MIT license
	 *            See https://github.com/Keyamoon/svgxuse
	 * @version   1.1.23
	 */
!function(){"use strict";if(window&&window.addEventListener){var t,e,n=Object.create(null),i=function(){clearTimeout(e),e=setTimeout(t,100)},r=function(){},o=function(){var t;window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1),window.MutationObserver?(t=new MutationObserver(i),t.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),r=function(){try{t.disconnect(),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)}catch(t){}}):(document.documentElement.addEventListener("DOMSubtreeModified",i,!1),r=function(){document.documentElement.removeEventListener("DOMSubtreeModified",i,!1),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)})},a=function(t){function e(t){var e;return void 0!==t.protocol?e=t:(e=document.createElement("a"),e.href=t),e.protocol.replace(/:/g,"")+e.host}var n,i,r;return window.XMLHttpRequest&&(n=new XMLHttpRequest,i=e(location),r=e(t),n=void 0===n.withCredentials&&""!==r&&r!==i?XDomainRequest||void 0:XMLHttpRequest),n},s="http://www.w3.org/1999/xlink";t=function(){function t(){w-=1,0===w&&(r(),o())}function e(t){return function(){n[t.base]!==!0&&t.useEl.setAttributeNS(s,"xlink:href","#"+t.hash)}}function i(e){return function(){var n,i=document.body,r=document.createElement("x");e.onload=null,r.innerHTML=e.responseText,n=r.getElementsByTagName("svg")[0],n&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",i.insertBefore(n,i.firstChild)),t()}}function l(e){return function(){e.onerror=null,e.ontimeout=null,t()}}var c,u,h,f,d,v,p,y,g,b,m="",w=0;for(r(),g=document.getElementsByTagName("use"),d=0;d<g.length;d+=1){try{u=g[d].getBoundingClientRect()}catch(t){u=!1}f=g[d].getAttributeNS(s,"href"),y=f&&f.split?f.split("#"):["",""],c=y[0],h=y[1],v=u&&0===u.left&&0===u.right&&0===u.top&&0===u.bottom,u&&0===u.width&&0===u.height&&!v?(m&&!c.length&&h&&!document.getElementById(h)&&(c=m),c.length&&(b=n[c],b!==!0&&setTimeout(e({useEl:g[d],base:c,hash:h}),0),void 0===b&&(p=a(c),void 0!==p&&(b=new p,n[c]=b,b.onload=i(b),b.onerror=l(b),b.ontimeout=l(b),b.open("GET",c),b.send(),w+=1)))):v?c.length&&n[c]&&e({useEl:g[d],base:c,hash:h})():void 0===n[c]?n[c]=!0:n[c].onload&&(n[c].abort(),delete n[c].onload,n[c]=!0)}g="",w+=1,t()},window.addEventListener("load",function n(){window.removeEventListener("load",n,!1),e=setTimeout(t,0)},!1)}}()},function(t,e,n){/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
!function(e,n){t.exports=n()}("domready",function(){var t,e=[],n=document,i=n.documentElement.doScroll,r="DOMContentLoaded",o=(i?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return o||n.addEventListener(r,t=function(){for(n.removeEventListener(r,t),o=1;t=e.shift();)t()}),function(t){o?setTimeout(t,0):e.push(t)}})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),o=i(r),a=n(43),s=i(a),l=n(44),c=i(l),u=function(){function t(e){var n=this;(0,s.default)(this,t),this.element=e.element,this.debug=this.element.querySelector(".debug"),this.canvas=this.element.querySelector("canvas"),this.toggleBtn=this.element.querySelector(".toggle"),this.genBtn=this.element.querySelector(".generate"),this.ballsAmountSlider=this.element.querySelector(".ctrl-particles-amount"),this.velocityXSlider=this.element.querySelector(".ctrl-velocity-x"),this.velocityYSlider=this.element.querySelector(".ctrl-velocity-y"),this.gravitySlider=this.element.querySelector(".ctrl-gravity"),this.setCanvasSize(),this.ctx=this.canvas.getContext("2d"),this.colours=["#ddd"],this.settings={},this.settings.playing=!0,this.settings.gravity=1e-4,this.settings.growThreshold=5,this.settings.collision={},this.settings.collision.tileSize=55,this.settings.lines=!0,this.settings.generate={},this.settings.generate.ballsAmount=100,this.settings.generate.ballMinWidth=3,this.settings.generate.ballMaxWidth=3,this.settings.generate.velocityX=.001,this.settings.generate.velocityY=.001,this.balls=[],this.generateBalls(),this.toggleBtn.addEventListener("click",function(t){n.settings.playing=!n.settings.playing,n.settings.playing&&n.draw()}),this.genBtn.addEventListener("click",function(t){n.generateBalls()}),this.ballsAmountSlider.addEventListener("input",function(t){n.settings.generate.ballsAmount=n.ballsAmountSlider.value}),this.velocityXSlider.addEventListener("input",function(t){n.settings.generate.velocityX=n.velocityXSlider.value}),this.gravitySlider.addEventListener("input",function(t){n.settings.gravity=n.gravitySlider.value-0}),this.velocityYSlider.addEventListener("input",function(t){n.settings.generate.velocityY=n.velocityXSlider.value}),window.addEventListener("resize",this.setCanvasSize.bind(this)),this.draw()}return(0,c.default)(t,[{key:"setCanvasSize",value:function(){var t=this.element.getBoundingClientRect();this.canvas.width=t.width,this.canvas.height=t.height}},{key:"getRandomInt",value:function(t,e){var n=0;return t=Math.ceil(t),e=Math.floor(e),n=Math.floor(Math.random()*(e-t))+t}},{key:"generateBalls",value:function(){for(var t={x:this.canvas.width/2,y:20,width:20,velocityX:1,velocityY:1,cor:1,colour:"violet",candidate:!1},e=0;e<=this.settings.generate.ballsAmount;e++){var n=(0,o.default)({},t);n.width=this.getRandomInt(this.settings.generate.ballMinWidth,this.settings.generate.ballMaxWidth),n.x=this.getRandomInt(n.width,this.canvas.width-n.width),n.y=this.getRandomInt(2*n.width,this.canvas.height-2*n.width),n.velocityY=this.getRandomInt(1,100)*this.settings.generate.velocityY,n.velocityX=this.getRandomInt(1,100)*this.settings.generate.velocityX,n.colour=this.colours[this.getRandomInt(0,this.colours.length-1)],this.balls.push(n)}}},{key:"draw",value:function(){this.ctx.fillStyle="black",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.balls.length-1;t++){var e=this.getCandidates(this.balls[t].x,this.balls[t].y);if(this.balls[t].candidate=!0,e.length>0){this.balls[t].candidate=!1,e.sort(function(t,e){var n=Math.atan2(t.x,t.y),i=Math.atan2(e.x,e.y);return n>i?1:n<i?-1:0}),this.ctx.beginPath();for(var n=1;n<e.length;n++)0===n?this.ctx.moveTo(e[n].x,e[n].y):this.ctx.lineTo(e[n].x,e[n].y);this.ctx.stroke(),this.ctx.closePath()}this.ctx.fillStyle=this.balls[t].candidate?"green":this.balls[t].colour,this.ctx.beginPath(),this.ctx.ellipse(this.balls[t].x,this.balls[t].y,this.balls[t].width,this.balls[t].width,0,2*Math.PI,!1),this.ctx.strokeStyle="white",this.ctx.fill(),this.ctx.stroke(),this.balls[t].x+=this.balls[t].velocityX,this.balls[t].y+=this.balls[t].velocityY,this.balls[t].velocityY+=this.settings.gravity,(this.balls[t].x+this.balls[t].velocityX>=this.canvas.width-this.balls[t].width||this.balls[t].x<=this.balls[t].width)&&(this.balls[t].velocityX*=-this.balls[t].cor),this.balls[t].y+this.balls[t].velocityY>=this.canvas.height-this.balls[t].width?(this.balls[t].y=this.canvas.height-this.balls[t].width,this.balls[t].velocityY*=-this.balls[t].cor):this.balls[t].y+this.balls[t].velocityY<=this.balls[t].width&&(this.balls[t].velocityY*=-this.balls[t].cor)}this.settings.playing&&(this.loop=requestAnimationFrame(this.draw.bind(this)))}},{key:"getCandidates",value:function(t,e){var n=this,i=[];return i=this.balls.filter(function(i,r,o){var a=[],s=.5*(n.settings.collision.tileSize+i.width),l=t-s,c=t+s,u=e-s,h=e+s;return i.x>=l&&i.x<=c&&i.y>=u&&i.y<=h&&a.push(r),a.length>0})}},{key:"setDebug",value:function(){this.debug.innerHTML="\n      <span class='ball-x'>X: "+this.ball.x+"</span>\n      <span class='ball-y'>Y: "+this.ball.y+"</span>\n      <span class='ball-y'>VY: "+this.ball.velocityY+"</span>\n      <span class='ball-y'>VX: "+this.ball.velocityX+"</span>\n      <span class='ball-cor'>COR applied: "+(this.ball.velocityY<0)+"</span>\n      <span class='ball-cor'>Gravity: "+this.ball.gravity+"</span>\n    "}}]),t}();e.default=u},function(t,e,n){t.exports={default:n(7),__esModule:!0}},function(t,e,n){n(8),t.exports=n(11).Object.assign},function(t,e,n){var i=n(9);i(i.S+i.F,"Object",{assign:n(24)})},function(t,e,n){var i=n(10),r=n(11),o=n(12),a=n(14),s="prototype",l=function(t,e,n){var c,u,h,f=t&l.F,d=t&l.G,v=t&l.S,p=t&l.P,y=t&l.B,g=t&l.W,b=d?r:r[e]||(r[e]={}),m=b[s],w=d?i:v?i[e]:(i[e]||{})[s];d&&(n=e);for(c in n)u=!f&&w&&void 0!==w[c],u&&c in b||(h=u?w[c]:n[c],b[c]=d&&"function"!=typeof w[c]?n[c]:y&&u?o(h,i):g&&w[c]==h?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[s]=t[s],e}(h):p&&"function"==typeof h?o(Function.call,h):h,p&&((b.virtual||(b.virtual={}))[c]=h,t&l.R&&m&&!m[c]&&a(m,c,h)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(13);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(15),r=n(23);t.exports=n(19)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(16),r=n(18),o=n(22),a=Object.defineProperty;e.f=n(19)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(17);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(19)&&!n(20)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(17),r=n(10).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(17);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var i=n(25),r=n(40),o=n(41),a=n(42),s=n(29),l=Object.assign;t.exports=!l||n(20)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=i})?function(t,e){for(var n=a(t),l=arguments.length,c=1,u=r.f,h=o.f;l>c;)for(var f,d=s(arguments[c++]),v=u?i(d).concat(u(d)):i(d),p=v.length,y=0;p>y;)h.call(d,f=v[y++])&&(n[f]=d[f]);return n}:l},function(t,e,n){var i=n(26),r=n(39);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(27),r=n(28),o=n(32)(!1),a=n(36)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),l=0,c=[];for(n in s)n!=a&&i(s,n)&&c.push(n);for(;e.length>l;)i(s,n=e[l++])&&(~o(c,n)||c.push(n));return c}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(29),r=n(31);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(28),r=n(33),o=n(35);t.exports=function(t){return function(e,n,a){var s,l=i(e),c=r(l.length),u=o(a,c);if(t&&n!=n){for(;c>u;)if(s=l[u++],s!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}}},function(t,e,n){var i=n(34),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(34),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(37)("keys"),r=n(38);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(10),r="__core-js_shared__",o=i[r]||(i[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var i=n(31);t.exports=function(t){return Object(i(t))}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(45),o=i(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={default:n(46),__esModule:!0}},function(t,e,n){n(47);var i=n(11).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(9);i(i.S+i.F*!n(19),"Object",{defineProperty:n(15).f})},function(t,e){}]);
//# sourceMappingURL=bundle.js.map