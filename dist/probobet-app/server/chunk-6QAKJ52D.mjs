import './polyfills.server.mjs';
import{a as y,b as J}from"./chunk-KVMD76GK.mjs";import{a as V,b as p,c as U,d as R,e as k,g as _,i as X,j as z,k as H,l as G,m as K,n as Z,o as $,q as j,t as L}from"./chunk-F4SZ26YD.mjs";import{n as B,o as q,p as D}from"./chunk-D4TNMW5M.mjs";import{Db as n,Eb as u,Jb as W,La as F,Wa as a,ca as M,fb as s,ga as I,ha as T,hb as c,jb as v,mb as e,nb as t,ob as b,rb as A,tb as g,ub as h}from"./chunk-INNBRVLS.mjs";import"./chunk-VVCT4QZE.mjs";function Q(i,m){i&1&&(e(0,"div",42),n(1,"Holder name is required"),t())}function Y(i,m){i&1&&(e(0,"div",42),n(1,"Holder name should contain only alphabets"),t())}function tt(i,m){if(i&1&&(e(0,"div",12)(1,"label",40),n(2,"Holder Name"),t(),b(3,"input",41),s(4,Q,2,0,"div",32)(5,Y,2,0,"div",32),t()),i&2){let r=h(),o,d;a(4),c("ngIf",r.submitted&&((o=r.paymentForm.get("holderName"))==null||o.errors==null?null:o.errors.required)),a(),c("ngIf",(d=r.paymentForm.get("holderName"))==null||d.errors==null?null:d.errors.pattern)}}function et(i,m){i&1&&(e(0,"div",42),n(1,"Bank name is required"),t())}function nt(i,m){i&1&&(e(0,"div",42),n(1,"Holder name should contain only alphabets"),t())}function it(i,m){if(i&1&&(e(0,"div",12)(1,"label",43),n(2,"Bank Name"),t(),b(3,"input",44),s(4,et,2,0,"div",32)(5,nt,2,0,"div",32),t()),i&2){let r=h(),o,d;a(4),c("ngIf",r.submitted&&((o=r.paymentForm.get("bankName"))==null||o.errors==null?null:o.errors.required)),a(),c("ngIf",(d=r.paymentForm.get("bankName"))==null||d.errors==null?null:d.errors.pattern)}}function ot(i,m){i&1&&(e(0,"div",42),n(1,"Branch name is required"),t())}function at(i,m){i&1&&(e(0,"div",42),n(1,"Holder name should contain only alphabets"),t())}function rt(i,m){if(i&1&&(e(0,"div",12)(1,"label",45),n(2,"Branch Name"),t(),b(3,"input",46),s(4,ot,2,0,"div",32)(5,at,2,0,"div",32),t()),i&2){let r=h(),o,d;a(4),c("ngIf",r.submitted&&((o=r.paymentForm.get("branchName"))==null||o.errors==null?null:o.errors.required)),a(),c("ngIf",(d=r.paymentForm.get("branchName"))==null||d.errors==null?null:d.errors.pattern)}}function lt(i,m){i&1&&(e(0,"div",42),n(1," Account Number is required "),t())}function mt(i,m){i&1&&(e(0,"div",48),n(1,` Account Number max 16 digits..
`),t())}function ct(i,m){if(i&1&&(e(0,"div",12)(1,"label",27),n(2,"Account Number"),t(),b(3,"input",28),s(4,lt,2,0,"div",32)(5,mt,2,0,"div",47),t()),i&2){let r=h(),o,d;a(4),c("ngIf",r.submitted&&((o=r.paymentForm.get("accountNumber"))==null||o.errors==null?null:o.errors.required)),a(),c("ngIf",(d=r.paymentForm.get("accountNumber"))==null||d.errors==null?null:d.errors.numericLength)}}function dt(i,m){i&1&&(e(0,"div",42),n(1," IFSC Number is required "),t())}function st(i,m){if(i&1&&(e(0,"div",12)(1,"label",49),n(2,"IFSC Code"),t(),b(3,"input",50),s(4,dt,2,0,"div",32),t()),i&2){let r=h(),o;a(4),c("ngIf",r.submitted&&((o=r.paymentForm.get("ifsc"))==null?null:o.invalid))}}function ut(i,m){i&1&&(e(0,"div",42),n(1," UPI is required "),t())}function pt(i,m){if(i&1&&(e(0,"div",12)(1,"label",49),n(2,"UPI ID"),t(),b(3,"input",51),s(4,ut,2,0,"div",32),t()),i&2){let r=h(),o;a(4),c("ngIf",r.submitted&&((o=r.paymentForm.get("UPI"))==null?null:o.invalid))}}function ft(i,m){if(i&1&&(e(0,"table",52)(1,"tbody")(2,"tr",53)(3,"th"),n(4,"Account Number"),t(),e(5,"td"),n(6),t()(),e(7,"tr",53)(8,"th"),n(9,"Holder Number"),t(),e(10,"td"),n(11),t()(),e(12,"tr",53)(13,"th"),n(14,"IBAN/IFSC Number"),t(),e(15,"td"),n(16),t()(),e(17,"tr",53)(18,"th"),n(19,"BANK Number"),t(),e(20,"td"),n(21),t()(),e(22,"tr",53)(23,"th"),n(24,"Branch Name"),t(),e(25,"td"),n(26),t()(),e(27,"tr",53)(28,"th"),n(29,"paymentOptions"),t(),e(30,"td"),n(31),t()(),e(32,"tr",53)(33,"th"),n(34,"Delete"),t(),e(35,"td")(36,"button",54),n(37,"Delete"),t()()()()()),i&2){let r=m.$implicit;a(6),u(r.accountNumber),a(5),u(r.hodlerNumber),a(5),u(r.ifscCode),a(5),u(r.bankName),a(5),u(r.branchName),a(5),u(r.paymentOptions)}}function bt(i,m){if(i&1){let r=A();e(0,"div",55),g("click",function(){let l=I(r).$implicit,f=h();return T(f.setActive(l))}),b(1,"img",56),e(2,"p"),n(3),t(),e(4,"p"),n(5),t(),e(6,"p"),n(7),t()()}if(i&2){let r=m.$implicit,o=h();v("active-card",o.activeCard===r),a(),c("src",o.activeCard===r?o.yellowTickImage:o.tickImage,F),a(2),u(r.accountName),a(2),u(r.accountNumber),a(2),u(r.bank)}}function gt(i,m){i&1&&(e(0,"div",42),n(1," Account Number is required "),t())}function _t(i,m){i&1&&(e(0,"div",42),n(1," Account name is required "),t())}function ht(i,m){i&1&&(e(0,"div"),n(1," Amount is required "),t())}function vt(i,m){i&1&&(e(0,"div"),n(1," Amount cannot be negative "),t())}function Ct(i,m){if(i&1&&(e(0,"div",42),s(1,ht,2,0,"div",57)(2,vt,2,0,"div",57),t()),i&2){let r=h(),o,d;a(),c("ngIf",(o=r.existingAccountForm.get("amount"))==null||o.errors==null?null:o.errors.required),a(),c("ngIf",(d=r.existingAccountForm.get("amount"))==null||d.errors==null?null:d.errors.negativeAmount)}}function xt(i,m){if(i&1&&(e(0,"table",52)(1,"tbody")(2,"tr",53)(3,"th"),n(4,"Transaction No"),t(),e(5,"td"),n(6),t()(),e(7,"tr",53)(8,"th"),n(9,"Amount"),t(),e(10,"td"),n(11),t()(),e(12,"tr",53)(13,"th"),n(14,"Status"),t(),e(15,"td"),n(16),t()(),e(17,"tr",53)(18,"th"),n(19,"Date & Time"),t(),e(20,"td"),n(21),t()()()()),i&2){let r=m.$implicit;a(6),u(r.transactionNo),a(5),u(r.amount),a(5),u(r.status),a(5),u(r.dateTime)}}var Pt=(()=>{let m=class m{constructor(){this.isClicked=!1,this.isClicked500=!1,this.isClicked5000=!1,this.isClicked10000=!1,this.isClicked200000=!1,this.submitted=!1,this.isClicked500000=!1,this.isClicked1000000=!1,this.activeCard=null,this.tickImage="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/tick.svg",this.yellowTickImage="../../../../assets/yellow.png",this.existingAccount=[{accountName:"Rohan More",accountNumber:0x7958cb3fed2e9,bank:"State Bank Of India"},{accountName:"Ayus Khanth",accountNumber:0x7958cb3fed2e9,bank:"Bank of Broda"}],this.transactions=[{transactionNo:"TRX001",amount:100.5,status:"Completed",dateTime:"2024-02-26 10:30:00"},{transactionNo:"TRX002",amount:200.75,status:"Pending",dateTime:"2024-02-26 11:45:00"},{transactionNo:"TRX003",amount:50.2,status:"Failed",dateTime:"2024-02-26 13:15:00"},{transactionNo:"TRX004",amount:300,status:"Completed",dateTime:"2024-02-26 14:20:00"},{transactionNo:"TRX005",amount:150.8,status:"Pending",dateTime:"2024-02-26 15:45:00"}],this.accountDetails=[{accountNumber:"TRX001",hodlerNumber:"4085009",ifscCode:"Completed",bankName:"Bank of india",branchName:"Katiah",paymentOptions:"UPI",dateTime:"2024-02-26 10:30:00"},{accountNumber:"TRX002",hodlerNumber:"4085010",ifscCode:"IFSC002",bankName:"State Bank of India",branchName:"Delhi",paymentOptions:"NEFT",dateTime:"2024-02-27 11:45:00"},{accountNumber:"TRX003",hodlerNumber:"4085011",ifscCode:"IFSC003",bankName:"HDFC Bank",branchName:"Mumbai",paymentOptions:"Credit Card",dateTime:"2024-02-28 13:15:00"},{accountNumber:"TRX004",hodlerNumber:"4085012",ifscCode:"IFSC004",bankName:"ICICI Bank",branchName:"Chennai",paymentOptions:"Net Banking",dateTime:"2024-02-29 14:20:00"},{accountNumber:"TRX005",hodlerNumber:"4085013",ifscCode:"IFSC005",bankName:"Axis Bank",branchName:"Kolkata",paymentOptions:"Wallet",dateTime:"2024-03-01 15:45:00"}],this.paymentOptions=[{label:"Bank",value:"bank",backgroundColor:"red"}]}ngOnInit(){this.paymentForm=new k({paymentOptions:new _("Bank"),holderName:new _(null,[p.required,p.pattern("[A-Za-z ]*")]),bankName:new _(null,[p.required,p.pattern("[A-Za-z ]*")]),branchName:new _(null,[p.required,p.pattern("[A-Za-z ]*")]),accountNumber:new _(null,[p.required,y(0,16)]),ifsc:new _(null,p.required),UPI:new _(null,p.required)}),this.existingAccountForm=new k({accountNumber:new _(null,[p.required,y(0,16)]),accountName:new _(null,[p.required,p.pattern("[A-Za-z ]*")]),amount:new _(null,[p.required,J()])})}onChange(o){}onSubmit(){this.paymentForm.get("paymentOptions")?.value==="UPI"&&(console.log(this.paymentForm.value),this.submitted=!0),this.paymentForm.get("paymentOptions")?.value==="Bank"&&(console.log(this.paymentForm.value),this.submitted=!0)}setActive(o){console.log(o),this.activeCard=o,this.existingAccountForm.patchValue({accountNumber:o.accountNumber,accountName:o.accountName})}setAmount(o){this.isClicked=!this.isClicked,this.isClicked500=!1,this.isClicked5000=!1,this.isClicked10000=!1,this.isClicked200000=!1,this.isClicked500000=!1,this.isClicked1000000=!1,o==="500"?this.isClicked500=!0:o==="5000"?this.isClicked5000=!0:o==="10000"?this.isClicked10000=!0:o==="200000"?this.isClicked200000=!0:o==="500000"?this.isClicked500000=!0:o==="1000000"&&(this.isClicked1000000=!0),this.existingAccountForm.patchValue({amount:o})}goBack(){window.history.back()}};m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=M({type:m,selectors:[["app-withdrow"]],standalone:!0,features:[W],decls:92,vars:26,consts:[[1,"withdrawal-container"],[1,"withdrow"],["src",".././../../../assets/arrow.png","alt","...",1,"img-fluid","withdrow-back",3,"click"],[1,"instructions-text"],[1,"instructions-heading"],["id","withdrawalTabs","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","add-account-tab","data-bs-toggle","tab","data-bs-target","#addAccount","type","button","role","tab","aria-controls","addAccount","aria-selected","true",1,"nav-link","active","rounded-pill"],["id","existing-account-tab","data-bs-toggle","tab","data-bs-target","#existingAccount","type","button","role","tab","aria-controls","existingAccount","aria-selected","false",1,"nav-link","rounded-pill"],["id","withdrawalTabContent",1,"tab-content"],["id","addAccount","role","tabpanel","aria-labelledby","add-account-tab",1,"tab-pane","fade","show","active"],[1,"form-background",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","paymentOptions",1,"form-label"],["aria-label","Default select example","formControlName","paymentOptions",1,"form-select"],["value","Bank","selected",""],["value","UPI"],["class","mb-3",4,"ngIf"],[1,"col-12","col-md-12"],["type","submit",1,"btn","withdrow-submit-btn"],[1,"table-responsive","withdraw-table"],["class","table table-dark",4,"ngFor","ngForOf"],["id","existingAccount","role","tabpanel","aria-labelledby","existing-account-tab",1,"tab-pane","fade"],[1,"scroll","p-2"],["class","existing-card",3,"active-card","click",4,"ngFor","ngForOf"],[1,"container","existing-input"],[3,"formGroup","ngSubmit"],["for","accountNumber",1,"form-label"],["type","number","id","accountNumber","formControlName","accountNumber","placeholder","Account Number",1,"form-control"],["class"," error-msg",4,"ngIf"],["for","accountName",1,"form-label"],["type","text","id","accountName","formControlName","accountName","placeholder","Account Name",1,"form-control"],["class","error-msg",4,"ngIf"],["for","amount",1,"form-label"],["type","number","id","amount","formControlName","amount","placeholder","Amount",1,"form-control"],[1,"col-12"],[1,"row"],[1,"col-4"],["type","button",1,"btn","amount-btn",3,"click"],[1,"d-grid",2,"margin","10px"],["for","holderName",1,"form-label"],["type","text","id","holderName","formControlName","holderName","placeholder","Holder Name","pattern","[A-Za-z ]*",1,"form-control"],[1,"error-msg"],["for","BankName",1,"form-label"],["type","text","id","bankName","formControlName","bankName","placeholder","Bank Name",1,"form-control"],["for","branckName",1,"form-label"],["type","text","id","branchName","formControlName","branchName","placeholder","Branch Name",1,"form-control"],["style","color:red",4,"ngIf"],[2,"color","red"],["for","ibanNumber",1,"form-label"],["type","text","id","ibanNumber","formControlName","ifsc","placeholder","IFSC Code",1,"form-control"],["type","number","id","UPI","formControlName","UPI","placeholder","UPI ID",1,"form-control"],[1,"table","table-dark"],[2,"white-space","nowrap"],[1,"btn","btn-sm","withdrow-submit-btn",2,"border-radius","5px"],[1,"existing-card",3,"click"],["alt","Card Status Tick",1,"card-tick",3,"src"],[4,"ngIf"]],template:function(d,l){if(d&1&&(e(0,"div",0)(1,"h2",1)(2,"img",2),g("click",function(){return l.goBack()}),t(),n(3,"Withdrawal"),t(),e(4,"div",3)(5,"strong",4),n(6,"Please Note:"),t(),e(7,"ul")(8,"li"),n(9,"The bonus amount can be used to place bets across the platform and the winnings can be withdrawn."),t(),e(10,"li"),n(11,"A player can use bonus amount to place bets and play games on Kheloyar."),t(),e(12,"li"),n(13,"If the withdrawals are pending from the bank, it may take up to 72 banking hours for your transaction to clear."),t(),e(14,"li"),n(15,"If a user only deposits and attempts to withdraw the money without placing a single bet, 100% of the amount will be withheld due to suspicious activity. If this is repeated, no withdrawal will be given to the user."),t()()(),e(16,"div",0)(17,"ul",5)(18,"li",6)(19,"button",7),n(20,"Add Account"),t()(),e(21,"li",6)(22,"button",8),n(23,"Existing Account"),t()()()()(),e(24,"div",9)(25,"div",10)(26,"form",11),g("ngSubmit",function(){return l.onSubmit()}),e(27,"div",12)(28,"label",13),n(29,"Payment Options"),t(),e(30,"select",14)(31,"option",15),n(32,"Bank"),t(),e(33,"option",16),n(34,"UPI"),t()()(),s(35,tt,6,2,"div",17)(36,it,6,2,"div",17)(37,rt,6,2,"div",17)(38,ct,6,2,"div",17)(39,st,5,1,"div",17)(40,pt,5,1,"div",17),e(41,"div",18)(42,"button",19),n(43,"Submit"),t()()(),e(44,"div",20),s(45,ft,38,6,"table",21),t()(),e(46,"div",22)(47,"div",23),s(48,bt,8,6,"div",24),t(),e(49,"div",25)(50,"form",26),g("ngSubmit",function(){return l.onSubmit()}),e(51,"div",12)(52,"label",27),n(53,"Account Number"),t(),b(54,"input",28),s(55,gt,2,0,"div",29),t(),e(56,"div",12)(57,"label",30),n(58,"Holder Name"),t(),b(59,"input",31),s(60,_t,2,0,"div",32),t(),e(61,"div",12)(62,"label",33),n(63,"Amount"),t(),b(64,"input",34),s(65,Ct,3,2,"div",32),t(),e(66,"div",35)(67,"div",36)(68,"div",37)(69,"button",38),g("click",function(){return l.setAmount("500")}),n(70,"500"),t()(),e(71,"div",37)(72,"button",38),g("click",function(){return l.setAmount("5000")}),n(73,"5000"),t()(),e(74,"div",37)(75,"button",38),g("click",function(){return l.setAmount("10000")}),n(76,"10000"),t()()(),e(77,"div",36)(78,"div",37)(79,"button",38),g("click",function(){return l.setAmount("200000")}),n(80,"200000"),t()(),e(81,"div",37)(82,"button",38),g("click",function(){return l.setAmount("500000")}),n(83,"500000"),t()(),e(84,"div",37)(85,"button",38),g("click",function(){return l.setAmount("1000000")}),n(86,"1000000"),t()()(),e(87,"div",39)(88,"button",19),n(89,"Submit"),t()()()(),e(90,"div",20),s(91,xt,22,4,"table",21),t()()()()),d&2){let f,N,S,O,P,E,C,x,w;a(26),c("formGroup",l.paymentForm),a(9),c("ngIf",((f=l.paymentForm.get("paymentOptions"))==null?null:f.value)==="Bank"),a(),c("ngIf",((N=l.paymentForm.get("paymentOptions"))==null?null:N.value)==="Bank"),a(),c("ngIf",((S=l.paymentForm.get("paymentOptions"))==null?null:S.value)==="Bank"),a(),c("ngIf",((O=l.paymentForm.get("paymentOptions"))==null?null:O.value)==="Bank"),a(),c("ngIf",((P=l.paymentForm.get("paymentOptions"))==null?null:P.value)==="Bank"),a(),c("ngIf",((E=l.paymentForm.get("paymentOptions"))==null?null:E.value)==="UPI"),a(5),c("ngForOf",l.accountDetails),a(3),c("ngForOf",l.existingAccount),a(2),c("formGroup",l.existingAccountForm),a(5),c("ngIf",((C=l.existingAccountForm.get("accountNumber"))==null?null:C.invalid)&&((C=l.existingAccountForm.get("accountNumber"))==null?null:C.touched)),a(5),c("ngIf",((x=l.existingAccountForm.get("accountName"))==null?null:x.invalid)&&((x=l.existingAccountForm.get("accountName"))==null?null:x.touched)),a(5),c("ngIf",((w=l.existingAccountForm.get("amount"))==null?null:w.invalid)&&((w=l.existingAccountForm.get("amount"))==null?null:w.touched)),a(4),v("clicked",l.isClicked500),a(3),v("clicked",l.isClicked5000),a(3),v("clicked",l.isClicked10000),a(4),v("clicked",l.isClicked200000),a(3),v("clicked",l.isClicked500000),a(3),v("clicked",l.isClicked1000000),a(6),c("ngForOf",l.transactions)}},dependencies:[L,X,Z,$,V,z,K,U,R,j,H,G,D,B,q],styles:[".withdrawal-container[_ngcontent-%COMP%]{margin:auto;padding:20px;color:#fff;border-radius:5px;box-shadow:0 4px 8px #0000001a}.withdrow[_ngcontent-%COMP%]{color:#fff;text-align:center}.withdrow-note[_ngcontent-%COMP%]{color:#ffb449}.withdrawal-note[_ngcontent-%COMP%]{padding:10px;border-radius:5px;color:#fff;font-size:14px;margin-bottom:20px}.tab-content[_ngcontent-%COMP%]{border:none;border-top:none;padding:10px;border-radius:0 0 5px 5px;color:#fff}li[_ngcontent-%COMP%]{font-family:poppins,sans-serif;color:#fff;font-weight:400!important}.withdrow-box[_ngcontent-%COMP%]{border:2px solid white;width:100%;margin:0;padding:0}.box-1-withdrow[_ngcontent-%COMP%]{margin-right:5px;background-color:#212529;border-right:2px solid white}.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background-color:#000!important;color:#fff}input[_ngcontent-%COMP%]::placeholder{color:#909090;opacity:1}input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#909090}input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#909090}.btn-warning[_ngcontent-%COMP%]{width:100%;background-color:#ffb449;border:none}.amount-btn[_ngcontent-%COMP%]{border:2px solid #FFB449}.error-msg[_ngcontent-%COMP%]{font-family:poppins,sans-serif;color:red}.withdrow-submit-btn[_ngcontent-%COMP%]{background-color:#ffb449;width:100%;color:#000;font-family:poppins;font-weight:700}tr[_ngcontent-%COMP%]{background-color:#020c1b}.withdraw-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%], .withdraw-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:2px solid gray}.withdraw-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff!important;border:2px solid gray;font-family:poppins,sans-serif;font-weight:400!important}.withdraw-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .withdraw-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:50%;white-space:nowrap}.withdrow-back[_ngcontent-%COMP%]{position:absolute;left:10px;margin-top:5px}.withdraw-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#fff!important;border:2px solid gray;background-color:#000;font-family:poppins,sans-serif;font-weight:400!important;white-space:nowrap}.scroll[_ngcontent-%COMP%]{margin-left:0;display:flex;overflow-x:scroll;max-width:100%}.existing-card[_ngcontent-%COMP%]{max-width:180px;border-radius:8px;padding:15px;margin-left:10px;margin-right:30px;margin-bottom:10px;transform:scale(1.1);background-color:#1c1c1e!important;color:#fff;position:relative}.withdrow[_ngcontent-%COMP%], .withdrow-note[_ngcontent-%COMP%]{font-family:poppins,sans-serif;font-weight:600}.nav-link[_ngcontent-%COMP%]{background-color:#000;border:none}.nav-tabs[_ngcontent-%COMP%]{border:none;justify-content:center;align-items:center;text-align:center;color:#fff}.active-card[_ngcontent-%COMP%]{border:2px solid #747474;transform:scale(1.15);background-color:#4e4e4e!important}.btn-outline-withdrow[_ngcontent-%COMP%]{border:2px solid #FFB449}p[_ngcontent-%COMP%]{line-height:1em}.card-tick[_ngcontent-%COMP%]{position:absolute;top:2px;right:10px;width:24px;height:24px}.existing-input[_ngcontent-%COMP%]{color:#fff;font-family:poppins,sans-serif;font-weight:200!important}.amountbtn[_ngcontent-%COMP%]{background-color:#ffb449}.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background-color:#ffb449;font-weight:600!important}.instructions-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px;text-align:justify;padding-top:10px}.instructions-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:5px}.instructions-heading[_ngcontent-%COMP%]{font-family:poppins,sans-serif;font-size:18px;color:#ffb449}.form-background[_ngcontent-%COMP%]{background-color:#000;color:#fff}.form-select[_ngcontent-%COMP%]{background-color:#a9a9a9;color:#fff}.form-control[_ngcontent-%COMP%]{background-color:gray;color:#fff}.withdraw-submit-btn[_ngcontent-%COMP%]{background-color:gray;color:#000}.error-msg[_ngcontent-%COMP%]{color:red}input[type=text][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus{border-color:#fff!important;box-shadow:none!important;outline:0 none!important}option[_ngcontent-%COMP%]:nth-child(1):hover{background:#ff0!important}option[_ngcontent-%COMP%]:nth-child(2):hover{background:#ff0!important}select[_ngcontent-%COMP%]:focus{border-color:#fff!important;box-shadow:none!important;outline:0 none!important}.clicked[_ngcontent-%COMP%]{background-color:#ffb449;color:#fff;border:none}"]});let i=m;return i})();export{Pt as WithdrowComponent};
