import './polyfills.server.mjs';
import{d as te,p as Be}from"./chunk-WZPXHYM4.mjs";import{Ab as u,Bb as Fe,Cb as Ne,D as z,Eb as S,F as Se,Fb as k,Gb as xe,Hb as M,Ib as C,Jb as F,Kb as de,Lb as Pe,N as Me,O as b,P as Ce,Q as re,Ra as ce,Rb as K,Tb as he,U as P,Ub as X,V as c,Vb as ue,Wb as N,Xa as h,Y as Oe,_ as l,ab as Y,ba as Q,bb as q,c as ve,ca as d,cc as Ae,da as O,ea as Ee,f as v,fa as B,ga as G,gb as w,h as we,hb as E,ib as I,j as oe,kb as R,lb as W,lc as ee,mb as L,n as ae,nb as Ie,ob as Re,pa as le,pb as ke,qb as f,ra as J,rb as g,u as T,v as De,vb as H,w as j,x as Te,xb as U,y as Z,zb as V}from"./chunk-4MGEDM3G.mjs";import{a as se,b as ye}from"./chunk-VVCT4QZE.mjs";var lt=["*"];var ct=["dialog"];function dt(t,e){t&1&&(f(0,"span",9),U(1,10),g())}function ht(t,e){t&1&&(f(0,"span",9),U(1,11),g())}function ut(t,e){t&1&&(f(0,"span",9),U(1,12),g())}function pt(t,e){t&1&&(f(0,"span",9),U(1,13),g())}function _t(t,e){t&1&&de(0,"...")}function ft(t,e){if(t&1&&de(0),t&2){let o=e.$implicit;Pe(o)}}function gt(t,e){}var mt=t=>({disabled:!0,currentPage:t});function bt(t,e){if(t&1&&(f(0,"a",16),w(1,gt,0,0,"ng-template",8),g()),t&2){let o=u(2).$implicit,n=u(),i=F(9);h(),I("ngTemplateOutlet",(n.tplEllipsis==null?null:n.tplEllipsis.templateRef)||i)("ngTemplateOutletContext",he(2,mt,o))}}function yt(t,e){}var vt=(t,e,o)=>({disabled:t,$implicit:e,currentPage:o});function wt(t,e){if(t&1){let o=H();f(0,"a",17),V("click",function(i){B(o);let s=u().$implicit;return u(2).selectPage(s),G(i.preventDefault())}),w(1,yt,0,0,"ng-template",8),g()}if(t&2){let o=u().$implicit,n=u(),i=n.disabled,s=n.$implicit,a=u(),r=F(11);E("tabindex",i?"-1":null)("aria-disabled",i?"true":null),h(),I("ngTemplateOutlet",(a.tplNumber==null?null:a.tplNumber.templateRef)||r)("ngTemplateOutletContext",ue(4,vt,i,o,s))}}function Dt(t,e){if(t&1&&(f(0,"li",14),w(1,bt,2,4,"a",15)(2,wt,2,8),g()),t&2){let o=e.$implicit,n=u(),i=n.$implicit,s=n.disabled,a=u();R("active",o===i)("disabled",a.isEllipsis(o)||s),E("aria-current",o===i?"page":null),h(),L(1,a.isEllipsis(o)?1:2)}}function Tt(t,e){if(t&1&&Re(0,Dt,3,6,"li",18,Ie),t&2){let o=e.pages;ke(o)}}function St(t,e){}var ge=(t,e)=>({disabled:t,currentPage:e});function Mt(t,e){if(t&1){let o=H();f(0,"li",14)(1,"a",19),V("click",function(i){return B(o),u().selectPage(1),G(i.preventDefault())}),w(2,St,0,0,"ng-template",8),g()()}if(t&2){let o=u(),n=F(1);R("disabled",o.previousDisabled()),h(),E("tabindex",o.previousDisabled()?"-1":null)("aria-disabled",o.previousDisabled()?"true":null),h(),I("ngTemplateOutlet",(o.tplFirst==null?null:o.tplFirst.templateRef)||n)("ngTemplateOutletContext",X(6,ge,o.previousDisabled(),o.page))}}function Ct(t,e){}var Ot=t=>({disabled:t});function Et(t,e){if(t&1){let o=H();f(0,"li",14)(1,"a",20),V("click",function(i){B(o);let s=u();return s.selectPage(s.page-1),G(i.preventDefault())}),w(2,Ct,0,0,"ng-template",8),g()()}if(t&2){let o=u(),n=F(3);R("disabled",o.previousDisabled()),h(),E("tabindex",o.previousDisabled()?"-1":null)("aria-disabled",o.previousDisabled()?"true":null),h(),I("ngTemplateOutlet",(o.tplPrevious==null?null:o.tplPrevious.templateRef)||n)("ngTemplateOutletContext",he(6,Ot,o.previousDisabled()))}}function It(t,e){}function Rt(t,e){}function kt(t,e){if(t&1){let o=H();f(0,"li",14)(1,"a",21),V("click",function(i){B(o);let s=u();return s.selectPage(s.page+1),G(i.preventDefault())}),w(2,Rt,0,0,"ng-template",8),g()()}if(t&2){let o=u(),n=F(5);R("disabled",o.nextDisabled()),h(),E("tabindex",o.nextDisabled()?"-1":null)("aria-disabled",o.nextDisabled()?"true":null),h(),I("ngTemplateOutlet",(o.tplNext==null?null:o.tplNext.templateRef)||n)("ngTemplateOutletContext",X(6,ge,o.nextDisabled(),o.page))}}function Ft(t,e){}function Nt(t,e){if(t&1){let o=H();f(0,"li",14)(1,"a",22),V("click",function(i){B(o);let s=u();return s.selectPage(s.pageCount),G(i.preventDefault())}),w(2,Ft,0,0,"ng-template",8),g()()}if(t&2){let o=u(),n=F(7);R("disabled",o.nextDisabled()),h(),E("tabindex",o.nextDisabled()?"-1":null)("aria-disabled",o.nextDisabled()?"true":null),h(),I("ngTemplateOutlet",(o.tplLast==null?null:o.tplLast.templateRef)||n)("ngTemplateOutletContext",X(6,ge,o.nextDisabled(),o.page))}}var xt=(t,e,o)=>({$implicit:t,pages:e,disabled:o});var Le={animation:!0,transitionTimerDelayMs:5},Pt=(()=>{let e=class e{constructor(){this.animation=Le.animation}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function At(t){let{transitionDelay:e,transitionDuration:o}=window.getComputedStyle(t),n=parseFloat(e),i=parseFloat(o);return(n+i)*1e3}function Bt(t){return parseInt(`${t}`,10)}function Gt(t,e,o=0){return Math.max(Math.min(t,e),o)}function He(t){return typeof t=="string"}function Ge(t){return!isNaN(Bt(t))}function pe(t){return t!=null}function Lt(t){return t&&t.then}function Ve(t){return(t||document.body).getBoundingClientRect()}function Ht(t){return e=>new ve(o=>{let n=a=>t.run(()=>o.next(a)),i=a=>t.run(()=>o.error(a)),s=()=>t.run(()=>o.complete());return e.subscribe({next:n,error:i,complete:s})})}var Vt=()=>{},{transitionTimerDelayMs:$t}=Le,ie=new Map,A=(t,e,o,n)=>{let i=n.context||{},s=ie.get(e);if(s)switch(n.runningTransition){case"continue":return we;case"stop":t.run(()=>s.transition$.complete()),i=Object.assign(s.context,i),ie.delete(e)}let a=o(e,n.animation,i)||Vt;if(!n.animation||window.getComputedStyle(e).transitionProperty==="none")return t.run(()=>a()),oe(void 0).pipe(Ht(t));let r=new v,p=new v,_=r.pipe(Se(!0));ie.set(e,{transition$:r,complete:()=>{p.next(),p.complete()},context:i});let y=At(e);return t.runOutsideAngular(()=>{let m=T(e,"transitionend").pipe(b(_),j(({target:x})=>x===e)),D=De(y+$t).pipe(b(_));Te(D,m,p).pipe(b(_)).subscribe(()=>{ie.delete(e),t.run(()=>{a(),r.next(),r.complete()})})}),r.asObservable()};var $e=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var je=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var ze=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})(),We=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var me=function(t){return t[t.Tab=9]="Tab",t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.PageUp=33]="PageUp",t[t.PageDown=34]="PageDown",t[t.End=35]="End",t[t.Home=36]="Home",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowRight=39]="ArrowRight",t[t.ArrowDown=40]="ArrowDown",t}(me||{});var mn=(()=>{let t=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(t()||e()):!1})();var jt=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function Ue(t){let e=Array.from(t.querySelectorAll(jt)).filter(o=>o.tabIndex!==-1);return[e[0],e[e.length-1]]}var zt=(t,e,o,n=!1)=>{t.runOutsideAngular(()=>{let i=T(e,"focusin").pipe(b(o),ae(s=>s.target));T(e,"keydown").pipe(b(o),j(s=>s.which===me.Tab),re(i)).subscribe(([s,a])=>{let[r,p]=Ue(e);(a===r||a===e)&&s.shiftKey&&(p.focus(),s.preventDefault()),a===p&&!s.shiftKey&&(r.focus(),s.preventDefault())}),n&&T(e,"click").pipe(b(o),re(i),ae(s=>s[1])).subscribe(s=>s.focus())})};var bn=new Date(1882,10,12),yn=new Date(2174,10,25);var vn=1e3*60*60*24;var be=1080,Wt=24*be,Ut=12*be+793,wn=29*Wt+Ut,Dn=11*be+204;var Ze=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})(),Zt=(()=>{let e=class e{constructor(){this._ngbConfig=l(Pt),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(n){this._animation=n}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),$=class{constructor(e,o,n){this.nodes=e,this.viewRef=o,this.componentRef=n}};var Qt=(()=>{let e=class e{constructor(){this._document=l(te)}hide(){let n=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,s=i.style,{overflow:a,paddingRight:r}=s;if(n>0){let p=parseFloat(window.getComputedStyle(i).paddingRight);s.paddingRight=`${p+n}px`}return s.overflow="hidden",()=>{n>0&&(s.paddingRight=r),s.overflow=a}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Jt=(()=>{let e=class e{constructor(){this._nativeElement=l(ce).nativeElement,this._zone=l(q)}ngOnInit(){this._zone.onStable.asObservable().pipe(z(1)).subscribe(()=>{A(this._zone,this._nativeElement,(n,i)=>{i&&Ve(n),n.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return A(this._zone,this._nativeElement,({classList:n})=>n.remove("show"),{animation:this.animation,runningTransition:"stop"})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=Q({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(i,s){i&2&&(W("modal-backdrop"+(s.backdropClass?" "+s.backdropClass:"")),R("show",!s.animation)("fade",s.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[K],decls:0,vars:0,template:function(i,s){},encapsulation:2});let t=e;return t})(),ne=class{update(e){}close(e){}dismiss(e){}},Yt=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],qt=["animation","backdropClass"],_e=class{_applyWindowOptions(e,o){Yt.forEach(n=>{pe(o[n])&&(e[n]=o[n])})}_applyBackdropOptions(e,o){qt.forEach(n=>{pe(o[n])&&(e[n]=o[n])})}update(e){this._applyWindowOptions(this._windowCmptRef.instance,e),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,e)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(b(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(b(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(e,o,n,i){this._windowCmptRef=e,this._contentRef=o,this._backdropCmptRef=n,this._beforeDismiss=i,this._closed=new v,this._dismissed=new v,this._hidden=new v,e.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,a)=>{this._resolve=s,this._reject=a}),this.result.then(null,()=>{})}close(e){this._windowCmptRef&&(this._closed.next(e),this._resolve(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeModalElements()}dismiss(e){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let o=this._beforeDismiss();Lt(o)?o.then(n=>{n!==!1&&this._dismiss(e)},()=>{}):o!==!1&&this._dismiss(e)}}_removeModalElements(){let e=this._windowCmptRef.instance.hide(),o=this._backdropCmptRef?this._backdropCmptRef.instance.hide():oe(void 0);e.subscribe(()=>{let{nativeElement:n}=this._windowCmptRef.location;n.parentNode.removeChild(n),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),o.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:n}=this._backdropCmptRef.location;n.parentNode.removeChild(n),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),Z(e,o).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},fe=function(t){return t[t.BACKDROP_CLICK=0]="BACKDROP_CLICK",t[t.ESC=1]="ESC",t}(fe||{}),Kt=(()=>{let e=class e{constructor(){this._document=l(te),this._elRef=l(ce),this._zone=l(q),this._closed$=new v,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new Y,this.shown=new v,this.hidden=new v}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":He(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(n){this.dismissEvent.emit(n)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(z(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:n}=this._elRef,i={animation:this.animation,runningTransition:"stop"},s=A(this._zone,n,()=>n.classList.remove("show"),i),a=A(this._zone,this._dialogEl.nativeElement,()=>{},i),r=Z(s,a);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let n={animation:this.animation,runningTransition:"continue"},i=A(this._zone,this._elRef.nativeElement,(a,r)=>{r&&Ve(a),a.classList.add("show")},n),s=A(this._zone,this._dialogEl.nativeElement,()=>{},n);Z(i,s).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:n}=this._elRef;this._zone.runOutsideAngular(()=>{T(n,"keydown").pipe(b(this._closed$),j(s=>s.which===me.Escape)).subscribe(s=>{this.keyboard?requestAnimationFrame(()=>{s.defaultPrevented||this._zone.run(()=>this.dismiss(fe.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let i=!1;T(this._dialogEl.nativeElement,"mousedown").pipe(b(this._closed$),Ce(()=>i=!1),Me(()=>T(n,"mouseup").pipe(b(this._closed$),z(1))),j(({target:s})=>n===s)).subscribe(()=>{i=!0}),T(n,"click").pipe(b(this._closed$)).subscribe(({target:s})=>{n===s&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!i&&this._zone.run(()=>this.dismiss(fe.BACKDROP_CLICK))),i=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:n}=this._elRef;if(!n.contains(document.activeElement)){let i=n.querySelector("[ngbAutofocus]"),s=Ue(n)[0];(i||s||n).focus()}}_restoreFocus(){let n=this._document.body,i=this._elWithFocus,s;i&&i.focus&&n.contains(i)?s=i:s=n,this._zone.runOutsideAngular(()=>{setTimeout(()=>s.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&A(this._zone,this._elRef.nativeElement,({classList:n})=>(n.add("modal-static"),()=>n.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=Q({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(i,s){if(i&1&&xe(ct,7),i&2){let a;M(a=C())&&(s._dialogEl=a.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(i,s){i&2&&(E("aria-modal",!0)("aria-labelledby",s.ariaLabelledBy)("aria-describedby",s.ariaDescribedBy),W("modal d-block"+(s.windowClass?" "+s.windowClass:"")),R("fade",s.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[K],ngContentSelectors:lt,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(i,s){i&1&&(Fe(),f(0,"div",0,1)(2,"div",2),Ne(3),g()()),i&2&&W("modal-dialog"+(s.size?" modal-"+s.size:"")+(s.centered?" modal-dialog-centered":"")+s.fullscreenClass+(s.scrollable?" modal-dialog-scrollable":"")+(s.modalDialogClass?" "+s.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let t=e;return t})(),Xt=(()=>{let e=class e{constructor(){this._applicationRef=l(Ae),this._injector=l(J),this._environmentInjector=l(le),this._document=l(te),this._scrollBar=l(Qt),this._activeWindowCmptHasChanged=new v,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new Y;let n=l(q);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let i=this._windowCmpts[this._windowCmpts.length-1];zt(n,i.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(i.location.nativeElement)}})}_restoreScrollBar(){let n=this._scrollBarRestoreFn;n&&(this._scrollBarRestoreFn=null,n())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(n,i,s){let a=s.container instanceof HTMLElement?s.container:pe(s.container)?this._document.querySelector(s.container):this._document.body;if(!a)throw new Error(`The specified modal container "${s.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new ne;n=s.injector||n;let p=n.get(le,null)||this._environmentInjector,_=this._getContentRef(n,p,i,r,s),y=s.backdrop!==!1?this._attachBackdrop(a):void 0,m=this._attachWindowComponent(a,_.nodes),D=new _e(m,_,y,s.beforeDismiss);return this._registerModalRef(D),this._registerWindowCmpt(m),D.hidden.pipe(z(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=x=>{D.close(x)},r.dismiss=x=>{D.dismiss(x)},r.update=x=>{D.update(x)},D.update(s),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),y&&y.instance&&y.changeDetectorRef.detectChanges(),m.changeDetectorRef.detectChanges(),D}get activeInstances(){return this._activeInstances}dismissAll(n){this._modalRefs.forEach(i=>i.dismiss(n))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(n){let i=ee(Jt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(i.hostView),n.appendChild(i.location.nativeElement),i}_attachWindowComponent(n,i){let s=ee(Kt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:i});return this._applicationRef.attachView(s.hostView),n.appendChild(s.location.nativeElement),s}_getContentRef(n,i,s,a,r){return s?s instanceof S?this._createFromTemplateRef(s,a):He(s)?this._createFromString(s):this._createFromComponent(n,i,s,a,r):new $([])}_createFromTemplateRef(n,i){let s={$implicit:i,close(r){i.close(r)},dismiss(r){i.dismiss(r)}},a=n.createEmbeddedView(s);return this._applicationRef.attachView(a),new $([a.rootNodes],a)}_createFromString(n){let i=this._document.createTextNode(`${n}`);return new $([[i]])}_createFromComponent(n,i,s,a,r){let p=J.create({providers:[{provide:ne,useValue:a}],parent:n}),_=ee(s,{environmentInjector:i,elementInjector:p}),y=_.location.nativeElement;return r.scrollable&&y.classList.add("component-host-scrollable"),this._applicationRef.attachView(_.hostView),new $([[y]],_.hostView,_)}_setAriaHidden(n){let i=n.parentElement;i&&n!==this._document.body&&(Array.from(i.children).forEach(s=>{s!==n&&s.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}),this._setAriaHidden(i))}_revertAriaHidden(){this._ariaHiddenValues.forEach((n,i)=>{n?i.setAttribute("aria-hidden",n):i.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(n){let i=()=>{let s=this._modalRefs.indexOf(n);s>-1&&(this._modalRefs.splice(s,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(n),this._activeInstances.emit(this._modalRefs),n.result.then(i,i)}_registerWindowCmpt(n){this._windowCmpts.push(n),this._activeWindowCmptHasChanged.next(),n.onDestroy(()=>{let i=this._windowCmpts.indexOf(n);i>-1&&(this._windowCmpts.splice(i,1),this._activeWindowCmptHasChanged.next())})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ei=(()=>{let e=class e{constructor(){this._injector=l(J),this._modalStack=l(Xt),this._config=l(Zt)}open(n,i={}){let s=se(ye(se({},this._config),{animation:this._config.animation}),i);return this._modalStack.open(this._injector,n,s)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(n){this._modalStack.dismissAll(n)}hasOpenModals(){return this._modalStack.hasOpenModals()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Je=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({providers:[ei]});let t=e;return t})();var Ye=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})(),ti=(()=>{let e=class e{constructor(){this.disabled=!1,this.boundaryLinks=!1,this.directionLinks=!0,this.ellipses=!0,this.maxSize=0,this.pageSize=10,this.rotate=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ii=(()=>{let e=class e{constructor(){this.templateRef=l(S)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=O({type:e,selectors:[["ng-template","ngbPaginationEllipsis",""]],standalone:!0});let t=e;return t})(),ni=(()=>{let e=class e{constructor(){this.templateRef=l(S)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=O({type:e,selectors:[["ng-template","ngbPaginationFirst",""]],standalone:!0});let t=e;return t})(),si=(()=>{let e=class e{constructor(){this.templateRef=l(S)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=O({type:e,selectors:[["ng-template","ngbPaginationLast",""]],standalone:!0});let t=e;return t})(),oi=(()=>{let e=class e{constructor(){this.templateRef=l(S)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=O({type:e,selectors:[["ng-template","ngbPaginationNext",""]],standalone:!0});let t=e;return t})(),ai=(()=>{let e=class e{constructor(){this.templateRef=l(S)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=O({type:e,selectors:[["ng-template","ngbPaginationNumber",""]],standalone:!0});let t=e;return t})(),ri=(()=>{let e=class e{constructor(){this.templateRef=l(S)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=O({type:e,selectors:[["ng-template","ngbPaginationPrevious",""]],standalone:!0});let t=e;return t})(),li=(()=>{let e=class e{constructor(){this.templateRef=l(S)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=O({type:e,selectors:[["ng-template","ngbPaginationPages",""]],standalone:!0});let t=e;return t})(),Tn=(()=>{let e=class e{constructor(){this._config=l(ti),this.pageCount=0,this.pages=[],this.disabled=this._config.disabled,this.boundaryLinks=this._config.boundaryLinks,this.directionLinks=this._config.directionLinks,this.ellipses=this._config.ellipses,this.rotate=this._config.rotate,this.maxSize=this._config.maxSize,this.page=1,this.pageSize=this._config.pageSize,this.pageChange=new Y(!0),this.size=this._config.size}hasPrevious(){return this.page>1}hasNext(){return this.page<this.pageCount}nextDisabled(){return!this.hasNext()||this.disabled}previousDisabled(){return!this.hasPrevious()||this.disabled}selectPage(n){this._updatePages(n)}ngOnChanges(n){this._updatePages(this.page)}isEllipsis(n){return n===-1}_applyEllipses(n,i){this.ellipses&&(n>0&&(n>2?this.pages.unshift(-1):n===2&&this.pages.unshift(2),this.pages.unshift(1)),i<this.pageCount&&(i<this.pageCount-2?this.pages.push(-1):i===this.pageCount-2&&this.pages.push(this.pageCount-1),this.pages.push(this.pageCount)))}_applyRotation(){let n=0,i=this.pageCount,s=Math.floor(this.maxSize/2),a=this.maxSize%2===0?s-1:s;return this.page<=s?i=this.maxSize:this.pageCount-this.page<s?n=this.pageCount-this.maxSize:(n=this.page-s-1,i=this.page+a),[n,i]}_applyPagination(){let i=(Math.ceil(this.page/this.maxSize)-1)*this.maxSize,s=i+this.maxSize;return[i,s]}_setPageInRange(n){let i=this.page;this.page=Gt(n,this.pageCount,1),this.page!==i&&Ge(this.collectionSize)&&this.pageChange.emit(this.page)}_updatePages(n){this.pageCount=Math.ceil(this.collectionSize/this.pageSize),Ge(this.pageCount)||(this.pageCount=0),this.pages.length=0;for(let i=1;i<=this.pageCount;i++)this.pages.push(i);if(this._setPageInRange(n),this.maxSize>0&&this.pageCount>this.maxSize){let i=0,s=this.pageCount;this.rotate?[i,s]=this._applyRotation():[i,s]=this._applyPagination(),this.pages=this.pages.slice(i,s),this._applyEllipses(i,s)}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=Q({type:e,selectors:[["ngb-pagination"]],contentQueries:function(i,s,a){if(i&1&&(k(a,ii,5),k(a,ni,5),k(a,si,5),k(a,oi,5),k(a,ai,5),k(a,ri,5),k(a,li,5)),i&2){let r;M(r=C())&&(s.tplEllipsis=r.first),M(r=C())&&(s.tplFirst=r.first),M(r=C())&&(s.tplLast=r.first),M(r=C())&&(s.tplNext=r.first),M(r=C())&&(s.tplNumber=r.first),M(r=C())&&(s.tplPrevious=r.first),M(r=C())&&(s.tplPages=r.first)}},hostAttrs:["role","navigation"],inputs:{disabled:"disabled",boundaryLinks:"boundaryLinks",directionLinks:"directionLinks",ellipses:"ellipses",rotate:"rotate",collectionSize:"collectionSize",maxSize:"maxSize",page:"page",pageSize:"pageSize",size:"size"},outputs:{pageChange:"pageChange"},standalone:!0,features:[Ee,K],decls:20,vars:12,consts:()=>{let n;n=$localize`:@@ngb.pagination.first:««`;let i;i=$localize`:@@ngb.pagination.previous:«`;let s;s=$localize`:@@ngb.pagination.next:»`;let a;a=$localize`:@@ngb.pagination.last:»»`;let r;r=$localize`:@@ngb.pagination.first-aria:First`;let p;p=$localize`:@@ngb.pagination.previous-aria:Previous`;let _;_=$localize`:@@ngb.pagination.next-aria:Next`;let y;return y=$localize`:@@ngb.pagination.last-aria:Last`,[["first",""],["previous",""],["next",""],["last",""],["ellipsis",""],["defaultNumber",""],["defaultPages",""],["class","page-item",3,"disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["aria-hidden","true"],n,i,s,a,[1,"page-item"],["class","page-link","tabindex","-1","aria-disabled","true"],["tabindex","-1","aria-disabled","true",1,"page-link"],["href","",1,"page-link",3,"click"],["class","page-item",3,"active","disabled"],["aria-label",r,"href","",1,"page-link",3,"click"],["aria-label",p,"href","",1,"page-link",3,"click"],["aria-label",_,"href","",1,"page-link",3,"click"],["aria-label",y,"href","",1,"page-link",3,"click"]]},template:function(i,s){if(i&1&&(w(0,dt,2,0,"ng-template",null,0,N)(2,ht,2,0,"ng-template",null,1,N)(4,ut,2,0,"ng-template",null,2,N)(6,pt,2,0,"ng-template",null,3,N)(8,_t,1,0,"ng-template",null,4,N)(10,ft,1,1,"ng-template",null,5,N)(12,Tt,2,0,"ng-template",null,6,N),f(14,"ul"),w(15,Mt,3,9,"li",7)(16,Et,3,8,"li",7)(17,It,0,0,"ng-template",8)(18,kt,3,9,"li",7)(19,Nt,3,9,"li",7),g()),i&2){let a=F(13);h(14),W("pagination"+(s.size?" pagination-"+s.size:"")),h(),L(15,s.boundaryLinks?15:-1),h(),L(16,s.directionLinks?16:-1),h(),I("ngTemplateOutlet",(s.tplPages==null?null:s.tplPages.templateRef)||a)("ngTemplateOutletContext",ue(8,xt,s.page,s.pages,s.disabled)),h(),L(18,s.directionLinks?18:-1),h(),L(19,s.boundaryLinks?19:-1)}},dependencies:[Be],encapsulation:2,changeDetection:0});let t=e;return t})();var qe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var Xe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var et=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var tt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var it=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var nt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var st=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var Sn=new Oe("live announcer delay",{providedIn:"root",factory:()=>100});var ot=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})(),ci=[$e,je,ze,We,Ze,Qe,Je,Ye,at,qe,Ke,Xe,et,tt,it,nt,st,ot],Mn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({imports:[ci,$e,je,ze,We,Ze,Qe,Je,Ye,at,qe,Ke,Xe,et,tt,it,nt,st,ot]});let t=e;return t})();export{ne as a,ei as b,Tn as c,qe as d,Mn as e};
