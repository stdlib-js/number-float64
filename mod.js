// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,e=Object.prototype,n=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,u=e.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(o.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),s="get"in f,p="set"in f,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,f.get),p&&a&&a.call(r,t,f.set),r};function c(r,t,e){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return l&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var y="function"==typeof Symbol?Symbol.toStringTag:"";var v=s()?function(r){var t,e,n,i,a;if(null==r)return p.call(r);e=r[y],a=y,t=null!=(i=r)&&g.call(i,a);try{r[y]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[y]=e:delete r[y],n}:function(r){return p.call(r)},w="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null;var d,b="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var r,t,e;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(w&&e instanceof Uint32Array||"[object Uint32Array]"===v(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m=d,A="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null;var F,V="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,e;if("function"!=typeof E)return!1;try{t=new E([1,3.14,-3.14,NaN]),e=t,r=(A&&e instanceof Float64Array||"[object Float64Array]"===v(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var U=F,I="function"==typeof Uint8Array;var S="function"==typeof Uint8Array?Uint8Array:null;var _,T="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,t,e;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,256,257]),e=t,r=(I&&e instanceof Uint8Array||"[object Uint8Array]"===v(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var j=_,x="function"==typeof Uint16Array;var O="function"==typeof Uint16Array?Uint16Array:null;var N,k="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var r,t,e;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,65536,65537]),e=t,r=(x&&e instanceof Uint16Array||"[object Uint16Array]"===v(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?k:function(){throw new Error("not implemented")};var W,L={uint16:N,uint8:j};(W=new L.uint16(1))[0]=4660;var P=52===new L.uint8(W.buffer)[0],B=!0===P?1:0,R=new U(1),H=new m(R.buffer);function $(r){return R[0]=r,H[B]}function G(r){var t=$(r);return(t=(2146435072&t)>>>20)-1023|0}var C=Number.POSITIVE_INFINITY,D=Number,M=D.NEGATIVE_INFINITY;function Z(r){return r!=r}var q=Math.floor;function z(r){return q(r)===r}function X(r){return z(r/2)}function Y(r){return X(r>0?r-1:r+1)}function J(r){return r===C||r===M}var K,Q,rr=Math.sqrt;function tr(r){return Math.abs(r)}!0===P?(K=1,Q=0):(K=0,Q=1);var er={HIGH:K,LOW:Q},nr=new U(1),ir=new m(nr.buffer),ar=er.HIGH,or=er.LOW;function ur(r,t){return nr[0]=t,r[0]=ir[ar],r[1]=ir[or],r}function fr(r,t){return 1===arguments.length?ur([0,0],r):ur(r,t)}var cr,lr,sr=!0===P?0:1,pr=new U(1),gr=new m(pr.buffer);function yr(r,t){return pr[0]=r,gr[sr]=t>>>0,pr[0]}function vr(r){return 0|r}!0===P?(cr=1,lr=0):(cr=0,lr=1);var wr={HIGH:cr,LOW:lr},hr=new U(1),dr=new m(hr.buffer),br=wr.HIGH,mr=wr.LOW;function Ar(r,t){return dr[br]=r,dr[mr]=t,hr[0]}var Er=[0,0];function Fr(r,t){var e,n;return fr(Er,r),e=Er[0],e&=2147483647,n=$(t),Ar(e|=n&=2147483648,Er[1])}var Vr=!0===P?1:0,Ur=new U(1),Ir=new m(Ur.buffer);function Sr(r,t){return Ur[0]=r,Ir[Vr]=t>>>0,Ur[0]}var _r=[1,1.5],Tr=[0,.5849624872207642],jr=[0,1.350039202129749e-8];function xr(r,t){return Z(t)||J(t)?(r[0]=t,r[1]=0,r):0!==t&&tr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}function Or(r,t){return 1===arguments.length?xr([0,0],r):xr(r,t)}var Nr=[0,0],kr=[0,0];function Wr(r,t,e){var n,i,a,o,u,f,c,l,s,p,g,y,v,w,h;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(n=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),t-=a=Sr(0,n)),r=vr(r=$(c=1-((c=(o=.6931471824645996*(a=yr(a=e+t,0)))+(u=.6931471805599453*(e-(a-t))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?(y=c,c=0===(v=l)||0===y||Z(y)||J(y)?y:(Or(Nr,y),v+=Nr[1],(v+=G(y=Nr[0]))<-1074?Fr(0,y):v>1023?y<0?M:C:(v<=-1023?(v+=52,h=2220446049250313e-31):h=1,fr(kr,y),w=kr[0],w&=2148532223,h*Ar(w|=v+1023<<20,kr[1])))):c=Sr(c,r),c}var Lr=1e300,Pr=1e-300,Br=[0,0],Rr=[0,0];function Hr(r,t){var e,n,i,a,o,u,f,c,l,s,p,g,y,v;if(Z(r)||Z(t))return NaN;if(fr(Br,t),o=Br[0],0===Br[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return rr(r);if(-.5===t)return 1/rr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(J(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:tr(r)<1==(t===C)?0:C}(r,t)}if(fr(Br,r),a=Br[0],0===Br[1]){if(0===a)return function(r,t){return t===M?C:t===C?0:t>0?Y(t)?r:0:Y(t)?Fr(C,r):C}(r,t);if(1===r)return 1;if(-1===r&&Y(t))return-1;if(J(r))return r===M?Hr(-0,-t):t<0?0:C}if(r<0&&!1===z(t))return(r-r)/(r-r);if(i=tr(r),e=2147483647&a|0,n=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&Y(t)?-1:1,n>1105199104){if(n>1139802112)return function(r,t){return(2147483647&$(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(e<1072693247)return 1===f?u*Lr*Lr:u*Pr*Pr;if(e>1072693248)return 0===f?u*Lr*Lr:u*Pr*Pr;p=function(r,t){var e,n,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=yr(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=e,r}(Rr,i)}else p=function(r,t,e){var n,i,a,o,u,f,c,l,s,p,g,y,v,w,h,d,b,m,A,E,F;return m=0,e<1048576&&(m-=53,e=$(t*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(A=1048575&e|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,e-=1048576),o=yr(i=(d=(t=Sr(t,e))-(c=_r[E]))*(b=1/(t+c)),0),n=524288+(e>>1|536870912),f=Sr(0,n+=E<<18),h=(a=i*i)*a*(0===(F=a)?.5999999999999946:.5999999999999946+F*(.4285714285785502+F*(.33333332981837743+F*(.272728123808534+F*(.23066074577556175+.20697501780033842*F))))),f=yr(f=3+(a=o*o)+(h+=(u=b*(d-o*f-o*(t-(f-c))))*(o+i)),0),v=(g=-7.028461650952758e-9*(s=yr(s=(d=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(s-d))+jr[E])-((y=yr(y=(p=.9617967009544373*s)+g+(l=Tr[E])+(w=m),0))-w-l-p),r[0]=y,r[1]=v,r}(Rr,i,e);if(s=(t-(c=yr(t,0)))*p[0]+t*p[1],l=c*p[0],fr(Br,g=s+l),y=vr(Br[0]),v=vr(Br[1]),y>=1083179008){if(0!=(y-1083179008|v))return u*Lr*Lr;if(s+8008566259537294e-32>g-l)return u*Lr*Lr}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|v))return u*Pr*Pr;if(s<=g-l)return u*Pr*Pr}return u*(g=Wr(y,l,s))}function $r(r){return"number"==typeof r}function Gr(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function Cr(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+Gr(i):Gr(i)+r,n&&(r="-"+r)),r}var Dr=String.prototype.toLowerCase,Mr=String.prototype.toUpperCase;function Zr(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!$r(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=Cr(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=Cr(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===Mr.call(r.specifier)?Mr.call(e):Dr.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function qr(r){return"string"==typeof r}var zr=Math.abs,Xr=String.prototype.toLowerCase,Yr=String.prototype.toUpperCase,Jr=String.prototype.replace,Kr=/e\+(\d)$/,Qr=/e-(\d)$/,rt=/^(\d+)$/,tt=/^(\d+)e/,et=/\.0$/,nt=/\.0*e/,it=/(\..*[^0])0*e/;function at(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!$r(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":zr(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=Jr.call(e,it,"$1e"),e=Jr.call(e,nt,"e"),e=Jr.call(e,et,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Jr.call(e,Kr,"e+0$1"),e=Jr.call(e,Qr,"e-0$1"),r.alternate&&(e=Jr.call(e,rt,"$1."),e=Jr.call(e,tt,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Yr.call(r.specifier)?Yr.call(e):Xr.call(e)}function ot(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function ut(r,t,e){var n=t-r.length;return n<0?r:r=e?r+ot(n):ot(n)+r}var ft=String.fromCharCode,ct=isNaN,lt=Array.isArray;function st(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function pt(r){var t,e,n,i,a,o,u,f,c;if(!lt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(qr(n=r[f]))o+=n;else{if(t=void 0!==n.precision,!(n=st(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,c=0;c<e.length;c++)switch(i=e.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ct(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ct(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=Zr(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!ct(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ct(a)?String(n.arg):ft(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=at(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Cr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ut(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var gt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function yt(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function vt(r){var t,e,n,i;for(e=[],i=0,n=gt.exec(r);n;)(t=r.slice(i,gt.lastIndex-n[0].length)).length&&e.push(t),e.push(yt(n)),i=gt.lastIndex,n=gt.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function wt(r){return"string"==typeof r}function ht(r){var t,e,n;if(!wt(r))throw new TypeError(ht("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=vt(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return pt.apply(null,e)}var dt="function"==typeof DataView;var bt="function"==typeof ArrayBuffer;var mt="function"==typeof ArrayBuffer?ArrayBuffer:null;var At,Et="function"==typeof ArrayBuffer?ArrayBuffer:void 0;At=function(){var r,t,e,n;if("function"!=typeof mt)return!1;try{e=new mt(16),n=e,(r=(bt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===v(n))&&"function"==typeof mt.isView)&&((t=new U(e))[0]=-3.14,t[1]=NaN,r=r&&mt.isView(t)&&16===e.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?Et:function(){throw new Error("not implemented")};var Ft=At,Vt="function"==typeof DataView?DataView:null;var Ut,It="function"==typeof DataView?DataView:void 0;Ut=function(){var r,t,e,n;if("function"!=typeof Vt)return!1;try{e=new Ft(24),t=new Vt(e,8),n=t,(r=(dt&&n instanceof DataView||"[object DataView]"===v(n))&&"function"==typeof t.getFloat64&&"function"==typeof t.setFloat64)&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),r=r&&t.buffer===e&&16===t.byteLength&&8===t.byteOffset&&-3.14===t.getFloat64(0)&&t.getFloat64(8)!=t.getFloat64(8))}catch(t){r=!1}return r}()?It:function(){throw new Error("not implemented")};var St=Ut,_t=new j(8);var Tt=!0===P?0:1,jt=new U(1),xt=new m(jt.buffer);function Ot(r,t,e){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Nt(r){return"number"==typeof r}var kt=D.prototype.toString;var Wt=s();function Lt(r){return"object"==typeof r&&(r instanceof D||(Wt?function(r){try{return kt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===v(r)))}function Pt(r){return Nt(r)||Lt(r)}function Bt(r){return r<C&&r>M&&z(r)}function Rt(r){return Nt(r)&&Bt(r)}function Ht(r){return Lt(r)&&Bt(r.valueOf())}function $t(r){return Rt(r)||Ht(r)}function Gt(r){return Rt(r)&&r>=0}function Ct(r){return Ht(r)&&r.valueOf()>=0}function Dt(r){return Gt(r)||Ct(r)}function Mt(r){return"string"==typeof r}Ot(Pt,"isPrimitive",Nt),Ot(Pt,"isObject",Lt),Ot($t,"isPrimitive",Rt),Ot($t,"isObject",Ht),Ot(Dt,"isPrimitive",Gt),Ot(Dt,"isObject",Ct);var Zt=String.prototype.valueOf;var qt=s();function zt(r){return"object"==typeof r&&(r instanceof String||(qt?function(r){try{return Zt.call(r),!0}catch(r){return!1}}(r):"[object String]"===v(r)))}function Xt(r){return Mt(r)||zt(r)}Ot(Xt,"isPrimitive",Mt),Ot(Xt,"isObject",zt);function Yt(r,t){var e,n;if(!Mt(r))throw new TypeError(ht("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Gt(t))throw new TypeError(ht("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError(ht("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*t));for(e="",n=t;1==(1&n)&&(e+=r),0!==(n>>>=1);)r+=r;return e}var Jt=Math.ceil;function Kt(r){for(var t,e="";r>0;)e=(t=r/2)===(r=q(t))?"0"+e:"1"+e;return e}var Qt="function"==typeof Math.fround?Math.fround:null,re="function"==typeof Float32Array;var te="function"==typeof Float32Array?Float32Array:null;var ee,ne="function"==typeof Float32Array?Float32Array:void 0;ee=function(){var r,t,e;if("function"!=typeof te)return!1;try{t=new te([1,3.14,-3.14,5e40]),e=t,r=(re&&e instanceof Float32Array||"[object Float32Array]"===v(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===C}catch(t){r=!1}return r}()?ne:function(){throw new Error("not implemented")};var ie=new ee(1);var ae="function"==typeof Qt?Qt:function(r){return ie[0]=r,ie[0]};function oe(r){var t,e,n,i;return t=new j(8),0===r||(i=(4294967295&r)>>>0,n=q(r/4294967296),e=new St(t.buffer),P?(e.setUint32(0,i,P),e.setUint32(4,n,P)):(e.setUint32(0,n,P),e.setUint32(4,i,P))),t}var ue=new j(8),fe=new St(ue.buffer);Ot(oe,"assign",(function(r,t,e,n){var i,a,o;if(0===r){for(o=0;o<ue.length;o++)t[n]=0,n+=e;return t}for(a=(4294967295&r)>>>0,i=q(r/4294967296),P?(fe.setUint32(0,a,P),fe.setUint32(4,i,P)):(fe.setUint32(0,i,P),fe.setUint32(4,a,P)),o=0;o<ue.length;o++)t[n]=ue[o],n+=e;return t}));var ce={};c(ce,"exponent",G),c(ce,"fromBinaryString",(function(r){var t,e,n;if(64!==r.length)throw new Error(ht("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(t="1"===r[0]?-1:1,n=parseInt(r.substring(1,12),2)-1023,e=function(r){var t,e=0;for(t=0;t<r.length;t++)"1"===r[t]&&(e+=Hr(2,-(t+1)));return e}(r.substring(12)),-1023===n){if(0===e)return 1===t?0:-0;n=-1022}else{if(1024===n)return 0===e?1===t?C:M:NaN;e+=1}return t*e*Hr(2,n)})),c(ce,"fromInt64Bytes",(function(r,t,e){var n,i,a,o,u;if(1===t)o=r;else{for(o=_t,u=0;u<8;u++)o[u]=r[e],e+=t;e=0}return n=new St(o.buffer,o.byteOffset,o.byteLength),P?(a=n.getInt32(e,P),i=n.getInt32(e+4,P)):(i=n.getInt32(e,P),a=n.getInt32(e+4,P)),a<0&&(a+=4294967296),4294967296*i+a})),c(ce,"fromWords",Ar),c(ce,"getHighWord",$),c(ce,"getLowWord",(function(r){return jt[0]=r,xt[Tt]})),c(ce,"normalize",Or),c(ce,"setHighWord",Sr),c(ce,"setLowWord",yr),c(ce,"signbit",(function(r){return!!($(r)>>>31)})),c(ce,"toBinaryString",(function(r){var t,e,n,i,a,o,u;if(e=r<0||function(r){return 0===r&&1/r===M}(r)?"1":"0",r===C||r===M)return e+(i=Yt("1",11))+(n=Yt("0",52));if(Z(r))return e+(i=Yt("1",11))+(n="1"+Yt("0",51));if(0===r)return e+(i=Yt("0",11))+(n=Yt("0",52));if(o=(r=tr(r))-(a=q(r)),a=Kt(a),o=function(r){var t,e,n,i;if(t="",0===r)return t;for(i=1075,n=0;n<1075&&((e=2*r)>=1?(r=e-1,t+="1",1075===i&&(i=n)):(r=e,t+="0"),!(1===e||n-i>54));n++);return t}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){t=u+1;break}i=-t}return n=a+o,i<0?(i<=-1023&&(t=1022),n=n.substring(t)):n=n.substring(1),i=function(r,t,e){var n,i;if(!Mt(r))throw new TypeError(ht("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Gt(t))throw new TypeError(ht("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!Mt(i=e))throw new TypeError(ht("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(t>9007199254740991)throw new RangeError(ht("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return(n=(t-r.length)/i.length)<=0?r:Yt(i,n=Jt(n))+r}(i=Kt(i+1023),11,"0"),n=function(r,t,e){var n,i;if(!Mt(r))throw new TypeError(ht("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Gt(t))throw new TypeError(ht("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!Mt(i=e))throw new TypeError(ht("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(t>9007199254740991)throw new RangeError(ht("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return(n=(t-r.length)/i.length)<=0?r:r+Yt(i,n=Jt(n))}(n,52,"0").substring(0,52),e+i+n})),c(ce,"float64ToFloat32",ae),c(ce,"float64ToInt32",(function(r){return 0|r})),c(ce,"float64ToInt64Bytes",oe),c(ce,"float64ToUint32",(function(r){return r>>>0})),c(ce,"toWords",fr);var le={};c(le,"base",ce);export{ce as base,le as default};
//# sourceMappingURL=mod.js.map
