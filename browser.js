// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(t){return"number"==typeof t}function e(t){var r,n="";for(r=0;r<t;r++)n+="0";return n}function i(t,r,n){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=n?t+e(o):e(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,e,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(e=(-u).toString(r),t.precision&&(e=i(e,t.precision,t.padRight)),e="-"+e):(e=u.toString(r),u||t.precision?t.precision&&(e=i(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===a.call(t.specifier)?a.call(e):o.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(t){return"string"==typeof t}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function m(t){var r,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((r=t.precision)>0&&(r-=1),e=i.toExponential(r)):e=i.toPrecision(t.precision),t.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,d,"e"),e=p.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,g,"e-0$1"),t.alternate&&(e=p.call(e,w,"$1."),e=p.call(e,v,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===s.call(t.specifier)?s.call(e):l.call(e)}function A(t){var r,n="";for(r=0;r<t;r++)n+=" ";return n}function F(t,r,n){var e=r-t.length;return e<0?t:t=n?t+A(e):A(e)+t}var E=String.fromCharCode,U=isNaN,V=Array.isArray;function S(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function j(t){var r,n,e,o,a,c,l,s,p;if(!V(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",l=1,s=0;s<t.length;s++)if(f(e=t[s]))c+=e;else{if(r=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,U(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(r&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,U(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,r=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=r?e.precision:-1;break;case"c":if(!U(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=U(a)?String(e.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function N(t){var r,n,e,i;for(n=[],i=0,e=I.exec(t);e;)(r=t.slice(i,I.lastIndex-e[0].length)).length&&n.push(r),n.push(T(e)),i=I.lastIndex,e=I.exec(t);return(r=t.slice(i)).length&&n.push(r),n}function _(t){return"string"==typeof t}function O(t){var r,n,e;if(!_(t))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=N(t),(n=new Array(arguments.length))[0]=r,e=1;e<n.length;e++)n[e]=arguments[e];return j.apply(null,n)}var x=Object.prototype,k=x.toString,B=x.__defineGetter__,D=x.__defineSetter__,L=x.__lookupGetter__,W=x.__lookupSetter__,P=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,n){var e,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(t,r)||W.call(t,r)?(e=t.__proto__,t.__proto__=x,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(t,r,n.get),a&&D&&D.call(t,r,n.set),t};function H(t,r,n){P(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return R&&"symbol"==typeof Symbol.toStringTag}var G,M=Object.prototype.toString,C=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",z=$()?function(t){var r,n,e,i,o;if(null==t)return M.call(t);n=t[q],o=q,r=null!=(i=t)&&C.call(i,o);try{t[q]=void 0}catch(r){return M.call(t)}return e=M.call(t),r?t[q]=n:delete t[q],e}:function(t){return M.call(t)},X="function"==typeof Uint32Array,Y="function"==typeof Uint32Array?Uint32Array:null,J="function"==typeof Uint32Array?Uint32Array:void 0;G=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(X&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?J:function(){throw new Error("not implemented")};var K,Q=G,tt="function"==typeof Float64Array,rt="function"==typeof Float64Array?Float64Array:null,nt="function"==typeof Float64Array?Float64Array:void 0;K=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt([1,3.14,-3.14,NaN]),n=r,t=(tt&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?nt:function(){throw new Error("not implemented")};var et,it=K,ot="function"==typeof Uint8Array,at="function"==typeof Uint8Array?Uint8Array:null,ut="function"==typeof Uint8Array?Uint8Array:void 0;et=function(){var t,r,n;if("function"!=typeof at)return!1;try{r=new at(r=[1,3.14,-3.14,256,257]),n=r,t=(ot&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ut:function(){throw new Error("not implemented")};var ft,ct=et,lt="function"==typeof Uint16Array,st="function"==typeof Uint16Array?Uint16Array:null,pt="function"==typeof Uint16Array?Uint16Array:void 0;ft=function(){var t,r,n;if("function"!=typeof st)return!1;try{r=new st(r=[1,3.14,-3.14,65536,65537]),n=r,t=(lt&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?pt:function(){throw new Error("not implemented")};var yt,gt={uint16:ft,uint8:ct};(yt=new gt.uint16(1))[0]=4660;var wt=52===new gt.uint8(yt.buffer)[0],vt=!0===wt?1:0,ht=new it(1),dt=new Q(ht.buffer);function bt(t){return ht[0]=t,dt[vt]}var mt=1023;function At(t){var r=bt(t);return(r=(2146435072&r)>>>20)-mt|0}var Ft=Number.POSITIVE_INFINITY,Et=Number,Ut=Et.NEGATIVE_INFINITY;function Vt(t){return t!=t}var St=Math.floor;function jt(t){return St(t)===t}function It(t){return jt(t/2)}function Tt(t){return It(t>0?t-1:t+1)}function Nt(t){return t===Ft||t===Ut}var _t,Ot,xt=Math.sqrt;function kt(t){return Math.abs(t)}function Bt(t,r,n){P(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===wt?(_t=1,Ot=0):(_t=0,Ot=1);var Dt={HIGH:_t,LOW:Ot},Lt=new it(1),Wt=new Q(Lt.buffer),Pt=Dt.HIGH,Ht=Dt.LOW;function Rt(t,r,n,e){return Lt[0]=t,r[e]=Wt[Pt],r[e+n]=Wt[Ht],r}function $t(t){return Rt(t,[0,0],1,0)}Bt($t,"assign",Rt);var Gt=!0===wt?0:1,Mt=new it(1),Ct=new Q(Mt.buffer);function Zt(t,r){return Mt[0]=t,Ct[Gt]=r>>>0,Mt[0]}function qt(t){return 0|t}var zt,Xt,Yt=2147483647;!0===wt?(zt=1,Xt=0):(zt=0,Xt=1);var Jt={HIGH:zt,LOW:Xt},Kt=new it(1),Qt=new Q(Kt.buffer),tr=Jt.HIGH,rr=Jt.LOW;function nr(t,r){return Qt[tr]=t,Qt[rr]=r,Kt[0]}var er=[0,0];function ir(t,r){var n,e;return $t.assign(t,er,1,0),n=er[0],n&=Yt,e=bt(r),nr(n|=e&=2147483648,er[1])}var or=!0===wt?1:0,ar=new it(1),ur=new Q(ar.buffer);function fr(t,r){return ar[0]=t,ur[or]=r>>>0,ar[0]}var cr=1048576,lr=[1,1.5],sr=[0,.5849624872207642],pr=[0,1.350039202129749e-8];function yr(t,r,n,e){return Vt(t)||Nt(t)?(r[e]=t,r[e+n]=0,r):0!==t&&kt(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}function gr(t){return yr(t,[0,0],1,0)}Bt(gr,"assign",yr);var wr=[0,0],vr=[0,0],hr=1048575,dr=1048576;function br(t,r,n){var e,i,o,a,u,f,c,l,s,p,y,g,w,v;return s=((l=t&Yt|0)>>20)-mt|0,c=0,l>1071644672&&(i=fr(0,((c=t+(dr>>s+1)>>>0)&~(hr>>(s=((c&Yt)>>20)-mt|0)))>>>0),c=(c&hr|dr)>>20-s>>>0,t<0&&(c=-c),r-=i),t=qt(t=bt(f=1-((f=(o=.6931471824645996*(i=Zt(i=n+r,0)))+(a=.6931471805599453*(n-(i-r))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(t+=c<<20>>>0)>>20<=0?(y=f,f=0===(g=c)||0===y||Vt(y)||Nt(y)?y:(yr(y,wr,1,0),g+=wr[1],(g+=At(y=wr[0]))<-1074?ir(0,y):g>1023?y<0?Ut:Ft:(g<=-1023?(g+=52,v=2220446049250313e-31):v=1,$t.assign(y,vr,1,0),w=vr[0],w&=2148532223,v*nr(w|=g+mt<<20,vr[1])))):f=fr(f,t),f}var mr=1083179008,Ar=1e300,Fr=1e-300,Er=[0,0],Ur=[0,0];function Vr(t,r){var n,e,i,o,a,u,f,c,l,s,p,y,g,w;if(Vt(t)||Vt(r))return NaN;if($t.assign(r,Er,1,0),a=Er[0],0===Er[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return xt(t);if(-.5===r)return 1/xt(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(Nt(r))return function(t,r){return-1===t?(t-t)/(t-t):1===t?1:kt(t)<1==(r===Ft)?0:Ft}(t,r)}if($t.assign(t,Er,1,0),o=Er[0],0===Er[1]){if(0===o)return function(t,r){return r===Ut?Ft:r===Ft?0:r>0?Tt(r)?t:0:Tt(r)?ir(Ft,t):Ft}(t,r);if(1===t)return 1;if(-1===t&&Tt(r))return-1;if(Nt(t))return t===Ut?Vr(-0,-r):r<0?0:Ft}if(t<0&&!1===jt(r))return(t-t)/(t-t);if(i=kt(t),n=o&Yt|0,e=a&Yt|0,f=a>>>31|0,u=(u=o>>>31|0)&&Tt(r)?-1:1,e>1105199104){if(e>1139802112)return function(t,r){return(bt(t)&Yt)<=1072693247?r<0?1/0:0:r>0?1/0:0}(t,r);if(n<1072693247)return 1===f?u*Ar*Ar:u*Fr*Fr;if(n>1072693248)return 0===f?u*Ar*Ar:u*Fr*Fr;p=function(t,r){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=r-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Zt(e=(o=1.4426950216293335*i)+a,0))-o),t[0]=e,t[1]=n,t}(Ur,i)}else p=function(t,r,n){var e,i,o,a,u,f,c,l,s,p,y,g,w,v,h,d,b,m,A,F,E;return m=0,n<cr&&(m-=53,n=bt(r*=9007199254740992)),m+=(n>>20)-mt|0,n=1072693248|(A=1048575&n|0),A<=235662?F=0:A<767610?F=1:(F=0,m+=1,n-=cr),a=Zt(i=(d=(r=fr(r,n))-(c=lr[F]))*(b=1/(r+c)),0),e=524288+(n>>1|536870912),f=fr(0,e+=F<<18),h=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Zt(f=3+(o=a*a)+(h+=(u=b*(d-a*f-a*(r-(f-c))))*(a+i)),0),w=(y=-7.028461650952758e-9*(s=Zt(s=(d=a*f)+(b=u*f+(h-(f-3-o))*i),0))+.9617966939259756*(b-(s-d))+pr[F])-((g=Zt(g=(p=.9617967009544373*s)+y+(l=sr[F])+(v=m),0))-v-l-p),t[0]=g,t[1]=w,t}(Ur,i,n);if(y=(s=(r-(c=Zt(r,0)))*p[0]+r*p[1])+(l=c*p[0]),$t.assign(y,Er,1,0),g=qt(Er[0]),w=qt(Er[1]),g>=mr){if(0!=(g-mr|w))return u*Ar*Ar;if(s+8008566259537294e-32>y-l)return u*Ar*Ar}else if((g&Yt)>=1083231232){if(0!=(g-3230714880|w))return u*Fr*Fr;if(s<=y-l)return u*Fr*Fr}return u*(y=br(g,l,s))}var Sr,jr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Ir=Object.prototype.toString,Tr=Object.prototype.hasOwnProperty,Nr="function"==typeof Symbol?Symbol.toStringTag:"",_r=jr&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,i,o;if(null==t)return Ir.call(t);n=t[Nr],o=Nr,r=null!=(i=t)&&Tr.call(i,o);try{t[Nr]=void 0}catch(r){return Ir.call(t)}return e=Ir.call(t),r?t[Nr]=n:delete t[Nr],e}:function(t){return Ir.call(t)},Or="function"==typeof Uint8Array,xr="function"==typeof Uint8Array?Uint8Array:null,kr="function"==typeof Uint8Array?Uint8Array:void 0;Sr=function(){var t,r,n;if("function"!=typeof xr)return!1;try{r=new xr(r=[1,3.14,-3.14,256,257]),n=r,t=(Or&&n instanceof Uint8Array||"[object Uint8Array]"===_r(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?kr:function(){throw new Error("not implemented")};var Br,Dr=Sr,Lr="function"==typeof Uint16Array,Wr="function"==typeof Uint16Array?Uint16Array:null,Pr="function"==typeof Uint16Array?Uint16Array:void 0;Br=function(){var t,r,n;if("function"!=typeof Wr)return!1;try{r=new Wr(r=[1,3.14,-3.14,65536,65537]),n=r,t=(Lr&&n instanceof Uint16Array||"[object Uint16Array]"===_r(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Pr:function(){throw new Error("not implemented")};var Hr,Rr={uint16:Br,uint8:Dr};Hr=function(){var t;return(t=new Rr.uint16(1))[0]=4660,52===new Rr.uint8(t.buffer)[0]}();var $r,Gr=Hr,Mr="function"==typeof DataView,Cr="function"==typeof ArrayBuffer,Zr="function"==typeof Float64Array,qr="function"==typeof Float64Array?Float64Array:null,zr="function"==typeof Float64Array?Float64Array:void 0;$r=function(){var t,r,n;if("function"!=typeof qr)return!1;try{r=new qr([1,3.14,-3.14,NaN]),n=r,t=(Zr&&n instanceof Float64Array||"[object Float64Array]"===_r(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?zr:function(){throw new Error("not implemented")};var Xr,Yr=$r,Jr="function"==typeof ArrayBuffer?ArrayBuffer:null,Kr="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Xr=function(){var t,r,n,e;if("function"!=typeof Jr)return!1;try{n=new Jr(16),e=n,(t=(Cr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===_r(e))&&"function"==typeof Jr.isView)&&((r=new Yr(n))[0]=-3.14,r[1]=NaN,t=t&&Jr.isView(r)&&16===n.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?Kr:function(){throw new Error("not implemented")};var Qr,tn=Xr,rn="function"==typeof DataView?DataView:null,nn="function"==typeof DataView?DataView:void 0;Qr=function(){var t,r,n,e;if("function"!=typeof rn)return!1;try{n=new tn(24),r=new rn(n,8),e=r,(t=(Mr&&e instanceof DataView||"[object DataView]"===_r(e))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===n&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?nn:function(){throw new Error("not implemented")};var en=Qr,on=4294967296,an=new Dr(8),un=!0===wt?0:1,fn=new it(1),cn=new Q(fn.buffer);function ln(t){return"number"==typeof t}var sn=Et.prototype.toString,pn=$();function yn(t){return"object"==typeof t&&(t instanceof Et||(pn?function(t){try{return sn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function gn(t){return ln(t)||yn(t)}function wn(t){return t<Ft&&t>Ut&&jt(t)}function vn(t){return ln(t)&&wn(t)}function hn(t){return yn(t)&&wn(t.valueOf())}function dn(t){return vn(t)||hn(t)}function bn(t){return vn(t)&&t>=0}function mn(t){return hn(t)&&t.valueOf()>=0}function An(t){return bn(t)||mn(t)}function Fn(t){return"string"==typeof t}Bt(gn,"isPrimitive",ln),Bt(gn,"isObject",yn),Bt(dn,"isPrimitive",vn),Bt(dn,"isObject",hn),Bt(An,"isPrimitive",bn),Bt(An,"isObject",mn);var En=String.prototype.valueOf,Un=$();function Vn(t){return"object"==typeof t&&(t instanceof String||(Un?function(t){try{return En.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function Sn(t){return Fn(t)||Vn(t)}Bt(Sn,"isPrimitive",Fn),Bt(Sn,"isObject",Vn);var jn=9007199254740991,In=void 0!==String.prototype.repeat,Tn=String.prototype.repeat,Nn=In?function(t,r){return Tn.call(t,r)}:function(t,r){var n,e;if(0===t.length||0===r)return"";for(n="",e=r;1==(1&e)&&(n+=t),0!=(e>>>=1);)t+=t;return n},_n=Math.ceil;function On(t,r,n){var e=(r-t.length)/n.length;return e<=0?t:(e=_n(e),t+Nn(n,e))}var xn=Math.ceil;function kn(t,r,n){var e=(r-t.length)/n.length;return e<=0?t:(e=xn(e),Nn(n,e)+t)}function Bn(t,r){if(!Fn(t))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",t));if(!bn(r))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));return Nn(t,r)}function Dn(t){for(var r,n="";t>0;)n=(r=t/2)===(t=St(r))?"0"+n:"1"+n;return n}var Ln,Wn=1075,Pn="function"==typeof Math.fround?Math.fround:null,Hn="function"==typeof Float32Array,Rn="function"==typeof Float32Array?Float32Array:null,$n="function"==typeof Float32Array?Float32Array:void 0;Ln=function(){var t,r,n;if("function"!=typeof Rn)return!1;try{r=new Rn([1,3.14,-3.14,5e40]),n=r,t=(Hn&&n instanceof Float32Array||"[object Float32Array]"===z(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ft}catch(r){t=!1}return t}()?$n:function(){throw new Error("not implemented")};var Gn,Mn=new Ln(1),Cn="function"==typeof Pn?Pn:function(t){return Mn[0]=t,Mn[0]},Zn="function"==typeof DataView,qn="function"==typeof ArrayBuffer,zn="function"==typeof ArrayBuffer?ArrayBuffer:null,Xn="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Gn=function(){var t,r,n,e;if("function"!=typeof zn)return!1;try{n=new zn(16),e=n,(t=(qn&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===z(e))&&"function"==typeof zn.isView)&&((r=new it(n))[0]=-3.14,r[1]=NaN,t=t&&zn.isView(r)&&16===n.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?Xn:function(){throw new Error("not implemented")};var Yn,Jn=Gn,Kn="function"==typeof DataView?DataView:null,Qn="function"==typeof DataView?DataView:void 0;Yn=function(){var t,r,n,e;if("function"!=typeof Kn)return!1;try{n=new Jn(24),r=new Kn(n,8),e=r,(t=(Zn&&e instanceof DataView||"[object DataView]"===z(e))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===n&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?Qn:function(){throw new Error("not implemented")};var te=Yn;function re(t){var r,n,e,i;return r=new ct(8),0===t||(i=(4294967295&t)>>>0,e=St(t/4294967296),n=new te(r.buffer),wt?(n.setUint32(0,i,wt),n.setUint32(4,e,wt)):(n.setUint32(0,e,wt),n.setUint32(4,i,wt))),r}var ne=new ct(8),ee=new te(ne.buffer);Bt(re,"assign",(function(t,r,n,e){var i,o,a;if(0===t){for(a=0;a<ne.length;a++)r[e]=0,e+=n;return r}for(o=(4294967295&t)>>>0,i=St(t/4294967296),wt?(ee.setUint32(0,o,wt),ee.setUint32(4,i,wt)):(ee.setUint32(0,i,wt),ee.setUint32(4,o,wt)),a=0;a<ne.length;a++)r[e]=ne[a],e+=n;return r}));var ie={};H(ie,"exponent",At),H(ie,"fromBinaryString",(function(t){var r,n,e;if(64!==t.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(r="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-mt,n=function(t){var r,n=0;for(r=0;r<t.length;r++)"1"===t[r]&&(n+=Vr(2,-(r+1)));return n}(t.substring(12)),-1023===e){if(0===n)return 1===r?0:-0;e=-1022}else{if(1024===e)return 0===n?1===r?Ft:Ut:NaN;n+=1}return r*n*Vr(2,e)})),H(ie,"fromInt64Bytes",(function(t,r,n){var e,i,o,a,u;if(1===r)a=t;else{for(a=an,u=0;u<8;u++)a[u]=t[n],n+=r;n=0}return e=new en(a.buffer,a.byteOffset,a.byteLength),Gr?(o=e.getInt32(n,Gr),i=e.getInt32(n+4,Gr)):(i=e.getInt32(n,Gr),o=e.getInt32(n+4,Gr)),o<0&&(o+=on),i*on+o})),H(ie,"fromWords",nr),H(ie,"getHighWord",bt),H(ie,"getLowWord",(function(t){return fn[0]=t,cn[un]})),H(ie,"normalize",gr),H(ie,"setHighWord",fr),H(ie,"setLowWord",Zt),H(ie,"signbit",(function(t){return!!(bt(t)>>>31)})),H(ie,"toBinaryString",(function(t){var r,n,e,i,o,a,u;if(n=t<0||function(t){return 0===t&&1/t===Ut}(t)?"1":"0",t===Ft||t===Ut)return n+(i=Bn("1",11))+(e=Bn("0",52));if(Vt(t))return n+(i=Bn("1",11))+(e="1"+Bn("0",51));if(0===t)return n+(i=Bn("0",11))+(e=Bn("0",52));if(a=(t=kt(t))-(o=St(t)),o=Dn(o),a=function(t){var r,n,e,i;if(r="",0===t)return r;for(i=Wn,e=0;e<Wn&&((n=2*t)>=1?(t=n-1,r+="1",i===Wn&&(i=e)):(t=n,r+="0"),!(1===n||e-i>54));e++);return r}(a),o)i=o.length-1;else{for(u=0;u<a.length;u++)if("1"===a[u]){r=u+1;break}i=-r}return e=o+a,i<0?(i<=-1023&&(r=1022),e=e.substring(r)):e=e.substring(1),i=function(t,r,n){var e;if(!Fn(t))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",t));if(!bn(r))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!Fn(e=n))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(r>jn)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return kn(t,r,e)}(i=Dn(i+mt),11,"0"),e=function(t,r,n){var e;if(!Fn(t))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",t));if(!bn(r))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!Fn(e=n))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else e=" ";if(r>jn)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return On(t,r,e)}(e,52,"0").substring(0,52),n+i+e})),H(ie,"float64ToFloat32",Cn),H(ie,"float64ToInt32",(function(t){return 0|t})),H(ie,"float64ToInt64Bytes",re),H(ie,"float64ToUint32",(function(t){return t>>>0})),H(ie,"toWords",$t);var oe={};return H(oe,"base",ie),H(oe,"reviver",(function(t,r){if(null!==r&&"object"==typeof r&&"float64"===r.type){if("NaN"===r.value)return NaN;if("+Infinity"===r.value)return Ft;if("-Infinity"===r.value)return Ut}return r})),H(oe,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(O("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===Ft?{type:"float64",value:"+Infinity"}:t===Ut?{type:"float64",value:"-Infinity"}:t})),oe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).ns=r();
//# sourceMappingURL=browser.js.map
