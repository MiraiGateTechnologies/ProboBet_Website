import{a as x,b as P,c as E,d as S,i as M,k as V,l as k,q as I,r as O,s as T}from"./chunk-6BXYBRKA.js";import{m as F,n as N}from"./chunk-ZQS3S63H.js";import{Ab as f,Bb as C,Fb as b,Xa as n,Ya as y,fa as _,gb as g,ib as c,mb as i,nb as a,ob as m,rb as h,sb as v,zb as d}from"./chunk-JLVYC4P7.js";function q(r,o){if(r&1&&(i(0,"div",15),d(1),a()),r&2){let p=v();n(),C(" ",p.getErrorMessage("currentPassword")," ")}}function D(r,o){if(r&1&&(i(0,"div",15),d(1),a()),r&2){let p=v();n(),C(" ",p.getErrorMessage("newPassword")," ")}}function G(r,o){r&1&&(i(0,"div",15),d(1," Passwords do not match. "),a())}function j(){return r=>{let o=r.value;if(!o)return null;let p=/[0-9]/.test(o),t=/[a-zA-Z]/.test(o),s=o.length>=8;return p&&t&&s?null:{passwordStrength:!0}}}var Z=(()=>{let o=class o{constructor(t){this.formBuilder=t,this.showPassword=!1,this.showNewPassword=!1,this.showConfirmPassword=!1}ngOnInit(){this.changePasswordForm=this.formBuilder.group({currentPassword:["",P.required],newPassword:["",[P.required,j()]],confirmPassword:["",P.required]},{validator:this.passwordMatchValidator})}passwordMatchValidator(t){return t.controls.newPassword.value===t.controls.confirmPassword.value?null:{mismatch:!0}}toggleCurrentPasswordVisibility(){this.showPassword=!this.showPassword}toggleNewPasswordVisibility(){this.showNewPassword=!this.showNewPassword}toggleConfirmPasswordVisibility(){this.showConfirmPassword=!this.showConfirmPassword}onSubmit(){this.changePasswordForm.valid?console.log(this.changePasswordForm.value):Object.keys(this.changePasswordForm.controls).forEach(t=>{let s=this.changePasswordForm.get(t)})}getErrorMessage(t){let s=this.changePasswordForm.get(t);if(s&&s.touched){if(s.hasError("required"))return"This field is required.";if(t==="newPassword"&&s.hasError("passwordStrength"))return"Password must be at least 8 characters long";if(this.changePasswordForm.hasError("mismatch")&&(t==="newPassword"||t==="confirmPassword"))return"Passwords do not match."}return""}};o.\u0275fac=function(s){return new(s||o)(y(I))},o.\u0275cmp=_({type:o,selectors:[["app-changepassword"]],standalone:!0,features:[b],decls:33,vars:10,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-md-6","offset-md-3"],[1,"text-center"],["novalidate","",3,"formGroup"],[1,"input-group"],[1,"input-group-text"],[1,"bi","bi-lock-fill",2,"color","white"],["id","password","formControlName","currentPassword","placeholder","Current Password",1,"form-control",3,"type"],[1,"material-icons","toggle-icon",2,"color","white",3,"click"],["class","alert alert-danger",4,"ngIf"],["id","newPassword","formControlName","newPassword","placeholder","New Password",1,"form-control",3,"type"],["id","confirmPassword","formControlName","confirmPassword","placeholder","Confirm New Password",1,"form-control",3,"type"],[1,"col-12","d-flex","justify-content-center",2,"margin-top","15px"],["type","submit",1,"btn","btn-warning","btn-block",2,"margin-top","10px"],[1,"alert","alert-danger"]],template:function(s,e){if(s&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),d(4,"Change Password"),a(),i(5,"form",4)(6,"div",5)(7,"span",6),m(8,"i",7),a(),m(9,"input",8),i(10,"span",6)(11,"i",9),h("click",function(){return e.toggleCurrentPasswordVisibility()}),d(12),a()()(),g(13,q,2,1,"div",10),i(14,"div",5)(15,"span",6),m(16,"i",7),a(),m(17,"input",11),i(18,"span",6)(19,"i",9),h("click",function(){return e.toggleNewPasswordVisibility()}),d(20),a()()(),g(21,D,2,1,"div",10),i(22,"div",5)(23,"span",6),m(24,"i",7),a(),m(25,"input",12),i(26,"span",6)(27,"i",9),h("click",function(){return e.toggleConfirmPasswordVisibility()}),d(28),a()()(),g(29,G,2,0,"div",10),i(30,"div",13)(31,"button",14),d(32,"Change Password"),a()()()()()()),s&2){let l,w,u;n(5),c("formGroup",e.changePasswordForm),n(4),c("type",e.showPassword?"text":"password"),n(3),f(e.showPassword?"visibility":"visibility_off"),n(),c("ngIf",((l=e.changePasswordForm.get("currentPassword"))==null?null:l.errors)&&(((l=e.changePasswordForm.get("currentPassword"))==null?null:l.dirty)||((l=e.changePasswordForm.get("currentPassword"))==null?null:l.touched))),n(4),c("type",e.showNewPassword?"text":"password"),n(3),f(e.showNewPassword?"visibility":"visibility_off"),n(),c("ngIf",((w=e.changePasswordForm.get("newPassword"))==null?null:w.errors)&&(((w=e.changePasswordForm.get("newPassword"))==null?null:w.dirty)||((w=e.changePasswordForm.get("newPassword"))==null?null:w.touched))),n(4),c("type",e.showConfirmPassword?"text":"password"),n(3),f(e.showConfirmPassword?"visibility":"visibility_off"),n(),c("ngIf",(e.changePasswordForm.errors==null?null:e.changePasswordForm.errors.mismatch)&&(((u=e.changePasswordForm.get("newPassword"))==null?null:u.touched)||((u=e.changePasswordForm.get("confirmPassword"))==null?null:u.touched)))}},dependencies:[O,M,x,E,S,T,V,k,N,F],styles:[".form-control[_ngcontent-%COMP%]{background-color:#020c1b;color:#fff}.input-group[_ngcontent-%COMP%]{margin-top:10px}.alert-danger[_ngcontent-%COMP%]{background-color:#000!important;color:red;border:none;font-size:14px;padding:5px;font-weight:400px;font-family:poppins,sans-serif}.form-control[_ngcontent-%COMP%]::placeholder{color:#fff;font-family:poppins}.input-group-text[_ngcontent-%COMP%]{background-color:#020c1b}.btn-warning[_ngcontent-%COMP%]{background-color:#ffb449!important}"]});let r=o;return r})();export{Z as ChangepasswordComponent,j as passwordStrengthValidator};
