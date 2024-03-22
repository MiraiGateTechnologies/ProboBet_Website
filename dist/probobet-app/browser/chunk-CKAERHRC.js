import{a as E,b as P,c as M,d as k,i as N,k as O,l as T,r as V,s as I,t as B}from"./chunk-MOGXJHJT.js";import{m as x,o as F}from"./chunk-VOCCCTMF.js";import{Bb as u,Cb as C,Mb as d,Nb as f,Ob as _,Tb as S,Ua as b,Za as s,_a as v,fa as y,ib as h,kb as c,sb as a,tb as l,ub as m}from"./chunk-NIQAK5NP.js";function q(r,n){if(r&1&&(a(0,"div",16),d(1),l()),r&2){let w=C();s(),_(" ",w.getErrorMessage("currentPassword")," ")}}function R(r,n){if(r&1&&(a(0,"div",16),d(1),l()),r&2){let w=C();s(),_(" ",w.getErrorMessage("newPassword")," ")}}function j(r,n){r&1&&(a(0,"div",16),d(1," Passwords do not match. "),l())}function z(){return r=>{let n=r.value;if(!n)return null;let w=/[0-9]/.test(n),t=/[a-zA-Z]/.test(n),o=n.length>=8;return w&&t&&o?null:{passwordStrength:!0}}}var W=(()=>{let n=class n{constructor(t,o){this.formBuilder=t,this.elRef=o,this.showPassword=!1,this.showNewPassword=!1,this.showConfirmPassword=!1,this.lastScrollTop=0}onScroll(t){let o=this.elRef.nativeElement.querySelector("#videoContainer"),e=this.elRef.nativeElement.querySelector("#myVideo"),i=window.pageYOffset||document.documentElement.scrollTop;i>this.lastScrollTop?e.currentTime+=.1:e.currentTime-=.1,this.lastScrollTop=i}ngOnInit(){this.changePasswordForm=this.formBuilder.group({currentPassword:["",P.required],newPassword:["",[P.required,z()]],confirmPassword:["",P.required]},{validator:this.passwordMatchValidator})}passwordMatchValidator(t){return t.controls.newPassword.value===t.controls.confirmPassword.value?null:{mismatch:!0}}onWindowScroll(){let t=document.getElementById("myVideo"),o=t.getBoundingClientRect().top,e=t.getBoundingClientRect().bottom;o<window.innerHeight&&e>=0?t.play():t.pause()}toggleCurrentPasswordVisibility(){this.showPassword=!this.showPassword}toggleNewPasswordVisibility(){this.showNewPassword=!this.showNewPassword}toggleConfirmPasswordVisibility(){this.showConfirmPassword=!this.showConfirmPassword}onSubmit(){this.changePasswordForm.valid?console.log(this.changePasswordForm.value):Object.keys(this.changePasswordForm.controls).forEach(t=>{let o=this.changePasswordForm.get(t)})}getErrorMessage(t){let o=this.changePasswordForm.get(t);if(o&&o.touched){if(o.hasError("required"))return"This field is required.";if(t==="newPassword"&&o.hasError("passwordStrength"))return"Password must be at least 8 characters long";if(this.changePasswordForm.hasError("mismatch")&&(t==="newPassword"||t==="confirmPassword"))return"Passwords do not match."}return""}goBack(){window.history.back()}};n.\u0275fac=function(o){return new(o||n)(v(V),v(b))},n.\u0275cmp=y({type:n,selectors:[["app-changepassword"]],standalone:!0,features:[S],decls:34,vars:10,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-md-6","offset-md-3"],["src",".././../../../assets/arrow.png","alt","...",1,"img-fluid","backicon",3,"click"],[1,"text-center"],["novalidate","",3,"formGroup"],[1,"input-group"],[1,"input-group-text"],[1,"bi","bi-lock-fill",2,"color","white"],["id","password","formControlName","currentPassword","placeholder","Current Password",1,"form-control",3,"type"],[1,"material-icons","toggle-icon",2,"color","white",3,"click"],["class","alert alert-danger",4,"ngIf"],["id","newPassword","formControlName","newPassword","placeholder","New Password",1,"form-control",3,"type"],["id","confirmPassword","formControlName","confirmPassword","placeholder","Confirm New Password",1,"form-control",3,"type"],[1,"col-12","d-flex","justify-content-center","mb-3","text-white",2,"margin-top","15px"],["type","submit",1,"btn","submit-btn",2,"margin-top","10px"],[1,"alert","alert-danger"]],template:function(o,e){if(o&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"img",3),u("click",function(){return e.goBack()}),l(),a(4,"h2",4),d(5,"Change Password"),l(),a(6,"form",5)(7,"div",6)(8,"span",7),m(9,"i",8),l(),m(10,"input",9),a(11,"span",7)(12,"i",10),u("click",function(){return e.toggleCurrentPasswordVisibility()}),d(13),l()()(),h(14,q,2,1,"div",11),a(15,"div",6)(16,"span",7),m(17,"i",8),l(),m(18,"input",12),a(19,"span",7)(20,"i",10),u("click",function(){return e.toggleNewPasswordVisibility()}),d(21),l()()(),h(22,R,2,1,"div",11),a(23,"div",6)(24,"span",7),m(25,"i",8),l(),m(26,"input",13),a(27,"span",7)(28,"i",10),u("click",function(){return e.toggleConfirmPasswordVisibility()}),d(29),l()()(),h(30,j,2,0,"div",11),a(31,"div",14)(32,"button",15),d(33,"Change Password"),l()()()()()()),o&2){let i,p,g;s(6),c("formGroup",e.changePasswordForm),s(4),c("type",e.showPassword?"text":"password"),s(3),f(e.showPassword?"visibility":"visibility_off"),s(),c("ngIf",((i=e.changePasswordForm.get("currentPassword"))==null?null:i.errors)&&(((i=e.changePasswordForm.get("currentPassword"))==null?null:i.dirty)||((i=e.changePasswordForm.get("currentPassword"))==null?null:i.touched))),s(4),c("type",e.showNewPassword?"text":"password"),s(3),f(e.showNewPassword?"visibility":"visibility_off"),s(),c("ngIf",((p=e.changePasswordForm.get("newPassword"))==null?null:p.errors)&&(((p=e.changePasswordForm.get("newPassword"))==null?null:p.dirty)||((p=e.changePasswordForm.get("newPassword"))==null?null:p.touched))),s(4),c("type",e.showConfirmPassword?"text":"password"),s(3),f(e.showConfirmPassword?"visibility":"visibility_off"),s(),c("ngIf",(e.changePasswordForm.errors==null?null:e.changePasswordForm.errors.mismatch)&&(((g=e.changePasswordForm.get("newPassword"))==null?null:g.touched)||((g=e.changePasswordForm.get("confirmPassword"))==null?null:g.touched)))}},dependencies:[I,N,E,M,k,B,O,T,F,x],styles:[".form-control[_ngcontent-%COMP%]{background-color:#000;color:#fff}.input-group[_ngcontent-%COMP%]{margin-top:10px}.alert-danger[_ngcontent-%COMP%]{background-color:#000!important;color:red;border:none;font-size:14px;padding:5px;font-weight:400px;font-family:poppins,sans-serif}input[type=password][_ngcontent-%COMP%]:focus{border-color:none!important;box-shadow:none!important;outline:0 none!important}.form-control[_ngcontent-%COMP%]::placeholder{color:#fff;font-family:poppins;font-size:14px}.input-group-text[_ngcontent-%COMP%]{background-color:#000}.btn-warning[_ngcontent-%COMP%]{background-color:#ffb449!important}.backicon[_ngcontent-%COMP%]{justify-content:start;text-align:start;position:absolute;left:15px;margin-top:5px}#set-height[_ngcontent-%COMP%]{display:block}#v0[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%}p[_ngcontent-%COMP%]   font-family[_ngcontent-%COMP%]   helvetica[_ngcontent-%COMP%]{font-size:24px}.submit-btn[_ngcontent-%COMP%]{background-color:#ffb449}"]});let r=n;return r})();export{W as ChangepasswordComponent,z as passwordStrengthValidator};
