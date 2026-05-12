var jl=Object.defineProperty;var Jl=(i,e,t)=>e in i?jl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var D=(i,e,t)=>Jl(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kt="srgb",Ni="srgb-linear",Ks="linear",ft="srgb";const Co="300 es";class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,so=180/Math.PI;function as(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Zl(i,e){return(i%e+e)%e}function dr(i,e,t){return(1-t)*i+t*e}function zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],T=s[1],w=s[4],x=s[7],A=s[2],C=s[5],P=s[8];return r[0]=o*v+a*T+l*A,r[3]=o*m+a*w+l*C,r[6]=o*p+a*x+l*P,r[1]=c*v+h*T+d*A,r[4]=c*m+h*w+d*C,r[7]=c*p+h*x+d*P,r[2]=u*v+f*T+g*A,r[5]=u*m+f*w+g*C,r[8]=u*p+f*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Ge;function al(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ec(){const i=Qs("canvas");return i.style.display="block",i}const Ro={};function Ws(i){i in Ro||(Ro[i]=!0,console.warn(i))}function tc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function nc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ic(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Po=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ko=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sc(){const i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Ks:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:e,whitePoint:n,transfer:Ks,toXYZ:Po,fromXYZ:ko,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Po,fromXYZ:ko,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}const tt=sc();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class rc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=Qs("canvas")),mi.width=e.width,mi.height=e.height;const s=mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oc=0;class uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fr(s[o].image)):r.push(fr(s[o]))}else r=fr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ac=0;class Wt extends Bi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,l=1009,c=Wt.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=as(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=300;Wt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(f+1)/2,A=(p+1)/2,C=(h+u)/4,P=(d+v)/4,F=(g+m)/4;return w>x&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=P/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=F/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=F/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(u-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lc extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new uo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends lc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ll extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cc extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*v,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const A=Math.sqrt(w),C=Math.atan2(A,p*T);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const x=a*T;if(l=l*m+u*x,c=c*m+f*x,h=h*m+g*x,d=d*m+v*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pr.copy(this).projectOnVector(e),this.sub(pr)}reflect(e){return this.sub(pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new R,Lo=new ls;class cs{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),ps.subVectors(this.max,Hi),gi.subVectors(e.a,Hi),_i.subVectors(e.b,Hi),vi.subVectors(e.c,Hi),Bn.subVectors(_i,gi),On.subVectors(vi,_i),jn.subVectors(gi,vi);let t=[0,-Bn.z,Bn.y,0,-On.z,On.y,0,-jn.z,jn.y,Bn.z,0,-Bn.x,On.z,0,-On.x,jn.z,0,-jn.x,-Bn.y,Bn.x,0,-On.y,On.x,0,-jn.y,jn.x,0];return!mr(t,gi,_i,vi,ps)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,gi,_i,vi,ps))?!1:(ms.crossVectors(Bn,On),t=[ms.x,ms.y,ms.z],mr(t,gi,_i,vi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new R,new R,new R,new R,new R,new R,new R,new R],gn=new R,fs=new cs,gi=new R,_i=new R,vi=new R,Bn=new R,On=new R,jn=new R,Hi=new R,ps=new R,ms=new R,Jn=new R;function mr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hc=new cs,Vi=new R,gr=new R;class hs{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(gr)),this.expandByPoint(Vi.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new R,_r=new R,gs=new R,Gn=new R,vr=new R,_s=new R,yr=new R;class fo{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_r.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(_r);const r=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=Gn.dot(this.direction),l=-Gn.dot(gs),c=Gn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_r).addScaledVector(gs,u),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){vr.subVectors(t,e),_s.subVectors(n,e),yr.crossVectors(vr,_s);let o=this.direction.dot(yr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const l=a*this.direction.dot(_s.crossVectors(Gn,_s));if(l<0)return null;const c=a*this.direction.dot(vr.cross(Gn));if(c<0||l+c>o)return null;const h=-a*Gn.dot(yr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,g,v,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,v,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),o=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dc,e,uc)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),zn.crossVectors(n,Zt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),zn.crossVectors(n,Zt)),zn.normalize(),vs.crossVectors(Zt,zn),s[0]=zn.x,s[4]=vs.x,s[8]=Zt.x,s[1]=zn.y,s[5]=vs.y,s[9]=Zt.y,s[2]=zn.z,s[6]=vs.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],T=n[3],w=n[7],x=n[11],A=n[15],C=s[0],P=s[4],F=s[8],b=s[12],S=s[1],L=s[5],V=s[9],O=s[13],Y=s[2],Q=s[6],$=s[10],J=s[14],H=s[3],oe=s[7],fe=s[11],Se=s[15];return r[0]=o*C+a*S+l*Y+c*H,r[4]=o*P+a*L+l*Q+c*oe,r[8]=o*F+a*V+l*$+c*fe,r[12]=o*b+a*O+l*J+c*Se,r[1]=h*C+d*S+u*Y+f*H,r[5]=h*P+d*L+u*Q+f*oe,r[9]=h*F+d*V+u*$+f*fe,r[13]=h*b+d*O+u*J+f*Se,r[2]=g*C+v*S+m*Y+p*H,r[6]=g*P+v*L+m*Q+p*oe,r[10]=g*F+v*V+m*$+p*fe,r[14]=g*b+v*O+m*J+p*Se,r[3]=T*C+w*S+x*Y+A*H,r[7]=T*P+w*L+x*Q+A*oe,r[11]=T*F+w*V+x*$+A*fe,r[15]=T*b+w*O+x*J+A*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+v*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=d*m*c-v*u*c+v*l*f-a*m*f-d*l*p+a*u*p,w=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,x=h*v*c-g*d*c+g*a*f-o*v*f-h*a*p+o*d*p,A=g*d*l-h*v*l-g*a*u+o*v*u+h*a*m-o*d*m,C=t*T+n*w+s*x+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=T*P,e[1]=(v*u*r-d*m*r-v*s*f+n*m*f+d*s*p-n*u*p)*P,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*P,e[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*P,e[4]=w*P,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*P,e[8]=x*P,e[9]=(g*d*r-h*v*r-g*n*f+t*v*f+h*n*p-t*d*p)*P,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*f-t*a*f)*P,e[12]=A*P,e[13]=(h*v*s-g*d*s+g*n*u-t*v*u-h*n*m+t*d*m)*P,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*P,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*u+t*a*u)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,v=o*h,m=o*d,p=a*d,T=l*c,w=l*h,x=l*d,A=n.x,C=n.y,P=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+x)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(u+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+w)*P,s[9]=(m-T)*P,s[10]=(1-(u+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,h=1/o,d=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=2e3){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s);let f,g;if(a===2e3)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===2001)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=2e3){const l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),u=(t+e)*c,f=(n+s)*h;let g,v;if(a===2e3)g=(o+r)*d,v=-2*d;else if(a===2001)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yi=new R,_n=new _t,dc=new R(0,0,0),uc=new R(1,1,1),zn=new R,vs=new R,Zt=new R,Do=new _t,Io=new ls;class Tn{constructor(e=0,t=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fc=0;const No=new R,Mi=new ls,Pn=new _t,ys=new R,Wi=new R,pc=new R,mc=new ls,Fo=new R(1,0,0),Uo=new R(0,1,0),Bo=new R(0,0,1),Oo={type:"added"},gc={type:"removed"},Si={type:"childadded",child:null},Mr={type:"childremoved",child:null};class Ct extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new R,t=new Tn,n=new ls,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ge}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Fo,e)}rotateY(e){return this.rotateOnAxis(Uo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return No.copy(e).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fo,e)}translateY(e){return this.translateOnAxis(Uo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ys.copy(e):ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Wi,ys,this.up):Pn.lookAt(ys,Wi,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oo),Si.child=e,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gc),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oo),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,pc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,mc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new R(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new R,kn=new R,Sr=new R,Ln=new R,xi=new R,bi=new R,Go=new R,xr=new R,br=new R,Er=new R,wr=new pt,Tr=new pt,Ar=new pt;class fn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vn.subVectors(s,t),kn.subVectors(n,t),Sr.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(kn),l=vn.dot(Sr),c=kn.dot(kn),h=kn.dot(Sr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return wr.setScalar(0),Tr.setScalar(0),Ar.setScalar(0),wr.fromBufferAttribute(e,t),Tr.fromBufferAttribute(e,n),Ar.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wr,r.x),o.addScaledVector(Tr,r.y),o.addScaledVector(Ar,r.z),o}static isFrontFacing(e,t,n,s){return vn.subVectors(n,t),kn.subVectors(e,t),vn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),vn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;xi.subVectors(s,n),bi.subVectors(r,n),xr.subVectors(e,n);const l=xi.dot(xr),c=bi.dot(xr);if(l<=0&&c<=0)return t.copy(n);br.subVectors(e,s);const h=xi.dot(br),d=bi.dot(br);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(xi,o);Er.subVectors(e,r);const f=xi.dot(Er),g=bi.dot(Er);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(bi,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Go.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Go,a);const p=1/(m+v+u);return o=v*p,a=u*p,t.copy(n).addScaledVector(xi,o).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Cr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Zl(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cr(o,r,e+1/3),this.g=Cr(o,r,e),this.b=Cr(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return tt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(qe(Bt.r*255,0,255))*65536+Math.round(qe(Bt.g*255,0,255))*256+Math.round(qe(Bt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Kt){tt.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Ms);const n=dr(Hn.h,Ms.h,t),s=dr(Hn.s,Ms.s,t),r=dr(Hn.l,Ms.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Re;Re.NAMES=hl;let _c=0;class fi extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=as(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nt extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new R,Ss=new it;let vc=0;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class dl extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ul extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yc=0;const cn=new _t,Rr=new Ct,Ei=new R,en=new cs,qi=new cs,Lt=new R;class jt extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?ul:dl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(en.min,qi.min),en.expandByPoint(Lt),Lt.addVectors(en.max,qi.max),en.expandByPoint(Lt)):(en.expandByPoint(qi.min),en.expandByPoint(qi.max))}en.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),Lt.add(Ei)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new R,l[F]=new R;const c=new R,h=new R,d=new R,u=new it,f=new it,g=new it,v=new R,m=new R;function p(F,b,S){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[F].add(v),a[b].add(v),a[S].add(v),l[F].add(m),l[b].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,b=T.length;F<b;++F){const S=T[F],L=S.start,V=S.count;for(let O=L,Y=L+V;O<Y;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new R,x=new R,A=new R,C=new R;function P(F){A.fromBufferAttribute(s,F),C.copy(A);const b=a[F];w.copy(b),w.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(C,b);const L=x.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,L)}for(let F=0,b=T.length;F<b;++F){const S=T[F],L=S.start,V=S.count;for(let O=L,Y=L+V;O<Y;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new En(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new _t,Zn=new fo,xs=new hs,Ho=new R,bs=new R,Es=new R,ws=new R,Pr=new R,Ts=new R,Vo=new R,As=new R;class nt extends Ct{constructor(e=new jt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Pr.fromBufferAttribute(d,e),o?Ts.addScaledVector(Pr,h):Ts.addScaledVector(Pr.sub(t),h))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),Zn.copy(e.ray).recast(e.near),!(xs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(xs,Ho)===null||Zn.origin.distanceToSquared(Ho)>(e.far-e.near)**2))&&(zo.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(zo),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,A=w;x<A;x+=3){const C=a.getX(x),P=a.getX(x+1),F=a.getX(x+2);s=Cs(this,p,e,n,c,h,d,C,P,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);s=Cs(this,o,e,n,c,h,d,T,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,A=w;x<A;x+=3){const C=x,P=x+1,F=x+2;s=Cs(this,p,e,n,c,h,d,C,P,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const T=m,w=m+1,x=m+2;s=Cs(this,o,e,n,c,h,d,T,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Mc(i,e,t,n,s,r,o,a){let l;if(e.side===1?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===0,a),l===null)return null;As.copy(a),As.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(As);return c<t.near||c>t.far?null:{distance:c,point:As.clone(),object:i}}function Cs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,bs),i.getVertexPosition(l,Es),i.getVertexPosition(c,ws);const h=Mc(i,e,t,n,bs,Es,ws,Vo);if(h){const d=new R;fn.getBarycoord(Vo,bs,Es,ws,d),s&&(h.uv=fn.getInterpolatedAttribute(s,a,l,c,d,new it)),r&&(h.uv1=fn.getInterpolatedAttribute(r,a,l,c,d,new it)),o&&(h.normal=fn.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};fn.getNormal(bs,Es,ws,u.normal),h.face=u,h.barycoord=d}return h}class Mt extends jt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2));function g(v,m,p,T,w,x,A,C,P,F,b){const S=x/P,L=A/F,V=x/2,O=A/2,Y=C/2,Q=P+1,$=F+1;let J=0,H=0;const oe=new R;for(let fe=0;fe<$;fe++){const Se=fe*L-O;for(let Be=0;Be<Q;Be++){const Ze=Be*S-V;oe[v]=Ze*T,oe[m]=Se*w,oe[p]=Y,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[p]=C>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(Be/P),d.push(1-fe/F),J+=1}}for(let fe=0;fe<F;fe++)for(let Se=0;Se<P;Se++){const Be=u+Se+Q*fe,Ze=u+Se+Q*(fe+1),q=u+(Se+1)+Q*(fe+1),ie=u+(Se+1)+Q*fe;l.push(Be,Ze,ie),l.push(Ze,q,ie),H+=6}a.addGroup(f,H,b),f+=H,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=Fi(i[t]);for(const s in n)e[s]=n[s]}return e}function Sc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const xc={clone:Fi,merge:zt};var bc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ec=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bc,this.fragmentShader=Ec,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Sc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pl extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new R,Wo=new it,qo=new it;class nn extends pl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,Wo,qo),t.subVectors(qo,Wo)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ti=1;class wc extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(wi,Ti,e,t);s.layers=this.layers,this.add(s);const r=new nn(wi,Ti,e,t);r.layers=this.layers,this.add(r);const o=new nn(wi,Ti,e,t);o.layers=this.layers,this.add(o);const a=new nn(wi,Ti,e,t);a.layers=this.layers,this.add(a);const l=new nn(wi,Ti,e,t);l.layers=this.layers,this.add(l);const c=new nn(wi,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ml extends Wt{constructor(e=[],t=301,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tc extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ml(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new nt(s,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new wc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ut extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ac={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ac)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class js{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new js(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cc extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Lr=new R,Rc=new R,Pc=new Ge;class ri{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Lr.subVectors(n,t).cross(Rc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pc.getNormalMatrix(e),s=this.coplanarPoint(Lr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new hs,Rs=new R;class po{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],w=s[14],x=s[15];if(n[0].setComponents(l-r,u-c,m-f,x-p).normalize(),n[1].setComponents(l+r,u+c,m+f,x+p).normalize(),n[2].setComponents(l+o,u+h,m+g,x+T).normalize(),n[3].setComponents(l-o,u-h,m-g,x-T).normalize(),n[4].setComponents(l-a,u-d,m-v,x-w).normalize(),t===2e3)n[5].setComponents(l+a,u+d,m+v,x+w).normalize();else if(t===2001)n[5].setComponents(a,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rs.x=s.normal.x>0?e.max.x:e.min.x,Rs.y=s.normal.y>0?e.max.y:e.min.y,Rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mo extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Js=new R,Zs=new R,Xo=new _t,Xi=new fo,Ps=new hs,Dr=new R,$o=new R;class kc extends Ct{constructor(e=new jt,t=new mo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Js.fromBufferAttribute(t,s-1),Zs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Js.distanceTo(Zs);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=r,e.ray.intersectsSphere(Ps)===!1)return;Xo.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(Xo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),T=h.getX(v+1),w=ks(this,e,Xi,l,p,T,v);w&&t.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=ks(this,e,Xi,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=ks(this,e,Xi,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=ks(this,e,Xi,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ks(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Js.fromBufferAttribute(a,s),Zs.fromBufferAttribute(a,r),t.distanceSqToSegment(Js,Zs,Dr,$o)>n)return;Dr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Dr);if(!(c<e.near||c>e.far))return{distance:c,point:$o.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Yo=new R,Ko=new R;class ro extends kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Yo.fromBufferAttribute(t,s),Ko.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yo.distanceTo(Ko);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gl extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qo=new _t,oo=new fo,Ls=new hs,Ds=new R;class Lc extends Ct{constructor(e=new jt,t=new gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=r,e.ray.intersectsSphere(Ls)===!1)return;Qo.copy(s).invert(),oo.copy(e.ray).applyMatrix4(Qo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const m=c.getX(g);Ds.fromBufferAttribute(d,m),jo(Ds,m,l,s,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)Ds.fromBufferAttribute(d,g),jo(Ds,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jo(i,e,t,n,s,r,o){const a=oo.distanceSqToPoint(i);if(a<t){const l=new R;oo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dc extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _l extends Wt{constructor(e,t,n=1014,s,r,o,a=1003,l=1003,c,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Is=new R,Ns=new R,Ir=new R,Fs=new fn;class Ic extends jt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Vs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=Fs;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Fs.getNormal(Ir),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){const w=(T+1)%3,x=d[T],A=d[w],C=Fs[h[T]],P=Fs[h[w]],F=`${x}_${A}`,b=`${A}_${x}`;b in u&&u[b]?(Ir.dot(u[b].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(P.x,P.y,P.z)),u[b]=null):F in u||(u[F]={index0:c[T],index1:c[w],normal:Ir.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Is.fromBufferAttribute(a,v),Ns.fromBufferAttribute(a,m),f.push(Is.x,Is.y,Is.z),f.push(Ns.x,Ns.y,Ns.z)}this.setAttribute("position",new Rt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ir extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const T=p*u-o;for(let w=0;w<c;w++){const x=w*d-r;g.push(x,-T,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const w=T+c*p,x=T+c*(p+1),A=T+1+c*(p+1),C=T+1+c*p;f.push(w,x,C),f.push(x,A,C)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class is extends jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const T=[],w=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const C=A/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(C+x,1-w),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const w=h[p][T+1],x=h[p][T],A=h[p+1][T],C=h[p+1][T+1];(p!==0||o>0)&&f.push(w,x,C),(p!==n-1||l<Math.PI)&&f.push(x,A,C)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ui extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nc extends Ui{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Fc extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uc extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class go extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Bc extends go{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nr=new _t,Jo=new R,Zo=new R;class vl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jo),Zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zo),t.updateMatrixWorld(),Nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ea=new _t,$i=new R,Fr=new R;class Oc extends vl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),n.position.copy($i),Fr.copy(n.position),Fr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fr),n.updateMatrixWorld(),s.makeTranslation(-$i.x,-$i.y,-$i.z),ea.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea)}}class ta extends go{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yl extends pl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gc extends vl{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zc extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Gc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hc extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Vc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=na(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=na();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function na(){return performance.now()}function ia(i,e,t,n){const s=Wc(n);switch(t){case 1021:return i*e;case 1028:return i*e/s.components*s.byteLength;case 1029:return i*e/s.components*s.byteLength;case 1030:return i*e*2/s.components*s.byteLength;case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case 1023:return i*e*4/s.components*s.byteLength;case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wc(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"176"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="176");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ml(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qc(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$c=`#ifdef USE_ALPHAHASH
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
#endif`,Yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
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
#endif`,Zc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rh=`#ifdef USE_IRIDESCENCE
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
#endif`,oh=`#ifdef USE_BUMPMAP
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
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mh=`#define PI 3.141592653589793
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
} // validated`,gh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_h=`vec3 transformedNormal = objectNormal;
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
#endif`,vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,Ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ph=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dh=`#ifdef USE_GRADIENTMAP
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
}`,Ih=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uh=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Bh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vh=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Wh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,qh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
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
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,td=`#if defined( USE_POINTS_UV )
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
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
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
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zd=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,eu=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iu=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,su=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ru=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,ou=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,au=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,lu=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cu=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,hu=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,du=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,uu=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fu=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,pu=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mu=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,gu=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_u=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,vu=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yu=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Mu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Su=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,xu=`uniform vec3 color;
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
}`,bu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Eu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,He={alphahash_fragment:Xc,alphahash_pars_fragment:$c,alphamap_fragment:Yc,alphamap_pars_fragment:Kc,alphatest_fragment:Qc,alphatest_pars_fragment:jc,aomap_fragment:Jc,aomap_pars_fragment:Zc,batching_pars_vertex:eh,batching_vertex:th,begin_vertex:nh,beginnormal_vertex:ih,bsdfs:sh,iridescence_fragment:rh,bumpmap_pars_fragment:oh,clipping_planes_fragment:ah,clipping_planes_pars_fragment:lh,clipping_planes_pars_vertex:ch,clipping_planes_vertex:hh,color_fragment:dh,color_pars_fragment:uh,color_pars_vertex:fh,color_vertex:ph,common:mh,cube_uv_reflection_fragment:gh,defaultnormal_vertex:_h,displacementmap_pars_vertex:vh,displacementmap_vertex:yh,emissivemap_fragment:Mh,emissivemap_pars_fragment:Sh,colorspace_fragment:xh,colorspace_pars_fragment:bh,envmap_fragment:Eh,envmap_common_pars_fragment:wh,envmap_pars_fragment:Th,envmap_pars_vertex:Ah,envmap_physical_pars_fragment:Bh,envmap_vertex:Ch,fog_vertex:Rh,fog_pars_vertex:Ph,fog_fragment:kh,fog_pars_fragment:Lh,gradientmap_pars_fragment:Dh,lightmap_pars_fragment:Ih,lights_lambert_fragment:Nh,lights_lambert_pars_fragment:Fh,lights_pars_begin:Uh,lights_toon_fragment:Oh,lights_toon_pars_fragment:Gh,lights_phong_fragment:zh,lights_phong_pars_fragment:Hh,lights_physical_fragment:Vh,lights_physical_pars_fragment:Wh,lights_fragment_begin:qh,lights_fragment_maps:Xh,lights_fragment_end:$h,logdepthbuf_fragment:Yh,logdepthbuf_pars_fragment:Kh,logdepthbuf_pars_vertex:Qh,logdepthbuf_vertex:jh,map_fragment:Jh,map_pars_fragment:Zh,map_particle_fragment:ed,map_particle_pars_fragment:td,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphinstance_vertex:sd,morphcolor_vertex:rd,morphnormal_vertex:od,morphtarget_pars_vertex:ad,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:hd,normal_pars_fragment:dd,normal_pars_vertex:ud,normal_vertex:fd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:vd,opaque_fragment:yd,packing:Md,premultiplied_alpha_fragment:Sd,project_vertex:xd,dithering_fragment:bd,dithering_pars_fragment:Ed,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Cd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Pd,skinbase_vertex:kd,skinning_pars_vertex:Ld,skinning_vertex:Dd,skinnormal_vertex:Id,specularmap_fragment:Nd,specularmap_pars_fragment:Fd,tonemapping_fragment:Ud,tonemapping_pars_fragment:Bd,transmission_fragment:Od,transmission_pars_fragment:Gd,uv_pars_fragment:zd,uv_pars_vertex:Hd,uv_vertex:Vd,worldpos_vertex:Wd,background_vert:qd,background_frag:Xd,backgroundCube_vert:$d,backgroundCube_frag:Yd,cube_vert:Kd,cube_frag:Qd,depth_vert:jd,depth_frag:Jd,distanceRGBA_vert:Zd,distanceRGBA_frag:eu,equirect_vert:tu,equirect_frag:nu,linedashed_vert:iu,linedashed_frag:su,meshbasic_vert:ru,meshbasic_frag:ou,meshlambert_vert:au,meshlambert_frag:lu,meshmatcap_vert:cu,meshmatcap_frag:hu,meshnormal_vert:du,meshnormal_frag:uu,meshphong_vert:fu,meshphong_frag:pu,meshphysical_vert:mu,meshphysical_frag:gu,meshtoon_vert:_u,meshtoon_frag:vu,points_vert:yu,points_frag:Mu,shadow_vert:Su,shadow_frag:xu,sprite_vert:bu,sprite_frag:Eu},ae={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},bn={basic:{uniforms:zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:zt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:zt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:zt([ae.points,ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:zt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:zt([ae.common,ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:zt([ae.sprite,ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:zt([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:zt([ae.lights,ae.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};bn.physical={uniforms:zt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Us={r:0,b:0,g:0},ti=new Tn,wu=new _t;function Tu(i,e,t,n,s,r,o){const a=new Re(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function v(w){let x=!1;const A=g(w);A===null?p(a,l):A&&A.isColor&&(p(A,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===306)?(h===void 0&&(h=new nt(new Mt(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Fi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(x.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wu.makeRotationFromEuler(ti)),h.material.toneMapped=tt.getTransfer(A.colorSpace)!==ft,(d!==A||u!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new nt(new ir(2,2),new Un({name:"BackgroundMaterial",uniforms:Fi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=tt.getTransfer(A.colorSpace)!==ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,x){w.getRGB(Us,fl(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,x,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:v,addToRenderList:m,dispose:T}}function Au(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(S,L,V,O,Y){let Q=!1;const $=d(O,V,L);r!==$&&(r=$,c(r.object)),Q=f(S,O,V,Y),Q&&g(S,O,V,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(S,L,V,O),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,L,V){const O=V.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let Q=Y[L.id];Q===void 0&&(Q={},Y[L.id]=Q);let $=Q[O];return $===void 0&&($=u(l()),Q[O]=$),$}function u(S){const L=[],V=[],O=[];for(let Y=0;Y<t;Y++)L[Y]=0,V[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,L,V,O){const Y=r.attributes,Q=L.attributes;let $=0;const J=V.getAttributes();for(const H in J)if(J[H].location>=0){const fe=Y[H];let Se=Q[H];if(Se===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;$++}return r.attributesNum!==$||r.index!==O}function g(S,L,V,O){const Y={},Q=L.attributes;let $=0;const J=V.getAttributes();for(const H in J)if(J[H].location>=0){let fe=Q[H];fe===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));const Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),Y[H]=Se,$++}r.attributes=Y,r.attributesNum=$,r.index=O}function v(){const S=r.newAttributes;for(let L=0,V=S.length;L<V;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const V=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;V[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),Y[S]!==L&&(i.vertexAttribDivisor(S,L),Y[S]=L)}function T(){const S=r.newAttributes,L=r.enabledAttributes;for(let V=0,O=L.length;V<O;V++)L[V]!==S[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function w(S,L,V,O,Y,Q,$){$===!0?i.vertexAttribIPointer(S,L,V,Y,Q):i.vertexAttribPointer(S,L,V,O,Y,Q)}function x(S,L,V,O){v();const Y=O.attributes,Q=V.getAttributes(),$=L.defaultAttributeValues;for(const J in Q){const H=Q[J];if(H.location>=0){let oe=Y[J];if(oe===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const fe=oe.normalized,Se=oe.itemSize,Be=e.get(oe);if(Be===void 0)continue;const Ze=Be.buffer,q=Be.type,ie=Be.bytesPerElement,pe=q===i.INT||q===i.UNSIGNED_INT||oe.gpuType===1013;if(oe.isInterleavedBufferAttribute){const re=oe.data,be=re.stride,We=oe.offset;if(re.isInstancedInterleavedBuffer){for(let ye=0;ye<H.locationSize;ye++)p(H.location+ye,re.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ye=0;ye<H.locationSize;ye++)m(H.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ye=0;ye<H.locationSize;ye++)w(H.location+ye,Se/H.locationSize,q,fe,be*ie,(We+Se/H.locationSize*ye)*ie,pe)}else{if(oe.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)p(H.location+re,oe.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let re=0;re<H.locationSize;re++)m(H.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let re=0;re<H.locationSize;re++)w(H.location+re,Se/H.locationSize,q,fe,Se*ie,Se/H.locationSize*re*ie,pe)}}else if($!==void 0){const fe=$[J];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(H.location,fe);break;case 3:i.vertexAttrib3fv(H.location,fe);break;case 4:i.vertexAttrib4fv(H.location,fe);break;default:i.vertexAttrib1fv(H.location,fe)}}}}T()}function A(){F();for(const S in n){const L=n[S];for(const V in L){const O=L[V];for(const Y in O)h(O[Y].object),delete O[Y];delete L[V]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const V in L){const O=L[V];for(const Y in O)h(O[Y].object),delete O[Y];delete L[V]}delete n[S.id]}function P(S){for(const L in n){const V=n[L];if(V[S.id]===void 0)continue;const O=V[S.id];for(const Y in O)h(O[Y].object),delete O[Y];delete V[S.id]}}function F(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Cu(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ru(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==1023&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!F)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:A,maxSamples:C}}function Pu(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ri,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,w=T*4;let x=p.clippingState||null;l.value=x,x=h(g,u,w,f);for(let A=0;A!==w;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==v;++w,x+=4)o.copy(d[w]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ku(i){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Tc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Li=4,sa=[.125,.215,.35,.446,.526,.582],ai=20,Ur=new yl,ra=new Re;let Br=null,Or=0,Gr=0,zr=!1;const oi=(1+Math.sqrt(5))/2,Ai=1/oi,oa=[new R(-oi,Ai,0),new R(oi,Ai,0),new R(-Ai,0,oi),new R(Ai,0,oi),new R(0,oi,-Ai),new R(0,oi,Ai),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Lu=new R;class aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Lu}=r;Br=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Br,Or,Gr),this._renderer.xr.enabled=zr,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Br=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Ni,depthBuffer:!1},s=la(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=la(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Du(r)),this._blurMaterial=Iu(r,e,t)}return s}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,n,s,r){const l=new nn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(ra),d.toneMapping=0,d.autoClear=!1;const g=new Nt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),v=new nt(new Mt,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(ra),m=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):w===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const x=this._cubeSize;Bs(s,w*x,T>2?x:0,x,x),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ca());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oa[(s-r-1)%oa.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new nt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ai-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let T=0;for(let P=0;P<ai;++P){const F=P/v,b=Math.exp(-F*F/2);p.push(b),P===0?T+=b:P<m&&(T+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;const x=this._sizeLods[s],A=3*x*(s>w-Li?s-w+Li:0),C=4*(this._cubeSize-x);Bs(t,A,C,3*x,2*x),l.setRenderTarget(t),l.render(d,Ur)}}function Du(i){const e=[],t=[],n=[];let s=i;const r=i-Li+1+sa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Li?l=sa[o-i+Li-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),w=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,F=C>2?0:-1,b=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];T.set(b,v*g*C),w.set(u,m*g*C);const S=[C,C,C,C,C,C];x.set(S,p*g*C)}const A=new jt;A.setAttribute("position",new En(T,v)),A.setAttribute("uv",new En(w,m)),A.setAttribute("faceIndex",new En(x,p)),e.push(A),s>Li&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function la(i,e,t){const n=new di(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Iu(i,e,t){const n=new Float32Array(ai),s=new R(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_o(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ca(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ha(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function Nu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new aa(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new aa(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Fu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Uu(i,e,t,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let w=0,x=T.length;w<x;w+=3){const A=T[w+0],C=T[w+1],P=T[w+2];u.push(A,C,C,P,P,A)}}else if(g!==void 0){const T=g.array;v=g.version;for(let w=0,x=T.length/3-1;w<x;w+=3){const A=w+0,C=w+1,P=w+2;u.push(A,C,C,P,P,A)}}else return;const m=new(al(u)?ul:dl)(u,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Bu(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ou(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gu(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let S=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*C*4*d),F=new ll(P,A,C,d);F.type=1015,F.needsUpdate=!0;const b=x*4;for(let L=0;L<d;L++){const V=p[L],O=T[L],Y=w[L],Q=A*C*4*L;for(let $=0;$<V.count;$++){const J=$*b;g===!0&&(s.fromBufferAttribute(V,$),P[Q+J+0]=s.x,P[Q+J+1]=s.y,P[Q+J+2]=s.z,P[Q+J+3]=0),v===!0&&(s.fromBufferAttribute(O,$),P[Q+J+4]=s.x,P[Q+J+5]=s.y,P[Q+J+6]=s.z,P[Q+J+7]=0),m===!0&&(s.fromBufferAttribute(Y,$),P[Q+J+8]=s.x,P[Q+J+9]=s.y,P[Q+J+10]=s.z,P[Q+J+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:F,size:new it(A,C)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function zu(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Sl=new Wt,da=new _l(1,1),xl=new ll,bl=new cc,El=new ml,ua=[],fa=[],pa=new Float32Array(16),ma=new Float32Array(9),ga=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ua[s];if(r===void 0&&(r=new Float32Array(s),ua[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sr(i,e){let t=fa[e];t===void 0&&(t=new Int32Array(e),fa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function qu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Xu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Pt(t,n))return;ga.set(n),i.uniformMatrix2fv(this.addr,!1,ga),kt(t,n)}}function $u(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Pt(t,n))return;ma.set(n),i.uniformMatrix3fv(this.addr,!1,ma),kt(t,n)}}function Yu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Pt(t,n))return;pa.set(n),i.uniformMatrix4fv(this.addr,!1,pa),kt(t,n)}}function Ku(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function ju(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Ju(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Zu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function sf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(da.compareFunction=515,r=da):r=Sl,t.setTexture2D(e||r,s)}function rf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bl,s)}function of(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||El,s)}function af(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xl,s)}function lf(i){switch(i){case 5126:return Hu;case 35664:return Vu;case 35665:return Wu;case 35666:return qu;case 35674:return Xu;case 35675:return $u;case 35676:return Yu;case 5124:case 35670:return Ku;case 35667:case 35671:return Qu;case 35668:case 35672:return ju;case 35669:case 35673:return Ju;case 5125:return Zu;case 36294:return ef;case 36295:return tf;case 36296:return nf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return af}}function cf(i,e){i.uniform1fv(this.addr,e)}function hf(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function df(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function uf(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function ff(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pf(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mf(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gf(i,e){i.uniform1iv(this.addr,e)}function _f(i,e){i.uniform2iv(this.addr,e)}function vf(i,e){i.uniform3iv(this.addr,e)}function yf(i,e){i.uniform4iv(this.addr,e)}function Mf(i,e){i.uniform1uiv(this.addr,e)}function Sf(i,e){i.uniform2uiv(this.addr,e)}function xf(i,e){i.uniform3uiv(this.addr,e)}function bf(i,e){i.uniform4uiv(this.addr,e)}function Ef(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Sl,r[o])}function wf(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bl,r[o])}function Tf(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||El,r[o])}function Af(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xl,r[o])}function Cf(i){switch(i){case 5126:return cf;case 35664:return hf;case 35665:return df;case 35666:return uf;case 35674:return ff;case 35675:return pf;case 35676:return mf;case 5124:case 35670:return gf;case 35667:case 35671:return _f;case 35668:case 35672:return vf;case 35669:case 35673:return yf;case 5125:return Mf;case 36294:return Sf;case 36295:return xf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Tf;case 36289:case 36303:case 36311:case 36292:return Af}}class Rf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lf(t.type)}}class Pf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cf(t.type)}}class kf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function _a(i,e){i.seq.push(e),i.map[e.id]=e}function Lf(i,e,t){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),o=Hr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_a(t,c===void 0?new Rf(a,i,e):new Pf(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new kf(a),_a(t,d)),t=d}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Lf(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function va(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Df=37297;let If=0;function Nf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ya=new Ge;function Ff(i){tt._getMatrix(ya,tt.workingColorSpace,i);const e=`mat3( ${ya.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Ks:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ma(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Nf(i.getShaderSource(e),o)}else return s}function Uf(i,e){const t=Ff(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bf(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new R;function Of(){tt.getLuminanceCoefficients(Os);const i=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function zf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ns(i){return i!==""}function Sa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(i){return i.replace(Vf,qf)}const Wf=new Map;function qf(i,e){let t=He[e];if(t===void 0){const n=Wf.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const Xf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(i){return i.replace(Xf,$f)}function $f(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ea(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Kf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function jf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Jf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zf(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Yf(t),c=Kf(t),h=Qf(t),d=jf(t),u=Jf(t),f=Gf(t),g=zf(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),p.length>0&&(p+=`
`)):(m=[Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),p=[Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?He.tonemapping_pars_fragment:"",t.toneMapping!==0?Bf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Uf("linearToOutputTexel",t.outputColorSpace),Of(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=ao(o),o=Sa(o,t),o=xa(o,t),a=ao(a),a=Sa(a,t),a=xa(a,t),o=ba(o),a=ba(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+o,x=T+p+a,A=va(s,s.VERTEX_SHADER,w),C=va(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(L){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(A).trim(),Y=s.getShaderInfoLog(C).trim();let Q=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,C);else{const J=Ma(s,A,"vertex"),H=Ma(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+J+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||Y==="")&&($=!1);$&&(L.diagnostics={runnable:Q,programLog:V,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(A),s.deleteShader(C),F=new qs(s,v),b=Hf(s,v)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Df)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=If++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let ep=0;class tp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new np(e),t.set(e,n)),n}}class np{constructor(e){this.id=ep++,this.code=e,this.usedTimes=0}}function ip(i,e,t,n,s,r,o){const a=new cl,l=new tp,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,L,V,O){const Y=V.fog,Q=O.geometry,$=b.isMeshStandardMaterial?V.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),H=J&&J.mapping===306?J.image.height:null,oe=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const fe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Se=fe!==void 0?fe.length:0;let Be=0;Q.morphAttributes.position!==void 0&&(Be=1),Q.morphAttributes.normal!==void 0&&(Be=2),Q.morphAttributes.color!==void 0&&(Be=3);let Ze,q,ie,pe;if(oe){const dt=bn[oe];Ze=dt.vertexShader,q=dt.fragmentShader}else Ze=b.vertexShader,q=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);const re=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),We=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,Et=!!b.map,St=!!b.matcap,Ye=!!J,k=!!b.aoMap,on=!!b.lightMap,je=!!b.bumpMap,Ke=!!b.normalMap,we=!!b.displacementMap,gt=!!b.emissiveMap,Ee=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,Z=b.iridescence>0,X=b.sheen>0,xe=b.transmission>0,ce=y&&!!b.anisotropyMap,Pe=B&&!!b.clearcoatMap,ke=B&&!!b.clearcoatNormalMap,te=B&&!!b.clearcoatRoughnessMap,ge=Z&&!!b.iridescenceMap,Le=Z&&!!b.iridescenceThicknessMap,Ie=X&&!!b.sheenColorMap,_e=X&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,ze=!!b.specularColorMap,mt=!!b.specularIntensityMap,I=xe&&!!b.transmissionMap,he=xe&&!!b.thicknessMap,W=!!b.gradientMap,j=!!b.alphaMap,ue=b.alphaTest>0,de=!!b.alphaHash,Oe=!!b.extensions;let xt=0;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(xt=i.toneMapping);const Ft={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:q,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:We,instancingColor:We&&O.instanceColor!==null,instancingMorph:We&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ni,alphaToCoverage:!!b.alphaToCoverage,map:Et,matcap:St,envMap:Ye,envMapMode:Ye&&J.mapping,envMapCubeUVHeight:H,aoMap:k,lightMap:on,bumpMap:je,normalMap:Ke,displacementMap:u&&we,emissiveMap:gt,normalMapObjectSpace:Ke&&b.normalMapType===1,normalMapTangentSpace:Ke&&b.normalMapType===0,metalnessMap:Ee,roughnessMap:E,anisotropy:y,anisotropyMap:ce,clearcoat:B,clearcoatMap:Pe,clearcoatNormalMap:ke,clearcoatRoughnessMap:te,dispersion:K,iridescence:Z,iridescenceMap:ge,iridescenceThicknessMap:Le,sheen:X,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:Qe,specularColorMap:ze,specularIntensityMap:mt,transmission:xe,transmissionMap:I,thicknessMap:he,gradientMap:W,opaque:b.transparent===!1&&b.blending===1&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:de,combine:b.combine,mapUv:Et&&v(b.map.channel),aoMapUv:k&&v(b.aoMap.channel),lightMapUv:on&&v(b.lightMap.channel),bumpMapUv:je&&v(b.bumpMap.channel),normalMapUv:Ke&&v(b.normalMap.channel),displacementMapUv:we&&v(b.displacementMap.channel),emissiveMapUv:gt&&v(b.emissiveMap.channel),metalnessMapUv:Ee&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:ce&&v(b.anisotropyMap.channel),clearcoatMapUv:Pe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(b.sheenRoughnessMap.channel),specularMapUv:Qe&&v(b.specularMap.channel),specularColorMapUv:ze&&v(b.specularColorMap.channel),specularIntensityMapUv:mt&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:he&&v(b.thicknessMap.channel),alphaMapUv:j&&v(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ke||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(Et||j),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:Et&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===ft,decodeVideoTextureEmissive:gt&&b.emissiveMap.isVideoTexture===!0&&tt.getTransfer(b.emissiveMap.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===2,flipSided:b.side===1,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&b.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(T(S,b),w(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function w(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const S=g[b.type];let L;if(S){const V=bn[S];L=xc.clone(V.uniforms)}else L=b.uniforms;return L}function A(b,S){let L;for(let V=0,O=h.length;V<O;V++){const Y=h[V];if(Y.cacheKey===S){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new Zf(i,S,b,r),h.push(L)),L}function C(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function P(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:F}}function sp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ta(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,g,v,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||rp),n.length>1&&n.sort(u||wa),s.length>1&&s.sort(u||wa)}function h(){for(let d=e,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function op(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ta,i.set(n,[o])):s>=r.length?(o=new Ta,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ap(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cp=0;function hp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dp(i){const e=new ap,t=lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new _t,o=new _t;function a(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,w=0,x=0,A=0,C=0,P=0;c.sort(hp);for(let b=0,S=c.length;b<S;b++){const L=c[b],V=L.color,O=L.intensity,Y=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*O,d+=V.g*O,u+=V.b*O;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],O);P++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,H=t.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=$,f++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(V).multiplyScalar(O),$.distance=Y,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[v]=$;const J=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=J.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=Q,x++}v++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(V).multiplyScalar(O),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const J=L.shadow,H=t.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=$,g++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(O),$.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==T||F.numPointShadows!==w||F.numSpotShadows!==x||F.numSpotMaps!==A||F.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,F.directionalLength=f,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=T,F.numPointShadows=w,F.numSpotShadows=x,F.numSpotMaps=A,F.numLightProbes=P,n.version=cp++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const w=c[p];if(w.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(w.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Aa(i){const e=new dp(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function up(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Aa(i),e.set(s,[a])):r>=o.length?(a=new Aa(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pp=`uniform sampler2D shadow_pass;
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
}`;function mp(i,e,t){let n=new po;const s=new it,r=new it,o=new pt,a=new Fc({depthPacking:3201}),l=new Uc,c={},h=t.maxTextureSize,d={0:1,1:0,2:2},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:fp,fragmentShader:pp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(C,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const O=p!==3&&this.type===3,Y=p===3&&this.type!==3;for(let Q=0,$=C.length;Q<$;Q++){const J=C[Q],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const oe=H.getFrameExtents();if(s.multiply(oe),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,H.mapSize.y=r.y)),H.map===null||O===!0||Y===!0){const Se=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new di(s.x,s.y,Se),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const fe=H.getViewportCount();for(let Se=0;Se<fe;Se++){const Be=H.getViewport(Se);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),V.viewport(o),H.updateMatrices(J,Se),n=H.getFrustum(),x(P,F,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===3&&T(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,L)};function T(C,P){const F=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new di(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,F,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,F,f,v,null)}function w(C,P,F,b){let S=null;const L=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=F.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const V=S.uuid,O=P.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let Q=Y[O];Q===void 0&&(Q=S.clone(),Y[O]=Q,P.addEventListener("dispose",A)),S=Q}if(S.visible=P.visible,S.wireframe=P.wireframe,b===3?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=F}return S}function x(C,P,F,b,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===3)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const O=e.update(C),Y=C.material;if(Array.isArray(Y)){const Q=O.groups;for(let $=0,J=Q.length;$<J;$++){const H=Q[$],oe=Y[H.materialIndex];if(oe&&oe.visible){const fe=w(C,oe,b,S);C.onBeforeShadow(i,C,P,F,O,fe,H),i.renderBufferDirect(F,null,O,fe,C,H),C.onAfterShadow(i,C,P,F,O,fe,H)}}}else if(Y.visible){const Q=w(C,Y,b,S);C.onBeforeShadow(i,C,P,F,O,Q,null),i.renderBufferDirect(F,null,O,Q,C,null),C.onAfterShadow(i,C,P,F,O,Q,null)}}const V=C.children;for(let O=0,Y=V.length;O<Y;O++)x(V[O],P,F,b,S)}function A(C){C.target.removeEventListener("dispose",A);for(const F in c){const b=c[F],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const gp={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function _p(i,e){function t(){let I=!1;const he=new pt;let W=null;const j=new pt(0,0,0,0);return{setMask:function(ue){W!==ue&&!I&&(i.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){I=ue},setClear:function(ue,de,Oe,xt,Ft){Ft===!0&&(ue*=xt,de*=xt,Oe*=xt),he.set(ue,de,Oe,xt),j.equals(he)===!1&&(i.clearColor(ue,de,Oe,xt),j.copy(he))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,W=null,j=null,ue=null;return{setReversed:function(de){if(he!==de){const Oe=e.get("EXT_clip_control");de?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),he=de;const xt=ue;ue=null,this.setClear(xt)}},getReversed:function(){return he},setTest:function(de){de?re(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(de){W!==de&&!I&&(i.depthMask(de),W=de)},setFunc:function(de){if(he&&(de=gp[de]),j!==de){switch(de){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=de}},setLocked:function(de){I=de},setClear:function(de){ue!==de&&(he&&(de=1-de),i.clearDepth(de),ue=de)},reset:function(){I=!1,W=null,j=null,ue=null,he=!1}}}function s(){let I=!1,he=null,W=null,j=null,ue=null,de=null,Oe=null,xt=null,Ft=null;return{setTest:function(dt){I||(dt?re(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(dt){he!==dt&&!I&&(i.stencilMask(dt),he=dt)},setFunc:function(dt,pn,An){(W!==dt||j!==pn||ue!==An)&&(i.stencilFunc(dt,pn,An),W=dt,j=pn,ue=An)},setOp:function(dt,pn,An){(de!==dt||Oe!==pn||xt!==An)&&(i.stencilOp(dt,pn,An),de=dt,Oe=pn,xt=An)},setLocked:function(dt){I=dt},setClear:function(dt){Ft!==dt&&(i.clearStencil(dt),Ft=dt)},reset:function(){I=!1,he=null,W=null,j=null,ue=null,de=null,Oe=null,xt=null,Ft=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,w=null,x=null,A=null,C=null,P=new Re(0,0,0),F=0,b=!1,S=null,L=null,V=null,O=null,Y=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=J>=2);let oe=null,fe={};const Se=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ze=new pt().fromArray(Se),q=new pt().fromArray(Be);function ie(I,he,W,j){const ue=new Uint8Array(4),de=i.createTexture();i.bindTexture(I,de),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<W;Oe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(he+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return de}const pe={};pe[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(3),je(!1),Ke(1),re(i.CULL_FACE),k(0);function re(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function be(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function We(I,he){return d[I]!==he?(i.bindFramebuffer(I,he),d[I]=he,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ye(I,he){let W=f,j=!1;if(I){W=u.get(he),W===void 0&&(W=[],u.set(he,W));const ue=I.textures;if(W.length!==ue.length||W[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Oe=ue.length;de<Oe;de++)W[de]=i.COLOR_ATTACHMENT0+de;W.length=ue.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function Et(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const St={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};St[103]=i.MIN,St[104]=i.MAX;const Ye={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function k(I,he,W,j,ue,de,Oe,xt,Ft,dt){if(I===0){v===!0&&(be(i.BLEND),v=!1);return}if(v===!1&&(re(i.BLEND),v=!0),I!==5){if(I!==m||dt!==b){if((p!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,x=100),dt)switch(I){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,w=null,A=null,C=null,P.set(0,0,0),F=0,m=I,b=dt}return}ue=ue||he,de=de||W,Oe=Oe||j,(he!==p||ue!==x)&&(i.blendEquationSeparate(St[he],St[ue]),p=he,x=ue),(W!==T||j!==w||de!==A||Oe!==C)&&(i.blendFuncSeparate(Ye[W],Ye[j],Ye[de],Ye[Oe]),T=W,w=j,A=de,C=Oe),(xt.equals(P)===!1||Ft!==F)&&(i.blendColor(xt.r,xt.g,xt.b,Ft),P.copy(xt),F=Ft),m=I,b=!1}function on(I,he){I.side===2?be(i.CULL_FACE):re(i.CULL_FACE);let W=I.side===1;he&&(W=!W),je(W),I.blending===1&&I.transparent===!1?k(0):k(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),gt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function Ke(I){I!==0?(re(i.CULL_FACE),I!==L&&(I===1?i.cullFace(i.BACK):I===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),L=I}function we(I){I!==V&&($&&i.lineWidth(I),V=I)}function gt(I,he,W){I?(re(i.POLYGON_OFFSET_FILL),(O!==he||Y!==W)&&(i.polygonOffset(he,W),O=he,Y=W)):be(i.POLYGON_OFFSET_FILL)}function Ee(I){I?re(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function E(I){I===void 0&&(I=i.TEXTURE0+Q-1),oe!==I&&(i.activeTexture(I),oe=I)}function y(I,he,W){W===void 0&&(oe===null?W=i.TEXTURE0+Q-1:W=oe);let j=fe[W];j===void 0&&(j={type:void 0,texture:void 0},fe[W]=j),(j.type!==I||j.texture!==he)&&(oe!==W&&(i.activeTexture(W),oe=W),i.bindTexture(I,he||pe[I]),j.type=I,j.texture=he)}function B(){const I=fe[oe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Ze.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function _e(I){q.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Qe(I,he){let W=c.get(he);W===void 0&&(W=new WeakMap,c.set(he,W));let j=W.get(I);j===void 0&&(j=i.getUniformBlockIndex(he,I.name),W.set(I,j))}function ze(I,he){const j=c.get(he).get(I);l.get(he)!==j&&(i.uniformBlockBinding(he,j,I.__bindingPointIndex),l.set(he,j))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,fe={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,w=null,x=null,A=null,C=null,P=new Re(0,0,0),F=0,b=!1,S=null,L=null,V=null,O=null,Y=null,Ze.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:be,bindFramebuffer:We,drawBuffers:ye,useProgram:Et,setBlending:k,setMaterial:on,setFlipSided:je,setCullFace:Ke,setLineWidth:we,setPolygonOffset:gt,setScissorTest:Ee,activeTexture:E,bindTexture:y,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:ge,texImage3D:Le,updateUBOMapping:Qe,uniformBlockBinding:ze,texStorage2D:ke,texStorage3D:te,texSubImage2D:X,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Pe,scissor:Ie,viewport:_e,reset:mt}}function vp(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):Qs("canvas")}function v(E,y,B){let K=1;const Z=Ee(E);if((Z.width>B||Z.height>B)&&(K=B/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(K*Z.width),xe=Math.floor(K*Z.height);d===void 0&&(d=g(X,xe));const ce=y?g(X,xe):d;return ce.width=X,ce.height=xe,ce.getContext("2d").drawImage(E,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+xe+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,y,B,K,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=y;if(y===i.RED&&(B===i.FLOAT&&(X=i.R32F),B===i.HALF_FLOAT&&(X=i.R16F),B===i.UNSIGNED_BYTE&&(X=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.R8UI),B===i.UNSIGNED_SHORT&&(X=i.R16UI),B===i.UNSIGNED_INT&&(X=i.R32UI),B===i.BYTE&&(X=i.R8I),B===i.SHORT&&(X=i.R16I),B===i.INT&&(X=i.R32I)),y===i.RG&&(B===i.FLOAT&&(X=i.RG32F),B===i.HALF_FLOAT&&(X=i.RG16F),B===i.UNSIGNED_BYTE&&(X=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RG8UI),B===i.UNSIGNED_SHORT&&(X=i.RG16UI),B===i.UNSIGNED_INT&&(X=i.RG32UI),B===i.BYTE&&(X=i.RG8I),B===i.SHORT&&(X=i.RG16I),B===i.INT&&(X=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RGB8UI),B===i.UNSIGNED_SHORT&&(X=i.RGB16UI),B===i.UNSIGNED_INT&&(X=i.RGB32UI),B===i.BYTE&&(X=i.RGB8I),B===i.SHORT&&(X=i.RGB16I),B===i.INT&&(X=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),B===i.UNSIGNED_INT&&(X=i.RGBA32UI),B===i.BYTE&&(X=i.RGBA8I),B===i.SHORT&&(X=i.RGBA16I),B===i.INT&&(X=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),y===i.RGBA){const xe=Z?Ks:tt.getTransfer(K);B===i.FLOAT&&(X=i.RGBA32F),B===i.HALF_FLOAT&&(X=i.RGBA16F),B===i.UNSIGNED_BYTE&&(X=xe===ft?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(E,y){let B;return E?y===null||y===1014||y===1020?B=i.DEPTH24_STENCIL8:y===1015?B=i.DEPTH32F_STENCIL8:y===1012&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===1014||y===1020?B=i.DEPTH_COMPONENT24:y===1015?B=i.DEPTH_COMPONENT32F:y===1012&&(B=i.DEPTH_COMPONENT16),B}function A(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==1003&&E.minFilter!==1006?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function C(E){const y=E.target;y.removeEventListener("dispose",C),F(y),y.isVideoTexture&&h.delete(y)}function P(E){const y=E.target;y.removeEventListener("dispose",P),S(y)}function F(E){const y=n.get(E);if(y.__webglInit===void 0)return;const B=E.source,K=u.get(B);if(K){const Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(E),Object.keys(K).length===0&&u.delete(B)}n.remove(E)}function b(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const B=E.source,K=u.get(B);delete K[y.__cacheKey],o.memory.textures--}function S(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Z=0;Z<y.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=E.textures;for(let K=0,Z=B.length;K<Z;K++){const X=n.get(B[K]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(E)}let L=0;function V(){L=0}function O(){const E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function Y(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function Q(E,y){const B=n.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,E,y);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function $(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function J(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,y);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function H(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){ie(B,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const oe={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},fe={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Se={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Be(E,y){if(y.type===1015&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===1006||y.magFilter===1007||y.magFilter===1005||y.magFilter===1008||y.minFilter===1006||y.minFilter===1007||y.minFilter===1005||y.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,oe[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,oe[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,oe[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,fe[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===1003||y.minFilter!==1005&&y.minFilter!==1008||y.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(E,y){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",C));const K=y.source;let Z=u.get(K);Z===void 0&&(Z={},u.set(K,Z));const X=Y(y);if(X!==E.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[X].usedTimes++;const xe=Z[E.__cacheKey];xe!==void 0&&(Z[E.__cacheKey].usedTimes--,xe.usedTimes===0&&b(y)),E.__cacheKey=X,E.__webglTexture=Z[X].texture}return B}function q(E,y,B){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const Z=Ze(E,y),X=y.source;t.bindTexture(K,E.__webglTexture,i.TEXTURE0+B);const xe=n.get(X);if(X.version!==xe.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);const ce=tt.getPrimaries(tt.workingColorSpace),Pe=y.colorSpace===""?null:tt.getPrimaries(y.colorSpace),ke=y.colorSpace===""||ce===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let te=v(y.image,!1,s.maxTextureSize);te=gt(y,te);const ge=r.convert(y.format,y.colorSpace),Le=r.convert(y.type);let Ie=w(y.internalFormat,ge,Le,y.colorSpace,y.isVideoTexture);Be(K,y);let _e;const Qe=y.mipmaps,ze=y.isVideoTexture!==!0,mt=xe.__version===void 0||Z===!0,I=X.dataReady,he=A(y,te);if(y.isDepthTexture)Ie=x(y.format===1027,y.type),mt&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Ie,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ie,te.width,te.height,0,ge,Le,null));else if(y.isDataTexture)if(Qe.length>0){ze&&mt&&t.texStorage2D(i.TEXTURE_2D,he,Ie,Qe[0].width,Qe[0].height);for(let W=0,j=Qe.length;W<j;W++)_e=Qe[W],ze?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Le,_e.data):t.texImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,ge,Le,_e.data);y.generateMipmaps=!1}else ze?(mt&&t.texStorage2D(i.TEXTURE_2D,he,Ie,te.width,te.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,ge,Le,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,te.width,te.height,0,ge,Le,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ie,Qe[0].width,Qe[0].height,te.depth);for(let W=0,j=Qe.length;W<j;W++)if(_e=Qe[W],y.format!==1023)if(ge!==null)if(ze){if(I)if(y.layerUpdates.size>0){const ue=ia(_e.width,_e.height,y.format,y.type);for(const de of y.layerUpdates){const Oe=_e.data.subarray(de*ue/_e.data.BYTES_PER_ELEMENT,(de+1)*ue/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,de,_e.width,_e.height,1,ge,Oe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,te.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ie,_e.width,_e.height,te.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,te.depth,ge,Le,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ie,_e.width,_e.height,te.depth,0,ge,Le,_e.data)}else{ze&&mt&&t.texStorage2D(i.TEXTURE_2D,he,Ie,Qe[0].width,Qe[0].height);for(let W=0,j=Qe.length;W<j;W++)_e=Qe[W],y.format!==1023?ge!==null?ze?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Le,_e.data):t.texImage2D(i.TEXTURE_2D,W,Ie,_e.width,_e.height,0,ge,Le,_e.data)}else if(y.isDataArrayTexture)if(ze){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ie,te.width,te.height,te.depth),I)if(y.layerUpdates.size>0){const W=ia(te.width,te.height,y.format,y.type);for(const j of y.layerUpdates){const ue=te.data.subarray(j*W/te.data.BYTES_PER_ELEMENT,(j+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,ge,Le,ue)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Le,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,te.width,te.height,te.depth,0,ge,Le,te.data);else if(y.isData3DTexture)ze?(mt&&t.texStorage3D(i.TEXTURE_3D,he,Ie,te.width,te.height,te.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Le,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,te.width,te.height,te.depth,0,ge,Le,te.data);else if(y.isFramebufferTexture){if(mt)if(ze)t.texStorage2D(i.TEXTURE_2D,he,Ie,te.width,te.height);else{let W=te.width,j=te.height;for(let ue=0;ue<he;ue++)t.texImage2D(i.TEXTURE_2D,ue,Ie,W,j,0,ge,Le,null),W>>=1,j>>=1}}else if(Qe.length>0){if(ze&&mt){const W=Ee(Qe[0]);t.texStorage2D(i.TEXTURE_2D,he,Ie,W.width,W.height)}for(let W=0,j=Qe.length;W<j;W++)_e=Qe[W],ze?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge,Le,_e):t.texImage2D(i.TEXTURE_2D,W,Ie,ge,Le,_e);y.generateMipmaps=!1}else if(ze){if(mt){const W=Ee(te);t.texStorage2D(i.TEXTURE_2D,he,Ie,W.width,W.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Le,te)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ge,Le,te);m(y)&&p(K),xe.__version=X.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ie(E,y,B){if(y.image.length!==6)return;const K=Ze(E,y),Z=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const X=n.get(Z);if(Z.version!==X.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const xe=tt.getPrimaries(tt.workingColorSpace),ce=y.colorSpace===""?null:tt.getPrimaries(y.colorSpace),Pe=y.colorSpace===""||xe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ke=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let j=0;j<6;j++)!ke&&!te?ge[j]=v(y.image[j],!0,s.maxCubemapSize):ge[j]=te?y.image[j].image:y.image[j],ge[j]=gt(y,ge[j]);const Le=ge[0],Ie=r.convert(y.format,y.colorSpace),_e=r.convert(y.type),Qe=w(y.internalFormat,Ie,_e,y.colorSpace),ze=y.isVideoTexture!==!0,mt=X.__version===void 0||K===!0,I=Z.dataReady;let he=A(y,Le);Be(i.TEXTURE_CUBE_MAP,y);let W;if(ke){ze&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Qe,Le.width,Le.height);for(let j=0;j<6;j++){W=ge[j].mipmaps;for(let ue=0;ue<W.length;ue++){const de=W[ue];y.format!==1023?Ie!==null?ze?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,de.width,de.height,Ie,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Qe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,de.width,de.height,Ie,_e,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Qe,de.width,de.height,0,Ie,_e,de.data)}}}else{if(W=y.mipmaps,ze&&mt){W.length>0&&he++;const j=Ee(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Qe,j.width,j.height)}for(let j=0;j<6;j++)if(te){ze?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ge[j].width,ge[j].height,Ie,_e,ge[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,ge[j].width,ge[j].height,0,Ie,_e,ge[j].data);for(let ue=0;ue<W.length;ue++){const Oe=W[ue].image[j].image;ze?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Oe.width,Oe.height,Ie,_e,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Qe,Oe.width,Oe.height,0,Ie,_e,Oe.data)}}else{ze?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ie,_e,ge[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,Ie,_e,ge[j]);for(let ue=0;ue<W.length;ue++){const de=W[ue];ze?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Ie,_e,de.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Qe,Ie,_e,de.image[j])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),X.__version=Z.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function pe(E,y,B,K,Z,X){const xe=r.convert(B.format,B.colorSpace),ce=r.convert(B.type),Pe=w(B.internalFormat,xe,ce,B.colorSpace),ke=n.get(y),te=n.get(B);if(te.__renderTarget=y,!ke.__hasExternalTextures){const ge=Math.max(1,y.width>>X),Le=Math.max(1,y.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,Pe,ge,Le,y.depth,0,xe,ce,null):t.texImage2D(Z,X,Pe,ge,Le,0,xe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,te.__webglTexture,0,je(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,te.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(E,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const K=y.depthTexture,Z=K&&K.isDepthTexture?K.type:null,X=x(y.stencilBuffer,Z),xe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=je(y);Ke(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,X,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,X,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,X,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,E)}else{const K=y.textures;for(let Z=0;Z<K.length;Z++){const X=K[Z],xe=r.convert(X.format,X.colorSpace),ce=r.convert(X.type),Pe=w(X.internalFormat,xe,ce,X.colorSpace),ke=je(y);B&&Ke(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Pe,y.width,y.height):Ke(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Pe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q(y.depthTexture,0);const Z=K.__webglTexture,X=je(y);if(y.depthTexture.format===1026)Ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(y.depthTexture.format===1027)Ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function We(E){const y=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const K=E.texture.mipmaps;K&&K.length>0?be(y.__webglFramebuffer[0],E):be(y.__webglFramebuffer,E)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),re(y.__webglDepthbuffer[K],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const K=E.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),re(y.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(E,y,B){const K=n.get(E);y!==void 0&&pe(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&We(E)}function Et(E){const y=E.texture,B=n.get(E),K=n.get(y);E.addEventListener("dispose",P);const Z=E.textures,X=E.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++),X){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let Pe=0;Pe<y.mipmaps.length;Pe++)B.__webglFramebuffer[ce][Pe]=i.createFramebuffer()}else B.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)B.__webglFramebuffer[ce]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ce=0,Pe=Z.length;ce<Pe;ce++){const ke=n.get(Z[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ke(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const Pe=Z[ce];B.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const ke=r.convert(Pe.format,Pe.colorSpace),te=r.convert(Pe.type),ge=w(Pe.internalFormat,ke,te,Pe.colorSpace,E.isXRRenderTarget===!0),Le=je(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ge,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),re(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Be(i.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)pe(B.__webglFramebuffer[ce][Pe],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe);else pe(B.__webglFramebuffer[ce],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ce=0,Pe=Z.length;ce<Pe;ce++){const ke=Z[ce],te=n.get(ke);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Be(i.TEXTURE_2D,ke),pe(B.__webglFramebuffer,E,ke,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(ke)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),Be(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)pe(B.__webglFramebuffer[Pe],E,y,i.COLOR_ATTACHMENT0,ce,Pe);else pe(B.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ce,0);m(y)&&p(ce),t.unbindTexture()}E.depthBuffer&&We(E)}function St(E){const y=E.textures;for(let B=0,K=y.length;B<K;B++){const Z=y[B];if(m(Z)){const X=T(E),xe=n.get(Z).__webglTexture;t.bindTexture(X,xe),p(X),t.unbindTexture()}}}const Ye=[],k=[];function on(E){if(E.samples>0){if(Ke(E)===!1){const y=E.textures,B=E.width,K=E.height;let Z=i.COLOR_BUFFER_BIT;const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(E),ce=y.length>1;if(ce)for(let ke=0;ke<y.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Pe=E.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ke=0;ke<y.length;ke++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ke]);const te=n.get(y[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,Z,i.NEAREST),l===!0&&(Ye.length=0,k.length=0,Ye.push(i.COLOR_ATTACHMENT0+ke),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ye.push(X),k.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ke=0;ke<y.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ke]);const te=n.get(y[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function je(E){return Math.min(s.maxSamples,E.samples)}function Ke(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function gt(E,y){const B=E.colorSpace,K=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ni&&B!==""&&(tt.getTransfer(B)===ft?(K!==1023||Z!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=ye,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ke}function yp(i,e){function t(n,s=""){let r;const o=tt.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Mp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:Mp,fragmentShader:Sp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bp extends Bi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=new xp,m=t.getContextAttributes();let p=null,T=null;const w=[],x=[],A=new it;let C=null;const P=new nn;P.viewport=new pt;const F=new nn;F.viewport=new pt;const b=[P,F],S=new Hc;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=w[q];return ie===void 0&&(ie=new kr,w[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=w[q];return ie===void 0&&(ie=new kr,w[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=w[q];return ie===void 0&&(ie=new kr,w[q]=ie),ie.getHandSpace()};function O(q){const ie=x.indexOf(q.inputSource);if(ie===-1)return;const pe=w[ie];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||o),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Q);for(let q=0;q<w.length;q++){const ie=x[q];ie!==null&&(x[q]=null,w[q].disconnect(ie))}L=null,V=null,v.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,T=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,re=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?1027:1026,re=m.stencil?1020:1014);const We={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new di(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new _l(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new di(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(q){for(let ie=0;ie<q.removed.length;ie++){const pe=q.removed[ie],re=x.indexOf(pe);re>=0&&(x[re]=null,w[re].disconnect(pe))}for(let ie=0;ie<q.added.length;ie++){const pe=q.added[ie];let re=x.indexOf(pe);if(re===-1){for(let We=0;We<w.length;We++)if(We>=x.length){x.push(pe),re=We;break}else if(x[We]===null){x[We]=pe,re=We;break}if(re===-1)break}const be=w[re];be&&be.connect(pe)}}const $=new R,J=new R;function H(q,ie,pe){$.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const re=$.distanceTo(J),be=ie.projectionMatrix.elements,We=pe.projectionMatrix.elements,ye=be[14]/(be[10]-1),Et=be[14]/(be[10]+1),St=(be[9]+1)/be[5],Ye=(be[9]-1)/be[5],k=(be[8]-1)/be[0],on=(We[8]+1)/We[0],je=ye*k,Ke=ye*on,we=re/(-k+on),gt=we*-k;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=ye+we,E=Et+we,y=je-gt,B=Ke+(re-gt),K=St*Et/E*Ee,Z=Ye*Et/E*Ee;q.projectionMatrix.makePerspective(y,B,K,Z,Ee,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,pe=q.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),S.near=F.near=P.near=ie,S.far=F.far=P.far=pe,(L!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,V=S.far),P.layers.mask=q.layers.mask|2,F.layers.mask=q.layers.mask|4,S.layers.mask=P.layers.mask|F.layers.mask;const re=q.parent,be=S.cameras;oe(S,re);for(let We=0;We<be.length;We++)oe(be[We],re);be.length===2?H(S,P,F):S.projectionMatrix.copy(P.projectionMatrix),fe(q,S,re)};function fe(q,ie,pe){pe===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=so*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Se=null;function Be(q,ie){if(h=ie.getViewerPose(c||o),g=ie,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let re=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let ye=0;ye<pe.length;ye++){const Et=pe[ye];let St=null;if(f!==null)St=f.getViewport(Et);else{const k=d.getViewSubImage(u,Et);St=k.viewport,ye===0&&(e.setRenderTargetTextures(T,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(T))}let Ye=b[ye];Ye===void 0&&(Ye=new nn,Ye.layers.enable(ye),Ye.viewport=new pt,b[ye]=Ye),Ye.matrix.fromArray(Et.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Et.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(St.x,St.y,St.width,St.height),ye===0&&(S.matrix.copy(Ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(Ye)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const ye=d.getDepthInformation(pe[0]);ye&&ye.isValid&&ye.texture&&v.init(e,ye,s.renderState)}}for(let pe=0;pe<w.length;pe++){const re=x[pe],be=w[pe];re!==null&&be!==void 0&&be.update(re,ie,c||o)}Se&&Se(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ze=new Ml;Ze.setAnimationLoop(Be),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}}const ni=new Tn,Ep=new _t;function wp(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),w=T.envMap,x=T.envMapRotation;w&&(m.envMap.value=w,ni.copy(x),ni.x*=-1,ni.y*=-1,ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(ni)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tp(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const x=w.program;n.uniformBlockBinding(T,x)}function c(T,w){let x=s[T.id];x===void 0&&(g(T),x=h(T),s[T.id]=x,T.addEventListener("dispose",m));const A=w.program;n.updateUBOMapping(T,A);const C=e.render.frame;r[T.id]!==C&&(u(T),r[T.id]=C)}function h(T){const w=d();T.__bindingPointIndex=w;const x=i.createBuffer(),A=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const w=s[T.id],x=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,P=x.length;C<P;C++){const F=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,S=F.length;b<S;b++){const L=F[b];if(f(L,C,b,A)===!0){const V=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let Q=0;Q<O.length;Q++){const $=O[Q],J=v($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,V+Y,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,w,x,A){const C=T.value,P=w+"_"+x;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{const F=A[P];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return A[P]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(T){const w=T.uniforms;let x=0;const A=16;for(let P=0,F=w.length;P<F;P++){const b=Array.isArray(w[P])?w[P]:[w[P]];for(let S=0,L=b.length;S<L;S++){const V=b[S],O=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,Q=O.length;Y<Q;Y++){const $=O[Y],J=v($),H=x%A,oe=H%J.boundary,fe=H+oe;x+=oe,fe!==0&&A-fe<J.storage&&(x+=A-fe),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=J.storage}}}const C=x%A;return C>0&&(x+=A-C),T.__size=x,T.__cache={},this}function v(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ap{constructor(e={}){const{canvas:t=ec(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Kt;let C=0,P=0,F=null,b=-1,S=null;const L=new pt,V=new pt;let O=null;const Y=new Re(0);let Q=0,$=t.width,J=t.height,H=1,oe=null,fe=null;const Se=new pt(0,0,$,J),Be=new pt(0,0,$,J);let Ze=!1;const q=new po;let ie=!1,pe=!1;const re=new _t,be=new _t,We=new R,ye=new pt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Ye(){return F===null?H:1}let k=n;function on(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r176"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",de,!1),k===null){const N="webgl2";if(k=on(N,M),k===null)throw on(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let je,Ke,we,gt,Ee,E,y,B,K,Z,X,xe,ce,Pe,ke,te,ge,Le,Ie,_e,Qe,ze,mt,I;function he(){je=new Fu(k),je.init(),ze=new yp(k,je),Ke=new Ru(k,je,e,ze),we=new _p(k,je),Ke.reverseDepthBuffer&&u&&we.buffers.depth.setReversed(!0),gt=new Ou(k),Ee=new sp,E=new vp(k,je,we,Ee,Ke,ze,gt),y=new ku(x),B=new Nu(x),K=new qc(k),mt=new Au(k,K),Z=new Uu(k,K,gt,mt),X=new zu(k,Z,K,gt),Ie=new Gu(k,Ke,E),te=new Pu(Ee),xe=new ip(x,y,B,je,Ke,mt,te),ce=new wp(x,Ee),Pe=new op,ke=new up(je),Le=new Tu(x,y,B,we,X,f,l),ge=new mp(x,X,Ke),I=new Tp(k,gt,Ke,we),_e=new Cu(k,je,gt),Qe=new Bu(k,je,gt),gt.programs=xe.programs,x.capabilities=Ke,x.extensions=je,x.properties=Ee,x.renderLists=Pe,x.shadowMap=ge,x.state=we,x.info=gt}he();const W=new bp(x,k);this.xr=W,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize($,J,!1))},this.getSize=function(M){return M.set($,J)},this.setSize=function(M,N,G=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,J=N,t.width=Math.floor(M*H),t.height=Math.floor(N*H),G===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set($*H,J*H).floor()},this.setDrawingBufferSize=function(M,N,G){$=M,J=N,H=G,t.width=Math.floor(M*G),t.height=Math.floor(N*G),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Se)},this.setViewport=function(M,N,G,z){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,N,G,z),we.viewport(L.copy(Se).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,N,G,z){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,N,G,z),we.scissor(V.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(M){we.setScissorTest(Ze=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,G=!0){let z=0;if(M){let U=!1;if(F!==null){const ne=F.texture.format;U=ne===1033||ne===1031||ne===1029}if(U){const ne=F.texture.type,le=ne===1009||ne===1014||ne===1012||ne===1020||ne===1017||ne===1018,me=Le.getClearColor(),ve=Le.getClearAlpha(),Ne=me.r,De=me.g,Te=me.b;le?(g[0]=Ne,g[1]=De,g[2]=Te,g[3]=ve,k.clearBufferuiv(k.COLOR,0,g)):(v[0]=Ne,v[1]=De,v[2]=Te,v[3]=ve,k.clearBufferiv(k.COLOR,0,v))}else z|=k.COLOR_BUFFER_BIT}N&&(z|=k.DEPTH_BUFFER_BIT),G&&(z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Le.dispose(),Pe.dispose(),ke.dispose(),Ee.dispose(),y.dispose(),B.dispose(),X.dispose(),mt.dispose(),I.dispose(),xe.dispose(),W.dispose(),W.removeEventListener("sessionstart",So),W.removeEventListener("sessionend",xo),Kn.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=gt.autoReset,N=ge.enabled,G=ge.autoUpdate,z=ge.needsUpdate,U=ge.type;he(),gt.autoReset=M,ge.enabled=N,ge.autoUpdate=G,ge.needsUpdate=z,ge.type=U}function de(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const N=M.target;N.removeEventListener("dispose",Oe),xt(N)}function xt(M){Ft(M),Ee.remove(M)}function Ft(M){const N=Ee.get(M).programs;N!==void 0&&(N.forEach(function(G){xe.releaseProgram(G)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,G,z,U,ne){N===null&&(N=Et);const le=U.isMesh&&U.matrixWorld.determinant()<0,me=ql(M,N,G,z,U);we.setMaterial(z,le);let ve=G.index,Ne=1;if(z.wireframe===!0){if(ve=Z.getWireframeAttribute(G),ve===void 0)return;Ne=2}const De=G.drawRange,Te=G.attributes.position;let Je=De.start*Ne,rt=(De.start+De.count)*Ne;ne!==null&&(Je=Math.max(Je,ne.start*Ne),rt=Math.min(rt,(ne.start+ne.count)*Ne)),ve!==null?(Je=Math.max(Je,0),rt=Math.min(rt,ve.count)):Te!=null&&(Je=Math.max(Je,0),rt=Math.min(rt,Te.count));const Tt=rt-Je;if(Tt<0||Tt===1/0)return;mt.setup(U,z,me,G,ve);let bt,et=_e;if(ve!==null&&(bt=K.get(ve),et=Qe,et.setIndex(bt)),U.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*Ye()),et.setMode(k.LINES)):et.setMode(k.TRIANGLES);else if(U.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*Ye()),U.isLineSegments?et.setMode(k.LINES):U.isLineLoop?et.setMode(k.LINE_LOOP):et.setMode(k.LINE_STRIP)}else U.isPoints?et.setMode(k.POINTS):U.isSprite&&et.setMode(k.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,Dt=U._multiDrawCounts,ot=U._multiDrawCount,mn=ve?K.get(ve).bytesPerElement:1,pi=Ee.get(z).currentProgram.getUniforms();for(let Jt=0;Jt<ot;Jt++)pi.setValue(k,"_gl_DrawID",Jt),et.render(Ce[Jt]/mn,Dt[Jt])}else if(U.isInstancedMesh)et.renderInstances(Je,Tt,U.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Dt=Math.min(G.instanceCount,Ce);et.renderInstances(Je,Tt,Dt)}else et.render(Je,Tt)};function dt(M,N,G){M.transparent===!0&&M.side===2&&M.forceSinglePass===!1?(M.side=1,M.needsUpdate=!0,us(M,N,G),M.side=0,M.needsUpdate=!0,us(M,N,G),M.side=2):us(M,N,G)}this.compile=function(M,N,G=null){G===null&&(G=M),p=ke.get(G),p.init(N),w.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==G&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let le=0;le<ne.length;le++){const me=ne[le];dt(me,G,U),z.add(me)}else dt(ne,G,U),z.add(ne)}),p=w.pop(),z},this.compileAsync=function(M,N,G=null){const z=this.compile(M,N,G);return new Promise(U=>{function ne(){if(z.forEach(function(le){Ee.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){U(M);return}setTimeout(ne,10)}je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let pn=null;function An(M){pn&&pn(M)}function So(){Kn.stop()}function xo(){Kn.start()}const Kn=new Ml;Kn.setAnimationLoop(An),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(M){pn=M,W.setAnimationLoop(M),M===null?Kn.stop():Kn.start()},W.addEventListener("sessionstart",So),W.addEventListener("sessionend",xo),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,F),p=ke.get(M,w.length),p.init(N),w.push(p),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(be),pe=this.localClippingEnabled,ie=te.init(this.clippingPlanes,pe),m=Pe.get(M,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&cr(ne,N,-1/0,x.sortObjects)}cr(M,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(oe,fe),St=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,St&&Le.addToRenderList(m,M),this.info.render.frame++,ie===!0&&te.beginShadows();const G=p.state.shadowsArray;ge.render(G,M,N),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ne=N.cameras;if(U.length>0)for(let le=0,me=ne.length;le<me;le++){const ve=ne[le];Eo(z,U,M,ve)}St&&Le.render(M);for(let le=0,me=ne.length;le<me;le++){const ve=ne[le];bo(m,M,ve,ve.viewport)}}else U.length>0&&Eo(z,U,M,N),St&&Le.render(M),bo(m,M,N);F!==null&&P===0&&(E.updateMultisampleRenderTarget(F),E.updateRenderTargetMipmap(F)),M.isScene===!0&&M.onAfterRender(x,M,N),mt.resetDefaultState(),b=-1,S=null,w.pop(),w.length>0?(p=w[w.length-1],ie===!0&&te.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function cr(M,N,G,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){z&&ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(be);const le=X.update(M),me=M.material;me.visible&&m.push(M,le,me,G,ye.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const le=X.update(M),me=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ye.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ye.copy(le.boundingSphere.center)),ye.applyMatrix4(M.matrixWorld).applyMatrix4(be)),Array.isArray(me)){const ve=le.groups;for(let Ne=0,De=ve.length;Ne<De;Ne++){const Te=ve[Ne],Je=me[Te.materialIndex];Je&&Je.visible&&m.push(M,le,Je,G,ye.z,Te)}}else me.visible&&m.push(M,le,me,G,ye.z,null)}}const ne=M.children;for(let le=0,me=ne.length;le<me;le++)cr(ne[le],N,G,z)}function bo(M,N,G,z){const U=M.opaque,ne=M.transmissive,le=M.transparent;p.setupLightsView(G),ie===!0&&te.setGlobalState(x.clippingPlanes,G),z&&we.viewport(L.copy(z)),U.length>0&&ds(U,N,G),ne.length>0&&ds(ne,N,G),le.length>0&&ds(le,N,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Eo(M,N,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new di(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ne=p.state.transmissionRenderTarget[z.id],le=z.viewport||L;ne.setSize(le.z*x.transmissionResolutionScale,le.w*x.transmissionResolutionScale);const me=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(Y),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),St&&Le.render(G);const ve=x.toneMapping;x.toneMapping=0;const Ne=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ie===!0&&te.setGlobalState(x.clippingPlanes,z),ds(M,G,z),E.updateMultisampleRenderTarget(ne),E.updateRenderTargetMipmap(ne),je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Te=0,Je=N.length;Te<Je;Te++){const rt=N[Te],Tt=rt.object,bt=rt.geometry,et=rt.material,Ce=rt.group;if(et.side===2&&Tt.layers.test(z.layers)){const Dt=et.side;et.side=1,et.needsUpdate=!0,wo(Tt,G,z,bt,et,Ce),et.side=Dt,et.needsUpdate=!0,De=!0}}De===!0&&(E.updateMultisampleRenderTarget(ne),E.updateRenderTargetMipmap(ne))}x.setRenderTarget(me),x.setClearColor(Y,Q),Ne!==void 0&&(z.viewport=Ne),x.toneMapping=ve}function ds(M,N,G){const z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ne=M.length;U<ne;U++){const le=M[U],me=le.object,ve=le.geometry,Ne=le.group;let De=le.material;De.allowOverride===!0&&z!==null&&(De=z),me.layers.test(G.layers)&&wo(me,N,G,ve,De,Ne)}}function wo(M,N,G,z,U,ne){M.onBeforeRender(x,N,G,z,U,ne),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,N,G,z,M,ne),U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=1,U.needsUpdate=!0,x.renderBufferDirect(G,N,z,U,M,ne),U.side=0,U.needsUpdate=!0,x.renderBufferDirect(G,N,z,U,M,ne),U.side=2):x.renderBufferDirect(G,N,z,U,M,ne),M.onAfterRender(x,N,G,z,U,ne)}function us(M,N,G){N.isScene!==!0&&(N=Et);const z=Ee.get(M),U=p.state.lights,ne=p.state.shadowsArray,le=U.state.version,me=xe.getParameters(M,U.state,ne,N,G),ve=xe.getProgramCacheKey(me);let Ne=z.programs;z.environment=M.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(M.isMeshStandardMaterial?B:y).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Oe),Ne=new Map,z.programs=Ne);let De=Ne.get(ve);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===le)return Ao(M,me),De}else me.uniforms=xe.getUniforms(M),M.onBeforeCompile(me,x),De=xe.acquireProgram(me,ve),Ne.set(ve,De),z.uniforms=me.uniforms;const Te=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=te.uniform),Ao(M,me),z.needsLights=$l(M),z.lightsStateVersion=le,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function To(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=qs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Ao(M,N){const G=Ee.get(M);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function ql(M,N,G,z,U){N.isScene!==!0&&(N=Et),E.resetTextureUnits();const ne=N.fog,le=z.isMeshStandardMaterial?N.environment:null,me=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ni,ve=(z.isMeshStandardMaterial?B:y).get(z.envMap||le),Ne=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,rt=!!G.morphAttributes.color;let Tt=0;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const bt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=bt!==void 0?bt.length:0,Ce=Ee.get(z),Dt=p.state.lights;if(ie===!0&&(pe===!0||M!==S)){const Ot=M===S&&z.id===b;te.setState(z,M,Ot)}let ot=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Dt.state.version||Ce.outputColorSpace!==me||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==ve||z.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==te.numPlanes||Ce.numIntersection!==te.numIntersection)||Ce.vertexAlphas!==Ne||Ce.vertexTangents!==De||Ce.morphTargets!==Te||Ce.morphNormals!==Je||Ce.morphColors!==rt||Ce.toneMapping!==Tt||Ce.morphTargetsCount!==et)&&(ot=!0):(ot=!0,Ce.__version=z.version);let mn=Ce.currentProgram;ot===!0&&(mn=us(z,N,U));let pi=!1,Jt=!1,Gi=!1;const vt=mn.getUniforms(),an=Ce.uniforms;if(we.useProgram(mn.program)&&(pi=!0,Jt=!0,Gi=!0),z.id!==b&&(b=z.id,Jt=!0),pi||S!==M){we.buffers.depth.getReversed()?(re.copy(M.projectionMatrix),nc(re),ic(re),vt.setValue(k,"projectionMatrix",re)):vt.setValue(k,"projectionMatrix",M.projectionMatrix),vt.setValue(k,"viewMatrix",M.matrixWorldInverse);const qt=vt.map.cameraPosition;qt!==void 0&&qt.setValue(k,We.setFromMatrixPosition(M.matrixWorld)),Ke.logarithmicDepthBuffer&&vt.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&vt.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Jt=!0,Gi=!0)}if(U.isSkinnedMesh){vt.setOptional(k,U,"bindMatrix"),vt.setOptional(k,U,"bindMatrixInverse");const Ot=U.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),vt.setValue(k,"boneTexture",Ot.boneTexture,E))}U.isBatchedMesh&&(vt.setOptional(k,U,"batchingTexture"),vt.setValue(k,"batchingTexture",U._matricesTexture,E),vt.setOptional(k,U,"batchingIdTexture"),vt.setValue(k,"batchingIdTexture",U._indirectTexture,E),vt.setOptional(k,U,"batchingColorTexture"),U._colorsTexture!==null&&vt.setValue(k,"batchingColorTexture",U._colorsTexture,E));const ln=G.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ie.update(U,G,mn),(Jt||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,vt.setValue(k,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(an.envMap.value=ve,an.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(an.envMapIntensity.value=N.environmentIntensity),Jt&&(vt.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Xl(an,Gi),ne&&z.fog===!0&&ce.refreshFogUniforms(an,ne),ce.refreshMaterialUniforms(an,z,H,J,p.state.transmissionRenderTarget[M.id]),qs.upload(k,To(Ce),an,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qs.upload(k,To(Ce),an,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&vt.setValue(k,"center",U.center),vt.setValue(k,"modelViewMatrix",U.modelViewMatrix),vt.setValue(k,"normalMatrix",U.normalMatrix),vt.setValue(k,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ot=z.uniformsGroups;for(let qt=0,hr=Ot.length;qt<hr;qt++){const Qn=Ot[qt];I.update(Qn,mn),I.bind(Qn,mn)}}return mn}function Xl(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function $l(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,N,G){const z=Ee.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ee.get(M.texture).__webglTexture=N,Ee.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const G=Ee.get(M);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Yl=k.createFramebuffer();this.setRenderTarget=function(M,N=0,G=0){F=M,C=N,P=G;let z=!0,U=null,ne=!1,le=!1;if(M){const ve=Ee.get(M);if(ve.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(k.FRAMEBUFFER,null),z=!1;else if(ve.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(ve.__hasExternalTextures)E.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(ve.__boundDepthTexture!==Te){if(Te!==null&&Ee.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(le=!0);const De=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[N])?U=De[N][G]:U=De[N],ne=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?U=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[G]:U=De,L.copy(M.viewport),V.copy(M.scissor),O=M.scissorTest}else L.copy(Se).multiplyScalar(H).floor(),V.copy(Be).multiplyScalar(H).floor(),O=Ze;if(G!==0&&(U=Yl),we.bindFramebuffer(k.FRAMEBUFFER,U)&&z&&we.drawBuffers(M,U),we.viewport(L),we.scissor(V),we.setScissorTest(O),ne){const ve=Ee.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,G)}else if(le){const ve=Ee.get(M.texture),Ne=N;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ve.__webglTexture,G,Ne)}else if(M!==null&&G!==0){const ve=Ee.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ve.__webglTexture,G)}b=-1},this.readRenderTargetPixels=function(M,N,G,z,U,ne,le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){we.bindFramebuffer(k.FRAMEBUFFER,me);try{const ve=M.texture,Ne=ve.format,De=ve.type;if(!Ke.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&G>=0&&G<=M.height-U&&k.readPixels(N,G,z,U,ze.convert(Ne),ze.convert(De),ne)}finally{const ve=F!==null?Ee.get(F).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(M,N,G,z,U,ne,le){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me)if(N>=0&&N<=M.width-z&&G>=0&&G<=M.height-U){we.bindFramebuffer(k.FRAMEBUFFER,me);const ve=M.texture,Ne=ve.format,De=ve.type;if(!Ke.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Te),k.bufferData(k.PIXEL_PACK_BUFFER,ne.byteLength,k.STREAM_READ),k.readPixels(N,G,z,U,ze.convert(Ne),ze.convert(De),0);const Je=F!==null?Ee.get(F).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,Je);const rt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await tc(k,rt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Te),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ne),k.deleteBuffer(Te),k.deleteSync(rt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,G=0){const z=Math.pow(2,-G),U=Math.floor(M.image.width*z),ne=Math.floor(M.image.height*z),le=N!==null?N.x:0,me=N!==null?N.y:0;E.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,le,me,U,ne),we.unbindTexture()};const Kl=k.createFramebuffer(),Ql=k.createFramebuffer();this.copyTextureToTexture=function(M,N,G=null,z=null,U=0,ne=null){ne===null&&(U!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=U,U=0):ne=0);let le,me,ve,Ne,De,Te,Je,rt,Tt;const bt=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(G!==null)le=G.max.x-G.min.x,me=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,Ne=G.min.x,De=G.min.y,Te=G.isBox3?G.min.z:0;else{const ln=Math.pow(2,-U);le=Math.floor(bt.width*ln),me=Math.floor(bt.height*ln),M.isDataArrayTexture?ve=bt.depth:M.isData3DTexture?ve=Math.floor(bt.depth*ln):ve=1,Ne=0,De=0,Te=0}z!==null?(Je=z.x,rt=z.y,Tt=z.z):(Je=0,rt=0,Tt=0);const et=ze.convert(N.format),Ce=ze.convert(N.type);let Dt;N.isData3DTexture?(E.setTexture3D(N,0),Dt=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),Dt=k.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),Dt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);const ot=k.getParameter(k.UNPACK_ROW_LENGTH),mn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),pi=k.getParameter(k.UNPACK_SKIP_PIXELS),Jt=k.getParameter(k.UNPACK_SKIP_ROWS),Gi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,De),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Te);const vt=M.isDataArrayTexture||M.isData3DTexture,an=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const ln=Ee.get(M),Ot=Ee.get(N),qt=Ee.get(ln.__renderTarget),hr=Ee.get(Ot.__renderTarget);we.bindFramebuffer(k.READ_FRAMEBUFFER,qt.__webglFramebuffer),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let Qn=0;Qn<ve;Qn++)vt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,U,Te+Qn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.get(N).__webglTexture,ne,Tt+Qn)),k.blitFramebuffer(Ne,De,le,me,Je,rt,le,me,k.DEPTH_BUFFER_BIT,k.NEAREST);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||Ee.has(M)){const ln=Ee.get(M),Ot=Ee.get(N);we.bindFramebuffer(k.READ_FRAMEBUFFER,Kl),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ql);for(let qt=0;qt<ve;qt++)vt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,U,Te+qt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,U),an?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ot.__webglTexture,ne,Tt+qt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ot.__webglTexture,ne),U!==0?k.blitFramebuffer(Ne,De,le,me,Je,rt,le,me,k.COLOR_BUFFER_BIT,k.NEAREST):an?k.copyTexSubImage3D(Dt,ne,Je,rt,Tt+qt,Ne,De,le,me):k.copyTexSubImage2D(Dt,ne,Je,rt,Ne,De,le,me);we.bindFramebuffer(k.READ_FRAMEBUFFER,null),we.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else an?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(Dt,ne,Je,rt,Tt,le,me,ve,et,Ce,bt.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Dt,ne,Je,rt,Tt,le,me,ve,et,bt.data):k.texSubImage3D(Dt,ne,Je,rt,Tt,le,me,ve,et,Ce,bt):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ne,Je,rt,le,me,et,Ce,bt.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ne,Je,rt,bt.width,bt.height,et,bt.data):k.texSubImage2D(k.TEXTURE_2D,ne,Je,rt,le,me,et,Ce,bt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,pi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Gi),ne===0&&N.generateMipmaps&&k.generateMipmap(Dt),we.unbindTexture()},this.copyTextureToTexture3D=function(M,N,G=null,z=null,U=0){return Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,G,z,U)},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){C=0,P=0,F=null,we.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Me=16,Xe=72,wt=24,Cp=3;var _=(i=>(i[i.Air=0]="Air",i[i.Grass=1]="Grass",i[i.Dirt=2]="Dirt",i[i.Stone=3]="Stone",i[i.Sand=4]="Sand",i[i.Water=5]="Water",i[i.Log=6]="Log",i[i.Leaves=7]="Leaves",i[i.Ore=8]="Ore",i[i.Brick=9]="Brick",i[i.Planks=10]="Planks",i[i.CraftingTable=11]="CraftingTable",i[i.CoalOre=12]="CoalOre",i[i.CopperOre=13]="CopperOre",i[i.IronOre=14]="IronOre",i[i.GoldOre=15]="GoldOre",i[i.RedstoneOre=16]="RedstoneOre",i[i.LapisOre=17]="LapisOre",i[i.DiamondOre=18]="DiamondOre",i[i.EmeraldOre=19]="EmeraldOre",i[i.Furnace=20]="Furnace",i[i.Chest=21]="Chest",i[i.Torch=22]="Torch",i[i.Gravel=23]="Gravel",i[i.Bed=24]="Bed",i[i.Lava=25]="Lava",i[i.Obsidian=26]="Obsidian",i[i.Fire=27]="Fire",i[i.NetherPortal=28]="NetherPortal",i[i.RuinedPortalDebris=29]="RuinedPortalDebris",i[i.Netherrack=30]="Netherrack",i[i.NetherBrick=31]="NetherBrick",i[i.SoulSand=32]="SoulSand",i[i.Basalt=33]="Basalt",i[i.QuartzOre=34]="QuartzOre",i[i.NetherGoldOre=35]="NetherGoldOre",i[i.StoneBricks=36]="StoneBricks",i[i.CrackedStoneBricks=37]="CrackedStoneBricks",i[i.MossyStoneBricks=38]="MossyStoneBricks",i[i.Bookshelf=39]="Bookshelf",i[i.IronBars=40]="IronBars",i[i.EndPortalFrame=41]="EndPortalFrame",i[i.EndPortalFrameEye=42]="EndPortalFrameEye",i[i.EndPortal=43]="EndPortal",i[i.EndStone=44]="EndStone",i[i.EndStoneBricks=45]="EndStoneBricks",i[i.Bedrock=46]="Bedrock",i[i.EndCrystal=47]="EndCrystal",i[i.DragonEgg=48]="DragonEgg",i))(_||{}),ee=(i=>(i[i.GrassTop=0]="GrassTop",i[i.GrassSide=1]="GrassSide",i[i.Dirt=2]="Dirt",i[i.Stone=3]="Stone",i[i.Sand=4]="Sand",i[i.Water=5]="Water",i[i.LogSide=6]="LogSide",i[i.LogTop=7]="LogTop",i[i.Leaves=8]="Leaves",i[i.Ore=9]="Ore",i[i.Brick=10]="Brick",i[i.Planks=11]="Planks",i[i.CraftingTable=12]="CraftingTable",i[i.CoalOre=13]="CoalOre",i[i.CopperOre=14]="CopperOre",i[i.IronOre=15]="IronOre",i[i.GoldOre=16]="GoldOre",i[i.RedstoneOre=17]="RedstoneOre",i[i.LapisOre=18]="LapisOre",i[i.DiamondOre=19]="DiamondOre",i[i.EmeraldOre=20]="EmeraldOre",i[i.FurnaceFront=21]="FurnaceFront",i[i.FurnaceSide=22]="FurnaceSide",i[i.Chest=23]="Chest",i[i.Torch=24]="Torch",i[i.Gravel=25]="Gravel",i[i.Bed=26]="Bed",i[i.Lava=27]="Lava",i[i.Obsidian=28]="Obsidian",i[i.Fire=29]="Fire",i[i.NetherPortal=30]="NetherPortal",i[i.RuinedPortalDebris=31]="RuinedPortalDebris",i[i.Netherrack=32]="Netherrack",i[i.NetherBrick=33]="NetherBrick",i[i.SoulSand=34]="SoulSand",i[i.Basalt=35]="Basalt",i[i.QuartzOre=36]="QuartzOre",i[i.NetherGoldOre=37]="NetherGoldOre",i[i.StoneBricks=38]="StoneBricks",i[i.CrackedStoneBricks=39]="CrackedStoneBricks",i[i.MossyStoneBricks=40]="MossyStoneBricks",i[i.Bookshelf=41]="Bookshelf",i[i.IronBars=42]="IronBars",i[i.EndPortalFrame=43]="EndPortalFrame",i[i.EndPortalFrameEye=44]="EndPortalFrameEye",i[i.EndPortal=45]="EndPortal",i[i.EndStone=46]="EndStone",i[i.EndStoneBricks=47]="EndStoneBricks",i[i.Bedrock=48]="Bedrock",i[i.EndCrystal=49]="EndCrystal",i[i.DragonEgg=50]="DragonEgg",i))(ee||{});const Fe=i=>({top:i,bottom:i,north:i,south:i,east:i,west:i}),Yt={0:{id:"air",displayName:"공기",solid:!1,transparent:!0,fluid:!1,swatch:"#000000",tiles:Fe(2),hardness:0,drops:null},1:{id:"grass",displayName:"잔디",solid:!0,transparent:!1,fluid:!1,swatch:"#6eb45f",hardness:.6,drops:"dirt",preferredTool:"shovel",placeableItem:"grass_block",tiles:{top:0,bottom:2,north:1,south:1,east:1,west:1}},2:{id:"dirt",displayName:"흙",solid:!0,transparent:!1,fluid:!1,swatch:"#8c6241",tiles:Fe(2),hardness:.5,drops:"dirt",preferredTool:"shovel",placeableItem:"dirt"},3:{id:"stone",displayName:"돌",solid:!0,transparent:!1,fluid:!1,swatch:"#8b9290",tiles:Fe(3),hardness:1.5,drops:"stone",preferredTool:"pickaxe",requiredTool:"pickaxe",placeableItem:"stone"},4:{id:"sand",displayName:"모래",solid:!0,transparent:!1,fluid:!1,swatch:"#d9c987",tiles:Fe(4),hardness:.5,drops:"sand",preferredTool:"shovel",placeableItem:"sand"},5:{id:"water",displayName:"물",solid:!1,transparent:!0,fluid:!0,swatch:"#3f9fd0",tiles:Fe(5),hardness:100,drops:"water",placeableItem:"water"},6:{id:"log",displayName:"원목",solid:!0,transparent:!1,fluid:!1,swatch:"#8a6038",hardness:2,drops:"log",preferredTool:"axe",placeableItem:"log",tiles:{top:7,bottom:7,north:6,south:6,east:6,west:6}},7:{id:"leaves",displayName:"나뭇잎",solid:!0,transparent:!1,fluid:!1,swatch:"#4e9b5a",tiles:Fe(8),hardness:.2,drops:"leaves",placeableItem:"leaves"},8:{id:"ore",displayName:"구형 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#62c2c9",tiles:Fe(9),hardness:3,drops:"ore",preferredTool:"pickaxe",requiredTool:"pickaxe",placeableItem:"ore"},9:{id:"brick",displayName:"벽돌 블록",solid:!0,transparent:!1,fluid:!1,swatch:"#a8574f",tiles:Fe(10),hardness:2,drops:"brick",preferredTool:"pickaxe",placeableItem:"brick"},10:{id:"planks",displayName:"나무 판자",solid:!0,transparent:!1,fluid:!1,swatch:"#b9854b",tiles:Fe(11),hardness:2,drops:"planks",preferredTool:"axe",placeableItem:"planks"},11:{id:"crafting_table",displayName:"제작대",solid:!0,transparent:!1,fluid:!1,swatch:"#a46d3d",tiles:{top:12,bottom:11,north:12,south:12,east:12,west:12},hardness:2.5,drops:"crafting_table",preferredTool:"axe",placeableItem:"crafting_table",interactable:"crafting_table"},12:{id:"coal_ore",displayName:"석탄 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#4b4d4b",tiles:Fe(13),hardness:3,drops:"coal",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"coal_ore"},13:{id:"copper_ore",displayName:"구리 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#a76846",tiles:Fe(14),hardness:3,drops:"raw_copper",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"stone",placeableItem:"copper_ore"},14:{id:"iron_ore",displayName:"철 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#b08f75",tiles:Fe(15),hardness:3,drops:"raw_iron",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"stone",placeableItem:"iron_ore"},15:{id:"gold_ore",displayName:"금 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#d6aa35",tiles:Fe(16),hardness:3,drops:"raw_gold",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"iron",placeableItem:"gold_ore"},16:{id:"redstone_ore",displayName:"레드스톤 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#b53634",tiles:Fe(17),hardness:3,drops:"redstone_dust",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"iron",placeableItem:"redstone_ore"},17:{id:"lapis_ore",displayName:"청금석 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#345dbc",tiles:Fe(18),hardness:3,drops:"lapis_lazuli",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"stone",placeableItem:"lapis_ore"},18:{id:"diamond_ore",displayName:"다이아몬드 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#58d6d0",tiles:Fe(19),hardness:3,drops:"diamond",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"iron",placeableItem:"diamond_ore"},19:{id:"emerald_ore",displayName:"에메랄드 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#45bf62",tiles:Fe(20),hardness:3,drops:"emerald",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"iron",placeableItem:"emerald_ore"},20:{id:"furnace",displayName:"화로",solid:!0,transparent:!1,fluid:!1,swatch:"#686e6b",tiles:{top:22,bottom:22,north:21,south:21,east:22,west:22},hardness:3.5,drops:"furnace",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"furnace",interactable:"furnace"},21:{id:"chest",displayName:"상자",solid:!0,transparent:!1,fluid:!1,swatch:"#9b642f",tiles:Fe(23),hardness:2.5,drops:"chest",preferredTool:"axe",placeableItem:"chest",interactable:"chest"},22:{id:"torch",displayName:"횃불",solid:!1,transparent:!0,fluid:!1,swatch:"#f0a83c",tiles:Fe(24),hardness:.1,drops:"torch",placeableItem:"torch"},23:{id:"gravel",displayName:"자갈",solid:!0,transparent:!1,fluid:!1,swatch:"#7a7c7a",tiles:Fe(25),hardness:.6,drops:"gravel",preferredTool:"shovel",placeableItem:"gravel"},24:{id:"bed",displayName:"침대",solid:!0,transparent:!1,fluid:!1,swatch:"#c94646",tiles:Fe(26),hardness:.4,drops:"bed",preferredTool:"axe",placeableItem:"bed",interactable:"bed"},25:{id:"lava",displayName:"용암",solid:!1,transparent:!0,fluid:!1,swatch:"#e86a2b",tiles:Fe(27),hardness:100,drops:null},26:{id:"obsidian",displayName:"흑요석",solid:!0,transparent:!1,fluid:!1,swatch:"#211a31",tiles:Fe(28),hardness:70,drops:"obsidian",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"diamond",placeableItem:"obsidian"},27:{id:"fire",displayName:"불",solid:!1,transparent:!0,fluid:!1,swatch:"#ff9c2e",tiles:Fe(29),hardness:.1,drops:null},28:{id:"nether_portal",displayName:"지옥문",solid:!1,transparent:!0,fluid:!1,swatch:"#7143d9",tiles:Fe(30),hardness:100,drops:null},29:{id:"ruined_portal_debris",displayName:"폐허 포털 잔해",solid:!0,transparent:!1,fluid:!1,swatch:"#2f263a",tiles:Fe(31),hardness:18,drops:"obsidian",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"diamond",placeableItem:"obsidian"},30:{id:"netherrack",displayName:"네더랙",solid:!0,transparent:!1,fluid:!1,swatch:"#7f2f2d",tiles:Fe(32),hardness:.55,drops:"netherrack",preferredTool:"pickaxe",placeableItem:"netherrack"},31:{id:"nether_brick",displayName:"네더 벽돌",solid:!0,transparent:!1,fluid:!1,swatch:"#3c1b24",tiles:Fe(33),hardness:2,drops:"nether_brick",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"nether_brick"},32:{id:"soul_sand",displayName:"영혼 모래",solid:!0,transparent:!1,fluid:!1,swatch:"#6e5042",tiles:Fe(34),hardness:.5,drops:"soul_sand",preferredTool:"shovel",placeableItem:"soul_sand"},33:{id:"basalt",displayName:"현무암",solid:!0,transparent:!1,fluid:!1,swatch:"#4a4648",tiles:Fe(35),hardness:1.25,drops:"basalt",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"basalt"},34:{id:"quartz_ore",displayName:"네더 석영 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#b36f67",tiles:Fe(36),hardness:3,drops:"nether_quartz",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"quartz_ore"},35:{id:"nether_gold_ore",displayName:"네더 금 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#ad5b35",tiles:Fe(37),hardness:3,drops:"gold_nugget",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"nether_gold_ore"},36:{id:"stone_bricks",displayName:"석재 벽돌",solid:!0,transparent:!1,fluid:!1,swatch:"#747b78",tiles:Fe(38),hardness:1.5,drops:"stone_bricks",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"stone_bricks"},37:{id:"cracked_stone_bricks",displayName:"금 간 석재 벽돌",solid:!0,transparent:!1,fluid:!1,swatch:"#666d6a",tiles:Fe(39),hardness:1.5,drops:"cracked_stone_bricks",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"cracked_stone_bricks"},38:{id:"mossy_stone_bricks",displayName:"이끼 낀 석재 벽돌",solid:!0,transparent:!1,fluid:!1,swatch:"#6f8068",tiles:Fe(40),hardness:1.5,drops:"mossy_stone_bricks",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"mossy_stone_bricks"},39:{id:"bookshelf",displayName:"책장",solid:!0,transparent:!1,fluid:!1,swatch:"#8f5c32",tiles:Fe(41),hardness:1.5,drops:"book",preferredTool:"axe",placeableItem:"bookshelf"},40:{id:"iron_bars",displayName:"철창",solid:!0,transparent:!0,fluid:!1,swatch:"#b7c0bd",tiles:Fe(42),hardness:5,drops:"iron_bars",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"iron_bars"},41:{id:"end_portal_frame",displayName:"엔드 포털 프레임",solid:!0,transparent:!1,fluid:!1,swatch:"#6d8d68",tiles:Fe(43),hardness:100,drops:null,requiredTool:"pickaxe",requiredTier:"diamond"},42:{id:"end_portal_frame_eye",displayName:"눈이 꽂힌 엔드 포털 프레임",solid:!0,transparent:!1,fluid:!1,swatch:"#83c98b",tiles:Fe(44),hardness:100,drops:null,requiredTool:"pickaxe",requiredTier:"diamond"},43:{id:"end_portal",displayName:"엔드 포털",solid:!1,transparent:!0,fluid:!1,swatch:"#07100f",tiles:Fe(45),hardness:100,drops:null},44:{id:"end_stone",displayName:"엔드 스톤",solid:!0,transparent:!1,fluid:!1,swatch:"#d7d2a2",tiles:Fe(46),hardness:3,drops:"end_stone",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"end_stone"},45:{id:"end_stone_bricks",displayName:"엔드 스톤 벽돌",solid:!0,transparent:!1,fluid:!1,swatch:"#cfc78d",tiles:Fe(47),hardness:3,drops:"end_stone_bricks",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"end_stone_bricks"},46:{id:"bedrock",displayName:"기반암",solid:!0,transparent:!1,fluid:!1,swatch:"#34383a",tiles:Fe(48),hardness:100,drops:null},47:{id:"end_crystal",displayName:"엔드 수정",solid:!1,transparent:!0,fluid:!1,swatch:"#f5d7ff",tiles:Fe(49),hardness:.1,drops:null},48:{id:"dragon_egg",displayName:"드래곤 알",solid:!0,transparent:!1,fluid:!1,swatch:"#17121d",tiles:Fe(50),hardness:3,drops:"dragon_egg"}};function Vr(i,e,t){return`${i},${e},${t}`}function Ca(i){const[e,t,n]=i.split(",").map(Number);return[e,t,n]}function Rp(i){return i!==0}function Xs(i){return Yt[i].solid}const lt={grass_block:{id:"grass_block",name:"잔디 블록",maxStack:64,color:"#67ad58",placeBlock:_.Grass},dirt:{id:"dirt",name:"흙",maxStack:64,color:"#7b5237",placeBlock:_.Dirt},stone:{id:"stone",name:"돌",maxStack:64,color:"#858d8a",placeBlock:_.Stone},sand:{id:"sand",name:"모래",maxStack:64,color:"#d4c682",placeBlock:_.Sand},gravel:{id:"gravel",name:"자갈",maxStack:64,color:"#7a7c7a",placeBlock:_.Gravel},water:{id:"water",name:"물",maxStack:64,color:"#2e9bc9",placeBlock:_.Water},obsidian:{id:"obsidian",name:"흑요석",maxStack:64,color:"#211a31",placeBlock:_.Obsidian},netherrack:{id:"netherrack",name:"네더랙",maxStack:64,color:"#7f2f2d",placeBlock:_.Netherrack},nether_brick:{id:"nether_brick",name:"네더 벽돌",maxStack:64,color:"#3c1b24",placeBlock:_.NetherBrick},soul_sand:{id:"soul_sand",name:"영혼 모래",maxStack:64,color:"#6e5042",placeBlock:_.SoulSand},basalt:{id:"basalt",name:"현무암",maxStack:64,color:"#4a4648",placeBlock:_.Basalt},log:{id:"log",name:"원목",maxStack:64,color:"#805331",placeBlock:_.Log},leaves:{id:"leaves",name:"나뭇잎",maxStack:64,color:"#448f50",placeBlock:_.Leaves},ore:{id:"ore",name:"구형 광석",maxStack:64,color:"#59bdc4",placeBlock:_.Ore},brick:{id:"brick",name:"벽돌 블록",maxStack:64,color:"#a65049",placeBlock:_.Brick},planks:{id:"planks",name:"나무 판자",maxStack:64,color:"#b9854b",placeBlock:_.Planks},stick:{id:"stick",name:"막대기",maxStack:64,color:"#b98a55"},crafting_table:{id:"crafting_table",name:"제작대",maxStack:64,color:"#a46d3d",placeBlock:_.CraftingTable},coal_ore:{id:"coal_ore",name:"석탄 광석",maxStack:64,color:"#4b4d4b",placeBlock:_.CoalOre},copper_ore:{id:"copper_ore",name:"구리 광석",maxStack:64,color:"#a76846",placeBlock:_.CopperOre},iron_ore:{id:"iron_ore",name:"철 광석",maxStack:64,color:"#b08f75",placeBlock:_.IronOre},gold_ore:{id:"gold_ore",name:"금 광석",maxStack:64,color:"#d6aa35",placeBlock:_.GoldOre},redstone_ore:{id:"redstone_ore",name:"레드스톤 광석",maxStack:64,color:"#b53634",placeBlock:_.RedstoneOre},lapis_ore:{id:"lapis_ore",name:"청금석 광석",maxStack:64,color:"#345dbc",placeBlock:_.LapisOre},diamond_ore:{id:"diamond_ore",name:"다이아몬드 광석",maxStack:64,color:"#58d6d0",placeBlock:_.DiamondOre},emerald_ore:{id:"emerald_ore",name:"에메랄드 광석",maxStack:64,color:"#45bf62",placeBlock:_.EmeraldOre},quartz_ore:{id:"quartz_ore",name:"네더 석영 광석",maxStack:64,color:"#b36f67",placeBlock:_.QuartzOre},nether_gold_ore:{id:"nether_gold_ore",name:"네더 금 광석",maxStack:64,color:"#ad5b35",placeBlock:_.NetherGoldOre},stone_bricks:{id:"stone_bricks",name:"석재 벽돌",maxStack:64,color:"#747b78",placeBlock:_.StoneBricks},cracked_stone_bricks:{id:"cracked_stone_bricks",name:"금 간 석재 벽돌",maxStack:64,color:"#666d6a",placeBlock:_.CrackedStoneBricks},mossy_stone_bricks:{id:"mossy_stone_bricks",name:"이끼 낀 석재 벽돌",maxStack:64,color:"#6f8068",placeBlock:_.MossyStoneBricks},bookshelf:{id:"bookshelf",name:"책장",maxStack:64,color:"#8f5c32",placeBlock:_.Bookshelf},iron_bars:{id:"iron_bars",name:"철창",maxStack:64,color:"#b7c0bd",placeBlock:_.IronBars},end_portal_frame:{id:"end_portal_frame",name:"엔드 포털 프레임",maxStack:64,color:"#6d8d68"},end_stone:{id:"end_stone",name:"엔드 스톤",maxStack:64,color:"#d7d2a2",placeBlock:_.EndStone},end_stone_bricks:{id:"end_stone_bricks",name:"엔드 스톤 벽돌",maxStack:64,color:"#cfc78d",placeBlock:_.EndStoneBricks},end_crystal:{id:"end_crystal",name:"엔드 수정",maxStack:64,color:"#f5d7ff"},dragon_egg:{id:"dragon_egg",name:"드래곤 알",maxStack:1,color:"#17121d"},coal:{id:"coal",name:"석탄",maxStack:64,color:"#2e3130"},raw_copper:{id:"raw_copper",name:"구리 원석",maxStack:64,color:"#c9794a"},raw_iron:{id:"raw_iron",name:"철 원석",maxStack:64,color:"#c2a38d"},raw_gold:{id:"raw_gold",name:"금 원석",maxStack:64,color:"#e1b845"},copper_ingot:{id:"copper_ingot",name:"구리 주괴",maxStack:64,color:"#d98b5a"},iron_ingot:{id:"iron_ingot",name:"철 주괴",maxStack:64,color:"#c9d1d1"},gold_ingot:{id:"gold_ingot",name:"금 주괴",maxStack:64,color:"#f0c747"},redstone_dust:{id:"redstone_dust",name:"레드스톤 가루",maxStack:64,color:"#d8423a"},lapis_lazuli:{id:"lapis_lazuli",name:"청금석",maxStack:64,color:"#365bc8"},diamond:{id:"diamond",name:"다이아몬드",maxStack:64,color:"#65e0dc"},emerald:{id:"emerald",name:"에메랄드",maxStack:64,color:"#4bd66d"},nether_quartz:{id:"nether_quartz",name:"네더 석영",maxStack:64,color:"#e8dfcf"},gold_nugget:{id:"gold_nugget",name:"금 조각",maxStack:64,color:"#f0c747"},furnace:{id:"furnace",name:"화로",maxStack:64,color:"#686e6b",placeBlock:_.Furnace},chest:{id:"chest",name:"상자",maxStack:64,color:"#9b642f",placeBlock:_.Chest},torch:{id:"torch",name:"횃불",maxStack:64,color:"#f0a83c",placeBlock:_.Torch},bed:{id:"bed",name:"침대",maxStack:1,color:"#c94646",placeBlock:_.Bed},bucket:{id:"bucket",name:"양동이",maxStack:1,color:"#bfc8c8"},water_bucket:{id:"water_bucket",name:"물 양동이",maxStack:1,color:"#4bb5e3"},lava_bucket:{id:"lava_bucket",name:"용암 양동이",maxStack:1,color:"#e86a2b"},flint_and_steel:{id:"flint_and_steel",name:"부싯돌과 부시",maxStack:1,color:"#c9d1d1",durability:64},blaze_rod:{id:"blaze_rod",name:"블레이즈 막대",maxStack:64,color:"#f0a83c"},blaze_powder:{id:"blaze_powder",name:"블레이즈 가루",maxStack:64,color:"#f4c35a"},ender_pearl:{id:"ender_pearl",name:"엔더 진주",maxStack:16,color:"#1f8c7d"},eye_of_ender:{id:"eye_of_ender",name:"엔더의 눈",maxStack:64,color:"#79d6a8"},paper:{id:"paper",name:"종이",maxStack:64,color:"#eee8cf"},book:{id:"book",name:"책",maxStack:64,color:"#7b4a30"},wooden_pickaxe:{id:"wooden_pickaxe",name:"나무 곡괭이",maxStack:1,color:"#c28a4e",toolKind:"pickaxe",toolTier:"wood",miningSpeed:2.2,durability:59,combat:{damage:3,cooldown:.9}},stone_pickaxe:{id:"stone_pickaxe",name:"돌 곡괭이",maxStack:1,color:"#9aa09d",toolKind:"pickaxe",toolTier:"stone",miningSpeed:4,durability:131,combat:{damage:4,cooldown:.9}},iron_pickaxe:{id:"iron_pickaxe",name:"철 곡괭이",maxStack:1,color:"#c7d0cf",toolKind:"pickaxe",toolTier:"iron",miningSpeed:6,durability:250,combat:{damage:5,cooldown:.9}},diamond_pickaxe:{id:"diamond_pickaxe",name:"다이아몬드 곡괭이",maxStack:1,color:"#65e0dc",toolKind:"pickaxe",toolTier:"diamond",miningSpeed:8,durability:1561,combat:{damage:6,cooldown:.9}},wooden_axe:{id:"wooden_axe",name:"나무 도끼",maxStack:1,color:"#c28a4e",toolKind:"axe",toolTier:"wood",miningSpeed:2,durability:59,combat:{damage:7,cooldown:1.25}},stone_axe:{id:"stone_axe",name:"돌 도끼",maxStack:1,color:"#9aa09d",toolKind:"axe",toolTier:"stone",miningSpeed:4,durability:131,combat:{damage:8,cooldown:1.3}},wooden_shovel:{id:"wooden_shovel",name:"나무 삽",maxStack:1,color:"#c28a4e",toolKind:"shovel",toolTier:"wood",miningSpeed:2,durability:59,combat:{damage:2.5,cooldown:.85}},stone_shovel:{id:"stone_shovel",name:"돌 삽",maxStack:1,color:"#9aa09d",toolKind:"shovel",toolTier:"stone",miningSpeed:4,durability:131,combat:{damage:3.5,cooldown:.85}},wooden_sword:{id:"wooden_sword",name:"나무 검",maxStack:1,color:"#b9854b",toolKind:"sword",toolTier:"wood",durability:59,combat:{damage:4,cooldown:.62,range:4.8}},stone_sword:{id:"stone_sword",name:"돌 검",maxStack:1,color:"#9aa09d",toolKind:"sword",toolTier:"stone",durability:131,combat:{damage:5,cooldown:.62,range:4.8}},copper_sword:{id:"copper_sword",name:"구리 검",maxStack:1,color:"#d98b5a",toolKind:"sword",toolTier:"copper",durability:191,combat:{damage:5,cooldown:.6,range:4.8}},iron_sword:{id:"iron_sword",name:"철 검",maxStack:1,color:"#c9d1d1",toolKind:"sword",toolTier:"iron",durability:250,combat:{damage:6,cooldown:.6,range:4.8}},golden_sword:{id:"golden_sword",name:"금 검",maxStack:1,color:"#f0c747",toolKind:"sword",toolTier:"gold",durability:32,combat:{damage:4,cooldown:.52,range:4.8}},diamond_sword:{id:"diamond_sword",name:"다이아몬드 검",maxStack:1,color:"#65e0dc",toolKind:"sword",toolTier:"diamond",durability:1561,combat:{damage:7,cooldown:.56,range:5}},bow:{id:"bow",name:"활",maxStack:1,color:"#9b6638",toolKind:"bow",durability:384,combat:{damage:5,cooldown:.9,range:30}},arrow:{id:"arrow",name:"화살",maxStack:64,color:"#d8d3c0",projectile:{damage:5}},shield:{id:"shield",name:"방패",maxStack:1,color:"#a9763d",toolKind:"shield",durability:336,equipSlot:"offhand"},shears:{id:"shears",name:"가위",maxStack:1,color:"#c9d1d1",toolKind:"shears",toolTier:"iron",durability:238,combat:{damage:2,cooldown:.75}},leather_helmet:yt("leather_helmet","가죽 모자","#8f5b3c","head",1,0,55),leather_chestplate:yt("leather_chestplate","가죽 튜닉","#8f5b3c","chest",3,0,80),leather_leggings:yt("leather_leggings","가죽 바지","#8f5b3c","legs",2,0,75),leather_boots:yt("leather_boots","가죽 장화","#8f5b3c","feet",1,0,65),copper_helmet:yt("copper_helmet","구리 투구","#d98b5a","head",2,0,121),copper_chestplate:yt("copper_chestplate","구리 흉갑","#d98b5a","chest",5,0,176),copper_leggings:yt("copper_leggings","구리 각반","#d98b5a","legs",4,0,165),copper_boots:yt("copper_boots","구리 부츠","#d98b5a","feet",2,0,143),chainmail_helmet:yt("chainmail_helmet","사슬 투구","#aab1ad","head",2,0,165),chainmail_chestplate:yt("chainmail_chestplate","사슬 흉갑","#aab1ad","chest",5,0,240),chainmail_leggings:yt("chainmail_leggings","사슬 각반","#aab1ad","legs",4,0,225),chainmail_boots:yt("chainmail_boots","사슬 부츠","#aab1ad","feet",1,0,195),iron_helmet:yt("iron_helmet","철 투구","#c9d1d1","head",2,0,165),iron_chestplate:yt("iron_chestplate","철 흉갑","#c9d1d1","chest",6,0,240),iron_leggings:yt("iron_leggings","철 각반","#c9d1d1","legs",5,0,225),iron_boots:yt("iron_boots","철 부츠","#c9d1d1","feet",2,0,195),golden_helmet:yt("golden_helmet","금 투구","#f0c747","head",2,0,77),golden_chestplate:yt("golden_chestplate","금 흉갑","#f0c747","chest",5,0,112),golden_leggings:yt("golden_leggings","금 각반","#f0c747","legs",3,0,105),golden_boots:yt("golden_boots","금 부츠","#f0c747","feet",1,0,91),diamond_helmet:yt("diamond_helmet","다이아몬드 투구","#65e0dc","head",3,2,363),diamond_chestplate:yt("diamond_chestplate","다이아몬드 흉갑","#65e0dc","chest",8,2,528),diamond_leggings:yt("diamond_leggings","다이아몬드 각반","#65e0dc","legs",6,2,495),diamond_boots:yt("diamond_boots","다이아몬드 부츠","#65e0dc","feet",3,2,429),leather:{id:"leather",name:"가죽",maxStack:64,color:"#8f5b3c"},wool:{id:"wool",name:"양털",maxStack:64,color:"#e9e6d7"},raw_beef:hn("raw_beef","익히지 않은 소고기","#c5524b",3,1.8),steak:hn("steak","스테이크","#8e402d",8,12.8),raw_porkchop:hn("raw_porkchop","익히지 않은 돼지고기","#d47676",3,1.8),cooked_porkchop:hn("cooked_porkchop","익힌 돼지고기","#b15d38",8,12.8),raw_mutton:hn("raw_mutton","익히지 않은 양고기","#b84d53",2,1.2),cooked_mutton:hn("cooked_mutton","익힌 양고기","#9c4d34",6,9.6),raw_chicken:hn("raw_chicken","익히지 않은 닭고기","#d9b6a0",2,1.2),cooked_chicken:hn("cooked_chicken","익힌 닭고기","#d5a35d",6,7.2),feather:{id:"feather",name:"깃털",maxStack:64,color:"#e8e2d2"},egg:{id:"egg",name:"달걀",maxStack:16,color:"#eee8cf"},bone:{id:"bone",name:"뼈",maxStack:64,color:"#e4dfc8"},string:{id:"string",name:"실",maxStack:64,color:"#d9d9d9"},spider_eye:hn("spider_eye","거미 눈","#8b2e6f",2,3.2),gunpowder:{id:"gunpowder",name:"화약",maxStack:64,color:"#525252"},rotten_flesh:hn("rotten_flesh","썩은 살점","#796036",4,.8),flint:{id:"flint",name:"부싯돌",maxStack:64,color:"#3e4548"},apple:hn("apple","사과","#cf3c38",4,2.4),bread:hn("bread","빵","#d7a85a",5,6)};function yt(i,e,t,n,s,r,o){return{id:i,name:e,maxStack:1,color:t,equipSlot:n,durability:o,armor:{points:s,toughness:r}}}function hn(i,e,t,n,s){return{id:i,name:e,maxStack:64,color:t,food:{hunger:n,saturation:s}}}function ii(i){return i?{...i}:null}function Nn(i,e){return!!(i&&e&&i.item===e.item&&i.durability===e.durability)}function sn(i){return lt[i].maxStack}function Pp(i){return lt[i].placeBlock??null}const rr=36,Vt=27,kp=9;function wl(){return{head:null,chest:null,legs:null,feet:null}}function Yi(){return{slots:Array.from({length:rr},()=>null),armorSlots:wl(),offhand:null,cursor:null,selectedHotbarSlot:0}}function Ra(i){const e=Array.from({length:rr},(n,s)=>ii(i.slots[s]??null)),t=i.armorSlots??wl();return{slots:e,armorSlots:{head:ii(t.head??null),chest:ii(t.chest??null),legs:ii(t.legs??null),feet:ii(t.feet??null)},offhand:ii(i.offhand??null),cursor:ii(i.cursor),selectedHotbarSlot:Math.max(0,Math.min(kp-1,i.selectedHotbarSlot??0))}}function Sn(i){return i.slots[Vt+i.selectedHotbarSlot]??null}function $t(i,e){let t={...e};const r=[[Vt,rr],[0,Vt]];for(const[o,a]of r)for(let l=o;l<a;l+=1){const c=i.slots[l];if(!c||!Nn(c,t))continue;const h=sn(c.item),d=Math.min(h-c.count,t.count);if(c.count+=d,t.count-=d,t.count<=0)return null}for(const[o,a]of r)for(let l=o;l<a;l+=1){if(i.slots[l])continue;const c=Math.min(sn(t.item),t.count);if(i.slots[l]={...t,count:c},t.count-=c,t.count<=0)return null}return t}function er(i,e,t){if(ui(i,e)<t)return!1;let n=t;for(const s of i.slots){if(!s||s.item!==e)continue;const r=Math.min(s.count,n);if(s.count-=r,n-=r,s.count<=0){const o=i.slots.indexOf(s);i.slots[o]=null}if(n<=0)return!0}return!0}function ui(i,e){return i.slots.reduce((t,n)=>t+((n==null?void 0:n.item)===e?n.count:0),0)}function tr(i,e){if(!e)return!0;const t=lt[e.item];return i==="offhand"?t.equipSlot==="offhand"||e.item==="torch":t.equipSlot===i}function Lp(i,e,t){const n=i.slots[e]??null,s=i.cursor;if(t===0){if(!s){i.cursor=n,i.slots[e]=null;return}if(!n){i.slots[e]=s,i.cursor=null;return}if(Nn(n,s)){const r=sn(n.item),o=Math.min(r-n.count,s.count);n.count+=o,s.count-=o,s.count<=0&&(i.cursor=null);return}i.slots[e]=s,i.cursor=n;return}if(!s&&n){const r=Math.ceil(n.count/2);i.cursor={...n,count:r},n.count-=r,n.count<=0&&(i.slots[e]=null);return}if(s&&!n){i.slots[e]={...s,count:1},s.count-=1,s.count<=0&&(i.cursor=null);return}s&&n&&Nn(n,s)&&n.count<sn(n.item)&&(n.count+=1,s.count-=1,s.count<=0&&(i.cursor=null))}function Dp(i,e){const t=i.slots[e];if(!t)return;const n=lt[t.item];if(n.equipSlot&&n.equipSlot!=="offhand"&&!i.armorSlots[n.equipSlot]){i.armorSlots[n.equipSlot]=t,i.slots[e]=null;return}if((n.equipSlot==="offhand"||t.item==="torch")&&!i.offhand){i.offhand=t,i.slots[e]=null;return}const r=e>=Vt?[[0,Vt]]:[[Vt,rr],[0,Vt]];let o={...t};i.slots[e]=null;for(const[a,l]of r){for(let c=a;c<l;c+=1){const h=i.slots[c];if(!h||!Nn(h,o))continue;const d=Math.min(sn(h.item)-h.count,o.count);if(h.count+=d,o.count-=d,o.count<=0)return}for(let c=a;c<l;c+=1){if(i.slots[c])continue;const h=Math.min(sn(o.item),o.count);if(i.slots[c]={...o,count:h},o.count-=h,o.count<=0)return}}i.slots[e]=o}function Ip(i,e,t){Tl(()=>i.armorSlots[e],n=>{i.armorSlots[e]=n},n=>tr(e,n),i,t)}function Np(i,e){Tl(()=>i.offhand,t=>{i.offhand=t},t=>tr("offhand",t),i,e)}function Fp(i,e,t){const n=Vt+t,s=i.slots[n];i.slots[n]=i.slots[e],i.slots[e]=s}function Tl(i,e,t,n,s){if(s===2)return;const r=i(),o=n.cursor;if(!o){n.cursor=r,e(null);return}if(t(o)){if(!r){e(o),n.cursor=null;return}e(o),n.cursor=r}}class Up{constructor(e){D(this,"keys",new Set);D(this,"selectedSlot",0);D(this,"onPointerLockChange");D(this,"onSelectedSlotChange");D(this,"movementX",0);D(this,"movementY",0);D(this,"touchLookActive",!1);D(this,"touchLookPointerId",null);D(this,"touchLookX",0);D(this,"touchLookY",0);D(this,"touchMouseBlockUntil",0);D(this,"virtualMove",{strafe:0,forward:0});D(this,"virtualKeys",new Set);D(this,"primaryQueued",!1);D(this,"secondaryQueued",!1);D(this,"primaryHeld",!1);D(this,"secondaryHeld",!1);D(this,"pressed",new Set);D(this,"element");D(this,"handleKeyDown",e=>{if(this.shouldCaptureKeyboard(e)&&(e.preventDefault(),e.stopPropagation()),!this.isEditableTarget(e.target)&&(this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),e.code.startsWith("Digit"))){const t=Number(e.code.replace("Digit",""));t>=1&&t<=9&&this.setSelectedSlot(t-1)}});D(this,"handleKeyUp",e=>{this.shouldCaptureKeyboard(e)&&(e.preventDefault(),e.stopPropagation()),!this.isEditableTarget(e.target)&&this.keys.delete(e.code)});D(this,"handleBlur",()=>{this.keys.clear(),this.pressed.clear(),this.virtualKeys.clear(),this.virtualMove={strafe:0,forward:0},this.primaryHeld=!1,this.secondaryHeld=!1,this.touchLookActive=!1,this.touchLookPointerId=null});D(this,"handlePointerLockChange",()=>{var e;(e=this.onPointerLockChange)==null||e.call(this,{locked:this.pointerLocked})});D(this,"handleMouseMove",e=>{this.pointerLocked&&(this.movementX+=e.movementX,this.movementY+=e.movementY)});D(this,"handlePointerDown",e=>{var t,n;e.pointerType!=="mouse"&&(this.touchMouseBlockUntil=Date.now()+700,this.touchLookActive=!0,this.touchLookPointerId=e.pointerId,this.touchLookX=e.clientX,this.touchLookY=e.clientY,(n=(t=this.element).setPointerCapture)==null||n.call(t,e.pointerId),e.preventDefault())});D(this,"handlePointerMove",e=>{if(!this.touchLookActive||e.pointerId!==this.touchLookPointerId)return;const t=e.clientX-this.touchLookX,n=e.clientY-this.touchLookY;this.touchLookX=e.clientX,this.touchLookY=e.clientY,this.movementX+=t*1.85,this.movementY+=n*1.85,e.preventDefault()});D(this,"handlePointerUp",e=>{e.pointerId===this.touchLookPointerId&&(this.touchLookActive=!1,this.touchLookPointerId=null,e.preventDefault())});D(this,"handleMouseDown",e=>{if(Date.now()<this.touchMouseBlockUntil){e.preventDefault();return}if(!this.pointerLocked){this.requestPointerLock();return}e.button===0&&(this.primaryQueued=!0,this.primaryHeld=!0),e.button===2&&(this.secondaryQueued=!0,this.secondaryHeld=!0)});D(this,"handleMouseUp",e=>{e.button===0&&(this.primaryHeld=!1),e.button===2&&(this.secondaryHeld=!1)});D(this,"handleWheel",e=>{e.preventDefault();const t=e.deltaY>0?1:-1;this.setSelectedSlot((this.selectedSlot+t+9)%9)});D(this,"preventContextMenu",e=>{e.preventDefault()});this.element=e,this.attach()}get pointerLocked(){return document.pointerLockElement===this.element}get touchControlsPreferred(){var t,n;return navigator.maxTouchPoints>0&&Math.min(window.innerWidth,window.innerHeight)<=900||((n=(t=window.matchMedia)==null?void 0:t.call(window,"(pointer: coarse)"))==null?void 0:n.matches)===!0||this.touchLookActive}requestPointerLock(){this.touchControlsPreferred||this.element.requestPointerLock()}consumeLook(){const e={movementX:this.movementX,movementY:this.movementY};return this.movementX=0,this.movementY=0,e}consumeActions(){const e={primary:this.primaryQueued,primaryHeld:this.primaryHeld,secondary:this.secondaryQueued,secondaryHeld:this.secondaryHeld};return this.primaryQueued=!1,this.secondaryQueued=!1,e}isDown(e){return this.keys.has(e)||this.virtualKeys.has(e)}moveAxis(){let e=this.virtualMove.strafe,t=this.virtualMove.forward;this.keys.has("KeyW")&&(t+=1),this.keys.has("KeyS")&&(t-=1),this.keys.has("KeyD")&&(e+=1),this.keys.has("KeyA")&&(e-=1);const n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),{strafe:e,forward:t}}setVirtualMove(e,t){const n=Math.hypot(e,t);if(n>1){this.virtualMove={strafe:e/n,forward:t/n};return}this.virtualMove={strafe:e,forward:t}}setVirtualKey(e,t){if(t){!this.virtualKeys.has(e)&&!this.keys.has(e)&&this.pressed.add(e),this.virtualKeys.add(e);return}this.virtualKeys.delete(e)}setVirtualAction(e,t){if(e==="primary"){t&&!this.primaryHeld&&(this.primaryQueued=!0),this.primaryHeld=t;return}t&&!this.secondaryHeld&&(this.secondaryQueued=!0),this.secondaryHeld=t}setSelectedSlot(e){var t;this.selectedSlot=Math.max(0,Math.min(8,e)),(t=this.onSelectedSlotChange)==null||t.call(this,this.selectedSlot)}consumePressed(e){const t=this.pressed.has(e);return this.pressed.delete(e),t}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur),document.removeEventListener("pointerlockchange",this.handlePointerLockChange),document.removeEventListener("mousemove",this.handleMouseMove),this.element.removeEventListener("pointerdown",this.handlePointerDown),window.removeEventListener("pointermove",this.handlePointerMove),window.removeEventListener("pointerup",this.handlePointerUp),window.removeEventListener("pointercancel",this.handlePointerUp),this.element.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),this.element.removeEventListener("wheel",this.handleWheel),this.element.removeEventListener("contextmenu",this.preventContextMenu)}attach(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur),document.addEventListener("pointerlockchange",this.handlePointerLockChange),document.addEventListener("mousemove",this.handleMouseMove),this.element.addEventListener("pointerdown",this.handlePointerDown),window.addEventListener("pointermove",this.handlePointerMove,{passive:!1}),window.addEventListener("pointerup",this.handlePointerUp),window.addEventListener("pointercancel",this.handlePointerUp),this.element.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handleMouseUp),this.element.addEventListener("wheel",this.handleWheel,{passive:!1}),this.element.addEventListener("contextmenu",this.preventContextMenu)}shouldCaptureKeyboard(e){if(this.isEditableTarget(e.target))return!1;const t=new Set(["KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight","ControlLeft","ControlRight","KeyR","KeyE","Escape","Tab","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9"]);return this.pointerLocked||t.has(e.code)||e.ctrlKey||e.metaKey}isEditableTarget(e){return e instanceof HTMLElement?e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e.isContentEditable||e instanceof HTMLSelectElement:!1}}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Bp(i,e,t){const n=ct((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Op(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function li(i){return()=>{let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ve(i,e,t,n){let s=i^Math.imul(e,374761393);return s=(s^Math.imul(t,668265263))>>>0,s=(s^Math.imul(n,2147483647))>>>0,s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function Wn(i,e){return Math.floor(i/e)}function Ci(i,e){return(i%e+e)%e}const Mn={zombie:{type:"zombie",name:"좀비",hostile:!0,behavior:"melee",health:20,speed:1.65,radius:.34,height:1.74,detection:32,attackDamage:3,attackRange:1.15,attackCooldown:1.2,colors:{body:"#50734f",accent:"#3f6680",legs:"#374255",eyes:"#f6d86b"},drops:[{item:"rotten_flesh",min:0,max:2,chance:.88}]},armored_zombie:{type:"armored_zombie",name:"무장 좀비",hostile:!0,behavior:"melee",health:28,speed:1.55,radius:.36,height:1.8,detection:34,attackDamage:5,attackRange:1.18,attackCooldown:1.1,colors:{body:"#536b55",accent:"#aab1ad",legs:"#4a5260",eyes:"#ffd666"},drops:[{item:"rotten_flesh",min:1,max:3,chance:1},{item:"chainmail_helmet",min:1,max:1,chance:.08}]},skeleton:{type:"skeleton",name:"스켈레톤",hostile:!0,behavior:"skeleton",health:20,speed:1.35,radius:.32,height:1.74,detection:28,attackDamage:4,attackRange:15,attackCooldown:1.8,colors:{body:"#d8d5c5",accent:"#bfb9a3",legs:"#cfcab9",eyes:"#202020"},drops:[{item:"bone",min:0,max:2,chance:.92},{item:"arrow",min:0,max:2,chance:.78}]},skeleton_captain:{type:"skeleton_captain",name:"스켈레톤 대장",hostile:!0,behavior:"skeleton",health:30,speed:1.45,radius:.34,height:1.82,detection:32,attackDamage:6,attackRange:17,attackCooldown:1.35,colors:{body:"#d8d5c5",accent:"#d6aa35",legs:"#bfb9a3",eyes:"#b53634"},drops:[{item:"bone",min:2,max:4,chance:1},{item:"arrow",min:2,max:5,chance:1},{item:"bow",min:1,max:1,chance:.1,durability:80}]},spider:{type:"spider",name:"거미",hostile:!0,behavior:"spider",health:16,speed:2.45,radius:.62,height:.92,detection:28,attackDamage:2,attackRange:1.25,attackCooldown:.9,colors:{body:"#2d2730",accent:"#5e394d",legs:"#1d171f",eyes:"#d8423a"},drops:[{item:"string",min:0,max:2,chance:.92},{item:"spider_eye",min:1,max:1,chance:.18}]},creeper:{type:"creeper",name:"크리퍼",hostile:!0,behavior:"creeper",health:20,speed:1.55,radius:.34,height:1.7,detection:25,attackDamage:0,attackRange:1.85,attackCooldown:0,colors:{body:"#55a95a",accent:"#35793b",legs:"#3e8742",eyes:"#101510"},drops:[{item:"gunpowder",min:0,max:2,chance:.86}]},blaze:{type:"blaze",name:"블레이즈",hostile:!0,behavior:"blaze",health:20,speed:1.25,radius:.38,height:1.8,detection:31,attackDamage:5,attackRange:15,attackCooldown:1.8,colors:{body:"#f0a83c",accent:"#5a2418",legs:"#d86a2e",eyes:"#2a120c"},drops:[{item:"blaze_rod",min:0,max:1,chance:.6}]},enderman:{type:"enderman",name:"엔더맨",hostile:!0,behavior:"enderman",health:40,speed:2.35,radius:.36,height:2.9,detection:34,attackDamage:7,attackRange:1.45,attackCooldown:.95,colors:{body:"#19151f",accent:"#15121a",legs:"#120f17",eyes:"#c45cff"},drops:[{item:"ender_pearl",min:0,max:1,chance:.55}]},cow:{type:"cow",name:"소",hostile:!1,behavior:"animal",health:10,speed:1.25,radius:.48,height:1.35,detection:0,attackDamage:0,attackRange:0,attackCooldown:0,colors:{body:"#6f4b36",accent:"#e8ded0",legs:"#3f2a1e",eyes:"#111111"},drops:[{item:"raw_beef",min:1,max:3,chance:1},{item:"leather",min:0,max:2,chance:.72}]},pig:{type:"pig",name:"돼지",hostile:!1,behavior:"animal",health:10,speed:1.2,radius:.45,height:1.05,detection:0,attackDamage:0,attackRange:0,attackCooldown:0,colors:{body:"#d8919c",accent:"#e8abb5",legs:"#b86f7a",eyes:"#151515"},drops:[{item:"raw_porkchop",min:1,max:3,chance:1}]},sheep:{type:"sheep",name:"양",hostile:!1,behavior:"animal",health:8,speed:1.15,radius:.46,height:1.2,detection:0,attackDamage:0,attackRange:0,attackCooldown:0,colors:{body:"#e7e3d2",accent:"#56504a",legs:"#3c3532",eyes:"#111111"},drops:[{item:"raw_mutton",min:1,max:2,chance:1},{item:"wool",min:1,max:2,chance:1}]},chicken:{type:"chicken",name:"닭",hostile:!1,behavior:"animal",health:4,speed:1.35,radius:.28,height:.72,detection:0,attackDamage:0,attackRange:0,attackCooldown:0,colors:{body:"#eee8d7",accent:"#d8423a",legs:"#d6aa35",eyes:"#111111"},drops:[{item:"raw_chicken",min:1,max:1,chance:1},{item:"feather",min:0,max:2,chance:.84}]}};class Gp{constructor(){D(this,"group",new ut);D(this,"mobs",[]);D(this,"arrows",[]);D(this,"spawnTimer",1.5);D(this,"nextId",1);this.group.name="Codex Craft entities"}clear(){for(const e of this.mobs)this.group.remove(e.mesh),this.disposeGroup(e.mesh);for(const e of this.arrows)this.group.remove(e.mesh),e.mesh.geometry.dispose(),Pa(e.mesh.material);this.mobs.length=0,this.arrows.length=0,this.spawnTimer=1.5}restore(e){this.clear();for(const t of e.slice(0,32))zp(t.type)&&this.spawnAt(t.type,t.position[0],t.position[1],t.position[2],t.health,t.age)}snapshot(){return this.mobs.slice(0,32).map(e=>({id:e.id,type:e.type,position:[e.position.x,e.position.y,e.position.z],health:e.health,age:e.age}))}get count(){return this.mobs.length}update(e,t,n,s,r,o){this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnTimer=3.2+Math.random()*3.4,this.trySpawn(t,n,s,r));const a={damage:0,drops:[],explosions:[]};for(let l=this.mobs.length-1;l>=0;l-=1){const c=this.mobs[l],h=Mn[c.type];c.age+=e,c.attackCooldown=Math.max(0,c.attackCooldown-e),c.hitFlash=Math.max(0,c.hitFlash-e);const d=n.clone().sub(c.position),u=Math.hypot(d.x,d.z),f=Math.abs(d.y);if(this.shouldDespawn(c,h,u)){this.removeMob(l);continue}if(h.behavior==="animal")this.updateAnimal(c,h,t,n,u,o,e);else if(h.behavior==="skeleton")this.updateSkeleton(c,h,t,n,d,u,f,e);else if(h.behavior==="blaze")this.updateBlaze(c,h,t,n,d,u,f,e);else if(h.behavior==="creeper"){if(this.updateCreeper(c,h,t,n,d,u,f,e,a,l),!this.mobs.includes(c))continue}else this.updateMelee(c,h,t,n,d,u,f,e,a);u>.001&&(c.mesh.rotation.y=Math.atan2(d.x,d.z)),this.animateMob(c,h,o,u),c.mesh.position.copy(c.position)}return this.updateArrows(e,t,n,a),a}hitByRay(e,t,n,s){let r=-1,o=1/0;for(let c=0;c<this.mobs.length;c+=1){const h=this.mobs[c],d=Mn[h.type],u=h.position.clone();u.y+=d.height*.5;const g=u.clone().sub(e).dot(t);if(g<0||g>n)continue;e.clone().add(t.clone().multiplyScalar(g)).distanceTo(u)<d.radius+.34&&g<o&&(o=g,r=c)}if(r<0)return null;const a=this.mobs[r],l=Mn[a.type];if(a.health-=s,a.hitFlash=.18,a.panicTimer=l.hostile?0:4.5,a.velocity.add(t.clone().multiplyScalar(l.hostile?3.2:4.4)),a.velocity.y=Math.max(a.velocity.y,l.behavior==="spider"?4.2:3),a.health<=0){const c=this.rollDrops(l);return this.removeMob(r),{killed:!0,name:l.name,hostile:l.hostile,drops:c}}return{killed:!1,name:l.name,hostile:l.hostile,drops:[]}}updateMelee(e,t,n,s,r,o,a,l,c){const h=new R;o<t.detection?h.set(r.x,0,r.z).normalize().multiplyScalar(t.speed):h.set(Math.sin(e.age*.9+e.id),0,Math.cos(e.age*.7+e.id)).multiplyScalar(.45),this.steer(e,h,l),this.moveMob(e,t,n,l),o<t.attackRange&&a<t.height&&e.attackCooldown<=0&&(c.damage+=t.attackDamage,e.attackCooldown=t.attackCooldown)}updateSkeleton(e,t,n,s,r,o,a,l){const c=new R;if(o<7)c.set(-r.x,0,-r.z).normalize().multiplyScalar(t.speed*.9);else if(o<t.detection){const h=new R(-r.z,0,r.x).normalize().multiplyScalar(Math.sin(e.age*2+e.id));c.set(r.x,0,r.z).normalize().multiplyScalar(t.speed*.55).add(h)}else c.set(Math.sin(e.age*.8+e.id),0,Math.cos(e.age*.5+e.id)).multiplyScalar(.35);this.steer(e,c,l),this.moveMob(e,t,n,l),o<t.attackRange&&a<5&&e.attackCooldown<=0&&(this.shootArrow(e,t,s),e.attackCooldown=t.attackCooldown)}updateBlaze(e,t,n,s,r,o,a,l){const c=new R;if(o<6)c.set(-r.x,0,-r.z).normalize().multiplyScalar(t.speed);else if(o<t.detection){const h=new R(-r.z,0,r.x).normalize().multiplyScalar(Math.sin(e.age*2.3+e.id)*.75);c.set(r.x,0,r.z).normalize().multiplyScalar(t.speed*.48).add(h)}else c.set(Math.sin(e.age*.72+e.id),0,Math.cos(e.age*.55+e.id)).multiplyScalar(.42);this.steer(e,c,l),e.velocity.y+=18*l,e.velocity.y+=(Math.sin(e.age*2.5)*.5+ct(r.y-.6,-1,1)*.35)*l,this.moveMob(e,t,n,l),o<t.attackRange&&a<6&&e.attackCooldown<=0&&(this.shootArrow(e,t,s,"#ff9c2e",10.5,.18),e.attackCooldown=t.attackCooldown)}updateCreeper(e,t,n,s,r,o,a,l,c,h){const d=new R;o<t.detection&&d.set(r.x,0,r.z).normalize().multiplyScalar(t.speed),this.steer(e,d,l),this.moveMob(e,t,n,l),o<t.attackRange&&a<2.2?(e.fuse+=l,e.mesh.scale.setScalar(1+Math.sin(e.fuse*26)*.04+e.fuse*.08),e.fuse>=1.5&&(c.explosions.push({x:e.position.x,y:e.position.y+.8,z:e.position.z,radius:3.15,damage:16}),this.removeMob(h))):(e.fuse=Math.max(0,e.fuse-l*.65),e.mesh.scale.setScalar(1))}updateAnimal(e,t,n,s,r,o,a){e.panicTimer=Math.max(0,e.panicTimer-a);const l=e.position.clone().sub(s),c=new R;e.panicTimer>0||r<2.2?c.set(l.x,0,l.z).normalize().multiplyScalar(t.speed*1.85):c.set(Math.sin(o*.55+e.id*1.7),0,Math.cos(o*.45+e.id*2.3)).multiplyScalar(t.speed*.36),e.type==="chicken"&&(e.eggTimer-=a,e.eggTimer<=0&&(e.eggTimer=80+Math.random()*140)),this.steer(e,c,a),this.moveMob(e,t,n,a)}updateArrows(e,t,n,s){for(let r=this.arrows.length-1;r>=0;r-=1){const o=this.arrows[r];if(o.age+=e,o.velocity.y-=5.2*e,o.position.addScaledVector(o.velocity,e),o.mesh.position.copy(o.position),o.mesh.quaternion.setFromUnitVectors(new R(0,1,0),o.velocity.clone().normalize()),o.position.distanceTo(n.clone().add(new R(0,.9,0)))<.7){s.damage+=o.damage,this.removeArrow(r);continue}(o.age>5||o.position.y<0||o.position.y>=Xe||Xs(t.getBlock(Math.floor(o.position.x),Math.floor(o.position.y),Math.floor(o.position.z))))&&this.removeArrow(r)}}trySpawn(e,t,n,s){if(this.mobs.length>=18)return;if(e.dimension==="nether"){if(this.mobs.filter(d=>Mn[d.type].hostile).length<12){const d=Math.random()<.72?["blaze","blaze","enderman"]:["enderman"];this.trySpawnType(e,t,d[Math.floor(Math.random()*d.length)],!0)}return}if(e.dimension==="end"){this.mobs.filter(d=>Mn[d.type].hostile).length<10&&Math.random()<.85&&this.trySpawnType(e,t,"enderman",!1);return}const r=n<.34,o=s>.48,a=n>.55&&s<.18,l=this.mobs.filter(h=>Mn[h.type].hostile).length,c=this.mobs.length-l;if((r||o)&&l<11){const h=o?["zombie","skeleton","spider","creeper","armored_zombie","skeleton_captain","enderman"]:["zombie","skeleton","spider","creeper","enderman"];this.trySpawnType(e,t,h[Math.floor(Math.random()*h.length)],o);return}if(a&&c<7&&Math.random()<.82){const h=["cow","pig","sheep","chicken"];this.trySpawnType(e,t,h[Math.floor(Math.random()*h.length)],!1)}}trySpawnType(e,t,n,s){const r=Mn[n];for(let o=0;o<22;o+=1){const a=Math.random()*Math.PI*2,l=r.hostile?18+Math.random()*18:12+Math.random()*28,c=Math.floor(t.x+Math.cos(a)*l)+.5,h=Math.floor(t.z+Math.sin(a)*l)+.5,d=s?this.findCaveSpawnY(e,Math.floor(c),Math.floor(t.y),Math.floor(h),r.hostile):e.terrainHeight(Math.floor(c),Math.floor(h))+1;if(!(d===null||d<3||d>Xe-3)&&!(r.hostile&&this.isNearTorch(e,Math.floor(c),d,Math.floor(h),7))&&!(n==="blaze"&&!this.isNearBlock(e,Math.floor(c),d,Math.floor(h),_.NetherBrick,12)&&Math.random()<.86)&&this.isSpawnSpace(e,Math.floor(c),d,Math.floor(h),r)){this.spawnAt(n,c,d,h);return}}}findCaveSpawnY(e,t,n,s,r){for(let o=0;o<=11;o+=1)for(const a of[-1,1]){const l=n+o*a;if(!(r&&this.isNearTorch(e,t,l,s,7))&&this.isSpawnSpace(e,t,l,s,Mn.zombie))return l}return null}spawnAt(e,t,n,s,r=Mn[e].health,o=0){const a=Mn[e],l={id:this.nextId,type:e,health:r,attackCooldown:a.attackCooldown*.6,age:o,fuse:0,eggTimer:e==="chicken"?45+Math.random()*80:0,panicTimer:0,hitFlash:0,position:new R(t,n,s),velocity:new R,mesh:this.createMobMesh(a)};this.nextId+=1,l.mesh.position.copy(l.position),this.mobs.push(l),this.group.add(l.mesh)}shootArrow(e,t,n,s="#d8d3c0",r=13.5,o=.06){const a=e.position.clone().add(new R(0,t.height*.72,0)),c=n.clone().add(new R(0,1.05,0)).sub(a).normalize();c.y+=.07,c.normalize();const h=t.behavior==="blaze"?new Mt(o,o,o):new Mt(o,.62,o),d=new Ui({color:s,emissive:t.behavior==="blaze"?new Re("#a43b18"):new Re("#000000"),emissiveIntensity:t.behavior==="blaze"?.9:0,roughness:.8}),u=new nt(h,d);u.castShadow=!0,this.group.add(u);const f={id:this.nextId,age:0,damage:t.attackDamage,position:a,velocity:c.multiplyScalar(r),mesh:u};this.nextId+=1,this.arrows.push(f)}steer(e,t,n){e.velocity.x+=(t.x-e.velocity.x)*ct(n*4,0,1),e.velocity.z+=(t.z-e.velocity.z)*ct(n*4,0,1),e.velocity.y-=18*n}moveMob(e,t,n,s){const r=e.position.clone();r.x+=e.velocity.x*s,this.collidesAt(r,t,n)&&(r.x=e.position.x,e.velocity.x=0),r.z+=e.velocity.z*s,this.collidesAt(r,t,n)&&(r.z=e.position.z,e.velocity.z=0),r.y+=e.velocity.y*s,this.collidesAt(r,t,n)&&(r.y=e.position.y,e.velocity.y<-4&&Math.hypot(e.velocity.x,e.velocity.z)>.35?e.velocity.y=t.behavior==="spider"?6.4:5.6:e.velocity.y=0),e.position.copy(r)}collidesAt(e,t,n){const s=Math.floor(e.x-t.radius),r=Math.floor(e.x+t.radius),o=Math.floor(e.y),a=Math.floor(e.y+t.height),l=Math.floor(e.z-t.radius),c=Math.floor(e.z+t.radius);for(let h=o;h<=a;h+=1)for(let d=l;d<=c;d+=1)for(let u=s;u<=r;u+=1)if(Xs(n.getBlock(u,h,d)))return!0;return!1}isSpawnSpace(e,t,n,s,r){const o=e.getBlock(t,n-1,s);if(o===_.Water||!Xs(o)||!r.hostile&&o!==_.Grass)return!1;const a=Math.ceil(r.height);for(let l=0;l<=a;l+=1)if(e.getBlock(t,n+l,s)!==_.Air)return!1;return!0}isNearTorch(e,t,n,s,r){for(let o=-3;o<=3;o+=1)for(let a=-r;a<=r;a+=1)for(let l=-r;l<=r;l+=1)if(!(l*l+o*o+a*a>r*r)&&e.getBlock(t+l,n+o,s+a)===_.Torch)return!0;return!1}isNearBlock(e,t,n,s,r,o){for(let a=-4;a<=4;a+=1)for(let l=-o;l<=o;l+=1)for(let c=-o;c<=o;c+=1)if(!(c*c+a*a+l*l>o*o)&&e.getBlock(t+c,n+a,s+l)===r)return!0;return!1}shouldDespawn(e,t,n){return n>82||e.position.y<-14||e.age>520?!0:t.hostile&&n>46&&e.age>90}rollDrops(e){const t=[];for(const n of e.drops){if(Math.random()>n.chance)continue;const s=n.min+Math.floor(Math.random()*(n.max-n.min+1));s<=0||t.push({item:n.item,count:s,durability:n.durability})}return t}removeMob(e){const t=this.mobs[e];this.group.remove(t.mesh),this.disposeGroup(t.mesh),this.mobs.splice(e,1)}removeArrow(e){const t=this.arrows[e];this.group.remove(t.mesh),t.mesh.geometry.dispose(),Pa(t.mesh.material),this.arrows.splice(e,1)}disposeGroup(e){const t=new Set;e.traverse(n=>{if(n instanceof nt){n.geometry.dispose();const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s)t.has(r)||(r.dispose(),t.add(r))}})}animateMob(e,t,n,s){const r=Math.sin((n+e.id)*(t.behavior==="animal"?6:8))*Math.min(1,s/7);for(const l of e.mesh.children)l.name.startsWith("leg-a")&&(l.rotation.x=r*.55),l.name.startsWith("leg-b")&&(l.rotation.x=-r*.55),l.name.startsWith("arm-a")&&(l.rotation.x=-.35+r*.45),l.name.startsWith("arm-b")&&(l.rotation.x=-.35-r*.45);const o=e.hitFlash>0?e.hitFlash/.18:0,a=t.behavior==="creeper"?e.mesh.scale.x:1;e.mesh.scale.setScalar(a+o*.045),e.mesh.traverse(l=>{if(!(l instanceof nt))return;const c=Array.isArray(l.material)?l.material:[l.material];for(const h of c)h instanceof Ui&&(h.emissive.set(o>0?"#ff4a4a":"#000000"),h.emissiveIntensity=o*.85)})}createMobMesh(e){return e.behavior==="spider"?this.createSpiderMesh(e):e.behavior==="animal"?this.createAnimalMesh(e):e.behavior==="creeper"?this.createCreeperMesh(e):e.behavior==="blaze"?this.createBlazeMesh(e):e.behavior==="enderman"?this.createEndermanMesh(e):this.createHumanoidMesh(e)}createBlazeMesh(e){const t=new ut,n=It(e.colors.body),s=It(e.colors.legs??e.colors.body),r=new Nt({color:e.colors.eyes??"#2a120c"});Ue(t,[.46,.46,.46],[0,1.04,0],n),Ue(t,[.08,.08,.04],[-.1,1.08,-.25],r),Ue(t,[.08,.08,.04],[.1,1.08,-.25],r);for(let o=0;o<8;o+=1){const a=o/8*Math.PI*2,l=.62+o%2*.1,c=.72+o%3*.28,h=Ue(t,[.14,.72,.14],[Math.cos(a)*l,c,Math.sin(a)*l],s,o%2===0?"arm-a":"arm-b");h.rotation.y=a}return t}createEndermanMesh(e){const t=new ut,n=It(e.colors.body),s=It(e.colors.accent??e.colors.body),r=new Nt({color:e.colors.eyes??"#c45cff"});return Ue(t,[.48,.48,.48],[0,2.55,0],n),Ue(t,[.42,1.05,.28],[0,1.76,0],s),Ue(t,[.16,1.5,.16],[-.38,1.45,0],n,"arm-a"),Ue(t,[.16,1.5,.16],[.38,1.45,0],n,"arm-b"),Ue(t,[.16,1.42,.16],[-.13,.7,0],n,"leg-a"),Ue(t,[.16,1.42,.16],[.13,.7,0],n,"leg-b"),Ue(t,[.12,.05,.03],[-.1,2.58,-.25],r),Ue(t,[.12,.05,.03],[.1,2.58,-.25],r),t}createHumanoidMesh(e){const t=new ut,n=It(e.colors.body),s=It(e.colors.accent??e.colors.body),r=It(e.colors.legs??e.colors.body),o=new Nt({color:e.colors.eyes??"#ffd666"});return Ue(t,[.58,.58,.58],[0,1.52,0],n),Ue(t,[.62,.7,.34],[0,.94,0],s),Ue(t,[.22,.72,.22],[-.42,.92,.02],n,"arm-a"),Ue(t,[.22,.72,.22],[.42,.92,.02],n,"arm-b"),Ue(t,[.24,.78,.24],[-.16,.32,0],r,"leg-a"),Ue(t,[.24,.78,.24],[.16,.32,0],r,"leg-b"),Ue(t,[.08,.08,.03],[-.12,1.58,-.31],o),Ue(t,[.08,.08,.03],[.12,1.58,-.31],o),e.behavior==="skeleton"&&(Ue(t,[.06,.72,.06],[.52,.92,-.18],It("#8b5f35")),Ue(t,[.05,.8,.05],[.62,.92,-.18],It("#d8d3c0"))),t}createCreeperMesh(e){const t=new ut,n=It(e.colors.body),s=It(e.colors.accent??e.colors.body),r=new Nt({color:e.colors.eyes??"#101510"});return Ue(t,[.58,.72,.58],[0,1.35,0],n),Ue(t,[.58,.9,.42],[0,.72,0],s),Ue(t,[.2,.38,.24],[-.22,.2,-.16],n,"leg-a"),Ue(t,[.2,.38,.24],[.22,.2,-.16],n,"leg-b"),Ue(t,[.2,.38,.24],[-.22,.2,.18],n,"leg-b"),Ue(t,[.2,.38,.24],[.22,.2,.18],n,"leg-a"),Ue(t,[.1,.09,.03],[-.13,1.45,-.31],r),Ue(t,[.1,.09,.03],[.13,1.45,-.31],r),Ue(t,[.12,.18,.03],[0,1.26,-.31],r),t}createSpiderMesh(e){const t=new ut,n=It(e.colors.body),s=It(e.colors.legs??"#1d171f"),r=new Nt({color:e.colors.eyes??"#d8423a"});Ue(t,[1.08,.38,.78],[0,.48,0],n),Ue(t,[.58,.34,.46],[0,.54,-.56],It(e.colors.accent??e.colors.body));for(let o of[-1,1])for(let a=0;a<4;a+=1){const l=-.46+a*.3,c=Ue(t,[.56,.08,.08],[o*.72,.42,l],s,a%2===0?"leg-a":"leg-b");c.rotation.z=o*.25}return Ue(t,[.09,.07,.03],[-.13,.6,-.81],r),Ue(t,[.09,.07,.03],[.13,.6,-.81],r),t}createAnimalMesh(e){const t=new ut,n=It(e.colors.body),s=It(e.colors.accent??e.colors.body),r=It(e.colors.legs??e.colors.body),o=new Nt({color:e.colors.eyes??"#111"}),a=e.type==="chicken";Ue(t,a?[.42,.46,.38]:[.9,.58,.52],a?[0,.46,0]:[0,.72,0],n),Ue(t,a?[.28,.28,.28]:[.44,.42,.42],a?[0,.78,-.28]:[0,.9,-.52],s),Ue(t,[.07,.06,.03],[-.08,a?.82:.96,a?-.44:-.75],o),Ue(t,[.07,.06,.03],[.08,a?.82:.96,a?-.44:-.75],o);const l=a?.32:.52;for(const[c,h]of[-.28,.28].entries())Ue(t,[.13,l,.13],[h,l*.5,-.18],r,c===0?"leg-a":"leg-b"),a||Ue(t,[.13,l,.13],[h,l*.5,.24],r,c===0?"leg-b":"leg-a");return t}}function zp(i){return i in Mn}function It(i){return new Ui({color:i,roughness:.88})}function Ue(i,e,t,n,s=""){const r=new nt(new Mt(...e),n);return r.position.set(...t),r.name=s,r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Pa(i){if(Array.isArray(i)){for(const e of i)e.dispose();return}i.dispose()}const qn=.32,ka=1.78,La=1.58;class Ki{constructor(e,t){D(this,"position");D(this,"velocity",new R);D(this,"yaw",0);D(this,"pitch",0);D(this,"grounded",!1);D(this,"lastLandingSpeed",0);D(this,"camera");this.camera=e,this.position=t.clone(),this.camera.rotation.order="YXZ",this.syncCamera()}restore(e){this.position.fromArray(e.position),this.yaw=e.yaw,this.pitch=e.pitch,this.syncCamera()}snapshot(e){return{position:[this.position.x,this.position.y,this.position.z],yaw:this.yaw,pitch:this.pitch,selectedSlot:e}}applyLook(e,t,n=1){const s=.0022*n;this.yaw-=e*s,this.pitch-=t*s,this.pitch=ct(this.pitch,-Math.PI/2+.03,Math.PI/2-.03)}update(e,t,n,s=!0,r=!1,o=!1){const a=new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),l=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw)),c=new R,h=t.moveAxis();c.addScaledVector(a,h.forward),c.addScaledVector(l,h.strafe),c.lengthSq()>1&&c.normalize();const d=t.isDown("ControlLeft")||t.isDown("ControlRight")||t.isDown("KeyR"),u=this.isInWater(n);if(o){const g=d?9.2:6.2;this.velocity.x=c.x*g,this.velocity.z=c.z*g,this.velocity.y=t.isDown("Space")?5.6:r?-5.6:0,this.moveWithCollision(e,n),this.grounded=!0,this.lastLandingSpeed=0,this.syncCamera();return}const f=d&&s&&!u?7.1:r?2.1:4.6;this.velocity.x=c.x*(u?f*.48:f),this.velocity.z=c.z*(u?f*.48:f),u?(this.velocity.y=Math.max(this.velocity.y-4.4*e,-2.4),t.isDown("Space")&&(this.velocity.y=3)):(this.velocity.y-=22*e,t.isDown("Space")&&this.grounded&&(this.velocity.y=7.4,this.grounded=!1)),this.moveWithCollision(e,n),(this.position.y<-12||this.position.y>Xe+18)&&(this.position.copy(n.findSpawn()),this.velocity.set(0,0,0)),this.syncCamera()}moveWithCollision(e,t){const n=this.position.clone();n.x+=this.velocity.x*e,this.collidesAt(n,t)&&(n.x=this.position.x,this.velocity.x=0),n.z+=this.velocity.z*e,this.collidesAt(n,t)&&(n.z=this.position.z,this.velocity.z=0),this.grounded=!1,this.lastLandingSpeed=0,n.y+=this.velocity.y*e,this.collidesAt(n,t)&&(this.velocity.y<0&&(this.grounded=!0,this.lastLandingSpeed=-this.velocity.y),n.y=this.position.y,this.velocity.y=0),this.position.copy(n)}collidesAt(e,t){const n=Math.floor(e.x-qn),s=Math.floor(e.x+qn),r=Math.floor(e.y),o=Math.floor(e.y+ka-.02),a=Math.floor(e.z-qn),l=Math.floor(e.z+qn);for(let c=r;c<=o;c+=1)for(let h=a;h<=l;h+=1)for(let d=n;d<=s;d+=1)if(Xs(t.getBlock(d,c,h)))return!0;return!1}intersectsBlock(e,t,n){const s=this.position.x-qn,r=this.position.x+qn,o=this.position.y,a=this.position.y+ka,l=this.position.z-qn,c=this.position.z+qn;return r>e&&s<e+1&&a>t&&o<t+1&&c>n&&l<n+1}getEyePosition(e=new R){return e.set(this.position.x,this.position.y+La,this.position.z)}getViewDirection(e=new R){return this.camera.getWorldDirection(e),e.normalize()}isInWater(e){const t=e.getBlock(Math.floor(this.position.x),Math.floor(this.position.y),Math.floor(this.position.z)),n=e.getBlock(Math.floor(this.position.x),Math.floor(this.position.y+1.1),Math.floor(this.position.z));return t===_.Water||n===_.Water}syncCamera(){this.camera.position.set(this.position.x,this.position.y+La,this.position.z),this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0}}const Da={ui_click:["ui_click.ogg"],ui_confirm:["ui_confirm.ogg"],ui_error:["ui_error.ogg"],ui_open:["ui_open.ogg"],ui_close:["ui_close.ogg"],ui_select:["ui_select.ogg"],block_break:["block_break.ogg"],block_place:["block_place.ogg"],footstep:["step_00.ogg","step_01.ogg","step_02.ogg","step_03.ogg"],item_pickup:["item_pickup.ogg"],player_hurt:["mob_hurt.ogg"],mob_hurt:["mob_hurt.ogg"],mob_death:["mob_death.ogg"],bow:["bow.ogg"],metal:["metal.ogg"],eat:["eat.ogg"],chest:["chest.ogg"]};class Hp{constructor(e="/"){D(this,"baseUrl");D(this,"samples",new Map);D(this,"lastPlayed",new Map);D(this,"context",null);D(this,"music",null);D(this,"masterVolume",.7);this.baseUrl=e.endsWith("/")?e:`${e}/`,this.preloadSamples()}get volume(){return this.masterVolume}setVolume(e){this.masterVolume=Ia(e),this.music&&(this.music.gain.gain.value=this.musicVolume(this.music.id))}unlock(){const e=this.ensureContext();(e==null?void 0:e.state)==="suspended"&&e.resume()}playSfx(e,t={}){const n=Ia((t.volume??1)*this.masterVolume);if(n<=0)return!1;const s=t.throttleMs??0;if(s>0){const o=Vp(),a=this.lastPlayed.get(e)??0;if(o-a<s)return!1;this.lastPlayed.set(e,o)}const r=Da[e];if(r!=null&&r.length){const o=r[Math.floor(Math.random()*r.length)],a=this.samples.get(o);if(a){const l=a.cloneNode(!0);return l.volume=n,l.playbackRate=Al(t.pitch??Na(),.55,1.8),l.play().catch(()=>{}),!0}}return this.playSynthetic(e,n,t.pitch??Na())}playMusic(e){var l;if(this.masterVolume<=0){this.stopMusic();return}if(((l=this.music)==null?void 0:l.id)===e){this.music.gain.gain.value=this.musicVolume(e);return}this.stopMusic();const t=this.ensureContext();if(!t)return;const n=t.createGain();n.gain.value=this.musicVolume(e),n.connect(t.destination);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=760,s.Q.value=.8,s.connect(n);const r=[this.makeTone(t,"sawtooth",55,s),this.makeTone(t,"triangle",82.41,s),this.makeTone(t,"sine",110,s)],o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.value=.085,a.gain.value=.018,o.connect(a),a.connect(n.gain),o.start(),this.music={id:e,gain:n,nodes:[s,a,o],oscillators:r}}stopMusic(){if(this.music){for(const e of this.music.oscillators){try{e.stop()}catch{}e.disconnect()}for(const e of this.music.nodes)e.disconnect();this.music.gain.disconnect(),this.music=null}}preloadSamples(){if(typeof Audio>"u")return;const e=new Set(Object.values(Da).flat());for(const t of e){const n=new Audio(this.assetUrl(t));n.preload="auto",this.samples.set(t,n)}}assetUrl(e){return`${this.baseUrl}audio/${e}`}ensureContext(){if(this.context)return this.context;const e=typeof AudioContext<"u"?AudioContext:typeof webkitAudioContext<"u"?webkitAudioContext:null;return e?(this.context=new e,this.context):null}playSynthetic(e,t,n){const s=this.ensureContext();return s?e==="explosion"?(this.noiseBurst(s,t*.9,.55,260),this.tone(s,"sine",54,.3,t*.34),!0):e==="portal"?(this.tone(s,"sawtooth",92*n,.42,t*.36,.18),this.tone(s,"triangle",184*n,.58,t*.24,.08),!0):e==="dragon_death"?(this.noiseBurst(s,t*.55,1.1,980),this.tone(s,"sawtooth",118,1.35,t*.28,-.08),this.tone(s,"triangle",236,1,t*.2,-.15),!0):e==="dragon_hit"?(this.tone(s,"square",146*n,.16,t*.24,-.08),!0):(this.noiseBurst(s,t*.25,.08,1200),!0):!1}makeTone(e,t,n,s){const r=e.createOscillator();return r.type=t,r.frequency.value=n,r.connect(s),r.start(),r}tone(e,t,n,s,r,o=0){const a=e.currentTime,l=e.createOscillator(),c=e.createGain();l.type=t,l.frequency.setValueAtTime(n,a),o!==0&&l.frequency.exponentialRampToValueAtTime(Math.max(20,n*(1+o)),a+s),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(Math.max(1e-4,r),a+.015),c.gain.exponentialRampToValueAtTime(1e-4,a+s),l.connect(c),c.connect(e.destination),l.start(a),l.stop(a+s+.03),l.onended=()=>{l.disconnect(),c.disconnect()}}noiseBurst(e,t,n,s){const r=e.currentTime,o=e.createBuffer(1,Math.max(1,Math.floor(e.sampleRate*n)),e.sampleRate),a=o.getChannelData(0);for(let d=0;d<a.length;d+=1){const u=d/a.length;a[d]=(Math.random()*2-1)*(1-u)}const l=e.createBufferSource(),c=e.createBiquadFilter(),h=e.createGain();l.buffer=o,c.type="lowpass",c.frequency.value=s,h.gain.setValueAtTime(Math.max(1e-4,t),r),h.gain.exponentialRampToValueAtTime(1e-4,r+n),l.connect(c),c.connect(h),h.connect(e.destination),l.start(r),l.onended=()=>{l.disconnect(),c.disconnect(),h.disconnect()}}musicVolume(e){return e==="dragon"?this.masterVolume*.12:this.masterVolume*.08}}function Ia(i){return Al(i,0,1)}function Al(i,e,t){return Math.max(e,Math.min(t,Number.isFinite(i)?i:e))}function Na(){return .94+Math.random()*.12}function Vp(){return typeof performance<"u"?performance.now():Date.now()}const Cl=[[0,0,0],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Wp(i,e){const t=new Set;for(const s of e)for(const[r,o,a]of Cl){const l=s.y+o;l<0||l>=Xe||t.add(`${s.x+r},${l},${s.z+a}`)}let n=0;for(const s of t){const[r,o,a]=s.split(",").map(Number),l=i.getBlock(r,o,a);if(l===_.Lava&&qp(i,r,o,a,_.Water)){i.setBlock(r,o,a,_.Obsidian)&&(n+=1);continue}if(l===_.Water){const c=Rl(i,r,o,a,_.Lava);c&&i.setBlock(c.x,c.y,c.z,_.Obsidian)&&(n+=1)}}return n}function qp(i,e,t,n,s){return!!Rl(i,e,t,n,s)}function Rl(i,e,t,n,s){for(const[r,o,a]of Cl.slice(1)){const l=t+o;if(!(l<0||l>=Xe)&&i.getBlock(e+r,l,n+a)===s)return{x:e+r,y:l,z:n+a}}return null}const Qi=200;class Xp{constructor(){D(this,"group",new ut);D(this,"dragon",new ut);D(this,"beamGroup",new ut);D(this,"world",null);D(this,"active",!1);D(this,"defeated",!1);D(this,"health",Qi);D(this,"damageCooldown",0);D(this,"healTimer",0);D(this,"deathTimer",0);D(this,"healingCrystalKey",null);D(this,"dragonPosition",new R(0,54,0));D(this,"phaseKo","순항");this.group.name="End boss",this.dragon.name="Ender Dragon",this.group.add(this.dragon,this.beamGroup),this.createDragonMesh(),this.group.visible=!1}setWorld(e,t){this.world=e,this.defeated=t,this.active=e.dimension==="end"&&!t,this.group.visible=this.active||e.dimension==="end"&&this.deathTimer>0,this.clearBeams(),this.active&&this.health<=0&&(this.health=Qi,this.deathTimer=0),this.active&&this.dragon.scale.setScalar(1)}get stats(){return this.active?{name:"엔더 드래곤",health:this.health,maxHealth:Qi,crystals:this.activeCrystals().length,phaseKo:this.phaseKo}:null}update(e,t,n){if(!this.active||!this.world)return this.deathTimer>0?(this.group.visible=!0,this.animateDeath(e,n),this.deathTimer=Math.max(0,this.deathTimer-e)):this.group.visible=!1,{damage:0};this.group.visible=!0,this.damageCooldown=Math.max(0,this.damageCooldown-e),this.healTimer-=e;const s=this.activeCrystals();s.length>0&&this.healTimer<=0&&(this.healTimer=.5,this.health=Math.min(Qi,this.health+1));const r=this.health/Qi,o=r<.38?16:22,a=n%o,l=a<9?"orbit":a<13?"perch":"charge";this.phaseKo=l==="orbit"?"순항":l==="perch"?"중앙 착지":"돌진";const c=n*(r<.38?.34:.24),h=new R;if(l==="charge")h.set(t.x*.72,ct(t.y+3.4,38,58),t.z*.72);else if(l==="perch"){const v=ct(this.world.terrainHeight(0,0)+7,38,48);h.set(Math.sin(n*1.4)*4,v,Math.cos(n*1.1)*4)}else{const v=31+Math.sin(n*.19)*7;h.set(Math.cos(c)*v,51+Math.sin(n*.31)*6,Math.sin(c)*v)}const d=l==="charge"?2.5:l==="perch"?1.6:1.15;this.dragonPosition.lerp(h,ct(e*d,0,1)),this.dragon.position.copy(this.dragonPosition),this.dragon.scale.setScalar(1);const u=t.clone().sub(this.dragonPosition);this.dragon.rotation.y=Math.atan2(u.x,u.z),this.dragon.rotation.z=Math.sin(n*1.7)*.12,this.animateDragon(n),this.updateHealingBeams(s);let f=0;const g=l==="charge"?4.2:l==="perch"?3.8:3.2;return this.dragonPosition.distanceTo(t.clone().add(new R(0,1.1,0)))<g&&this.damageCooldown<=0&&(f=l==="charge"?11:l==="perch"?7:8,this.damageCooldown=l==="charge"?1.15:1.4),{damage:f}}hitDragonByRay(e,t,n,s){if(!this.active)return{hit:!1,killed:!1};const o=this.dragonPosition.clone().sub(e).dot(t);if(o<0||o>n)return{hit:!1,killed:!1};if(e.clone().add(t.clone().multiplyScalar(o)).distanceTo(this.dragonPosition)>4)return{hit:!1,killed:!1};const l=s/4+Math.min(1,s);return this.health=Math.max(0,this.health-l),this.health<=0?(this.active=!1,this.defeated=!0,this.deathTimer=5,this.clearBeams(),{hit:!0,killed:!0}):{hit:!0,killed:!1}}destroyCrystalAt(e,t,n){if(!this.world||this.world.getBlock(e,t,n)!==_.EndCrystal)return{destroyed:!1,killedDragon:!1};const s=Fa(e,t,n),r=this.healingCrystalKey===s;return this.world.setBlock(e,t,n,_.Air),this.active&&r&&(this.health=Math.max(0,this.health-10)),this.health<=0&&(this.active=!1,this.defeated=!0,this.deathTimer=5,this.clearBeams()),{destroyed:!0,killedDragon:this.defeated}}activeCrystals(){return this.world?this.world.endCrystalLocations().filter(e=>{var t;return((t=this.world)==null?void 0:t.getBlock(Math.floor(e.x),Math.floor(e.y),Math.floor(e.z)))===_.EndCrystal}):[]}updateHealingBeams(e){if(this.clearBeams(),this.healingCrystalKey=null,e.length===0)return;const n=[...e].sort((a,l)=>a.distanceTo(this.dragonPosition)-l.distanceTo(this.dragonPosition))[0];this.healingCrystalKey=Fa(Math.floor(n.x),Math.floor(n.y),Math.floor(n.z));const s=new jt;s.setAttribute("position",new Rt([n.x+.5,n.y+.55,n.z+.5,this.dragonPosition.x,this.dragonPosition.y,this.dragonPosition.z],3));const r=new mo({color:"#f2efe6",transparent:!0,opacity:.72}),o=new ro(s,r);this.beamGroup.add(o)}clearBeams(){for(const e of[...this.beamGroup.children])this.beamGroup.remove(e),e instanceof ro&&(e.geometry.dispose(),Yp(e.material))}createDragonMesh(){const e=Wr("#17121d","#3a1d4d",.18),t=Wr("#211429","#4e2670",.12),n=Wr("#e4d7aa"),s=new Nt({color:"#c45cff"});Gt(this.dragon,[2.6,1,3.3],[0,0,0],e),Gt(this.dragon,[1.6,.72,1.4],[0,.18,-1.45],e),Gt(this.dragon,[1.15,.75,1.15],[0,.28,-2.15],e),Gt(this.dragon,[.18,.42,.18],[-.35,.78,-2.65],n),Gt(this.dragon,[.18,.42,.18],[.35,.78,-2.65],n),Gt(this.dragon,[.16,.1,.05],[-.22,.38,-2.74],s),Gt(this.dragon,[.16,.1,.05],[.22,.38,-2.74],s),Gt(this.dragon,[.45,.45,4.2],[0,-.08,3.35],e,"tail"),Gt(this.dragon,[.22,.22,2.5],[0,-.06,6.3],e,"tail"),Gt(this.dragon,[5.2,.12,2.3],[-3.45,.15,.25],t,"wing-left"),Gt(this.dragon,[5.2,.12,2.3],[3.45,.15,.25],t,"wing-right"),Gt(this.dragon,[.34,1.2,.34],[-.72,-1,-.85],e,"leg-a"),Gt(this.dragon,[.34,1.2,.34],[.72,-1,-.85],e,"leg-b"),Gt(this.dragon,[.34,1.2,.34],[-.72,-1,.95],e,"leg-b"),Gt(this.dragon,[.34,1.2,.34],[.72,-1,.95],e,"leg-a")}animateDragon(e){const t=Math.sin(e*5.2)*.28;for(const n of this.dragon.children)n.name==="wing-left"?n.rotation.z=.08+t:n.name==="wing-right"?n.rotation.z=-.08-t:n.name==="tail"?n.rotation.y=Math.sin(e*1.7)*.12:n.name==="leg-a"?n.rotation.x=Math.sin(e*3.2)*.18:n.name==="leg-b"&&(n.rotation.x=-Math.sin(e*3.2)*.18)}animateDeath(e,t){const n=Math.max(0,this.deathTimer/5);this.dragon.rotation.y+=e*2.3,this.dragon.rotation.z=Math.sin(t*5.5)*.45,this.dragon.position.y=this.dragonPosition.y+(1-n)*3.2,this.dragon.scale.setScalar(.92+n*.16+Math.sin(t*12)*.025)}}function $p(i){const e=Math.min(Xe-8,i.terrainHeight(0,0)+1);for(let t=-4;t<=4;t+=1)for(let n=-4;n<=4;n+=1){i.setBlock(n,e-1,t,Math.abs(n)<=3&&Math.abs(t)<=3?_.EndStoneBricks:_.EndStone);for(let s=0;s<=4;s+=1)i.setBlock(n,e+s,t,_.Air)}for(let t=-2;t<=2;t+=1)for(let n=-2;n<=2;n+=1){const s=Math.abs(n)===2||Math.abs(t)===2;i.setBlock(n,e,t,s?_.Bedrock:_.EndPortal)}i.setBlock(0,e+1,0,_.DragonEgg)}function Fa(i,e,t){return`${i},${e},${t}`}function Wr(i,e="#000000",t=0){return new Ui({color:i,emissive:new Re(e),emissiveIntensity:t,roughness:.86,metalness:0})}function Gt(i,e,t,n,s=""){const r=new nt(new Mt(...e),n);return r.position.set(...t),r.name=s,r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Yp(i){if(Array.isArray(i)){i.forEach(e=>e.dispose());return}i.dispose()}function Kp(i,e,t,n){return i.getBlock(e,t,n)!==_.EndPortalFrame?{inserted:!1,activated:!1}:(i.setBlock(e,t,n,_.EndPortalFrameEye),{inserted:!0,activated:Qp(i,e,t,n)})}function Qp(i,e,t,n){for(let s=e-2;s<=e+2;s+=1)for(let r=n-2;r<=n+2;r+=1)if(jp(i,s,t,r))return Jp(i,s,t,r),!0;return!1}function Ua(i,e,t,n){const s=Math.floor(e-.28),r=Math.floor(e+.28),o=Math.floor(t),a=Math.floor(t+1.55),l=Math.floor(n-.28),c=Math.floor(n+.28);for(let h=l;h<=c;h+=1)for(let d=o;d<=a;d+=1)for(let u=s;u<=r;u+=1)if(i.getBlock(u,d,h)===_.EndPortal)return!0;return!1}function jp(i,e,t,n){for(let s=-2;s<=2;s+=1)for(let r=-2;r<=2;r+=1){const o=Math.abs(r)===2||Math.abs(s)===2,a=Math.abs(r)===2&&Math.abs(s)===2;if(!(!o||a)&&i.getBlock(e+r,t,n+s)!==_.EndPortalFrameEye)return!1}return!0}function Jp(i,e,t,n){for(let s=-1;s<=1;s+=1)for(let r=-1;r<=1;r+=1)i.setBlock(e+r,t,n+s,_.EndPortal)}function Zp(i,e,t,n){const r=i.getBlock(e,t,n)===_.Air||i.getBlock(e,t,n)===_.Fire?[{x:e,y:t,z:n},{x:e-1,y:t,z:n},{x:e,y:t,z:n-1}]:[{x:e+1,y:t,z:n},{x:e-2,y:t,z:n},{x:e,y:t,z:n+1},{x:e,y:t,z:n-2}];for(const o of r){const a=Oa(i,o.x,o.y,o.z,"x");if(a)return Ga(i,a.x,a.y,a.z,"x");const l=Oa(i,o.x,o.y,o.z,"z");if(l)return Ga(i,l.x,l.y,l.z,"z")}return{success:!1,changed:0}}function Ba(i,e,t,n){return i.getBlock(Math.floor(e),Math.floor(t),Math.floor(n))===_.NetherPortal||i.getBlock(Math.floor(e),Math.floor(t+1),Math.floor(n))===_.NetherPortal}function Oa(i,e,t,n,s){const r=t;if(r<1||r+3>=Xe)return null;for(let o=0;o<3;o+=1)for(let a=0;a<2;a+=1){const{x:l,z:c}=ki(e,n,a,s);if(!em(i.getBlock(l,r+o,c)))return null}for(let o=0;o<2;o+=1){const a=ki(e,n,o,s),l=ki(e,n,o,s);if(i.getBlock(a.x,r-1,a.z)!==_.Obsidian||i.getBlock(l.x,r+3,l.z)!==_.Obsidian)return null}for(let o=-1;o<=3;o+=1){const a=ki(e,n,-1,s),l=ki(e,n,2,s);if(i.getBlock(a.x,r+o,a.z)!==_.Obsidian||i.getBlock(l.x,r+o,l.z)!==_.Obsidian)return null}return{x:e,y:r,z:n}}function Ga(i,e,t,n,s){let r=0;for(let o=0;o<3;o+=1)for(let a=0;a<2;a+=1){const{x:l,z:c}=ki(e,n,a,s);i.setBlock(l,t+o,c,_.NetherPortal)&&(r+=1)}return{success:r>0,changed:r,orientation:s}}function ki(i,e,t,n){return n==="x"?{x:i+t,z:e}:{x:i,z:e+t}}function em(i){return i===_.Air||i===_.Fire||i===_.NetherPortal}const tm=[{id:"planks",name:"나무 판자",size:2,type:"shapeless",ingredients:{log:1},result:{item:"planks",count:4},category:"building",unlocksBy:["log"]},{id:"sticks",name:"막대기",size:2,type:"shaped",pattern:["P","P"],key:{P:"planks"},result:{item:"stick",count:4},category:"items",unlocksBy:["planks"]},{id:"crafting_table",name:"제작대",size:2,type:"shaped",pattern:["PP","PP"],key:{P:"planks"},result:{item:"crafting_table",count:1},category:"building",unlocksBy:["planks"]},Xn("wooden_pickaxe","나무 곡괭이","planks",59,["PPP"," S "," S "]),Xn("wooden_axe","나무 도끼","planks",59,["PP","PS"," S"]),Xn("wooden_shovel","나무 삽","planks",59,["P","S"],2),Xn("stone_pickaxe","돌 곡괭이","stone",131,["CCC"," S "," S "]),Xn("stone_axe","돌 도끼","stone",131,["CC","CS"," S"]),Xn("stone_shovel","돌 삽","stone",131,["C","S"],2),Xn("iron_pickaxe","철 곡괭이","iron_ingot",250,["III"," S "," S "]),Xn("diamond_pickaxe","다이아몬드 곡괭이","diamond",1561,["DDD"," S "," S "]),Ri("wooden_sword","나무 검","planks",59),Ri("stone_sword","돌 검","stone",131),Ri("copper_sword","구리 검","copper_ingot",191),Ri("iron_sword","철 검","iron_ingot",250),Ri("golden_sword","금 검","gold_ingot",32),Ri("diamond_sword","다이아몬드 검","diamond",1561),{id:"bow",name:"활",size:3,type:"shaped",pattern:[" ST","S T"," ST"],key:{S:"stick",T:"string"},result:{item:"bow",count:1,durability:384},category:"equipment",unlocksBy:["stick","string"]},{id:"arrow",name:"화살",size:3,type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4},category:"equipment",unlocksBy:["flint","feather"]},{id:"shield",name:"방패",size:3,type:"shaped",pattern:["PIP","PPP"," P "],key:{P:"planks",I:"iron_ingot"},result:{item:"shield",count:1,durability:336},category:"equipment",unlocksBy:["iron_ingot","planks"]},{id:"shears",name:"가위",size:2,type:"shaped",pattern:[" I","I "],key:{I:"iron_ingot"},result:{item:"shears",count:1,durability:238},category:"equipment",unlocksBy:["iron_ingot"]},{id:"bucket",name:"양동이",size:3,type:"shaped",pattern:["I I"," I "],key:{I:"iron_ingot"},result:{item:"bucket",count:1},category:"items",unlocksBy:["iron_ingot"]},{id:"flint_and_steel",name:"부싯돌과 부시",size:2,type:"shapeless",ingredients:{iron_ingot:1,flint:1},result:{item:"flint_and_steel",count:1,durability:64},category:"equipment",unlocksBy:["iron_ingot","flint"]},{id:"torch",name:"횃불",size:2,type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4},category:"items",unlocksBy:["coal","stick"]},{id:"furnace",name:"화로",size:3,type:"shaped",pattern:["SSS","S S","SSS"],key:{S:"stone"},result:{item:"furnace",count:1},category:"items",unlocksBy:["stone"]},{id:"chest",name:"상자",size:3,type:"shaped",pattern:["PPP","P P","PPP"],key:{P:"planks"},result:{item:"chest",count:1},category:"items",unlocksBy:["planks"]},{id:"bed",name:"침대",size:3,type:"shaped",pattern:["WWW","PPP"],key:{W:"wool",P:"planks"},result:{item:"bed",count:1},category:"items",unlocksBy:["wool","planks"]},{id:"brick_block",name:"벽돌 블록",size:2,type:"shaped",pattern:["OO","OO"],key:{O:"ore"},result:{item:"brick",count:4},category:"building",unlocksBy:["ore"]},{id:"stone_bricks",name:"석재 벽돌",size:2,type:"shaped",pattern:["SS","SS"],key:{S:"stone"},result:{item:"stone_bricks",count:4},category:"building",unlocksBy:["stone"]},{id:"mossy_stone_bricks",name:"이끼 낀 석재 벽돌",size:2,type:"shapeless",ingredients:{stone_bricks:1,leaves:1},result:{item:"mossy_stone_bricks",count:1},category:"building",unlocksBy:["stone_bricks","leaves"]},{id:"iron_bars",name:"철창",size:3,type:"shaped",pattern:["III","III"],key:{I:"iron_ingot"},result:{item:"iron_bars",count:16},category:"building",unlocksBy:["iron_ingot"]},{id:"paper",name:"종이",size:3,type:"shaped",pattern:["PPP"],key:{P:"planks"},result:{item:"paper",count:3},category:"items",unlocksBy:["planks"]},{id:"book",name:"책",size:2,type:"shapeless",ingredients:{paper:3,leather:1},result:{item:"book",count:1},category:"items",unlocksBy:["paper","leather"]},{id:"bookshelf",name:"책장",size:3,type:"shaped",pattern:["PPP","BBB","PPP"],key:{P:"planks",B:"book"},result:{item:"bookshelf",count:1},category:"building",unlocksBy:["book","planks"]},{id:"end_stone_bricks",name:"엔드 스톤 벽돌",size:2,type:"shaped",pattern:["EE","EE"],key:{E:"end_stone"},result:{item:"end_stone_bricks",count:4},category:"building",unlocksBy:["end_stone"]},{id:"bread",name:"빵",size:3,type:"shapeless",ingredients:{planks:1,apple:1},result:{item:"bread",count:1},category:"food",unlocksBy:["apple"]},{id:"blaze_powder",name:"블레이즈 가루",size:2,type:"shapeless",ingredients:{blaze_rod:1},result:{item:"blaze_powder",count:2},category:"items",unlocksBy:["blaze_rod"]},{id:"eye_of_ender",name:"엔더의 눈",size:2,type:"shapeless",ingredients:{blaze_powder:1,ender_pearl:1},result:{item:"eye_of_ender",count:1},category:"items",unlocksBy:["blaze_powder","ender_pearl"]},{id:"gold_ingot_from_nuggets",name:"금 주괴",size:3,type:"shaped",pattern:["NNN","NNN","NNN"],key:{N:"gold_nugget"},result:{item:"gold_ingot",count:1},category:"items",unlocksBy:["gold_nugget"]}],$s=[...tm,...ji("leather","가죽","leather"),...ji("copper","구리","copper_ingot"),...ji("iron","철","iron_ingot"),...ji("golden","금","gold_ingot"),...ji("diamond","다이아몬드","diamond")];function Xn(i,e,t,n,s,r=3){const o=s.join("").replace(/[ S]/g,"")[0]??"M";return{id:i,name:e,size:r,type:"shaped",pattern:s,key:{[o]:t,S:"stick"},result:{item:i,count:1,durability:n},category:"equipment",unlocksBy:[t,"stick"]}}function Ri(i,e,t,n){return{id:i,name:e,size:3,type:"shaped",pattern:["M","M","S"],key:{M:t,S:"stick"},result:{item:i,count:1,durability:n},category:"equipment",unlocksBy:[t,"stick"]}}function ji(i,e,t){const n={helmet:`${i}_helmet`,chestplate:`${i}_chestplate`,leggings:`${i}_leggings`,boots:`${i}_boots`};return[Gs(n.helmet,`${e} 투구`,t,["MMM","M M"]),Gs(n.chestplate,`${e} 흉갑`,t,["M M","MMM","MMM"]),Gs(n.leggings,`${e} 각반`,t,["MMM","M M","M M"]),Gs(n.boots,`${e} 부츠`,t,["M M","M M"])]}function Gs(i,e,t,n){return{id:i,name:e,size:3,type:"shaped",pattern:n,key:{M:t},result:{item:i,count:1},category:"equipment",unlocksBy:[t]}}function za(i,e,t){return e.has(i.id)?!0:i.unlocksBy.some(n=>ui(t,n)>0)}function Ha(i,e,t){if(i.size>t)return!1;const n=lo(i);return Object.entries(n).every(([s,r])=>ui(e,s)>=r)}function lo(i){var t;if(i.type==="shapeless")return i.ingredients??{};const e={};for(const n of i.pattern??[])for(const s of n){const r=(t=i.key)==null?void 0:t[s];r&&(e[r]=(e[r]??0)+1)}return e}function qr(i,e){for(const t of $s)if(!(t.size>e)&&(t.type==="shapeless"&&Ll(t,i)||t.type==="shaped"&&Dl(t,i,e)))return t;return null}function Va(i,e,t){if(kl(e,i,t))for(let n=0;n<i.length;n+=1){const s=i[n];s&&(s.count-=1,s.count<=0&&(i[n]=null))}}function vo(i,e){var s;if(i.size>e)return null;const t=Array.from({length:e*e},()=>null);if(i.type==="shapeless"){let r=0;for(const[o,a]of Object.entries(i.ingredients??{}))for(let l=0;l<a;l+=1){if(r>=t.length)return null;t[r]=o,r+=1}return t}const n=Il(i);if(!n||n.width>e||n.height>e)return null;for(let r=0;r<n.height;r+=1)for(let o=0;o<n.width;o+=1){const a=n.rows[r][o],l=(s=i.key)==null?void 0:s[a];l&&(t[r*e+o]=l)}return t}function nm(i,e,t){return kl(i,e,t)}function Pl(i,e,t,n=1){const s=vo(e,t);if(!s||n<=0)return!1;for(let r=0;r<s.length;r+=1){const o=s[r],a=i[r]??null;if(!o){if(a)return!1;continue}if(a&&a.item!==o||((a==null?void 0:a.count)??0)+n>sn(o))return!1}return!0}function im(i,e,t,n=1){if(!Pl(i,e,t,n))return!1;const s=vo(e,t);if(!s)return!1;for(let r=0;r<s.length;r+=1){const o=s[r];if(!o)continue;const a=i[r];a?a.count+=n:i[r]={item:o,count:n}}return!0}function kl(i,e,t){return i.size>t?!1:i.type==="shapeless"?Ll(i,e):Dl(i,e,t)}function Ll(i,e){const t=i.ingredients??{},n={};for(const o of e)o&&(n[o.item]=(n[o.item]??0)+1);const s=Object.entries(t),r=Object.entries(n);return s.length===r.length&&s.every(([o,a])=>n[o]===a)}function Dl(i,e,t){const n=Il(i);if(!n||n.width>t||n.height>t)return!1;for(let s=0;s<=t-n.height;s+=1)for(let r=0;r<=t-n.width;r+=1)if(sm(i,n.rows,n.width,n.height,e,t,r,s))return!0;return!1}function sm(i,e,t,n,s,r,o,a){var l;for(let c=0;c<r;c+=1)for(let h=0;h<r;h+=1){const d=s[c*r+h],u=h-o,f=c-a,g=u>=0&&u<t&&f>=0&&f<n?e[f][u]:" ",v=((l=i.key)==null?void 0:l[g])??null;if(((d==null?void 0:d.item)??null)!==v)return!1}return!0}function Il(i){const e=i.pattern??[];if(e.length===0)return null;const t=Math.max(...e.map(c=>c.length)),n=e.map(c=>c.padEnd(t," "));let s=t,r=-1,o=n.length,a=-1;for(let c=0;c<n.length;c+=1)for(let h=0;h<t;h+=1)n[c][h]!==" "&&(s=Math.min(s,h),r=Math.max(r,h),o=Math.min(o,c),a=Math.max(a,c));return r<s||a<o?null:{rows:n.slice(o,a+1).map(c=>c.slice(s,r+1)),width:r-s+1,height:a-o+1}}class rm{constructor(){D(this,"group",new ut);D(this,"geometry",new Mt(1,1,1));D(this,"particles",[]);this.group.name="Codex Craft particles"}get count(){return this.particles.length}spawnBlockBreak(e,t,n=18){for(let s=0;s<n;s+=1)this.spawnParticle({position:Xr(e,.48),color:t,size:.07+Math.random()*.08,lifetime:.45+Math.random()*.32,velocity:Ji(1.4+Math.random()*1.8).add(new R(0,1.2+Math.random()*1.8,0))})}spawnBlockPlace(e,t){for(let n=0;n<9;n+=1)this.spawnParticle({position:Xr(e,.36),color:t,size:.05+Math.random()*.06,lifetime:.24+Math.random()*.18,velocity:Ji(.75).add(new R(0,.55,0))})}spawnPickup(e,t){this.spawnParticle({position:e.clone().add(new R(0,.34,0)),color:t,size:.16,lifetime:.58,velocity:Ji(.7).add(new R(0,.8,0)),attractToTarget:!0})}spawnMagicBurst(e,t,n=28){for(let s=0;s<n;s+=1)this.spawnParticle({position:Xr(e,.26),color:t,size:.05+Math.random()*.11,lifetime:.75+Math.random()*.72,velocity:Ji(2.6+Math.random()*3.4)})}update(e,t){for(let n=this.particles.length-1;n>=0;n-=1){const s=this.particles[n];if(s.age+=e,s.attractToTarget&&t){const o=t.clone().add(new R(0,1.1,0)).sub(s.mesh.position);s.velocity.addScaledVector(o,e*11)}else s.velocity.y-=5.8*e;s.mesh.position.addScaledVector(s.velocity,e),s.mesh.rotation.x+=s.spin.x*e,s.mesh.rotation.y+=s.spin.y*e,s.mesh.rotation.z+=s.spin.z*e;const r=Math.max(0,1-s.age/s.lifetime);s.mesh.material.opacity=r,s.mesh.scale.setScalar(.72+r*.28),!(s.age<s.lifetime)&&(this.group.remove(s.mesh),s.mesh.material.dispose(),this.particles.splice(n,1))}}spawnParticle(e){const t=new Nt({color:e.color,transparent:!0,opacity:1,depthWrite:!1}),n=new nt(this.geometry,t);n.position.copy(e.position),n.scale.setScalar(e.size),n.renderOrder=6,this.group.add(n),this.particles.push({mesh:n,velocity:e.velocity,age:0,lifetime:e.lifetime,spin:Ji(9),attractToTarget:e.attractToTarget??!1})}}function Xr(i,e){return i.clone().add(new R((Math.random()-.5)*e,(Math.random()-.5)*e,(Math.random()-.5)*e))}function Ji(i){const e=new R(Math.random()-.5,Math.random()-.5,Math.random()-.5);return e.lengthSq()<1e-4&&e.set(0,1,0),e.normalize().multiplyScalar(i)}const Yn=[at("main_get_log","첫 나무","손으로 원목을 캐서 생존의 첫 재료를 확보하세요.",[],si("log",1,"원목")),at("main_make_planks","판자로 바꾸기","원목을 판자로 가공하면 제작의 폭이 크게 넓어집니다.",["main_get_log"],tn("planks",4,"판자 제작"),["log","planks"]),at("main_make_crafting_table","작업대 세우기","2x2 제작으로 제작대를 만들고 더 큰 조합을 열어 보세요.",["main_make_planks"],tn("crafting_table",1,"제작대 제작"),["planks","crafting_table"]),at("main_make_wooden_pickaxe","첫 곡괭이","판자와 막대기로 나무 곡괭이를 만들어 돌을 캘 준비를 하세요.",["main_make_crafting_table"],tn("wooden_pickaxe",1,"나무 곡괭이 제작"),["planks","stick","wooden_pickaxe"],{items:[{item:"stick",count:2}],unlockHints:["곡괭이 머리는 위 3칸, 손잡이는 가운데 줄입니다."]}),at("main_mine_stone","돌의 시대","나무 곡괭이로 돌을 캐서 더 튼튼한 도구를 준비하세요.",["main_make_wooden_pickaxe"],Ya("stone",8,"돌 채굴"),["stone"]),at("main_make_stone_pickaxe","돌 곡괭이","돌 곡괭이는 석탄과 철 광석을 안정적으로 캘 수 있습니다.",["main_mine_stone"],tn("stone_pickaxe",1,"돌 곡괭이 제작"),["stone","stick","stone_pickaxe"],{items:[{item:"torch",count:2}]}),at("main_get_coal","빛의 재료","석탄 광석을 찾아 캐세요. 밤과 동굴을 버티는 핵심입니다.",["main_make_stone_pickaxe"],si("coal",1,"석탄"),["coal","coal_ore"]),at("main_make_torch","동굴을 밝히기","석탄과 막대기로 횃불을 만들어 동굴 탐험을 시작하세요.",["main_get_coal"],tn("torch",4,"횃불 제작"),["coal","stick","torch"]),at("main_mine_iron","철 광석 찾기","지하에서 철 광석을 캐서 장비 단계로 넘어가세요.",["main_make_torch"],si("raw_iron",1,"철 원석"),["raw_iron","iron_ore"]),at("main_smelt_iron","철 주괴 제련","화로에서 철 원석과 석탄을 사용해 철 주괴를 만드세요.",["main_mine_iron"],fm("iron_ingot",1,"철 주괴 제련"),["raw_iron","coal","furnace","iron_ingot"],{items:[{item:"bread",count:1}],unlockHints:["화로는 돌 8개로 만들고, 석탄을 연료로 씁니다."]}),at("main_make_iron_pickaxe","철 곡괭이","철 곡괭이는 다이아몬드 채굴의 최소 조건입니다.",["main_smelt_iron"],tn("iron_pickaxe",1,"철 곡괭이 제작"),["iron_ingot","stick","iron_pickaxe"]),at("main_get_diamond","깊은 곳의 빛","낮은 고도에서 다이아몬드를 찾아 캐세요.",["main_make_iron_pickaxe"],si("diamond",3,"다이아몬드"),["diamond","diamond_ore"]),at("main_make_diamond_pickaxe","흑요석을 캘 도구","다이아몬드 곡괭이는 흑요석을 아이템으로 얻기 위한 열쇠입니다.",["main_get_diamond"],tn("diamond_pickaxe",1,"다이아몬드 곡괭이 제작"),["diamond","stick","diamond_pickaxe"]),at("main_find_lava","용암 발견","깊은 동굴이나 지상 용암 웅덩이를 찾으세요.",["main_make_diamond_pickaxe"],Pi("lava",1,"용암 발견"),["lava_bucket","bucket"]),at("main_make_bucket","양동이 준비","철 주괴 3개로 양동이를 만들어 물과 용암을 다룰 준비를 하세요.",["main_find_lava"],tn("bucket",1,"양동이 제작"),["iron_ingot","bucket"]),at("main_make_obsidian","검은 문돌","물과 용암을 만나게 해서 흑요석을 만드세요.",["main_make_bucket"],$r("obsidian",1,"흑요석 생성"),["water_bucket","lava_bucket","obsidian"],{unlockHints:["용암 옆에 물을 놓으면 용암이 흑요석으로 굳습니다."]}),at("main_mine_obsidian","흑요석 채굴","다이아몬드 곡괭이로 흑요석 10개 이상을 확보하세요.",["main_make_obsidian"],si("obsidian",10,"흑요석"),["obsidian","diamond_pickaxe"],{items:[{item:"torch",count:4}],unlockHints:["최소 4x5 외곽 프레임이면 지옥문이 됩니다."]}),at("main_make_flint_steel","불을 붙이는 도구","부싯돌과 철 주괴로 부싯돌과 부시를 만드세요.",["main_mine_obsidian"],tn("flint_and_steel",1,"부싯돌과 부시 제작"),["flint","iron_ingot","flint_and_steel"]),at("main_ignite_portal","문에 불 붙이기","흑요석 프레임 안쪽에 불을 붙여 지옥문을 여세요.",["main_make_flint_steel"],rn("portal_ignited","nether_portal",1,"지옥문 점화"),["obsidian","flint_and_steel"]),at("main_enter_nether","문 너머","포털 안에 잠시 서서 지옥 차원 진입 기반을 확인하세요.",["main_ignite_portal"],rn("dimension","nether",1,"지옥 진입"),["flint_and_steel","obsidian","netherrack"],{unlockHints:["지옥에서는 귀환 포털 위치를 기억하고, 네더 벽돌 구조물을 찾으면 블레이즈를 만날 수 있습니다."]}),at("road_find_fortress","지옥 요새 수색","네더 벽돌로 된 요새 통로를 찾아 블레이즈 사냥 준비를 하세요.",["main_enter_nether"],Pi("fortress",1,"요새 발견"),["torch","nether_brick","netherrack"],{items:[{item:"bread",count:1}],unlockHints:["네더 벽돌 구조물 안팎에서 블레이즈가 자주 나타납니다."]}),at("road_kill_blaze","블레이즈 막대","방패나 활을 준비하고 블레이즈를 처치해 막대를 얻으세요.",["road_find_fortress"],zs("블레이즈",1,"블레이즈 처치"),["iron_sword","shield","bow","blaze_rod"],{items:[{item:"torch",count:4}]}),at("road_make_blaze_powder","가루로 빻기","블레이즈 막대를 가루로 바꾸면 엔더의 눈 재료가 됩니다.",["road_kill_blaze"],tn("blaze_powder",2,"블레이즈 가루 제작"),["blaze_rod","blaze_powder"]),at("road_kill_enderman","엔더 진주","지상 밤이나 지옥의 드문 엔더맨을 쓰러뜨려 엔더 진주를 확보하세요.",["road_make_blaze_powder"],si("ender_pearl",1,"엔더 진주"),["ender_pearl","diamond_sword","shield"]),at("road_make_eye","엔더의 눈","엔더 진주와 블레이즈 가루를 합쳐 요새 추적의 핵심 아이템을 만드세요.",["road_kill_enderman"],tn("eye_of_ender",1,"엔더의 눈 제작"),["ender_pearl","blaze_powder","eye_of_ender"],{unlockHints:["엔더의 눈을 우클릭하면 요새가 있는 방향으로 날아갑니다. 가까워지면 아래로 떨어지는 듯 반응합니다."]}),at("road_find_stronghold","요새 추적","엔더의 눈을 던져 지상 어딘가의 요새를 찾고, 석재 벽돌 구조를 확인하세요.",["road_make_eye"],Pi("stronghold",1,"요새 발견"),["eye_of_ender","stone_bricks","bookshelf","end_portal_frame"],{items:[{item:"torch",count:6}],unlockHints:["요새 안쪽 책장과 철창 주변을 수색하면 엔드 포털 방이 이어집니다."]}),at("road_activate_end_portal","엔드 포털 활성화","포털 방의 빈 프레임에 엔더의 눈을 꽂아 3x3 엔드 포털을 여세요.",["road_find_stronghold"],rn("portal_ignited","end_portal",1,"엔드 포털 활성화"),["eye_of_ender","end_portal_frame","diamond_sword"],{unlockHints:["활성화된 엔드 포털 안에 서 있으면 엔드 차원으로 이동합니다."]}),at("road_enter_end","엔드 진입","활성화된 엔드 포털에 들어가 마지막 차원으로 이동하세요.",["road_activate_end_portal"],rn("dimension","end",1,"엔드 진입"),["eye_of_ender","end_portal_frame","end_stone"],{unlockHints:["엔드에서는 수정이 드래곤을 회복합니다. 기둥 위 수정을 먼저 깨면 전투가 훨씬 쉬워집니다."]}),at("road_destroy_end_crystals","수정 파괴","흑요석 기둥 위 엔드 수정을 부숴 드래곤의 회복을 끊으세요.",["road_enter_end"],Ya("end_crystal",3,"엔드 수정 파괴"),["bow","arrow","end_crystal","obsidian"],{items:[{item:"arrow",count:8}],unlockHints:["철창으로 둘러싸인 수정은 가까이 올라가거나 철창을 부숴야 맞출 수 있습니다."]}),at("road_defeat_dragon","엔더 드래곤","수정 회복을 끊고 검과 활로 엔더 드래곤을 처치하세요.",["road_destroy_end_crystals"],zs("엔더 드래곤",1,"드래곤 처치"),["diamond_sword","bow","arrow","dragon_egg"],{xp:120,unlockHints:["드래곤을 처치하면 중앙 귀환 포털이 열리고 엔딩 루프가 완료됩니다."]}),dn("side_craft_shield","방패 만들기","철 주괴와 판자로 방패를 만들어 첫 원거리 공격에 대비하세요.",[],tn("shield",1,"방패 제작"),["shield"]),dn("side_equip_iron_armor","철 방어구 장착","철 방어구 한 부위를 입어 생존성을 올리세요.",["main_smelt_iron"],rn("armor_equipped","iron",1,"철 방어구 장착"),["iron_ingot"]),dn("side_craft_bow","활 만들기","실과 막대기로 활을 만들면 스켈레톤과 크리퍼를 멀리서 견제할 수 있습니다.",[],tn("bow",1,"활 제작"),["bow","string"]),dn("side_arrow_stockpile","화살 16개","깃털, 부싯돌, 막대기로 화살을 충분히 준비하세요.",["side_craft_bow"],si("arrow",16,"화살"),["arrow","flint","feather"]),dn("side_place_bed","침대 놓기","침대를 설치해 밤을 넘기고 스폰을 저장하세요.",[],$r("bed",1,"침대 설치"),["bed","wool"]),dn("side_food_stockpile","식량 10개","동물 사냥이나 상자 보급품으로 음식 10개를 확보하세요.",[],rn("food_count","food",10,"음식"),["bread","steak","apple"]),dn("side_open_chest","상자 보급품","버려진 캠프, 오두막, 던전, 폐허 포털의 상자를 열어 보세요.",[],Pi("chest",1,"상자 열기"),["chest"]),dn("side_kill_zombie","전투 연습: 좀비","좀비를 처치해 기본 근접 전투 감각을 익히세요.",[],zs("좀비",1,"좀비 처치"),["wooden_sword"]),dn("side_kill_skeleton","전투 연습: 스켈레톤","방패나 활을 준비하고 스켈레톤을 처치하세요.",[],zs("스켈레톤",1,"스켈레톤 처치"),["shield","bow"]),dn("side_survive_creeper","크리퍼 폭발 생존","크리퍼 폭발 뒤에도 살아남으세요.",[],Pi("creeper_survived",1,"폭발 생존"),["shield"]),dn("side_place_torches","동굴 안전 확보","동굴이나 거점 주변에 횃불 10개를 설치하세요.",["main_make_torch"],$r("torch",10,"횃불 설치"),["torch"]),dn("side_discover_ruined_portal","폐허 포털 발견","지상 탐험 중 폐허 포털 흔적을 찾아보세요.",[],Pi("ruined_portal",1,"폐허 포털 발견"),["obsidian","chest"])];function Zi(){const i={activeMainQuestId:"main_get_log",trackedSideQuestIds:["side_food_stockpile","side_place_bed","side_open_chest"],completed:[],progress:{},xp:0,milestones:[]};return or(i),i}function Wa(i){const e={activeMainQuestId:(i==null?void 0:i.activeMainQuestId)??"main_get_log",trackedSideQuestIds:((i==null?void 0:i.trackedSideQuestIds)??[]).filter(t=>!!rs(t)),completed:((i==null?void 0:i.completed)??[]).filter(t=>!!rs(t)),progress:{...(i==null?void 0:i.progress)??{}},xp:Math.max(0,Math.floor((i==null?void 0:i.xp)??0)),milestones:[...(i==null?void 0:i.milestones)??[]]};return or(e),e}function Nl(i,e,t){for(const n of Yn)n.objectives.forEach((s,r)=>{(s.type==="item"||s.type==="crafted"||s.type==="smelted")&&um(s.target)?i.progress[Dn(n.id,r)]=Math.max(i.progress[Dn(n.id,r)]??0,ui(e,s.target)):s.type==="food_count"?i.progress[Dn(n.id,r)]=hm(e):s.type==="armor_equipped"?i.progress[Dn(n.id,r)]=dm(e,s.target)?1:0:s.type==="dimension"&&(i.progress[Dn(n.id,r)]=t===s.target?1:i.progress[Dn(n.id,r)]??0)});return cm(i)}function om(i,e,t,n){const s=e.amount??1;for(const o of Yn)o.objectives.forEach((a,l)=>{if(a.type!==e.type||a.target!==e.target)return;const c=Dn(o.id,l);i.progress[c]=Math.min(a.required,(i.progress[c]??0)+s)});const r=Nl(i,t,n);return or(i),r}function am(i){return i?rs(i):null}function qa(i){return am(i.activeMainQuestId)}function Xa(i){return i.trackedSideQuestIds.map(e=>rs(e)).filter(Boolean)}function $a(i,e){return i.objectives.map((t,n)=>{const s=Math.min(t.required,Math.floor(e.progress[Dn(i.id,n)]??0));return`${t.progressTextKo} ${s}/${t.required}`}).join(" · ")}function lm(i){return Yn.filter(e=>e.hintItemIds.includes(i)||e.objectives.some(t=>t.target===i))}function cm(i){const e=[];let t=!0;for(;t;){t=!1;for(const n of Yn)if(!(i.completed.includes(n.id)||n.future||!Ys(n,i)||!n.objectives.every((r,o)=>(i.progress[Dn(n.id,o)]??0)>=r.required))){i.completed.push(n.id),i.xp+=n.rewards.xp??(n.category==="main"?25:10);for(const r of n.rewards.unlockHints??[])i.milestones.includes(r)||i.milestones.push(r);e.push(n),t=!0}}return or(i),e}function or(i){const e=Yn.find(s=>s.category==="main"&&!s.future&&!i.completed.includes(s.id)&&Ys(s,i));i.activeMainQuestId=(e==null?void 0:e.id)??null;const t=i.trackedSideQuestIds.filter(s=>{const r=rs(s);return r&&!r.future&&!i.completed.includes(s)&&Ys(r,i)}),n=Yn.filter(s=>s.category!=="main"&&!s.future&&!i.completed.includes(s.id)&&Ys(s,i)&&!t.includes(s.id)).slice(0,3).map(s=>s.id);i.trackedSideQuestIds=[...t,...n].slice(0,3)}function Ys(i,e){return i.prerequisites.every(t=>e.completed.includes(t))}function Dn(i,e){return`${i}:${e}`}function rs(i){return Yn.find(e=>e.id===i)??null}function hm(i){return i.slots.reduce((e,t)=>e+(t&&lt[t.item].food?t.count:0),0)}function dm(i,e){return Object.values(i.armorSlots).some(t=>!!(t!=null&&t.item.startsWith(`${e}_`)))}function um(i){return i in lt}function at(i,e,t,n,s,r=[],o={}){return Fl(i,"main",e,t,n,s,r,o)}function dn(i,e,t,n,s,r=[],o={}){const a=s.type==="mob_killed"||i==="side_survive_creeper"?"combat":s.type==="discover"||i==="side_place_bed"?"exploration":s.type==="crafted"||s.type==="block_placed"?"crafting":"side";return Fl(i,a,e,t,n,s,r,o)}function Fl(i,e,t,n,s,r,o,a={}){return{id:i,titleKo:t,descriptionKo:n,category:e,prerequisites:s,objectives:[r],rewards:{toastKo:a.toastKo??`${t} 완료`,items:a.items,xp:a.xp,unlockHints:a.unlockHints},hintItemIds:o}}function si(i,e,t){return rn("item",i,e,t)}function tn(i,e,t){return rn("crafted",i,e,t)}function fm(i,e,t){return rn("smelted",i,e,t)}function Ya(i,e,t){return rn("block_mined",i,e,t)}function $r(i,e,t){return rn("block_placed",i,e,t)}function zs(i,e,t){return rn("mob_killed",i,e,t)}function Pi(i,e,t){return rn("discover",i,e,t)}function rn(i,e,t,n){return{type:i,target:e,required:t,progressTextKo:n}}class pm{constructor(e){D(this,"root",new ut);D(this,"hand",new ut);D(this,"itemRoot",new ut);D(this,"skinMaterial",this.makeMaterial("#c98f64"));D(this,"sleeveMaterial",this.makeMaterial("#3f78b5"));D(this,"activeKey","");D(this,"swing",0);this.root.name="FirstPersonHand",this.root.position.set(.48,-.54,-.86),this.root.rotation.set(-.14,-.2,.02),this.root.renderOrder=30,this.hand.position.set(.08,-.04,.12),this.hand.rotation.set(.2,-.22,-.12);const t=new nt(new Mt(.16,.2,.46),this.sleeveMaterial);t.position.set(.02,-.06,.2),t.rotation.x=-.2;const n=new nt(new Mt(.2,.18,.22),this.skinMaterial);n.position.set(0,.02,-.06),this.hand.add(t,n),this.root.add(this.hand,this.itemRoot),e.add(this.root)}update(e,t,n,s){if(this.root.visible=n,!n)return;this.swing=Math.max(0,this.swing-e*5.5),s>0&&(this.swing=Math.max(this.swing,Math.min(1,s)));const r=t?`${t.item}:${t.durability??""}`:"";r!==this.activeKey&&(this.activeKey=r,this.rebuildItem(t),this.swing=.45);const o=Math.sin(performance.now()*.006)*.01,a=Math.sin(this.swing*Math.PI)*.24;this.root.position.set(.48-a*.1,-.54+o-a*.08,-.86-a*.12),this.root.rotation.set(-.14-a*.62,-.2-a*.08,.02+a*.2),this.itemRoot.rotation.z=Math.sin(this.swing*Math.PI)*-.12}rebuildItem(e){if(this.itemRoot.clear(),!e)return;const t=lt[e.item],n=this.makeMaterial(t.color),s=this.makeMaterial(this.highlightColor(t.color,.62)),r=this.makeMaterial(this.highlightColor(t.color,1.35));if(t.placeBlock){const l=new nt(new Mt(.34,.34,.34),this.makeBlockMaterials(t.color));l.position.set(-.11,.11,-.3),l.rotation.set(.64,-.72,.28),this.itemRoot.add(l);const c=new nt(new Mt(.342,.018,.342),r);c.position.set(-.11,.29,-.3),c.rotation.copy(l.rotation),this.itemRoot.add(c);return}if(t.toolKind==="pickaxe"){const l=new ut;l.position.set(-.1,.08,-.28),l.rotation.set(.2,-.22,-.74),this.addPart(l,[.055,.62,.055],[0,-.08,0],[0,0,0],this.makeMaterial("#8a5a32")),this.addPart(l,[.48,.07,.08],[0,.25,0],[0,0,0],s),this.addPart(l,[.32,.075,.09],[-.08,.29,0],[0,0,0],n),this.addPart(l,[.09,.15,.09],[-.29,.19,0],[0,0,0],n),this.addPart(l,[.09,.15,.09],[.21,.19,0],[0,0,0],n),this.addPart(l,[.26,.018,.095],[-.08,.33,-.003],[0,0,0],r),this.itemRoot.add(l);return}if(t.toolKind==="axe"){const l=new ut;l.position.set(-.08,.07,-.28),l.rotation.set(.18,-.2,-.72),this.addPart(l,[.055,.6,.055],[0,-.08,0],[0,0,0],this.makeMaterial("#8a5a32")),this.addPart(l,[.24,.25,.085],[-.11,.24,0],[0,0,-.12],n),this.addPart(l,[.12,.14,.08],[.05,.24,0],[0,0,.22],s),this.addPart(l,[.18,.026,.09],[-.13,.36,-.003],[0,0,-.12],r),this.itemRoot.add(l);return}if(t.toolKind==="shovel"){const l=new ut;l.position.set(-.08,.07,-.28),l.rotation.set(.18,-.2,-.72),this.addPart(l,[.055,.56,.055],[0,-.09,0],[0,0,0],this.makeMaterial("#8a5a32")),this.addPart(l,[.18,.22,.075],[0,.25,0],[0,0,.78],n),this.addPart(l,[.11,.032,.08],[.02,.34,-.003],[0,0,.78],r),this.itemRoot.add(l);return}if(t.toolKind==="sword"){const l=new ut;l.position.set(-.09,.04,-.28),l.rotation.set(.16,-.18,-.7),this.addPart(l,[.06,.22,.06],[0,-.19,0],[0,0,0],this.makeMaterial("#70421f")),this.addPart(l,[.28,.055,.07],[0,-.07,0],[0,0,0],this.makeMaterial("#6d4b31")),this.addPart(l,[.085,.58,.045],[0,.24,0],[0,0,0],n),this.addPart(l,[.022,.48,.048],[.032,.27,-.003],[0,0,0],r),this.itemRoot.add(l);return}if(t.toolKind==="bow"){const l=new ut;l.position.set(-.09,.08,-.27),l.rotation.set(.22,-.16,-.16),this.addPart(l,[.055,.24,.045],[-.1,-.04,0],[0,0,-.46],this.makeMaterial("#9b6638")),this.addPart(l,[.055,.28,.045],[-.08,.16,0],[0,0,0],this.makeMaterial("#b07942")),this.addPart(l,[.055,.24,.045],[-.1,.38,0],[0,0,.46],this.makeMaterial("#9b6638")),this.addPart(l,[.016,.58,.016],[.02,.16,-.03],[0,0,0],this.makeMaterial("#e8e2d2")),this.addPart(l,[.18,.035,.025],[-.02,.16,-.04],[0,0,0],this.makeMaterial("#d8d3c0")),this.itemRoot.add(l);return}if(t.toolKind==="shield"){const l=new nt(new Mt(.34,.45,.06),n);l.position.set(-.08,.09,-.24),l.rotation.set(.32,-.72,.06);const c=new nt(new Mt(.32,.07,.06),this.makeMaterial("#c9d1d1"));c.position.set(-.08,.12,-.275),c.rotation.copy(l.rotation),this.itemRoot.add(l,c);return}if(t.toolKind==="shears"){const l=new ut;l.position.set(-.08,.1,-.25),l.rotation.set(.24,-.36,-.34),this.addPart(l,[.2,.035,.035],[-.05,.06,0],[0,0,.74],n),this.addPart(l,[.2,.035,.035],[.05,.06,0],[0,0,-.74],n),this.addPart(l,[.08,.08,.035],[-.09,-.05,0],[0,0,0],s),this.addPart(l,[.08,.08,.035],[.09,-.05,0],[0,0,0],s),this.itemRoot.add(l);return}const o=new nt(new Mt(t.food?.22:.26,t.food?.22:.26,.05),n);o.position.set(-.08,.12,-.24),o.rotation.set(.4,-.58,.18);const a=new nt(new Mt(.08,.02,.052),r);a.position.set(-.14,.19,-.27),a.rotation.copy(o.rotation),this.itemRoot.add(o,a)}addPart(e,t,n,s,r){const o=new nt(new Mt(...t),r);return o.position.set(...n),o.rotation.set(...s),e.add(o),o}makeBlockMaterials(e){return[this.makeMaterial(this.highlightColor(e,.82)),this.makeMaterial(this.highlightColor(e,.62)),this.makeMaterial(this.highlightColor(e,1.24)),this.makeMaterial(this.highlightColor(e,.58)),this.makeMaterial(this.highlightColor(e,.94)),this.makeMaterial(this.highlightColor(e,.72))]}highlightColor(e,t){const n=new Re(e);return n.r=Math.min(1,n.r*t),n.g=Math.min(1,n.g*t),n.b=Math.min(1,n.b*t),`#${n.getHexString()}`}makeMaterial(e){return new Nt({color:e,depthTest:!1,depthWrite:!1})}}const Ka=[{id:"smelt_copper",name:"구리 주괴 제련",input:"raw_copper",fuel:"coal",result:{item:"copper_ingot",count:1},seconds:10},{id:"smelt_iron",name:"철 주괴 제련",input:"raw_iron",fuel:"coal",result:{item:"iron_ingot",count:1},seconds:10},{id:"smelt_gold",name:"금 주괴 제련",input:"raw_gold",fuel:"coal",result:{item:"gold_ingot",count:1},seconds:10},{id:"cook_beef",name:"스테이크 굽기",input:"raw_beef",fuel:"coal",result:{item:"steak",count:1},seconds:10},{id:"cook_porkchop",name:"돼지고기 굽기",input:"raw_porkchop",fuel:"coal",result:{item:"cooked_porkchop",count:1},seconds:10},{id:"cook_mutton",name:"양고기 굽기",input:"raw_mutton",fuel:"coal",result:{item:"cooked_mutton",count:1},seconds:10},{id:"cook_chicken",name:"닭고기 굽기",input:"raw_chicken",fuel:"coal",result:{item:"cooked_chicken",count:1},seconds:10}];function co(i,e){return ui(e,i.input)>0&&ui(e,i.fuel)>0}function mm(i,e,t=!1){let n=0;for(;co(i,e);){if(er(e,i.input,1),er(e,i.fuel,1),$t(e,{...i.result})){$t(e,{item:i.input,count:1}),$t(e,{item:i.fuel,count:1});break}if(n+=i.result.count,!t||n>=64)break}return n}function ar(i){return new Promise((e,t)=>{i.oncomplete=i.onsuccess=()=>e(i.result),i.onabort=i.onerror=()=>t(i.error)})}function gm(i,e){let t;const n=()=>{if(t)return t;const s=indexedDB.open(i);return s.onupgradeneeded=()=>s.result.createObjectStore(e),t=ar(s),t.then(r=>{r.onclose=()=>t=void 0},()=>{}),t};return(s,r)=>n().then(o=>r(o.transaction(e,s).objectStore(e)))}let Yr;function yo(){return Yr||(Yr=gm("keyval-store","keyval")),Yr}function Kr(i,e=yo()){return e("readonly",t=>ar(t.get(i)))}function _m(i,e,t=yo()){return t("readwrite",n=>(n.put(e,i),ar(n.transaction)))}function Qa(i,e=yo()){return e("readwrite",t=>(t.delete(i),ar(t.transaction)))}const Qr="voxel-frontier:save:v1",jr="voxel-frontier:saves:v2";class vm{async loadIndex(){const e=await Kr(jr);if((e==null?void 0:e.version)===2||(e==null?void 0:e.version)===3||(e==null?void 0:e.version)===4)return e;const t=await Kr(Qr);return(t==null?void 0:t.version)===1?{version:4,activeWorldId:"legacy-world",worlds:[]}:{version:4,activeWorldId:null,worlds:[]}}async loadLegacy(){const e=await Kr(Qr);return(e==null?void 0:e.version)===1?e:null}async saveIndex(e){await _m(jr,e)}async upsertWorld(e){const t=await this.loadIndex(),n=t.worlds.findIndex(s=>s.id===e.id);return n>=0?t.worlds[n]=e:t.worlds.unshift(e),t.version=4,t.activeWorldId=e.id,t.worlds.sort((s,r)=>r.updatedAt-s.updatedAt),await this.saveIndex(t),t}async deleteWorld(e){var n;const t=await this.loadIndex();return t.worlds=t.worlds.filter(s=>s.id!==e),t.activeWorldId===e&&(t.activeWorldId=((n=t.worlds[0])==null?void 0:n.id)??null),await this.saveIndex(t),t}async clearAll(){await Qa(Qr),await Qa(jr)}}function Hs(i){return{health:20,hunger:20,saturation:5,exhaustion:0,air:20,spawn:[i.x,i.y,i.z],alive:!0,invulnerabilityTimer:0}}class ja{constructor(e){D(this,"tickTimer",0);this.state=e}update(e,t,n,s){this.state.alive&&(this.state.invulnerabilityTimer=Math.max(0,this.state.invulnerabilityTimer-e),t?(this.state.air=Math.max(0,this.state.air-e*1.8),this.state.air<=0&&(this.tickTimer+=e,this.tickTimer>=1&&(this.damage(2),this.tickTimer=0))):this.state.air=Math.min(20,this.state.air+e*7),n&&s&&this.addExhaustion(e*.1),this.state.exhaustion>=4&&(this.state.exhaustion-=4,this.state.saturation>0?this.state.saturation=Math.max(0,this.state.saturation-1):this.state.hunger=Math.max(0,this.state.hunger-1)),this.tickTimer+=e,this.state.hunger>=18&&this.state.health<20&&this.tickTimer>=4&&(this.heal(1),this.addExhaustion(.75),this.tickTimer=0),this.state.hunger<=0&&this.tickTimer>=4&&(this.damage(1,!0),this.tickTimer=0))}canSprint(){return this.state.hunger>6&&this.state.alive}addExhaustion(e){this.state.exhaustion+=e}eat(e,t){this.state.hunger=ct(this.state.hunger+e,0,20),this.state.saturation=ct(this.state.saturation+t,0,this.state.hunger)}damage(e,t={}){if(!this.state.alive)return 0;const n=typeof t=="boolean"?{ignoreInvulnerability:t}:t;if(!(n.ignoreInvulnerability??!1)&&this.state.invulnerabilityTimer>0)return 0;const r=Sm(e,n.armorSlots,n.blocking??!1);return r<=0?0:(this.state.health=Math.max(0,this.state.health-r),this.state.invulnerabilityTimer=.7,this.addExhaustion(.1),this.state.health<=0&&(this.state.alive=!1),r)}heal(e){this.state.health=ct(this.state.health+e,0,20)}respawn(){this.state.health=20,this.state.hunger=20,this.state.saturation=5,this.state.exhaustion=0,this.state.air=20,this.state.alive=!0,this.state.invulnerabilityTimer=1.5}}function ym(i){return Object.values(i).reduce((e,t)=>{var n;return e+(t?((n=lt[t.item].armor)==null?void 0:n.points)??0:0)},0)}function Mm(i){return Object.values(i).reduce((e,t)=>{var n;return e+(t?((n=lt[t.item].armor)==null?void 0:n.toughness)??0:0)},0)}function Sm(i,e,t=!1){let n=i;if(t&&(n*=.45),e){const s=ym(e),r=Mm(e),o=Math.min(20,Math.max(s/5,s-n/(2+r/4)))/25;n*=1-o}return Math.max(1,Math.round(n))}const xm=210;class bm{constructor(e){D(this,"sunDirection",new R(.4,1,.2).normalize());D(this,"skyGroup",new ut);D(this,"cloudGroup",new ut);D(this,"skyMaterial");D(this,"starMaterial");D(this,"sun");D(this,"moon");const t=new is(420,48,24);this.skyMaterial=new Un({uniforms:{uDay:{value:1}},vertexShader:`
        varying vec3 vWorldPosition;

        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,fragmentShader:`
        varying vec3 vWorldPosition;
        uniform float uDay;

        void main() {
          float h = clamp(normalize(vWorldPosition).y * 0.5 + 0.5, 0.0, 1.0);
          vec3 dayTop = vec3(0.26, 0.58, 0.90);
          vec3 dayHorizon = vec3(0.90, 0.78, 0.58);
          vec3 nightTop = vec3(0.012, 0.026, 0.070);
          vec3 nightHorizon = vec3(0.090, 0.120, 0.160);
          vec3 dayColor = mix(dayHorizon, dayTop, pow(h, 0.72));
          vec3 nightColor = mix(nightHorizon, nightTop, pow(h, 1.18));
          gl_FragColor = vec4(mix(nightColor, dayColor, uDay), 1.0);
        }
      `,side:1,depthWrite:!1});const n=new nt(t,this.skyMaterial);n.frustumCulled=!1,this.skyGroup.add(n),this.sun=new nt(new is(9,32,16),new Nt({color:"#fff0ad"})),this.moon=new nt(new is(6,28,14),new Nt({color:"#d7e1ec"})),this.skyGroup.add(this.sun,this.moon,this.makeStars()),e.add(this.skyGroup),this.makeClouds(),e.add(this.cloudGroup)}update(e,t){const s=e/xm%1*Math.PI*2+Math.PI*.28;this.sunDirection.set(Math.cos(s)*.72,Math.sin(s),Math.sin(s*.7)*.28).normalize();const r=Bp(-.12,.32,this.sunDirection.y);return this.skyMaterial.uniforms.uDay.value=r,this.starMaterial.opacity=1-r,this.skyGroup.position.copy(t),this.sun.position.copy(this.sunDirection).multiplyScalar(355),this.moon.position.copy(this.sunDirection).multiplyScalar(-330),this.sun.visible=r>.03,this.moon.visible=r<.88,this.cloudGroup.position.set(t.x+e*.42%70,56,t.z),this.cloudGroup.children.forEach((o,a)=>{o.position.x+=Math.sin(e*.05+a)*.001}),{dayFactor:r,sunDirection:this.sunDirection}}makeStars(){const e=li(1779033703),t=[];for(let s=0;s<720;s+=1){const r=e()*Math.PI*2,o=Math.acos(e()*2-1),a=385,l=Math.cos(o)*a;l<-30||t.push(Math.sin(o)*Math.cos(r)*a,l,Math.sin(o)*Math.sin(r)*a)}const n=new jt;return n.setAttribute("position",new Rt(t,3)),this.starMaterial=new gl({color:"#f7fbff",size:1.25,transparent:!0,opacity:0,depthWrite:!1}),new Lc(n,this.starMaterial)}makeClouds(){const e=new Nt({color:"#f5f7ef",transparent:!0,opacity:.68,depthWrite:!1}),t=new Mt(1,1,1),n=li(608135816);for(let s=0;s<26;s+=1){const r=new ut,o=(n()-.5)*260,a=(n()-.5)*260;r.position.set(o,n()*12,a);const l=4+Math.floor(n()*6);for(let c=0;c<l;c+=1){const h=new nt(t,e);h.position.set((n()-.5)*20,(n()-.5)*2,(n()-.5)*9),h.scale.set(8+n()*12,1+n()*1.2,4+n()*5),r.add(h)}this.cloudGroup.add(r)}}}const Ae=32,hi=6,ho=9,Em=hi*Ae,wm=ho*Ae;function Ul({r:i,g:e,b:t}){return`rgb(${i}, ${e}, ${t})`}function Bl(i,e){return{r:Math.round(Math.max(0,Math.min(255,i.r+e))),g:Math.round(Math.max(0,Math.min(255,i.g+e))),b:Math.round(Math.max(0,Math.min(255,i.b+e)))}}function $e(i){return[i%hi*Ae,Math.floor(i/hi)*Ae]}function st(i,e,t){let n=Math.imul(e+i*31,1103515245)^Math.imul(t+17,12345);return n^=n>>>13,n=Math.imul(n,1274126177),((n^n>>>16)>>>0)/4294967296}function ht(i,e,t,n,s=2){const[r,o]=$e(e);for(let a=0;a<Ae;a+=s)for(let l=0;l<Ae;l+=s){const c=(st(e,l,a)-.5)*n;i.fillStyle=Ul(Bl(t,c)),i.fillRect(r+l,o+a,s,s)}}function Tm(i){ht(i,ee.GrassSide,{r:120,g:87,b:54},34,2);const[e,t]=$e(ee.GrassSide);for(let n=0;n<11;n+=1)for(let s=0;s<Ae;s+=2){const r=Math.floor(st(ee.GrassSide,s,n)*5);i.fillStyle=Ul(Bl({r:82,g:145,b:65},st(ee.GrassTop,s,n)*22)),i.fillRect(e+s,t+n,2,Math.max(1,7-n+r))}}function lr(i,e){const[t,n]=$e(e);i.strokeStyle="rgba(38, 45, 45, 0.4)",i.lineWidth=1;for(let s=0;s<7;s+=1){const r=Math.floor(st(e,s,2)*Ae),o=Math.floor(st(e,s,7)*Ae);i.beginPath(),i.moveTo(t+r,n+o);for(let a=0;a<4;a+=1){const l=r+(st(e,s,a)-.5)*22,c=o+a*6+(st(e,a,s)-.5)*12;i.lineTo(t+l,n+c)}i.stroke()}}function Jr(i,e,t,n,s){const[r,o]=$e(e);for(let a=0;a<s;a+=1){const l=Math.floor(st(e,a,41)*29)+1,c=Math.floor(st(e,a,53)*29)+1;i.fillStyle=a%3===0?n:t,i.fillRect(r+l,o+c,2+a%2,2)}}function Am(i){const[e,t]=$e(ee.GrassTop);for(let n=0;n<32;n+=1){const s=Math.floor(st(ee.GrassTop,n,61)*30)+1,r=Math.floor(st(ee.GrassTop,n,67)*30)+1;i.fillStyle=n%4===0?"rgba(160, 218, 98, 0.55)":"rgba(42, 104, 42, 0.42)",i.fillRect(e+s,t+r,2,4)}}function Cm(i){ht(i,ee.LogTop,{r:154,g:111,b:62},28,2);const[e,t]=$e(ee.LogTop);i.strokeStyle="rgba(82, 48, 27, 0.55)",i.lineWidth=2;for(let n=4;n<16;n+=5)i.beginPath(),i.ellipse(e+16,t+16,n,n*.82,.18,0,Math.PI*2),i.stroke()}function Rm(i){ht(i,ee.LogSide,{r:116,g:74,b:38},30,2);const[e,t]=$e(ee.LogSide);for(let n=2;n<Ae;n+=6)i.fillStyle=n%12===2?"rgba(65, 38, 23, 0.38)":"rgba(181, 118, 60, 0.2)",i.fillRect(e+n,t,2,Ae)}function Pm(i){ht(i,ee.Water,{r:52,g:139,b:194},26,2);const[e,t]=$e(ee.Water);i.strokeStyle="rgba(204, 241, 255, 0.42)",i.lineWidth=2;for(let n=4;n<Ae;n+=9){i.beginPath(),i.moveTo(e+1,t+n);for(let s=1;s<=Ae;s+=6)i.lineTo(e+s,t+n+Math.sin((s+n)*.4)*2);i.stroke()}}function km(i){ht(i,ee.Brick,{r:153,g:74,b:67},26,2);const[e,t]=$e(ee.Brick);i.fillStyle="rgba(71, 35, 33, 0.5)";for(let n=8;n<Ae;n+=10)i.fillRect(e,t+n,Ae,2);for(let n=0;n<4;n+=1){const s=n%2===0?0:8;for(let r=s;r<Ae;r+=16)i.fillRect(e+r,t+n*10,2,10)}}function Lm(i){ht(i,ee.Planks,{r:178,g:126,b:69},30,2);const[e,t]=$e(ee.Planks);i.fillStyle="rgba(71, 40, 22, 0.42)";for(let n=8;n<Ae;n+=8)i.fillRect(e,t+n,Ae,2);for(let n=7;n<Ae;n+=11)i.fillRect(e+n,t,2,Ae)}function Dm(i){ht(i,ee.CraftingTable,{r:149,g:91,b:48},28,2);const[e,t]=$e(ee.CraftingTable);i.fillStyle="rgba(49, 29, 18, 0.68)",i.fillRect(e+4,t+4,24,3),i.fillRect(e+4,t+25,24,3),i.fillRect(e+4,t+4,3,24),i.fillRect(e+25,t+4,3,24),i.fillStyle="rgba(224, 180, 96, 0.54)",i.fillRect(e+10,t+10,12,3),i.fillRect(e+10,t+19,12,3),i.fillRect(e+10,t+10,3,12),i.fillRect(e+19,t+10,3,12),i.fillStyle="rgba(224, 224, 202, 0.35)",i.fillRect(e+6,t+14,20,2)}function yn(i,e,t,n){ht(i,e,{r:111,g:118,b:118},28,2),lr(i,e);const[s,r]=$e(e);for(let o=0;o<14;o+=1){const a=Math.floor(st(e,o,3)*28)+2,l=Math.floor(st(e,o,11)*28)+2;i.fillStyle=o%2===0?t:n,i.fillRect(s+a,r+l,o%3===0?4:3,3)}}function Ja(i,e,t){if(ht(i,e,{r:104,g:111,b:108},28,2),lr(i,e),!t)return;const[n,s]=$e(e);i.fillStyle="rgba(20, 22, 22, 0.72)",i.fillRect(n+7,s+8,18,12),i.fillStyle="rgba(255, 143, 44, 0.82)",i.fillRect(n+10,s+22,12,4)}function Im(i){ht(i,ee.Chest,{r:156,g:98,b:44},30,2);const[e,t]=$e(ee.Chest);i.fillStyle="rgba(62, 35, 17, 0.58)",i.fillRect(e,t+14,Ae,3),i.fillRect(e+4,t+4,3,24),i.fillRect(e+25,t+4,3,24),i.fillStyle="#d7c16a",i.fillRect(e+14,t+13,5,7)}function Nm(i){const[e,t]=$e(ee.Torch);i.clearRect(e,t,Ae,Ae),i.fillStyle="#80502a",i.fillRect(e+14,t+12,5,18),i.fillStyle="#ff9c2e",i.fillRect(e+10,t+4,13,10),i.fillStyle="#ffe06a",i.fillRect(e+13,t+2,7,7)}function Fm(i){ht(i,ee.Gravel,{r:120,g:122,b:120},44,2);const[e,t]=$e(ee.Gravel);for(let n=0;n<18;n+=1){const s=Math.floor(st(ee.Gravel,n,5)*28)+2,r=Math.floor(st(ee.Gravel,n,13)*28)+2,o=n%3===0?"rgba(210, 210, 198, 0.38)":"rgba(38, 38, 38, 0.34)";i.fillStyle=o,i.fillRect(e+s,t+r,3+n%2,3)}}function Um(i){const[e,t]=$e(ee.Bed);ht(i,ee.Bed,{r:178,g:74,b:67},20,2),i.fillStyle="#e8e0d2",i.fillRect(e+4,t+4,24,9),i.fillStyle="#8b2d2d",i.fillRect(e+4,t+13,24,13),i.fillStyle="rgba(45, 20, 18, 0.45)",i.fillRect(e+4,t+25,24,3),i.fillStyle="rgba(255, 255, 255, 0.24)",i.fillRect(e+8,t+16,14,2)}function Bm(i){ht(i,ee.Lava,{r:214,g:76,b:28},42,2);const[e,t]=$e(ee.Lava);i.strokeStyle="rgba(255, 220, 88, 0.72)",i.lineWidth=3;for(let n=5;n<Ae;n+=8){i.beginPath(),i.moveTo(e+1,t+n);for(let s=1;s<=Ae;s+=5)i.lineTo(e+s,t+n+Math.sin((s+n)*.42)*2.5);i.stroke()}i.fillStyle="rgba(255, 237, 117, 0.65)",i.fillRect(e+8,t+9,5,5),i.fillRect(e+21,t+20,4,4)}function Za(i,e){ht(i,e,{r:34,g:27,b:50},32,2);const[t,n]=$e(e);i.strokeStyle="rgba(128, 86, 190, 0.36)",i.lineWidth=1;for(let s=0;s<9;s+=1){const r=Math.floor(st(e,s,19)*Ae),o=Math.floor(st(e,s,31)*Ae);i.beginPath(),i.moveTo(t+r,n+o),i.lineTo(t+r+(st(e,s,7)-.5)*22,n+o+10),i.stroke()}}function Om(i){const[e,t]=$e(ee.Fire);i.clearRect(e,t,Ae,Ae),i.fillStyle="rgba(255, 220, 66, 0.82)",i.beginPath(),i.moveTo(e+7,t+28),i.lineTo(e+13,t+8),i.lineTo(e+18,t+18),i.lineTo(e+23,t+4),i.lineTo(e+27,t+28),i.closePath(),i.fill(),i.fillStyle="rgba(255, 102, 36, 0.86)",i.beginPath(),i.moveTo(e+4,t+30),i.lineTo(e+10,t+12),i.lineTo(e+16,t+24),i.lineTo(e+21,t+10),i.lineTo(e+29,t+30),i.closePath(),i.fill()}function Gm(i){ht(i,ee.NetherPortal,{r:83,g:45,b:176},50,2);const[e,t]=$e(ee.NetherPortal);i.strokeStyle="rgba(230, 196, 255, 0.54)",i.lineWidth=2;for(let n=4;n<Ae;n+=8){i.beginPath(),i.moveTo(e+n,t+2);for(let s=2;s<Ae;s+=5)i.lineTo(e+n+Math.sin((s+n)*.35)*3,t+s);i.stroke()}}function zm(i){ht(i,ee.Netherrack,{r:126,g:47,b:45},42,2);const[e,t]=$e(ee.Netherrack);i.strokeStyle="rgba(50, 16, 20, 0.42)",i.lineWidth=1;for(let n=0;n<10;n+=1){const s=Math.floor(st(ee.Netherrack,n,5)*Ae),r=Math.floor(st(ee.Netherrack,n,11)*Ae);i.beginPath(),i.moveTo(e+s,t+r),i.lineTo(e+s+(st(ee.Netherrack,n,19)-.5)*18,t+r+8),i.stroke()}}function Hm(i){ht(i,ee.NetherBrick,{r:61,g:27,b:36},24,2);const[e,t]=$e(ee.NetherBrick);i.fillStyle="rgba(18, 9, 13, 0.62)";for(let n=7;n<Ae;n+=8)i.fillRect(e,t+n,Ae,2);for(let n=0;n<4;n+=1){const s=n%2===0?0:10;for(let r=s;r<Ae;r+=16)i.fillRect(e+r,t+n*8,2,8)}}function Zr(i,e,t=!1,n=!1){ht(i,e,t?{r:104,g:120,b:98}:{r:116,g:124,b:121},26,2);const[s,r]=$e(e);i.fillStyle="rgba(34, 40, 39, 0.42)";for(let o=7;o<Ae;o+=8)i.fillRect(s,r+o,Ae,2);for(let o=0;o<4;o+=1){const a=o%2===0?0:10;for(let l=a;l<Ae;l+=16)i.fillRect(s+l,r+o*8,2,8)}if(t){i.fillStyle="rgba(57, 113, 56, 0.52)";for(let o=0;o<9;o+=1){const a=Math.floor(st(e,o,17)*28)+1,l=Math.floor(st(e,o,23)*28)+1;i.fillRect(s+a,r+l,3+o%3,5)}}n&&(lr(i,e),i.strokeStyle="rgba(12, 15, 15, 0.58)",i.lineWidth=2,i.beginPath(),i.moveTo(s+9,r+3),i.lineTo(s+15,r+12),i.lineTo(s+12,r+19),i.lineTo(s+20,r+30),i.stroke())}function Vm(i){ht(i,ee.Bookshelf,{r:132,g:82,b:40},18,2);const[e,t]=$e(ee.Bookshelf);i.fillStyle="rgba(45, 24, 12, 0.6)",i.fillRect(e+2,t+7,28,2),i.fillRect(e+2,t+16,28,2),i.fillRect(e+2,t+25,28,2);const n=["#a94b40","#e2c35f","#4f75bf","#6aa35f","#d8d2b7"];for(let s=0;s<3;s+=1)for(let r=0;r<6;r+=1)i.fillStyle=n[(s+r)%n.length],i.fillRect(e+4+r*4,t+2+s*9,3,6)}function Wm(i){const[e,t]=$e(ee.IronBars);i.clearRect(e,t,Ae,Ae),i.fillStyle="rgba(190, 200, 198, 0.88)";for(let n=6;n<Ae;n+=8)i.fillRect(e+n,t+1,3,30);i.fillStyle="rgba(78, 86, 86, 0.78)",i.fillRect(e+2,t+8,28,3),i.fillRect(e+2,t+21,28,3),i.fillStyle="rgba(255, 255, 255, 0.35)",i.fillRect(e+7,t+2,1,28),i.fillRect(e+23,t+2,1,28)}function el(i,e,t){ht(i,e,{r:102,g:138,b:98},26,2);const[n,s]=$e(e);i.fillStyle="rgba(35, 55, 44, 0.72)",i.fillRect(n+3,s+3,26,26),i.fillStyle="#b9d070",i.fillRect(n+6,s+6,20,4),i.fillRect(n+6,s+22,20,4),i.fillRect(n+6,s+6,4,20),i.fillRect(n+22,s+6,4,20),t&&(i.fillStyle="#83e3ac",i.fillRect(n+11,s+11,10,10),i.fillStyle="#24443a",i.fillRect(n+14,s+14,4,4),i.fillStyle="rgba(240, 255, 210, 0.7)",i.fillRect(n+12,s+12,3,2))}function qm(i){ht(i,ee.EndPortal,{r:4,g:10,b:12},18,2);const[e,t]=$e(ee.EndPortal);for(let n=0;n<22;n+=1){const s=Math.floor(st(ee.EndPortal,n,5)*30)+1,r=Math.floor(st(ee.EndPortal,n,11)*30)+1;i.fillStyle=n%4===0?"rgba(137, 255, 195, 0.82)":"rgba(235, 255, 255, 0.68)",i.fillRect(e+s,t+r,1+n%2,1+n%2)}}function Ol(i,e){ht(i,e,{r:214,g:210,b:162},30,2);const[t,n]=$e(e);i.fillStyle="rgba(91, 83, 55, 0.22)";for(let s=0;s<16;s+=1){const r=Math.floor(st(e,s,13)*28)+2,o=Math.floor(st(e,s,29)*28)+2;i.fillRect(t+r,n+o,3+s%3,2+s%2)}}function Xm(i){Ol(i,ee.EndStoneBricks);const[e,t]=$e(ee.EndStoneBricks);i.fillStyle="rgba(97, 87, 54, 0.35)";for(let n=7;n<Ae;n+=8)i.fillRect(e,t+n,Ae,2);for(let n=0;n<4;n+=1){const s=n%2===0?0:10;for(let r=s;r<Ae;r+=16)i.fillRect(e+r,t+n*8,2,8)}}function $m(i){ht(i,ee.Bedrock,{r:54,g:58,b:60},42,2);const[e,t]=$e(ee.Bedrock);i.fillStyle="rgba(0, 0, 0, 0.34)";for(let n=0;n<18;n+=1){const s=Math.floor(st(ee.Bedrock,n,31)*28)+1,r=Math.floor(st(ee.Bedrock,n,37)*28)+1;i.fillRect(e+s,t+r,4+n%3,4)}i.fillStyle="rgba(255, 255, 255, 0.12)",i.fillRect(e+4,t+5,6,3),i.fillRect(e+21,t+18,7,2)}function Ym(i){const[e,t]=$e(ee.EndCrystal);i.clearRect(e,t,Ae,Ae),i.fillStyle="rgba(132, 97, 165, 0.5)",i.fillRect(e+8,t+23,16,5),i.fillStyle="rgba(255, 218, 255, 0.9)",i.fillRect(e+11,t+7,10,10),i.fillStyle="rgba(133, 255, 203, 0.78)",i.fillRect(e+14,t+10,4,4),i.strokeStyle="rgba(246, 232, 255, 0.7)",i.lineWidth=2,i.strokeRect(e+9,t+5,14,14),i.strokeStyle="rgba(167, 92, 220, 0.78)",i.beginPath(),i.moveTo(e+16,t+2),i.lineTo(e+26,t+12),i.lineTo(e+16,t+22),i.lineTo(e+6,t+12),i.closePath(),i.stroke()}function Km(i){const[e,t]=$e(ee.DragonEgg);i.clearRect(e,t,Ae,Ae),i.fillStyle="#17121d",i.beginPath(),i.ellipse(e+16,t+18,10,13,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(177, 92, 255, 0.62)",i.fillRect(e+12,t+9,3,4),i.fillRect(e+19,t+15,3,3),i.fillRect(e+14,t+23,4,3),i.fillStyle="rgba(255, 255, 255, 0.12)",i.fillRect(e+10,t+12,3,8)}function Qm(i){ht(i,ee.SoulSand,{r:110,g:80,b:66},34,2);const[e,t]=$e(ee.SoulSand);i.fillStyle="rgba(38, 29, 27, 0.44)";for(let n=0;n<5;n+=1){const s=5+Math.floor(st(ee.SoulSand,n,3)*18),r=5+Math.floor(st(ee.SoulSand,n,9)*18);i.fillRect(e+s,t+r,4,7),i.fillRect(e+s+8,t+r,4,7),i.fillRect(e+s+4,t+r+8,5,3)}}function jm(i){ht(i,ee.Basalt,{r:72,g:68,b:70},26,2);const[e,t]=$e(ee.Basalt);i.fillStyle="rgba(23, 22, 24, 0.36)";for(let n=4;n<Ae;n+=7)i.fillRect(e+n,t,2,Ae);i.fillStyle="rgba(190, 184, 178, 0.18)",i.fillRect(e+8,t+2,2,28),i.fillRect(e+22,t+2,2,28)}function Jm(){const i=document.createElement("canvas");i.width=Em,i.height=wm;const e=i.getContext("2d");if(!e)throw new Error("Could not create texture atlas canvas.");e.imageSmoothingEnabled=!1,ht(e,ee.GrassTop,{r:83,g:151,b:67},34,2),Am(e),Tm(e),ht(e,ee.Dirt,{r:119,g:83,b:52},38,2),Jr(e,ee.Dirt,"rgba(63, 37, 21, 0.42)","rgba(190, 133, 78, 0.32)",22),ht(e,ee.Stone,{r:129,g:137,b:135},34,2),lr(e,ee.Stone),Jr(e,ee.Stone,"rgba(56, 64, 64, 0.34)","rgba(194, 203, 200, 0.25)",18),ht(e,ee.Sand,{r:214,g:199,b:132},24,2),Jr(e,ee.Sand,"rgba(145, 120, 69, 0.26)","rgba(255, 240, 166, 0.42)",16),Pm(e),Rm(e),Cm(e),ht(e,ee.Leaves,{r:64,g:137,b:75},42,2),yn(e,ee.Ore,"#66d3d8","#d8fff8"),km(e),Lm(e),Dm(e),yn(e,ee.CoalOre,"#242827","#585f5c"),yn(e,ee.CopperOre,"#c9794a","#6ecf9a"),yn(e,ee.IronOre,"#d3aa8e","#f0d8b8"),yn(e,ee.GoldOre,"#f2c84b","#ffe899"),yn(e,ee.RedstoneOre,"#d8423a","#ff7a69"),yn(e,ee.LapisOre,"#345bd2","#5d8cff"),yn(e,ee.DiamondOre,"#65e0dc","#d8fff8"),yn(e,ee.EmeraldOre,"#4bd66d","#a6ffc0"),Ja(e,ee.FurnaceFront,!0),Ja(e,ee.FurnaceSide,!1),Im(e),Nm(e),Fm(e),Um(e),Bm(e),Za(e,ee.Obsidian),Om(e),Gm(e),Za(e,ee.RuinedPortalDebris),zm(e),Hm(e),Qm(e),jm(e),yn(e,ee.QuartzOre,"#e8dfcf","#fff8e8"),yn(e,ee.NetherGoldOre,"#f2c84b","#ffe899"),Zr(e,ee.StoneBricks),Zr(e,ee.CrackedStoneBricks,!1,!0),Zr(e,ee.MossyStoneBricks,!0),Vm(e),Wm(e),el(e,ee.EndPortalFrame,!1),el(e,ee.EndPortalFrameEye,!0),qm(e),Ol(e,ee.EndStone),Xm(e),$m(e),Ym(e),Km(e);const t=new Dc(i);return t.magFilter=1003,t.minFilter=1005,t.colorSpace=Kt,t.wrapS=1001,t.wrapT=1001,t.generateMipmaps=!0,t.needsUpdate=!0,t}function Zm(i){const e=Jm();return e.anisotropy=i,{solid:new Ui({map:e,vertexColors:!0,roughness:.92,metalness:0,side:0}),water:new Nc({map:e,color:new Re("#82d7ff"),vertexColors:!0,roughness:.12,metalness:0,transparent:!0,opacity:.58,depthWrite:!1,side:0})}}function eg(i,e){const t=e%hi,n=Math.floor(e/hi),s=.65/Ae,r=(t+s)/hi,o=(t+1-s)/hi,a=1-(n+1-s)/ho,l=1-(n+s)/ho;i.push(r,a,o,a,o,l,r,l)}const Gl=Math.sqrt(3),tg=.5*(Gl-1),es=(3-Gl)/6,ng=1/3,xn=1/6,ss=i=>Math.floor(i)|0,tl=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),eo=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function to(i=Math.random){const e=zl(i),t=new Float64Array(e).map(s=>tl[s%12*2]),n=new Float64Array(e).map(s=>tl[s%12*2+1]);return function(r,o){let a=0,l=0,c=0;const h=(r+o)*tg,d=ss(r+h),u=ss(o+h),f=(d+u)*es,g=d-f,v=u-f,m=r-g,p=o-v;let T,w;m>p?(T=1,w=0):(T=0,w=1);const x=m-T+es,A=p-w+es,C=m-1+2*es,P=p-1+2*es,F=d&255,b=u&255;let S=.5-m*m-p*p;if(S>=0){const O=F+e[b],Y=t[O],Q=n[O];S*=S,a=S*S*(Y*m+Q*p)}let L=.5-x*x-A*A;if(L>=0){const O=F+T+e[b+w],Y=t[O],Q=n[O];L*=L,l=L*L*(Y*x+Q*A)}let V=.5-C*C-P*P;if(V>=0){const O=F+1+e[b+1],Y=t[O],Q=n[O];V*=V,c=V*V*(Y*C+Q*P)}return 70*(a+l+c)}}function nl(i=Math.random){const e=zl(i),t=new Float64Array(e).map(r=>eo[r%12*3]),n=new Float64Array(e).map(r=>eo[r%12*3+1]),s=new Float64Array(e).map(r=>eo[r%12*3+2]);return function(o,a,l){let c,h,d,u;const f=(o+a+l)*ng,g=ss(o+f),v=ss(a+f),m=ss(l+f),p=(g+v+m)*xn,T=g-p,w=v-p,x=m-p,A=o-T,C=a-w,P=l-x;let F,b,S,L,V,O;A>=C?C>=P?(F=1,b=0,S=0,L=1,V=1,O=0):A>=P?(F=1,b=0,S=0,L=1,V=0,O=1):(F=0,b=0,S=1,L=1,V=0,O=1):C<P?(F=0,b=0,S=1,L=0,V=1,O=1):A<P?(F=0,b=1,S=0,L=0,V=1,O=1):(F=0,b=1,S=0,L=1,V=1,O=0);const Y=A-F+xn,Q=C-b+xn,$=P-S+xn,J=A-L+2*xn,H=C-V+2*xn,oe=P-O+2*xn,fe=A-1+3*xn,Se=C-1+3*xn,Be=P-1+3*xn,Ze=g&255,q=v&255,ie=m&255;let pe=.6-A*A-C*C-P*P;if(pe<0)c=0;else{const ye=Ze+e[q+e[ie]];pe*=pe,c=pe*pe*(t[ye]*A+n[ye]*C+s[ye]*P)}let re=.6-Y*Y-Q*Q-$*$;if(re<0)h=0;else{const ye=Ze+F+e[q+b+e[ie+S]];re*=re,h=re*re*(t[ye]*Y+n[ye]*Q+s[ye]*$)}let be=.6-J*J-H*H-oe*oe;if(be<0)d=0;else{const ye=Ze+L+e[q+V+e[ie+O]];be*=be,d=be*be*(t[ye]*J+n[ye]*H+s[ye]*oe)}let We=.6-fe*fe-Se*Se-Be*Be;if(We<0)u=0;else{const ye=Ze+1+e[q+1+e[ie+1]];We*=We,u=We*We*(t[ye]*fe+n[ye]*Se+s[ye]*Be)}return 32*(c+h+d+u)}}function zl(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=t[n];t[n]=t[s],t[s]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const In=5,ig=[{name:"top",normal:[0,1,0],shade:1.12,corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{name:"bottom",normal:[0,-1,0],shade:.52,corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{name:"east",normal:[1,0,0],shade:.9,corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{name:"west",normal:[-1,0,0],shade:.7,corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{name:"south",normal:[0,0,1],shade:.82,corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{name:"north",normal:[0,0,-1],shade:.76,corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];class il{constructor(e,t,n=In,s="overworld"){D(this,"group",new ut);D(this,"seed");D(this,"seedInt");D(this,"worldgenVersion");D(this,"dimension");D(this,"chunks",new Map);D(this,"modified",new Map);D(this,"continentalNoise");D(this,"hillNoise");D(this,"detailNoise");D(this,"caveNoise");D(this,"caveRoomNoise");D(this,"materials");this.seed=e,this.seedInt=Op(e),this.worldgenVersion=n,this.dimension=s,this.materials=t,this.continentalNoise=to(li(this.seedInt^2772082205)),this.hillNoise=to(li(this.seedInt^1374772781)),this.detailNoise=to(li(this.seedInt^2352770883)),this.caveNoise=nl(li(this.seedInt^795071649)),this.caveRoomNoise=nl(li(this.seedInt^2585556963)),this.group.name=`Codex Craft ${s} world`}setModifiedBlocks(e){this.modified.clear();for(const t of e)t.y>=0&&t.y<Xe&&this.modified.set(Vr(t.x,t.y,t.z),t.block)}forEachModifiedBlockInBounds(e,t,n,s,r){for(const[o,a]of this.modified){const[l,c,h]=Ca(o);l>=e&&l<n&&h>=t&&h<s&&c>=0&&c<Xe&&r(l,c,h,a)}}exportModifiedBlocks(){const e=[];for(const[t,n]of this.modified){const[s,r,o]=Ca(t);e.push({x:s,y:r,z:o,block:n})}return e}getStats(){return{chunks:this.chunks.size}}strongholdLocation(){const e=Ve(this.seedInt^22496,11,0,19)*Math.PI*2,t=180+Math.floor(Ve(this.seedInt^22497,17,0,23)*90),n=Math.round(Math.cos(e)*t/Me)*Me+8,s=Math.round(Math.sin(e)*t/Me)*Me+8;return new R(n,18,s)}endPillars(){return Array.from({length:8},(e,t)=>{const n=t/8*Math.PI*2+.28,s=28+t%3*5+Math.floor(Ve(this.seedInt^3613,t,0,0)*4),r=2+(t%3===0?1:0),o=48+t*2+Math.floor(Ve(this.seedInt^3629,t,0,0)*4);return{x:Math.round(Math.cos(n)*s),z:Math.round(Math.sin(n)*s),radius:r,topY:Math.min(Xe-6,o),caged:t===2||t===6}})}endCrystalLocations(){return this.endPillars().map(e=>new R(e.x,e.topY+1,e.z))}getBlock(e,t,n){if(t<0)return this.dimension==="end"?_.Air:this.dimension==="nether"?_.Basalt:_.Stone;if(t>=Xe)return _.Air;const s=this.modified.get(Vr(e,t,n));if(s!==void 0)return s;const r=Wn(e,Me),o=Wn(n,Me),a=this.chunks.get($n(r,o));return a?a.getLocal(Ci(e,Me),t,Ci(n,Me)):this.getNaturalBlock(e,t,n)}setBlock(e,t,n,s){if(t<0||t>=Xe||this.getBlock(e,t,n)===s)return!1;this.modified.set(Vr(e,t,n),s);const o=Wn(e,Me),a=Wn(n,Me),l=this.chunks.get($n(o,a));return l&&l.setLocal(Ci(e,Me),t,Ci(n,Me),s),this.markDirtyAround(e,n),!0}ensureChunksAround(e,t=Cp){var o;const n=Wn(e.x,Me),s=Wn(e.z,Me),r=new Set;for(let a=-t;a<=t;a+=1)for(let l=-t;l<=t;l+=1){const c=n+l,h=s+a,d=$n(c,h);if(r.add(d),!this.chunks.has(d)){const u=new sg(this,c,h);this.chunks.set(d,u)}}for(const[a,l]of this.chunks)Math.max(Math.abs(l.cx-n),Math.abs(l.cz-s))>t+1&&(l.dispose(this.group),this.chunks.delete(a));for(const a of r)(o=this.chunks.get(a))==null||o.rebuild(this.group,this.materials)}terrainHeight(e,t){if(this.dimension==="nether")return this.netherTerrainHeight(e,t);if(this.dimension==="end")return this.endTerrainHeight(e,t);const n=(this.continentalNoise(e*.0048,t*.0048)+1)*.5,s=this.hillNoise(e*.028,t*.028),r=this.detailNoise(e*.092,t*.092),o=(n-.42)*30,a=Math.floor(wt+o+s*8+r*3);return ct(a,8,Xe-12)}getNaturalBlock(e,t,n){if(this.dimension==="nether")return this.getNetherNaturalBlock(e,t,n);if(this.dimension==="end")return this.getEndNaturalBlock(e,t,n);const s=this.terrainHeight(e,n);return t>s?t<=wt?_.Water:_.Air:t===s?s<=wt+1?Ve(this.seedInt^27514,e,t,n)<.18?_.Gravel:_.Sand:s>Xe-18&&Ve(this.seedInt,e,t,n)>.62?_.Stone:_.Grass:t>s-4?s<=wt+1?Ve(this.seedInt^424561,e,t,n)<.22?_.Gravel:_.Sand:_.Dirt:this.worldgenVersion<In?t<s-8&&t<45&&Ve(this.seedInt,e,t,n)<.018?_.Ore:_.Stone:this.isCave(e,t,n,s)?t<12&&Ve(this.seedInt^6778,e,t,n)<.12?_.Lava:t<wt-10&&Ve(this.seedInt^14858,e,t,n)<.075?_.Water:_.Air:this.oreAt(e,t,n,s)??_.Stone}isCave(e,t,n,s){if(t<5||t>s-5)return!1;const r=Math.max(0,1-Math.hypot(e,n)/20),o=ct((s-t)/42,0,1),a=Math.abs(this.caveNoise(e*.055,t*.078,n*.055)),l=this.caveRoomNoise(e*.027,t*.038,n*.027),c=.055+o*.055-r*.04,h=.73+r*.08;return a<c||l>h}oreAt(e,t,n,s){const r=[{block:_.DiamondOre,min:2,max:16,peaks:[5],chance:.018,salt:3354},{block:_.RedstoneOre,min:4,max:18,peaks:[7],chance:.028,salt:3802},{block:_.GoldOre,min:4,max:24,peaks:[12],chance:.018,salt:24605},{block:_.LapisOre,min:8,max:30,peaks:[18],chance:.018,salt:108821},{block:_.EmeraldOre,min:28,max:60,peaks:[44],chance:.012,salt:3630,mountainOnly:!0},{block:_.IronOre,min:8,max:54,peaks:[16,44],chance:.055,salt:7946},{block:_.CopperOre,min:16,max:44,peaks:[32],chance:.045,salt:49305},{block:_.CoalOre,min:20,max:60,peaks:[46],chance:.075,salt:49313}];for(const o of r){if(t<o.min||t>o.max||o.mountainOnly&&s<wt+24)continue;const a=Math.max(...o.peaks.map(h=>1-Math.abs(t-h)/Math.max(1,o.max-o.min))),l=Ve(this.seedInt^o.salt,Math.floor(e/2),Math.floor(t/2),Math.floor(n/2)),c=Ve(this.seedInt^o.salt<<1,e,t,n);if(l<o.chance*a&&c<.74)return o.block}return null}netherTerrainHeight(e,t){const n=this.hillNoise(e*.018+90,t*.018-140),s=this.detailNoise(e*.067-40,t*.067+20);return ct(Math.floor(44+n*8+s*3),28,Xe-8)}endTerrainHeight(e,t){const n=Math.hypot(e,t),s=ct(1-n/74,0,1),r=this.hillNoise(e*.035+300,t*.035-260),o=this.detailNoise(e*.11-80,t*.11+90);return ct(Math.floor(28+s*12+r*2.2+o*1.2),18,Xe-12)}getEndNaturalBlock(e,t,n){const s=Math.hypot(e,n),r=ct(1-s/76,0,1);if(r<=0)return _.Air;const o=this.endTerrainHeight(e,n),a=(this.caveRoomNoise(e*.025+20,t*.032,n*.025-20)+1)*.5,l=Math.floor(8+r*20+a*4),c=Math.max(3,o-l);return t<=o&&t>=c?_.EndStone:_.Air}getNetherNaturalBlock(e,t,n){if(t<=1||t>=Xe-2)return _.Basalt;if(this.isNetherOpen(e,t,n))return t<=16?_.Lava:_.Air;if(t<=15&&Ve(this.seedInt^6762,e,t,n)<.12)return _.Lava;const s=this.netherOreAt(e,t,n);if(s)return s;const r=Ve(this.seedInt^20641,Math.floor(e/4),Math.floor(t/3),Math.floor(n/4));return t<25&&r<.055?_.SoulSand:t>44&&r>.955?_.Basalt:_.Netherrack}isNetherOpen(e,t,n){if(t<8||t>Xe-7)return!1;const s=ct(1-Math.abs(t-37)/31,0,1),r=Math.abs(this.caveNoise(e*.045,t*.064,n*.045)),o=this.caveRoomNoise(e*.024,t*.032,n*.024),a=t<21&&o>.58&&r<.22;return r<.055+s*.07||o>.69||a}netherOreAt(e,t,n){const s=ct(1-Math.abs(t-36)/24,0,1),r=ct(1-Math.abs(t-28)/20,0,1),o=Ve(this.seedInt^39492,Math.floor(e/2),Math.floor(t/2),Math.floor(n/2)),a=Ve(this.seedInt^657181,Math.floor(e/2),Math.floor(t/2),Math.floor(n/2)),l=Ve(this.seedInt^29002,e,t,n);return o<.045*s&&l<.72?_.QuartzOre:a<.024*r&&l>.24&&l<.78?_.NetherGoldOre:null}shouldTree(e,t){if(this.dimension!=="overworld")return!1;const n=this.terrainHeight(e,t);return n<=wt+2||n>Xe-18?!1:(this.detailNoise(e*.018+200,t*.018-100)+1)*.5>.44&&Ve(this.seedInt,e,91,t)<.025}treeHeight(e,t){return 4+Math.floor(Ve(this.seedInt,e,123,t)*3)}findSpawn(){if(this.dimension==="nether")return this.findNetherSpawn();if(this.dimension==="end")return new R(.5,40,-58.5);let e=null,t=-1/0;for(let n=-48;n<=48;n+=3)for(let s=-48;s<=48;s+=3){const r=this.terrainHeight(s,n),o=wt+10,a=32-Math.abs(r-o)*2.4,l=r<=wt+14?7:0,c=Math.hypot(s,n)*.08,h=this.nearbyTreePenalty(s,n),d=a+l-c-h*2+this.hillNoise(s*.04,n*.04);r>wt+2&&h<4&&d>t&&(t=d,e=new R(s+.5,r+2,n+.5))}return e??new R(.5,this.terrainHeight(0,0)+4,.5)}findScenicYaw(e){if(this.dimension==="nether")return this.findOpenYaw(e);if(this.dimension==="end")return 0;let t=0,n=-1/0;const s=e.y+1.6;for(let r=0;r<40;r+=1){const o=r/40*Math.PI*2,a=-Math.sin(o),l=-Math.cos(o);let c=0;for(let h=6;h<=60;h+=4){const d=Math.round(e.x+a*h),u=Math.round(e.z+l*h),f=this.terrainHeight(d,u),g=s-f;c+=ct(g,-12,22)*(1/(1+h*.035)),f<=wt+1&&(c+=8),f>s-1&&h<16&&(c-=34)}c>n&&(n=c,t=o)}return t}markDirtyAround(e,t){var a,l,c,h,d;const n=Wn(e,Me),s=Wn(t,Me),r=Ci(e,Me),o=Ci(t,Me);(a=this.chunks.get($n(n,s)))==null||a.markDirty(),r===0&&((l=this.chunks.get($n(n-1,s)))==null||l.markDirty()),r===Me-1&&((c=this.chunks.get($n(n+1,s)))==null||c.markDirty()),o===0&&((h=this.chunks.get($n(n,s-1)))==null||h.markDirty()),o===Me-1&&((d=this.chunks.get($n(n,s+1)))==null||d.markDirty())}nearbyTreePenalty(e,t){let n=0;for(let s=-8;s<=8;s+=1)for(let r=-8;r<=8;r+=1)this.shouldTree(e+r,t+s)&&(n+=9-Math.min(8,Math.max(Math.abs(r),Math.abs(s))));return n}findNetherSpawn(){let e=null,t=-1/0;for(let n=-48;n<=48;n+=2)for(let s=-48;s<=48;s+=2)for(let r=24;r<=52;r+=1){if(!this.isAirPocketForPlayer(s,r,n))continue;const o=this.getNaturalBlock(s,r-1,n);if(o===_.Lava||!Yt[o].solid)continue;const a=this.nearbyBlockPenalty(s,r,n,_.Lava,5)*4.5,l=this.nearbyBlockPenalty(s,r,n,_.NetherBrick,18)>0?9:0,c=42-Math.hypot(s,n)*.22-Math.abs(r-36)*1.6+l-a;c>t&&(t=c,e=new R(s+.5,r,n+.5))}return e??new R(.5,36,.5)}isAirPocketForPlayer(e,t,n){return this.getNaturalBlock(e,t,n)===_.Air&&this.getNaturalBlock(e,t+1,n)===_.Air&&this.getNaturalBlock(e,t+2,n)===_.Air}nearbyBlockPenalty(e,t,n,s,r){let o=0;for(let a=-r;a<=r;a+=2)for(let l=-r;l<=r;l+=2)for(let c=-3;c<=3;c+=2)this.getNaturalBlock(e+l,t+c,n+a)===s&&(o+=1);return o}findOpenYaw(e){let t=0,n=-1/0;for(let s=0;s<32;s+=1){const r=s/32*Math.PI*2,o=-Math.sin(r),a=-Math.cos(r);let l=0;for(let c=3;c<=34;c+=3){const h=Math.floor(e.x+o*c),d=Math.floor(e.y+1.2),u=Math.floor(e.z+a*c);l+=this.getBlock(h,d,u)===_.Air?2:-3}l>n&&(n=l,t=r)}return t}}class sg{constructor(e,t,n){D(this,"cx");D(this,"cz");D(this,"blocks",new Uint8Array(Me*Xe*Me));D(this,"world");D(this,"dirty",!0);D(this,"solidMesh",null);D(this,"waterMesh",null);this.world=e,this.cx=t,this.cz=n,this.generate()}getLocal(e,t,n){return t<0?this.world.dimension==="end"?_.Air:this.world.dimension==="nether"?_.Basalt:_.Stone:t>=Xe?_.Air:this.blocks[this.index(e,t,n)]}setLocal(e,t,n,s){t<0||t>=Xe||(this.blocks[this.index(e,t,n)]=s,this.markDirty())}markDirty(){this.dirty=!0}rebuild(e,t){if(!this.dirty)return;this.dispose(e);const n=sl(),s=sl(),r=this.cx*Me,o=this.cz*Me;for(let a=0;a<Me;a+=1)for(let l=0;l<Me;l+=1)for(let c=0;c<Xe;c+=1){const h=this.getLocal(l,c,a);if(h===_.Air)continue;const d=r+l,u=o+a,f=Yt[h];for(const g of ig){const v=this.world.getBlock(d+g.normal[0],c+g.normal[1],u+g.normal[2]);if(f.fluid){if(v!==_.Air)continue}else if(v!==_.Air&&!Yt[v].transparent)continue;rg(f.fluid?s:n,d,c,u,g,h)}}this.solidMesh=rl(n,t.solid,"solid"),this.waterMesh=rl(s,t.water,"water"),this.solidMesh&&e.add(this.solidMesh),this.waterMesh&&(this.waterMesh.renderOrder=3,e.add(this.waterMesh)),this.dirty=!1}dispose(e){this.solidMesh&&(e.remove(this.solidMesh),this.solidMesh.geometry.dispose(),this.solidMesh=null),this.waterMesh&&(e.remove(this.waterMesh),this.waterMesh.geometry.dispose(),this.waterMesh=null)}generate(){const e=this.cx*Me,t=this.cz*Me;for(let n=0;n<Me;n+=1)for(let s=0;s<Me;s+=1){const r=e+s,o=t+n;for(let a=0;a<Xe;a+=1)this.blocks[this.index(s,a,n)]=this.world.getNaturalBlock(r,a,o)}this.placeTrees(),this.placeStructures(),this.applyModifiedBlocks()}placeStructures(){if(this.world.worldgenVersion<In)return;if(this.world.dimension==="nether"){this.placeNetherStructures();return}if(this.world.dimension==="end"){this.placeEndStructures();return}this.placeOverworldLandmarks();const e=this.cx*Me,t=this.cz*Me,n=e+4+Math.floor(Ve(this.world.seedInt^379569,this.cx,20,this.cz)*8),s=t+4+Math.floor(Ve(this.world.seedInt^379570,this.cx,21,this.cz)*8),r=Ve(this.world.seedInt^30737,this.cx,0,this.cz),o=Ve(this.world.seedInt^37334,this.cx,7,this.cz);r<.018?this.placeCabin(n,s):r<.04?this.placeRuinedCamp(n,s):r<.052?this.placeLavaPool(n,s):r<.064&&this.placeRuinedPortal(n,s),o<.035?this.placeMineshaft(n,10+Math.floor(Ve(this.world.seedInt^41246,this.cx,4,this.cz)*22),s):o<.047&&this.placeDungeon(n,8+Math.floor(Ve(this.world.seedInt^53358,this.cx,5,this.cz)*18),s),this.placeStronghold()}placeOverworldLandmarks(){this.placeVillage(48,48),this.placeShipwreck(-72,20),this.placeRuinedPortalLandmark(64,-64),this.placeAncientCity(-96,10,-96),this.placeWoodlandMansion(128,-96),this.placeMineshaft(96,18,96)}chunkIntersects(e,t,n){const s=this.cx*Me,r=this.cz*Me;return!(s>e+n||s+Me<e-n||r>t+n||r+Me<t-n)}structureBaseY(e,t,n,s=wt+2,r=12){let o=s;for(const a of[-n,0,n])for(const l of[-n,0,n])o=Math.max(o,this.world.terrainHeight(e+l,t+a)+1);return Math.floor(ct(o,5,Xe-r))}prepareSurfacePad(e,t,n,s,r,o,a,l){for(let c=o;c<=a;c+=1)for(let h=s;h<=r;h+=1){const d=e+h,u=t+c,f=this.world.terrainHeight(d,u);for(let g=Math.max(1,f+1);g<n;g+=1)this.placeGlobal(d,g,u,g<n-1?_.Dirt:l,!0);this.placeGlobal(d,n-1,u,l,!0)}}placeVillage(e,t){if(!this.chunkIntersects(e,t,32))return;const n=this.structureBaseY(e,t,18,wt+3,12);this.prepareSurfacePad(e,t,n,-24,24,-24,24,_.Grass);for(let s=-24;s<=24;s+=1)for(let r=-1;r<=1;r+=1)this.placeGlobal(e+s,n-1,t+r,_.Gravel,!0),this.placeGlobal(e+r,n-1,t+s,_.Gravel,!0);this.placeVillageWell(e,n,t),this.placeVillageHouse(e-14,n,t-10,4,4,"smith"),this.placeVillageHouse(e+14,n,t-8,4,3,"farmer"),this.placeVillageHouse(e-13,n,t+13,3,4,"library"),this.placeVillageHouse(e+14,n,t+13,4,4,"home"),this.placeVillageFarm(e,n,t+20)}placeVillageHouse(e,t,n,s,r,o){for(let a=-r;a<=r;a+=1)for(let l=-s;l<=s;l+=1){this.placeGlobal(e+l,t-1,n+a,_.Planks,!0);for(let c=0;c<=4;c+=1){const h=Math.abs(l)===s||Math.abs(a)===r,d=Math.abs(l)===s&&Math.abs(a)===r,u=c===4||c===3&&(Math.abs(l)>=s-1||Math.abs(a)>=r-1),f=a===-r&&Math.abs(l)<=1&&c<=2,g=u?_.Planks:h&&!f?d?_.Log:_.Planks:_.Air;this.placeGlobal(e+l,t+c,n+a,g,!0)}}if(this.placeGlobal(e,t,n-r,_.Air,!0),this.placeGlobal(e,t+1,n-r,_.Air,!0),this.placeGlobal(e-s+1,t+1,n,_.Torch,!0),this.placeGlobal(e+s-1,t,n+r-1,_.Bed,!0),o==="smith")this.placeGlobal(e+1,t,n+1,_.Furnace,!0),this.placeGlobal(e-1,t,n+1,_.Chest,!0),this.placeGlobal(e+s,t,n-r-1,_.Lava,!0);else if(o==="library"){for(let a=-r+1;a<=r-1;a+=1)this.placeGlobal(e-s+1,t,n+a,_.Bookshelf,!0),this.placeGlobal(e-s+1,t+1,n+a,_.Bookshelf,!0);this.placeGlobal(e+1,t,n,_.CraftingTable,!0)}else o==="farmer"?(this.placeGlobal(e-1,t,n,_.Chest,!0),this.placeGlobal(e+1,t,n,_.CraftingTable,!0)):this.placeGlobal(e,t,n+1,_.Chest,!0)}placeVillageWell(e,t,n){for(let s=-2;s<=2;s+=1)for(let r=-2;r<=2;r+=1){const o=Math.abs(r)===2||Math.abs(s)===2;this.placeGlobal(e+r,t-1,n+s,o?_.StoneBricks:_.Water,!0),o&&this.placeGlobal(e+r,t,n+s,_.StoneBricks,!0)}for(const[s,r]of[[-2,-2],[2,-2],[-2,2],[2,2]])this.placeGlobal(e+s,t+1,n+r,_.Log,!0),this.placeGlobal(e+s,t+2,n+r,_.Log,!0);this.placeGlobal(e,t+3,n,_.Planks,!0)}placeVillageFarm(e,t,n){for(let s=-4;s<=4;s+=1)for(let r=-8;r<=8;r+=1){const o=e+r,a=n+s,l=r===0;this.placeGlobal(o,t-1,a,l?_.Water:_.Dirt,!0),this.placeGlobal(o,t,a,_.Air,!0),!l&&Math.abs(r)%3===0&&Math.abs(s)%2===0&&this.placeGlobal(o,t,a,_.Leaves,!1)}this.placeGlobal(e-9,t,n,_.Torch,!0),this.placeGlobal(e+9,t,n,_.Torch,!0)}placeShipwreck(e,t){if(!this.chunkIntersects(e,t,18))return;const n=wt-3;for(let s=-6;s<=6;s+=1)for(let r=-10;r<=10;r+=1){const o=Math.abs(r)/10+Math.abs(s)/6;for(let a=0;a<=5;a+=1){if(o>1.35||a>3&&Math.abs(r)>3)continue;const l=a===0||Math.abs(s)===6||Math.abs(r)>=9||a===3&&Math.abs(r)<=5,c=Ve(this.world.seedInt^20905,e+r,n+a,t+s)<.16;this.placeGlobal(e+r,n+a,t+s,l&&!c?_.Planks:_.Air,!0)}for(let a=n+4;a<=wt;a+=1)Math.abs(r)<=8&&Math.abs(s)<=4&&this.placeGlobal(e+r,a,t+s,_.Water,!0)}for(let s=n+1;s<=n+5;s+=1)this.placeGlobal(e-2,s,t,_.Log,!0);this.placeGlobal(e-6,n+1,t-3,_.Chest,!0),this.placeGlobal(e+5,n+1,t+2,_.Chest,!0),this.placeGlobal(e+2,n+2,t,_.Torch,!0)}placeRuinedPortalLandmark(e,t){if(!this.chunkIntersects(e,t,10))return;const n=this.structureBaseY(e,t,5,wt+3,9);for(let s=-4;s<=4;s+=1)for(let r=-4;r<=4;r+=1){const o=Math.hypot(r,s);o<=4.4&&(this.placeGlobal(e+r,n-1,t+s,o>3.1?_.RuinedPortalDebris:_.Gravel,!0),this.placeGlobal(e+r,n,t+s,_.Air,!0))}for(let s=0;s<=4;s+=1)this.placeGlobal(e-2,n+s,t,s===1?_.RuinedPortalDebris:_.Obsidian,!0),this.placeGlobal(e+1,n+s,t,s===3?_.RuinedPortalDebris:_.Obsidian,!0);for(let s=-2;s<=1;s+=1)this.placeGlobal(e+s,n,t,s===-1?_.RuinedPortalDebris:_.Obsidian,!0),this.placeGlobal(e+s,n+4,t,s===0?_.RuinedPortalDebris:_.Obsidian,!0);this.placeGlobal(e+3,n,t-1,_.Chest,!0),this.placeGlobal(e-3,n,t+2,_.Lava,!0),this.placeGlobal(e+2,n+1,t+2,_.Torch,!0)}placeAncientCity(e,t,n){if(this.chunkIntersects(e,n,34)){for(let s=-24;s<=24;s+=1)for(let r=-28;r<=28;r+=1){const o=Math.hypot(r/1.25,s);if(!(o>26.5))for(let a=-1;a<=8;a+=1){const l=o>23.5||a===-1,c=a===8&&o<21,h=(Math.abs(r)===12||Math.abs(r)===20||Math.abs(s)===10||Math.abs(s)===18)&&a<=5,d=l||c?this.ancientBrickAt(e+r,t+a,n+s):h?_.Basalt:_.Air;this.placeGlobal(e+r,t+a,n+s,d,!0)}}for(let s=-6;s<=6;s+=1)for(let r=-8;r<=8;r+=1){const o=Math.abs(r)===8||Math.abs(s)===6||Math.abs(r)===7||Math.abs(s)===5;this.placeGlobal(e+r,t,n+s,o?_.Basalt:_.SoulSand,!0)}this.placeGlobal(e,t+1,n,_.Chest,!0),this.placeGlobal(e-10,t+1,n-8,_.Chest,!0),this.placeGlobal(e+10,t+1,n+8,_.Chest,!0),this.placeGlobal(e-18,t+1,n,_.IronBars,!0),this.placeGlobal(e+18,t+1,n,_.IronBars,!0)}}ancientBrickAt(e,t,n){const s=Ve(this.world.seedInt^44055,e,t,n);return s<.16?_.CrackedStoneBricks:s<.36?_.MossyStoneBricks:_.StoneBricks}placeWoodlandMansion(e,t){if(!this.chunkIntersects(e,t,34))return;const n=this.structureBaseY(e,t,20,wt+4,16);this.prepareSurfacePad(e,t,n,-22,22,-18,18,_.StoneBricks);for(let s=-16;s<=16;s+=1)for(let r=-20;r<=20;r+=1)for(let o=0;o<=9;o+=1){const a=Math.abs(r)===20||Math.abs(s)===16,l=o===0||o===4,c=o===9||o===8&&(Math.abs(r)>16||Math.abs(s)>12),h=(r===0||s===0||Math.abs(r)===10)&&o<=7&&o!==3,d=s===-16&&Math.abs(r)<=2&&o<=3,u=l?_.Planks:c?_.Log:(a||h)&&!d?Math.abs(r)===20||Math.abs(s)===16?_.Log:_.Planks:_.Air;this.placeGlobal(e+r,n+o,t+s,u,!0)}for(let s=-1;s<=1;s+=1)this.placeGlobal(e-14+s*10,n+1,t-10,_.Chest,!0),this.placeGlobal(e+14-s*8,n+5,t+10,_.Bookshelf,!0),this.placeGlobal(e+s*8,n+1,t+2,_.Torch,!0);for(let s=-12;s<=-4;s+=1)for(let r=1;r<=3;r+=1)this.placeGlobal(e-18,n+r,t+s,_.Bookshelf,!0),this.placeGlobal(e-12,n+r,t+s,_.Bookshelf,!0);this.placeGlobal(e-16,n+1,t+12,_.Bed,!0),this.placeGlobal(e+16,n+1,t+12,_.Bed,!0),this.placeGlobal(e,n+1,t-12,_.CraftingTable,!0)}placeStronghold(){const e=this.world.strongholdLocation(),t=Math.floor(e.x),n=Math.floor(e.y),s=Math.floor(e.z),r=this.cx*Me,o=this.cz*Me,a=42;r>t+a||r+Me<t-a||o>s+a||o+Me<s-a||(this.placeStrongholdCorridor(t,n,s,"x",-30,30),this.placeStrongholdCorridor(t,n,s,"z",-22,26),this.placeStrongholdCorridor(t+20,n,s,"z",0,15),this.placeStrongholdCorridor(t-20,n+1,s,"z",0,16),this.placeStrongholdCorridor(t-20,n,s,"z",-16,0),this.placeStrongholdRoom(t+20,n,s+15,-8,8,-8,8,5),this.placeStrongholdRoom(t-20,n+1,s+16,-8,8,-7,7,6),this.placeStrongholdRoom(t-20,n,s-16,-7,7,-6,6,4),this.placeEndPortalRoom(t+20,n,s+15),this.placeStrongholdLibrary(t-20,n+1,s+16),this.placeStrongholdArmory(t-20,n,s-16),this.carveStrongholdDoor(t+20,n,s+7,"z"),this.carveStrongholdDoor(t-20,n+1,s+9,"z"),this.carveStrongholdDoor(t-20,n,s-10,"z"))}placeStrongholdCorridor(e,t,n,s,r,o){for(let a=r;a<=o;a+=1){for(let l=-2;l<=2;l+=1)for(let c=-1;c<=3;c+=1){const h=s==="x"?e+a:e+l,d=s==="x"?n+l:n+a,u=Math.abs(l)===2||c===-1||c===3;this.placeGlobal(h,t+c,d,u?this.strongholdBrickAt(h,t+c,d):_.Air,!0)}if(a%9===0){const l=s==="x"?e+a:e+1,c=s==="x"?n+1:n+a;this.placeGlobal(l,t+1,c,_.Torch,!0)}}}placeStrongholdRoom(e,t,n,s,r,o,a,l){for(let c=o;c<=a;c+=1)for(let h=s;h<=r;h+=1)for(let d=-1;d<=l;d+=1){const u=h===s||h===r||c===o||c===a||d===-1||d===l,f=e+h,g=t+d,v=n+c;this.placeGlobal(f,g,v,u?this.strongholdBrickAt(f,g,v):_.Air,!0)}}placeEndPortalRoom(e,t,n){for(let s=-4;s<=4;s+=1)for(let r=-4;r<=4;r+=1)Math.abs(r)===4||Math.abs(s)===4||this.placeGlobal(e+r,t,n+s,_.StoneBricks,!0);for(let s=-2;s<=2;s+=1)for(let r=-2;r<=2;r+=1){const o=Math.abs(s)===2||Math.abs(r)===2,a=Math.abs(s)===2&&Math.abs(r)===2;if(o&&!a){const l=Ve(this.world.seedInt^59856,e+s,t,n+r)<.12;this.placeGlobal(e+s,t+1,n+r,l?_.EndPortalFrameEye:_.EndPortalFrame,!0)}else o||this.placeGlobal(e+s,t+1,n+r,_.Air,!0)}this.placeGlobal(e-5,t+1,n,_.IronBars,!0),this.placeGlobal(e+5,t+1,n,_.IronBars,!0),this.placeGlobal(e-3,t+1,n-5,_.Torch,!0),this.placeGlobal(e+3,t+1,n-5,_.Torch,!0),this.placeGlobal(e,t,n+5,_.Lava,!0)}placeStrongholdLibrary(e,t,n){for(let s=-5;s<=5;s+=5)for(let r=-5;r<=5;r+=1)for(let o=0;o<=3;o+=1)this.placeGlobal(e+r,t+o,n+s,_.Bookshelf,!0);for(let s=-5;s<=5;s+=5)for(let r=-4;r<=4;r+=1)this.placeGlobal(e+s,t,n+r,_.Planks,!0),this.placeGlobal(e+s,t+1,n+r,_.Bookshelf,!0);this.placeGlobal(e,t,n,_.Chest,!0),this.placeGlobal(e,t+2,n-6,_.Torch,!0)}placeStrongholdArmory(e,t,n){this.placeGlobal(e-3,t,n-2,_.Chest,!0),this.placeGlobal(e+3,t,n+2,_.IronBars,!0),this.placeGlobal(e+2,t,n-2,_.IronBars,!0),this.placeGlobal(e-2,t,n+2,_.Torch,!0),this.placeGlobal(e,t,n+4,_.StoneBricks,!0)}carveStrongholdDoor(e,t,n,s){for(let r=-1;r<=1;r+=1)for(let o=0;o<=2;o+=1){const a=s==="x"?e:e+r,l=s==="x"?n+r:n;this.placeGlobal(a,t+o,l,_.Air,!0)}}strongholdBrickAt(e,t,n){const s=Ve(this.world.seedInt^22282,e,t,n);return s<.13?_.CrackedStoneBricks:s<.28?_.MossyStoneBricks:_.StoneBricks}placeNetherStructures(){this.placeBastionRemnant(72,34,24);const e=this.cz===-4&&this.cx>=-2&&this.cx<=2,t=this.cx===0&&this.cz>=-5&&this.cz<=-3,n=Ve(this.world.seedInt^61511,Math.floor(this.cx/7),0,Math.floor(this.cz/7))<.035;if(e||t||n){const s=e||!t&&Ve(this.world.seedInt^61512,this.cx,1,this.cz)<.5?"x":"z";this.placeNetherFortressCorridor(s)}}placeEndStructures(){this.placeEndSpawnPlatform(),this.placeEndPillars(),this.placeEndCity(54,30)}placeBastionRemnant(e,t,n){if(this.chunkIntersects(e,n,28)){for(let s=-18;s<=18;s+=1)for(let r=-18;r<=18;r+=1){const o=Math.max(Math.abs(r),Math.abs(s));for(let a=-2;a<=14;a+=1){const l=Ve(this.world.seedInt^47703,e+r,t+a,n+s)<.1,c=o>=15||a===-2||a===14,h=a===2||a===7,d=Math.abs(r+s)<=2&&a>=-1&&a<=8,u=(Math.abs(r)===8||Math.abs(s)===8)&&a<9,f=c||h||d||u?l?_.Air:this.bastionBlockAt(e+r,t+a,n+s):_.Air;this.placeGlobal(e+r,t+a,n+s,f,!0)}}this.placeGlobal(e,t+1,n,_.Chest,!0),this.placeGlobal(e+5,t+3,n-5,_.NetherGoldOre,!0),this.placeGlobal(e-5,t+8,n+4,_.NetherGoldOre,!0),this.placeGlobal(e+10,t,n+10,_.Lava,!0),this.placeGlobal(e-10,t+5,n-9,_.Chest,!0)}}bastionBlockAt(e,t,n){const s=Ve(this.world.seedInt^45143,e,t,n);return s<.18?_.Basalt:s<.32?_.CrackedStoneBricks:_.NetherBrick}placeEndCity(e,t){if(!this.chunkIntersects(e,t,24))return;const n=Math.max(this.world.terrainHeight(e,t)+1,38);this.placeEndCityTower(e,n,t,4,18),this.placeEndCityTower(e+13,n+8,t+8,3,13),this.placeEndCityBridge(e+4,n+8,t+2,e+10,t+8),this.placeGlobal(e+13,n+10,t+8,_.Chest,!0),this.placeGlobal(e+13,n+11,t+8,_.EndCrystal,!0)}placeEndCityTower(e,t,n,s,r){for(let o=-s;o<=s;o+=1)for(let a=-s;a<=s;a+=1){const l=Math.abs(a)===s||Math.abs(o)===s;for(let c=0;c<=r;c+=1){const h=c%5===0,d=c===r,u=l&&c%5===2&&Math.abs(a+o)%2===0;this.placeGlobal(e+a,t+c,n+o,h||d||l&&!u?_.EndStoneBricks:_.Air,!0)}}for(let o=1;o<r;o+=4)this.placeGlobal(e+s,t+o,n,_.IronBars,!0),this.placeGlobal(e-s,t+o,n,_.IronBars,!0)}placeEndCityBridge(e,t,n,s,r){const o=Math.max(Math.abs(s-e),Math.abs(r-n));for(let a=0;a<=o;a+=1){const l=o===0?0:a/o,c=Math.round(e+(s-e)*l),h=Math.round(n+(r-n)*l);for(let d=-1;d<=1;d+=1)this.placeGlobal(c,t,h+d,_.EndStoneBricks,!0),this.placeGlobal(c,t+1,h+d,_.Air,!0);this.placeGlobal(c,t+1,h-2,_.IronBars,!0),this.placeGlobal(c,t+1,h+2,_.IronBars,!0)}}placeEndSpawnPlatform(){for(let n=-2;n<=2;n+=1)for(let s=-2;s<=2;s+=1){this.placeGlobal(s,38,-58+n,_.Obsidian,!0);for(let r=0;r<=4;r+=1)this.placeGlobal(s,39+r,-58+n,_.Air,!0)}for(let n=-55;n<=-45;n+=1)for(let s=-1;s<=1;s+=1)this.placeGlobal(s,38,n,_.EndStoneBricks,!0),this.placeGlobal(s,39,n,_.Air,!0),this.placeGlobal(s,40,n,_.Air,!0)}placeEndPillars(){for(const e of this.world.endPillars()){const t=e.radius*e.radius;for(let n=-e.radius;n<=e.radius;n+=1)for(let s=-e.radius;s<=e.radius;s+=1)if(!(s*s+n*n>t+.25))for(let r=1;r<=e.topY;r+=1)this.placeGlobal(e.x+s,r,e.z+n,_.Obsidian,!0);this.placeGlobal(e.x,e.topY,e.z,_.Bedrock,!0),this.placeGlobal(e.x,e.topY+1,e.z,_.EndCrystal,!0),e.caged&&this.placeEndCrystalCage(e.x,e.topY+1,e.z)}}placeEndCrystalCage(e,t,n){for(let s=-2;s<=2;s+=1)for(let r=-2;r<=2;r+=1)if(Math.abs(r)===2||Math.abs(s)===2)for(let a=-1;a<=2;a+=1)this.placeGlobal(e+r,t+a,n+s,_.IronBars,!0);for(let s=-1;s<=1;s+=1)for(let r=-1;r<=1;r+=1)this.placeGlobal(e+r,t+3,n+s,_.IronBars,!0)}placeNetherFortressCorridor(e){const t=this.cx*Me,n=this.cz*Me,s=37,r=7,o=r-2,a=r+2;for(let l=0;l<Me;l+=1)for(let c=o;c<=a;c+=1){const h=e==="x"?t+l:t+c,d=e==="x"?n+c:n+l;this.placeGlobal(h,s-1,d,_.NetherBrick,!0);for(let u=s;u<=s+4;u+=1)this.placeGlobal(h,u,d,_.Air,!0);(c===o||c===a)&&(this.placeGlobal(h,s,d,_.NetherBrick,!0),this.placeGlobal(h,s+1,d,_.NetherBrick,!0))}this.cx===0&&this.cz===-4&&this.placeNetherFortressHub(t+7,s,n+7)}placeNetherFortressHub(e,t,n){for(let s=-5;s<=5;s+=1)for(let r=-5;r<=5;r+=1){this.placeGlobal(e+r,t-1,n+s,_.NetherBrick,!0);for(let o=0;o<=5;o+=1){const a=Math.abs(r)===5||Math.abs(s)===5||o===5;this.placeGlobal(e+r,t+o,n+s,a?_.NetherBrick:_.Air,!0)}}this.placeGlobal(e,t,n,_.Fire,!0),this.placeGlobal(e-3,t,n+3,_.Chest,!0),this.placeGlobal(e+3,t,n-3,_.QuartzOre,!0),this.placeGlobal(e,t+1,n-5,_.Air,!0),this.placeGlobal(e+1,t+1,n-5,_.Air,!0)}placeCabin(e,t){const n=this.world.terrainHeight(e,t)+1;if(!(n<=wt+1||n>=Xe-12)){for(let s=-3;s<=3;s+=1)for(let r=-3;r<=3;r+=1){this.placeGlobal(e+r,n-1,t+s,_.Planks,!0);for(let l=n;l<=n+3;l+=1)this.placeGlobal(e+r,l,t+s,_.Air,!0);const o=Math.abs(r)===3||Math.abs(s)===3,a=Math.abs(r)===3&&Math.abs(s)===3;o&&!(s===-3&&r>=-1&&r<=1&&n<Xe-4)&&(this.placeGlobal(e+r,n,t+s,a?_.Log:_.Planks,!0),this.placeGlobal(e+r,n+1,t+s,a?_.Log:_.Planks,!0)),(o||Math.abs(r)<=2||Math.abs(s)<=2)&&this.placeGlobal(e+r,n+3,t+s,_.Planks,!0)}this.placeGlobal(e-1,n,t-3,_.Air,!0),this.placeGlobal(e,n,t-3,_.Air,!0),this.placeGlobal(e+2,n,t+1,_.CraftingTable,!0),this.placeGlobal(e-2,n,t+1,_.Chest,!0),this.placeGlobal(e,n,t+2,_.Furnace,!0),this.placeGlobal(e-2,n,t-1,_.Bed,!0),this.placeGlobal(e+1,n+1,t-2,_.Torch,!0)}}placeRuinedCamp(e,t){const n=this.world.terrainHeight(e,t)+1;if(!(n<=wt+1||n>=Xe-8)){for(let s=-2;s<=2;s+=1)for(let r=-2;r<=2;r+=1)(Math.abs(r)===2||Math.abs(s)===2||Ve(this.world.seedInt,e+r,n,t+s)<.3)&&this.placeGlobal(e+r,n-1,t+s,_.Planks,!0);this.placeGlobal(e-2,n,t-2,_.Log,!0),this.placeGlobal(e+2,n,t-2,_.Log,!0),this.placeGlobal(e-1,n,t+1,_.Chest,!0),this.placeGlobal(e+1,n,t,_.Furnace,!0),this.placeGlobal(e,n,t,_.Torch,!0)}}placeLavaPool(e,t){const n=this.world.terrainHeight(e,t)+1;if(!(n<=wt+3||n>=Xe-8))for(let s=-3;s<=3;s+=1)for(let r=-3;r<=3;r+=1){const o=Math.hypot(r,s);o>3.2||(this.placeGlobal(e+r,n-1,t+s,o<2.1?_.Obsidian:_.Stone,!0),this.placeGlobal(e+r,n,t+s,o<1.9?_.Lava:_.Gravel,!0),o<2.4&&this.placeGlobal(e+r,n+1,t+s,_.Air,!0))}}placeRuinedPortal(e,t){const n=this.world.terrainHeight(e,t)+1;if(!(n<=wt+2||n>=Xe-9)){for(let s=-2;s<=2;s+=1)for(let r=-2;r<=2;r+=1){const o=Math.abs(r)===2||Math.abs(s)===2?_.RuinedPortalDebris:_.Gravel;this.placeGlobal(e+r,n-1,t+s,o,!0),this.placeGlobal(e+r,n,t+s,_.Air,!0)}for(let s=0;s<=4;s+=1)this.placeGlobal(e-1,n+s,t,s===2?_.RuinedPortalDebris:_.Obsidian,!0),s!==3&&this.placeGlobal(e+2,n+s,t,s===1?_.RuinedPortalDebris:_.Obsidian,!0);for(let s=-1;s<=2;s+=1)s!==1&&this.placeGlobal(e+s,n,t,_.Obsidian,!0),s!==0&&this.placeGlobal(e+s,n+4,t,_.Obsidian,!0);this.placeGlobal(e+1,n,t-1,_.Chest,!0),this.placeGlobal(e-2,n,t+1,_.Lava,!0),this.placeGlobal(e+2,n+1,t+1,_.Torch,!0)}}placeMineshaft(e,t,n){if(this.chunkIntersects(e,n,28)){this.placeMineshaftCorridor(e,t,n,"x",-18,18),this.placeMineshaftCorridor(e,t,n,"z",-14,16),this.placeMineshaftCorridor(e+12,t+1,n+12,"x",-8,10),this.placeMineshaftCorridor(e-14,t-1,n-10,"z",-8,9);for(let s=-4;s<=4;s+=1)for(let r=-4;r<=4;r+=1)for(let o=-1;o<=3;o+=1){const a=Math.abs(r)===4||Math.abs(s)===4||o===-1;this.placeGlobal(e+r,t+o,n+s,a?_.Planks:_.Air,!0)}this.placeGlobal(e-3,t,n+2,_.Chest,!0),this.placeGlobal(e+4,t+1,n-1,_.Torch,!0),this.placeGlobal(e+12,t+1,n+12,_.Chest,!0)}}placeMineshaftCorridor(e,t,n,s,r,o){for(let a=r;a<=o;a+=1){for(let l=-1;l<=1;l+=1)for(let c=0;c<=2;c+=1){const h=s==="x"?e+a:e+l,d=s==="x"?n+l:n+a;this.placeGlobal(h,t+c,d,_.Air,!0),this.placeGlobal(h,t-1,d,_.Planks,!0)}if(a%4===0){const l=s==="x"?e+a:e-1,c=s==="x"?e+a:e+1,h=s==="x"?n-1:n+a,d=s==="x"?n+1:n+a;this.placeGlobal(l,t,h,_.Log,!0),this.placeGlobal(l,t+1,h,_.Log,!0),this.placeGlobal(c,t,d,_.Log,!0),this.placeGlobal(c,t+1,d,_.Log,!0),this.placeGlobal(e+(s==="x"?a:0),t+2,n+(s==="z"?a:0),_.Planks,!0)}if(a%9===0){const l=s==="x"?e+a:e,c=s==="x"?n:n+a;this.placeGlobal(l,t+1,c,_.Torch,!0)}}}placeDungeon(e,t,n){for(let s=-4;s<=4;s+=1)for(let r=-4;r<=4;r+=1)for(let o=-1;o<=3;o+=1){const a=Math.abs(r)===4||Math.abs(s)===4||o===-1||o===3;this.placeGlobal(e+r,t+o,n+s,a?_.Brick:_.Air,!0)}this.placeGlobal(e,t,n,_.Chest,!0),this.placeGlobal(e-2,t,n+2,_.GoldOre,!0),this.placeGlobal(e+2,t,n-2,_.RedstoneOre,!0),this.placeGlobal(e,t+1,n-3,_.Torch,!0)}placeTrees(){if(this.world.dimension!=="overworld")return;const e=this.cx*Me,t=this.cz*Me,n=4;for(let s=t-n;s<t+Me+n;s+=1)for(let r=e-n;r<e+Me+n;r+=1){if(!this.world.shouldTree(r,s))continue;const o=this.world.terrainHeight(r,s),a=this.world.treeHeight(r,s);for(let h=o+1;h<=o+a;h+=1)this.placeGlobal(r,h,s,_.Log,!0);const l=o+a-2,c=o+a+2;for(let h=l;h<=c;h+=1){const d=h>=c?1:2;for(let u=-d;u<=d;u+=1)for(let f=-d;f<=d;f+=1){const g=Math.abs(f)===d&&Math.abs(u)===d,v=Ve(this.world.seedInt,r+f,h,s+u)>.42;g&&!v||this.placeGlobal(r+f,h,s+u,_.Leaves,!1)}}}}placeGlobal(e,t,n,s,r){const o=this.cx*Me,a=this.cz*Me;if(e<o||e>=o+Me||n<a||n>=a+Me||t<0||t>=Xe)return;const l=e-o,c=n-a,h=this.getLocal(l,t,c);!r&&h!==_.Air&&h!==_.Water||(this.blocks[this.index(l,t,c)]=s)}applyModifiedBlocks(){const e=this.cx*Me,t=this.cz*Me,n=e+Me,s=t+Me;this.world.forEachModifiedBlockInBounds(e,t,n,s,(r,o,a,l)=>{this.blocks[this.index(r-e,o,a-t)]=l})}index(e,t,n){return t*Me*Me+n*Me+e}}function sl(){return{positions:[],normals:[],uvs:[],colors:[],indices:[]}}function rg(i,e,t,n,s,r){const o=i.positions.length/3,a=Yt[r].tiles[s.name],l=ct(.82+t/Xe*.24,.7,1.14),c=ct(s.shade*l,.42,1.18),h=r===_.Water?1.14:1;for(const d of s.corners)i.positions.push(e+d[0],t+d[1],n+d[2]),i.normals.push(...s.normal),i.colors.push(c*h,c*h,c*h);eg(i.uvs,a),i.indices.push(o,o+1,o+2,o,o+2,o+3)}function rl(i,e,t){if(i.positions.length===0)return null;const n=new jt;n.setAttribute("position",new Rt(i.positions,3)),n.setAttribute("normal",new Rt(i.normals,3)),n.setAttribute("uv",new Rt(i.uvs,2)),n.setAttribute("color",new Rt(i.colors,3)),n.setIndex(i.indices),n.computeBoundingSphere();const s=new nt(n,e);return s.name=`chunk-${t}`,s.castShadow=t==="solid",s.receiveShadow=!0,s}function $n(i,e){return`${i},${e}`}const nr=32,ol=new Map;function og(i){const e=ol.get(i);if(e)return e;const t=document.createElement("canvas");t.width=nr,t.height=nr;const n=t.getContext("2d");if(!n)return"";n.imageSmoothingEnabled=!1,ag(n,i);const s=t.toDataURL("image/png");return ol.set(i,s),s}function ag(i,e){const t=lt[e],n=Di(t.color);if(i.clearRect(0,0,nr,nr),t.placeBlock||e==="end_portal_frame"||e==="end_crystal"||e==="dragon_egg"){lg(i,e,n,t.placeBlock??null);return}if(t.toolKind&&t.toolKind!=="none"){cg(i,t.toolKind,t.toolTier??"hand",n,e);return}if(e.includes("helmet")||e.includes("chestplate")||e.includes("leggings")||e.includes("boots")){hg(i,e,n);return}if(t.food||e==="apple"||e==="bread"||e.startsWith("raw_")||e.startsWith("cooked_")){dg(i,e,n);return}ug(i,e,n)}function lg(i,e,t,n){const s=wn(t,35);let r=wn(t,-28),o=wn(t,-8);e==="grass_block"?(r=Di("#8a5a37"),o=Di("#7a4d31")):e==="log"&&(r=Di("#70401f"),o=Di("#875229")),Ht(i,[[16,2],[29,9],[16,16],[3,9]],Qt(s)),Ht(i,[[3,9],[16,16],[16,30],[3,22]],Qt(r)),Ht(i,[[29,9],[16,16],[16,30],[29,22]],Qt(o)),os(i,[[16,2],[29,9],[29,22],[16,30],[3,22],[3,9]],"rgba(0,0,0,0.72)",2),e==="grass_block"&&(se(i,5,10,22,3,"#5daa43"),se(i,7,13,3,4,"#4d9a3a"),se(i,18,13,2,3,"#4d9a3a")),n===_.Log&&(i.strokeStyle="rgba(58,31,13,0.55)",i.lineWidth=2,i.beginPath(),i.ellipse(16,9,6,3,0,0,Math.PI*2),i.stroke());const a=fg(e);a&&(se(i,10,8,4,3,a),se(i,19,13,3,4,a),se(i,9,22,3,3,a),se(i,22,23,4,3,Hl(a,35))),e==="crafting_table"?(se(i,8,8,16,2,"#e0b45f"),se(i,14,5,2,9,"#4b2a16"),se(i,7,18,9,2,"#4b2a16")):e==="chest"?(se(i,7,14,19,3,"#4a2c15"),se(i,14,13,4,5,"#d7c16a")):e==="end_crystal"?(se(i,12,6,8,8,"#ffe8ff"),os(i,[[16,2],[25,11],[16,20],[7,11]],"#b861ff",2)):e==="dragon_egg"&&(se(i,12,8,8,16,"#17121d"),se(i,10,13,12,10,"#17121d"),se(i,13,11,2,3,"#a85cff"),se(i,18,18,3,2,"#a85cff"))}function cg(i,e,t,n,s){const r=Qt(n),o=Qt(wn(n,45)),a=Qt(wn(n,-45)),l=t==="wood"?"#9b6739":"#7a4c28";if(e==="pickaxe"){ci(i,16,17,-.78,()=>{se(i,14,10,4,19,l),se(i,7,6,18,4,a),se(i,5,8,7,4,r),se(i,20,8,7,4,r),se(i,9,5,14,2,o),se(i,13,27,6,2,"#4d2e16")});return}if(e==="axe"){ci(i,16,17,-.72,()=>{se(i,14,9,4,20,l),Ht(i,[[9,7],[23,7],[25,15],[17,18],[10,14]],r),se(i,12,8,10,2,o),se(i,13,27,6,2,"#4d2e16")});return}if(e==="shovel"){ci(i,16,17,-.72,()=>{se(i,14,10,4,18,l),Ht(i,[[11,5],[21,5],[23,12],[16,18],[9,12]],r),se(i,13,6,6,2,o)});return}if(e==="sword"){ci(i,16,17,-.78,()=>{se(i,14,5,4,18,r),se(i,15,4,2,2,o),se(i,9,21,14,3,"#6d4b31"),se(i,14,23,4,6,l),se(i,18,6,2,16,o)});return}if(e==="bow"){i.strokeStyle="#9b6638",i.lineWidth=4,i.beginPath(),i.arc(12,16,11,-1.15,1.15),i.stroke(),i.strokeStyle="#eee4ce",i.lineWidth=1,i.beginPath(),i.moveTo(15,6),i.lineTo(15,26),i.stroke(),se(i,14,14,5,4,"#70421f");return}if(e==="shield"){Ht(i,[[7,4],[25,4],[24,22],[16,30],[8,22]],r),os(i,[[7,4],[25,4],[24,22],[16,30],[8,22]],"#161616",2),se(i,15,5,2,21,Hl(r,45)),se(i,9,13,14,3,"#d0d6d4");return}if(e==="shears"){i.strokeStyle=r,i.lineWidth=3,i.beginPath(),i.arc(10,21,5,0,Math.PI*2),i.arc(22,21,5,0,Math.PI*2),i.stroke(),se(i,14,7,3,15,r),se(i,17,8,3,14,o);return}s==="arrow"&&ci(i,16,16,-.7,()=>{se(i,6,15,18,2,"#e6dec9"),Ht(i,[[24,12],[30,16],[24,20]],"#d5d8d4"),Ht(i,[[5,12],[9,16],[5,20]],"#6a8f6a")})}function hg(i,e,t){const n=Qt(t),s=Qt(wn(t,50)),r=Qt(wn(t,-42));e.includes("helmet")?(Ht(i,[[7,12],[12,6],[20,6],[25,12],[24,20],[8,20]],n),se(i,10,16,12,3,r)):e.includes("chestplate")?(Ht(i,[[9,5],[14,8],[18,8],[23,5],[27,16],[22,28],[10,28],[5,16]],n),se(i,15,9,2,17,s)):e.includes("leggings")?(Ht(i,[[9,6],[23,6],[22,14],[19,28],[14,28],[13,16],[10,28],[5,28],[8,14]],n),se(i,15,9,2,18,r)):(se(i,7,18,8,9,n),se(i,18,18,8,9,n),se(i,7,25,19,3,r)),se(i,9,8,10,2,s),os(i,[[8,5],[24,5],[28,16],[23,29],[9,29],[4,16]],"rgba(0,0,0,0.34)",1)}function dg(i,e,t){if(e==="apple"){se(i,15,5,3,5,"#5b3319"),Ht(i,[[18,7],[25,6],[21,11]],"#68bf62"),se(i,9,11,15,14,"#cf3c38"),se(i,7,15,19,8,"#cf3c38"),se(i,11,12,4,3,"#ff817a");return}if(e==="bread"){se(i,6,12,21,12,"#c98c3d"),se(i,8,8,7,8,"#dba85a"),se(i,15,7,7,8,"#e0b96b"),se(i,21,10,6,8,"#c98c3d"),se(i,10,12,3,3,"#ffe096");return}const n=e.startsWith("cooked_")||e==="steak",s=n?"#9a4c2d":Qt(t);se(i,9,11,15,12,s),se(i,6,16,22,7,s),se(i,11,13,5,3,n?"#d07a42":"#f0a0a0"),se(i,21,20,6,4,"#f0dfc4")}function ug(i,e,t){const n=Qt(t),s=Qt(wn(t,50)),r=Qt(wn(t,-45));if(e==="stick"){ci(i,16,16,-.72,()=>{se(i,14,5,4,23,"#9b6739"),se(i,17,6,1,20,"#d0a06a")});return}if(e==="torch"){se(i,14,12,5,17,"#80502a"),se(i,11,5,11,8,"#ff9c2e"),se(i,14,3,6,6,"#ffe06a");return}if(e==="arrow"){ci(i,16,16,-.7,()=>{se(i,6,15,18,2,"#e6dec9"),Ht(i,[[24,12],[30,16],[24,20]],"#d5d8d4"),Ht(i,[[5,12],[9,16],[5,20]],"#6a8f6a")});return}if(e==="bucket"||e==="water_bucket"||e==="lava_bucket"){Ht(i,[[8,7],[24,7],[22,28],[10,28]],"#aab4b3"),se(i,10,10,12,3,"#e0e5e2"),e!=="bucket"&&se(i,10,17,12,8,e==="water_bucket"?"#34a8de":"#e86a2b"),os(i,[[8,7],[24,7],[22,28],[10,28]],"#343a3a",2);return}if(e==="eye_of_ender"||e==="ender_pearl"){se(i,8,11,17,11,"#1f7f78"),se(i,11,8,11,17,"#2fada0"),se(i,14,12,5,5,e==="eye_of_ender"?"#283c35":"#b4ffdb"),se(i,15,13,2,2,"#eaffd7");return}if(e==="blaze_rod"||e==="blaze_powder"){se(i,12,6,8,22,"#f0b13d"),se(i,10,10,12,3,"#ffe06a"),se(i,13,18,10,3,"#e36b2e");return}if(e==="paper"||e==="book"){se(i,8,7,17,20,e==="book"?"#7a4a2a":"#eadfbd"),se(i,11,9,11,16,e==="book"?"#d9c58f":"#fff2ce"),se(i,22,8,2,18,"#2e1a10");return}if(e==="egg"){se(i,12,8,8,17,"#eee7d7"),se(i,10,13,12,10,"#eee7d7"),se(i,12,10,4,3,"#fff8ea");return}se(i,9,9,14,14,n),se(i,7,13,18,8,n),se(i,11,10,5,3,s),se(i,19,19,5,4,r)}function fg(i){return i.includes("coal")?"#242827":i.includes("copper")?"#c9794a":i.includes("iron")?"#d3aa8e":i.includes("gold")?"#f2c84b":i.includes("redstone")?"#ff4a3f":i.includes("lapis")?"#4d76ff":i.includes("diamond")?"#8df8f0":i.includes("emerald")?"#5cff82":i.includes("quartz")?"#fff8e8":null}function se(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(Math.round(e),Math.round(t),Math.round(n),Math.round(s))}function Ht(i,e,t){i.fillStyle=t,i.beginPath(),i.moveTo(e[0][0],e[0][1]);for(const[n,s]of e.slice(1))i.lineTo(n,s);i.closePath(),i.fill()}function os(i,e,t,n){i.strokeStyle=t,i.lineWidth=n,i.beginPath(),i.moveTo(e[0][0],e[0][1]);for(const[s,r]of e.slice(1))i.lineTo(s,r);i.closePath(),i.stroke()}function ci(i,e,t,n,s){i.save(),i.translate(e,t),i.rotate(n),i.translate(-e,-t),s(),i.restore()}function Di(i){const e=i.replace("#",""),t=e.length===3?e.split("").map(s=>s+s).join(""):e,n=Number.parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:n&255}}function wn(i,e){return{r:no(i.r+e,0,255),g:no(i.g+e,0,255),b:no(i.b+e,0,255)}}function Hl(i,e){return Qt(wn(Di(i),e))}function Qt(i){return`rgb(${i.r}, ${i.g}, ${i.b})`}function no(i,e,t){return Math.max(e,Math.min(t,Math.round(i)))}const Vl="codex-craft:settings:v1",un={mouseSensitivity:1,touchSensitivity:1,fov:74,renderDistance:3,graphicsQuality:"balanced",showQuestTracker:!0,showDebug:!0,soundVolume:.7};function pg(){try{const i=window.localStorage.getItem(Vl);return i?Mo(JSON.parse(i)):{...un}}catch{return{...un}}}function mg(i){window.localStorage.setItem(Vl,JSON.stringify(Mo(i)))}function Mo(i){const e=i==null?void 0:i.graphicsQuality;return{mouseSensitivity:ts(i==null?void 0:i.mouseSensitivity,.25,2.5,un.mouseSensitivity),touchSensitivity:ts(i==null?void 0:i.touchSensitivity,.35,2.2,un.touchSensitivity),fov:ts(i==null?void 0:i.fov,60,95,un.fov),renderDistance:Math.round(ts(i==null?void 0:i.renderDistance,2,5,un.renderDistance)),graphicsQuality:e==="quality"||e==="balanced"||e==="performance"?e:un.graphicsQuality,showQuestTracker:(i==null?void 0:i.showQuestTracker)??un.showQuestTracker,showDebug:(i==null?void 0:i.showDebug)??un.showDebug,soundVolume:ts(i==null?void 0:i.soundVolume,0,1,un.soundVolume)}}function ts(i,e,t,n){return typeof i=="number"&&Number.isFinite(i)?Math.max(e,Math.min(t,i)):n}class gg{constructor(e,t){D(this,"element");D(this,"callbacks");D(this,"menuLayer");D(this,"panelLayer");D(this,"hudLayer");D(this,"statusLine");D(this,"debugChip");D(this,"reticle");D(this,"itemName");D(this,"miningFill");D(this,"heartRow");D(this,"armorRow");D(this,"hungerRow");D(this,"airRow");D(this,"hotbar");D(this,"mobileControls");D(this,"mobileStick");D(this,"questTracker");D(this,"bossBar");D(this,"toast");D(this,"damageIndicator");D(this,"mode","title");D(this,"worlds",[]);D(this,"stats",null);D(this,"panelSignature","");D(this,"toastTimer",0);D(this,"catalogQuery","");D(this,"catalogPage",0);D(this,"catalogSelectedItem",null);D(this,"optionsReturnMode","title");D(this,"mobileStickPointerId",null);this.callbacks=t,this.element=document.createElement("div"),this.element.className="hud",this.hudLayer=document.createElement("div"),this.hudLayer.className="play-hud";const n=document.createElement("div");n.className="top-bar compact";const s=document.createElement("div");s.className="brand-stack";const r=document.createElement("div");r.className="brand-title pixel-title-small",r.textContent="Codex Craft",this.statusLine=document.createElement("div"),this.statusLine.className="status-line",s.append(r,this.statusLine),this.debugChip=document.createElement("div"),this.debugChip.className="world-chip debug-chip",n.append(s,this.debugChip),this.reticle=document.createElement("div"),this.reticle.className="reticle";const o=document.createElement("div");o.className="mining-progress",this.miningFill=document.createElement("span"),o.append(this.miningFill),this.itemName=document.createElement("div"),this.itemName.className="selected-item-name";const a=document.createElement("div");a.className="survival-bars",this.armorRow=document.createElement("div"),this.armorRow.className="icon-row armor",this.heartRow=document.createElement("div"),this.heartRow.className="icon-row hearts",this.hungerRow=document.createElement("div"),this.hungerRow.className="icon-row hunger",this.airRow=document.createElement("div"),this.airRow.className="icon-row air",a.append(this.armorRow,this.heartRow,this.hungerRow,this.airRow),this.hotbar=document.createElement("div"),this.hotbar.className="hotbar survival-hotbar",this.mobileControls=document.createElement("div"),this.mobileControls.className="mobile-controls",this.mobileControls.hidden=!0,this.mobileStick=this.makeMobileControls(),this.questTracker=document.createElement("div"),this.questTracker.className="quest-tracker",this.bossBar=document.createElement("div"),this.bossBar.className="boss-bar",this.toast=document.createElement("div"),this.toast.className="toast",this.damageIndicator=document.createElement("div"),this.damageIndicator.className="damage-indicator",this.hudLayer.append(n,this.bossBar,this.damageIndicator,this.reticle,o,this.itemName,a,this.hotbar,this.mobileControls,this.questTracker,this.toast),this.menuLayer=document.createElement("div"),this.menuLayer.className="menu-layer",this.panelLayer=document.createElement("div"),this.panelLayer.className="panel-layer",this.element.append(this.hudLayer,this.menuLayer,this.panelLayer),this.element.addEventListener("pointerdown",l=>{const c=l.target;c!=null&&c.closest("button, input, select")&&this.callbacks.onUiAction("click")},!0),this.element.addEventListener("mouseover",l=>{const c=l.target;c!=null&&c.closest("button")&&this.callbacks.onUiAction("hover")},!0),e.append(this.element),this.render()}makeMobileControls(){const e=document.createElement("div");e.className="mobile-left-pad";const t=document.createElement("div");t.className="mobile-stick",t.setAttribute("aria-label","이동 조이스틱");const n=document.createElement("span");n.className="mobile-stick-knob",t.append(n),e.append(t);const s=document.createElement("div");s.className="mobile-top-actions",s.append(this.makeMobileTapButton("일시정지","pause",()=>this.callbacks.onMobilePause()),this.makeMobileTapButton("가방","bag",()=>this.callbacks.onMobileInventory()));const r=document.createElement("div");r.className="mobile-action-pad",r.append(this.makeMobileHoldButton("채굴","primary",a=>this.callbacks.onTouchAction("primary",a)),this.makeMobileHoldButton("사용","secondary",a=>this.callbacks.onTouchAction("secondary",a)),this.makeMobileHoldButton("점프","jump",a=>this.callbacks.onTouchKey("Space",a)),this.makeMobileHoldButton("숙임","sneak",a=>this.callbacks.onTouchKey("ShiftLeft",a)),this.makeMobileHoldButton("질주","sprint",a=>this.callbacks.onTouchKey("ControlLeft",a))),t.addEventListener("pointerdown",a=>{this.mobileStickPointerId=a.pointerId,t.setPointerCapture(a.pointerId),this.updateMobileStick(a,t,n),a.preventDefault(),a.stopPropagation()}),t.addEventListener("pointermove",a=>{a.pointerId===this.mobileStickPointerId&&(this.updateMobileStick(a,t,n),a.preventDefault(),a.stopPropagation())});const o=a=>{a.pointerId===this.mobileStickPointerId&&(this.mobileStickPointerId=null,n.style.transform="translate(-50%, -50%)",this.callbacks.onTouchMove(0,0),a.preventDefault(),a.stopPropagation())};return t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),this.mobileControls.append(s,e,r),t}updateMobileStick(e,t,n){const s=t.getBoundingClientRect(),r=s.left+s.width/2,o=s.top+s.height/2,a=s.width*.36;let l=e.clientX-r,c=e.clientY-o;const h=Math.hypot(l,c);h>a&&(l=l/h*a,c=c/h*a),n.style.transform=`translate(calc(-50% + ${l}px), calc(-50% + ${c}px))`,this.callbacks.onTouchMove(l/a,-c/a)}makeMobileHoldButton(e,t,n){const s=document.createElement("button");s.className=`mobile-button ${t}`,s.type="button",s.textContent=e;const r=a=>{s.setPointerCapture(a.pointerId),s.classList.add("pressed"),n(!0),a.preventDefault(),a.stopPropagation()},o=a=>{s.classList.remove("pressed"),n(!1),a.preventDefault(),a.stopPropagation()};return s.addEventListener("pointerdown",r),s.addEventListener("pointerup",o),s.addEventListener("pointercancel",o),s.addEventListener("lostpointercapture",()=>{s.classList.remove("pressed"),n(!1)}),s}makeMobileTapButton(e,t,n){const s=document.createElement("button");return s.className=`mobile-button ${t}`,s.type="button",s.textContent=e,s.addEventListener("click",r=>{n(),r.preventDefault(),r.stopPropagation()}),s}setMode(e){this.mode=e,this.panelSignature="",this.render()}setWorlds(e){this.worlds=e,this.render()}update(e){if(this.stats=e,this.renderHud(),this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace"){const t=this.makePanelSignature(e);if(t===this.panelSignature)return;this.panelSignature=t,this.renderPanel()}}showToast(e){window.clearTimeout(this.toastTimer),this.toast.textContent=e,this.toast.classList.remove("quest-toast"),this.toast.classList.add("visible"),this.toastTimer=window.setTimeout(()=>{this.toast.classList.remove("visible")},1800)}showQuestToast(e,t,n){window.clearTimeout(this.toastTimer);const s=document.createElement("strong");s.textContent=e;const r=document.createElement("span");r.textContent=t;const o=document.createElement("em");o.textContent=n,this.toast.replaceChildren(s,r,o),this.toast.classList.add("visible","quest-toast"),this.toastTimer=window.setTimeout(()=>{this.toast.classList.remove("visible","quest-toast")},3200)}showDamageIndicator(e){this.damageIndicator.className=`damage-indicator visible ${e}`,window.setTimeout(()=>{this.damageIndicator.classList.remove("visible")},420)}render(){this.element.dataset.mode=this.mode,this.renderMenu(),this.renderPanel(),this.renderHud()}renderHud(){if(!this.stats)return;const e=this.stats.selectedStack;this.statusLine.textContent=this.stats.position,this.debugChip.hidden=!this.stats.settings.showDebug,this.debugChip.innerHTML="",this.debugChip.append(this.makeMetric("월드",this.stats.activeWorldName),this.makeMetric("FPS",String(this.stats.fps)),this.makeMetric("청크",String(this.stats.chunks)),this.makeMetric("몹",String(this.stats.mobs)),this.makeMetric("저장",this.stats.saveState)),this.itemName.textContent=e?lt[e.item].name:"",this.miningFill.style.width=`${Math.round(this.stats.miningProgress*100)}%`,this.renderIconRow(this.armorRow,"armor",this.armorPoints()),this.renderIconRow(this.heartRow,"heart",this.stats.survival.health),this.renderIconRow(this.hungerRow,"hunger",this.stats.survival.hunger),this.renderIconRow(this.airRow,"air",this.stats.survival.air),this.renderHotbar(),this.renderBossBar(),this.renderQuestTracker(),this.mobileControls.hidden=this.mode!=="playing"}renderBossBar(){var r;const e=((r=this.stats)==null?void 0:r.boss)??null;if(!e||this.mode!=="playing"){this.bossBar.hidden=!0,this.bossBar.innerHTML="";return}this.bossBar.hidden=!1,this.bossBar.innerHTML="";const t=document.createElement("div");t.className="boss-title",t.textContent=`${e.name} · ${e.phaseKo} · 수정 ${e.crystals}개`;const n=document.createElement("div");n.className="boss-meter";const s=document.createElement("span");s.style.width=`${Math.max(0,Math.min(100,e.health/e.maxHealth*100))}%`,n.append(s),this.bossBar.append(t,n)}renderQuestTracker(){if(!this.stats||this.mode!=="playing"){this.questTracker.hidden=!0;return}if(!this.stats.settings.showQuestTracker){this.questTracker.hidden=!0;return}const e=qa(this.stats.questState),t=Xa(this.stats.questState);this.questTracker.hidden=!e&&t.length===0,this.questTracker.innerHTML="";const n=document.createElement("div");n.className="quest-tracker-title",n.textContent="현재 목표",this.questTracker.append(n),e&&this.questTracker.append(this.makeQuestTrackerLine(e,!0));for(const s of t)this.questTracker.append(this.makeQuestTrackerLine(s,!1))}makeQuestTrackerLine(e,t){const n=document.createElement("div");n.className=`quest-tracker-line ${t?"main":""}`;const s=document.createElement("strong");s.textContent=e.titleKo;const r=document.createElement("span");if(r.textContent=$a(e,this.stats.questState),n.append(s,r),t){const o=document.createElement("em");o.textContent=e.descriptionKo,n.append(o)}return n}renderMenu(){if(this.menuLayer.innerHTML="",this.mode==="playing"||this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace"){this.menuLayer.hidden=!0;return}if(this.menuLayer.hidden=!1,this.mode==="title"){this.menuLayer.append(this.makeTitleMenu());return}if(this.mode==="options"){this.menuLayer.append(this.makeOptionsMenu());return}if(this.mode==="worldSelect"){this.menuLayer.append(this.makeWorldSelect());return}if(this.mode==="createWorld"){this.menuLayer.append(this.makeCreateWorld());return}if(this.mode==="paused"){this.menuLayer.append(this.makePauseMenu());return}if(this.mode==="gameOver"){this.menuLayer.append(this.makeGameOver());return}this.mode==="loading"&&this.menuLayer.append(this.makeMenuPanel("지형 불러오는 중","청크를 만들고 하늘을 준비하고 있습니다.",[]))}renderPanel(){if(this.panelLayer.innerHTML="",!this.stats||this.mode!=="inventory"&&this.mode!=="craftingTable"&&this.mode!=="furnace"){this.panelLayer.hidden=!0;return}this.panelLayer.hidden=!1,this.panelLayer.append(this.mode==="furnace"?this.makeFurnacePanel():this.makeInventoryPanel(this.mode==="craftingTable"?3:2))}makeTitleMenu(){const e=document.createElement("div");e.className="title-menu";const t=document.createElement("section");t.className="title-brand";const n=document.createElement("div");n.className="title-badge",n.textContent="로컬 싱글플레이 생존";const s=document.createElement("h1");s.className="title-logo",s.textContent="Codex Craft";const r=document.createElement("p");r.className="title-copy",r.textContent="나무에서 드래곤까지 이어지는 한국어 복셀 생존 샌드박스.";const o=document.createElement("div");o.className="title-feature-grid";for(const[c,h]of[["진행","퀘스트 기반"],["월드","동굴·지옥·엔드"],["전투","몹·장비·드래곤"]]){const d=document.createElement("div"),u=document.createElement("strong");u.textContent=h;const f=document.createElement("span");f.textContent=c,d.append(u,f),o.append(d)}t.append(n,s,r,o);const a=document.createElement("nav");a.className="title-actions",a.append(this.makeMenuButton("싱글플레이",this.callbacks.onSingleplayer,"primary"),this.makeMenuButton("새 월드 만들기",this.callbacks.onCreateWorldMenu),this.makeMenuButton("설정",()=>{this.optionsReturnMode="title",this.callbacks.onOptions("title")}),this.makeMenuButton("로컬 빌드 정보",()=>this.showToast("Codex Craft는 이 컴퓨터에 저장되는 싱글플레이 빌드입니다.")));const l=document.createElement("div");return l.className="title-note",l.textContent="WASD 이동 · E 인벤토리 · 우클릭 상호작용 · Esc 메뉴",e.append(t,a,l),e}makeOptionsMenu(){var r;const e=((r=this.stats)==null?void 0:r.settings)??un,t=this.makeMenuPanel("설정","조작감, 화면, HUD 표시를 조정합니다.",[],!1);t.classList.add("options-panel");const n=document.createElement("div");n.className="settings-grid",n.append(this.makeSliderSetting("마우스 감도",`${Math.round(e.mouseSensitivity*100)}%`,.25,2.5,.05,e.mouseSensitivity,o=>this.callbacks.onSettingsChange({mouseSensitivity:o})),this.makeSliderSetting("터치 감도",`${Math.round(e.touchSensitivity*100)}%`,.35,2.2,.05,e.touchSensitivity,o=>this.callbacks.onSettingsChange({touchSensitivity:o})),this.makeSliderSetting("시야각",`${e.fov}°`,60,95,1,e.fov,o=>this.callbacks.onSettingsChange({fov:Math.round(o)})),this.makeSliderSetting("렌더 거리",`${e.renderDistance} 청크`,2,5,1,e.renderDistance,o=>this.callbacks.onSettingsChange({renderDistance:Math.round(o)})),this.makeSelectSetting("그래픽 품질",e.graphicsQuality,[["quality","고품질"],["balanced","균형"],["performance","성능"]],o=>this.callbacks.onSettingsChange({graphicsQuality:o})),this.makeToggleSetting("퀘스트 목표 표시",e.showQuestTracker,o=>this.callbacks.onSettingsChange({showQuestTracker:o})),this.makeToggleSetting("좌표/FPS 표시",e.showDebug,o=>this.callbacks.onSettingsChange({showDebug:o})),this.makeSliderSetting("사운드 볼륨",`${Math.round(e.soundVolume*100)}%`,0,1,.05,e.soundVolume,o=>this.callbacks.onSettingsChange({soundVolume:o})));const s=document.createElement("div");return s.className="menu-actions",s.append(this.makeMenuButton("기본값으로 복원",()=>this.callbacks.onSettingsChange(un)),this.makeMenuButton("뒤로",()=>this.callbacks.onOptionsBack(this.optionsReturnMode))),t.append(n,s),t}makeWorldSelect(){const e=this.makeMenuPanel("월드 선택","로컬 싱글플레이 저장을 선택하세요.",[],!1),t=document.createElement("div");if(t.className="world-list",this.worlds.length===0){const s=document.createElement("div");s.className="empty-worlds",s.textContent="아직 만든 월드가 없습니다.",t.append(s)}for(const s of this.worlds){const r=document.createElement("div");r.className="world-row";const o=document.createElement("button");o.className="world-main",o.type="button",o.addEventListener("click",()=>this.callbacks.onSelectWorld(s.id));const a=document.createElement("strong");a.textContent=s.name;const l=document.createElement("span");l.textContent=`${s.seed} | ${s.allowCheats?"치트 허용 | ":""}${new Date(s.updatedAt).toLocaleString()}`,o.append(a,l);const c=document.createElement("button");c.className="menu-button danger mini",c.type="button",c.textContent="삭제",c.addEventListener("click",()=>this.callbacks.onDeleteWorld(s.id)),r.append(o,c);const h=document.createElement("button");h.className="menu-button mini",h.type="button",h.textContent="동굴 월드 복사 재생성",h.addEventListener("click",()=>this.callbacks.onRegenerateWorld(s.id)),r.append(h),t.append(r)}const n=document.createElement("div");return n.className="menu-actions",n.append(this.makeMenuButton("새 월드 만들기",this.callbacks.onCreateWorldMenu),this.makeMenuButton("뒤로",this.callbacks.onBackToTitle)),e.append(t,n),e}makeCreateWorld(){const e=this.makeMenuPanel("새 월드 만들기","생존 | 보통 | 로컬 저장",[],!1),t=document.createElement("form");t.className="create-form";const n=document.createElement("input");n.className="pixel-input",n.name="worldName",n.maxLength=28,n.placeholder="월드 이름",n.value=`새 월드 ${this.worlds.length+1}`;const s=document.createElement("input");s.className="pixel-input",s.name="seed",s.maxLength=36,s.placeholder="시드",s.value=`codex-${Math.floor(Date.now()/1e3).toString(36)}`;const r=document.createElement("label");r.className="create-cheats-row";const o=document.createElement("span");o.textContent="치트 허용";const a=document.createElement("em");a.textContent="이 월드는 인벤토리에서 크리에이티브/서바이벌 전환 가능";const l=document.createElement("input");l.type="checkbox",r.append(o,a,l);const c=document.createElement("div");c.className="menu-actions";const h=this.makeMenuButton("생성",()=>{});return h.type="submit",c.append(h,this.makeMenuButton("취소",this.callbacks.onBackToTitle)),t.append(n,s,r,c),t.addEventListener("submit",d=>{d.preventDefault(),this.callbacks.onCreateWorld(n.value.trim()||"새 월드",s.value.trim()||"codex-aurora",l.checked)}),e.append(t),e}makePauseMenu(){return this.makeMenuPanel("게임 메뉴","월드가 일시정지되었습니다.",[this.makeMenuButton("게임으로 돌아가기",this.callbacks.onResume),this.makeMenuButton("설정",()=>{this.optionsReturnMode="paused",this.callbacks.onOptions("paused")}),this.makeMenuButton("저장하고 타이틀로",this.callbacks.onQuitToTitle),this.makeMenuButton("모든 로컬 월드 초기화",this.callbacks.onResetAll,"danger")])}makeGameOver(){return this.makeMenuPanel("사망했습니다","월드 스폰 지점에서 다시 시작합니다.",[this.makeMenuButton("리스폰",this.callbacks.onRespawn),this.makeMenuButton("타이틀 화면",this.callbacks.onQuitToTitle)],!0)}makeInventoryPanel(e){const t=this.stats;if(!t)return document.createElement("div");const n=document.createElement("div");n.className=`inventory-panel grid-${e}`;const s=document.createElement("div");s.className="inventory-tooltip",s.hidden=!0,n.addEventListener("mousemove",A=>{n.style.setProperty("--cursor-x",`${A.clientX}px`),n.style.setProperty("--cursor-y",`${A.clientY}px`);const C=A.target.closest(".inventory-slot, .craft-slot, .craft-result-slot, .equipment-slot"),P=this.stackFromSlotElement(C);if(!P){s.hidden=!0;return}s.textContent=this.stackTooltip(P),s.style.setProperty("--tooltip-x",`${A.clientX}px`),s.style.setProperty("--tooltip-y",`${A.clientY}px`),s.hidden=!1}),n.addEventListener("mouseleave",()=>{s.hidden=!0});const r=document.createElement("div");r.className="inventory-title";const o=document.createElement("strong");if(o.textContent=e===3?"제작대":"인벤토리",r.append(o),t.allowCheats){const A=document.createElement("span");A.className="mode-badge",A.textContent=t.gameMode==="creative"?"치트 · 크리에이티브":"치트 · 서바이벌";const C=document.createElement("button");C.className="mode-toggle-button",C.type="button",C.textContent=t.gameMode==="creative"?"서바이벌 전환":"크리에이티브 전환",C.addEventListener("click",this.callbacks.onToggleGameMode),r.append(A,C)}const a=document.createElement("div");a.className="recipe-book";const l=document.createElement("div");l.className="recipe-title",l.textContent="제작법 책",a.append(l);for(const A of t.recipes.filter(C=>C.unlocked&&C.recipe.size<=e)){const C=document.createElement("button");C.className=`recipe-card ${A.craftable?"craftable":""}`,C.type="button",C.disabled=!A.craftable,C.addEventListener("click",P=>{this.callbacks.onCraftRecipe(A.recipe.id,P.shiftKey,e)}),C.append(this.makeItemIcon(A.recipe.result),document.createTextNode(A.recipe.name)),a.append(C)}const c=this.makeQuestJournal(),h=this.makeItemCatalog(e),d=document.createElement("div");d.className="player-paper";const u=document.createElement("div");u.className="player-avatar",u.textContent="CC";const f=document.createElement("div");f.className="equipment-slots",f.append(this.makeEquipmentSlot("head","투구"),this.makeEquipmentSlot("chest","흉갑"),this.makeEquipmentSlot("legs","각반"),this.makeEquipmentSlot("feet","부츠"),this.makeOffhandSlot()),d.append(u,f);const g=document.createElement("div");g.className="crafting-area";const v=document.createElement("div");v.className=`craft-grid cells-${e}`;for(let A=0;A<e*e;A+=1)v.append(this.makeCraftSlot(A));const m=document.createElement("div");m.className="craft-arrow",m.textContent=">";const p=document.createElement("button");p.className="craft-result-slot",p.type="button",p.dataset.slotRef="result",p.disabled=!t.craftingResult,p.addEventListener("click",A=>this.callbacks.onCraftResult(A.shiftKey)),t.craftingResult&&(p.title=this.stackTooltip(t.craftingResult),p.append(this.makeItemIcon(t.craftingResult),this.makeCount(t.craftingResult.count))),g.append(v,m,p);const T=document.createElement("div");T.className="storage-grid";for(let A=0;A<27;A+=1)T.append(this.makeSlot(A));const w=document.createElement("div");w.className="inventory-hotbar-grid";for(let A=Vt;A<Vt+9;A+=1)w.append(this.makeSlot(A));const x=document.createElement("div");return x.className="cursor-stack",t.inventory.cursor&&x.append(this.makeItemIcon(t.inventory.cursor),this.makeCount(t.inventory.cursor.count)),n.append(r,c,a,d,g,T,w,h,x,s),n}makeQuestJournal(){const e=document.createElement("div");e.className="quest-journal";const t=document.createElement("div");if(t.className="quest-journal-title",t.textContent="모험 일지",e.append(t),!this.stats)return e;const n=qa(this.stats.questState);n&&e.append(this.makeJournalQuest(n,"메인"));for(const o of Xa(this.stats.questState))e.append(this.makeJournalQuest(o,this.categoryLabel(o)));const s=Yn.filter(o=>o.future).slice(0,4),r=document.createElement("div");r.className="quest-roadmap-title",r.textContent="이후 로드맵",e.append(r);for(const o of s)e.append(this.makeJournalQuest(o,"예고"));return e}makeJournalQuest(e,t){const n=document.createElement("div");n.className=`quest-journal-entry ${e.future?"future":""}`;const s=document.createElement("div"),r=document.createElement("span");r.className="quest-label",r.textContent=t;const o=document.createElement("strong");o.textContent=e.titleKo,s.append(r,o);const a=document.createElement("p");a.textContent=e.descriptionKo;const l=document.createElement("span");return l.className="quest-progress-text",l.textContent=e.future?"다음 대형 업데이트에서 실제 콘텐츠 확장 예정":$a(e,this.stats.questState),n.append(s,a,l),n}categoryLabel(e){return{side:"사이드",combat:"전투",exploration:"탐험",crafting:"제작",main:"메인"}[e.category]??"사이드"}makeFurnacePanel(){const e=this.stats;if(!e)return document.createElement("div");const t=this.makeInventoryPanel(3);t.classList.add("furnace-panel");const n=t.querySelector(".inventory-title");n&&(n.textContent="화로");const s=t.querySelector(".recipe-book");if(s){s.innerHTML="";const r=document.createElement("div");r.className="recipe-title",r.textContent="제련",s.append(r);for(const o of e.smeltingRecipes){const a=document.createElement("button");a.className=`recipe-card ${o.smeltable?"craftable":""}`,a.type="button",a.disabled=!o.smeltable,a.addEventListener("click",l=>{this.callbacks.onSmeltRecipe(o.recipe.id,l.shiftKey)}),a.append(this.makeItemIcon(o.recipe.result),document.createTextNode(o.recipe.name)),s.append(a)}}return t}makeItemCatalog(e){var x;const t=this.stats,n=document.createElement("div");n.className="item-catalog";const s=Object.values(lt),r=this.catalogQuery.trim().toLowerCase(),o=s.filter(A=>r?A.name.toLowerCase().includes(r)||A.id.toLowerCase().includes(r):!0);this.catalogSelectedItem&&!o.some(A=>A.id===this.catalogSelectedItem)&&(this.catalogSelectedItem=((x=o[0])==null?void 0:x.id)??null);const a=48,l=Math.max(1,Math.ceil(o.length/a));this.catalogPage=Math.max(0,Math.min(this.catalogPage,l-1));const c=o.slice(this.catalogPage*a,this.catalogPage*a+a),h=document.createElement("div");h.className="catalog-header";const d=document.createElement("strong");d.textContent="아이템 목록";const u=document.createElement("span");u.textContent=`${o.length}/${s.length}`,h.append(d,u);const f=document.createElement("input");f.className="catalog-search",f.placeholder="아이템 검색",f.value=this.catalogQuery,f.addEventListener("input",()=>{this.catalogQuery=f.value,this.catalogPage=0,this.renderPanel();const A=this.panelLayer.querySelector(".catalog-search");A==null||A.focus(),A==null||A.setSelectionRange(A.value.length,A.value.length)});const g=document.createElement("div");g.className="catalog-pager";const v=this.makeCatalogButton("<",()=>{this.catalogPage=(this.catalogPage-1+l)%l,this.renderPanel()}),m=document.createElement("span");m.textContent=`${this.catalogPage+1}/${l}`;const p=this.makeCatalogButton(">",()=>{this.catalogPage=(this.catalogPage+1)%l,this.renderPanel()});g.append(v,m,p);const T=document.createElement("div");T.className="catalog-grid";for(const A of c){const C=document.createElement("button");C.className=`catalog-item ${this.catalogSelectedItem===A.id?"selected":""}`,C.type="button",C.dataset.item=A.id,C.title=A.name,C.setAttribute("aria-label",A.name),C.addEventListener("click",()=>{this.catalogSelectedItem=A.id,this.renderPanel()}),C.append(this.makeItemIcon({item:A.id,count:1})),T.append(C)}const w=this.makeCatalogDetail(e,t);return n.append(h,f,g,T,w),n}makeCatalogButton(e,t){const n=document.createElement("button");return n.className="catalog-page-button",n.type="button",n.textContent=e,n.addEventListener("click",t),n}makeCatalogDetail(e,t){const n=document.createElement("div");if(n.className="catalog-detail",!t||!this.catalogSelectedItem){const v=document.createElement("div");return v.className="catalog-empty",v.textContent="아이템을 선택하면 제작법과 획득처가 표시됩니다.",n.append(v),n}const s=lt[this.catalogSelectedItem],r=document.createElement("div");r.className="catalog-detail-head",r.append(this.makeItemIcon({item:s.id,count:1}));const o=document.createElement("div"),a=document.createElement("strong");a.textContent=s.name;const l=document.createElement("span");l.textContent=s.id,o.append(a,l),r.append(o);const c=document.createElement("div");c.className="catalog-meta",c.append(this.makeCatalogChip("구현됨"),this.makeCatalogChip(s.placeBlock?"블록":s.toolKind?"도구":s.food?"음식":"아이템")),s.toolKind&&c.append(this.makeCatalogChip(this.toolChip(s.toolTier??"hand",s.toolKind)));const h=t.recipes.filter(v=>v.recipe.result.item===s.id),d=t.smeltingRecipes.filter(v=>v.recipe.result.item===s.id),u=this.dropSources(s.id);if(n.append(r,c),t.allowCheats&&t.gameMode==="creative"){const v=document.createElement("button");v.className="recipe-fill-button creative-give-button",v.type="button",v.textContent="지급",v.addEventListener("click",()=>this.callbacks.onGiveCreativeItem(s.id)),n.append(v)}if(h.length>0){n.append(this.makeCatalogSectionTitle("제작법"));for(const v of h)n.append(this.makeRecipePreview(v,e))}if(d.length>0){n.append(this.makeCatalogSectionTitle("제련법"));for(const v of d)n.append(this.makeSmeltingPreview(v))}if(u.length>0){n.append(this.makeCatalogSectionTitle("획득처"));const v=document.createElement("div");v.className="source-list";for(const m of u)v.append(this.makeCatalogChip(m));n.append(v)}const f=lm(s.id),g=this.progressionTip(s.id);if(f.length>0){n.append(this.makeCatalogSectionTitle("관련 퀘스트"));const v=document.createElement("div");v.className="catalog-quest-list";for(const p of f.slice(0,4)){const T=this.makeCatalogChip(`${p.future?"예고":this.categoryLabel(p)} · ${p.titleKo}`);v.append(T)}n.append(v);const m=document.createElement("div");m.className="catalog-next-use",m.textContent=f[0].future?"다음 사용처: 이후 엔딩 루프 콘텐츠에서 이어집니다.":`다음 사용처: ${f[0].descriptionKo}`,n.append(m)}if(g){n.append(this.makeCatalogSectionTitle("추천 행동"));const v=document.createElement("div");v.className="catalog-next-use",v.textContent=g,n.append(v)}if(h.length===0&&d.length===0&&u.length===0&&f.length===0&&!g){const v=document.createElement("div");v.className="catalog-empty",v.textContent="아직 제작법은 없지만, 월드 탐험이나 다음 시스템에서 쓰일 수 있는 구현된 아이템입니다.",n.append(v)}return n}makeRecipePreview(e,t){const n=e.recipe,s=document.createElement("div");s.className="catalog-recipe-card";const r=document.createElement("div");r.className=`recipe-mini-grid cells-${n.size}`;const o=this.recipePreviewLayout(n);for(let h=0;h<n.size*n.size;h+=1){const d=document.createElement("span");d.className="recipe-mini-cell";const u=o[h];u&&d.append(this.makeItemIcon({item:u,count:1})),r.append(d)}const a=document.createElement("span");a.className="recipe-mini-arrow",a.textContent=">";const l=document.createElement("span");l.className="recipe-mini-result",l.append(this.makeItemIcon(n.result),this.makeCount(n.result.count));const c=document.createElement("button");return c.className="recipe-fill-button",c.type="button",c.textContent=e.craftable&&n.size<=t?"배치":"부족",c.disabled=!e.craftable||n.size>t,c.addEventListener("click",()=>this.callbacks.onCraftRecipe(n.id,!1,t)),s.append(r,a,l,c),s}makeSmeltingPreview(e){const t=e.recipe,n=document.createElement("div");n.className="catalog-recipe-card smelting-preview";const s=document.createElement("span");s.className="recipe-mini-result",s.append(this.makeItemIcon({item:t.input,count:1}));const r=document.createElement("span");r.className="recipe-mini-result",r.append(this.makeItemIcon({item:t.fuel,count:1}));const o=document.createElement("span");o.className="recipe-mini-arrow",o.textContent=">";const a=document.createElement("span");a.className="recipe-mini-result",a.append(this.makeItemIcon(t.result),this.makeCount(t.result.count));const l=document.createElement("button");return l.className="recipe-fill-button",l.type="button",l.textContent=e.smeltable?"제련":"부족",l.disabled=!e.smeltable,l.addEventListener("click",()=>this.callbacks.onSmeltRecipe(t.id,!1)),n.append(s,r,o,a,l),n}toolChip(e,t){const n={hand:"손",wood:"나무",stone:"돌",copper:"구리",iron:"철",gold:"금",diamond:"다이아"},s={none:"도구 없음",pickaxe:"곡괭이",axe:"도끼",shovel:"삽",sword:"검",bow:"활",shield:"방패",shears:"가위"};return`${n[e]} ${s[t]}`}makeCatalogSectionTitle(e){const t=document.createElement("div");return t.className="catalog-section-title",t.textContent=e,t}makeCatalogChip(e){const t=document.createElement("span");return t.className="catalog-chip",t.textContent=e,t}recipePreviewLayout(e){var s,r,o;const t=e.size,n=Array.from({length:t*t},()=>null);if(e.type==="shapeless"){let a=0;for(const[l,c]of Object.entries(e.ingredients??{}))for(let h=0;h<c;h+=1)a<n.length&&(n[a]=l,a+=1);return n}for(let a=0;a<(((s=e.pattern)==null?void 0:s.length)??0);a+=1){const l=((r=e.pattern)==null?void 0:r[a])??"";for(let c=0;c<Math.min(l.length,t);c+=1){const h=(o=e.key)==null?void 0:o[l[c]];h&&(n[a*t+c]=h)}}return n}dropSources(e){const t=Object.values(Yt).filter(s=>s.drops===e).map(s=>s.displayName),n={rotten_flesh:["좀비"],bone:["스켈레톤"],arrow:["스켈레톤","제작"],string:["거미"],spider_eye:["거미"],gunpowder:["크리퍼"],raw_beef:["소"],leather:["소"],raw_porkchop:["돼지"],raw_mutton:["양"],wool:["양"],raw_chicken:["닭"],feather:["닭"],egg:["닭"],flint:["자갈"],bucket:["제작","상자 보급"],water_bucket:["양동이로 물 담기"],lava_bucket:["양동이로 용암 담기"],flint_and_steel:["제작"],blaze_rod:["블레이즈"],blaze_powder:["블레이즈 막대 제작","지옥 요새 상자"],ender_pearl:["엔더맨","지옥 요새 상자","요새 상자"],eye_of_ender:["제작","요새 상자"],paper:["제작","요새 상자"],book:["책장","제작","요새 상자"],end_portal_frame:["요새 포털 방"],stone_bricks:["제작","요새"],cracked_stone_bricks:["요새"],mossy_stone_bricks:["제작","요새"],bookshelf:["제작","요새 도서관"],iron_bars:["제작","요새 포털 방"],end_stone:["엔드 중앙 섬"],end_stone_bricks:["제작","엔드 스폰 다리","귀환 포털 주변"],end_crystal:["엔드 흑요석 기둥"],dragon_egg:["엔더 드래곤 처치 보상"],gold_nugget:["네더 금 광석","지옥 요새 상자"],nether_quartz:["네더 석영 광석"]};return[...t,...n[e]??[]]}progressionTip(e){return{log:"첫 진행은 원목을 판자로 바꾸고, 제작대와 나무 곡괭이를 만드는 것입니다.",stone:"돌 곡괭이와 화로의 기본 재료입니다. 철을 캐기 전 반드시 충분히 챙겨 두세요.",coal:"횃불과 제련 연료입니다. 동굴 탐험 전에 횃불 16개 이상을 목표로 하세요.",iron_ingot:"양동이, 방패, 철 곡괭이로 이어집니다. 다이아/포털 준비의 중심 재료입니다.",diamond:"다이아 곡괭이를 만들면 흑요석을 캐서 지옥문과 엔딩 루프를 열 수 있습니다.",obsidian:"4x5 이상 프레임을 만들고 부싯돌과 부시로 점화하면 지옥문이 열립니다.",blaze_rod:"블레이즈 가루로 바꿔 엔더의 눈 제작에 사용하세요.",blaze_powder:"엔더 진주와 조합하면 엔더의 눈이 됩니다. 요새 추적의 핵심입니다.",ender_pearl:"블레이즈 가루와 합쳐 엔더의 눈을 만들거나, 이동 보조용으로 사용할 수 있습니다.",eye_of_ender:"우클릭으로 던지면 요새 방향을 알려줍니다. 요새 포털 방에서 프레임에 꽂으세요.",end_portal_frame:"12개 프레임에 눈이 모두 들어가면 엔드 포털이 열립니다.",end_crystal:"드래곤을 회복시킵니다. 활로 먼저 깨면 보스전이 훨씬 쉬워집니다.",dragon_egg:"엔딩 루프 완료 보상입니다. 이후 업데이트에서는 전리품/장식 진행으로 확장할 수 있습니다.",bow:"엔드 수정과 스켈레톤 견제에 필수입니다. 드래곤전 전에 화살을 충분히 준비하세요.",arrow:"엔드 수정과 드래곤에게 쓰는 원거리 자원입니다. 드래곤전 전 32개 이상을 권장합니다.",shield:"스켈레톤과 크리퍼 대응용입니다. 요새/엔드 준비 전에 하나 들고 가면 안정적입니다.",bread:"초반 회복용 식량입니다. 동굴과 지옥 탐험 전 10개 이상을 챙기면 좋습니다."}[e]??null}renderHotbar(){if(!this.stats)return;this.hotbar.innerHTML="";const e=this.stats.inventory;for(let t=0;t<9;t+=1){const n=document.createElement("button");n.className=`slot ${t===e.selectedHotbarSlot?"selected":""}`,n.type="button",n.setAttribute("aria-label",`핫바 ${t+1}`),n.addEventListener("click",o=>{this.callbacks.onSelectHotbarSlot(t),o.preventDefault()});const s=document.createElement("span");s.className="slot-index",s.textContent=String(t+1),n.append(s);const r=e.slots[Vt+t];r&&n.append(this.makeItemIcon(r),this.makeCount(r.count)),this.hotbar.append(n)}}makeSlot(e){const t=this.stats,n=document.createElement("button");n.className="inventory-slot",n.type="button",n.dataset.slot=String(e),n.dataset.slotRef=`inventory:${e}`,n.draggable=!!(t!=null&&t.inventory.slots[e]),n.addEventListener("click",r=>{const o=this.numberFromEvent(r);if(o!==null){this.callbacks.onHotbarKeySwap(e,o);return}this.callbacks.onInventorySlot(e,0,r.shiftKey)}),n.addEventListener("contextmenu",r=>{r.preventDefault(),this.callbacks.onInventorySlot(e,2,r.shiftKey)}),n.addEventListener("dragstart",r=>{var a;if(!(((a=this.stats)==null?void 0:a.inventory.slots[e])??null)||!r.dataTransfer){r.preventDefault();return}r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",`inventory:${e}`),n.classList.add("dragging")}),n.addEventListener("dragend",()=>{n.classList.remove("dragging")}),n.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="move")}),n.addEventListener("drop",r=>{var a;r.preventDefault();const o=(a=r.dataTransfer)==null?void 0:a.getData("text/plain");o&&this.callbacks.onSlotDrop(o,`inventory:${e}`)});const s=(t==null?void 0:t.inventory.slots[e])??null;if(s){const r=this.stackTooltip(s);n.title=r,n.setAttribute("aria-label",r),n.append(this.makeItemIcon(s),this.makeCount(s.count))}return n}makeCraftSlot(e){const t=this.stats,n=document.createElement("button");n.className="craft-slot",n.type="button",n.dataset.craftSlot=String(e),n.dataset.slotRef=`craft:${e}`;const s=(t==null?void 0:t.craftingGrid[e])??null;if(n.draggable=!!s,n.addEventListener("click",r=>{this.callbacks.onCraftSlot(e,0,r.shiftKey)}),n.addEventListener("contextmenu",r=>{r.preventDefault(),this.callbacks.onCraftSlot(e,2,r.shiftKey)}),n.addEventListener("dragstart",r=>{if(!s||!r.dataTransfer){r.preventDefault();return}r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",`craft:${e}`),n.classList.add("dragging")}),n.addEventListener("dragend",()=>{n.classList.remove("dragging")}),n.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="move")}),n.addEventListener("drop",r=>{var a;r.preventDefault();const o=(a=r.dataTransfer)==null?void 0:a.getData("text/plain");o&&this.callbacks.onSlotDrop(o,`craft:${e}`)}),s){const r=this.stackTooltip(s);n.title=r,n.setAttribute("aria-label",r),n.append(this.makeItemIcon(s),this.makeCount(s.count))}return n}makeEquipmentSlot(e,t){var r;const n=((r=this.stats)==null?void 0:r.inventory.armorSlots[e])??null,s=this.makeEquipmentButton(`equip:${e}`,t,n);return s.addEventListener("click",()=>this.callbacks.onEquipmentSlot(e,0)),s.addEventListener("contextmenu",o=>{o.preventDefault(),this.callbacks.onEquipmentSlot(e,2)}),s}makeOffhandSlot(){var n;const e=((n=this.stats)==null?void 0:n.inventory.offhand)??null,t=this.makeEquipmentButton("offhand","보조",e);return t.classList.add("offhand-slot"),t.addEventListener("click",()=>this.callbacks.onOffhandSlot(0)),t.addEventListener("contextmenu",s=>{s.preventDefault(),this.callbacks.onOffhandSlot(2)}),t}makeEquipmentButton(e,t,n){const s=document.createElement("button");if(s.className="equipment-slot",s.type="button",s.dataset.slotRef=e,s.dataset.emptyLabel=t,s.draggable=!!n,s.setAttribute("aria-label",n?lt[n.item].name:t),s.title=n?this.stackTooltip(n):t,s.addEventListener("dragstart",r=>{if(!n||!r.dataTransfer){r.preventDefault();return}r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",e),s.classList.add("dragging")}),s.addEventListener("dragend",()=>{s.classList.remove("dragging")}),s.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="move")}),s.addEventListener("drop",r=>{var a;r.preventDefault();const o=(a=r.dataTransfer)==null?void 0:a.getData("text/plain");o&&this.callbacks.onSlotDrop(o,e)}),n)s.append(this.makeItemIcon(n),this.makeCount(n.count));else{const r=document.createElement("span");r.className="equipment-empty-label",r.textContent=t,s.append(r)}return s}makeItemIcon(e){const t=lt[e.item],n=document.createElement("span");return n.className=`item-icon pixel-art item-${e.item}`,n.style.setProperty("--item-color",t.color),n.style.backgroundImage=`url("${og(e.item)}")`,n}makeCount(e){const t=document.createElement("span");return t.className="item-count",t.textContent=e>1?String(e):"",t}stackTooltip(e){const t=lt[e.item],n=[t.name,`수량 ${e.count}/${t.maxStack}`];return e.durability!==void 0&&n.push(`내구도 ${e.durability}`),t.combat&&n.push(`공격력 ${t.combat.damage} · 재사용 ${t.combat.cooldown.toFixed(1)}초`),t.armor&&n.push(`방어 ${t.armor.points} · 강인함 ${t.armor.toughness}`),t.food&&n.push(`허기 +${t.food.hunger} · 포만감 +${t.food.saturation}`),t.placeBlock&&n.push("우클릭으로 설치"),n.join(`
`)}stackFromSlotElement(e){if(!e||!this.stats)return null;const t=e.dataset.slotRef;return t!=null&&t.startsWith("inventory:")?this.stats.inventory.slots[Number(t.replace("inventory:",""))]??null:t!=null&&t.startsWith("craft:")?this.stats.craftingGrid[Number(t.replace("craft:",""))]??null:t!=null&&t.startsWith("equip:")?this.stats.inventory.armorSlots[t.replace("equip:","")]??null:t==="offhand"?this.stats.inventory.offhand:t==="result"?this.stats.craftingResult:null}renderIconRow(e,t,n){e.innerHTML="";for(let s=0;s<10;s+=1){const r=document.createElement("span"),o=n-s*2;r.className=`${t}-icon ${o>=2?"full":o>=1?"half":"empty"}`,e.append(r)}}armorPoints(){return this.stats?Object.values(this.stats.inventory.armorSlots).reduce((e,t)=>{var n;return e+(t?((n=lt[t.item].armor)==null?void 0:n.points)??0:0)},0):0}makeMenuPanel(e,t,n,s=!1){const r=document.createElement("div");r.className=`menu-panel ${s?"giant":""}`;const o=document.createElement("h1");o.className="menu-title",o.textContent=e;const a=document.createElement("p");a.className="menu-copy",a.textContent=t;const l=document.createElement("div");return l.className="menu-actions",l.append(...n),r.append(o,a,l),r}makeMenuButton(e,t,n=""){const s=document.createElement("button");return s.className=`menu-button ${n}`,s.type="button",s.textContent=e,s.addEventListener("click",t),s}makeSliderSetting(e,t,n,s,r,o,a){const l=document.createElement("label");l.className="setting-row";const c=document.createElement("span");c.textContent=e;const h=document.createElement("strong");h.textContent=t;const d=document.createElement("input");return d.type="range",d.min=String(n),d.max=String(s),d.step=String(r),d.value=String(o),d.addEventListener("input",()=>{const u=Number(d.value);h.textContent=this.formatSettingValue(e,u),a(u)}),l.append(c,h,d),l}makeSelectSetting(e,t,n,s){var c;const r=document.createElement("label");r.className="setting-row";const o=document.createElement("span");o.textContent=e;const a=document.createElement("strong");a.textContent=((c=n.find(([h])=>h===t))==null?void 0:c[1])??t;const l=document.createElement("select");l.className="pixel-select";for(const[h,d]of n){const u=document.createElement("option");u.value=h,u.textContent=d,u.selected=h===t,l.append(u)}return l.addEventListener("change",()=>{var h;a.textContent=((h=n.find(([d])=>d===l.value))==null?void 0:h[1])??l.value,s(l.value)}),r.append(o,a,l),r}makeToggleSetting(e,t,n){const s=document.createElement("label");s.className="setting-row toggle";const r=document.createElement("span");r.textContent=e;const o=document.createElement("strong");o.textContent=t?"켜짐":"꺼짐";const a=document.createElement("input");return a.type="checkbox",a.checked=t,a.addEventListener("change",()=>{o.textContent=a.checked?"켜짐":"꺼짐",n(a.checked)}),s.append(r,o,a),s}formatSettingValue(e,t){return e.includes("감도")||e.includes("볼륨")?`${Math.round(t*100)}%`:e.includes("시야각")?`${Math.round(t)}°`:e.includes("렌더")?`${Math.round(t)} 청크`:String(t)}makeMetric(e,t){const n=document.createElement("div");n.className="meter-row";const s=document.createElement("span");s.textContent=e;const r=document.createElement("span");return r.textContent=t,n.append(s,r),n}makePanelSignature(e){const t=e.inventory.slots.map(f=>f?`${f.item}:${f.count}:${f.durability??""}`:"-").join("|"),n=["head","chest","legs","feet"].map(f=>{const g=e.inventory.armorSlots[f];return g?`${f}:${g.item}:${g.count}:${g.durability??""}`:`${f}:-`}).join("|"),s=e.inventory.offhand?`${e.inventory.offhand.item}:${e.inventory.offhand.count}:${e.inventory.offhand.durability??""}`:"-",r=e.inventory.cursor?`${e.inventory.cursor.item}:${e.inventory.cursor.count}:${e.inventory.cursor.durability??""}`:"-",o=e.recipes.map(f=>`${f.recipe.id}:${f.craftable?1:0}:${f.unlocked?1:0}`).join("|"),a=e.craftingGrid.map(f=>f?`${f.item}:${f.count}:${f.durability??""}`:"-").join("|"),l=e.craftingResult?`${e.craftingResult.item}:${e.craftingResult.count}:${e.craftingResult.durability??""}`:"-",c=e.smeltingRecipes.map(f=>`${f.recipe.id}:${f.smeltable?1:0}`).join("|"),h=e.boss?`${e.boss.health}:${e.boss.crystals}:${e.boss.phaseKo}`:"-",d=`${e.settings.mouseSensitivity}:${e.settings.touchSensitivity}:${e.settings.fov}:${e.settings.renderDistance}:${e.settings.graphicsQuality}:${e.settings.showQuestTracker}:${e.settings.showDebug}:${e.settings.soundVolume}`,u=`${e.dimension}|${e.questState.activeMainQuestId??"-"}|${e.questState.trackedSideQuestIds.join(",")}|${e.questState.completed.join(",")}|${Object.entries(e.questState.progress).map(([f,g])=>`${f}:${g}`).join(",")}`;return`${this.mode}|${e.allowCheats?1:0}|${e.gameMode}|${t}|${n}|${s}|${r}|${a}|${l}|${o}|${c}|${h}|${d}|${u}`}numberFromEvent(e){const n=e.code;if(!(n!=null&&n.startsWith("Digit")))return null;const s=Number(n.replace("Digit",""));return s>=1&&s<=9?s-1:null}}class _g{constructor(e){D(this,"root");D(this,"saveSystem",new vm);D(this,"clock",new Vc);D(this,"scene",new Cc);D(this,"camera",new nn(74,1,.05,520));D(this,"shell");D(this,"renderer");D(this,"input");D(this,"hud");D(this,"materials");D(this,"world");D(this,"player");D(this,"sky");D(this,"sunLight");D(this,"sunTarget");D(this,"hemisphereLight");D(this,"heldLight");D(this,"highlight");D(this,"handView");D(this,"audio",new Hp("/gpt-codex/"));D(this,"particles",new rm);D(this,"mobs",new Gp);D(this,"endBoss",new Xp);D(this,"torchLights",[]);D(this,"torchScanTimer",0);D(this,"nearbyTorchGlow",0);D(this,"dayFactor",1);D(this,"undergroundFactor",0);D(this,"selectedHit",null);D(this,"animationFrame",0);D(this,"elapsed",0);D(this,"fps",60);D(this,"saveRequested",!1);D(this,"saveDue",0);D(this,"saving",!1);D(this,"saveState","준비됨");D(this,"mode","title");D(this,"saveIndex",{version:4,activeWorldId:null,worlds:[]});D(this,"activeWorld",null);D(this,"settings",pg());D(this,"optionsReturnMode","title");D(this,"inventory",Yi());D(this,"craftingGrid",Array.from({length:9},()=>null));D(this,"craftingGridSize",2);D(this,"survival");D(this,"unlockedRecipes",new Set);D(this,"lootedChests",new Set);D(this,"questState",Zi());D(this,"dimension","overworld");D(this,"dimensionModified",{});D(this,"dimensionEntities",{});D(this,"dimensionPlayers",{});D(this,"allowCheats",!1);D(this,"gameMode","survival");D(this,"portalTimer",0);D(this,"eyeMarkers",[]);D(this,"endPortalHintCooldown",0);D(this,"mining",null);D(this,"selectedItemTimer",0);D(this,"attackCooldown",0);D(this,"footstepTimer",0);D(this,"miningSoundTimer",0);D(this,"settingsFeedbackTimer",null);D(this,"preventGameContextMenu",e=>{this.isEditableTarget(e.target)||(e.preventDefault(),e.stopPropagation())});D(this,"frame",()=>{var t,n;const e=Math.min(this.clock.getDelta(),.05);this.elapsed+=e,this.fps=this.fps*.92+1/Math.max(e,.001)*.08,this.selectedItemTimer=Math.max(0,this.selectedItemTimer-e),this.attackCooldown=Math.max(0,this.attackCooldown-e),this.endPortalHintCooldown=Math.max(0,this.endPortalHintCooldown-e),this.miningSoundTimer=Math.max(0,this.miningSoundTimer-e),this.handleKeyboard(),this.mode==="playing"&&this.survival.state.alive?this.updatePlaying(e):(this.selectedHit=this.raycastBlock(),this.updateHighlight(),this.input.consumeActions()),this.updateEnvironment(e),this.updateEyeMarkers(e),this.particles.update(e,(t=this.player)==null?void 0:t.position),this.updateAudioState(),this.handView.update(e,Sn(this.inventory),this.mode==="playing"&&this.survival.state.alive,((n=this.mining)==null?void 0:n.progress)??0),this.updateSave(e),this.updateHud(),this.renderer.render(this.scene,this.camera),this.animationFrame=window.requestAnimationFrame(this.frame)});D(this,"resize",()=>{const e=this.shell.clientWidth||window.innerWidth,t=this.shell.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.65)),this.renderer.setSize(e,t,!1)});D(this,"handleVisibilityChange",()=>{document.visibilityState==="hidden"&&this.saveNow(!0)});this.root=e}async boot(){this.shell=document.createElement("div"),this.shell.className="game-shell",this.shell.addEventListener("contextmenu",this.preventGameContextMenu),this.root.replaceChildren(this.shell),this.renderer=new Ap({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.domElement.className="game-canvas",this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.shell.append(this.renderer.domElement),this.input=new Up(this.renderer.domElement),this.input.onPointerLockChange=({locked:n})=>{!n&&this.mode==="playing"&&this.setMode("paused")},this.input.onSelectedSlotChange=n=>{this.inventory.selectedHotbarSlot=n,this.selectedItemTimer=1.4,this.queueSave()},this.hud=new gg(this.shell,{onSingleplayer:()=>this.showWorldSelect(),onCreateWorldMenu:()=>this.setMode("createWorld"),onOptions:n=>{this.optionsReturnMode=n,this.setMode("options")},onOptionsBack:n=>this.setMode(n),onUiAction:n=>{this.audio.unlock(),this.audio.playSfx(n==="hover"?"ui_select":"ui_click",{volume:n==="hover"?.22:.42,throttleMs:n==="hover"?70:0})},onSettingsChange:n=>this.updateSettings(n),onCreateWorld:(n,s,r)=>{this.createWorld(n,s,r)},onSelectWorld:n=>{this.loadWorldById(n)},onDeleteWorld:n=>{this.deleteWorld(n)},onBackToTitle:()=>this.setMode("title"),onResume:()=>this.resumeGame(),onQuitToTitle:()=>{this.quitToTitle()},onRespawn:()=>this.respawn(),onInventorySlot:(n,s,r)=>this.handleInventoryClick(n,s,r),onEquipmentSlot:(n,s)=>this.handleEquipmentClick(n,s),onOffhandSlot:n=>this.handleOffhandClick(n),onCraftSlot:(n,s,r)=>this.handleCraftingSlotClick(n,s,r),onCraftResult:n=>this.handleCraftingResult(n),onSlotDrop:(n,s)=>this.handleSlotDrop(n,s),onHotbarKeySwap:(n,s)=>this.handleHotbarSwap(n,s),onCraftRecipe:(n,s,r)=>this.handleRecipeFill(n,s,r),onSmeltRecipe:(n,s)=>this.handleSmelt(n,s),onToggleGameMode:()=>this.toggleGameMode(),onGiveCreativeItem:n=>this.giveCreativeItem(n),onTouchMove:(n,s)=>this.input.setVirtualMove(n,s),onTouchKey:(n,s)=>this.input.setVirtualKey(n,s),onTouchAction:(n,s)=>this.input.setVirtualAction(n,s),onSelectHotbarSlot:n=>this.input.setSelectedSlot(n),onMobileInventory:()=>this.openInventoryFromMobile(),onMobilePause:()=>this.pauseFromMobile(),onRegenerateWorld:n=>{this.regenerateWorldCopy(n)},onResetAll:()=>{this.resetAll()}});const e=this.renderer.capabilities.getMaxAnisotropy();this.materials=Zm(e),this.setupEnvironment(),this.applySettings(),this.scene.add(this.mobs.group),this.scene.add(this.endBoss.group),this.scene.add(this.particles.group),this.setupHighlight(),this.scene.add(this.camera),this.handView=new pm(this.camera),this.saveIndex=await this.loadIndexWithMigration(),this.hud.setWorlds(this.worldSummaries());const t=this.saveIndex.worlds.find(n=>n.id===this.saveIndex.activeWorldId);t?this.loadWorld(t,!1):this.loadPreviewWorld(),this.resize(),window.addEventListener("resize",this.resize),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.setMode("title"),this.animationFrame=window.requestAnimationFrame(this.frame)}async loadIndexWithMigration(){const e=await this.saveSystem.loadIndex();if(e.worlds.length>0)return e;const t=await this.saveSystem.loadLegacy();if(!t)return e;const n=this.convertLegacy(t),s={version:4,activeWorldId:n.id,worlds:[n]};return await this.saveSystem.saveIndex(s),s}convertLegacy(e){const t=Date.now(),n=Yi(),s=new R().fromArray(e.player.position);return{version:4,worldgenVersion:2,id:"legacy-world",name:"이전 월드",seed:e.seed,createdAt:t,updatedAt:t,modified:e.modified,dimensionModified:{overworld:e.modified},player:e.player,dimensionPlayers:{overworld:e.player},inventory:n,survival:Hs(s),unlockedRecipes:[],lootedChests:[],entities:[],dimensionEntities:{overworld:[]},gameRules:{mobGriefing:!0},allowCheats:!1,gameMode:"survival",dimension:"overworld",quests:Zi(),milestones:[]}}loadPreviewWorld(){const e="codex-aurora";this.dimension="overworld",this.dimensionModified={overworld:[]},this.dimensionEntities={overworld:[]},this.dimensionPlayers={},this.allowCheats=!1,this.gameMode="survival",this.lootedChests.clear(),this.replaceWorld(e,[],In,"overworld");const t=this.world.findSpawn();this.player=new Ki(this.camera,t),this.player.yaw=this.world.findScenicYaw(t),this.player.pitch=-.08,this.inventory=Yi(),this.survival=new ja(Hs(t)),this.questState=Zi(),this.portalTimer=0,this.world.ensureChunksAround(this.player.position,this.settings.renderDistance)}loadWorld(e,t){this.activeWorld=e,this.dimension=e.dimension??"overworld",this.allowCheats=e.allowCheats??!1,this.gameMode=this.allowCheats?e.gameMode??"survival":"survival",this.dimensionModified=this.normalizeDimensionModified(e),this.dimensionEntities=this.normalizeDimensionEntities(e),this.dimensionPlayers=this.normalizeDimensionPlayers(e),this.replaceWorld(e.seed,this.dimensionModified[this.dimension]??[],e.worldgenVersion??2,this.dimension),this.player=new Ki(this.camera,this.world.findSpawn()),this.player.restore(this.dimensionPlayers[this.dimension]??e.player),this.inventory=Ra(e.inventory),this.input.selectedSlot=this.inventory.selectedHotbarSlot,this.survival=new ja({...e.survival}),this.unlockedRecipes=new Set(e.unlockedRecipes),this.lootedChests=new Set(e.lootedChests??[]),this.questState=Wa(e.quests),this.syncEndBoss(),this.portalTimer=0,this.mobs.restore(this.dimensionEntities[this.dimension]??e.entities??[]),this.world.ensureChunksAround(this.player.position,this.settings.renderDistance),this.saveState="준비됨",this.hud.setWorlds(this.worldSummaries()),t&&this.resumeGame()}replaceWorld(e,t,n=In,s=this.dimension){this.world&&this.scene.remove(this.world.group),this.mobs.clear(),this.world=new il(e,this.materials,n,s),this.world.setModifiedBlocks(t),this.scene.add(this.world.group),this.syncEndBoss()}normalizeDimensionModified(e){var t,n,s;return{overworld:((t=e.dimensionModified)==null?void 0:t.overworld)??e.modified??[],nether:((n=e.dimensionModified)==null?void 0:n.nether)??[],end:((s=e.dimensionModified)==null?void 0:s.end)??[]}}normalizeDimensionEntities(e){var t,n,s;return{overworld:((t=e.dimensionEntities)==null?void 0:t.overworld)??(e.dimension==="overworld"||!e.dimension?e.entities??[]:[]),nether:((n=e.dimensionEntities)==null?void 0:n.nether)??(e.dimension==="nether"?e.entities??[]:[]),end:((s=e.dimensionEntities)==null?void 0:s.end)??(e.dimension==="end"?e.entities??[]:[])}}normalizeDimensionPlayers(e){var t,n,s;return{overworld:((t=e.dimensionPlayers)==null?void 0:t.overworld)??(e.dimension==="overworld"||!e.dimension?e.player:void 0),nether:((n=e.dimensionPlayers)==null?void 0:n.nether)??(e.dimension==="nether"?e.player:void 0),end:((s=e.dimensionPlayers)==null?void 0:s.end)??(e.dimension==="end"?e.player:void 0)}}syncEndBoss(){this.world&&this.endBoss.setWorld(this.world,this.questState.completed.includes("road_defeat_dragon"))}updateSettings(e){this.settings=Mo({...this.settings,...e}),mg(this.settings),this.applySettings(),this.updateHud(),this.settingsFeedbackTimer!==null&&window.clearTimeout(this.settingsFeedbackTimer),this.settingsFeedbackTimer=window.setTimeout(()=>{this.settingsFeedbackTimer=null,this.audio.playSfx("ui_confirm",{volume:.36,throttleMs:600}),this.hud.showToast("설정 저장됨")},360)}applySettings(){if(!this.renderer)return;this.audio.setVolume(this.settings.soundVolume);const e=this.settings.graphicsQuality==="quality"?Math.min(window.devicePixelRatio||1,1.75):this.settings.graphicsQuality==="balanced"?Math.min(window.devicePixelRatio||1,1.35):1;this.renderer.setPixelRatio(e),this.renderer.shadowMap.enabled=this.settings.graphicsQuality!=="performance",this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.sunLight&&(this.sunLight.castShadow=this.settings.graphicsQuality!=="performance",this.sunLight.shadow.mapSize.width=this.settings.graphicsQuality==="quality"?2048:1024,this.sunLight.shadow.mapSize.height=this.settings.graphicsQuality==="quality"?2048:1024),this.resize()}async createWorld(e,t,n=!1){this.setMode("loading");const s=Date.now(),r=`world-${s.toString(36)}`;this.dimension="overworld",this.dimensionModified={overworld:[]},this.dimensionEntities={overworld:[]},this.dimensionPlayers={},this.allowCheats=n,this.gameMode="survival",this.replaceWorld(t,[],In,"overworld");const o=this.world.findSpawn(),a=new Ki(this.camera,o);a.yaw=this.world.findScenicYaw(o),a.pitch=-.08;const l=Hs(o),c={version:4,worldgenVersion:In,id:r,name:e,seed:t,createdAt:s,updatedAt:s,modified:[],dimensionModified:{overworld:[]},player:a.snapshot(0),dimensionPlayers:{overworld:a.snapshot(0)},inventory:Yi(),survival:l,unlockedRecipes:[],lootedChests:[],entities:[],dimensionEntities:{overworld:[]},gameRules:{mobGriefing:!0},allowCheats:n,gameMode:"survival",dimension:"overworld",quests:Zi(),milestones:[]};await this.saveSystem.upsertWorld(c),this.saveIndex=await this.saveSystem.loadIndex(),this.loadWorld(c,!0),this.queueSave()}async loadWorldById(e){const t=this.saveIndex.worlds.find(n=>n.id===e);if(!t){this.hud.showToast("월드를 찾을 수 없습니다");return}this.loadWorld(t,!0)}async deleteWorld(e){var t;this.saveIndex=await this.saveSystem.deleteWorld(e),this.hud.setWorlds(this.worldSummaries()),((t=this.activeWorld)==null?void 0:t.id)===e&&(this.activeWorld=null,this.loadPreviewWorld()),this.setMode("worldSelect")}async regenerateWorldCopy(e){const t=this.saveIndex.worlds.find(l=>l.id===e);if(!t){this.hud.showToast("월드를 찾을 수 없습니다");return}const n=Date.now(),s=new il(t.seed,this.materials,In),r=s.findSpawn(),o=new Ki(this.camera,r);o.yaw=s.findScenicYaw(r),o.pitch=-.08;const a={version:4,worldgenVersion:In,id:`world-${n.toString(36)}-caves`,name:`${t.name} 동굴 복사본`,seed:t.seed,createdAt:n,updatedAt:n,modified:[],dimensionModified:{overworld:[]},player:o.snapshot(0),dimensionPlayers:{overworld:o.snapshot(0)},inventory:Yi(),survival:Hs(r),unlockedRecipes:[],lootedChests:[],entities:[],dimensionEntities:{overworld:[]},gameRules:{mobGriefing:!0},allowCheats:t.allowCheats??!1,gameMode:"survival",dimension:"overworld",quests:Zi(),milestones:[]};this.saveIndex=await this.saveSystem.upsertWorld(a),this.hud.setWorlds(this.worldSummaries()),this.hud.showToast("동굴 월드 복사본을 만들었습니다"),this.setMode("worldSelect")}showWorldSelect(){this.hud.setWorlds(this.worldSummaries()),this.setMode("worldSelect")}resumeGame(){if(!this.activeWorld){const e=this.saveIndex.worlds[0];if(e){this.loadWorld(e,!0);return}this.createWorld("새 월드","codex-aurora");return}if(!this.survival.state.alive){this.setMode("gameOver");return}this.setMode("playing"),this.input.touchControlsPreferred||this.input.requestPointerLock()}async quitToTitle(){await this.saveNow(!0),document.pointerLockElement&&document.exitPointerLock(),this.setMode("title")}setMode(e){this.mode=e,this.hud.setMode(e)}toggleGameMode(){if(!this.allowCheats){this.hud.showToast("이 월드는 치트가 꺼져 있습니다");return}this.gameMode=this.gameMode==="creative"?"survival":"creative",this.gameMode==="creative"?(this.grantCreativeStarterKit(),this.survival.state.health=20,this.survival.state.hunger=20,this.survival.state.air=20,this.hud.showToast("크리에이티브 모드로 전환")):this.hud.showToast("서바이벌 모드로 전환"),this.updateHud(),this.queueSave()}giveCreativeItem(e){if(!this.allowCheats||this.gameMode!=="creative"){this.hud.showToast("크리에이티브 모드에서만 지급할 수 있습니다");return}const t=this.creativeStack(e);$t(this.inventory,t)?(this.inventory.slots[Vt+this.inventory.selectedHotbarSlot]=t,this.hud.showToast(`${lt[e].name}을(를) 선택 슬롯에 지급`)):this.hud.showToast(`${lt[e].name} 지급`),this.unlockRecipesFromInventory(),this.queueSave()}grantCreativeStarterKit(){const e=["grass_block","dirt","stone","planks","torch","crafting_table","chest","water_bucket","lava_bucket","diamond_pickaxe","diamond_sword","bow","arrow","obsidian","flint_and_steel","end_portal_frame","eye_of_ender","end_crystal"];for(const t of e)ui(this.inventory,t)>0||$t(this.inventory,this.creativeStack(t));this.unlockRecipesFromInventory()}creativeStack(e){const t=lt[e],n={item:e,count:t.maxStack};return t.durability!==void 0&&(n.durability=t.durability),n}isEditableTarget(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable}setupEnvironment(){this.scene.fog=new js(new Re("#bfd7df"),.011),this.sky=new bm(this.scene),this.hemisphereLight=new Bc("#cce8ff","#2b3b35",.62),this.scene.add(this.hemisphereLight),this.sunTarget=new Ct,this.scene.add(this.sunTarget),this.sunLight=new zc("#fff1bd",2.3),this.sunLight.castShadow=!0,this.sunLight.target=this.sunTarget,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=220,this.sunLight.shadow.camera.left=-92,this.sunLight.shadow.camera.right=92,this.sunLight.shadow.camera.top=92,this.sunLight.shadow.camera.bottom=-92,this.sunLight.shadow.normalBias=.025,this.scene.add(this.sunLight);for(let e=0;e<18;e+=1){const t=new ta("#ffb24a",1.25,12,1.7);t.visible=!1,this.torchLights.push(t),this.scene.add(t)}this.heldLight=new ta("#ffba62",0,9,1.6),this.heldLight.position.set(.38,-.28,-.62),this.camera.add(this.heldLight)}setupHighlight(){const e=new Ic(new Mt(1.012,1.012,1.012)),t=new mo({color:"#fff0ad",transparent:!0,opacity:.96,depthTest:!1});this.highlight=new ro(e,t),this.highlight.renderOrder=10,this.highlight.visible=!1,this.scene.add(this.highlight)}handleKeyboard(){this.input.consumePressed("Escape")&&(this.mode==="playing"?(this.setMode("paused"),document.pointerLockElement&&document.exitPointerLock()):this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace"?this.closeOpenContainer(!1):this.mode==="paused"?this.resumeGame():this.mode==="options"?this.setMode(this.optionsReturnMode):(this.mode==="worldSelect"||this.mode==="createWorld")&&this.setMode("title")),this.input.consumePressed("KeyE")&&(this.mode==="playing"?(this.openCraftingPanel("inventory"),document.pointerLockElement&&document.exitPointerLock()):(this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace")&&this.closeOpenContainer(!0))}closeOpenContainer(e){if(!this.returnCraftingGridToInventory()){this.hud.showToast("닫기 전에 인벤토리 공간을 비워주세요");return}this.setMode("playing"),e&&!this.input.touchControlsPreferred&&this.input.requestPointerLock()}openInventoryFromMobile(){this.mode==="playing"?this.openCraftingPanel("inventory"):(this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace")&&this.closeOpenContainer(!1)}pauseFromMobile(){this.mode==="playing"?this.setMode("paused"):this.mode==="paused"&&this.resumeGame()}openCraftingPanel(e){if(!this.returnCraftingGridToInventory()){this.hud.showToast("먼저 인벤토리 공간을 비워주세요");return}this.craftingGridSize=e==="inventory"?2:3,this.setMode(e)}updatePlaying(e){var d,u,f,g,v,m,p,T,w,x;const t=this.input.consumeLook();this.player.applyLook(t.movementX,t.movementY,this.input.touchControlsPreferred?this.settings.touchSensitivity:this.settings.mouseSensitivity);const n=this.input.moveAxis(),s=Math.hypot(n.strafe,n.forward)>.08,r=this.input.isDown("ControlLeft")||this.input.isDown("ControlRight")||this.input.isDown("KeyR"),o=this.input.isDown("ShiftLeft")||this.input.isDown("ShiftRight"),a=this.gameMode==="creative";this.player.update(e,this.input,this.world,this.survival.canSprint(),o,a),!a&&this.player.lastLandingSpeed>13&&this.damagePlayer(Math.ceil((this.player.lastLandingSpeed-12)*.8),!1),this.updateFootsteps(e,s,r&&this.survival.canSprint(),o),this.world.ensureChunksAround(this.player.position,this.settings.renderDistance),this.selectedHit=this.raycastBlock(),((d=this.selectedHit)==null?void 0:d.block)===_.Lava?this.recordQuestEvent({type:"discover",target:"lava"}):((u=this.selectedHit)==null?void 0:u.block)===_.RuinedPortalDebris||((f=this.selectedHit)==null?void 0:f.block)===_.Obsidian?this.recordQuestEvent({type:"discover",target:"ruined_portal"}):((g=this.selectedHit)==null?void 0:g.block)===_.NetherBrick?this.recordQuestEvent({type:"discover",target:"fortress"}):(((v=this.selectedHit)==null?void 0:v.block)===_.StoneBricks||((m=this.selectedHit)==null?void 0:m.block)===_.CrackedStoneBricks||((p=this.selectedHit)==null?void 0:p.block)===_.MossyStoneBricks||((T=this.selectedHit)==null?void 0:T.block)===_.Bookshelf||((w=this.selectedHit)==null?void 0:w.block)===_.EndPortalFrame||((x=this.selectedHit)==null?void 0:x.block)===_.EndPortalFrameEye)&&this.recordQuestEvent({type:"discover",target:"stronghold"}),this.updateHighlight();const l=this.input.consumeActions(),c=this.mobs.update(e,this.world,this.player.position,this.dayFactor,this.undergroundFactor,this.elapsed);c.damage>0&&this.damagePlayer(c.damage,l.secondaryHeld);for(const A of c.drops)this.addStackWithFeedback(A,this.player.position);for(const A of c.explosions)this.handleExplosion(A.x,A.y,A.z,A.radius,A.damage,"크리퍼");const h=this.endBoss.update(e,this.player.position,this.elapsed);h.damage>0&&this.damagePlayer(h.damage,l.secondaryHeld),this.handleMining(e,l),this.handleUse(l,o),this.updatePortalTravel(e),this.updateQuestProgress(),a?(this.survival.state.health=20,this.survival.state.hunger=20,this.survival.state.saturation=Math.max(this.survival.state.saturation,5),this.survival.state.air=20,this.survival.state.alive=!0):this.survival.update(e,this.player.isInWater(this.world),s,r&&this.survival.canSprint()),this.survival.state.alive||(document.pointerLockElement&&document.exitPointerLock(),this.setMode("gameOver"))}updateAudioState(){this.mode==="playing"&&this.dimension==="end"&&this.endBoss.stats?this.audio.playMusic("dragon"):this.audio.stopMusic()}updateFootsteps(e,t,n,s){this.footstepTimer=Math.max(0,this.footstepTimer-e);const r=Math.hypot(this.player.velocity.x,this.player.velocity.z);if(!t||!this.player.grounded||r<.45||this.player.isInWater(this.world)||this.footstepTimer>0)return;const o=this.world.getBlock(Math.floor(this.player.position.x),Math.floor(this.player.position.y-.12),Math.floor(this.player.position.z)),a=o===_.Stone||o===_.Gravel||o===_.Obsidian||o===_.Netherrack||o===_.NetherBrick;this.audio.playSfx("footstep",{volume:a?.3:.24,pitch:a?.88+Math.random()*.08:.98+Math.random()*.12,throttleMs:110}),this.footstepTimer=n?.28:s?.58:.4}damagePlayer(e,t,n){var r;if(this.gameMode==="creative")return 0;const s=this.survival.damage(e,{armorSlots:this.inventory.armorSlots,blocking:t&&((r=this.inventory.offhand)==null?void 0:r.item)==="shield"});return s>0&&(this.audio.playSfx(t?"metal":"player_hurt",{volume:t?.42:.54,throttleMs:120}),this.hud.showDamageIndicator(this.damageDirection(n))),s}damageDirection(e){if(!e)return"front";const t=e.clone().sub(this.player.position);if(t.y=0,t.lengthSq()<1e-4)return"front";t.normalize();const n=this.player.getViewDirection();if(n.y=0,n.lengthSq()<1e-4)return"front";n.normalize();const s=new R(n.z,0,-n.x),r=n.dot(t),o=s.dot(t);return Math.abs(o)>Math.abs(r)?o>0?"right":"left":r>0?"front":"back"}handleExplosion(e,t,n,s,r,o="폭발"){const a=new R(e,t,n);this.audio.playSfx("explosion",{volume:o==="엔드 수정"?.8:.68,throttleMs:80}),this.particles.spawnMagicBurst(a,o==="엔드 수정"?"#d8a9ff":"#e8b56f",o==="엔드 수정"?42:30);const l=this.player.position.distanceTo(new R(e,t,n));if(l<s+2.2){const d=ct(1-l/(s+2.2),0,1);this.damagePlayer(Math.ceil(r*d),!1,a);const u=this.player.position.clone().sub(a).normalize().multiplyScalar(6*d);this.player.velocity.add(u),this.player.velocity.y+=4*d}let c=0;const h=Math.ceil(s);for(let d=Math.floor(t)-h;d<=Math.floor(t)+h;d+=1)for(let u=Math.floor(n)-h;u<=Math.floor(n)+h;u+=1)for(let f=Math.floor(e)-h;f<=Math.floor(e)+h;f+=1){const g=Math.hypot(f+.5-e,d+.5-t,u+.5-n);if(g>s||d<=0||d>=Xe-1)continue;const v=this.world.getBlock(f,d,u);if(v===_.Air||v===_.Water||v===_.Lava||v===_.NetherPortal||v===_.EndPortal)continue;const m=Yt[v],p=m.hardness*.55+(m.requiredTool?.8:0),T=(1-g/s)*3.4,w=Ve(this.world.seedInt^50414,f,d,u)*.65;if(!(T+w<=p)&&this.world.setBlock(f,d,u,_.Air)){c+=1,c<=24&&this.particles.spawnBlockBreak(new R(f+.5,d+.5,u+.5),m.swatch,5);const x=m.drops;x&&Ve(this.world.seedInt^53773,f,d,u)<.32&&this.addStackWithFeedback({item:x,count:1},new R(f+.5,d+.5,u+.5),!1)}}this.hud.showToast(c>0?`${o} 폭발: 블록 ${c}개 파괴`:`${o}이 폭발했습니다`),o==="크리퍼"&&this.survival.state.alive&&this.recordQuestEvent({type:"discover",target:"creeper_survived"}),this.queueSave()}handleMining(e,t){var o,a;if(t.primary){if(this.attackCooldown>0)return;const l=Sn(this.inventory),c=l?lt[l.item]:null;if((c==null?void 0:c.toolKind)==="bow"){if(this.gameMode!=="creative"&&!er(this.inventory,"arrow",1)){this.hud.showToast("화살이 필요합니다");return}const f=this.mobs.hitByRay(this.player.getEyePosition(),this.player.getViewDirection(),30,6);if(this.attackCooldown=((o=c.combat)==null?void 0:o.cooldown)??.9,this.damageHeldTool(),this.gameMode!=="creative"&&this.survival.addExhaustion(.04),this.audio.playSfx("bow",{volume:.36,pitch:1.08}),f)if(this.audio.playSfx(f.killed?"mob_death":"mob_hurt",{volume:f.killed?.42:.34}),this.particles.spawnMagicBurst(this.combatHitPosition(9),f.hostile?"#d85252":"#f0d3b1",f.killed?14:8),f.killed){for(const g of f.drops)this.addStackWithFeedback(g,this.combatHitPosition(5));this.recordQuestEvent({type:"mob_killed",target:f.name}),this.unlockRecipesFromInventory(),this.hud.showToast(`화살로 ${f.name} 처치`)}else this.hud.showToast(`화살로 ${f.name} 명중`);else if(((a=this.selectedHit)==null?void 0:a.block)===_.EndCrystal)this.destroyEndCrystal(this.selectedHit,"화살로 엔드 수정 파괴");else{const g=this.endBoss.hitDragonByRay(this.player.getEyePosition(),this.player.getViewDirection(),34,6);g.hit&&this.handleDragonHit(g,"화살로 엔더 드래곤 명중")}this.queueSave();return}const h=this.attackDamage(),d=this.mobs.hitByRay(this.player.getEyePosition(),this.player.getViewDirection(),this.attackRange(),h);if(d){if(this.mining=null,this.attackCooldown=this.attackDelay(),this.damageHeldTool(),this.gameMode!=="creative"&&this.survival.addExhaustion(.08),this.audio.playSfx(d.killed?"mob_death":"mob_hurt",{volume:d.killed?.44:.36}),this.particles.spawnMagicBurst(this.combatHitPosition(this.attackRange()),d.hostile?"#d85252":"#f0d3b1",d.killed?16:9),d.killed){for(const f of d.drops)this.addStackWithFeedback(f,this.combatHitPosition(3.4));this.recordQuestEvent({type:"mob_killed",target:d.name}),this.unlockRecipesFromInventory(),this.hud.showToast(`${d.name} 처치`),this.queueSave()}else this.hud.showToast(`${d.name} 공격`);return}const u=this.endBoss.hitDragonByRay(this.player.getEyePosition(),this.player.getViewDirection(),this.attackRange()+1.2,h);if(u.hit){this.mining=null,this.attackCooldown=this.attackDelay(),this.damageHeldTool(),this.gameMode!=="creative"&&this.survival.addExhaustion(.08),this.handleDragonHit(u,"엔더 드래곤 공격");return}}if(this.gameMode==="creative"&&t.primary&&this.selectedHit){this.breakBlock(this.selectedHit),this.mining=null;return}if(!t.primaryHeld||!this.selectedHit){this.mining=null,this.miningSoundTimer=0;return}const n=this.selectedHit,s=`${n.x},${n.y},${n.z}`;(!this.mining||this.mining.key!==s)&&(this.mining={key:s,progress:0,block:n.block});const r=this.breakTime(n.block);this.mining.progress+=e/r,this.miningSoundTimer<=0&&(this.audio.playSfx("block_hit",{volume:.14,pitch:.82+Math.random()*.18,throttleMs:90}),this.miningSoundTimer=.18),this.mining.progress>=1&&(this.breakBlock(n),this.mining=null)}handleUse(e,t){var u,f;if(!e.secondary)return;const n=Sn(this.inventory),s=n?lt[n.item]:null,r=this.selectedHit?Yt[this.selectedHit.block].interactable:null;if(this.selectedHit&&r==="crafting_table"&&!t){document.pointerLockElement&&document.exitPointerLock(),this.audio.playSfx("ui_open",{volume:.34}),this.openCraftingPanel("craftingTable");return}if(this.selectedHit&&r==="furnace"&&!t){document.pointerLockElement&&document.exitPointerLock(),this.audio.playSfx("ui_open",{volume:.34}),this.openCraftingPanel("furnace");return}if(this.selectedHit&&r==="chest"&&!t){this.audio.playSfx("chest",{volume:.42}),this.openChest(this.selectedHit);return}if(this.selectedHit&&r==="bed"&&!t){this.sleepInBed(this.selectedHit);return}if(n&&(s!=null&&s.food)&&this.survival.state.hunger<20){this.survival.eat(s.food.hunger,s.food.saturation),this.consumeSelected(1),this.audio.playSfx("eat",{volume:.28,pitch:.95}),this.queueSave();return}if((n==null?void 0:n.item)==="eye_of_ender"){if(((u=this.selectedHit)==null?void 0:u.block)===_.EndPortalFrame&&this.handleEndPortalFrameUse())return;if(((f=this.selectedHit)==null?void 0:f.block)===_.EndPortalFrameEye){this.hud.showToast("이미 엔더의 눈이 꽂혀 있습니다");return}this.handleEyeOfEnderUse();return}if(!this.selectedHit||!n||this.handleBucketUse(n)||n.item==="flint_and_steel"&&this.handleIgniteUse())return;const o=Pp(n.item);if(o===null)return;const a=this.selectedHit.x+this.selectedHit.normal.x,l=this.selectedHit.y+this.selectedHit.normal.y,c=this.selectedHit.z+this.selectedHit.normal.z,h=this.world.getBlock(a,l,c);if((h===_.Air||h===_.Water||h===_.Fire)&&!this.player.intersectsBlock(a,l,c)&&this.world.setBlock(a,l,c,o)){this.consumeSelected(1),this.audio.playSfx("block_place",{volume:.32,pitch:.9+Math.random()*.12}),this.particles.spawnBlockPlace(new R(a+.5,l+.5,c+.5),Yt[o].swatch);const v=this.applyFluidAt(a,l,c);this.recordQuestEvent({type:"block_placed",target:Yt[o].id}),v>0&&this.recordQuestEvent({type:"block_placed",target:"obsidian",amount:v}),this.queueSave()}}handleEndPortalFrameUse(){if(!this.selectedHit)return!1;const e=Kp(this.world,this.selectedHit.x,this.selectedHit.y,this.selectedHit.z);return e.inserted?(this.consumeSelected(1),this.recordQuestEvent({type:"block_placed",target:"end_portal_frame_eye"}),this.recordQuestEvent({type:"discover",target:"stronghold"}),e.activated?(this.recordQuestEvent({type:"portal_ignited",target:"end_portal"}),this.audio.playSfx("portal",{volume:.72}),this.particles.spawnMagicBurst(new R(this.selectedHit.x+.5,this.selectedHit.y+.8,this.selectedHit.z+.5),"#80e2a6",32),this.hud.showToast("엔드 포털이 활성화되었습니다")):(this.audio.playSfx("ui_confirm",{volume:.32}),this.hud.showToast("프레임에 엔더의 눈을 꽂았습니다")),this.queueSave(),!0):!1}handleEyeOfEnderUse(){if(this.dimension!=="overworld")return this.hud.showToast("엔더의 눈은 지상에서 요새를 찾을 때 가장 잘 반응합니다"),!0;const e=this.world.strongholdLocation(),t=this.player.getEyePosition(),n=new R(e.x-this.player.position.x,0,e.z-this.player.position.z),s=n.length();s<.001?n.set(0,0,1):n.normalize();const r=Math.min(12,Math.max(4,s)),o=t.clone().add(n.clone().multiplyScalar(.7)),a=o.clone().add(n.clone().multiplyScalar(r));a.y+=s<24?.2:2.2;const l=Math.random()<.2;this.addEyeMarker(o,a,l),this.recordQuestEvent({type:"discover",target:"stronghold_signal"}),s<24&&this.recordQuestEvent({type:"discover",target:"stronghold"}),l&&(this.consumeSelected(1),this.queueSave());const c=this.directionLabel(n.x,n.z),h=s<24?"엔더의 눈이 발밑으로 떨어집니다. 요새가 아주 가깝습니다":`엔더의 눈이 ${c}쪽으로 날아갑니다 · 약 ${Math.round(s)}m`;return this.hud.showToast(l?`${h} · 깨졌습니다`:h),!0}addEyeMarker(e,t,n){const s=new ut,r=new Nt({color:"#80e2a6"}),o=new Nt({color:"#163d33"}),a=new Nt({color:n?"#ffe08a":"#dfffe8",transparent:!0,opacity:.68}),l=new nt(new Mt(.28,.2,.28),r),c=new nt(new Mt(.1,.08,.11),o),h=new nt(new Mt(.42,.04,.42),a);c.position.set(0,.03,-.1),h.position.y=-.13,s.add(l,c,h),s.position.copy(e),this.scene.add(s),this.eyeMarkers.push({group:s,start:e,end:t,age:0,duration:1.65,broken:n})}updateEyeMarkers(e){for(let t=this.eyeMarkers.length-1;t>=0;t-=1){const n=this.eyeMarkers[t];n.age+=e;const s=ct(n.age/n.duration,0,1),r=1-(1-s)*(1-s),o=n.start.clone().lerp(n.end,r);o.y+=Math.sin(s*Math.PI)*1.05,n.group.position.copy(o),n.group.rotation.y+=e*5.4,n.group.rotation.x=Math.sin(n.age*8)*.2,n.group.scale.setScalar(n.broken&&s>.75?1+(s-.75)*1.8:1),!(n.age<n.duration)&&(this.scene.remove(n.group),this.disposeGroup(n.group),this.eyeMarkers.splice(t,1))}}disposeGroup(e){e.traverse(t=>{const n=t;n.geometry&&n.geometry.dispose();const s=n.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s&&s.dispose()})}directionLabel(e,t){const n=t<-.35?"북":t>.35?"남":"",s=e>.35?"동":e<-.35?"서":"";return`${n}${s}`||"가까운"}handleBucketUse(e){if(!this.selectedHit)return!1;if(e.item==="bucket"){if(this.selectedHit.block!==_.Water&&this.selectedHit.block!==_.Lava)return!1;const l=this.selectedHit.block===_.Water?"water_bucket":"lava_bucket";return this.world.setBlock(this.selectedHit.x,this.selectedHit.y,this.selectedHit.z,_.Air),this.setSelectedStack({item:l,count:1}),this.audio.playSfx("ui_confirm",{volume:.28}),this.applyFluidAt(this.selectedHit.x,this.selectedHit.y,this.selectedHit.z),l==="lava_bucket"&&this.recordQuestEvent({type:"discover",target:"lava"}),this.unlockRecipesFromInventory(),this.queueSave(),!0}if(e.item!=="water_bucket"&&e.item!=="lava_bucket")return!1;const t=this.selectedHit.x+this.selectedHit.normal.x,n=this.selectedHit.y+this.selectedHit.normal.y,s=this.selectedHit.z+this.selectedHit.normal.z,r=this.world.getBlock(t,n,s);if(!(r===_.Air||r===_.Water||r===_.Lava||r===_.Fire)||this.player.intersectsBlock(t,n,s))return!0;const a=e.item==="water_bucket"?_.Water:_.Lava;if(this.world.setBlock(t,n,s,a)){this.gameMode!=="creative"&&this.setSelectedStack({item:"bucket",count:1}),this.audio.playSfx(a===_.Lava?"portal":"block_place",{volume:a===_.Lava?.32:.28}),this.particles.spawnBlockPlace(new R(t+.5,n+.5,s+.5),Yt[a].swatch);const l=this.applyFluidAt(t,n,s);this.recordQuestEvent({type:"block_placed",target:Yt[a].id}),l>0&&this.recordQuestEvent({type:"block_placed",target:"obsidian",amount:l}),a===_.Lava&&this.recordQuestEvent({type:"discover",target:"lava"}),this.unlockRecipesFromInventory(),this.queueSave()}return!0}handleIgniteUse(){if(!this.selectedHit)return!1;const e=this.selectedHit.x+this.selectedHit.normal.x,t=this.selectedHit.y+this.selectedHit.normal.y,n=this.selectedHit.z+this.selectedHit.normal.z;return Zp(this.world,e,t,n).success?(this.damageHeldTool(),this.recordQuestEvent({type:"portal_ignited",target:"nether_portal"}),this.audio.playSfx("portal",{volume:.72}),this.particles.spawnMagicBurst(new R(e+.5,t+1.4,n+.5),"#8d5cff",42),this.hud.showToast("지옥문이 열렸습니다"),this.queueSave(),!0):this.world.getBlock(e,t,n)===_.Air?(this.world.setBlock(e,t,n,_.Fire),this.damageHeldTool(),this.recordQuestEvent({type:"block_placed",target:"fire"}),this.audio.playSfx("portal",{volume:.22,pitch:1.45}),this.particles.spawnMagicBurst(new R(e+.5,t+.5,n+.5),"#ff9c2e",10),this.queueSave(),!0):!1}applyFluidAt(e,t,n){return Wp(this.world,[{x:e,y:t,z:n}])}breakTime(e){const t=Yt[e],n=Sn(this.inventory),s=n?lt[n.item]:null,r=(s==null?void 0:s.toolKind)&&s.toolKind===t.preferredTool,o=!t.requiredTool||(s==null?void 0:s.toolKind)===t.requiredTool&&this.tierMeets(s.toolTier??"hand",t.requiredTier??"wood"),a=r?(s==null?void 0:s.miningSpeed)??1:1,l=o?1:4.2;return Math.max(.18,t.hardness*.85*l/a)}attackDamage(){const e=Sn(this.inventory),t=e?lt[e.item]:null;return t!=null&&t.combat?t.combat.damage:1}attackDelay(){var n;const e=Sn(this.inventory),t=e?lt[e.item]:null;return((n=t==null?void 0:t.combat)==null?void 0:n.cooldown)??.5}attackRange(){var n;const e=Sn(this.inventory),t=e?lt[e.item]:null;return((n=t==null?void 0:t.combat)==null?void 0:n.range)??4.4}combatHitPosition(e){return this.player.getEyePosition().add(this.player.getViewDirection().multiplyScalar(e))}handleDragonHit(e,t){if(e.hit){if(e.killed){this.handleDragonDefeated();return}this.audio.playSfx("dragon_hit",{volume:.46,throttleMs:120}),this.particles.spawnMagicBurst(this.combatHitPosition(this.attackRange()+2),"#d8a9ff",18),this.hud.showToast(t),this.queueSave()}}handleDragonDefeated(){this.world.dimension==="end"&&($p(this.world),$t(this.inventory,{item:"dragon_egg",count:1}),this.recordQuestEvent({type:"mob_killed",target:"엔더 드래곤"}),this.syncEndBoss(),this.audio.playSfx("dragon_death",{volume:.9}),this.audio.stopMusic(),this.particles.spawnMagicBurst(this.player.position.clone().add(new R(0,7,0)),"#f0d3ff",72),this.hud.showQuestToast("엔더 드래곤 처치","귀환 포털이 열리고 드래곤 알을 얻었습니다","엔딩 루프 완료"),this.unlockRecipesFromInventory(),this.queueSave())}destroyEndCrystal(e,t="엔드 수정 파괴"){const n=this.endBoss.destroyCrystalAt(e.x,e.y,e.z);if(n.destroyed){if(this.handleExplosion(e.x+.5,e.y+.5,e.z+.5,4.2,18,"엔드 수정"),this.recordQuestEvent({type:"block_mined",target:"end_crystal"}),n.killedDragon){this.handleDragonDefeated();return}this.hud.showToast(t),this.queueSave()}}breakBlock(e){if(e.block===_.EndCrystal){this.destroyEndCrystal(e);return}const t=Yt[e.block],n=Sn(this.inventory),s=n?lt[n.item]:null,r=!t.requiredTool||(s==null?void 0:s.toolKind)===t.requiredTool&&this.tierMeets(s.toolTier??"hand",t.requiredTier??"wood");if(!this.world.setBlock(e.x,e.y,e.z,_.Air))return;const a=new R(e.x+.5,e.y+.5,e.z+.5);this.audio.playSfx("block_break",{volume:.36,pitch:.88+Math.random()*.18}),this.particles.spawnBlockBreak(a,t.swatch);let l=r?t.drops:null,c=1;if(e.block===_.Leaves&&Math.random()<.12&&(l="apple"),e.block===_.Gravel&&Math.random()<.18&&(l="flint"),e.block===_.RedstoneOre&&(c=4+Math.floor(Math.random()*2)),e.block===_.LapisOre&&(c=4+Math.floor(Math.random()*5)),e.block===_.NetherGoldOre&&(c=2+Math.floor(Math.random()*5)),this.gameMode==="creative"&&(l=null),l){const d=this.addStackWithFeedback({item:l,count:c},a);this.hud.showToast(d?"인벤토리가 가득 찼습니다":`${lt[l].name} 획득`)}const h=`${e.x},${e.y},${e.z}`;if(this.gameMode!=="creative"&&e.block===_.Chest&&!this.lootedChests.has(h)){for(const d of this.chestLoot(e))$t(this.inventory,d);this.lootedChests.add(h),this.recordQuestEvent({type:"discover",target:"chest"}),this.hud.showToast("상자 보급품을 찾았습니다")}this.damageHeldTool(),this.gameMode!=="creative"&&this.survival.addExhaustion(.005),this.recordQuestEvent({type:"block_mined",target:t.id}),this.unlockRecipesFromInventory(),this.queueSave()}damageHeldTool(){if(this.gameMode==="creative")return;const e=Vt+this.inventory.selectedHotbarSlot,t=this.inventory.slots[e];!t||t.durability===void 0||(t.durability-=1,t.durability<=0&&(this.inventory.slots[e]=null,this.hud.showToast("도구가 부서졌습니다")))}openChest(e){const t=`${e.x},${e.y},${e.z}`;if(this.lootedChests.has(t)){this.hud.showToast("상자가 비어 있습니다");return}let n=0;for(const s of this.chestLoot(e)){const r=$t(this.inventory,s);n+=s.count-((r==null?void 0:r.count)??0)}this.lootedChests.add(t),this.recordQuestEvent({type:"discover",target:"chest"}),this.unlockRecipesFromInventory(),this.queueSave(),this.hud.showToast(n>0?"상자에서 보급품을 챙겼습니다":"가방이 가득 차서 챙길 수 없습니다")}chestLoot(e){const t=r=>Ve(this.world.seedInt^r,e.x,e.y,e.z),n=[{item:"coal",count:2+Math.floor(t(49313)*4)},{item:"torch",count:2+Math.floor(t(28868)*5)}];this.dimension==="nether"&&(n.push({item:"gold_nugget",count:3+Math.floor(t(24605)*8)}),t(727598)>.46&&n.push({item:"blaze_powder",count:1+Math.floor(t(727599)*2)}),t(57555)>.78&&n.push({item:"ender_pearl",count:1}));const s=this.world.strongholdLocation();return this.dimension==="overworld"&&e.y<36&&Math.hypot(e.x-s.x,e.z-s.z)<70&&(n.push({item:"paper",count:2+Math.floor(t(23166)*4)}),n.push({item:"book",count:1+Math.floor(t(45063)*2)}),t(3742)>.55&&n.push({item:"ender_pearl",count:1}),t(3743)>.78&&n.push({item:"eye_of_ender",count:1})),t(42864)>.35&&n.push({item:"arrow",count:2+Math.floor(t(42865)*6)}),t(61722)>.42&&n.push({item:"bread",count:1+Math.floor(t(61723)*2)}),t(7946)>.45&&n.push({item:"raw_iron",count:1+Math.floor(t(270)*3)}),t(694558)>.72&&n.push({item:"apple",count:1+Math.floor(t(43409)*2)}),t(3354)>.9&&n.push({item:"diamond",count:1}),t(987575)>.72&&n.push({item:"flint",count:1+Math.floor(t(987576)*2)}),t(48327)>.88&&n.push({item:"bucket",count:1}),t(2897)>.9&&n.push({item:"obsidian",count:1+Math.floor(t(2898)*2)}),t(49183)>.86&&n.push({item:"chainmail_boots",count:1,durability:70}),n}sleepInBed(e){if(this.survival.state.spawn=[e.x+.5,e.y+1,e.z+.5],this.dayFactor<.5){const n=this.elapsed/210%1,s=.18,r=n<s?s-n:1-n+s;this.elapsed+=r*210,this.survival.heal(2),this.hud.showToast("침대에서 쉬고 아침이 되었습니다")}else this.hud.showToast("스폰 위치를 침대로 설정했습니다");this.queueSave()}consumeSelected(e){if(this.gameMode==="creative")return;const t=Vt+this.inventory.selectedHotbarSlot,n=this.inventory.slots[t];n&&(n.count-=e,n.count<=0&&(this.inventory.slots[t]=null))}setSelectedStack(e){this.inventory.slots[Vt+this.inventory.selectedHotbarSlot]=e}handleInventoryClick(e,t,n){n?Dp(this.inventory,e):Lp(this.inventory,e,t),this.unlockRecipesFromInventory(),this.queueSave()}handleEquipmentClick(e,t){Ip(this.inventory,e,t),this.queueSave()}handleOffhandClick(e){Np(this.inventory,e),this.queueSave()}handleCraftingSlotClick(e,t,n){if(n){const s=this.craftingGrid[e];if(s){const r=$t(this.inventory,s);this.craftingGrid[e]=r}}else this.clickExternalSlot(this.craftingGrid,e,t);this.unlockRecipesFromInventory(),this.queueSave()}handleHotbarSwap(e,t){Fp(this.inventory,e,t),this.queueSave()}handleSlotDrop(e,t){if(e===t)return;const n=this.getSlotByRef(e),s=this.getSlotByRef(t);if(n){if(!this.slotAccepts(t,n)||s&&!this.slotAccepts(e,s)){this.hud.showToast("이 슬롯에는 장착할 수 없습니다");return}if(!s)this.setSlotByRef(t,n),this.setSlotByRef(e,null);else if(Nn(n,s)){const r=sn(s.item),o=Math.min(r-s.count,n.count);s.count+=o,n.count-=o,n.count<=0&&this.setSlotByRef(e,null)}else this.setSlotByRef(e,s),this.setSlotByRef(t,n);this.unlockRecipesFromInventory(),this.queueSave()}}handleCraftingResult(e){var o;const t=this.activeCraftingGrid(),n=qr(t,this.craftingGridSize);if(!n)return;const s={...n.result};let r=0;if(e)for(;((o=qr(this.activeCraftingGrid(),this.craftingGridSize))==null?void 0:o.id)===n.id&&!(!this.inventoryCanAccept(s)||(Va(this.craftingGrid,n,this.craftingGridSize),$t(this.inventory,{...s}),r+=s.count,r>=64)););else{const a=this.inventory.cursor;if(a&&(!Nn(a,s)||a.count+s.count>sn(a.item)))return;Va(this.craftingGrid,n,this.craftingGridSize),a?a.count+=s.count:this.inventory.cursor=s,r=s.count}this.unlockedRecipes.add(n.id),r>0&&this.recordQuestEvent({type:"crafted",target:n.result.item,amount:r}),this.unlockRecipesFromInventory(),this.queueSave()}handleRecipeFill(e,t,n){const s=$s.find(c=>c.id===e);if(!s)return;if(!vo(s,n)){this.hud.showToast("이 제작칸에는 배치할 수 없습니다"),this.audio.playSfx("ui_error",{volume:.32});return}if(!(this.craftingGridSize===n&&nm(s,this.activeCraftingGrid(),n))){if(!this.returnCraftingGridToInventory()){this.hud.showToast("제작칸을 비울 인벤토리 공간이 부족합니다"),this.audio.playSfx("ui_error",{volume:.32});return}this.craftingGridSize=n}let a=t?this.maxCraftable(s):1;if(a<=0||!Ha(s,this.inventory,n)){this.hud.showToast("재료가 부족합니다"),this.audio.playSfx("ui_error",{volume:.32});return}for(;a>0&&!Pl(this.craftingGrid,s,n,a);)a-=1;if(a<=0){this.hud.showToast("제작칸 수량 한도입니다"),this.audio.playSfx("ui_error",{volume:.32});return}const l=lo(s);for(const[c,h]of Object.entries(l))er(this.inventory,c,h*a);if(!im(this.craftingGrid,s,n,a)){this.hud.showToast("제작칸에 배치하지 못했습니다"),this.audio.playSfx("ui_error",{volume:.32});return}this.audio.playSfx("ui_confirm",{volume:.28,throttleMs:80}),this.queueSave()}handleSmelt(e,t){const n=Ka.find(r=>r.id===e);if(!n||!co(n,this.inventory))return;const s=mm(n,this.inventory,t);s>0&&(this.hud.showToast(`${n.name} 완료`),this.recordQuestEvent({type:"smelted",target:n.result.item,amount:s}),this.unlockRecipesFromInventory(),this.queueSave())}activeCraftingGrid(){return this.craftingGrid.slice(0,this.craftingGridSize*this.craftingGridSize)}returnCraftingGridToInventory(){for(const e of this.craftingGrid)if(e&&!this.inventoryCanAccept(e))return!1;for(let e=0;e<this.craftingGrid.length;e+=1){const t=this.craftingGrid[e];t&&($t(this.inventory,t),this.craftingGrid[e]=null)}return!0}inventoryCanAccept(e){let t=e.count;for(const n of this.inventory.slots)if(!(!n||!Nn(n,e))&&(t-=Math.max(0,sn(n.item)-n.count),t<=0))return!0;for(const n of this.inventory.slots)if(!n&&(t-=sn(e.item),t<=0))return!0;return!1}addStackWithFeedback(e,t,n=!0){const s=$t(this.inventory,{...e});if(e.count-((s==null?void 0:s.count)??0)>0){const o=lt[e.item].color;this.particles.spawnPickup(t??this.player.position,o),n&&this.audio.playSfx("item_pickup",{volume:.32,throttleMs:55})}return s}clickExternalSlot(e,t,n){const s=e[t]??null,r=this.inventory.cursor;if(n===0){if(!r){this.inventory.cursor=s,e[t]=null;return}if(!s){e[t]=r,this.inventory.cursor=null;return}if(Nn(s,r)){const o=Math.min(sn(s.item)-s.count,r.count);s.count+=o,r.count-=o,r.count<=0&&(this.inventory.cursor=null);return}e[t]=r,this.inventory.cursor=s;return}if(!r&&s){const o=Math.ceil(s.count/2);this.inventory.cursor={...s,count:o},s.count-=o,s.count<=0&&(e[t]=null);return}if(r&&!s){e[t]={...r,count:1},r.count-=1,r.count<=0&&(this.inventory.cursor=null);return}r&&s&&Nn(r,s)&&s.count<sn(s.item)&&(s.count+=1,r.count-=1,r.count<=0&&(this.inventory.cursor=null))}getSlotByRef(e){return e.startsWith("inventory:")?this.inventory.slots[Number(e.replace("inventory:",""))]??null:e.startsWith("craft:")?this.craftingGrid[Number(e.replace("craft:",""))]??null:e.startsWith("equip:")?this.inventory.armorSlots[e.replace("equip:","")]??null:e==="offhand"?this.inventory.offhand:null}setSlotByRef(e,t){e.startsWith("inventory:")&&(this.inventory.slots[Number(e.replace("inventory:",""))]=t),e.startsWith("craft:")&&(this.craftingGrid[Number(e.replace("craft:",""))]=t),e.startsWith("equip:")&&(this.inventory.armorSlots[e.replace("equip:","")]=t),e==="offhand"&&(this.inventory.offhand=t)}slotAccepts(e,t){return e.startsWith("equip:")?tr(e.replace("equip:",""),t):e==="offhand"?tr("offhand",t):!0}maxCraftable(e){const t=lo(e);let n=1/0;for(const[s,r]of Object.entries(t)){const o=this.inventory.slots.reduce((a,l)=>a+((l==null?void 0:l.item)===s?l.count:0),0);n=Math.min(n,Math.floor(o/r))}return Math.max(0,Math.min(64,Number.isFinite(n)?n:0))}tierMeets(e,t){const n=["hand","wood","stone","copper","iron","gold","diamond"];return n.indexOf(e)>=n.indexOf(t)}unlockRecipesFromInventory(){for(const e of $s)za(e,this.unlockedRecipes,this.inventory)&&this.unlockedRecipes.add(e.id)}updateHighlight(){if(!this.selectedHit){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(this.selectedHit.x+.5,this.selectedHit.y+.5,this.selectedHit.z+.5)}raycastBlock(){const e=this.player.getEyePosition(),t=this.player.getViewDirection(),n=4.5;let s=Math.floor(e.x),r=Math.floor(e.y),o=Math.floor(e.z);const a=t.x>=0?1:-1,l=t.y>=0?1:-1,c=t.z>=0?1:-1,h=t.x===0?1/0:Math.abs(1/t.x),d=t.y===0?1/0:Math.abs(1/t.y),u=t.z===0?1/0:Math.abs(1/t.z);let f=io(e.x,t.x),g=io(e.y,t.y),v=io(e.z,t.z),m=0;const p=new R;for(;m<=n;){const T=this.world.getBlock(s,r,o);if(Rp(T))return{x:s,y:r,z:o,normal:p.clone(),block:T};f<g&&f<v?(s+=a,m=f,f+=h,p.set(-a,0,0)):g<v?(r+=l,m=g,g+=d,p.set(0,-l,0)):(o+=c,m=v,v+=u,p.set(0,0,-c))}return null}updateEnvironment(e){var d,u;const t=this.sky.update(this.elapsed,this.camera.position),n=t.dayFactor,s=this.world.terrainHeight(Math.floor(this.player.position.x),Math.floor(this.player.position.z)),r=ct((s-this.player.position.y-3)/16,0,1),o=this.updateTorchLights(e),a=((d=Sn(this.inventory))==null?void 0:d.item)==="torch"||((u=this.inventory.offhand)==null?void 0:u.item)==="torch",l=t.sunDirection.clone().multiplyScalar(88);this.dayFactor=n,this.undergroundFactor=r,this.sunTarget.position.copy(this.player.position),this.sunLight.position.copy(this.player.position).add(l);const c=this.dimension==="nether"?1:0;this.sunLight.intensity=(.08+n*2.25)*(1-r*.82)*(1-c*.62),this.hemisphereLight.intensity=((.12+n*.56)*(1-r*.72)+o*.18)*(1-c*.38)+c*.16,this.heldLight.intensity=a&&this.mode==="playing"?.85:0;const h=this.scene.fog;if(h instanceof js){const f=new Re("#040608").lerp(new Re("#131e29"),o*.5),v=new Re("#131e29").lerp(new Re("#c8dde2"),n).lerp(f,r*.78),m=new Re("#3b1010").lerp(new Re("#6a281c"),o*.35);h.color.copy(v.lerp(m,c)),h.density=.012+r*.018-n*.004+c*.016}}updateTorchLights(e){if(this.torchScanTimer-=e,this.torchScanTimer>0)return this.nearbyTorchGlow;this.torchScanTimer=.22;const t=this.player.position,n=[],s=12,r=Math.floor(t.x)-s,o=Math.floor(t.x)+s,a=Math.max(0,Math.floor(t.y)-8),l=Math.min(Xe-1,Math.floor(t.y)+8),c=Math.floor(t.z)-s,h=Math.floor(t.z)+s;for(let d=a;d<=l;d+=1)for(let u=c;u<=h;u+=1)for(let f=r;f<=o;f+=1){if(this.world.getBlock(f,d,u)!==_.Torch)continue;const g=Math.hypot(t.x-(f+.5),t.y-(d+.5),t.z-(u+.5));g<=s&&n.push({distance:g,x:f,y:d,z:u})}n.sort((d,u)=>d.distance-u.distance),this.nearbyTorchGlow=n[0]?ct(1-n[0].distance/s,0,1):0;for(let d=0;d<this.torchLights.length;d+=1){const u=this.torchLights[d],f=n[d];if(!f){u.visible=!1;continue}u.visible=!0,u.position.set(f.x+.5,f.y+.55,f.z+.5),u.intensity=1.35-Math.min(.55,f.distance*.018)}return this.nearbyTorchGlow}updateSave(e){!this.saveRequested||this.saving||!this.activeWorld||(this.saveDue-=e,this.saveDue<=0&&this.saveNow())}recordQuestEvent(e){this.applyCompletedQuests(om(this.questState,e,this.inventory,this.dimension))}updateQuestProgress(){this.applyCompletedQuests(Nl(this.questState,this.inventory,this.dimension))}applyCompletedQuests(e){if(e.length===0)return;const t=[];for(const a of e)for(const l of a.rewards.items??[]){const c=$t(this.inventory,{...l}),h=l.count-((c==null?void 0:c.count)??0);h>0&&t.push(`${lt[l.item].name} x${h}`)}const n=e[0],s=e.length>1?` 외 ${e.length-1}개`:"",r=n.rewards.xp??(n.category==="main"?25:10),o=t.length>0?`보상: ${t.join(", ")}`:`진행도 +${r}`;this.audio.playSfx("ui_confirm",{volume:.52}),this.hud.showQuestToast(`퀘스트 완료: ${n.titleKo}${s}`,n.rewards.toastKo,o),this.unlockRecipesFromInventory(),this.queueSave()}updatePortalTravel(e){if(Ua(this.world,this.player.position.x,this.player.position.y,this.player.position.z)){this.portalTimer+=e,this.portalTimer>=1.2&&this.travelToDimension(this.dimension==="end"?"overworld":"end");return}if(!Ba(this.world,this.player.position.x,this.player.position.y,this.player.position.z)){this.portalTimer=0;return}if(this.portalTimer+=e,this.portalTimer<2)return;const t=this.dimension==="nether"?"overworld":"nether";this.travelToDimension(t)}travelToDimension(e){if(!this.activeWorld)return;this.storeCurrentDimensionState(),this.dimension=e,this.portalTimer=0,this.audio.playSfx("portal",{volume:.82}),this.replaceWorld(this.activeWorld.seed,this.dimensionModified[e]??[],this.activeWorld.worldgenVersion??this.world.worldgenVersion,e);const t=this.dimensionPlayers[e];if(this.player=new Ki(this.camera,this.world.findSpawn()),t)this.player.restore(t),this.nudgeOutOfPortal();else{const n=e==="nether"?this.ensureArrivalPortal(this.world.findSpawn()):this.world.findSpawn();this.player.position.copy(n),this.player.yaw=this.world.findScenicYaw(n),this.player.pitch=e==="nether"?-.02:e==="end"?-.16:-.08}this.world.ensureChunksAround(this.player.position,this.settings.renderDistance),this.mobs.restore(this.dimensionEntities[e]??[]),this.syncEndBoss(),e==="nether"?(this.recordQuestEvent({type:"dimension",target:"nether"}),this.hud.showToast("지옥으로 이동했습니다. 귀환 포털 위치를 기억하세요")):e==="end"?(this.recordQuestEvent({type:"dimension",target:"end"}),this.hud.showToast("엔드에 진입했습니다. 수정이 드래곤을 회복시킵니다")):this.hud.showToast("지상으로 돌아왔습니다"),this.queueSave()}storeCurrentDimensionState(){this.dimensionModified[this.dimension]=this.world.exportModifiedBlocks(),this.dimensionEntities[this.dimension]=this.mobs.snapshot(),this.dimensionPlayers[this.dimension]=this.player.snapshot(this.inventory.selectedHotbarSlot)}ensureArrivalPortal(e){const t=Math.floor(e.x)-1,n=ct(Math.floor(e.y),8,Xe-8),s=Math.floor(e.z)-1;for(let r=-3;r<=3;r+=1)for(let o=-4;o<=5;o+=1){this.world.setBlock(t+o,n-1,s+r,_.Obsidian);for(let a=0;a<=4;a+=1)this.world.setBlock(t+o,n+a,s+r,_.Air)}for(let r=0;r<=4;r+=1)this.world.setBlock(t-1,n+r,s,_.Obsidian),this.world.setBlock(t+2,n+r,s,_.Obsidian);for(let r=-1;r<=2;r+=1)this.world.setBlock(t+r,n-1,s,_.Obsidian),this.world.setBlock(t+r,n+3,s,_.Obsidian);for(let r=0;r<=2;r+=1)this.world.setBlock(t,n+r,s,_.NetherPortal),this.world.setBlock(t+1,n+r,s,_.NetherPortal);return this.dimensionModified[this.dimension]=this.world.exportModifiedBlocks(),new R(t+.5,n,s-1.75)}nudgeOutOfPortal(){if(!this.isInsideAnyPortal(this.player.position))return;const e=[new R(0,0,-2.35),new R(0,0,2.35),new R(2.35,0,0),new R(-2.35,0,0)];for(const t of e){const n=this.player.position.clone().add(t);if(!this.isInsideAnyPortal(n)){this.player.position.copy(n);return}}}isInsideAnyPortal(e){return Ba(this.world,e.x,e.y,e.z)||Ua(this.world,e.x,e.y,e.z)}queueSave(){this.activeWorld&&(this.saveRequested=!0,this.saveDue=.8,this.saveState="저장 대기")}async saveNow(e=!1){if(!(!this.activeWorld||this.saving||!e&&!this.saveRequested)){this.saving=!0,this.saveRequested=!1,this.saveState="저장 중";try{const t=Date.now(),n=Ra(this.inventory);for(const l of this.craftingGrid)l&&$t(n,{...l});this.storeCurrentDimensionState();const s={...this.dimensionModified},r={...this.dimensionPlayers},o={...this.dimensionEntities},a={...this.activeWorld,version:4,worldgenVersion:this.activeWorld.worldgenVersion??this.world.worldgenVersion,updatedAt:t,modified:s.overworld??[],dimensionModified:s,player:this.player.snapshot(this.inventory.selectedHotbarSlot),dimensionPlayers:r,inventory:n,survival:{...this.survival.state},unlockedRecipes:[...this.unlockedRecipes],lootedChests:[...this.lootedChests],entities:o[this.dimension]??[],dimensionEntities:o,gameRules:this.activeWorld.gameRules??{mobGriefing:!0},allowCheats:this.allowCheats,gameMode:this.gameMode,dimension:this.dimension,quests:Wa(this.questState),milestones:[...this.questState.milestones]};this.activeWorld=a,this.saveIndex=await this.saveSystem.upsertWorld(a),this.hud.setWorlds(this.worldSummaries()),this.saveState=this.saveRequested?"저장 대기":"저장됨"}catch{this.saveState="저장 오류",this.hud.showToast("저장에 실패했습니다")}finally{this.saving=!1}}}updateHud(){var a,l,c,h;const e=this.player.position,t=this.world.getStats(),n=Sn(this.inventory),s=((a=qr(this.activeCraftingGrid(),this.craftingGridSize))==null?void 0:a.result)??null,r=$s.map(d=>({recipe:d,craftable:Ha(d,this.inventory,this.craftingGridSize),unlocked:za(d,this.unlockedRecipes,this.inventory)})),o=this.dimension==="nether"?"지옥":this.dimension==="end"?"엔드":"지상";this.hud.update({position:`차원 ${o} | 모드 ${this.gameMode==="creative"?"크리에이티브":"서바이벌"} | 좌표 ${Math.floor(e.x)} ${Math.floor(e.y)} ${Math.floor(e.z)} | ${this.world.seed}`,chunks:t.chunks,mobs:this.mobs.count,fps:Math.round(this.fps),selectedStack:n,inventory:this.inventory,survival:this.survival.state,day:ct(this.sunLight.intensity/2.37,0,1),saveState:this.saveState,miningProgress:((l=this.mining)==null?void 0:l.progress)??0,selectedBlock:((c=this.selectedHit)==null?void 0:c.block)??null,activeWorldName:((h=this.activeWorld)==null?void 0:h.name)??"미리보기",recipes:r,craftingGrid:this.activeCraftingGrid(),craftingResult:s?{...s}:null,questState:this.questState,dimension:this.dimension,boss:this.endBoss.stats,allowCheats:this.allowCheats,gameMode:this.gameMode,smeltingRecipes:Ka.map(d=>({recipe:d,smeltable:co(d,this.inventory)})),settings:this.settings})}respawn(){const e=new R().fromArray(this.survival.state.spawn);this.player.position.copy(e),this.player.velocity.set(0,0,0),this.survival.respawn(),this.setMode("playing"),this.input.touchControlsPreferred||this.input.requestPointerLock(),this.queueSave()}async resetAll(){await this.saveSystem.clearAll(),window.location.reload()}worldSummaries(){return this.saveIndex.worlds.map(e=>({id:e.id,name:e.name,seed:e.seed,updatedAt:e.updatedAt,allowCheats:e.allowCheats??!1}))}}function io(i,e){return e>0?(Math.floor(i+1)-i)/e:e<0?(i-Math.floor(i))/-e:1/0}const Wl=document.querySelector("#app");if(!Wl)throw new Error("App root was not found.");const vg=new _g(Wl);vg.boot();
