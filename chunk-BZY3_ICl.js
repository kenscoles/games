import{$t as br,Bn as o1,Cr as y,Dn as jD,Dt as WI,F as Ih,H as LI,Hn as ow,I as Iu,In as mu,Jt as as,Ln as n1,Mn as l1,Mr as zw,On as jI,Pt as XI,Qn as rw,S as Eu,Ut as Zi,X as Mh,Xn as r1,Yn as qw,Yt as b,bt as Uh,dn as fd,dt as Rt$1,ft as Rw,gr as wu,hr as wh,i as $w,in as dd,j as HI,l as BI,ln as ew,nt as PI,ot as Qa,pt as Sh,sr as tw,v as Dw,wr as yI,wt as VI,x as Eh,yn as gu,zn as nr}from"./chunk-98kbo7Hr.js";import{E as qn,O as ys,d as Tt$1,p as _s,v as go}from"./main-ZYSTI5T3.js";import{d as Yd,o as Nr,u as Ts}from"./chunk-D0C509IV.js";import{t as Ue}from"./chunk-Cqd58TWB.js";var H=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new q(this.rowIndex,t)}_findMatchingGap(e){if(e>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${e} is wider than grid with cols="${this.tracker.length}".`);let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan}};var q=class{row;col;constructor(e,t){this.row=e,this.col=t}};var Z=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=as({type:n});static ɵinj=br({imports:[Tt$1]})}return n})();var Ct=[`*`];var It=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`;var wt=new b(`MAT_GRID_LIST`);var Y=(()=>{class n{_element=y(nr);_gridList=y(wt,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(qn(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(qn(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}static ɵfac=function(i){return new(i||n)};static ɵcmp=yI({type:n,selectors:[[`mat-grid-tile`]],hostAttrs:[1,`mat-grid-tile`],hostVars:2,hostBindings:function(i,r){i&2&&Eh(`rowspan`,r.rowspan)(`colspan`,r.colspan)},inputs:{rowspan:`rowspan`,colspan:`colspan`},exportAs:[`matGridTile`],ngContentSelectors:Ct,decls:2,vars:0,consts:[[1,`mat-grid-tile-content`]],template:function(i,r){i&1&&(ew(),Iu(0,`div`,0),tw(1),wu())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})}return n})();var Bt=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;var M=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,i,r){this._gutterSize=St(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=r}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?`0`:x(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let r=100/this._cols,s=(this._cols-1)/this._cols;this.setColStyles(e,i,r,s),this.setRowStyles(e,t,r,s)}setColStyles(e,t,i,r){let s=this.getBaseTileSize(i,r),m=this._direction===`rtl`?`right`:`left`;e._setStyle(m,this.getTilePosition(s,t)),e._setStyle(`width`,x(this.getTileSize(s,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}};var J=class extends M{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e}init(e,t,i,r){super.init(e,t,i,r),this.fixedRowHeight=St(this.fixedRowHeight),Bt.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle(`top`,this.getTilePosition(this.fixedRowHeight,t)),e._setStyle(`height`,x(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return[`height`,x(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle([`height`,null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle(`top`,null),t._setStyle(`height`,null)})}};var K=class extends M{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,i,r){let s=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(s,r),e._setStyle(`marginTop`,this.getTilePosition(this.baseTileHeight,t)),e._setStyle(`paddingTop`,x(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return[`paddingBottom`,x(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle([`paddingBottom`,null]),e._tiles.forEach(t=>{t._setStyle(`marginTop`,null),t._setStyle(`paddingTop`,null)})}_parseRatio(e){let t=e.split(`:`);t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}};var X=class extends M{setRowStyles(e,t){let i=100/this._rowspan,r=(this._rows-1)/this._rows,s=this.getBaseTileSize(i,r);e._setStyle(`top`,this.getTilePosition(s,t)),e._setStyle(`height`,x(this.getTileSize(s,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle(`top`,null),t._setStyle(`height`,null)})}};function x(n){return`calc(${n})`}function St(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var Et=`fit`;var Tt=(()=>{class n{_element=y(nr);_dir=y(go,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter=`1px`;_tileStyler;_tiles;get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(qn(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??``}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??``}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler(`1:1`)}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===Et?this._tileStyler=new X:t&&t.indexOf(`:`)>-1?this._tileStyler=new K(t):this._tileStyler=new J(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new H);let t=this._tileCoordinator,i=this._tiles.filter(s=>!s._gridList||s._gridList===this),r=this._dir?this._dir.value:`ltr`;this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,r),i.forEach((s,m)=>{let C=t.positions[m];this._tileStyler.setStyle(s,C.row,C.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static ɵfac=function(i){return new(i||n)};static ɵcmp=yI({type:n,selectors:[[`mat-grid-list`]],contentQueries:function(i,r,s){if(i&1&&Mh(s,Y,5),i&2){let m;rw(m=ow())&&(r._tiles=m)}},hostAttrs:[1,`mat-grid-list`],hostVars:1,hostBindings:function(i,r){i&2&&Eh(`cols`,r.cols)},inputs:{cols:`cols`,gutterSize:`gutterSize`,rowHeight:`rowHeight`},exportAs:[`matGridList`],features:[$w([{provide:wt,useExisting:n}])],ngContentSelectors:Ct,decls:2,vars:0,template:function(i,r){i&1&&(ew(),Iu(0,`div`),tw(1),wu())},styles:[It],encapsulation:2})}return n})();var Mt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=as({type:n});static ɵinj=br({imports:[Z,Tt$1,Z]})}return n})();var A=class n{#t;debounceTime=r1(0,{transform:l1});value=o1();debounceClick=n1();constructor(){Qa(()=>{console.log(this.value()),console.log(this.debounceTime())})}handleInput=e=>{let i=e.target.value;clearTimeout(this.#t),!i||!this.debounceTime()?this.value.set(i):this.#t=setTimeout(()=>this.value.set(i),this.debounceTime())};handleClick=()=>{clearTimeout(this.#t),this.#t=setTimeout(()=>{this.debounceClick.emit(``)},this.debounceTime())};static ɵfac=function(t){return new(t||n)};static ɵdir=gu({type:n,selectors:[[``,`debounceTime`,``]],hostBindings:function(t,i){t&1&&Sh(`input`,function(s){return i.handleInput(s)})(`click`,function(){return i.handleClick()})},inputs:{debounceTime:[1,`debounceTime`],value:[1,`value`]},outputs:{value:`valueChange`,debounceClick:`debounceClick`}})};var F=class n{transform(e){return new Array(e).fill(1)}static ɵfac=function(t){return new(t||n)};static ɵpipe=mu({name:`fill`,type:n,pure:!0})};function Gt(n,e){if(n&1&&wh(0,`td`),n&2){let t=e.$implicit,i=XI().$implicit;Dw(XI().getStyle(i.combination.items[t-1].toString()))}}function $t(n,e){n&1&&wh(0,`td`,4)}function Ht(n,e){n&1&&(Zi(0,`li`,5),Rw(1,`⚫`),Eu())}function At(n,e){n&1&&(Zi(0,`li`,6),Rw(1,`⚪`),Eu())}function Ft(n,e){if(n&1&&(Zi(0,`tr`)(1,`td`,2),Rw(2),Eu(),VI(3,Gt,1,2,`td`,3,BI),PI(5,$t,1,0,`td`,4),Zi(6,`td`,4),VI(7,Ht,2,0,`li`,5,jI),zw(9,`fill`),VI(10,At,2,0,`li`,6,jI),zw(12,`fill`),Eu()()),n&2){let t=e.$implicit,i=e.$index,r=XI();jD(2),Uh(i+1),jD(),HI(r.util.numberArray(1,r.board.fields)),jD(2),LI(!t.correct&&!t.correctColors?5:-1),jD(2),HI(qw(9,2,t.correct)),jD(3),HI(qw(12,4,t.correctColors))}}function Lt(n,e){n&1&&(Zi(0,`td`),Rw(1,`\xA0`),Eu())}function Pt(n,e){if(n&1&&(Zi(0,`tr`)(1,`td`),Rw(2,`\xA0`),Eu(),VI(3,Lt,2,0,`td`,null,jI),Zi(5,`td`),Rw(6,`\xA0`),Eu()()),n&2){let t=XI();jD(3),HI(t.util.numberArray(1,t.board.fields))}}function Rt(n,e){if(n&1&&(Zi(0,`td`)(1,`div`,8)(2,`span`,9),Rw(3,`⚪`),Eu()()()),n&2){let t=e.$implicit,i=XI(2);jD(2),Dw(i.getStyle(i.combination.items[t-1].toString()))}}function Nt(n,e){if(n&1){let t=WI();Zi(0,`tr`)(1,`td`),Rw(2,`\xA0`),Eu(),VI(3,Rt,4,2,`td`,null,jI),Zi(5,`td`)(6,`button`,7),Sh(`debounceClick`,function(){dd(t);return fd(XI().onGuess())}),Rw(7,`Guess`),Eu()()()}if(n&2){let t=XI();jD(3),HI(t.util.numberArray(1,t.board.fields)),jD(3),Ih(`debounceTime`,800)}}function Ot(n,e){if(n&1&&wh(0,`td`),n&2){let t=e.$implicit,i=XI(2);Dw(i.getStyle(i.board.secretCombination.items[t-1].toString()))}}function Vt(n,e){if(n&1&&(Zi(0,`tr`)(1,`td`,10),Rw(2,`Game lost`),Eu()(),wh(3,`tr`),Zi(4,`tr`)(5,`td`),Rw(6,`Secret`),Eu(),VI(7,Ot,1,2,`td`,3,jI),Zi(9,`td`),Rw(10,`\xA0`),Eu()()),n&2){let t=XI();jD(7),HI(t.util.numberArray(1,t.board.fields))}}function jt(n,e){n&1&&(Zi(0,`tr`)(1,`td`,10),Rw(2,`Game won`),Eu()())}function Wt(n,e){if(n&1){let t=WI();Zi(0,`div`)(1,`button`,11),Sh(`click`,function(){dd(t);return fd(XI().newGame())}),Rw(2,`Play again`),Eu()()}}function Qt(n,e){if(n&1){let t=WI();Zi(0,`mat-grid-tile`)(1,`button`,13),Sh(`click`,function(){let r=dd(t).$implicit,s=XI().$implicit,m=XI(2);return fd(m.combination.items[r-1]=s)}),Rw(2,`colour`),Eu()()}if(n&2){let t=XI().$implicit,i=XI(2);jD(),Dw(i.getStyle(t.toString()))}}function Ut(n,e){if(n&1&&VI(0,Qt,3,2,`mat-grid-tile`,null,jI),n&2){let t=XI(2);HI(t.util.numberArray(1,t.board.fields))}}function qt(n,e){if(n&1&&(Zi(0,`div`,1)(1,`mat-grid-list`,12),VI(2,Ut,2,0,null,null,jI),Eu()()),n&2){let t=XI();jD(2),HI(t.util.numberArray(1,t.board.colors))}}var L=class n{constructor(e){this.util=e}util;board={maxTries:7,fields:4,colors:6,guesses:[],secretCombination:{items:[]}};combination={items:[]};gameWon=!1;gameLost=!1;correct=[];letters=[];tally1=[];tally2=[];removeIndex=[];match=0;count=0;ngOnInit(){console.log(`board view created`),this.board.secretCombination=this.createSecretCombination();for(let e=0;e<this.board.fields;e++)this.combination.items[e]=1}newGame(){console.log(`board view created`),this.board.secretCombination=this.createSecretCombination();for(let e=0;e<this.board.fields;e++)this.combination.items[e]=1;this.board.maxTries=7,this.board.fields=4,this.board.colors=6,this.board.guesses=[],this.gameWon=!1,this.gameLost=!1}onGuess(){console.log(`guessed ie this combination`,this.combination);var e=this.evaluateGuess(this.combination);(1+this.board.guesses.length).toString();e.correct==this.board.fields&&(this.gameWon=!0),this.board.guesses.push(e),!this.gameWon&&this.board.guesses.length==this.board.maxTries&&(this.gameLost=!0)}evaluateGuess(e){console.log(`secret: `,this.board.secretCombination);var t={items:[]};this.match=0,this.count=0,this.letters=[];for(let u=0;u<this.board.fields;u++)t.items[u]=e.items[u],this.letters[u]=t.items[u],this.correct[u]=this.board.secretCombination.items[u];this.removeIndex=[],this.letters.forEach((u,tt)=>{u==this.correct[tt]&&(this.removeIndex.push(tt),this.count++)}),this.removeArrayValues(this.letters,this.removeIndex),this.removeArrayValues(this.correct,this.removeIndex),console.log(`after processing phase 1...black pegs = `,this.count),this.tally1=[],this.tally2=[];for(var i=1;i<1+this.board.colors;i++){for(var r=0,s=0,m=0;m<this.correct.length;m++)i==this.correct[m]&&r++,i==this.letters[m]&&s++;this.tally1.push(r),this.tally2.push(s)}for(var i=0;i<6;i++)this.tally1[i]&&this.tally2[i]&&(this.match++,console.log(this.tally1[i],this.tally2[i],i)),this.tally1[i]>1&&this.tally2[i]>1&&this.match++;var C={combination:t,correct:this.count,correctColors:this.match};return console.log(`Guess:`,C),C}createSecretCombination(){var e={items:[]};for(let t=0;t<this.board.fields;t++)e.items.push(this.randomNumber(this.board.colors));return e}randomNumber(e){return Math.floor(Math.random()*e)+1}removeArrayValues(e,t){t=t.sort();for(var i=t.length-1;i>=0;i--)e.splice(t[i],1);return e}getStyle(e){return e==`1`?`background:rgb(255,0,0);color: rgb(255,0,0)`:e==`2`?`background:rgb(255,255,0);color: rgb(255,255,0)`:e==`3`?`background:rgb(0, 0, 255);color: rgb(0,0,255)`:e==`4`?`background:rgb(0,255,0);color: rgb(0,255,0)`:e==`5`?`background:rgb(132, 34, 197);color: rgb(132, 34, 197)`:e==`6`?`background:rgb(112, 233, 233); color: rgb(112, 233, 233)`:`background:rgb(60, 25, 189);color: rgb(0,0,0)`}static ɵfac=function(t){return new(t||n)(Rt$1(Nr))};static ɵcmp=yI({type:n,selectors:[[`board`]],decls:19,vars:5,consts:[[`colspan`,`4`],[1,`box`],[2,`color`,`rgb(0,0,0)`],[3,`style`],[1,`flex-container`],[2,`color`,`black`],[2,`color`,`white`],[`mat-raised-button`,``,`color`,`primary`,3,`debounceClick`,`debounceTime`],[2,`width`,`50px`,`font-size`,`20px`],[2,`width`,`100px`],[`colspan`,`6`],[`mat-raised-button`,``,`color`,`primary`,3,`click`],[`cols`,`4`,`rowHeight`,`30px`],[2,`width`,`50px`,3,`click`]],template:function(t,i){t&1&&(Zi(0,`table`)(1,`tr`)(2,`th`),Rw(3,`Try`),Eu(),Zi(4,`th`,0),Rw(5,`Combination`),Eu(),Zi(6,`th`),Rw(7,`Result`),Eu()(),wh(8,`tr`),VI(9,Ft,13,6,`tr`,null,BI),VI(11,Pt,7,0,`tr`,null,jI),PI(13,Nt,8,1,`tr`),PI(14,Vt,11,0),PI(15,jt,3,0,`tr`),Eu(),wh(16,`br`),PI(17,Wt,3,0,`div`),PI(18,qt,4,0,`div`,1)),t&2&&(jD(9),HI(i.board.guesses),jD(2),HI(i.util.numberArray(i.board.guesses.length+1,i.board.maxTries)),jD(2),LI(!i.gameWon&&!i.gameLost?13:-1),jD(),LI(i.gameLost?14:-1),jD(),LI(i.gameWon?15:-1),jD(2),LI(i.gameWon||i.gameLost?17:-1),jD(),LI(!i.gameWon&&!i.gameLost?18:-1))},dependencies:[Ts,ys,_s,Ue,Yd,Mt,Tt,Y,A,F],styles:[`.flex-container[_ngcontent-%COMP%]{display:flex;background:gray;flex-direction:row;justify-content:left;padding:0;margin:1px;list-style:none;width:80px}option[_ngcontent-%COMP%]:checked{box-shadow:0 0 0 3px #0f0;color:red}@media only screen and (min-width:1000px){.flex-container[_ngcontent-%COMP%]{width:135px}table[_ngcontent-%COMP%]{font-size:x-large}tr[_ngcontent-%COMP%]{line-height:30px}}.box[_ngcontent-%COMP%]{width:60%;max-height:200px;margin-left:15px}`]})};var kt=class n{title=`mastermind`;static ɵfac=function(t){return new(t||n)};static ɵcmp=yI({type:n,selectors:[[`app-mastermind`]],decls:10,vars:0,consts:[[1,`center`],[`role`,`main`,1,`content`]],template:function(t,i){t&1&&(wh(0,`br`),Zi(1,`header`)(2,`div`,0),Rw(3,`Mastermind`),Eu()(),wh(4,`br`),Zi(5,`div`,1),wh(6,`board`),Zi(7,`footer`)(8,`h6`),Rw(9,`KSC - 23 July 2025 version`),Eu()()())},dependencies:[L],styles:[`.center[_ngcontent-%COMP%]{margin:auto;width:100%;font-size:20pt;text-align:center}@media only screen and (min-width:1000px){.center[_ngcontent-%COMP%]{font-size:30pt}}`,`.content[_ngcontent-%COMP%]{display:flex;background-color:#dabbb0;flex-direction:column;align-items:center}footer[_ngcontent-%COMP%]{margin-top:8px;display:flex;align-items:center;line-height:20px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}`]})};export{kt as MastermindComponent};