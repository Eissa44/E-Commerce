"use strict";(self.webpackChunkE_commerece=self.webpackChunkE_commerece||[]).push([[932],{6666:(E,_,l)=>{l.r(_),l.d(_,{LoginComponent:()=>A});var g=l(6814),r=l(95),e=l(4769),u=l(5356),p=l(1120);function c(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1," email is required "),e.qZA())}function d(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"invalid email"),e.qZA())}function f(n,a){if(1&n&&(e.TgZ(0,"div",11),e.YNc(1,c,2,0,"p",9),e.YNc(2,d,2,0,"p",9),e.qZA()),2&n){const i=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=i.loginForm.get("email"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=i.loginForm.get("email"))?null:o.getError("email"))}}function h(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1," password is required "),e.qZA())}function Z(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1," Must min be 6 letters "),e.qZA())}function T(n,a){if(1&n&&(e.TgZ(0,"div",11),e.YNc(1,h,2,0,"p",9),e.YNc(2,Z,2,0,"p",9),e.qZA()),2&n){const i=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=i.loginForm.get("password"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=i.loginForm.get("password"))?null:o.getError("pattern"))}}function v(n,a){1&n&&(e.TgZ(0,"span"),e._UZ(1,"i",12),e.qZA())}function x(n,a){if(1&n&&(e.TgZ(0,"p",13),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.hij(" ",i.errMessage," ")}}let A=(()=>{class n{constructor(i,t,o){this._AuthenticationService=i,this._FormBuilder=t,this._Router=o,this.errMessage="",this.isloading=!1,this.loginForm=this._FormBuilder.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]]})}handelForm(){const i=this.loginForm.value;this.isloading=!0,!0===this.loginForm.valid&&this._AuthenticationService.userLogin(i).subscribe({next:t=>{"success"===t.message&&(localStorage.setItem("loginToken",t.token),this._AuthenticationService.decodeInfo(),this._Router.navigate(["/home"]),this.isloading=!1)},error:t=>{this.errMessage=t.error.message,this.isloading=!1}})}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(u.$),e.Y36(r.qu),e.Y36(p.F0))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:18,vars:6,consts:[[1,"w-75","p-4","main-shadow","mx-auto","rounded-3","my-4"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","email",1,"my-2"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger mt-2 w-50 mx-auto p-2 small",4,"ngIf"],["for","password",1,"my-2"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"main-btn","mt-3","p-2",3,"disabled"],[4,"ngIf"],["class","alert alert-danger w-50 mx-auto p-1 m-0 small text-center",4,"ngIf"],[1,"alert","alert-danger","mt-2","w-50","mx-auto","p-2","small"],[1,"ms-1","fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","w-50","mx-auto","p-1","m-0","small","text-center"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"Login Now:"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return o.handelForm()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"Email:"),e.qZA(),e._UZ(7,"input",4),e.YNc(8,f,3,2,"div",5),e.qZA(),e.TgZ(9,"div",2)(10,"label",6),e._uU(11,"Password:"),e.qZA(),e._UZ(12,"input",7),e.YNc(13,T,3,2,"div",5),e.qZA(),e.TgZ(14,"button",8),e._uU(15," Register "),e.YNc(16,v,2,0,"span",9),e.qZA()(),e.YNc(17,x,2,1,"p",10),e.qZA()),2&t){let s,m;e.xp6(3),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(s=o.loginForm.get("email"))?null:s.errors)&&(null==(s=o.loginForm.get("email"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.loginForm.get("password"))?null:m.errors)&&(null==(m=o.loginForm.get("password"))?null:m.touched)),e.xp6(1),e.Q6J("disabled",o.loginForm.invalid),e.xp6(2),e.Q6J("ngIf",o.isloading),e.xp6(1),e.Q6J("ngIf",o.errMessage)}},dependencies:[g.ez,g.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return n})()}}]);