import{l as x,n as v}from"./chunk-ZQS3S63H.js";import{Ab as l,Fb as b,Xa as r,Y as s,Ya as f,fa as p,gb as u,ib as g,mb as e,nb as t,ob as d,zb as n}from"./chunk-JLVYC4P7.js";var h=(()=>{let i=class i{constructor(){}generateDummyData(){let m=[];for(let o=1;o<=20;o++)m.push({voucherID:"Voucher"+o,marketID:"Market"+o,settledDate:"2024-02-"+(o<10?"0"+o:o)+" 12:00:00",narration:"Transaction "+o,debit:"100",credit:"100",runningBalance:"1000"});return m}};i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();function y(a,i){if(a&1&&(e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),n(4),t(),e(5,"td"),n(6),t(),e(7,"td",14),n(8),t(),e(9,"td",15),n(10),t(),e(11,"td",16),n(12),t(),e(13,"td",16),n(14),t()()),a&2){let c=i.$implicit;r(2),l(c.voucherID),r(2),l(c.marketID),r(2),l(c.settledDate),r(2),l(c.narration),r(2),l(c.debit),r(2),l(c.credit),r(2),l(c.runningBalance)}}var M=(()=>{let i=class i{constructor(m){this.dataService=m}ngOnInit(){this.transactions=this.dataService.generateDummyData()}};i.\u0275fac=function(o){return new(o||i)(f(h))},i.\u0275cmp=p({type:i,selectors:[["app-accounts-statement"]],standalone:!0,features:[b],decls:36,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"bet-details"],[1,"mb-3"],["for","order-type"],["type","date",1,"form-control","form-control-sm"],[1,"col-12","d-flex","justify-content-center",2,"margin-top","10px"],["type","submit",1,"btn","btn-warning","btn-block",2,"margin-top","10px"],[1,"table-responsive"],[1,"table","table-dark"],[1,"table-account",2,"white-space","nowrap"],[1,"table-group-divider"],[4,"ngFor","ngForOf"],[2,"color","blue"],[2,"color","red"],[2,"color","green"]],template:function(o,S){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form")(5,"div",4)(6,"label",5),n(7,"Start Date"),t(),d(8,"input",6),t(),e(9,"div",4)(10,"label",5),n(11,"End Date"),t(),d(12,"input",6),t(),e(13,"div",7)(14,"button",8),n(15,"Load Report"),t()()()()(),e(16,"div",9)(17,"table",10)(18,"thead")(19,"tr",11)(20,"th"),n(21,"Voucher ID"),t(),e(22,"th"),n(23,"Market ID"),t(),e(24,"th"),n(25,"Settled Date"),t(),e(26,"th"),n(27,"Narration"),t(),e(28,"th"),n(29,"Debit"),t(),e(30,"th"),n(31,"Credit"),t(),e(32,"th"),n(33,"Running Balance"),t()()(),e(34,"tbody",12),u(35,y,15,7,"tr",13),t()()()()()),o&2&&(r(35),g("ngForOf",S.transactions))},dependencies:[v,x],styles:[".bet-details[_ngcontent-%COMP%]{font-family:poppins}.form-select[_ngcontent-%COMP%]{background-color:#222c3b;color:#fff}.load-report[_ngcontent-%COMP%]{color:#fff;width:100%;background-color:#2dc3e8}.btn-warning[_ngcontent-%COMP%]{background-color:#ffb449}.select[_ngcontent-%COMP%]{color:#fff}.form-control[_ngcontent-%COMP%]{background-color:#222c3b;color:#fff}.table-responsive[_ngcontent-%COMP%]{margin-top:20px}label[_ngcontent-%COMP%]{margin:2px;color:#fff;font-family:poppins,sans-serif;font-weight:400}.table-account[_ngcontent-%COMP%]{font-size:12px;font-family:poppins,sans-serif;font-weight:400!important}tr[_ngcontent-%COMP%]{white-space:nowrap}"]});let a=i;return a})();export{M as AccountsStatementComponent};
