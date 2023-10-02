// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,d,"e"),e=p.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,g,"e-0$1"),r.alternate&&(e=p.call(e,w,"$1."),e=p.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function A(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+A(e):A(e)+r}var E=String.fromCharCode,U=isNaN,V=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function j(r){var t,n,e,o,a,c,l,s,p;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(e=r[s]))c+=e;else{if(t=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,U(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,U(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!U(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=U(a)?String(e.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function N(r){var t,n,e,i;for(n=[],i=0,e=I.exec(r);e;)(t=r.slice(i,I.lastIndex-e[0].length)).length&&n.push(t),n.push(T(e)),i=I.lastIndex,e=I.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function _(r){return"string"==typeof r}function O(r){var t,n,e;if(!_(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=N(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return j.apply(null,n)}var x=Object.prototype,k=x.toString,B=x.__defineGetter__,D=x.__defineSetter__,L=x.__lookupGetter__,W=x.__lookupSetter__,P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(r,t)||W.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,t,n.get),a&&D&&D.call(r,t,n.set),r};function H(r,t,n){P(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function R(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var $=R();function G(){return $&&"symbol"==typeof Symbol.toStringTag}var M,C=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",X=G()?function(r){var t,n,e,i,o;if(null==r)return C.call(r);n=r[z],o=z,t=null!=(i=r)&&Z.call(i,o);try{r[z]=void 0}catch(t){return C.call(r)}return e=C.call(r),t?r[z]=n:delete r[z],e}:function(r){return C.call(r)},Y="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,t,n;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Y&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=M,tr="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr([1,3.14,-3.14,NaN]),n=t,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ir,or=Q,ar="function"==typeof Uint8Array,ur="function"==typeof Uint8Array?Uint8Array:null,fr="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,256,257]),n=t,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===X(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,lr=ir,sr="function"==typeof Uint16Array,pr="function"==typeof Uint16Array?Uint16Array:null,yr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===X(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,wr={uint16:cr,uint8:lr};(gr=new wr.uint16(1))[0]=4660;var vr=52===new wr.uint8(gr.buffer)[0],hr=!0===vr?1:0,dr=new or(1),br=new rr(dr.buffer);function mr(r){return dr[0]=r,br[hr]}var Ar=1023;function Fr(r){var t=mr(r);return(t=(2146435072&t)>>>20)-Ar|0}var Er=Number.POSITIVE_INFINITY,Ur=Number,Vr=Ur.NEGATIVE_INFINITY;function Sr(r){return r!=r}var jr=Math.floor;function Ir(r){return jr(r)===r}function Tr(r){return Ir(r/2)}function Nr(r){return Tr(r>0?r-1:r+1)}function _r(r){return r===Er||r===Vr}var Or,xr,kr=Math.sqrt;function Br(r){return Math.abs(r)}function Dr(r,t,n){P(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===vr?(Or=1,xr=0):(Or=0,xr=1);var Lr={HIGH:Or,LOW:xr},Wr=new or(1),Pr=new rr(Wr.buffer),Hr=Lr.HIGH,Rr=Lr.LOW;function $r(r,t,n,e){return Wr[0]=r,t[e]=Pr[Hr],t[e+n]=Pr[Rr],t}function Gr(r){return $r(r,[0,0],1,0)}Dr(Gr,"assign",$r);var Mr=!0===vr?0:1,Cr=new or(1),Zr=new rr(Cr.buffer);function qr(r,t){return Cr[0]=r,Zr[Mr]=t>>>0,Cr[0]}function zr(r){return 0|r}var Xr,Yr,Jr=2147483647;!0===vr?(Xr=1,Yr=0):(Xr=0,Yr=1);var Kr={HIGH:Xr,LOW:Yr},Qr=new or(1),rt=new rr(Qr.buffer),tt=Kr.HIGH,nt=Kr.LOW;function et(r,t){return rt[tt]=r,rt[nt]=t,Qr[0]}var it=[0,0];function ot(r,t){var n,e;return Gr.assign(r,it,1,0),n=it[0],n&=Jr,e=mr(t),et(n|=e&=2147483648,it[1])}var at=!0===vr?1:0,ut=new or(1),ft=new rr(ut.buffer);function ct(r,t){return ut[0]=r,ft[at]=t>>>0,ut[0]}var lt=1048576,st=[1,1.5],pt=[0,.5849624872207642],yt=[0,1.350039202129749e-8];function gt(r,t,n,e){return Sr(r)||_r(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Br(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}function wt(r){return gt(r,[0,0],1,0)}Dr(wt,"assign",gt);var vt=[0,0],ht=[0,0],dt=1048575,bt=1048576;function mt(r,t,n){var e,i,o,a,u,f,c,l,s,p,y,g,w,v;return s=((l=r&Jr|0)>>20)-Ar|0,c=0,l>1071644672&&(i=ct(0,((c=r+(bt>>s+1)>>>0)&~(dt>>(s=((c&Jr)>>20)-Ar|0)))>>>0),c=(c&dt|bt)>>20-s>>>0,r<0&&(c=-c),t-=i),r=zr(r=mr(f=1-((f=(o=.6931471824645996*(i=qr(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?(y=f,f=0===(g=c)||0===y||Sr(y)||_r(y)?y:(gt(y,vt,1,0),g+=vt[1],(g+=Fr(y=vt[0]))<-1074?ot(0,y):g>1023?y<0?Vr:Er:(g<=-1023?(g+=52,v=2220446049250313e-31):v=1,Gr.assign(y,ht,1,0),w=ht[0],w&=2148532223,v*et(w|=g+Ar<<20,ht[1])))):f=ct(f,r),f}var At=1083179008,Ft=1e300,Et=1e-300,Ut=[0,0],Vt=[0,0];function St(r,t){var n,e,i,o,a,u,f,c,l,s,p,y,g,w;if(Sr(r)||Sr(t))return NaN;if(Gr.assign(t,Ut,1,0),a=Ut[0],0===Ut[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return kr(r);if(-.5===t)return 1/kr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_r(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Br(r)<1==(t===Er)?0:Er}(r,t)}if(Gr.assign(r,Ut,1,0),o=Ut[0],0===Ut[1]){if(0===o)return function(r,t){return t===Vr?Er:t===Er?0:t>0?Nr(t)?r:0:Nr(t)?ot(Er,r):Er}(r,t);if(1===r)return 1;if(-1===r&&Nr(t))return-1;if(_r(r))return r===Vr?St(-0,-t):t<0?0:Er}if(r<0&&!1===Ir(t))return(r-r)/(r-r);if(i=Br(r),n=o&Jr|0,e=a&Jr|0,f=a>>>31|0,u=(u=o>>>31|0)&&Nr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(mr(r)&Jr)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*Ft*Ft:u*Et*Et;if(n>1072693248)return 0===f?u*Ft*Ft:u*Et*Et;p=function(r,t){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=qr(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(Vt,i)}else p=function(r,t,n){var e,i,o,a,u,f,c,l,s,p,y,g,w,v,h,d,b,m,A,F,E;return m=0,n<lt&&(m-=53,n=mr(t*=9007199254740992)),m+=(n>>20)-Ar|0,n=1072693248|(A=1048575&n|0),A<=235662?F=0:A<767610?F=1:(F=0,m+=1,n-=lt),a=qr(i=(d=(t=ct(t,n))-(c=st[F]))*(b=1/(t+c)),0),e=524288+(n>>1|536870912),f=ct(0,e+=F<<18),h=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=qr(f=3+(o=a*a)+(h+=(u=b*(d-a*f-a*(t-(f-c))))*(a+i)),0),w=(y=-7.028461650952758e-9*(s=qr(s=(d=a*f)+(b=u*f+(h-(f-3-o))*i),0))+.9617966939259756*(b-(s-d))+yt[F])-((g=qr(g=(p=.9617967009544373*s)+y+(l=pt[F])+(v=m),0))-v-l-p),r[0]=g,r[1]=w,r}(Vt,i,n);if(y=(s=(t-(c=qr(t,0)))*p[0]+t*p[1])+(l=c*p[0]),Gr.assign(y,Ut,1,0),g=zr(Ut[0]),w=zr(Ut[1]),g>=At){if(0!=(g-At|w))return u*Ft*Ft;if(s+8008566259537294e-32>y-l)return u*Ft*Ft}else if((g&Jr)>=1083231232){if(0!=(g-3230714880|w))return u*Et*Et;if(s<=y-l)return u*Et*Et}return u*(y=mt(g,l,s))}var jt,It=R(),Tt=Object.prototype.toString,Nt=Object.prototype.hasOwnProperty,_t="function"==typeof Symbol?Symbol.toStringTag:"",Ot=It&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,i,o;if(null==r)return Tt.call(r);n=r[_t],o=_t,t=null!=(i=r)&&Nt.call(i,o);try{r[_t]=void 0}catch(t){return Tt.call(r)}return e=Tt.call(r),t?r[_t]=n:delete r[_t],e}:function(r){return Tt.call(r)},xt="function"==typeof Uint8Array,kt="function"==typeof Uint8Array?Uint8Array:null,Bt="function"==typeof Uint8Array?Uint8Array:void 0;jt=function(){var r,t,n;if("function"!=typeof kt)return!1;try{t=new kt(t=[1,3.14,-3.14,256,257]),n=t,r=(xt&&n instanceof Uint8Array||"[object Uint8Array]"===Ot(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Bt:function(){throw new Error("not implemented")};var Dt,Lt=jt,Wt="function"==typeof Uint16Array,Pt="function"==typeof Uint16Array?Uint16Array:null,Ht="function"==typeof Uint16Array?Uint16Array:void 0;Dt=function(){var r,t,n;if("function"!=typeof Pt)return!1;try{t=new Pt(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Wt&&n instanceof Uint16Array||"[object Uint16Array]"===Ot(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ht:function(){throw new Error("not implemented")};var Rt,$t={uint16:Dt,uint8:Lt};Rt=function(){var r;return(r=new $t.uint16(1))[0]=4660,52===new $t.uint8(r.buffer)[0]}();var Gt,Mt=Rt,Ct="function"==typeof DataView,Zt="function"==typeof ArrayBuffer,qt="function"==typeof Float64Array,zt="function"==typeof Float64Array?Float64Array:null,Xt="function"==typeof Float64Array?Float64Array:void 0;Gt=function(){var r,t,n;if("function"!=typeof zt)return!1;try{t=new zt([1,3.14,-3.14,NaN]),n=t,r=(qt&&n instanceof Float64Array||"[object Float64Array]"===Ot(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xt:function(){throw new Error("not implemented")};var Yt,Jt=Gt,Kt="function"==typeof ArrayBuffer?ArrayBuffer:null,Qt="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Yt=function(){var r,t,n,e;if("function"!=typeof Kt)return!1;try{n=new Kt(16),e=n,(r=(Zt&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===Ot(e))&&"function"==typeof Kt.isView)&&((t=new Jt(n))[0]=-3.14,t[1]=NaN,r=r&&Kt.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?Qt:function(){throw new Error("not implemented")};var rn,tn=Yt,nn="function"==typeof DataView?DataView:null,en="function"==typeof DataView?DataView:void 0;rn=function(){var r,t,n,e;if("function"!=typeof nn)return!1;try{n=new tn(24),t=new nn(n,8),e=t,(r=(Ct&&e instanceof DataView||"[object DataView]"===Ot(e))&&"function"==typeof t.getFloat64&&"function"==typeof t.setFloat64)&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),r=r&&t.buffer===n&&16===t.byteLength&&8===t.byteOffset&&-3.14===t.getFloat64(0)&&t.getFloat64(8)!=t.getFloat64(8))}catch(t){r=!1}return r}()?en:function(){throw new Error("not implemented")};var on=rn,an=4294967296,un=new Lt(8),fn=!0===vr?0:1,cn=new or(1),ln=new rr(cn.buffer);function sn(r){return"number"==typeof r}var pn=Ur.prototype.toString,yn=G();function gn(r){return"object"==typeof r&&(r instanceof Ur||(yn?function(r){try{return pn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function wn(r){return sn(r)||gn(r)}function vn(r){return r<Er&&r>Vr&&Ir(r)}function hn(r){return sn(r)&&vn(r)}function dn(r){return gn(r)&&vn(r.valueOf())}function bn(r){return hn(r)||dn(r)}function mn(r){return hn(r)&&r>=0}function An(r){return dn(r)&&r.valueOf()>=0}function Fn(r){return mn(r)||An(r)}function En(r){return"string"==typeof r}Dr(wn,"isPrimitive",sn),Dr(wn,"isObject",gn),Dr(bn,"isPrimitive",hn),Dr(bn,"isObject",dn),Dr(Fn,"isPrimitive",mn),Dr(Fn,"isObject",An);var Un=String.prototype.valueOf,Vn=G();function Sn(r){return"object"==typeof r&&(r instanceof String||(Vn?function(r){try{return Un.call(r),!0}catch(r){return!1}}(r):"[object String]"===X(r)))}function jn(r){return En(r)||Sn(r)}Dr(jn,"isPrimitive",En),Dr(jn,"isObject",Sn);var In=9007199254740991,Tn=void 0!==String.prototype.repeat,Nn=String.prototype.repeat,_n=Tn?function(r,t){return Nn.call(r,t)}:function(r,t){var n,e;if(0===r.length||0===t)return"";for(n="",e=t;1==(1&e)&&(n+=r),0!=(e>>>=1);)r+=r;return n},On=Math.ceil;function xn(r,t,n){var e=(t-r.length)/n.length;return e<=0?r:(e=On(e),r+_n(n,e))}var kn=Math.ceil;function Bn(r,t,n){var e=(t-r.length)/n.length;return e<=0?r:(e=kn(e),_n(n,e)+r)}function Dn(r,t){if(!En(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!mn(t))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));return _n(r,t)}function Ln(r){for(var t,n="";r>0;)n=(t=r/2)===(r=jr(t))?"0"+n:"1"+n;return n}var Wn,Pn=1075,Hn="function"==typeof Math.fround?Math.fround:null,Rn="function"==typeof Float32Array,$n="function"==typeof Float32Array?Float32Array:null,Gn="function"==typeof Float32Array?Float32Array:void 0;Wn=function(){var r,t,n;if("function"!=typeof $n)return!1;try{t=new $n([1,3.14,-3.14,5e40]),n=t,r=(Rn&&n instanceof Float32Array||"[object Float32Array]"===X(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Er}catch(t){r=!1}return r}()?Gn:function(){throw new Error("not implemented")};var Mn,Cn=new Wn(1),Zn="function"==typeof Hn?Hn:function(r){return Cn[0]=r,Cn[0]},qn="function"==typeof DataView,zn="function"==typeof ArrayBuffer,Xn="function"==typeof ArrayBuffer?ArrayBuffer:null,Yn="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Mn=function(){var r,t,n,e;if("function"!=typeof Xn)return!1;try{n=new Xn(16),e=n,(r=(zn&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===X(e))&&"function"==typeof Xn.isView)&&((t=new or(n))[0]=-3.14,t[1]=NaN,r=r&&Xn.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?Yn:function(){throw new Error("not implemented")};var Jn,Kn=Mn,Qn="function"==typeof DataView?DataView:null,re="function"==typeof DataView?DataView:void 0;Jn=function(){var r,t,n,e;if("function"!=typeof Qn)return!1;try{n=new Kn(24),t=new Qn(n,8),e=t,(r=(qn&&e instanceof DataView||"[object DataView]"===X(e))&&"function"==typeof t.getFloat64&&"function"==typeof t.setFloat64)&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),r=r&&t.buffer===n&&16===t.byteLength&&8===t.byteOffset&&-3.14===t.getFloat64(0)&&t.getFloat64(8)!=t.getFloat64(8))}catch(t){r=!1}return r}()?re:function(){throw new Error("not implemented")};var te=Jn;function ne(r){var t,n,e,i;return t=new lr(8),0===r||(i=(4294967295&r)>>>0,e=jr(r/4294967296),n=new te(t.buffer),vr?(n.setUint32(0,i,vr),n.setUint32(4,e,vr)):(n.setUint32(0,e,vr),n.setUint32(4,i,vr))),t}var ee=new lr(8),ie=new te(ee.buffer);Dr(ne,"assign",(function(r,t,n,e){var i,o,a;if(0===r){for(a=0;a<ee.length;a++)t[e]=0,e+=n;return t}for(o=(4294967295&r)>>>0,i=jr(r/4294967296),vr?(ie.setUint32(0,o,vr),ie.setUint32(4,i,vr)):(ie.setUint32(0,i,vr),ie.setUint32(4,o,vr)),a=0;a<ee.length;a++)t[e]=ee[a],e+=n;return t}));var oe={};H(oe,"exponent",Fr),H(oe,"fromBinaryString",(function(r){var t,n,e;if(64!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(t="1"===r[0]?-1:1,e=parseInt(r.substring(1,12),2)-Ar,n=function(r){var t,n=0;for(t=0;t<r.length;t++)"1"===r[t]&&(n+=St(2,-(t+1)));return n}(r.substring(12)),-1023===e){if(0===n)return 1===t?0:-0;e=-1022}else{if(1024===e)return 0===n?1===t?Er:Vr:NaN;n+=1}return t*n*St(2,e)})),H(oe,"fromInt64Bytes",(function(r,t,n){var e,i,o,a,u;if(1===t)a=r;else{for(a=un,u=0;u<8;u++)a[u]=r[n],n+=t;n=0}return e=new on(a.buffer,a.byteOffset,a.byteLength),Mt?(o=e.getInt32(n,Mt),i=e.getInt32(n+4,Mt)):(i=e.getInt32(n,Mt),o=e.getInt32(n+4,Mt)),o<0&&(o+=an),i*an+o})),H(oe,"fromWords",et),H(oe,"getHighWord",mr),H(oe,"getLowWord",(function(r){return cn[0]=r,ln[fn]})),H(oe,"normalize",wt),H(oe,"setHighWord",ct),H(oe,"setLowWord",qr),H(oe,"signbit",(function(r){return!!(mr(r)>>>31)})),H(oe,"toBinaryString",(function(r){var t,n,e,i,o,a,u;if(n=r<0||function(r){return 0===r&&1/r===Vr}(r)?"1":"0",r===Er||r===Vr)return n+(i=Dn("1",11))+(e=Dn("0",52));if(Sr(r))return n+(i=Dn("1",11))+(e="1"+Dn("0",51));if(0===r)return n+(i=Dn("0",11))+(e=Dn("0",52));if(a=(r=Br(r))-(o=jr(r)),o=Ln(o),a=function(r){var t,n,e,i;if(t="",0===r)return t;for(i=Pn,e=0;e<Pn&&((n=2*r)>=1?(r=n-1,t+="1",i===Pn&&(i=e)):(r=n,t+="0"),!(1===n||e-i>54));e++);return t}(a),o)i=o.length-1;else{for(u=0;u<a.length;u++)if("1"===a[u]){t=u+1;break}i=-t}return e=o+a,i<0?(i<=-1023&&(t=1022),e=e.substring(t)):e=e.substring(1),i=function(r,t,n){var e;if(!En(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!mn(t))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!En(e=n))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(t>In)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return Bn(r,t,e)}(i=Ln(i+Ar),11,"0"),e=function(r,t,n){var e;if(!En(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!mn(t))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!En(e=n))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else e=" ";if(t>In)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return xn(r,t,e)}(e,52,"0").substring(0,52),n+i+e})),H(oe,"float64ToFloat32",Zn),H(oe,"float64ToInt32",(function(r){return 0|r})),H(oe,"float64ToInt64Bytes",ne),H(oe,"float64ToUint32",(function(r){return r>>>0})),H(oe,"toWords",Gr);var ae={};return H(ae,"base",oe),H(ae,"reviver",(function(r,t){if(null!==t&&"object"==typeof t&&"float64"===t.type){if("NaN"===t.value)return NaN;if("+Infinity"===t.value)return Er;if("-Infinity"===t.value)return Vr}return t})),H(ae,"toJSON",(function(r){if("number"!=typeof r)throw new TypeError(O("invalid argument. Must provide a number. Value: `%s`.",r));return r!=r?{type:"float64",value:"NaN"}:r===Er?{type:"float64",value:"+Infinity"}:r===Vr?{type:"float64",value:"-Infinity"}:r})),ae},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=t();
//# sourceMappingURL=browser.js.map
