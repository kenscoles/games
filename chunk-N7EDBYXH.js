import{A as me,Aa as we,Ba as xe,Ca as Ie,Da as Ae,Ea as Me,Fa as Te,G as ue,Ga as D,Hb as H,J as pe,Jb as ke,Ka as Y,L as fe,La as De,M,Ma as Se,P as d,Pa as U,Q as E,Qa as Ce,S as f,T as p,U as s,W as be,Wa as S,X as he,Xa as w,Ya as O,_a as St,a as h,aa as T,ba as b,bb as Ct,c as ie,ea as Mt,eb as Rt,f as A,fa as g,fb as Ot,g as re,ga as Tt,gc as Ne,hc as z,ic as Le,j as se,ja as $,ka as ve,kc as Fe,lc as q,mc as Pe,n as ce,nc as Be,oa as R,pa as Dt,qa as ge,qb as Re,ra as W,rb as Oe,sa as _e,sb as mt,ta as P,tc as je,u as de,ua as ye,uc as Ue,va as Z,vc as He,wa as lt,wc as ze,xa as B,xb as kt,y as le,ya as j,yb as X,za as Ee}from"./chunk-VVMLA7WC.js";var Q=class{_doc;constructor(o){this._doc=o}manager},ut=(()=>{class n extends Q{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,a,i){return t.addEventListener(e,a,i),()=>this.removeEventListener(t,e,a,i)}removeEventListener(t,e,a,i){return t.removeEventListener(e,a,i)}static \u0275fac=function(e){return new(e||n)(p(b))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),bt=new f(""),Pt=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,e){this._zone=e,t.forEach(r=>{r.manager=this});let a=t.filter(r=>!(r instanceof ut));this._plugins=a.slice().reverse();let i=t.find(r=>r instanceof ut);i&&this._plugins.push(i)}addEventListener(t,e,a,i){return this._findPluginFor(e).addEventListener(t,e,a,i)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(i=>i.supports(t)),!e)throw new M(5101,!1);return this._eventNameToPlugin.set(t,e),e}static \u0275fac=function(e){return new(e||n)(p(bt),p(g))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),Nt="ng-app-id";function Ve(n){for(let o of n)o.remove()}function Ke(n,o){let t=o.createElement("style");return t.textContent=n,t}function Mn(n,o,t,e){let a=n.head?.querySelectorAll(`style[${Nt}="${o}"],link[${Nt}="${o}"]`);if(a)for(let i of a)i.removeAttribute(Nt),i instanceof HTMLLinkElement?e.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function Ft(n,o){let t=o.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Bt=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,e,a,i={}){this.doc=t,this.appId=e,this.nonce=a,Mn(t,e,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,e){for(let a of t)this.addUsage(a,this.inline,Ke);e?.forEach(a=>this.addUsage(a,this.external,Ft))}removeStyles(t,e){for(let a of t)this.removeUsage(a,this.inline);e?.forEach(a=>this.removeUsage(a,this.external))}addUsage(t,e,a){let i=e.get(t);i?i.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,a(t,this.doc)))})}removeUsage(t,e){let a=e.get(t);a&&(a.usage--,a.usage<=0&&(Ve(a.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Ve(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[e,{elements:a}]of this.inline)a.push(this.addElement(t,Ke(e,this.doc)));for(let[e,{elements:a}]of this.external)a.push(this.addElement(t,Ft(e,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,e){return this.nonce&&e.setAttribute("nonce",this.nonce),t.appendChild(e)}static \u0275fac=function(e){return new(e||n)(p(b),p(W),p(Z,8),p(P))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),Lt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},jt=/%COMP%/g;var $e="%COMP%",Tn=`_nghost-${$e}`,Dn=`_ngcontent-${$e}`,Sn=!0,Cn=new f("",{factory:()=>Sn});function Rn(n){return Dn.replace(jt,n)}function On(n){return Tn.replace(jt,n)}function We(n,o){return o.map(t=>t.replace(jt,n))}var Ut=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,e,a,i,r,c,m=null,l=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=a,this.removeStylesOnCompDestroy=i,this.doc=r,this.ngZone=c,this.nonce=m,this.tracingService=l,this.defaultRenderer=new J(t,r,c,this.tracingService)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let a=this.getOrCreateRenderer(t,e);return a instanceof ft?a.applyToHost(t):a instanceof tt&&a.applyStyles(),a}getOrCreateRenderer(t,e){let a=this.rendererByCompId,i=a.get(e.id);if(!i){let r=this.doc,c=this.ngZone,m=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,_=this.tracingService;switch(e.encapsulation){case lt.Emulated:i=new ft(m,l,e,this.appId,u,r,c,_);break;case lt.ShadowDom:return new pt(m,t,e,r,c,this.nonce,_,l);case lt.ExperimentalIsolatedShadowDom:return new pt(m,t,e,r,c,this.nonce,_);default:i=new tt(m,l,e,u,r,c,_);break}a.set(e.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(e){return new(e||n)(p(Pt),p(Bt),p(W),p(Cn),p(b),p(g),p(Z),p(Se,8))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),J=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(o,t,e,a){this.eventManager=o,this.doc=t,this.ngZone=e,this.tracingService=a}destroy(){}destroyNode=null;createElement(o,t){return t?this.doc.createElementNS(Lt[t]||t,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,t){(Ge(o)?o.content:o).appendChild(t)}insertBefore(o,t,e){o&&(Ge(o)?o.content:o).insertBefore(t,e)}removeChild(o,t){t.remove()}selectRootElement(o,t){let e=typeof o=="string"?this.doc.querySelector(o):o;if(!e)throw new M(-5104,!1);return t||(e.textContent=""),e}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,t,e,a){if(a){t=a+":"+t;let i=Lt[a];i?o.setAttributeNS(i,t,e):o.setAttribute(t,e)}else o.setAttribute(t,e)}removeAttribute(o,t,e){if(e){let a=Lt[e];a?o.removeAttributeNS(a,t):o.removeAttribute(`${e}:${t}`)}else o.removeAttribute(t)}addClass(o,t){o.classList.add(t)}removeClass(o,t){o.classList.remove(t)}setStyle(o,t,e,a){a&(Y.DashCase|Y.Important)?o.style.setProperty(t,e,a&Y.Important?"important":""):o.style[t]=e}removeStyle(o,t,e){e&Y.DashCase?o.style.removeProperty(t):o.style[t]=""}setProperty(o,t,e){o!=null&&(o[t]=e)}setValue(o,t){o.nodeValue=t}listen(o,t,e,a){if(typeof o=="string"&&(o=q().getGlobalEventTarget(this.doc,o),!o))throw new M(5102,!1);let i=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(o,t,i)),this.eventManager.addEventListener(o,t,i,a)}decoratePreventDefault(o){return t=>{if(t==="__ngUnwrap__")return o;o(t)===!1&&t.preventDefault()}}};function Ge(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var pt=class extends J{hostEl;sharedStylesHost;shadowRoot;constructor(o,t,e,a,i,r,c,m){super(o,a,i,c),this.hostEl=t,this.sharedStylesHost=m,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=e.styles;l=We(e.id,l);for(let _ of l){let C=document.createElement("style");r&&C.setAttribute("nonce",r),C.textContent=_,this.shadowRoot.appendChild(C)}let u=e.getExternalStyles?.();if(u)for(let _ of u){let C=Ft(_,a);r&&C.setAttribute("nonce",r),this.shadowRoot.appendChild(C)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,t){return super.appendChild(this.nodeOrShadowRoot(o),t)}insertBefore(o,t,e){return super.insertBefore(this.nodeOrShadowRoot(o),t,e)}removeChild(o,t){return super.removeChild(null,t)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},tt=class extends J{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(o,t,e,a,i,r,c,m){super(o,i,r,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=a;let l=e.styles;this.styles=m?We(m,l):l,this.styleUrls=e.getExternalStyles?.(m)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&De.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ft=class extends tt{contentAttr;hostAttr;constructor(o,t,e,a,i,r,c,m){let l=a+"-"+e.id;super(o,t,e,i,r,c,m,l),this.contentAttr=Rn(l),this.hostAttr=On(l)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,t){let e=super.createElement(o,t);return super.setAttribute(e,this.contentAttr,""),e}};var ht=class n extends Be{supportsDOMEvents=!0;static makeCurrent(){Pe(new n)}onAndCancel(o,t,e,a){return o.addEventListener(t,e,a),()=>{o.removeEventListener(t,e,a)}}dispatchEvent(o,t){o.dispatchEvent(t)}remove(o){o.remove()}createElement(o,t){return t=t||this.getDefaultDocument(),t.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,t){return t==="window"?window:t==="document"?o:t==="body"?o.body:null}getBaseHref(o){let t=Nn();return t==null?null:Ln(t)}resetBaseElement(){et=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return je(document.cookie,o)}},et=null;function Nn(){return et=et||document.head.querySelector("base"),et?et.getAttribute("href"):null}function Ln(n){return new URL(n,document.baseURI).pathname}var Fn=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),Ze=["alt","control","meta","shift"],Pn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Bn={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Ye=(()=>{class n extends Q{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,a,i){let r=n.parseEventName(e),c=n.eventCallback(r.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>q().onAndCancel(t,r.domEventName,c,i))}static parseEventName(t){let e=t.toLowerCase().split("."),a=e.shift();if(e.length===0||!(a==="keydown"||a==="keyup"))return null;let i=n._normalizeKey(e.pop()),r="",c=e.indexOf("code");if(c>-1&&(e.splice(c,1),r="code."),Ze.forEach(l=>{let u=e.indexOf(l);u>-1&&(e.splice(u,1),r+=l+".")}),r+=i,e.length!=0||i.length===0)return null;let m={};return m.domEventName=a,m.fullKey=r,m}static matchEventFullKeyCode(t,e){let a=Pn[t.key]||t.key,i="";return e.indexOf("code.")>-1&&(a=t.code,i="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),Ze.forEach(r=>{if(r!==a){let c=Bn[r];c(t)&&(i+=r+".")}}),i+=a,i===e)}static eventCallback(t,e,a){return i=>{n.matchEventFullKeyCode(i,t)&&a.runGuarded(()=>e(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(e){return new(e||n)(p(b))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})();async function jn(n,o,t){let e=h({rootComponent:n},Un(o,t));return Ne(e)}function Un(n,o){return{platformRef:o?.platformRef,appProviders:[...Gn,...n?.providers??[]],platformProviders:Kn}}function Hn(){ht.makeCurrent()}function zn(){return new Tt}function Vn(){return ge(document),document}var Kn=[{provide:P,useValue:He},{provide:_e,useValue:Hn,multi:!0},{provide:b,useFactory:Vn}];var Gn=[{provide:be,useValue:"root"},{provide:Tt,useFactory:zn},{provide:bt,useClass:ut,multi:!0},{provide:bt,useClass:Ye,multi:!0},Ut,Bt,Pt,{provide:U,useExisting:Ut},{provide:Ue,useClass:Fn},[]];var fa=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(e){return new(e||n)(p(b))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ht=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:function(e){let a=null;return e?a=new(e||n):a=p($n),a},providedIn:"root"})}return n})(),$n=(()=>{class n extends Ht{_doc;constructor(t){super(),this._doc=t}sanitize(t,e){if(e==null)return null;switch(t){case D.NONE:return e;case D.HTML:return j(e,"HTML")?B(e):Te(this._doc,String(e)).toString();case D.STYLE:return j(e,"Style")?B(e):e;case D.SCRIPT:if(j(e,"Script"))return B(e);throw new M(5200,!1);case D.URL:return j(e,"URL")?B(e):Me(String(e));case D.RESOURCE_URL:if(j(e,"ResourceURL"))return B(e);throw new M(5201,!1);default:throw new M(5202,!1)}}bypassSecurityTrustHtml(t){return Ee(t)}bypassSecurityTrustStyle(t){return we(t)}bypassSecurityTrustScript(t){return xe(t)}bypassSecurityTrustUrl(t){return Ie(t)}bypassSecurityTrustResourceUrl(t){return Ae(t)}static \u0275fac=function(e){return new(e||n)(p(b))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nt(n){return n.buttons===0||n.detail===0}function ot(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var zt;function Xe(){if(zt==null){let n=typeof document<"u"?document.head:null;zt=!!(n&&(n.createShadowRoot||n.attachShadow))}return zt}function Vt(n){if(Xe()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function x(n){return n.composedPath?n.composedPath()[0]:n.target}var Kt;try{Kt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Kt=!1}var I=(()=>{class n{_platformId=s(P);isBrowser=this._platformId?ze(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Kt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var at;function qe(){if(at==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>at=!0}))}finally{at=at||!1}return at}function V(n){return qe()?n:!!n.capture}function Wn(n,o=0){return Qe(n)?Number(n):arguments.length===2?o:0}function Qe(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function k(n){return n instanceof R?n.nativeElement:n}var Je=new f("cdk-input-modality-detector-options"),tn={ignoreKeys:[18,17,224,91,16]},en=650,Gt={passive:!0,capture:!0},nn=(()=>{class n{_platform=s(I);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new re(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=x(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<en||(this._modality.next(nt(t)?"keyboard":"mouse"),this._mostRecentTarget=x(t))};_onTouchstart=t=>{if(ot(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=x(t)};constructor(){let t=s(g),e=s(b),a=s(Je,{optional:!0});if(this._options=h(h({},tn),a),this.modalityDetected=this._modality.pipe(ue(1)),this.modalityChanged=this.modalityDetected.pipe(me()),this._platform.isBrowser){let i=s(U).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,"keydown",this._onKeydown,Gt),i.listen(e,"mousedown",this._onMousedown,Gt),i.listen(e,"touchstart",this._onTouchstart,Gt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),it=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(it||{}),on=new f("cdk-focus-monitor-default-options"),vt=V({passive:!0,capture:!0}),$t=(()=>{class n{_ngZone=s(g);_platform=s(I);_inputModalityDetector=s(nn);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(b);_stopInputModalityDetector=new A;constructor(){let t=s(on,{optional:!0});this._detectionMode=t?.detectionMode||it.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=x(t);for(let a=e;a;a=a.parentElement)t.type==="focus"?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=k(t);if(!this._platform.isBrowser||a.nodeType!==1)return se();let i=Vt(a)||this._document,r=this._elementInfo.get(a);if(r)return e&&(r.checkChildren=!0),r.subject;let c={checkChildren:e,subject:new A,rootNode:i};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=k(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let i=k(t),r=this._document.activeElement;i===r?this._getClosestElementsInfo(i).forEach(([c,m])=>this._originChanged(c,e,m)):(this._setOrigin(e),typeof i.focus=="function"&&i.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===it.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===it.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?en:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),i=x(t);!a||!a.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,vt),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,vt)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(pe(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vt),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vt),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,i)=>{(i===t||a.checkChildren&&i.contains(t))&&e.push([i,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let i=t.labels;if(i){for(let r=0;r<i.length;r++)if(i[r].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gt=new WeakMap,rt=(()=>{class n{_appRef;_injector=s(T);_environmentInjector=s(he);load(t){let e=this._appRef=this._appRef||this._injector.get(Rt),a=gt.get(e);a||(a={loaders:new Set,refs:[]},gt.set(e,a),e.onDestroy(()=>{gt.get(e)?.refs.forEach(i=>i.destroy()),gt.delete(e)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(Fe(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Zn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),_t;function Yn(){if(_t===void 0&&(_t=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(_t=n.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return _t}function Xn(n){return Yn()?.createHTML(n)||n}function an(n,o,t){let e=t.sanitize(D.HTML,o);n.innerHTML=Xn(e||"")}function Ja(n){return Array.isArray(n)?n:[n]}var rn=new Set,L,Wt=(()=>{class n{_platform=s(I);_nonce=s(Z,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Qn}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&qn(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qn(n,o){if(!rn.has(n))try{L||(L=document.createElement("style"),o&&L.setAttribute("nonce",o),L.setAttribute("type","text/css"),document.head.appendChild(L)),L.sheet&&(L.sheet.insertRule(`@media ${n} {body{ }}`,0),rn.add(n))}catch(t){console.error(t)}}function Qn(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Jn=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ii=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=E({providers:[Jn]})}return n})();var sn=new f("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),cn=new f("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),to=0,eo=(()=>{class n{_ngZone=s(g);_defaultOptions=s(cn,{optional:!0});_liveElement;_document=s(b);_sanitizer=s(Ht);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=s(sn,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let a=this._defaultOptions,i,r;return e.length===1&&typeof e[0]=="number"?r=e[0]:[i,r]=e,this.clear(),clearTimeout(this._previousTimeout),i||(i=a&&a.politeness?a.politeness:"polite"),r==null&&a&&(r=a.duration),this._liveElement.setAttribute("aria-live",i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:an(this._liveElement,t,this._sanitizer),typeof r=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",e=this._document.getElementsByClassName(t),a=this._document.createElement("div");for(let i=0;i<e.length;i++)e[i].remove();return a.classList.add(t),a.classList.add("cdk-visually-hidden"),a.setAttribute("aria-atomic","true"),a.setAttribute("aria-live","polite"),a.id=`cdk-live-announcer-${to++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<e.length;a++){let i=e[a],r=i.getAttribute("aria-owns");r?r.indexOf(t)===-1&&i.setAttribute("aria-owns",r+" "+t):i.setAttribute("aria-owns",t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var no=200,yt=class{_letterKeyStream=new A;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new A;selectedItem=this._selectedItem;constructor(o,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:no;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(o),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let t=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(fe(t=>this._pressedLetters.push(t)),le(o),de(()=>this._pressedLetters.length>0),ce(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let a=(this._selectedItemIndex+e)%this._items.length,i=this._items[a];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function dn(n,...o){return o.length?o.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Et=class{_items;_activeItemIndex=$(-1);_activeItem=$(null);_wrap=!1;_typeaheadSubscription=ie.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,t){this._items=o,o instanceof Dt?this._itemChangesSubscription=o.changes.subscribe(e=>this._itemsChanged(e.toArray())):Ct(o)&&(this._effectRef=ve(()=>this._itemsChanged(o()),{injector:t}))}tabOut=new A;change=new A;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new yt(t,{debounceInterval:typeof o=="number"?o:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,t=10){return this._pageUpAndDown={enabled:o,delta:t},this}setActiveItem(o){let t=this._activeItem();this.updateActiveItem(o),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(o){let t=o.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(i=>!o[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(i<r?i:r-1,-1);break}else return;default:(a||dn(o,"shiftKey"))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let t=this._getItemsArray(),e=typeof o=="number"?o:t.indexOf(o),a=t[e];this._activeItem.set(a??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let a=(this._activeItemIndex()+o*e+t.length)%t.length,i=t[a];if(!this._skipPredicateFn(i)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,t){let e=this._getItemsArray();if(e[o]){for(;this._skipPredicateFn(e[o]);)if(o+=t,!e[o])return;this.setActiveItem(o)}}_getItemsArray(){return Ct(this._items)?this._items():this._items instanceof Dt?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let t=this._activeItem();if(t){let e=o.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Zt=class extends Et{setActiveItem(o){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(o),this.activeItem&&this.activeItem.setActiveStyles()}};var Yt={},Xt=class n{_appId=s(W);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){return this._appId!=="ng"&&(o+=this._appId),Yt.hasOwnProperty(o)||(Yt[o]=0),`${o}${t?n._infix+"-":""}${Yt[o]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})};var ln=" ";function Qi(n,o,t){let e=mn(n,o);t=t.trim(),!e.some(a=>a.trim()===t)&&(e.push(t),n.setAttribute(o,e.join(ln)))}function Ji(n,o,t){let e=mn(n,o);t=t.trim();let a=e.filter(i=>i!==t);a.length?n.setAttribute(o,a.join(ln)):n.removeAttribute(o)}function mn(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var F;function rr(){if(F==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return F=!1,F;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)F=!0;else{let n=Element.prototype.scrollTo;n?F=!/\{\s*\[native code\]\s*\}/.test(n.toString()):F=!1}}return F}function cr(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var K,un=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function mr(){if(K)return K;if(typeof document!="object"||!document)return K=new Set(un),K;let n=document.createElement("input");return K=new Set(un.filter(o=>(n.setAttribute("type",o),n.type===o))),K}var oo=new f("MATERIAL_ANIMATIONS"),pn=null;function ao(){return s(oo,{optional:!0})?.animationsDisabled||s(ye,{optional:!0})==="NoopAnimations"?"di-disabled":(pn??=s(Wt).matchMedia("(prefers-reduced-motion)").matches,pn?"reduced-motion":"enabled")}function G(){return ao()!=="enabled"}function wr(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Ir(n){return n!=null&&`${n}`!="false"}var y=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(y||{}),qt=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=y.HIDDEN;constructor(o,t,e,a=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},fn=V({passive:!0,capture:!0}),Qt=class{_events=new Map;addHandler(o,t,e,a){let i=this._events.get(t);if(i){let r=i.get(e);r?r.add(a):i.set(e,new Set([a]))}else this._events.set(t,new Map([[e,new Set([a])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,fn)})}removeHandler(o,t,e){let a=this._events.get(o);if(!a)return;let i=a.get(t);i&&(i.delete(e),i.size===0&&a.delete(t),a.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,fn)))}_delegateEventHandler=o=>{let t=x(o);t&&this._events.get(o.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(i=>i.handleEvent(o))})}},st={enterDuration:225,exitDuration:150},io=800,bn=V({passive:!0,capture:!0}),hn=["mousedown","touchstart"],vn=["mouseup","mouseleave","touchend","touchcancel"],ro=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),ct=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Qt;constructor(o,t,e,a,i){this._target=o,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=k(e)),i&&i.get(rt).load(ro)}fadeInRipple(o,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=h(h({},st),e.animation);e.centered&&(o=a.left+a.width/2,t=a.top+a.height/2);let r=e.radius||so(o,t,a),c=o-a.left,m=t-a.top,l=i.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${c-r}px`,u.style.top=`${m-r}px`,u.style.height=`${r*2}px`,u.style.width=`${r*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let _=window.getComputedStyle(u),C=_.transitionProperty,ne=_.transitionDuration,It=C==="none"||ne==="0s"||ne==="0s, 0s"||a.width===0&&a.height===0,N=new qt(this,u,e,It);u.style.transform="scale3d(1, 1, 1)",N.state=y.FADING_IN,e.persistent||(this._mostRecentTransientRipple=N);let dt=null;return!It&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let oe=()=>{dt&&(dt.fallbackTimer=null),clearTimeout(ae),this._finishRippleTransition(N)},At=()=>this._destroyRipple(N),ae=setTimeout(At,l+100);u.addEventListener("transitionend",oe),u.addEventListener("transitioncancel",At),dt={onTransitionEnd:oe,onTransitionCancel:At,fallbackTimer:ae}}),this._activeRipples.set(N,dt),(It||!l)&&this._finishRippleTransition(N),N}fadeOutRipple(o){if(o.state===y.FADING_OUT||o.state===y.HIDDEN)return;let t=o.element,e=h(h({},st),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",o.state=y.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=k(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,hn.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{vn.forEach(t=>{this._triggerElement.addEventListener(t,this,bn)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===y.FADING_IN?this._startFadeOutTransition(o):o.state===y.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=y.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=y.HIDDEN,t!==null&&(o.element.removeEventListener("transitionend",t.onTransitionEnd),o.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=nt(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+io;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!ot(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===y.VISIBLE||o.config.terminateOnPointerUp&&o.state===y.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(hn.forEach(t=>n._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(vn.forEach(t=>o.removeEventListener(t,this,bn)),this._pointerUpEventsRegistered=!1))}};function so(n,o,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),a=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+a*a)}var Jt=new f("mat-ripple-global-options"),Br=(()=>{class n{_elementRef=s(R);_animationsDisabled=G();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=s(g),e=s(I),a=s(Jt,{optional:!0}),i=s(T);this._globalOptions=a||{},this._rippleRenderer=new ct(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:h(h(h({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,a){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,h(h({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,h(h({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,a){e&2&&H("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var co={capture:!0},lo=["focus","mousedown","mouseenter","touchstart"],te="mat-ripple-loader-uninitialized",ee="mat-ripple-loader-class-name",gn="mat-ripple-loader-centered",wt="mat-ripple-loader-disabled",_n=(()=>{class n{_document=s(b);_animationsDisabled=G();_globalRippleOptions=s(Jt,{optional:!0});_platform=s(I);_ngZone=s(g);_injector=s(T);_eventCleanups;_hosts=new Map;constructor(){let t=s(U).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>lo.map(e=>t.listen(this._document,e,this._onInteraction,co)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(te,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(ee))&&t.setAttribute(ee,e.className||""),e.centered&&t.setAttribute(gn,""),e.disabled&&t.setAttribute(wt,"")}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(wt,""):t.removeAttribute(wt)}_onInteraction=t=>{let e=x(t);if(e instanceof HTMLElement){let a=e.closest(`[${te}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(ee)),t.append(e);let a=this._globalRippleOptions,i=this._animationsDisabled?0:a?.animation?.enterDuration??st.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??st.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(wt),rippleConfig:{centered:t.hasAttribute(gn),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:r}}},m=new ct(c,this._ngZone,e,this._platform,this._injector),l=!c.rippleDisabled;l&&m.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:m,hasSetUpEvents:l}),t.removeAttribute(te)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var mo=new f("MAT_BUTTON_CONFIG");function En(n){return n==null?void 0:Le(n)}var wn=(()=>{class n{_elementRef=s(R);_ngZone=s(g);_animationsDisabled=G();_config=s(mo,{optional:!0});_focusMonitor=s($t);_cleanupClick;_renderer=s(Ce);_rippleLoader=s(_n);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(rt).load(yn);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=O({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,a){e&2&&(Ot("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),ke(a.color?"mat-"+a.color:""),H("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",z],disabled:[2,"disabled","disabled",z],ariaDisabled:[2,"aria-disabled","ariaDisabled",z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",z],tabIndex:[2,"tabIndex","tabIndex",En],_tabindex:[2,"tabindex","_tabindex",En]}})}return n})();var uo=new f("cdk-dir-doc",{providedIn:"root",factory:()=>s(b)}),po=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function xn(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?po.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var fo=(()=>{class n{get value(){return this.valueSignal()}valueSignal=$("ltr");change=new Mt;constructor(){let t=s(uo,{optional:!0});if(t){let e=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(xn(e||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=E({})}return n})();var In=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=E({imports:[xt]})}return n})();var bo=["matButton",""],ho=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],vo=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var An=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),gs=(()=>{class n extends wn{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=go(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?An.get(this._appearance):null,i=An.get(t);a&&e.remove(...a),e.add(...i),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[St],attrs:bo,ngContentSelectors:vo,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,a){e&1&&(kt(ho),mt(0,"span",0),X(1),Re(2,"span",1),X(3,1),Oe(),X(4,2),mt(5,"span",2)(6,"span",3)),e&2&&H("mdc-button__ripple",!a._isFab)("mdc-fab__ripple",a._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function go(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var _s=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=w({type:n});static \u0275inj=E({imports:[In,xt]})}return n})();export{jn as a,fa as b,x as c,I as d,Wn as e,k as f,rt as g,Zn as h,Ja as i,ii as j,eo as k,dn as l,Zt as m,Xt as n,Qi as o,Ji as p,rr as q,cr as r,mr as s,G as t,wr as u,Ir as v,Br as w,yn as x,fo as y,xt as z,In as A,gs as B,_s as C};
