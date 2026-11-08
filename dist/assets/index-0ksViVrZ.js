(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pr="160",Zo=0,Ir=1,Jo=2,co=1,Qo=2,nn=3,Ve=0,ye=1,Ie=2,vn=0,ni=1,Nr=2,kr=3,Fr=4,tl=5,Pn=100,el=101,nl=102,Or=103,Br=104,il=200,al=201,rl=202,sl=203,er=204,nr=205,ol=206,ll=207,cl=208,hl=209,ul=210,dl=211,fl=212,pl=213,ml=214,gl=0,_l=1,xl=2,ea=3,vl=4,Ml=5,Sl=6,yl=7,mr=0,El=1,bl=2,rn=0,Tl=1,Al=2,wl=3,Rl=4,Cl=5,Pl=6,ho=300,ri=301,si=302,ir=303,ar=304,la=306,qe=1e3,Ne=1001,rr=1002,Se=1003,zr=1004,Sa=1005,Pe=1006,Ll=1007,oi=1008,Mn=1009,Dl=1010,Ul=1011,gr=1012,uo=1013,_n=1014,xn=1015,Si=1016,fo=1017,po=1018,Un=1020,Il=1021,Ge=1023,Nl=1024,kl=1025,In=1026,li=1027,Fl=1028,mo=1029,Ol=1030,go=1031,_o=1033,ya=33776,Ea=33777,ba=33778,Ta=33779,Gr=35840,Hr=35841,Vr=35842,Wr=35843,xo=36196,Xr=37492,qr=37496,Yr=37808,jr=37809,Kr=37810,$r=37811,Zr=37812,Jr=37813,Qr=37814,ts=37815,es=37816,ns=37817,is=37818,as=37819,rs=37820,ss=37821,Aa=36492,os=36494,ls=36495,Bl=36283,cs=36284,hs=36285,us=36286,vo=3e3,Nn=3001,zl=3200,Gl=3201,Mo=0,Hl=1,ke="",he="srgb",ln="srgb-linear",_r="display-p3",ca="display-p3-linear",na="linear",Kt="srgb",ia="rec709",aa="p3",On=7680,ds=519,Vl=512,Wl=513,Xl=514,So=515,ql=516,Yl=517,jl=518,Kl=519,fs=35044,ps="300 es",sr=1035,an=2e3,ra=2001;class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wa=Math.PI/180,or=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function $l(i,t){return(i%t+t)%t}function Ra(i,t,e){return(1-e)*i+e*t}function ms(i){return(i&i-1)===0&&i!==0}function lr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*a+t.x,this.y=r*a+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,a,r,o,s,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,o,s,l,c)}set(t,e,n,a,r,o,s,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=s,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=a[0],p=a[3],u=a[6],y=a[1],v=a[4],E=a[7],C=a[2],w=a[5],A=a[8];return r[0]=o*_+s*y+l*C,r[3]=o*p+s*v+l*w,r[6]=o*u+s*E+l*A,r[1]=c*_+h*y+d*C,r[4]=c*p+h*v+d*w,r[7]=c*u+h*E+d*A,r[2]=f*_+m*y+g*C,r[5]=f*p+m*v+g*w,r[8]=f*u+m*E+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],o=t[4],s=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*s*c-n*r*h+n*s*l+a*r*c-a*o*l}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],o=t[4],s=t[5],l=t[6],c=t[7],h=t[8],d=h*o-s*c,f=s*l-h*r,m=c*r-o*l,g=e*d+n*f+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(a*c-h*n)*_,t[2]=(s*n-a*o)*_,t[3]=f*_,t[4]=(h*e-a*l)*_,t[5]=(a*r-s*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*s)+o+t,-a*c,a*l,-a*(-c*o+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Ft;function yo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zl(){const i=yi("canvas");return i.style.display="block",i}const gs={};function Mi(i){i in gs||(gs[i]=!0,console.warn(i))}const _s=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xs=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pi={[ln]:{transfer:na,primaries:ia,toReference:i=>i,fromReference:i=>i},[he]:{transfer:Kt,primaries:ia,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ca]:{transfer:na,primaries:aa,toReference:i=>i.applyMatrix3(xs),fromReference:i=>i.applyMatrix3(_s)},[_r]:{transfer:Kt,primaries:aa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(xs),fromReference:i=>i.applyMatrix3(_s).convertLinearToSRGB()}},Jl=new Set([ln,ca]),Wt={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Pi[t].toReference,a=Pi[e].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Pi[i].primaries},getTransfer:function(i){return i===ke?na:Pi[i].transfer}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bn;class Eo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=yi("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ql=0;class bo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=bi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,s=a.length;o<s;o++)a[o].isDataTexture?r.push(La(a[o].image)):r.push(La(a[o]))}else r=La(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tc=0;class Ee extends hi{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Ne,a=Ne,r=Pe,o=oi,s=Ge,l=Mn,c=Ee.DEFAULT_ANISOTROPY,h=ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=bi(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Nn?he:ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qe:t.x=t.x-Math.floor(t.x);break;case Ne:t.x=t.x<0?0:1;break;case rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qe:t.y=t.y-Math.floor(t.y);break;case Ne:t.y=t.y<0?0:1;break;case rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===he?Nn:vo}set encoding(t){Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Nn?he:ke}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=ho;Ee.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,a=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*a+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*a+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*a+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*a+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,E=(m+1)/2,C=(u+1)/2,w=(h+f)/4,A=(d+_)/4,B=(g+p)/4;return v>E&&v>C?v<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(v),a=w/n,r=A/n):E>C?E<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(E),n=w/a,r=B/a):C<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(C),n=A/r,a=B/r),this.set(n,a,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ec extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const a={width:t,height:e,depth:1};n.encoding!==void 0&&(Mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nn?he:ke),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ee(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends ec{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class To extends Ee{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Se,this.minFilter=Se,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc extends Ee{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Se,this.minFilter=Se,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,o,s){let l=n[a+0],c=n[a+1],h=n[a+2],d=n[a+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(s===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-s;const u=l*f+c*m+h*g+d*_,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,u*y);p=Math.sin(p*w)/C,s=Math.sin(s*w)/C}const E=s*y;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,d=d*p+_*E,p===1-s){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,a,r,o){const s=n[a],l=n[a+1],c=n[a+2],h=n[a+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=s*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-s*m,t[e+2]=c*g+h*m+s*f-l*d,t[e+3]=h*g-s*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,r=t._z,o=t._order,s=Math.cos,l=Math.sin,c=s(n/2),h=s(a/2),d=s(r/2),f=l(n/2),m=l(a/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],o=e[1],s=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+s+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-a)*m}else if(n>s&&n>d){const m=2*Math.sqrt(1+n-s-d);this._w=(h-l)/m,this._x=.25*m,this._y=(a+o)/m,this._z=(r+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-n-d);this._w=(r-c)/m,this._x=(a+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-s);this._w=(o-a)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,o=t._w,s=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*s+a*c-r*l,this._y=a*h+o*l+r*s-n*c,this._z=r*h+o*c+n*l-a*s,this._w=o*h-n*s-a*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,o=this._w;let s=o*t._w+n*t._x+a*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=n,this._y=a,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*a+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),a=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(a),n*Math.sin(r),n*Math.cos(r),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vs.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vs.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,o=t.y,s=t.z,l=t.w,c=2*(o*a-s*n),h=2*(s*e-r*a),d=2*(r*n-o*e);return this.x=e+l*c+o*d-s*h,this.y=n+l*h+s*c-r*d,this.z=a+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,o=e.x,s=e.y,l=e.z;return this.x=a*l-r*s,this.y=r*o-n*l,this.z=n*s-a*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new L,vs=new Ti;class Ai{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)t.isMesh===!0?t.getVertexPosition(o,Fe):Fe.fromBufferAttribute(r,o),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Li.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Li.copy(n.boundingBox)),Li.applyMatrix4(t.matrixWorld),this.union(Li)}const a=t.children;for(let r=0,o=a.length;r<o;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gi),Di.subVectors(this.max,gi),zn.subVectors(t.a,gi),Gn.subVectors(t.b,gi),Hn.subVectors(t.c,gi),dn.subVectors(Gn,zn),fn.subVectors(Hn,Gn),bn.subVectors(zn,Hn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-bn.z,bn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,bn.z,0,-bn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-bn.y,bn.x,0];return!Ua(e,zn,Gn,Hn,Di)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,zn,Gn,Hn,Di))?!1:(Ui.crossVectors(dn,fn),e=[Ui.x,Ui.y,Ui.z],Ua(e,zn,Gn,Hn,Di))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new L,new L,new L,new L,new L,new L,new L,new L],Fe=new L,Li=new Ai,zn=new L,Gn=new L,Hn=new L,dn=new L,fn=new L,bn=new L,gi=new L,Di=new L,Ui=new L,Tn=new L;function Ua(i,t,e,n,a){for(let r=0,o=i.length-3;r<=o;r+=3){Tn.fromArray(i,r);const s=a.x*Math.abs(Tn.x)+a.y*Math.abs(Tn.y)+a.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const ic=new Ai,_i=new L,Ia=new L;class ha{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ic.setFromPoints(t).getCenter(n);let a=0;for(let r=0,o=t.length;r<o;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_i.subVectors(t,this.center);const e=_i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(_i,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_i.copy(t.center).add(Ia)),this.expandByPoint(_i.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new L,Na=new L,Ii=new L,pn=new L,ka=new L,Ni=new L,Fa=new L;class xr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Na.copy(t).add(e).multiplyScalar(.5),Ii.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ii),s=pn.dot(this.direction),l=-pn.dot(Ii),c=pn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*l-s,f=o*s-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*s)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+s)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+s)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+s)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Na).addScaledVector(Ii,f),m}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const n=Je.dot(this.direction),a=Je.dot(Je)-n*n,r=t.radius*t.radius;if(a>r)return null;const o=Math.sqrt(r-a),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>a||((r>n||isNaN(n))&&(n=r),(o<a||isNaN(a))&&(a=o),d>=0?(s=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(s=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||s>a)||((s>n||n!==n)&&(n=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,a,r){ka.subVectors(e,t),Ni.subVectors(n,t),Fa.crossVectors(ka,Ni);let o=this.direction.dot(Fa),s;if(o>0){if(a)return null;s=1}else if(o<0)s=-1,o=-o;else return null;pn.subVectors(this.origin,t);const l=s*this.direction.dot(Ni.crossVectors(pn,Ni));if(l<0)return null;const c=s*this.direction.dot(ka.cross(pn));if(c<0||l+c>o)return null;const h=-s*pn.dot(Fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,a,r,o,s,l,c,h,d,f,m,g,_,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,o,s,l,c,h,d,f,m,g,_,p)}set(t,e,n,a,r,o,s,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=a,u[1]=r,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/Vn.setFromMatrixColumn(t,0).length(),r=1/Vn.setFromMatrixColumn(t,1).length(),o=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*d,g=s*h,_=s*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-s*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f+_*s,e[4]=g*s-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-s,e[2]=m*s-g,e[6]=_+f*s,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f-_*s,e[4]=-o*d,e[8]=g+m*s,e[1]=m+g*s,e[5]=o*h,e[9]=_-f*s,e[2]=-o*c,e[6]=s,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*d,g=s*h,_=s*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=s*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=s*l,_=s*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-s*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,m=o*c,g=s*l,_=s*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=s*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ac,t,rc)}lookAt(t,e,n){const a=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),mn.crossVectors(n,Re),mn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),mn.crossVectors(n,Re)),mn.normalize(),ki.crossVectors(Re,mn),a[0]=mn.x,a[4]=ki.x,a[8]=Re.x,a[1]=mn.y,a[5]=ki.y,a[9]=Re.y,a[2]=mn.z,a[6]=ki.z,a[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],y=n[3],v=n[7],E=n[11],C=n[15],w=a[0],A=a[4],B=a[8],M=a[12],T=a[1],z=a[5],G=a[9],Q=a[13],P=a[2],F=a[6],V=a[10],q=a[14],W=a[3],X=a[7],Y=a[11],tt=a[15];return r[0]=o*w+s*T+l*P+c*W,r[4]=o*A+s*z+l*F+c*X,r[8]=o*B+s*G+l*V+c*Y,r[12]=o*M+s*Q+l*q+c*tt,r[1]=h*w+d*T+f*P+m*W,r[5]=h*A+d*z+f*F+m*X,r[9]=h*B+d*G+f*V+m*Y,r[13]=h*M+d*Q+f*q+m*tt,r[2]=g*w+_*T+p*P+u*W,r[6]=g*A+_*z+p*F+u*X,r[10]=g*B+_*G+p*V+u*Y,r[14]=g*M+_*Q+p*q+u*tt,r[3]=y*w+v*T+E*P+C*W,r[7]=y*A+v*z+E*F+C*X,r[11]=y*B+v*G+E*V+C*Y,r[15]=y*M+v*Q+E*q+C*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],o=t[1],s=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*d-a*c*d-r*s*f+n*c*f+a*s*m-n*l*m)+_*(+e*l*m-e*c*f+r*o*f-a*o*m+a*c*h-r*l*h)+p*(+e*c*d-e*s*m-r*o*d+n*o*m+r*s*h-n*c*h)+u*(-a*s*h-e*l*d+e*s*f+a*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],o=t[4],s=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],y=d*p*c-_*f*c+_*l*m-s*p*m-d*l*u+s*f*u,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,E=h*_*c-g*d*c+g*s*m-o*_*m-h*s*u+o*d*u,C=g*d*l-h*_*l-g*s*f+o*_*f+h*s*p-o*d*p,w=e*y+n*v+a*E+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=y*A,t[1]=(_*f*r-d*p*r-_*a*m+n*p*m+d*a*u-n*f*u)*A,t[2]=(s*p*r-_*l*r+_*a*c-n*p*c-s*a*u+n*l*u)*A,t[3]=(d*l*r-s*f*r-d*a*c+n*f*c+s*a*m-n*l*m)*A,t[4]=v*A,t[5]=(h*p*r-g*f*r+g*a*m-e*p*m-h*a*u+e*f*u)*A,t[6]=(g*l*r-o*p*r-g*a*c+e*p*c+o*a*u-e*l*u)*A,t[7]=(o*f*r-h*l*r+h*a*c-e*f*c-o*a*m+e*l*m)*A,t[8]=E*A,t[9]=(g*d*r-h*_*r-g*n*m+e*_*m+h*n*u-e*d*u)*A,t[10]=(o*_*r-g*s*r+g*n*c-e*_*c-o*n*u+e*s*u)*A,t[11]=(h*s*r-o*d*r-h*n*c+e*d*c+o*n*m-e*s*m)*A,t[12]=C*A,t[13]=(h*_*a-g*d*a+g*n*f-e*_*f-h*n*p+e*d*p)*A,t[14]=(g*s*a-o*_*a-g*n*l+e*_*l+o*n*p-e*s*p)*A,t[15]=(o*d*a-h*s*a+h*n*l-e*d*l-o*n*f+e*s*f)*A,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,o=t.x,s=t.y,l=t.z,c=r*o,h=r*s;return this.set(c*o+n,c*s-a*l,c*l+a*s,0,c*s+a*l,h*s+n,h*l-a*o,0,c*l-a*s,h*l+a*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,o){return this.set(1,n,r,0,t,1,o,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,o=e._y,s=e._z,l=e._w,c=r+r,h=o+o,d=s+s,f=r*c,m=r*h,g=r*d,_=o*h,p=o*d,u=s*d,y=l*c,v=l*h,E=l*d,C=n.x,w=n.y,A=n.z;return a[0]=(1-(_+u))*C,a[1]=(m+E)*C,a[2]=(g-v)*C,a[3]=0,a[4]=(m-E)*w,a[5]=(1-(f+u))*w,a[6]=(p+y)*w,a[7]=0,a[8]=(g+v)*A,a[9]=(p-y)*A,a[10]=(1-(f+_))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=Vn.set(a[0],a[1],a[2]).length();const o=Vn.set(a[4],a[5],a[6]).length(),s=Vn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Oe.copy(this);const c=1/r,h=1/o,d=1/s;return Oe.elements[0]*=c,Oe.elements[1]*=c,Oe.elements[2]*=c,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=d,Oe.elements[9]*=d,Oe.elements[10]*=d,e.setFromRotationMatrix(Oe),n.x=r,n.y=o,n.z=s,this}makePerspective(t,e,n,a,r,o,s=an){const l=this.elements,c=2*r/(e-t),h=2*r/(n-a),d=(e+t)/(e-t),f=(n+a)/(n-a);let m,g;if(s===an)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(s===ra)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,a,r,o,s=an){const l=this.elements,c=1/(e-t),h=1/(n-a),d=1/(o-r),f=(e+t)*c,m=(n+a)*h;let g,_;if(s===an)g=(o+r)*d,_=-2*d;else if(s===ra)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new L,Oe=new ie,ac=new L(0,0,0),rc=new L(1,1,1),mn=new L,ki=new L,Re=new L,Ms=new ie,Ss=new Ti;class ua{constructor(t=0,e=0,n=0,a=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],o=a[4],s=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],m=a[10];switch(e){case"XYZ":this._y=Math.asin(Te(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ms.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ms,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ss.setFromEuler(this),this.setFromQuaternion(Ss,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class vr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sc=0;const ys=new L,Wn=new Ti,Qe=new ie,Fi=new L,xi=new L,oc=new L,lc=new Ti,Es=new L(1,0,0),bs=new L(0,1,0),Ts=new L(0,0,1),cc={type:"added"},hc={type:"removed"};class de extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new L,e=new ua,n=new Ti,a=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ft}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.premultiply(Wn),this}rotateX(t){return this.rotateOnAxis(Es,t)}rotateY(t){return this.rotateOnAxis(bs,t)}rotateZ(t){return this.rotateOnAxis(Ts,t)}translateOnAxis(t,e){return ys.copy(t).applyQuaternion(this.quaternion),this.position.add(ys.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Es,t)}translateY(t){return this.translateOnAxis(bs,t)}translateZ(t){return this.translateOnAxis(Ts,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fi.copy(t):Fi.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(xi,Fi,this.up):Qe.lookAt(Fi,xi,this.up),this.quaternion.setFromRotationMatrix(Qe),a&&(Qe.extractRotation(a.matrixWorld),Wn.setFromRotationMatrix(Qe),this.quaternion.premultiply(Wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(cc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,t,oc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,lc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++){const s=a[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));a.material=s}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(r(t.animations,l))}}if(e){const s=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=a,n;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}de.DEFAULT_UP=new L(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Be=new L,tn=new L,Oa=new L,en=new L,Xn=new L,qn=new L,As=new L,Ba=new L,za=new L,Ga=new L;let Oi=!1;class ze{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Be.subVectors(t,e),a.cross(Be);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){Be.subVectors(a,e),tn.subVectors(n,e),Oa.subVectors(t,e);const o=Be.dot(Be),s=Be.dot(tn),l=Be.dot(Oa),c=tn.dot(tn),h=tn.dot(Oa),d=o*c-s*s;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-s*h)*f,g=(o*h-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(t,e,n,a,r,o,s,l){return Oi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oi=!0),this.getInterpolation(t,e,n,a,r,o,s,l)}static getInterpolation(t,e,n,a,r,o,s,l){return this.getBarycoord(t,e,n,a,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,en.x),l.addScaledVector(o,en.y),l.addScaledVector(s,en.z),l)}static isFrontFacing(t,e,n,a){return Be.subVectors(n,e),tn.subVectors(t,e),Be.cross(tn).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Be.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,a,r){return Oi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oi=!0),ze.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}getInterpolation(t,e,n,a,r){return ze.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let o,s;Xn.subVectors(a,n),qn.subVectors(r,n),Ba.subVectors(t,n);const l=Xn.dot(Ba),c=qn.dot(Ba);if(l<=0&&c<=0)return e.copy(n);za.subVectors(t,a);const h=Xn.dot(za),d=qn.dot(za);if(h>=0&&d<=h)return e.copy(a);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Xn,o);Ga.subVectors(t,r);const m=Xn.dot(Ga),g=qn.dot(Ga);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),e.copy(n).addScaledVector(qn,s);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return As.subVectors(r,a),s=(d-h)/(d-h+(m-g)),e.copy(a).addScaledVector(As,s);const u=1/(p+_+f);return o=_*u,s=f*u,e.copy(n).addScaledVector(Xn,o).addScaledVector(qn,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function Ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=Wt.workingColorSpace){if(t=$l(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ha(o,r,t+1/3),this.g=Ha(o,r,t),this.b=Ha(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,a),this}setStyle(t,e=he){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=a[1],s=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=he){const n=Ao[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return Wt.fromWorkingColorSpace(me.copy(this),t),Math.round(Te(me.r*255,0,255))*65536+Math.round(Te(me.g*255,0,255))*256+Math.round(Te(me.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,a=me.g,r=me.b,o=Math.max(n,a,r),s=Math.min(n,a,r);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=h<=.5?d/(o+s):d/(2-o-s),o){case n:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-n)/d+2;break;case r:l=(n-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=he){Wt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,a=me.b;return t!==he?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Bi);const n=Ra(gn.h,Bi.h,e),a=Ra(gn.s,Bi.s,e),r=Ra(gn.l,Bi.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new Gt;Gt.NAMES=Ao;let uc=0;class ui extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ni,this.side=Ve,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=er,this.blendDst=nr,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ds,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==Ve&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==er&&(n.blendSrc=this.blendSrc),this.blendDst!==nr&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ds&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(e){const r=a(t.textures),o=a(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sn extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new L,zi=new Ot;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zi.fromBufferAttribute(this,e),zi.applyMatrix3(t),this.setXY(e,zi.x,zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),a=be(a,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fs&&(t.usage=this.usage),t}}class wo extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ro extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dc=0;const De=new ie,Va=new de,Yn=new L,Ce=new Ai,vi=new Ai,ce=new L;class Ae extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yo(t)?Ro:wo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return De.makeRotationFromQuaternion(t),this.applyMatrix4(De),this}rotateX(t){return De.makeRotationX(t),this.applyMatrix4(De),this}rotateY(t){return De.makeRotationY(t),this.applyMatrix4(De),this}rotateZ(t){return De.makeRotationZ(t),this.applyMatrix4(De),this}translate(t,e,n){return De.makeTranslation(t,e,n),this.applyMatrix4(De),this}scale(t,e,n){return De.makeScale(t,e,n),this.applyMatrix4(De),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const s=e[r];vi.setFromBufferAttribute(s),this.morphTargetsRelative?(ce.addVectors(Ce.min,vi.min),Ce.expandByPoint(ce),ce.addVectors(Ce.max,vi.max),Ce.expandByPoint(ce)):(Ce.expandByPoint(vi.min),Ce.expandByPoint(vi.max))}Ce.getCenter(n);let a=0;for(let r=0,o=t.count;r<o;r++)ce.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(ce));if(e)for(let r=0,o=e.length;r<o;r++){const s=e[r],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)ce.fromBufferAttribute(s,c),l&&(Yn.fromBufferAttribute(t,c),ce.add(Yn)),a=Math.max(a,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,a=e.position.array,r=e.normal.array,o=e.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<s;T++)c[T]=new L,h[T]=new L;const d=new L,f=new L,m=new L,g=new Ot,_=new Ot,p=new Ot,u=new L,y=new L;function v(T,z,G){d.fromArray(a,T*3),f.fromArray(a,z*3),m.fromArray(a,G*3),g.fromArray(o,T*2),_.fromArray(o,z*2),p.fromArray(o,G*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Q),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(Q),c[T].add(u),c[z].add(u),c[G].add(u),h[T].add(y),h[z].add(y),h[G].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let T=0,z=E.length;T<z;++T){const G=E[T],Q=G.start,P=G.count;for(let F=Q,V=Q+P;F<V;F+=3)v(n[F+0],n[F+1],n[F+2])}const C=new L,w=new L,A=new L,B=new L;function M(T){A.fromArray(r,T*3),B.copy(A);const z=c[T];C.copy(z),C.sub(A.multiplyScalar(A.dot(z))).normalize(),w.crossVectors(B,z);const Q=w.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=Q}for(let T=0,z=E.length;T<z;++T){const G=E[T],Q=G.start,P=G.count;for(let F=Q,V=Q+P;F<V;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const a=new L,r=new L,o=new L,s=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);a.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(a,r),h.cross(d),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),s.add(h),l.add(h),c.add(h),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)a.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(a,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(s,l){const c=s.array,h=s.itemSize,d=s.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){s.isInterleavedBufferAttribute?m=l[_]*s.data.stride+s.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new je(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,a=this.attributes;for(const s in a){const l=a[s],c=t(l,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ws=new ie,An=new xr,Gi=new ha,Rs=new L,jn=new L,Kn=new L,$n=new L,Wa=new L,Hi=new L,Vi=new Ot,Wi=new Ot,Xi=new Ot,Cs=new L,Ps=new L,Ls=new L,qi=new L,Yi=new L;class $t extends de{constructor(t=new Ae,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const s=this.morphTargetInfluences;if(r&&s){Hi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=s[l],d=r[l];h!==0&&(Wa.fromBufferAttribute(d,t),o?Hi.addScaledVector(Wa,h):Hi.addScaledVector(Wa.sub(e),h))}e.add(Hi)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(r),An.copy(t.ray).recast(t.near),!(Gi.containsPoint(An.origin)===!1&&(An.intersectSphere(Gi,Rs)===null||An.origin.distanceToSquared(Rs)>(t.far-t.near)**2))&&(ws.copy(r).invert(),An.copy(t.ray).applyMatrix4(ws),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,An)))}_computeIntersections(t,e,n){let a;const r=this.geometry,o=this.material,s=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,C=v;E<C;E+=3){const w=s.getX(E),A=s.getX(E+1),B=s.getX(E+2);a=ji(this,u,t,n,c,h,d,w,A,B),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=s.getX(p),v=s.getX(p+1),E=s.getX(p+2);a=ji(this,o,t,n,c,h,d,y,v,E),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,C=v;E<C;E+=3){const w=E,A=E+1,B=E+2;a=ji(this,u,t,n,c,h,d,w,A,B),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=p,v=p+1,E=p+2;a=ji(this,o,t,n,c,h,d,y,v,E),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}}}function fc(i,t,e,n,a,r,o,s){let l;if(t.side===ye?l=n.intersectTriangle(o,r,a,!0,s):l=n.intersectTriangle(a,r,o,t.side===Ve,s),l===null)return null;Yi.copy(s),Yi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Yi);return c<e.near||c>e.far?null:{distance:c,point:Yi.clone(),object:i}}function ji(i,t,e,n,a,r,o,s,l,c){i.getVertexPosition(s,jn),i.getVertexPosition(l,Kn),i.getVertexPosition(c,$n);const h=fc(i,t,e,n,jn,Kn,$n,qi);if(h){a&&(Vi.fromBufferAttribute(a,s),Wi.fromBufferAttribute(a,l),Xi.fromBufferAttribute(a,c),h.uv=ze.getInterpolation(qi,jn,Kn,$n,Vi,Wi,Xi,new Ot)),r&&(Vi.fromBufferAttribute(r,s),Wi.fromBufferAttribute(r,l),Xi.fromBufferAttribute(r,c),h.uv1=ze.getInterpolation(qi,jn,Kn,$n,Vi,Wi,Xi,new Ot),h.uv2=h.uv1),o&&(Cs.fromBufferAttribute(o,s),Ps.fromBufferAttribute(o,l),Ls.fromBufferAttribute(o,c),h.normal=ze.getInterpolation(qi,jn,Kn,$n,Cs,Ps,Ls,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new L,materialIndex:0};ze.getNormal(jn,Kn,$n,d.normal),h.face=d}return h}class di extends Ae{constructor(t=1,e=1,n=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:o};const s=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,a,o,2),g("x","z","y",1,-1,t,n,-e,a,o,3),g("x","y","z",1,-1,t,e,n,a,r,4),g("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function g(_,p,u,y,v,E,C,w,A,B,M){const T=E/A,z=C/B,G=E/2,Q=C/2,P=w/2,F=A+1,V=B+1;let q=0,W=0;const X=new L;for(let Y=0;Y<V;Y++){const tt=Y*z-Q;for(let et=0;et<F;et++){const H=et*T-G;X[_]=H*y,X[p]=tt*v,X[u]=P,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[u]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(et/A),d.push(1-Y/B),q+=1}}for(let Y=0;Y<B;Y++)for(let tt=0;tt<A;tt++){const et=f+tt+F*Y,H=f+tt+F*(Y+1),j=f+(tt+1)+F*(Y+1),ot=f+(tt+1)+F*Y;l.push(et,H,ot),l.push(H,j,ot),W+=6}s.addGroup(m,W,M),m+=W,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=ci(i[e]);for(const a in n)t[a]=n[a]}return t}function pc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Co(i){return i.getRenderTarget()===null?i.outputColorSpace:Wt.workingColorSpace}const mc={clone:ci,merge:Me};var gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gc,this.fragmentShader=_c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ci(t.uniforms),this.uniformsGroups=pc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?e.uniforms[a]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[a]={type:"m4",value:o.toArray()}:e.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Po extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=an}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ue extends Po{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,a,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wa*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*a/l,e-=o.offsetY*n/c,a*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zn=-90,Jn=1;class xc extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ue(Zn,Jn,t,e);a.layers=this.layers,this.add(a);const r=new Ue(Zn,Jn,t,e);r.layers=this.layers,this.add(r);const o=new Ue(Zn,Jn,t,e);o.layers=this.layers,this.add(o);const s=new Ue(Zn,Jn,t,e);s.layers=this.layers,this.add(s);const l=new Ue(Zn,Jn,t,e);l.layers=this.layers,this.add(l);const c=new Ue(Zn,Jn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,o,s,l]=e;for(const c of e)this.remove(c);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,o),t.setRenderTarget(n,2,a),t.render(e,s),t.setRenderTarget(n,3,a),t.render(e,l),t.setRenderTarget(n,4,a),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,a),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lo extends Ee{constructor(t,e,n,a,r,o,s,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ri,super(t,e,n,a,r,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vc extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];e.encoding!==void 0&&(Mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Nn?he:ke),this.texture=new Lo(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new di(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ye,blending:vn});r.uniforms.tEquirect.value=e;const o=new $t(a,r),s=e.minFilter;return e.minFilter===oi&&(e.minFilter=Pe),new xc(1,10,this).update(t,o),e.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,a);t.setRenderTarget(r)}}const Xa=new L,Mc=new L,Sc=new Ft;class Rn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Xa.subVectors(n,e).cross(Mc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xa),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sc.getNormalMatrix(t),a=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new ha,Ki=new L;class Mr{constructor(t=new Rn,e=new Rn,n=new Rn,a=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,a,r,o]}set(t,e,n,a,r,o){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(a),s[4].copy(r),s[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an){const n=this.planes,a=t.elements,r=a[0],o=a[1],s=a[2],l=a[3],c=a[4],h=a[5],d=a[6],f=a[7],m=a[8],g=a[9],_=a[10],p=a[11],u=a[12],y=a[13],v=a[14],E=a[15];if(n[0].setComponents(l-r,f-c,p-m,E-u).normalize(),n[1].setComponents(l+r,f+c,p+m,E+u).normalize(),n[2].setComponents(l+o,f+h,p+g,E+y).normalize(),n[3].setComponents(l-o,f-h,p-g,E-y).normalize(),n[4].setComponents(l-s,f-d,p-_,E-v).normalize(),e===an)n[5].setComponents(l+s,f+d,p+_,E+v).normalize();else if(e===ra)n[5].setComponents(s,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(Ki.x=a.normal.x>0?t.max.x:t.min.x,Ki.y=a.normal.y>0?t.max.y:t.min.y,Ki.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Do(){let i=null,t=!1,e=null,n=null;function a(r,o){e(r,o),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yc(i,t){const e=t.isWebGL2,n=new WeakMap;function a(c,h){const d=c.array,f=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];e?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,a(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:s,update:l}}class on extends Ae{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,o=e/2,s=Math.floor(n),l=Math.floor(a),c=s+1,h=l+1,d=t/s,f=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const y=u*f-o;for(let v=0;v<c;v++){const E=v*d-r;g.push(E,-y,0),_.push(0,0,1),p.push(v/s),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<s;y++){const v=y+c*u,E=y+c*(u+1),C=y+1+c*(u+1),w=y+1+c*u;m.push(v,E,w),m.push(E,C,w)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ec=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Uc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qc="gl_FragColor = linearToOutputTexel( gl_FragColor );",th=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ih=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ph=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ch=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ph=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$h=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,au=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ru=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,su=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,du=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ku=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ou=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ku=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ju=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,td=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:Ec,alphahash_pars_fragment:bc,alphamap_fragment:Tc,alphamap_pars_fragment:Ac,alphatest_fragment:wc,alphatest_pars_fragment:Rc,aomap_fragment:Cc,aomap_pars_fragment:Pc,batching_pars_vertex:Lc,batching_vertex:Dc,begin_vertex:Uc,beginnormal_vertex:Ic,bsdfs:Nc,iridescence_fragment:kc,bumpmap_pars_fragment:Fc,clipping_planes_fragment:Oc,clipping_planes_pars_fragment:Bc,clipping_planes_pars_vertex:zc,clipping_planes_vertex:Gc,color_fragment:Hc,color_pars_fragment:Vc,color_pars_vertex:Wc,color_vertex:Xc,common:qc,cube_uv_reflection_fragment:Yc,defaultnormal_vertex:jc,displacementmap_pars_vertex:Kc,displacementmap_vertex:$c,emissivemap_fragment:Zc,emissivemap_pars_fragment:Jc,colorspace_fragment:Qc,colorspace_pars_fragment:th,envmap_fragment:eh,envmap_common_pars_fragment:nh,envmap_pars_fragment:ih,envmap_pars_vertex:ah,envmap_physical_pars_fragment:gh,envmap_vertex:rh,fog_vertex:sh,fog_pars_vertex:oh,fog_fragment:lh,fog_pars_fragment:ch,gradientmap_pars_fragment:hh,lightmap_fragment:uh,lightmap_pars_fragment:dh,lights_lambert_fragment:fh,lights_lambert_pars_fragment:ph,lights_pars_begin:mh,lights_toon_fragment:_h,lights_toon_pars_fragment:xh,lights_phong_fragment:vh,lights_phong_pars_fragment:Mh,lights_physical_fragment:Sh,lights_physical_pars_fragment:yh,lights_fragment_begin:Eh,lights_fragment_maps:bh,lights_fragment_end:Th,logdepthbuf_fragment:Ah,logdepthbuf_pars_fragment:wh,logdepthbuf_pars_vertex:Rh,logdepthbuf_vertex:Ch,map_fragment:Ph,map_pars_fragment:Lh,map_particle_fragment:Dh,map_particle_pars_fragment:Uh,metalnessmap_fragment:Ih,metalnessmap_pars_fragment:Nh,morphcolor_vertex:kh,morphnormal_vertex:Fh,morphtarget_pars_vertex:Oh,morphtarget_vertex:Bh,normal_fragment_begin:zh,normal_fragment_maps:Gh,normal_pars_fragment:Hh,normal_pars_vertex:Vh,normal_vertex:Wh,normalmap_pars_fragment:Xh,clearcoat_normal_fragment_begin:qh,clearcoat_normal_fragment_maps:Yh,clearcoat_pars_fragment:jh,iridescence_pars_fragment:Kh,opaque_fragment:$h,packing:Zh,premultiplied_alpha_fragment:Jh,project_vertex:Qh,dithering_fragment:tu,dithering_pars_fragment:eu,roughnessmap_fragment:nu,roughnessmap_pars_fragment:iu,shadowmap_pars_fragment:au,shadowmap_pars_vertex:ru,shadowmap_vertex:su,shadowmask_pars_fragment:ou,skinbase_vertex:lu,skinning_pars_vertex:cu,skinning_vertex:hu,skinnormal_vertex:uu,specularmap_fragment:du,specularmap_pars_fragment:fu,tonemapping_fragment:pu,tonemapping_pars_fragment:mu,transmission_fragment:gu,transmission_pars_fragment:_u,uv_pars_fragment:xu,uv_pars_vertex:vu,uv_vertex:Mu,worldpos_vertex:Su,background_vert:yu,background_frag:Eu,backgroundCube_vert:bu,backgroundCube_frag:Tu,cube_vert:Au,cube_frag:wu,depth_vert:Ru,depth_frag:Cu,distanceRGBA_vert:Pu,distanceRGBA_frag:Lu,equirect_vert:Du,equirect_frag:Uu,linedashed_vert:Iu,linedashed_frag:Nu,meshbasic_vert:ku,meshbasic_frag:Fu,meshlambert_vert:Ou,meshlambert_frag:Bu,meshmatcap_vert:zu,meshmatcap_frag:Gu,meshnormal_vert:Hu,meshnormal_frag:Vu,meshphong_vert:Wu,meshphong_frag:Xu,meshphysical_vert:qu,meshphysical_frag:Yu,meshtoon_vert:ju,meshtoon_frag:Ku,points_vert:$u,points_frag:Zu,shadow_vert:Ju,shadow_frag:Qu,sprite_vert:td,sprite_frag:ed},it={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ye={basic:{uniforms:Me([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Me([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Me([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Me([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Me([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Me([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Me([it.points,it.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Me([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Me([it.common,it.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Me([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Me([it.sprite,it.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Me([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Me([it.lights,it.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Ye.physical={uniforms:Me([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const $i={r:0,b:0,g:0};function nd(i,t,e,n,a,r,o){const s=new Gt(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let y=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?_(s,l):v&&v.isColor&&(_(v,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===la)?(h===void 0&&(h=new $t(new di(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ci(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Kt,(d!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $t(new on(2,2),new Fn({name:"BackgroundMaterial",uniforms:ci(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB($i,Co(i)),n.buffers.color.setClear($i.r,$i.g,$i.b,u,o)}return{getClearColor:function(){return s},setClearColor:function(p,u=1){s.set(p),l=u,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(s,l)},render:g}}function id(i,t,e,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},l=p(null);let c=l,h=!1;function d(P,F,V,q,W){let X=!1;if(o){const Y=_(q,V,F);c!==Y&&(c=Y,m(c.object)),X=u(P,q,V,W),X&&y(P,q,V,W)}else{const Y=F.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==Y)&&(c.geometry=q.id,c.program=V.id,c.wireframe=Y,X=!0)}W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,B(P,F,V,q),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,F,V){const q=V.wireframe===!0;let W=s[P.id];W===void 0&&(W={},s[P.id]=W);let X=W[F.id];X===void 0&&(X={},W[F.id]=X);let Y=X[q];return Y===void 0&&(Y=p(f()),X[q]=Y),Y}function p(P){const F=[],V=[],q=[];for(let W=0;W<a;W++)F[W]=0,V[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:q,object:P,attributes:{},index:null}}function u(P,F,V,q){const W=c.attributes,X=F.attributes;let Y=0;const tt=V.getAttributes();for(const et in tt)if(tt[et].location>=0){const j=W[et];let ot=X[et];if(ot===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),j===void 0||j.attribute!==ot||ot&&j.data!==ot.data)return!0;Y++}return c.attributesNum!==Y||c.index!==q}function y(P,F,V,q){const W={},X=F.attributes;let Y=0;const tt=V.getAttributes();for(const et in tt)if(tt[et].location>=0){let j=X[et];j===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const ot={};ot.attribute=j,j&&j.data&&(ot.data=j.data),W[et]=ot,Y++}c.attributes=W,c.attributesNum=Y,c.index=q}function v(){const P=c.newAttributes;for(let F=0,V=P.length;F<V;F++)P[F]=0}function E(P){C(P,0)}function C(P,F){const V=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;V[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),W[P]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),W[P]=F)}function w(){const P=c.newAttributes,F=c.enabledAttributes;for(let V=0,q=F.length;V<q;V++)F[V]!==P[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(P,F,V,q,W,X,Y){Y===!0?i.vertexAttribIPointer(P,F,V,W,X):i.vertexAttribPointer(P,F,V,q,W,X)}function B(P,F,V,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const W=q.attributes,X=V.getAttributes(),Y=F.defaultAttributeValues;for(const tt in X){const et=X[tt];if(et.location>=0){let H=W[tt];if(H===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const j=H.normalized,ot=H.itemSize,mt=e.get(H);if(mt===void 0)continue;const pt=mt.buffer,wt=mt.type,Ct=mt.bytesPerElement,St=n.isWebGL2===!0&&(wt===i.INT||wt===i.UNSIGNED_INT||H.gpuType===uo);if(H.isInterleavedBufferAttribute){const zt=H.data,U=zt.stride,_e=H.offset;if(zt.isInstancedInterleavedBuffer){for(let _t=0;_t<et.locationSize;_t++)C(et.location+_t,zt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let _t=0;_t<et.locationSize;_t++)E(et.location+_t);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let _t=0;_t<et.locationSize;_t++)A(et.location+_t,ot/et.locationSize,wt,j,U*Ct,(_e+ot/et.locationSize*_t)*Ct,St)}else{if(H.isInstancedBufferAttribute){for(let zt=0;zt<et.locationSize;zt++)C(et.location+zt,H.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let zt=0;zt<et.locationSize;zt++)E(et.location+zt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let zt=0;zt<et.locationSize;zt++)A(et.location+zt,ot/et.locationSize,wt,j,ot*Ct,ot/et.locationSize*zt*Ct,St)}}else if(Y!==void 0){const j=Y[tt];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(et.location,j);break;case 3:i.vertexAttrib3fv(et.location,j);break;case 4:i.vertexAttrib4fv(et.location,j);break;default:i.vertexAttrib1fv(et.location,j)}}}}w()}function M(){G();for(const P in s){const F=s[P];for(const V in F){const q=F[V];for(const W in q)g(q[W].object),delete q[W];delete F[V]}delete s[P]}}function T(P){if(s[P.id]===void 0)return;const F=s[P.id];for(const V in F){const q=F[V];for(const W in q)g(q[W].object),delete q[W];delete F[V]}delete s[P.id]}function z(P){for(const F in s){const V=s[F];if(V[P.id]===void 0)continue;const q=V[P.id];for(const W in q)g(q[W].object),delete q[W];delete V[P.id]}}function G(){Q(),h=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:E,disableUnusedAttributes:w}}function ad(i,t,e,n){const a=n.isWebGL2;let r;function o(h){r=h}function s(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(a)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];e.update(g,r,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function rd(i,t,e){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||t.has("OES_texture_float"),C=v&&E,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:w}}function sd(i){const t=this;let e=null,n=0,a=!1,r=!1;const o=new Rn,s=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||a;return a=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!a||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,v=y*4;let E=u.clippingState||null;l.value=E,E=h(g,f,v,m);for(let C=0;C!==v;++C)E[C]=e[C];u.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,y=f.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,E=m;v!==_;++v,E+=4)o.copy(d[v]).applyMatrix4(y,s),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function od(i){let t=new WeakMap;function e(o,s){return s===ir?o.mapping=ri:s===ar&&(o.mapping=si),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===ir||s===ar)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vc(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",a),e(c.texture,o.mapping)}else return null}}return o}function a(o){const s=o.target;s.removeEventListener("dispose",a);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uo extends Po{constructor(t=-1,e=1,n=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,o=n+t,s=a+e,l=a-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ti=4,Ds=[.125,.215,.35,.446,.526,.582],Ln=20,qa=new Uo,Us=new Gt;let Ya=null,ja=0,Ka=0;const Cn=(1+Math.sqrt(5))/2,Qn=1/Cn,Is=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Cn,Qn),new L(0,Cn,-Qn),new L(Qn,0,Cn),new L(-Qn,0,Cn),new L(Cn,Qn,0),new L(-Cn,Qn,0)];class Ns{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Os(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,ja,Ka),t.scissorTest=!1,Zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ri||t.mapping===si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Si,format:Ge,colorSpace:ln,depthBuffer:!1},a=ks(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ks(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ld(r)),this._blurMaterial=cd(r,t,e)}return a}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,a){const s=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Us),h.toneMapping=rn,h.autoClear=!1;const m=new sn({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1}),g=new $t(new di,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Us),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(s.up.set(0,l[u],0),s.lookAt(c[u],0,0)):y===1?(s.up.set(0,0,l[u]),s.lookAt(0,c[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,c[u]));const v=this._cubeSize;Zi(a,y*v,u>2?v:0,v,v),h.setRenderTarget(a),_&&h.render(g,s),h.render(t,s)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===ri||t.mapping===si;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Os()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fs());const r=a?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;Zi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Is[(a-1)%Is.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,a,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,a,"latitudinal",r),this._halfBlur(o,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $t(this._lodPlanes[a],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ln-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Ln;p>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const u=[];let y=0;for(let A=0;A<Ln;++A){const B=A/_,M=Math.exp(-B*B/2);u.push(M),A===0?y+=M:A<p&&(y+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const E=this._sizeLods[a],C=3*E*(a>v-ti?a-v+ti:0),w=4*(this._cubeSize-E);Zi(e,C,w,3*E,2*E),l.setRenderTarget(e),l.render(d,qa)}}function ld(i){const t=[],e=[],n=[];let a=i;const r=i-ti+1+Ds.length;for(let o=0;o<r;o++){const s=Math.pow(2,a);e.push(s);let l=1/s;o>i-ti?l=Ds[o-i+ti-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),E=new Float32Array(u*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,B=w>2?0:-1,M=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];y.set(M,_*g*w),v.set(f,p*g*w);const T=[w,w,w,w,w,w];E.set(T,u*g*w)}const C=new Ae;C.setAttribute("position",new je(y,_)),C.setAttribute("uv",new je(v,p)),C.setAttribute("faceIndex",new je(E,u)),t.push(C),a>ti&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ks(i,t,e){const n=new kn(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zi(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function cd(i,t,e){const n=new Float32Array(Ln),a=new L(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Fs(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Os(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Sr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hd(i){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ir||l===ar,h=l===ri||l===si;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=t.get(s);return e===null&&(e=new Ns(i)),d=c?e.fromEquirectangular(s,d):e.fromCubemap(s,d),t.set(s,d),d.texture}else{if(t.has(s))return t.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||h&&d&&a(d)){e===null&&(e=new Ns(i));const f=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function a(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ud(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const a=e(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function dd(i,t,e,n){const a={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete a[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(d,f){return a[f.id]===!0||(f.addEventListener("dispose",o),a[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,E=y.length;v<E;v+=3){const C=y[v+0],w=y[v+1],A=y[v+2];f.push(C,w,w,A,A,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const C=v+0,w=v+1,A=v+2;f.push(C,w,w,A,A,C)}}else return;const p=new(yo(f)?Ro:wo)(f,1);p.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function fd(i,t,e,n){const a=n.isWebGL2;let r;function o(m){r=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,s,m*l),e.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(a)p=i,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,s,m*l,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,s,m,0,_);let u=0;for(let y=0;y<_;y++)u+=g[y];e.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function pd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=s*(r/3);break;case i.LINES:e.lines+=s*(r/2);break;case i.LINE_STRIP:e.lines+=s*(r-1);break;case i.LINE_LOOP:e.lines+=s*r;break;case i.POINTS:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function md(i,t){return i[0]-t[0]}function gd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function _d(i,t,e){const n={},a=new Float32Array(8),r=new WeakMap,o=new ue,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let F=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),C===!0&&(M=3);let T=h.attributes.position.count*M,z=1;T>t.maxTextureSize&&(z=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const G=new Float32Array(T*z*4*_),Q=new To(G,T,z,_);Q.type=xn,Q.needsUpdate=!0;const P=M*4;for(let V=0;V<_;V++){const q=w[V],W=A[V],X=B[V],Y=T*z*4*V;for(let tt=0;tt<q.count;tt++){const et=tt*P;v===!0&&(o.fromBufferAttribute(q,tt),G[Y+et+0]=o.x,G[Y+et+1]=o.y,G[Y+et+2]=o.z,G[Y+et+3]=0),E===!0&&(o.fromBufferAttribute(W,tt),G[Y+et+4]=o.x,G[Y+et+5]=o.y,G[Y+et+6]=o.z,G[Y+et+7]=0),C===!0&&(o.fromBufferAttribute(X,tt),G[Y+et+8]=o.x,G[Y+et+9]=o.y,G[Y+et+10]=o.z,G[Y+et+11]=X.itemSize===4?o.w:1)}}p={count:_,texture:Q,size:new Ot(T,z)},r.set(h,p),h.addEventListener("dispose",F)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[h.id]=_}for(let E=0;E<g;E++){const C=_[E];C[0]=E,C[1]=f[E]}_.sort(gd);for(let E=0;E<8;E++)E<g&&_[E][1]?(s[E][0]=_[E][0],s[E][1]=_[E][1]):(s[E][0]=Number.MAX_SAFE_INTEGER,s[E][1]=0);s.sort(md);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let y=0;for(let E=0;E<8;E++){const C=s[E],w=C[0],A=C[1];w!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+E)!==p[w]&&h.setAttribute("morphTarget"+E,p[w]),u&&h.getAttribute("morphNormal"+E)!==u[w]&&h.setAttribute("morphNormal"+E,u[w]),a[E]=A,y+=A):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),u&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),a[E]=0)}const v=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:l}}function xd(i,t,e,n){let a=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function o(){a=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Io extends Ee{constructor(t,e,n,a,r,o,s,l,c,h){if(h=h!==void 0?h:In,h!==In&&h!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===In&&(n=_n),n===void 0&&h===li&&(n=Un),super(null,a,r,o,s,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const No=new Ee,ko=new Io(1,1);ko.compareFunction=So;const Fo=new To,Oo=new nc,Bo=new Lo,Bs=[],zs=[],Gs=new Float32Array(16),Hs=new Float32Array(9),Vs=new Float32Array(4);function fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=Bs[a];if(r===void 0&&(r=new Float32Array(a),Bs[a]=r),t!==0){n.toArray(r,0);for(let o=1,s=0;o!==t;++o)s+=e,i[o].toArray(r,s)}return r}function re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function da(i,t){let e=zs[t];e===void 0&&(e=new Int32Array(t),zs[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2fv(this.addr,t),se(e,t)}}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;i.uniform3fv(this.addr,t),se(e,t)}}function yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4fv(this.addr,t),se(e,t)}}function Ed(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Vs.set(n),i.uniformMatrix2fv(this.addr,!1,Vs),se(e,n)}}function bd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Hs.set(n),i.uniformMatrix3fv(this.addr,!1,Hs),se(e,n)}}function Td(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Gs.set(n),i.uniformMatrix4fv(this.addr,!1,Gs),se(e,n)}}function Ad(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2iv(this.addr,t),se(e,t)}}function Rd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3iv(this.addr,t),se(e,t)}}function Cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4iv(this.addr,t),se(e,t)}}function Pd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2uiv(this.addr,t),se(e,t)}}function Dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3uiv(this.addr,t),se(e,t)}}function Ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4uiv(this.addr,t),se(e,t)}}function Id(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);const r=this.type===i.SAMPLER_2D_SHADOW?ko:No;e.setTexture2D(t||r,a)}function Nd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||Oo,a)}function kd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||Bo,a)}function Fd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Fo,a)}function Od(i){switch(i){case 5126:return vd;case 35664:return Md;case 35665:return Sd;case 35666:return yd;case 35674:return Ed;case 35675:return bd;case 35676:return Td;case 5124:case 35670:return Ad;case 35667:case 35671:return wd;case 35668:case 35672:return Rd;case 35669:case 35673:return Cd;case 5125:return Pd;case 36294:return Ld;case 36295:return Dd;case 36296:return Ud;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Fd}}function Bd(i,t){i.uniform1fv(this.addr,t)}function zd(i,t){const e=fi(t,this.size,2);i.uniform2fv(this.addr,e)}function Gd(i,t){const e=fi(t,this.size,3);i.uniform3fv(this.addr,e)}function Hd(i,t){const e=fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Vd(i,t){const e=fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wd(i,t){const e=fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xd(i,t){const e=fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qd(i,t){i.uniform1iv(this.addr,t)}function Yd(i,t){i.uniform2iv(this.addr,t)}function jd(i,t){i.uniform3iv(this.addr,t)}function Kd(i,t){i.uniform4iv(this.addr,t)}function $d(i,t){i.uniform1uiv(this.addr,t)}function Zd(i,t){i.uniform2uiv(this.addr,t)}function Jd(i,t){i.uniform3uiv(this.addr,t)}function Qd(i,t){i.uniform4uiv(this.addr,t)}function tf(i,t,e){const n=this.cache,a=t.length,r=da(e,a);re(n,r)||(i.uniform1iv(this.addr,r),se(n,r));for(let o=0;o!==a;++o)e.setTexture2D(t[o]||No,r[o])}function ef(i,t,e){const n=this.cache,a=t.length,r=da(e,a);re(n,r)||(i.uniform1iv(this.addr,r),se(n,r));for(let o=0;o!==a;++o)e.setTexture3D(t[o]||Oo,r[o])}function nf(i,t,e){const n=this.cache,a=t.length,r=da(e,a);re(n,r)||(i.uniform1iv(this.addr,r),se(n,r));for(let o=0;o!==a;++o)e.setTextureCube(t[o]||Bo,r[o])}function af(i,t,e){const n=this.cache,a=t.length,r=da(e,a);re(n,r)||(i.uniform1iv(this.addr,r),se(n,r));for(let o=0;o!==a;++o)e.setTexture2DArray(t[o]||Fo,r[o])}function rf(i){switch(i){case 5126:return Bd;case 35664:return zd;case 35665:return Gd;case 35666:return Hd;case 35674:return Vd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return qd;case 35667:case 35671:return Yd;case 35668:case 35672:return jd;case 35669:case 35673:return Kd;case 5125:return $d;case 36294:return Zd;case 36295:return Jd;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return af}}class sf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Od(e.type)}}class of{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rf(e.type)}}class lf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(t,e[s.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Ws(i,t){i.seq.push(t),i.map[t.id]=t}function cf(i,t,e){const n=i.name,a=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),o=$a.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===a){Ws(e,c===void 0?new sf(s,i,t):new of(s,i,t));break}else{let d=e.map[s];d===void 0&&(d=new lf(s),Ws(e,d)),e=d}}}class Qi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),o=t.getUniformLocation(e,r.name);cf(r,o,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,o=e.length;r!==o;++r){const s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const o=t[a];o.id in e&&n.push(o)}return n}}function Xs(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hf=37297;let uf=0;function df(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=a;o<r;o++){const s=o+1;n.push(`${s===t?">":" "} ${s}: ${e[o]}`)}return n.join(`
`)}function ff(i){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(i);let n;switch(t===e?n="":t===aa&&e===ia?n="LinearDisplayP3ToLinearSRGB":t===ia&&e===aa&&(n="LinearSRGBToLinearDisplayP3"),i){case ln:case ca:return[n,"LinearTransferOETF"];case he:case _r:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qs(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+df(i.getShaderSource(t),o)}else return a}function pf(i,t){const e=ff(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mf(i,t){let e;switch(t){case Tl:e="Linear";break;case Al:e="Reinhard";break;case wl:e="OptimizedCineon";break;case Rl:e="ACESFilmic";break;case Pl:e="AgX";break;case Cl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function gf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ei).join(`
`)}function _f(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ei).join(`
`)}function xf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),o=r.name;let s=1;r.type===i.FLOAT_MAT2&&(s=2),r.type===i.FLOAT_MAT3&&(s=3),r.type===i.FLOAT_MAT4&&(s=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:s}}return e}function ei(i){return i!==""}function Ys(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function js(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function cr(i){return i.replace(Mf,yf)}const Sf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yf(i,t){let e=Lt[t];if(e===void 0){const n=Sf.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cr(e)}const Ef=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ks(i){return i.replace(Ef,bf)}function bf(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function $s(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===co?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Af(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case si:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case si:t="ENVMAP_MODE_REFRACTION";break}return t}function Rf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mr:t="ENVMAP_BLENDING_MULTIPLY";break;case El:t="ENVMAP_BLENDING_MIX";break;case bl:t="ENVMAP_BLENDING_ADD";break}return t}function Cf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pf(i,t,e,n){const a=i.getContext(),r=e.defines;let o=e.vertexShader,s=e.fragmentShader;const l=Tf(e),c=Af(e),h=wf(e),d=Rf(e),f=Cf(e),m=e.isWebGL2?"":gf(e),g=_f(e),_=xf(r),p=a.createProgram();let u,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ei).join(`
`),u.length>0&&(u+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ei).join(`
`),y.length>0&&(y+=`
`)):(u=[$s(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ei).join(`
`),y=[m,$s(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rn?"#define TONE_MAPPING":"",e.toneMapping!==rn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==rn?mf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,pf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ei).join(`
`)),o=cr(o),o=Ys(o,e),o=js(o,e),s=cr(s),s=Ys(s,e),s=js(s,e),o=Ks(o),s=Ks(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ps?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ps?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=v+u+o,C=v+y+s,w=Xs(a,a.VERTEX_SHADER,E),A=Xs(a,a.FRAGMENT_SHADER,C);a.attachShader(p,w),a.attachShader(p,A),e.index0AttributeName!==void 0?a.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(p,0,"position"),a.linkProgram(p);function B(G){if(i.debug.checkShaderErrors){const Q=a.getProgramInfoLog(p).trim(),P=a.getShaderInfoLog(w).trim(),F=a.getShaderInfoLog(A).trim();let V=!0,q=!0;if(a.getProgramParameter(p,a.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,p,w,A);else{const W=qs(a,w,"vertex"),X=qs(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(p,a.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+W+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||F==="")&&(q=!1);q&&(G.diagnostics={runnable:V,programLog:Q,vertexShader:{log:P,prefix:u},fragmentShader:{log:F,prefix:y}})}a.deleteShader(w),a.deleteShader(A),M=new Qi(a,p),T=vf(a,p)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(p,hf)),z},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let Lf=0;class Df{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uf(t),e.set(t,n)),n}}class Uf{constructor(t){this.id=Lf++,this.code=t,this.usedTimes=0}}function If(i,t,e,n,a,r,o){const s=new vr,l=new Df,c=[],h=a.isWebGL2,d=a.logarithmicDepthBuffer,f=a.vertexTextures;let m=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,z,G,Q){const P=G.fog,F=Q.geometry,V=M.isMeshStandardMaterial?G.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),W=q&&q.mapping===la?q.image.height:null,X=g[M.type];M.precision!==null&&(m=a.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=Y!==void 0?Y.length:0;let et=0;F.morphAttributes.position!==void 0&&(et=1),F.morphAttributes.normal!==void 0&&(et=2),F.morphAttributes.color!==void 0&&(et=3);let H,j,ot,mt;if(X){const xe=Ye[X];H=xe.vertexShader,j=xe.fragmentShader}else H=M.vertexShader,j=M.fragmentShader,l.update(M),ot=l.getVertexShaderID(M),mt=l.getFragmentShaderID(M);const pt=i.getRenderTarget(),wt=Q.isInstancedMesh===!0,Ct=Q.isBatchedMesh===!0,St=!!M.map,zt=!!M.matcap,U=!!q,_e=!!M.aoMap,_t=!!M.lightMap,Tt=!!M.bumpMap,ut=!!M.normalMap,Zt=!!M.displacementMap,Dt=!!M.emissiveMap,b=!!M.metalnessMap,x=!!M.roughnessMap,N=M.anisotropy>0,Z=M.clearcoat>0,$=M.iridescence>0,J=M.sheen>0,dt=M.transmission>0,st=N&&!!M.anisotropyMap,ct=Z&&!!M.clearcoatMap,Mt=Z&&!!M.clearcoatNormalMap,Ut=Z&&!!M.clearcoatRoughnessMap,K=$&&!!M.iridescenceMap,Vt=$&&!!M.iridescenceThicknessMap,Bt=J&&!!M.sheenColorMap,bt=J&&!!M.sheenRoughnessMap,gt=!!M.specularMap,ht=!!M.specularColorMap,Pt=!!M.specularIntensityMap,Ht=dt&&!!M.transmissionMap,te=dt&&!!M.thicknessMap,Nt=!!M.gradientMap,nt=!!M.alphaMap,R=M.alphaTest>0,at=!!M.alphaHash,rt=!!M.extensions,yt=!!F.attributes.uv1,xt=!!F.attributes.uv2,qt=!!F.attributes.uv3;let Yt=rn;return M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Yt=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:j,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ct,instancing:wt,instancingColor:wt&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ln,map:St,matcap:zt,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:W,aoMap:_e,lightMap:_t,bumpMap:Tt,normalMap:ut,displacementMap:f&&Zt,emissiveMap:Dt,normalMapObjectSpace:ut&&M.normalMapType===Hl,normalMapTangentSpace:ut&&M.normalMapType===Mo,metalnessMap:b,roughnessMap:x,anisotropy:N,anisotropyMap:st,clearcoat:Z,clearcoatMap:ct,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Ut,iridescence:$,iridescenceMap:K,iridescenceThicknessMap:Vt,sheen:J,sheenColorMap:Bt,sheenRoughnessMap:bt,specularMap:gt,specularColorMap:ht,specularIntensityMap:Pt,transmission:dt,transmissionMap:Ht,thicknessMap:te,gradientMap:Nt,opaque:M.transparent===!1&&M.blending===ni,alphaMap:nt,alphaTest:R,alphaHash:at,combine:M.combine,mapUv:St&&_(M.map.channel),aoMapUv:_e&&_(M.aoMap.channel),lightMapUv:_t&&_(M.lightMap.channel),bumpMapUv:Tt&&_(M.bumpMap.channel),normalMapUv:ut&&_(M.normalMap.channel),displacementMapUv:Zt&&_(M.displacementMap.channel),emissiveMapUv:Dt&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:st&&_(M.anisotropyMap.channel),clearcoatMapUv:ct&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(M.sheenRoughnessMap.channel),specularMapUv:gt&&_(M.specularMap.channel),specularColorMapUv:ht&&_(M.specularColorMap.channel),specularIntensityMapUv:Pt&&_(M.specularIntensityMap.channel),transmissionMapUv:Ht&&_(M.transmissionMap.channel),thicknessMapUv:te&&_(M.thicknessMap.channel),alphaMapUv:nt&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ut||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:yt,vertexUv2s:xt,vertexUv3s:qt,pointsUvs:Q.isPoints===!0&&!!F.attributes.uv&&(St||nt),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&Wt.getTransfer(M.map.colorSpace)===Kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ie,flipSided:M.side===ye,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:rt&&M.extensions.derivatives===!0,extensionFragDepth:rt&&M.extensions.fragDepth===!0,extensionDrawBuffers:rt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)T.push(z),T.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(y(T,M),v(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),T.alphaHash&&s.enable(18),T.batching&&s.enable(19),M.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function E(M){const T=g[M.type];let z;if(T){const G=Ye[T];z=mc.clone(G.uniforms)}else z=M.uniforms;return z}function C(M,T){let z;for(let G=0,Q=c.length;G<Q;G++){const P=c[G];if(P.cacheKey===T){z=P,++z.usedTimes;break}}return z===void 0&&(z=new Pf(i,T,M,r),c.push(z)),z}function w(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:B}}function Nf(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,s){i.get(r)[o]=s}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function kf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zs(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Js(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function o(d,f,m,g,_,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function s(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?a.push(u):e.push(u)}function l(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?a.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||kf),n.length>1&&n.sort(f||Zs),a.length>1&&a.sort(f||Zs)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:s,unshift:l,finish:h,sort:c}}function Ff(){let i=new WeakMap;function t(n,a){const r=i.get(n);let o;return r===void 0?(o=new Js,i.set(n,[o])):a>=r.length?(o=new Js,r.push(o)):o=r[a],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Of(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Bf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zf=0;function Gf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hf(i,t){const e=new Of,n=Bf(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new L);const r=new L,o=new ie,s=new ie;function l(h,d){let f=0,m=0,g=0;for(let G=0;G<9;G++)a.probe[G].set(0,0,0);let _=0,p=0,u=0,y=0,v=0,E=0,C=0,w=0,A=0,B=0,M=0;h.sort(Gf);const T=d===!0?Math.PI:1;for(let G=0,Q=h.length;G<Q;G++){const P=h[G],F=P.color,V=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*V*T,m+=F.g*V*T,g+=F.b*V*T;else if(P.isLightProbe){for(let X=0;X<9;X++)a.probe[X].addScaledVector(P.sh.coefficients[X],V);M++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const Y=P.shadow,tt=n.get(P);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,a.directionalShadow[_]=tt,a.directionalShadowMap[_]=W,a.directionalShadowMatrix[_]=P.shadow.matrix,E++}a.directional[_]=X,_++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(V*T),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,a.spot[u]=X;const Y=P.shadow;if(P.map&&(a.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&B++),a.spotLightMatrix[u]=Y.matrix,P.castShadow){const tt=n.get(P);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,a.spotShadow[u]=tt,a.spotShadowMap[u]=W,w++}u++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(F).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),a.rectArea[y]=X,y++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*T),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Y=P.shadow,tt=n.get(P);tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,tt.shadowCameraNear=Y.camera.near,tt.shadowCameraFar=Y.camera.far,a.pointShadow[p]=tt,a.pointShadowMap[p]=W,a.pointShadowMatrix[p]=P.shadow.matrix,C++}a.point[p]=X,p++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V*T),X.groundColor.copy(P.groundColor).multiplyScalar(V*T),a.hemi[v]=X,v++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=it.LTC_FLOAT_1,a.rectAreaLTC2=it.LTC_FLOAT_2):(a.rectAreaLTC1=it.LTC_HALF_1,a.rectAreaLTC2=it.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=it.LTC_FLOAT_1,a.rectAreaLTC2=it.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=it.LTC_HALF_1,a.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=m,a.ambient[2]=g;const z=a.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==u||z.rectAreaLength!==y||z.hemiLength!==v||z.numDirectionalShadows!==E||z.numPointShadows!==C||z.numSpotShadows!==w||z.numSpotMaps!==A||z.numLightProbes!==M)&&(a.directional.length=_,a.spot.length=u,a.rectArea.length=y,a.point.length=p,a.hemi.length=v,a.directionalShadow.length=E,a.directionalShadowMap.length=E,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=E,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=w+A-B,a.spotLightMap.length=A,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=M,z.directionalLength=_,z.pointLength=p,z.spotLength=u,z.rectAreaLength=y,z.hemiLength=v,z.numDirectionalShadows=E,z.numPointShadows=C,z.numSpotShadows=w,z.numSpotMaps=A,z.numLightProbes=M,a.version=zf++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const E=h[y];if(E.isDirectionalLight){const C=a.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),f++}else if(E.isSpotLight){const C=a.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),g++}else if(E.isRectAreaLight){const C=a.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),s.identity(),o.copy(E.matrixWorld),o.premultiply(u),s.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),_++}else if(E.isPointLight){const C=a.point[m];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const C=a.hemi[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:a}}function Qs(i,t){const e=new Hf(i,t),n=[],a=[];function r(){n.length=0,a.length=0}function o(d){n.push(d)}function s(d){a.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:a,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Vf(i,t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let l;return s===void 0?(l=new Qs(i,t),e.set(r,[l])):o>=s.length?(l=new Qs(i,t),s.push(l)):l=s[o],l}function a(){e=new WeakMap}return{get:n,dispose:a}}class Wf extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xf extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jf(i,t,e){let n=new Mr;const a=new Ot,r=new Ot,o=new ue,s=new Wf({depthPacking:Gl}),l=new Xf,c={},h=e.maxTextureSize,d={[Ve]:ye,[ye]:Ve,[Ie]:Ie},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:qf,fragmentShader:Yf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let u=this.type;this.render=function(w,A,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),T=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),G=i.state;G.setBlending(vn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Q=u!==nn&&this.type===nn,P=u===nn&&this.type!==nn;for(let F=0,V=w.length;F<V;F++){const q=w[F],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const X=W.getFrameExtents();if(a.multiply(X),r.copy(W.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/X.x),a.x=r.x*X.x,W.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/X.y),a.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||Q===!0||P===!0){const tt=this.type!==nn?{minFilter:Se,magFilter:Se}:{};W.map!==null&&W.map.dispose(),W.map=new kn(a.x,a.y,tt),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Y=W.getViewportCount();for(let tt=0;tt<Y;tt++){const et=W.getViewport(tt);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),G.viewport(o),W.updateMatrices(q,tt),n=W.getFrustum(),E(A,B,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===nn&&y(W,B),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,T,z)};function y(w,A){const B=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kn(a.x,a.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,B,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,B,m,_,null)}function v(w,A,B,M){let T=null;const z=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)T=z;else if(T=B.isPointLight===!0?l:s,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=T.uuid,Q=A.uuid;let P=c[G];P===void 0&&(P={},c[G]=P);let F=P[Q];F===void 0&&(F=T.clone(),P[Q]=F,A.addEventListener("dispose",C)),T=F}if(T.visible=A.visible,T.wireframe=A.wireframe,M===nn?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=i.properties.get(T);G.light=B}return T}function E(w,A,B,M,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===nn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const Q=t.update(w),P=w.material;if(Array.isArray(P)){const F=Q.groups;for(let V=0,q=F.length;V<q;V++){const W=F[V],X=P[W.materialIndex];if(X&&X.visible){const Y=v(w,X,M,T);w.onBeforeShadow(i,w,A,B,Q,Y,W),i.renderBufferDirect(B,null,Q,Y,w,W),w.onAfterShadow(i,w,A,B,Q,Y,W)}}}else if(P.visible){const F=v(w,P,M,T);w.onBeforeShadow(i,w,A,B,Q,F,null),i.renderBufferDirect(B,null,Q,F,w,null),w.onAfterShadow(i,w,A,B,Q,F,null)}}const G=w.children;for(let Q=0,P=G.length;Q<P;Q++)E(G[Q],A,B,M,T)}function C(w){w.target.removeEventListener("dispose",C);for(const B in c){const M=c[B],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Kf(i,t,e){const n=e.isWebGL2;function a(){let R=!1;const at=new ue;let rt=null;const yt=new ue(0,0,0,0);return{setMask:function(xt){rt!==xt&&!R&&(i.colorMask(xt,xt,xt,xt),rt=xt)},setLocked:function(xt){R=xt},setClear:function(xt,qt,Yt,oe,xe){xe===!0&&(xt*=oe,qt*=oe,Yt*=oe),at.set(xt,qt,Yt,oe),yt.equals(at)===!1&&(i.clearColor(xt,qt,Yt,oe),yt.copy(at))},reset:function(){R=!1,rt=null,yt.set(-1,0,0,0)}}}function r(){let R=!1,at=null,rt=null,yt=null;return{setTest:function(xt){xt?Ct(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(xt){at!==xt&&!R&&(i.depthMask(xt),at=xt)},setFunc:function(xt){if(rt!==xt){switch(xt){case gl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case ea:i.depthFunc(i.LEQUAL);break;case vl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=xt}},setLocked:function(xt){R=xt},setClear:function(xt){yt!==xt&&(i.clearDepth(xt),yt=xt)},reset:function(){R=!1,at=null,rt=null,yt=null}}}function o(){let R=!1,at=null,rt=null,yt=null,xt=null,qt=null,Yt=null,oe=null,xe=null;return{setTest:function(jt){R||(jt?Ct(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(jt){at!==jt&&!R&&(i.stencilMask(jt),at=jt)},setFunc:function(jt,ve,We){(rt!==jt||yt!==ve||xt!==We)&&(i.stencilFunc(jt,ve,We),rt=jt,yt=ve,xt=We)},setOp:function(jt,ve,We){(qt!==jt||Yt!==ve||oe!==We)&&(i.stencilOp(jt,ve,We),qt=jt,Yt=ve,oe=We)},setLocked:function(jt){R=jt},setClear:function(jt){xe!==jt&&(i.clearStencil(jt),xe=jt)},reset:function(){R=!1,at=null,rt=null,yt=null,xt=null,qt=null,Yt=null,oe=null,xe=null}}}const s=new a,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,v=null,E=null,C=null,w=null,A=null,B=null,M=new Gt(0,0,0),T=0,z=!1,G=null,Q=null,P=null,F=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let tt=null,et={};const H=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ot=new ue().fromArray(H),mt=new ue().fromArray(j);function pt(R,at,rt,yt){const xt=new Uint8Array(4),qt=i.createTexture();i.bindTexture(R,qt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<rt;Yt++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(at,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(at+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return qt}const wt={};wt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(wt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ct(i.DEPTH_TEST),l.setFunc(ea),Dt(!1),b(Ir),Ct(i.CULL_FACE),ut(vn);function Ct(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function St(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function zt(R,at){return m[R]!==at?(i.bindFramebuffer(R,at),m[R]=at,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=at),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=at)),!0):!1}function U(R,at){let rt=_,yt=!1;if(R)if(rt=g.get(at),rt===void 0&&(rt=[],g.set(at,rt)),R.isWebGLMultipleRenderTargets){const xt=R.texture;if(rt.length!==xt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,Yt=xt.length;qt<Yt;qt++)rt[qt]=i.COLOR_ATTACHMENT0+qt;rt.length=xt.length,yt=!0}}else rt[0]!==i.COLOR_ATTACHMENT0&&(rt[0]=i.COLOR_ATTACHMENT0,yt=!0);else rt[0]!==i.BACK&&(rt[0]=i.BACK,yt=!0);yt&&(e.isWebGL2?i.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function _e(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const _t={[Pn]:i.FUNC_ADD,[el]:i.FUNC_SUBTRACT,[nl]:i.FUNC_REVERSE_SUBTRACT};if(n)_t[Or]=i.MIN,_t[Br]=i.MAX;else{const R=t.get("EXT_blend_minmax");R!==null&&(_t[Or]=R.MIN_EXT,_t[Br]=R.MAX_EXT)}const Tt={[il]:i.ZERO,[al]:i.ONE,[rl]:i.SRC_COLOR,[er]:i.SRC_ALPHA,[ul]:i.SRC_ALPHA_SATURATE,[cl]:i.DST_COLOR,[ol]:i.DST_ALPHA,[sl]:i.ONE_MINUS_SRC_COLOR,[nr]:i.ONE_MINUS_SRC_ALPHA,[hl]:i.ONE_MINUS_DST_COLOR,[ll]:i.ONE_MINUS_DST_ALPHA,[dl]:i.CONSTANT_COLOR,[fl]:i.ONE_MINUS_CONSTANT_COLOR,[pl]:i.CONSTANT_ALPHA,[ml]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(R,at,rt,yt,xt,qt,Yt,oe,xe,jt){if(R===vn){u===!0&&(St(i.BLEND),u=!1);return}if(u===!1&&(Ct(i.BLEND),u=!0),R!==tl){if(R!==y||jt!==z){if((v!==Pn||w!==Pn)&&(i.blendEquation(i.FUNC_ADD),v=Pn,w=Pn),jt)switch(R){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nr:i.blendFunc(i.ONE,i.ONE);break;case kr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,C=null,A=null,B=null,M.set(0,0,0),T=0,y=R,z=jt}return}xt=xt||at,qt=qt||rt,Yt=Yt||yt,(at!==v||xt!==w)&&(i.blendEquationSeparate(_t[at],_t[xt]),v=at,w=xt),(rt!==E||yt!==C||qt!==A||Yt!==B)&&(i.blendFuncSeparate(Tt[rt],Tt[yt],Tt[qt],Tt[Yt]),E=rt,C=yt,A=qt,B=Yt),(oe.equals(M)===!1||xe!==T)&&(i.blendColor(oe.r,oe.g,oe.b,xe),M.copy(oe),T=xe),y=R,z=!1}function Zt(R,at){R.side===Ie?St(i.CULL_FACE):Ct(i.CULL_FACE);let rt=R.side===ye;at&&(rt=!rt),Dt(rt),R.blending===ni&&R.transparent===!1?ut(vn):ut(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),s.setMask(R.colorWrite);const yt=R.stencilWrite;c.setTest(yt),yt&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),N(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(R){G!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),G=R)}function b(R){R!==Zo?(Ct(i.CULL_FACE),R!==Q&&(R===Ir?i.cullFace(i.BACK):R===Jo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),Q=R}function x(R){R!==P&&(W&&i.lineWidth(R),P=R)}function N(R,at,rt){R?(Ct(i.POLYGON_OFFSET_FILL),(F!==at||V!==rt)&&(i.polygonOffset(at,rt),F=at,V=rt)):St(i.POLYGON_OFFSET_FILL)}function Z(R){R?Ct(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function $(R){R===void 0&&(R=i.TEXTURE0+q-1),tt!==R&&(i.activeTexture(R),tt=R)}function J(R,at,rt){rt===void 0&&(tt===null?rt=i.TEXTURE0+q-1:rt=tt);let yt=et[rt];yt===void 0&&(yt={type:void 0,texture:void 0},et[rt]=yt),(yt.type!==R||yt.texture!==at)&&(tt!==rt&&(i.activeTexture(rt),tt=rt),i.bindTexture(R,at||wt[R]),yt.type=R,yt.texture=at)}function dt(){const R=et[tt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(R){ot.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ot.copy(R))}function Ht(R){mt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),mt.copy(R))}function te(R,at){let rt=d.get(at);rt===void 0&&(rt=new WeakMap,d.set(at,rt));let yt=rt.get(R);yt===void 0&&(yt=i.getUniformBlockIndex(at,R.name),rt.set(R,yt))}function Nt(R,at){const yt=d.get(at).get(R);h.get(at)!==yt&&(i.uniformBlockBinding(at,yt,R.__bindingPointIndex),h.set(at,yt))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},tt=null,et={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,v=null,E=null,C=null,w=null,A=null,B=null,M=new Gt(0,0,0),T=0,z=!1,G=null,Q=null,P=null,F=null,V=null,ot.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ct,disable:St,bindFramebuffer:zt,drawBuffers:U,useProgram:_e,setBlending:ut,setMaterial:Zt,setFlipSided:Dt,setCullFace:b,setLineWidth:x,setPolygonOffset:N,setScissorTest:Z,activeTexture:$,bindTexture:J,unbindTexture:dt,compressedTexImage2D:st,compressedTexImage3D:ct,texImage2D:gt,texImage3D:ht,updateUBOMapping:te,uniformBlockBinding:Nt,texStorage2D:Bt,texStorage3D:bt,texSubImage2D:Mt,texSubImage3D:Ut,compressedTexSubImage2D:K,compressedTexSubImage3D:Vt,scissor:Pt,viewport:Ht,reset:nt}}function $f(i,t,e,n,a,r,o){const s=a.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return m?new OffscreenCanvas(b,x):yi("canvas")}function _(b,x,N,Z){let $=1;if((b.width>Z||b.height>Z)&&($=Z/Math.max(b.width,b.height)),$<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const J=x?lr:Math.floor,dt=J($*b.width),st=J($*b.height);d===void 0&&(d=g(dt,st));const ct=N?g(dt,st):d;return ct.width=dt,ct.height=st,ct.getContext("2d").drawImage(b,0,0,dt,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+dt+"x"+st+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return ms(b.width)&&ms(b.height)}function u(b){return s?!1:b.wrapS!==Ne||b.wrapT!==Ne||b.minFilter!==Se&&b.minFilter!==Pe}function y(b,x){return b.generateMipmaps&&x&&b.minFilter!==Se&&b.minFilter!==Pe}function v(b){i.generateMipmap(b)}function E(b,x,N,Z,$=!1){if(s===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=x;if(x===i.RED&&(N===i.FLOAT&&(J=i.R32F),N===i.HALF_FLOAT&&(J=i.R16F),N===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.R8UI),N===i.UNSIGNED_SHORT&&(J=i.R16UI),N===i.UNSIGNED_INT&&(J=i.R32UI),N===i.BYTE&&(J=i.R8I),N===i.SHORT&&(J=i.R16I),N===i.INT&&(J=i.R32I)),x===i.RG&&(N===i.FLOAT&&(J=i.RG32F),N===i.HALF_FLOAT&&(J=i.RG16F),N===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RGBA){const dt=$?na:Wt.getTransfer(Z);N===i.FLOAT&&(J=i.RGBA32F),N===i.HALF_FLOAT&&(J=i.RGBA16F),N===i.UNSIGNED_BYTE&&(J=dt===Kt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function C(b,x,N){return y(b,N)===!0||b.isFramebufferTexture&&b.minFilter!==Se&&b.minFilter!==Pe?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){return b===Se||b===zr||b===Sa?i.NEAREST:i.LINEAR}function A(b){const x=b.target;x.removeEventListener("dispose",A),M(x),x.isVideoTexture&&h.delete(x)}function B(b){const x=b.target;x.removeEventListener("dispose",B),z(x)}function M(b){const x=n.get(b);if(x.__webglInit===void 0)return;const N=b.source,Z=f.get(N);if(Z){const $=Z[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(b),Object.keys(Z).length===0&&f.delete(N)}n.remove(b)}function T(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const N=b.source,Z=f.get(N);delete Z[x.__cacheKey],o.memory.textures--}function z(b){const x=b.texture,N=n.get(b),Z=n.get(x);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(N.__webglFramebuffer[$]))for(let J=0;J<N.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(N.__webglFramebuffer[$][J]);else i.deleteFramebuffer(N.__webglFramebuffer[$]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[$])}else{if(Array.isArray(N.__webglFramebuffer))for(let $=0;$<N.__webglFramebuffer.length;$++)i.deleteFramebuffer(N.__webglFramebuffer[$]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let $=0;$<N.__webglColorRenderbuffer.length;$++)N.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[$]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let $=0,J=x.length;$<J;$++){const dt=n.get(x[$]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(x[$])}n.remove(x),n.remove(b)}let G=0;function Q(){G=0}function P(){const b=G;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),G+=1,b}function F(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function V(b,x){const N=n.get(b);if(b.isVideoTexture&&Zt(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(N,b,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function q(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){ot(N,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function W(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){ot(N,b,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function X(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){mt(N,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const Y={[qe]:i.REPEAT,[Ne]:i.CLAMP_TO_EDGE,[rr]:i.MIRRORED_REPEAT},tt={[Se]:i.NEAREST,[zr]:i.NEAREST_MIPMAP_NEAREST,[Sa]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[Ll]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},et={[Vl]:i.NEVER,[Kl]:i.ALWAYS,[Wl]:i.LESS,[So]:i.LEQUAL,[Xl]:i.EQUAL,[jl]:i.GEQUAL,[ql]:i.GREATER,[Yl]:i.NOTEQUAL};function H(b,x,N){if(N?(i.texParameteri(b,i.TEXTURE_WRAP_S,Y[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Y[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Y[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,tt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,tt[x.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ne||x.wrapT!==Ne)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,w(x.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Se&&x.minFilter!==Pe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Se||x.minFilter!==Sa&&x.minFilter!==oi||x.type===xn&&t.has("OES_texture_float_linear")===!1||s===!1&&x.type===Si&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function j(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));const Z=x.source;let $=f.get(Z);$===void 0&&($={},f.set(Z,$));const J=F(x);if(J!==b.__cacheKey){$[J]===void 0&&($[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[J].usedTimes++;const dt=$[b.__cacheKey];dt!==void 0&&($[b.__cacheKey].usedTimes--,dt.usedTimes===0&&T(x)),b.__cacheKey=J,b.__webglTexture=$[J].texture}return N}function ot(b,x,N){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const $=j(b,x),J=x.source;e.bindTexture(Z,b.__webglTexture,i.TEXTURE0+N);const dt=n.get(J);if(J.version!==dt.__version||$===!0){e.activeTexture(i.TEXTURE0+N);const st=Wt.getPrimaries(Wt.workingColorSpace),ct=x.colorSpace===ke?null:Wt.getPrimaries(x.colorSpace),Mt=x.colorSpace===ke||st===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Ut=u(x)&&p(x.image)===!1;let K=_(x.image,Ut,!1,a.maxTextureSize);K=Dt(x,K);const Vt=p(K)||s,Bt=r.convert(x.format,x.colorSpace);let bt=r.convert(x.type),gt=E(x.internalFormat,Bt,bt,x.colorSpace,x.isVideoTexture);H(Z,x,Vt);let ht;const Pt=x.mipmaps,Ht=s&&x.isVideoTexture!==!0&&gt!==xo,te=dt.__version===void 0||$===!0,Nt=C(x,K,Vt);if(x.isDepthTexture)gt=i.DEPTH_COMPONENT,s?x.type===xn?gt=i.DEPTH_COMPONENT32F:x.type===_n?gt=i.DEPTH_COMPONENT24:x.type===Un?gt=i.DEPTH24_STENCIL8:gt=i.DEPTH_COMPONENT16:x.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===In&&gt===i.DEPTH_COMPONENT&&x.type!==gr&&x.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=_n,bt=r.convert(x.type)),x.format===li&&gt===i.DEPTH_COMPONENT&&(gt=i.DEPTH_STENCIL,x.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Un,bt=r.convert(x.type))),te&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,gt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,gt,K.width,K.height,0,Bt,bt,null));else if(x.isDataTexture)if(Pt.length>0&&Vt){Ht&&te&&e.texStorage2D(i.TEXTURE_2D,Nt,gt,Pt[0].width,Pt[0].height);for(let nt=0,R=Pt.length;nt<R;nt++)ht=Pt[nt],Ht?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ht.width,ht.height,Bt,bt,ht.data):e.texImage2D(i.TEXTURE_2D,nt,gt,ht.width,ht.height,0,Bt,bt,ht.data);x.generateMipmaps=!1}else Ht?(te&&e.texStorage2D(i.TEXTURE_2D,Nt,gt,K.width,K.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,Bt,bt,K.data)):e.texImage2D(i.TEXTURE_2D,0,gt,K.width,K.height,0,Bt,bt,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,gt,Pt[0].width,Pt[0].height,K.depth);for(let nt=0,R=Pt.length;nt<R;nt++)ht=Pt[nt],x.format!==Ge?Bt!==null?Ht?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,K.depth,Bt,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,gt,ht.width,ht.height,K.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,K.depth,Bt,bt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,gt,ht.width,ht.height,K.depth,0,Bt,bt,ht.data)}else{Ht&&te&&e.texStorage2D(i.TEXTURE_2D,Nt,gt,Pt[0].width,Pt[0].height);for(let nt=0,R=Pt.length;nt<R;nt++)ht=Pt[nt],x.format!==Ge?Bt!==null?Ht?e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,ht.width,ht.height,Bt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ht.width,ht.height,Bt,bt,ht.data):e.texImage2D(i.TEXTURE_2D,nt,gt,ht.width,ht.height,0,Bt,bt,ht.data)}else if(x.isDataArrayTexture)Ht?(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,gt,K.width,K.height,K.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Bt,bt,K.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,K.width,K.height,K.depth,0,Bt,bt,K.data);else if(x.isData3DTexture)Ht?(te&&e.texStorage3D(i.TEXTURE_3D,Nt,gt,K.width,K.height,K.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Bt,bt,K.data)):e.texImage3D(i.TEXTURE_3D,0,gt,K.width,K.height,K.depth,0,Bt,bt,K.data);else if(x.isFramebufferTexture){if(te)if(Ht)e.texStorage2D(i.TEXTURE_2D,Nt,gt,K.width,K.height);else{let nt=K.width,R=K.height;for(let at=0;at<Nt;at++)e.texImage2D(i.TEXTURE_2D,at,gt,nt,R,0,Bt,bt,null),nt>>=1,R>>=1}}else if(Pt.length>0&&Vt){Ht&&te&&e.texStorage2D(i.TEXTURE_2D,Nt,gt,Pt[0].width,Pt[0].height);for(let nt=0,R=Pt.length;nt<R;nt++)ht=Pt[nt],Ht?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Bt,bt,ht):e.texImage2D(i.TEXTURE_2D,nt,gt,Bt,bt,ht);x.generateMipmaps=!1}else Ht?(te&&e.texStorage2D(i.TEXTURE_2D,Nt,gt,K.width,K.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,bt,K)):e.texImage2D(i.TEXTURE_2D,0,gt,Bt,bt,K);y(x,Vt)&&v(Z),dt.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function mt(b,x,N){if(x.image.length!==6)return;const Z=j(b,x),$=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);const J=n.get($);if($.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const dt=Wt.getPrimaries(Wt.workingColorSpace),st=x.colorSpace===ke?null:Wt.getPrimaries(x.colorSpace),ct=x.colorSpace===ke||dt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ut=x.image[0]&&x.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!Mt&&!Ut?K[nt]=_(x.image[nt],!1,!0,a.maxCubemapSize):K[nt]=Ut?x.image[nt].image:x.image[nt],K[nt]=Dt(x,K[nt]);const Vt=K[0],Bt=p(Vt)||s,bt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),ht=E(x.internalFormat,bt,gt,x.colorSpace),Pt=s&&x.isVideoTexture!==!0,Ht=J.__version===void 0||Z===!0;let te=C(x,Vt,Bt);H(i.TEXTURE_CUBE_MAP,x,Bt);let Nt;if(Mt){Pt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,te,ht,Vt.width,Vt.height);for(let nt=0;nt<6;nt++){Nt=K[nt].mipmaps;for(let R=0;R<Nt.length;R++){const at=Nt[R];x.format!==Ge?bt!==null?Pt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R,0,0,at.width,at.height,bt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R,ht,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R,0,0,at.width,at.height,bt,gt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R,ht,at.width,at.height,0,bt,gt,at.data)}}}else{Nt=x.mipmaps,Pt&&Ht&&(Nt.length>0&&te++,e.texStorage2D(i.TEXTURE_CUBE_MAP,te,ht,K[0].width,K[0].height));for(let nt=0;nt<6;nt++)if(Ut){Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,bt,gt,K[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ht,K[nt].width,K[nt].height,0,bt,gt,K[nt].data);for(let R=0;R<Nt.length;R++){const rt=Nt[R].image[nt].image;Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R+1,0,0,rt.width,rt.height,bt,gt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R+1,ht,rt.width,rt.height,0,bt,gt,rt.data)}}else{Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt,gt,K[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ht,bt,gt,K[nt]);for(let R=0;R<Nt.length;R++){const at=Nt[R];Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R+1,0,0,bt,gt,at.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R+1,ht,bt,gt,at.image[nt])}}}y(x,Bt)&&v(i.TEXTURE_CUBE_MAP),J.__version=$.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function pt(b,x,N,Z,$,J){const dt=r.convert(N.format,N.colorSpace),st=r.convert(N.type),ct=E(N.internalFormat,dt,st,N.colorSpace);if(!n.get(x).__hasExternalTextures){const Ut=Math.max(1,x.width>>J),K=Math.max(1,x.height>>J);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,J,ct,Ut,K,x.depth,0,dt,st,null):e.texImage2D($,J,ct,Ut,K,0,dt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),ut(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,$,n.get(N).__webglTexture,0,Tt(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,$,n.get(N).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(b,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let Z=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||ut(x)){const $=x.depthTexture;$&&$.isDepthTexture&&($.type===xn?Z=i.DEPTH_COMPONENT32F:$.type===_n&&(Z=i.DEPTH_COMPONENT24));const J=Tt(x);ut(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Z,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Z,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const Z=Tt(x);N&&ut(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,x.width,x.height):ut(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const Z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let $=0;$<Z.length;$++){const J=Z[$],dt=r.convert(J.format,J.colorSpace),st=r.convert(J.type),ct=E(J.internalFormat,dt,st,J.colorSpace),Mt=Tt(x);N&&ut(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ct,x.width,x.height):ut(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,ct,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ct,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,$=Tt(x);if(x.depthTexture.format===In)ut(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===li)ut(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function St(b){const x=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ct(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]=i.createRenderbuffer(),wt(x.__webglDepthbuffer[Z],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),wt(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(b,x,N){const Z=n.get(b);x!==void 0&&pt(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&St(b)}function U(b){const x=b.texture,N=n.get(b),Z=n.get(x);b.addEventListener("dispose",B),b.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++);const $=b.isWebGLCubeRenderTarget===!0,J=b.isWebGLMultipleRenderTargets===!0,dt=p(b)||s;if($){N.__webglFramebuffer=[];for(let st=0;st<6;st++)if(s&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[st]=[];for(let ct=0;ct<x.mipmaps.length;ct++)N.__webglFramebuffer[st][ct]=i.createFramebuffer()}else N.__webglFramebuffer[st]=i.createFramebuffer()}else{if(s&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)N.__webglFramebuffer[st]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(J)if(a.drawBuffers){const st=b.texture;for(let ct=0,Mt=st.length;ct<Mt;ct++){const Ut=n.get(st[ct]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&ut(b)===!1){const st=J?x:[x];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ct=0;ct<st.length;ct++){const Mt=st[ct];N.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ct]);const Ut=r.convert(Mt.format,Mt.colorSpace),K=r.convert(Mt.type),Vt=E(Mt.internalFormat,Ut,K,Mt.colorSpace,b.isXRRenderTarget===!0),Bt=Tt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Vt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,N.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),H(i.TEXTURE_CUBE_MAP,x,dt);for(let st=0;st<6;st++)if(s&&x.mipmaps&&x.mipmaps.length>0)for(let ct=0;ct<x.mipmaps.length;ct++)pt(N.__webglFramebuffer[st][ct],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct);else pt(N.__webglFramebuffer[st],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);y(x,dt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const st=b.texture;for(let ct=0,Mt=st.length;ct<Mt;ct++){const Ut=st[ct],K=n.get(Ut);e.bindTexture(i.TEXTURE_2D,K.__webglTexture),H(i.TEXTURE_2D,Ut,dt),pt(N.__webglFramebuffer,b,Ut,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),y(Ut,dt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?st=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,Z.__webglTexture),H(st,x,dt),s&&x.mipmaps&&x.mipmaps.length>0)for(let ct=0;ct<x.mipmaps.length;ct++)pt(N.__webglFramebuffer[ct],b,x,i.COLOR_ATTACHMENT0,st,ct);else pt(N.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,st,0);y(x,dt)&&v(st),e.unbindTexture()}b.depthBuffer&&St(b)}function _e(b){const x=p(b)||s,N=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0,$=N.length;Z<$;Z++){const J=N[Z];if(y(J,x)){const dt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,st=n.get(J).__webglTexture;e.bindTexture(dt,st),v(dt),e.unbindTexture()}}}function _t(b){if(s&&b.samples>0&&ut(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],N=b.width,Z=b.height;let $=i.COLOR_BUFFER_BIT;const J=[],dt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(b),ct=b.isWebGLMultipleRenderTargets===!0;if(ct)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){J.push(i.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&J.push(dt);const Ut=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(Ut===!1&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ct&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[Mt]),Ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[dt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[dt])),ct){const K=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,st.__webglColorRenderbuffer[Mt]);const Ut=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}}function Tt(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const x=n.get(b);return s&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Zt(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Dt(b,x){const N=b.colorSpace,Z=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===sr||N!==ln&&N!==ke&&(Wt.getTransfer(N)===Kt?s===!1?t.has("EXT_sRGB")===!0&&Z===Ge?(b.format=sr,b.minFilter=Pe,b.generateMipmaps=!1):x=Eo.sRGBToLinear(x):(Z!==Ge||$!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=zt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ut}function Zf(i,t,e){const n=e.isWebGL2;function a(r,o=ke){let s;const l=Wt.getTransfer(o);if(r===Mn)return i.UNSIGNED_BYTE;if(r===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===po)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Dl)return i.BYTE;if(r===Ul)return i.SHORT;if(r===gr)return i.UNSIGNED_SHORT;if(r===uo)return i.INT;if(r===_n)return i.UNSIGNED_INT;if(r===xn)return i.FLOAT;if(r===Si)return n?i.HALF_FLOAT:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Il)return i.ALPHA;if(r===Ge)return i.RGBA;if(r===Nl)return i.LUMINANCE;if(r===kl)return i.LUMINANCE_ALPHA;if(r===In)return i.DEPTH_COMPONENT;if(r===li)return i.DEPTH_STENCIL;if(r===sr)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Fl)return i.RED;if(r===mo)return i.RED_INTEGER;if(r===Ol)return i.RG;if(r===go)return i.RG_INTEGER;if(r===_o)return i.RGBA_INTEGER;if(r===ya||r===Ea||r===ba||r===Ta)if(l===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gr||r===Hr||r===Vr||r===Wr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Gr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xo)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xr||r===qr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Xr)return l===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===qr)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yr||r===jr||r===Kr||r===$r||r===Zr||r===Jr||r===Qr||r===ts||r===es||r===ns||r===is||r===as||r===rs||r===ss)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Yr)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jr)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kr)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$r)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zr)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jr)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qr)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ts)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===es)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ns)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===is)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===as)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rs)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ss)return l===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Aa||r===os||r===ls)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Aa)return l===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===os)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ls)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bl||r===cs||r===hs||r===us)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===Aa)return s.COMPRESSED_RED_RGTC1_EXT;if(r===cs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===us)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Un?n?i.UNSIGNED_INT_24_8:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:a}}class Jf extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dn extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}let tp=class extends hi{constructor(t,e){super();const n=this;let a=null,r=1,o=null,s="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,u=null;const y=[],v=[],E=new Ot;let C=null;const w=new Ue;w.layers.enable(1),w.viewport=new ue;const A=new Ue;A.layers.enable(2),A.viewport=new ue;const B=[w,A],M=new Jf;M.layers.enable(1),M.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=y[H];return j===void 0&&(j=new Za,y[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=y[H];return j===void 0&&(j=new Za,y[H]=j),j.getGripSpace()},this.getHand=function(H){let j=y[H];return j===void 0&&(j=new Za,y[H]=j),j.getHandSpace()};function G(H){const j=v.indexOf(H.inputSource);if(j===-1)return;const ot=y[j];ot!==void 0&&(ot.update(H.inputSource,H.frame,c||o),ot.dispatchEvent({type:H.type,data:H.inputSource}))}function Q(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",P);for(let H=0;H<y.length;H++){const j=v[H];j!==null&&(v[H]=null,y[H].disconnect(j))}T=null,z=null,t.setRenderTarget(p),m=null,f=null,d=null,a=null,u=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(p=t.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:a.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(a,e,j),a.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new kn(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ot=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?li:In,ot=_.stencil?Un:_n);const pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=new XRWebGLBinding(a,e),f=d.createProjectionLayer(pt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new kn(f.textureWidth,f.textureHeight,{format:Ge,type:Mn,depthTexture:new Io(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const wt=t.properties.get(u);wt.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(s),et.setContext(a),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function P(H){for(let j=0;j<H.removed.length;j++){const ot=H.removed[j],mt=v.indexOf(ot);mt>=0&&(v[mt]=null,y[mt].disconnect(ot))}for(let j=0;j<H.added.length;j++){const ot=H.added[j];let mt=v.indexOf(ot);if(mt===-1){for(let wt=0;wt<y.length;wt++)if(wt>=v.length){v.push(ot),mt=wt;break}else if(v[wt]===null){v[wt]=ot,mt=wt;break}if(mt===-1)break}const pt=y[mt];pt&&pt.connect(ot)}}const F=new L,V=new L;function q(H,j,ot){F.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(ot.matrixWorld);const mt=F.distanceTo(V),pt=j.projectionMatrix.elements,wt=ot.projectionMatrix.elements,Ct=pt[14]/(pt[10]-1),St=pt[14]/(pt[10]+1),zt=(pt[9]+1)/pt[5],U=(pt[9]-1)/pt[5],_e=(pt[8]-1)/pt[0],_t=(wt[8]+1)/wt[0],Tt=Ct*_e,ut=Ct*_t,Zt=mt/(-_e+_t),Dt=Zt*-_e;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Dt),H.translateZ(Zt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const b=Ct+Zt,x=St+Zt,N=Tt-Dt,Z=ut+(mt-Dt),$=zt*St/x*b,J=U*St/x*b;H.projectionMatrix.makePerspective(N,Z,$,J,b,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;M.near=A.near=w.near=H.near,M.far=A.far=w.far=H.far,(T!==M.near||z!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,z=M.far);const j=H.parent,ot=M.cameras;W(M,j);for(let mt=0;mt<ot.length;mt++)W(ot[mt],j);ot.length===2?q(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),X(H,M,j)};function X(H,j,ot){ot===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(ot.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=or*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let Y=null;function tt(H,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const ot=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let mt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let pt=0;pt<ot.length;pt++){const wt=ot[pt];let Ct=null;if(m!==null)Ct=m.getViewport(wt);else{const zt=d.getViewSubImage(f,wt);Ct=zt.viewport,pt===0&&(t.setRenderTargetTextures(u,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(u))}let St=B[pt];St===void 0&&(St=new Ue,St.layers.enable(pt),St.viewport=new ue,B[pt]=St),St.matrix.fromArray(wt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(wt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),pt===0&&(M.matrix.copy(St.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(St)}}for(let ot=0;ot<y.length;ot++){const mt=v[ot],pt=y[ot];mt!==null&&pt!==void 0&&pt.update(mt,j,c||o)}Y&&Y(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const et=new Do;et.setAnimationLoop(tt),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}};function ep(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Co(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function a(p,u,y,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?l(p,u,y,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===ye&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===ye&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=t.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ye&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const y=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function np(i,t,e,n){let a={},r={},o=[];const s=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=a[y.id];E===void 0&&(g(y),E=h(y),a[y.id]=E,y.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(y,C);const w=t.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){const v=d();y.__bindingPointIndex=v;const E=i.createBuffer(),C=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function d(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=a[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,A=E.length;w<A;w++){const B=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,T=B.length;M<T;M++){const z=B[M];if(m(z,w,M,C)===!0){const G=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let F=0;F<Q.length;F++){const V=Q[F],q=_(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+P,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,E,C){const w=y.value,A=v+"_"+E;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const B=C[A];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return C[A]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function g(y){const v=y.uniforms;let E=0;const C=16;for(let A=0,B=v.length;A<B;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let T=0,z=M.length;T<z;T++){const G=M[T],Q=Array.isArray(G.value)?G.value:[G.value];for(let P=0,F=Q.length;P<F;P++){const V=Q[P],q=_(V),W=E%C;W!==0&&C-W<q.boundary&&(E+=C-W),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=q.storage}}}const w=E%C;return w>0&&(E+=C-w),y.__size=E,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(a[v.id]),delete a[v.id],delete r[v.id]}function u(){for(const y in a)i.deleteBuffer(a[y]);o=[],a={},r={}}return{bind:l,update:c,dispose:u}}class zo{constructor(t={}){const{canvas:e=Zl(),context:n=null,depth:a=!0,stencil:r=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this._useLegacyLights=!1,this.toneMapping=rn,this.toneMappingExposure=1;const v=this;let E=!1,C=0,w=0,A=null,B=-1,M=null;const T=new ue,z=new ue;let G=null;const Q=new Gt(0);let P=0,F=e.width,V=e.height,q=1,W=null,X=null;const Y=new ue(0,0,F,V),tt=new ue(0,0,F,V);let et=!1;const H=new Mr;let j=!1,ot=!1,mt=null;const pt=new ie,wt=new Ot,Ct=new L,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function zt(){return A===null?q:1}let U=n;function _e(S,D){for(let k=0;k<S.length;k++){const O=S[k],I=e.getContext(O,D);if(I!==null)return I}return null}try{const S={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pr}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),U=_e(D,S),U===null)throw _e(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _t,Tt,ut,Zt,Dt,b,x,N,Z,$,J,dt,st,ct,Mt,Ut,K,Vt,Bt,bt,gt,ht,Pt,Ht;function te(){_t=new ud(U),Tt=new rd(U,_t,t),_t.init(Tt),ht=new Zf(U,_t,Tt),ut=new Kf(U,_t,Tt),Zt=new pd(U),Dt=new Nf,b=new $f(U,_t,ut,Dt,Tt,ht,Zt),x=new od(v),N=new hd(v),Z=new yc(U,Tt),Pt=new id(U,_t,Z,Tt),$=new dd(U,Z,Zt,Pt),J=new xd(U,$,Z,Zt),Bt=new _d(U,Tt,b),Ut=new sd(Dt),dt=new If(v,x,N,_t,Tt,Pt,Ut),st=new ep(v,Dt),ct=new Ff,Mt=new Vf(_t,Tt),Vt=new nd(v,x,N,ut,J,f,l),K=new jf(v,J,Tt),Ht=new np(U,Zt,Tt,ut),bt=new ad(U,_t,Zt,Tt),gt=new fd(U,_t,Zt,Tt),Zt.programs=dt.programs,v.capabilities=Tt,v.extensions=_t,v.properties=Dt,v.renderLists=ct,v.shadowMap=K,v.state=ut,v.info=Zt}te();const Nt=new tp(v,U);this.xr=Nt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(F,V,!1))},this.getSize=function(S){return S.set(F,V)},this.setSize=function(S,D,k=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,V=D,e.width=Math.floor(S*q),e.height=Math.floor(D*q),k===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(F*q,V*q).floor()},this.setDrawingBufferSize=function(S,D,k){F=S,V=D,q=k,e.width=Math.floor(S*k),e.height=Math.floor(D*k),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,D,k,O){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,D,k,O),ut.viewport(T.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,D,k,O){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,D,k,O),ut.scissor(z.copy(tt).multiplyScalar(q).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(S){ut.setScissorTest(et=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(S=!0,D=!0,k=!0){let O=0;if(S){let I=!1;if(A!==null){const lt=A.texture.format;I=lt===_o||lt===go||lt===mo}if(I){const lt=A.texture.type,ft=lt===Mn||lt===_n||lt===gr||lt===Un||lt===fo||lt===po,vt=Vt.getClearColor(),Et=Vt.getClearAlpha(),It=vt.r,At=vt.g,Rt=vt.b;ft?(m[0]=It,m[1]=At,m[2]=Rt,m[3]=Et,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=It,g[1]=At,g[2]=Rt,g[3]=Et,U.clearBufferiv(U.COLOR,0,g))}else O|=U.COLOR_BUFFER_BIT}D&&(O|=U.DEPTH_BUFFER_BIT),k&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ct.dispose(),Mt.dispose(),Dt.dispose(),x.dispose(),N.dispose(),J.dispose(),Pt.dispose(),Ht.dispose(),dt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",xe),Nt.removeEventListener("sessionend",jt),mt&&(mt.dispose(),mt=null),ve.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Zt.autoReset,D=K.enabled,k=K.autoUpdate,O=K.needsUpdate,I=K.type;te(),Zt.autoReset=S,K.enabled=D,K.autoUpdate=k,K.needsUpdate=O,K.type=I}function at(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function rt(S){const D=S.target;D.removeEventListener("dispose",rt),yt(D)}function yt(S){xt(S),Dt.remove(S)}function xt(S){const D=Dt.get(S).programs;D!==void 0&&(D.forEach(function(k){dt.releaseProgram(k)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,k,O,I,lt){D===null&&(D=St);const ft=I.isMesh&&I.matrixWorld.determinant()<0,vt=Yo(S,D,k,O,I);ut.setMaterial(O,ft);let Et=k.index,It=1;if(O.wireframe===!0){if(Et=$.getWireframeAttribute(k),Et===void 0)return;It=2}const At=k.drawRange,Rt=k.attributes.position;let ne=At.start*It,we=(At.start+At.count)*It;lt!==null&&(ne=Math.max(ne,lt.start*It),we=Math.min(we,(lt.start+lt.count)*It)),Et!==null?(ne=Math.max(ne,0),we=Math.min(we,Et.count)):Rt!=null&&(ne=Math.max(ne,0),we=Math.min(we,Rt.count));const le=we-ne;if(le<0||le===1/0)return;Pt.setup(I,O,vt,k,Et);let $e,Jt=bt;if(Et!==null&&($e=Z.get(Et),Jt=gt,Jt.setIndex($e)),I.isMesh)O.wireframe===!0?(ut.setLineWidth(O.wireframeLinewidth*zt()),Jt.setMode(U.LINES)):Jt.setMode(U.TRIANGLES);else if(I.isLine){let kt=O.linewidth;kt===void 0&&(kt=1),ut.setLineWidth(kt*zt()),I.isLineSegments?Jt.setMode(U.LINES):I.isLineLoop?Jt.setMode(U.LINE_LOOP):Jt.setMode(U.LINE_STRIP)}else I.isPoints?Jt.setMode(U.POINTS):I.isSprite&&Jt.setMode(U.TRIANGLES);if(I.isBatchedMesh)Jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Jt.renderInstances(ne,le,I.count);else if(k.isInstancedBufferGeometry){const kt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_a=Math.min(k.instanceCount,kt);Jt.renderInstances(ne,le,_a)}else Jt.render(ne,le)};function qt(S,D,k){S.transparent===!0&&S.side===Ie&&S.forceSinglePass===!1?(S.side=ye,S.needsUpdate=!0,Ci(S,D,k),S.side=Ve,S.needsUpdate=!0,Ci(S,D,k),S.side=Ie):Ci(S,D,k)}this.compile=function(S,D,k=null){k===null&&(k=S),p=Mt.get(k),p.init(),y.push(p),k.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),S!==k&&S.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(v._useLegacyLights);const O=new Set;return S.traverse(function(I){const lt=I.material;if(lt)if(Array.isArray(lt))for(let ft=0;ft<lt.length;ft++){const vt=lt[ft];qt(vt,k,I),O.add(vt)}else qt(lt,k,I),O.add(lt)}),y.pop(),p=null,O},this.compileAsync=function(S,D,k=null){const O=this.compile(S,D,k);return new Promise(I=>{function lt(){if(O.forEach(function(ft){Dt.get(ft).currentProgram.isReady()&&O.delete(ft)}),O.size===0){I(S);return}setTimeout(lt,10)}_t.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Yt=null;function oe(S){Yt&&Yt(S)}function xe(){ve.stop()}function jt(){ve.start()}const ve=new Do;ve.setAnimationLoop(oe),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(S){Yt=S,Nt.setAnimationLoop(S),S===null?ve.stop():ve.start()},Nt.addEventListener("sessionstart",xe),Nt.addEventListener("sessionend",jt),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(D),D=Nt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,A),p=Mt.get(S,y.length),p.init(),y.push(p),pt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(pt),ot=this.localClippingEnabled,j=Ut.init(this.clippingPlanes,ot),_=ct.get(S,u.length),_.init(),u.push(_),We(S,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,j===!0&&Ut.beginShadows();const k=p.state.shadowsArray;if(K.render(k,S,D),j===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Vt.render(_,S),p.setupLights(v._useLegacyLights),D.isArrayCamera){const O=D.cameras;for(let I=0,lt=O.length;I<lt;I++){const ft=O[I];Rr(_,S,ft,ft.viewport)}}else Rr(_,S,D);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(v,S,D),Pt.resetDefaultState(),B=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function We(S,D,k,O){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){O&&Ct.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);const ft=J.update(S),vt=S.material;vt.visible&&_.push(S,ft,vt,k,Ct.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const ft=J.update(S),vt=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ct.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ct.copy(ft.boundingSphere.center)),Ct.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(vt)){const Et=ft.groups;for(let It=0,At=Et.length;It<At;It++){const Rt=Et[It],ne=vt[Rt.materialIndex];ne&&ne.visible&&_.push(S,ft,ne,k,Ct.z,Rt)}}else vt.visible&&_.push(S,ft,vt,k,Ct.z,null)}}const lt=S.children;for(let ft=0,vt=lt.length;ft<vt;ft++)We(lt[ft],D,k,O)}function Rr(S,D,k,O){const I=S.opaque,lt=S.transmissive,ft=S.transparent;p.setupLightsView(k),j===!0&&Ut.setGlobalState(v.clippingPlanes,k),lt.length>0&&qo(I,lt,D,k),O&&ut.viewport(T.copy(O)),I.length>0&&Ri(I,D,k),lt.length>0&&Ri(lt,D,k),ft.length>0&&Ri(ft,D,k),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function qo(S,D,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const lt=Tt.isWebGL2;mt===null&&(mt=new kn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Si:Mn,minFilter:oi,samples:lt?4:0})),v.getDrawingBufferSize(wt),lt?mt.setSize(wt.x,wt.y):mt.setSize(lr(wt.x),lr(wt.y));const ft=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor(Q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const vt=v.toneMapping;v.toneMapping=rn,Ri(S,k,O),b.updateMultisampleRenderTarget(mt),b.updateRenderTargetMipmap(mt);let Et=!1;for(let It=0,At=D.length;It<At;It++){const Rt=D[It],ne=Rt.object,we=Rt.geometry,le=Rt.material,$e=Rt.group;if(le.side===Ie&&ne.layers.test(O.layers)){const Jt=le.side;le.side=ye,le.needsUpdate=!0,Cr(ne,k,O,we,le,$e),le.side=Jt,le.needsUpdate=!0,Et=!0}}Et===!0&&(b.updateMultisampleRenderTarget(mt),b.updateRenderTargetMipmap(mt)),v.setRenderTarget(ft),v.setClearColor(Q,P),v.toneMapping=vt}function Ri(S,D,k){const O=D.isScene===!0?D.overrideMaterial:null;for(let I=0,lt=S.length;I<lt;I++){const ft=S[I],vt=ft.object,Et=ft.geometry,It=O===null?ft.material:O,At=ft.group;vt.layers.test(k.layers)&&Cr(vt,D,k,Et,It,At)}}function Cr(S,D,k,O,I,lt){S.onBeforeRender(v,D,k,O,I,lt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(v,D,k,O,S,lt),I.transparent===!0&&I.side===Ie&&I.forceSinglePass===!1?(I.side=ye,I.needsUpdate=!0,v.renderBufferDirect(k,D,O,I,S,lt),I.side=Ve,I.needsUpdate=!0,v.renderBufferDirect(k,D,O,I,S,lt),I.side=Ie):v.renderBufferDirect(k,D,O,I,S,lt),S.onAfterRender(v,D,k,O,I,lt)}function Ci(S,D,k){D.isScene!==!0&&(D=St);const O=Dt.get(S),I=p.state.lights,lt=p.state.shadowsArray,ft=I.state.version,vt=dt.getParameters(S,I.state,lt,D,k),Et=dt.getProgramCacheKey(vt);let It=O.programs;O.environment=S.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||O.environment),It===void 0&&(S.addEventListener("dispose",rt),It=new Map,O.programs=It);let At=It.get(Et);if(At!==void 0){if(O.currentProgram===At&&O.lightsStateVersion===ft)return Lr(S,vt),At}else vt.uniforms=dt.getUniforms(S),S.onBuild(k,vt,v),S.onBeforeCompile(vt,v),At=dt.acquireProgram(vt,Et),It.set(Et,At),O.uniforms=vt.uniforms;const Rt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=Ut.uniform),Lr(S,vt),O.needsLights=Ko(S),O.lightsStateVersion=ft,O.needsLights&&(Rt.ambientLightColor.value=I.state.ambient,Rt.lightProbe.value=I.state.probe,Rt.directionalLights.value=I.state.directional,Rt.directionalLightShadows.value=I.state.directionalShadow,Rt.spotLights.value=I.state.spot,Rt.spotLightShadows.value=I.state.spotShadow,Rt.rectAreaLights.value=I.state.rectArea,Rt.ltc_1.value=I.state.rectAreaLTC1,Rt.ltc_2.value=I.state.rectAreaLTC2,Rt.pointLights.value=I.state.point,Rt.pointLightShadows.value=I.state.pointShadow,Rt.hemisphereLights.value=I.state.hemi,Rt.directionalShadowMap.value=I.state.directionalShadowMap,Rt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Rt.spotShadowMap.value=I.state.spotShadowMap,Rt.spotLightMatrix.value=I.state.spotLightMatrix,Rt.spotLightMap.value=I.state.spotLightMap,Rt.pointShadowMap.value=I.state.pointShadowMap,Rt.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=At,O.uniformsList=null,At}function Pr(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Qi.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Lr(S,D){const k=Dt.get(S);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Yo(S,D,k,O,I){D.isScene!==!0&&(D=St),b.resetTextureUnits();const lt=D.fog,ft=O.isMeshStandardMaterial?D.environment:null,vt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ln,Et=(O.isMeshStandardMaterial?N:x).get(O.envMap||ft),It=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,At=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Rt=!!k.morphAttributes.position,ne=!!k.morphAttributes.normal,we=!!k.morphAttributes.color;let le=rn;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(le=v.toneMapping);const $e=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=$e!==void 0?$e.length:0,kt=Dt.get(O),_a=p.state.lights;if(j===!0&&(ot===!0||S!==M)){const Le=S===M&&O.id===B;Ut.setState(O,S,Le)}let ee=!1;O.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==_a.state.version||kt.outputColorSpace!==vt||I.isBatchedMesh&&kt.batching===!1||!I.isBatchedMesh&&kt.batching===!0||I.isInstancedMesh&&kt.instancing===!1||!I.isInstancedMesh&&kt.instancing===!0||I.isSkinnedMesh&&kt.skinning===!1||!I.isSkinnedMesh&&kt.skinning===!0||I.isInstancedMesh&&kt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&kt.instancingColor===!1&&I.instanceColor!==null||kt.envMap!==Et||O.fog===!0&&kt.fog!==lt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ut.numPlanes||kt.numIntersection!==Ut.numIntersection)||kt.vertexAlphas!==It||kt.vertexTangents!==At||kt.morphTargets!==Rt||kt.morphNormals!==ne||kt.morphColors!==we||kt.toneMapping!==le||Tt.isWebGL2===!0&&kt.morphTargetsCount!==Jt)&&(ee=!0):(ee=!0,kt.__version=O.version);let yn=kt.currentProgram;ee===!0&&(yn=Ci(O,D,I));let Dr=!1,pi=!1,xa=!1;const fe=yn.getUniforms(),En=kt.uniforms;if(ut.useProgram(yn.program)&&(Dr=!0,pi=!0,xa=!0),O.id!==B&&(B=O.id,pi=!0),Dr||M!==S){fe.setValue(U,"projectionMatrix",S.projectionMatrix),fe.setValue(U,"viewMatrix",S.matrixWorldInverse);const Le=fe.map.cameraPosition;Le!==void 0&&Le.setValue(U,Ct.setFromMatrixPosition(S.matrixWorld)),Tt.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&fe.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,pi=!0,xa=!0)}if(I.isSkinnedMesh){fe.setOptional(U,I,"bindMatrix"),fe.setOptional(U,I,"bindMatrixInverse");const Le=I.skeleton;Le&&(Tt.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),fe.setValue(U,"boneTexture",Le.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(fe.setOptional(U,I,"batchingTexture"),fe.setValue(U,"batchingTexture",I._matricesTexture,b));const va=k.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&Tt.isWebGL2===!0)&&Bt.update(I,k,yn),(pi||kt.receiveShadow!==I.receiveShadow)&&(kt.receiveShadow=I.receiveShadow,fe.setValue(U,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(En.envMap.value=Et,En.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),pi&&(fe.setValue(U,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&jo(En,xa),lt&&O.fog===!0&&st.refreshFogUniforms(En,lt),st.refreshMaterialUniforms(En,O,q,V,mt),Qi.upload(U,Pr(kt),En,b)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Qi.upload(U,Pr(kt),En,b),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&fe.setValue(U,"center",I.center),fe.setValue(U,"modelViewMatrix",I.modelViewMatrix),fe.setValue(U,"normalMatrix",I.normalMatrix),fe.setValue(U,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Le=O.uniformsGroups;for(let Ma=0,$o=Le.length;Ma<$o;Ma++)if(Tt.isWebGL2){const Ur=Le[Ma];Ht.update(Ur,yn),Ht.bind(Ur,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function jo(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Ko(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,D,k){Dt.get(S.texture).__webglTexture=D,Dt.get(S.depthTexture).__webglTexture=k;const O=Dt.get(S);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=k===void 0,O.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const k=Dt.get(S);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,k=0){A=S,C=D,w=k;let O=!0,I=null,lt=!1,ft=!1;if(S){const Et=Dt.get(S);Et.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(U.FRAMEBUFFER,null),O=!1):Et.__webglFramebuffer===void 0?b.setupRenderTarget(S):Et.__hasExternalTextures&&b.rebindTextures(S,Dt.get(S.texture).__webglTexture,Dt.get(S.depthTexture).__webglTexture);const It=S.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const At=Dt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[D])?I=At[D][k]:I=At[D],lt=!0):Tt.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?I=Dt.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?I=At[k]:I=At,T.copy(S.viewport),z.copy(S.scissor),G=S.scissorTest}else T.copy(Y).multiplyScalar(q).floor(),z.copy(tt).multiplyScalar(q).floor(),G=et;if(ut.bindFramebuffer(U.FRAMEBUFFER,I)&&Tt.drawBuffers&&O&&ut.drawBuffers(S,I),ut.viewport(T),ut.scissor(z),ut.setScissorTest(G),lt){const Et=Dt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Et.__webglTexture,k)}else if(ft){const Et=Dt.get(S.texture),It=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.__webglTexture,k||0,It)}B=-1},this.readRenderTargetPixels=function(S,D,k,O,I,lt,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Dt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){ut.bindFramebuffer(U.FRAMEBUFFER,vt);try{const Et=S.texture,It=Et.format,At=Et.type;if(It!==Ge&&ht.convert(It)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=At===Si&&(_t.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(At!==Mn&&ht.convert(At)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===xn&&(Tt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-O&&k>=0&&k<=S.height-I&&U.readPixels(D,k,O,I,ht.convert(It),ht.convert(At),lt)}finally{const Et=A!==null?Dt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(S,D,k=0){const O=Math.pow(2,-k),I=Math.floor(D.image.width*O),lt=Math.floor(D.image.height*O);b.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,S.x,S.y,I,lt),ut.unbindTexture()},this.copyTextureToTexture=function(S,D,k,O=0){const I=D.image.width,lt=D.image.height,ft=ht.convert(k.format),vt=ht.convert(k.type);b.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,S.x,S.y,I,lt,ft,vt,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,ft,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,O,S.x,S.y,ft,vt,D.image),O===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(S,D,k,O,I=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const lt=S.max.x-S.min.x+1,ft=S.max.y-S.min.y+1,vt=S.max.z-S.min.z+1,Et=ht.convert(O.format),It=ht.convert(O.type);let At;if(O.isData3DTexture)b.setTexture3D(O,0),At=U.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)b.setTexture2DArray(O,0),At=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Rt=U.getParameter(U.UNPACK_ROW_LENGTH),ne=U.getParameter(U.UNPACK_IMAGE_HEIGHT),we=U.getParameter(U.UNPACK_SKIP_PIXELS),le=U.getParameter(U.UNPACK_SKIP_ROWS),$e=U.getParameter(U.UNPACK_SKIP_IMAGES),Jt=k.isCompressedTexture?k.mipmaps[I]:k.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Jt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?U.texSubImage3D(At,I,D.x,D.y,D.z,lt,ft,vt,Et,It,Jt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(At,I,D.x,D.y,D.z,lt,ft,vt,Et,Jt.data)):U.texSubImage3D(At,I,D.x,D.y,D.z,lt,ft,vt,Et,It,Jt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne),U.pixelStorei(U.UNPACK_SKIP_PIXELS,we),U.pixelStorei(U.UNPACK_SKIP_ROWS,le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$e),I===0&&O.generateMipmaps&&U.generateMipmap(At),ut.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),ut.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,ut.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_r?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===ca?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===he?Nn:vo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Nn?he:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ip extends zo{}ip.prototype.isWebGL1Renderer=!0;class ap extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Go extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const to=new L,eo=new L,no=new ie,Ja=new xr,Ji=new ha;class rp extends de{constructor(t=new Ae,e=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let a=1,r=e.count;a<r;a++)to.fromBufferAttribute(e,a-1),eo.fromBufferAttribute(e,a),n[a]=n[a-1],n[a]+=to.distanceTo(eo);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,a=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(a),Ji.radius+=r,t.ray.intersectsSphere(Ji)===!1)return;no.copy(a).invert(),Ja.copy(t.ray).applyMatrix4(no);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new L,h=new L,d=new L,f=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const u=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=u,E=y-1;v<E;v+=m){const C=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(p,C),h.fromBufferAttribute(p,w),Ja.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(f);B<t.near||B>t.far||e.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=u,E=y-1;v<E;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Ja.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}class sp extends Ee{constructor(t,e,n,a,r,o,s,l,c){super(t,e,n,a,r,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sa extends Ae{constructor(t=1,e=32,n=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:a},e=Math.max(3,e);const r=[],o=[],s=[],l=[],c=new L,h=new Ot;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*a;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),s.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(s,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oa extends Ae{constructor(t=1,e=1,n=1,a=32,r=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:a,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:l};const c=this;a=Math.floor(a),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let u=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(m,2));function y(){const E=new L,C=new L;let w=0;const A=(e-t)/n;for(let B=0;B<=r;B++){const M=[],T=B/r,z=T*(e-t)+t;for(let G=0;G<=a;G++){const Q=G/a,P=Q*l+s,F=Math.sin(P),V=Math.cos(P);C.x=z*F,C.y=-T*n+p,C.z=z*V,d.push(C.x,C.y,C.z),E.set(F,A,V).normalize(),f.push(E.x,E.y,E.z),m.push(Q,1-T),M.push(g++)}_.push(M)}for(let B=0;B<a;B++)for(let M=0;M<r;M++){const T=_[M][B],z=_[M+1][B],G=_[M+1][B+1],Q=_[M][B+1];h.push(T,z,Q),h.push(z,G,Q),w+=6}c.addGroup(u,w,0),u+=w}function v(E){const C=g,w=new Ot,A=new L;let B=0;const M=E===!0?t:e,T=E===!0?1:-1;for(let G=1;G<=a;G++)d.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),g++;const z=g;for(let G=0;G<=a;G++){const P=G/a*l+s,F=Math.cos(P),V=Math.sin(P);A.x=M*V,A.y=p*T,A.z=M*F,d.push(A.x,A.y,A.z),f.push(0,T,0),w.x=F*.5+.5,w.y=V*.5*T+.5,m.push(w.x,w.y),g++}for(let G=0;G<a;G++){const Q=C+G,P=z+G;E===!0?h.push(P,P+1,Q):h.push(P+1,P,Q),B+=3}c.addGroup(u,B,E===!0?1:2),u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fa extends Ae{constructor(t=[],e=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:a};const r=[],o=[];s(a),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function s(y){const v=new L,E=new L,C=new L;for(let w=0;w<e.length;w+=3)m(e[w+0],v),m(e[w+1],E),m(e[w+2],C),l(v,E,C,y)}function l(y,v,E,C){const w=C+1,A=[];for(let B=0;B<=w;B++){A[B]=[];const M=y.clone().lerp(E,B/w),T=v.clone().lerp(E,B/w),z=w-B;for(let G=0;G<=z;G++)G===0&&B===w?A[B][G]=M:A[B][G]=M.clone().lerp(T,G/z)}for(let B=0;B<w;B++)for(let M=0;M<2*(w-B)-1;M++){const T=Math.floor(M/2);M%2===0?(f(A[B][T+1]),f(A[B+1][T]),f(A[B][T])):(f(A[B][T+1]),f(A[B+1][T+1]),f(A[B+1][T]))}}function c(y){const v=new L;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(y),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function h(){const y=new L;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const E=p(y)/2/Math.PI+.5,C=u(y)/Math.PI+.5;o.push(E,1-C)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const v=o[y+0],E=o[y+2],C=o[y+4],w=Math.max(v,E,C),A=Math.min(v,E,C);w>.9&&A<.1&&(v<.2&&(o[y+0]+=1),E<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,v){const E=y*3;v.x=t[E+0],v.y=t[E+1],v.z=t[E+2]}function g(){const y=new L,v=new L,E=new L,C=new L,w=new Ot,A=new Ot,B=new Ot;for(let M=0,T=0;M<r.length;M+=9,T+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),w.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),B.set(o[T+4],o[T+5]),C.copy(y).add(v).add(E).divideScalar(3);const z=p(C);_(w,T+0,y,z),_(A,T+2,v,z),_(B,T+4,E,z)}}function _(y,v,E,C){C<0&&y.x===1&&(o[v]=y.x-1),E.x===0&&E.z===0&&(o[v]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.vertices,t.indices,t.radius,t.details)}}class yr extends fa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,a=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-n,0,-a,n,0,a,-n,0,a,n,-a,-n,0,-a,n,0,a,-n,0,a,n,0,-n,0,-a,n,0,-a,-n,0,a,n,0,a],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yr(t.radius,t.detail)}}class Er extends fa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,a,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Er(t.radius,t.detail)}}class pa extends Ae{constructor(t=.5,e=1,n=32,a=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:a,thetaStart:r,thetaLength:o},n=Math.max(3,n),a=Math.max(1,a);const s=[],l=[],c=[],h=[];let d=t;const f=(e-t)/a,m=new L,g=new Ot;for(let _=0;_<=a;_++){for(let p=0;p<=n;p++){const u=r+p/n*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<a;_++){const p=_*(n+1);for(let u=0;u<n;u++){const y=u+p,v=y,E=y+n+1,C=y+n+2,w=y+1;s.push(v,E,w),s.push(E,C,w)}}this.setIndex(s),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class br extends Ae{constructor(t=1,e=.4,n=12,a=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:a,arc:r},n=Math.floor(n),a=Math.floor(a);const o=[],s=[],l=[],c=[],h=new L,d=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=a;g++){const _=g/a*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),s.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/a),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=a;g++){const _=(a+1)*m+g-1,p=(a+1)*(m-1)+g-1,u=(a+1)*(m-1)+g,y=(a+1)*m+g;o.push(_,p,y),o.push(p,u,y)}this.setIndex(o),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Xe extends ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const io={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class op{constructor(t,e,n){const a=this;let r=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){s++,r===!1&&a.onStart!==void 0&&a.onStart(h,o,s),r=!0},this.itemEnd=function(h){o++,a.onProgress!==void 0&&a.onProgress(h,o,s),o===s&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const lp=new op;class Tr{constructor(t){this.manager=t!==void 0?t:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Tr.DEFAULT_MATERIAL_NAME="__DEFAULT";class cp extends Tr{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=io.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const s=yi("img");function l(){h(),io.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),a&&a(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class ta extends Tr{constructor(t){super(t)}load(t,e,n,a){const r=new Ee,o=new cp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,a),r}}class Ar extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class hp extends Ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qa=new ie,ao=new L,ro=new L;class up{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ao.setFromMatrixPosition(t.matrixWorld),e.position.copy(ao),ro.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ro),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dp extends up{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fp extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new dp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pp extends Ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class mp{constructor(t,e,n=0,a=1/0){this.ray=new xr(t,e),this.near=n,this.far=a,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return hr(t,this,n,e),n.sort(so),n}intersectObjects(t,e=!0,n=[]){for(let a=0,r=t.length;a<r;a++)hr(t[a],this,n,e);return n.sort(so),n}}function so(i,t){return i.distance-t.distance}function hr(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)hr(a[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pr);class gp{constructor(t){this.scene=t,this.terrainMeshes=[],this.animatedObjects=[],this.ripples=[],this.initLighting(),this.initSky(),this.initTerrain(),this.initLandmarks(),this.initStorybookDetails()}initLighting(){const t=new hp(15267064,8107617,.85);t.position.set(0,50,0),this.scene.add(t);const e=new fp(16774634,1.1);e.position.set(25,45,20),e.castShadow=!1,this.scene.add(e);const n=new pp(16777215,.3);this.scene.add(n)}initSky(){const e=new ta().load("assets/sky.png");e.wrapS=qe,e.wrapT=Ne;const n=new oa(90,90,60,32,1,!0),a=new sn({map:e,side:ye,fog:!1}),r=new $t(n,a);r.position.y=20,this.scene.add(r)}initTerrain(){const t=new ta,e=t.load("assets/ground-grass.png");e.wrapS=qe,e.wrapT=qe,e.repeat.set(16,16);const n=new on(120,120);n.rotateX(-Math.PI/2);const a=new Xe({map:e,roughness:.9}),r=new $t(n,a);r.userData={isFloor:!0,name:"Ground_Grass"},this.scene.add(r),this.terrainMeshes.push(r);const o=t.load("assets/ground-plaza.png");o.wrapS=qe,o.wrapT=qe,o.repeat.set(2,2);const s=new sa(8.5,32);s.rotateX(-Math.PI/2);const l=new Xe({map:o,roughness:.8}),c=new $t(s,l);c.position.y=.02,c.userData={isFloor:!0,name:"Ground_Plaza"},this.scene.add(c),this.terrainMeshes.push(c);const h=t.load("assets/ground-path.png");h.wrapS=qe,h.wrapT=qe;const d=(m,g,_,p,u=0)=>{const y=h.clone();y.needsUpdate=!0,y.repeat.set(1,g/3);const v=new on(m,g);v.rotateX(-Math.PI/2);const E=new Xe({map:y,roughness:.85}),C=new $t(v,E);C.position.set(_,.025,p),C.rotation.y=u,C.userData={isFloor:!0,name:"Ground_Path"},this.scene.add(C),this.terrainMeshes.push(C)};d(3.2,18,0,-14),d(3.2,18,14,0,Math.PI/2),d(3.2,18,-14,0,-Math.PI/2);const f=(m,g)=>{const _=new sa(5,24);_.rotateX(-Math.PI/2);const p=new Xe({map:o,roughness:.8}),u=new $t(_,p);u.position.set(m,.026,g),u.userData={isFloor:!0,name:"Ground_StationPlaza"},this.scene.add(u),this.terrainMeshes.push(u)};f(0,-22),f(22,0),f(-22,0)}initLandmarks(){const t=new ta,e=(g,_,p,u,y,v)=>{const E=t.load(g),C=new on(_,p),w=new sn({map:E,transparent:!0,side:Ve}),A=new $t(C,w);return A.position.set(u,y+p/2,v),this.scene.add(A),A};e("assets/landmark-portal.png",7,7,0,0,9),e("assets/landmark-station1.png",7,9,0,0,-27);const n=new di(1.2,1.2,1.2),a=new Xe({color:5155038,roughness:.2}),r=new $t(n,a);r.position.set(0,4.2,-22),this.scene.add(r),this.animatedObjects.push({update:g=>{r.rotation.y=g*1.2,r.rotation.x=Math.sin(g)*.3,r.position.y=4.2+Math.sin(g*2)*.15}});const o=e("assets/landmark-station2.png",7,8,27,0,0);o.rotation.y=-Math.PI/2;const s=new Er(1.1),l=new Xe({color:11765995,roughness:.25}),c=new $t(s,l);c.position.set(22,3.8,0),this.scene.add(c),this.animatedObjects.push({update:g=>{c.rotation.y=-g*1.4,c.position.y=3.8+Math.sin(g*2.2)*.18}});const h=e("assets/landmark-station3.png",7,8,-27,0,0);h.rotation.y=Math.PI/2;const d=new br(1,.22,16,32),f=new Xe({color:16765286,roughness:.3}),m=new $t(d,f);m.position.set(-22,3.9,0),this.scene.add(m),this.animatedObjects.push({update:g=>{m.rotation.z=g*2.5,m.position.y=3.9+Math.sin(g*1.8)*.12}})}initStorybookDetails(){const t=new oa(.3,.45,2.5,8),e=new Xe({color:9263948}),n=new yr(1.8),a=new Xe({color:8107617}),r=new Xe({color:9750899}),o=(l,c,h=1)=>{const d=new Dn;d.position.set(l,0,c),d.scale.set(h,h,h);const f=new $t(t,e);f.position.y=1.25,d.add(f);const m=new $t(n,Math.random()>.5?a:r);m.position.y=3.2,d.add(m),this.scene.add(d)};[[-12,-12],[12,-12],[-14,14],[14,14],[-28,-10],[-28,10],[28,-10],[28,10],[-10,-28],[10,-28],[-18,-25],[18,-25]].forEach(([l,c])=>{o(l,c,.9+Math.random()*.35)})}spawnTapRipple(t,e){const n=new pa(.15,.28,32);n.rotateX(-Math.PI/2);const a=new sn({color:16765286,transparent:!0,opacity:.9,side:Ie}),r=new $t(n,a);r.position.set(t,.04,e),this.scene.add(r),this.ripples.push({mesh:r,mat:a,startTime:performance.now(),duration:650})}update(t){this.animatedObjects.forEach(n=>n.update(t));const e=performance.now();for(let n=this.ripples.length-1;n>=0;n--){const a=this.ripples[n],r=e-a.startTime,o=Math.min(1,r/a.duration);if(o>=1)this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mat.dispose(),this.ripples.splice(n,1);else{const s=.3+o*2.2;a.mesh.scale.set(s,1,s),a.mat.opacity=(1-o)*.9}}}}class _p{constructor(){this.ctx=null,this.muted=!1,this.lastFootstepTime=0}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playClick(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain(),n=this.ctx.currentTime;t.type="sine",t.frequency.setValueAtTime(800,n),t.frequency.exponentialRampToValueAtTime(400,n+.06),e.gain.setValueAtTime(.18,n),e.gain.exponentialRampToValueAtTime(.001,n+.06),t.connect(e),e.connect(this.ctx.destination),t.start(n),t.stop(n+.06)}playFootstep(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;if(t-this.lastFootstepTime<.28)return;this.lastFootstepTime=t;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(45,t+.08),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.08)}playCorrect(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,a)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain(),s=t+a*.08;r.type="sine",r.frequency.setValueAtTime(n,s),o.gain.setValueAtTime(.15,s),o.gain.exponentialRampToValueAtTime(.001,s+.35),r.connect(o),o.connect(this.ctx.destination),r.start(s),r.stop(s+.35)})}playWrong(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(293.66,t),e.frequency.exponentialRampToValueAtTime(233.08,t+.22),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.22)}playFanfare(){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime;[{f:523.25,t:0,d:.15},{f:659.25,t:.15,d:.15},{f:783.99,t:.3,d:.2},{f:1046.5,t:.5,d:.45},{f:880,t:.95,d:.15},{f:1046.5,t:1.1,d:.6}].forEach(n=>{const a=this.ctx.createOscillator(),r=this.ctx.createGain(),o=t+n.t;a.type="triangle",a.frequency.setValueAtTime(n.f,o),r.gain.setValueAtTime(.2,o),r.gain.exponentialRampToValueAtTime(.001,o+n.d),a.connect(r),r.connect(this.ctx.destination),a.start(o),a.stop(o+n.d)})}}const ge=new _p;class xp{constructor(t,e,n,a){this.camera=t,this.scene=e,this.world=n,this.panel=a,this.dolly=new Dn,this.dolly.position.set(0,0,4),this.scene.add(this.dolly),this.camera.position.set(0,1.6,0),this.dolly.add(this.camera),this.isMoving=!1,this.startX=0,this.startZ=0,this.targetX=0,this.targetZ=0,this.moveStartTime=0,this.moveDuration=0,this.locomotionSpeed=3.6,this.lastStepDistance=0}moveToPosition(t,e){this.panel&&this.panel.isOpen&&this.panel.hide(),this.startX=this.dolly.position.x,this.startZ=this.dolly.position.z,this.targetX=t,this.targetZ=e;const n=this.targetX-this.startX,a=this.targetZ-this.startZ,r=Math.hypot(n,a);r<.1||(this.moveStartTime=performance.now(),this.moveDuration=Math.max(250,r/this.locomotionSpeed*1e3),this.isMoving=!0,this.world&&this.world.spawnTapRipple&&this.world.spawnTapRipple(t,e),ge.playFootstep())}update(){if(!this.isMoving)return;const e=performance.now()-this.moveStartTime,n=Math.min(1,e/this.moveDuration),a=n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;this.dolly.position.x=this.startX+(this.targetX-this.startX)*a,this.dolly.position.z=this.startZ+(this.targetZ-this.startZ)*a,ge.playFootstep(),n>=1&&(this.dolly.position.x=this.targetX,this.dolly.position.z=this.targetZ,this.isMoving=!1)}getPosition(){return this.dolly.position}}class vp{constructor(t,e,n){this.scene=t,this.camera=e,this.dolly=n,this.canvasWidth=1024,this.canvasHeight=768,this.width3D=2.4,this.height3D=1.8,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.ctx=this.canvas.getContext("2d"),this.texture=new sp(this.canvas),this.texture.generateMipmaps=!0,this.texture.minFilter=oi,this.texture.magFilter=Pe;const a=new on(this.width3D,this.height3D),r=new sn({map:this.texture,transparent:!0,side:Ve,depthTest:!0});this.mesh=new $t(a,r),this.mesh.visible=!1,this.mesh.userData={isUI:!0,panel:this},this.scene.add(this.mesh),this.isOpen=!1,this.currentData=null,this.buttons=[],this.hoveredButtonId=null,this.bgImage=new Image,this.bgImage.src="assets/panel-paper.png",this.bgImage.onload=()=>{this.isOpen&&this.render()}}show(t){this.currentData=t,this.isOpen=!0,this.mesh.visible=!0,this.updatePosition(),this.render()}hide(){this.isOpen=!1,this.mesh.visible=!1,this.currentData=null,this.buttons=[],this.hoveredButtonId=null}updatePosition(){var f;if(!this.isOpen)return;const t=!!((f=this.camera.userData)!=null&&f.isVR),e=this.camera.fov*Math.PI/180,n=this.camera.aspect||1,a=2*Math.atan(Math.tan(e/2)*n),r=this.height3D/2/(Math.tan(e/2)*.88),o=(m=>m/2/(Math.tan(a/2)*.88))(this.width3D),s=t?2:Math.max(2.1,r,o),l=new L;this.camera.getWorldDirection(l),l.y=0,l.normalize();const c=new L;this.camera.getWorldPosition(c);const h=-14*Math.PI/180,d=c.y+Math.sin(h)*s-.15;this.mesh.position.set(c.x+l.x*s*Math.cos(h),Math.max(.9,d),c.z+l.z*s*Math.cos(h)),this.mesh.lookAt(c.x,this.mesh.position.y,c.z)}render(){const t=this.ctx,e=this.canvasWidth,n=this.canvasHeight;if(this.buttons=[],t.clearRect(0,0,e,n),this.bgImage.complete&&this.bgImage.naturalWidth>0?t.drawImage(this.bgImage,0,0,e,n):(t.fillStyle="#8D5B4C",t.beginPath(),t.roundRect?t.roundRect(10,10,e-20,n-20,24):t.rect(10,10,e-20,n-20),t.fill(),t.fillStyle="#FDFBF7",t.beginPath(),t.roundRect?t.roundRect(24,24,e-48,n-48,18):t.rect(24,24,e-48,n-48),t.fill()),!this.currentData){this.texture.needsUpdate=!0;return}const{type:a,title:r,subtitle:o,content:s,portrait:l,buttons:c,options:h,extra:d}=this.currentData;t.fillStyle="#2B2D42",t.font="bold 34px system-ui, -apple-system, sans-serif",t.textAlign="left",t.textBaseline="middle",t.fillText(r||"Panel Informasi",80,85),o&&(t.fillStyle="#5C677D",t.font="500 20px system-ui, -apple-system, sans-serif",t.fillText(o,80,125)),this.registerButton("close",e-120,55,60,60,"✕","#D96B43",()=>{ge.playClick(),this.hide()});const f=155,m=l?260:80,g=l?e-340:e-160;if(l&&typeof l=="string"){const _=new Image;_.src=l,_.complete&&_.naturalWidth>0?t.drawImage(_,75,f+20,150,150):(t.fillStyle="#4EA8DE",t.beginPath(),t.arc(150,f+95,75,0,Math.PI*2),t.fill())}if(s&&(t.fillStyle="#2B2D42",t.font="normal 26px/1.4 system-ui, -apple-system, sans-serif",this.wrapText(t,s,m,f+45,g,38)),h&&h.length>0){const _=f+140;h.forEach((p,u)=>{const y=_+u*72,v=this.hoveredButtonId===`opt_${p.id}`;this.registerButton(`opt_${p.id}`,m,y,g,58,`${p.id}. ${p.text}`,v?"#FFD166":"#FFFFFF",p.onClick,!0)})}if(d&&(t.fillStyle=d.color||"#2A9D8F",t.font="bold 22px system-ui, -apple-system, sans-serif",t.fillText(d.text,m,f+370)),c&&c.length>0){const _=c.length,p=65,u=20,y=c.reduce((E,C)=>E+(C.width||210),0)+u*(_-1);let v=Math.max(70,(e-y)/2);c.forEach(E=>{const C=E.width||210,w=this.hoveredButtonId===E.id,A=E.color||(w?"#FFD166":"#FFFFFF");this.registerButton(E.id,v,640,C,p,E.text,A,E.onClick),v+=C+u})}this.drawButtons(t),this.texture.needsUpdate=!0}registerButton(t,e,n,a,r,o,s,l,c=!1){this.buttons.push({id:t,x:e,y:n,w:a,h:r,text:o,color:s,onClick:l,leftAlign:c})}drawButtons(t){this.buttons.forEach(e=>{const n=this.hoveredButtonId===e.id,a=e.id==="close";t.save(),t.shadowColor="rgba(0, 0, 0, 0.12)",t.shadowBlur=8,t.shadowOffsetY=n?1:3,t.fillStyle=n?"#FFD166":e.color||"#FFFFFF",a&&(t.fillStyle=n?"#E76F51":"#D96B43"),t.beginPath();const r=a?30:16;if(t.roundRect?t.roundRect(e.x,e.y,e.w,e.h,r):t.rect(e.x,e.y,e.w,e.h),t.fill(),t.restore(),t.strokeStyle=n?"#D9A326":a?"#B85532":"#C8B29B",t.lineWidth=2.5,t.beginPath(),t.roundRect?t.roundRect(e.x,e.y,e.w,e.h,r):t.rect(e.x,e.y,e.w,e.h),t.stroke(),t.fillStyle=a?"#FFFFFF":"#2B2D42",t.font=a?"bold 30px system-ui":e.leftAlign?"500 21px system-ui":"bold 22px system-ui",t.textBaseline="middle",e.leftAlign){t.textAlign="left";let o=e.text;for(;t.measureText(o).width>e.w-30&&o.length>3;)o=o.substring(0,o.length-4)+"...";t.fillText(o,e.x+20,e.y+e.h/2)}else t.textAlign="center",t.fillText(e.text,e.x+e.w/2,e.y+e.h/2)})}wrapText(t,e,n,a,r,o){const s=e.split(`
`);let l=a;s.forEach(c=>{const h=c.split(" ");let d="";for(let f=0;f<h.length;f++){const m=d+h[f]+" ";t.measureText(m).width>r&&f>0?(t.fillText(d.trim(),n,l),d=h[f]+" ",l+=o):d=m}t.fillText(d.trim(),n,l),l+=o*1.2})}handlePointer(t,e=!1){if(!this.isOpen||!t)return this.hoveredButtonId&&(this.hoveredButtonId=null,this.render()),!1;const n=t.x*this.canvasWidth,a=(1-t.y)*this.canvasHeight;let r=null;for(const s of this.buttons)if(n>=s.x&&n<=s.x+s.w&&a>=s.y&&a<=s.y+s.h){r=s;break}if(e&&r)return ge.playClick(),r.onClick&&r.onClick(),!0;const o=r?r.id:null;return o!==this.hoveredButtonId&&(this.hoveredButtonId=o,this.render()),!!r}getPanelLayout(){return{isOpen:this.isOpen,canvasWidth:this.canvasWidth,canvasHeight:this.canvasHeight,buttonCount:this.buttons.length,overflow:!1,position:this.mesh.position.toArray(),visible:this.mesh.visible}}}const ur={npcs:[{id:"radika",name:"Prof. Radika",title:"Pemandu Gerbang Aljabar",station:"Alun-Alun Lembah Kristal",portrait:"assets/portrait-radika.png",sprite:"assets/npc-radika.png",color:"#4EA8DE",topics:[{id:"radika-intro",title:"Selamat Datang di Lembah Kristal",keywords:["halo","siapa","kamu","bantuan","selamat datang","mulai"],pages:["Halo calon teknisi hebat! Saya Prof. Radika, penjaga Lembah Kristal Eksponen. Di sini kamu akan menguasai rahasia kekuatan bilangan berpangkat dan bentuk akar yang menjadi fondasi teknologi modern.","Lembah ini memiliki 3 stasiun utama. Kamu bisa berjalan ke mana saja dengan mengetuk tanah. Setiap stasiun menyimpan kristal misteri yang harus kamu selesaikan lewat penalaran matematika yang logis."]},{id:"radika-definisi-eksponen",title:"Apa Itu Eksponen?",keywords:["definisi","eksponen","pengertian","pangkat","arti pangkat"],pages:["Eksponen atau pangkat adalah bentuk perkalian berulang dari suatu bilangan dengan dirinya sendiri sebanyak n kali. Bentuk umumnya ditulis a^n, di mana a adalah basis dan n adalah pangkat.","Contohnya, 2^4 berarti 2 dikalikan sebanyak 4 kali: 2 x 2 x 2 x 2 = 16. Eksponen membuat penulisan angka raksasa maupun mikroskopis menjadi sangat ringkas dan elegan."]},{id:"radika-pangkat-nol",title:"Mengapa a^0 = 1?",keywords:["pangkat nol","nol","kenapa satu","alasan pangkat nol","bukti nol"],pages:["Banyak yang mengira a^0 = 0, padahal untuk a bukan nol, nilainya selalu 1! Mengapa? Ingat sifat pembagian: a^m / a^m = a^(m - m) = a^0.","Di sisi lain, bilangan dibagi dirinya sendiri bernilai 1. Maka terbukti a^0 = 1! Sungguh konsisten dan masuk akal, bukan?"]},{id:"radika-pangkat-negatif",title:"Pangkat Bulat Negatif",keywords:["pangkat negatif","negatif","kebalikan","seper","pecahan"],pages:["Pangkat negatif bukanlah bilangan bernilai negatif, melainkan menunjukkan posisi pecahan atau kebalikan! Sifat dasarnya adalah a^(-n) = 1 / (a^n).","Contohnya, 2^(-3) sama dengan 1 / (2^3) = 1/8. Dalam teknologi sensor dan mikron, pangkat negatif sangat sering digunakan untuk mengukur ukuran presisi."]},{id:"radika-peta-stasiun",title:"Peta & Rute Penjelajahan",keywords:["peta","jalan","lokasi","rute","stasiun","arah"],pages:["Di sebelah utara ada Menara Pangkat bersama Kiki. Di timur ada Altar Akar bersama Arya. Di barat ada Reaktor Sinyal bersama Maya.","Kamu bebas menjelajah! Selesaikan tantangan di setiap stasiun untuk mengumpulkan Kristal Inti Aljabar."]},{id:"radika-tips-belajar",title:"Kunci Belajar Matematika Vokasi",keywords:["tips","cara belajar","metode","vokasi","kunci sukses"],pages:["Matematika di SMK bukan sekadar menghafal rumus, melainkan memahami pola logis untuk memecahkan masalah rekayasa dan komputasi.","Saat menghadapi soal rumit, jangan panik. Pecah menjadi bentuk basis terkecil dan gunakan sifat eksponen langkah demi langkah."]},{id:"radika-miskonsepsi-dasar",title:"Miskonsepsi Umum Eksponen",keywords:["salah paham","miskonsepsi","jebakan","kesalahan","hati-hati"],pages:["Jebakan paling sering adalah mengalikan basis dengan pangkat, misalnya mengira 2^3 adalah 6. Ingat, 2^3 adalah 2 x 2 x 2 = 8!","Jebakan kedua adalah menjumlahkan pangkat pada basis yang berbeda. 2^3 x 3^2 TIDAK BISA digabung pangkatnya karena basisnya berbeda."]},{id:"radika-filosofi",title:"Filosofi Eksponensial",keywords:["filosofi","makna","hikmah","kehidupan","motivasi"],pages:["Jika kamu meningkatkan kemampuanmu 1% setiap hari (1.01)^365, di akhir tahun kamu berkembang 37 kali lipat! Itulah dahsyatnya efek pertumbuhan eksponensial dalam hidupmu."]}]},{id:"kiki",name:"Kiki",title:"Pemilah Pangkat",station:"Stasiun 1: Menara Sifat Eksponen",portrait:"assets/portrait-kiki.png",sprite:"assets/npc-kiki.png",color:"#FFD166",topics:[{id:"kiki-intro",title:"Halo dari Menara Pangkat",keywords:["halo","siapa","kiki","tugas","menara","stasiun satu"],pages:["Hai! Aku Kiki, si Pemilah Pangkat. Di menara ini kita belajar bagaimana kristal eksponen berinteraksi bila dikalikan, dibagi, atau dipangkatkan lagi.","Semua sifat eksponen berakar pada satu syarat mutlak: basis bilangannya harus sama! Yuk kita bahas satu per satu."]},{id:"kiki-perkalian-basis-sama",title:"Sifat Perkalian (a^m x a^n)",keywords:["perkalian","kali","tambah pangkat","sifat satu","basis sama"],pages:["Bila dua bilangan berpangkat dengan basis yang sama dikalikan, pangkatnya dijumlahkan: a^m x a^n = a^(m+n).","Contoh: 2^3 x 2^4 = (2x2x2) x (2x2x2x2) = 2^(3+4) = 2^7 = 128. Mudah dan cepat tanpa harus mengalikan satu per satu!"]},{id:"kiki-pembagian-basis-sama",title:"Sifat Pembagian (a^m / a^n)",keywords:["pembagian","bagi","kurang pangkat","sifat dua","per"],pages:["Untuk pembagian dengan basis sama, pangkat pembilang dikurangi pangkat penyebut: a^m / a^n = a^(m-n).","Contoh: 3^5 / 3^2 = 3^(5-2) = 3^3 = 27. Faktor-faktor yang sama di atas dan bawah saling membagi habis."]},{id:"kiki-perpangkatan-pangkat",title:"Pangkat Dipangkatkan ((a^m)^n)",keywords:["pangkat bertingkat","pangkat dipangkatkan","kali pangkat","kurung"],pages:["Bila bilangan berpangkat dipangkatkan lagi di luar tanda kurung, kedua pangkatnya dikalikan: (a^m)^n = a^(m x n).","Contoh: (2^3)^2 = 2^(3x2) = 2^6 = 64. Jangan dijumlahkan ya, tetapi dikalikan!"]},{id:"kiki-pangkat-perkalian",title:"Pangkat dari Perkalian ((ab)^n)",keywords:["perkalian dalam kurung","distributif","sifat empat","aljabar"],pages:["Bila perkalian di dalam kurung dipangkatkan, tiap faktor mendapat pangkat tersebut: (a x b)^n = a^n x b^n.","Contoh: (2 x 3)^3 = 2^3 x 3^3 = 8 x 27 = 216. Hasilnya sama persis dengan 6^3 = 216!"]},{id:"kiki-basis-berbeda",title:"Bagaimana Jika Basis Berbeda?",keywords:["basis beda","berbeda","ubah basis","faktorisasi","trik"],pages:["Bila basisnya berbeda, carilah hubungan basis lewat faktorisasi prima! Misal: 4^3 x 2^5. Ubah 4 menjadi 2^2.","Maka (2^2)^3 x 2^5 = 2^6 x 2^5 = 2^(6+5) = 2^11. Mengubah ke basis prima adalah trik sakti para juara aljabar!"]},{id:"kiki-quest-hint",title:"Petunjuk Tantangan Menara",keywords:["petunjuk","tantangan","quest","bantuan","cara menang","soal"],pages:["Di tantanganku, kamu harus menyatukan balok kristal 2^3 dan 2^4 menjadi satu balok utuh. Ingat sifat pertama: 3 + 4 = 7!","Setelah itu sederhanakan pecahan 5^6 / 5^2. Cukup kurangkan 6 - 2 = 4. Balok kristal akan stabil dan kunci terbuka!"]},{id:"kiki-kesalahan-fatal",title:"Kesalahan Penjumlahan Pangkat",keywords:["kesalahan","penjumlahan","tambah basis","jebakan kiki","ingat"],pages:["Ingat baik-baik: a^m + a^n TIDAK SAMA dengan a^(m+n)! Penjumlahan basis sama tidak bisa digabung pangkatnya secara langsung.","Contoh: 2^3 + 2^2 = 8 + 4 = 12. Bukan 2^5 yang bernilai 32. Teliti sebelum menghitung!"]}]},{id:"arya",name:"Arya",title:"Penempa Akar",station:"Stasiun 2: Altar Transformasi Bentuk Akar",portrait:"assets/portrait-arya.png",sprite:"assets/npc-arya.png",color:"#B388EB",topics:[{id:"arya-intro",title:"Salam dari Altar Akar",keywords:["halo","siapa","arya","altar","akar","penempa"],pages:["Selamat datang di Altar Penempaan Akar! Namaku Arya. Di sini kita menempa hubungan magis antara pangkat pecahan dan simbol bentuk akar.","Banyak orang takut melihat tanda akar, padahal akar hanyalah eksponen yang memakai jubah pecahan!"]},{id:"arya-pangkat-pecahan",title:"Jembatan Pangkat Pecahan: a^(m/n)",keywords:["pangkat pecahan","pecahan","jembatan","rumus akar","m per n"],pages:["Rumus emas transformasi aljabar: a^(m/n) = akar pangkat n dari (a^m). Penyebut pecahan (n) menjadi indeks akar di luar!","Sedangkan pembilang pecahan (m) adalah pangkat di dalam akar. Misal: a^(1/2) adalah akar kuadrat dari a."]},{id:"arya-contoh-konversi",title:"Contoh Menghitung 8^(2/3)",keywords:["contoh","hitung","latihan","delapan pangkat","cara hitung"],pages:["Mari hitung 8^(2/3). Indeks akarnya adalah 3 (akar pangkat tiga), pangkat dalamnya adalah 2.","Cara tercepat: cari akar pangkat 3 dari 8 dulu, yaitu 2. Lalu pangkatkan 2: 2^2 = 4! Jadi 8^(2/3) = 4. Sangat bersih dan rapi!"]},{id:"arya-menyederhanakan-akar",title:"Menyederhanakan Bentuk Akar",keywords:["sederhana","menyederhanakan","faktor kuadrat","akar 12","akar 50"],pages:["Untuk menyederhanakan akar, pecahlah bilangan di dalam akar menjadi perkalian faktor yang salah satunya merupakan bilangan kuadrat murni.","Contoh akar(50) = akar(25 x 2) = akar(25) x akar(2) = 5 akar(2). Selalu cari 4, 9, 16, 25, 36, atau 49!"]},{id:"arya-operasi-akar",title:"Penjumlahan & Pengurangan Akar",keywords:["penjumlahan akar","tambah akar","kurang akar","akar sejenis"],pages:["Bentuk akar hanya bisa dijumlahkan atau dikurangkan bila jenis akarnya persis sama! Seperti apel dengan apel.","Contoh: 3 akar(5) + 4 akar(5) = 7 akar(5). Tapi 3 akar(2) + 2 akar(3) TIDAK BISA digabung karena jenis akarnya berbeda."]},{id:"arya-perkalian-akar",title:"Perkalian Dua Bentuk Akar",keywords:["perkalian akar","kali akar","sifat akar","akar kali akar"],pages:["Berbeda dengan penjumlahan, perkalian akar sangat fleksibel! akar(a) x akar(b) = akar(a x b).","Contoh: akar(6) x akar(2) = akar(12). Lalu sederhanakan: akar(4 x 3) = 2 akar(3)!"]},{id:"arya-quest-hint",title:"Petunjuk Tantangan Altar",keywords:["petunjuk","tantangan","quest","bantuan","soal akar"],pages:["Di altarku kamu akan menempa kristal 16^(3/4). Pindahkan tuas indeks akar ke 4, dan pangkat ke 3.","Akar pangkat 4 dari 16 adalah 2. Pangkatkan 3 menjadi 8! Pintu kuil kristal akan terbuka dengan kilauan ungu."]},{id:"arya-beda-rasional-irasional",title:"Bilangan Rasional vs Irasional",keywords:["rasional","irasional","definisi akar","bentuk akar murni"],pages:["Perhatikan: akar(9) = 3 adalah bilangan rasional, jadi BUKAN bentuk akar sejati. Bentuk akar sejati adalah akar irasional seperti akar(2), akar(3), atau akar(7).","Bentuk akar sejati memiliki desimal tak hingga dan tak berulang."]}]},{id:"maya",name:"Maya",title:"Analis Vokasi",station:"Stasiun 3: Reaktor Sinyal & Aplikasi Vokasi",portrait:"assets/portrait-maya.png",sprite:"assets/npc-maya.png",color:"#70C1B3",topics:[{id:"maya-intro",title:"Selamat Datang di Reaktor Sinyal",keywords:["halo","siapa","maya","reaktor","aplikasi","vokasi"],pages:["Hai rekan teknisi! Aku Maya, analis aplikasi vokasi. Di stasiun ini kita melihat bagaimana eksponen dan akar bekerja di industri nyata.","Mulai dari arsitektur memori komputer, sinyal frekuensi, hingga kalkulasi penyusutan mesin dan rasionalisasi data."]},{id:"maya-komputasi-biner",title:"Eksponen dalam Komputasi Biner (2^n)",keywords:["komputer","biner","bit","byte","ram","kapasitas","ti"],pages:["Semua sistem komputer bekerja dengan basis biner: 0 dan 1 (basis 2). Kapasitas RAM dan penyimpanan melonjak secara eksponensial 2^n!","1 byte = 8 bit (2^3). 64 kemungkinan status logika dibentuk oleh 2^6 bit = 64. Setiap penambahan 1 bit menggandakan kapasitas sistem!"]},{id:"maya-merasionalkan-penyebut",title:"Merasionalkan Bentuk: a / akar(b)",keywords:["rasionalisasi","merasionalkan","penyebut","akar di bawah","pecahan akar"],pages:["Dalam standar perhitungan teknik, tanda akar tidak boleh dibiarkan di penyebut bawah karena menyulitkan pembagian manual dan estimasi presisi.","Triknya: kalikan pembilang dan penyebut dengan sekawan akar tersebut! a / akar(b) dikalikan akar(b)/akar(b) = (a akar(b)) / b."]},{id:"maya-contoh-rasionalisasi",title:"Contoh Rasionalisasi: 6 / akar(3)",keywords:["contoh rasional","enam per akar tiga","hitung rasional","sekawan"],pages:["Mari rasionalkan 6 / akar(3). Kalikan atas dan bawah dengan akar(3).","Pembilang menjadi 6 akar(3). Penyebut menjadi akar(3) x akar(3) = 3. Hasilnya 6 akar(3) / 3 = 2 akar(3)! Jauh lebih rapi dan presisi."]},{id:"maya-peluruhan-dan-pertumbuhan",title:"Pertumbuhan & Peluruhan Eksponensial",keywords:["pertumbuhan","peluruhan","bakteri","penyusutan","mesin","rumus"],pages:["Rumus pertumbuhan eksponensial di laboratorium dan bisnis adalah N(t) = N0 x (1 + r)^t. Sedangkan peluruhan penyusutan mesin memakai tanda minus (1 - r)^t.","Karena variabel waktu t berada di pangkat, perubahan nilai berjalan lambat di awal namun melesat tajam seiring bertambahnya waktu."]},{id:"maya-merasionalkan-dua-suku",title:"Merasionalkan Penyebut Bentuk (a + akar(b))",keywords:["dua suku","sekawan dua suku","tambah kurang","selisih kuadrat"],pages:["Jika penyebutnya berbentuk (3 - akar(5)), kalikan dengan sekawannya yaitu (3 + akar(5)).","Gunakan rumus selisih kuadrat: (p - q)(p + q) = p^2 - q^2. Maka (3 - akar(5))(3 + akar(5)) = 9 - 5 = 4! Tanda akar langsung lenyap dari penyebut."]},{id:"maya-quest-hint",title:"Petunjuk Reaktor Kristal",keywords:["petunjuk","quest","bantuan","tantangan maya","reaktor"],pages:["Di tantanganku, kamu harus mengalibrasi bus data transmisi 2^n agar bernilai 64. Pangkat berapa yang menghasilkan 64? Ya, 2^6!","Selanjutnya, rasionalkan transmisi gelombang 6 / akar(3) menjadi 2 akar(3). Reaktor sinyal lembah akan menyala sempurna!"]},{id:"maya-pesan-industri",title:"Kesiapan Siswa SMK di Era AI",keywords:["industri","kerja","rekayasa","era ai","masa depan","smk bisa"],pages:["Algoritma kecerdasan buatan, enkripsi siber, dan grafika 3D yang kamu lihat saat ini dibangun di atas perhitungan eksponen dan akar.","Dengan menguasai fondasi ini, kamu siap menjadi arsitek teknologi, bukan sekadar penonton di era digital!"]}]}],challenges:[{id:"challenge-1",stationId:"kiki",title:"Tantangan 1: Penyelarasan Menara Pangkat",instruction:"Gabungkan dua kristal pangkat basis sama untuk menyeimbangkan jembatan menara.",problem:"Kristal Alpha memancarkan energi 2^3, dan Kristal Beta memancarkan 2^4. Berapakah hasil gabungan 2^3 x 2^4?",options:[{id:"A",text:"2^7 (karena pangkat dijumlahkan: 3 + 4 = 7)",correct:!0},{id:"B",text:"2^12 (karena pangkat dikalikan: 3 x 4 = 12)",correct:!1},{id:"C",text:"4^7 (karena basis dan pangkat dijumlahkan)",correct:!1}],explanation:"Sesuai sifat pertama eksponen: bila dua bilangan berpangkat dengan basis sama dikalikan, pangkatnya dijumlahkan: a^m x a^n = a^(m+n). Jadi 2^3 x 2^4 = 2^(3+4) = 2^7.",teacherDiscussion:"Guru Pembimbing: Ingat definisi dasar eksponen! 2^3 artinya perkalian dua sebanyak 3 kali (2x2x2). 2^4 artinya perkalian dua sebanyak 4 kali (2x2x2x2). Bila digabung, angka dua dikalikan sebanyak 3 + 4 = 7 kali. Jadi hasilnya tepat 2^7!"},{id:"challenge-2",stationId:"arya",title:"Tantangan 2: Penempaan Altar Bentuk Akar",instruction:"Konversikan pangkat pecahan ke bentuk akar untuk membuka segel kuil kristal.",problem:"Ubahlah bilangan berpangkat pecahan 16^(3/4) menjadi bentuk nilai bulat yang paling sederhana!",options:[{id:"A",text:"12 (hasil perkalian 16 x 3/4)",correct:!1},{id:"B",text:"8 (karena akar pangkat 4 dari 16 adalah 2, lalu 2^3 = 8)",correct:!0},{id:"C",text:"64 (karena 16 dipangkatkan 3 lalu dibagi 4)",correct:!1}],explanation:"Berdasarkan sifat a^(m/n) = akar pangkat n dari a^m. 16^(3/4) = (akar pangkat 4 dari 16)^3. Karena 2^4 = 16, maka nilainya adalah 2^3 = 8.",teacherDiscussion:"Guru Pembimbing: Pandang penyebut pecahan sebagai 'akar pencari basis' dan pembilang sebagai 'pangkat pelipat'. Akar pangkat 4 dari 16 adalah bilangan yang jika dikalikan 4 kali menghasilkan 16, yaitu 2 (2x2x2x2 = 16). Setelah dapat 2, pangkatkan dengan pembilang (3): 2^3 = 8!"},{id:"challenge-3",stationId:"maya",title:"Tantangan 3: Kalibrasi Frekuensi & Rasionalisasi Reaktor",instruction:"Selesaikan kalkulasi bus bit komputasi dan rasionalkan sinyal penyebut.",problem:"Rasionalkan penyebut dari transmisi frekuensi gelombang 6 / akar(3)!",options:[{id:"A",text:"2 akar(3) (dikalikan sekawan akar(3)/akar(3))",correct:!0},{id:"B",text:"6 akar(3) (tanpa membagi penyebut)",correct:!1},{id:"C",text:"2 (menghilangkan akar secara langsung)",correct:!1}],explanation:"Kalikan pembilang dan penyebut dengan sekawan akar(3): (6 / akar(3)) x (akar(3) / akar(3)) = 6 akar(3) / 3 = 2 akar(3).",teacherDiscussion:"Guru Pembimbing: Di dunia rekayasa, membagi angka bulat dengan akar irasional (seperti akar(3) ~ 1.732) secara manual sangat tidak efisien. Dengan mengalikan atas dan bawah dengan akar(3), penyebut menjadi 3 (akar(3) x akar(3) = 3). Kemudian 6 dibagi 3 menghasilkan 2, sehingga bentuk akhirnya adalah 2 akar(3)!"}]};class ma{constructor(t,e,n,a,r){this.data=t,this.position=e,this.scene=n,this.panel=a,this.openChallengeCallback=r,this.group=new Dn,this.group.position.copy(e);const o=new ta,s=o.load(t.sprite),l=new on(1.4,2.1),c=new sn({map:s,transparent:!0,side:Ve,depthTest:!0});this.spriteMesh=new $t(l,c),this.spriteMesh.position.y=1.05,this.spriteMesh.userData={isNPC:!0,npc:this},this.group.add(this.spriteMesh);const h=o.load("assets/icon-quest.png"),d=new on(.4,.4),f=new sn({map:h,transparent:!0,side:Ie});this.questMesh=new $t(d,f),this.questMesh.position.y=2.45,this.group.add(this.questMesh);const m=new pa(.7,.82,32);m.rotateX(-Math.PI/2);const g=new sn({color:16765286,transparent:!0,opacity:.5,side:Ie});this.ringMesh=new $t(m,g),this.ringMesh.position.y=.03,this.group.add(this.ringMesh),this.scene.add(this.group),this.currentTopic=null,this.currentPageIndex=0}update(t,e){const n=1+Math.sin(t*2.2)*.022;this.spriteMesh.scale.set(1,n,1),this.questMesh.position.y=2.45+Math.sin(t*3)*.08,this.questMesh.rotation.y=t*1.5,e&&this.spriteMesh.lookAt(e.x,this.spriteMesh.position.y+this.group.position.y,e.z)}interact(){this.openTopicList()}openTopicList(){const t=[];this.data.id!=="radika"&&this.openChallengeCallback&&t.push({id:"btn_challenge",text:"⚡ Buka Tantangan Stasiun",width:320,color:"#FFD166",onClick:()=>{this.openChallengeCallback(this.data.id)}}),t.push({id:"btn_ask",text:"🔍 Tanya Kata Kunci",width:250,color:"#FFFFFF",onClick:()=>{this.promptCustomQuestion()}});const e=this.data.topics.slice(0,4).map((n,a)=>({id:`${a+1}`,text:n.title,onClick:()=>{this.openTopic(n,0)}}));this.panel.show({type:"npc-menu",title:`${this.data.name} — ${this.data.title}`,subtitle:`Lokasi: ${this.data.station} | Pilih topik atau ketik pertanyaan`,portrait:this.data.portrait,content:"Halo! Pilih salah satu topik di bawah ini untuk berdiskusi, atau ketik kata kunci yang ingin kamu pelajari:",options:e,buttons:t})}openTopic(t,e=0){this.currentTopic=t,this.currentPageIndex=e;const n=t.pages||["Materi sedang dipersiapkan."],a=n.length,r=n[e]||n[0],o=[];e>0&&o.push({id:"btn_prev",text:"◀ Sebelumnya",width:190,color:"#FFFFFF",onClick:()=>{this.openTopic(t,e-1)}}),e<a-1?o.push({id:"btn_next",text:"Berikutnya ▶",width:190,color:"#FFD166",onClick:()=>{this.openTopic(t,e+1)}}):o.push({id:"btn_list",text:"☰ Daftar Topik",width:190,color:"#FFFFFF",onClick:()=>{this.openTopicList()}}),this.data.id!=="radika"&&this.openChallengeCallback&&o.push({id:"btn_start_ch",text:"⚡ Uji Pemahaman",width:230,color:"#4EA8DE",onClick:()=>{this.openChallengeCallback(this.data.id)}}),this.panel.show({type:"npc-dialogue",title:t.title,subtitle:`${this.data.name} (Halaman ${e+1} dari ${a})`,portrait:this.data.portrait,content:r,buttons:o})}askQuestion(t){if(!t||typeof t!="string")return null;const e=t.toLowerCase().replace(/[^a-z0-9\s]/g," ").trim(),n=e.split(/\s+/).filter(Boolean);if(n.length===0)return null;const a=new Set(["halo","hai","hello","selamat","pagi","siang","sore","malam","permisi","assalamualaikum"]);let r=null,o=0;for(const s of this.data.topics){let l=0;const c=new Set;for(const h of s.keywords){const d=h.toLowerCase().trim(),f=d.split(/\s+/).filter(Boolean);if(f.length>=2&&e.includes(d)){l+=15;continue}for(const m of n)for(const g of f)g.length<=3?m===g&&!c.has(m)&&(l+=a.has(m)?1:4,c.add(m)):m===g&&!c.has(m)?(l+=a.has(m)?1:5,c.add(m)):!a.has(m)&&(m.includes(g)||g.includes(m))&&(c.has(m)||(l+=2.5,c.add(m)))}l>o&&(o=l,r=s)}return o>=3&&r?{topic:r,score:o}:null}promptCustomQuestion(){const t=window.prompt(`Tanyakan kepada ${this.data.name} (contoh: "eksponen", "akar", "rasional"):`);if(!t)return;const e=this.askQuestion(t);if(e&&e.topic)this.openTopic(e.topic,0);else{const n=this.data.topics.slice(0,3).map((a,r)=>({id:`rec_${r+1}`,text:a.title,onClick:()=>{this.openTopic(a,0)}}));this.panel.show({type:"npc-fallback",title:"Pertanyaan Belum Ditemukan",subtitle:`${this.data.name} — Bantuan Pemahaman`,portrait:this.data.portrait,content:`Maaf, pertanyaan tentang "${t}" belum tersedia di stasiun ini. Silakan pilih rekomendasi materi terdekat di bawah ini:`,options:n,buttons:[{id:"btn_back",text:"◀ Kembali ke Menu",width:240,color:"#FFD166",onClick:()=>this.openTopicList()}]})}}}class Mp{constructor(t,e){this.panel=t,this.onAllCompleted=e,this.completed=new Set,this.wrongAttempts=new Map}openChallenge(t){const e=ur.challenges.find(s=>s.stationId===t);if(!e)return;const n=this.wrongAttempts.get(e.id)||0,a=this.completed.has(e.id),r=e.options.map(s=>({id:s.id,text:s.text,onClick:()=>{this.handleAnswer(e,s)}})),o=[];n>=3&&o.push({id:"btn_teacher",text:"🎓 Diskusi Bersama Guru",width:320,color:"#4EA8DE",onClick:()=>{this.showTeacherDiscussion(e)}}),o.push({id:"btn_back",text:"◀ Kembali ke Lembah",width:250,color:"#FFFFFF",onClick:()=>{this.panel.hide()}}),this.panel.show({type:"challenge",title:e.title,subtitle:a?"Status: ✅ SUDAH TERSELESAIKAN":`Status: Percobaan ${n+1} | Pilih jawaban yang logis`,content:`${e.instruction}

Soal: ${e.problem}`,options:r,buttons:o,extra:n>=3?{text:"💡 Tombol Bimbingan Guru Terbuka! Klik di bawah untuk melihat penjelasan logis.",color:"#E76F51"}:null})}handleAnswer(t,e){if(e.correct){ge.playCorrect(),this.completed.add(t.id),this.wrongAttempts.set(t.id,0);const n=this.completed.size>=ur.challenges.length;n&&(ge.playFanfare(),this.onAllCompleted&&this.onAllCompleted()),this.panel.show({type:"challenge-success",title:"🎉 Jawaban Tepat & Logis!",subtitle:`Tantangan ${t.title} Berhasil`,content:`Luar biasa! Penalaranmu benar.

Penjelasan: ${t.explanation}`,buttons:[{id:"btn_next_action",text:n?"🏆 Lihat Lencana Kelulusan":"🌟 Lanjut Eksplorasi",width:300,color:"#FFD166",onClick:()=>{n?this.showGraduation():this.panel.hide()}}]})}else{ge.playWrong();const n=(this.wrongAttempts.get(t.id)||0)+1;this.wrongAttempts.set(t.id,n),n>=3?this.openChallenge(t.stationId):this.panel.show({type:"challenge-wrong",title:"Perlu Dicermati Kembali",subtitle:`Percobaan Salah (${n}/3) — Jangan Khawatir!`,content:`Jawaban tersebut belum tepat. Ingat kembali sifat eksponen atau hubungan pangkat pecahan dengan akar.

Kamu bisa mencoba lagi atau berdiskusi dengan NPC stasiun.`,buttons:[{id:"btn_retry",text:"🔄 Coba Lagi",width:200,color:"#FFD166",onClick:()=>{this.openChallenge(t.stationId)}},{id:"btn_close",text:"Bicara dengan NPC",width:230,color:"#FFFFFF",onClick:()=>{this.panel.hide()}}]})}}showTeacherDiscussion(t){ge.playClick(),this.panel.show({type:"teacher-discussion",title:"🎓 Bimbingan & Pembahasan Guru",subtitle:`${t.title} — Konsep Dasar & Alasan Logis`,content:t.teacherDiscussion,buttons:[{id:"btn_try_after_guidance",text:"💡 Saya Mengerti, Uji Ulang!",width:320,color:"#FFD166",onClick:()=>{this.openChallenge(t.stationId)}}]})}showGraduation(){this.panel.show({type:"graduation",title:"🏆 Selamat! Kamu Menguasai Eksponen & Akar",subtitle:"Sertifikat Kompetensi Aljabar Digital SMK",content:`Selamat! Kamu telah menuntaskan seluruh tantangan di Lembah Kristal Eksponen:
• Penyelarasan Hukum Pangkat
• Penempaan Pangkat Pecahan & Akar
• Rasionalisasi Penyebut & Transmisi Biner Vokasi

Kamu siap melangkah ke tingkat berikutnya!`,buttons:[{id:"btn_free_roam",text:"🌟 Lanjut Menjelajah Lembah",width:320,color:"#FFD166",onClick:()=>{this.panel.hide()}}]})}}class Ho{constructor(t,e,n,a,r,o){this.renderer=t,this.scene=e,this.camera=n,this.player=a,this.panel=r,this.onVRSelect=o,this.isVR=!1,this.session=null,this.controllers=[],this.controllerRays=[],this.initControllers()}static async isSupported(){if("xr"in navigator&&navigator.xr.isSessionSupported)try{return await navigator.xr.isSessionSupported("immersive-vr")}catch{return!1}return!1}async enterVR(){if(!("xr"in navigator)){alert("WebXR tidak didukung pada browser ini.");return}try{const t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});this.session=t,this.isVR=!0,this.camera.userData.isVR=!0,await this.renderer.xr.setSession(t),t.addEventListener("end",()=>{this.isVR=!1,this.camera.userData.isVR=!1,this.session=null}),ge.playCorrect()}catch(t){console.error("[WebXR] Gagal memulai sesi immersive-vr:",t),alert("Tidak dapat memulai WebXR VR: "+t.message)}}initControllers(){for(let t=0;t<2;t++){const e=this.renderer.xr.getController(t);this.player.dolly.add(e),this.controllers.push(e);const n=new Ae().setFromPoints([new L(0,0,0),new L(0,0,-3.5)]),a=new Go({color:16765286,transparent:!0,opacity:.6}),r=new rp(n,a);e.add(r),this.controllerRays.push(r),e.addEventListener("select",()=>{this.onVRSelect&&this.onVRSelect(e)})}}update(){if(!(!this.isVR||!this.session)){for(const t of this.session.inputSources)if(t.gamepad&&t.gamepad.axes){const e=t.gamepad.axes,n=e.length>=4?e[3]:e[1];if(e.length>=4?e[2]:e[0],n<-.45){const a=new L;this.camera.getWorldDirection(a),a.y=0,a.normalize(),this.player.dolly.position.addScaledVector(a,.06),ge.playFootstep()}}}}}const Vo=new URLSearchParams(window.location.search),Sp=Vo.get("test")==="1",yp=Vo.get("vrlayout")==="1",dr=document.getElementById("canvas-container"),un=new ap,Ep=yp?90:65,Sn=new Ue(Ep,window.innerWidth/window.innerHeight,.1,200),Ke=new zo({antialias:!0,powerPreference:"high-performance"});Ke.setSize(window.innerWidth,window.innerHeight);Ke.setPixelRatio(Math.min(window.devicePixelRatio,2));Ke.outputColorSpace=he;Ke.toneMapping=rn;Ke.xr.enabled=!0;dr.appendChild(Ke.domElement);const wi=new gp(un);let Xt=null;const cn=new xp(Sn,un,wi,null);Xt=new vp(un,Sn,cn.dolly);cn.panel=Xt;const tr=document.getElementById("quest-tracker"),Ei=new Mp(Xt,()=>{tr&&(tr.textContent="🎯 Misi: 3/3 Selesai (Lulus!)",tr.style.background="#FFD166")}),hn=[],ga=new Map(ur.npcs.map(i=>[i.id,i])),bp=new ma(ga.get("radika"),new L(0,0,-2),un,Xt,null);hn.push(bp);const Tp=new ma(ga.get("kiki"),new L(0,0,-22),un,Xt,i=>Ei.openChallenge(i));hn.push(Tp);const Ap=new ma(ga.get("arya"),new L(22,0,0),un,Xt,i=>Ei.openChallenge(i));hn.push(Ap);const wp=new ma(ga.get("maya"),new L(-22,0,0),un,Xt,i=>Ei.openChallenge(i));hn.push(wp);const Wo=new Ho(Ke,un,Sn,cn,Xt,i=>{Cp(i)}),He=new mp,ai=new Ot;function Rp(i,t){if(ai.x=i/window.innerWidth*2-1,ai.y=-(t/window.innerHeight)*2+1,He.setFromCamera(ai,Sn),Xt.isOpen&&Xt.mesh.visible){const r=He.intersectObject(Xt.mesh);if(r.length>0)return{type:"panel",hit:r[0]}}const e=hn.map(r=>r.spriteMesh),n=He.intersectObjects(e);if(n.length>0)return{type:"npc",npc:n[0].object.userData.npc,hit:n[0]};const a=He.intersectObjects(wi.terrainMeshes);return a.length>0?{type:"floor",hit:a[0]}:null}window.addEventListener("pointermove",i=>{if(Xt.isOpen){ai.x=i.clientX/window.innerWidth*2-1,ai.y=-(i.clientY/window.innerHeight)*2+1,He.setFromCamera(ai,Sn);const t=He.intersectObject(Xt.mesh);if(t.length>0&&t[0].uv){Xt.handlePointer(t[0].uv,!1),dr.style.cursor="pointer";return}else Xt.handlePointer(null,!1)}dr.style.cursor="default"});let fr={x:0,y:0};window.addEventListener("pointerdown",i=>{fr={x:i.clientX,y:i.clientY}});window.addEventListener("pointerup",i=>{if(Math.hypot(i.clientX-fr.x,i.clientY-fr.y)>15)return;const e=Rp(i.clientX,i.clientY);if(e){if(e.type==="panel")e.hit.uv&&Xt.handlePointer(e.hit.uv,!0);else if(e.type==="npc")ge.playClick(),e.npc.interact();else if(e.type==="floor"){const n=e.hit.point;cn.moveToPosition(n.x,n.z)}}});function Cp(i){const t=new ie;if(t.identity().extractRotation(i.matrixWorld),He.ray.origin.setFromMatrixPosition(i.matrixWorld),He.ray.direction.set(0,0,-1).applyMatrix4(t),Xt.isOpen&&Xt.mesh.visible){const r=He.intersectObject(Xt.mesh);if(r.length>0&&r[0].uv){Xt.handlePointer(r[0].uv,!0);return}}const e=hn.map(r=>r.spriteMesh),n=He.intersectObjects(e);if(n.length>0){ge.playClick(),n[0].object.userData.npc.interact();return}const a=He.intersectObjects(wi.terrainMeshes);if(a.length>0){const r=a[0].point;cn.moveToPosition(r.x,r.z)}}const Xo=document.getElementById("start-screen"),Pp=document.getElementById("btn-start"),Lp=document.getElementById("btn-enter-vr"),oo=document.getElementById("vr-status"),lo=document.getElementById("btn-audio"),Dp=document.getElementById("btn-help");function wr(){ge.init(),Xo.classList.add("hidden")}Pp.addEventListener("click",wr);Lp.addEventListener("click",async()=>{ge.init(),await Wo.enterVR(),Xo.classList.add("hidden")});Ho.isSupported().then(i=>{oo&&(oo.textContent=i?"✓ Perangkat WebXR VR Siap Digunakan":"ℹ Mode WebXR VR didukung pada Meta Quest, Pico & Cardboard/VR Box")});lo.addEventListener("click",()=>{const i=ge.toggleMute();lo.textContent=i?"🔇 Suara: Mati":"🔊 Suara: Nyala"});Dp.addEventListener("click",()=>{ge.playClick(),Xt.show({type:"help",title:"📖 Panduan Penjelajahan",subtitle:"Lembah Kristal Eksponen (SMK Kelas X)",content:`Cara Bermain:
• Ketuk lantai tanah di mana saja untuk meluncur ke lokasi tersebut.
• Dekati dan ketuk karakter NPC untuk membaca materi dan menjawab kuis.
• Selesaikan 3 tantangan di Menara Pangkat, Altar Akar, dan Reaktor Vokasi untuk mendapatkan Lencana Kelulusan!`,buttons:[{id:"btn_close_help",text:"Mengerti, Tutup",width:240,color:"#FFD166",onClick:()=>Xt.hide()}]})});window.addEventListener("resize",()=>{Sn.aspect=window.innerWidth/window.innerHeight,Sn.updateProjectionMatrix(),Ke.setSize(window.innerWidth,window.innerHeight),Xt.updatePosition()});Ke.setAnimationLoop(i=>{const t=i*.001;wi.update(t),cn.update();const e=cn.getPosition();hn.forEach(n=>n.update(t,e)),Wo.update(),Xt.isOpen&&Xt.updatePosition(),Ke.render(un,Sn)});window.__GAME__={player:cn,panel:Xt,world:wi,npcs:hn,challengeManager:Ei,start:wr,moveTo:(i,t)=>cn.moveToPosition(i,t),interactNPC:i=>{const t=hn.find(e=>e.data.id===i);t&&t.interact()},openChallenge:i=>Ei.openChallenge(i),getPanelLayout:()=>Xt.getPanelLayout()};Sp&&wr();
