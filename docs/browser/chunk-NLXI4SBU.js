import{a as T}from"./chunk-DAVOZLTC.js";import{a as U,b as q,k as j,m as P}from"./chunk-XNL2K3NE.js";import{k as V,l as k,m as I,n as S}from"./chunk-ZQS3S63H.js";import{Ab as y,Cb as D,D as L,Fb as h,Hb as B,Xa as m,Y as z,Ya as _,ba as $,fa as f,gb as v,ib as p,ja as E,ka as w,la as A,ma as G,mb as t,nb as e,o as R,ob as s,pb as F,rb as b,sb as x,zb as i}from"./chunk-JLVYC4P7.js";var O=(()=>{let n=class n{constructor(r){this.http=r,this.jsonUrl="/src/assets/JSON/cricket-bet.json",this.cricketData=[],this.apiUrl="https://api.betguru.net/game/inPlay"}getCricketBet(){return this.http.get(this.apiUrl).pipe(L(this.handleError))}handleError(r){return r.error instanceof U?(console.error("Network error:",r.error.message),R("Network error: Please check your internet connection.")):(console.error(`Backend returned code ${r.status}, body was: ${r.error}`),R("Server error: Please try again later."))}};n.\u0275fac=function(a){return new(a||n)($(q))},n.\u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();function nt(o,n){if(o&1){let c=F();t(0,"div",12),b("click",function(){let l=E(c).$implicit,d=x(2);return w(d.inPlayDetails(l.matchcode))}),t(1,"div",13)(2,"h5",14),i(3),e()(),t(4,"div",15)(5,"div",16)(6,"p",17),i(7,"1.34"),e(),t(8,"p",17),i(9,"1c+"),e()(),t(10,"div",16)(11,"p",18),i(12,"1.54"),e(),t(13,"p",19),i(14,"1cr+"),e()(),t(15,"div",16)(16,"p",18),i(17,"1.54"),e(),t(18,"p",19),i(19,"1cr+"),e()()()()}if(o&2){let c=n.$implicit,r=x(2);m(3),y(r.truncateTitle(c.title))}}function it(o,n){o&1&&(t(0,"div",20)(1,"div",1)(2,"p",21),i(3,"No Live Match Available"),e()()())}function ot(o,n){if(o&1&&(t(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h2",5),s(5,"img",6),i(6,"Cricket"),e()(),t(7,"div",7)(8,"div",8)(9,"ul")(10,"li"),i(11,"1"),e(),t(12,"li"),i(13,"x"),e(),t(14,"li"),i(15,"2"),e()()()()()(),t(16,"div",9),v(17,nt,20,1,"div",10)(18,it,4,0,"div",11),e()()),o&2){let c=x();m(17),p("ngForOf",c.cricketData),m(),p("ngIf",c.cricketData.length==0)}}function rt(o,n){if(o&1){let c=F();t(0,"div",24),b("click",function(){let l=E(c).$implicit,d=x(2);return w(d.inPlayDetails(l.matchcode))}),t(1,"div",3)(2,"div",13)(3,"h5",14),i(4),e()(),t(5,"div",15)(6,"div",16)(7,"h6"),i(8,"1.34"),e(),t(9,"h6"),i(10,"1c+"),e()(),t(11,"div",16)(12,"h5",25),i(13,"1.54"),e(),t(14,"h5",25),i(15,"1cr+"),e()()()()()}if(o&2){let c=n.$implicit;m(4),y(c.title)}}function at(o,n){o&1&&(t(0,"div",20)(1,"div",1)(2,"p",21),i(3,"No Match Available"),e()()())}function st(o,n){if(o&1&&(t(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h2",5),s(5,"img",22),i(6,"Football"),e()(),t(7,"div",7)(8,"div",8)(9,"ul")(10,"li"),i(11,"1"),e(),t(12,"li"),i(13,"x"),e(),t(14,"li"),i(15,"2"),e()()()()()(),v(16,rt,16,1,"div",23)(17,at,4,0,"div",11),e()),o&2){let c=x();m(16),p("ngForOf",c.footballData),m(),p("ngIf",c.footballData.length==0)}}var yt=(()=>{let n=class n{constructor(r,a,l){this.activatedRoute=r,this.BetService=a,this.router=l,this.currentSport="",this.cricketData=[],this.footballData=[],this.activatedRoute.params.subscribe(d=>{console.log(d),this.sport=d.sport})}ngOnInit(){this.BetService.getCricketBet().subscribe({next:r=>{if(r.gameList.length>0){let a=new Date,l=r.gameList.filter(u=>u.type==="CRICKET"&&new Date(u.time)<=a),d=r.gameList.filter(u=>u.type==="FOOTBALL"&&new Date(u.time)<=a);l.length>0&&(this.cricketData.push(...l),this.cricketData.sort((u,g)=>Number(new Date(u.time))-Number(new Date(g.time)))),d.length>0&&(this.footballData.push(...d),this.footballData.sort((u,g)=>Number(new Date(u.time))-Number(new Date(g.time))))}},error:r=>{console.error("Error fetching cricket bet:",r)}})}inPlayDetails(r){this.router.navigate([`/sportDetails/${r}`])}truncateTitle(r){return r.length>25?r.substring(0,25)+"...":r}};n.\u0275fac=function(a){return new(a||n)(_(j),_(O),_(P))},n.\u0275cmp=f({type:n,selectors:[["app-in-play"]],inputs:{sport:"sport"},standalone:!0,features:[D([O]),h],decls:2,vars:2,consts:[["class","card",4,"ngIf"],[1,"card"],[1,"card-header"],[1,"row"],[1,"col-5","header-first"],[2,"margin-top","5px"],["src","assets/ball.png","alt","...",1,"img-fluid",2,"margin","5px"],[1,"col-7"],[1,"second"],[1,"row-body"],["class","row",3,"click",4,"ngFor","ngForOf"],["class","col-12",4,"ngIf"],[1,"row",3,"click"],[1,"col-5"],[1,"first-body"],[1,"col-7","second-body","justify-content-end"],[1,"box-1"],[2,"line-height","0.2rem","margin-top","7px"],[2,"line-height","0.2rem","margin-top","5px"],[2,"line-height","0.2rem"],[1,"col-12"],[2,"text-align","center","margin-top","10px"],["src","assets/football-1.png","alt","...",1,"img-fluid",2,"margin","5px"],["class","row-body",3,"click",4,"ngFor","ngForOf"],[1,"row-body",3,"click"],[2,"line-height","0.5"]],template:function(a,l){a&1&&v(0,ot,19,2,"div",0)(1,st,18,2,"div",0),a&2&&(p("ngIf",l.sport=="cricket"),m(),p("ngIf",l.sport=="football"))},dependencies:[S,k,I],styles:[".card[_ngcontent-%COMP%]{border-radius:17.5px;border:none;padding-bottom:10px}h2[_ngcontent-%COMP%]{font-family:poppins,sans-serif!important}.header-first[_ngcontent-%COMP%]{padding-top:10px;display:flex;justify-content:space-between;align-items:center}.img-fluid[_ngcontent-%COMP%]{width:20px;height:20px}.header-second[_ngcontent-%COMP%]{margin-top:10px;color:#fff}.first-body[_ngcontent-%COMP%]{margin-left:0;margin-top:7px}.truncate[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}h5[_ngcontent-%COMP%]{margin-bottom:.2rem;font-family:Poppins;font-weight:900}.container-fluid[_ngcontent-%COMP%]{width:100%}p[_ngcontent-%COMP%]{padding-left:0;line-height:.5em;font-weight:700}.second-body[_ngcontent-%COMP%]{display:flex;justify-content:center}.second[_ngcontent-%COMP%]{padding-top:10px;justify-content:center;display:flex;font-size:24px;margin-right:15px;justify-content:end}h4[_ngcontent-%COMP%]{padding-top:2px}ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;color:#fff;gap:60px;font-size:24px}.card-body[_ngcontent-%COMP%]{margin-left:0;display:flex}.container[_ngcontent-%COMP%]{position:relative}.live[_ngcontent-%COMP%]{position:absolute;margin-top:7px;left:32%;width:40px;font-size:10px;margin-bottom:0}.col-md-6[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:20px}.card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:55px;height:50px;border-radius:50%}.custom-button[_ngcontent-%COMP%]{width:67px;margin-bottom:5px;display:flex;justify-content:center;align-items:center}.sports[_ngcontent-%COMP%]{display:flex;flex-direction:column}.justify-content-center[_ngcontent-%COMP%]{Display:flex;margin-top:4px}h6[_ngcontent-%COMP%]{font-size:12px}.mx-auto[_ngcontent-%COMP%]{align-self:baseline;gap:8px}.card-style[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:start;align-items:center;max-width:74px}.card-header[_ngcontent-%COMP%]{margin:0;padding:0;border:none;border-top-left-radius:17.5px;border-top-right-radius:17.5px;background:#ffb449;background:linear-gradient(90deg,#ffb449 41%,#000 41%)}.card-header-first[_ngcontent-%COMP%]{margin:0;padding:0}.box-1[_ngcontent-%COMP%]{border:none;border-radius:5px;margin-top:5px;border:1px solid #ddd;padding:5px;text-align:center;width:64px;height:41px;background:#a5d9fe;justify-content:center;align-items:center}.upcomming[_ngcontent-%COMP%]{margin-top:7px}.box-1-football[_ngcontent-%COMP%]{border:none;border-radius:5px;margin:2px;border:1px solid #ddd;padding:5px;text-align:center;width:100px;height:45px;background:#a5d9fe}.upcoming-box[_ngcontent-%COMP%]{display:flex;position:absolute;justify-content:center;align-items:center;left:5px;top:-10px;height:25px;font-size:12px}"]});let o=n;return o})();var H=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=f({type:n,selectors:[["app-footer"]],standalone:!0,features:[h],decls:166,vars:0,consts:[[1,"container",2,"color","#FFB449","margin-top","10px"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-5","border-top"],[1,"col","mb-3"],["href","/",1,"d-flex","align-items-center","mb-3","link-body-emphasis","text-decoration-none"],["width","40","height","32",1,"bi","me-2"],[0,"xlink","href","#bootstrap"],[1,"footer-1"],["src","assets/pb1.png",1,"image"],[1,"f-text"],[1,"col-12","mb-3"],[1,"bottom-div"],[1,"row"],[1,"col-6"],[1,"nav","flex-column",2,"color","white !important"],[1,"nav-item","mb-2"],["href","#",1,"nav-link","p-0","abc"],[1,"nav","flex-column"],[1,"resources-images"],[1,"img1"],["src","../../assets/footer-image/gaming.png","alt",""],[1,"img2"],["src","../../assets/footer-image/18.png","alt",""],[1,"footer-image"],[1,"footer-image-1"],["src","assets/footer-image/instagram.png","alt","..."],["src","assets/footer-image/twitter.png","alt","..."],["src","assets/footer-image/fb.png","alt","..."],["src","assets/footer-image/telegram.png","alt","..."],[1,"footer-image-2"],["src","assets/footer-image/bank.png","alt","..."],["src","assets/footer-image/Paytm.png","alt","..."],["src","assets/footer-image/netbanking.png","alt","..."],["src","assets/footer-image/upi.png","alt","..."],[1,"final-footer",2,"color","aliceblue"],[1,"footer-box"],[1,"image-container"],["src","assets/group-c/f-img1.png","alt","Slide 1"],[1,"box-text"],["src","assets/group-c/f-img2.png","alt","Slide 1"],["src","assets/group-c/a.png","alt","Slide 1",1,"big-img"],["src","assets/group-c/f-img3.png","alt","Slide 1"],["src","assets/group-c/f-img4.png","alt","Slide 1"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"footer",1)(2,"div",2)(3,"a",3),A(),t(4,"svg",4),s(5,"use",5),e()(),G(),t(6,"div",6),s(7,"img",7),t(8,"div",8),i(9,"\xA9 established in 2019. probo bet is the most trusted betting exchange and leading online casino."),e()()(),s(10,"div",2),t(11,"div",9)(12,"h3"),i(13,"GAME"),e(),t(14,"div",10)(15,"div",11)(16,"div",12)(17,"ul",13)(18,"li",14)(19,"a",15),i(20,"Online Sports Betting "),e()(),t(21,"li",14)(22,"a",15),i(23,"IPL Betting"),e()(),t(24,"li",14)(25,"a",15),i(26,"Football Betting"),e()(),t(27,"li",14)(28,"a",15),i(29,"Tennis Betting"),e()(),t(30,"li",14)(31,"a",15),i(32,"Live Casino Betting"),e()()()(),t(33,"div",12)(34,"ul",13)(35,"li",14)(36,"a",15),i(37,"Online Sports Betting "),e()(),t(38,"li",14)(39,"a",15),i(40,"IPL Betting"),e()(),t(41,"li",14)(42,"a",15),i(43,"Football Betting"),e()(),t(44,"li",14)(45,"a",15),i(46,"Tennis Betting"),e()(),t(47,"li",14)(48,"a",15),i(49,"Live Casino Betting"),e()()()()()()(),t(50,"div",9)(51,"h3"),i(52,"COMPANY"),e(),t(53,"div",10)(54,"div",11)(55,"div",12)(56,"ul",16)(57,"li",14)(58,"a",15),i(59,"About us "),e()(),t(60,"li",14)(61,"a",15),i(62,"Privacy Policy "),e()(),t(63,"li",14)(64,"a",15),i(65,"Responsible Gambling "),e()(),t(66,"li",14)(67,"a",15),i(68,"Sitemap"),e()(),t(69,"li",14)(70,"a",15),i(71," Rules & Regulation"),e()()()(),t(72,"div",12)(73,"ul",16)(74,"li",14)(75,"a",15),i(76,"About us "),e()(),t(77,"li",14)(78,"a",15),i(79,"Privacy Policy "),e()(),t(80,"li",14)(81,"a",15),i(82,"Responsible Gambling "),e()(),t(83,"li",14)(84,"a",15),i(85,"Sitemap"),e()(),t(86,"li",14)(87,"a",15),i(88," Rules & Regulation"),e()()()()()()(),t(89,"div",9)(90,"h3"),i(91,"RESOURCES"),e(),t(92,"div",10)(93,"div",11)(94,"div",12)(95,"ul",16)(96,"li",14)(97,"a",15),i(98,"Blog "),e()(),t(99,"li",14)(100,"a",15),i(101,"Fairplay News"),e()(),t(102,"li",14)(103,"a",15),i(104,"Sportsbook Betting"),e()(),t(105,"li",14)(106,"a",15),i(107,"Affiliate"),e()()()(),t(108,"div",12)(109,"ul",16)(110,"li",14)(111,"a",15),i(112,"FAQ"),e()(),t(113,"li",14)(114,"a",15),i(115,"Marketing"),e()(),t(116,"li",14)(117,"a",15),i(118,"Loyalty"),e()(),t(119,"li",14)(120,"a",15),i(121,"Contact Us"),e()()()()()()()(),t(122,"div",17)(123,"div",18),s(124,"img",19),e(),t(125,"div",20),s(126,"img",21),e()(),t(127,"div",22)(128,"div",23),s(129,"img",24)(130,"img",25)(131,"img",26)(132,"img",27),e(),t(133,"div",28)(134,"div"),s(135,"img",29),e(),t(136,"div"),s(137,"img",30),e(),t(138,"div"),s(139,"img",31),e(),t(140,"div"),s(141,"img",32),e()()()(),t(142,"div",33)(143,"h3"),i(144,"\xA9 2003 - 2024 probo bet India"),e()(),t(145,"div",34)(146,"div",35),s(147,"img",36),t(148,"p",37),i(149,"sports"),e()(),t(150,"div",35),s(151,"img",38),t(152,"p",37),i(153,"teen patti"),e()(),t(154,"div",35),s(155,"img",39),t(156,"p",37),i(157,"faizan"),e()(),t(158,"div",35),s(159,"img",40),t(160,"p",37),i(161,"live bets"),e()(),t(162,"div",35),s(163,"img",41),t(164,"p",37),i(165,"casino"),e()()())},styles:['.bottom-div[_ngcontent-%COMP%]{position:relative;padding-bottom:10px}.bottom-div[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:1px;background-image:linear-gradient(to right,#0a0a0a,#d1d1d1,#0a0a0a)}.image[_ngcontent-%COMP%]{width:120px;height:auto;margin-bottom:20px}.f-text[_ngcontent-%COMP%]{color:#eaeaea}.abc[_ngcontent-%COMP%]{color:#fff}.footer-image-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:42px;display:flex}.footer-image-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:54px;display:flex}@media screen and (max-width:480px){.footer-image-1[_ngcontent-%COMP%]{justify-content:space-between;padding:10px;display:flex}.footer-image-2[_ngcontent-%COMP%]{width:90%;display:flex;align-items:center;justify-content:space-between;gap:10px;margin:5px auto auto;padding-bottom:5px}.resources-images[_ngcontent-%COMP%]{width:90%;display:flex;justify-content:center;gap:20px;width:100%;align-items:center;position:relative;margin-bottom:8px;padding-bottom:15px}.resources-images[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:1px;background-image:linear-gradient(to right,#0a0a0a,#d1d1d1,#0a0a0a)}.img1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:140px}.img2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px;height:38px}.final-footer[_ngcontent-%COMP%]{text-align:center;font-size:13px;font-family:poppins,sans-serif;padding:10px 10px 130px}}@media screen and (max-width:768px){.footer-box[_ngcontent-%COMP%]{width:100%;margin:auto;display:flex;justify-content:center;gap:10px;align-items:flex-end;position:fixed;bottom:0;background-color:#030303;padding-bottom:10px;border-top:1px solid white;border-radius:4%}.box-text[_ngcontent-%COMP%]{font-family:poppins,sans-serif;font-weight:400;font-size:12px;margin-top:3px;cursor:pointer}.image-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;flex-direction:column;color:#fff;margin-top:10px;text-transform:capitalize;font-size:.9rem}.image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:8px;align-items:center}p[_ngcontent-%COMP%]{padding-left:0!important}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px;height:45px;display:flex;align-items:center;gap:10px;cursor:pointer}.big-img[_ngcontent-%COMP%]{width:65px!important;height:65px!important;cursor:pointer}}']});let o=n;return o})();var J=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=f({type:n,selectors:[["app-actors"]],standalone:!0,features:[h],decls:10,vars:0,consts:[[1,"container-fluid","marbo"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"actors"],["src","assets/actors/krushna.png","alt","Football"],["src","assets/actors/sudesh.png","alt","Football"],["src","assets/actors/tushar.png","alt","Football"],["src","assets/actors/vikrant.png","alt","Football"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"h2"),i(2,"Ambassadors"),e(),t(3,"div",1)(4,"div",2)(5,"div",3),s(6,"img",4)(7,"img",5)(8,"img",6)(9,"img",7),e()()()())},styles:[".actors[_ngcontent-%COMP%]{display:flex;gap:15px}h2[_ngcontent-%COMP%]{font-family:poppins,sans-serif!important}.actors[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:88.5px;height:88.5px;transition:transform .2s ease-in-out;border-radius:6%}.actors[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}@media screen and (max-width: 376px){.actors[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:78.5px;height:78.5px;transition:transform .2s ease-in-out;border-radius:6%}}"]});let o=n;return o})();var W=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=f({type:n,selectors:[["app-multi"]],standalone:!0,features:[h],decls:18,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"multi"],["src","assets/multi/multi1.png","alt","Football"],["src","assets/multi/multi2.png","alt","Football"],["src","assets/multi/multi4.png","alt","Football"],["src","assets/multi/multi5.png","alt","Football"],["src","assets/multi/multi6.png","alt","Football"],["src","assets/multi/multi7.png","alt","Football"],["src","assets/multi/multi8.png","alt","Football"],["src","assets/multi/multi9.png","alt","Football"],["src","assets/multi/multi10.png","alt","Football"],["src","assets/multi/multi11.png","alt","Football"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"h2"),i(2,"Multiplayer"),e(),t(3,"div",1)(4,"div",2)(5,"div",3),s(6,"img",4)(7,"img",5)(8,"img",6)(9,"img",7)(10,"img",8)(11,"img",9)(12,"img",10)(13,"img",11)(14,"img",12)(15,"img",13),e()()()(),s(16,"app-actors")(17,"app-footer"))},dependencies:[J,H],styles:[".multi[_ngcontent-%COMP%]{display:flex;gap:10px;overflow-x:auto;margin-bottom:15px}h2[_ngcontent-%COMP%]{font-family:poppins,sans-serif!important}.multi[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:101px;height:68px;transition:transform .2s ease-in-out;border-radius:6%}.multi[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]});let o=n;return o})();var X=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=f({type:n,selectors:[["app-game-show"]],standalone:!0,features:[h],decls:19,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"game-shows"],["src","assets/game-show/game1.png","alt","Football"],["src","assets/game-show/game2.png","alt","Football"],["src","assets/game-show/game3.png","alt","Football"],["src","assets/game-show/game4.png","alt","Football"],["src","assets/game-show/game5.png","alt","Football"],["src","assets/game-show/game6.png","alt","Football"],["src","assets/game-show/game7.png","alt","Football"],["src","assets/game-show/game8.png","alt","Football"],["src","assets/game-show/game9.png","alt","Football"],["src","assets/game-show/game10.png","alt","Football"],["src","assets/game-show/game11.png","alt","Football"],["src","assets/game-show/game12.png","alt","Football"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"h2"),i(2," Game Shows"),e(),t(3,"div",1)(4,"div",2)(5,"div",3),s(6,"img",4)(7,"img",5)(8,"img",6)(9,"img",7)(10,"img",8)(11,"img",9)(12,"img",10)(13,"img",11)(14,"img",12)(15,"img",13)(16,"img",14)(17,"img",15),e()()()(),s(18,"app-multi"))},dependencies:[W],styles:[".game-shows[_ngcontent-%COMP%]{display:flex;gap:10px;overflow-x:auto;margin-bottom:15px}h2[_ngcontent-%COMP%]{font-family:poppins,sans-serif!important}.game-shows[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px;height:115px;transition:transform .2s ease-in-out;border-radius:6%}.game-shows[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]});let o=n;return o})();function lt(o,n){if(o&1){let c=F();t(0,"div",14),b("click",function(){let l=E(c).$implicit,d=x();return w(d.inPlayDetails(l.matchcode))}),t(1,"div",5)(2,"h5"),i(3),e()(),t(4,"div",15)(5,"div",16)(6,"p",17),i(7,"1.34"),e(),t(8,"p"),i(9,"1c+"),e()(),t(10,"div",16)(11,"p",17),i(12,"1.34"),e(),t(13,"p"),i(14,"1c+"),e()(),t(15,"div",16)(16,"p",17),i(17,"1.34"),e(),t(18,"p"),i(19,"1c+"),e()()()()}if(o&2){let c=n.$implicit,r=x();m(3),y(r.truncateTitle(c.title))}}function ct(o,n){o&1&&(t(0,"div",18)(1,"h5",19),i(2,"No Live Match Yet..."),e()())}function mt(o,n){if(o&1&&(t(0,"div",4)(1,"div",5)(2,"h5"),i(3),e()(),t(4,"div",15)(5,"div",16)(6,"p",17),i(7,"1.34"),e(),t(8,"p"),i(9,"1c+"),e()(),t(10,"div",16)(11,"p",17),i(12,"1.34"),e(),t(13,"p"),i(14,"1c+"),e()(),t(15,"div",16)(16,"p",17),i(17,"1.34"),e(),t(18,"p"),i(19,"1c+"),e()()()()),o&2){let c=n.$implicit,r=x();m(3),y(r.truncateTitle(c.title))}}function dt(o,n){o&1&&(t(0,"div",18)(1,"h5",19),i(2,"No upcoming Match Yet..."),e()())}function pt(o,n){if(o&1&&(t(0,"div",4)(1,"div",5)(2,"h5"),i(3),e()(),t(4,"div",15)(5,"div",16)(6,"p",17),i(7,"1.34"),e(),t(8,"p"),i(9,"1c+"),e()(),t(10,"div",16)(11,"p",17),i(12,"1.34"),e(),t(13,"p"),i(14,"1c+"),e()(),t(15,"div",16)(16,"p",17),i(17,"1.34"),e(),t(18,"p"),i(19,"1c+"),e()()()()),o&2){let c=n.$implicit,r=x();m(3),y(r.truncateTitle(c.title))}}function gt(o,n){o&1&&(t(0,"div",18)(1,"h5",19),i(2,"No Live Match Yet..."),e()())}function ft(o,n){if(o&1&&(t(0,"div",4)(1,"div",5)(2,"h5"),i(3),e()(),t(4,"div",15)(5,"div",16)(6,"p",17),i(7,"1.34"),e(),t(8,"p"),i(9,"1c+"),e()(),t(10,"div",16)(11,"p",17),i(12,"1.34"),e(),t(13,"p"),i(14,"1c+"),e()(),t(15,"div",16)(16,"p",17),i(17,"1.34"),e(),t(18,"p"),i(19,"1c+"),e()()()()),o&2){let c=n.$implicit,r=x();m(3),y(r.truncateTitle(c.title))}}function ht(o,n){o&1&&(t(0,"div",18)(1,"h5",19),i(2,"No Live Match Yet..."),e()())}var Lt=(()=>{let n=class n{constructor(r,a,l){this.sportService=r,this.BetService=a,this.router=l,this.cricketMatch=[],this.cricketData=[],this.footballData=[],this.upcomingCricketData=[]}ngOnInit(){this.cricketBetSubscription=this.BetService.getCricketBet().subscribe({next:r=>{if(console.log(r),r.gameList.length>0){let a=new Date,l=r.gameList.filter(g=>g.type==="CRICKET"&&new Date(g.time)<=a),d=r.gameList.filter(g=>g.type==="CRICKET"&&new Date(g.time)>=a);console.log(d);let u=r.gameList.filter(g=>g.type==="FOOTBALL"&&new Date(g.time)<=a);l.length>0&&(this.cricketData.push(...l.slice(0,2)),this.cricketData.sort((g,M)=>Number(new Date(g.time))-Number(new Date(M.time)))),d.length>0&&(this.upcomingCricketData.push(...d.slice(0,2)),this.upcomingCricketData.sort((g,M)=>Number(new Date(g.time))-Number(new Date(M.time)))),u.length>0&&(this.cricketData.push(...l.slice(0,2)),this.footballData.sort((g,M)=>Number(new Date(g.time))-Number(new Date(M.time))))}},error:r=>{console.error("Error fetching cricket bet:",r)}})}ngOnDestroy(){this.cricketBetSubscription&&this.cricketBetSubscription.unsubscribe()}truncateTitle(r){return r.length>25?r.substring(0,25)+"...":r}inPlayDetails(r){this.router.navigate([`/sportDetails/${r}`])}};n.\u0275fac=function(a){return new(a||n)(_(T),_(O),_(P))},n.\u0275cmp=f({type:n,selectors:[["app-sports"]],standalone:!0,features:[D([T]),h],decls:86,vars:8,consts:[[1,"sport-main"],[1,"card"],[1,"card-header"],["type","button",1,"btn","btn-sm","btn-danger","rounded-pill","upcoming-box"],[1,"row"],[1,"col-5"],["src","assets/ball.png","alt","...",1,"img-fluid"],[1,"col-7"],[1,"row-body"],["class","row",3,"click",4,"ngFor","ngForOf"],["class","col-12",4,"ngIf"],["type","button",1,"btn","btn-sm","btn-success","rounded-pill","upcoming-box"],["class","row",4,"ngFor","ngForOf"],["src","assets/football-1.png","alt","...",1,"img-fluid"],[1,"row",3,"click"],[1,"col-7","second-body","justify-content-end"],[1,"box-1"],[2,"line-height","0.2rem","margin-top","10px"],[1,"col-12"],[2,"align-items","center","justify-content","center","display","flex","margin-top","10px"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),i(4,"Live"),e(),t(5,"div",4)(6,"div",5)(7,"h2"),s(8,"img",6),i(9,"Cricket"),e()(),t(10,"div",7)(11,"ul")(12,"li"),i(13,"1"),e(),t(14,"li"),i(15,"x"),e(),t(16,"li"),i(17,"2"),e()()()()(),t(18,"div",8),v(19,lt,20,1,"div",9)(20,ct,3,0,"div",10),s(21,"hr"),e()(),t(22,"div",1)(23,"div",2)(24,"button",11),i(25,"Upcoming"),e(),t(26,"div",4)(27,"div",5)(28,"h2"),s(29,"img",6),i(30,"Cricket"),e()(),t(31,"div",7)(32,"ul")(33,"li"),i(34,"1"),e(),t(35,"li"),i(36,"x"),e(),t(37,"li"),i(38,"2"),e()()()()(),t(39,"div",8),v(40,mt,20,1,"div",12)(41,dt,3,0,"div",10),s(42,"hr"),e()(),t(43,"div",1)(44,"div",2)(45,"button",3),i(46,"Live"),e(),t(47,"div",4)(48,"div",5)(49,"h2"),s(50,"img",13),i(51,"Football"),e()(),t(52,"div",7)(53,"ul")(54,"li"),i(55,"1"),e(),t(56,"li"),i(57,"x"),e(),t(58,"li"),i(59,"2"),e()()()()(),t(60,"div",8),v(61,pt,20,1,"div",12)(62,gt,3,0,"div",10),s(63,"hr"),e()(),t(64,"div",1)(65,"div",2)(66,"button",11),i(67,"Upcoming"),e(),t(68,"div",4)(69,"div",5)(70,"h2"),s(71,"img",13),i(72,"Football"),e()(),t(73,"div",7)(74,"ul")(75,"li"),i(76,"1"),e(),t(77,"li"),i(78,"x"),e(),t(79,"li"),i(80,"2"),e()()()()(),t(81,"div",8),v(82,ft,20,1,"div",12)(83,ht,3,0,"div",10),s(84,"hr"),e()()(),s(85,"app-game-show")),a&2&&(m(19),p("ngForOf",l.cricketData),m(),p("ngIf",l.cricketData.length==0),m(20),p("ngForOf",l.upcomingCricketData),m(),p("ngIf",l.upcomingCricketData.length==0),m(20),p("ngForOf",l.cricketData),m(),p("ngIf",l.cricketData.length==0),m(20),p("ngForOf",l.cricketData),m(),p("ngIf",l.cricketData.length==0))},dependencies:[X,S,k,I],styles:[".cards-container[_ngcontent-%COMP%], .cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:100%}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:30%}.cards-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .left-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center}.second-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{line-height:.6em}.card[_ngcontent-%COMP%]{border-radius:10px;border:none;margin-top:20px}.header-first[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:40px;margin-top:6px}.img-fluid[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:5px}.container-fluid[_ngcontent-%COMP%]{width:100%}.header-second[_ngcontent-%COMP%]{color:#fff}.first-header[_ngcontent-%COMP%]{padding-left:3px}h5[_ngcontent-%COMP%]{margin-top:5px;padding-left:7px;margin-left:0;line-height:1.2em;font-family:Poppins,sans-serif;font-weight:600;font-size:14px}.cricketdate[_ngcontent-%COMP%]{font-family:Poppins;font-size:small;padding-left:20px;justify-content:center;margin-top:5px}p[_ngcontent-%COMP%]{padding-left:0;line-height:.5em;font-weight:900}h2[_ngcontent-%COMP%]{font-family:poppins,sans-serif!important}.second[_ngcontent-%COMP%]{justify-content:center;display:flex;font-size:24px;margin-right:15px;justify-content:end}span[_ngcontent-%COMP%]{justify-content:center;color:#fff;font-size:24px}.text-header-first[_ngcontent-%COMP%]{align-items:center;justify-content:center}ul[_ngcontent-%COMP%]{max-width:300px;margin-top:7px;list-style-type:none;color:#fff;font-size:24px}.card-body[_ngcontent-%COMP%]{margin-left:0;display:flex;height:70px}.container[_ngcontent-%COMP%]{position:relative}@keyframes _ngcontent-%COMP%_blink{0%{opacity:1}to{opacity:0}}.col-md-6[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:20px}.card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:55px;height:50px;border-radius:50%}.custom-button[_ngcontent-%COMP%]{width:67px;height:25px;margin-bottom:5px;display:flex;justify-content:center;align-items:center}.sports[_ngcontent-%COMP%]{display:flex;flex-direction:column}.justify-content-center[_ngcontent-%COMP%]{Display:flex;margin-top:4px}h6[_ngcontent-%COMP%]{font-size:12px}h2[_ngcontent-%COMP%]{margin-top:10px}.mx-auto[_ngcontent-%COMP%]{align-self:baseline;gap:8px}.card-style[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:start;align-items:center;max-width:74px}@media (max-width: 576px){.container-fluid[_ngcontent-%COMP%]{width:390px}h2[_ngcontent-%COMP%]{margin-top:10px}}li[_ngcontent-%COMP%]{margin-top:10px}ul[_ngcontent-%COMP%]{max-width:300px;margin-top:7px;gap:57px;display:flex;list-style-type:none;color:#fff;justify-content:center;align-items:center;font-size:24px}@media screen and (max-width:390px){ul[_ngcontent-%COMP%]{max-width:300px;margin-top:7px;gap:55px;padding-right:20px;display:flex;list-style-type:none;color:#fff;justify-content:center;align-items:center;font-size:24px}}.row[_ngcontent-%COMP%]{margin-top:0;padding-top:10px}.row-body-upcomming[_ngcontent-%COMP%]{height:80px}.row-body-football[_ngcontent-%COMP%]{height:60px}.card-header[_ngcontent-%COMP%]{margin:0;padding:0;background:#ffb449;background:linear-gradient(90deg,#ffb449 41%,#000 41%)}.card-header-first[_ngcontent-%COMP%]{margin:0;padding:0}.main-box[_ngcontent-%COMP%]{border:1px solid #ddd;padding:5px;text-align:center;height:50px;display:flex;max-width:300px}.box-1[_ngcontent-%COMP%]{border:none;border-radius:5px;border:1px solid #ddd;text-align:center;width:64px;height:50px;background:#a5d9fe}.box-1-football[_ngcontent-%COMP%], .box-1-upcomming[_ngcontent-%COMP%]{border:none;border-radius:5px;margin:2px;border:1px solid #ddd;padding:5px;text-align:center;width:100px;height:45px;background:#a5d9fe}.upcomming[_ngcontent-%COMP%]{margin-top:7px}.upcoming-box[_ngcontent-%COMP%]{display:flex;position:absolute;justify-content:center;align-items:center;left:5px;top:-10px;height:25px;font-size:12px}@media screen and (min-width: 480px){.box-1[_ngcontent-%COMP%]{border:none;border-radius:5px;border:1px solid #ddd;text-align:center;width:50px;height:41px;background:#a5d9fe}h2[_ngcontent-%COMP%]{margin-top:10px}}"]});let o=n;return o})();var Z=o=>({active:o}),qt=(()=>{let n=class n{constructor(r,a){this.router=r,this.activatedRoute=a}navigateToSport(r){this.router.navigate(["/"+r])}isActive(r){return this.router.url.includes(r)}getCurrentRouteParams(){let r=this.activatedRoute.snapshot,a=r.params.sport;console.log("Current Sport:",a);let l=r.queryParams;console.log("Query Parameters:",l)}};n.\u0275fac=function(a){return new(a||n)(_(P),_(j))},n.\u0275cmp=f({type:n,selectors:[["app-games"]],standalone:!0,features:[h],decls:46,vars:6,consts:[[1,"container-fluid"],[1,"col-12"],[1,"row"],[1,"game-box"],[1,"image-container"],[1,"image-wrapper",3,"ngClass","click"],["src","assets/group-b/f.png","alt","Cricket"],[1,"image-label"],["src","assets/group-b/b.png","alt","Football"],[1,"image-wrapper"],["src","assets/group-b/j.png","alt","Football"],["src","assets/group-b/h.png","alt","Football"],["src","assets/group-b/d.png","alt","Football"],["src","assets/group-b/e.png","alt","Football"],["src","assets/group-b/g.png","alt","Football"],["src","assets/group-b/c.png","alt","Football"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"h2"),i(2,"Games"),e(),t(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5),b("click",function(){return l.navigateToSport("cricket")}),s(8,"img",6),e(),t(9,"div",7),i(10,"Cricket"),e()(),t(11,"div",4)(12,"div",5),b("click",function(){return l.navigateToSport("football")}),s(13,"img",8),e(),t(14,"div",7),i(15,"Football"),e()(),t(16,"div",4)(17,"div",9),s(18,"img",10),e(),t(19,"div",7),i(20,"Tennis"),e()(),t(21,"div",4)(22,"div",9),s(23,"img",11),e(),t(24,"div",7),i(25,"Basketball"),e()(),t(26,"div",4)(27,"div",9),s(28,"img",12),e(),t(29,"div",7),i(30,"Boxing"),e()(),t(31,"div",4)(32,"div",9),s(33,"img",13),e(),t(34,"div",7),i(35,"Wrestling"),e()(),t(36,"div",4)(37,"div",9),s(38,"img",14),e(),t(39,"div",7),i(40,"Riding"),e()(),t(41,"div",4)(42,"div",9),s(43,"img",15),e(),t(44,"div",7),i(45,"Table"),e()()()()()()),a&2&&(m(7),p("ngClass",B(2,Z,l.isActive("cricket"))),m(5),p("ngClass",B(4,Z,l.isActive("football"))))},dependencies:[S,V],styles:[".game-box[_ngcontent-%COMP%]{display:flex;overflow-x:auto}.row[_ngcontent-%COMP%]{margin-bottom:20px}.image-container[_ngcontent-%COMP%]{flex:0 0 auto;margin-right:20px;text-align:center}.image-wrapper[_ngcontent-%COMP%]{position:relative;width:80px;height:80px;background-color:#1c1c1e;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:5px}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px;height:40px}.image-label[_ngcontent-%COMP%]{color:#f0f8ff;justify-content:center;display:flex;font-size:12px;font-family:poppins,sans-serif}h2[_ngcontent-%COMP%]{font-family:poppins,sans-serif}@media screen and (max-width: 480px){.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.image-wrapper[_ngcontent-%COMP%]{width:60px;height:60px}}.dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff;text-decoration:none;background-color:#00a65a;outline:0}.image-wrapper.active[_ngcontent-%COMP%]{border:none;background-color:#4e4e4e}"]});let o=n;return o})();var N=function(o){return o[o.State=0]="State",o[o.Transition=1]="Transition",o[o.Sequence=2]="Sequence",o[o.Group=3]="Group",o[o.Animate=4]="Animate",o[o.Keyframes=5]="Keyframes",o[o.Style=6]="Style",o[o.Trigger=7]="Trigger",o[o.Reference=8]="Reference",o[o.AnimateChild=9]="AnimateChild",o[o.AnimateRef=10]="AnimateRef",o[o.Query=11]="Query",o[o.Stagger=12]="Stagger",o}(N||{}),Kt="*";function Qt(o,n=null){return{type:N.Sequence,steps:o,options:n}}function Ht(o){return{type:N.Style,styles:o,offset:null}}var tt=class{constructor(n=0,c=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=n+c}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let c=n=="start"?this._onStartFns:this._onDoneFns;c.forEach(r=>r()),c.length=0}},et=class{constructor(n){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=n;let c=0,r=0,a=0,l=this.players.length;l==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(d=>{d.onDone(()=>{++c==l&&this._onFinish()}),d.onDestroy(()=>{++r==l&&this._onDestroy()}),d.onStart(()=>{++a==l&&this._onStart()})}),this.totalTime=this.players.reduce((d,u)=>Math.max(d,u.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let c=n*this.totalTime;this.players.forEach(r=>{let a=r.totalTime?Math.min(1,c/r.totalTime):1;r.setPosition(a)})}getPosition(){let n=this.players.reduce((c,r)=>c===null||r.totalTime>c.totalTime?r:c,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let c=n=="start"?this._onStartFns:this._onDoneFns;c.forEach(r=>r()),c.length=0}},Jt="!";export{O as a,yt as b,Lt as c,qt as d,N as e,Kt as f,Qt as g,Ht as h,tt as i,et as j,Jt as k};
