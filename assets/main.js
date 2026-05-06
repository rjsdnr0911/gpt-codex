var Vo=Object.defineProperty;var Wo=(i,e,t)=>e in i?Vo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var O=(i,e,t)=>Wo(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ot="srgb",_i="srgb-linear",Es="linear",tt="srgb";const Vr="300 es";class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vs=Math.PI/180,br=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function Xo(i,e){return(i%e+e)%e}function ks(i,e,t){return(1-t)*i+t*e}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,s,r,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],T=s[1],E=s[4],S=s[7],R=s[2],A=s[5],w=s[8];return r[0]=a*v+o*T+l*R,r[3]=a*m+o*E+l*A,r[6]=a*f+o*S+l*w,r[1]=c*v+h*T+u*R,r[4]=c*m+h*E+u*A,r[7]=c*f+h*S+u*w,r[2]=d*v+p*T+g*R,r[5]=d*m+p*E+g*A,r[8]=d*f+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bs.makeScale(e,t)),this}rotate(e){return this.premultiply(Bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Fe;function ao(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qo(){const i=bs("canvas");return i.style.display="block",i}const Wr={};function xs(i){i in Wr||(Wr[i]=!0,console.warn(i))}function Yo(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $o(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ko(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xr=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qr=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zo(){const i={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Es:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_i]:{primaries:e,whitePoint:n,transfer:Es,toXYZ:Xr,fromXYZ:qr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Xr,fromXYZ:qr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const Ke=Zo();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class jo{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=bs("canvas")),ei.width=e.width,ei.height=e.height;const s=ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jo=0;class Cr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Os(s[a].image)):r.push(Os(s[a]))}else r=Os(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qo=0;class Ut extends xi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,l=1009,c=Ut.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qo++}),this.uuid=Fi(),this.name="",this.source=new Cr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=300;Ut.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,R=(f+1)/2,A=(h+d)/4,w=(u+v)/4,U=(g+m)/4;return E>S&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=w/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=U/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class el extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new Ut(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends el{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oo extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tl extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*v,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const R=Math.sqrt(E),A=Math.atan2(R,f*T);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const S=o*T;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+v*S,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new L,Yr=new ki;class Bi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hi.copy(n.boundingBox)),Hi.applyMatrix4(e.matrixWorld),this.union(Hi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Vi.subVectors(this.max,Ei),ti.subVectors(e.a,Ei),ni.subVectors(e.b,Ei),ii.subVectors(e.c,Ei),An.subVectors(ni,ti),Rn.subVectors(ii,ni),On.subVectors(ti,ii);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-On.z,On.y,An.z,0,-An.x,Rn.z,0,-Rn.x,On.z,0,-On.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-On.y,On.x,0];return!zs(t,ti,ni,ii,Vi)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,ti,ni,ii,Vi))?!1:(Wi.crossVectors(An,Rn),t=[Wi.x,Wi.y,Wi.z],zs(t,ti,ni,ii,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,Hi=new Bi,ti=new L,ni=new L,ii=new L,An=new L,Rn=new L,On=new L,Ei=new L,Vi=new L,Wi=new L,Gn=new L;function zs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const nl=new Bi,bi=new L,Hs=new L;class Oi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(Hs)),this.expandByPoint(bi.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new L,Vs=new L,Xi=new L,Cn=new L,Ws=new L,qi=new L,Xs=new L;class Pr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vs.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Vs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Xi),o=Cn.dot(this.direction),l=-Cn.dot(Xi),c=Cn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vs).addScaledVector(Xi,d),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,r){Ws.subVectors(t,e),qi.subVectors(n,e),Xs.crossVectors(Ws,qi);let a=this.direction.dot(Xs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(qi.crossVectors(Cn,qi));if(l<0)return null;const c=o*this.direction.dot(Ws.cross(Cn));if(c<0||l+c>a)return null;const h=-o*Cn.dot(Xs);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(il,e,sl)}lookAt(e,t,n){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Pn.crossVectors(n,zt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Pn.crossVectors(n,zt)),Pn.normalize(),Yi.crossVectors(zt,Pn),s[0]=Pn.x,s[4]=Yi.x,s[8]=zt.x,s[1]=Pn.y,s[5]=Yi.y,s[9]=zt.y,s[2]=Pn.z,s[6]=Yi.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],T=n[3],E=n[7],S=n[11],R=n[15],A=s[0],w=s[4],U=s[8],y=s[12],M=s[1],P=s[5],H=s[9],k=s[13],Y=s[2],Z=s[6],q=s[10],J=s[14],z=s[3],se=s[7],ue=s[11],ve=s[15];return r[0]=a*A+o*M+l*Y+c*z,r[4]=a*w+o*P+l*Z+c*se,r[8]=a*U+o*H+l*q+c*ue,r[12]=a*y+o*k+l*J+c*ve,r[1]=h*A+u*M+d*Y+p*z,r[5]=h*w+u*P+d*Z+p*se,r[9]=h*U+u*H+d*q+p*ue,r[13]=h*y+u*k+d*J+p*ve,r[2]=g*A+v*M+m*Y+f*z,r[6]=g*w+v*P+m*Z+f*se,r[10]=g*U+v*H+m*q+f*ue,r[14]=g*y+v*k+m*J+f*ve,r[3]=T*A+E*M+S*Y+R*z,r[7]=T*w+E*P+S*Z+R*se,r[11]=T*U+E*H+S*q+R*ue,r[15]=T*y+E*k+S*J+R*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],T=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,R=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,A=t*T+n*E+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=T*w,e[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*w,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*f+n*l*f)*w,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*w,e[4]=E*w,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*w,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*w,e[8]=S*w,e[9]=(g*u*r-h*v*r-g*n*p+t*v*p+h*n*f-t*u*f)*w,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*f+t*o*f)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=R*w,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*w,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,T=l*c,E=l*h,S=l*u,R=n.x,A=n.y,w=n.z;return s[0]=(1-(v+f))*R,s[1]=(p+S)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(d+f))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+E)*w,s[9]=(m-T)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const a=si.set(s[4],s[5],s[6]).length(),o=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);const c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=2e3){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(o===2e3)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===2001)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=2e3){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,p=(n+s)*h;let g,v;if(o===2e3)g=(a+r)*u,v=-2*u;else if(o===2001)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new L,rn=new ot,il=new L(0,0,0),sl=new L(1,1,1),Pn=new L,Yi=new L,zt=new L,$r=new ot,Kr=new ki;class fn{constructor(e=0,t=0,n=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $r.makeRotationFromQuaternion(e),this.setFromRotationMatrix($r,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kr.setFromEuler(this),this.setFromQuaternion(Kr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rl=0;const Zr=new L,ri=new ki,_n=new ot,$i=new L,Ti=new L,al=new L,ol=new ki,jr=new L(1,0,0),Jr=new L(0,1,0),Qr=new L(0,0,1),ea={type:"added"},ll={type:"removed"},ai={type:"childadded",child:null},qs={type:"childremoved",child:null};class Mt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rl++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new L,t=new fn,n=new ki,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Fe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(jr,e)}rotateY(e){return this.rotateOnAxis(Jr,e)}rotateZ(e){return this.rotateOnAxis(Qr,e)}translateOnAxis(e,t){return Zr.copy(e).applyQuaternion(this.quaternion),this.position.add(Zr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jr,e)}translateY(e){return this.translateOnAxis(Jr,e)}translateZ(e){return this.translateOnAxis(Qr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ti,$i,this.up):_n.lookAt($i,Ti,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(_n),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ea),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ll),qs.child=e,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ea),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,al),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,ol,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new L,vn=new L,Ys=new L,xn=new L,oi=new L,li=new L,ta=new L,$s=new L,Ks=new L,Zs=new L,js=new nt,Js=new nt,Qs=new nt;class en{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),vn.subVectors(n,t),Ys.subVectors(e,t);const a=an.dot(an),o=an.dot(vn),l=an.dot(Ys),c=vn.dot(vn),h=vn.dot(Ys),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return js.setScalar(0),Js.setScalar(0),Qs.setScalar(0),js.fromBufferAttribute(e,t),Js.fromBufferAttribute(e,n),Qs.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(js,r.x),a.addScaledVector(Js,r.y),a.addScaledVector(Qs,r.z),a}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),vn.subVectors(e,t),an.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),an.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;oi.subVectors(s,n),li.subVectors(r,n),$s.subVectors(e,n);const l=oi.dot($s),c=li.dot($s);if(l<=0&&c<=0)return t.copy(n);Ks.subVectors(e,s);const h=oi.dot(Ks),u=li.dot(Ks);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(oi,a);Zs.subVectors(e,r);const p=oi.dot(Zs),g=li.dot(Zs);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(li,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ta.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(ta,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const co={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function er(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Xo(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=er(a,r,e+1/3),this.g=er(a,r,e),this.b=er(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=co[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ge(Pt.r*255,0,255))*65536+Math.round(Ge(Pt.g*255,0,255))*256+Math.round(Ge(Pt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Ot){Ke.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Ki);const n=ks(Ln.h,Ki.h,t),s=ks(Ln.s,Ki.s,t),r=ks(Ln.l,Ki.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Le;Le.NAMES=co;let cl=0;class Jn extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class un extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new L,Zi=new Ze;let hl=0;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix3(e),this.setXY(t,Zi.x,Zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class ho extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uo extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ul=0;const jt=new ot,tr=new Mt,ci=new L,Ht=new Bi,wi=new Bi,Et=new L;class Yt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ao(e)?uo:ho)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return tr.lookAt(e),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,wi.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,wi.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(wi.min),Ht.expandByPoint(wi.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),Et.add(ci)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new L,l[U]=new L;const c=new L,h=new L,u=new L,d=new Ze,p=new Ze,g=new Ze,v=new L,m=new L;function f(U,y,M){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[U].add(v),o[y].add(v),o[M].add(v),l[U].add(m),l[y].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,y=T.length;U<y;++U){const M=T[U],P=M.start,H=M.count;for(let k=P,Y=P+H;k<Y;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new L,S=new L,R=new L,A=new L;function w(U){R.fromBufferAttribute(s,U),A.copy(R);const y=o[U];E.copy(y),E.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(A,y);const P=S.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,P)}for(let U=0,y=T.length;U<y;++U){const M=T[U],P=M.start,H=M.count;for(let k=P,Y=P+H;k<Y;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const na=new ot,zn=new Pr,ji=new Oi,ia=new L,Ji=new L,Qi=new L,es=new L,nr=new L,ts=new L,sa=new L,ns=new L;class qe extends Mt{constructor(e=new Yt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(nr.fromBufferAttribute(u,e),a?ts.addScaledVector(nr,h):ts.addScaledVector(nr.sub(t),h))}t.add(ts)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(ji.containsPoint(zn.origin)===!1&&(zn.intersectSphere(ji,ia)===null||zn.origin.distanceToSquared(ia)>(e.far-e.near)**2))&&(na.copy(r).invert(),zn.copy(e.ray).applyMatrix4(na),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,R=E;S<R;S+=3){const A=o.getX(S),w=o.getX(S+1),U=o.getX(S+2);s=is(this,f,e,n,c,h,u,A,w,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=is(this,a,e,n,c,h,u,T,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,R=E;S<R;S+=3){const A=S,w=S+1,U=S+2;s=is(this,f,e,n,c,h,u,A,w,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=m,E=m+1,S=m+2;s=is(this,a,e,n,c,h,u,T,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function dl(i,e,t,n,s,r,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===0,o),l===null)return null;ns.copy(o),ns.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ns);return c<t.near||c>t.far?null:{distance:c,point:ns.clone(),object:i}}function is(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ji),i.getVertexPosition(l,Qi),i.getVertexPosition(c,es);const h=dl(i,e,t,n,Ji,Qi,es,sa);if(h){const u=new L;en.getBarycoord(sa,Ji,Qi,es,u),s&&(h.uv=en.getInterpolatedAttribute(s,o,l,c,u,new Ze)),r&&(h.uv1=en.getInterpolatedAttribute(r,o,l,c,u,new Ze)),a&&(h.normal=en.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};en.getNormal(Ji,Qi,es,d.normal),h.face=d,h.barycoord=u}return h}class at extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(u,2));function g(v,m,f,T,E,S,R,A,w,U,y){const M=S/w,P=R/U,H=S/2,k=R/2,Y=A/2,Z=w+1,q=U+1;let J=0,z=0;const se=new L;for(let ue=0;ue<q;ue++){const ve=ue*P-k;for(let Ue=0;Ue<Z;Ue++){const Ye=Ue*M-H;se[v]=Ye*T,se[m]=ve*E,se[f]=Y,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[f]=A>0?1:-1,h.push(se.x,se.y,se.z),u.push(Ue/w),u.push(1-ue/U),J+=1}}for(let ue=0;ue<U;ue++)for(let ve=0;ve<w;ve++){const Ue=d+ve+Z*ue,Ye=d+ve+Z*(ue+1),W=d+(ve+1)+Z*(ue+1),ne=d+(ve+1)+Z*ue;l.push(Ue,Ye,ne),l.push(Ye,W,ne),z+=6}o.addGroup(p,z,y),p+=z,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=vi(i[t]);for(const s in n)e[s]=n[s]}return e}function fl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const pl={clone:vi,merge:It};var ml=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ml,this.fragmentShader=gl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=fl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class po extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new L,ra=new Ze,aa=new Ze;class Xt extends po{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,ra,aa),t.subVectors(aa,ra)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class _l extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(hi,ui,e,t);s.layers=this.layers,this.add(s);const r=new Xt(hi,ui,e,t);r.layers=this.layers,this.add(r);const a=new Xt(hi,ui,e,t);a.layers=this.layers,this.add(a);const o=new Xt(hi,ui,e,t);o.layers=this.layers,this.add(o);const l=new Xt(hi,ui,e,t);l.layers=this.layers,this.add(l);const c=new Xt(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mo extends Ut{constructor(e=[],t=301,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vl extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new mo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const a=new qe(s,r),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new _l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class wt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xl={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xl)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ts{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new Ts(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ml extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sr=new L,Sl=new L,yl=new Fe;class qn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sr.subVectors(n,t).cross(Sl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yl.getNormalMatrix(e),s=this.coplanarPoint(sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Oi,ss=new L;class Lr{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],T=s[13],E=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+a,d+h,m+g,S+T).normalize(),n[3].setComponents(l-a,d-h,m-g,S-T).normalize(),n[4].setComponents(l-o,d-u,m-v,S-E).normalize(),t===2e3)n[5].setComponents(l+o,d+u,m+v,S+E).normalize();else if(t===2001)n[5].setComponents(o,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ss.x=s.normal.x>0?e.max.x:e.min.x,ss.y=s.normal.y>0?e.max.y:e.min.y,ss.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class go extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ws=new L,As=new L,oa=new ot,Ai=new Pr,rs=new Oi,rr=new L,la=new L;class El extends Mt{constructor(e=new Yt,t=new go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ws.fromBufferAttribute(t,s-1),As.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ws.distanceTo(As);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),rs.radius+=r,e.ray.intersectsSphere(rs)===!1)return;oa.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(oa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),T=h.getX(v+1),E=as(this,e,Ai,l,f,T,v);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=as(this,e,Ai,l,v,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=as(this,e,Ai,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=as(this,e,Ai,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function as(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ws.fromBufferAttribute(o,s),As.fromBufferAttribute(o,r),t.distanceSqToSegment(ws,As,rr,la)>n)return;rr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(rr);if(!(c<e.near||c>e.far))return{distance:c,point:la.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ca=new L,ha=new L;class bl extends El{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ca.fromBufferAttribute(t,s),ha.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ca.distanceTo(ha);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _o extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ua=new ot,Tr=new Pr,os=new Oi,ls=new L;class Tl extends Mt{constructor(e=new Yt,t=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(s),os.radius+=r,e.ray.intersectsSphere(os)===!1)return;ua.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(ua);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);ls.fromBufferAttribute(u,m),da(ls,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,v=p;g<v;g++)ls.fromBufferAttribute(u,g),da(ls,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function da(i,e,t,n,s,r,a){const o=Tr.distanceSqToPoint(i);if(o<t){const l=new L;Tr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wl extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vo extends Ut{constructor(e,t,n=1014,s,r,a,o=1003,l=1003,c,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cs=new L,hs=new L,ar=new L,us=new en;class Al extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(vs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=us;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),us.getNormal(ar),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const E=(T+1)%3,S=u[T],R=u[E],A=us[h[T]],w=us[h[E]],U=`${S}_${R}`,y=`${R}_${S}`;y in d&&d[y]?(ar.dot(d[y].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(w.x,w.y,w.z)),d[y]=null):U in d||(d[U]={index0:c[T],index1:c[E],normal:ar.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];cs.fromBufferAttribute(o,v),hs.fromBufferAttribute(o,m),p.push(cs.x,cs.y,cs.z),p.push(hs.x,hs.y,hs.z)}this.setAttribute("position",new bt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ps extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const T=f*d-a;for(let E=0;E<c;E++){const S=E*u-r;g.push(S,-T,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const E=T+c*f,S=T+c*(f+1),R=T+1+c*(f+1),A=T+1+c*f;p.push(E,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ii extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const T=[],E=f/n;let S=0;f===0&&a===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const A=R/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+S,1-E),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const E=h[f][T+1],S=h[f][T],R=h[f+1][T],A=h[f+1][T+1];(f!==0||a>0)&&p.push(E,S,A),(f!==n-1||l<Math.PI)&&p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ls extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rl extends Ls{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cl extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pl extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ll extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const or=new ot,fa=new L,pa=new L;class xo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fa.setFromMatrixPosition(e.matrixWorld),t.position.copy(fa),pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pa),t.updateMatrixWorld(),or.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(or)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ma=new ot,Ri=new L,lr=new L;class Dl extends xo{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ri),lr.copy(n.position),lr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lr),n.updateMatrixWorld(),s.makeTranslation(-Ri.x,-Ri.y,-Ri.z),ma.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma)}}class ga extends Dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mo extends po{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Il extends xo{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ul extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nl extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_a(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_a();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _a(){return performance.now()}function va(i,e,t,n){const s=kl(n);switch(t){case 1021:return i*e;case 1028:return i*e/s.components*s.byteLength;case 1029:return i*e/s.components*s.byteLength;case 1030:return i*e*2/s.components*s.byteLength;case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case 1023:return i*e*4/s.components*s.byteLength;case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kl(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"176"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="176");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function So(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bl(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ol=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gl=`#ifdef USE_ALPHAHASH
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
#endif`,zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xl=`#ifdef USE_AOMAP
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
#endif`,ql=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yl=`#ifdef USE_BATCHING
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
#endif`,$l=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jl=`#ifdef USE_IRIDESCENCE
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
#endif`,Ql=`#ifdef USE_BUMPMAP
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
#endif`,ec=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ic=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ac=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lc=`#define PI 3.141592653589793
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
} // validated`,cc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hc=`vec3 transformedNormal = objectNormal;
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
#endif`,uc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mc="gl_FragColor = linearToOutputTexel( gl_FragColor );",gc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_c=`#ifdef USE_ENVMAP
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
#endif`,vc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xc=`#ifdef USE_ENVMAP
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
#endif`,Mc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sc=`#ifdef USE_ENVMAP
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
#endif`,yc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ec=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wc=`#ifdef USE_GRADIENTMAP
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
}`,Ac=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pc=`uniform bool receiveShadow;
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
#endif`,Lc=`#ifdef USE_ENVMAP
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
#endif`,Dc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ic=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fc=`PhysicalMaterial material;
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
#endif`,kc=`struct PhysicalMaterial {
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
}`,Bc=`
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
#endif`,Oc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$c=`#if defined( USE_POINTS_UV )
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
#endif`,Kc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eh=`#ifdef USE_MORPHTARGETS
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
#endif`,th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ah=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oh=`#ifdef USE_NORMALMAP
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
#endif`,lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_h=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eh=`float getShadowMask() {
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
}`,bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Th=`#ifdef USE_SKINNING
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
#endif`,wh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ah=`#ifdef USE_SKINNING
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
#endif`,Rh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ch=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ph=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dh=`#ifdef USE_TRANSMISSION
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
#endif`,Ih=`#ifdef USE_TRANSMISSION
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
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oh=`uniform sampler2D t2D;
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
}`,Gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`#include <common>
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
}`,Xh=`#if DEPTH_PACKING == 3200
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
}`,qh=`#define DISTANCE
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
}`,Yh=`#define DISTANCE
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
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`uniform float scale;
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
}`,jh=`uniform vec3 diffuse;
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
}`,Jh=`#include <common>
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
}`,Qh=`uniform vec3 diffuse;
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
}`,eu=`#define LAMBERT
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
}`,tu=`#define LAMBERT
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
}`,nu=`#define MATCAP
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
}`,iu=`#define MATCAP
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
}`,su=`#define NORMAL
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
}`,ru=`#define NORMAL
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
}`,au=`#define PHONG
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
}`,ou=`#define PHONG
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
}`,lu=`#define STANDARD
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
}`,cu=`#define STANDARD
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
}`,hu=`#define TOON
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
}`,uu=`#define TOON
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
}`,du=`uniform float size;
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
}`,fu=`uniform vec3 diffuse;
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
}`,pu=`#include <common>
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
}`,mu=`uniform vec3 color;
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
}`,gu=`uniform float rotation;
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
}`,_u=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Ol,alphahash_pars_fragment:Gl,alphamap_fragment:zl,alphamap_pars_fragment:Hl,alphatest_fragment:Vl,alphatest_pars_fragment:Wl,aomap_fragment:Xl,aomap_pars_fragment:ql,batching_pars_vertex:Yl,batching_vertex:$l,begin_vertex:Kl,beginnormal_vertex:Zl,bsdfs:jl,iridescence_fragment:Jl,bumpmap_pars_fragment:Ql,clipping_planes_fragment:ec,clipping_planes_pars_fragment:tc,clipping_planes_pars_vertex:nc,clipping_planes_vertex:ic,color_fragment:sc,color_pars_fragment:rc,color_pars_vertex:ac,color_vertex:oc,common:lc,cube_uv_reflection_fragment:cc,defaultnormal_vertex:hc,displacementmap_pars_vertex:uc,displacementmap_vertex:dc,emissivemap_fragment:fc,emissivemap_pars_fragment:pc,colorspace_fragment:mc,colorspace_pars_fragment:gc,envmap_fragment:_c,envmap_common_pars_fragment:vc,envmap_pars_fragment:xc,envmap_pars_vertex:Mc,envmap_physical_pars_fragment:Lc,envmap_vertex:Sc,fog_vertex:yc,fog_pars_vertex:Ec,fog_fragment:bc,fog_pars_fragment:Tc,gradientmap_pars_fragment:wc,lightmap_pars_fragment:Ac,lights_lambert_fragment:Rc,lights_lambert_pars_fragment:Cc,lights_pars_begin:Pc,lights_toon_fragment:Dc,lights_toon_pars_fragment:Ic,lights_phong_fragment:Uc,lights_phong_pars_fragment:Nc,lights_physical_fragment:Fc,lights_physical_pars_fragment:kc,lights_fragment_begin:Bc,lights_fragment_maps:Oc,lights_fragment_end:Gc,logdepthbuf_fragment:zc,logdepthbuf_pars_fragment:Hc,logdepthbuf_pars_vertex:Vc,logdepthbuf_vertex:Wc,map_fragment:Xc,map_pars_fragment:qc,map_particle_fragment:Yc,map_particle_pars_fragment:$c,metalnessmap_fragment:Kc,metalnessmap_pars_fragment:Zc,morphinstance_vertex:jc,morphcolor_vertex:Jc,morphnormal_vertex:Qc,morphtarget_pars_vertex:eh,morphtarget_vertex:th,normal_fragment_begin:nh,normal_fragment_maps:ih,normal_pars_fragment:sh,normal_pars_vertex:rh,normal_vertex:ah,normalmap_pars_fragment:oh,clearcoat_normal_fragment_begin:lh,clearcoat_normal_fragment_maps:ch,clearcoat_pars_fragment:hh,iridescence_pars_fragment:uh,opaque_fragment:dh,packing:fh,premultiplied_alpha_fragment:ph,project_vertex:mh,dithering_fragment:gh,dithering_pars_fragment:_h,roughnessmap_fragment:vh,roughnessmap_pars_fragment:xh,shadowmap_pars_fragment:Mh,shadowmap_pars_vertex:Sh,shadowmap_vertex:yh,shadowmask_pars_fragment:Eh,skinbase_vertex:bh,skinning_pars_vertex:Th,skinning_vertex:wh,skinnormal_vertex:Ah,specularmap_fragment:Rh,specularmap_pars_fragment:Ch,tonemapping_fragment:Ph,tonemapping_pars_fragment:Lh,transmission_fragment:Dh,transmission_pars_fragment:Ih,uv_pars_fragment:Uh,uv_pars_vertex:Nh,uv_vertex:Fh,worldpos_vertex:kh,background_vert:Bh,background_frag:Oh,backgroundCube_vert:Gh,backgroundCube_frag:zh,cube_vert:Hh,cube_frag:Vh,depth_vert:Wh,depth_frag:Xh,distanceRGBA_vert:qh,distanceRGBA_frag:Yh,equirect_vert:$h,equirect_frag:Kh,linedashed_vert:Zh,linedashed_frag:jh,meshbasic_vert:Jh,meshbasic_frag:Qh,meshlambert_vert:eu,meshlambert_frag:tu,meshmatcap_vert:nu,meshmatcap_frag:iu,meshnormal_vert:su,meshnormal_frag:ru,meshphong_vert:au,meshphong_frag:ou,meshphysical_vert:lu,meshphysical_frag:cu,meshtoon_vert:hu,meshtoon_frag:uu,points_vert:du,points_frag:fu,shadow_vert:pu,shadow_frag:mu,sprite_vert:gu,sprite_frag:_u},re={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},hn={basic:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:It([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:It([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Le(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:It([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:It([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:It([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:It([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:It([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:It([re.lights,re.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};hn.physical={uniforms:It([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ds={r:0,b:0,g:0},Vn=new fn,vu=new ot;function xu(i,e,t,n,s,r,a){const o=new Le(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function v(E){let S=!1;const R=g(E);R===null?f(o,l):R&&R.isColor&&(f(R,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const R=g(S);R&&(R.isCubeTexture||R.mapping===306)?(h===void 0&&(h=new qe(new at(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:vi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vn.copy(S.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vu.makeRotationFromEuler(Vn)),h.material.toneMapped=Ke.getTransfer(R.colorSpace)!==tt,(u!==R||d!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new qe(new Ps(2,2),new wn({name:"BackgroundMaterial",uniforms:vi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(R.colorSpace)!==tt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,S){E.getRGB(ds,fo(i)),n.buffers.color.setClear(ds.r,ds.g,ds.b,S,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:v,addToRenderList:m,dispose:T}}function Mu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,P,H,k,Y){let Z=!1;const q=u(k,H,P);r!==q&&(r=q,c(r.object)),Z=p(M,k,H,Y),Z&&g(M,k,H,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(M,P,H,k),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,H){const k=H.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let Z=Y[P.id];Z===void 0&&(Z={},Y[P.id]=Z);let q=Z[k];return q===void 0&&(q=d(l()),Z[k]=q),q}function d(M){const P=[],H=[],k=[];for(let Y=0;Y<t;Y++)P[Y]=0,H[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,P,H,k){const Y=r.attributes,Z=P.attributes;let q=0;const J=H.getAttributes();for(const z in J)if(J[z].location>=0){const ue=Y[z];let ve=Z[z];if(ve===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function g(M,P,H,k){const Y={},Z=P.attributes;let q=0;const J=H.getAttributes();for(const z in J)if(J[z].location>=0){let ue=Z[z];ue===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),Y[z]=ve,q++}r.attributes=Y,r.attributesNum=q,r.index=k}function v(){const M=r.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const H=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;H[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),Y[M]!==P&&(i.vertexAttribDivisor(M,P),Y[M]=P)}function T(){const M=r.newAttributes,P=r.enabledAttributes;for(let H=0,k=P.length;H<k;H++)P[H]!==M[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function E(M,P,H,k,Y,Z,q){q===!0?i.vertexAttribIPointer(M,P,H,Y,Z):i.vertexAttribPointer(M,P,H,k,Y,Z)}function S(M,P,H,k){v();const Y=k.attributes,Z=H.getAttributes(),q=P.defaultAttributeValues;for(const J in Z){const z=Z[J];if(z.location>=0){let se=Y[J];if(se===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){const ue=se.normalized,ve=se.itemSize,Ue=e.get(se);if(Ue===void 0)continue;const Ye=Ue.buffer,W=Ue.type,ne=Ue.bytesPerElement,de=W===i.INT||W===i.UNSIGNED_INT||se.gpuType===1013;if(se.isInterleavedBufferAttribute){const ie=se.data,Me=ie.stride,Oe=se.offset;if(ie.isInstancedInterleavedBuffer){for(let _e=0;_e<z.locationSize;_e++)f(z.location+_e,ie.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let _e=0;_e<z.locationSize;_e++)m(z.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let _e=0;_e<z.locationSize;_e++)E(z.location+_e,ve/z.locationSize,W,ue,Me*ne,(Oe+ve/z.locationSize*_e)*ne,de)}else{if(se.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)f(z.location+ie,se.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ie=0;ie<z.locationSize;ie++)m(z.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ie=0;ie<z.locationSize;ie++)E(z.location+ie,ve/z.locationSize,W,ue,ve*ne,ve/z.locationSize*ie*ne,de)}}else if(q!==void 0){const ue=q[J];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}T()}function R(){U();for(const M in n){const P=n[M];for(const H in P){const k=P[H];for(const Y in k)h(k[Y].object),delete k[Y];delete P[H]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const H in P){const k=P[H];for(const Y in k)h(k[Y].object),delete k[Y];delete P[H]}delete n[M.id]}function w(M){for(const P in n){const H=n[P];if(H[M.id]===void 0)continue;const k=H[M.id];for(const Y in k)h(k[Y].object),delete k[Y];delete H[M.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Su(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yu(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==1023&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const U=w===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==1009&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==1015&&!U)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function Eu(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new qn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,E=T*4;let S=f.clippingState||null;l.value=S,S=h(g,d,E,p);for(let R=0;R!==E;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,S=p;E!==v;++E,S+=4)a.copy(u[E]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function bu(i){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const mi=4,xa=[.125,.215,.35,.446,.526,.582],$n=20,cr=new Mo,Ma=new Le;let hr=null,ur=0,dr=0,fr=!1;const Yn=(1+Math.sqrt(5))/2,di=1/Yn,Sa=[new L(-Yn,di,0),new L(Yn,di,0),new L(-di,0,Yn),new L(di,0,Yn),new L(0,Yn,-di),new L(0,Yn,di),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Tu=new L;class ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Tu}=r;hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hr,ur,dr),this._renderer.xr.enabled=fr,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:_i,depthBuffer:!1},s=Ea(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wu(r)),this._blurMaterial=Au(r,e,t)}return s}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,n,s,r){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ma),u.toneMapping=0,u.autoClear=!1;const g=new un({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),v=new qe(new at,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Ma),m=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const S=this._cubeSize;fs(s,E*S,T>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ba());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sa[(s-r-1)%Sa.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let T=0;for(let w=0;w<$n;++w){const U=w/v,y=Math.exp(-U*U/2);f.push(y),w===0?T+=y:w<m&&(T+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const S=this._sizeLods[s],R=3*S*(s>E-mi?s-E+mi:0),A=4*(this._cubeSize-S);fs(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(u,cr)}}function wu(i){const e=[],t=[],n=[];let s=i;const r=i-mi+1+xa.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-mi?l=xa[a-i+mi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),E=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,U=A>2?0:-1,y=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];T.set(y,v*g*A),E.set(d,m*g*A);const M=[A,A,A,A,A,A];S.set(M,f*g*A)}const R=new Yt;R.setAttribute("position",new dn(T,v)),R.setAttribute("uv",new dn(E,m)),R.setAttribute("faceIndex",new dn(S,f)),e.push(R),s>mi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ea(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Au(i,e,t){const n=new Float32Array($n),s=new L(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ba(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ta(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ir(){return`

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
	`}function Ru(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ya(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ya(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Cu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pu(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let E=0,S=T.length;E<S;E+=3){const R=T[E+0],A=T[E+1],w=T[E+2];d.push(R,A,A,w,w,R)}}else if(g!==void 0){const T=g.array;v=g.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const R=E+0,A=E+1,w=E+2;d.push(R,A,A,w,w,R)}}else return;const m=new(ao(d)?uo:ho)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Lu(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Du(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Iu(i,e,t){const n=new WeakMap,s=new nt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let R=o.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*u),U=new oo(w,R,A,u);U.type=1015,U.needsUpdate=!0;const y=S*4;for(let P=0;P<u;P++){const H=f[P],k=T[P],Y=E[P],Z=R*A*4*P;for(let q=0;q<H.count;q++){const J=q*y;g===!0&&(s.fromBufferAttribute(H,q),w[Z+J+0]=s.x,w[Z+J+1]=s.y,w[Z+J+2]=s.z,w[Z+J+3]=0),v===!0&&(s.fromBufferAttribute(k,q),w[Z+J+4]=s.x,w[Z+J+5]=s.y,w[Z+J+6]=s.z,w[Z+J+7]=0),m===!0&&(s.fromBufferAttribute(Y,q),w[Z+J+8]=s.x,w[Z+J+9]=s.y,w[Z+J+10]=s.z,w[Z+J+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new Ze(R,A)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Uu(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const yo=new Ut,wa=new vo(1,1),Eo=new oo,bo=new tl,To=new mo,Aa=[],Ra=[],Ca=new Float32Array(16),Pa=new Float32Array(9),La=new Float32Array(4);function Mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Aa[s];if(r===void 0&&(r=new Float32Array(s),Aa[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ds(i,e){let t=Ra[e];t===void 0&&(t=new Int32Array(e),Ra[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function ku(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Bu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Ou(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;La.set(n),i.uniformMatrix2fv(this.addr,!1,La),yt(t,n)}}function Gu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;Pa.set(n),i.uniformMatrix3fv(this.addr,!1,Pa),yt(t,n)}}function zu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(St(t,n))return;Ca.set(n),i.uniformMatrix4fv(this.addr,!1,Ca),yt(t,n)}}function Hu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Xu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function qu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function $u(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function Ku(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Zu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wa.compareFunction=515,r=wa):r=yo,t.setTexture2D(e||r,s)}function ju(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bo,s)}function Ju(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||To,s)}function Qu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Eo,s)}function ed(i){switch(i){case 5126:return Nu;case 35664:return Fu;case 35665:return ku;case 35666:return Bu;case 35674:return Ou;case 35675:return Gu;case 35676:return zu;case 5124:case 35670:return Hu;case 35667:case 35671:return Vu;case 35668:case 35672:return Wu;case 35669:case 35673:return Xu;case 5125:return qu;case 36294:return Yu;case 36295:return $u;case 36296:return Ku;case 35678:case 36198:case 36298:case 36306:case 35682:return Zu;case 35679:case 36299:case 36307:return ju;case 35680:case 36300:case 36308:case 36293:return Ju;case 36289:case 36303:case 36311:case 36292:return Qu}}function td(i,e){i.uniform1fv(this.addr,e)}function nd(i,e){const t=Mi(e,this.size,2);i.uniform2fv(this.addr,t)}function id(i,e){const t=Mi(e,this.size,3);i.uniform3fv(this.addr,t)}function sd(i,e){const t=Mi(e,this.size,4);i.uniform4fv(this.addr,t)}function rd(i,e){const t=Mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ad(i,e){const t=Mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function od(i,e){const t=Mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ld(i,e){i.uniform1iv(this.addr,e)}function cd(i,e){i.uniform2iv(this.addr,e)}function hd(i,e){i.uniform3iv(this.addr,e)}function ud(i,e){i.uniform4iv(this.addr,e)}function dd(i,e){i.uniform1uiv(this.addr,e)}function fd(i,e){i.uniform2uiv(this.addr,e)}function pd(i,e){i.uniform3uiv(this.addr,e)}function md(i,e){i.uniform4uiv(this.addr,e)}function gd(i,e,t){const n=this.cache,s=e.length,r=Ds(t,s);St(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||yo,r[a])}function _d(i,e,t){const n=this.cache,s=e.length,r=Ds(t,s);St(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bo,r[a])}function vd(i,e,t){const n=this.cache,s=e.length,r=Ds(t,s);St(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||To,r[a])}function xd(i,e,t){const n=this.cache,s=e.length,r=Ds(t,s);St(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Eo,r[a])}function Md(i){switch(i){case 5126:return td;case 35664:return nd;case 35665:return id;case 35666:return sd;case 35674:return rd;case 35675:return ad;case 35676:return od;case 5124:case 35670:return ld;case 35667:case 35671:return cd;case 35668:case 35672:return hd;case 35669:case 35673:return ud;case 5125:return dd;case 36294:return fd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return _d;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return xd}}class Sd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ed(t.type)}}class yd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Md(t.type)}}class Ed{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Da(i,e){i.seq.push(e),i.map[e.id]=e}function bd(i,e,t){const n=i.name,s=n.length;for(pr.lastIndex=0;;){const r=pr.exec(n),a=pr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Da(t,c===void 0?new Sd(o,i,e):new yd(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ed(o),Da(t,u)),t=u}}}class Ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);bd(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ia(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Td=37297;let wd=0;function Ad(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ua=new Fe;function Rd(i){Ke._getMatrix(Ua,Ke.workingColorSpace,i);const e=`mat3( ${Ua.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Es:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Na(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ad(i.getShaderSource(e),a)}else return s}function Cd(i,e){const t=Rd(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pd(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new L;function Ld(){Ke.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function Id(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ud(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Di(i){return i!==""}function Fa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ka(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nd=/^[ \t]*#include +<([\w\d./]+)>/gm;function wr(i){return i.replace(Nd,kd)}const Fd=new Map;function kd(i,e){let t=Be[e];if(t===void 0){const n=Fd.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wr(t)}const Bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(i){return i.replace(Bd,Od)}function Od(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oa(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Gd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function zd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Vd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Wd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xd(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gd(t),c=zd(t),h=Hd(t),u=Vd(t),d=Wd(t),p=Dd(t),g=Id(r),v=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Di).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Di).join(`
`),f.length>0&&(f+=`
`)):(m=[Oa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),f=[Oa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Be.tonemapping_pars_fragment:"",t.toneMapping!==0?Pd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Cd("linearToOutputTexel",t.outputColorSpace),Ld(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),a=wr(a),a=Fa(a,t),a=ka(a,t),o=wr(o),o=Fa(o,t),o=ka(o,t),a=Ba(a),o=Ba(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Vr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=T+m+a,S=T+f+o,R=Ia(s,s.VERTEX_SHADER,E),A=Ia(s,s.FRAGMENT_SHADER,S);s.attachShader(v,R),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(A).trim();let Z=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{const J=Na(s,R,"vertex"),z=Na(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+J+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||Y==="")&&(q=!1);q&&(P.diagnostics={runnable:Z,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(R),s.deleteShader(A),U=new Ms(s,v),y=Ud(s,v)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Td)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wd++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let qd=0;class Yd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $d(e),t.set(e,n)),n}}class $d{constructor(e){this.id=qd++,this.code=e,this.usedTimes=0}}function Kd(i,e,t,n,s,r,a){const o=new lo,l=new Yd,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,H,k){const Y=H.fog,Z=k.geometry,q=y.isMeshStandardMaterial?H.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),z=J&&J.mapping===306?J.image.height:null,se=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=ue!==void 0?ue.length:0;let Ue=0;Z.morphAttributes.position!==void 0&&(Ue=1),Z.morphAttributes.normal!==void 0&&(Ue=2),Z.morphAttributes.color!==void 0&&(Ue=3);let Ye,W,ne,de;if(se){const et=hn[se];Ye=et.vertexShader,W=et.fragmentShader}else Ye=y.vertexShader,W=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const ie=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,_e=k.isBatchedMesh===!0,mt=!!y.map,ut=!!y.matcap,ze=!!J,C=!!y.aoMap,$t=!!y.lightMap,We=!!y.bumpMap,He=!!y.normalMap,ye=!!y.displacementMap,rt=!!y.emissiveMap,Se=!!y.metalnessMap,b=!!y.roughnessMap,_=y.anisotropy>0,F=y.clearcoat>0,K=y.dispersion>0,Q=y.iridescence>0,X=y.sheen>0,xe=y.transmission>0,oe=_&&!!y.anisotropyMap,Te=F&&!!y.clearcoatMap,we=F&&!!y.clearcoatNormalMap,ee=F&&!!y.clearcoatRoughnessMap,pe=Q&&!!y.iridescenceMap,Ae=Q&&!!y.iridescenceThicknessMap,Ce=X&&!!y.sheenColorMap,me=X&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,ke=!!y.specularColorMap,it=!!y.specularIntensityMap,D=xe&&!!y.transmissionMap,le=xe&&!!y.thicknessMap,V=!!y.gradientMap,j=!!y.alphaMap,he=y.alphaTest>0,ce=!!y.alphaHash,Ne=!!y.extensions;let dt=0;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Rt={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:W,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:_e,batchingColor:_e&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:_i,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:ut,envMap:ze,envMapMode:ze&&J.mapping,envMapCubeUVHeight:z,aoMap:C,lightMap:$t,bumpMap:We,normalMap:He,displacementMap:d&&ye,emissiveMap:rt,normalMapObjectSpace:He&&y.normalMapType===1,normalMapTangentSpace:He&&y.normalMapType===0,metalnessMap:Se,roughnessMap:b,anisotropy:_,anisotropyMap:oe,clearcoat:F,clearcoatMap:Te,clearcoatNormalMap:we,clearcoatRoughnessMap:ee,dispersion:K,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:X,sheenColorMap:Ce,sheenRoughnessMap:me,specularMap:Ve,specularColorMap:ke,specularIntensityMap:it,transmission:xe,transmissionMap:D,thicknessMap:le,gradientMap:V,opaque:y.transparent===!1&&y.blending===1&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:he,alphaHash:ce,combine:y.combine,mapUv:mt&&v(y.map.channel),aoMapUv:C&&v(y.aoMap.channel),lightMapUv:$t&&v(y.lightMap.channel),bumpMapUv:We&&v(y.bumpMap.channel),normalMapUv:He&&v(y.normalMap.channel),displacementMapUv:ye&&v(y.displacementMap.channel),emissiveMapUv:rt&&v(y.emissiveMap.channel),metalnessMapUv:Se&&v(y.metalnessMap.channel),roughnessMapUv:b&&v(y.roughnessMap.channel),anisotropyMapUv:oe&&v(y.anisotropyMap.channel),clearcoatMapUv:Te&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(y.sheenRoughnessMap.channel),specularMapUv:Ve&&v(y.specularMap.channel),specularColorMapUv:ke&&v(y.specularColorMap.channel),specularIntensityMapUv:it&&v(y.specularIntensityMap.channel),transmissionMapUv:D&&v(y.transmissionMap.channel),thicknessMapUv:le&&v(y.thicknessMap.channel),alphaMapUv:j&&v(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(He||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(mt||j),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===tt,decodeVideoTextureEmissive:rt&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===2,flipSided:y.side===1,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(T(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=g[y.type];let P;if(M){const H=hn[M];P=pl.clone(H.uniforms)}else P=y.uniforms;return P}function R(y,M){let P;for(let H=0,k=h.length;H<k;H++){const Y=h[H];if(Y.cacheKey===M){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new Xd(i,M,y,r),h.push(P)),P}function A(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:U}}function Zd(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ga(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function za(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,g,v,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||jd),n.length>1&&n.sort(d||Ga),s.length>1&&s.sort(d||Ga)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Jd(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new za,i.set(n,[a])):s>=r.length?(a=new za,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function ef(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tf=0;function nf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sf(i){const e=new Qd,t=ef(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ot,a=new ot;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,E=0,S=0,R=0,A=0,w=0;c.sort(nf);for(let y=0,M=c.length;y<M;y++){const P=c[y],H=P.color,k=P.intensity,Y=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*k,u+=H.g*k,d+=H.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],k);w++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,z=t.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(H).multiplyScalar(k),q.distance=Y,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[v]=q;const J=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=J.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=Z,S++}v++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(H).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const J=P.shadow,z=t.get(P);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=w,n.version=tf++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const E=c[f];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Ha(i){const e=new sf(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function rf(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ha(i),e.set(s,[o])):r>=a.length?(o=new Ha(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const af=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,of=`uniform sampler2D shadow_pass;
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
}`;function lf(i,e,t){let n=new Lr;const s=new Ze,r=new Ze,a=new nt,o=new Cl({depthPacking:3201}),l=new Pl,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:af,fragmentShader:of}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(A,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=f!==3&&this.type===3,Y=f===3&&this.type!==3;for(let Z=0,q=A.length;Z<q;Z++){const J=A[Z],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const se=z.getFrameExtents();if(s.multiply(se),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,z.mapSize.y=r.y)),z.map===null||k===!0||Y===!0){const ve=this.type!==3?{minFilter:1003,magFilter:1003}:{};z.map!==null&&z.map.dispose(),z.map=new jn(s.x,s.y,ve),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ue=z.getViewportCount();for(let ve=0;ve<ue;ve++){const Ue=z.getViewport(ve);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),H.viewport(a),z.updateMatrices(J,ve),n=z.getFrustum(),S(w,U,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===3&&T(z,U),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,P)};function T(A,w){const U=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,U,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,U,p,v,null)}function E(A,w,U,y){let M=null;const P=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const H=M.uuid,k=w.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let Z=Y[k];Z===void 0&&(Z=M.clone(),Y[k]=Z,w.addEventListener("dispose",R)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,y===3?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=U}return M}function S(A,w,U,y,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const k=e.update(A),Y=A.material;if(Array.isArray(Y)){const Z=k.groups;for(let q=0,J=Z.length;q<J;q++){const z=Z[q],se=Y[z.materialIndex];if(se&&se.visible){const ue=E(A,se,y,M);A.onBeforeShadow(i,A,w,U,k,ue,z),i.renderBufferDirect(U,null,k,ue,A,z),A.onAfterShadow(i,A,w,U,k,ue,z)}}}else if(Y.visible){const Z=E(A,Y,y,M);A.onBeforeShadow(i,A,w,U,k,Z,null),i.renderBufferDirect(U,null,k,Z,A,null),A.onAfterShadow(i,A,w,U,k,Z,null)}}const H=A.children;for(let k=0,Y=H.length;k<Y;k++)S(H[k],w,U,y,M)}function R(A){A.target.removeEventListener("dispose",R);for(const U in c){const y=c[U],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const cf={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function hf(i,e){function t(){let D=!1;const le=new nt;let V=null;const j=new nt(0,0,0,0);return{setMask:function(he){V!==he&&!D&&(i.colorMask(he,he,he,he),V=he)},setLocked:function(he){D=he},setClear:function(he,ce,Ne,dt,Rt){Rt===!0&&(he*=dt,ce*=dt,Ne*=dt),le.set(he,ce,Ne,dt),j.equals(le)===!1&&(i.clearColor(he,ce,Ne,dt),j.copy(le))},reset:function(){D=!1,V=null,j.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,V=null,j=null,he=null;return{setReversed:function(ce){if(le!==ce){const Ne=e.get("EXT_clip_control");ce?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),le=ce;const dt=he;he=null,this.setClear(dt)}},getReversed:function(){return le},setTest:function(ce){ce?ie(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(ce){V!==ce&&!D&&(i.depthMask(ce),V=ce)},setFunc:function(ce){if(le&&(ce=cf[ce]),j!==ce){switch(ce){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ce}},setLocked:function(ce){D=ce},setClear:function(ce){he!==ce&&(le&&(ce=1-ce),i.clearDepth(ce),he=ce)},reset:function(){D=!1,V=null,j=null,he=null,le=!1}}}function s(){let D=!1,le=null,V=null,j=null,he=null,ce=null,Ne=null,dt=null,Rt=null;return{setTest:function(et){D||(et?ie(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(et){le!==et&&!D&&(i.stencilMask(et),le=et)},setFunc:function(et,tn,pn){(V!==et||j!==tn||he!==pn)&&(i.stencilFunc(et,tn,pn),V=et,j=tn,he=pn)},setOp:function(et,tn,pn){(ce!==et||Ne!==tn||dt!==pn)&&(i.stencilOp(et,tn,pn),ce=et,Ne=tn,dt=pn)},setLocked:function(et){D=et},setClear:function(et){Rt!==et&&(i.clearStencil(et),Rt=et)},reset:function(){D=!1,le=null,V=null,j=null,he=null,ce=null,Ne=null,dt=null,Rt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,S=null,R=null,A=null,w=new Le(0,0,0),U=0,y=!1,M=null,P=null,H=null,k=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=J>=2);let se=null,ue={};const ve=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Ye=new nt().fromArray(ve),W=new nt().fromArray(Ue);function ne(D,le,V,j){const he=new Uint8Array(4),ce=i.createTexture();i.bindTexture(D,ce),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<V;Ne++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(le+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ce}const de={};de[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(3),We(!1),He(1),ie(i.CULL_FACE),C(0);function ie(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Me(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Oe(D,le){return u[D]!==le?(i.bindFramebuffer(D,le),u[D]=le,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(D,le){let V=p,j=!1;if(D){V=d.get(le),V===void 0&&(V=[],d.set(le,V));const he=D.textures;if(V.length!==he.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ne=he.length;ce<Ne;ce++)V[ce]=i.COLOR_ATTACHMENT0+ce;V.length=he.length,j=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,j=!0);j&&i.drawBuffers(V)}function mt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const ut={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};ut[103]=i.MIN,ut[104]=i.MAX;const ze={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,le,V,j,he,ce,Ne,dt,Rt,et){if(D===0){v===!0&&(Me(i.BLEND),v=!1);return}if(v===!1&&(ie(i.BLEND),v=!0),D!==5){if(D!==m||et!==y){if((f!==100||S!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,S=100),et)switch(D){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,R=null,A=null,w.set(0,0,0),U=0,m=D,y=et}return}he=he||le,ce=ce||V,Ne=Ne||j,(le!==f||he!==S)&&(i.blendEquationSeparate(ut[le],ut[he]),f=le,S=he),(V!==T||j!==E||ce!==R||Ne!==A)&&(i.blendFuncSeparate(ze[V],ze[j],ze[ce],ze[Ne]),T=V,E=j,R=ce,A=Ne),(dt.equals(w)===!1||Rt!==U)&&(i.blendColor(dt.r,dt.g,dt.b,Rt),w.copy(dt),U=Rt),m=D,y=!1}function $t(D,le){D.side===2?Me(i.CULL_FACE):ie(i.CULL_FACE);let V=D.side===1;le&&(V=!V),We(V),D.blending===1&&D.transparent===!1?C(0):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function He(D){D!==0?(ie(i.CULL_FACE),D!==P&&(D===1?i.cullFace(i.BACK):D===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),P=D}function ye(D){D!==H&&(q&&i.lineWidth(D),H=D)}function rt(D,le,V){D?(ie(i.POLYGON_OFFSET_FILL),(k!==le||Y!==V)&&(i.polygonOffset(le,V),k=le,Y=V)):Me(i.POLYGON_OFFSET_FILL)}function Se(D){D?ie(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+Z-1),se!==D&&(i.activeTexture(D),se=D)}function _(D,le,V){V===void 0&&(se===null?V=i.TEXTURE0+Z-1:V=se);let j=ue[V];j===void 0&&(j={type:void 0,texture:void 0},ue[V]=j),(j.type!==D||j.texture!==le)&&(se!==V&&(i.activeTexture(V),se=V),i.bindTexture(D,le||de[D]),j.type=D,j.texture=le)}function F(){const D=ue[se];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(D){Ye.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function me(D){W.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function Ve(D,le){let V=c.get(le);V===void 0&&(V=new WeakMap,c.set(le,V));let j=V.get(D);j===void 0&&(j=i.getUniformBlockIndex(le,D.name),V.set(D,j))}function ke(D,le){const j=c.get(le).get(D);l.get(le)!==j&&(i.uniformBlockBinding(le,j,D.__bindingPointIndex),l.set(le,j))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,ue={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,S=null,R=null,A=null,w=new Le(0,0,0),U=0,y=!1,M=null,P=null,H=null,k=null,Y=null,Ye.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Me,bindFramebuffer:Oe,drawBuffers:_e,useProgram:mt,setBlending:C,setMaterial:$t,setFlipSided:We,setCullFace:He,setLineWidth:ye,setPolygonOffset:rt,setScissorTest:Se,activeTexture:b,bindTexture:_,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Ae,updateUBOMapping:Ve,uniformBlockBinding:ke,texStorage2D:we,texStorage3D:ee,texSubImage2D:X,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Te,scissor:Ce,viewport:me,reset:it}}function uf(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):bs("canvas")}function v(b,_,F){let K=1;const Q=Se(b);if((Q.width>F||Q.height>F)&&(K=F/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(K*Q.width),xe=Math.floor(K*Q.height);u===void 0&&(u=g(X,xe));const oe=_?g(X,xe):u;return oe.width=X,oe.height=xe,oe.getContext("2d").drawImage(b,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+xe+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,_,F,K,Q=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),_===i.RGBA){const xe=Q?Es:Ke.getTransfer(K);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=xe===tt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(b,_){let F;return b?_===null||_===1014||_===1020?F=i.DEPTH24_STENCIL8:_===1015?F=i.DEPTH32F_STENCIL8:_===1012&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===1014||_===1020?F=i.DEPTH_COMPONENT24:_===1015?F=i.DEPTH_COMPONENT32F:_===1012&&(F=i.DEPTH_COMPONENT16),F}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){const _=b.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&h.delete(_)}function w(b){const _=b.target;_.removeEventListener("dispose",w),M(_)}function U(b){const _=n.get(b);if(_.__webglInit===void 0)return;const F=b.source,K=d.get(F);if(K){const Q=K[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(b),Object.keys(K).length===0&&d.delete(F)}n.remove(b)}function y(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const F=b.source,K=d.get(F);delete K[_.__cacheKey],a.memory.textures--}function M(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let Q=0;Q<_.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let K=0,Q=F.length;K<Q;K++){const X=n.get(F[K]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[K])}n.remove(b)}let P=0;function H(){P=0}function k(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function Y(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Z(b,_){const F=n.get(b);if(b.isVideoTexture&&ye(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,b,_);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function q(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){W(F,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function J(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){W(F,b,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function z(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ne(F,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const se={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},ue={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ve={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Ue(b,_){if(_.type===1015&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,se[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===1003||_.minFilter!==1005&&_.minFilter!==1008||_.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));const K=_.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const X=Y(_);if(X!==b.__cacheKey){Q[X]===void 0&&(Q[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[X].usedTimes++;const xe=Q[b.__cacheKey];xe!==void 0&&(Q[b.__cacheKey].usedTimes--,xe.usedTimes===0&&y(_)),b.__cacheKey=X,b.__webglTexture=Q[X].texture}return F}function W(b,_,F){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);const Q=Ye(b,_),X=_.source;t.bindTexture(K,b.__webglTexture,i.TEXTURE0+F);const xe=n.get(X);if(X.version!==xe.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const oe=Ke.getPrimaries(Ke.workingColorSpace),Te=_.colorSpace===""?null:Ke.getPrimaries(_.colorSpace),we=_.colorSpace===""||oe===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ee=v(_.image,!1,s.maxTextureSize);ee=rt(_,ee);const pe=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let Ce=E(_.internalFormat,pe,Ae,_.colorSpace,_.isVideoTexture);Ue(K,_);let me;const Ve=_.mipmaps,ke=_.isVideoTexture!==!0,it=xe.__version===void 0||Q===!0,D=X.dataReady,le=R(_,ee);if(_.isDepthTexture)Ce=S(_.format===1027,_.type),it&&(ke?t.texStorage2D(i.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ee.width,ee.height,0,pe,Ae,null));else if(_.isDataTexture)if(Ve.length>0){ke&&it&&t.texStorage2D(i.TEXTURE_2D,le,Ce,Ve[0].width,Ve[0].height);for(let V=0,j=Ve.length;V<j;V++)me=Ve[V],ke?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,Ae,me.data):t.texImage2D(i.TEXTURE_2D,V,Ce,me.width,me.height,0,pe,Ae,me.data);_.generateMipmaps=!1}else ke?(it&&t.texStorage2D(i.TEXTURE_2D,le,Ce,ee.width,ee.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Ae,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ee.width,ee.height,0,pe,Ae,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ce,Ve[0].width,Ve[0].height,ee.depth);for(let V=0,j=Ve.length;V<j;V++)if(me=Ve[V],_.format!==1023)if(pe!==null)if(ke){if(D)if(_.layerUpdates.size>0){const he=va(me.width,me.height,_.format,_.type);for(const ce of _.layerUpdates){const Ne=me.data.subarray(ce*he/me.data.BYTES_PER_ELEMENT,(ce+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ce,me.width,me.height,1,pe,Ne)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ce,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,ee.depth,pe,Ae,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Ce,me.width,me.height,ee.depth,0,pe,Ae,me.data)}else{ke&&it&&t.texStorage2D(i.TEXTURE_2D,le,Ce,Ve[0].width,Ve[0].height);for(let V=0,j=Ve.length;V<j;V++)me=Ve[V],_.format!==1023?pe!==null?ke?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,Ae,me.data):t.texImage2D(i.TEXTURE_2D,V,Ce,me.width,me.height,0,pe,Ae,me.data)}else if(_.isDataArrayTexture)if(ke){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ce,ee.width,ee.height,ee.depth),D)if(_.layerUpdates.size>0){const V=va(ee.width,ee.height,_.format,_.type);for(const j of _.layerUpdates){const he=ee.data.subarray(j*V/ee.data.BYTES_PER_ELEMENT,(j+1)*V/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,pe,Ae,he)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ae,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,pe,Ae,ee.data);else if(_.isData3DTexture)ke?(it&&t.texStorage3D(i.TEXTURE_3D,le,Ce,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ae,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,pe,Ae,ee.data);else if(_.isFramebufferTexture){if(it)if(ke)t.texStorage2D(i.TEXTURE_2D,le,Ce,ee.width,ee.height);else{let V=ee.width,j=ee.height;for(let he=0;he<le;he++)t.texImage2D(i.TEXTURE_2D,he,Ce,V,j,0,pe,Ae,null),V>>=1,j>>=1}}else if(Ve.length>0){if(ke&&it){const V=Se(Ve[0]);t.texStorage2D(i.TEXTURE_2D,le,Ce,V.width,V.height)}for(let V=0,j=Ve.length;V<j;V++)me=Ve[V],ke?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,pe,Ae,me):t.texImage2D(i.TEXTURE_2D,V,Ce,pe,Ae,me);_.generateMipmaps=!1}else if(ke){if(it){const V=Se(ee);t.texStorage2D(i.TEXTURE_2D,le,Ce,V.width,V.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ae,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ce,pe,Ae,ee);m(_)&&f(K),xe.__version=X.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ne(b,_,F){if(_.image.length!==6)return;const K=Ye(b,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const X=n.get(Q);if(Q.version!==X.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const xe=Ke.getPrimaries(Ke.workingColorSpace),oe=_.colorSpace===""?null:Ke.getPrimaries(_.colorSpace),Te=_.colorSpace===""||xe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!we&&!ee?pe[j]=v(_.image[j],!0,s.maxCubemapSize):pe[j]=ee?_.image[j].image:_.image[j],pe[j]=rt(_,pe[j]);const Ae=pe[0],Ce=r.convert(_.format,_.colorSpace),me=r.convert(_.type),Ve=E(_.internalFormat,Ce,me,_.colorSpace),ke=_.isVideoTexture!==!0,it=X.__version===void 0||K===!0,D=Q.dataReady;let le=R(_,Ae);Ue(i.TEXTURE_CUBE_MAP,_);let V;if(we){ke&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ve,Ae.width,Ae.height);for(let j=0;j<6;j++){V=pe[j].mipmaps;for(let he=0;he<V.length;he++){const ce=V[he];_.format!==1023?Ce!==null?ke?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,ce.width,ce.height,Ce,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,Ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,ce.width,ce.height,Ce,me,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,Ve,ce.width,ce.height,0,Ce,me,ce.data)}}}else{if(V=_.mipmaps,ke&&it){V.length>0&&le++;const j=Se(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ve,j.width,j.height)}for(let j=0;j<6;j++)if(ee){ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Ce,me,pe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ve,pe[j].width,pe[j].height,0,Ce,me,pe[j].data);for(let he=0;he<V.length;he++){const Ne=V[he].image[j].image;ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Ne.width,Ne.height,Ce,me,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,Ve,Ne.width,Ne.height,0,Ce,me,Ne.data)}}else{ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,me,pe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ve,Ce,me,pe[j]);for(let he=0;he<V.length;he++){const ce=V[he];ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Ce,me,ce.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,Ve,Ce,me,ce.image[j])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),X.__version=Q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function de(b,_,F,K,Q,X){const xe=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),Te=E(F.internalFormat,xe,oe,F.colorSpace),we=n.get(_),ee=n.get(F);if(ee.__renderTarget=_,!we.__hasExternalTextures){const pe=Math.max(1,_.width>>X),Ae=Math.max(1,_.height>>X);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,X,Te,pe,Ae,_.depth,0,xe,oe,null):t.texImage2D(Q,X,Te,pe,Ae,0,xe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,ee.__webglTexture,0,We(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,ee.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const K=_.depthTexture,Q=K&&K.isDepthTexture?K.type:null,X=S(_.stencilBuffer,Q),xe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=We(_);He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,b)}else{const K=_.textures;for(let Q=0;Q<K.length;Q++){const X=K[Q],xe=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),Te=E(X.internalFormat,xe,oe,X.colorSpace),we=We(_);F&&He(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Te,_.width,_.height):He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const Q=K.__webglTexture,X=We(_);if(_.depthTexture.format===1026)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===1027)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Oe(b){const _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=K}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const K=b.texture.mipmaps;K&&K.length>0?Me(_.__webglFramebuffer[0],b):Me(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),ie(_.__webglDepthbuffer[K],b,!1);else{const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,X)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ie(_.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(b,_,F){const K=n.get(b);_!==void 0&&de(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Oe(b)}function mt(b){const _=b.texture,F=n.get(b),K=n.get(_);b.addEventListener("dispose",w);const Q=b.textures,X=b.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let Te=0;Te<_.mipmaps.length;Te++)F.__webglFramebuffer[oe][Te]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(xe)for(let oe=0,Te=Q.length;oe<Te;oe++){const we=n.get(Q[oe]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&He(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const Te=Q[oe];F.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const we=r.convert(Te.format,Te.colorSpace),ee=r.convert(Te.type),pe=E(Te.internalFormat,we,ee,Te.colorSpace,b.isXRRenderTarget===!0),Ae=We(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)de(F.__webglFramebuffer[oe][Te],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te);else de(F.__webglFramebuffer[oe],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,Te=Q.length;oe<Te;oe++){const we=Q[oe],ee=n.get(we);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Ue(i.TEXTURE_2D,we),de(F.__webglFramebuffer,b,we,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),m(we)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),Ue(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)de(F.__webglFramebuffer[Te],b,_,i.COLOR_ATTACHMENT0,oe,Te);else de(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,oe,0);m(_)&&f(oe),t.unbindTexture()}b.depthBuffer&&Oe(b)}function ut(b){const _=b.textures;for(let F=0,K=_.length;F<K;F++){const Q=_[F];if(m(Q)){const X=T(b),xe=n.get(Q).__webglTexture;t.bindTexture(X,xe),f(X),t.unbindTexture()}}}const ze=[],C=[];function $t(b){if(b.samples>0){if(He(b)===!1){const _=b.textures,F=b.width,K=b.height;let Q=i.COLOR_BUFFER_BIT;const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(b),oe=_.length>1;if(oe)for(let we=0;we<_.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Te=b.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let we=0;we<_.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[we]);const ee=n.get(_[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,Q,i.NEAREST),l===!0&&(ze.length=0,C.length=0,ze.push(i.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ze.push(X),C.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<_.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,xe.__webglColorRenderbuffer[we]);const ee=n.get(_[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function We(b){return Math.min(s.maxSamples,b.samples)}function He(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ye(b){const _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function rt(b,_){const F=b.colorSpace,K=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==_i&&F!==""&&(Ke.getTransfer(F)===tt?(K!==1023||Q!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Se(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=_e,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=He}function df(i,e){function t(n,s=""){let r;const a=Ke.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ff=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pf=`
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

}`;class mf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wn({vertexShader:ff,fragmentShader:pf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gf extends xi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new mf,m=t.getContextAttributes();let f=null,T=null;const E=[],S=[],R=new Ze;let A=null;const w=new Xt;w.viewport=new nt;const U=new Xt;U.viewport=new nt;const y=[w,U],M=new Nl;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=E[W];return ne===void 0&&(ne=new ir,E[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=E[W];return ne===void 0&&(ne=new ir,E[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=E[W];return ne===void 0&&(ne=new ir,E[W]=ne),ne.getHandSpace()};function k(W){const ne=S.indexOf(W.inputSource);if(ne===-1)return;const de=E[ne];de!==void 0&&(de.update(W.inputSource,W.frame,c||a),de.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let W=0;W<E.length;W++){const ne=S[W];ne!==null&&(S[W]=null,E[W].disconnect(ne))}P=null,H=null,v.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,T=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ie=null,Me=null;m.depth&&(Me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?1027:1026,ie=m.stencil?1020:1014);const Oe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new jn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new vo(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new jn(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(W){for(let ne=0;ne<W.removed.length;ne++){const de=W.removed[ne],ie=S.indexOf(de);ie>=0&&(S[ie]=null,E[ie].disconnect(de))}for(let ne=0;ne<W.added.length;ne++){const de=W.added[ne];let ie=S.indexOf(de);if(ie===-1){for(let Oe=0;Oe<E.length;Oe++)if(Oe>=S.length){S.push(de),ie=Oe;break}else if(S[Oe]===null){S[Oe]=de,ie=Oe;break}if(ie===-1)break}const Me=E[ie];Me&&Me.connect(de)}}const q=new L,J=new L;function z(W,ne,de){q.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const ie=q.distanceTo(J),Me=ne.projectionMatrix.elements,Oe=de.projectionMatrix.elements,_e=Me[14]/(Me[10]-1),mt=Me[14]/(Me[10]+1),ut=(Me[9]+1)/Me[5],ze=(Me[9]-1)/Me[5],C=(Me[8]-1)/Me[0],$t=(Oe[8]+1)/Oe[0],We=_e*C,He=_e*$t,ye=ie/(-C+$t),rt=ye*-C;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(rt),W.translateZ(ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Me[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Se=_e+ye,b=mt+ye,_=We-rt,F=He+(ie-rt),K=ut*mt/b*Se,Q=ze*mt/b*Se;W.projectionMatrix.makePerspective(_,F,K,Q,Se,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function se(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ne=W.near,de=W.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(de=v.depthFar)),M.near=U.near=w.near=ne,M.far=U.far=w.far=de,(P!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far),w.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,M.layers.mask=w.layers.mask|U.layers.mask;const ie=W.parent,Me=M.cameras;se(M,ie);for(let Oe=0;Oe<Me.length;Oe++)se(Me[Oe],ie);Me.length===2?z(M,w,U):M.projectionMatrix.copy(w.projectionMatrix),ue(W,M,ie)};function ue(W,ne,de){de===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=br*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ve=null;function Ue(W,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ie=!1;de.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let _e=0;_e<de.length;_e++){const mt=de[_e];let ut=null;if(p!==null)ut=p.getViewport(mt);else{const C=u.getViewSubImage(d,mt);ut=C.viewport,_e===0&&(e.setRenderTargetTextures(T,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(T))}let ze=y[_e];ze===void 0&&(ze=new Xt,ze.layers.enable(_e),ze.viewport=new nt,y[_e]=ze),ze.matrix.fromArray(mt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(mt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ut.x,ut.y,ut.width,ut.height),_e===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(ze)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const _e=u.getDepthInformation(de[0]);_e&&_e.isValid&&_e.texture&&v.init(e,_e,s.renderState)}}for(let de=0;de<E.length;de++){const ie=S[de],Me=E[de];ie!==null&&Me!==void 0&&Me.update(ie,ne,c||a)}ve&&ve(W,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ye=new So;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function(W){ve=W},this.dispose=function(){}}}const Wn=new fn,_f=new ot;function vf(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,fo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,E,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===1&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===1&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),E=T.envMap,S=T.envMapRotation;E&&(m.envMap.value=E,Wn.copy(S),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),m.envMapRotation.value.setFromMatrix4(_f.makeRotationFromEuler(Wn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xf(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;n.uniformBlockBinding(T,S)}function c(T,E){let S=s[T.id];S===void 0&&(g(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(T,R);const A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function h(T){const E=u();T.__bindingPointIndex=E;const S=i.createBuffer(),R=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=s[T.id],S=T.uniforms,R=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,w=S.length;A<w;A++){const U=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,M=U.length;y<M;y++){const P=U[y];if(p(P,A,y,R)===!0){const H=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let Z=0;Z<k.length;Z++){const q=k[Z],J=v(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,H+Y,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,S,R){const A=T.value,w=E+"_"+S;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const U=R[w];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[w]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(T){const E=T.uniforms;let S=0;const R=16;for(let w=0,U=E.length;w<U;w++){const y=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,P=y.length;M<P;M++){const H=y[M],k=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,Z=k.length;Y<Z;Y++){const q=k[Y],J=v(q),z=S%R,se=z%J.boundary,ue=z+se;S+=se,ue!==0&&R-ue<J.storage&&(S+=R-ue),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=J.storage}}}const A=S%R;return A>0&&(S+=R-A),T.__size=S,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Mf{constructor(e={}){const{canvas:t=qo(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=Ot;let A=0,w=0,U=null,y=-1,M=null;const P=new nt,H=new nt;let k=null;const Y=new Le(0);let Z=0,q=t.width,J=t.height,z=1,se=null,ue=null;const ve=new nt(0,0,q,J),Ue=new nt(0,0,q,J);let Ye=!1;const W=new Lr;let ne=!1,de=!1;const ie=new ot,Me=new ot,Oe=new L,_e=new nt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function ze(){return U===null?z:1}let C=n;function $t(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r176"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){const I="webgl2";if(C=$t(I,x),C===null)throw $t(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let We,He,ye,rt,Se,b,_,F,K,Q,X,xe,oe,Te,we,ee,pe,Ae,Ce,me,Ve,ke,it,D;function le(){We=new Cu(C),We.init(),ke=new df(C,We),He=new yu(C,We,e,ke),ye=new hf(C,We),He.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),rt=new Du(C),Se=new Zd,b=new uf(C,We,ye,Se,He,ke,rt),_=new bu(S),F=new Ru(S),K=new Bl(C),it=new Mu(C,K),Q=new Pu(C,K,rt,it),X=new Uu(C,Q,K,rt),Ce=new Iu(C,He,b),ee=new Eu(Se),xe=new Kd(S,_,F,We,He,it,ee),oe=new vf(S,Se),Te=new Jd,we=new rf(We),Ae=new xu(S,_,F,ye,X,p,l),pe=new lf(S,X,He),D=new xf(C,rt,He,ye),me=new Su(C,We,rt),Ve=new Lu(C,We,rt),rt.programs=xe.programs,S.capabilities=He,S.extensions=We,S.properties=Se,S.renderLists=Te,S.shadowMap=pe,S.state=ye,S.info=rt}le();const V=new gf(S,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=We.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=We.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(x){x!==void 0&&(z=x,this.setSize(q,J,!1))},this.getSize=function(x){return x.set(q,J)},this.setSize=function(x,I,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,J=I,t.width=Math.floor(x*z),t.height=Math.floor(I*z),B===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(q*z,J*z).floor()},this.setDrawingBufferSize=function(x,I,B){q=x,J=I,z=B,t.width=Math.floor(x*B),t.height=Math.floor(I*B),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(ve)},this.setViewport=function(x,I,B,G){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,I,B,G),ye.viewport(P.copy(ve).multiplyScalar(z).round())},this.getScissor=function(x){return x.copy(Ue)},this.setScissor=function(x,I,B,G){x.isVector4?Ue.set(x.x,x.y,x.z,x.w):Ue.set(x,I,B,G),ye.scissor(H.copy(Ue).multiplyScalar(z).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(x){ye.setScissorTest(Ye=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,B=!0){let G=0;if(x){let N=!1;if(U!==null){const te=U.texture.format;N=te===1033||te===1031||te===1029}if(N){const te=U.texture.type,ae=te===1009||te===1014||te===1012||te===1020||te===1017||te===1018,fe=Ae.getClearColor(),ge=Ae.getClearAlpha(),Pe=fe.r,Re=fe.g,Ee=fe.b;ae?(g[0]=Pe,g[1]=Re,g[2]=Ee,g[3]=ge,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Pe,v[1]=Re,v[2]=Ee,v[3]=ge,C.clearBufferiv(C.COLOR,0,v))}else G|=C.COLOR_BUFFER_BIT}I&&(G|=C.DEPTH_BUFFER_BIT),B&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ae.dispose(),Te.dispose(),we.dispose(),Se.dispose(),_.dispose(),F.dispose(),X.dispose(),it.dispose(),D.dispose(),xe.dispose(),V.dispose(),V.removeEventListener("sessionstart",Fr),V.removeEventListener("sessionend",kr),kn.stop()};function j(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const x=rt.autoReset,I=pe.enabled,B=pe.autoUpdate,G=pe.needsUpdate,N=pe.type;le(),rt.autoReset=x,pe.enabled=I,pe.autoUpdate=B,pe.needsUpdate=G,pe.type=N}function ce(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ne(x){const I=x.target;I.removeEventListener("dispose",Ne),dt(I)}function dt(x){Rt(x),Se.remove(x)}function Rt(x){const I=Se.get(x).programs;I!==void 0&&(I.forEach(function(B){xe.releaseProgram(B)}),x.isShaderMaterial&&xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,B,G,N,te){I===null&&(I=mt);const ae=N.isMesh&&N.matrixWorld.determinant()<0,fe=ko(x,I,B,G,N);ye.setMaterial(G,ae);let ge=B.index,Pe=1;if(G.wireframe===!0){if(ge=Q.getWireframeAttribute(B),ge===void 0)return;Pe=2}const Re=B.drawRange,Ee=B.attributes.position;let Xe=Re.start*Pe,je=(Re.start+Re.count)*Pe;te!==null&&(Xe=Math.max(Xe,te.start*Pe),je=Math.min(je,(te.start+te.count)*Pe)),ge!==null?(Xe=Math.max(Xe,0),je=Math.min(je,ge.count)):Ee!=null&&(Xe=Math.max(Xe,0),je=Math.min(je,Ee.count));const _t=je-Xe;if(_t<0||_t===1/0)return;it.setup(N,G,fe,B,ge);let ft,$e=me;if(ge!==null&&(ft=K.get(ge),$e=Ve,$e.setIndex(ft)),N.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*ze()),$e.setMode(C.LINES)):$e.setMode(C.TRIANGLES);else if(N.isLine){let be=G.linewidth;be===void 0&&(be=1),ye.setLineWidth(be*ze()),N.isLineSegments?$e.setMode(C.LINES):N.isLineLoop?$e.setMode(C.LINE_LOOP):$e.setMode(C.LINE_STRIP)}else N.isPoints?$e.setMode(C.POINTS):N.isSprite&&$e.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))$e.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,Tt=N._multiDrawCounts,Je=N._multiDrawCount,nn=ge?K.get(ge).bytesPerElement:1,Qn=Se.get(G).currentProgram.getUniforms();for(let Gt=0;Gt<Je;Gt++)Qn.setValue(C,"_gl_DrawID",Gt),$e.render(be[Gt]/nn,Tt[Gt])}else if(N.isInstancedMesh)$e.renderInstances(Xe,_t,N.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Tt=Math.min(B.instanceCount,be);$e.renderInstances(Xe,_t,Tt)}else $e.render(Xe,_t)};function et(x,I,B){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,zi(x,I,B),x.side=0,x.needsUpdate=!0,zi(x,I,B),x.side=2):zi(x,I,B)}this.compile=function(x,I,B=null){B===null&&(B=x),f=we.get(B),f.init(I),E.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),x!==B&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const G=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let ae=0;ae<te.length;ae++){const fe=te[ae];et(fe,B,N),G.add(fe)}else et(te,B,N),G.add(te)}),f=E.pop(),G},this.compileAsync=function(x,I,B=null){const G=this.compile(x,I,B);return new Promise(N=>{function te(){if(G.forEach(function(ae){Se.get(ae).currentProgram.isReady()&&G.delete(ae)}),G.size===0){N(x);return}setTimeout(te,10)}We.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let tn=null;function pn(x){tn&&tn(x)}function Fr(){kn.stop()}function kr(){kn.start()}const kn=new So;kn.setAnimationLoop(pn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(x){tn=x,V.setAnimationLoop(x),x===null?kn.stop():kn.start()},V.addEventListener("sessionstart",Fr),V.addEventListener("sessionend",kr),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,U),f=we.get(x,E.length),f.init(I),E.push(f),Me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(Me),de=this.localClippingEnabled,ne=ee.init(this.clippingPlanes,de),m=Te.get(x,T.length),m.init(),T.push(m),V.enabled===!0&&V.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&Ns(te,I,-1/0,S.sortObjects)}Ns(x,I,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(se,ue),ut=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ut&&Ae.addToRenderList(m,x),this.info.render.frame++,ne===!0&&ee.beginShadows();const B=f.state.shadowsArray;pe.render(B,x,I),ne===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(f.setupLights(),I.isArrayCamera){const te=I.cameras;if(N.length>0)for(let ae=0,fe=te.length;ae<fe;ae++){const ge=te[ae];Or(G,N,x,ge)}ut&&Ae.render(x);for(let ae=0,fe=te.length;ae<fe;ae++){const ge=te[ae];Br(m,x,ge,ge.viewport)}}else N.length>0&&Or(G,N,x,I),ut&&Ae.render(x),Br(m,x,I);U!==null&&w===0&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,I),it.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],ne===!0&&ee.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ns(x,I,B,G){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||W.intersectsSprite(x)){G&&_e.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Me);const ae=X.update(x),fe=x.material;fe.visible&&m.push(x,ae,fe,B,_e.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||W.intersectsObject(x))){const ae=X.update(x),fe=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),_e.copy(x.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),_e.copy(ae.boundingSphere.center)),_e.applyMatrix4(x.matrixWorld).applyMatrix4(Me)),Array.isArray(fe)){const ge=ae.groups;for(let Pe=0,Re=ge.length;Pe<Re;Pe++){const Ee=ge[Pe],Xe=fe[Ee.materialIndex];Xe&&Xe.visible&&m.push(x,ae,Xe,B,_e.z,Ee)}}else fe.visible&&m.push(x,ae,fe,B,_e.z,null)}}const te=x.children;for(let ae=0,fe=te.length;ae<fe;ae++)Ns(te[ae],I,B,G)}function Br(x,I,B,G){const N=x.opaque,te=x.transmissive,ae=x.transparent;f.setupLightsView(B),ne===!0&&ee.setGlobalState(S.clippingPlanes,B),G&&ye.viewport(P.copy(G)),N.length>0&&Gi(N,I,B),te.length>0&&Gi(te,I,B),ae.length>0&&Gi(ae,I,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Or(x,I,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new jn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const te=f.state.transmissionRenderTarget[G.id],ae=G.viewport||P;te.setSize(ae.z*S.transmissionResolutionScale,ae.w*S.transmissionResolutionScale);const fe=S.getRenderTarget();S.setRenderTarget(te),S.getClearColor(Y),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),ut&&Ae.render(B);const ge=S.toneMapping;S.toneMapping=0;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ne===!0&&ee.setGlobalState(S.clippingPlanes,G),Gi(x,B,G),b.updateMultisampleRenderTarget(te),b.updateRenderTargetMipmap(te),We.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,Xe=I.length;Ee<Xe;Ee++){const je=I[Ee],_t=je.object,ft=je.geometry,$e=je.material,be=je.group;if($e.side===2&&_t.layers.test(G.layers)){const Tt=$e.side;$e.side=1,$e.needsUpdate=!0,Gr(_t,B,G,ft,$e,be),$e.side=Tt,$e.needsUpdate=!0,Re=!0}}Re===!0&&(b.updateMultisampleRenderTarget(te),b.updateRenderTargetMipmap(te))}S.setRenderTarget(fe),S.setClearColor(Y,Z),Pe!==void 0&&(G.viewport=Pe),S.toneMapping=ge}function Gi(x,I,B){const G=I.isScene===!0?I.overrideMaterial:null;for(let N=0,te=x.length;N<te;N++){const ae=x[N],fe=ae.object,ge=ae.geometry,Pe=ae.group;let Re=ae.material;Re.allowOverride===!0&&G!==null&&(Re=G),fe.layers.test(B.layers)&&Gr(fe,I,B,ge,Re,Pe)}}function Gr(x,I,B,G,N,te){x.onBeforeRender(S,I,B,G,N,te),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,I,B,G,x,te),N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,S.renderBufferDirect(B,I,G,N,x,te),N.side=0,N.needsUpdate=!0,S.renderBufferDirect(B,I,G,N,x,te),N.side=2):S.renderBufferDirect(B,I,G,N,x,te),x.onAfterRender(S,I,B,G,N,te)}function zi(x,I,B){I.isScene!==!0&&(I=mt);const G=Se.get(x),N=f.state.lights,te=f.state.shadowsArray,ae=N.state.version,fe=xe.getParameters(x,N.state,te,I,B),ge=xe.getProgramCacheKey(fe);let Pe=G.programs;G.environment=x.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(x.isMeshStandardMaterial?F:_).get(x.envMap||G.environment),G.envMapRotation=G.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",Ne),Pe=new Map,G.programs=Pe);let Re=Pe.get(ge);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===ae)return Hr(x,fe),Re}else fe.uniforms=xe.getUniforms(x),x.onBeforeCompile(fe,S),Re=xe.acquireProgram(fe,ge),Pe.set(ge,Re),G.uniforms=fe.uniforms;const Ee=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),Hr(x,fe),G.needsLights=Oo(x),G.lightsStateVersion=ae,G.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Re,G.uniformsList=null,Re}function zr(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Ms.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Hr(x,I){const B=Se.get(x);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function ko(x,I,B,G,N){I.isScene!==!0&&(I=mt),b.resetTextureUnits();const te=I.fog,ae=G.isMeshStandardMaterial?I.environment:null,fe=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_i,ge=(G.isMeshStandardMaterial?F:_).get(G.envMap||ae),Pe=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,je=!!B.morphAttributes.color;let _t=0;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_t=S.toneMapping);const ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$e=ft!==void 0?ft.length:0,be=Se.get(G),Tt=f.state.lights;if(ne===!0&&(de===!0||x!==M)){const Dt=x===M&&G.id===y;ee.setState(G,x,Dt)}let Je=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Tt.state.version||be.outputColorSpace!==fe||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==ge||G.fog===!0&&be.fog!==te||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ee.numPlanes||be.numIntersection!==ee.numIntersection)||be.vertexAlphas!==Pe||be.vertexTangents!==Re||be.morphTargets!==Ee||be.morphNormals!==Xe||be.morphColors!==je||be.toneMapping!==_t||be.morphTargetsCount!==$e)&&(Je=!0):(Je=!0,be.__version=G.version);let nn=be.currentProgram;Je===!0&&(nn=zi(G,I,N));let Qn=!1,Gt=!1,Si=!1;const lt=nn.getUniforms(),Kt=be.uniforms;if(ye.useProgram(nn.program)&&(Qn=!0,Gt=!0,Si=!0),G.id!==y&&(y=G.id,Gt=!0),Qn||M!==x){ye.buffers.depth.getReversed()?(ie.copy(x.projectionMatrix),$o(ie),Ko(ie),lt.setValue(C,"projectionMatrix",ie)):lt.setValue(C,"projectionMatrix",x.projectionMatrix),lt.setValue(C,"viewMatrix",x.matrixWorldInverse);const Ft=lt.map.cameraPosition;Ft!==void 0&&Ft.setValue(C,Oe.setFromMatrixPosition(x.matrixWorld)),He.logarithmicDepthBuffer&&lt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Gt=!0,Si=!0)}if(N.isSkinnedMesh){lt.setOptional(C,N,"bindMatrix"),lt.setOptional(C,N,"bindMatrixInverse");const Dt=N.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),lt.setValue(C,"boneTexture",Dt.boneTexture,b))}N.isBatchedMesh&&(lt.setOptional(C,N,"batchingTexture"),lt.setValue(C,"batchingTexture",N._matricesTexture,b),lt.setOptional(C,N,"batchingIdTexture"),lt.setValue(C,"batchingIdTexture",N._indirectTexture,b),lt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(C,"batchingColorTexture",N._colorsTexture,b));const Zt=B.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Ce.update(N,B,nn),(Gt||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,lt.setValue(C,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Kt.envMap.value=ge,Kt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(Kt.envMapIntensity.value=I.environmentIntensity),Gt&&(lt.setValue(C,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&Bo(Kt,Si),te&&G.fog===!0&&oe.refreshFogUniforms(Kt,te),oe.refreshMaterialUniforms(Kt,G,z,J,f.state.transmissionRenderTarget[x.id]),Ms.upload(C,zr(be),Kt,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ms.upload(C,zr(be),Kt,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(C,"center",N.center),lt.setValue(C,"modelViewMatrix",N.modelViewMatrix),lt.setValue(C,"normalMatrix",N.normalMatrix),lt.setValue(C,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Dt=G.uniformsGroups;for(let Ft=0,Fs=Dt.length;Ft<Fs;Ft++){const Bn=Dt[Ft];D.update(Bn,nn),D.bind(Bn,nn)}}return nn}function Bo(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Oo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,I,B){const G=Se.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Se.get(x.texture).__webglTexture=I,Se.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:B,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const B=Se.get(x);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0};const Go=C.createFramebuffer();this.setRenderTarget=function(x,I=0,B=0){U=x,A=I,w=B;let G=!0,N=null,te=!1,ae=!1;if(x){const ge=Se.get(x);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(ge.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(ge.__hasExternalTextures)b.rebindTextures(x,Se.get(x.texture).__webglTexture,Se.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ee=x.depthTexture;if(ge.__boundDepthTexture!==Ee){if(Ee!==null&&Se.has(Ee)&&(x.width!==Ee.image.width||x.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ae=!0);const Re=Se.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?N=Re[I][B]:N=Re[I],te=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?N=Se.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[B]:N=Re,P.copy(x.viewport),H.copy(x.scissor),k=x.scissorTest}else P.copy(ve).multiplyScalar(z).floor(),H.copy(Ue).multiplyScalar(z).floor(),k=Ye;if(B!==0&&(N=Go),ye.bindFramebuffer(C.FRAMEBUFFER,N)&&G&&ye.drawBuffers(x,N),ye.viewport(P),ye.scissor(H),ye.setScissorTest(k),te){const ge=Se.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,B)}else if(ae){const ge=Se.get(x.texture),Pe=I;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.__webglTexture,B,Pe)}else if(x!==null&&B!==0){const ge=Se.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ge.__webglTexture,B)}y=-1},this.readRenderTargetPixels=function(x,I,B,G,N,te,ae){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){ye.bindFramebuffer(C.FRAMEBUFFER,fe);try{const ge=x.texture,Pe=ge.format,Re=ge.type;if(!He.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-G&&B>=0&&B<=x.height-N&&C.readPixels(I,B,G,N,ke.convert(Pe),ke.convert(Re),te)}finally{const ge=U!==null?Se.get(U).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(x,I,B,G,N,te,ae){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe)if(I>=0&&I<=x.width-G&&B>=0&&B<=x.height-N){ye.bindFramebuffer(C.FRAMEBUFFER,fe);const ge=x.texture,Pe=ge.format,Re=ge.type;if(!He.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.bufferData(C.PIXEL_PACK_BUFFER,te.byteLength,C.STREAM_READ),C.readPixels(I,B,G,N,ke.convert(Pe),ke.convert(Re),0);const Xe=U!==null?Se.get(U).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,Xe);const je=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Yo(C,je,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,te),C.deleteBuffer(Ee),C.deleteSync(je),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,B=0){const G=Math.pow(2,-B),N=Math.floor(x.image.width*G),te=Math.floor(x.image.height*G),ae=I!==null?I.x:0,fe=I!==null?I.y:0;b.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ae,fe,N,te),ye.unbindTexture()};const zo=C.createFramebuffer(),Ho=C.createFramebuffer();this.copyTextureToTexture=function(x,I,B=null,G=null,N=0,te=null){te===null&&(N!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let ae,fe,ge,Pe,Re,Ee,Xe,je,_t;const ft=x.isCompressedTexture?x.mipmaps[te]:x.image;if(B!==null)ae=B.max.x-B.min.x,fe=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,Pe=B.min.x,Re=B.min.y,Ee=B.isBox3?B.min.z:0;else{const Zt=Math.pow(2,-N);ae=Math.floor(ft.width*Zt),fe=Math.floor(ft.height*Zt),x.isDataArrayTexture?ge=ft.depth:x.isData3DTexture?ge=Math.floor(ft.depth*Zt):ge=1,Pe=0,Re=0,Ee=0}G!==null?(Xe=G.x,je=G.y,_t=G.z):(Xe=0,je=0,_t=0);const $e=ke.convert(I.format),be=ke.convert(I.type);let Tt;I.isData3DTexture?(b.setTexture3D(I,0),Tt=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),Tt=C.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),Tt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const Je=C.getParameter(C.UNPACK_ROW_LENGTH),nn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qn=C.getParameter(C.UNPACK_SKIP_PIXELS),Gt=C.getParameter(C.UNPACK_SKIP_ROWS),Si=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ft.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ft.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Re),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee);const lt=x.isDataArrayTexture||x.isData3DTexture,Kt=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Zt=Se.get(x),Dt=Se.get(I),Ft=Se.get(Zt.__renderTarget),Fs=Se.get(Dt.__renderTarget);ye.bindFramebuffer(C.READ_FRAMEBUFFER,Ft.__webglFramebuffer),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let Bn=0;Bn<ge;Bn++)lt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Se.get(x).__webglTexture,N,Ee+Bn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Se.get(I).__webglTexture,te,_t+Bn)),C.blitFramebuffer(Pe,Re,ae,fe,Xe,je,ae,fe,C.DEPTH_BUFFER_BIT,C.NEAREST);ye.bindFramebuffer(C.READ_FRAMEBUFFER,null),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||Se.has(x)){const Zt=Se.get(x),Dt=Se.get(I);ye.bindFramebuffer(C.READ_FRAMEBUFFER,zo),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ho);for(let Ft=0;Ft<ge;Ft++)lt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Zt.__webglTexture,N,Ee+Ft):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Zt.__webglTexture,N),Kt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,te,_t+Ft):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Dt.__webglTexture,te),N!==0?C.blitFramebuffer(Pe,Re,ae,fe,Xe,je,ae,fe,C.COLOR_BUFFER_BIT,C.NEAREST):Kt?C.copyTexSubImage3D(Tt,te,Xe,je,_t+Ft,Pe,Re,ae,fe):C.copyTexSubImage2D(Tt,te,Xe,je,Pe,Re,ae,fe);ye.bindFramebuffer(C.READ_FRAMEBUFFER,null),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Kt?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(Tt,te,Xe,je,_t,ae,fe,ge,$e,be,ft.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Tt,te,Xe,je,_t,ae,fe,ge,$e,ft.data):C.texSubImage3D(Tt,te,Xe,je,_t,ae,fe,ge,$e,be,ft):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,te,Xe,je,ae,fe,$e,be,ft.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,te,Xe,je,ft.width,ft.height,$e,ft.data):C.texSubImage2D(C.TEXTURE_2D,te,Xe,je,ae,fe,$e,be,ft);C.pixelStorei(C.UNPACK_ROW_LENGTH,Je),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Si),te===0&&I.generateMipmaps&&C.generateMipmap(Tt),ye.unbindTexture()},this.copyTextureToTexture3D=function(x,I,B=null,G=null,N=0){return xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,B,G,N)},this.initRenderTarget=function(x){Se.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){A=0,w=0,U=null,ye.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const De=16,pt=72,Wt=24,Sf=3;var $=(i=>(i[i.Air=0]="Air",i[i.Grass=1]="Grass",i[i.Dirt=2]="Dirt",i[i.Stone=3]="Stone",i[i.Sand=4]="Sand",i[i.Water=5]="Water",i[i.Log=6]="Log",i[i.Leaves=7]="Leaves",i[i.Ore=8]="Ore",i[i.Brick=9]="Brick",i[i.Planks=10]="Planks",i[i.CraftingTable=11]="CraftingTable",i[i.CoalOre=12]="CoalOre",i[i.CopperOre=13]="CopperOre",i[i.IronOre=14]="IronOre",i[i.GoldOre=15]="GoldOre",i[i.RedstoneOre=16]="RedstoneOre",i[i.LapisOre=17]="LapisOre",i[i.DiamondOre=18]="DiamondOre",i[i.EmeraldOre=19]="EmeraldOre",i[i.Furnace=20]="Furnace",i[i.Chest=21]="Chest",i[i.Torch=22]="Torch",i[i.Gravel=23]="Gravel",i[i.Bed=24]="Bed",i))($||{}),Ie=(i=>(i[i.GrassTop=0]="GrassTop",i[i.GrassSide=1]="GrassSide",i[i.Dirt=2]="Dirt",i[i.Stone=3]="Stone",i[i.Sand=4]="Sand",i[i.Water=5]="Water",i[i.LogSide=6]="LogSide",i[i.LogTop=7]="LogTop",i[i.Leaves=8]="Leaves",i[i.Ore=9]="Ore",i[i.Brick=10]="Brick",i[i.Planks=11]="Planks",i[i.CraftingTable=12]="CraftingTable",i[i.CoalOre=13]="CoalOre",i[i.CopperOre=14]="CopperOre",i[i.IronOre=15]="IronOre",i[i.GoldOre=16]="GoldOre",i[i.RedstoneOre=17]="RedstoneOre",i[i.LapisOre=18]="LapisOre",i[i.DiamondOre=19]="DiamondOre",i[i.EmeraldOre=20]="EmeraldOre",i[i.FurnaceFront=21]="FurnaceFront",i[i.FurnaceSide=22]="FurnaceSide",i[i.Chest=23]="Chest",i[i.Torch=24]="Torch",i[i.Gravel=25]="Gravel",i[i.Bed=26]="Bed",i))(Ie||{});const gt=i=>({top:i,bottom:i,north:i,south:i,east:i,west:i}),bn={0:{id:"air",displayName:"공기",solid:!1,transparent:!0,fluid:!1,swatch:"#000000",tiles:gt(2),hardness:0,drops:null},1:{id:"grass",displayName:"잔디",solid:!0,transparent:!1,fluid:!1,swatch:"#6eb45f",hardness:.6,drops:"dirt",preferredTool:"shovel",placeableItem:"grass_block",tiles:{top:0,bottom:2,north:1,south:1,east:1,west:1}},2:{id:"dirt",displayName:"흙",solid:!0,transparent:!1,fluid:!1,swatch:"#8c6241",tiles:gt(2),hardness:.5,drops:"dirt",preferredTool:"shovel",placeableItem:"dirt"},3:{id:"stone",displayName:"돌",solid:!0,transparent:!1,fluid:!1,swatch:"#8b9290",tiles:gt(3),hardness:1.5,drops:"stone",preferredTool:"pickaxe",requiredTool:"pickaxe",placeableItem:"stone"},4:{id:"sand",displayName:"모래",solid:!0,transparent:!1,fluid:!1,swatch:"#d9c987",tiles:gt(4),hardness:.5,drops:"sand",preferredTool:"shovel",placeableItem:"sand"},5:{id:"water",displayName:"물",solid:!1,transparent:!0,fluid:!0,swatch:"#3f9fd0",tiles:gt(5),hardness:100,drops:"water",placeableItem:"water"},6:{id:"log",displayName:"원목",solid:!0,transparent:!1,fluid:!1,swatch:"#8a6038",hardness:2,drops:"log",preferredTool:"axe",placeableItem:"log",tiles:{top:7,bottom:7,north:6,south:6,east:6,west:6}},7:{id:"leaves",displayName:"나뭇잎",solid:!0,transparent:!1,fluid:!1,swatch:"#4e9b5a",tiles:gt(8),hardness:.2,drops:"leaves",placeableItem:"leaves"},8:{id:"ore",displayName:"구형 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#62c2c9",tiles:gt(9),hardness:3,drops:"ore",preferredTool:"pickaxe",requiredTool:"pickaxe",placeableItem:"ore"},9:{id:"brick",displayName:"벽돌 블록",solid:!0,transparent:!1,fluid:!1,swatch:"#a8574f",tiles:gt(10),hardness:2,drops:"brick",preferredTool:"pickaxe",placeableItem:"brick"},10:{id:"planks",displayName:"나무 판자",solid:!0,transparent:!1,fluid:!1,swatch:"#b9854b",tiles:gt(11),hardness:2,drops:"planks",preferredTool:"axe",placeableItem:"planks"},11:{id:"crafting_table",displayName:"제작대",solid:!0,transparent:!1,fluid:!1,swatch:"#a46d3d",tiles:{top:12,bottom:11,north:12,south:12,east:12,west:12},hardness:2.5,drops:"crafting_table",preferredTool:"axe",placeableItem:"crafting_table",interactable:"crafting_table"},12:{id:"coal_ore",displayName:"석탄 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#4b4d4b",tiles:gt(13),hardness:3,drops:"coal",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"coal_ore"},13:{id:"copper_ore",displayName:"구리 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#a76846",tiles:gt(14),hardness:3,drops:"raw_copper",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"stone",placeableItem:"copper_ore"},14:{id:"iron_ore",displayName:"철 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#b08f75",tiles:gt(15),hardness:3,drops:"raw_iron",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"stone",placeableItem:"iron_ore"},15:{id:"gold_ore",displayName:"금 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#d6aa35",tiles:gt(16),hardness:3,drops:"raw_gold",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"iron",placeableItem:"gold_ore"},16:{id:"redstone_ore",displayName:"레드스톤 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#b53634",tiles:gt(17),hardness:3,drops:"redstone_dust",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"iron",placeableItem:"redstone_ore"},17:{id:"lapis_ore",displayName:"청금석 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#345dbc",tiles:gt(18),hardness:3,drops:"lapis_lazuli",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"stone",placeableItem:"lapis_ore"},18:{id:"diamond_ore",displayName:"다이아몬드 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#58d6d0",tiles:gt(19),hardness:3,drops:"diamond",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"iron",placeableItem:"diamond_ore"},19:{id:"emerald_ore",displayName:"에메랄드 광석",solid:!0,transparent:!1,fluid:!1,swatch:"#45bf62",tiles:gt(20),hardness:3,drops:"emerald",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"iron",placeableItem:"emerald_ore"},20:{id:"furnace",displayName:"화로",solid:!0,transparent:!1,fluid:!1,swatch:"#686e6b",tiles:{top:22,bottom:22,north:21,south:21,east:22,west:22},hardness:3.5,drops:"furnace",preferredTool:"pickaxe",requiredTool:"pickaxe",requiredTier:"wood",placeableItem:"furnace",interactable:"furnace"},21:{id:"chest",displayName:"상자",solid:!0,transparent:!1,fluid:!1,swatch:"#9b642f",tiles:gt(23),hardness:2.5,drops:"chest",preferredTool:"axe",placeableItem:"chest",interactable:"chest"},22:{id:"torch",displayName:"횃불",solid:!1,transparent:!0,fluid:!1,swatch:"#f0a83c",tiles:gt(24),hardness:.1,drops:"torch",placeableItem:"torch"},23:{id:"gravel",displayName:"자갈",solid:!0,transparent:!1,fluid:!1,swatch:"#7a7c7a",tiles:gt(25),hardness:.6,drops:"gravel",preferredTool:"shovel",placeableItem:"gravel"},24:{id:"bed",displayName:"침대",solid:!0,transparent:!1,fluid:!1,swatch:"#c94646",tiles:gt(26),hardness:.4,drops:"bed",preferredTool:"axe",placeableItem:"bed",interactable:"bed"}};function mr(i,e,t){return`${i},${e},${t}`}function Va(i){const[e,t,n]=i.split(",").map(Number);return[e,t,n]}function yf(i){return i!==0}function Ss(i){return bn[i].solid}const st={grass_block:{id:"grass_block",name:"잔디 블록",maxStack:64,color:"#67ad58",placeBlock:$.Grass},dirt:{id:"dirt",name:"흙",maxStack:64,color:"#7b5237",placeBlock:$.Dirt},stone:{id:"stone",name:"돌",maxStack:64,color:"#858d8a",placeBlock:$.Stone},sand:{id:"sand",name:"모래",maxStack:64,color:"#d4c682",placeBlock:$.Sand},gravel:{id:"gravel",name:"자갈",maxStack:64,color:"#7a7c7a",placeBlock:$.Gravel},water:{id:"water",name:"물",maxStack:64,color:"#2e9bc9",placeBlock:$.Water},log:{id:"log",name:"원목",maxStack:64,color:"#805331",placeBlock:$.Log},leaves:{id:"leaves",name:"나뭇잎",maxStack:64,color:"#448f50",placeBlock:$.Leaves},ore:{id:"ore",name:"구형 광석",maxStack:64,color:"#59bdc4",placeBlock:$.Ore},brick:{id:"brick",name:"벽돌 블록",maxStack:64,color:"#a65049",placeBlock:$.Brick},planks:{id:"planks",name:"나무 판자",maxStack:64,color:"#b9854b",placeBlock:$.Planks},stick:{id:"stick",name:"막대기",maxStack:64,color:"#b98a55"},crafting_table:{id:"crafting_table",name:"제작대",maxStack:64,color:"#a46d3d",placeBlock:$.CraftingTable},coal_ore:{id:"coal_ore",name:"석탄 광석",maxStack:64,color:"#4b4d4b",placeBlock:$.CoalOre},copper_ore:{id:"copper_ore",name:"구리 광석",maxStack:64,color:"#a76846",placeBlock:$.CopperOre},iron_ore:{id:"iron_ore",name:"철 광석",maxStack:64,color:"#b08f75",placeBlock:$.IronOre},gold_ore:{id:"gold_ore",name:"금 광석",maxStack:64,color:"#d6aa35",placeBlock:$.GoldOre},redstone_ore:{id:"redstone_ore",name:"레드스톤 광석",maxStack:64,color:"#b53634",placeBlock:$.RedstoneOre},lapis_ore:{id:"lapis_ore",name:"청금석 광석",maxStack:64,color:"#345dbc",placeBlock:$.LapisOre},diamond_ore:{id:"diamond_ore",name:"다이아몬드 광석",maxStack:64,color:"#58d6d0",placeBlock:$.DiamondOre},emerald_ore:{id:"emerald_ore",name:"에메랄드 광석",maxStack:64,color:"#45bf62",placeBlock:$.EmeraldOre},coal:{id:"coal",name:"석탄",maxStack:64,color:"#2e3130"},raw_copper:{id:"raw_copper",name:"구리 원석",maxStack:64,color:"#c9794a"},raw_iron:{id:"raw_iron",name:"철 원석",maxStack:64,color:"#c2a38d"},raw_gold:{id:"raw_gold",name:"금 원석",maxStack:64,color:"#e1b845"},copper_ingot:{id:"copper_ingot",name:"구리 주괴",maxStack:64,color:"#d98b5a"},iron_ingot:{id:"iron_ingot",name:"철 주괴",maxStack:64,color:"#c9d1d1"},gold_ingot:{id:"gold_ingot",name:"금 주괴",maxStack:64,color:"#f0c747"},redstone_dust:{id:"redstone_dust",name:"레드스톤 가루",maxStack:64,color:"#d8423a"},lapis_lazuli:{id:"lapis_lazuli",name:"청금석",maxStack:64,color:"#365bc8"},diamond:{id:"diamond",name:"다이아몬드",maxStack:64,color:"#65e0dc"},emerald:{id:"emerald",name:"에메랄드",maxStack:64,color:"#4bd66d"},furnace:{id:"furnace",name:"화로",maxStack:64,color:"#686e6b",placeBlock:$.Furnace},chest:{id:"chest",name:"상자",maxStack:64,color:"#9b642f",placeBlock:$.Chest},torch:{id:"torch",name:"횃불",maxStack:64,color:"#f0a83c",placeBlock:$.Torch},bed:{id:"bed",name:"침대",maxStack:1,color:"#c94646",placeBlock:$.Bed},wooden_pickaxe:{id:"wooden_pickaxe",name:"나무 곡괭이",maxStack:1,color:"#c28a4e",toolKind:"pickaxe",toolTier:"wood",miningSpeed:2.2,durability:59,combat:{damage:3,cooldown:.9}},stone_pickaxe:{id:"stone_pickaxe",name:"돌 곡괭이",maxStack:1,color:"#9aa09d",toolKind:"pickaxe",toolTier:"stone",miningSpeed:4,durability:131,combat:{damage:4,cooldown:.9}},iron_pickaxe:{id:"iron_pickaxe",name:"철 곡괭이",maxStack:1,color:"#c7d0cf",toolKind:"pickaxe",toolTier:"iron",miningSpeed:6,durability:250,combat:{damage:5,cooldown:.9}},diamond_pickaxe:{id:"diamond_pickaxe",name:"다이아몬드 곡괭이",maxStack:1,color:"#65e0dc",toolKind:"pickaxe",toolTier:"diamond",miningSpeed:8,durability:1561,combat:{damage:6,cooldown:.9}},wooden_axe:{id:"wooden_axe",name:"나무 도끼",maxStack:1,color:"#c28a4e",toolKind:"axe",toolTier:"wood",miningSpeed:2,durability:59,combat:{damage:7,cooldown:1.25}},stone_axe:{id:"stone_axe",name:"돌 도끼",maxStack:1,color:"#9aa09d",toolKind:"axe",toolTier:"stone",miningSpeed:4,durability:131,combat:{damage:8,cooldown:1.3}},wooden_shovel:{id:"wooden_shovel",name:"나무 삽",maxStack:1,color:"#c28a4e",toolKind:"shovel",toolTier:"wood",miningSpeed:2,durability:59,combat:{damage:2.5,cooldown:.85}},stone_shovel:{id:"stone_shovel",name:"돌 삽",maxStack:1,color:"#9aa09d",toolKind:"shovel",toolTier:"stone",miningSpeed:4,durability:131,combat:{damage:3.5,cooldown:.85}},wooden_sword:{id:"wooden_sword",name:"나무 검",maxStack:1,color:"#b9854b",toolKind:"sword",toolTier:"wood",durability:59,combat:{damage:4,cooldown:.62,range:4.8}},stone_sword:{id:"stone_sword",name:"돌 검",maxStack:1,color:"#9aa09d",toolKind:"sword",toolTier:"stone",durability:131,combat:{damage:5,cooldown:.62,range:4.8}},copper_sword:{id:"copper_sword",name:"구리 검",maxStack:1,color:"#d98b5a",toolKind:"sword",toolTier:"copper",durability:191,combat:{damage:5,cooldown:.6,range:4.8}},iron_sword:{id:"iron_sword",name:"철 검",maxStack:1,color:"#c9d1d1",toolKind:"sword",toolTier:"iron",durability:250,combat:{damage:6,cooldown:.6,range:4.8}},golden_sword:{id:"golden_sword",name:"금 검",maxStack:1,color:"#f0c747",toolKind:"sword",toolTier:"gold",durability:32,combat:{damage:4,cooldown:.52,range:4.8}},diamond_sword:{id:"diamond_sword",name:"다이아몬드 검",maxStack:1,color:"#65e0dc",toolKind:"sword",toolTier:"diamond",durability:1561,combat:{damage:7,cooldown:.56,range:5}},bow:{id:"bow",name:"활",maxStack:1,color:"#9b6638",toolKind:"bow",durability:384,combat:{damage:5,cooldown:.9,range:30}},arrow:{id:"arrow",name:"화살",maxStack:64,color:"#d8d3c0",projectile:{damage:5}},shield:{id:"shield",name:"방패",maxStack:1,color:"#a9763d",toolKind:"shield",durability:336,equipSlot:"offhand"},shears:{id:"shears",name:"가위",maxStack:1,color:"#c9d1d1",toolKind:"shears",toolTier:"iron",durability:238,combat:{damage:2,cooldown:.75}},leather_helmet:ct("leather_helmet","가죽 모자","#8f5b3c","head",1,0,55),leather_chestplate:ct("leather_chestplate","가죽 튜닉","#8f5b3c","chest",3,0,80),leather_leggings:ct("leather_leggings","가죽 바지","#8f5b3c","legs",2,0,75),leather_boots:ct("leather_boots","가죽 장화","#8f5b3c","feet",1,0,65),copper_helmet:ct("copper_helmet","구리 투구","#d98b5a","head",2,0,121),copper_chestplate:ct("copper_chestplate","구리 흉갑","#d98b5a","chest",5,0,176),copper_leggings:ct("copper_leggings","구리 각반","#d98b5a","legs",4,0,165),copper_boots:ct("copper_boots","구리 부츠","#d98b5a","feet",2,0,143),chainmail_helmet:ct("chainmail_helmet","사슬 투구","#aab1ad","head",2,0,165),chainmail_chestplate:ct("chainmail_chestplate","사슬 흉갑","#aab1ad","chest",5,0,240),chainmail_leggings:ct("chainmail_leggings","사슬 각반","#aab1ad","legs",4,0,225),chainmail_boots:ct("chainmail_boots","사슬 부츠","#aab1ad","feet",1,0,195),iron_helmet:ct("iron_helmet","철 투구","#c9d1d1","head",2,0,165),iron_chestplate:ct("iron_chestplate","철 흉갑","#c9d1d1","chest",6,0,240),iron_leggings:ct("iron_leggings","철 각반","#c9d1d1","legs",5,0,225),iron_boots:ct("iron_boots","철 부츠","#c9d1d1","feet",2,0,195),golden_helmet:ct("golden_helmet","금 투구","#f0c747","head",2,0,77),golden_chestplate:ct("golden_chestplate","금 흉갑","#f0c747","chest",5,0,112),golden_leggings:ct("golden_leggings","금 각반","#f0c747","legs",3,0,105),golden_boots:ct("golden_boots","금 부츠","#f0c747","feet",1,0,91),diamond_helmet:ct("diamond_helmet","다이아몬드 투구","#65e0dc","head",3,2,363),diamond_chestplate:ct("diamond_chestplate","다이아몬드 흉갑","#65e0dc","chest",8,2,528),diamond_leggings:ct("diamond_leggings","다이아몬드 각반","#65e0dc","legs",6,2,495),diamond_boots:ct("diamond_boots","다이아몬드 부츠","#65e0dc","feet",3,2,429),leather:{id:"leather",name:"가죽",maxStack:64,color:"#8f5b3c"},wool:{id:"wool",name:"양털",maxStack:64,color:"#e9e6d7"},raw_beef:Jt("raw_beef","익히지 않은 소고기","#c5524b",3,1.8),steak:Jt("steak","스테이크","#8e402d",8,12.8),raw_porkchop:Jt("raw_porkchop","익히지 않은 돼지고기","#d47676",3,1.8),cooked_porkchop:Jt("cooked_porkchop","익힌 돼지고기","#b15d38",8,12.8),raw_mutton:Jt("raw_mutton","익히지 않은 양고기","#b84d53",2,1.2),cooked_mutton:Jt("cooked_mutton","익힌 양고기","#9c4d34",6,9.6),raw_chicken:Jt("raw_chicken","익히지 않은 닭고기","#d9b6a0",2,1.2),cooked_chicken:Jt("cooked_chicken","익힌 닭고기","#d5a35d",6,7.2),feather:{id:"feather",name:"깃털",maxStack:64,color:"#e8e2d2"},egg:{id:"egg",name:"달걀",maxStack:16,color:"#eee8cf"},bone:{id:"bone",name:"뼈",maxStack:64,color:"#e4dfc8"},string:{id:"string",name:"실",maxStack:64,color:"#d9d9d9"},spider_eye:Jt("spider_eye","거미 눈","#8b2e6f",2,3.2),gunpowder:{id:"gunpowder",name:"화약",maxStack:64,color:"#525252"},rotten_flesh:Jt("rotten_flesh","썩은 살점","#796036",4,.8),flint:{id:"flint",name:"부싯돌",maxStack:64,color:"#3e4548"},apple:Jt("apple","사과","#cf3c38",4,2.4),bread:Jt("bread","빵","#d7a85a",5,6)};function ct(i,e,t,n,s,r,a){return{id:i,name:e,maxStack:1,color:t,equipSlot:n,durability:a,armor:{points:s,toughness:r}}}function Jt(i,e,t,n,s){return{id:i,name:e,maxStack:64,color:t,food:{hunger:n,saturation:s}}}function Xn(i){return i?{...i}:null}function En(i,e){return!!(i&&e&&i.item===e.item&&i.durability===e.durability)}function Qt(i){return st[i].maxStack}function Ef(i){return st[i].placeBlock??null}const Is=36,qt=27,bf=9;function wo(){return{head:null,chest:null,legs:null,feet:null}}function Ci(){return{slots:Array.from({length:Is},()=>null),armorSlots:wo(),offhand:null,cursor:null,selectedHotbarSlot:0}}function Wa(i){const e=Array.from({length:Is},(n,s)=>Xn(i.slots[s]??null)),t=i.armorSlots??wo();return{slots:e,armorSlots:{head:Xn(t.head??null),chest:Xn(t.chest??null),legs:Xn(t.legs??null),feet:Xn(t.feet??null)},offhand:Xn(i.offhand??null),cursor:Xn(i.cursor),selectedHotbarSlot:Math.max(0,Math.min(bf-1,i.selectedHotbarSlot??0))}}function ln(i){return i.slots[qt+i.selectedHotbarSlot]??null}function Bt(i,e){let t={...e};const r=[[qt,Is],[0,qt]];for(const[a,o]of r)for(let l=a;l<o;l+=1){const c=i.slots[l];if(!c||!En(c,t))continue;const h=Qt(c.item),u=Math.min(h-c.count,t.count);if(c.count+=u,t.count-=u,t.count<=0)return null}for(const[a,o]of r)for(let l=a;l<o;l+=1){if(i.slots[l])continue;const c=Math.min(Qt(t.item),t.count);if(i.slots[l]={...t,count:c},t.count-=c,t.count<=0)return null}return t}function Rs(i,e,t){if(Ni(i,e)<t)return!1;let n=t;for(const s of i.slots){if(!s||s.item!==e)continue;const r=Math.min(s.count,n);if(s.count-=r,n-=r,s.count<=0){const a=i.slots.indexOf(s);i.slots[a]=null}if(n<=0)return!0}return!0}function Ni(i,e){return i.slots.reduce((t,n)=>t+((n==null?void 0:n.item)===e?n.count:0),0)}function Cs(i,e){if(!e)return!0;const t=st[e.item];return i==="offhand"?t.equipSlot==="offhand"||e.item==="torch":t.equipSlot===i}function Tf(i,e,t){const n=i.slots[e]??null,s=i.cursor;if(t===0){if(!s){i.cursor=n,i.slots[e]=null;return}if(!n){i.slots[e]=s,i.cursor=null;return}if(En(n,s)){const r=Qt(n.item),a=Math.min(r-n.count,s.count);n.count+=a,s.count-=a,s.count<=0&&(i.cursor=null);return}i.slots[e]=s,i.cursor=n;return}if(!s&&n){const r=Math.ceil(n.count/2);i.cursor={...n,count:r},n.count-=r,n.count<=0&&(i.slots[e]=null);return}if(s&&!n){i.slots[e]={...s,count:1},s.count-=1,s.count<=0&&(i.cursor=null);return}s&&n&&En(n,s)&&n.count<Qt(n.item)&&(n.count+=1,s.count-=1,s.count<=0&&(i.cursor=null))}function wf(i,e){const t=i.slots[e];if(!t)return;const n=st[t.item];if(n.equipSlot&&n.equipSlot!=="offhand"&&!i.armorSlots[n.equipSlot]){i.armorSlots[n.equipSlot]=t,i.slots[e]=null;return}if((n.equipSlot==="offhand"||t.item==="torch")&&!i.offhand){i.offhand=t,i.slots[e]=null;return}const r=e>=qt?[[0,qt]]:[[qt,Is],[0,qt]];let a={...t};i.slots[e]=null;for(const[o,l]of r){for(let c=o;c<l;c+=1){const h=i.slots[c];if(!h||!En(h,a))continue;const u=Math.min(Qt(h.item)-h.count,a.count);if(h.count+=u,a.count-=u,a.count<=0)return}for(let c=o;c<l;c+=1){if(i.slots[c])continue;const h=Math.min(Qt(a.item),a.count);if(i.slots[c]={...a,count:h},a.count-=h,a.count<=0)return}}i.slots[e]=a}function Af(i,e,t){Ao(()=>i.armorSlots[e],n=>{i.armorSlots[e]=n},n=>Cs(e,n),i,t)}function Rf(i,e){Ao(()=>i.offhand,t=>{i.offhand=t},t=>Cs("offhand",t),i,e)}function Cf(i,e,t){const n=qt+t,s=i.slots[n];i.slots[n]=i.slots[e],i.slots[e]=s}function Ao(i,e,t,n,s){if(s===2)return;const r=i(),a=n.cursor;if(!a){n.cursor=r,e(null);return}if(t(a)){if(!r){e(a),n.cursor=null;return}e(a),n.cursor=r}}class Pf{constructor(e){O(this,"keys",new Set);O(this,"selectedSlot",0);O(this,"onPointerLockChange");O(this,"onSelectedSlotChange");O(this,"movementX",0);O(this,"movementY",0);O(this,"primaryQueued",!1);O(this,"secondaryQueued",!1);O(this,"primaryHeld",!1);O(this,"secondaryHeld",!1);O(this,"pressed",new Set);O(this,"element");O(this,"handleKeyDown",e=>{if(this.shouldCaptureKeyboard(e)&&(e.preventDefault(),e.stopPropagation()),!this.isEditableTarget(e.target)&&(this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),e.code.startsWith("Digit"))){const t=Number(e.code.replace("Digit",""));t>=1&&t<=9&&this.setSelectedSlot(t-1)}});O(this,"handleKeyUp",e=>{this.shouldCaptureKeyboard(e)&&(e.preventDefault(),e.stopPropagation()),!this.isEditableTarget(e.target)&&this.keys.delete(e.code)});O(this,"handleBlur",()=>{this.keys.clear(),this.pressed.clear(),this.primaryHeld=!1,this.secondaryHeld=!1});O(this,"handlePointerLockChange",()=>{var e;(e=this.onPointerLockChange)==null||e.call(this,{locked:this.pointerLocked})});O(this,"handleMouseMove",e=>{this.pointerLocked&&(this.movementX+=e.movementX,this.movementY+=e.movementY)});O(this,"handleMouseDown",e=>{if(!this.pointerLocked){this.requestPointerLock();return}e.button===0&&(this.primaryQueued=!0,this.primaryHeld=!0),e.button===2&&(this.secondaryQueued=!0,this.secondaryHeld=!0)});O(this,"handleMouseUp",e=>{e.button===0&&(this.primaryHeld=!1),e.button===2&&(this.secondaryHeld=!1)});O(this,"handleWheel",e=>{e.preventDefault();const t=e.deltaY>0?1:-1;this.setSelectedSlot((this.selectedSlot+t+9)%9)});O(this,"preventContextMenu",e=>{e.preventDefault()});this.element=e,this.attach()}get pointerLocked(){return document.pointerLockElement===this.element}requestPointerLock(){this.element.requestPointerLock()}consumeLook(){const e={movementX:this.movementX,movementY:this.movementY};return this.movementX=0,this.movementY=0,e}consumeActions(){const e={primary:this.primaryQueued,primaryHeld:this.primaryHeld,secondary:this.secondaryQueued,secondaryHeld:this.secondaryHeld};return this.primaryQueued=!1,this.secondaryQueued=!1,e}isDown(e){return this.keys.has(e)}consumePressed(e){const t=this.pressed.has(e);return this.pressed.delete(e),t}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur),document.removeEventListener("pointerlockchange",this.handlePointerLockChange),document.removeEventListener("mousemove",this.handleMouseMove),this.element.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),this.element.removeEventListener("wheel",this.handleWheel),this.element.removeEventListener("contextmenu",this.preventContextMenu)}attach(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur),document.addEventListener("pointerlockchange",this.handlePointerLockChange),document.addEventListener("mousemove",this.handleMouseMove),this.element.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handleMouseUp),this.element.addEventListener("wheel",this.handleWheel,{passive:!1}),this.element.addEventListener("contextmenu",this.preventContextMenu)}setSelectedSlot(e){var t;this.selectedSlot=e,(t=this.onSelectedSlotChange)==null||t.call(this,e)}shouldCaptureKeyboard(e){if(this.isEditableTarget(e.target))return!1;const t=new Set(["KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight","ControlLeft","ControlRight","KeyR","KeyE","Escape","Tab","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9"]);return this.pointerLocked||t.has(e.code)||e.ctrlKey||e.metaKey}isEditableTarget(e){return e instanceof HTMLElement?e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e.isContentEditable||e instanceof HTMLSelectElement:!1}}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function Lf(i,e,t){const n=Lt((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Df(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Kn(i){return()=>{let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function xt(i,e,t,n){let s=i^Math.imul(e,374761393);return s=(s^Math.imul(t,668265263))>>>0,s=(s^Math.imul(n,2147483647))>>>0,s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function In(i,e){return Math.floor(i/e)}function fi(i,e){return(i%e+e)%e}const Sn={zombie:{type:"zombie",name:"좀비",hostile:!0,behavior:"melee",health:20,speed:1.65,radius:.34,height:1.74,detection:32,attackDamage:3,attackRange:1.15,attackCooldown:1.2,colors:{body:"#50734f",accent:"#3f6680",legs:"#374255",eyes:"#f6d86b"},drops:[{item:"rotten_flesh",min:0,max:2,chance:.88}]},armored_zombie:{type:"armored_zombie",name:"무장 좀비",hostile:!0,behavior:"melee",health:28,speed:1.55,radius:.36,height:1.8,detection:34,attackDamage:5,attackRange:1.18,attackCooldown:1.1,colors:{body:"#536b55",accent:"#aab1ad",legs:"#4a5260",eyes:"#ffd666"},drops:[{item:"rotten_flesh",min:1,max:3,chance:1},{item:"chainmail_helmet",min:1,max:1,chance:.08}]},skeleton:{type:"skeleton",name:"스켈레톤",hostile:!0,behavior:"skeleton",health:20,speed:1.35,radius:.32,height:1.74,detection:28,attackDamage:4,attackRange:15,attackCooldown:1.8,colors:{body:"#d8d5c5",accent:"#bfb9a3",legs:"#cfcab9",eyes:"#202020"},drops:[{item:"bone",min:0,max:2,chance:.92},{item:"arrow",min:0,max:2,chance:.78}]},skeleton_captain:{type:"skeleton_captain",name:"스켈레톤 대장",hostile:!0,behavior:"skeleton",health:30,speed:1.45,radius:.34,height:1.82,detection:32,attackDamage:6,attackRange:17,attackCooldown:1.35,colors:{body:"#d8d5c5",accent:"#d6aa35",legs:"#bfb9a3",eyes:"#b53634"},drops:[{item:"bone",min:2,max:4,chance:1},{item:"arrow",min:2,max:5,chance:1},{item:"bow",min:1,max:1,chance:.1,durability:80}]},spider:{type:"spider",name:"거미",hostile:!0,behavior:"spider",health:16,speed:2.45,radius:.62,height:.92,detection:28,attackDamage:2,attackRange:1.25,attackCooldown:.9,colors:{body:"#2d2730",accent:"#5e394d",legs:"#1d171f",eyes:"#d8423a"},drops:[{item:"string",min:0,max:2,chance:.92},{item:"spider_eye",min:1,max:1,chance:.18}]},creeper:{type:"creeper",name:"크리퍼",hostile:!0,behavior:"creeper",health:20,speed:1.55,radius:.34,height:1.7,detection:25,attackDamage:0,attackRange:1.85,attackCooldown:0,colors:{body:"#55a95a",accent:"#35793b",legs:"#3e8742",eyes:"#101510"},drops:[{item:"gunpowder",min:0,max:2,chance:.86}]},cow:{type:"cow",name:"소",hostile:!1,behavior:"animal",health:10,speed:1.25,radius:.48,height:1.35,detection:0,attackDamage:0,attackRange:0,attackCooldown:0,colors:{body:"#6f4b36",accent:"#e8ded0",legs:"#3f2a1e",eyes:"#111111"},drops:[{item:"raw_beef",min:1,max:3,chance:1},{item:"leather",min:0,max:2,chance:.72}]},pig:{type:"pig",name:"돼지",hostile:!1,behavior:"animal",health:10,speed:1.2,radius:.45,height:1.05,detection:0,attackDamage:0,attackRange:0,attackCooldown:0,colors:{body:"#d8919c",accent:"#e8abb5",legs:"#b86f7a",eyes:"#151515"},drops:[{item:"raw_porkchop",min:1,max:3,chance:1}]},sheep:{type:"sheep",name:"양",hostile:!1,behavior:"animal",health:8,speed:1.15,radius:.46,height:1.2,detection:0,attackDamage:0,attackRange:0,attackCooldown:0,colors:{body:"#e7e3d2",accent:"#56504a",legs:"#3c3532",eyes:"#111111"},drops:[{item:"raw_mutton",min:1,max:2,chance:1},{item:"wool",min:1,max:2,chance:1}]},chicken:{type:"chicken",name:"닭",hostile:!1,behavior:"animal",health:4,speed:1.35,radius:.28,height:.72,detection:0,attackDamage:0,attackRange:0,attackCooldown:0,colors:{body:"#eee8d7",accent:"#d8423a",legs:"#d6aa35",eyes:"#111111"},drops:[{item:"raw_chicken",min:1,max:1,chance:1},{item:"feather",min:0,max:2,chance:.84}]}};class If{constructor(){O(this,"group",new wt);O(this,"mobs",[]);O(this,"arrows",[]);O(this,"spawnTimer",1.5);O(this,"nextId",1);this.group.name="Codex Craft entities"}clear(){for(const e of this.mobs)this.group.remove(e.mesh),this.disposeGroup(e.mesh);for(const e of this.arrows)this.group.remove(e.mesh),e.mesh.geometry.dispose(),Xa(e.mesh.material);this.mobs.length=0,this.arrows.length=0,this.spawnTimer=1.5}restore(e){this.clear();for(const t of e.slice(0,32))Uf(t.type)&&this.spawnAt(t.type,t.position[0],t.position[1],t.position[2],t.health,t.age)}snapshot(){return this.mobs.slice(0,32).map(e=>({id:e.id,type:e.type,position:[e.position.x,e.position.y,e.position.z],health:e.health,age:e.age}))}get count(){return this.mobs.length}update(e,t,n,s,r,a){this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnTimer=3.2+Math.random()*3.4,this.trySpawn(t,n,s,r));const o={damage:0,drops:[],explosions:[]};for(let l=this.mobs.length-1;l>=0;l-=1){const c=this.mobs[l],h=Sn[c.type];c.age+=e,c.attackCooldown=Math.max(0,c.attackCooldown-e);const u=n.clone().sub(c.position),d=Math.hypot(u.x,u.z),p=Math.abs(u.y);if(this.shouldDespawn(c,h,d)){this.removeMob(l);continue}if(h.behavior==="animal")this.updateAnimal(c,h,t,n,d,a,e);else if(h.behavior==="skeleton")this.updateSkeleton(c,h,t,n,u,d,p,e);else if(h.behavior==="creeper"){if(this.updateCreeper(c,h,t,n,u,d,p,e,o,l),!this.mobs.includes(c))continue}else this.updateMelee(c,h,t,n,u,d,p,e,o);d>.001&&(c.mesh.rotation.y=Math.atan2(u.x,u.z)),this.animateMob(c,h,a,d),c.mesh.position.copy(c.position)}return this.updateArrows(e,t,n,o),o}hitByRay(e,t,n,s){let r=-1,a=1/0;for(let c=0;c<this.mobs.length;c+=1){const h=this.mobs[c],u=Sn[h.type],d=h.position.clone();d.y+=u.height*.5;const g=d.clone().sub(e).dot(t);if(g<0||g>n)continue;e.clone().add(t.clone().multiplyScalar(g)).distanceTo(d)<u.radius+.34&&g<a&&(a=g,r=c)}if(r<0)return null;const o=this.mobs[r],l=Sn[o.type];if(o.health-=s,o.panicTimer=l.hostile?0:4.5,o.velocity.add(t.clone().multiplyScalar(l.hostile?3.2:4.4)),o.velocity.y=Math.max(o.velocity.y,l.behavior==="spider"?4.2:3),o.health<=0){const c=this.rollDrops(l);return this.removeMob(r),{killed:!0,name:l.name,hostile:l.hostile,drops:c}}return{killed:!1,name:l.name,hostile:l.hostile,drops:[]}}updateMelee(e,t,n,s,r,a,o,l,c){const h=new L;a<t.detection?h.set(r.x,0,r.z).normalize().multiplyScalar(t.speed):h.set(Math.sin(e.age*.9+e.id),0,Math.cos(e.age*.7+e.id)).multiplyScalar(.45),this.steer(e,h,l),this.moveMob(e,t,n,l),a<t.attackRange&&o<t.height&&e.attackCooldown<=0&&(c.damage+=t.attackDamage,e.attackCooldown=t.attackCooldown)}updateSkeleton(e,t,n,s,r,a,o,l){const c=new L;if(a<7)c.set(-r.x,0,-r.z).normalize().multiplyScalar(t.speed*.9);else if(a<t.detection){const h=new L(-r.z,0,r.x).normalize().multiplyScalar(Math.sin(e.age*2+e.id));c.set(r.x,0,r.z).normalize().multiplyScalar(t.speed*.55).add(h)}else c.set(Math.sin(e.age*.8+e.id),0,Math.cos(e.age*.5+e.id)).multiplyScalar(.35);this.steer(e,c,l),this.moveMob(e,t,n,l),a<t.attackRange&&o<5&&e.attackCooldown<=0&&(this.shootArrow(e,t,s),e.attackCooldown=t.attackCooldown)}updateCreeper(e,t,n,s,r,a,o,l,c,h){const u=new L;a<t.detection&&u.set(r.x,0,r.z).normalize().multiplyScalar(t.speed),this.steer(e,u,l),this.moveMob(e,t,n,l),a<t.attackRange&&o<2.2?(e.fuse+=l,e.mesh.scale.setScalar(1+Math.sin(e.fuse*26)*.04+e.fuse*.08),e.fuse>=1.5&&(c.explosions.push({x:e.position.x,y:e.position.y+.8,z:e.position.z,radius:3.15,damage:16}),this.removeMob(h))):(e.fuse=Math.max(0,e.fuse-l*.65),e.mesh.scale.setScalar(1))}updateAnimal(e,t,n,s,r,a,o){e.panicTimer=Math.max(0,e.panicTimer-o);const l=e.position.clone().sub(s),c=new L;e.panicTimer>0||r<2.2?c.set(l.x,0,l.z).normalize().multiplyScalar(t.speed*1.85):c.set(Math.sin(a*.55+e.id*1.7),0,Math.cos(a*.45+e.id*2.3)).multiplyScalar(t.speed*.36),e.type==="chicken"&&(e.eggTimer-=o,e.eggTimer<=0&&(e.eggTimer=80+Math.random()*140)),this.steer(e,c,o),this.moveMob(e,t,n,o)}updateArrows(e,t,n,s){for(let r=this.arrows.length-1;r>=0;r-=1){const a=this.arrows[r];if(a.age+=e,a.velocity.y-=5.2*e,a.position.addScaledVector(a.velocity,e),a.mesh.position.copy(a.position),a.mesh.quaternion.setFromUnitVectors(new L(0,1,0),a.velocity.clone().normalize()),a.position.distanceTo(n.clone().add(new L(0,.9,0)))<.7){s.damage+=a.damage,this.removeArrow(r);continue}(a.age>5||a.position.y<0||a.position.y>=pt||Ss(t.getBlock(Math.floor(a.position.x),Math.floor(a.position.y),Math.floor(a.position.z))))&&this.removeArrow(r)}}trySpawn(e,t,n,s){if(this.mobs.length>=18)return;const r=n<.34,a=s>.48,o=n>.55&&s<.18,l=this.mobs.filter(h=>Sn[h.type].hostile).length,c=this.mobs.length-l;if((r||a)&&l<11){const h=a?["zombie","skeleton","spider","creeper","armored_zombie","skeleton_captain"]:["zombie","skeleton","spider","creeper"];this.trySpawnType(e,t,h[Math.floor(Math.random()*h.length)],a);return}if(o&&c<7&&Math.random()<.82){const h=["cow","pig","sheep","chicken"];this.trySpawnType(e,t,h[Math.floor(Math.random()*h.length)],!1)}}trySpawnType(e,t,n,s){const r=Sn[n];for(let a=0;a<22;a+=1){const o=Math.random()*Math.PI*2,l=r.hostile?18+Math.random()*18:12+Math.random()*28,c=Math.floor(t.x+Math.cos(o)*l)+.5,h=Math.floor(t.z+Math.sin(o)*l)+.5,u=s?this.findCaveSpawnY(e,Math.floor(c),Math.floor(t.y),Math.floor(h),r.hostile):e.terrainHeight(Math.floor(c),Math.floor(h))+1;if(!(u===null||u<3||u>pt-3)&&!(r.hostile&&this.isNearTorch(e,Math.floor(c),u,Math.floor(h),7))&&this.isSpawnSpace(e,Math.floor(c),u,Math.floor(h),r)){this.spawnAt(n,c,u,h);return}}}findCaveSpawnY(e,t,n,s,r){for(let a=0;a<=11;a+=1)for(const o of[-1,1]){const l=n+a*o;if(!(r&&this.isNearTorch(e,t,l,s,7))&&this.isSpawnSpace(e,t,l,s,Sn.zombie))return l}return null}spawnAt(e,t,n,s,r=Sn[e].health,a=0){const o=Sn[e],l={id:this.nextId,type:e,health:r,attackCooldown:o.attackCooldown*.6,age:a,fuse:0,eggTimer:e==="chicken"?45+Math.random()*80:0,panicTimer:0,position:new L(t,n,s),velocity:new L,mesh:this.createMobMesh(o)};this.nextId+=1,l.mesh.position.copy(l.position),this.mobs.push(l),this.group.add(l.mesh)}shootArrow(e,t,n){const s=e.position.clone().add(new L(0,t.height*.72,0)),a=n.clone().add(new L(0,1.05,0)).sub(s).normalize();a.y+=.07,a.normalize();const o=new at(.06,.62,.06),l=new Ls({color:"#d8d3c0",roughness:.8}),c=new qe(o,l);c.castShadow=!0,this.group.add(c);const h={id:this.nextId,age:0,damage:t.attackDamage,position:s,velocity:a.multiplyScalar(13.5),mesh:c};this.nextId+=1,this.arrows.push(h)}steer(e,t,n){e.velocity.x+=(t.x-e.velocity.x)*Lt(n*4,0,1),e.velocity.z+=(t.z-e.velocity.z)*Lt(n*4,0,1),e.velocity.y-=18*n}moveMob(e,t,n,s){const r=e.position.clone();r.x+=e.velocity.x*s,this.collidesAt(r,t,n)&&(r.x=e.position.x,e.velocity.x=0),r.z+=e.velocity.z*s,this.collidesAt(r,t,n)&&(r.z=e.position.z,e.velocity.z=0),r.y+=e.velocity.y*s,this.collidesAt(r,t,n)&&(r.y=e.position.y,e.velocity.y<-4&&Math.hypot(e.velocity.x,e.velocity.z)>.35?e.velocity.y=t.behavior==="spider"?6.4:5.6:e.velocity.y=0),e.position.copy(r)}collidesAt(e,t,n){const s=Math.floor(e.x-t.radius),r=Math.floor(e.x+t.radius),a=Math.floor(e.y),o=Math.floor(e.y+t.height),l=Math.floor(e.z-t.radius),c=Math.floor(e.z+t.radius);for(let h=a;h<=o;h+=1)for(let u=l;u<=c;u+=1)for(let d=s;d<=r;d+=1)if(Ss(n.getBlock(d,h,u)))return!0;return!1}isSpawnSpace(e,t,n,s,r){const a=e.getBlock(t,n-1,s);if(a===$.Water||!Ss(a)||!r.hostile&&a!==$.Grass)return!1;const o=Math.ceil(r.height);for(let l=0;l<=o;l+=1)if(e.getBlock(t,n+l,s)!==$.Air)return!1;return!0}isNearTorch(e,t,n,s,r){for(let a=-3;a<=3;a+=1)for(let o=-r;o<=r;o+=1)for(let l=-r;l<=r;l+=1)if(!(l*l+a*a+o*o>r*r)&&e.getBlock(t+l,n+a,s+o)===$.Torch)return!0;return!1}shouldDespawn(e,t,n){return n>82||e.position.y<-14||e.age>520?!0:t.hostile&&n>46&&e.age>90}rollDrops(e){const t=[];for(const n of e.drops){if(Math.random()>n.chance)continue;const s=n.min+Math.floor(Math.random()*(n.max-n.min+1));s<=0||t.push({item:n.item,count:s,durability:n.durability})}return t}removeMob(e){const t=this.mobs[e];this.group.remove(t.mesh),this.disposeGroup(t.mesh),this.mobs.splice(e,1)}removeArrow(e){const t=this.arrows[e];this.group.remove(t.mesh),t.mesh.geometry.dispose(),Xa(t.mesh.material),this.arrows.splice(e,1)}disposeGroup(e){const t=new Set;e.traverse(n=>{if(n instanceof qe){n.geometry.dispose();const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s)t.has(r)||(r.dispose(),t.add(r))}})}animateMob(e,t,n,s){const r=Math.sin((n+e.id)*(t.behavior==="animal"?6:8))*Math.min(1,s/7);for(const a of e.mesh.children)a.name.startsWith("leg-a")&&(a.rotation.x=r*.55),a.name.startsWith("leg-b")&&(a.rotation.x=-r*.55),a.name.startsWith("arm-a")&&(a.rotation.x=-.35+r*.45),a.name.startsWith("arm-b")&&(a.rotation.x=-.35-r*.45)}createMobMesh(e){return e.behavior==="spider"?this.createSpiderMesh(e):e.behavior==="animal"?this.createAnimalMesh(e):e.behavior==="creeper"?this.createCreeperMesh(e):this.createHumanoidMesh(e)}createHumanoidMesh(e){const t=new wt,n=Vt(e.colors.body),s=Vt(e.colors.accent??e.colors.body),r=Vt(e.colors.legs??e.colors.body),a=new un({color:e.colors.eyes??"#ffd666"});return Qe(t,[.58,.58,.58],[0,1.52,0],n),Qe(t,[.62,.7,.34],[0,.94,0],s),Qe(t,[.22,.72,.22],[-.42,.92,.02],n,"arm-a"),Qe(t,[.22,.72,.22],[.42,.92,.02],n,"arm-b"),Qe(t,[.24,.78,.24],[-.16,.32,0],r,"leg-a"),Qe(t,[.24,.78,.24],[.16,.32,0],r,"leg-b"),Qe(t,[.08,.08,.03],[-.12,1.58,-.31],a),Qe(t,[.08,.08,.03],[.12,1.58,-.31],a),e.behavior==="skeleton"&&(Qe(t,[.06,.72,.06],[.52,.92,-.18],Vt("#8b5f35")),Qe(t,[.05,.8,.05],[.62,.92,-.18],Vt("#d8d3c0"))),t}createCreeperMesh(e){const t=new wt,n=Vt(e.colors.body),s=Vt(e.colors.accent??e.colors.body),r=new un({color:e.colors.eyes??"#101510"});return Qe(t,[.58,.72,.58],[0,1.35,0],n),Qe(t,[.58,.9,.42],[0,.72,0],s),Qe(t,[.2,.38,.24],[-.22,.2,-.16],n,"leg-a"),Qe(t,[.2,.38,.24],[.22,.2,-.16],n,"leg-b"),Qe(t,[.2,.38,.24],[-.22,.2,.18],n,"leg-b"),Qe(t,[.2,.38,.24],[.22,.2,.18],n,"leg-a"),Qe(t,[.1,.09,.03],[-.13,1.45,-.31],r),Qe(t,[.1,.09,.03],[.13,1.45,-.31],r),Qe(t,[.12,.18,.03],[0,1.26,-.31],r),t}createSpiderMesh(e){const t=new wt,n=Vt(e.colors.body),s=Vt(e.colors.legs??"#1d171f"),r=new un({color:e.colors.eyes??"#d8423a"});Qe(t,[1.08,.38,.78],[0,.48,0],n),Qe(t,[.58,.34,.46],[0,.54,-.56],Vt(e.colors.accent??e.colors.body));for(let a of[-1,1])for(let o=0;o<4;o+=1){const l=-.46+o*.3,c=Qe(t,[.56,.08,.08],[a*.72,.42,l],s,o%2===0?"leg-a":"leg-b");c.rotation.z=a*.25}return Qe(t,[.09,.07,.03],[-.13,.6,-.81],r),Qe(t,[.09,.07,.03],[.13,.6,-.81],r),t}createAnimalMesh(e){const t=new wt,n=Vt(e.colors.body),s=Vt(e.colors.accent??e.colors.body),r=Vt(e.colors.legs??e.colors.body),a=new un({color:e.colors.eyes??"#111"}),o=e.type==="chicken";Qe(t,o?[.42,.46,.38]:[.9,.58,.52],o?[0,.46,0]:[0,.72,0],n),Qe(t,o?[.28,.28,.28]:[.44,.42,.42],o?[0,.78,-.28]:[0,.9,-.52],s),Qe(t,[.07,.06,.03],[-.08,o?.82:.96,o?-.44:-.75],a),Qe(t,[.07,.06,.03],[.08,o?.82:.96,o?-.44:-.75],a);const l=o?.32:.52;for(const[c,h]of[-.28,.28].entries())Qe(t,[.13,l,.13],[h,l*.5,-.18],r,c===0?"leg-a":"leg-b"),o||Qe(t,[.13,l,.13],[h,l*.5,.24],r,c===0?"leg-b":"leg-a");return t}}function Uf(i){return i in Sn}function Vt(i){return new Ls({color:i,roughness:.88})}function Qe(i,e,t,n,s=""){const r=new qe(new at(...e),n);return r.position.set(...t),r.name=s,r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Xa(i){if(Array.isArray(i)){for(const e of i)e.dispose();return}i.dispose()}const Un=.32,qa=1.78,Ya=1.58;class ms{constructor(e,t){O(this,"position");O(this,"velocity",new L);O(this,"yaw",0);O(this,"pitch",0);O(this,"grounded",!1);O(this,"lastLandingSpeed",0);O(this,"camera");this.camera=e,this.position=t.clone(),this.camera.rotation.order="YXZ",this.syncCamera()}restore(e){this.position.fromArray(e.position),this.yaw=e.yaw,this.pitch=e.pitch,this.syncCamera()}snapshot(e){return{position:[this.position.x,this.position.y,this.position.z],yaw:this.yaw,pitch:this.pitch,selectedSlot:e}}applyLook(e,t){this.yaw-=e*.0022,this.pitch-=t*.0022,this.pitch=Lt(this.pitch,-Math.PI/2+.03,Math.PI/2-.03)}update(e,t,n,s=!0,r=!1){const a=new L(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)),l=new L;t.isDown("KeyW")&&l.add(a),t.isDown("KeyS")&&l.sub(a),t.isDown("KeyD")&&l.add(o),t.isDown("KeyA")&&l.sub(o),l.lengthSq()>0&&l.normalize();const c=this.isInWater(n),u=(t.isDown("ControlLeft")||t.isDown("ControlRight")||t.isDown("KeyR"))&&s&&!c?7.1:r?2.1:4.6;this.velocity.x=l.x*(c?u*.48:u),this.velocity.z=l.z*(c?u*.48:u),c?(this.velocity.y=Math.max(this.velocity.y-4.4*e,-2.4),t.isDown("Space")&&(this.velocity.y=3)):(this.velocity.y-=22*e,t.isDown("Space")&&this.grounded&&(this.velocity.y=7.4,this.grounded=!1));const d=this.position.clone();d.x+=this.velocity.x*e,this.collidesAt(d,n)&&(d.x=this.position.x,this.velocity.x=0),d.z+=this.velocity.z*e,this.collidesAt(d,n)&&(d.z=this.position.z,this.velocity.z=0),this.grounded=!1,this.lastLandingSpeed=0,d.y+=this.velocity.y*e,this.collidesAt(d,n)&&(this.velocity.y<0&&(this.grounded=!0,this.lastLandingSpeed=-this.velocity.y),d.y=this.position.y,this.velocity.y=0),this.position.copy(d),(this.position.y<-12||this.position.y>pt+18)&&(this.position.copy(n.findSpawn()),this.velocity.set(0,0,0)),this.syncCamera()}collidesAt(e,t){const n=Math.floor(e.x-Un),s=Math.floor(e.x+Un),r=Math.floor(e.y),a=Math.floor(e.y+qa-.02),o=Math.floor(e.z-Un),l=Math.floor(e.z+Un);for(let c=r;c<=a;c+=1)for(let h=o;h<=l;h+=1)for(let u=n;u<=s;u+=1)if(Ss(t.getBlock(u,c,h)))return!0;return!1}intersectsBlock(e,t,n){const s=this.position.x-Un,r=this.position.x+Un,a=this.position.y,o=this.position.y+qa,l=this.position.z-Un,c=this.position.z+Un;return r>e&&s<e+1&&o>t&&a<t+1&&c>n&&l<n+1}getEyePosition(e=new L){return e.set(this.position.x,this.position.y+Ya,this.position.z)}getViewDirection(e=new L){return this.camera.getWorldDirection(e),e.normalize()}isInWater(e){const t=e.getBlock(Math.floor(this.position.x),Math.floor(this.position.y),Math.floor(this.position.z)),n=e.getBlock(Math.floor(this.position.x),Math.floor(this.position.y+1.1),Math.floor(this.position.z));return t===$.Water||n===$.Water}syncCamera(){this.camera.position.set(this.position.x,this.position.y+Ya,this.position.z),this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0}}const Nf=[{id:"planks",name:"나무 판자",size:2,type:"shapeless",ingredients:{log:1},result:{item:"planks",count:4},category:"building",unlocksBy:["log"]},{id:"sticks",name:"막대기",size:2,type:"shaped",pattern:["P","P"],key:{P:"planks"},result:{item:"stick",count:4},category:"items",unlocksBy:["planks"]},{id:"crafting_table",name:"제작대",size:2,type:"shaped",pattern:["PP","PP"],key:{P:"planks"},result:{item:"crafting_table",count:1},category:"building",unlocksBy:["planks"]},Nn("wooden_pickaxe","나무 곡괭이","planks",59,["PPP"," S "," S "]),Nn("wooden_axe","나무 도끼","planks",59,["PP","PS"," S"]),Nn("wooden_shovel","나무 삽","planks",59,["P","S"],2),Nn("stone_pickaxe","돌 곡괭이","stone",131,["CCC"," S "," S "]),Nn("stone_axe","돌 도끼","stone",131,["CC","CS"," S"]),Nn("stone_shovel","돌 삽","stone",131,["C","S"],2),Nn("iron_pickaxe","철 곡괭이","iron_ingot",250,["III"," S "," S "]),Nn("diamond_pickaxe","다이아몬드 곡괭이","diamond",1561,["DDD"," S "," S "]),pi("wooden_sword","나무 검","planks",59),pi("stone_sword","돌 검","stone",131),pi("copper_sword","구리 검","copper_ingot",191),pi("iron_sword","철 검","iron_ingot",250),pi("golden_sword","금 검","gold_ingot",32),pi("diamond_sword","다이아몬드 검","diamond",1561),{id:"bow",name:"활",size:3,type:"shaped",pattern:[" ST","S T"," ST"],key:{S:"stick",T:"string"},result:{item:"bow",count:1,durability:384},category:"equipment",unlocksBy:["stick","string"]},{id:"arrow",name:"화살",size:3,type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4},category:"equipment",unlocksBy:["flint","feather"]},{id:"shield",name:"방패",size:3,type:"shaped",pattern:["PIP","PPP"," P "],key:{P:"planks",I:"iron_ingot"},result:{item:"shield",count:1,durability:336},category:"equipment",unlocksBy:["iron_ingot","planks"]},{id:"shears",name:"가위",size:2,type:"shaped",pattern:[" I","I "],key:{I:"iron_ingot"},result:{item:"shears",count:1,durability:238},category:"equipment",unlocksBy:["iron_ingot"]},{id:"torch",name:"횃불",size:2,type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4},category:"items",unlocksBy:["coal","stick"]},{id:"furnace",name:"화로",size:3,type:"shaped",pattern:["SSS","S S","SSS"],key:{S:"stone"},result:{item:"furnace",count:1},category:"items",unlocksBy:["stone"]},{id:"chest",name:"상자",size:3,type:"shaped",pattern:["PPP","P P","PPP"],key:{P:"planks"},result:{item:"chest",count:1},category:"items",unlocksBy:["planks"]},{id:"bed",name:"침대",size:3,type:"shaped",pattern:["WWW","PPP"],key:{W:"wool",P:"planks"},result:{item:"bed",count:1},category:"items",unlocksBy:["wool","planks"]},{id:"brick_block",name:"벽돌 블록",size:2,type:"shaped",pattern:["OO","OO"],key:{O:"ore"},result:{item:"brick",count:4},category:"building",unlocksBy:["ore"]},{id:"bread",name:"빵",size:3,type:"shapeless",ingredients:{planks:1,apple:1},result:{item:"bread",count:1},category:"food",unlocksBy:["apple"]}],ys=[...Nf,...Pi("leather","가죽","leather"),...Pi("copper","구리","copper_ingot"),...Pi("iron","철","iron_ingot"),...Pi("golden","금","gold_ingot"),...Pi("diamond","다이아몬드","diamond")];function Nn(i,e,t,n,s,r=3){const a=s.join("").replace(/[ S]/g,"")[0]??"M";return{id:i,name:e,size:r,type:"shaped",pattern:s,key:{[a]:t,S:"stick"},result:{item:i,count:1,durability:n},category:"equipment",unlocksBy:[t,"stick"]}}function pi(i,e,t,n){return{id:i,name:e,size:3,type:"shaped",pattern:["M","M","S"],key:{M:t,S:"stick"},result:{item:i,count:1,durability:n},category:"equipment",unlocksBy:[t,"stick"]}}function Pi(i,e,t){const n={helmet:`${i}_helmet`,chestplate:`${i}_chestplate`,leggings:`${i}_leggings`,boots:`${i}_boots`};return[gs(n.helmet,`${e} 투구`,t,["MMM","M M"]),gs(n.chestplate,`${e} 흉갑`,t,["M M","MMM","MMM"]),gs(n.leggings,`${e} 각반`,t,["MMM","M M","M M"]),gs(n.boots,`${e} 부츠`,t,["M M","M M"])]}function gs(i,e,t,n){return{id:i,name:e,size:3,type:"shaped",pattern:n,key:{M:t},result:{item:i,count:1},category:"equipment",unlocksBy:[t]}}function $a(i,e,t){return e.has(i.id)?!0:i.unlocksBy.some(n=>Ni(t,n)>0)}function Ka(i,e,t){if(i.size>t)return!1;const n=Ro(i);return Object.entries(n).every(([s,r])=>Ni(e,s)>=r)}function Ro(i){var t;if(i.type==="shapeless")return i.ingredients??{};const e={};for(const n of i.pattern??[])for(const s of n){const r=(t=i.key)==null?void 0:t[s];r&&(e[r]=(e[r]??0)+1)}return e}function gr(i,e){for(const t of ys)if(!(t.size>e)&&(t.type==="shapeless"&&Co(t,i)||t.type==="shaped"&&Po(t,i,e)))return t;return null}function Za(i,e,t){if(kf(e,i,t))for(let n=0;n<i.length;n+=1){const s=i[n];s&&(s.count-=1,s.count<=0&&(i[n]=null))}}function Ff(i,e){var s;if(i.size>e)return null;const t=Array.from({length:e*e},()=>null);if(i.type==="shapeless"){let r=0;for(const[a,o]of Object.entries(i.ingredients??{}))for(let l=0;l<o;l+=1){if(r>=t.length)return null;t[r]=a,r+=1}return t}const n=Lo(i);if(!n||n.width>e||n.height>e)return null;for(let r=0;r<n.height;r+=1)for(let a=0;a<n.width;a+=1){const o=n.rows[r][a],l=(s=i.key)==null?void 0:s[o];l&&(t[r*e+a]=l)}return t}function kf(i,e,t){return i.size>t?!1:i.type==="shapeless"?Co(i,e):Po(i,e,t)}function Co(i,e){const t=i.ingredients??{},n={};for(const a of e)a&&(n[a.item]=(n[a.item]??0)+1);const s=Object.entries(t),r=Object.entries(n);return s.length===r.length&&s.every(([a,o])=>n[a]===o)}function Po(i,e,t){const n=Lo(i);if(!n||n.width>t||n.height>t)return!1;for(let s=0;s<=t-n.height;s+=1)for(let r=0;r<=t-n.width;r+=1)if(Bf(i,n.rows,n.width,n.height,e,t,r,s))return!0;return!1}function Bf(i,e,t,n,s,r,a,o){var l;for(let c=0;c<r;c+=1)for(let h=0;h<r;h+=1){const u=s[c*r+h],d=h-a,p=c-o,g=d>=0&&d<t&&p>=0&&p<n?e[p][d]:" ",v=((l=i.key)==null?void 0:l[g])??null;if(((u==null?void 0:u.item)??null)!==v)return!1}return!0}function Lo(i){const e=i.pattern??[];if(e.length===0)return null;const t=Math.max(...e.map(c=>c.length)),n=e.map(c=>c.padEnd(t," "));let s=t,r=-1,a=n.length,o=-1;for(let c=0;c<n.length;c+=1)for(let h=0;h<t;h+=1)n[c][h]!==" "&&(s=Math.min(s,h),r=Math.max(r,h),a=Math.min(a,c),o=Math.max(o,c));return r<s||o<a?null:{rows:n.slice(a,o+1).map(c=>c.slice(s,r+1)),width:r-s+1,height:o-a+1}}class Of{constructor(e){O(this,"root",new wt);O(this,"hand",new wt);O(this,"itemRoot",new wt);O(this,"skinMaterial",this.makeMaterial("#c98f64"));O(this,"sleeveMaterial",this.makeMaterial("#3f78b5"));O(this,"activeKey","");O(this,"swing",0);this.root.name="FirstPersonHand",this.root.position.set(.43,-.5,-.78),this.root.rotation.set(-.18,-.16,.02),this.root.renderOrder=30,this.hand.position.set(.08,-.04,.12),this.hand.rotation.set(.2,-.22,-.12);const t=new qe(new at(.16,.2,.46),this.sleeveMaterial);t.position.set(.02,-.06,.2),t.rotation.x=-.2;const n=new qe(new at(.2,.18,.22),this.skinMaterial);n.position.set(0,.02,-.06),this.hand.add(t,n),this.root.add(this.hand,this.itemRoot),e.add(this.root)}update(e,t,n,s){if(this.root.visible=n,!n)return;this.swing=Math.max(0,this.swing-e*5.5),s>0&&(this.swing=Math.max(this.swing,Math.min(1,s)));const r=t?`${t.item}:${t.durability??""}`:"";r!==this.activeKey&&(this.activeKey=r,this.rebuildItem(t),this.swing=.45);const a=Math.sin(performance.now()*.006)*.012,o=Math.sin(this.swing*Math.PI)*.22;this.root.position.set(.43-o*.08,-.5+a-o*.06,-.78-o*.14),this.root.rotation.set(-.18-o*.48,-.16-o*.12,.02+o*.16)}rebuildItem(e){if(this.itemRoot.clear(),!e)return;const t=st[e.item],n=this.makeMaterial(t.color);if(t.placeBlock){const r=new qe(new at(.32,.32,.32),n);r.position.set(-.1,.12,-.26),r.rotation.set(.58,-.74,.22),this.itemRoot.add(r);const a=new qe(new at(.322,.016,.322),this.makeMaterial(this.highlightColor(t.color,1.28)));a.position.set(-.1,.29,-.26),a.rotation.copy(r.rotation),this.itemRoot.add(a);return}if(t.toolKind==="pickaxe"){const r=new qe(new at(.06,.44,.06),this.makeMaterial("#8a5b33"));r.position.set(-.04,.06,-.18),r.rotation.set(.08,.08,-.38);const a=new qe(new at(.34,.08,.08),n);a.position.set(-.12,.25,-.23),a.rotation.set(.08,.08,-.38);const o=new qe(new at(.08,.18,.08),n);o.position.set(-.27,.21,-.23),o.rotation.set(.08,.08,-.38);const l=new qe(new at(.08,.12,.08),n);l.position.set(.04,.31,-.23),l.rotation.set(.08,.08,-.38),this.itemRoot.add(r,a,o,l);return}if(t.toolKind==="sword"){const r=new qe(new at(.06,.22,.06),this.makeMaterial("#70421f"));r.position.set(-.05,-.02,-.18),r.rotation.set(.18,.05,-.62);const a=new qe(new at(.24,.055,.055),this.makeMaterial("#6d4b31"));a.position.set(-.11,.08,-.2),a.rotation.copy(r.rotation);const o=new qe(new at(.08,.52,.045),n);o.position.set(-.2,.27,-.25),o.rotation.copy(r.rotation),this.itemRoot.add(r,a,o);return}if(t.toolKind==="bow"){const r=new wt;for(let o=0;o<3;o+=1){const l=new qe(new at(.055,.24,.045),this.makeMaterial("#9b6638"));l.position.set(-.12+o*.035,.02+o*.13,-.22),l.rotation.set(.2,-.08,-.35+o*.18),r.add(l)}const a=new qe(new at(.018,.6,.018),this.makeMaterial("#e8e2d2"));a.position.set(-.02,.2,-.26),a.rotation.set(.2,-.08,-.12),r.add(a),this.itemRoot.add(r);return}if(t.toolKind==="shield"){const r=new qe(new at(.3,.42,.055),n);r.position.set(-.08,.09,-.24),r.rotation.set(.32,-.72,.06);const a=new qe(new at(.32,.07,.06),this.makeMaterial("#c9d1d1"));a.position.set(-.08,.12,-.275),a.rotation.copy(r.rotation),this.itemRoot.add(r,a);return}const s=new qe(new at(.24,.24,.045),n);s.position.set(-.08,.12,-.22),s.rotation.set(.4,-.6,.18),this.itemRoot.add(s)}highlightColor(e,t){const n=new Le(e);return n.r=Math.min(1,n.r*t),n.g=Math.min(1,n.g*t),n.b=Math.min(1,n.b*t),`#${n.getHexString()}`}makeMaterial(e){return new un({color:e,depthTest:!1,depthWrite:!1})}}const ja=[{id:"smelt_copper",name:"구리 주괴 제련",input:"raw_copper",fuel:"coal",result:{item:"copper_ingot",count:1},seconds:10},{id:"smelt_iron",name:"철 주괴 제련",input:"raw_iron",fuel:"coal",result:{item:"iron_ingot",count:1},seconds:10},{id:"smelt_gold",name:"금 주괴 제련",input:"raw_gold",fuel:"coal",result:{item:"gold_ingot",count:1},seconds:10},{id:"cook_beef",name:"스테이크 굽기",input:"raw_beef",fuel:"coal",result:{item:"steak",count:1},seconds:10},{id:"cook_porkchop",name:"돼지고기 굽기",input:"raw_porkchop",fuel:"coal",result:{item:"cooked_porkchop",count:1},seconds:10},{id:"cook_mutton",name:"양고기 굽기",input:"raw_mutton",fuel:"coal",result:{item:"cooked_mutton",count:1},seconds:10},{id:"cook_chicken",name:"닭고기 굽기",input:"raw_chicken",fuel:"coal",result:{item:"cooked_chicken",count:1},seconds:10}];function Ar(i,e){return Ni(e,i.input)>0&&Ni(e,i.fuel)>0}function Gf(i,e,t=!1){let n=0;for(;Ar(i,e);){if(Rs(e,i.input,1),Rs(e,i.fuel,1),Bt(e,{...i.result})){Bt(e,{item:i.input,count:1}),Bt(e,{item:i.fuel,count:1});break}if(n+=i.result.count,!t||n>=64)break}return n}function Us(i){return new Promise((e,t)=>{i.oncomplete=i.onsuccess=()=>e(i.result),i.onabort=i.onerror=()=>t(i.error)})}function zf(i,e){let t;const n=()=>{if(t)return t;const s=indexedDB.open(i);return s.onupgradeneeded=()=>s.result.createObjectStore(e),t=Us(s),t.then(r=>{r.onclose=()=>t=void 0},()=>{}),t};return(s,r)=>n().then(a=>r(a.transaction(e,s).objectStore(e)))}let _r;function Ur(){return _r||(_r=zf("keyval-store","keyval")),_r}function vr(i,e=Ur()){return e("readonly",t=>Us(t.get(i)))}function Hf(i,e,t=Ur()){return t("readwrite",n=>(n.put(e,i),Us(n.transaction)))}function Ja(i,e=Ur()){return e("readwrite",t=>(t.delete(i),Us(t.transaction)))}const xr="voxel-frontier:save:v1",Mr="voxel-frontier:saves:v2";class Vf{async loadIndex(){const e=await vr(Mr);if((e==null?void 0:e.version)===2||(e==null?void 0:e.version)===3)return e;const t=await vr(xr);return(t==null?void 0:t.version)===1?{version:3,activeWorldId:"legacy-world",worlds:[]}:{version:3,activeWorldId:null,worlds:[]}}async loadLegacy(){const e=await vr(xr);return(e==null?void 0:e.version)===1?e:null}async saveIndex(e){await Hf(Mr,e)}async upsertWorld(e){const t=await this.loadIndex(),n=t.worlds.findIndex(s=>s.id===e.id);return n>=0?t.worlds[n]=e:t.worlds.unshift(e),t.version=3,t.activeWorldId=e.id,t.worlds.sort((s,r)=>r.updatedAt-s.updatedAt),await this.saveIndex(t),t}async deleteWorld(e){var n;const t=await this.loadIndex();return t.worlds=t.worlds.filter(s=>s.id!==e),t.activeWorldId===e&&(t.activeWorldId=((n=t.worlds[0])==null?void 0:n.id)??null),await this.saveIndex(t),t}async clearAll(){await Ja(xr),await Ja(Mr)}}function _s(i){return{health:20,hunger:20,saturation:5,exhaustion:0,air:20,spawn:[i.x,i.y,i.z],alive:!0,invulnerabilityTimer:0}}class Qa{constructor(e){O(this,"tickTimer",0);this.state=e}update(e,t,n,s){this.state.alive&&(this.state.invulnerabilityTimer=Math.max(0,this.state.invulnerabilityTimer-e),t?(this.state.air=Math.max(0,this.state.air-e*1.8),this.state.air<=0&&(this.tickTimer+=e,this.tickTimer>=1&&(this.damage(2),this.tickTimer=0))):this.state.air=Math.min(20,this.state.air+e*7),n&&s&&this.addExhaustion(e*.1),this.state.exhaustion>=4&&(this.state.exhaustion-=4,this.state.saturation>0?this.state.saturation=Math.max(0,this.state.saturation-1):this.state.hunger=Math.max(0,this.state.hunger-1)),this.tickTimer+=e,this.state.hunger>=18&&this.state.health<20&&this.tickTimer>=4&&(this.heal(1),this.addExhaustion(.75),this.tickTimer=0),this.state.hunger<=0&&this.tickTimer>=4&&(this.damage(1,!0),this.tickTimer=0))}canSprint(){return this.state.hunger>6&&this.state.alive}addExhaustion(e){this.state.exhaustion+=e}eat(e,t){this.state.hunger=Lt(this.state.hunger+e,0,20),this.state.saturation=Lt(this.state.saturation+t,0,this.state.hunger)}damage(e,t={}){if(!this.state.alive)return 0;const n=typeof t=="boolean"?{ignoreInvulnerability:t}:t;if(!(n.ignoreInvulnerability??!1)&&this.state.invulnerabilityTimer>0)return 0;const r=qf(e,n.armorSlots,n.blocking??!1);return r<=0?0:(this.state.health=Math.max(0,this.state.health-r),this.state.invulnerabilityTimer=.7,this.addExhaustion(.1),this.state.health<=0&&(this.state.alive=!1),r)}heal(e){this.state.health=Lt(this.state.health+e,0,20)}respawn(){this.state.health=20,this.state.hunger=20,this.state.saturation=5,this.state.exhaustion=0,this.state.air=20,this.state.alive=!0,this.state.invulnerabilityTimer=1.5}}function Wf(i){return Object.values(i).reduce((e,t)=>{var n;return e+(t?((n=st[t.item].armor)==null?void 0:n.points)??0:0)},0)}function Xf(i){return Object.values(i).reduce((e,t)=>{var n;return e+(t?((n=st[t.item].armor)==null?void 0:n.toughness)??0:0)},0)}function qf(i,e,t=!1){let n=i;if(t&&(n*=.45),e){const s=Wf(e),r=Xf(e),a=Math.min(20,Math.max(s/5,s-n/(2+r/4)))/25;n*=1-a}return Math.max(1,Math.round(n))}const Yf=210;class $f{constructor(e){O(this,"sunDirection",new L(.4,1,.2).normalize());O(this,"skyGroup",new wt);O(this,"cloudGroup",new wt);O(this,"skyMaterial");O(this,"starMaterial");O(this,"sun");O(this,"moon");const t=new Ii(420,48,24);this.skyMaterial=new wn({uniforms:{uDay:{value:1}},vertexShader:`
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
      `,side:1,depthWrite:!1});const n=new qe(t,this.skyMaterial);n.frustumCulled=!1,this.skyGroup.add(n),this.sun=new qe(new Ii(9,32,16),new un({color:"#fff0ad"})),this.moon=new qe(new Ii(6,28,14),new un({color:"#d7e1ec"})),this.skyGroup.add(this.sun,this.moon,this.makeStars()),e.add(this.skyGroup),this.makeClouds(),e.add(this.cloudGroup)}update(e,t){const s=e/Yf%1*Math.PI*2+Math.PI*.28;this.sunDirection.set(Math.cos(s)*.72,Math.sin(s),Math.sin(s*.7)*.28).normalize();const r=Lf(-.12,.32,this.sunDirection.y);return this.skyMaterial.uniforms.uDay.value=r,this.starMaterial.opacity=1-r,this.skyGroup.position.copy(t),this.sun.position.copy(this.sunDirection).multiplyScalar(355),this.moon.position.copy(this.sunDirection).multiplyScalar(-330),this.sun.visible=r>.03,this.moon.visible=r<.88,this.cloudGroup.position.set(t.x+e*.42%70,56,t.z),this.cloudGroup.children.forEach((a,o)=>{a.position.x+=Math.sin(e*.05+o)*.001}),{dayFactor:r,sunDirection:this.sunDirection}}makeStars(){const e=Kn(1779033703),t=[];for(let s=0;s<720;s+=1){const r=e()*Math.PI*2,a=Math.acos(e()*2-1),o=385,l=Math.cos(a)*o;l<-30||t.push(Math.sin(a)*Math.cos(r)*o,l,Math.sin(a)*Math.sin(r)*o)}const n=new Yt;return n.setAttribute("position",new bt(t,3)),this.starMaterial=new _o({color:"#f7fbff",size:1.25,transparent:!0,opacity:0,depthWrite:!1}),new Tl(n,this.starMaterial)}makeClouds(){const e=new un({color:"#f5f7ef",transparent:!0,opacity:.68,depthWrite:!1}),t=new at(1,1,1),n=Kn(608135816);for(let s=0;s<26;s+=1){const r=new wt,a=(n()-.5)*260,o=(n()-.5)*260;r.position.set(a,n()*12,o);const l=4+Math.floor(n()*6);for(let c=0;c<l;c+=1){const h=new qe(t,e);h.position.set((n()-.5)*20,(n()-.5)*2,(n()-.5)*9),h.scale.set(8+n()*12,1+n()*1.2,4+n()*5),r.add(h)}this.cloudGroup.add(r)}}}const ht=32,Zn=6,Rr=5,Kf=Zn*ht,Zf=Rr*ht;function Do({r:i,g:e,b:t}){return`rgb(${i}, ${e}, ${t})`}function Io(i,e){return{r:Math.round(Math.max(0,Math.min(255,i.r+e))),g:Math.round(Math.max(0,Math.min(255,i.g+e))),b:Math.round(Math.max(0,Math.min(255,i.b+e)))}}function Nt(i){return[i%Zn*ht,Math.floor(i/Zn)*ht]}function on(i,e,t){let n=Math.imul(e+i*31,1103515245)^Math.imul(t+17,12345);return n^=n>>>13,n=Math.imul(n,1274126177),((n^n>>>16)>>>0)/4294967296}function At(i,e,t,n,s=2){const[r,a]=Nt(e);for(let o=0;o<ht;o+=s)for(let l=0;l<ht;l+=s){const c=(on(e,l,o)-.5)*n;i.fillStyle=Do(Io(t,c)),i.fillRect(r+l,a+o,s,s)}}function jf(i){At(i,Ie.GrassSide,{r:120,g:87,b:54},34,2);const[e,t]=Nt(Ie.GrassSide);for(let n=0;n<11;n+=1)for(let s=0;s<ht;s+=2){const r=Math.floor(on(Ie.GrassSide,s,n)*5);i.fillStyle=Do(Io({r:82,g:145,b:65},on(Ie.GrassTop,s,n)*22)),i.fillRect(e+s,t+n,2,Math.max(1,7-n+r))}}function Nr(i,e){const[t,n]=Nt(e);i.strokeStyle="rgba(38, 45, 45, 0.4)",i.lineWidth=1;for(let s=0;s<7;s+=1){const r=Math.floor(on(e,s,2)*ht),a=Math.floor(on(e,s,7)*ht);i.beginPath(),i.moveTo(t+r,n+a);for(let o=0;o<4;o+=1){const l=r+(on(e,s,o)-.5)*22,c=a+o*6+(on(e,o,s)-.5)*12;i.lineTo(t+l,n+c)}i.stroke()}}function Jf(i){At(i,Ie.LogTop,{r:154,g:111,b:62},28,2);const[e,t]=Nt(Ie.LogTop);i.strokeStyle="rgba(82, 48, 27, 0.55)",i.lineWidth=2;for(let n=4;n<16;n+=5)i.beginPath(),i.ellipse(e+16,t+16,n,n*.82,.18,0,Math.PI*2),i.stroke()}function Qf(i){At(i,Ie.LogSide,{r:116,g:74,b:38},30,2);const[e,t]=Nt(Ie.LogSide);for(let n=2;n<ht;n+=6)i.fillStyle=n%12===2?"rgba(65, 38, 23, 0.38)":"rgba(181, 118, 60, 0.2)",i.fillRect(e+n,t,2,ht)}function ep(i){At(i,Ie.Water,{r:52,g:139,b:194},26,2);const[e,t]=Nt(Ie.Water);i.strokeStyle="rgba(204, 241, 255, 0.42)",i.lineWidth=2;for(let n=4;n<ht;n+=9){i.beginPath(),i.moveTo(e+1,t+n);for(let s=1;s<=ht;s+=6)i.lineTo(e+s,t+n+Math.sin((s+n)*.4)*2);i.stroke()}}function tp(i){At(i,Ie.Brick,{r:153,g:74,b:67},26,2);const[e,t]=Nt(Ie.Brick);i.fillStyle="rgba(71, 35, 33, 0.5)";for(let n=8;n<ht;n+=10)i.fillRect(e,t+n,ht,2);for(let n=0;n<4;n+=1){const s=n%2===0?0:8;for(let r=s;r<ht;r+=16)i.fillRect(e+r,t+n*10,2,10)}}function np(i){At(i,Ie.Planks,{r:178,g:126,b:69},30,2);const[e,t]=Nt(Ie.Planks);i.fillStyle="rgba(71, 40, 22, 0.42)";for(let n=8;n<ht;n+=8)i.fillRect(e,t+n,ht,2);for(let n=7;n<ht;n+=11)i.fillRect(e+n,t,2,ht)}function ip(i){At(i,Ie.CraftingTable,{r:149,g:91,b:48},28,2);const[e,t]=Nt(Ie.CraftingTable);i.fillStyle="rgba(49, 29, 18, 0.68)",i.fillRect(e+4,t+4,24,3),i.fillRect(e+4,t+25,24,3),i.fillRect(e+4,t+4,3,24),i.fillRect(e+25,t+4,3,24),i.fillStyle="rgba(224, 180, 96, 0.54)",i.fillRect(e+10,t+10,12,3),i.fillRect(e+10,t+19,12,3),i.fillRect(e+10,t+10,3,12),i.fillRect(e+19,t+10,3,12),i.fillStyle="rgba(224, 224, 202, 0.35)",i.fillRect(e+6,t+14,20,2)}function Mn(i,e,t,n){At(i,e,{r:111,g:118,b:118},28,2),Nr(i,e);const[s,r]=Nt(e);for(let a=0;a<14;a+=1){const o=Math.floor(on(e,a,3)*28)+2,l=Math.floor(on(e,a,11)*28)+2;i.fillStyle=a%2===0?t:n,i.fillRect(s+o,r+l,a%3===0?4:3,3)}}function eo(i,e,t){if(At(i,e,{r:104,g:111,b:108},28,2),Nr(i,e),!t)return;const[n,s]=Nt(e);i.fillStyle="rgba(20, 22, 22, 0.72)",i.fillRect(n+7,s+8,18,12),i.fillStyle="rgba(255, 143, 44, 0.82)",i.fillRect(n+10,s+22,12,4)}function sp(i){At(i,Ie.Chest,{r:156,g:98,b:44},30,2);const[e,t]=Nt(Ie.Chest);i.fillStyle="rgba(62, 35, 17, 0.58)",i.fillRect(e,t+14,ht,3),i.fillRect(e+4,t+4,3,24),i.fillRect(e+25,t+4,3,24),i.fillStyle="#d7c16a",i.fillRect(e+14,t+13,5,7)}function rp(i){const[e,t]=Nt(Ie.Torch);i.clearRect(e,t,ht,ht),i.fillStyle="#80502a",i.fillRect(e+14,t+12,5,18),i.fillStyle="#ff9c2e",i.fillRect(e+10,t+4,13,10),i.fillStyle="#ffe06a",i.fillRect(e+13,t+2,7,7)}function ap(i){At(i,Ie.Gravel,{r:120,g:122,b:120},44,2);const[e,t]=Nt(Ie.Gravel);for(let n=0;n<18;n+=1){const s=Math.floor(on(Ie.Gravel,n,5)*28)+2,r=Math.floor(on(Ie.Gravel,n,13)*28)+2,a=n%3===0?"rgba(210, 210, 198, 0.38)":"rgba(38, 38, 38, 0.34)";i.fillStyle=a,i.fillRect(e+s,t+r,3+n%2,3)}}function op(i){const[e,t]=Nt(Ie.Bed);At(i,Ie.Bed,{r:178,g:74,b:67},20,2),i.fillStyle="#e8e0d2",i.fillRect(e+4,t+4,24,9),i.fillStyle="#8b2d2d",i.fillRect(e+4,t+13,24,13),i.fillStyle="rgba(45, 20, 18, 0.45)",i.fillRect(e+4,t+25,24,3),i.fillStyle="rgba(255, 255, 255, 0.24)",i.fillRect(e+8,t+16,14,2)}function lp(){const i=document.createElement("canvas");i.width=Kf,i.height=Zf;const e=i.getContext("2d");if(!e)throw new Error("Could not create texture atlas canvas.");e.imageSmoothingEnabled=!1,At(e,Ie.GrassTop,{r:83,g:151,b:67},34,2),jf(e),At(e,Ie.Dirt,{r:119,g:83,b:52},38,2),At(e,Ie.Stone,{r:129,g:137,b:135},34,2),Nr(e,Ie.Stone),At(e,Ie.Sand,{r:214,g:199,b:132},24,2),ep(e),Qf(e),Jf(e),At(e,Ie.Leaves,{r:64,g:137,b:75},42,2),Mn(e,Ie.Ore,"#66d3d8","#d8fff8"),tp(e),np(e),ip(e),Mn(e,Ie.CoalOre,"#242827","#585f5c"),Mn(e,Ie.CopperOre,"#c9794a","#6ecf9a"),Mn(e,Ie.IronOre,"#d3aa8e","#f0d8b8"),Mn(e,Ie.GoldOre,"#f2c84b","#ffe899"),Mn(e,Ie.RedstoneOre,"#d8423a","#ff7a69"),Mn(e,Ie.LapisOre,"#345bd2","#5d8cff"),Mn(e,Ie.DiamondOre,"#65e0dc","#d8fff8"),Mn(e,Ie.EmeraldOre,"#4bd66d","#a6ffc0"),eo(e,Ie.FurnaceFront,!0),eo(e,Ie.FurnaceSide,!1),sp(e),rp(e),ap(e),op(e);const t=new wl(i);return t.magFilter=1003,t.minFilter=1005,t.colorSpace=Ot,t.wrapS=1001,t.wrapT=1001,t.generateMipmaps=!0,t.needsUpdate=!0,t}function cp(i){const e=lp();return e.anisotropy=i,{solid:new Ls({map:e,vertexColors:!0,roughness:.92,metalness:0,side:0}),water:new Rl({map:e,color:new Le("#82d7ff"),vertexColors:!0,roughness:.12,metalness:0,transparent:!0,opacity:.58,depthWrite:!1,side:0})}}function hp(i,e){const t=e%Zn,n=Math.floor(e/Zn),s=.65/ht,r=(t+s)/Zn,a=(t+1-s)/Zn,o=1-(n+1-s)/Rr,l=1-(n+s)/Rr;i.push(r,o,a,o,a,l,r,l)}const Uo=Math.sqrt(3),up=.5*(Uo-1),Li=(3-Uo)/6,dp=1/3,cn=1/6,Ui=i=>Math.floor(i)|0,to=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),Sr=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function yr(i=Math.random){const e=No(i),t=new Float64Array(e).map(s=>to[s%12*2]),n=new Float64Array(e).map(s=>to[s%12*2+1]);return function(r,a){let o=0,l=0,c=0;const h=(r+a)*up,u=Ui(r+h),d=Ui(a+h),p=(u+d)*Li,g=u-p,v=d-p,m=r-g,f=a-v;let T,E;m>f?(T=1,E=0):(T=0,E=1);const S=m-T+Li,R=f-E+Li,A=m-1+2*Li,w=f-1+2*Li,U=u&255,y=d&255;let M=.5-m*m-f*f;if(M>=0){const k=U+e[y],Y=t[k],Z=n[k];M*=M,o=M*M*(Y*m+Z*f)}let P=.5-S*S-R*R;if(P>=0){const k=U+T+e[y+E],Y=t[k],Z=n[k];P*=P,l=P*P*(Y*S+Z*R)}let H=.5-A*A-w*w;if(H>=0){const k=U+1+e[y+1],Y=t[k],Z=n[k];H*=H,c=H*H*(Y*A+Z*w)}return 70*(o+l+c)}}function no(i=Math.random){const e=No(i),t=new Float64Array(e).map(r=>Sr[r%12*3]),n=new Float64Array(e).map(r=>Sr[r%12*3+1]),s=new Float64Array(e).map(r=>Sr[r%12*3+2]);return function(a,o,l){let c,h,u,d;const p=(a+o+l)*dp,g=Ui(a+p),v=Ui(o+p),m=Ui(l+p),f=(g+v+m)*cn,T=g-f,E=v-f,S=m-f,R=a-T,A=o-E,w=l-S;let U,y,M,P,H,k;R>=A?A>=w?(U=1,y=0,M=0,P=1,H=1,k=0):R>=w?(U=1,y=0,M=0,P=1,H=0,k=1):(U=0,y=0,M=1,P=1,H=0,k=1):A<w?(U=0,y=0,M=1,P=0,H=1,k=1):R<w?(U=0,y=1,M=0,P=0,H=1,k=1):(U=0,y=1,M=0,P=1,H=1,k=0);const Y=R-U+cn,Z=A-y+cn,q=w-M+cn,J=R-P+2*cn,z=A-H+2*cn,se=w-k+2*cn,ue=R-1+3*cn,ve=A-1+3*cn,Ue=w-1+3*cn,Ye=g&255,W=v&255,ne=m&255;let de=.6-R*R-A*A-w*w;if(de<0)c=0;else{const _e=Ye+e[W+e[ne]];de*=de,c=de*de*(t[_e]*R+n[_e]*A+s[_e]*w)}let ie=.6-Y*Y-Z*Z-q*q;if(ie<0)h=0;else{const _e=Ye+U+e[W+y+e[ne+M]];ie*=ie,h=ie*ie*(t[_e]*Y+n[_e]*Z+s[_e]*q)}let Me=.6-J*J-z*z-se*se;if(Me<0)u=0;else{const _e=Ye+P+e[W+H+e[ne+k]];Me*=Me,u=Me*Me*(t[_e]*J+n[_e]*z+s[_e]*se)}let Oe=.6-ue*ue-ve*ve-Ue*Ue;if(Oe<0)d=0;else{const _e=Ye+1+e[W+1+e[ne+1]];Oe*=Oe,d=Oe*Oe*(t[_e]*ue+n[_e]*ve+s[_e]*Ue)}return 32*(c+h+u+d)}}function No(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=t[n];t[n]=t[s],t[s]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const yn=4,fp=[{name:"top",normal:[0,1,0],shade:1.12,corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{name:"bottom",normal:[0,-1,0],shade:.52,corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{name:"east",normal:[1,0,0],shade:.9,corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{name:"west",normal:[-1,0,0],shade:.7,corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{name:"south",normal:[0,0,1],shade:.82,corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{name:"north",normal:[0,0,-1],shade:.76,corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];class io{constructor(e,t,n=yn){O(this,"group",new wt);O(this,"seed");O(this,"seedInt");O(this,"worldgenVersion");O(this,"chunks",new Map);O(this,"modified",new Map);O(this,"continentalNoise");O(this,"hillNoise");O(this,"detailNoise");O(this,"caveNoise");O(this,"caveRoomNoise");O(this,"materials");this.seed=e,this.seedInt=Df(e),this.worldgenVersion=n,this.materials=t,this.continentalNoise=yr(Kn(this.seedInt^2772082205)),this.hillNoise=yr(Kn(this.seedInt^1374772781)),this.detailNoise=yr(Kn(this.seedInt^2352770883)),this.caveNoise=no(Kn(this.seedInt^795071649)),this.caveRoomNoise=no(Kn(this.seedInt^2585556963)),this.group.name="Codex Craft world"}setModifiedBlocks(e){this.modified.clear();for(const t of e)t.y>=0&&t.y<pt&&this.modified.set(mr(t.x,t.y,t.z),t.block)}forEachModifiedBlockInBounds(e,t,n,s,r){for(const[a,o]of this.modified){const[l,c,h]=Va(a);l>=e&&l<n&&h>=t&&h<s&&c>=0&&c<pt&&r(l,c,h,o)}}exportModifiedBlocks(){const e=[];for(const[t,n]of this.modified){const[s,r,a]=Va(t);e.push({x:s,y:r,z:a,block:n})}return e}getStats(){return{chunks:this.chunks.size}}getBlock(e,t,n){if(t<0)return $.Stone;if(t>=pt)return $.Air;const s=this.modified.get(mr(e,t,n));if(s!==void 0)return s;const r=In(e,De),a=In(n,De),o=this.chunks.get(Fn(r,a));return o?o.getLocal(fi(e,De),t,fi(n,De)):this.getNaturalBlock(e,t,n)}setBlock(e,t,n,s){if(t<0||t>=pt||this.getBlock(e,t,n)===s)return!1;this.modified.set(mr(e,t,n),s);const a=In(e,De),o=In(n,De),l=this.chunks.get(Fn(a,o));return l&&l.setLocal(fi(e,De),t,fi(n,De),s),this.markDirtyAround(e,n),!0}ensureChunksAround(e,t=Sf){var a;const n=In(e.x,De),s=In(e.z,De),r=new Set;for(let o=-t;o<=t;o+=1)for(let l=-t;l<=t;l+=1){const c=n+l,h=s+o,u=Fn(c,h);if(r.add(u),!this.chunks.has(u)){const d=new pp(this,c,h);this.chunks.set(u,d)}}for(const[o,l]of this.chunks)Math.max(Math.abs(l.cx-n),Math.abs(l.cz-s))>t+1&&(l.dispose(this.group),this.chunks.delete(o));for(const o of r)(a=this.chunks.get(o))==null||a.rebuild(this.group,this.materials)}terrainHeight(e,t){const n=(this.continentalNoise(e*.0048,t*.0048)+1)*.5,s=this.hillNoise(e*.028,t*.028),r=this.detailNoise(e*.092,t*.092),a=(n-.42)*30,o=Math.floor(Wt+a+s*8+r*3);return Lt(o,8,pt-12)}getNaturalBlock(e,t,n){const s=this.terrainHeight(e,n);return t>s?t<=Wt?$.Water:$.Air:t===s?s<=Wt+1?xt(this.seedInt^27514,e,t,n)<.18?$.Gravel:$.Sand:s>pt-18&&xt(this.seedInt,e,t,n)>.62?$.Stone:$.Grass:t>s-4?s<=Wt+1?xt(this.seedInt^424561,e,t,n)<.22?$.Gravel:$.Sand:$.Dirt:this.worldgenVersion<yn?t<s-8&&t<45&&xt(this.seedInt,e,t,n)<.018?$.Ore:$.Stone:this.isCave(e,t,n,s)?t<Wt-10&&xt(this.seedInt^14858,e,t,n)<.075?$.Water:$.Air:this.oreAt(e,t,n,s)??$.Stone}isCave(e,t,n,s){if(t<5||t>s-5)return!1;const r=Math.max(0,1-Math.hypot(e,n)/20),a=Lt((s-t)/42,0,1),o=Math.abs(this.caveNoise(e*.055,t*.078,n*.055)),l=this.caveRoomNoise(e*.027,t*.038,n*.027),c=.055+a*.055-r*.04,h=.73+r*.08;return o<c||l>h}oreAt(e,t,n,s){const r=[{block:$.DiamondOre,min:2,max:16,peaks:[5],chance:.018,salt:3354},{block:$.RedstoneOre,min:4,max:18,peaks:[7],chance:.028,salt:3802},{block:$.GoldOre,min:4,max:24,peaks:[12],chance:.018,salt:24605},{block:$.LapisOre,min:8,max:30,peaks:[18],chance:.018,salt:108821},{block:$.EmeraldOre,min:28,max:60,peaks:[44],chance:.012,salt:3630,mountainOnly:!0},{block:$.IronOre,min:8,max:54,peaks:[16,44],chance:.055,salt:7946},{block:$.CopperOre,min:16,max:44,peaks:[32],chance:.045,salt:49305},{block:$.CoalOre,min:20,max:60,peaks:[46],chance:.075,salt:49313}];for(const a of r){if(t<a.min||t>a.max||a.mountainOnly&&s<Wt+24)continue;const o=Math.max(...a.peaks.map(h=>1-Math.abs(t-h)/Math.max(1,a.max-a.min))),l=xt(this.seedInt^a.salt,Math.floor(e/2),Math.floor(t/2),Math.floor(n/2)),c=xt(this.seedInt^a.salt<<1,e,t,n);if(l<a.chance*o&&c<.74)return a.block}return null}shouldTree(e,t){const n=this.terrainHeight(e,t);return n<=Wt+2||n>pt-18?!1:(this.detailNoise(e*.018+200,t*.018-100)+1)*.5>.44&&xt(this.seedInt,e,91,t)<.025}treeHeight(e,t){return 4+Math.floor(xt(this.seedInt,e,123,t)*3)}findSpawn(){let e=null,t=-1/0;for(let n=-48;n<=48;n+=3)for(let s=-48;s<=48;s+=3){const r=this.terrainHeight(s,n),a=Wt+10,o=32-Math.abs(r-a)*2.4,l=r<=Wt+14?7:0,c=Math.hypot(s,n)*.08,h=this.nearbyTreePenalty(s,n),u=o+l-c-h*2+this.hillNoise(s*.04,n*.04);r>Wt+2&&h<4&&u>t&&(t=u,e=new L(s+.5,r+2,n+.5))}return e??new L(.5,this.terrainHeight(0,0)+4,.5)}findScenicYaw(e){let t=0,n=-1/0;const s=e.y+1.6;for(let r=0;r<40;r+=1){const a=r/40*Math.PI*2,o=-Math.sin(a),l=-Math.cos(a);let c=0;for(let h=6;h<=60;h+=4){const u=Math.round(e.x+o*h),d=Math.round(e.z+l*h),p=this.terrainHeight(u,d),g=s-p;c+=Lt(g,-12,22)*(1/(1+h*.035)),p<=Wt+1&&(c+=8),p>s-1&&h<16&&(c-=34)}c>n&&(n=c,t=a)}return t}markDirtyAround(e,t){var o,l,c,h,u;const n=In(e,De),s=In(t,De),r=fi(e,De),a=fi(t,De);(o=this.chunks.get(Fn(n,s)))==null||o.markDirty(),r===0&&((l=this.chunks.get(Fn(n-1,s)))==null||l.markDirty()),r===De-1&&((c=this.chunks.get(Fn(n+1,s)))==null||c.markDirty()),a===0&&((h=this.chunks.get(Fn(n,s-1)))==null||h.markDirty()),a===De-1&&((u=this.chunks.get(Fn(n,s+1)))==null||u.markDirty())}nearbyTreePenalty(e,t){let n=0;for(let s=-8;s<=8;s+=1)for(let r=-8;r<=8;r+=1)this.shouldTree(e+r,t+s)&&(n+=9-Math.min(8,Math.max(Math.abs(r),Math.abs(s))));return n}}class pp{constructor(e,t,n){O(this,"cx");O(this,"cz");O(this,"blocks",new Uint8Array(De*pt*De));O(this,"world");O(this,"dirty",!0);O(this,"solidMesh",null);O(this,"waterMesh",null);this.world=e,this.cx=t,this.cz=n,this.generate()}getLocal(e,t,n){return t<0?$.Stone:t>=pt?$.Air:this.blocks[this.index(e,t,n)]}setLocal(e,t,n,s){t<0||t>=pt||(this.blocks[this.index(e,t,n)]=s,this.markDirty())}markDirty(){this.dirty=!0}rebuild(e,t){if(!this.dirty)return;this.dispose(e);const n=so(),s=so(),r=this.cx*De,a=this.cz*De;for(let o=0;o<De;o+=1)for(let l=0;l<De;l+=1)for(let c=0;c<pt;c+=1){const h=this.getLocal(l,c,o);if(h===$.Air)continue;const u=r+l,d=a+o,p=bn[h];for(const g of fp){const v=this.world.getBlock(u+g.normal[0],c+g.normal[1],d+g.normal[2]);if(p.fluid){if(v!==$.Air)continue}else if(v!==$.Air&&!bn[v].transparent)continue;mp(p.fluid?s:n,u,c,d,g,h)}}this.solidMesh=ro(n,t.solid,"solid"),this.waterMesh=ro(s,t.water,"water"),this.solidMesh&&e.add(this.solidMesh),this.waterMesh&&(this.waterMesh.renderOrder=3,e.add(this.waterMesh)),this.dirty=!1}dispose(e){this.solidMesh&&(e.remove(this.solidMesh),this.solidMesh.geometry.dispose(),this.solidMesh=null),this.waterMesh&&(e.remove(this.waterMesh),this.waterMesh.geometry.dispose(),this.waterMesh=null)}generate(){const e=this.cx*De,t=this.cz*De;for(let n=0;n<De;n+=1)for(let s=0;s<De;s+=1){const r=e+s,a=t+n;for(let o=0;o<pt;o+=1)this.blocks[this.index(s,o,n)]=this.world.getNaturalBlock(r,o,a)}this.placeTrees(),this.placeStructures(),this.applyModifiedBlocks()}placeStructures(){if(this.world.worldgenVersion<yn)return;const e=this.cx*De,t=this.cz*De,n=e+4+Math.floor(xt(this.world.seedInt^379569,this.cx,20,this.cz)*8),s=t+4+Math.floor(xt(this.world.seedInt^379570,this.cx,21,this.cz)*8),r=xt(this.world.seedInt^30737,this.cx,0,this.cz),a=xt(this.world.seedInt^37334,this.cx,7,this.cz);r<.018?this.placeCabin(n,s):r<.04&&this.placeRuinedCamp(n,s),a<.035?this.placeMineshaft(n,10+Math.floor(xt(this.world.seedInt^41246,this.cx,4,this.cz)*22),s):a<.047&&this.placeDungeon(n,8+Math.floor(xt(this.world.seedInt^53358,this.cx,5,this.cz)*18),s)}placeCabin(e,t){const n=this.world.terrainHeight(e,t)+1;if(!(n<=Wt+1||n>=pt-12)){for(let s=-3;s<=3;s+=1)for(let r=-3;r<=3;r+=1){this.placeGlobal(e+r,n-1,t+s,$.Planks,!0);for(let l=n;l<=n+3;l+=1)this.placeGlobal(e+r,l,t+s,$.Air,!0);const a=Math.abs(r)===3||Math.abs(s)===3,o=Math.abs(r)===3&&Math.abs(s)===3;a&&!(s===-3&&r>=-1&&r<=1&&n<pt-4)&&(this.placeGlobal(e+r,n,t+s,o?$.Log:$.Planks,!0),this.placeGlobal(e+r,n+1,t+s,o?$.Log:$.Planks,!0)),(a||Math.abs(r)<=2||Math.abs(s)<=2)&&this.placeGlobal(e+r,n+3,t+s,$.Planks,!0)}this.placeGlobal(e-1,n,t-3,$.Air,!0),this.placeGlobal(e,n,t-3,$.Air,!0),this.placeGlobal(e+2,n,t+1,$.CraftingTable,!0),this.placeGlobal(e-2,n,t+1,$.Chest,!0),this.placeGlobal(e,n,t+2,$.Furnace,!0),this.placeGlobal(e-2,n,t-1,$.Bed,!0),this.placeGlobal(e+1,n+1,t-2,$.Torch,!0)}}placeRuinedCamp(e,t){const n=this.world.terrainHeight(e,t)+1;if(!(n<=Wt+1||n>=pt-8)){for(let s=-2;s<=2;s+=1)for(let r=-2;r<=2;r+=1)(Math.abs(r)===2||Math.abs(s)===2||xt(this.world.seedInt,e+r,n,t+s)<.3)&&this.placeGlobal(e+r,n-1,t+s,$.Planks,!0);this.placeGlobal(e-2,n,t-2,$.Log,!0),this.placeGlobal(e+2,n,t-2,$.Log,!0),this.placeGlobal(e-1,n,t+1,$.Chest,!0),this.placeGlobal(e+1,n,t,$.Furnace,!0),this.placeGlobal(e,n,t,$.Torch,!0)}}placeMineshaft(e,t,n){for(let s=-8;s<=8;s+=1){for(let r=0;r<=2;r+=1)for(let a=-1;a<=1;a+=1)this.placeGlobal(e+s,t+r,n+a,$.Air,!0);s%4===0&&(this.placeGlobal(e+s,t,n-1,$.Log,!0),this.placeGlobal(e+s,t+1,n-1,$.Log,!0),this.placeGlobal(e+s,t,n+1,$.Log,!0),this.placeGlobal(e+s,t+1,n+1,$.Log,!0),this.placeGlobal(e+s,t+2,n,$.Planks,!0))}this.placeGlobal(e-4,t,n,$.Chest,!0),this.placeGlobal(e+4,t+1,n-1,$.Torch,!0)}placeDungeon(e,t,n){for(let s=-4;s<=4;s+=1)for(let r=-4;r<=4;r+=1)for(let a=-1;a<=3;a+=1){const o=Math.abs(r)===4||Math.abs(s)===4||a===-1||a===3;this.placeGlobal(e+r,t+a,n+s,o?$.Brick:$.Air,!0)}this.placeGlobal(e,t,n,$.Chest,!0),this.placeGlobal(e-2,t,n+2,$.GoldOre,!0),this.placeGlobal(e+2,t,n-2,$.RedstoneOre,!0),this.placeGlobal(e,t+1,n-3,$.Torch,!0)}placeTrees(){const e=this.cx*De,t=this.cz*De,n=4;for(let s=t-n;s<t+De+n;s+=1)for(let r=e-n;r<e+De+n;r+=1){if(!this.world.shouldTree(r,s))continue;const a=this.world.terrainHeight(r,s),o=this.world.treeHeight(r,s);for(let h=a+1;h<=a+o;h+=1)this.placeGlobal(r,h,s,$.Log,!0);const l=a+o-2,c=a+o+2;for(let h=l;h<=c;h+=1){const u=h>=c?1:2;for(let d=-u;d<=u;d+=1)for(let p=-u;p<=u;p+=1){const g=Math.abs(p)===u&&Math.abs(d)===u,v=xt(this.world.seedInt,r+p,h,s+d)>.42;g&&!v||this.placeGlobal(r+p,h,s+d,$.Leaves,!1)}}}}placeGlobal(e,t,n,s,r){const a=this.cx*De,o=this.cz*De;if(e<a||e>=a+De||n<o||n>=o+De||t<0||t>=pt)return;const l=e-a,c=n-o,h=this.getLocal(l,t,c);!r&&h!==$.Air&&h!==$.Water||(this.blocks[this.index(l,t,c)]=s)}applyModifiedBlocks(){const e=this.cx*De,t=this.cz*De,n=e+De,s=t+De;this.world.forEachModifiedBlockInBounds(e,t,n,s,(r,a,o,l)=>{this.blocks[this.index(r-e,a,o-t)]=l})}index(e,t,n){return t*De*De+n*De+e}}function so(){return{positions:[],normals:[],uvs:[],colors:[],indices:[]}}function mp(i,e,t,n,s,r){const a=i.positions.length/3,o=bn[r].tiles[s.name],l=Lt(.82+t/pt*.24,.7,1.14),c=Lt(s.shade*l,.42,1.18),h=r===$.Water?1.14:1;for(const u of s.corners)i.positions.push(e+u[0],t+u[1],n+u[2]),i.normals.push(...s.normal),i.colors.push(c*h,c*h,c*h);hp(i.uvs,o),i.indices.push(a,a+1,a+2,a,a+2,a+3)}function ro(i,e,t){if(i.positions.length===0)return null;const n=new Yt;n.setAttribute("position",new bt(i.positions,3)),n.setAttribute("normal",new bt(i.normals,3)),n.setAttribute("uv",new bt(i.uvs,2)),n.setAttribute("color",new bt(i.colors,3)),n.setIndex(i.indices),n.computeBoundingSphere();const s=new qe(n,e);return s.name=`chunk-${t}`,s.castShadow=t==="solid",s.receiveShadow=!0,s}function Fn(i,e){return`${i},${e}`}class gp{constructor(e,t){O(this,"element");O(this,"callbacks");O(this,"menuLayer");O(this,"panelLayer");O(this,"hudLayer");O(this,"statusLine");O(this,"debugChip");O(this,"reticle");O(this,"itemName");O(this,"miningFill");O(this,"heartRow");O(this,"armorRow");O(this,"hungerRow");O(this,"airRow");O(this,"hotbar");O(this,"toast");O(this,"mode","title");O(this,"worlds",[]);O(this,"stats",null);O(this,"panelSignature","");O(this,"toastTimer",0);O(this,"catalogQuery","");O(this,"catalogPage",0);O(this,"catalogSelectedItem",null);this.callbacks=t,this.element=document.createElement("div"),this.element.className="hud",this.hudLayer=document.createElement("div"),this.hudLayer.className="play-hud";const n=document.createElement("div");n.className="top-bar compact";const s=document.createElement("div");s.className="brand-stack";const r=document.createElement("div");r.className="brand-title pixel-title-small",r.textContent="Codex Craft",this.statusLine=document.createElement("div"),this.statusLine.className="status-line",s.append(r,this.statusLine),this.debugChip=document.createElement("div"),this.debugChip.className="world-chip debug-chip",n.append(s,this.debugChip),this.reticle=document.createElement("div"),this.reticle.className="reticle";const a=document.createElement("div");a.className="mining-progress",this.miningFill=document.createElement("span"),a.append(this.miningFill),this.itemName=document.createElement("div"),this.itemName.className="selected-item-name";const o=document.createElement("div");o.className="survival-bars",this.armorRow=document.createElement("div"),this.armorRow.className="icon-row armor",this.heartRow=document.createElement("div"),this.heartRow.className="icon-row hearts",this.hungerRow=document.createElement("div"),this.hungerRow.className="icon-row hunger",this.airRow=document.createElement("div"),this.airRow.className="icon-row air",o.append(this.armorRow,this.heartRow,this.hungerRow,this.airRow),this.hotbar=document.createElement("div"),this.hotbar.className="hotbar survival-hotbar",this.toast=document.createElement("div"),this.toast.className="toast",this.hudLayer.append(n,this.reticle,a,this.itemName,o,this.hotbar,this.toast),this.menuLayer=document.createElement("div"),this.menuLayer.className="menu-layer",this.panelLayer=document.createElement("div"),this.panelLayer.className="panel-layer",this.element.append(this.hudLayer,this.menuLayer,this.panelLayer),e.append(this.element),this.render()}setMode(e){this.mode=e,this.panelSignature="",this.render()}setWorlds(e){this.worlds=e,this.render()}update(e){if(this.stats=e,this.renderHud(),this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace"){const t=this.makePanelSignature(e);if(t===this.panelSignature)return;this.panelSignature=t,this.renderPanel()}}showToast(e){window.clearTimeout(this.toastTimer),this.toast.textContent=e,this.toast.classList.add("visible"),this.toastTimer=window.setTimeout(()=>{this.toast.classList.remove("visible")},1800)}render(){this.element.dataset.mode=this.mode,this.renderMenu(),this.renderPanel(),this.renderHud()}renderHud(){if(!this.stats)return;const e=this.stats.selectedStack;this.statusLine.textContent=this.stats.position,this.debugChip.innerHTML="",this.debugChip.append(this.makeMetric("월드",this.stats.activeWorldName),this.makeMetric("FPS",String(this.stats.fps)),this.makeMetric("청크",String(this.stats.chunks)),this.makeMetric("몹",String(this.stats.mobs)),this.makeMetric("저장",this.stats.saveState)),this.itemName.textContent=e?st[e.item].name:"",this.miningFill.style.width=`${Math.round(this.stats.miningProgress*100)}%`,this.renderIconRow(this.armorRow,"armor",this.armorPoints()),this.renderIconRow(this.heartRow,"heart",this.stats.survival.health),this.renderIconRow(this.hungerRow,"hunger",this.stats.survival.hunger),this.renderIconRow(this.airRow,"air",this.stats.survival.air),this.renderHotbar()}renderMenu(){if(this.menuLayer.innerHTML="",this.mode==="playing"||this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace"){this.menuLayer.hidden=!0;return}if(this.menuLayer.hidden=!1,this.mode==="title"){this.menuLayer.append(this.makeTitleMenu());return}if(this.mode==="worldSelect"){this.menuLayer.append(this.makeWorldSelect());return}if(this.mode==="createWorld"){this.menuLayer.append(this.makeCreateWorld());return}if(this.mode==="paused"){this.menuLayer.append(this.makePauseMenu());return}if(this.mode==="gameOver"){this.menuLayer.append(this.makeGameOver());return}this.mode==="loading"&&this.menuLayer.append(this.makeMenuPanel("지형 불러오는 중","청크를 만들고 하늘을 준비하고 있습니다.",[]))}renderPanel(){if(this.panelLayer.innerHTML="",!this.stats||this.mode!=="inventory"&&this.mode!=="craftingTable"&&this.mode!=="furnace"){this.panelLayer.hidden=!0;return}this.panelLayer.hidden=!1,this.panelLayer.append(this.mode==="furnace"?this.makeFurnacePanel():this.makeInventoryPanel(this.mode==="craftingTable"?3:2))}makeTitleMenu(){const e=[this.makeMenuButton("싱글플레이",this.callbacks.onSingleplayer),this.makeMenuButton("새 월드 만들기",this.callbacks.onCreateWorldMenu),this.makeMenuButton("설정",()=>this.showToast("설정은 현재 생존 빌드에 통합되어 있습니다.")),this.makeMenuButton("타이틀로 돌아가기",()=>this.showToast("이 빌드는 로컬 싱글플레이 전용입니다."))];return this.makeMenuPanel("Codex Craft","블록을 캐고, 만들고, 밤을 버티는 로컬 생존 샌드박스.",e,!0)}makeWorldSelect(){const e=this.makeMenuPanel("월드 선택","로컬 싱글플레이 저장을 선택하세요.",[],!1),t=document.createElement("div");if(t.className="world-list",this.worlds.length===0){const s=document.createElement("div");s.className="empty-worlds",s.textContent="아직 만든 월드가 없습니다.",t.append(s)}for(const s of this.worlds){const r=document.createElement("div");r.className="world-row";const a=document.createElement("button");a.className="world-main",a.type="button",a.addEventListener("click",()=>this.callbacks.onSelectWorld(s.id));const o=document.createElement("strong");o.textContent=s.name;const l=document.createElement("span");l.textContent=`${s.seed} | ${new Date(s.updatedAt).toLocaleString()}`,a.append(o,l);const c=document.createElement("button");c.className="menu-button danger mini",c.type="button",c.textContent="삭제",c.addEventListener("click",()=>this.callbacks.onDeleteWorld(s.id)),r.append(a,c);const h=document.createElement("button");h.className="menu-button mini",h.type="button",h.textContent="동굴 월드 복사 재생성",h.addEventListener("click",()=>this.callbacks.onRegenerateWorld(s.id)),r.append(h),t.append(r)}const n=document.createElement("div");return n.className="menu-actions",n.append(this.makeMenuButton("새 월드 만들기",this.callbacks.onCreateWorldMenu),this.makeMenuButton("뒤로",this.callbacks.onBackToTitle)),e.append(t,n),e}makeCreateWorld(){const e=this.makeMenuPanel("새 월드 만들기","생존 | 보통 | 로컬 저장",[],!1),t=document.createElement("form");t.className="create-form";const n=document.createElement("input");n.className="pixel-input",n.name="worldName",n.maxLength=28,n.placeholder="월드 이름",n.value=`새 월드 ${this.worlds.length+1}`;const s=document.createElement("input");s.className="pixel-input",s.name="seed",s.maxLength=36,s.placeholder="시드",s.value=`codex-${Math.floor(Date.now()/1e3).toString(36)}`;const r=document.createElement("div");r.className="menu-actions";const a=this.makeMenuButton("생성",()=>{});return a.type="submit",r.append(a,this.makeMenuButton("취소",this.callbacks.onBackToTitle)),t.append(n,s,r),t.addEventListener("submit",o=>{o.preventDefault(),this.callbacks.onCreateWorld(n.value.trim()||"새 월드",s.value.trim()||"codex-aurora")}),e.append(t),e}makePauseMenu(){return this.makeMenuPanel("게임 메뉴","월드가 일시정지되었습니다.",[this.makeMenuButton("게임으로 돌아가기",this.callbacks.onResume),this.makeMenuButton("저장하고 타이틀로",this.callbacks.onQuitToTitle),this.makeMenuButton("모든 로컬 월드 초기화",this.callbacks.onResetAll,"danger")])}makeGameOver(){return this.makeMenuPanel("사망했습니다","월드 스폰 지점에서 다시 시작합니다.",[this.makeMenuButton("리스폰",this.callbacks.onRespawn),this.makeMenuButton("타이틀 화면",this.callbacks.onQuitToTitle)],!0)}makeInventoryPanel(e){const t=this.stats;if(!t)return document.createElement("div");const n=document.createElement("div");n.className=`inventory-panel grid-${e}`;const s=document.createElement("div");s.className="inventory-tooltip",s.hidden=!0,n.addEventListener("mousemove",E=>{n.style.setProperty("--cursor-x",`${E.clientX}px`),n.style.setProperty("--cursor-y",`${E.clientY}px`);const S=E.target.closest(".inventory-slot, .craft-slot, .craft-result-slot, .equipment-slot"),R=this.stackFromSlotElement(S);if(!R){s.hidden=!0;return}s.textContent=st[R.item].name,s.style.setProperty("--tooltip-x",`${E.clientX}px`),s.style.setProperty("--tooltip-y",`${E.clientY}px`),s.hidden=!1}),n.addEventListener("mouseleave",()=>{s.hidden=!0});const r=document.createElement("div");r.className="inventory-title",r.textContent=e===3?"제작대":"인벤토리";const a=document.createElement("div");a.className="recipe-book";const o=document.createElement("div");o.className="recipe-title",o.textContent="제작법 책",a.append(o);for(const E of t.recipes.filter(S=>S.unlocked&&S.recipe.size<=e)){const S=document.createElement("button");S.className=`recipe-card ${E.craftable?"craftable":""}`,S.type="button",S.disabled=!E.craftable,S.addEventListener("click",R=>{this.callbacks.onCraftRecipe(E.recipe.id,R.shiftKey,e)}),S.append(this.makeItemIcon(E.recipe.result),document.createTextNode(E.recipe.name)),a.append(S)}const l=this.makeItemCatalog(e),c=document.createElement("div");c.className="player-paper";const h=document.createElement("div");h.className="player-avatar",h.textContent="CC";const u=document.createElement("div");u.className="equipment-slots",u.append(this.makeEquipmentSlot("head","투구"),this.makeEquipmentSlot("chest","흉갑"),this.makeEquipmentSlot("legs","각반"),this.makeEquipmentSlot("feet","부츠"),this.makeOffhandSlot()),c.append(h,u);const d=document.createElement("div");d.className="crafting-area";const p=document.createElement("div");p.className=`craft-grid cells-${e}`;for(let E=0;E<e*e;E+=1)p.append(this.makeCraftSlot(E));const g=document.createElement("div");g.className="craft-arrow",g.textContent=">";const v=document.createElement("button");v.className="craft-result-slot",v.type="button",v.dataset.slotRef="result",v.disabled=!t.craftingResult,v.addEventListener("click",E=>this.callbacks.onCraftResult(E.shiftKey)),t.craftingResult&&(v.title=st[t.craftingResult.item].name,v.append(this.makeItemIcon(t.craftingResult),this.makeCount(t.craftingResult.count))),d.append(p,g,v);const m=document.createElement("div");m.className="storage-grid";for(let E=0;E<27;E+=1)m.append(this.makeSlot(E));const f=document.createElement("div");f.className="inventory-hotbar-grid";for(let E=qt;E<qt+9;E+=1)f.append(this.makeSlot(E));const T=document.createElement("div");return T.className="cursor-stack",t.inventory.cursor&&T.append(this.makeItemIcon(t.inventory.cursor),this.makeCount(t.inventory.cursor.count)),n.append(r,a,c,d,m,f,l,T,s),n}makeFurnacePanel(){const e=this.stats;if(!e)return document.createElement("div");const t=this.makeInventoryPanel(3);t.classList.add("furnace-panel");const n=t.querySelector(".inventory-title");n&&(n.textContent="화로");const s=t.querySelector(".recipe-book");if(s){s.innerHTML="";const r=document.createElement("div");r.className="recipe-title",r.textContent="제련",s.append(r);for(const a of e.smeltingRecipes){const o=document.createElement("button");o.className=`recipe-card ${a.smeltable?"craftable":""}`,o.type="button",o.disabled=!a.smeltable,o.addEventListener("click",l=>{this.callbacks.onSmeltRecipe(a.recipe.id,l.shiftKey)}),o.append(this.makeItemIcon(a.recipe.result),document.createTextNode(a.recipe.name)),s.append(o)}}return t}makeItemCatalog(e){var S;const t=this.stats,n=document.createElement("div");n.className="item-catalog";const s=Object.values(st),r=this.catalogQuery.trim().toLowerCase(),a=s.filter(R=>r?R.name.toLowerCase().includes(r)||R.id.toLowerCase().includes(r):!0);this.catalogSelectedItem&&!a.some(R=>R.id===this.catalogSelectedItem)&&(this.catalogSelectedItem=((S=a[0])==null?void 0:S.id)??null);const o=48,l=Math.max(1,Math.ceil(a.length/o));this.catalogPage=Math.max(0,Math.min(this.catalogPage,l-1));const c=a.slice(this.catalogPage*o,this.catalogPage*o+o),h=document.createElement("div");h.className="catalog-header";const u=document.createElement("strong");u.textContent="아이템 목록";const d=document.createElement("span");d.textContent=`${a.length}/${s.length}`,h.append(u,d);const p=document.createElement("input");p.className="catalog-search",p.placeholder="아이템 검색",p.value=this.catalogQuery,p.addEventListener("input",()=>{this.catalogQuery=p.value,this.catalogPage=0,this.renderPanel();const R=this.panelLayer.querySelector(".catalog-search");R==null||R.focus(),R==null||R.setSelectionRange(R.value.length,R.value.length)});const g=document.createElement("div");g.className="catalog-pager";const v=this.makeCatalogButton("<",()=>{this.catalogPage=(this.catalogPage-1+l)%l,this.renderPanel()}),m=document.createElement("span");m.textContent=`${this.catalogPage+1}/${l}`;const f=this.makeCatalogButton(">",()=>{this.catalogPage=(this.catalogPage+1)%l,this.renderPanel()});g.append(v,m,f);const T=document.createElement("div");T.className="catalog-grid";for(const R of c){const A=document.createElement("button");A.className=`catalog-item ${this.catalogSelectedItem===R.id?"selected":""}`,A.type="button",A.dataset.item=R.id,A.title=R.name,A.setAttribute("aria-label",R.name),A.addEventListener("click",()=>{this.catalogSelectedItem=R.id,this.renderPanel()}),A.append(this.makeItemIcon({item:R.id,count:1})),T.append(A)}const E=this.makeCatalogDetail(e,t);return n.append(h,p,g,T,E),n}makeCatalogButton(e,t){const n=document.createElement("button");return n.className="catalog-page-button",n.type="button",n.textContent=e,n.addEventListener("click",t),n}makeCatalogDetail(e,t){const n=document.createElement("div");if(n.className="catalog-detail",!t||!this.catalogSelectedItem){const p=document.createElement("div");return p.className="catalog-empty",p.textContent="아이템을 선택하면 제작법과 획득처가 표시됩니다.",n.append(p),n}const s=st[this.catalogSelectedItem],r=document.createElement("div");r.className="catalog-detail-head",r.append(this.makeItemIcon({item:s.id,count:1}));const a=document.createElement("div"),o=document.createElement("strong");o.textContent=s.name;const l=document.createElement("span");l.textContent=s.id,a.append(o,l),r.append(a);const c=document.createElement("div");c.className="catalog-meta",c.append(this.makeCatalogChip("구현됨"),this.makeCatalogChip(s.placeBlock?"블록":s.toolKind?"도구":s.food?"음식":"아이템")),s.toolKind&&c.append(this.makeCatalogChip(this.toolChip(s.toolTier??"hand",s.toolKind)));const h=t.recipes.filter(p=>p.recipe.result.item===s.id),u=t.smeltingRecipes.filter(p=>p.recipe.result.item===s.id),d=this.dropSources(s.id);if(n.append(r,c),h.length>0){n.append(this.makeCatalogSectionTitle("제작법"));for(const p of h)n.append(this.makeRecipePreview(p,e))}if(u.length>0){n.append(this.makeCatalogSectionTitle("제련법"));for(const p of u)n.append(this.makeSmeltingPreview(p))}if(d.length>0){n.append(this.makeCatalogSectionTitle("획득처"));const p=document.createElement("div");p.className="source-list";for(const g of d)p.append(this.makeCatalogChip(g));n.append(p)}if(h.length===0&&u.length===0&&d.length===0){const p=document.createElement("div");p.className="catalog-empty",p.textContent="아직 제작법은 없지만, 월드 탐험이나 다음 시스템에서 쓰일 수 있는 구현된 아이템입니다.",n.append(p)}return n}makeRecipePreview(e,t){const n=e.recipe,s=document.createElement("div");s.className="catalog-recipe-card";const r=document.createElement("div");r.className=`recipe-mini-grid cells-${n.size}`;const a=this.recipePreviewLayout(n);for(let h=0;h<n.size*n.size;h+=1){const u=document.createElement("span");u.className="recipe-mini-cell";const d=a[h];d&&u.append(this.makeItemIcon({item:d,count:1})),r.append(u)}const o=document.createElement("span");o.className="recipe-mini-arrow",o.textContent=">";const l=document.createElement("span");l.className="recipe-mini-result",l.append(this.makeItemIcon(n.result),this.makeCount(n.result.count));const c=document.createElement("button");return c.className="recipe-fill-button",c.type="button",c.textContent=e.craftable&&n.size<=t?"배치":"부족",c.disabled=!e.craftable||n.size>t,c.addEventListener("click",()=>this.callbacks.onCraftRecipe(n.id,!1,t)),s.append(r,o,l,c),s}makeSmeltingPreview(e){const t=e.recipe,n=document.createElement("div");n.className="catalog-recipe-card smelting-preview";const s=document.createElement("span");s.className="recipe-mini-result",s.append(this.makeItemIcon({item:t.input,count:1}));const r=document.createElement("span");r.className="recipe-mini-result",r.append(this.makeItemIcon({item:t.fuel,count:1}));const a=document.createElement("span");a.className="recipe-mini-arrow",a.textContent=">";const o=document.createElement("span");o.className="recipe-mini-result",o.append(this.makeItemIcon(t.result),this.makeCount(t.result.count));const l=document.createElement("button");return l.className="recipe-fill-button",l.type="button",l.textContent=e.smeltable?"제련":"부족",l.disabled=!e.smeltable,l.addEventListener("click",()=>this.callbacks.onSmeltRecipe(t.id,!1)),n.append(s,r,a,o,l),n}toolChip(e,t){const n={hand:"손",wood:"나무",stone:"돌",copper:"구리",iron:"철",gold:"금",diamond:"다이아"},s={none:"도구 없음",pickaxe:"곡괭이",axe:"도끼",shovel:"삽",sword:"검",bow:"활",shield:"방패",shears:"가위"};return`${n[e]} ${s[t]}`}makeCatalogSectionTitle(e){const t=document.createElement("div");return t.className="catalog-section-title",t.textContent=e,t}makeCatalogChip(e){const t=document.createElement("span");return t.className="catalog-chip",t.textContent=e,t}recipePreviewLayout(e){var s,r,a;const t=e.size,n=Array.from({length:t*t},()=>null);if(e.type==="shapeless"){let o=0;for(const[l,c]of Object.entries(e.ingredients??{}))for(let h=0;h<c;h+=1)o<n.length&&(n[o]=l,o+=1);return n}for(let o=0;o<(((s=e.pattern)==null?void 0:s.length)??0);o+=1){const l=((r=e.pattern)==null?void 0:r[o])??"";for(let c=0;c<Math.min(l.length,t);c+=1){const h=(a=e.key)==null?void 0:a[l[c]];h&&(n[o*t+c]=h)}}return n}dropSources(e){const t=Object.values(bn).filter(s=>s.drops===e).map(s=>s.displayName),n={rotten_flesh:["좀비"],bone:["스켈레톤"],arrow:["스켈레톤","제작"],string:["거미"],spider_eye:["거미"],gunpowder:["크리퍼"],raw_beef:["소"],leather:["소"],raw_porkchop:["돼지"],raw_mutton:["양"],wool:["양"],raw_chicken:["닭"],feather:["닭"],egg:["닭"],flint:["자갈"]};return[...t,...n[e]??[]]}renderHotbar(){if(!this.stats)return;this.hotbar.innerHTML="";const e=this.stats.inventory;for(let t=0;t<9;t+=1){const n=document.createElement("div");n.className=`slot ${t===e.selectedHotbarSlot?"selected":""}`;const s=document.createElement("span");s.className="slot-index",s.textContent=String(t+1),n.append(s);const r=e.slots[qt+t];r&&n.append(this.makeItemIcon(r),this.makeCount(r.count)),this.hotbar.append(n)}}makeSlot(e){const t=this.stats,n=document.createElement("button");n.className="inventory-slot",n.type="button",n.dataset.slot=String(e),n.dataset.slotRef=`inventory:${e}`,n.draggable=!!(t!=null&&t.inventory.slots[e]),n.addEventListener("click",r=>{const a=this.numberFromEvent(r);if(a!==null){this.callbacks.onHotbarKeySwap(e,a);return}this.callbacks.onInventorySlot(e,0,r.shiftKey)}),n.addEventListener("contextmenu",r=>{r.preventDefault(),this.callbacks.onInventorySlot(e,2,r.shiftKey)}),n.addEventListener("dragstart",r=>{var o;if(!(((o=this.stats)==null?void 0:o.inventory.slots[e])??null)||!r.dataTransfer){r.preventDefault();return}r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",`inventory:${e}`),n.classList.add("dragging")}),n.addEventListener("dragend",()=>{n.classList.remove("dragging")}),n.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="move")}),n.addEventListener("drop",r=>{var o;r.preventDefault();const a=(o=r.dataTransfer)==null?void 0:o.getData("text/plain");a&&this.callbacks.onSlotDrop(a,`inventory:${e}`)});const s=(t==null?void 0:t.inventory.slots[e])??null;if(s){const r=st[s.item].name;n.title=r,n.setAttribute("aria-label",r),n.append(this.makeItemIcon(s),this.makeCount(s.count))}return n}makeCraftSlot(e){const t=this.stats,n=document.createElement("button");n.className="craft-slot",n.type="button",n.dataset.craftSlot=String(e),n.dataset.slotRef=`craft:${e}`;const s=(t==null?void 0:t.craftingGrid[e])??null;if(n.draggable=!!s,n.addEventListener("click",r=>{this.callbacks.onCraftSlot(e,0,r.shiftKey)}),n.addEventListener("contextmenu",r=>{r.preventDefault(),this.callbacks.onCraftSlot(e,2,r.shiftKey)}),n.addEventListener("dragstart",r=>{if(!s||!r.dataTransfer){r.preventDefault();return}r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",`craft:${e}`),n.classList.add("dragging")}),n.addEventListener("dragend",()=>{n.classList.remove("dragging")}),n.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="move")}),n.addEventListener("drop",r=>{var o;r.preventDefault();const a=(o=r.dataTransfer)==null?void 0:o.getData("text/plain");a&&this.callbacks.onSlotDrop(a,`craft:${e}`)}),s){const r=st[s.item].name;n.title=r,n.setAttribute("aria-label",r),n.append(this.makeItemIcon(s),this.makeCount(s.count))}return n}makeEquipmentSlot(e,t){var r;const n=((r=this.stats)==null?void 0:r.inventory.armorSlots[e])??null,s=this.makeEquipmentButton(`equip:${e}`,t,n);return s.addEventListener("click",()=>this.callbacks.onEquipmentSlot(e,0)),s.addEventListener("contextmenu",a=>{a.preventDefault(),this.callbacks.onEquipmentSlot(e,2)}),s}makeOffhandSlot(){var n;const e=((n=this.stats)==null?void 0:n.inventory.offhand)??null,t=this.makeEquipmentButton("offhand","보조",e);return t.classList.add("offhand-slot"),t.addEventListener("click",()=>this.callbacks.onOffhandSlot(0)),t.addEventListener("contextmenu",s=>{s.preventDefault(),this.callbacks.onOffhandSlot(2)}),t}makeEquipmentButton(e,t,n){const s=document.createElement("button");if(s.className="equipment-slot",s.type="button",s.dataset.slotRef=e,s.dataset.emptyLabel=t,s.draggable=!!n,s.setAttribute("aria-label",n?st[n.item].name:t),s.title=n?st[n.item].name:t,s.addEventListener("dragstart",r=>{if(!n||!r.dataTransfer){r.preventDefault();return}r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",e),s.classList.add("dragging")}),s.addEventListener("dragend",()=>{s.classList.remove("dragging")}),s.addEventListener("dragover",r=>{r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="move")}),s.addEventListener("drop",r=>{var o;r.preventDefault();const a=(o=r.dataTransfer)==null?void 0:o.getData("text/plain");a&&this.callbacks.onSlotDrop(a,e)}),n)s.append(this.makeItemIcon(n),this.makeCount(n.count));else{const r=document.createElement("span");r.className="equipment-empty-label",r.textContent=t,s.append(r)}return s}makeItemIcon(e){const t=st[e.item],n=document.createElement("span");return n.className=`item-icon item-${e.item}`,n.style.setProperty("--item-color",t.color),n}makeCount(e){const t=document.createElement("span");return t.className="item-count",t.textContent=e>1?String(e):"",t}stackFromSlotElement(e){if(!e||!this.stats)return null;const t=e.dataset.slotRef;return t!=null&&t.startsWith("inventory:")?this.stats.inventory.slots[Number(t.replace("inventory:",""))]??null:t!=null&&t.startsWith("craft:")?this.stats.craftingGrid[Number(t.replace("craft:",""))]??null:t!=null&&t.startsWith("equip:")?this.stats.inventory.armorSlots[t.replace("equip:","")]??null:t==="offhand"?this.stats.inventory.offhand:t==="result"?this.stats.craftingResult:null}renderIconRow(e,t,n){e.innerHTML="";for(let s=0;s<10;s+=1){const r=document.createElement("span"),a=n-s*2;r.className=`${t}-icon ${a>=2?"full":a>=1?"half":"empty"}`,e.append(r)}}armorPoints(){return this.stats?Object.values(this.stats.inventory.armorSlots).reduce((e,t)=>{var n;return e+(t?((n=st[t.item].armor)==null?void 0:n.points)??0:0)},0):0}makeMenuPanel(e,t,n,s=!1){const r=document.createElement("div");r.className=`menu-panel ${s?"giant":""}`;const a=document.createElement("h1");a.className="menu-title",a.textContent=e;const o=document.createElement("p");o.className="menu-copy",o.textContent=t;const l=document.createElement("div");return l.className="menu-actions",l.append(...n),r.append(a,o,l),r}makeMenuButton(e,t,n=""){const s=document.createElement("button");return s.className=`menu-button ${n}`,s.type="button",s.textContent=e,s.addEventListener("click",t),s}makeMetric(e,t){const n=document.createElement("div");n.className="meter-row";const s=document.createElement("span");s.textContent=e;const r=document.createElement("span");return r.textContent=t,n.append(s,r),n}makePanelSignature(e){const t=e.inventory.slots.map(h=>h?`${h.item}:${h.count}:${h.durability??""}`:"-").join("|"),n=["head","chest","legs","feet"].map(h=>{const u=e.inventory.armorSlots[h];return u?`${h}:${u.item}:${u.count}:${u.durability??""}`:`${h}:-`}).join("|"),s=e.inventory.offhand?`${e.inventory.offhand.item}:${e.inventory.offhand.count}:${e.inventory.offhand.durability??""}`:"-",r=e.inventory.cursor?`${e.inventory.cursor.item}:${e.inventory.cursor.count}:${e.inventory.cursor.durability??""}`:"-",a=e.recipes.map(h=>`${h.recipe.id}:${h.craftable?1:0}:${h.unlocked?1:0}`).join("|"),o=e.craftingGrid.map(h=>h?`${h.item}:${h.count}:${h.durability??""}`:"-").join("|"),l=e.craftingResult?`${e.craftingResult.item}:${e.craftingResult.count}:${e.craftingResult.durability??""}`:"-",c=e.smeltingRecipes.map(h=>`${h.recipe.id}:${h.smeltable?1:0}`).join("|");return`${this.mode}|${t}|${n}|${s}|${r}|${o}|${l}|${a}|${c}`}numberFromEvent(e){const n=e.code;if(!(n!=null&&n.startsWith("Digit")))return null;const s=Number(n.replace("Digit",""));return s>=1&&s<=9?s-1:null}}class _p{constructor(e){O(this,"root");O(this,"saveSystem",new Vf);O(this,"clock",new Fl);O(this,"scene",new Ml);O(this,"camera",new Xt(74,1,.05,520));O(this,"shell");O(this,"renderer");O(this,"input");O(this,"hud");O(this,"materials");O(this,"world");O(this,"player");O(this,"sky");O(this,"sunLight");O(this,"sunTarget");O(this,"hemisphereLight");O(this,"heldLight");O(this,"highlight");O(this,"handView");O(this,"mobs",new If);O(this,"torchLights",[]);O(this,"torchScanTimer",0);O(this,"nearbyTorchGlow",0);O(this,"dayFactor",1);O(this,"undergroundFactor",0);O(this,"selectedHit",null);O(this,"animationFrame",0);O(this,"elapsed",0);O(this,"fps",60);O(this,"saveRequested",!1);O(this,"saveDue",0);O(this,"saving",!1);O(this,"saveState","준비됨");O(this,"mode","title");O(this,"saveIndex",{version:3,activeWorldId:null,worlds:[]});O(this,"activeWorld",null);O(this,"inventory",Ci());O(this,"craftingGrid",Array.from({length:9},()=>null));O(this,"craftingGridSize",2);O(this,"survival");O(this,"unlockedRecipes",new Set);O(this,"lootedChests",new Set);O(this,"mining",null);O(this,"selectedItemTimer",0);O(this,"attackCooldown",0);O(this,"preventGameContextMenu",e=>{this.isEditableTarget(e.target)||(e.preventDefault(),e.stopPropagation())});O(this,"frame",()=>{var t;const e=Math.min(this.clock.getDelta(),.05);this.elapsed+=e,this.fps=this.fps*.92+1/Math.max(e,.001)*.08,this.selectedItemTimer=Math.max(0,this.selectedItemTimer-e),this.attackCooldown=Math.max(0,this.attackCooldown-e),this.handleKeyboard(),this.mode==="playing"&&this.survival.state.alive?this.updatePlaying(e):(this.selectedHit=this.raycastBlock(),this.updateHighlight(),this.input.consumeActions()),this.updateEnvironment(e),this.handView.update(e,ln(this.inventory),this.mode==="playing"&&this.survival.state.alive,((t=this.mining)==null?void 0:t.progress)??0),this.updateSave(e),this.updateHud(),this.renderer.render(this.scene,this.camera),this.animationFrame=window.requestAnimationFrame(this.frame)});O(this,"resize",()=>{const e=this.shell.clientWidth||window.innerWidth,t=this.shell.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.65)),this.renderer.setSize(e,t,!1)});O(this,"handleVisibilityChange",()=>{document.visibilityState==="hidden"&&this.saveNow(!0)});this.root=e}async boot(){this.shell=document.createElement("div"),this.shell.className="game-shell",this.shell.addEventListener("contextmenu",this.preventGameContextMenu),this.root.replaceChildren(this.shell),this.renderer=new Mf({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.domElement.className="game-canvas",this.renderer.outputColorSpace=Ot,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.shell.append(this.renderer.domElement),this.input=new Pf(this.renderer.domElement),this.input.onPointerLockChange=({locked:n})=>{!n&&this.mode==="playing"&&this.setMode("paused")},this.input.onSelectedSlotChange=n=>{this.inventory.selectedHotbarSlot=n,this.selectedItemTimer=1.4,this.queueSave()},this.hud=new gp(this.shell,{onSingleplayer:()=>this.showWorldSelect(),onCreateWorldMenu:()=>this.setMode("createWorld"),onCreateWorld:(n,s)=>{this.createWorld(n,s)},onSelectWorld:n=>{this.loadWorldById(n)},onDeleteWorld:n=>{this.deleteWorld(n)},onBackToTitle:()=>this.setMode("title"),onResume:()=>this.resumeGame(),onQuitToTitle:()=>{this.quitToTitle()},onRespawn:()=>this.respawn(),onInventorySlot:(n,s,r)=>this.handleInventoryClick(n,s,r),onEquipmentSlot:(n,s)=>this.handleEquipmentClick(n,s),onOffhandSlot:n=>this.handleOffhandClick(n),onCraftSlot:(n,s,r)=>this.handleCraftingSlotClick(n,s,r),onCraftResult:n=>this.handleCraftingResult(n),onSlotDrop:(n,s)=>this.handleSlotDrop(n,s),onHotbarKeySwap:(n,s)=>this.handleHotbarSwap(n,s),onCraftRecipe:(n,s,r)=>this.handleRecipeFill(n,s,r),onSmeltRecipe:(n,s)=>this.handleSmelt(n,s),onRegenerateWorld:n=>{this.regenerateWorldCopy(n)},onResetAll:()=>{this.resetAll()}});const e=this.renderer.capabilities.getMaxAnisotropy();this.materials=cp(e),this.setupEnvironment(),this.scene.add(this.mobs.group),this.setupHighlight(),this.scene.add(this.camera),this.handView=new Of(this.camera),this.saveIndex=await this.loadIndexWithMigration(),this.hud.setWorlds(this.worldSummaries());const t=this.saveIndex.worlds.find(n=>n.id===this.saveIndex.activeWorldId);t?this.loadWorld(t,!1):this.loadPreviewWorld(),this.resize(),window.addEventListener("resize",this.resize),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.setMode("title"),this.animationFrame=window.requestAnimationFrame(this.frame)}async loadIndexWithMigration(){const e=await this.saveSystem.loadIndex();if(e.worlds.length>0)return e;const t=await this.saveSystem.loadLegacy();if(!t)return e;const n=this.convertLegacy(t),s={version:3,activeWorldId:n.id,worlds:[n]};return await this.saveSystem.saveIndex(s),s}convertLegacy(e){const t=Date.now(),n=Ci(),s=new L().fromArray(e.player.position);return{version:3,worldgenVersion:2,id:"legacy-world",name:"이전 월드",seed:e.seed,createdAt:t,updatedAt:t,modified:e.modified,player:e.player,inventory:n,survival:_s(s),unlockedRecipes:[],lootedChests:[],entities:[],gameRules:{mobGriefing:!0}}}loadPreviewWorld(){this.replaceWorld("codex-aurora",[],yn);const t=this.world.findSpawn();this.player=new ms(this.camera,t),this.player.yaw=this.world.findScenicYaw(t),this.player.pitch=-.08,this.inventory=Ci(),this.survival=new Qa(_s(t)),this.world.ensureChunksAround(this.player.position)}loadWorld(e,t){this.activeWorld=e,this.replaceWorld(e.seed,e.modified,e.worldgenVersion??2),this.player=new ms(this.camera,this.world.findSpawn()),this.player.restore(e.player),this.inventory=Wa(e.inventory),this.input.selectedSlot=this.inventory.selectedHotbarSlot,this.survival=new Qa({...e.survival}),this.unlockedRecipes=new Set(e.unlockedRecipes),this.lootedChests=new Set(e.lootedChests??[]),this.mobs.restore(e.entities??[]),this.world.ensureChunksAround(this.player.position),this.saveState="준비됨",this.hud.setWorlds(this.worldSummaries()),t&&this.resumeGame()}replaceWorld(e,t,n=yn){this.world&&this.scene.remove(this.world.group),this.mobs.clear(),this.lootedChests.clear(),this.world=new io(e,this.materials,n),this.world.setModifiedBlocks(t),this.scene.add(this.world.group)}async createWorld(e,t){this.setMode("loading");const n=Date.now(),s=`world-${n.toString(36)}`;this.replaceWorld(t,[],yn);const r=this.world.findSpawn(),a=new ms(this.camera,r);a.yaw=this.world.findScenicYaw(r),a.pitch=-.08;const o=_s(r),l={version:3,worldgenVersion:yn,id:s,name:e,seed:t,createdAt:n,updatedAt:n,modified:[],player:a.snapshot(0),inventory:Ci(),survival:o,unlockedRecipes:[],lootedChests:[],entities:[],gameRules:{mobGriefing:!0}};await this.saveSystem.upsertWorld(l),this.saveIndex=await this.saveSystem.loadIndex(),this.loadWorld(l,!0),this.queueSave()}async loadWorldById(e){const t=this.saveIndex.worlds.find(n=>n.id===e);if(!t){this.hud.showToast("월드를 찾을 수 없습니다");return}this.loadWorld(t,!0)}async deleteWorld(e){var t;this.saveIndex=await this.saveSystem.deleteWorld(e),this.hud.setWorlds(this.worldSummaries()),((t=this.activeWorld)==null?void 0:t.id)===e&&(this.activeWorld=null,this.loadPreviewWorld()),this.setMode("worldSelect")}async regenerateWorldCopy(e){const t=this.saveIndex.worlds.find(l=>l.id===e);if(!t){this.hud.showToast("월드를 찾을 수 없습니다");return}const n=Date.now(),s=new io(t.seed,this.materials,yn),r=s.findSpawn(),a=new ms(this.camera,r);a.yaw=s.findScenicYaw(r),a.pitch=-.08;const o={version:3,worldgenVersion:yn,id:`world-${n.toString(36)}-caves`,name:`${t.name} 동굴 복사본`,seed:t.seed,createdAt:n,updatedAt:n,modified:[],player:a.snapshot(0),inventory:Ci(),survival:_s(r),unlockedRecipes:[],lootedChests:[],entities:[],gameRules:{mobGriefing:!0}};this.saveIndex=await this.saveSystem.upsertWorld(o),this.hud.setWorlds(this.worldSummaries()),this.hud.showToast("동굴 월드 복사본을 만들었습니다"),this.setMode("worldSelect")}showWorldSelect(){this.hud.setWorlds(this.worldSummaries()),this.setMode("worldSelect")}resumeGame(){if(!this.activeWorld){const e=this.saveIndex.worlds[0];if(e){this.loadWorld(e,!0);return}this.createWorld("새 월드","codex-aurora");return}if(!this.survival.state.alive){this.setMode("gameOver");return}this.setMode("playing"),this.input.requestPointerLock()}async quitToTitle(){await this.saveNow(!0),document.pointerLockElement&&document.exitPointerLock(),this.setMode("title")}setMode(e){this.mode=e,this.hud.setMode(e)}isEditableTarget(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable}setupEnvironment(){this.scene.fog=new Ts(new Le("#bfd7df"),.011),this.sky=new $f(this.scene),this.hemisphereLight=new Ll("#cce8ff","#2b3b35",.62),this.scene.add(this.hemisphereLight),this.sunTarget=new Mt,this.scene.add(this.sunTarget),this.sunLight=new Ul("#fff1bd",2.3),this.sunLight.castShadow=!0,this.sunLight.target=this.sunTarget,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=220,this.sunLight.shadow.camera.left=-92,this.sunLight.shadow.camera.right=92,this.sunLight.shadow.camera.top=92,this.sunLight.shadow.camera.bottom=-92,this.sunLight.shadow.normalBias=.025,this.scene.add(this.sunLight);for(let e=0;e<18;e+=1){const t=new ga("#ffb24a",1.25,12,1.7);t.visible=!1,this.torchLights.push(t),this.scene.add(t)}this.heldLight=new ga("#ffba62",0,9,1.6),this.heldLight.position.set(.38,-.28,-.62),this.camera.add(this.heldLight)}setupHighlight(){const e=new Al(new at(1.012,1.012,1.012)),t=new go({color:"#fff0ad",transparent:!0,opacity:.96,depthTest:!1});this.highlight=new bl(e,t),this.highlight.renderOrder=10,this.highlight.visible=!1,this.scene.add(this.highlight)}handleKeyboard(){this.input.consumePressed("Escape")&&(this.mode==="playing"?(this.setMode("paused"),document.pointerLockElement&&document.exitPointerLock()):this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace"?this.closeOpenContainer(!1):this.mode==="paused"?this.resumeGame():(this.mode==="worldSelect"||this.mode==="createWorld")&&this.setMode("title")),this.input.consumePressed("KeyE")&&(this.mode==="playing"?(this.openCraftingPanel("inventory"),document.pointerLockElement&&document.exitPointerLock()):(this.mode==="inventory"||this.mode==="craftingTable"||this.mode==="furnace")&&this.closeOpenContainer(!0))}closeOpenContainer(e){if(!this.returnCraftingGridToInventory()){this.hud.showToast("닫기 전에 인벤토리 공간을 비워주세요");return}this.setMode("playing"),e&&this.input.requestPointerLock()}openCraftingPanel(e){if(!this.returnCraftingGridToInventory()){this.hud.showToast("먼저 인벤토리 공간을 비워주세요");return}this.craftingGridSize=e==="inventory"?2:3,this.setMode(e)}updatePlaying(e){const t=this.input.consumeLook();this.player.applyLook(t.movementX,t.movementY);const n=this.input.isDown("KeyW")||this.input.isDown("KeyA")||this.input.isDown("KeyS")||this.input.isDown("KeyD"),s=this.input.isDown("ControlLeft")||this.input.isDown("ControlRight")||this.input.isDown("KeyR"),r=this.input.isDown("ShiftLeft")||this.input.isDown("ShiftRight");this.player.update(e,this.input,this.world,this.survival.canSprint(),r),this.player.lastLandingSpeed>13&&this.survival.damage(Math.ceil((this.player.lastLandingSpeed-12)*.8)),this.world.ensureChunksAround(this.player.position),this.selectedHit=this.raycastBlock(),this.updateHighlight();const a=this.input.consumeActions(),o=this.mobs.update(e,this.world,this.player.position,this.dayFactor,this.undergroundFactor,this.elapsed);o.damage>0&&this.damagePlayer(o.damage,a.secondaryHeld);for(const l of o.drops)Bt(this.inventory,l);for(const l of o.explosions)this.handleExplosion(l.x,l.y,l.z,l.radius,l.damage);this.handleMining(e,a),this.handleUse(a,r),this.survival.update(e,this.player.isInWater(this.world),n,s&&this.survival.canSprint()),this.survival.state.alive||(document.pointerLockElement&&document.exitPointerLock(),this.setMode("gameOver"))}damagePlayer(e,t){var n;return this.survival.damage(e,{armorSlots:this.inventory.armorSlots,blocking:t&&((n=this.inventory.offhand)==null?void 0:n.item)==="shield"})}handleExplosion(e,t,n,s,r){const a=this.player.position.distanceTo(new L(e,t,n));if(a<s+2.2){const c=Lt(1-a/(s+2.2),0,1);this.damagePlayer(Math.ceil(r*c),!1);const h=this.player.position.clone().sub(new L(e,t,n)).normalize().multiplyScalar(6*c);this.player.velocity.add(h),this.player.velocity.y+=4*c}let o=0;const l=Math.ceil(s);for(let c=Math.floor(t)-l;c<=Math.floor(t)+l;c+=1)for(let h=Math.floor(n)-l;h<=Math.floor(n)+l;h+=1)for(let u=Math.floor(e)-l;u<=Math.floor(e)+l;u+=1){const d=Math.hypot(u+.5-e,c+.5-t,h+.5-n);if(d>s||c<=0||c>=pt-1)continue;const p=this.world.getBlock(u,c,h);if(p===$.Air||p===$.Water)continue;const g=bn[p],v=g.hardness*.55+(g.requiredTool?.8:0),m=(1-d/s)*3.4,f=xt(this.world.seedInt^50414,u,c,h)*.65;if(!(m+f<=v)&&this.world.setBlock(u,c,h,$.Air)){o+=1;const T=g.drops;T&&xt(this.world.seedInt^53773,u,c,h)<.32&&Bt(this.inventory,{item:T,count:1})}}this.hud.showToast(o>0?`크리퍼 폭발: 블록 ${o}개 파괴`:"크리퍼가 폭발했습니다"),this.queueSave()}handleMining(e,t){var a;if(t.primary){if(this.attackCooldown>0)return;const o=ln(this.inventory),l=o?st[o.item]:null;if((l==null?void 0:l.toolKind)==="bow"){if(!Rs(this.inventory,"arrow",1)){this.hud.showToast("화살이 필요합니다");return}const u=this.mobs.hitByRay(this.player.getEyePosition(),this.player.getViewDirection(),30,6);if(this.attackCooldown=((a=l.combat)==null?void 0:a.cooldown)??.9,this.damageHeldTool(),this.survival.addExhaustion(.04),u)if(u.killed){for(const d of u.drops)Bt(this.inventory,d);this.unlockRecipesFromInventory(),this.hud.showToast(`화살로 ${u.name} 처치`)}else this.hud.showToast(`화살로 ${u.name} 명중`);this.queueSave();return}const c=this.attackDamage(),h=this.mobs.hitByRay(this.player.getEyePosition(),this.player.getViewDirection(),this.attackRange(),c);if(h){if(this.mining=null,this.attackCooldown=this.attackDelay(),this.damageHeldTool(),this.survival.addExhaustion(.08),h.killed){for(const u of h.drops)Bt(this.inventory,u);this.unlockRecipesFromInventory(),this.hud.showToast(`${h.name} 처치`),this.queueSave()}else this.hud.showToast(`${h.name} 공격`);return}}if(!t.primaryHeld||!this.selectedHit){this.mining=null;return}const n=this.selectedHit,s=`${n.x},${n.y},${n.z}`;(!this.mining||this.mining.key!==s)&&(this.mining={key:s,progress:0,block:n.block});const r=this.breakTime(n.block);this.mining.progress+=e/r,this.mining.progress>=1&&(this.breakBlock(n),this.mining=null)}handleUse(e,t){if(!e.secondary)return;const n=ln(this.inventory),s=n?st[n.item]:null,r=this.selectedHit?bn[this.selectedHit.block].interactable:null;if(this.selectedHit&&r==="crafting_table"&&!t){document.pointerLockElement&&document.exitPointerLock(),this.openCraftingPanel("craftingTable");return}if(this.selectedHit&&r==="furnace"&&!t){document.pointerLockElement&&document.exitPointerLock(),this.openCraftingPanel("furnace");return}if(this.selectedHit&&r==="chest"&&!t){this.openChest(this.selectedHit);return}if(this.selectedHit&&r==="bed"&&!t){this.sleepInBed(this.selectedHit);return}if(n&&(s!=null&&s.food)&&this.survival.state.hunger<20){this.survival.eat(s.food.hunger,s.food.saturation),this.consumeSelected(1),this.queueSave();return}if(!this.selectedHit||!n)return;const a=Ef(n.item);if(a===null)return;const o=this.selectedHit.x+this.selectedHit.normal.x,l=this.selectedHit.y+this.selectedHit.normal.y,c=this.selectedHit.z+this.selectedHit.normal.z,h=this.world.getBlock(o,l,c);(h===$.Air||h===$.Water)&&!this.player.intersectsBlock(o,l,c)&&this.world.setBlock(o,l,c,a)&&(this.consumeSelected(1),this.queueSave())}breakTime(e){const t=bn[e],n=ln(this.inventory),s=n?st[n.item]:null,r=(s==null?void 0:s.toolKind)&&s.toolKind===t.preferredTool,a=!t.requiredTool||(s==null?void 0:s.toolKind)===t.requiredTool&&this.tierMeets(s.toolTier??"hand",t.requiredTier??"wood"),o=r?(s==null?void 0:s.miningSpeed)??1:1,l=a?1:4.2;return Math.max(.18,t.hardness*.85*l/o)}attackDamage(){const e=ln(this.inventory),t=e?st[e.item]:null;return t!=null&&t.combat?t.combat.damage:1}attackDelay(){var n;const e=ln(this.inventory),t=e?st[e.item]:null;return((n=t==null?void 0:t.combat)==null?void 0:n.cooldown)??.5}attackRange(){var n;const e=ln(this.inventory),t=e?st[e.item]:null;return((n=t==null?void 0:t.combat)==null?void 0:n.range)??4.4}breakBlock(e){const t=bn[e.block],n=ln(this.inventory),s=n?st[n.item]:null,r=!t.requiredTool||(s==null?void 0:s.toolKind)===t.requiredTool&&this.tierMeets(s.toolTier??"hand",t.requiredTier??"wood");if(!this.world.setBlock(e.x,e.y,e.z,$.Air))return;let o=r?t.drops:null,l=1;if(e.block===$.Leaves&&Math.random()<.12&&(o="apple"),e.block===$.Gravel&&Math.random()<.18&&(o="flint"),e.block===$.RedstoneOre&&(l=4+Math.floor(Math.random()*2)),e.block===$.LapisOre&&(l=4+Math.floor(Math.random()*5)),o){const h=Bt(this.inventory,{item:o,count:l});this.hud.showToast(h?"인벤토리가 가득 찼습니다":`${st[o].name} 획득`)}const c=`${e.x},${e.y},${e.z}`;if(e.block===$.Chest&&!this.lootedChests.has(c)){for(const h of this.chestLoot(e))Bt(this.inventory,h);this.lootedChests.add(c),this.hud.showToast("상자 보급품을 찾았습니다")}this.damageHeldTool(),this.survival.addExhaustion(.005),this.unlockRecipesFromInventory(),this.queueSave()}damageHeldTool(){const e=qt+this.inventory.selectedHotbarSlot,t=this.inventory.slots[e];!t||t.durability===void 0||(t.durability-=1,t.durability<=0&&(this.inventory.slots[e]=null,this.hud.showToast("도구가 부서졌습니다")))}openChest(e){const t=`${e.x},${e.y},${e.z}`;if(this.lootedChests.has(t)){this.hud.showToast("상자가 비어 있습니다");return}let n=0;for(const s of this.chestLoot(e)){const r=Bt(this.inventory,s);n+=s.count-((r==null?void 0:r.count)??0)}this.lootedChests.add(t),this.unlockRecipesFromInventory(),this.queueSave(),this.hud.showToast(n>0?"상자에서 보급품을 챙겼습니다":"가방이 가득 차서 챙길 수 없습니다")}chestLoot(e){const t=s=>xt(this.world.seedInt^s,e.x,e.y,e.z),n=[{item:"coal",count:2+Math.floor(t(49313)*4)},{item:"torch",count:2+Math.floor(t(28868)*5)}];return t(42864)>.35&&n.push({item:"arrow",count:2+Math.floor(t(42865)*6)}),t(61722)>.42&&n.push({item:"bread",count:1+Math.floor(t(61723)*2)}),t(7946)>.45&&n.push({item:"raw_iron",count:1+Math.floor(t(270)*3)}),t(694558)>.72&&n.push({item:"apple",count:1+Math.floor(t(43409)*2)}),t(3354)>.9&&n.push({item:"diamond",count:1}),t(49183)>.86&&n.push({item:"chainmail_boots",count:1,durability:70}),n}sleepInBed(e){if(this.survival.state.spawn=[e.x+.5,e.y+1,e.z+.5],this.dayFactor<.5){const n=this.elapsed/210%1,s=.18,r=n<s?s-n:1-n+s;this.elapsed+=r*210,this.survival.heal(2),this.hud.showToast("침대에서 쉬고 아침이 되었습니다")}else this.hud.showToast("스폰 위치를 침대로 설정했습니다");this.queueSave()}consumeSelected(e){const t=qt+this.inventory.selectedHotbarSlot,n=this.inventory.slots[t];n&&(n.count-=e,n.count<=0&&(this.inventory.slots[t]=null))}handleInventoryClick(e,t,n){n?wf(this.inventory,e):Tf(this.inventory,e,t),this.unlockRecipesFromInventory(),this.queueSave()}handleEquipmentClick(e,t){Af(this.inventory,e,t),this.queueSave()}handleOffhandClick(e){Rf(this.inventory,e),this.queueSave()}handleCraftingSlotClick(e,t,n){if(n){const s=this.craftingGrid[e];if(s){const r=Bt(this.inventory,s);this.craftingGrid[e]=r}}else this.clickExternalSlot(this.craftingGrid,e,t);this.unlockRecipesFromInventory(),this.queueSave()}handleHotbarSwap(e,t){Cf(this.inventory,e,t),this.queueSave()}handleSlotDrop(e,t){if(e===t)return;const n=this.getSlotByRef(e),s=this.getSlotByRef(t);if(n){if(!this.slotAccepts(t,n)||s&&!this.slotAccepts(e,s)){this.hud.showToast("이 슬롯에는 장착할 수 없습니다");return}if(!s)this.setSlotByRef(t,n),this.setSlotByRef(e,null);else if(En(n,s)){const r=Qt(s.item),a=Math.min(r-s.count,n.count);s.count+=a,n.count-=a,n.count<=0&&this.setSlotByRef(e,null)}else this.setSlotByRef(e,s),this.setSlotByRef(t,n);this.unlockRecipesFromInventory(),this.queueSave()}}handleCraftingResult(e){var r;const t=this.activeCraftingGrid(),n=gr(t,this.craftingGridSize);if(!n)return;const s={...n.result};if(e){let a=0;for(;((r=gr(this.activeCraftingGrid(),this.craftingGridSize))==null?void 0:r.id)===n.id&&!(!this.inventoryCanAccept(s)||(Za(this.craftingGrid,n,this.craftingGridSize),Bt(this.inventory,{...s}),a+=s.count,a>=64)););}else{const a=this.inventory.cursor;if(a&&(!En(a,s)||a.count+s.count>Qt(a.item)))return;Za(this.craftingGrid,n,this.craftingGridSize),a?a.count+=s.count:this.inventory.cursor=s}this.unlockedRecipes.add(n.id),this.unlockRecipesFromInventory(),this.queueSave()}handleRecipeFill(e,t,n){const s=ys.find(o=>o.id===e);if(!s||!Ka(s,this.inventory,n)||!this.returnCraftingGridToInventory())return;this.craftingGridSize=n;const r=Ff(s,n);if(!r)return;const a=t?this.maxCraftable(s):1;for(let o=0;o<r.length;o+=1){const l=r[o];l&&(Rs(this.inventory,l,a),this.craftingGrid[o]={item:l,count:a})}this.queueSave()}handleSmelt(e,t){const n=ja.find(r=>r.id===e);if(!n||!Ar(n,this.inventory))return;Gf(n,this.inventory,t)>0&&(this.hud.showToast(`${n.name} 완료`),this.unlockRecipesFromInventory(),this.queueSave())}activeCraftingGrid(){return this.craftingGrid.slice(0,this.craftingGridSize*this.craftingGridSize)}returnCraftingGridToInventory(){for(const e of this.craftingGrid)if(e&&!this.inventoryCanAccept(e))return!1;for(let e=0;e<this.craftingGrid.length;e+=1){const t=this.craftingGrid[e];t&&(Bt(this.inventory,t),this.craftingGrid[e]=null)}return!0}inventoryCanAccept(e){let t=e.count;for(const n of this.inventory.slots)if(!(!n||!En(n,e))&&(t-=Math.max(0,Qt(n.item)-n.count),t<=0))return!0;for(const n of this.inventory.slots)if(!n&&(t-=Qt(e.item),t<=0))return!0;return!1}clickExternalSlot(e,t,n){const s=e[t]??null,r=this.inventory.cursor;if(n===0){if(!r){this.inventory.cursor=s,e[t]=null;return}if(!s){e[t]=r,this.inventory.cursor=null;return}if(En(s,r)){const a=Math.min(Qt(s.item)-s.count,r.count);s.count+=a,r.count-=a,r.count<=0&&(this.inventory.cursor=null);return}e[t]=r,this.inventory.cursor=s;return}if(!r&&s){const a=Math.ceil(s.count/2);this.inventory.cursor={...s,count:a},s.count-=a,s.count<=0&&(e[t]=null);return}if(r&&!s){e[t]={...r,count:1},r.count-=1,r.count<=0&&(this.inventory.cursor=null);return}r&&s&&En(r,s)&&s.count<Qt(s.item)&&(s.count+=1,r.count-=1,r.count<=0&&(this.inventory.cursor=null))}getSlotByRef(e){return e.startsWith("inventory:")?this.inventory.slots[Number(e.replace("inventory:",""))]??null:e.startsWith("craft:")?this.craftingGrid[Number(e.replace("craft:",""))]??null:e.startsWith("equip:")?this.inventory.armorSlots[e.replace("equip:","")]??null:e==="offhand"?this.inventory.offhand:null}setSlotByRef(e,t){e.startsWith("inventory:")&&(this.inventory.slots[Number(e.replace("inventory:",""))]=t),e.startsWith("craft:")&&(this.craftingGrid[Number(e.replace("craft:",""))]=t),e.startsWith("equip:")&&(this.inventory.armorSlots[e.replace("equip:","")]=t),e==="offhand"&&(this.inventory.offhand=t)}slotAccepts(e,t){return e.startsWith("equip:")?Cs(e.replace("equip:",""),t):e==="offhand"?Cs("offhand",t):!0}maxCraftable(e){const t=Ro(e);let n=1/0;for(const[s,r]of Object.entries(t)){const a=this.inventory.slots.reduce((o,l)=>o+((l==null?void 0:l.item)===s?l.count:0),0);n=Math.min(n,Math.floor(a/r))}return Math.max(1,Math.min(64,Number.isFinite(n)?n:1))}tierMeets(e,t){const n=["hand","wood","stone","copper","iron","gold","diamond"];return n.indexOf(e)>=n.indexOf(t)}unlockRecipesFromInventory(){for(const e of ys)$a(e,this.unlockedRecipes,this.inventory)&&this.unlockedRecipes.add(e.id)}updateHighlight(){if(!this.selectedHit){this.highlight.visible=!1;return}this.highlight.visible=!0,this.highlight.position.set(this.selectedHit.x+.5,this.selectedHit.y+.5,this.selectedHit.z+.5)}raycastBlock(){const e=this.player.getEyePosition(),t=this.player.getViewDirection(),n=4.5;let s=Math.floor(e.x),r=Math.floor(e.y),a=Math.floor(e.z);const o=t.x>=0?1:-1,l=t.y>=0?1:-1,c=t.z>=0?1:-1,h=t.x===0?1/0:Math.abs(1/t.x),u=t.y===0?1/0:Math.abs(1/t.y),d=t.z===0?1/0:Math.abs(1/t.z);let p=Er(e.x,t.x),g=Er(e.y,t.y),v=Er(e.z,t.z),m=0;const f=new L;for(;m<=n;){const T=this.world.getBlock(s,r,a);if(yf(T))return{x:s,y:r,z:a,normal:f.clone(),block:T};p<g&&p<v?(s+=o,m=p,p+=h,f.set(-o,0,0)):g<v?(r+=l,m=g,g+=u,f.set(0,-l,0)):(a+=c,m=v,v+=d,f.set(0,0,-c))}return null}updateEnvironment(e){var h,u;const t=this.sky.update(this.elapsed,this.camera.position),n=t.dayFactor,s=this.world.terrainHeight(Math.floor(this.player.position.x),Math.floor(this.player.position.z)),r=Lt((s-this.player.position.y-3)/16,0,1),a=this.updateTorchLights(e),o=((h=ln(this.inventory))==null?void 0:h.item)==="torch"||((u=this.inventory.offhand)==null?void 0:u.item)==="torch",l=t.sunDirection.clone().multiplyScalar(88);this.dayFactor=n,this.undergroundFactor=r,this.sunTarget.position.copy(this.player.position),this.sunLight.position.copy(this.player.position).add(l),this.sunLight.intensity=(.08+n*2.25)*(1-r*.82),this.hemisphereLight.intensity=(.12+n*.56)*(1-r*.72)+a*.18,this.heldLight.intensity=o&&this.mode==="playing"?.85:0;const c=this.scene.fog;if(c instanceof Ts){const d=new Le("#040608").lerp(new Le("#131e29"),a*.5),p=new Le("#131e29").lerp(new Le("#c8dde2"),n);c.color.copy(p.lerp(d,r*.78)),c.density=.012+r*.018-n*.004}}updateTorchLights(e){if(this.torchScanTimer-=e,this.torchScanTimer>0)return this.nearbyTorchGlow;this.torchScanTimer=.22;const t=this.player.position,n=[],s=12,r=Math.floor(t.x)-s,a=Math.floor(t.x)+s,o=Math.max(0,Math.floor(t.y)-8),l=Math.min(pt-1,Math.floor(t.y)+8),c=Math.floor(t.z)-s,h=Math.floor(t.z)+s;for(let u=o;u<=l;u+=1)for(let d=c;d<=h;d+=1)for(let p=r;p<=a;p+=1){if(this.world.getBlock(p,u,d)!==$.Torch)continue;const g=Math.hypot(t.x-(p+.5),t.y-(u+.5),t.z-(d+.5));g<=s&&n.push({distance:g,x:p,y:u,z:d})}n.sort((u,d)=>u.distance-d.distance),this.nearbyTorchGlow=n[0]?Lt(1-n[0].distance/s,0,1):0;for(let u=0;u<this.torchLights.length;u+=1){const d=this.torchLights[u],p=n[u];if(!p){d.visible=!1;continue}d.visible=!0,d.position.set(p.x+.5,p.y+.55,p.z+.5),d.intensity=1.35-Math.min(.55,p.distance*.018)}return this.nearbyTorchGlow}updateSave(e){!this.saveRequested||this.saving||!this.activeWorld||(this.saveDue-=e,this.saveDue<=0&&this.saveNow())}queueSave(){this.activeWorld&&(this.saveRequested=!0,this.saveDue=.8,this.saveState="저장 대기")}async saveNow(e=!1){if(!(!this.activeWorld||this.saving||!e&&!this.saveRequested)){this.saving=!0,this.saveRequested=!1,this.saveState="저장 중";try{const t=Date.now(),n=Wa(this.inventory);for(const r of this.craftingGrid)r&&Bt(n,{...r});const s={...this.activeWorld,version:3,worldgenVersion:this.activeWorld.worldgenVersion??this.world.worldgenVersion,updatedAt:t,modified:this.world.exportModifiedBlocks(),player:this.player.snapshot(this.inventory.selectedHotbarSlot),inventory:n,survival:{...this.survival.state},unlockedRecipes:[...this.unlockedRecipes],lootedChests:[...this.lootedChests],entities:this.mobs.snapshot(),gameRules:this.activeWorld.gameRules??{mobGriefing:!0}};this.activeWorld=s,this.saveIndex=await this.saveSystem.upsertWorld(s),this.hud.setWorlds(this.worldSummaries()),this.saveState=this.saveRequested?"저장 대기":"저장됨"}catch{this.saveState="저장 오류",this.hud.showToast("저장에 실패했습니다")}finally{this.saving=!1}}}updateHud(){var a,o,l,c;const e=this.player.position,t=this.world.getStats(),n=ln(this.inventory),s=((a=gr(this.activeCraftingGrid(),this.craftingGridSize))==null?void 0:a.result)??null,r=ys.map(h=>({recipe:h,craftable:Ka(h,this.inventory,this.craftingGridSize),unlocked:$a(h,this.unlockedRecipes,this.inventory)}));this.hud.update({position:`좌표 ${Math.floor(e.x)} ${Math.floor(e.y)} ${Math.floor(e.z)} | ${this.world.seed}`,chunks:t.chunks,mobs:this.mobs.count,fps:Math.round(this.fps),selectedStack:n,inventory:this.inventory,survival:this.survival.state,day:Lt(this.sunLight.intensity/2.37,0,1),saveState:this.saveState,miningProgress:((o=this.mining)==null?void 0:o.progress)??0,selectedBlock:((l=this.selectedHit)==null?void 0:l.block)??null,activeWorldName:((c=this.activeWorld)==null?void 0:c.name)??"미리보기",recipes:r,craftingGrid:this.activeCraftingGrid(),craftingResult:s?{...s}:null,smeltingRecipes:ja.map(h=>({recipe:h,smeltable:Ar(h,this.inventory)}))})}respawn(){const e=new L().fromArray(this.survival.state.spawn);this.player.position.copy(e),this.player.velocity.set(0,0,0),this.survival.respawn(),this.setMode("playing"),this.input.requestPointerLock(),this.queueSave()}async resetAll(){await this.saveSystem.clearAll(),window.location.reload()}worldSummaries(){return this.saveIndex.worlds.map(e=>({id:e.id,name:e.name,seed:e.seed,updatedAt:e.updatedAt}))}}function Er(i,e){return e>0?(Math.floor(i+1)-i)/e:e<0?(i-Math.floor(i))/-e:1/0}const Fo=document.querySelector("#app");if(!Fo)throw new Error("App root was not found.");const vp=new _p(Fo);vp.boot();
