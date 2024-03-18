"use strict";(self.webpackChunkE_commerece=self.webpackChunkE_commerece||[]).push([[560],{6560:(M,u,m)=>{m.r(u),m.d(u,{RegisterComponent:()=>Q});var d=m(6814),i=m(95),e=m(4946),c=m(5356),f=m(9310);function Z(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," Name is required "),e.qZA())}function T(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," Must min be 3 letters "),e.qZA())}function h(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," Name max be 20 letters "),e.qZA())}function v(t,s){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,Z,2,0,"p",15),e.YNc(2,T,2,0,"p",15),e.YNc(3,h,2,0,"p",15),e.qZA()),2&t){const o=e.oxw();let n,r,l;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("name"))?null:r.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(l=o.registerForm.get("name"))?null:l.getError("maxlength"))}}function x(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," email is required "),e.qZA())}function q(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," invalid email "),e.qZA())}function A(t,s){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,x,2,0,"p",15),e.YNc(2,q,2,0,"p",15),e.qZA()),2&t){const o=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("email"))?null:r.getError("email"))}}function w(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," password is required "),e.qZA())}function I(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," Must min be 6 letters "),e.qZA())}function R(t,s){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,w,2,0,"p",15),e.YNc(2,I,2,0,"p",15),e.qZA()),2&t){const o=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("password"))?null:r.getError("pattern"))}}function C(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," RePassword is required "),e.qZA())}function F(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," Repassword confirmation is incorrect "),e.qZA())}function E(t,s){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,C,2,0,"p",15),e.YNc(2,F,2,0,"p",15),e.qZA()),2&t){const o=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("rePassword"))?null:r.getError("mismatch"))}}function U(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," Phone is required "),e.qZA())}function N(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," it must be Egyption number "),e.qZA())}function P(t,s){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,U,2,0,"p",15),e.YNc(2,N,2,0,"p",15),e.qZA()),2&t){const o=e.oxw();let n,r;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=o.registerForm.get("phone"))?null:r.getError("pattern"))}}function J(t,s){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",18),e.qZA())}function Y(t,s){if(1&t&&(e.TgZ(0,"p",19),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.errMessage," ")}}let Q=(()=>{class t{constructor(o,n,r){this._AuthenticationService=o,this._FormBuilder=n,this._Router=r,this.errMessage="",this.isloading=!1,this.registerForm=this._FormBuilder.group({name:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]],rePassword:[""],phone:["",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)]]},{validators:[this.confirmPass]})}confirmPass(o){const n=o.get("password"),r=o.get("rePassword");""===r?.value?r?.setErrors({required:!0}):n?.value!==r?.value&&r?.setErrors({mismatch:!0})}handelForm(){const o=this.registerForm.value;this.isloading=!0,!0===this.registerForm.valid&&this._AuthenticationService.userRigister(o).subscribe({next:n=>{"success"===n.message&&(this._Router.navigate(["/login"]),this.isloading=!1)},error:n=>{this.errMessage=n.error.message,this.isloading=!1}})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(c.$),e.Y36(i.qu),e.Y36(f.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:33,vars:9,consts:[[1,"w-75","p-4","main-shadow","mx-auto","rounded-3","my-4"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","name",1,"my-2"],["formControlName","name","type","name","id","name",1,"form-control"],["class","alert alert-danger mt-2 w-50 mx-auto p-2 small",4,"ngIf"],["for","email",1,"my-2"],["formControlName","email","type","email","id","email",1,"form-control"],["for","password",1,"my-2"],["formControlName","password","type","password","id","password",1,"form-control"],["for","rePassword",1,"my-2"],["formControlName","rePassword","type","password","id","rePassword",1,"form-control"],["for","phone",1,"my-2"],["formControlName","phone","type","tel","id","phone",1,"form-control"],[1,"main-btn","mt-3","p-2",3,"disabled"],[4,"ngIf"],["class","alert alert-danger w-50 mx-auto p-1 m-0 small text-center",4,"ngIf"],[1,"alert","alert-danger","mt-2","w-50","mx-auto","p-2","small"],[1,"ms-1","fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","w-50","mx-auto","p-1","m-0","small","text-center"]],template:function(n,r){if(1&n&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"Register Now:"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return r.handelForm()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"Name:"),e.qZA(),e._UZ(7,"input",4),e.YNc(8,v,4,3,"div",5),e.qZA(),e.TgZ(9,"div",2)(10,"label",6),e._uU(11,"Email:"),e.qZA(),e._UZ(12,"input",7),e.YNc(13,A,3,2,"div",5),e.qZA(),e.TgZ(14,"div",2)(15,"label",8),e._uU(16,"Password:"),e.qZA(),e._UZ(17,"input",9),e.YNc(18,R,3,2,"div",5),e.qZA(),e.TgZ(19,"div",2)(20,"label",10),e._uU(21,"RePassword:"),e.qZA(),e._UZ(22,"input",11),e.YNc(23,E,3,2,"div",5),e.qZA(),e.TgZ(24,"div",2)(25,"label",12),e._uU(26,"phone:"),e.qZA(),e._UZ(27,"input",13),e.YNc(28,P,3,2,"div",5),e.qZA(),e.TgZ(29,"button",14),e._uU(30," Register "),e.YNc(31,J,2,0,"span",15),e.qZA()(),e.YNc(32,Y,2,1,"p",16),e.qZA()),2&n){let l,a,_,p,g;e.xp6(3),e.Q6J("formGroup",r.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(l=r.registerForm.get("name"))?null:l.errors)&&(null==(l=r.registerForm.get("name"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(a=r.registerForm.get("email"))?null:a.errors)&&(null==(a=r.registerForm.get("email"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(_=r.registerForm.get("password"))?null:_.errors)&&(null==(_=r.registerForm.get("password"))?null:_.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=r.registerForm.get("rePassword"))?null:p.errors)&&(null==(p=r.registerForm.get("rePassword"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=r.registerForm.get("phone"))?null:g.errors)&&(null==(g=r.registerForm.get("phone"))?null:g.touched)),e.xp6(1),e.Q6J("disabled",r.registerForm.invalid),e.xp6(2),e.Q6J("ngIf",r.isloading),e.xp6(1),e.Q6J("ngIf",r.errMessage)}},dependencies:[d.ez,d.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return t})()}}]);