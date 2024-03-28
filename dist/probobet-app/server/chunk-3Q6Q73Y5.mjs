import './polyfills.server.mjs';
import{a as dt,d as mt}from"./chunk-LP3RPBCH.mjs";import{a as L,b as bt,e as xt,f as _t}from"./chunk-TMGF35YN.mjs";import{a as Ft,b as It}from"./chunk-TBFLSK6C.mjs";import{e as ct,g as pt,h as gt,j as ut,l as _,m as ft,n as ht,o as V}from"./chunk-TXRX3P46.mjs";import{b as j,d as q,e as st,f as lt}from"./chunk-253FDQEK.mjs";import{a as Ct,b as A,c as vt,d as wt,i as Pt,k as Mt,l as Ot,p as yt,r as St,s as kt,t as Et}from"./chunk-CEZLQFRU.mjs";import{m as rt,n as at,o as I,q as v}from"./chunk-WZPXHYM4.mjs";import{Ab as y,Kb as a,La as K,Lb as F,Mb as et,Ob as nt,Ra as R,Rb as f,Sb as x,U as k,Ub as it,Xa as l,Ya as g,Z as P,_ as X,_a as tt,a as U,ba as u,fa as M,ga as O,gb as S,ha as J,ib as p,k as W,n as Y,nc as ot,qb as n,rb as r,sb as c,vb as B,w as $,ya as Q,z as Z,zb as d}from"./chunk-4MGEDM3G.mjs";function $t(o,e){if(o&1&&c(0,"img",2),o&2){let h=e.$implicit;p("src",h,K)}}var Tt=(()=>{let e=class e{constructor(){this.images=["assets/img2.png","assets/img3.png","assets/img4.png","assets/img2.png","assets/img1.png","assets/img2.png"]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-popular"]],standalone:!0,features:[f],decls:4,vars:1,consts:[[1,"popular"],["class","img-thumbnail","alt","Slide 2",3,"src",4,"ngFor","ngForOf"],["alt","Slide 2",1,"img-thumbnail",3,"src"]],template:function(t,s){t&1&&(n(0,"h2"),a(1,"Popular"),r(),n(2,"div",0),S(3,$t,1,1,"img",1),r()),t&2&&(l(3),p("ngForOf",s.images))},dependencies:[v,at],styles:[".img-thumbnail[_ngcontent-%COMP%]{width:90px;height:80px;background-color:#000;border:1px solid black;margin-right:10px}h2[_ngcontent-%COMP%]{font-family:poppins,sans-serif;padding-left:12px}.popular[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}.popular[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.img-thumbnail[_ngcontent-%COMP%]{display:inline-block;margin-right:5px;max-width:100%}"]});let o=e;return o})();var Dt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-slider"]],standalone:!0,features:[f],decls:12,vars:0,consts:[[1,"col-md-12","col-sm-12"],["id","carouselExample","data-bs-ride","carousel","data-bs-touch","true",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","assets/rashmi.png","srcset","assets/rashmi.png 500w, assets/rashmi.png 1000w, assets/rashmi.png 1500w","sizes",`(max-width: 600px) 480px,
       (max-width: 900px) 800px,
       1200px`,"alt","descriptive text","alt","Slide 1",1,"d-block","w-100"],[1,"carousel-item"],["src","assets/rashmi.png","alt","Slide 2",1,"d-block","w-100"],["src","assets/rashmi.png","alt","Slide 3",1,"d-block","w-100"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),c(4,"img",4),r(),n(5,"div",5),c(6,"img",6),r(),n(7,"div",5),c(8,"img",7),r()()()(),c(9,"app-popular")(10,"app-games")(11,"app-sports"))},dependencies:[Tt,_t,xt],styles:[".col-sm-12[_ngcontent-%COMP%]{margin-bottom:15px}#carouselExample[_ngcontent-%COMP%]{width:100%}"]});let o=e;return o})();var N=(()=>{let e=class e{constructor(i){this.http=i}getDataOfUser(){return this.http.get("https://api.betguru.net/dash/index")}};e.\u0275fac=function(t){return new(t||e)(P(j))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var C=(()=>{let e=class e{constructor(i,t){this.http=i,this.router=t,this.url="https://api.1exch.net/login"}login(i){return this.http.post(this.url,i).pipe(Y(t=>{let s=t.data.jwt.accessToken;return sessionStorage.setItem("token",s),t}),Z(t=>(console.error("Error during login:",t),W(t))))}getToken(){return typeof sessionStorage<"u"?sessionStorage.getItem("token"):null}logOut(){throw sessionStorage.removeItem("token"),this.router.navigate(["/login"]),new Error("Method not implemented.")}};e.\u0275fac=function(t){return new(t||e)(P(j),P(_))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var Jt=()=>["/reports/mybets"],Qt=()=>["/reports/profit-loss"],Kt=()=>["/reports/casino-reports"],te=()=>["/reports/fancy-reports"],ee=()=>["/reports/result"];function ne(o,e){if(o&1){let h=B();n(0,"ul")(1,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(2,"My Bets"),r(),n(3,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(4,"Profit & Loss"),r(),n(5,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(6,"Casino Reports"),r(),n(7,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(8,"Fancy Reports"),r(),n(9,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(10,"Results"),r()()}o&2&&(l(),p("routerLink",x(5,Jt)),l(2),p("routerLink",x(6,Qt)),l(2),p("routerLink",x(7,Kt)),l(2),p("routerLink",x(8,te)),l(2),p("routerLink",x(9,ee)))}var ie=()=>["/reports/account-statement"],Rt=()=>["/reports/withdraw"],oe=()=>["/reports/deposit-withdraw-request-history"],re=()=>["/reports/activity-logs"],ae=()=>["/reports/custom-stake"];function se(o,e){if(o&1){let h=B();n(0,"ul")(1,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(2,"Account Statement"),r(),n(3,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(4,"Add/Remove Bank Details"),r(),n(5,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(6,"Deposit/Withdraw Requests History"),r(),n(7,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(8,"Activity Logs"),r(),n(9,"li",9),d("click",function(){M(h);let t=y();return O(t.closeSidebar())}),a(10,"Custom Stake Button"),r()()}o&2&&(l(),p("routerLink",x(5,ie)),l(2),p("routerLink",x(6,Rt)),l(2),p("routerLink",x(7,oe)),l(2),p("routerLink",x(8,re)),l(2),p("routerLink",x(9,ae)))}var le=(o,e)=>({"sidebar-open":o,"sidebar-closed":e}),ce=()=>["/reports/payment/whatsapp"],pe=()=>["/reports/changepassword"],H=(()=>{let e=class e{constructor(i,t,s,m,b){this.sidebarService=i,this.router=t,this.eRef=s,this.userService=m,this.authService=b,this.isVisible=!1,this.allowClose=!0,this.subscription=new U,this.dropdowns={reports:!1,accounts:!1}}ngOnInit(){this.userService.getDataOfUser().subscribe({next:i=>{this.userName=i.name}}),this.subscription.add(this.sidebarService.sidebarVisible$.subscribe(i=>{this.isVisible=i,i&&(this.allowClose=!1,setTimeout(()=>this.allowClose=!0,10))}))}ngOnDestroy(){this.subscription.unsubscribe()}onDocumentClick(i){!this.eRef.nativeElement.contains(i.target)&&this.isVisible&&this.allowClose&&this.sidebarService.closeSidebar()}closeSidebar(){this.sidebarService.hide()}toggleDropdown(i,t){i.stopPropagation(),this.dropdowns[t]=!this.dropdowns[t],Object.keys(this.dropdowns).forEach(s=>{s!==t&&(this.dropdowns[s]=!1)})}navigateToDeposit(){this.router.navigate(["/reports/payment/upi"])}logOut(){this.authService.logOut()}};e.\u0275fac=function(t){return new(t||e)(g(L),g(_),g(R),g(N),g(C))},e.\u0275cmp=u({type:e,selectors:[["app-sidebar"]],hostBindings:function(t,s){t&1&&d("click",function(b){return s.onDocumentClick(b)},!1,Q)},standalone:!0,features:[f],decls:30,vars:13,consts:[[1,"sidebar",3,"ngClass"],[1,"sidebar-header","shadow-lg"],[1,"sidebar-icon"],[1,"bi","bi-x","custom-x-icon",3,"click"],[1,"profile"],["src","../../assets/group-c/a.jpeg","alt","Profile Image",1,"profile-image"],[1,"profile-name"],[1,"container"],[1,"sidebar-menu"],[3,"routerLink","click"],[1,"dropdown"],[3,"click"],[1,"bi","bi-chevron-down",2,"position","absolute","right","4px"],[4,"ngIf"],[1,"logout-button",3,"click"],["width","22","height","18","viewBox","0 0 22 22","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M14.499 4.42187L12.8409 6.07994C12.6811 6.2397 12.6811 6.50095 12.8409 6.66071L15.3531 9.17295H5.13277C4.90696 9.17295 4.72195 9.35772 4.72195 9.58377V11.9285C4.72195 12.1543 4.90672 12.3393 5.13277 12.3393H15.3531L12.8409 14.8515C12.6811 15.0113 12.6811 15.2725 12.8409 15.4323L14.499 17.0904C14.6587 17.2501 14.92 17.2501 15.0797 17.0904L21.1024 11.0675C21.1876 10.9823 21.226 10.8682 21.2201 10.756C21.226 10.6438 21.1876 10.5297 21.1024 10.4445L15.0797 4.42187C14.92 4.26211 14.6587 4.26211 14.499 4.42187ZM0.36274 0.00292981H9.84598C9.84598 0.00292981 9.97417 0.00220144 10.0793 0.114374C10.1609 0.201296 10.1609 0.324881 10.1609 0.324881V2.5074C10.1609 2.5074 10.1606 2.59966 10.0718 2.69824C9.97976 2.80021 9.86151 2.80021 9.86151 2.80021H2.79704V18.7118H9.84598C9.84598 18.7118 9.97417 18.7111 10.0793 18.8232C10.1609 18.9102 10.1609 19.0337 10.1609 19.0337V21.2163C10.1609 21.2163 10.1606 21.3085 10.0718 21.4071C9.97976 21.5091 9.86151 21.5091 9.86151 21.5091H0.356427C0.160488 21.5091 -4.3639e-07 21.3486 -4.3639e-07 21.1526V0.365914C-0.000243235 0.166333 0.163159 0.00292981 0.36274 0.00292981Z","fill","white"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"i",3),d("click",function(){return s.closeSidebar()}),r()(),n(4,"div",4),c(5,"img",5),n(6,"h4",6),a(7),r()()(),n(8,"div",7)(9,"ul",8)(10,"li",9),d("click",function(){return s.closeSidebar()}),a(11,"Deposit"),r(),n(12,"li",9),d("click",function(){return s.closeSidebar()}),a(13,"Withdrawal"),r(),n(14,"li",9),d("click",function(){return s.closeSidebar()}),a(15,"Change Password"),r(),n(16,"li",10)(17,"div",11),d("click",function(b){return s.toggleDropdown(b,"reports")}),a(18," Reports "),c(19,"i",12),r(),S(20,ne,11,10,"ul",13),r(),n(21,"li",10)(22,"div",11),d("click",function(b){return s.toggleDropdown(b,"accounts")}),a(23," Accounts "),c(24,"i",12),r(),S(25,se,11,10,"ul",13),r()(),n(26,"button",14),d("click",function(){return s.logOut()}),a(27,"Logout "),J(),n(28,"svg",15),c(29,"path",16),r()()()()),t&2&&(p("ngClass",it(7,le,s.isVisible,!s.isVisible)),l(7),F(s.userName),l(3),p("routerLink",x(10,ce)),l(2),p("routerLink",x(11,Rt)),l(2),p("routerLink",x(12,pe)),l(6),p("ngIf",s.dropdowns.reports),l(5),p("ngIf",s.dropdowns.accounts))},dependencies:[v,rt,I,V,ft],styles:[".sidebar[_ngcontent-%COMP%]{position:fixed;top:0;right:0;width:260px;height:100%;background-color:#f4f4f4;box-shadow:-2px 0 5px #00000080;transition:.5s;z-index:1;overflow-x:hidden}.profile-name[_ngcontent-%COMP%]{color:#fff;line-height:.1rem;font-family:poppins,sans-serif;font-weight:900;text-align:center}.sidebar-menu[_ngcontent-%COMP%]{list-style-type:none;padding:5px}.sidebar-header[_ngcontent-%COMP%]{margin-top:0;padding:10px;background-color:#1c1c1e}.sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 15px;font-family:Poppins,sans-serif;font-weight:700;font-size:14px}.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.sidebar-open[_ngcontent-%COMP%]{width:260px}.sidebar-closed[_ngcontent-%COMP%]{width:0}.custom-x-icon[_ngcontent-%COMP%]{color:#fff!important;font-size:2.5rem}.logout-button[_ngcontent-%COMP%]{width:100%;background-color:#1c1c1e;color:#fff;border:none;padding:15px;font-family:Poppins,sans-serif;font-size:18px;font-weight:700;cursor:pointer;border-radius:10px}#main-content[_ngcontent-%COMP%]{transition:margin-right .5s;padding:16px}#main-content.margin-right[_ngcontent-%COMP%]{margin-right:250px}.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;margin:0 auto 20px;display:block}.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:center}.sidebar[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}.sidebar[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px 15px;text-decoration:none;display:block;transition:.3s;font-family:poppins}.sidebar-icon[_ngcontent-%COMP%]{position:absolute;right:15px;margin:0}nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{position:relative}.nav[_ngcontent-%COMP%]   .bi-chevron-down[_ngcontent-%COMP%]{float:right;margin-right:5px}.nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f9f9f9;min-width:100%;box-shadow:0 8px 16px #0003;z-index:1}.nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%]{display:block}hr[_ngcontent-%COMP%]{width:300px}ul[_ngcontent-%COMP%]{margin-left:-24px;list-style:none}"]});let o=e;return o})();var jt=(()=>{let e=class e{constructor(i,t,s,m,b,E){this.eRef=i,this.router=t,this.userService=s,this.sidebarService=m,this.cdr=b,this.autService=E,this.images=[944,1011,984].map(Yt=>`https://picsum.photos/id/${Yt}/900/500`),this.sidebarOpen=!1,this.dropdowns={reports:!1,accounts:!1}}openSidebar(){this.sidebarOpen=!this.sidebarOpen}ngOnInit(){this.userService.getDataOfUser().subscribe({next:i=>{this.userName=i.name,this.coin=i.coin,this.userCode=i.code,console.log(i)},error:i=>{console.log(i)}})}toggleSidebar(){this.sidebarService.toggleSidebar()}toggleDropdown(i,t){i.stopPropagation(),this.dropdowns[t]?this.dropdowns[t]=!1:(Object.keys(this.dropdowns).forEach(s=>{this.dropdowns[s]=!1}),this.dropdowns[t]=!0)}navigateToDeposit(){this.router.navigate(["/reports/payment/upi"])}closeSidebar(){this.sidebarOpen=!1}};e.\u0275fac=function(t){return new(t||e)(g(R),g(_),g(N),g(L),g(tt),g(C))},e.\u0275cmp=u({type:e,selectors:[["app-header"]],standalone:!0,features:[f],decls:39,vars:1,consts:[[1,"container-fluid"],[1,"col-md-12","col-sm-12"],[1,"row"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],["href","#",1,"navbar-brand"],["src","assets/pb1.png","alt","Your Image",1,"navbar-brand"],[1,"d-flex"],[1,"deposit-header"],["src","https://m.kheloyaar360.net/assets/images/cash1.svg","alt","Your Image",1,"d-flex","justify-content-center","header-deposit"],[3,"click"],[1,"d-block","header-main-txt"],[1,"header-txt"],[1,"header-txt-1"],["id","openSidebar",1,"bi","bi-gear","big-icon",3,"click"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-dar"],[1,"navbar-nav","ml-auto"],["href","#",1,"nav-link"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"nav",3)(4,"div",0)(5,"a",4),c(6,"img",5),r(),n(7,"div",6)(8,"div",7),c(9,"img",8),n(10,"span",9),d("click",function(){return s.navigateToDeposit()}),a(11,"Deposit"),r()(),n(12,"div",10)(13,"p",11),a(14,"Libility:0"),r(),n(15,"p",12),a(16),r()(),n(17,"i",13),d("click",function(){return s.toggleSidebar()}),r()()()(),n(18,"div",1)(19,"nav",14)(20,"div",15)(21,"a",16),a(22,"Casino"),r(),n(23,"a",16),a(24,"Aviator"),r(),n(25,"a",16),a(26,"Teen Patti"),r(),n(27,"a",16),a(28,"Live Casino"),r(),n(29,"a",16),a(30,"HeliX"),r(),n(31,"a",16),a(32,"Sportsbook"),r(),n(33,"a",16),a(34,"Poker"),r(),n(35,"a",16),a(36,"Kabbadi"),r()()()()()()(),c(37,"app-slider")(38,"app-sidebar")),t&2&&(l(16),et("Bal:",s.coin,""))},dependencies:[Dt,v,V,H],styles:[".navbar-nav.ml-auto[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;overflow-y:scroll}.navbar-nav.ml-auto[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.navbar-nav.ml-auto[_ngcontent-%COMP%]{scrollbar-width:none}.navbar-nav.ml-auto[_ngcontent-%COMP%]{-ms-overflow-style:none}.nav-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:32px}.d-flex[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;align-items:center}@media screen and (max-width: 480px){.navbar-nav.ml-auto[_ngcontent-%COMP%]{display:flex;flex-direction:row;white-space:nowrap;overflow-x:auto}.container-fluid[_ngcontent-%COMP%]{margin-top:0}.nav-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:32px}.d-flex[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;align-items:center}a[_ngcontent-%COMP%]{text-decoration:none}.navbar[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between;align-items:center}.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100px;max-height:100px}.navbar-nav.ml-auto[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px}.navbar-nav.ml-auto[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin-right:15px}.navbar-nav.ml-auto[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}.d-flex[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}}.offcanvas[_ngcontent-%COMP%]{position:fixed;top:0;right:0;width:250px;height:100vh;background:#f8f9fa;z-index:1000;overflow-y:auto;background-color:#222c3b}.custom-close[_ngcontent-%COMP%]{color:#fff}.profile-image[_ngcontent-%COMP%]{width:80px;height:80px}.sidebar[_ngcontent-%COMP%]{height:100%;width:0;position:fixed;z-index:1;top:0;right:0;background-color:#fff;overflow-x:hidden;transition:.5s;color:#000}.profile[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.profile-image[_ngcontent-%COMP%]{border-radius:50%}.sidebar-header[_ngcontent-%COMP%]{margin-top:0;padding:10px;background-color:#1c1c1e}.deposit-header[_ngcontent-%COMP%]{background:green;display:flex;padding:5px;color:#fff;border-radius:78px;font-family:poppins,sans-serif;height:40px;border:1px solid white}.deposit-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;height:25px}.big-icon[_ngcontent-%COMP%]{color:#fff;font-size:2em}.deposit-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:2px}.header-txt[_ngcontent-%COMP%]{margin:0;padding:0;font-size:12px;color:#fff;line-height:.9rem;font-family:poppins;font-weight:400!important;font-weight:500!important}.header-txt-1[_ngcontent-%COMP%]{line-height:1rem!important;word-wrap:break-word;font-size:12px;color:#fff;font-family:poppins;font-weight:400!important;margin:0;padding:0}.header-main-txt[_ngcontent-%COMP%]{max-width:70px}.profile-name[_ngcontent-%COMP%]{color:#fff;line-height:.1rem;font-family:poppins,sans-serif;font-weight:900}.sidebar-menu[_ngcontent-%COMP%]{list-style-type:none;padding:5px}.sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 15px;font-family:Poppins,sans-serif;font-weight:700;font-size:14px}.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.sidebar-open[_ngcontent-%COMP%]{width:300px}.sidebar-closed[_ngcontent-%COMP%]{width:0}.custom-x-icon[_ngcontent-%COMP%]{color:#fff!important;font-size:2.5rem}.logout-button[_ngcontent-%COMP%]{width:100%;background-color:#1c1c1e;color:#fff;border:none;padding:15px;font-family:Poppins,sans-serif;font-size:18px;font-weight:700;cursor:pointer;border-radius:10px}#main-content[_ngcontent-%COMP%]{transition:margin-right .5s;padding:16px}#main-content.margin-right[_ngcontent-%COMP%]{margin-right:250px}.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;margin:0 auto 20px;display:block}.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:center}.sidebar[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}.sidebar[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px 15px;text-decoration:none;display:block;transition:.3s;font-family:poppins}.sidebar-icon[_ngcontent-%COMP%]{position:absolute;right:15px;margin:0}nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{position:relative}.nav[_ngcontent-%COMP%]   .bi-chevron-down[_ngcontent-%COMP%]{float:right;margin-right:5px}.nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f9f9f9;min-width:100%;box-shadow:0 8px 16px #0003;z-index:1}.nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%]{display:block}hr[_ngcontent-%COMP%]{width:300px}ul[_ngcontent-%COMP%]{margin-left:-24px;list-style:none}@media screen and (max-width: 376px){.deposit-header[_ngcontent-%COMP%]{background:green;display:flex;padding:4px;font-size:12PX;color:#fff;border-radius:78px;font-family:poppins,sans-serif;height:35px;width:78PX;border:1px solid white}.deposit-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:17px}}"]});let o=e;return o})();function de(o,e){o&1&&c(0,"app-bottom-footer")}var Vt=(()=>{let e=class e{constructor(i){this.router=i,this.title="probobet-app",this.showHeader=!0,this.showFooter=!0}ngOnInit(){this.router.events.pipe($(i=>i instanceof gt)).subscribe({next:i=>{this.showHeader=!(i.urlAfterRedirects.includes("/login")||i.urlAfterRedirects.includes("/register")||i.urlAfterRedirects.includes("/verify")||i.urlAfterRedirects.includes("/reports")),this.showFooter=!(i.urlAfterRedirects.includes("/login")||i.urlAfterRedirects.includes("/register")||i.urlAfterRedirects.includes("/verify"))},error:i=>{console.error("Router events error:",i)},complete:()=>{console.log("Router events subscription completed.")}})}};e.\u0275fac=function(t){return new(t||e)(g(_))},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[f],decls:3,vars:1,consts:[[4,"ngIf"]],template:function(t,s){t&1&&(c(0,"app-sidebar")(1,"router-outlet"),S(2,de,1,0,"app-bottom-footer",0)),t&2&&(l(2),p("ngIf",s.showFooter))},dependencies:[v,I,ut,bt,H]});let o=e;return o})();function me(o,e){o&1&&(n(0,"div",24),a(1," Code is required "),r())}function ge(o,e){o&1&&(n(0,"div",25),a(1," Password is required. "),r())}function ue(o,e){o&1&&(n(0,"div",24),a(1," Password must be at least 8 characters.."),r())}var Lt=(()=>{let e=class e{togglePasswordVisibility(){this.showPassword=!this.showPassword}constructor(i,t,s,m){this.authservice=i,this.formBuilder=t,this.toastr=s,this.router=m,this.StrongPasswordRegx=/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/,this.showPassword=!1,this.model={code:"",password:""}}ngOnInit(){this.loginForm=this.formBuilder.group({code:["",A.required],password:["",[A.required,A.minLength(6)]]})}get formControls(){return this.loginForm.controls}onSubmit(){if(this.loginForm.valid){let i=this.loginForm.value;this.authservice.login(i).subscribe({next:t=>{t.isSuccess==!1&&this.toastr.error(t.message,"Username Not exists",{timeOut:3e3}),t.isSuccess==!0&&(this.toastr.success(`Login ${t.message}`),this.router.navigate(["/"]))},error:t=>{console.log(t),this.toastr.error("Issue in Loin",t.message,{timeOut:300})}}),console.log("Form submitted with code:",this.model.code),console.log("Form submitted with password:",this.model.password)}}};e.\u0275fac=function(t){return new(t||e)(g(C),g(St),g(Ft),g(_))},e.\u0275cmp=u({type:e,selectors:[["app-login"]],standalone:!0,features:[nt([C]),f],decls:42,vars:6,consts:[[1,"login-container"],["href","#",1,"navbar-brand"],["src","assets/pb1.png","alt","Your Image",1,"navbar-brand"],[1,"login-title"],[1,"login-container2"],[1,"login-form",3,"formGroup","ngSubmit"],[1,"input-group"],["type","text","placeholder","ID","formControlName","code","aria-label","Text input with dropdown button","required","",1,"form-control"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-outline-secondary","dropdown-toggle"],[1,"dropdown-menu","dropdown-menu-end"],["href","#",1,"dropdown-item"],["class","alert alert-danger",4,"ngIf"],["id","password","formControlName","password","placeholder","Password",1,"password-input",3,"type"],[1,"material-icons","toggle-icon",3,"click"],["style","color: red",4,"ngIf"],[1,"input-group",2,"position","relative","width","100%"],["type","text","placeholder","Your Verification Code","aria-label","Dollar amount (with dot and two decimal places)",1,"form-control","verification-code",2,"width","100%","padding-right","30px"],[1,"input-group-text",2,"position","absolute","top","0","right","0","background-color","black","position","absolute","color","white","padding","5px","border-radius","10px","right","10px","top","4px","text-align","center"],[1,"forgot-password-container"],["href","#",1,"forgot-password-link"],["type","submit",1,"login-button"],["type","button",1,"register-button"],[1,"demo-user-container"],["href","#",1,"demo-user-link"],[1,"alert","alert-danger"],[2,"color","red"]],template:function(t,s){if(t&1&&(n(0,"div",0)(1,"a",1),c(2,"img",2),r(),n(3,"h2",3),a(4,"LOG IN"),r()(),n(5,"div",4)(6,"form",5),d("ngSubmit",function(){return s.onSubmit()}),n(7,"div",6),c(8,"input",7),n(9,"button",8),a(10,"ID"),r(),n(11,"ul",9)(12,"li")(13,"a",10),a(14,"Phone"),r()(),n(15,"li")(16,"a",10),a(17,"ID"),r()()()(),S(18,me,2,0,"div",11),n(19,"div",6),c(20,"input",12),n(21,"i",13),d("click",function(){return s.togglePasswordVisibility()}),a(22),r()(),S(23,ge,2,0,"div",14)(24,ue,2,0,"div",11),n(25,"div",6)(26,"div",15),c(27,"input",16),n(28,"span",17),a(29,"8080"),r()()(),n(30,"div",18)(31,"a",19),a(32,"Forgot Password?"),r()(),n(33,"button",20),a(34,"Login"),r(),n(35,"button",21),a(36,"Register"),r(),n(37,"div",22)(38,"a",23),a(39,"Sign in with Demo User account? "),n(40,"span"),a(41,"Click Here"),r()()()()()),t&2){let m,b,E;l(6),p("formGroup",s.loginForm),l(12),p("ngIf",((m=s.loginForm.get("code"))==null?null:m.errors)&&(((m=s.loginForm.get("code"))==null?null:m.dirty)||((m=s.loginForm.get("code"))==null?null:m.touched))),l(2),p("type",s.showPassword?"text":"password"),l(2),F(s.showPassword?"visibility":"visibility_off"),l(),p("ngIf",((b=s.loginForm.get("password"))==null?null:b.hasError("required"))&&((b=s.loginForm.get("password"))==null?null:b.touched)),l(),p("ngIf",((E=s.loginForm.get("password"))==null?null:E.hasError("minlength"))&&((E=s.loginForm.get("password"))==null?null:E.touched))}},dependencies:[v,I,kt,Pt,Ct,vt,wt,yt,Et,Mt,Ot],styles:[".login-container[_ngcontent-%COMP%]{width:100%;height:25vh;color:#000;background-color:#000;position:relative;font-family:Poppins,sans-serif}.login-title[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:29px;font-size:32px;font-family:Poppins,sans-serif;color:#fff}.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:140px;position:absolute;left:29px;bottom:104px}body[_ngcontent-%COMP%]{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400}.login-container2[_ngcontent-%COMP%]{padding:30px;justify-content:center;height:75vh;width:100%;background:#fff}input[_ngcontent-%COMP%]{width:100%;border:0;border-bottom:2px solid #000;outline:none;padding:8px 0;font-size:16px;background-color:transparent;border-radius:0}.alert-danger[_ngcontent-%COMP%]{background:none;border:none;color:red;margin:0;padding:0}.verification-code[_ngcontent-%COMP%]::placeholder{font-size:16px!important;font-family:poppins}button[_ngcontent-%COMP%]{border:0;border-bottom:2px solid #000;color:#000;font-family:Poppins,sans-serif;font-weight:400;border-radius:0}.input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:0;bottom:15px}input[_ngcontent-%COMP%]::placeholder{font-size:20px;color:#000;font-family:Poppins,sans-serif;font-weight:500;border:none;border-radius:0}.input-group[_ngcontent-%COMP%]{border-radius:0%}.forgot-password-container[_ngcontent-%COMP%]{text-align:right;margin-bottom:20px}.forgot-password-link[_ngcontent-%COMP%]{color:#06c;text-decoration:none}.login-button[_ngcontent-%COMP%], .register-button[_ngcontent-%COMP%]{width:100%;padding:10px;border:none;border-radius:5px;margin-bottom:10px;background-color:orange;color:#fff;cursor:pointer;font-size:16px}.login-button[_ngcontent-%COMP%]:hover{background-color:#e59400}.register-button[_ngcontent-%COMP%]{background-color:#ddd;color:#000}.demo-user-container[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.demo-user-link[_ngcontent-%COMP%]{color:#000;text-decoration:none;font-size:.9em}.demo-user-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e59400}.input-group[_ngcontent-%COMP%]{position:relative;padding:8px 0}.input-label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;color:#000;font-size:16px}.input-field[_ngcontent-%COMP%]{width:100%;border:0;border-bottom:2px solid #000;font-size:44px;outline:none;padding:8px 0;font-size:16px;background-color:transparent}.select-arrow[_ngcontent-%COMP%]{position:absolute;right:0;top:50%;transform:translateY(-50%);pointer-events:none;color:#000}.forgot-password-link[_ngcontent-%COMP%]{display:block;margin-top:12px;text-align:right;color:#000;text-decoration:none;font-size:16px}"]});let o=e;return o})();var D=(()=>{let e=class e{constructor(i,t){this.authService=i,this.router=t}canActivate(i,t){return this.authService.getToken()?!0:(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)}};e.\u0275fac=function(t){return new(t||e)(P(C),P(_))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var At=(()=>{let e=class e{constructor(i,t){this.authService=i,this.router=t}canActivate(){return this.authService.getToken()?(this.router.navigate(["/"]),!1):!0}};e.\u0275fac=function(t){return new(t||e)(P(C),P(_))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var Nt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-not-found"]],standalone:!0,features:[f],decls:9,vars:0,consts:[[1,"not-found-container"],["routerLink","/"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"h1"),a(2,"404"),r(),n(3,"p"),a(4,"Oops! The page you're looking for isn't here."),r(),n(5,"p"),a(6,"You might have the wrong address, or the page may have moved."),r(),n(7,"a",1),a(8,"Back to home"),r()())},styles:[".not-found-container[_ngcontent-%COMP%]{text-align:center;padding:50px;margin-top:100px}.not-found-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:6em}.not-found-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}a[_ngcontent-%COMP%]{display:inline-block;margin-top:20px;padding:10px 20px;background-color:#007bff;color:#fff;border-radius:5px;text-decoration:none}a[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]});let o=e;return o})();var Ht=(()=>{let e=class e{constructor(){this.showPassword=!1}togglePasswordVisibility(){this.showPassword=!this.showPassword}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-register"]],standalone:!0,features:[f],decls:29,vars:2,consts:[[1,"login-container"],["href","#",1,"navbar-brand"],[1,"title"],[1,"login-title"],[1,"container"],[1,"otp-section"],[1,"otp-title"],[1,"otp-details"],[1,"otp-description"],[1,"phone-number"],[1,"otp-inputs"],["type","text","maxlength","1",1,"otp-input"],[1,"verify-button"],[1,"password-section"],[1,"input-group"],["id","password","placeholder","Password",1,"password-input",3,"type"],[1,"material-icons","toggle-icon",3,"click"],[1,"submit-button"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"a",1)(2,"h1",2),a(3,"NEW MEMBER"),r()(),n(4,"h2",3),a(5,"Register Now \u{1F44B}"),r()(),n(6,"div",4)(7,"div",5)(8,"h3",6),a(9,"Enter OTP"),r(),n(10,"div",7)(11,"p",8),a(12,"An 4 digit code has been sent to"),r(),n(13,"p",9),a(14,"+91 977 040 2243"),r()(),n(15,"div",10),c(16,"input",11)(17,"input",11)(18,"input",11)(19,"input",11),r(),n(20,"button",12),a(21,"Verify"),r()(),n(22,"div",13)(23,"div",14),c(24,"input",15),n(25,"i",16),d("click",function(){return s.togglePasswordVisibility()}),a(26),r()(),n(27,"button",17),a(28,"Submit"),r()()()),t&2&&(l(24),p("type",s.showPassword?"text":"password"),l(2),F(s.showPassword?"visibility":"visibility_off"))},styles:["body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{margin:0;padding:0;font-family:poppins,sans-serif}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:0%;width:100%;border:0;border-bottom:2px solid #000;font-size:44px;outline:none;padding:8px 0;font-size:16px;background-color:transparent;font-family:poppins,sans-serif;margin-bottom:25px}.container[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:20px;height:70vh;text-align:center}.login-container[_ngcontent-%COMP%]{height:30vh;background-color:#000;position:relative}.login-title[_ngcontent-%COMP%]{position:absolute;bottom:21px;left:24px;color:#fff}.title[_ngcontent-%COMP%]{position:absolute;bottom:61px;left:23px;font-size:28px;color:#ffb449}.title[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%]{color:FFB449}.otp-section[_ngcontent-%COMP%], .password-section[_ngcontent-%COMP%]{margin-top:20px}.otp-title[_ngcontent-%COMP%]{margin-bottom:10px;display:flex;font-size:24px;font-weight:600}.otp-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:baseline;align-items:baseline;gap:10px;margin-bottom:15px;font-weight:500}.otp-inputs[_ngcontent-%COMP%]{margin-bottom:20px}.otp-input[_ngcontent-%COMP%]{width:40px;height:40px;margin:0 5px;text-align:center;font-size:24px;border:none;background-color:#ffb449;color:#000}.verify-button[_ngcontent-%COMP%], .submit-button[_ngcontent-%COMP%]{width:90%;padding:10px;border:none;background-color:#ffb449;color:#fff;font-weight:500;font-size:18px;cursor:pointer;border-radius:5px}.verify-button[_ngcontent-%COMP%]:hover, .submit-button[_ngcontent-%COMP%]:hover{background-color:#cc8400}.password-label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.lock-icon[_ngcontent-%COMP%]{margin-right:10px}.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:8%}.password-input[_ngcontent-%COMP%]{width:calc(100% - 20px);margin:10px 0;padding-bottom:5px;border:none;border-bottom:2px solid #fff;background-color:transparent;color:#fff;font-size:18px}@media (min-width: 600px){.container[_ngcontent-%COMP%]{width:400px;margin-left:auto;margin-right:auto}}input[_ngcontent-%COMP%]::placeholder{font-size:16px;color:#000;font-family:Poppins,sans-serif;font-weight:500;border:none;border-radius:0}.password-input[_ngcontent-%COMP%]{flex-grow:1;padding:10px 45px 10px 10px;font-size:16px;border:1px solid #ccc;border-radius:4px;color:#000;position:relative}.toggle-icon[_ngcontent-%COMP%]{position:absolute;cursor:pointer}.toggle-icon[_ngcontent-%COMP%]{right:10px;bottom:31px}.submit-button[_ngcontent-%COMP%]{background-color:orange;color:#fff;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;font-size:16px;margin-top:10px}"]});let o=e;return o})();var Bt=(()=>{let e=class e{constructor(){this.selectedCountryConfig={hideCode:!0,hideName:!0},this.countryListConfig={hideCode:!0}}onCountryChange(i){console.log(i)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-verification"]],standalone:!0,features:[f],decls:34,vars:0,consts:[[1,"login-container"],["href","#",1,"navbar-brand"],[1,"title"],[1,"login-title"],[1,"main-container"],[1,"details"],["type","tel","id","phone","placeholder","Phone Number","name","name","required","",1,"form-control"],[1,"checkbox-group"],["type","checkbox","id","age","name","age","value","age"],["for","age"],["id","get-otp",1,"button"],[1,"divider"],[1,"whatsapp-button-container","col-12"],["type","button",1,"btn","btn-sm","whatsapp-button"],["src","https://dqqdyv927mezc.cloudfront.net/kheloyar/newdeposit/wa.svg","alt","WhatsApp",1,"whatsapp-img"],[1,"container"],[1,"col-12"],[1,"row"],[1,"bonus-offer"],[1,"bonus-offers"],[1,"bi","bi-gift-fill"],[1,"bonus-offers","b2"],[1,"offer-class"]],template:function(t,s){t&1&&(n(0,"div",0)(1,"a",1)(2,"h1",2),a(3,"NEW MEMBER"),r()(),n(4,"h2",3),a(5,"Register Now \u{1F44B}"),r()(),n(6,"div",4)(7,"span",5),a(8,"Phone Number"),r(),c(9,"input",6),n(10,"div",7),c(11,"input",8),n(12,"label",9),a(13,"I confirm thhat I am 18 years old or above and agree to the Terms and Conditions"),r()(),n(14,"button",10),a(15,"Get OTP"),r(),n(16,"div",11),a(17,"Or Register With"),r(),n(18,"div",12)(19,"button",13),c(20,"img",14),a(21," Get instant ID on WhatsApp "),r()(),n(22,"div",15)(23,"div",16)(24,"div",17)(25,"div",18)(26,"div",19),c(27,"i",20),n(28,"span"),a(29,"500% deposit bonus"),r()(),n(30,"div",21),c(31,"i",20),n(32,"span",22),a(33,"3% extra on daily deposit"),r()()()()()()())},dependencies:[v],styles:[".login-container[_ngcontent-%COMP%]{height:30vh;background-color:#000;position:relative}.login-title[_ngcontent-%COMP%]{position:absolute;bottom:21px;left:24px;color:#fff}.title[_ngcontent-%COMP%]{position:absolute;bottom:61px;left:23px;font-size:28px;color:#ffb449}.main-container[_ngcontent-%COMP%]{background-color:#fff;height:70vh;width:100%;padding:15px}.verify-container[_ngcontent-%COMP%]{background:#fff;width:100%;padding:20px;border-radius:8px;box-shadow:0 0 10px #0000001a;width:300px}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:5px;border:1px solid #ccc;box-sizing:border-box}.checkbox-group[_ngcontent-%COMP%]{margin:10px 0}.checkbox-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{margin-right:5px}.button[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:10px;border-radius:5px;border:none;color:#fff;cursor:pointer}#get-otp[_ngcontent-%COMP%]{background-color:#ff9800}#whatsapp[_ngcontent-%COMP%]{background-color:#25d366}.divider[_ngcontent-%COMP%]{text-align:center;margin:20px 0}.whatsapp-button-container[_ngcontent-%COMP%]{display:flex;margin-top:10px;justify-content:center;align-items:center;text-align:center;margin-bottom:40px}.whatsapp-img[_ngcontent-%COMP%]{width:24px;height:auto;margin-right:10px}.whatsapp-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:10px 20px;border-radius:6px;font-size:16px;color:#fff;background:linear-gradient(90deg,#25d366,#2ce648);border:none;outline:none;cursor:pointer;transition:background-color .3s ease}.whatsapp-button[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#21bd5c,#48e624)}.bonus-offers[_ngcontent-%COMP%]{width:157px;height:63px;background:linear-gradient(90deg,#ff0098,#8f05bd);border-radius:10px;color:#fff;display:flex;align-items:center}.b2[_ngcontent-%COMP%]{width:157px;height:63px;background:linear-gradient(90deg,#006b30,#48cd83);border-radius:10px;color:#fff;display:flex;align-items:center;line-height:1.1em}.offer-class[_ngcontent-%COMP%]{line-height:1.1em;width:100%}.bi-gift-fill[_ngcontent-%COMP%]{color:#fff;font-size:32px;margin:10px}.offer-buttons[_ngcontent-%COMP%]{display:flex}.bonus-offer[_ngcontent-%COMP%]{display:flex;gap:25px}"]});let o=e;return o})();var qt=[{path:"",canActivate:[D],component:jt},{path:"login",pathMatch:"full",canActivate:[At],component:Lt},{path:"register",pathMatch:"full",component:Ht},{path:"verify",pathMatch:"full",component:Bt},{path:"cricket",canActivate:[D],loadComponent:()=>import("./chunk-RX6DM545.mjs").then(o=>o.CricketComponent)},{path:"football",canActivate:[D],loadComponent:()=>import("./chunk-RX6DM545.mjs").then(o=>o.CricketComponent)},{path:"sportDetails/:matchcode",canActivate:[D],loadComponent:()=>import("./chunk-NCE6UPPA.mjs").then(o=>o.SportDetailsComponent)},{path:"reports",canActivate:[D],loadChildren:()=>import("./chunk-QUAOGJDP.mjs").then(o=>o.settingRouters)},{path:"**",pathMatch:"full",component:Nt}];var Gt=(o,e)=>{let i=X(C).getToken();if(o.url.includes("login"))return e(o);let t=`Bearer ${i}`,s=o.clone({setHeaders:{Authorization:t}});return e(s)};var Ut={providers:[ht(qt),q(lt()),It(),pt(),dt(),q(st([Gt]))]};var fe={providers:[mt()]},Wt=ot(Ut,fe);var he=()=>ct(Vt,Wt),kn=he;export{kn as a};
