import{c as S,d as M,f as O,h as N,i as T,m as h,n as x,o as _,r as F,s as y}from"./chunk-6BXYBRKA.js";import{l as v,n as E}from"./chunk-ZQS3S63H.js";import{Ab as s,Fb as C,Gb as b,Xa as a,fa as u,gb as p,ib as m,mb as t,nb as e,ob as f,rb as g,zb as n}from"./chunk-JLVYC4P7.js";function P(i,o){if(i&1&&(t(0,"option",15),n(1),e()),i&2){let l=o.$implicit;m("value",l.value),a(),s(l.label)}}function A(i,o){if(i&1&&(t(0,"tr")(1,"td"),n(2),e(),t(3,"td"),n(4),e(),t(5,"td"),n(6),e(),t(7,"td"),n(8),e()()),i&2){let l=o.$implicit;a(2),s(l.transactionNo),a(2),s(l.amount),a(2),s(l.status),a(2),s(l.dateTime)}}var w=()=>({standalone:!0}),B=(()=>{let o=class o{constructor(){this.selectedOption="",this.options=[{value:"SETTLED",label:"SETTLED"},{value:"MATCHED",label:"MATCHED"},{value:"CANCEL",label:"CANCEL"},{value:"VOIDED",label:"VOIDED"},{value:"LAPSED",label:"LAPSED"},{value:"UN-MATCHED",label:"UN-MATCHED"}],this.transactions=[{transactionNo:"Colombian Primera A	",amount:100.5,status:"Completed",dateTime:"2024-02-26 10:30:00"},{transactionNo:"CONMEBOL Copa Libertadores	",amount:200.75,status:"Pending",dateTime:"2024-02-26 11:45:00"},{transactionNo:"Bolivian Liga de Futbol Profesional	",amount:50.2,status:"Failed",dateTime:"2024-02-26 13:15:00"},{transactionNo:"CONCACAF Champions League	",amount:300,status:"Completed",dateTime:"2024-02-26 14:20:00"},{transactionNo:"TRX005",amount:150.8,status:"Pending",dateTime:"2024-02-26 15:45:00"}]}onSelectChange(d){let r=d.target.value;console.log("Selected Value:",r)}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=u({type:o,selectors:[["app-results"]],standalone:!0,features:[C],decls:31,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"bet-details"],[1,"mb-3"],["for","order-type"],["aria-label","small select example",1,"form-select","form-select-sm","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","date",1,"form-control","form-control-sm"],[1,"col-12","d-flex","justify-content-center",2,"margin-top","10px"],["type","submit",1,"btn","btn-warning","btn-block",2,"margin-top","10px"],[1,"table-responsive","withdraw-table"],[1,"table","table-dark"],[2,"white-space","nowrap"],[4,"ngFor","ngForOf"],[3,"value"]],template:function(r,c){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form")(5,"div",4)(6,"label",5),n(7,"Fancy"),e(),t(8,"select",6),g("ngModelChange",function(D){return c.selectedOption=D}),p(9,P,2,2,"option",7),e()(),t(10,"div",4)(11,"label",5),n(12,"Start Date"),e(),f(13,"input",8),e(),t(14,"div",9)(15,"button",10),n(16,"Load Report"),e()()()(),t(17,"div",11)(18,"table",12)(19,"thead")(20,"tr",13)(21,"th"),n(22,"Transaction No"),e(),t(23,"th"),n(24,"Amount"),e(),t(25,"th"),n(26,"Status"),e(),t(27,"th"),n(28,"Date & Time"),e()()(),t(29,"tbody"),p(30,A,9,4,"tr",14),e()()()()()()),r&2&&(a(8),m("ngModel",c.selectedOption)("ngModelOptions",b(4,w)),a(),m("ngForOf",c.options),a(21),m("ngForOf",c.transactions))},dependencies:[E,v,F,T,x,_,h,S,M,N,O,y],styles:[".bet-details[_ngcontent-%COMP%]{font-family:poppins}.form-select[_ngcontent-%COMP%]{background-color:#222c3b;color:#fff}.load-report[_ngcontent-%COMP%]{color:#fff;width:100%;background-color:#2dc3e8}.btn-warning[_ngcontent-%COMP%]{background-color:#ffb449}.select[_ngcontent-%COMP%]{color:#fff}.form-control[_ngcontent-%COMP%]{background-color:#222c3b;color:#fff}tr[_ngcontent-%COMP%]{white-space:nowrap}label[_ngcontent-%COMP%]{margin:2px;color:#fff;font-family:poppins,sans-serif;font-weight:400}"]});let i=o;return i})();export{B as ResultsComponent};
