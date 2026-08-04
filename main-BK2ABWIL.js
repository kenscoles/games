import{a as N,b as i,c as F,d as O}from"./chunk-VTLCFRQE.js";import{a as G}from"./chunk-WNNNO7YI.js";import{B as V,C as Q,a as B,d as L,z}from"./chunk-N7EDBYXH.js";import{Bb as R,Cb as A,Hb as E,Ja as h,Jb as k,Kb as S,Q as d,U as r,Wa as a,Xa as g,Xb as j,Ya as v,ba as f,gb as w,hb as y,ia as u,mb as M,nb as x,oa as b,ob as C,pb as T,xb as _,yb as m,yc as I,zb as D}from"./chunk-VVMLA7WC.js";var s=()=>{let t=r(i);return sessionStorage.getItem("canView")==="true"?(sessionStorage.removeItem("canView"),!0):(t.navigate(["/menu"]),console.log("False"),!1)};var P=[{path:"",children:[{path:"",redirectTo:"/menu",pathMatch:"full"},{path:"menu",title:"menu",loadComponent:()=>import("./chunk-J2JNFLCE.js").then(t=>t.Menu)},{path:"country",title:"country",loadComponent:()=>import("./chunk-SRUA5BSC.js").then(t=>t.Country)},{path:"world",title:"world",loadComponent:()=>import("./chunk-TBRDWK5X.js").then(t=>t.World)},{path:"test",title:"test",loadComponent:()=>import("./chunk-MNOEUCMH.js").then(t=>t.CountrySearchComponent)},{path:"select",title:"select",loadComponent:()=>import("./chunk-EERWHR6C.js").then(t=>t.Select)},{path:"test1",title:"test1",loadComponent:()=>import("./chunk-NAXL5OU6.js").then(t=>t.Test)},{path:"test2",title:"test2",loadComponent:()=>import("./chunk-FCDMRZGA.js").then(t=>t.Test2)},{path:"styles",title:"styles",canActivate:[s],loadComponent:()=>import("./chunk-SLYXOT7R.js").then(t=>t.Styles)},{path:"master",title:"master",canActivate:[s],loadComponent:()=>import("./chunk-FFS5FJC5.js").then(t=>t.MastermindComponent)}]}];var U={providers:[u(),j(),O(P),I()]};var J=["*",[["mat-toolbar-row"]]],K=["*","mat-toolbar-row"],X=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=v({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),H=(()=>{class t{_elementRef=r(b);_platform=r(L);_document=r(f);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,n,W){if(o&1&&D(W,X,5),o&2){let p;R(p=A())&&(n._toolbarRows=p)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,n){o&2&&(k(n.color?"mat-"+n.color:""),E("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:K,decls:2,vars:0,template:function(o,n){o&1&&(_(J),m(0),m(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var q=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=g({type:t});static \u0275inj=d({imports:[z]})}return t})();function $(t,c){t&1&&(x(0,"mat-toolbar",0)(1,"button",1),S(2,"Menu"),C()()),t&2&&(h(),M("routerLink","/menu"))}var l=class t{state=r(G);router=r(i);title="games";ngOnInit(){this.router.navigate([""])}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["app-root"]],decls:2,vars:1,consts:[[1,"fixed-header"],["matButton","filled",3,"routerLink"]],template:function(e,o){e&1&&(w(0,$,3,1,"mat-toolbar",0),T(1,"router-outlet")),e&2&&y(o.state.showMenuButton()?0:-1)},dependencies:[N,F,Q,V,q,H],encapsulation:2,changeDetection:0})};B(l,U).catch(t=>console.error(t));
