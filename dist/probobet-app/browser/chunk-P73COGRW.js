import{l as b,o as w}from"./chunk-VOCCCTMF.js";import{Bb as g,Mb as n,Nb as r,Tb as f,Za as o,fa as d,ib as m,kb as p,sb as t,tb as e}from"./chunk-NIQAK5NP.js";function x(a,i){if(a&1&&(t(0,"table",7)(1,"tbody")(2,"tr",8)(3,"th"),n(4,"Login Date & Time"),e(),t(5,"td"),n(6),e()(),t(7,"tr",8)(8,"th"),n(9,"Login Status"),e(),t(10,"td"),n(11),e()(),t(12,"tr",8)(13,"th"),n(14,"IP Address"),e(),t(15,"td"),n(16),e()(),t(17,"tr",8)(18,"th"),n(19,"Device Info"),e(),t(20,"td"),n(21),e()(),t(22,"tr",8)(23,"th"),n(24,"Website"),e(),t(25,"td"),n(26),e()()()()),a&2){let l=i.$implicit;o(6),r(l.loginDateTime),o(5),r(l.loginStatus),o(5),r(l.ipAddress),o(5),r(l.deviceInfo),o(5),r(l.website)}}var S=(()=>{let i=class i{constructor(){this.loginData=[{loginDateTime:"2024-03-12 08:30:00",loginStatus:"Successful",ipAddress:"192.168.0.1",deviceInfo:"Chrome on Windows 10",website:"example.com"},{loginDateTime:"2024-03-11 18:45:00",loginStatus:"Failed",ipAddress:"192.168.0.2",deviceInfo:"Firefox on macOS",website:"example.com"},{loginDateTime:"2024-03-10 12:15:00",loginStatus:"Successful",ipAddress:"192.168.0.3",deviceInfo:"Safari on iOS",website:"example.com"},{loginDateTime:"2024-03-09 09:20:00",loginStatus:"Successful",ipAddress:"192.168.0.4",deviceInfo:"Edge on Windows 11",website:"example.com"},{loginDateTime:"2024-03-08 14:55:00",loginStatus:"Failed",ipAddress:"192.168.0.5",deviceInfo:"Firefox on Ubuntu",website:"example.com"}]}goBack(){window.history.back()}};i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=d({type:i,selectors:[["app-activity-logs"]],standalone:!0,features:[f],decls:8,vars:1,consts:[[1,"container"],["src",".././../../../assets/arrow.png","alt","...",1,"img-fluid",3,"click"],[1,"col-12"],[1,"row"],[1,"note"],[1,"table-responsive","withdraw-table"],["class","table table-dark",4,"ngFor","ngForOf"],[1,"table","table-dark"],[2,"white-space","nowrap"]],template:function(s,c){s&1&&(t(0,"div",0)(1,"img",1),g("click",function(){return c.goBack()}),e(),t(2,"div",2)(3,"div",3)(4,"p",4),n(5,"User Activities(Last 15 Logins) "),e(),t(6,"div",5),m(7,x,27,5,"table",6),e()()()()),s&2&&(o(7),p("ngForOf",c.loginData))},dependencies:[w,b],styles:["tr[_ngcontent-%COMP%]{background-color:#020c1b}.withdraw-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%], .withdraw-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:2px solid gray}.withdraw-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff!important;border:2px solid gray;font-family:poppins,sans-serif;font-weight:400!important}.withdraw-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .withdraw-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%;white-space:nowrap}.withdrow-back[_ngcontent-%COMP%]{position:absolute;left:10px;margin-top:5px}.note[_ngcontent-%COMP%]{color:#ffb449;padding-top:20px;font-family:poppins,sans-serif;font-weight:700;font-size:18px}.withdraw-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#fff!important;border:2px solid gray;background-color:#000;font-family:poppins,sans-serif;font-weight:400!important;white-space:nowrap}"]});let a=i;return a})();export{S as ActivityLogsComponent};
