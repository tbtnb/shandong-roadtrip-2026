/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zt="srgb",ur="srgb-linear",hr="linear",Mt="srgb";const zs="300 es";function El(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fo(){const i=Jr("canvas");return i.style.display="block",i}const Ua={};function Vs(...i){const e="THREE."+i.shift();console.log(e,...i)}function Uo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Uo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=Uo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function oi(...i){const e=i.join(" ");e in Ua||(Ua[e]=!0,Je(...i))}function bl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Tl={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oa=1234567;const ar=Math.PI/180,fr=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function $s(i,e){return(i%e+e)%e}function Al(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function wl(i,e,t){return i!==e?(t-i)/(e-i):0}function or(i,e,t){return(1-t)*i+t*e}function Rl(i,e,t,n){return or(i,e,1-Math.exp(-t*n))}function Cl(i,e=1){return e-Math.abs($s(i,e*2)-e)}function Pl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ll(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Il(i,e){return i+Math.random()*(e-i)}function Nl(i){return i*(.5-Math.random())}function Fl(i){i!==void 0&&(Oa=i);let e=Oa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ul(i){return i*ar}function Ol(i){return i*fr}function Bl(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Gl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vl(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),h=s((e+n)/2),m=a((e+n)/2),_=s((e-n)/2),g=a((e-n)/2),v=s((n-e)/2),y=a((n-e)/2);switch(r){case"XYX":i.set(o*m,c*_,c*g,o*h);break;case"YZY":i.set(c*g,o*m,c*_,o*h);break;case"ZXZ":i.set(c*_,c*g,o*m,o*h);break;case"XZX":i.set(o*m,c*y,c*v,o*h);break;case"YXY":i.set(c*v,o*m,c*y,o*h);break;case"ZYZ":i.set(c*y,c*v,o*m,o*h);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ai={DEG2RAD:ar,RAD2DEG:fr,generateUUID:ci,clamp:ot,euclideanModulo:$s,mapLinear:Al,inverseLerp:wl,lerp:or,damp:Rl,pingpong:Cl,smoothstep:Pl,smootherstep:Ll,randInt:Dl,randFloat:Il,randFloatSpread:Nl,seededRandom:Fl,degToRad:Ul,radToDeg:Ol,isPowerOfTwo:Bl,ceilPowerOfTwo:Gl,floorPowerOfTwo:zl,setQuaternionFromProperEuler:Vl,normalize:Wt,denormalize:Ii},ma=class ma{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ma.prototype.isVector2=!0;let xe=ma;class ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],h=n[r+1],m=n[r+2],_=n[r+3],g=s[a+0],v=s[a+1],y=s[a+2],P=s[a+3];if(_!==P||c!==g||h!==v||m!==y){let f=c*g+h*v+m*y+_*P;f<0&&(g=-g,v=-v,y=-y,P=-P,f=-f);let p=1-o;if(f<.9995){const b=Math.acos(f),A=Math.sin(b);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A,c=c*p+g*o,h=h*p+v*o,m=m*p+y*o,_=_*p+P*o}else{c=c*p+g*o,h=h*p+v*o,m=m*p+y*o,_=_*p+P*o;const b=1/Math.sqrt(c*c+h*h+m*m+_*_);c*=b,h*=b,m*=b,_*=b}}e[t]=c,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],h=n[r+2],m=n[r+3],_=s[a],g=s[a+1],v=s[a+2],y=s[a+3];return e[t]=o*y+m*_+c*v-h*g,e[t+1]=c*y+m*g+h*_-o*v,e[t+2]=h*y+m*v+o*g-c*_,e[t+3]=m*y-o*_-c*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),m=o(r/2),_=o(s/2),g=c(n/2),v=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=g*m*_+h*v*y,this._y=h*v*_-g*m*y,this._z=h*m*y+g*v*_,this._w=h*m*_-g*v*y;break;case"YXZ":this._x=g*m*_+h*v*y,this._y=h*v*_-g*m*y,this._z=h*m*y-g*v*_,this._w=h*m*_+g*v*y;break;case"ZXY":this._x=g*m*_-h*v*y,this._y=h*v*_+g*m*y,this._z=h*m*y+g*v*_,this._w=h*m*_-g*v*y;break;case"ZYX":this._x=g*m*_-h*v*y,this._y=h*v*_+g*m*y,this._z=h*m*y-g*v*_,this._w=h*m*_+g*v*y;break;case"YZX":this._x=g*m*_+h*v*y,this._y=h*v*_+g*m*y,this._z=h*m*y-g*v*_,this._w=h*m*_-g*v*y;break;case"XZY":this._x=g*m*_-h*v*y,this._y=h*v*_-g*m*y,this._z=h*m*y+g*v*_,this._w=h*m*_+g*v*y;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],h=t[2],m=t[6],_=t[10],g=n+o+_;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(m-c)*v,this._y=(s-h)*v,this._z=(a-r)*v}else if(n>o&&n>_){const v=2*Math.sqrt(1+n-o-_);this._w=(m-c)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(s+h)/v}else if(o>_){const v=2*Math.sqrt(1+o-n-_);this._w=(s-h)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(c+m)/v}else{const v=2*Math.sqrt(1+_-n-o);this._w=(a-r)/v,this._x=(s+h)/v,this._y=(c+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,h=t._z,m=t._w;return this._x=n*m+a*o+r*h-s*c,this._y=r*m+a*c+s*o-n*h,this._z=s*m+a*h+n*c-r*o,this._w=a*m-n*o-r*c-s*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const h=Math.acos(o),m=Math.sin(h);c=Math.sin(c*h)/m,t=Math.sin(t*h)/m,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ga=class ga{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*r-o*n),m=2*(o*t-s*r),_=2*(s*n-a*t);return this.x=t+c*h+a*_-o*m,this.y=n+c*m+o*h-s*_,this.z=r+c*_+s*m-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ga.prototype.isVector3=!0;let B=ga;const hs=new B,Ba=new ui,_a=class _a{constructor(e,t,n,r,s,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,h)}set(e,t,n,r,s,a,o,c,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=o,m[3]=t,m[4]=s,m[5]=c,m[6]=n,m[7]=a,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],m=n[4],_=n[7],g=n[2],v=n[5],y=n[8],P=r[0],f=r[3],p=r[6],b=r[1],A=r[4],x=r[7],u=r[2],M=r[5],d=r[8];return s[0]=a*P+o*b+c*u,s[3]=a*f+o*A+c*M,s[6]=a*p+o*x+c*d,s[1]=h*P+m*b+_*u,s[4]=h*f+m*A+_*M,s[7]=h*p+m*x+_*d,s[2]=g*P+v*b+y*u,s[5]=g*f+v*A+y*M,s[8]=g*p+v*x+y*d,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],m=e[8];return t*a*m-t*o*h-n*s*m+n*o*c+r*s*h-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],m=e[8],_=m*a-o*h,g=o*c-m*s,v=h*s-a*c,y=t*_+n*g+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/y;return e[0]=_*P,e[1]=(r*h-m*n)*P,e[2]=(o*n-r*a)*P,e[3]=g*P,e[4]=(m*t-r*c)*P,e[5]=(r*s-o*t)*P,e[6]=v*P,e[7]=(n*c-h*t)*P,e[8]=(a*t-n*s)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-r*h,r*c,-r*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fs.makeScale(e,t)),this}rotate(e){return oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fs.makeRotation(-e)),this}translate(e,t){return oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_a.prototype.isMatrix3=!0;let et=_a;const fs=new et,Ga=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kl(){const i={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Mt&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ur]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:Ga,fromXYZ:za,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Ga,fromXYZ:za,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}const ut=kl();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class Oo{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=Jr("canvas")),Mi.width=e.width,Mi.height=e.height;const r=Mi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hl=0;class Qr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ds(r[a].image)):s.push(ds(r[a]))}else s=ds(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ds(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let Wl=0;const ps=new B;class kt extends Kn{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,h=kt.DEFAULT_ANISOTROPY,m=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=ci(),this.name="",this.source=new Qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ps).x}get height(){return this.source.getSize(ps).y}get depth(){return this.source.getSize(ps).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=300;kt.DEFAULT_ANISOTROPY=1;const xa=class xa{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,h=c[0],m=c[4],_=c[8],g=c[1],v=c[5],y=c[9],P=c[2],f=c[6],p=c[10];if(Math.abs(m-g)<.01&&Math.abs(_-P)<.01&&Math.abs(y-f)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+P)<.1&&Math.abs(y+f)<.1&&Math.abs(h+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,x=(v+1)/2,u=(p+1)/2,M=(m+g)/4,d=(_+P)/4,l=(y+f)/4;return A>x&&A>u?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=M/n,s=d/n):x>u?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=M/r,s=l/r):u<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(u),n=d/s,r=l/s),this.set(n,r,s,t),this}let b=Math.sqrt((f-y)*(f-y)+(_-P)*(_-P)+(g-m)*(g-m));return Math.abs(b)<.001&&(b=1),this.x=(f-y)/b,this.y=(_-P)/b,this.z=(g-m)/b,this.w=Math.acos((h+v+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xa.prototype.isVector4=!0;let wt=xa;class Bo extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new kt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qs extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Go extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $r=class $r{constructor(e,t,n,r,s,a,o,c,h,m,_,g,v,y,P,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,h,m,_,g,v,y,P,f)}set(e,t,n,r,s,a,o,c,h,m,_,g,v,y,P,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=m,p[10]=_,p[14]=g,p[3]=v,p[7]=y,p[11]=P,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $r().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),h=Math.sin(r),m=Math.cos(s),_=Math.sin(s);if(e.order==="XYZ"){const g=a*m,v=a*_,y=o*m,P=o*_;t[0]=c*m,t[4]=-c*_,t[8]=h,t[1]=v+y*h,t[5]=g-P*h,t[9]=-o*c,t[2]=P-g*h,t[6]=y+v*h,t[10]=a*c}else if(e.order==="YXZ"){const g=c*m,v=c*_,y=h*m,P=h*_;t[0]=g+P*o,t[4]=y*o-v,t[8]=a*h,t[1]=a*_,t[5]=a*m,t[9]=-o,t[2]=v*o-y,t[6]=P+g*o,t[10]=a*c}else if(e.order==="ZXY"){const g=c*m,v=c*_,y=h*m,P=h*_;t[0]=g-P*o,t[4]=-a*_,t[8]=y+v*o,t[1]=v+y*o,t[5]=a*m,t[9]=P-g*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const g=a*m,v=a*_,y=o*m,P=o*_;t[0]=c*m,t[4]=y*h-v,t[8]=g*h+P,t[1]=c*_,t[5]=P*h+g,t[9]=v*h-y,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const g=a*c,v=a*h,y=o*c,P=o*h;t[0]=c*m,t[4]=P-g*_,t[8]=y*_+v,t[1]=_,t[5]=a*m,t[9]=-o*m,t[2]=-h*m,t[6]=v*_+y,t[10]=g-P*_}else if(e.order==="XZY"){const g=a*c,v=a*h,y=o*c,P=o*h;t[0]=c*m,t[4]=-_,t[8]=h*m,t[1]=g*_+P,t[5]=a*m,t[9]=v*_-y,t[2]=y*_-v,t[6]=o*m,t[10]=P*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xl,e,ql)}lookAt(e,t,n){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Hn.crossVectors(n,Qt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Hn.crossVectors(n,Qt)),Hn.normalize(),br.crossVectors(Qt,Hn),r[0]=Hn.x,r[4]=br.x,r[8]=Qt.x,r[1]=Hn.y,r[5]=br.y,r[9]=Qt.y,r[2]=Hn.z,r[6]=br.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],m=n[1],_=n[5],g=n[9],v=n[13],y=n[2],P=n[6],f=n[10],p=n[14],b=n[3],A=n[7],x=n[11],u=n[15],M=r[0],d=r[4],l=r[8],S=r[12],w=r[1],C=r[5],I=r[9],U=r[13],F=r[2],k=r[6],Y=r[10],X=r[14],ne=r[3],J=r[7],te=r[11],ie=r[15];return s[0]=a*M+o*w+c*F+h*ne,s[4]=a*d+o*C+c*k+h*J,s[8]=a*l+o*I+c*Y+h*te,s[12]=a*S+o*U+c*X+h*ie,s[1]=m*M+_*w+g*F+v*ne,s[5]=m*d+_*C+g*k+v*J,s[9]=m*l+_*I+g*Y+v*te,s[13]=m*S+_*U+g*X+v*ie,s[2]=y*M+P*w+f*F+p*ne,s[6]=y*d+P*C+f*k+p*J,s[10]=y*l+P*I+f*Y+p*te,s[14]=y*S+P*U+f*X+p*ie,s[3]=b*M+A*w+x*F+u*ne,s[7]=b*d+A*C+x*k+u*J,s[11]=b*l+A*I+x*Y+u*te,s[15]=b*S+A*U+x*X+u*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],h=e[13],m=e[2],_=e[6],g=e[10],v=e[14],y=e[3],P=e[7],f=e[11],p=e[15],b=c*v-h*g,A=o*v-h*_,x=o*g-c*_,u=a*v-h*m,M=a*g-c*m,d=a*_-o*m;return t*(P*b-f*A+p*x)-n*(y*b-f*u+p*M)+r*(y*A-P*u+p*d)-s*(y*x-P*M+f*d)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],h=e[6],m=e[10];return t*(a*m-o*h)-n*(s*m-o*c)+r*(s*h-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],h=e[7],m=e[8],_=e[9],g=e[10],v=e[11],y=e[12],P=e[13],f=e[14],p=e[15],b=t*o-n*a,A=t*c-r*a,x=t*h-s*a,u=n*c-r*o,M=n*h-s*o,d=r*h-s*c,l=m*P-_*y,S=m*f-g*y,w=m*p-v*y,C=_*f-g*P,I=_*p-v*P,U=g*p-v*f,F=b*U-A*I+x*C+u*w-M*S+d*l;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(o*U-c*I+h*C)*k,e[1]=(r*I-n*U-s*C)*k,e[2]=(P*d-f*M+p*u)*k,e[3]=(g*M-_*d-v*u)*k,e[4]=(c*w-a*U-h*S)*k,e[5]=(t*U-r*w+s*S)*k,e[6]=(f*x-y*d-p*A)*k,e[7]=(m*d-g*x+v*A)*k,e[8]=(a*I-o*w+h*l)*k,e[9]=(n*w-t*I-s*l)*k,e[10]=(y*M-P*x+p*b)*k,e[11]=(_*x-m*M-v*b)*k,e[12]=(o*S-a*C-c*l)*k,e[13]=(t*C-n*S+r*l)*k,e[14]=(P*A-y*u-f*b)*k,e[15]=(m*u-_*A+g*b)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,h=s*a,m=s*o;return this.set(h*a+n,h*o-r*c,h*c+r*o,0,h*o+r*c,m*o+n,m*c-r*a,0,h*c-r*o,m*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,h=s+s,m=a+a,_=o+o,g=s*h,v=s*m,y=s*_,P=a*m,f=a*_,p=o*_,b=c*h,A=c*m,x=c*_,u=n.x,M=n.y,d=n.z;return r[0]=(1-(P+p))*u,r[1]=(v+x)*u,r[2]=(y-A)*u,r[3]=0,r[4]=(v-x)*M,r[5]=(1-(g+p))*M,r[6]=(f+b)*M,r[7]=0,r[8]=(y+A)*d,r[9]=(f-b)*d,r[10]=(1-(g+P))*d,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),c=Si.set(r[8],r[9],r[10]).length();s<0&&(a=-a),dn.copy(this);const h=1/a,m=1/o,_=1/c;return dn.elements[0]*=h,dn.elements[1]*=h,dn.elements[2]*=h,dn.elements[4]*=m,dn.elements[5]*=m,dn.elements[6]*=m,dn.elements[8]*=_,dn.elements[9]*=_,dn.elements[10]*=_,t.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){const h=this.elements,m=2*s/(t-e),_=2*s/(n-r),g=(t+e)/(t-e),v=(n+r)/(n-r);let y,P;if(c)y=s/(a-s),P=a*s/(a-s);else if(o===2e3)y=-(a+s)/(a-s),P=-2*a*s/(a-s);else if(o===2001)y=-a/(a-s),P=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){const h=this.elements,m=2/(t-e),_=2/(n-r),g=-(t+e)/(t-e),v=-(n+r)/(n-r);let y,P;if(c)y=1/(a-s),P=a/(a-s);else if(o===2e3)y=-2/(a-s),P=-(a+s)/(a-s);else if(o===2001)y=-1/(a-s),P=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=y,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$r.prototype.isMatrix4=!0;let At=$r;const Si=new B,dn=new At,Xl=new B(0,0,0),ql=new B(1,1,1),Hn=new B,br=new B,Qt=new B,Va=new At,ka=new ui;class Gn{constructor(e=0,t=0,n=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],h=r[5],m=r[9],_=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-_,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ot(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,s)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-m,v),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class jr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yl=0;const Ha=new B,yi=new ui,Dn=new At,Tr=new B,$i=new B,Zl=new B,Jl=new ui,Wa=new B(1,0,0),Xa=new B(0,1,0),qa=new B(0,0,1),Ya={type:"added"},Kl={type:"removed"},Ei={type:"childadded",child:null},ms={type:"childremoved",child:null};class Ot extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new B,t=new Gn,n=new ui,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new et}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Wa,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(qa,e)}translateOnAxis(e,t){return Ha.copy(e).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wa,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt($i,Tr,this.up):Dn.lookAt(Tr,$i,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(Dn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ya),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl),ms.child=e,this.dispatchEvent(ms),ms.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ya),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Zl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Jl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,m=c.length;h<m;h++){const _=c[h];s(e.shapes,_)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),m=a(e.images),_=a(e.shapes),g=a(e.skeletons),v=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=r,n;function a(o){const c=[];for(const h in o){const m=o[h];delete m.metadata,c.push(m)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ot.DEFAULT_UP=new B(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tt extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $l={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const P of e.hand.values()){const f=t.getJointPose(P,n),p=this._getHandJoint(h,P);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=m.position.distanceTo(_.position),v=.02,y=.005;h.inputState.pinching&&g>v+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($l)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function gs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=$s(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=gs(a,s,e+1/3),this.g=gs(a,s,e),this.b=gs(a,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return ut.workingToColorSpace(Vt.copy(this),e),Math.round(ot(Vt.r*255,0,255))*65536+Math.round(ot(Vt.g*255,0,255))*256+Math.round(ot(Vt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,h;const m=(o+a)/2;if(o===a)c=0,h=0;else{const _=a-o;switch(h=m<=.5?_/(a+o):_/(2-a-o),a){case n:c=(r-s)/_+(r<s?6:0);break;case r:c=(s-n)/_+2;break;case s:c=(n-r)/_+4;break}c/=6}return e.h=c,e.s=h,e.l=m,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Zt){ut.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Ar);const n=or(Wn.h,Ar.h,t),r=or(Wn.s,Ar.s,t),s=or(Wn.l,Ar.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new lt;lt.NAMES=zo;class Vo extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new B,In=new B,_s=new B,Nn=new B,bi=new B,Ti=new B,Za=new B,xs=new B,vs=new B,Ms=new B,Ss=new wt,ys=new wt,Es=new wt;class ln{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),In.subVectors(n,t),_s.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(In),c=pn.dot(_s),h=In.dot(In),m=In.dot(_s),_=a*h-o*o;if(_===0)return s.set(0,0,0),null;const g=1/_,v=(h*c-o*m)*g,y=(a*m-o*c)*g;return s.set(1-v-y,y,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(o,Nn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ss.setScalar(0),ys.setScalar(0),Es.setScalar(0),Ss.fromBufferAttribute(e,t),ys.fromBufferAttribute(e,n),Es.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ss,s.x),a.addScaledVector(ys,s.y),a.addScaledVector(Es,s.z),a}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),In.subVectors(e,t),pn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),pn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;bi.subVectors(r,n),Ti.subVectors(s,n),xs.subVectors(e,n);const c=bi.dot(xs),h=Ti.dot(xs);if(c<=0&&h<=0)return t.copy(n);vs.subVectors(e,r);const m=bi.dot(vs),_=Ti.dot(vs);if(m>=0&&_<=m)return t.copy(r);const g=c*_-m*h;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(bi,a);Ms.subVectors(e,s);const v=bi.dot(Ms),y=Ti.dot(Ms);if(y>=0&&v<=y)return t.copy(s);const P=v*h-c*y;if(P<=0&&h>=0&&y<=0)return o=h/(h-y),t.copy(n).addScaledVector(Ti,o);const f=m*y-v*_;if(f<=0&&_-m>=0&&v-y>=0)return Za.subVectors(s,r),o=(_-m)/(_-m+(v-y)),t.copy(r).addScaledVector(Za,o);const p=1/(f+P+g);return a=P*p,o=g*p,t.copy(n).addScaledVector(bi,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Rr.subVectors(this.max,Qi),Ai.subVectors(e.a,Qi),wi.subVectors(e.b,Qi),Ri.subVectors(e.c,Qi),Xn.subVectors(wi,Ai),qn.subVectors(Ri,wi),ti.subVectors(Ai,Ri);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ti.z,ti.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ti.z,0,-ti.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ti.y,ti.x,0];return!bs(t,Ai,wi,Ri,Rr)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,Ai,wi,Ri,Rr))?!1:(Cr.crossVectors(Xn,qn),t=[Cr.x,Cr.y,Cr.z],bs(t,Ai,wi,Ri,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new B,new B,new B,new B,new B,new B,new B,new B],mn=new B,wr=new hi,Ai=new B,wi=new B,Ri=new B,Xn=new B,qn=new B,ti=new B,Qi=new B,Rr=new B,Cr=new B,ni=new B;function bs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ni.fromArray(i,s);const o=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),c=e.dot(ni),h=t.dot(ni),m=n.dot(ni);if(Math.max(-Math.max(c,h,m),Math.min(c,h,m))>o)return!1}return!0}const Lt=new B,Pr=new xe;let Ql=0;class _n extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ql++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class js extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ea extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}const jl=new hi,ji=new B,Ts=new B;class es{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ji,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Ts)),this.expandByPoint(ji.copy(e.center).sub(Ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ec=0;const on=new At,As=new Ot,Ci=new B,jt=new hi,er=new hi,Ut=new B;class yt extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?ea:js)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return As.lookAt(e),As.updateMatrix(),this.applyMatrix4(As.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(jt.min,er.min),jt.expandByPoint(Ut),Ut.addVectors(jt.max,er.max),jt.expandByPoint(Ut)):(jt.expandByPoint(er.min),jt.expandByPoint(er.max))}jt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let h=0,m=o.count;h<m;h++)Ut.fromBufferAttribute(o,h),c&&(Ci.fromBufferAttribute(e,h),Ut.add(Ci)),r=Math.max(r,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let l=0;l<n.count;l++)o[l]=new B,c[l]=new B;const h=new B,m=new B,_=new B,g=new xe,v=new xe,y=new xe,P=new B,f=new B;function p(l,S,w){h.fromBufferAttribute(n,l),m.fromBufferAttribute(n,S),_.fromBufferAttribute(n,w),g.fromBufferAttribute(s,l),v.fromBufferAttribute(s,S),y.fromBufferAttribute(s,w),m.sub(h),_.sub(h),v.sub(g),y.sub(g);const C=1/(v.x*y.y-y.x*v.y);isFinite(C)&&(P.copy(m).multiplyScalar(y.y).addScaledVector(_,-v.y).multiplyScalar(C),f.copy(_).multiplyScalar(v.x).addScaledVector(m,-y.x).multiplyScalar(C),o[l].add(P),o[S].add(P),o[w].add(P),c[l].add(f),c[S].add(f),c[w].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let l=0,S=b.length;l<S;++l){const w=b[l],C=w.start,I=w.count;for(let U=C,F=C+I;U<F;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const A=new B,x=new B,u=new B,M=new B;function d(l){u.fromBufferAttribute(r,l),M.copy(u);const S=o[l];A.copy(S),A.sub(u.multiplyScalar(u.dot(S))).normalize(),x.crossVectors(M,S);const C=x.dot(c[l])<0?-1:1;a.setXYZW(l,A.x,A.y,A.z,C)}for(let l=0,S=b.length;l<S;++l){const w=b[l],C=w.start,I=w.count;for(let U=C,F=C+I;U<F;U+=3)d(e.getX(U+0)),d(e.getX(U+1)),d(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,h=new B,m=new B,_=new B;if(e)for(let g=0,v=e.count;g<v;g+=3){const y=e.getX(g+0),P=e.getX(g+1),f=e.getX(g+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,P),a.fromBufferAttribute(t,f),m.subVectors(a,s),_.subVectors(r,s),m.cross(_),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,f),o.add(m),c.add(m),h.add(m),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(P,c.x,c.y,c.z),n.setXYZ(f,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),m.subVectors(a,s),_.subVectors(r,s),m.cross(_),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){const h=o.array,m=o.itemSize,_=o.normalized,g=new h.constructor(c.length*m);let v=0,y=0;for(let P=0,f=c.length;P<f;P++){o.isInterleavedBufferAttribute?v=c[P]*o.data.stride+o.offset:v=c[P]*m;for(let p=0;p<m;p++)g[y++]=h[v++]}return new _n(g,m,_)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],h=e(c,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const c=[],h=s[o];for(let m=0,_=h.length;m<_;m++){const g=h[m],v=e(g,n);c.push(v)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],m=[];for(let _=0,g=h.length;_<g;_++){const v=h[_];m.push(v.toJSON(e.data))}m.length>0&&(r[c]=m,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(t))}const s=e.morphAttributes;for(const h in s){const m=[],_=s[h];for(let g=0,v=_.length;g<v;g++)m.push(_[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,m=a.length;h<m;h++){const _=a[h];this.addGroup(_.start,_.count,_.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ws=new B,tc=new B,nc=new et;class On{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ws.subVectors(n,t).cross(tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ws),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nc.getNormalMatrix(e),r=this.coplanarPoint(ws).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ic=0;class fi extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new On().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Un=new B,Rs=new B,Lr=new B,Dr=new B;class ta{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rs.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(Rs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Dr.dot(this.direction),c=-Dr.dot(Lr),h=Dr.lengthSq(),m=Math.abs(1-a*a);let _,g,v,y;if(m>0)if(_=a*c-o,g=a*o-c,y=s*m,_>=0)if(g>=-y)if(g<=y){const P=1/m;_*=P,g*=P,v=_*(_+a*g+2*o)+g*(a*_+g+2*c)+h}else g=s,_=Math.max(0,-(a*g+o)),v=-_*_+g*(g+2*c)+h;else g=-s,_=Math.max(0,-(a*g+o)),v=-_*_+g*(g+2*c)+h;else g<=-y?(_=Math.max(0,-(-a*s+o)),g=_>0?-s:Math.min(Math.max(-s,-c),s),v=-_*_+g*(g+2*c)+h):g<=y?(_=0,g=Math.min(Math.max(-s,-c),s),v=g*(g+2*c)+h):(_=Math.max(0,-(a*s+o)),g=_>0?s:Math.min(Math.max(-s,-c),s),v=-_*_+g*(g+2*c)+h);else g=a>0?-s:s,_=Math.max(0,-(a*g+o)),v=-_*_+g*(g+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Rs).addScaledVector(Lr,g),v}intersectSphere(e,t){if(e.radius<0)return null;Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),m>=0?(s=(e.min.y-g.y)*m,a=(e.max.y-g.y)*m):(s=(e.max.y-g.y)*m,a=(e.min.y-g.y)*m),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),_>=0?(o=(e.min.z-g.z)*_,c=(e.max.z-g.z)*_):(o=(e.max.z-g.z)*_,c=(e.min.z-g.z)*_),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,h=o.y,m=o.z,_=e.x-a.x,g=e.y-a.y,v=e.z-a.z,y=t.x-a.x,P=t.y-a.y,f=t.z-a.z,p=n.x-a.x,b=n.y-a.y,A=n.z-a.z,x=Math.abs(c),u=Math.abs(h),M=Math.abs(m);let d,l,S,w,C,I,U,F,k,Y,X,ne;if(x>=u&&x>=M?(S=c,I=_,k=y,ne=p,c>=0?(d=h,l=m,w=g,C=v,U=P,F=f,Y=b,X=A):(d=m,l=h,w=v,C=g,U=f,F=P,Y=A,X=b)):u>=M?(S=h,I=g,k=P,ne=b,h>=0?(d=m,l=c,w=v,C=_,U=f,F=y,Y=A,X=p):(d=c,l=m,w=_,C=v,U=y,F=f,Y=p,X=A)):(S=m,I=v,k=f,ne=A,m>=0?(d=c,l=h,w=_,C=g,U=y,F=P,Y=p,X=b):(d=h,l=c,w=g,C=_,U=P,F=y,Y=b,X=p)),S===0)return null;const J=d/S,te=l/S,ie=1/S,Fe=w-J*I,Pe=C-te*I,rt=U-J*k,Qe=F-te*k,at=Y-J*ne,j=X-te*ne,re=at*Qe-j*rt,Te=Fe*j-Pe*at,Ye=rt*Pe-Qe*Fe;if(r){if(re<0||Te<0||Ye<0)return null}else if((re<0||Te<0||Ye<0)&&(re>0||Te>0||Ye>0))return null;const De=re+Te+Ye;if(De===0)return null;const qe=ie*(re*I+Te*k+Ye*ne);return(De>0?qe<0:qe>0)?null:this.at(qe/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oi extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ja=new At,ii=new ta,Ir=new es,Ka=new B,Nr=new B,Fr=new B,Ur=new B,Cs=new B,Or=new B,$a=new B,Br=new B;class un extends Ot{constructor(e=new yt,t=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Or.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const m=o[c],_=s[c];m!==0&&(Cs.fromBufferAttribute(_,e),a?Or.addScaledVector(Cs,m):Or.addScaledVector(Cs.sub(t),m))}t.add(Or)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(Ir.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ir,Ka)===null||ii.origin.distanceToSquared(Ka)>(e.far-e.near)**2))&&(Ja.copy(s).invert(),ii.copy(e.ray).applyMatrix4(Ja),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,m=s.attributes.uv1,_=s.attributes.normal,g=s.groups,v=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,P=g.length;y<P;y++){const f=g[y],p=a[f.materialIndex],b=Math.max(f.start,v.start),A=Math.min(o.count,Math.min(f.start+f.count,v.start+v.count));for(let x=b,u=A;x<u;x+=3){const M=o.getX(x),d=o.getX(x+1),l=o.getX(x+2);r=Gr(this,p,e,n,h,m,_,M,d,l),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),P=Math.min(o.count,v.start+v.count);for(let f=y,p=P;f<p;f+=3){const b=o.getX(f),A=o.getX(f+1),x=o.getX(f+2);r=Gr(this,a,e,n,h,m,_,b,A,x),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,P=g.length;y<P;y++){const f=g[y],p=a[f.materialIndex],b=Math.max(f.start,v.start),A=Math.min(c.count,Math.min(f.start+f.count,v.start+v.count));for(let x=b,u=A;x<u;x+=3){const M=x,d=x+1,l=x+2;r=Gr(this,p,e,n,h,m,_,M,d,l),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),P=Math.min(c.count,v.start+v.count);for(let f=y,p=P;f<p;f+=3){const b=f,A=f+1,x=f+2;r=Gr(this,a,e,n,h,m,_,b,A,x),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function rc(i,e,t,n,r,s,a,o){let c;if(e.side===1?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===0,o),c===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Br);return h<t.near||h>t.far?null:{distance:h,point:Br.clone(),object:i}}function Gr(i,e,t,n,r,s,a,o,c,h){i.getVertexPosition(o,Nr),i.getVertexPosition(c,Fr),i.getVertexPosition(h,Ur);const m=rc(i,e,t,n,Nr,Fr,Ur,$a);if(m){const _=new B;ln.getBarycoord($a,Nr,Fr,Ur,_),r&&(m.uv=ln.getInterpolatedAttribute(r,o,c,h,_,new xe)),s&&(m.uv1=ln.getInterpolatedAttribute(s,o,c,h,_,new xe)),a&&(m.normal=ln.getInterpolatedAttribute(a,o,c,h,_,new B),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const g={a:o,b:c,c:h,normal:new B,materialIndex:0};ln.getNormal(Nr,Fr,Ur,g.normal),m.face=g,m.barycoord=_}return m}class ko extends kt{constructor(e=null,t=1,n=1,r,s,a,o,c,h=1003,m=1003,_,g){super(null,a,o,c,h,m,r,s,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ri=new es,sc=new xe(.5,.5),zr=new B;class ts{constructor(e=new On,t=new On,n=new On,r=new On,s=new On,a=new On){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],h=s[3],m=s[4],_=s[5],g=s[6],v=s[7],y=s[8],P=s[9],f=s[10],p=s[11],b=s[12],A=s[13],x=s[14],u=s[15];if(r[0].setComponents(h-a,v-m,p-y,u-b).normalize(),r[1].setComponents(h+a,v+m,p+y,u+b).normalize(),r[2].setComponents(h+o,v+_,p+P,u+A).normalize(),r[3].setComponents(h-o,v-_,p-P,u-A).normalize(),n)r[4].setComponents(c,g,f,x).normalize(),r[5].setComponents(h-c,v-g,p-f,u-x).normalize();else if(r[4].setComponents(h-c,v-g,p-f,u-x).normalize(),t===2e3)r[5].setComponents(h+c,v+g,p+f,u+x).normalize();else if(t===2001)r[5].setComponents(c,g,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=sc.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class na extends kt{constructor(e=[],t=301,n,r,s,a,o,c,h,m){super(e,t,n,r,s,a,o,c,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zi extends kt{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,h,m=1026,_=1){if(m!==1026&&m!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,r,s,a,o,c,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ho extends zi{constructor(e,t=1014,n=301,r,s,a=1003,o=1003,c,h=1026){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,n,r,s,a,o,c,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ia extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jn extends yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],h=[],m=[],_=[];let g=0,v=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,r,a,2),y("x","z","y",1,-1,e,n,-t,r,a,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(m,3)),this.setAttribute("uv",new tt(_,2));function y(P,f,p,b,A,x,u,M,d,l,S){const w=x/d,C=u/l,I=x/2,U=u/2,F=M/2,k=d+1,Y=l+1;let X=0,ne=0;const J=new B;for(let te=0;te<Y;te++){const ie=te*C-U;for(let Fe=0;Fe<k;Fe++){const Pe=Fe*w-I;J[P]=Pe*b,J[f]=ie*A,J[p]=F,h.push(J.x,J.y,J.z),J[P]=0,J[f]=0,J[p]=M>0?1:-1,m.push(J.x,J.y,J.z),_.push(Fe/d),_.push(1-te/l),X+=1}}for(let te=0;te<l;te++)for(let ie=0;ie<d;ie++){const Fe=g+ie+k*te,Pe=g+ie+k*(te+1),rt=g+(ie+1)+k*(te+1),Qe=g+(ie+1)+k*te;c.push(Fe,Pe,Qe),c.push(Pe,rt,Qe),ne+=6}o.addGroup(v,ne,S),v+=ne,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xr extends yt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const h=this;r=Math.floor(r),s=Math.floor(s);const m=[],_=[],g=[],v=[];let y=0;const P=[],f=n/2;let p=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(m),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(v,2));function b(){const x=new B,u=new B;let M=0;const d=(t-e)/n;for(let l=0;l<=s;l++){const S=[],w=l/s,C=w*(t-e)+e;for(let I=0;I<=r;I++){const U=I/r,F=U*c+o,k=Math.sin(F),Y=Math.cos(F);u.x=C*k,u.y=-w*n+f,u.z=C*Y,_.push(u.x,u.y,u.z),x.set(k,d,Y).normalize(),g.push(x.x,x.y,x.z),v.push(U,1-w),S.push(y++)}P.push(S)}for(let l=0;l<r;l++)for(let S=0;S<s;S++){const w=P[S][l],C=P[S+1][l],I=P[S+1][l+1],U=P[S][l+1];(e>0||S!==0)&&(m.push(w,C,U),M+=3),(t>0||S!==s-1)&&(m.push(C,I,U),M+=3)}h.addGroup(p,M,0),p+=M}function A(x){const u=y,M=new xe,d=new B;let l=0;const S=x===!0?e:t,w=x===!0?1:-1;for(let I=1;I<=r;I++)_.push(0,f*w,0),g.push(0,w,0),v.push(.5,.5),y++;const C=y;for(let I=0;I<=r;I++){const F=I/r*c+o,k=Math.cos(F),Y=Math.sin(F);d.x=S*Y,d.y=f*w,d.z=S*k,_.push(d.x,d.y,d.z),g.push(0,w,0),M.x=k*.5+.5,M.y=Y*.5*w+.5,v.push(M.x,M.y),y++}for(let I=0;I<r;I++){const U=u+I,F=C+I;x===!0?m.push(F,F+1,U):m.push(F+1,F,U),l+=3}h.addGroup(p,l,x===!0?1:2),p+=l}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bi extends xr{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Bi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ns extends yt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),h(n),m(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const A=new B,x=new B,u=new B;for(let M=0;M<t.length;M+=3)v(t[M+0],A),v(t[M+1],x),v(t[M+2],u),c(A,x,u,b)}function c(b,A,x,u){const M=u+1,d=[];for(let l=0;l<=M;l++){d[l]=[];const S=b.clone().lerp(x,l/M),w=A.clone().lerp(x,l/M),C=M-l;for(let I=0;I<=C;I++)I===0&&l===M?d[l][I]=S:d[l][I]=S.clone().lerp(w,I/C)}for(let l=0;l<M;l++)for(let S=0;S<2*(M-l)-1;S++){const w=Math.floor(S/2);S%2===0?(g(d[l][w+1]),g(d[l+1][w]),g(d[l][w])):(g(d[l][w+1]),g(d[l+1][w+1]),g(d[l+1][w]))}}function h(b){const A=new B;for(let x=0;x<s.length;x+=3)A.x=s[x+0],A.y=s[x+1],A.z=s[x+2],A.normalize().multiplyScalar(b),s[x+0]=A.x,s[x+1]=A.y,s[x+2]=A.z}function m(){const b=new B;for(let A=0;A<s.length;A+=3){b.x=s[A+0],b.y=s[A+1],b.z=s[A+2];const x=f(b)/2/Math.PI+.5,u=p(b)/Math.PI+.5;a.push(x,1-u)}y(),_()}function _(){for(let b=0;b<a.length;b+=6){const A=a[b+0],x=a[b+2],u=a[b+4],M=Math.max(A,x,u),d=Math.min(A,x,u);M>.9&&d<.1&&(A<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),u<.2&&(a[b+4]+=1))}}function g(b){s.push(b.x,b.y,b.z)}function v(b,A){const x=b*3;A.x=e[x+0],A.y=e[x+1],A.z=e[x+2]}function y(){const b=new B,A=new B,x=new B,u=new B,M=new xe,d=new xe,l=new xe;for(let S=0,w=0;S<s.length;S+=9,w+=6){b.set(s[S+0],s[S+1],s[S+2]),A.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),M.set(a[w+0],a[w+1]),d.set(a[w+2],a[w+3]),l.set(a[w+4],a[w+5]),u.copy(b).add(A).add(x).divideScalar(3);const C=f(u);P(M,w+0,b,C),P(d,w+2,A,C),P(l,w+4,x,C)}}function P(b,A,x,u){u<0&&b.x===1&&(a[A]=b.x-1),x.x===0&&x.z===0&&(a[A]=u/2/Math.PI+.5)}function f(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.vertices,e.indices,e.radius,e.detail)}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,h;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),h=n[r]-a,h<0)o=r+1;else if(h>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const m=n[r],g=n[r+1]-m,v=(a-m)/g;return(r+v)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new xe:new B);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,r=[],s=[],a=[],o=new B,c=new At;for(let v=0;v<=e;v++){const y=v/e;r[v]=this.getTangentAt(y,new B)}s[0]=new B,a[0]=new B;let h=Number.MAX_VALUE;const m=Math.abs(r[0].x),_=Math.abs(r[0].y),g=Math.abs(r[0].z);m<=h&&(h=m,n.set(1,0,0)),_<=h&&(h=_,n.set(0,1,0)),g<=h&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),a[v]=a[v-1].clone(),o.crossVectors(r[v-1],r[v]),o.length()>Number.EPSILON){o.normalize();const y=Math.acos(ot(r[v-1].dot(r[v]),-1,1));s[v].applyMatrix4(c.makeRotationAxis(o,y))}a[v].crossVectors(r[v],s[v])}if(t===!0){let v=Math.acos(ot(s[0].dot(s[e]),-1,1));v/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(v=-v);for(let y=1;y<=e;y++)s[y].applyMatrix4(c.makeRotationAxis(r[y],v*y)),a[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class is extends vn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new xe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const m=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=c-this.aX,v=h-this.aY;c=g*m-v*_+this.aX,h=g*_+v*m+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wo extends is{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ra(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,h){r(a,o,h*(o-s),h*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,h,m,_){let g=(a-s)/h-(o-s)/(h+m)+(o-a)/m,v=(o-a)/m-(c-a)/(m+_)+(c-o)/_;g*=m,v*=m,r(a,o,g,v)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Qa=new B,ja=new B,Ps=new ra,Ls=new ra,Ds=new ra;class Ni extends vn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let h,m;this.closed||o>0?h=r[(o-1)%s]:(ja.subVectors(r[0],r[1]).add(r[0]),h=ja);const _=r[o%s],g=r[(o+1)%s];if(this.closed||o+2<s?m=r[(o+2)%s]:(Qa.subVectors(r[s-1],r[s-2]).add(r[s-1]),m=Qa),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(_),v),P=Math.pow(_.distanceToSquared(g),v),f=Math.pow(g.distanceToSquared(m),v);P<1e-4&&(P=1),y<1e-4&&(y=P),f<1e-4&&(f=P),Ps.initNonuniformCatmullRom(h.x,_.x,g.x,m.x,y,P,f),Ls.initNonuniformCatmullRom(h.y,_.y,g.y,m.y,y,P,f),Ds.initNonuniformCatmullRom(h.z,_.z,g.z,m.z,y,P,f)}else this.curveType==="catmullrom"&&(Ps.initCatmullRom(h.x,_.x,g.x,m.x,this.tension),Ls.initCatmullRom(h.y,_.y,g.y,m.y,this.tension),Ds.initCatmullRom(h.z,_.z,g.z,m.z,this.tension));return n.set(Ps.calc(c),Ls.calc(c),Ds.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function eo(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function ac(i,e){const t=1-i;return t*t*e}function oc(i,e){return 2*(1-i)*i*e}function lc(i,e){return i*i*e}function lr(i,e,t,n){return ac(i,e)+oc(i,t)+lc(i,n)}function cc(i,e){const t=1-i;return t*t*t*e}function uc(i,e){const t=1-i;return 3*t*t*i*e}function hc(i,e){return 3*(1-i)*i*i*e}function fc(i,e){return i*i*i*e}function cr(i,e,t,n,r){return cc(i,e)+uc(i,t)+hc(i,n)+fc(i,r)}class sa extends vn{constructor(e=new xe,t=new xe,n=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(cr(e,r.x,s.x,a.x,o.x),cr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xo extends vn{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(cr(e,r.x,s.x,a.x,o.x),cr(e,r.y,s.y,a.y,o.y),cr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aa extends vn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oa extends vn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class la extends vn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(lr(e,r.x,s.x,a.x),lr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ca extends vn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(lr(e,r.x,s.x,a.x),lr(e,r.y,s.y,a.y),lr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ua extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],h=r[a],m=r[a>r.length-2?r.length-1:a+1],_=r[a>r.length-3?r.length-1:a+2];return n.set(eo(o,c.x,h.x,m.x,_.x),eo(o,c.y,h.y,m.y,_.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new xe().fromArray(r))}return this}}var Kr=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:Ni,CubicBezierCurve:sa,CubicBezierCurve3:Xo,EllipseCurve:is,LineCurve:aa,LineCurve3:oa,QuadraticBezierCurve:la,QuadraticBezierCurve3:ca,SplineCurve:ua});class ha extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){const m=c[h];n&&n.equals(m)||(t.push(m),n=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Kr[r.type]().fromJSON(r))}return this}}class ks extends ha{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new aa(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new la(this.currentPoint.clone(),new xe(e,t),new xe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new sa(this.currentPoint.clone(),new xe(e,t),new xe(n,r),new xe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ua(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+h,t+m,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const h=new is(e,t,n,r,s,a,o,c);if(this.curves.length>0){const _=h.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(h);const m=h.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gi extends ks{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ks().fromJSON(r))}return this}}function dc(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=qo(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,h;if(n&&(s=xc(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let m=o,_=c;for(let g=t;g<r;g+=t){const v=i[g],y=i[g+1];v<o&&(o=v),y<c&&(c=y),v>m&&(m=v),y>_&&(_=y)}h=Math.max(m-o,_-c),h=h!==0?32767/h:0}return dr(s,a,t,o,c,h,0),a}function qo(i,e,t,n,r){let s;if(r===Cc(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=to(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=to(a/n|0,i[a],i[a+1],s);return s&&Vi(s,s.next)&&(mr(s),s=s.next),s}function li(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vi(t,t.next)||Rt(t.prev,t,t.next)===0)){if(mr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function dr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Ec(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,h=i.next;if(s?mc(i,n,r,s):pc(i)){e.push(c.i,i.i,h.i),mr(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=gc(li(i),e),dr(i,e,t,n,r,s,2)):a===2&&_c(i,e,t,n,r,s):dr(li(i),e,t,n,r,s,1);break}}}function pc(i){const e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,h=n.y,m=Math.min(r,s,a),_=Math.min(o,c,h),g=Math.max(r,s,a),v=Math.max(o,c,h);let y=n.next;for(;y!==e;){if(y.x>=m&&y.x<=g&&y.y>=_&&y.y<=v&&rr(r,o,s,c,a,h,y.x,y.y)&&Rt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function mc(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Rt(r,s,a)>=0)return!1;const o=r.x,c=s.x,h=a.x,m=r.y,_=s.y,g=a.y,v=Math.min(o,c,h),y=Math.min(m,_,g),P=Math.max(o,c,h),f=Math.max(m,_,g),p=Hs(v,y,e,t,n),b=Hs(P,f,e,t,n);let A=i.prevZ,x=i.nextZ;for(;A&&A.z>=p&&x&&x.z<=b;){if(A.x>=v&&A.x<=P&&A.y>=y&&A.y<=f&&A!==r&&A!==a&&rr(o,m,c,_,h,g,A.x,A.y)&&Rt(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=v&&x.x<=P&&x.y>=y&&x.y<=f&&x!==r&&x!==a&&rr(o,m,c,_,h,g,x.x,x.y)&&Rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=p;){if(A.x>=v&&A.x<=P&&A.y>=y&&A.y<=f&&A!==r&&A!==a&&rr(o,m,c,_,h,g,A.x,A.y)&&Rt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=b;){if(x.x>=v&&x.x<=P&&x.y>=y&&x.y<=f&&x!==r&&x!==a&&rr(o,m,c,_,h,g,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gc(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Vi(n,r)&&Zo(n,t,t.next,r)&&pr(n,r)&&pr(r,n)&&(e.push(n.i,t.i,r.i),mr(t),mr(t.next),t=i=r),t=t.next}while(t!==i);return li(t)}function _c(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ac(a,o)){let c=Jo(a,o);a=li(a,a.next),c=li(c,c.next),dr(a,e,t,n,r,s,0),dr(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function xc(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,h=qo(i,o,c,n,!1);h===h.next&&(h.steiner=!0),r.push(Tc(h))}r.sort(vc);for(let s=0;s<r.length;s++)t=Mc(r[s],t);return t}function vc(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Mc(i,e){const t=Sc(i,e);if(!t)return e;const n=Jo(t,i);return li(n,n.next),li(t,t.next)}function Sc(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Vi(i,t))return t;do{if(Vi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const _=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=n&&_>s&&(s=_,a=t.x<t.next.x?t:t.next,_===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,h=a.y;let m=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Yo(r<h?n:s,r,c,h,r<h?s:n,r,t.x,t.y)){const _=Math.abs(r-t.y)/(n-t.x);pr(t,i)&&(_<m||_===m&&(t.x>a.x||t.x===a.x&&yc(a,t)))&&(a=t,m=_)}t=t.next}while(t!==o);return a}function yc(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function Ec(i,e,t,n){let r=i;do r.z===0&&(r.z=Hs(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,bc(r)}function bc(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let h=0;h<t&&(o++,a=a.nextZ,!!a);h++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function Hs(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tc(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Yo(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function rr(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Yo(i,e,t,n,r,s,a,o)}function Ac(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wc(i,e)&&(pr(i,e)&&pr(e,i)&&Rc(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||Vi(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vi(i,e){return i.x===e.x&&i.y===e.y}function Zo(i,e,t,n){const r=kr(Rt(i,e,t)),s=kr(Rt(i,e,n)),a=kr(Rt(t,n,i)),o=kr(Rt(t,n,e));return!!(r!==s&&a!==o||r===0&&Vr(i,t,e)||s===0&&Vr(i,n,e)||a===0&&Vr(t,i,n)||o===0&&Vr(t,e,n))}function Vr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function kr(i){return i>0?1:i<0?-1:0}function wc(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zo(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function pr(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function Rc(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jo(i,e){const t=Ws(i.i,i.x,i.y),n=Ws(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function to(i,e,t,n){const r=Ws(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ws(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cc(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Pc{static triangulate(e,t,n=2){return dc(e,t,n)}}class Pn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Pn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];no(e),io(n,e);let a=e.length;t.forEach(no);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,io(n,t[c]);const o=Pc.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function no(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function io(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class gr extends yt{constructor(e=new Gi([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const h=e[o];a(h)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function a(o){const c=[],h=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,v=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:v-.1,P=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Lc;let A,x=!1,u,M,d,l;if(p){A=p.getSpacedPoints(m),x=!0,g=!1;const oe=p.isCatmullRomCurve3?p.closed:!1;u=p.computeFrenetFrames(m,oe),M=new B,d=new B,l=new B}g||(f=0,v=0,y=0,P=0);const S=o.extractPoints(h);let w=S.shape;const C=S.holes;if(!Pn.isClockWise(w)){w=w.reverse();for(let oe=0,le=C.length;oe<le;oe++){const he=C[oe];Pn.isClockWise(he)&&(C[oe]=he.reverse())}}function U(oe){const he=10000000000000001e-36;let fe=oe[0];for(let Se=1;Se<=oe.length;Se++){const ke=Se%oe.length,He=oe[ke],We=He.x-fe.x,$e=He.y-fe.y,O=We*We+$e*$e,mt=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(fe.x),Math.abs(fe.y)),st=he*mt*mt;if(O<=st){oe.splice(ke,1),Se--;continue}fe=He}}U(w),C.forEach(U);const F=C.length,k=w;for(let oe=0;oe<F;oe++){const le=C[oe];w=w.concat(le)}function Y(oe,le,he){return le||dt("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(le,he)}const X=w.length;function ne(oe,le,he){let fe,Se,ke;const He=oe.x-le.x,We=oe.y-le.y,$e=he.x-oe.x,O=he.y-oe.y,mt=He*He+We*We,st=He*O-We*$e;if(Math.abs(st)>Number.EPSILON){const N=Math.sqrt(mt),T=Math.sqrt($e*$e+O*O),H=le.x-We/N,Z=le.y+He/N,Q=he.x-O/T,ge=he.y+$e/T,ve=((Q-H)*O-(ge-Z)*$e)/(He*O-We*$e);fe=H+He*ve-oe.x,Se=Z+We*ve-oe.y;const ee=fe*fe+Se*Se;if(ee<=2)return new xe(fe,Se);ke=Math.sqrt(ee/2)}else{let N=!1;He>Number.EPSILON?$e>Number.EPSILON&&(N=!0):He<-Number.EPSILON?$e<-Number.EPSILON&&(N=!0):Math.sign(We)===Math.sign(O)&&(N=!0),N?(fe=-We,Se=He,ke=Math.sqrt(mt)):(fe=He,Se=We,ke=Math.sqrt(mt/2))}return new xe(fe/ke,Se/ke)}const J=[];for(let oe=0,le=k.length,he=le-1,fe=oe+1;oe<le;oe++,he++,fe++)he===le&&(he=0),fe===le&&(fe=0),J[oe]=ne(k[oe],k[he],k[fe]);const te=[];let ie,Fe=J.concat();for(let oe=0,le=F;oe<le;oe++){const he=C[oe];ie=[];for(let fe=0,Se=he.length,ke=Se-1,He=fe+1;fe<Se;fe++,ke++,He++)ke===Se&&(ke=0),He===Se&&(He=0),ie[fe]=ne(he[fe],he[ke],he[He]);te.push(ie),Fe=Fe.concat(ie)}let Pe;if(f===0)Pe=Pn.triangulateShape(k,C);else{const oe=[],le=[];for(let he=0;he<f;he++){const fe=he/f,Se=v*Math.cos(fe*Math.PI/2),ke=y*Math.sin(fe*Math.PI/2)+P;for(let He=0,We=k.length;He<We;He++){const $e=Y(k[He],J[He],ke);Te($e.x,$e.y,-Se),fe===0&&oe.push($e)}for(let He=0,We=F;He<We;He++){const $e=C[He];ie=te[He];const O=[];for(let mt=0,st=$e.length;mt<st;mt++){const N=Y($e[mt],ie[mt],ke);Te(N.x,N.y,-Se),fe===0&&O.push(N)}fe===0&&le.push(O)}}Pe=Pn.triangulateShape(oe,le)}const rt=Pe.length,Qe=y+P;for(let oe=0;oe<X;oe++){const le=g?Y(w[oe],Fe[oe],Qe):w[oe];x?(d.copy(u.normals[0]).multiplyScalar(le.x),M.copy(u.binormals[0]).multiplyScalar(le.y),l.copy(A[0]).add(d).add(M),Te(l.x,l.y,l.z)):Te(le.x,le.y,0)}for(let oe=1;oe<=m;oe++)for(let le=0;le<X;le++){const he=g?Y(w[le],Fe[le],Qe):w[le];x?(d.copy(u.normals[oe]).multiplyScalar(he.x),M.copy(u.binormals[oe]).multiplyScalar(he.y),l.copy(A[oe]).add(d).add(M),Te(l.x,l.y,l.z)):Te(he.x,he.y,_/m*oe)}for(let oe=f-1;oe>=0;oe--){const le=oe/f,he=v*Math.cos(le*Math.PI/2),fe=y*Math.sin(le*Math.PI/2)+P;for(let Se=0,ke=k.length;Se<ke;Se++){const He=Y(k[Se],J[Se],fe);Te(He.x,He.y,_+he)}for(let Se=0,ke=C.length;Se<ke;Se++){const He=C[Se];ie=te[Se];for(let We=0,$e=He.length;We<$e;We++){const O=Y(He[We],ie[We],fe);x?Te(O.x,O.y+A[m-1].y,A[m-1].x+he):Te(O.x,O.y,_+he)}}}at(),j();function at(){const oe=r.length/3;if(g){let le=0,he=X*le;for(let fe=0;fe<rt;fe++){const Se=Pe[fe];Ye(Se[2]+he,Se[1]+he,Se[0]+he)}le=m+f*2,he=X*le;for(let fe=0;fe<rt;fe++){const Se=Pe[fe];Ye(Se[0]+he,Se[1]+he,Se[2]+he)}}else{for(let le=0;le<rt;le++){const he=Pe[le];Ye(he[2],he[1],he[0])}for(let le=0;le<rt;le++){const he=Pe[le];Ye(he[0]+X*m,he[1]+X*m,he[2]+X*m)}}n.addGroup(oe,r.length/3-oe,0)}function j(){const oe=r.length/3;let le=0;re(k,le),le+=k.length;for(let he=0,fe=C.length;he<fe;he++){const Se=C[he];re(Se,le),le+=Se.length}n.addGroup(oe,r.length/3-oe,1)}function re(oe,le){let he=oe.length;for(;--he>=0;){const fe=he;let Se=he-1;Se<0&&(Se=oe.length-1);for(let ke=0,He=m+f*2;ke<He;ke++){const We=X*ke,$e=X*(ke+1),O=le+fe+We,mt=le+Se+We,st=le+Se+$e,N=le+fe+$e;De(O,mt,st,N)}}}function Te(oe,le,he){c.push(oe),c.push(le),c.push(he)}function Ye(oe,le,he){qe(oe),qe(le),qe(he);const fe=r.length/3,Se=b.generateTopUV(n,r,fe-3,fe-2,fe-1);pt(Se[0]),pt(Se[1]),pt(Se[2])}function De(oe,le,he,fe){qe(oe),qe(le),qe(fe),qe(le),qe(he),qe(fe);const Se=r.length/3,ke=b.generateSideWallUV(n,r,Se-6,Se-3,Se-2,Se-1);pt(ke[0]),pt(ke[1]),pt(ke[3]),pt(ke[1]),pt(ke[2]),pt(ke[3])}function qe(oe){r.push(c[oe*3+0]),r.push(c[oe*3+1]),r.push(c[oe*3+2])}function pt(oe){s.push(oe.x),s.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dc(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Kr[r.type]().fromJSON(r)),new gr(n,e.options)}}const Lc={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],h=e[r*3],m=e[r*3+1];return[new xe(s,a),new xe(o,c),new xe(h,m)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[n*3],m=e[n*3+1],_=e[n*3+2],g=e[r*3],v=e[r*3+1],y=e[r*3+2],P=e[s*3],f=e[s*3+1],p=e[s*3+2];return Math.abs(o-m)<Math.abs(a-h)?[new xe(a,1-c),new xe(h,1-_),new xe(g,1-y),new xe(P,1-p)]:[new xe(o,1-c),new xe(m,1-_),new xe(v,1-y),new xe(f,1-p)]}};function Dc(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class rs extends ns{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rs(e.radius,e.detail)}}class Hi extends yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),h=o+1,m=c+1,_=e/o,g=t/c,v=[],y=[],P=[],f=[];for(let p=0;p<m;p++){const b=p*g-a;for(let A=0;A<h;A++){const x=A*_-s;y.push(x,-b,0),P.push(0,0,1),f.push(A/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const A=b+h*p,x=b+h*(p+1),u=b+1+h*(p+1),M=b+1+h*p;v.push(A,x,M),v.push(x,u,M)}this.setIndex(v),this.setAttribute("position",new tt(y,3)),this.setAttribute("normal",new tt(P,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class _r extends yt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],h=[],m=[];let _=e;const g=(t-e)/r,v=new B,y=new xe;for(let P=0;P<=r;P++){for(let f=0;f<=n;f++){const p=s+f/n*a;v.x=_*Math.cos(p),v.y=_*Math.sin(p),c.push(v.x,v.y,v.z),h.push(0,0,1),y.x=(v.x/t+1)/2,y.y=(v.y/t+1)/2,m.push(y.x,y.y)}_+=g}for(let P=0;P<r;P++){const f=P*(n+1);for(let p=0;p<n;p++){const b=p+f,A=b,x=b+n+1,u=b+n+2,M=b+1;o.push(A,x,M),o.push(x,u,M)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ss extends yt{constructor(e=new Gi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let m=0;m<e.length;m++)h(e[m]),this.addGroup(o,c,m),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(s,3)),this.setAttribute("uv",new tt(a,2));function h(m){const _=r.length/3,g=m.extractPoints(t);let v=g.shape;const y=g.holes;Pn.isClockWise(v)===!1&&(v=v.reverse());for(let f=0,p=y.length;f<p;f++){const b=y[f];Pn.isClockWise(b)===!0&&(y[f]=b.reverse())}const P=Pn.triangulateShape(v,y);for(let f=0,p=y.length;f<p;f++){const b=y[f];v=v.concat(b)}for(let f=0,p=v.length;f<p;f++){const b=v[f];r.push(b.x,b.y,0),s.push(0,0,1),a.push(b.x,b.y)}for(let f=0,p=P.length;f<p;f++){const b=P[f],A=b[0]+_,x=b[1]+_,u=b[2]+_;n.push(A,x,u),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ic(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new ss(n,e.curveSegments)}}function Ic(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class as extends yt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const m=[],_=new B,g=new B,v=[],y=[],P=[],f=[];for(let p=0;p<=n;p++){const b=[],A=p/n,x=a+A*o,u=e*Math.cos(x),M=Math.sqrt(e*e-u*u);let d=0;p===0&&a===0?d=.5/t:p===n&&c===Math.PI&&(d=-.5/t);for(let l=0;l<=t;l++){const S=l/t,w=r+S*s;_.x=-M*Math.cos(w),_.y=u,_.z=M*Math.sin(w),y.push(_.x,_.y,_.z),g.copy(_).normalize(),P.push(g.x,g.y,g.z),f.push(S+d,1-A),b.push(h++)}m.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const A=m[p][b+1],x=m[p][b],u=m[p+1][b],M=m[p+1][b+1];(p!==0||a>0)&&v.push(A,x,M),(p!==n-1||c<Math.PI)&&v.push(x,u,M)}this.setIndex(v),this.setAttribute("position",new tt(y,3)),this.setAttribute("normal",new tt(P,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zn extends yt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],h=[],m=[],_=[],g=new B,v=new B,y=new B;for(let P=0;P<=n;P++){const f=a+P/n*o;for(let p=0;p<=r;p++){const b=p/r*s;v.x=(e+t*Math.cos(f))*Math.cos(b),v.y=(e+t*Math.cos(f))*Math.sin(b),v.z=t*Math.sin(f),h.push(v.x,v.y,v.z),g.x=e*Math.cos(b),g.y=e*Math.sin(b),y.subVectors(v,g).normalize(),m.push(y.x,y.y,y.z),_.push(p/r),_.push(P/n)}}for(let P=1;P<=n;P++)for(let f=1;f<=r;f++){const p=(r+1)*P+f-1,b=(r+1)*(P-1)+f-1,A=(r+1)*(P-1)+f,x=(r+1)*P+f;c.push(p,b,x),c.push(b,A,x)}this.setIndex(c),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(m,3)),this.setAttribute("uv",new tt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class os extends yt{constructor(e=new ca(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new B,c=new B,h=new xe;let m=new B;const _=[],g=[],v=[],y=[];P(),this.setIndex(y),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(v,2));function P(){for(let A=0;A<t;A++)f(A);f(s===!1?t:0),b(),p()}function f(A){m=e.getPointAt(A/t,m);const x=a.normals[A],u=a.binormals[A];for(let M=0;M<=r;M++){const d=M/r*Math.PI*2,l=Math.sin(d),S=-Math.cos(d);c.x=S*x.x+l*u.x,c.y=S*x.y+l*u.y,c.z=S*x.z+l*u.z,c.normalize(),g.push(c.x,c.y,c.z),o.x=m.x+n*c.x,o.y=m.y+n*c.y,o.z=m.z+n*c.z,_.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=t;A++)for(let x=1;x<=r;x++){const u=(r+1)*(A-1)+(x-1),M=(r+1)*A+(x-1),d=(r+1)*A+x,l=(r+1)*(A-1)+x;y.push(u,M,l),y.push(M,d,l)}}function b(){for(let A=0;A<=t;A++)for(let x=0;x<=r;x++)h.x=A/t,h.y=x/r,v.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new os(new Kr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ko extends fi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new lt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(ro(r))r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ro(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=ki(i[t]);for(const r in n)e[r]=n[r]}return e}function ro(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $o(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Qo={clone:ki,merge:Xt};var Fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fc,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Nc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(r.value);break;case"v2":this.uniforms[n].value=new xe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new B().fromArray(r.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new et().fromArray(r.value);break;case"m4":this.uniforms[n].value=new At().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jo extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class el extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tl extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nl extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fa extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class il extends fa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Is=new At,so=new B,ao=new B;class rl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;so.setFromMatrixPosition(e.matrixWorld),t.position.copy(so),ao.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ao),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Is.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Is,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,h=r?r.y/s.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(Is)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hr=new B,Wr=new ui,Rn=new B;class da extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hr,Wr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hr,Wr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new B,oo=new xe,lo=new xe;class en extends da{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,oo,lo),t.subVectors(lo,oo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/h,r*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class vr extends da{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=m*this.view.offsetY,c=o-m*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Oc extends rl{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xs extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Oc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Pi=-90,Li=1;class sl extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Pi,Li,e,t);r.layers=this.layers,this.add(r);const s=new en(Pi,Li,e,t);s.layers=this.layers,this.add(s);const a=new en(Pi,Li,e,t);a.layers=this.layers,this.add(a);const o=new en(Pi,Li,e,t);o.layers=this.layers,this.add(o);const c=new en(Pi,Li,e,t);c.layers=this.layers,this.add(c);const h=new en(Pi,Li,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const h of t)this.remove(h);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,h,m]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(_,g,v),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class al extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const co=new At;class ol{constructor(e,t,n=0,r=1/0){this.ray=new ta(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return co.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(co),this}intersectObject(e,t=!0,n=[]){return qs(e,this,n,t),n.sort(uo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)qs(e[r],this,n,t);return n.sort(uo),n}}function uo(i,e){return i.distance-e.distance}function qs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)qs(s[a],e,t,!0)}}const va=class va{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};va.prototype.isMatrix2=!0;let Ys=va;function ho(i,e,t,n){const r=Bc(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bc(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ll(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gc(i){const e=new WeakMap;function t(o,c){const h=o.array,m=o.usage,_=h.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,h,m),o.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:_}}function n(o,c,h){const m=c.array,_=c.updateRanges;if(i.bindBuffer(h,o),_.length===0)i.bufferSubData(h,0,m);else{_.sort((v,y)=>v.start-y.start);let g=0;for(let v=1;v<_.length;v++){const y=_[g],P=_[v];P.start<=y.start+y.count+1?y.count=Math.max(y.count,P.start+P.count-y.start):(++g,_[g]=P)}_.length=g+1;for(let v=0,y=_.length;v<y;v++){const P=_[v];i.bufferSubData(h,P.start*m.BYTES_PER_ELEMENT,m,P.start,P.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=e.get(o);(!m||m.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:r,remove:s,update:a}}var zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vc=`#ifdef USE_ALPHAHASH
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
#endif`,kc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qc=`#ifdef USE_AOMAP
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
#endif`,Yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zc=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$c=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jc=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,uu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hu=`vec3 transformedNormal = objectNormal;
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
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",_u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
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
}`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lu=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ou=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Bu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gu=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ku=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ku=`#if defined( USE_POINTS_UV )
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
#endif`,$u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,th=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nh=`#ifdef USE_MORPHTARGETS
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
#endif`,ih=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ch=`#ifdef USE_NORMALMAP
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
#endif`,uh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ph=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_h=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Eh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,bh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Th=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Ah=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wh=`#ifdef USE_SKINNING
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
#endif`,Rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ch=`#ifdef USE_SKINNING
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
#endif`,Ph=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ih=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nh=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fh=`#ifdef USE_TRANSMISSION
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
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vh=`uniform sampler2D t2D;
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
}`,kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qh=`#include <common>
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
}`,Yh=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zh=`#define DISTANCE
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
}`,Jh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$h=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qh=`uniform float scale;
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
}`,ef=`#include <common>
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
}`,tf=`uniform vec3 diffuse;
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
}`,nf=`#define LAMBERT
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
}`,rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,sf=`#define MATCAP
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
}`,af=`#define MATCAP
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
}`,of=`#define NORMAL
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
}`,lf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cf=`#define PHONG
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
}`,uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,hf=`#define STANDARD
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
}`,ff=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,df=`#define TOON
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
}`,pf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,mf=`uniform float size;
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
}`,gf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,xf=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,vf=`uniform float rotation;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:zc,alphahash_pars_fragment:Vc,alphamap_fragment:kc,alphamap_pars_fragment:Hc,alphatest_fragment:Wc,alphatest_pars_fragment:Xc,aomap_fragment:qc,aomap_pars_fragment:Yc,batching_pars_vertex:Zc,batching_vertex:Jc,begin_vertex:Kc,beginnormal_vertex:$c,bsdfs:Qc,iridescence_fragment:jc,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:iu,clipping_planes_vertex:ru,color_fragment:su,color_pars_fragment:au,color_pars_vertex:ou,color_vertex:lu,common:cu,cube_uv_reflection_fragment:uu,defaultnormal_vertex:hu,displacementmap_pars_vertex:fu,displacementmap_vertex:du,emissivemap_fragment:pu,emissivemap_pars_fragment:mu,colorspace_fragment:gu,colorspace_pars_fragment:_u,envmap_fragment:xu,envmap_common_pars_fragment:vu,envmap_pars_fragment:Mu,envmap_pars_vertex:Su,envmap_physical_pars_fragment:Du,envmap_vertex:yu,fog_vertex:Eu,fog_pars_vertex:bu,fog_fragment:Tu,fog_pars_fragment:Au,gradientmap_pars_fragment:wu,lightmap_pars_fragment:Ru,lights_lambert_fragment:Cu,lights_lambert_pars_fragment:Pu,lights_pars_begin:Lu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Nu,lights_phong_fragment:Fu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Ou,lights_physical_pars_fragment:Bu,lights_fragment_begin:Gu,lights_fragment_maps:zu,lights_fragment_end:Vu,lightprobes_pars_fragment:ku,logdepthbuf_fragment:Hu,logdepthbuf_pars_fragment:Wu,logdepthbuf_pars_vertex:Xu,logdepthbuf_vertex:qu,map_fragment:Yu,map_pars_fragment:Zu,map_particle_fragment:Ju,map_particle_pars_fragment:Ku,metalnessmap_fragment:$u,metalnessmap_pars_fragment:Qu,morphinstance_vertex:ju,morphcolor_vertex:eh,morphnormal_vertex:th,morphtarget_pars_vertex:nh,morphtarget_vertex:ih,normal_fragment_begin:rh,normal_fragment_maps:sh,normal_pars_fragment:ah,normal_pars_vertex:oh,normal_vertex:lh,normalmap_pars_fragment:ch,clearcoat_normal_fragment_begin:uh,clearcoat_normal_fragment_maps:hh,clearcoat_pars_fragment:fh,iridescence_pars_fragment:dh,opaque_fragment:ph,packing:mh,premultiplied_alpha_fragment:gh,project_vertex:_h,dithering_fragment:xh,dithering_pars_fragment:vh,roughnessmap_fragment:Mh,roughnessmap_pars_fragment:Sh,shadowmap_pars_fragment:yh,shadowmap_pars_vertex:Eh,shadowmap_vertex:bh,shadowmask_pars_fragment:Th,skinbase_vertex:Ah,skinning_pars_vertex:wh,skinning_vertex:Rh,skinnormal_vertex:Ch,specularmap_fragment:Ph,specularmap_pars_fragment:Lh,tonemapping_fragment:Dh,tonemapping_pars_fragment:Ih,transmission_fragment:Nh,transmission_pars_fragment:Fh,uv_pars_fragment:Uh,uv_pars_vertex:Oh,uv_vertex:Bh,worldpos_vertex:Gh,background_vert:zh,background_frag:Vh,backgroundCube_vert:kh,backgroundCube_frag:Hh,cube_vert:Wh,cube_frag:Xh,depth_vert:qh,depth_frag:Yh,distance_vert:Zh,distance_frag:Jh,equirect_vert:Kh,equirect_frag:$h,linedashed_vert:Qh,linedashed_frag:jh,meshbasic_vert:ef,meshbasic_frag:tf,meshlambert_vert:nf,meshlambert_frag:rf,meshmatcap_vert:sf,meshmatcap_frag:af,meshnormal_vert:of,meshnormal_frag:lf,meshphong_vert:cf,meshphong_frag:uf,meshphysical_vert:hf,meshphysical_frag:ff,meshtoon_vert:df,meshtoon_frag:pf,points_vert:mf,points_frag:gf,shadow_vert:_f,shadow_frag:xf,sprite_vert:vf,sprite_frag:Mf},Ce={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},gn={basic:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Xt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Xt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Xt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Xt([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Xt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Xt([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Xt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Xt([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Xt([Ce.common,Ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Xt([Ce.lights,Ce.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};gn.physical={uniforms:Xt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Xr={r:0,b:0,g:0},Sf=new At,cl=new et;cl.set(-1,0,0,0,1,0,0,0,1);function yf(i,e,t,n,r,s){const a=new lt(0);let o=r===!0?0:1,c,h,m=null,_=0,g=null;function v(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const x=b.backgroundBlurriness>0;A=e.get(A,x)}return A}function y(b){let A=!1;const x=v(b);x===null?f(a,o):x&&x.isColor&&(f(x,1),A=!0);const u=i.xr.getEnvironmentBlendMode();u==="additive"?t.buffers.color.setClear(0,0,0,1,s):u==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(b,A){const x=v(A);x&&(x.isCubeTexture||x.mapping===306)?(h===void 0&&(h=new un(new Jn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ki(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(u,M,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sf.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(cl),h.material.toneMapped=ut.getTransfer(x.colorSpace)!==Mt,(m!==x||_!==x.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,m=x,_=x.version,g=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new un(new Hi(2,2),new xn({name:"BackgroundMaterial",uniforms:ki(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ut.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(m!==x||_!==x.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,m=x,_=x.version,g=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,A){b.getRGB(Xr,$o(i)),t.buffers.color.setClear(Xr.r,Xr.g,Xr.b,A,s)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,f(a,o)},render:y,addToRenderList:P,dispose:p}}function Ef(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,a=!1;function o(C,I,U,F,k){let Y=!1;const X=_(C,F,U,I);s!==X&&(s=X,h(s.object)),Y=v(C,F,U,k),Y&&y(C,F,U,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(C,I,U,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function h(C){return i.bindVertexArray(C)}function m(C){return i.deleteVertexArray(C)}function _(C,I,U,F){const k=F.wireframe===!0;let Y=n[I.id];Y===void 0&&(Y={},n[I.id]=Y);const X=C.isInstancedMesh===!0?C.id:0;let ne=Y[X];ne===void 0&&(ne={},Y[X]=ne);let J=ne[U.id];J===void 0&&(J={},ne[U.id]=J);let te=J[k];return te===void 0&&(te=g(c()),J[k]=te),te}function g(C){const I=[],U=[],F=[];for(let k=0;k<t;k++)I[k]=0,U[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:F,object:C,attributes:{},index:null}}function v(C,I,U,F){const k=s.attributes,Y=I.attributes;let X=0;const ne=U.getAttributes();for(const J in ne)if(ne[J].location>=0){const ie=k[J];let Fe=Y[J];if(Fe===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(Fe=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(Fe=C.instanceColor)),ie===void 0||ie.attribute!==Fe||Fe&&ie.data!==Fe.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function y(C,I,U,F){const k={},Y=I.attributes;let X=0;const ne=U.getAttributes();for(const J in ne)if(ne[J].location>=0){let ie=Y[J];ie===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor));const Fe={};Fe.attribute=ie,ie&&ie.data&&(Fe.data=ie.data),k[J]=Fe,X++}s.attributes=k,s.attributesNum=X,s.index=F}function P(){const C=s.newAttributes;for(let I=0,U=C.length;I<U;I++)C[I]=0}function f(C){p(C,0)}function p(C,I){const U=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;U[C]=1,F[C]===0&&(i.enableVertexAttribArray(C),F[C]=1),k[C]!==I&&(i.vertexAttribDivisor(C,I),k[C]=I)}function b(){const C=s.newAttributes,I=s.enabledAttributes;for(let U=0,F=I.length;U<F;U++)I[U]!==C[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function A(C,I,U,F,k,Y,X){X===!0?i.vertexAttribIPointer(C,I,U,k,Y):i.vertexAttribPointer(C,I,U,F,k,Y)}function x(C,I,U,F){P();const k=F.attributes,Y=U.getAttributes(),X=I.defaultAttributeValues;for(const ne in Y){const J=Y[ne];if(J.location>=0){let te=k[ne];if(te===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const ie=te.normalized,Fe=te.itemSize,Pe=e.get(te);if(Pe===void 0)continue;const rt=Pe.buffer,Qe=Pe.type,at=Pe.bytesPerElement,j=Qe===i.INT||Qe===i.UNSIGNED_INT||te.gpuType===1013;if(te.isInterleavedBufferAttribute){const re=te.data,Te=re.stride,Ye=te.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<J.locationSize;De++)p(J.location+De,re.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<J.locationSize;De++)f(J.location+De);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let De=0;De<J.locationSize;De++)A(J.location+De,Fe/J.locationSize,Qe,ie,Te*at,(Ye+Fe/J.locationSize*De)*at,j)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<J.locationSize;re++)p(J.location+re,te.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<J.locationSize;re++)f(J.location+re);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let re=0;re<J.locationSize;re++)A(J.location+re,Fe/J.locationSize,Qe,ie,Fe*at,Fe/J.locationSize*re*at,j)}}else if(X!==void 0){const ie=X[ne];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(J.location,ie);break;case 3:i.vertexAttrib3fv(J.location,ie);break;case 4:i.vertexAttrib4fv(J.location,ie);break;default:i.vertexAttrib1fv(J.location,ie)}}}}b()}function u(){S();for(const C in n){const I=n[C];for(const U in I){const F=I[U];for(const k in F){const Y=F[k];for(const X in Y)m(Y[X].object),delete Y[X];delete F[k]}}delete n[C]}}function M(C){if(n[C.id]===void 0)return;const I=n[C.id];for(const U in I){const F=I[U];for(const k in F){const Y=F[k];for(const X in Y)m(Y[X].object),delete Y[X];delete F[k]}}delete n[C.id]}function d(C){for(const I in n){const U=n[I];for(const F in U){const k=U[F];if(k[C.id]===void 0)continue;const Y=k[C.id];for(const X in Y)m(Y[X].object),delete Y[X];delete k[C.id]}}}function l(C){for(const I in n){const U=n[I],F=C.isInstancedMesh===!0?C.id:0,k=U[F];if(k!==void 0){for(const Y in k){const X=k[Y];for(const ne in X)m(X[ne].object),delete X[ne];delete k[Y]}delete U[F],Object.keys(U).length===0&&delete n[I]}}}function S(){w(),a=!0,s!==r&&(s=r,h(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:w,dispose:u,releaseStatesOfGeometry:M,releaseStatesOfObject:l,releaseStatesOfProgram:d,initAttributes:P,enableAttribute:f,disableUnusedAttributes:b}}function bf(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,m){m!==0&&(i.drawArraysInstanced(n,c,h,m),t.update(h,n,m))}function o(c,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,m);let g=0;for(let v=0;v<m;v++)g+=h[v];t.update(g,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Tf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(d){return!(d!==1023&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(d){const l=d===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==1009&&d!==1015&&!l&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=c(h);m!==h&&(Je("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),u=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:P,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:x,maxSamples:u,samples:M}}function Af(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new On,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||n!==0||r;return r=g,n=_.length,v},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(_,g){t=m(_,g,0)},this.setState=function(_,g,v){const y=_.clippingPlanes,P=_.clipIntersection,f=_.clipShadows,p=i.get(_);if(!r||y===null||y.length===0||s&&!f)s?m(null):h();else{const b=s?0:n,A=b*4;let x=p.clippingState||null;c.value=x,x=m(y,g,A,v);for(let u=0;u!==A;++u)x[u]=t[u];p.clippingState=x,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=b}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,g,v,y){const P=_!==null?_.length:0;let f=null;if(P!==0){if(f=c.value,y!==!0||f===null){const p=v+P*4,b=g.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let A=0,x=v;A!==P;++A,x+=4)a.copy(_[A]).applyMatrix4(b,o),a.normal.toArray(f,x),f[x+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,f}}const Fi=4,wf=6,Rf=20,Cf=256,tr=new vr,fo=new lt;let Ns=null,Fs=0,Us=0,Os=!1;const Pf=new B,si=new B;class Zs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Pf}=s;Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Fs,Us),this._renderer.xr.enabled=Os,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:ur,depthBuffer:!1},r=po(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lf(s)),this._blurMaterial=If(s,e,t),this._ggxMaterial=Df(s,e,t)}return r}_compileMaterial(e){const t=new un(new yt,e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,n,r,s){const c=new en(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,v=_.toneMapping;_.getClearColor(fo),_.toneMapping=0,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new Jn,new Oi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,f=P.material;let p=!1;const b=e.background;b?b.isColor&&(f.color.copy(b),e.background=null,p=!0):(f.color.copy(fo),p=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(c.up.set(0,h[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+m[A],s.y,s.z)):x===1?(c.up.set(0,0,h[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+m[A],s.z)):(c.up.set(0,h[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+m[A]));const u=this._cubeSize;Di(r,x*u,A>2?u:0,u,u),_.setRenderTarget(r),p&&_.render(P,c),_.render(e,c)}_.toneMapping=v,_.autoClear=g,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Di(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,tr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,h=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-m*m),g=h*1.25,v=_*g,{_lodMax:y}=this,P=this._sizeLods[n],f=3*P*(n>y-Fi?n-y+Fi:0),p=4*(this._cubeSize-P);c.envMap.value=e.texture,c.roughness.value=v,c.mipInt.value=y-t,Di(s,f,p,3*P,2*P),r.setRenderTarget(s),r.render(o,tr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=y-n,Di(e,f,p,3*P,2*P),r.setRenderTarget(e),r.render(o,tr)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const h=o.uniforms;h.envMap.value=e.texture,h.sigma.value=s,h.mipInt.value=this._lodMax-n;const m=this._sizeLods[r],_=3*m*(r>this._lodMax-Fi?r-this._lodMax+Fi:0),g=4*(this._cubeSize-m);Di(t,_,g,3*m,2*m),a.setRenderTarget(t),a.render(c,tr)}}function Lf(i){const e=[],t=[];let n=i;const r=i-Fi+1+wf;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,h=1+o,m=[c,c,h,c,h,h,c,c,h,h,c,h],_=6,g=6,v=3,y=new Float32Array(v*g*_),P=new Float32Array(v*g*_);for(let p=0;p<_;p++){const b=p%3*2/3-1,A=p>2?0:-1,x=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];y.set(x,v*g*p);for(let u=0;u<g;u++){const M=m[u*2]*2-1,d=m[u*2+1]*2-1;p===0?si.set(1,d,M):p===1?si.set(-M,1,-d):p===2?si.set(-M,d,1):p===3?si.set(-1,d,-M):p===4?si.set(-M,-1,d):si.set(M,d,-1),si.toArray(P,(p*g+u)*v)}}const f=new yt;f.setAttribute("position",new _n(y,v)),f.setAttribute("outputDirection",new _n(P,v)),t.push(new un(f,null)),n>Fi&&n--}return{lodMeshes:t,sizeLods:e}}function po(i,e,t){const n=new cn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Df(i,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ls(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function If(i,e,t){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:Rf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ls(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function mo(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ls(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ls(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pa extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new na(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jn(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new un(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new sl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Nf(i){let e=new WeakMap,t=new WeakMap,n=null;function r(g,v=!1){return g==null?null:v?a(g):s(g)}function s(g){if(g&&g.isTexture){const v=g.mapping;if(v===303||v===304)if(e.has(g)){const y=e.get(g).texture;return o(y,g.mapping)}else{const y=g.image;if(y&&y.height>0){const P=new pa(y.height);return P.fromEquirectangularTexture(i,g),e.set(g,P),g.addEventListener("dispose",h),o(P.texture,g.mapping)}else return null}}return g}function a(g){if(g&&g.isTexture){const v=g.mapping,y=v===303||v===304,P=v===301||v===302;if(y||P){let f=t.get(g);const p=f!==void 0?f.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==p)return n===null&&(n=new Zs(i)),f=y?n.fromEquirectangular(g,f):n.fromCubemap(g,f),f.texture.pmremVersion=g.pmremVersion,t.set(g,f),f.texture;if(f!==void 0)return f.texture;{const b=g.image;return y&&b&&b.height>0||P&&b&&c(b)?(n===null&&(n=new Zs(i)),f=y?n.fromEquirectangular(g):n.fromCubemap(g),f.texture.pmremVersion=g.pmremVersion,t.set(g,f),g.addEventListener("dispose",m),f.texture):null}}}return g}function o(g,v){return v===303?g.mapping=301:v===304&&(g.mapping=302),g}function c(g){let v=0;const y=6;for(let P=0;P<y;P++)g[P]!==void 0&&v++;return v===y}function h(g){const v=g.target;v.removeEventListener("dispose",h);const y=e.get(v);y!==void 0&&(e.delete(v),y.dispose())}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=t.get(v);y!==void 0&&(t.delete(v),y.dispose())}function _(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:_}}function Ff(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&oi("WebGLRenderer: "+n+" extension not supported."),r}}}function Uf(i,e,t,n){const r={},s=new WeakMap;function a(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",a),delete r[g.id];const v=s.get(g);v&&(e.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(_,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,t.memory.geometries++),g}function c(_){const g=_.attributes;for(const v in g)e.update(g[v],i.ARRAY_BUFFER)}function h(_){const g=[],v=_.index,y=_.attributes.position;let P=0;if(y===void 0)return;if(v!==null){const b=v.array;P=v.version;for(let A=0,x=b.length;A<x;A+=3){const u=b[A+0],M=b[A+1],d=b[A+2];g.push(u,M,M,d,d,u)}}else{const b=y.array;P=y.version;for(let A=0,x=b.length/3-1;A<x;A+=3){const u=A+0,M=A+1,d=A+2;g.push(u,M,M,d,d,u)}}const f=new(y.count>=65535?ea:js)(g,1);f.version=P;const p=s.get(_);p&&e.remove(p),s.set(_,f)}function m(_){const g=s.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&h(_)}else h(_);return s.get(_)}return{get:o,update:c,getWireframeAttribute:m}}function Of(i,e,t){let n;function r(_){n=_}let s,a;function o(_){s=_.type,a=_.bytesPerElement}function c(_,g){i.drawElements(n,g,s,_*a),t.update(g,n,1)}function h(_,g,v){v!==0&&(i.drawElementsInstanced(n,g,s,_*a,v),t.update(g,n,v))}function m(_,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,_,0,v);let P=0;for(let f=0;f<v;f++)P+=g[f];t.update(P,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function Bf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gf(i,e,t){const n=new WeakMap,r=new wt;function s(a,o,c){const h=a.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_=m!==void 0?m.length:0;let g=n.get(o);if(g===void 0||g.count!==_){let S=function(){d.dispose(),n.delete(o),o.removeEventListener("dispose",S)};g!==void 0&&g.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,P=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let A=0;v===!0&&(A=1),y===!0&&(A=2),P===!0&&(A=3);let x=o.attributes.position.count*A,u=1;x>e.maxTextureSize&&(u=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const M=new Float32Array(x*u*4*_),d=new Qs(M,x,u,_);d.type=1015,d.needsUpdate=!0;const l=A*4;for(let w=0;w<_;w++){const C=f[w],I=p[w],U=b[w],F=x*u*4*w;for(let k=0;k<C.count;k++){const Y=k*l;v===!0&&(r.fromBufferAttribute(C,k),M[F+Y+0]=r.x,M[F+Y+1]=r.y,M[F+Y+2]=r.z,M[F+Y+3]=0),y===!0&&(r.fromBufferAttribute(I,k),M[F+Y+4]=r.x,M[F+Y+5]=r.y,M[F+Y+6]=r.z,M[F+Y+7]=0),P===!0&&(r.fromBufferAttribute(U,k),M[F+Y+8]=r.x,M[F+Y+9]=r.y,M[F+Y+10]=r.z,M[F+Y+11]=U.itemSize===4?r.w:1)}}g={count:_,texture:d,size:new xe(x,u)},n.set(o,g),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let P=0;P<h.length;P++)v+=h[P];const y=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function zf(i,e,t,n,r){let s=new WeakMap;function a(h){const m=r.render.frame,_=h.geometry,g=e.get(h,_);if(s.get(g)!==m&&(e.update(g),s.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==m&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;s.get(v)!==m&&(v.update(),s.set(v,m))}return g}function o(){s=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:a,dispose:o}}const Vf={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function kf(i,e,t,n,r,s){const a=new cn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const h=new yt;h.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tt([0,2,0,0,2,0],2));const m=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new un(h,m),g=new vr(-1,1,1,-1,0,1);let v=null,y=null,P=!1,f,p=null,b=[],A=!1;this.setSize=function(x,u){a.setSize(x,u),o!==null&&o.setSize(x,u),c!==null&&c.setSize(x,u);for(let M=0;M<b.length;M++){const d=b[M];d.setSize&&d.setSize(x,u)}},this.setEffects=function(x){b=x,A=b.length>0&&b[0].isRenderPass===!0;const u=a.width,M=a.height;b.length>0&&o===null&&(o=new cn(u,M,{type:1016,depthBuffer:!1,stencilBuffer:!1}),c=new cn(u,M,{type:1016,depthBuffer:!1,stencilBuffer:!1}));for(let d=0;d<b.length;d++){const l=b[d];l.setSize&&l.setSize(u,M)}},this.begin=function(x,u){if(P||x.toneMapping===0&&b.length===0)return!1;if(p=u,u!==null){const M=u.width,d=u.height;(a.width!==M||a.height!==d)&&this.setSize(M,d)}return A===!1&&x.setRenderTarget(a),f=x.toneMapping,x.toneMapping=0,!0},this.hasRenderPass=function(){return A},this.end=function(x,u){x.toneMapping=f,P=!0;let M=a,d=o;for(let l=0;l<b.length;l++){const S=b[l];S.enabled!==!1&&(S.render(x,d,M,u),S.needsSwap!==!1&&(M=d,d=d===o?c:o))}if(v!==x.outputColorSpace||y!==x.toneMapping){v=x.outputColorSpace,y=x.toneMapping,m.defines={},ut.getTransfer(v)===Mt&&(m.defines.SRGB_TRANSFER="");const l=Vf[y];l&&(m.defines[l]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(p),x.render(_,g),p=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),m.dispose()}}const ul=new kt,Js=new zi(1,1),hl=new Qs,fl=new Go,dl=new na,_o=[],xo=[],vo=new Float32Array(16),Mo=new Float32Array(9),So=new Float32Array(4);function Wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=_o[r];if(s===void 0&&(s=new Float32Array(r),_o[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cs(i,e){let t=xo[e];t===void 0&&(t=new Int32Array(e),xo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Yf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),Nt(t,n)}}function Zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Mo.set(n),i.uniformMatrix3fv(this.addr,!1,Mo),Nt(t,n)}}function Jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;vo.set(n),i.uniformMatrix4fv(this.addr,!1,vo),Nt(t,n)}}function Kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function ed(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function td(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function rd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Js.compareFunction=t.isReversedDepthBuffer()?518:515,s=Js):s=ul,t.setTexture2D(e||s,r)}function sd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||fl,r)}function ad(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||dl,r)}function od(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hl,r)}function ld(i){switch(i){case 5126:return Hf;case 35664:return Wf;case 35665:return Xf;case 35666:return qf;case 35674:return Yf;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return Kf;case 35667:case 35671:return $f;case 35668:case 35672:return Qf;case 35669:case 35673:return jf;case 5125:return ed;case 36294:return td;case 36295:return nd;case 36296:return id;case 35678:case 36198:case 36298:case 36306:case 35682:return rd;case 35679:case 36299:case 36307:return sd;case 35680:case 36300:case 36308:case 36293:return ad;case 36289:case 36303:case 36311:case 36292:return od}}function cd(i,e){i.uniform1fv(this.addr,e)}function ud(i,e){const t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function hd(i,e){const t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function fd(i,e){const t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function dd(i,e){const t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pd(i,e){const t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function md(i,e){const t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gd(i,e){i.uniform1iv(this.addr,e)}function _d(i,e){i.uniform2iv(this.addr,e)}function xd(i,e){i.uniform3iv(this.addr,e)}function vd(i,e){i.uniform4iv(this.addr,e)}function Md(i,e){i.uniform1uiv(this.addr,e)}function Sd(i,e){i.uniform2uiv(this.addr,e)}function yd(i,e){i.uniform3uiv(this.addr,e)}function Ed(i,e){i.uniform4uiv(this.addr,e)}function bd(i,e,t){const n=this.cache,r=e.length,s=cs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Js:a=ul;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Td(i,e,t){const n=this.cache,r=e.length,s=cs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||fl,s[a])}function Ad(i,e,t){const n=this.cache,r=e.length,s=cs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||dl,s[a])}function wd(i,e,t){const n=this.cache,r=e.length,s=cs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hl,s[a])}function Rd(i){switch(i){case 5126:return cd;case 35664:return ud;case 35665:return hd;case 35666:return fd;case 35674:return dd;case 35675:return pd;case 35676:return md;case 5124:case 35670:return gd;case 35667:case 35671:return _d;case 35668:case 35672:return xd;case 35669:case 35673:return vd;case 5125:return Md;case 36294:return Sd;case 36295:return yd;case 36296:return Ed;case 35678:case 36198:case 36298:case 36306:case 35682:return bd;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return Ad;case 36289:case 36303:case 36311:case 36292:return wd}}class Cd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ld(t.type)}}class Pd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rd(t.type)}}class Ld{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function yo(i,e){i.seq.push(e),i.map[e.id]=e}function Dd(i,e,t){const n=i.name,r=n.length;for(Bs.lastIndex=0;;){const s=Bs.exec(n),a=Bs.lastIndex;let o=s[1];const c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===r){yo(t,h===void 0?new Cd(o,i,e):new Pd(o,i,e));break}else{let _=t.map[o];_===void 0&&(_=new Ld(o),yo(t,_)),t=_}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Dd(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Eo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Id=37297;let Nd=0;function Fd(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const bo=new et;function Ud(i){ut._getMatrix(bo,ut.workingColorSpace,i);const e=`mat3( ${bo.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case hr:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function To(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Fd(i.getShaderSource(e),o)}else return s}function Od(i,e){const t=Ud(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bd={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Gd(i,e){const t=Bd[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new B;function zd(){ut.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function kd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sr(i){return i!==""}function Ao(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ks(i){return i.replace(Wd,qd)}const Xd=new Map;function qd(i,e){let t=it[e];if(t===void 0){const n=Xd.get(e);if(n!==void 0)t=it[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ks(t)}const Yd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(i){return i.replace(Yd,Zd)}function Zd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Co(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Jd={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Kd(i){return Jd[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $d={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Qd(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$d[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const jd={302:"ENVMAP_MODE_REFRACTION"};function ep(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jd[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tp={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function np(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tp[i.combine]||"ENVMAP_BLENDING_NONE"}function ip(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Kd(t),h=Qd(t),m=ep(t),_=np(t),g=ip(t),v=Vd(t),y=kd(s),P=r.createProgram();let f,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(sr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(f=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?it.tonemapping_pars_fragment:"",t.toneMapping!==0?Gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Od("linearToOutputTexel",t.outputColorSpace),zd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Ks(a),a=Ao(a,t),a=wo(a,t),o=Ks(o),o=Ao(o,t),o=wo(o,t),a=Ro(a),o=Ro(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===zs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=b+f+a,x=b+p+o,u=Eo(r,r.VERTEX_SHADER,A),M=Eo(r,r.FRAGMENT_SHADER,x);r.attachShader(P,u),r.attachShader(P,M),t.index0AttributeName!==void 0?r.bindAttribLocation(P,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(P,0,"position"),r.linkProgram(P);function d(C){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(P)||"",U=r.getShaderInfoLog(u)||"",F=r.getShaderInfoLog(M)||"",k=I.trim(),Y=U.trim(),X=F.trim();let ne=!0,J=!0;if(r.getProgramParameter(P,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,P,u,M);else{const te=To(r,u,"vertex"),ie=To(r,M,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(P,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+te+`
`+ie)}else k!==""?Je("WebGLProgram: Program Info Log:",k):(Y===""||X==="")&&(J=!1);J&&(C.diagnostics={runnable:ne,programLog:k,vertexShader:{log:Y,prefix:f},fragmentShader:{log:X,prefix:p}})}r.deleteShader(u),r.deleteShader(M),l=new Zr(r,P),S=Hd(r,P)}let l;this.getUniforms=function(){return l===void 0&&d(this),l};let S;this.getAttributes=function(){return S===void 0&&d(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(P,Id)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nd++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=u,this.fragmentShader=M,this}let sp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new op(e),t.set(e,n)),n}}class op{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function lp(i){return i===1030||i===37490||i===36285}function cp(i,e,t,n,r,s){const a=new jr,o=new ap,c=new Set,h=[],m=new Map,_=n.logarithmicDepthBuffer;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(l){return c.add(l),l===0?"uv":`uv${l}`}function P(l,S,w,C,I,U){const F=C.fog,k=I.geometry,Y=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?C.environment:null,X=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap,ne=e.get(l.envMap||Y,X),J=ne&&ne.mapping===306?ne.image.height:null,te=v[l.type];l.precision!==null&&(g=n.getMaxPrecision(l.precision),g!==l.precision&&Je("WebGLProgram.getParameters:",l.precision,"not supported, using",g,"instead."));const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Fe=ie!==void 0?ie.length:0;let Pe=0;k.morphAttributes.position!==void 0&&(Pe=1),k.morphAttributes.normal!==void 0&&(Pe=2),k.morphAttributes.color!==void 0&&(Pe=3);let rt,Qe,at,j;if(te){const St=gn[te];rt=St.vertexShader,Qe=St.fragmentShader}else{rt=l.vertexShader,Qe=l.fragmentShader;const St=o.getVertexShaderStage(l),gt=o.getFragmentShaderStage(l);o.update(l,St,gt),at=St.id,j=gt.id}const re=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ye=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,qe=!!l.map,pt=!!l.matcap,oe=!!ne,le=!!l.aoMap,he=!!l.lightMap,fe=!!l.bumpMap&&l.wireframe===!1,Se=!!l.normalMap,ke=!!l.displacementMap,He=!!l.emissiveMap,We=!!l.metalnessMap,$e=!!l.roughnessMap,O=l.anisotropy>0,mt=l.clearcoat>0,st=l.dispersion>0,N=l.retroreflectivity>0,T=l.iridescence>0,H=l.sheen>0,Z=l.transmission>0,Q=O&&!!l.anisotropyMap,ge=mt&&!!l.clearcoatMap,ve=mt&&!!l.clearcoatNormalMap,ee=mt&&!!l.clearcoatRoughnessMap,ae=T&&!!l.iridescenceMap,de=T&&!!l.iridescenceThicknessMap,ze=H&&!!l.sheenColorMap,Ee=H&&!!l.sheenRoughnessMap,be=!!l.specularMap,Oe=!!l.specularColorMap,Ve=!!l.specularIntensityMap,je=Z&&!!l.transmissionMap,z=Z&&!!l.thicknessMap,pe=!!l.gradientMap,se=!!l.alphaMap,_e=l.alphaTest>0,Le=!!l.alphaHash,ue=!!l.extensions;let Ae=0;l.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const Be={shaderID:te,shaderType:l.type,shaderName:l.name,vertexShader:rt,fragmentShader:Qe,defines:l.defines,customVertexShaderID:at,customFragmentShaderID:j,isRawShaderMaterial:l.isRawShaderMaterial===!0,glslVersion:l.glslVersion,precision:g,batching:De,batchingColor:De&&I._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&I.instanceColor!==null,instancingMorph:Ye&&I.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!l.alphaToCoverage,map:qe,matcap:pt,envMap:oe,envMapMode:oe&&ne.mapping,envMapCubeUVHeight:J,aoMap:le,lightMap:he,bumpMap:fe,normalMap:Se,displacementMap:ke,emissiveMap:He,normalMapObjectSpace:Se&&l.normalMapType===1,normalMapTangentSpace:Se&&l.normalMapType===0,packedNormalMap:Se&&l.normalMapType===0&&lp(l.normalMap.format),metalnessMap:We,roughnessMap:$e,anisotropy:O,anisotropyMap:Q,clearcoat:mt,clearcoatMap:ge,clearcoatNormalMap:ve,clearcoatRoughnessMap:ee,dispersion:st,retroreflection:N,iridescence:T,iridescenceMap:ae,iridescenceThicknessMap:de,sheen:H,sheenColorMap:ze,sheenRoughnessMap:Ee,specularMap:be,specularColorMap:Oe,specularIntensityMap:Ve,transmission:Z,transmissionMap:je,thicknessMap:z,gradientMap:pe,opaque:l.transparent===!1&&l.blending===1&&l.alphaToCoverage===!1,alphaMap:se,alphaTest:_e,alphaHash:Le,combine:l.combine,mapUv:qe&&y(l.map.channel),aoMapUv:le&&y(l.aoMap.channel),lightMapUv:he&&y(l.lightMap.channel),bumpMapUv:fe&&y(l.bumpMap.channel),normalMapUv:Se&&y(l.normalMap.channel),displacementMapUv:ke&&y(l.displacementMap.channel),emissiveMapUv:He&&y(l.emissiveMap.channel),metalnessMapUv:We&&y(l.metalnessMap.channel),roughnessMapUv:$e&&y(l.roughnessMap.channel),anisotropyMapUv:Q&&y(l.anisotropyMap.channel),clearcoatMapUv:ge&&y(l.clearcoatMap.channel),clearcoatNormalMapUv:ve&&y(l.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&y(l.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&y(l.iridescenceMap.channel),iridescenceThicknessMapUv:de&&y(l.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&y(l.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&y(l.sheenRoughnessMap.channel),specularMapUv:be&&y(l.specularMap.channel),specularColorMapUv:Oe&&y(l.specularColorMap.channel),specularIntensityMapUv:Ve&&y(l.specularIntensityMap.channel),transmissionMapUv:je&&y(l.transmissionMap.channel),thicknessMapUv:z&&y(l.thicknessMap.channel),alphaMapUv:se&&y(l.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Se||O),vertexNormals:!!k.attributes.normal,vertexColors:l.vertexColors,vertexAlphas:l.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(qe||se),fog:!!F,useFog:l.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:l.wireframe===!1&&(l.flatShading===!0||k.attributes.normal===void 0&&Se===!1&&(l.isMeshLambertMaterial||l.isMeshPhongMaterial||l.isMeshStandardMaterial||l.isMeshPhysicalMaterial)),sizeAttenuation:l.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Pe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:l.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:qe&&l.map.isVideoTexture===!0&&ut.getTransfer(l.map.colorSpace)===Mt,decodeVideoTextureEmissive:He&&l.emissiveMap.isVideoTexture===!0&&ut.getTransfer(l.emissiveMap.colorSpace)===Mt,premultipliedAlpha:l.premultipliedAlpha,doubleSided:l.side===2,flipSided:l.side===1,useDepthPacking:l.depthPacking>=0,depthPacking:l.depthPacking||0,index0AttributeName:l.index0AttributeName,extensionClipCullDistance:ue&&l.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&l.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:l.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function f(l){const S=[];if(l.shaderID?S.push(l.shaderID):(S.push(l.customVertexShaderID),S.push(l.customFragmentShaderID)),l.defines!==void 0)for(const w in l.defines)S.push(w),S.push(l.defines[w]);return l.isRawShaderMaterial===!1&&(p(S,l),b(S,l),S.push(i.outputColorSpace)),S.push(l.customProgramCacheKey),S.join()}function p(l,S){l.push(S.precision),l.push(S.outputColorSpace),l.push(S.envMapMode),l.push(S.envMapCubeUVHeight),l.push(S.mapUv),l.push(S.alphaMapUv),l.push(S.lightMapUv),l.push(S.aoMapUv),l.push(S.bumpMapUv),l.push(S.normalMapUv),l.push(S.displacementMapUv),l.push(S.emissiveMapUv),l.push(S.metalnessMapUv),l.push(S.roughnessMapUv),l.push(S.anisotropyMapUv),l.push(S.clearcoatMapUv),l.push(S.clearcoatNormalMapUv),l.push(S.clearcoatRoughnessMapUv),l.push(S.iridescenceMapUv),l.push(S.iridescenceThicknessMapUv),l.push(S.sheenColorMapUv),l.push(S.sheenRoughnessMapUv),l.push(S.specularMapUv),l.push(S.specularColorMapUv),l.push(S.specularIntensityMapUv),l.push(S.transmissionMapUv),l.push(S.thicknessMapUv),l.push(S.combine),l.push(S.fogExp2),l.push(S.sizeAttenuation),l.push(S.morphTargetsCount),l.push(S.morphAttributeCount),l.push(S.numSunLights),l.push(S.numDirLights),l.push(S.numPointLights),l.push(S.numSpotLights),l.push(S.numSpotLightMaps),l.push(S.numHemiLights),l.push(S.numRectAreaLights),l.push(S.numSunLightShadows),l.push(S.numDirLightShadows),l.push(S.numPointLightShadows),l.push(S.numSpotLightShadows),l.push(S.numSpotLightShadowsWithMaps),l.push(S.numLightProbes),l.push(S.shadowMapType),l.push(S.toneMapping),l.push(S.numClippingPlanes),l.push(S.numClipIntersection),l.push(S.depthPacking)}function b(l,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),l.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),l.push(a.mask)}function A(l){const S=v[l.type];let w;if(S){const C=gn[S];w=Qo.clone(C.uniforms)}else w=l.uniforms;return w}function x(l,S){let w=m.get(S);return w!==void 0?++w.usedTimes:(w=new rp(i,S,l,r),h.push(w),m.set(S,w)),w}function u(l){if(--l.usedTimes===0){const S=h.indexOf(l);h[S]=h[h.length-1],h.pop(),m.delete(l.cacheKey),l.destroy()}}function M(l){o.remove(l)}function d(){o.dispose()}return{getParameters:P,getProgramCacheKey:f,getUniforms:A,acquireProgram:x,releaseProgram:u,releaseShaderCache:M,programs:h,dispose:d}}function up(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function hp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Po(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(g){let v=0;return g.isInstancedMesh&&(v+=2),g.isSkinnedMesh&&(v+=1),v}function o(g,v,y,P,f,p){let b=i[e];return b===void 0?(b={id:g.id,object:g,geometry:v,material:y,materialVariant:a(g),groupOrder:P,renderOrder:g.renderOrder,z:f,group:p},i[e]=b):(b.id=g.id,b.object=g,b.geometry=v,b.material=y,b.materialVariant=a(g),b.groupOrder=P,b.renderOrder=g.renderOrder,b.z=f,b.group=p),e++,b}function c(g,v,y,P,f,p,b){b.reversedDepth===!0&&(f=-f);const A=o(g,v,y,P,f,p);y.transmission>0?n.push(A):y.transparent===!0?r.push(A):t.push(A)}function h(g,v,y,P,f,p){const b=o(g,v,y,P,f,p);y.transmission>0?n.unshift(b):y.transparent===!0?r.unshift(b):t.unshift(b)}function m(g,v){t.length>1&&t.sort(g||hp),n.length>1&&n.sort(v||Po),r.length>1&&r.sort(v||Po)}function _(){for(let g=e,v=i.length;g<v;g++){const y=i[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:h,finish:_,sort:m}}function fp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Lo,i.set(n,[a])):r>=s.length?(a=new Lo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new lt};break;case"SpotLight":t={position:new B,direction:new B,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function pp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mp=0;function gp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _p(i){const e=new dp,t=pp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new B);const r=new B,s=new At,a=new At;function o(h){let m=0,_=0,g=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let v=0,y=0,P=0,f=0,p=0,b=0,A=0,x=0,u=0,M=0,d=0,l=0,S=0,w=0;h.sort(gp);for(let I=0,U=h.length;I<U;I++){const F=h[I],k=F.color,Y=F.intensity,X=F.distance;let ne=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===1030?ne=F.shadow.map.texture:ne=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)m+=k.r*Y,_+=k.g*Y,g+=k.b*Y;else if(F.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(F.sh.coefficients[J],Y);w++}else if(F.isSunLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const te=F.shadow,ie=t.get(F);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[y]=ie,n.sunShadowMap[y]=ne;const Fe=te.getViewportCount();for(let Pe=0;Pe<Fe;Pe++)n.sunShadowMatrix[P+Pe]=te.getMatrix(Pe),n.sunShadowCascade[P+Pe]=te._cascadeData[Pe];P+=Fe,y++}n.sun[v]=J,v++}else if(F.isDirectionalLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const te=F.shadow,ie=t.get(F);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=F.shadow.matrix,u++}n.directional[f]=J,f++}else if(F.isSpotLight){const J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(k).multiplyScalar(Y),J.distance=X,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,n.spot[b]=J;const te=F.shadow;if(F.map&&(n.spotLightMap[l]=F.map,l++,te.updateMatrices(F),F.castShadow&&S++),n.spotLightMatrix[b]=te.matrix,F.castShadow){const ie=t.get(F);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.spotShadow[b]=ie,n.spotShadowMap[b]=ne,d++}b++}else if(F.isRectAreaLight){const J=e.get(F);J.color.copy(k).multiplyScalar(Y),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=J,A++}else if(F.isPointLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const te=F.shadow,ie=t.get(F);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=F.shadow.matrix,M++}n.point[p]=J,p++}else if(F.isHemisphereLight){const J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(Y),J.groundColor.copy(F.groundColor).multiplyScalar(Y),n.hemi[x]=J,x++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=_,n.ambient[2]=g;const C=n.hash;(C.sunLength!==v||C.directionalLength!==f||C.pointLength!==p||C.spotLength!==b||C.rectAreaLength!==A||C.hemiLength!==x||C.numSunShadows!==y||C.numDirectionalShadows!==u||C.numPointShadows!==M||C.numSpotShadows!==d||C.numSpotMaps!==l||C.numLightProbes!==w)&&(n.sun.length=v,n.directional.length=f,n.spot.length=b,n.rectArea.length=A,n.point.length=p,n.hemi.length=x,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=P,n.sunShadowCascade.length=P,n.directionalShadow.length=u,n.directionalShadowMap.length=u,n.directionalShadowMatrix.length=u,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=d,n.spotShadowMap.length=d,n.spotLightMatrix.length=d+l-S,n.spotLightMap.length=l,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,C.sunLength=v,C.directionalLength=f,C.pointLength=p,C.spotLength=b,C.rectAreaLength=A,C.hemiLength=x,C.numSunShadows=y,C.numDirectionalShadows=u,C.numPointShadows=M,C.numSpotShadows=d,C.numSpotMaps=l,C.numLightProbes=w,n.version=mp++)}function c(h,m){let _=0,g=0,v=0,y=0,P=0,f=0;const p=m.matrixWorldInverse;for(let b=0,A=h.length;b<A;b++){const x=h[b];if(x.isSunLight){const u=n.sun[_];u.direction.setFromMatrixPosition(x.matrixWorld),u.direction.transformDirection(p),_++}else if(x.isDirectionalLight){const u=n.directional[g];u.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(p),g++}else if(x.isSpotLight){const u=n.spot[y];u.position.setFromMatrixPosition(x.matrixWorld),u.position.applyMatrix4(p),u.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),u.direction.sub(r),u.direction.transformDirection(p),y++}else if(x.isRectAreaLight){const u=n.rectArea[P];u.position.setFromMatrixPosition(x.matrixWorld),u.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),u.halfWidth.set(x.width*.5,0,0),u.halfHeight.set(0,x.height*.5,0),u.halfWidth.applyMatrix4(a),u.halfHeight.applyMatrix4(a),P++}else if(x.isPointLight){const u=n.point[v];u.position.setFromMatrixPosition(x.matrixWorld),u.position.applyMatrix4(p),v++}else if(x.isHemisphereLight){const u=n.hemi[f];u.direction.setFromMatrixPosition(x.matrixWorld),u.direction.transformDirection(p),f++}}}return{setup:o,setupView:c,state:n}}function Do(i){const e=new _p(i),t=[],n=[],r=[];function s(g){_.camera=g,t.length=0,n.length=0,r.length=0}function a(g){t.push(g)}function o(g){n.push(g)}function c(g){r.push(g)}function h(){e.setup(t)}function m(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:_,setupLights:h,setupLightsView:m,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function xp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Do(i),e.set(r,[o])):s>=a.length?(o=new Do(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sp=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],yp=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Io=new At,nr=new B,Gs=new B;function Ep(i,e,t){let n=new ts;const r=new xe,s=new xe,a=new wt,o=new tl,c=new nl,h={},m=t.maxTextureSize,_={0:1,1:0,2:2},g=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:vp,fragmentShader:Mp}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const y=new yt;y.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new un(y,g),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(M,d,l){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;this.type===2&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const S=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(0),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==this.type;U&&d.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=M.length;F<k;F++){const Y=M[F],X=Y.shadow;if(X===void 0){Je("WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ne=X.getFrameExtents();r.multiply(ne),s.copy(X.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/ne.x),r.x=s.x*ne.x,X.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/ne.y),r.y=s.y*ne.y,X.mapSize.y=s.y));const J=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=J,X.map===null||U===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===3){if(Y.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new cn(r.x,r.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),X.map.texture.name=Y.name+".shadowMap",X.map.depthTexture=new zi(r.x,r.y,1015),X.map.depthTexture.name=Y.name+".shadowMapDepth",X.map.depthTexture.format=1026,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=1003,X.map.depthTexture.magFilter=1003}else Y.isPointLight?(X.map=new pa(r.x),X.map.depthTexture=new Ho(r.x,1014)):(X.map=new cn(r.x,r.y),X.map.depthTexture=new zi(r.x,r.y,1014)),X.map.depthTexture.name=Y.name+".shadowMap",X.map.depthTexture.format=1026,this.type===1?(X.map.depthTexture.compareFunction=J?518:515,X.map.depthTexture.minFilter=1006,X.map.depthTexture.magFilter=1006):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=1003,X.map.depthTexture.magFilter=1003);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const te=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Y.isPointLight!==!0&&X.updateMatrices(Y,l);for(let ie=0;ie<te;ie++){const Fe=X.getCamera(ie);if(Y.isPointLight){const Pe=X.camera,rt=X.matrix,Qe=Y.distance||Pe.far;Qe!==Pe.far&&(Pe.far=Qe,Pe.updateProjectionMatrix()),nr.setFromMatrixPosition(Y.matrixWorld),Pe.position.copy(nr),Gs.copy(Pe.position),Gs.add(Sp[ie]),Pe.up.copy(yp[ie]),Pe.lookAt(Gs),Pe.updateMatrixWorld(),rt.makeTranslation(-nr.x,-nr.y,-nr.z),Io.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Io,Pe.coordinateSystem,Pe.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(X.map),i.clear());const Pe=X.getViewport(ie);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),I.viewport(a)}n=X.getFrustum(ie),x(d,l,Fe,Y,this.type)}X.isPointLightShadow!==!0&&this.type===3&&b(X,l),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(S,w,C)};function b(M,d){const l=e.update(P);g.defines.VSM_SAMPLES!==M.blurSamples&&(g.defines.VSM_SAMPLES=M.blurSamples,v.defines.VSM_SAMPLES=M.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),M.mapPass===null?M.mapPass=new cn(r.x,r.y,{format:1030,type:1016}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),g.uniforms.shadow_pass.value=M.map.depthTexture,g.uniforms.resolution.value.set(M.map.width,M.map.height),g.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(d,null,l,g,P,null),v.uniforms.shadow_pass.value=M.mapPass.texture,v.uniforms.resolution.value.set(M.map.width,M.map.height),v.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(d,null,l,v,P,null)}function A(M,d,l,S){let w=null;const C=l.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)w=C;else if(w=l.isPointLight===!0?c:o,i.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0||d.alphaToCoverage===!0){const I=w.uuid,U=d.uuid;let F=h[I];F===void 0&&(F={},h[I]=F);let k=F[U];k===void 0&&(k=w.clone(),F[U]=k,d.addEventListener("dispose",u)),w=k}if(w.visible=d.visible,w.wireframe=d.wireframe,S===3?w.side=d.shadowSide!==null?d.shadowSide:d.side:w.side=d.shadowSide!==null?d.shadowSide:_[d.side],w.alphaMap=d.alphaMap,w.alphaTest=d.alphaToCoverage===!0?.5:d.alphaTest,w.map=d.map,w.clipShadows=d.clipShadows,w.clippingPlanes=d.clippingPlanes,w.clipIntersection=d.clipIntersection,w.displacementMap=d.displacementMap,w.displacementScale=d.displacementScale,w.displacementBias=d.displacementBias,w.wireframeLinewidth=d.wireframeLinewidth,w.linewidth=d.linewidth,l.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const I=i.properties.get(w);I.light=l}return w}function x(M,d,l,S,w){if(M.visible===!1)return;if(M.layers.test(d.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===3)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,M.matrixWorld);const U=e.update(M),F=M.material;if(Array.isArray(F)){const k=U.groups;for(let Y=0,X=k.length;Y<X;Y++){const ne=k[Y],J=F[ne.materialIndex];if(J&&J.visible){const te=A(M,J,S,w);M.onBeforeShadow(i,M,d,l,U,te,ne),i.renderBufferDirect(l,null,U,te,M,ne),M.onAfterShadow(i,M,d,l,U,te,ne)}}}else if(F.visible){const k=A(M,F,S,w);M.onBeforeShadow(i,M,d,l,U,k,null),i.renderBufferDirect(l,null,U,k,M,null),M.onAfterShadow(i,M,d,l,U,k,null)}}const I=M.children;for(let U=0,F=I.length;U<F;U++)x(I[U],d,l,S,w)}function u(M){M.target.removeEventListener("dispose",u);for(const l in h){const S=h[l],w=M.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function bp(i,e){function t(){let z=!1;const pe=new wt;let se=null;const _e=new wt(0,0,0,0);return{setMask:function(Le){se!==Le&&!z&&(i.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){z=Le},setClear:function(Le,ue,Ae,Be,St){St===!0&&(Le*=Be,ue*=Be,Ae*=Be),pe.set(Le,ue,Ae,Be),_e.equals(pe)===!1&&(i.clearColor(Le,ue,Ae,Be),_e.copy(pe))},reset:function(){z=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let z=!1,pe=!1,se=null,_e=null,Le=null;return{setReversed:function(ue){if(pe!==ue){const Ae=e.get("EXT_clip_control");ue?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),pe=ue;const Be=Le;Le=null,this.setClear(Be)}},getReversed:function(){return pe},setTest:function(ue){ue?re(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ue){se!==ue&&!z&&(i.depthMask(ue),se=ue)},setFunc:function(ue){if(pe&&(ue=Tl[ue]),_e!==ue){switch(ue){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=ue}},setLocked:function(ue){z=ue},setClear:function(ue){Le!==ue&&(Le=ue,pe&&(ue=1-ue),i.clearDepth(ue))},reset:function(){z=!1,se=null,_e=null,Le=null,pe=!1}}}function r(){let z=!1,pe=null,se=null,_e=null,Le=null,ue=null,Ae=null,Be=null,St=null;return{setTest:function(gt){z||(gt?re(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(gt){pe!==gt&&!z&&(i.stencilMask(gt),pe=gt)},setFunc:function(gt,Jt,Ft){(se!==gt||_e!==Jt||Le!==Ft)&&(i.stencilFunc(gt,Jt,Ft),se=gt,_e=Jt,Le=Ft)},setOp:function(gt,Jt,Ft){(ue!==gt||Ae!==Jt||Be!==Ft)&&(i.stencilOp(gt,Jt,Ft),ue=gt,Ae=Jt,Be=Ft)},setLocked:function(gt){z=gt},setClear:function(gt){St!==gt&&(i.clearStencil(gt),St=gt)},reset:function(){z=!1,pe=null,se=null,_e=null,Le=null,ue=null,Ae=null,Be=null,St=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,h=new WeakMap;let m={},_={},g={},v=new WeakMap,y=[],P=null,f=!1,p=null,b=null,A=null,x=null,u=null,M=null,d=null,l=new lt(0,0,0),S=0,w=!1,C=null,I=null,U=null,F=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=ne>=1):J.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=ne>=2);let te=null,ie={};const Fe=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),rt=new wt().fromArray(Fe),Qe=new wt().fromArray(Pe);function at(z,pe,se,_e){const Le=new Uint8Array(4),ue=i.createTexture();i.bindTexture(z,ue),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<se;Ae++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(pe+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return ue}const j={};j[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(3),fe(!1),Se(1),re(i.CULL_FACE),le(0);function re(z){m[z]!==!0&&(i.enable(z),m[z]=!0)}function Te(z){m[z]!==!1&&(i.disable(z),m[z]=!1)}function Ye(z,pe){return g[z]!==pe?(i.bindFramebuffer(z,pe),g[z]=pe,z===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=pe),z===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function De(z,pe){let se=y,_e=!1;if(z){se=v.get(pe),se===void 0&&(se=[],v.set(pe,se));const Le=z.textures;if(se.length!==Le.length||se[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ae=Le.length;ue<Ae;ue++)se[ue]=i.COLOR_ATTACHMENT0+ue;se.length=Le.length,_e=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&i.drawBuffers(se)}function qe(z){return P!==z?(i.useProgram(z),P=z,!0):!1}const pt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};pt[103]=i.MIN,pt[104]=i.MAX;const oe={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function le(z,pe,se,_e,Le,ue,Ae,Be,St,gt){if(z===0){f===!0&&(Te(i.BLEND),f=!1);return}if(f===!1&&(re(i.BLEND),f=!0),z!==5){if(z!==p||gt!==w){if((b!==100||u!==100)&&(i.blendEquation(i.FUNC_ADD),b=100,u=100),gt)switch(z){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",z);break}else switch(z){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",z);break}A=null,x=null,M=null,d=null,l.set(0,0,0),S=0,p=z,w=gt}return}Le=Le||pe,ue=ue||se,Ae=Ae||_e,(pe!==b||Le!==u)&&(i.blendEquationSeparate(pt[pe],pt[Le]),b=pe,u=Le),(se!==A||_e!==x||ue!==M||Ae!==d)&&(i.blendFuncSeparate(oe[se],oe[_e],oe[ue],oe[Ae]),A=se,x=_e,M=ue,d=Ae),(Be.equals(l)===!1||St!==S)&&(i.blendColor(Be.r,Be.g,Be.b,St),l.copy(Be),S=St),p=z,w=!1}function he(z,pe){z.side===2?Te(i.CULL_FACE):re(i.CULL_FACE);let se=z.side===1;pe&&(se=!se),fe(se),z.blending===1&&z.transparent===!1?le(0):le(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const _e=z.stencilWrite;o.setTest(_e),_e&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),He(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(z){C!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),C=z)}function Se(z){z!==0?(re(i.CULL_FACE),z!==I&&(z===1?i.cullFace(i.BACK):z===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),I=z}function ke(z){z!==U&&(X&&i.lineWidth(z),U=z)}function He(z,pe,se){z?(re(i.POLYGON_OFFSET_FILL),(F!==pe||k!==se)&&(F=pe,k=se,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,se))):Te(i.POLYGON_OFFSET_FILL)}function We(z){z?re(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function $e(z){z===void 0&&(z=i.TEXTURE0+Y-1),te!==z&&(i.activeTexture(z),te=z)}function O(z,pe,se){se===void 0&&(te===null?se=i.TEXTURE0+Y-1:se=te);let _e=ie[se];_e===void 0&&(_e={type:void 0,texture:void 0},ie[se]=_e),(_e.type!==z||_e.texture!==pe)&&(te!==se&&(i.activeTexture(se),te=se),i.bindTexture(z,pe||j[z]),_e.type=z,_e.texture=pe)}function mt(){const z=ie[te];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function T(){try{i.texSubImage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function ge(){try{i.texStorage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function ve(){try{i.texStorage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function ee(){try{i.texImage2D(...arguments)}catch(z){dt("WebGLState:",z)}}function ae(){try{i.texImage3D(...arguments)}catch(z){dt("WebGLState:",z)}}function de(z){return _[z]!==void 0?_[z]:i.getParameter(z)}function ze(z,pe){_[z]!==pe&&(i.pixelStorei(z,pe),_[z]=pe)}function Ee(z){rt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),rt.copy(z))}function be(z){Qe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Qe.copy(z))}function Oe(z,pe){let se=h.get(pe);se===void 0&&(se=new WeakMap,h.set(pe,se));let _e=se.get(z);_e===void 0&&(_e=i.getUniformBlockIndex(pe,z.name),se.set(z,_e))}function Ve(z,pe){const _e=h.get(pe).get(z);c.get(pe)!==_e&&(i.uniformBlockBinding(pe,_e,z.__bindingPointIndex),c.set(pe,_e))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},_={},te=null,ie={},g={},v=new WeakMap,y=[],P=null,f=!1,p=null,b=null,A=null,x=null,u=null,M=null,d=null,l=new lt(0,0,0),S=0,w=!1,C=null,I=null,U=null,F=null,k=null,rt.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Te,bindFramebuffer:Ye,drawBuffers:De,useProgram:qe,setBlending:le,setMaterial:he,setFlipSided:fe,setCullFace:Se,setLineWidth:ke,setPolygonOffset:He,setScissorTest:We,activeTexture:$e,bindTexture:O,unbindTexture:mt,compressedTexImage2D:st,compressedTexImage3D:N,texImage2D:ee,texImage3D:ae,pixelStorei:ze,getParameter:de,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:ge,texStorage3D:ve,texSubImage2D:T,texSubImage3D:H,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:Ee,viewport:be,reset:je}}function Tp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xe,m=new WeakMap,_=new Set;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(N,T){return y?new OffscreenCanvas(N,T):Jr("canvas")}function f(N,T,H){let Z=1;const Q=st(N);if((Q.width>H||Q.height>H)&&(Z=H/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ge=Math.floor(Z*Q.width),ve=Math.floor(Z*Q.height);g===void 0&&(g=P(ge,ve));const ee=T?P(ge,ve):g;return ee.width=ge,ee.height=ve,ee.getContext("2d").drawImage(N,0,0,ge,ve),Je("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ge+"x"+ve+")."),ee}else return"data"in N&&Je("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function p(N){return N.generateMipmaps}function b(N){i.generateMipmap(N)}function A(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(N,T,H,Z,Q,ge=!1){if(N!==null){if(i[N]!==void 0)return i[N];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ve;Z&&(ve=e.get("EXT_texture_norm16"),ve||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=T;if(T===i.RED&&(H===i.FLOAT&&(ee=i.R32F),H===i.HALF_FLOAT&&(ee=i.R16F),H===i.UNSIGNED_BYTE&&(ee=i.R8),H===i.UNSIGNED_SHORT&&ve&&(ee=ve.R16_EXT),H===i.SHORT&&ve&&(ee=ve.R16_SNORM_EXT)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.R8UI),H===i.UNSIGNED_SHORT&&(ee=i.R16UI),H===i.UNSIGNED_INT&&(ee=i.R32UI),H===i.BYTE&&(ee=i.R8I),H===i.SHORT&&(ee=i.R16I),H===i.INT&&(ee=i.R32I)),T===i.RG&&(H===i.FLOAT&&(ee=i.RG32F),H===i.HALF_FLOAT&&(ee=i.RG16F),H===i.UNSIGNED_BYTE&&(ee=i.RG8),H===i.UNSIGNED_SHORT&&ve&&(ee=ve.RG16_EXT),H===i.SHORT&&ve&&(ee=ve.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RG8UI),H===i.UNSIGNED_SHORT&&(ee=i.RG16UI),H===i.UNSIGNED_INT&&(ee=i.RG32UI),H===i.BYTE&&(ee=i.RG8I),H===i.SHORT&&(ee=i.RG16I),H===i.INT&&(ee=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),H===i.UNSIGNED_INT&&(ee=i.RGB32UI),H===i.BYTE&&(ee=i.RGB8I),H===i.SHORT&&(ee=i.RGB16I),H===i.INT&&(ee=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),H===i.UNSIGNED_INT&&(ee=i.RGBA32UI),H===i.BYTE&&(ee=i.RGBA8I),H===i.SHORT&&(ee=i.RGBA16I),H===i.INT&&(ee=i.RGBA32I)),T===i.RGB&&(H===i.UNSIGNED_SHORT&&ve&&(ee=ve.RGB16_EXT),H===i.SHORT&&ve&&(ee=ve.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),T===i.RGBA){const ae=ge?hr:ut.getTransfer(Q);H===i.FLOAT&&(ee=i.RGBA32F),H===i.HALF_FLOAT&&(ee=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ee=ae===Mt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ve&&(ee=ve.RGBA16_EXT),H===i.SHORT&&ve&&(ee=ve.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function u(N,T){let H;return N?T===null||T===1014||T===1020?H=i.DEPTH24_STENCIL8:T===1015?H=i.DEPTH32F_STENCIL8:T===1012&&(H=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===1014||T===1020?H=i.DEPTH_COMPONENT24:T===1015?H=i.DEPTH_COMPONENT32F:T===1012&&(H=i.DEPTH_COMPONENT16),H}function M(N,T){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==1003&&N.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function d(N){const T=N.target;T.removeEventListener("dispose",d),S(T),T.isVideoTexture&&m.delete(T),T.isHTMLTexture&&_.delete(T)}function l(N){const T=N.target;T.removeEventListener("dispose",l),C(T)}function S(N){const T=n.get(N);if(T.__webglInit===void 0)return;const H=N.source,Z=v.get(H);if(Z){const Q=Z[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(N),Object.keys(Z).length===0&&v.delete(H)}n.remove(N)}function w(N){const T=n.get(N);i.deleteTexture(T.__webglTexture);const H=N.source,Z=v.get(H);delete Z[T.__cacheKey],a.memory.textures--}function C(N){const T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let Q=0;Q<T.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=N.textures;for(let Z=0,Q=H.length;Z<Q;Z++){const ge=n.get(H[Z]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(N)}let I=0;function U(){I=0}function F(){return I}function k(N){I=N}function Y(){const N=I;return N>=r.maxTextures&&Je("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,N}function X(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ne(N,T){const H=n.get(N);if(N.isVideoTexture&&O(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&H.__version!==N.version){const Z=N.image;if(Z===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(H,N,T);return}}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function J(N,T){const H=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){Te(H,N,T);return}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function te(N,T){const H=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){Te(H,N,T);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function ie(N,T){const H=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&H.__version!==N.version){Ye(H,N,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}const Fe={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Pe={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},rt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Qe(N,T){if(T.type===1015&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===1006||T.magFilter===1007||T.magFilter===1005||T.magFilter===1008||T.minFilter===1006||T.minFilter===1007||T.minFilter===1005||T.minFilter===1008)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Fe[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Fe[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Fe[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Pe[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Pe[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,rt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===1003||T.minFilter!==1005&&T.minFilter!==1008||T.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function at(N,T){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",d));const Z=T.source;let Q=v.get(Z);Q===void 0&&(Q={},v.set(Z,Q));const ge=X(T);if(ge!==N.__cacheKey){Q[ge]===void 0&&(Q[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[ge].usedTimes++;const ve=Q[N.__cacheKey];ve!==void 0&&(Q[N.__cacheKey].usedTimes--,ve.usedTimes===0&&w(T)),N.__cacheKey=ge,N.__webglTexture=Q[ge].texture}return H}function j(N,T,H){return Math.floor(Math.floor(N/H)/T)}function re(N,T,H,Z){const ge=N.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,H,Z,T.data);else{ge.sort((ze,Ee)=>ze.start-Ee.start);let ve=0;for(let ze=1;ze<ge.length;ze++){const Ee=ge[ve],be=ge[ze],Oe=Ee.start+Ee.count,Ve=j(be.start,T.width,4),je=j(Ee.start,T.width,4);be.start<=Oe+1&&Ve===je&&j(be.start+be.count-1,T.width,4)===Ve?Ee.count=Math.max(Ee.count,be.start+be.count-Ee.start):(++ve,ge[ve]=be)}ge.length=ve+1;const ee=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ze=0,Ee=ge.length;ze<Ee;ze++){const be=ge[ze],Oe=Math.floor(be.start/4),Ve=Math.ceil(be.count/4),je=Oe%T.width,z=Math.floor(Oe/T.width),pe=Ve,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,je,z,pe,se,H,Z,T.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function Te(N,T,H){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=at(N,T),ge=T.source;t.bindTexture(Z,N.__webglTexture,i.TEXTURE0+H);const ve=n.get(ge);if(ge.version!==ve.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const se=ut.getPrimaries(ut.workingColorSpace),_e=T.colorSpace===""?null:ut.getPrimaries(T.colorSpace),Le=T.colorSpace===""||se===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=f(T.image,!1,r.maxTextureSize);ae=mt(T,ae);const de=s.convert(T.format,T.colorSpace),ze=s.convert(T.type);let Ee=x(T.internalFormat,de,ze,T.normalized,T.colorSpace,T.isVideoTexture);Qe(Z,T);let be;const Oe=T.mipmaps,Ve=T.isVideoTexture!==!0,je=ve.__version===void 0||Q===!0,z=ge.dataReady,pe=M(T,ae);if(T.isDepthTexture)Ee=u(T.format===1027,T.type),je&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ee,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ae.width,ae.height,0,de,ze,null));else if(T.isDataTexture)if(Oe.length>0){Ve&&je&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,Oe[0].width,Oe[0].height);for(let se=0,_e=Oe.length;se<_e;se++)be=Oe[se],Ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,be.width,be.height,de,ze,be.data):t.texImage2D(i.TEXTURE_2D,se,Ee,be.width,be.height,0,de,ze,be.data);T.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,ae.width,ae.height),z&&re(T,ae,de,ze)):t.texImage2D(i.TEXTURE_2D,0,Ee,ae.width,ae.height,0,de,ze,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ve&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,Oe[0].width,Oe[0].height,ae.depth);for(let se=0,_e=Oe.length;se<_e;se++)if(be=Oe[se],T.format!==1023)if(de!==null)if(Ve){if(z)if(T.layerUpdates.size>0){const Le=ho(be.width,be.height,T.format,T.type);for(const ue of T.layerUpdates){const Ae=be.data.subarray(ue*Le/be.data.BYTES_PER_ELEMENT,(ue+1)*Le/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ue,be.width,be.height,1,de,Ae)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,be.width,be.height,ae.depth,de,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ee,be.width,be.height,ae.depth,0,be.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,be.width,be.height,ae.depth,de,ze,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ee,be.width,be.height,ae.depth,0,de,ze,be.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ve&&je&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,Oe[0].width,Oe[0].height);for(let se=0,_e=Oe.length;se<_e;se++)be=Oe[se],T.format!==1023?de!==null?Ve?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,be.width,be.height,de,be.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ee,be.width,be.height,0,be.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,be.width,be.height,de,ze,be.data):t.texImage2D(i.TEXTURE_2D,se,Ee,be.width,be.height,0,de,ze,be.data)}else if(T.isDataArrayTexture)if(Ve){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,ae.width,ae.height,ae.depth),z)if(T.layerUpdates.size>0){const se=ho(ae.width,ae.height,T.format,T.type);for(const _e of T.layerUpdates){const Le=ae.data.subarray(_e*se/ae.data.BYTES_PER_ELEMENT,(_e+1)*se/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ae.width,ae.height,1,de,ze,Le)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,de,ze,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,de,ze,ae.data);else if(T.isData3DTexture)Ve?(je&&t.texStorage3D(i.TEXTURE_3D,pe,Ee,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,de,ze,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,de,ze,ae.data);else if(T.isFramebufferTexture){if(je)if(Ve)t.texStorage2D(i.TEXTURE_2D,pe,Ee,ae.width,ae.height);else{let se=ae.width,_e=ae.height;for(let Le=0;Le<pe;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ee,se,_e,0,de,ze,null),se>>=1,_e>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ae.parentNode!==se){se.appendChild(ae),_.add(T),se.onpaint=_e=>{const Le=_e.changedElements;for(const ue of _)Le.includes(ue.image)&&(ue.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{const Le=i.RGBA,ue=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Le,ue,Ae,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ve&&je){const se=st(Oe[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ee,se.width,se.height)}for(let se=0,_e=Oe.length;se<_e;se++)be=Oe[se],Ve?z&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,de,ze,be):t.texImage2D(i.TEXTURE_2D,se,Ee,de,ze,be);T.generateMipmaps=!1}else if(Ve){if(je){const se=st(ae);t.texStorage2D(i.TEXTURE_2D,pe,Ee,se.width,se.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,ze,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ee,de,ze,ae);p(T)&&b(Z),ve.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ye(N,T,H){if(T.image.length!==6)return;const Z=at(N,T),Q=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+H);const ge=n.get(Q);if(Q.version!==ge.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const ve=ut.getPrimaries(ut.workingColorSpace),ee=T.colorSpace===""?null:ut.getPrimaries(T.colorSpace),ae=T.colorSpace===""||ve===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const de=T.isCompressedTexture||T.image[0].isCompressedTexture,ze=T.image[0]&&T.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!de&&!ze?Ee[ue]=f(T.image[ue],!0,r.maxCubemapSize):Ee[ue]=ze?T.image[ue].image:T.image[ue],Ee[ue]=mt(T,Ee[ue]);const be=Ee[0],Oe=s.convert(T.format,T.colorSpace),Ve=s.convert(T.type),je=x(T.internalFormat,Oe,Ve,T.normalized,T.colorSpace),z=T.isVideoTexture!==!0,pe=ge.__version===void 0||Z===!0,se=Q.dataReady;let _e=M(T,be);Qe(i.TEXTURE_CUBE_MAP,T);let Le;if(de){z&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,je,be.width,be.height);for(let ue=0;ue<6;ue++){Le=Ee[ue].mipmaps;for(let Ae=0;Ae<Le.length;Ae++){const Be=Le[Ae];T.format!==1023?Oe!==null?z?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae,0,0,Be.width,Be.height,Oe,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae,je,Be.width,Be.height,0,Be.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae,0,0,Be.width,Be.height,Oe,Ve,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae,je,Be.width,Be.height,0,Oe,Ve,Be.data)}}}else{if(Le=T.mipmaps,z&&pe){Le.length>0&&_e++;const ue=st(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,je,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ze){z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,Oe,Ve,Ee[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,Ee[ue].width,Ee[ue].height,0,Oe,Ve,Ee[ue].data);for(let Ae=0;Ae<Le.length;Ae++){const St=Le[Ae].image[ue].image;z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae+1,0,0,St.width,St.height,Oe,Ve,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae+1,je,St.width,St.height,0,Oe,Ve,St.data)}}else{z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,Ve,Ee[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,Oe,Ve,Ee[ue]);for(let Ae=0;Ae<Le.length;Ae++){const Be=Le[Ae];z?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae+1,0,0,Oe,Ve,Be.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae+1,je,Oe,Ve,Be.image[ue])}}}p(T)&&b(i.TEXTURE_CUBE_MAP),ge.__version=Q.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function De(N,T,H,Z,Q,ge){const ve=s.convert(H.format,H.colorSpace),ee=s.convert(H.type),ae=x(H.internalFormat,ve,ee,H.normalized,H.colorSpace),de=n.get(T),ze=n.get(H);if(ze.__renderTarget=T,!de.__hasExternalTextures){const Ee=Math.max(1,T.width>>ge),be=Math.max(1,T.height>>ge);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ge,ae,Ee,be,T.depth,0,ve,ee,null):t.texImage2D(Q,ge,ae,Ee,be,0,ve,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),$e(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,ze.__webglTexture,0,We(T)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,ze.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(N,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){const Z=T.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,ge=u(T.stencilBuffer,Q),ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$e(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(T),ge,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(T),ge,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,N)}else{const Z=T.textures;for(let Q=0;Q<Z.length;Q++){const ge=Z[Q],ve=s.convert(ge.format,ge.colorSpace),ee=s.convert(ge.type),ae=x(ge.internalFormat,ve,ee,ge.normalized,ge.colorSpace);$e(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(T),ae,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(T),ae,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ae,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(N,T,H){const Z=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(T.depthTexture);if(Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,T.depthTexture.addEventListener("dispose",d)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,T.depthTexture);const de=s.convert(T.depthTexture.format),ze=s.convert(T.depthTexture.type);let Ee;T.depthTexture.format===1026?Ee=i.DEPTH_COMPONENT24:T.depthTexture.format===1027&&(Ee=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ee,T.width,T.height,0,de,ze,null)}}else ne(T.depthTexture,0);const ge=Q.__webglTexture,ve=We(T),ee=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ae=T.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===1026)$e(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ee,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,ae,ee,ge,0);else if(T.depthTexture.format===1027)$e(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ee,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,ae,ee,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(N){const T=n.get(N),H=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const Z=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=Z}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(H)for(let Z=0;Z<6;Z++)pt(T.__webglFramebuffer[Z],N,Z);else{const Z=N.texture.mipmaps;Z&&Z.length>0?pt(T.__webglFramebuffer[0],N,0):pt(T.__webglFramebuffer,N,0)}else if(H){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),qe(T.__webglDepthbuffer[Z],N,!1);else{const Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ge)}}else{const Z=N.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),qe(T.__webglDepthbuffer,N,!1);else{const Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(N,T,H){const Z=n.get(N);T!==void 0&&De(Z.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&oe(N)}function he(N){const T=N.texture,H=n.get(N),Z=n.get(T);N.addEventListener("dispose",l);const Q=N.textures,ge=N.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,a.memory.textures++),ge){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let ae=0;ae<T.mipmaps.length;ae++)H.__webglFramebuffer[ee][ae]=i.createFramebuffer()}else H.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<T.mipmaps.length;ee++)H.__webglFramebuffer[ee]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ee=0,ae=Q.length;ee<ae;ee++){const de=n.get(Q[ee]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&$e(N)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const ae=Q[ee];H.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);const de=s.convert(ae.format,ae.colorSpace),ze=s.convert(ae.type),Ee=x(ae.internalFormat,de,ze,ae.normalized,ae.colorSpace,N.isXRRenderTarget===!0),be=We(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Ee,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(H.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,T);for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)De(H.__webglFramebuffer[ee][ae],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae);else De(H.__webglFramebuffer[ee],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(T)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ee=0,ae=Q.length;ee<ae;ee++){const de=Q[ee],ze=n.get(de);let Ee=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ee=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ze.__webglTexture),Qe(Ee,de),De(H.__webglFramebuffer,N,de,i.COLOR_ATTACHMENT0+ee,Ee,0),p(de)&&b(Ee)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ee=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,Z.__webglTexture),Qe(ee,T),T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)De(H.__webglFramebuffer[ae],N,T,i.COLOR_ATTACHMENT0,ee,ae);else De(H.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,ee,0);p(T)&&b(ee),t.unbindTexture()}N.depthBuffer&&oe(N)}function fe(N){const T=N.textures;for(let H=0,Z=T.length;H<Z;H++){const Q=T[H];if(p(Q)){const ge=A(N),ve=n.get(Q).__webglTexture;t.bindTexture(ge,ve),b(ge),t.unbindTexture()}}}const Se=[],ke=[];function He(N){if(N.samples>0){if($e(N)===!1){const T=N.textures,H=N.width,Z=N.height;let Q=i.COLOR_BUFFER_BIT;const ge=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(N),ee=T.length>1;if(ee)for(let de=0;de<T.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const ae=N.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let de=0;de<T.length;de++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);const ze=n.get(T[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,Q,i.NEAREST),c===!0&&(Se.length=0,ke.length=0,Se.push(i.COLOR_ATTACHMENT0+de),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Se.push(ge),ke.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<T.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);const ze=n.get(T[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){const T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function We(N){return Math.min(r.maxSamples,N.samples)}function $e(N){const T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function O(N){const T=a.render.frame;m.get(N)!==T&&(m.set(N,T),N.update())}function mt(N,T){const H=N.colorSpace,Z=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||H!==ur&&H!==""&&(ut.getTransfer(H)===Mt?(Z!==1023||Q!==1009)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",H)),T}function st(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=ie,this.rebindTextures=le,this.setupRenderTarget=he,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pl(i,e){function t(n,r=""){let s;const a=ut.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wp=`
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

}`;class Rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:Ap,fragmentShader:wp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cp extends Kn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,h=null,m=null,_=null,g=null,v=null,y=null;const P=typeof XRWebGLBinding<"u",f=new Rp,p={},b=t.getContextAttributes();let A=null,x=null;const u=[],M=[],d=new xe;let l=null,S=null;const w=new en;w.viewport=new wt;const C=new en;C.viewport=new wt;const I=[w,C],U=new al;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=u[j];return re===void 0&&(re=new Yr,u[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=u[j];return re===void 0&&(re=new Yr,u[j]=re),re.getGripSpace()},this.getHand=function(j){let re=u[j];return re===void 0&&(re=new Yr,u[j]=re),re.getHandSpace()};function Y(j){const re=M.indexOf(j.inputSource);if(re===-1)return;const Te=u[re];Te!==void 0&&(Te.update(j.inputSource,j.frame,h||a),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let j=0;j<u.length;j++){const re=M[j];re!==null&&(M[j]=null,u[j].disconnect(re))}F=null,k=null,f.reset();for(const j in p)delete p[j];if(e.setRenderTarget(A),v=null,g=null,_=null,r=null,x=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(l),e.setSize(d.width,d.height,!1),S!==null){const j=S.camera;j.fov=S.fov,j.zoom=S.zoom,j.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _===null&&P&&(_=new XRWebGLBinding(r,t)),_},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),l=e.getPixelRatio(),e.getSize(d),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ye=null,De=null;b.depth&&(De=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=b.stencil?1027:1026,Ye=b.stencil?1020:1014);const qe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};_=this.getBinding(),g=_.createProjectionLayer(qe),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),x=new cn(g.textureWidth,g.textureHeight,{format:1023,type:1009,depthTexture:new zi(g.textureWidth,g.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),x=new cn(v.framebufferWidth,v.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await r.requestReferenceSpace(o),at.setContext(r),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(j){for(let re=0;re<j.removed.length;re++){const Te=j.removed[re],Ye=M.indexOf(Te);Ye>=0&&(M[Ye]=null,u[Ye].disconnect(Te))}for(let re=0;re<j.added.length;re++){const Te=j.added[re];let Ye=M.indexOf(Te);if(Ye===-1){for(let qe=0;qe<u.length;qe++)if(qe>=M.length){M.push(Te),Ye=qe;break}else if(M[qe]===null){M[qe]=Te,Ye=qe;break}if(Ye===-1)break}const De=u[Ye];De&&De.connect(Te)}}const J=new B,te=new B;function ie(j,re,Te){J.setFromMatrixPosition(re.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);const Ye=J.distanceTo(te),De=re.projectionMatrix.elements,qe=Te.projectionMatrix.elements,pt=De[14]/(De[10]-1),oe=De[14]/(De[10]+1),le=(De[9]+1)/De[5],he=(De[9]-1)/De[5],fe=(De[8]-1)/De[0],Se=(qe[8]+1)/qe[0],ke=pt*fe,He=pt*Se,We=Ye/(-fe+Se),$e=We*-fe;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($e),j.translateZ(We),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),De[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const O=pt+We,mt=oe+We,st=ke-$e,N=He+(Ye-$e),T=le*oe/mt*O,H=he*oe/mt*O;j.projectionMatrix.makePerspective(st,N,T,H,O,mt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Fe(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let re=j.near,Te=j.far;f.texture!==null&&(f.depthNear>0&&(re=f.depthNear),f.depthFar>0&&(Te=f.depthFar)),U.near=C.near=w.near=re,U.far=C.far=w.far=Te,(F!==U.near||k!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,k=U.far),U.layers.mask=j.layers.mask|6,w.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const Ye=j.parent,De=U.cameras;Fe(U,Ye);for(let qe=0;qe<De.length;qe++)Fe(De[qe],Ye);De.length===2?ie(U,w,C):U.projectionMatrix.copy(w.projectionMatrix),S===null&&j.isPerspectiveCamera&&(S={camera:j,fov:j.fov,zoom:j.zoom}),Pe(j,U,Ye)};function Pe(j,re,Te){Te===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(g===null&&v===null))return c},this.setFoveation=function(j){c=j,g!==null&&(g.fixedFoveation=j),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let rt=null;function Qe(j,re){if(m=re.getViewerPose(h||a),y=re,m!==null){const Te=m.views;v!==null&&(e.setRenderTargetFramebuffer(x,v.framebuffer),e.setRenderTarget(x));let Ye=!1;Te.length!==U.cameras.length&&(U.cameras.length=0,Ye=!0);for(let oe=0;oe<Te.length;oe++){const le=Te[oe];let he=null;if(v!==null)he=v.getViewport(le);else{const Se=_.getViewSubImage(g,le);he=Se.viewport,oe===0&&(e.setRenderTargetTextures(x,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(x))}let fe=I[oe];fe===void 0&&(fe=new en,fe.layers.enable(oe),fe.viewport=new wt,I[oe]=fe),fe.matrix.fromArray(le.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(le.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(he.x,he.y,he.width,he.height),oe===0&&(U.matrix.copy(fe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ye===!0&&U.cameras.push(fe)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&P){_=n.getBinding();const oe=_.getDepthInformation(Te[0]);oe&&oe.isValid&&oe.texture&&f.init(oe,r.renderState)}if(De&&De.includes("camera-access")&&P){e.state.unbindTexture(),_=n.getBinding();for(let oe=0;oe<Te.length;oe++){const le=Te[oe].camera;if(le){let he=p[le];he||(he=new ia,p[le]=he);const fe=_.getCameraImage(le);he.sourceTexture=fe}}}}for(let Te=0;Te<u.length;Te++){const Ye=M[Te],De=u[Te];Ye!==null&&De!==void 0&&De.update(Ye,re,h||a)}rt&&rt(j,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),y=null}const at=new ll;at.setAnimationLoop(Qe),this.setAnimationLoop=function(j){rt=j},this.dispose=function(){}}}const Pp=new At,ml=new et;ml.set(-1,0,0,0,1,0,0,0,1);function Lp(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,$o(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,b,A,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(f,p):p.isMeshLambertMaterial?(s(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(f,p),_(f,p)):p.isMeshPhongMaterial?(s(f,p),m(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(f,p),g(f,p),p.isMeshPhysicalMaterial&&v(f,p,x)):p.isMeshMatcapMaterial?(s(f,p),y(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),P(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,b,A):p.isSpriteMaterial?h(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===1&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===1&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const b=e.get(p),A=b.envMap,x=b.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(ml),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,b,A){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=A*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function m(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function _(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function g(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function v(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function y(f,p){p.matcap&&(f.matcap.value=p.matcap)}function P(f,p){const b=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Dp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,u){const M=u.program;n.uniformBlockBinding(x,M)}function h(x,u){let M=r[x.id];M===void 0&&(f(x),M=m(x),r[x.id]=M,x.addEventListener("dispose",b));const d=u.program;n.updateUBOMapping(x,d);const l=e.render.frame;s[x.id]!==l&&(g(x),s[x.id]=l)}function m(x){const u=_();x.__bindingPointIndex=u;const M=i.createBuffer(),d=x.__size,l=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,d,l),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,u,M),M}function _(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(x){const u=r[x.id],M=x.uniforms,d=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,u);for(let l=0,S=M.length;l<S;l++){const w=M[l];if(Array.isArray(w))for(let C=0,I=w.length;C<I;C++)v(w[C],l,C,d);else v(w,l,0,d)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(x,u,M,d){if(P(x,u,M,d)===!0){const l=x.__offset,S=x.value;if(Array.isArray(S)){let w=0;for(let C=0;C<S.length;C++){const I=S[C],U=p(I);y(I,x.__data,w),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(w+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(S,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,l,x.__data)}}function y(x,u,M){typeof x=="number"||typeof x=="boolean"?u[0]=x:x.isMatrix3?(u[0]=x.elements[0],u[1]=x.elements[1],u[2]=x.elements[2],u[3]=0,u[4]=x.elements[3],u[5]=x.elements[4],u[6]=x.elements[5],u[7]=0,u[8]=x.elements[6],u[9]=x.elements[7],u[10]=x.elements[8],u[11]=0):ArrayBuffer.isView(x)?u.set(new x.constructor(x.buffer,x.byteOffset,u.length)):x.toArray(u,M)}function P(x,u,M,d){const l=x.value,S=u+"_"+M;if(d[S]===void 0)return typeof l=="number"||typeof l=="boolean"?d[S]=l:ArrayBuffer.isView(l)?d[S]=l.slice():d[S]=l.clone(),!0;{const w=d[S];if(typeof l=="number"||typeof l=="boolean"){if(w!==l)return d[S]=l,!0}else{if(ArrayBuffer.isView(l))return!0;if(w.equals(l)===!1)return w.copy(l),!0}}return!1}function f(x){const u=x.uniforms;let M=0;const d=16;for(let S=0,w=u.length;S<w;S++){const C=Array.isArray(u[S])?u[S]:[u[S]];for(let I=0,U=C.length;I<U;I++){const F=C[I],k=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,X=k.length;Y<X;Y++){const ne=k[Y],J=p(ne),te=M%d,ie=te%J.boundary,Fe=te+ie;M+=ie,Fe!==0&&d-Fe<J.storage&&(M+=d-Fe),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=J.storage}}}const l=M%d;return l>0&&(M+=d-l),x.__size=M,x.__cache={},this}function p(x){const u={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(u.boundary=4,u.storage=4):x.isVector2?(u.boundary=8,u.storage=8):x.isVector3||x.isColor?(u.boundary=16,u.storage=12):x.isVector4?(u.boundary=16,u.storage=16):x.isMatrix3?(u.boundary=48,u.storage=48):x.isMatrix4?(u.boundary=64,u.storage=64):x.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(u.boundary=16,u.storage=x.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",x),u}function b(x){const u=x.target;u.removeEventListener("dispose",b);const M=a.indexOf(u.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}function A(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:h,dispose:A}}const Ip=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function Np(){return Cn===null&&(Cn=new ko(Ip,16,16,1030,1016),Cn.name="DFG_LUT",Cn.minFilter=1006,Cn.magFilter=1006,Cn.wrapS=1001,Cn.wrapT=1001,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class gl{constructor(e={}){const{canvas:t=Fo(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:v=1009}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;const P=v,f=new Set([1033,1031,1029]),p=new Set([1009,1014,1012,1020,1017,1018]),b=new Uint32Array(4),A=new Int32Array(4),x=new B;let u=null,M=null;const d=[],l=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1,I=null,U=null,F=null,k=null;this._outputColorSpace=Zt;let Y=0,X=0,ne=null,J=-1,te=null;const ie=new wt,Fe=new wt;let Pe=null;const rt=new lt(0);let Qe=0,at=t.width,j=t.height,re=1,Te=null,Ye=null;const De=new wt(0,0,at,j),qe=new wt(0,0,at,j);let pt=!1;const oe=new ts;let le=!1,he=!1;const fe=new At,Se=new B,ke=new wt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function $e(){return ne===null?re:1}let O=n;function mt(R,G){return t.getContext(R,G)}let st,N,T,H,Z,Q,ge,ve,ee,ae,de,ze,Ee,be,Oe,Ve,je,z,pe,se,_e,Le,ue;try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Jt,!1),O===null){const G="webgl2";if(O=mt(G,R),O===null)throw mt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(R){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Jt,!1),dt("WebGLRenderer: "+R.message),R}function Ae(){st=new Ff(O),st.init(),_e=new pl(O,st),N=new Tf(O,st,e,_e),T=new bp(O,st),N.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),U=O.createFramebuffer(),F=O.createFramebuffer(),k=O.createFramebuffer(),H=new Bf(O),Z=new up,Q=new Tp(O,st,T,Z,N,_e,H),ge=new Nf(w),ve=new Gc(O),Le=new Ef(O,ve),ee=new Uf(O,ve,H,Le),ae=new zf(O,ee,ve,Le,H),z=new Gf(O,N,Q),Oe=new Af(Z),de=new cp(w,ge,st,N,Le,Oe),ze=new Lp(w,Z),Ee=new fp,be=new xp(st),je=new yf(w,ge,T,ae,y,c),Ve=new Ep(w,ae,N),ue=new Dp(O,H,N,T),pe=new bf(O,st,H),se=new Of(O,st,H),H.programs=de.programs,w.capabilities=N,w.extensions=st,w.properties=Z,w.renderLists=Ee,w.shadowMap=Ve,w.state=T,w.info=H}P!==1009&&(S=new kf(P,t.width,t.height,o,r,s));const Be=new Cp(w,O);this.xr=Be,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize(at,j,!1))},this.getSize=function(R){return R.set(at,j)},this.setSize=function(R,G,K=!0){if(Be.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}at=R,j=G,t.width=Math.floor(R*re),t.height=Math.floor(G*re),K===!0&&(t.style.width=R+"px",t.style.height=G+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(at*re,j*re).floor()},this.setDrawingBufferSize=function(R,G,K){at=R,j=G,re=K,t.width=Math.floor(R*K),t.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(P===1009){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ie)},this.getViewport=function(R){return R.copy(De)},this.setViewport=function(R,G,K,q){R.isVector4?De.set(R.x,R.y,R.z,R.w):De.set(R,G,K,q),T.viewport(ie.copy(De).multiplyScalar(re).round())},this.getScissor=function(R){return R.copy(qe)},this.setScissor=function(R,G,K,q){R.isVector4?qe.set(R.x,R.y,R.z,R.w):qe.set(R,G,K,q),T.scissor(Fe.copy(qe).multiplyScalar(re).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){T.setScissorTest(pt=R)},this.setOpaqueSort=function(R){Te=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,K=!0){let q=0;if(R){let W=!1;if(ne!==null){const Me=ne.texture.format;W=f.has(Me)}if(W){const Me=ne.texture.type,ce=p.has(Me),ye=je.getClearColor(),Ue=je.getClearAlpha(),Ie=ye.r,Ke=ye.g,nt=ye.b;ce?(b[0]=Ie,b[1]=Ke,b[2]=nt,b[3]=Ue,O.clearBufferuiv(O.COLOR,0,b)):(A[0]=Ie,A[1]=Ke,A[2]=nt,A[3]=Ue,O.clearBufferiv(O.COLOR,0,A))}else q|=O.COLOR_BUFFER_BIT}G&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Jt,!1),je.dispose(),Ee.dispose(),be.dispose(),Z.dispose(),ge.dispose(),ae.dispose(),Le.dispose(),ue.dispose(),de.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",zn),Be.removeEventListener("sessionend",Vn),Mn.stop()};function St(R){R.preventDefault(),Vs("WebGLRenderer: Context Lost."),C=!0}function gt(){Vs("WebGLRenderer: Context Restored."),C=!1;const R=H.autoReset,G=Ve.enabled,K=Ve.autoUpdate,q=Ve.needsUpdate,W=Ve.type;Ae(),H.autoReset=R,Ve.enabled=G,Ve.autoUpdate=K,Ve.needsUpdate=q,Ve.type=W}function Jt(R){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ft(R){const G=R.target;G.removeEventListener("dispose",Ft),$n(G)}function $n(R){Xi(R),Z.remove(R)}function Xi(R){const G=Z.get(R).programs;G!==void 0&&(G.forEach(function(K){de.releaseProgram(K)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,q,W,Me){G===null&&(G=He);const ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=mi(R,G,K,q,W);T.setMaterial(q,ce);let Ue=K.index,Ie=1;if(q.wireframe===!0){if(Ue=ee.getWireframeAttribute(K),Ue===void 0)return;Ie=2}const Ke=K.drawRange,nt=K.attributes.position;let we=Ke.start*Ie,Xe=(Ke.start+Ke.count)*Ie;Me!==null&&(we=Math.max(we,Me.start*Ie),Xe=Math.min(Xe,(Me.start+Me.count)*Ie)),Ue!==null?(we=Math.max(we,0),Xe=Math.min(Xe,Ue.count)):nt!=null&&(we=Math.max(we,0),Xe=Math.min(Xe,nt.count));const bt=Xe-we;if(bt<0||bt===1/0)return;Le.setup(W,q,ye,K,Ue);let _t,xt=pe;if(Ue!==null&&(_t=ve.get(Ue),xt=se,xt.setIndex(_t)),W.isMesh)q.wireframe===!0?(T.setLineWidth(q.wireframeLinewidth*$e()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(W.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),T.setLineWidth(Dt*$e()),W.isLineSegments?xt.setMode(O.LINES):W.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else W.isPoints?xt.setMode(O.POINTS):W.isSprite&&xt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(st.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Dt=W._multiDrawStarts,Ne=W._multiDrawCounts,Bt=W._multiDrawCount,ct=Ue?ve.get(Ue).bytesPerElement:1,Ht=Z.get(q).currentProgram.getUniforms();for(let Kt=0;Kt<Bt;Kt++)Ht.setValue(O,"_gl_DrawID",Kt),xt.render(Dt[Kt]/ct,Ne[Kt])}else if(W.isInstancedMesh)xt.renderInstances(we,bt,W.count);else if(K.isInstancedBufferGeometry){const Dt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ne=Math.min(K.instanceCount,Dt);xt.renderInstances(we,bt,Ne)}else xt.render(we,bt)};function qi(R,G,K,q){I!==null&&R.isNodeMaterial&&I.setObject(q,R),le===!0&&Oe.setState(R,K,!1),R.transparent===!0&&R.side===2&&R.forceSinglePass===!1?(R.side=1,R.needsUpdate=!0,jn(R,G,q),R.side=0,R.needsUpdate=!0,jn(R,G,q),R.side=2):jn(R,G,q)}this.compile=function(R,G,K=null){K===null&&(K=R),I!==null&&I.renderStart(R,G,K),M=be.get(K),M.init(G),l.push(M),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),R!==K&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),he=this.localClippingEnabled,le=Oe.init(this.clippingPlanes,he),le===!0&&Oe.setGlobalState(this.clippingPlanes,G),I!==null&&Ve.render(M.state.shadowsArray,K,G);const q=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let ce=0;ce<Me.length;ce++){const ye=Me[ce];qi(ye,K,G,W),q.add(ye)}else qi(Me,K,G,W),q.add(Me)}),M=l.pop(),I!==null&&I.renderEnd(),q},this.compileAsync=function(R,G,K=null){const q=this.compile(R,G,K);return new Promise(W=>{function Me(){if(q.forEach(function(ce){const Ue=Z.get(ce).currentProgram;(Ue===void 0||Ue.isReady())&&q.delete(ce)}),q.size===0){W(R);return}setTimeout(Me,10)}st.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Yi=null;function Ma(R){Yi&&Yi(R)}function zn(){Mn.stop()}function Vn(){Mn.start()}const Mn=new ll;Mn.setAnimationLoop(Ma),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(R){Yi=R,Be.setAnimationLoop(R),R===null?Mn.stop():Mn.start()},Be.addEventListener("sessionstart",zn),Be.addEventListener("sessionend",Vn),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(R,G);const K=Be.enabled===!0&&Be.isPresenting===!0,q=S!==null&&(ne===null||K)&&S.begin(w,ne);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(G),G=Be.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,G,ne),M=be.get(R,l.length),M.init(G),M.state.textureUnits=Q.getTextureUnits(),l.push(M),fe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),oe.setFromProjectionMatrix(fe,2e3,G.reversedDepth),he=this.localClippingEnabled,le=Oe.init(this.clippingPlanes,he),u=Ee.get(R,d.length),u.init(),d.push(u),Be.enabled===!0&&Be.isPresenting===!0){const ce=w.xr.getDepthSensingMesh();ce!==null&&di(ce,G,-1/0,w.sortObjects)}di(R,G,0,w.sortObjects),u.finish(),I!==null&&I.updateLights(M.state.lightsArray),w.sortObjects===!0&&u.sort(Te,Ye),We=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,We&&je.addToRenderList(u,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Oe.beginShadows();const W=M.state.shadowsArray;if(Ve.render(W,R,G),le===!0&&Oe.endShadows(),(q&&S.hasRenderPass())===!1){const ce=u.opaque,ye=u.transmissive;if(M.setupLights(),G.isArrayCamera){const Ue=G.cameras;if(ye.length>0)for(let Ie=0,Ke=Ue.length;Ie<Ke;Ie++){const nt=Ue[Ie];Qn(ce,ye,R,nt)}We&&je.render(R);for(let Ie=0,Ke=Ue.length;Ie<Ke;Ie++){const nt=Ue[Ie];Zi(u,R,nt,nt.viewport)}}else ye.length>0&&Qn(ce,ye,R,G),We&&je.render(R),Zi(u,R,G)}ne!==null&&X===0&&(Q.updateMultisampleRenderTarget(ne),Q.updateRenderTargetMipmap(ne)),q&&S.end(w),R.isScene===!0&&R.onAfterRender(w,R,G),Le.resetDefaultState(),J=-1,te=null,l.pop(),l.length>0?(M=l[l.length-1],Q.setTextureUnits(M.state.textureUnits),le===!0&&Oe.setGlobalState(w.clippingPlanes,M.state.camera)):M=null,d.pop(),d.length>0?u=d[d.length-1]:u=null,I!==null&&I.renderEnd()};function di(R,G,K,q){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)M.pushLightProbeGrid(R);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(oe)){q&&ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const ce=ae.update(R),ye=R.material;ye.visible&&u.push(R,ce,ye,K,ke.z,null,G)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(oe))){const ce=ae.update(R),ye=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ke.copy(R.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ke.copy(ce.boundingSphere.center)),ke.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(ye)){const Ue=ce.groups;for(let Ie=0,Ke=Ue.length;Ie<Ke;Ie++){const nt=Ue[Ie],we=ye[nt.materialIndex];we&&we.visible&&u.push(R,ce,we,K,ke.z,nt,G)}}else ye.visible&&u.push(R,ce,ye,K,ke.z,null,G)}}const Me=R.children;for(let ce=0,ye=Me.length;ce<ye;ce++)di(Me[ce],G,K,q)}function Zi(R,G,K,q){const{opaque:W,transmissive:Me,transparent:ce}=R;M.setupLightsView(K),le===!0&&Oe.setGlobalState(w.clippingPlanes,K),q&&T.viewport(ie.copy(q)),W.length>0&&pi(W,G,K),Me.length>0&&pi(Me,G,K),ce.length>0&&pi(ce,G,K),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Qn(R,G,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){const we=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new cn(1,1,{generateMipmaps:!0,type:we?1016:1009,minFilter:1008,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Me=M.state.transmissionRenderTarget[q.id],ce=q.viewport||ie;Me.setSize(ce.z*w.transmissionResolutionScale,ce.w*w.transmissionResolutionScale);const ye=w.getRenderTarget(),Ue=w.getActiveCubeFace(),Ie=w.getActiveMipmapLevel();w.setRenderTarget(Me),w.getClearColor(rt),Qe=w.getClearAlpha(),Qe<1&&w.setClearColor(16777215,.5),w.clear(),We&&je.render(K);const Ke=w.toneMapping;w.toneMapping=0;const nt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),le===!0&&Oe.setGlobalState(w.clippingPlanes,q),pi(R,K,q),Q.updateMultisampleRenderTarget(Me),Q.updateRenderTargetMipmap(Me),st.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Xe=0,bt=G.length;Xe<bt;Xe++){const _t=G[Xe],{object:xt,geometry:Dt,material:Ne,group:Bt}=_t;if(Ne.side===2&&xt.layers.test(q.layers)){const ct=Ne.side;Ne.side=1,Ne.needsUpdate=!0,Gt(xt,K,q,Dt,Ne,Bt),Ne.side=ct,Ne.needsUpdate=!0,we=!0}}we===!0&&(Q.updateMultisampleRenderTarget(Me),Q.updateRenderTargetMipmap(Me))}w.setRenderTarget(ye,Ue,Ie),w.setClearColor(rt,Qe),nt!==void 0&&(q.viewport=nt),w.toneMapping=Ke}function pi(R,G,K){const q=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Me=R.length;W<Me;W++){const ce=R[W],{object:ye,geometry:Ue,group:Ie}=ce;let Ke=ce.material;Ke.allowOverride===!0&&q!==null&&(Ke=q),ye.layers.test(K.layers)&&Gt(ye,G,K,Ue,Ke,Ie)}}function Gt(R,G,K,q,W,Me){I!==null&&W.isNodeMaterial&&I.setObject(R,W),R.onBeforeRender(w,G,K,q,W,Me),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(w,G,K,q,R,Me),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,w.renderBufferDirect(K,G,q,W,R,Me),W.side=0,W.needsUpdate=!0,w.renderBufferDirect(K,G,q,W,R,Me),W.side=2):w.renderBufferDirect(K,G,q,W,R,Me),R.onAfterRender(w,G,K,q,W,Me)}function jn(R,G,K){G.isScene!==!0&&(G=He);const q=Z.get(R),W=M.state.lights,Me=M.state.shadowsArray,ce=W.state.version,ye=de.getParameters(R,W.state,Me,G,K,M.state.lightProbeGridArray),Ue=de.getProgramCacheKey(ye);let Ie=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,q.fog=G.fog;const Ke=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=ge.get(R.envMap||q.environment,Ke),q.envMapRotation=q.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",Ft),Ie=new Map,q.programs=Ie);let nt=Ie.get(Ue);if(nt!==void 0){if(q.currentProgram===nt&&q.lightsStateVersion===ce)return tn(R,ye),nt}else ye.uniforms=de.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,K,ye),R.onBeforeCompile(ye,w),nt=de.acquireProgram(ye,Ue),Ie.set(Ue,nt),q.uniforms=ye.uniforms;const we=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(we.clippingPlanes=Oe.uniform),tn(R,ye),q.needsLights=hn(R),q.lightsStateVersion=ce,q.needsLights&&(we.ambientLightColor.value=W.state.ambient,we.lightProbe.value=W.state.probe,we.sunLights.value=W.state.sun,we.sunLightShadows.value=W.state.sunShadow,we.directionalLights.value=W.state.directional,we.directionalLightShadows.value=W.state.directionalShadow,we.spotLights.value=W.state.spot,we.spotLightShadows.value=W.state.spotShadow,we.rectAreaLights.value=W.state.rectArea,we.ltc_1.value=W.state.rectAreaLTC1,we.ltc_2.value=W.state.rectAreaLTC2,we.pointLights.value=W.state.point,we.pointLightShadows.value=W.state.pointShadow,we.hemisphereLights.value=W.state.hemi,we.sunShadowMatrix.value=W.state.sunShadowMatrix,we.sunShadowCascade.value=W.state.sunShadowCascade,we.directionalShadowMatrix.value=W.state.directionalShadowMatrix,we.spotLightMatrix.value=W.state.spotLightMatrix,we.spotLightMap.value=W.state.spotLightMap,we.pointShadowMatrix.value=W.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=nt,q.uniformsList=null,nt}function ei(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Zr.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function tn(R,G){const K=Z.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function nn(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let K=0,q=R.length;K<q;K++){const W=R[K];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function mi(R,G,K,q,W){G.isScene!==!0&&(G=He),Q.resetTextureUnits();const Me=G.fog,ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?G.environment:null,ye=ne===null?w.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ut.workingColorSpace,Ue=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ie=ge.get(q.envMap||ce,Ue),Ke=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,nt=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),we=!!K.morphAttributes.position,Xe=!!K.morphAttributes.normal,bt=!!K.morphAttributes.color;let _t=0;q.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(_t=w.toneMapping);const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Dt=xt!==void 0?xt.length:0,Ne=Z.get(q),Bt=M.state.lights;if(le===!0&&(he===!0||R!==te)){const vt=R===te&&q.id===J;Oe.setState(q,R,vt)}let ct=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Bt.state.version||Ne.outputColorSpace!==ye||W.isBatchedMesh&&Ne.batching===!1||!W.isBatchedMesh&&Ne.batching===!0||W.isBatchedMesh&&Ne.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ne.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ne.instancing===!1||!W.isInstancedMesh&&Ne.instancing===!0||W.isSkinnedMesh&&Ne.skinning===!1||!W.isSkinnedMesh&&Ne.skinning===!0||W.isInstancedMesh&&Ne.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ne.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ne.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ne.instancingMorph===!1&&W.morphTexture!==null||Ne.envMap!==Ie||q.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Oe.numPlanes||Ne.numIntersection!==Oe.numIntersection)||Ne.vertexAlphas!==Ke||Ne.vertexTangents!==nt||Ne.morphTargets!==we||Ne.morphNormals!==Xe||Ne.morphColors!==bt||Ne.toneMapping!==_t||Ne.morphTargetsCount!==Dt||!!Ne.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Ne.__version=q.version);let Ht=Ne.currentProgram;ct===!0&&(Ht=jn(q,G,W),I&&q.isNodeMaterial&&I.onUpdateProgram(q,Ht,Ne));let Kt=!1,Sn=!1,rn=!1;const ht=Ht.getUniforms(),Et=Ne.uniforms;if(T.useProgram(Ht.program)&&(Kt=!0,Sn=!0,rn=!0),q.id!==J&&(J=q.id,Sn=!0),Ne.needsLights){const vt=nn(M.state.lightProbeGridArray,W);Ne.lightProbeGrid!==vt&&(Ne.lightProbeGrid=vt,Sn=!0)}if(Kt||te!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ht.setValue(O,"projectionMatrix",R.projectionMatrix),ht.setValue(O,"viewMatrix",R.matrixWorldInverse);const Pt=ht.map.cameraPosition;Pt!==void 0&&Pt.setValue(O,Se.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&ht.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ht.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,Sn=!0,rn=!0)}if(Ne.needsLights&&(Bt.state.sunShadowMap.length>0&&ht.setValue(O,"sunShadowMap",Bt.state.sunShadowMap,Q),Bt.state.directionalShadowMap.length>0&&ht.setValue(O,"directionalShadowMap",Bt.state.directionalShadowMap,Q),Bt.state.spotShadowMap.length>0&&ht.setValue(O,"spotShadowMap",Bt.state.spotShadowMap,Q),Bt.state.pointShadowMap.length>0&&ht.setValue(O,"pointShadowMap",Bt.state.pointShadowMap,Q)),W.isSkinnedMesh){ht.setOptional(O,W,"bindMatrix"),ht.setOptional(O,W,"bindMatrixInverse");const vt=W.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ht.setValue(O,"boneTexture",vt.boneTexture,Q))}W.isBatchedMesh&&(ht.setOptional(O,W,"batchingTexture"),ht.setValue(O,"batchingTexture",W._matricesTexture,Q),ht.setOptional(O,W,"batchingIdTexture"),ht.setValue(O,"batchingIdTexture",W._indirectTexture,Q),ht.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ht.setValue(O,"batchingColorTexture",W._colorsTexture,Q));const yn=K.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&z.update(W,K,Ht),(Sn||Ne.receiveShadow!==W.receiveShadow)&&(Ne.receiveShadow=W.receiveShadow,ht.setValue(O,"receiveShadow",W.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&G.environment!==null&&(Et.envMapIntensity.value=G.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Np()),Sn){if(ht.setValue(O,"toneMappingExposure",w.toneMappingExposure),Ne.needsLights&&qt(Et,rn),Me&&q.fog===!0&&ze.refreshFogUniforms(Et,Me),ze.refreshMaterialUniforms(Et,q,re,j,M.state.transmissionRenderTarget[R.id]),Ne.needsLights&&Ne.lightProbeGrid){const vt=Ne.lightProbeGrid;Et.probesSH.value=vt.texture,Et.probesMin.value.copy(vt.boundingBox.min),Et.probesMax.value.copy(vt.boundingBox.max),Et.probesResolution.value.copy(vt.resolution)}Zr.upload(O,ei(Ne),Et,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Zr.upload(O,ei(Ne),Et,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ht.setValue(O,"center",W.center),ht.setValue(O,"modelViewMatrix",W.modelViewMatrix),ht.setValue(O,"normalMatrix",W.normalMatrix),ht.setValue(O,"modelMatrix",W.matrixWorld),q.uniformsGroups!==void 0){const vt=q.uniformsGroups;for(let Pt=0,fn=vt.length;Pt<fn;Pt++){const Ji=vt[Pt];ue.update(Ji,Ht),ue.bind(Ji,Ht)}}return Ht}function qt(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function hn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(R,G,K){const q=Z.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(R.texture).__webglTexture=G,Z.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const K=Z.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){ne=R,Y=G,X=K;let q=null,W=!1,Me=!1;if(R){const ye=Z.get(R);if(ye.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(O.FRAMEBUFFER,ye.__webglFramebuffer),ie.copy(R.viewport),Fe.copy(R.scissor),Pe=R.scissorTest,T.viewport(ie),T.scissor(Fe),T.setScissorTest(Pe),J=-1;return}else if(ye.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(ye.__hasExternalTextures)Q.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(ye.__boundDepthTexture!==Ke){if(Ke!==null&&Z.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}const Ue=R.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Me=!0);const Ie=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ie[G])?q=Ie[G][K]:q=Ie[G],W=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?q=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(Ie)?q=Ie[K]:q=Ie,ie.copy(R.viewport),Fe.copy(R.scissor),Pe=R.scissorTest}else ie.copy(De).multiplyScalar(re).floor(),Fe.copy(qe).multiplyScalar(re).floor(),Pe=pt;if(K!==0&&(q=U),T.bindFramebuffer(O.FRAMEBUFFER,q)&&T.drawBuffers(R,q),T.viewport(ie),T.scissor(Fe),T.setScissorTest(Pe),W){const ye=Z.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,K)}else if(Me){const ye=G;for(let Ue=0;Ue<R.textures.length;Ue++){const Ie=Z.get(R.textures[Ue]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ue,Ie.__webglTexture,K,ye)}}else if(R!==null&&K!==0){const ye=Z.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,K)}J=-1};function gi(R){const G=Z.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=N.textureFormatReadable(R.format),G.__typeReadable=N.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,K,q,W,Me,ce,ye=0){if(!(R&&R.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ce!==void 0&&(Ue=Ue[ce]),Ue){T.bindFramebuffer(O.FRAMEBUFFER,Ue);try{const Ie=R.textures[ye],Ke=Ie.format,nt=Ie.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);const we=gi(Ie);if(we.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-q&&K>=0&&K<=R.height-W&&O.readPixels(G,K,q,W,_e.convert(Ke),_e.convert(nt),Me)}finally{const Ie=ne!==null?Z.get(ne).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,G,K,q,W,Me,ce,ye=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ce!==void 0&&(Ue=Ue[ce]),Ue)if(G>=0&&G<=R.width-q&&K>=0&&K<=R.height-W){T.bindFramebuffer(O.FRAMEBUFFER,Ue);const Ie=R.textures[ye],Ke=Ie.format,nt=Ie.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);const we=gi(Ie);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(G,K,q,W,_e.convert(Ke),_e.convert(nt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const bt=ne!==null?Z.get(ne).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,bt);const _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await bl(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Xe),O.deleteSync(_t),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,K=0){const q=Math.pow(2,-K),W=Math.floor(R.image.width*q),Me=Math.floor(R.image.height*q),ce=G!==null?G.x:0,ye=G!==null?G.y:0;Q.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,ce,ye,W,Me),T.unbindTexture()},this.copyTextureToTexture=function(R,G,K=null,q=null,W=0,Me=0){let ce,ye,Ue,Ie,Ke,nt,we,Xe,bt;const _t=R.isCompressedTexture?R.mipmaps[Me]:R.image;if(K!==null)ce=K.max.x-K.min.x,ye=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,Ie=K.min.x,Ke=K.min.y,nt=K.isBox3?K.min.z:0;else{const Et=Math.pow(2,-W);ce=Math.floor(_t.width*Et),ye=Math.floor(_t.height*Et),R.isDataArrayTexture?Ue=_t.depth:R.isData3DTexture?Ue=Math.floor(_t.depth*Et):Ue=1,Ie=0,Ke=0,nt=0}q!==null?(we=q.x,Xe=q.y,bt=q.z):(we=0,Xe=0,bt=0);const xt=_e.convert(G.format),Dt=_e.convert(G.type);let Ne;G.isData3DTexture?(Q.setTexture3D(G,0),Ne=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Q.setTexture2DArray(G,0),Ne=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(G,0),Ne=O.TEXTURE_2D),T.activeTexture(O.TEXTURE0),T.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Bt=T.getParameter(O.UNPACK_ROW_LENGTH),ct=T.getParameter(O.UNPACK_IMAGE_HEIGHT),Ht=T.getParameter(O.UNPACK_SKIP_PIXELS),Kt=T.getParameter(O.UNPACK_SKIP_ROWS),Sn=T.getParameter(O.UNPACK_SKIP_IMAGES);T.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),T.pixelStorei(O.UNPACK_SKIP_PIXELS,Ie),T.pixelStorei(O.UNPACK_SKIP_ROWS,Ke),T.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);const rn=R.isDataArrayTexture||R.isData3DTexture,ht=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const Et=Z.get(R),yn=Z.get(G),vt=Z.get(Et.__renderTarget),Pt=Z.get(yn.__renderTarget);T.bindFramebuffer(O.READ_FRAMEBUFFER,vt.__webglFramebuffer),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let fn=0;fn<Ue;fn++)rn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,W,nt+fn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(G).__webglTexture,Me,bt+fn)),O.blitFramebuffer(Ie,Ke,ce,ye,we,Xe,ce,ye,O.DEPTH_BUFFER_BIT,O.NEAREST);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||Z.has(R)){const Et=Z.get(R),yn=Z.get(G);T.bindFramebuffer(O.READ_FRAMEBUFFER,F),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let vt=0;vt<Ue;vt++)rn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.__webglTexture,W,nt+vt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Et.__webglTexture,W),ht?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yn.__webglTexture,Me,bt+vt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yn.__webglTexture,Me),W!==0?O.blitFramebuffer(Ie,Ke,ce,ye,we,Xe,ce,ye,O.COLOR_BUFFER_BIT,O.NEAREST):ht?O.copyTexSubImage3D(Ne,Me,we,Xe,bt+vt,Ie,Ke,ce,ye):O.copyTexSubImage2D(Ne,Me,we,Xe,Ie,Ke,ce,ye);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ht?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Ne,Me,we,Xe,bt,ce,ye,Ue,xt,Dt,_t.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,Me,we,Xe,bt,ce,ye,Ue,xt,_t.data):O.texSubImage3D(Ne,Me,we,Xe,bt,ce,ye,Ue,xt,Dt,_t):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,we,Xe,ce,ye,xt,Dt,_t.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,we,Xe,_t.width,_t.height,xt,_t.data):O.texSubImage2D(O.TEXTURE_2D,Me,we,Xe,ce,ye,xt,Dt,_t);T.pixelStorei(O.UNPACK_ROW_LENGTH,Bt),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),T.pixelStorei(O.UNPACK_SKIP_PIXELS,Ht),T.pixelStorei(O.UNPACK_SKIP_ROWS,Kt),T.pixelStorei(O.UNPACK_SKIP_IMAGES,Sn),Me===0&&G.generateMipmaps&&O.generateMipmap(Ne),T.unbindTexture()},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){Y=0,X=0,ne=null,T.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const ir=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:4,AddEquation:100,AddOperation:2,AdditiveBlending:2,AgXToneMapping:6,AlphaFormat:1021,AlwaysCompare:519,AlwaysDepth:1,AlwaysStencilFunc:519,ArcCurve:Wo,ArrayCamera:al,BackSide:1,BasicDepthPacking:3200,Box3:hi,BoxGeometry:Jn,BufferAttribute:_n,BufferGeometry:yt,ByteType:1010,Camera:da,CatmullRomCurve3:Ni,CineonToneMapping:3,ClampToEdgeWrapping:1001,Color:lt,ColorManagement:ut,ConeGeometry:Bi,ConstantAlphaFactor:213,ConstantColorFactor:211,CubeCamera:sl,CubeDepthTexture:Ho,CubeReflectionMapping:301,CubeRefractionMapping:302,CubeTexture:na,CubeUVReflectionMapping:306,CubicBezierCurve:sa,CubicBezierCurve3:Xo,CullFaceBack:1,CullFaceFront:2,CullFaceNone:0,Curve:vn,CurvePath:ha,CustomBlending:5,CustomToneMapping:5,CylinderGeometry:xr,Data3DTexture:Go,DataArrayTexture:Qs,DataTexture:ko,DepthFormat:1026,DepthStencilFormat:1027,DepthTexture:zi,DirectionalLight:Xs,DoubleSide:2,DstAlphaFactor:206,DstColorFactor:208,EllipseCurve:is,EqualCompare:514,EqualDepth:4,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,Euler:Gn,EventDispatcher:Kn,ExternalTexture:ia,ExtrudeGeometry:gr,Float32BufferAttribute:tt,FloatType:1015,FrontSide:0,Frustum:ts,GLSL3:zs,GreaterCompare:516,GreaterDepth:6,GreaterEqualCompare:518,GreaterEqualDepth:5,Group:Tt,HalfFloatType:1016,HemisphereLight:il,IcosahedronGeometry:rs,ImageUtils:Oo,IntType:1013,KeepStencilOp:7680,Layers:jr,LessCompare:513,LessDepth:2,LessEqualCompare:515,LessEqualDepth:3,Light:fa,LightShadow:rl,LineCurve:aa,LineCurve3:oa,LinearFilter:1006,LinearMipmapLinearFilter:1008,LinearMipmapNearestFilter:1007,LinearSRGBColorSpace:ur,LinearToneMapping:1,LinearTransfer:hr,Material:fi,MathUtils:ai,Matrix2:Ys,Matrix3:et,Matrix4:At,MaxEquation:104,Mesh:un,MeshBasicMaterial:Oi,MeshDepthMaterial:tl,MeshDistanceMaterial:nl,MeshStandardMaterial:el,MinEquation:103,MirroredRepeatWrapping:1002,MixOperation:1,MultiplyBlending:4,MultiplyOperation:0,NearestFilter:1003,NearestMipmapLinearFilter:1005,NearestMipmapNearestFilter:1004,NeutralToneMapping:7,NeverCompare:512,NeverDepth:0,NoBlending:0,NoColorSpace:"",NoToneMapping:0,NormalBlending:1,NotEqualCompare:517,NotEqualDepth:7,Object3D:Ot,ObjectSpaceNormalMap:1,OneFactor:201,OneMinusConstantAlphaFactor:214,OneMinusConstantColorFactor:212,OneMinusDstAlphaFactor:207,OneMinusDstColorFactor:209,OneMinusSrcAlphaFactor:205,OneMinusSrcColorFactor:203,OrthographicCamera:vr,PCFShadowMap:1,PCFSoftShadowMap:2,PMREMGenerator:Zs,Path:ks,PerspectiveCamera:en,Plane:On,PlaneGeometry:Hi,PolyhedronGeometry:ns,QuadraticBezierCurve:la,QuadraticBezierCurve3:ca,Quaternion:ui,R11_EAC_Format:37488,RED_GREEN_RGTC2_Format:36285,RED_RGTC1_Format:36283,REVISION:"186",RG11_EAC_Format:37490,RGBAFormat:1023,RGBAIntegerFormat:1033,RGBA_ASTC_10x10_Format:37819,RGBA_ASTC_10x5_Format:37816,RGBA_ASTC_10x6_Format:37817,RGBA_ASTC_10x8_Format:37818,RGBA_ASTC_12x10_Format:37820,RGBA_ASTC_12x12_Format:37821,RGBA_ASTC_4x4_Format:37808,RGBA_ASTC_5x4_Format:37809,RGBA_ASTC_5x5_Format:37810,RGBA_ASTC_6x5_Format:37811,RGBA_ASTC_6x6_Format:37812,RGBA_ASTC_8x5_Format:37813,RGBA_ASTC_8x6_Format:37814,RGBA_ASTC_8x8_Format:37815,RGBA_BPTC_Format:36492,RGBA_ETC2_EAC_Format:37496,RGBA_PVRTC_2BPPV1_Format:35843,RGBA_PVRTC_4BPPV1_Format:35842,RGBA_S3TC_DXT1_Format:33777,RGBA_S3TC_DXT3_Format:33778,RGBA_S3TC_DXT5_Format:33779,RGBFormat:1022,RGB_BPTC_SIGNED_Format:36494,RGB_BPTC_UNSIGNED_Format:36495,RGB_ETC1_Format:36196,RGB_ETC2_Format:37492,RGB_PVRTC_2BPPV1_Format:35841,RGB_PVRTC_4BPPV1_Format:35840,RGB_S3TC_DXT1_Format:33776,RGFormat:1030,RGIntegerFormat:1031,RawShaderMaterial:jo,Ray:ta,Raycaster:ol,RedFormat:1028,RedIntegerFormat:1029,ReinhardToneMapping:2,RenderTarget:Bo,RepeatWrapping:1e3,ReverseSubtractEquation:102,RingGeometry:_r,SIGNED_R11_EAC_Format:37489,SIGNED_RED_GREEN_RGTC2_Format:36286,SIGNED_RED_RGTC1_Format:36284,SIGNED_RG11_EAC_Format:37491,SRGBColorSpace:Zt,SRGBTransfer:Mt,Scene:Vo,ShaderChunk:it,ShaderLib:gn,ShaderMaterial:xn,ShadowMaterial:Ko,Shape:Gi,ShapeGeometry:ss,ShapeUtils:Pn,ShortType:1011,Sphere:es,SphereGeometry:as,SplineCurve:ua,SrcAlphaFactor:204,SrcAlphaSaturateFactor:210,SrcColorFactor:202,StaticDrawUsage:35044,SubtractEquation:101,SubtractiveBlending:3,TangentSpaceNormalMap:0,Texture:kt,TextureSource:Qr,TorusGeometry:Zn,Triangle:ln,TubeGeometry:os,UVMapping:300,Uint16BufferAttribute:js,Uint32BufferAttribute:ea,UniformsLib:Ce,UniformsUtils:Qo,UnsignedByteType:1009,UnsignedInt101111Type:35899,UnsignedInt248Type:1020,UnsignedInt5999Type:35902,UnsignedIntType:1014,UnsignedShort4444Type:1017,UnsignedShort5551Type:1018,UnsignedShortType:1012,VSMShadowMap:3,Vector2:xe,Vector3:B,Vector4:wt,WebGLCoordinateSystem:2e3,WebGLCubeRenderTarget:pa,WebGLRenderTarget:cn,WebGLRenderer:gl,WebGLUtils:pl,WebGPUCoordinateSystem:2001,WebXRController:Yr,ZeroFactor:200,createCanvasElement:Fo,error:dt,log:Vs,warn:Je,warnOnce:oi},Symbol.toStringTag,{value:"Module"}));function Fp(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new yt;let h=0;for(let m=0;m<i.length;++m){const _=i[m];let g=0;if(t!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in _.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;s[v]===void 0&&(s[v]=[]),s[v].push(_.attributes[v]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(o!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in _.morphAttributes){if(!r.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;a[v]===void 0&&(a[v]=[]),a[v].push(_.morphAttributes[v])}if(e){let v;if(t)v=_.index.count;else if(_.attributes.position!==void 0)v=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,v,m),h+=v}}if(t){let m=0;const _=[];for(let g=0;g<i.length;++g){const v=i[g].index;for(let y=0;y<v.count;++y)_.push(v.getX(y)+m);m+=i[g].attributes.position.count}c.setIndex(_)}for(const m in s){const _=No(s[m]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;c.setAttribute(m,_)}for(const m in a){const _=a[m][0].length;if(_!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[m]=[];for(let g=0;g<_;++g){const v=[];for(let P=0;P<a[m].length;++P)v.push(a[m][P][g]);const y=No(v);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;c.morphAttributes[m].push(y)}}}return c}function No(i){let e,t,n,r=-1,s=0;for(let h=0;h<i.length;++h){const m=i[h];if(e===void 0&&(e=m.array.constructor),e!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=m.normalized),n!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=m.gpuType),r!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=m.count*t}const a=new e(s),o=new _n(a,t,n);let c=0;for(let h=0;h<i.length;++h){const m=i[h];if(m.isInterleavedBufferAttribute){const _=c/t;for(let g=0,v=m.count;g<v;g++)for(let y=0;y<t;y++){const P=m.getComponent(g,y);o.setComponent(g+_,y,P)}}else a.set(m.array,c);c+=m.count*t}return r!==void 0&&(o.gpuType=r),o}const _l=[[-2.29,.633,6.31],[-1.5,.633,5.97],[-.57,.633,5.2],[-.26,.633,4.58],[-.04,.633,3.83],[.23,.633,3.2],[.07,.633,2.57],[-.08,.633,1.84],[-.31,.633,1.19],[-.28,.633,.63],[.04,.633,-.03],[.21,.633,-.72],[.06,.633,-1.45],[.06,.633,-2.1],[.43,.66,-2.8],[.56,.87,-3.35],[.61,1.23,-3.99],[.98,1.235,-4.46],[1.43,1.235,-4.68]];function Up(i){return new i.CatmullRomCurve3(_l.map(e=>new i.Vector3(...e)),!1,"catmullrom",.38)}const Op={qd_zhongshan_road:{x:-2.45,z:-2.45,size:.83},qd_badaguan:{x:-2.45,z:.78,size:.86},qd_second_beach:{x:1.2,z:-2.52,size:.78},qd_olympic_sailing:{x:3.33,z:-2.02,y:.405,size:1.02},qd_fushan_bay:{x:3.48,z:.15,y:.405,size:.97},qd_signal_hill:{x:-3.52,z:-1.36,size:.78},qd_xiaoyu_hill:{x:-3.48,z:-.24,size:.78},qd_laoshan:{x:-3.47,z:-2.56,size:.9},qd_underwater:{x:.78,z:-1.57,size:.66},qd_minjiang_road:{x:-2.47,z:-1.36,size:.78},qd_yunxiao_road:{x:-2.47,z:-.24,size:.78},wh_banyue_bay:{x:-2.27,z:-4.13,size:.83},wh_maotou_hill:{x:-3.4,z:-4.15,size:.84},wh_international_beach:{x:-1.11,z:-6.53,size:.83},wh_torch_eighth:{x:-2.27,z:-5.35,size:.86},wh_liugong_island:{x:3.8,z:-6.23,y:.405,size:1},wh_naxianghai:{x:3.79,z:-4.98,y:.405,size:.92},wh_bluewis:{x:3.58,z:-3.65,y:.405,size:1.02},wh_hanlefang:{x:-3.42,z:-5.35,size:.84},wh_weihai_park:{x:-1.1,z:-5.35,size:.77},wh_yuehai_park:{x:-1.1,z:-4.13,size:.76},wh_oulefang:{x:-2.28,z:-6.54,size:.83},wh_city_museum:{x:-3.43,z:-6.54,size:.87},lyg_democracy_road:{x:-3.42,z:3.74,size:.95},lyg_yanhe_lane:{x:-2.19,z:3.79,size:.92},rz_wanpingkou:{x:-1.66,z:1.62,size:.85},rz_dongyi_town:{x:-2.88,z:2.07,size:.99},ha_li_canal:{x:-3.45,z:6.7,size:.84,optional:!0},ha_yumatou:{x:-2.39,z:6.85,size:.82,optional:!0},ha_hexia_town:{x:-3.54,z:4.97,size:.84,optional:!0},wuhu_riverside:{x:-.93,z:6.88,size:.88}};function Bp(i,e,t){return e.map(n=>{const r=Op[n.id];if(!r)throw new Error(`Missing landmark placement: ${n.id}`);const s=n.group;s.updateMatrixWorld(!0);const a=new i.Box3().setFromObject(s),o=a.getSize(new i.Vector3),c=Math.min(r.size/Math.max(o.x,o.z,.01),1.35/Math.max(o.y,.01));s.scale.setScalar(c);const h=a.getCenter(new i.Vector3);s.position.set(r.x-h.x*c,(r.y??.603)-a.min.y*c,r.z-h.z*c),s.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),t.add(s),s.updateMatrixWorld(!0);const m=new i.Box3().setFromObject(s),_=m.getCenter(new i.Vector3);return{...n,optional:!!r.optional,bounds:m,focus:_.toArray(),position:[r.x,r.y??.603,r.z]}})}function Gp(i){const t=Object.fromEntries(Object.entries({cream:"#fff1d3",paper:"#e6d3ad",white:"#fff9e9",roof:"#bd6344",coral:"#ee7950",water:"#439ba7",shallow:"#91c7bf",navy:"#274b59",glass:"#a5cad0",leaf:"#78986c",lightLeaf:"#a8b776",pine:"#47796d",trunk:"#7e7055",rock:"#b7b39b",lightRock:"#ddd1b3",sand:"#e9d9ad",gold:"#b49155"}).map(([f,p])=>[f,new i.MeshStandardMaterial({color:p,roughness:.95,flatShading:!0})])),n=[],r=(f,p,b,A=0,x=0,u=0)=>{const M=new i.Mesh(p,t[b]);return M.position.set(A,x,u),M.castShadow=!0,M.receiveShadow=!0,f.add(M),M},s=(f,p,b,A,x,u=0,M=b/2,d=0)=>r(f,new i.BoxGeometry(p,b,A),x,u,M,d),a=(f,p,b,A,x,u=0,M=A/2,d=0,l=8)=>r(f,new i.CylinderGeometry(p,b,A,l),x,u,M,d),o=(f,p,b,A,x,u,M,d="rock")=>{const l=r(f,new i.IcosahedronGeometry(1,0),d,p,b,A);return l.scale.set(x,u,M),l};function c(f,p,b,A,x=0,u=0,M=0){const d=new i.Shape;p.forEach(([S,w],C)=>C?d.lineTo(S,w):d.moveTo(S,w)),d.closePath();const l=new i.ExtrudeGeometry(d,{depth:b,bevelEnabled:!1,curveSegments:1});return l.translate(0,0,-b/2),r(f,l,A,x,u,M)}function h(f,p,b,A,x,u,M,d="roof"){return c(f,[[-p/2,0],[p/2,0],[0,b]],A,d,x,u,M)}function m(f,p,b,A=.1,x=.045,u=!1){a(f,.011,.016,A*.78,"trunk",p,x+A*.39,b,5),u?(a(f,0,A*.62,A*.85,"pine",p,x+A*.88,b,6),a(f,0,A*.45,A*.7,"leaf",p,x+A*1.18,b,6)):(o(f,p,x+A,b,A*.63,A*.61,A*.55,"leaf"),o(f,p+A*.3,x+A*.92,b+A*.1,A*.38,A*.4,A*.4,"lightLeaf"))}function _(f,p=.88,b=.62,A="paper"){const x=a(f,1,1,.04,A,0,.02,0,12);return x.scale.set(p/2,1,b/2),x}function g(f,p,b,A,x,u,M=3,d=2){for(let l=0;l<d;l++)for(let S=0;S<M;S++){const w=p+(S-(M-1)/2)*x/M,C=b+(l-(d-1)/2)*u/d;s(f,x/M*.5,u/d*.56,.009,"navy",w,C,A),s(f,.007,u/d*.57,.012,"cream",w,C,A+.003)}}function v(f,p,b,A=.2,x=.19,u=.25,M=.04,d="roof"){s(f,A,u,x,"cream",p,M+u/2,b),h(f,A+.028,.083,x+.025,p,M+u,b,d),g(f,p,M+u*.55,b+x/2+.005,A*.83,u*.68,2,2),s(f,A+.008,.015,x+.008,"paper",p,M+.045,b)}function y(f,p,b,A,x,u=4,M=.027,d=.025){for(let l=0;l<u;l++)s(f,x,d*(l+1),M,"paper",p,A+d*(l+1)/2,b-l*M)}function P(f,p,b){b.updateMatrixWorld(!0);let A=new i.Box3().setFromObject(b);const x=new i.Vector3;A.getSize(x);const u=Math.min(.96/Math.max(x.x,x.z),.94/x.y);for(const d of b.children)d.position.multiplyScalar(u),d.scale.multiplyScalar(u);b.updateMatrixWorld(!0),A=new i.Box3().setFromObject(b);const M=new i.Vector3;A.getCenter(M);for(const d of b.children)d.position.sub(new i.Vector3(M.x,A.min.y,M.z));b.updateMatrixWorld(!0),A=new i.Box3().setFromObject(b),A.getSize(x),b.name=f,b.userData={landmarkId:f,city:"qingdao",referenceBoard:"design/model-reference/qingdao/qingdao-low-poly-board.png"},n.push({id:f,name:p,city:"qingdao",group:b,footprint:[x.x,x.z],height:x.y})}{const f=new i.Group;_(f,.84,.63),v(f,-.21,-.075,.22,.24,.36),v(f,.02,-.075,.2,.24,.32),v(f,.225,-.075,.2,.24,.39);for(const[p,b]of[[-.21,.24],[.02,.22],[.225,.25]]){const A=s(f,.18,.025,.095,p===.02?"pine":"coral",p,.135,.1);A.rotation.x=.18,s(f,.052,.09,.015,"navy",p,.086,.063),a(f,.012,.013,.08,"trunk",p-.075,.08,.17,5),a(f,.035,.035,.012,"paper",p-.075,.126,.17,8),s(f,.025,.046,.028,"paper",p+.032,b+.245,-.05)}m(f,-.32,.2,.13),m(f,.32,.19,.11);for(const p of[-.3,.29])a(f,.006,.008,.2,"navy",p,.14,.255,5),o(f,p,.245,.255,.017,.025,.017,"gold");P("qd_zhongshan_road","中山路",f)}{const f=new i.Group;_(f,.78,.63),v(f,.08,0,.32,.27,.37),a(f,.11,.125,.51,"lightRock",-.145,.295,.015,10),a(f,.127,.127,.037,"paper",-.145,.56,.015,10);for(let p=0;p<10;p++){const b=p*Math.PI/5;a(f,.017,.019,.065,"lightRock",-.145+Math.cos(b)*.112,.607,.015+Math.sin(b)*.112,4)}for(const p of[.2,.35,.49])for(let b=0;b<5;b++){const A=Math.PI*.08+b*Math.PI/4,x=s(f,.036,.074,.012,"navy",-.145+Math.cos(A)*.117,p,.015+Math.sin(A)*.117);x.rotation.y=Math.PI/2-A}a(f,0,.075,.16,"pine",.15,.535,-.03,8),a(f,.006,.006,.09,"trunk",.15,.66,-.03,5),y(f,.01,.215,.04,.145,4,.032,.026);for(const[p,b]of[[-.29,-.1],[.3,.1],[-.27,.22],[.27,-.2]])m(f,p,b,.11);P("qd_badaguan","八大关",f)}{const f=new i.Group;_(f,.91,.68,"sand"),a(f,1,1,.018,"water",-.085,.052,.12,14).scale.set(.32,1,.2),a(f,1,1,.018,"shallow",-.08,.063,.125,14).scale.set(.27,1,.168);for(let A=0;A<7;A++)o(f,-.36+A*.09,.089,-.01+Math.sin(A*.6)*.03,.064,.05,.055,A%2?"lightRock":"rock");s(f,.31,.065,.065,"lightRock",-.19,.077,-.15),v(f,.27,-.13,.11,.095,.19,.11);for(const A of[.23,.31])s(f,.012,.09,.012,"trunk",A,.088,-.13);for(const[A,x]of[[-.27,-.24],[-.06,-.23],[.14,.16]])a(f,.005,.005,.13,"trunk",A,.12,x,5),a(f,0,.07,.035,"cream",A,.204,x,8),s(f,.045,.016,.083,"paper",A,.064,x+.02);a(f,.004,.004,.14,"trunk",.28,.365,-.11,5),c(f,[[0,0],[.062,-.018],[0,-.035]],.009,"coral",.28,.425,-.11),P("qd_second_beach","第二海水浴场",f)}{const f=new i.Group;_(f,.94,.69,"water"),s(f,.8,.06,.18,"paper",0,.074,-.1),s(f,.63,.11,.135,"glass",.03,.154,-.105);for(let A=0;A<3;A++){const x=[];for(let u=0;u<=6;u++){const M=-.115+u*.0383;x.push([M,.033+Math.sin(u/6*Math.PI)*.15])}for(let u=6;u>=0;u--){const M=-.115+u*.0383;x.push([M,.02+Math.sin(u/6*Math.PI)*.15])}c(f,x,.158,"white",-.21+A*.235,.215,-.105)}for(let A=0;A<8;A++)s(f,.008,.12,.012,"navy",-.28+A*.088,.169,-.032);s(f,.44,.026,.065,"trunk",-.12,.082,.135),s(f,.035,.023,.18,"trunk",-.29,.08,.21);const p=new i.Group;f.add(p),p.position.set(.17,.062,.215),a(p,.09,.065,.07,"white",0,.055,0,6).scale.set(1.55,1,.42),s(p,.19,.018,.045,"paper",0,.095,0),a(p,.005,.006,.42,"trunk",0,.297,0,5),c(p,[[.013,0],[.013,.36],[.135,.025]],.008,"white",0,.117,0),c(p,[[-.014,0],[-.014,.29],[-.12,.012]],.008,"cream",0,.117,0);for(const A of[-.39,.39])a(f,.004,.004,.26,"trunk",A,.247,-.16,5),c(f,[[0,0],[.04,-.01],[0,-.028]],.008,"coral",A,.373,-.16);P("qd_olympic_sailing","奥帆中心",f)}{const f=new i.Group;_(f,.97,.73,"water"),a(f,1,1,.018,"sand",0,.052,-.145,14).scale.set(.43,1,.15);const b=[[-.34,.25,.073],[-.245,.36,.078],[-.14,.43,.09],[-.03,.62,.087],[.075,.56,.085],[.18,.34,.08],[.28,.41,.075],[.36,.26,.06]];for(const[x,u,M]of b){s(f,M,u,.075,x===-.03?"glass":"cream",x,.062+u/2,-.17),h(f,M,.026,.077,x,.062+u,-.17,"coral");for(let d=0;d<Math.floor(u/.057);d++)for(const l of[-.019,.019])s(f,.01,.025,.006,"glass",x+l,.099+d*.052,-.129)}for(let x=0;x<9;x++)m(f,-.38+x*.094,-.045,.048,.055);for(let x=0;x<10;x++){const u=.25+x*.26,M=Math.cos(u)*.38,d=.1+Math.sin(u)*.1;s(f,.039,.023,.027,"paper",M,.071,d)}a(f,.035,.026,.035,"white",-.1,.092,.23,6).scale.set(1.5,1,.5),c(f,[[0,0],[0,.13],[.07,0]],.006,"white",-.1,.113,.23),P("qd_fushan_bay","浮山湾",f)}{const f=new i.Group;_(f,.71,.63);for(const[b,A,x,u]of[[-.19,.12,.16,.12],[.22,.13,.14,.11],[-.2,-.18,.12,.12],[.19,-.19,.12,.16]])o(f,b,u*.67,A,x,u,.13,"lightRock");a(f,.106,.133,.34,"lightRock",0,.27,0,12),a(f,.145,.145,.027,"cream",0,.451,0,12);for(let b=0;b<12;b++){const A=b*Math.PI/6,x=s(f,.018,.087,.046,"cream",Math.cos(A)*.134,.495,Math.sin(A)*.134);x.rotation.y=-A+Math.PI/2}const p=r(f,new i.IcosahedronGeometry(.157,1),"coral",0,.657,0);p.scale.y=.94,a(f,.151,.151,.047,"navy",0,.652,0,12);for(let b=0;b<12;b++){const A=b*Math.PI/6,x=s(f,.007,.051,.013,"cream",Math.cos(A)*.151,.652,Math.sin(A)*.151);x.rotation.y=-A+Math.PI/2}a(f,.004,.004,.075,"trunk",0,.838,0,5);for(const[b,A]of[[-.24,-.06],[.23,-.06],[-.28,.16],[.28,.16]])m(f,b,A,.1,.06,!0);y(f,0,.28,.038,.15,6,.028,.026),g(f,0,.275,.126,.12,.14,2,1),P("qd_signal_hill","信号山",f)}{const f=new i.Group;_(f,.75,.65),o(f,0,.16,0,.26,.19,.22,"lightRock"),o(f,-.2,.12,.12,.13,.11,.12),o(f,.22,.12,-.02,.13,.12,.13),a(f,.17,.19,.045,"paper",0,.335,0,8);for(let p=0;p<6;p++){const b=p*Math.PI/3;a(f,.011,.013,.2,"roof",Math.cos(b)*.115,.455,Math.sin(b)*.115,6)}a(f,.155,.155,.026,"cream",0,.563,0,6),a(f,.088,.205,.1,"pine",0,.625,0,6),a(f,.018,.087,.12,"pine",0,.735,0,6);for(let p=0;p<6;p++){const b=p*Math.PI/3,A=c(f,[[0,0],[.069,.033],[.061,.018],[0,-.012]],.016,"pine",Math.cos(b)*.174,.591,Math.sin(b)*.174);A.rotation.y=-b}a(f,.018,.024,.038,"gold",0,.814,0,6),y(f,.01,.285,.04,.125,7,.024,.036);for(const[p,b]of[[-.29,-.09],[.26,-.11],[-.27,.17],[.28,.19]])m(f,p,b,.11,.07,!0);P("qd_xiaoyu_hill","小鱼山",f)}{const f=new i.Group;_(f,.88,.71,"water"),o(f,-.13,.23,-.085,.23,.26,.23,"lightRock"),o(f,.11,.29,-.12,.21,.34,.19),o(f,-.29,.18,-.12,.12,.2,.14,"lightRock"),o(f,.28,.18,-.11,.13,.22,.13);const p=o(f,.06,.6,-.14,.1,.24,.095,"lightRock");p.rotation.z=.12,o(f,-.14,.45,-.11,.11,.18,.09,"lightRock");for(const[A,x,u]of[[-.26,-.22,.21],[-.2,.03,.2],[.25,-.21,.18],[.27,.09,.12],[0,-.28,.25],[-.32,-.05,.12]])m(f,A,x,.075,u,!0);for(const[A,x,u]of[[-.27,.045,.28],[-.15,.03,.43],[.12,.025,.39],[.285,.02,.27],[.32,.15,.1]])m(f,A,x,.065,u,!0);v(f,-.06,.08,.105,.09,.087,.2),v(f,.09,.085,.095,.085,.075,.13),v(f,.21,.085,.082,.072,.07,.09);for(const[A,x]of[[-.28,.2],[-.17,.24],[.28,.23]])o(f,A,.07,x,.055,.06,.045,"lightRock");a(f,1,1,.012,"shallow",.03,.054,.235,10).scale.set(.17,1,.065),P("qd_laoshan","崂山",f)}{const f=new i.Group;_(f,.78,.6);const p=[];for(let u=0;u<=10;u++){const M=u/10*Math.PI;p.push([Math.cos(M)*.28,Math.sin(M)*.27])}p.push([-.28,-.03],[.28,-.03]),c(f,p,.26,"water",0,.085,0);const b=[];for(let u=0;u<=10;u++){const M=u/10*Math.PI;b.push([Math.cos(M)*.2,Math.sin(M)*.2])}b.push([-.2,0],[.2,0]),c(f,b,.018,"navy",0,.087,.139);for(let u=0;u<9;u++){const M=u/8*Math.PI,d=s(f,.022,.063,.023,"cream",Math.cos(M)*.235,.085+Math.sin(M)*.232,.16);d.rotation.z=M-Math.PI/2}s(f,.08,.105,.02,"glass",0,.137,.16),y(f,0,.275,.04,.3,3,.032,.014);for(const u of[-.23,.23])a(f,.01,.012,.29,"cream",u,.497,-.035,6);const A=c(f,[[-.23,.04],[-.085,.018],[0,.08],[.085,.018],[.23,.04],[.14,-.035],[.05,-.025],[0,-.065],[-.05,-.025],[-.14,-.035]],.029,"water",0,.6,-.02);A.rotation.z=-.1,o(f,0,.576,.009,.058,.026,.052,"white");const x=s(f,.012,.15,.012,"navy",-.025,.491,-.02);x.rotation.z=-.28,m(f,-.32,.12,.085),m(f,.32,.1,.085),P("qd_underwater","青岛海底世界",f)}{const f=new i.Group;_(f,.83,.65);for(const p of[-.265,.265])s(f,.2,.3,.28,"cream",p,.195,-.015),h(f,.22,.085,.3,p,.345,-.015),g(f,p,.265,.13,.16,.085,2,1);s(f,.66,.097,.15,"roof",0,.295,.025),h(f,.73,.08,.21,0,.348,.025),s(f,.255,.047,.018,"navy",0,.3,.108),s(f,.68,.023,.028,"water",0,.239,.1);for(const p of[-.17,.17])s(f,.025,.17,.028,"coral",p,.143,.09);s(f,.245,.026,.38,"sand",0,.053,0);for(let p=0;p<5;p++){const b=.11-p*.067;a(f,.007,.007,.07,"trunk",-.09,.1,b,5),o(f,-.09,.15,b,.021,.028,.021,"coral")}for(const p of[-.27,.27]){const b=s(f,.19,.027,.09,"pine",p,.166,.163);b.rotation.x=.14,s(f,.06,.1,.017,"navy",p,.1,.135)}m(f,-.345,.22,.09),m(f,.345,.22,.09),P("qd_minjiang_road","闽江路餐饮街区",f)}{const f=new i.Group;_(f,.86,.64),v(f,0,-.085,.56,.25,.31),g(f,0,.274,.044,.47,.087,4,1);for(const p of[-.18,0,.18]){const b=s(f,.17,.023,.115,"coral",p,.174,.095);b.rotation.x=.14;for(let A=0;A<3;A++){const x=s(f,.02,.025,.116,"cream",p-.055+A*.055,.176,.095);x.rotation.x=.14}s(f,.093,.09,.016,"navy",p,.1,.045)}for(const p of[-.17,.17]){a(f,.034,.034,.012,"paper",p,.122,.21,8),a(f,.008,.01,.074,"trunk",p,.079,.21,5);for(const b of[-.055,.055])s(f,.035,.06,.035,"trunk",p+b,.075,.205);a(f,.025,.025,.006,"white",p,.132,.21,8);for(const b of[-.01,.012])o(f,p+b,.139,.21,.008,.005,.007,"sand")}for(const p of[-.29,.29])a(f,.005,.005,.095,"trunk",p,.176,.08,5),o(f,p,.204,.08,.026,.034,.026,"coral");o(f,-.044,.381,.06,.035,.028,.012,"sand"),o(f,.045,.38,.06,.025,.018,.014,"coral");for(const p of[.013,.078]){const b=s(f,.022,.01,.013,"coral",p,.395,.06);b.rotation.z=p<.05?-.5:.5}m(f,-.34,-.2,.09),m(f,.34,-.2,.09),P("qd_yunxiao_road","云霄路餐饮街区",f)}return n}function zp(i){const t=Object.fromEntries(Object.entries({cream:"#f4e6cb",sand:"#e7c89c",paper:"#fff6e6",coral:"#d98069",rust:"#a96550",teal:"#68a5a0",sea:"#80c2c2",deep:"#405e67",sage:"#92ad83",pine:"#64836a",gold:"#e6b967",stone:"#c8ba9f"}).map(([d,l])=>[d,new i.MeshStandardMaterial({color:l,roughness:.96,metalness:0,flatShading:!0})])),n=[],r=(d,l,S,w=0,C=0,I=0)=>{const U=new i.Mesh(l,t[S]||S);return U.position.set(w,C,I),U.castShadow=!0,U.receiveShadow=!0,d.add(U),U},s=(d,l,S,w,C,I,U,F="cream")=>r(d,new i.BoxGeometry(l,S,w),F,C,I,U),a=(d,l,S,w,C,I,U,F="cream",k=8)=>r(d,new i.CylinderGeometry(l,S,w,k),F,C,I,U),o=(d,l,S,w,C,I,U,F="stone",k=0)=>{const Y=r(d,new i.IcosahedronGeometry(1,0),F,l,S,w);return Y.scale.set(C,I,U),Y.rotation.set(.19,k,.1),Y},c=(d,l,S,w,C="deep")=>{const I=new i.Vector3(...l),U=new i.Vector3(...S),F=U.clone().sub(I),k=a(d,w,w,F.length(),...I.clone().add(U).multiplyScalar(.5).toArray(),C,6);return k.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),F.normalize()),k},h=(d,l,S,w,C)=>{const I=new i.Shape;l.forEach(([F,k],Y)=>Y?I.lineTo(F,-k):I.moveTo(F,-k)),I.closePath();const U=new i.ExtrudeGeometry(I,{depth:w,bevelEnabled:!1,steps:1,curveSegments:1});return U.rotateX(-Math.PI/2),r(d,U,C,0,S,0)},m=[[-.48,-.32],[-.31,-.43],[.33,-.43],[.48,-.3],[.48,.31],[.31,.43],[-.34,.43],[-.48,.3]],_=(d,l="cream")=>h(d,m,0,.055,l),g=d=>h(d,[[-.46,-.3],[-.3,-.41],[.31,-.41],[.46,-.29],[.46,.05],[.16,.16],[-.12,.12],[-.46,.04]],.056,.012,"sea"),v=(d,l)=>h(d,l,.069,.004,"paper"),y=(d,l,S,w,C=.8)=>{a(d,.012*C,.019*C,.17*C,l,S+.085*C,w,"rust",6),o(d,l,S+.22*C,w,.075*C,.085*C,.068*C,"sage",.3),o(d,l-.035*C,S+.18*C,w+.017*C,.064*C,.052*C,.058*C,"pine",.9)},P=(d,l,S,w,C=1)=>{a(d,.014*C,.021*C,.24*C,l,S+.12*C,w,"rust",5);for(let I=0;I<3;I++){const U=r(d,new i.ConeGeometry((.11-I*.021)*C,.08*C,7),"pine",l+(I%2?.018:0)*C,S+(.15+I*.045)*C,w);U.scale.z=.78}},f=(d,l,S,w,C=.087,I=!1)=>{a(d,.007,.009,.22,l,S+.11,w,"rust",6);const U=new i.ConeGeometry(C,.07,8);U.clearGroups();for(let F=0;F<8;F++)U.addGroup(F*3,3,I?0:F%2);U.addGroup(24,24,0),r(d,U,I?[t.sand,t.sand]:[t.coral,t.paper],l,S+.225,w)},p=(d,l,S,w,C,I,U,F="coral")=>{const k=new i.Shape;k.moveTo(-l/2,0),k.lineTo(l/2,0),k.lineTo(0,S),k.closePath();const Y=new i.ExtrudeGeometry(k,{depth:w,bevelEnabled:!1,curveSegments:1,steps:1});return r(d,Y,F,C,I,U-w/2)},b=(d,l,S,w,C,I,U="coral",F=.07)=>{s(d,w,C,I,l,F+C/2,S),p(d,w+.035,.065,I+.035,l,F+C,S,U);for(const k of[-1,1])for(let Y=0;Y<2;Y++)s(d,.025,.045,.008,l+k*w*.28,F+C*(.33+Y*.42),S+I/2+.004,"deep")},A=(d,l,S,w,C)=>{c(d,[l,C,w],[S,C,w],.006,"stone"),c(d,[l,C+.045,w],[S,C+.045,w],.005,"stone");for(let I=0;I<6;I++)c(d,[l+(S-l)*I/5,C-.06,w],[l+(S-l)*I/5,C+.05,w],.008,"cream")},x=(d,l,S,w)=>{S.name=d,S.updateMatrixWorld(!0);let C=new i.Box3().setFromObject(S),I=new i.Vector3;C.getSize(I);const U=Math.min(1,.98/Math.max(I.x,I.z),.94/I.y);S.scale.setScalar(U),S.updateMatrixWorld(!0),C=new i.Box3().setFromObject(S);const F=new i.Vector3;C.getCenter(F),S.children.forEach(Y=>{Y.position.x-=F.x/U,Y.position.y-=C.min.y/U,Y.position.z-=F.z/U}),S.updateMatrixWorld(!0),C=new i.Box3().setFromObject(S),C.getSize(I);let k=0;S.traverse(Y=>{var X;Y.isMesh&&(k+=(((X=Y.geometry.index)==null?void 0:X.count)||Y.geometry.attributes.position.count)/3)}),S.userData={landmarkId:d,city:"weihai",triangles:k,simplification:w},n.push({id:d,name:l,city:"weihai",group:S,footprint:[I.x,I.z],height:I.y})},u=()=>new i.Group;{const d=u();_(d),g(d),h(d,[[-.46,.08],[-.12,.15],[.12,.13],[.35,.03],[.47,.04],[.47,.3],[.29,.41],[-.32,.41],[-.46,.29]],.07,.014,"sand"),v(d,[[-.45,.071],[-.1,.133],[.13,.113],[.36,.017],[.37,.029],[.14,.13],[-.11,.151],[-.45,.09]]);for(const[l,S]of[[-.26,.25],[-.04,.31],[.2,.23]])f(d,l,.084,S,.095,!0);for(let l=0;l<5;l++)o(d,.13+(l-2)*.048,.105+(.08-Math.abs(l-2)*.022),-.25,.067,.065,.056,l%2?"stone":"cream",l);P(d,-.37,.081,.11,.65),x("wh_banyue_bay","半月湾",d,"草伞、弧形沙岸与离岸岛礁的组合示意，非测绘地形。")}{const d=u();_(d),g(d);for(let S=0;S<7;S++){const w=-.35+S*.1,C=.07-Math.sin(S*.7)*.12,I=.13+(6-S)*.018;o(d,w,I,C,.15,.12+(6-S)*.017,.145,S%2?"stone":"sand",S*.41)}for(const[S,w]of[[-.31,.06],[-.2,-.035],[-.08,-.055]])P(d,S,.26,w,.62);const l=[[-.41,.21],[-.27,.16],[-.16,.1],[-.03,.09],[.08,.055]];for(let S=1;S<l.length;S++)c(d,[l[S-1][0],.16,l[S-1][1]],[l[S][0],.16,l[S][1]],.014,"cream");v(d,[[.12,-.16],[.24,-.08],[.36,.03],[.37,.047],[.23,-.058],[.11,-.147]]),x("wh_maotou_hill","猫头山",d,"按照片概括低矮岩岬、松树与观景路径；不声称山体形状或步道位置精确。")}{const d=u();_(d),g(d),h(d,[[-.46,.03],[.46,.03],[.46,.3],[.3,.41],[-.32,.41],[-.46,.3]],.069,.014,"sand");for(let l=0;l<3;l++)v(d,[[-.45,-.035-l*.07],[.45,-.018-l*.07],[.45,-.006-l*.07],[-.45,-.023-l*.07]]);f(d,-.22,.083,.26,.102),f(d,.12,.083,.21,.096);for(const l of[-.3,-.04,.29])s(d,.06,.014,.08,l,.092,.35,"paper");P(d,.36,.083,.32,.7),x("wh_international_beach","国际海水浴场",d,"海滩与日落观海活动意象，遮阳伞为风格化辅助元素。")}{const d=u();_(d),h(d,[[-.45,-.39],[.45,-.39],[.45,-.21],[-.45,-.21]],.055,.012,"sea");const l=s(d,.3,.035,.65,0,.123,.07,"deep");l.rotation.x=-.19;for(let S=0;S<5;S++){const w=-.19+S*.112,C=.084+(w+.24)*.19,I=s(d,.01,.006,.047,0,C,w,"cream");I.rotation.x=-.19}for(const S of[-1,1])for(let w=0;w<3;w++){const C=-.12+w*.2,I=.079+(C+.22)*.19;s(d,.16,.19+w*.055,.16,S*.27,I+(.19+w*.055)/2,C,w===1?"coral":"cream"),p(d,.18,.05,.18,S*.27,I+.19+w*.055,C,S===1?"teal":"cream");for(let U=0;U<2;U++)s(d,.008,.035,.028,S*.185,I+.07+U*.072,C,"deep");y(d,S*.4,I,C,.46)}x("wh_torch_eighth","火炬八街",d,"通海下坡路、白楼与彩色屋顶；房屋数量、立面与坡度已缩尺概括。")}{const d=u();_(d),g(d),h(d,[[-.41,-.1],[-.34,-.3],[.12,-.34],[.4,-.13],[.37,.27],[-.35,.3]],.07,.038,"sage");for(let l=0;l<5;l++)o(d,-.35+l*.16,.105,-.19,.1,.08,.11,"stone",l);b(d,-.07,.025,.37,.14,.16,"deep",.11),b(d,.13,-.055,.14,.23,.14,"deep",.11),b(d,-.29,-.02,.13,.13,.14,"deep",.11),s(d,.78,.018,.07,0,.106,.275,"cream");for(let l=0;l<3;l++){const S=new i.Group;d.add(S),h(S,[[-.067,-.02],[.045,-.024],[.085,0],[.045,.024],[-.067,.02]],.077,.025,"cream"),s(S,.073,.036,.03,0,.122,0,"teal"),S.position.set(-.25+l*.21,0,.355)}P(d,-.23,.15,-.2,.75),P(d,.25,.15,-.14,.68),x("wh_liugong_island","刘公岛",d,"以已查看的港口照片提炼岛岸、码头和坡屋顶建筑；非具体甲午史迹建筑复刻。")}{const d=u();_(d),g(d),h(d,[[-.46,.02],[.46,.02],[.46,.3],[.3,.41],[-.3,.41],[-.46,.3]],.069,.014,"sand");for(let l=0;l<4;l++){const S=-.31+l*.2;for(const w of[-.033,.033])a(d,.005,.006,.175,S,.17,.26+w,"rust",5);a(d,0,.105,.08,S,.275,.26,"sand",8),s(d,.15,.015,.055,S,.106,.26,"cream")}for(let l=0;l<3;l++){const S=r(d,new i.TorusGeometry(.035,.009,4,10),l===0?"coral":l===1?"teal":"gold",-.2+l*.17,.094,.08);S.rotation.x=-Math.PI/2}v(d,[[-.45,-.01],[.45,-.015],[.45,.001],[-.45,.006]]),x("wh_naxianghai","那香海",d,"结合授权草顶亭照片与私人浅水照片的海滩组合；棚亭位置已概括。")}{const d=u();_(d),g(d);const l=new i.Group;d.add(l),l.rotation.z=-.075;const S=[[-.4,-.105],[.26,-.105],[.42,-.05],[.44,.005],[.32,.11],[-.4,.11]];h(l,S,.092,.092,"rust"),h(l,S,.185,.105,"deep"),h(l,S,.291,.015,"cream"),s(l,.12,.095,.15,-.28,.351,0,"cream"),s(l,.12,.037,.15,-.27,.417,0,"cream"),s(l,.09,.027,.15,-.28,.455,0,"paper");for(let w=0;w<4;w++)for(const C of[-.081,.081])s(l,.018,.018,.006,-.314+w*.027,.42,C,"deep");s(l,.04,.09,.045,-.3,.499,-.015,"deep"),s(l,.045,.022,.049,-.3,.548,-.015,"coral");for(let w=0;w<4;w++){const C=-.13+w*.125;s(l,.035,.19,.031,C,.403,0,"stone"),c(l,[C,.49,0],[C+.083,.56,.015],.011,"rust"),c(l,[C+.083,.56,.015],[C+.135,.322,.015],.003,"deep"),s(l,.073,.014,.068,C+.065,.311,0,"rust")}c(l,[.32,.306,0],[.32,.53,0],.006,"stone"),c(l,[.295,.48,0],[.346,.48,0],.005,"deep");for(let w=0;w<7;w++)o(d,-.33+w*.11,.09,.27+Math.sin(w)*.03,.049,.034,.045,"stone",w);v(d,[[-.45,.345],[.41,.32],[.4,.338],[-.45,.36]]),x("wh_bluewis","布鲁维斯号",d,"保留照片中黑色货轮、锈红水线、四座吊机与艉楼；不含船名纹理或精确船体测量。")}const M=(d,l,S,w="coral")=>{s(d,.13,.1,.105,l,.119,S,"sand"),p(d,.16,.032,.14,l,.185,S,w),s(d,.11,.014,.04,l,.17,S+.065,"cream");for(const C of[-.06,.06])a(d,.004,.004,.135,l+C,.149,S+.055,"rust",5);o(d,l-.03,.19,S+.066,.018,.011,.012,"gold"),o(d,l+.022,.19,S+.066,.016,.013,.012,"coral")};{const d=u();_(d,"stone"),s(d,.16,.01,.72,0,.064,.02,"sand");for(const l of[-.3,.3])s(d,.06,.3,.06,l,.225,-.2,"deep"),s(d,.1,.035,.1,l,.077,-.2,"cream");s(d,.65,.06,.055,0,.347,-.2,"teal"),p(d,.78,.065,.16,0,.377,-.2,"pine"),p(d,.61,.05,.11,0,.445,-.2,"pine"),s(d,.22,.045,.015,0,.359,-.166,"deep");for(const l of[-.37,.37])c(d,[l-.035,.393,-.2],[l+.035,.409,-.2],.013,"pine");for(const l of[-1,1])for(let S=0;S<3;S++)M(d,l*.27,-.01+S*.15,S%2?"gold":"coral");for(let l=0;l<5;l++)o(d,-.27+l*.135,.297,-.159,.012,.018,.012,"gold");x("wh_hanlefang","韩乐坊",d,"照片可辨认的绿瓦牌楼与两列夜市摊位；招牌纹样与街道尺寸简化。")}{const d=u();_(d,"stone"),g(d);const l=.61,S=.21,w=.67;for(const C of[-l/2,l/2])s(d,.035,w-S,.035,C,(w+S)/2,.13,"teal");for(const C of[S,w])s(d,l+.035,.035,.035,0,C,.13,"teal");for(const C of[-1,1]){const I=C*.32;s(d,.135,.026,.14,I,.075,.15,"cream"),c(d,[I,.086,.15],[I-C*.03,.32,.15],.044,"pine"),o(d,I-C*.02,.33,.15,.062,.09,.039,"teal",C);for(let U=0;U<4;U++){const F=.112+U*.017;c(d,[I-C*.05,.32+U*.008,F],[I-C*.046,.39+U*.006,F],.011,"teal"),c(d,[I-C*.046,.39+U*.006,F],[I-C*.011,.401+U*.003,F],.011,"teal")}c(d,[I+C*.015,.3,.2],[I-C*.065,.35,.197],.017,"teal")}A(d,-.43,.43,-.14,.13),x("wh_weihai_park","威海公园",d,"照片中的两手巨型画框及海滨栏杆；手指与金属雕塑纹路已几何化。")}{const d=u();_(d),g(d),h(d,[[-.31,-.16],[.29,-.19],[.42,.09],[.25,.33],[-.37,.28]],.07,.025,"sage"),a(d,.063,.099,.57,-.09,.388,.02,"cream",12);for(const[l,S]of[[.53,.086],[.669,.074]]){a(d,S,S,.024,-.09,l,.02,"stone",12);const w=r(d,new i.TorusGeometry(S-.004,.006,4,12),"deep",-.09,l+.045,.02);w.rotation.x=Math.PI/2;for(let C=0;C<12;C++){const I=C*Math.PI/6;c(d,[-.09+Math.sin(I)*(S-.004),l+.014,.02+Math.cos(I)*(S-.004)],[-.09+Math.sin(I)*(S-.004),l+.049,.02+Math.cos(I)*(S-.004)],.003,"deep")}}a(d,.05,.05,.079,-.09,.724,.02,"teal",10);for(let l=0;l<8;l++){const S=l*Math.PI/4;c(d,[-.09+Math.sin(S)*.052,.687,.02+Math.cos(S)*.052],[-.09+Math.sin(S)*.052,.764,.02+Math.cos(S)*.052],.004,"cream")}a(d,0,.066,.05,-.09,.79,.02,"stone",10),c(d,[-.09,.811,.02],[-.09,.872,.02],.004,"deep");for(const l of[.13,.25])for(const S of[.13,.25])s(d,.016,.11,.016,l,.154,S,"cream");p(d,.19,.076,.19,.19,.212,.19,"sand");for(let l=0;l<6;l++)o(d,-.34+l*.124,.107,.32,.057,.045,.055,"stone",l);P(d,.3,.1,-.08,.65),A(d,-.43,.4,-.21,.124),x("wh_yuehai_park","悦海公园",d,"据照片保留白色渐缩塔身、双层栏台、灯室和塔旁草顶亭；未采用参考板的红色塔顶。")}{const d=u();_(d,"stone"),s(d,.62,.27,.2,0,.2,-.1,"coral"),s(d,.67,.033,.23,0,.351,-.1,"deep"),s(d,.48,.074,.019,0,.27,.012,"cream"),s(d,.23,.1,.02,0,.346,.015,"paper"),s(d,.115,.13,.015,-.067,.145,.012,"teal"),s(d,.115,.13,.015,.067,.145,.012,"teal"),s(d,.01,.16,.035,0,.16,.026,"deep");for(const l of[-.06,.02,.1])s(d,.038,.025,.006,l,.35,.029,"coral");M(d,-.29,.21,"gold"),M(d,.27,.19,"coral");for(let l=0;l<3;l++)a(d,.027,.032,.017,-.29+l*.026,.187,.27,"deep",8);s(d,.08,.08,.016,-.34,.227,.31,"paper"),x("wh_oulefang","欧乐坊",d,"按现有清悠面馆实拍提炼玻璃门、横招牌和门前摊位；仅餐饮街区示意，不声称欧乐坊入口复刻。")}{const d=u();_(d,"cream"),s(d,.7,.3,.046,0,.215,-.21,"stone"),s(d,.54,.178,.02,-.045,.239,-.176,"cream");for(let l=0;l<5;l++)s(d,.033,.024,.008,-.225+l*.083,.254,-.16,"deep"),s(d,.008,.052,.01,-.217+l*.083,.246,-.16,"deep");s(d,.42,.073,.02,-.045,.12,-.175,"deep"),s(d,.34,.097,.13,-.17,.123,.12,"stone"),s(d,.38,.018,.17,-.17,.182,.12,"cream"),s(d,.13,.1,.115,.26,.126,.04,"stone"),s(d,.12,.055,.018,.26,.22,-.006,"teal"),c(d,[.26,.173,.04],[.26,.21,.005],.009,"deep"),s(d,.032,.036,.031,-.23,.21,.12,"coral"),s(d,.055,.012,.043,-.08,.199,.12,"paper"),y(d,.34,.055,.25,.48),x("wh_city_museum","威海市博物馆",d,"依据现有室内石质题字墙、服务台与盖章桌做剖面示意；不宣称文化艺术中心外立面精确复刻，几何符号不是可读题字。")}return n}function Vp(i){const e={cream:15919059,sand:15256467,coral:14186855,red:10902864,teal:6139305,water:9292226,sage:9743746,leaf:7312503,roof:5399658,stone:11580845,dark:4675923,wood:12094822,gold:15055474},t=Object.fromEntries(Object.entries(e).map(([u,M])=>[u,new i.MeshStandardMaterial({color:M,roughness:1,metalness:0,flatShading:!0})])),n=new i.BoxGeometry(1,1,1),r=new i.IcosahedronGeometry(1,0),s=[];function a(u,M,d,l=0,S=0,w=0){const C=new i.Mesh(M,t[d]);return C.position.set(l,S,w),C.castShadow=!0,C.receiveShadow=!0,u.add(C),C}function o(u,M,d,l,S,w,C,I="cream"){const U=a(u,n,I,S,w,C);return U.scale.set(M,d,l),U}function c(u,M,d,l=.012,S="wood",w=5){const C=new i.Vector3(...M),I=new i.Vector3(...d),U=I.clone().sub(C),F=a(u,new i.CylinderGeometry(l,l,U.length(),w),S);return F.position.copy(C.clone().add(I).multiplyScalar(.5)),F.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),U.normalize()),F}function h(u,M,d,l,S,w="sage",C=[1,1,1]){const I=a(u,r,w,d,l,S);return I.scale.set(M*C[0],M*C[1],M*C[2]),I.rotation.set(.2,d*3,S*2),I}function m(u,M,d,l=.29){c(u,[M,.045,d],[M,l*.75,d],.018,"wood"),h(u,l*.31,M,l*.82,d,"sage",[1,1.1,1]),h(u,l*.23,M-.035,l*.67,d+.025,"leaf"),h(u,l*.22,M+.045,l*.72,d-.025,"sage")}function _(u,M=.9,d=.65,l="cream"){const S=new i.Shape,w=.055;S.moveTo(-M/2+w,-d/2),S.lineTo(M/2-w,-d/2),S.lineTo(M/2,-d/2+w),S.lineTo(M/2,d/2-w),S.lineTo(M/2-w,d/2),S.lineTo(-M/2+w,d/2),S.lineTo(-M/2,d/2-w),S.lineTo(-M/2,-d/2+w),S.closePath();const C=new i.ExtrudeGeometry(S,{depth:.045,bevelEnabled:!1,steps:1});C.rotateX(-Math.PI/2),a(u,C,l)}function g(u,M,d,l=0,S=0){o(u,M,.012,d,l,.051,S,"stone");for(let w=0;w<4;w++)for(let C=0;C<3;C++)o(u,M/4-.01,.008,d/3-.012,l-M/2+(w+.5)*M/4,.061,S-d/2+(C+.5)*d/3,"cream")}function v(u,M,d,l,S,w,C="roof",I=.1){const U=new i.Shape,F=.016;[[-d/2,I*.23],[-d*.4,0],[0,I],[d*.4,0],[d/2,I*.23],[d/2,I*.23-F],[d*.4,-F],[0,I-F],[-d*.4,-F],[-d/2,I*.23-F]].forEach(([X,ne],J)=>J?U.lineTo(X,ne):U.moveTo(X,ne)),U.closePath();const Y=new i.ExtrudeGeometry(U,{depth:M,bevelEnabled:!1,steps:1});Y.rotateY(Math.PI/2),Y.translate(-M/2,0,0),a(u,Y,C,l,S,w),c(u,[l-M/2,S+I+.009,w],[l+M/2,S+I+.009,w],.013,C);for(let X=1;X<6;X++)for(const ne of[-1,1]){const J=l-M/2+X*M/6;c(u,[J,S+I+.006,w],[J,S+.004,w+ne*d*.39],.0055,C,4)}}function y(u,M,d,l=.23,S=.23,w=.24,C=null){o(u,l,w,S,M,.063+w/2,d,"stone"),o(u,l+.015,.027,S+.015,M,.073,d,"cream"),v(u,l+.047,S+.045,M,w+.077,d,"roof",.071);const I=d+S/2+.006;o(u,.069,w*.6,.012,M,.075+w*.3,I,"wood");for(const U of[-1,1])o(u,.054,.075,.012,M+U*l*.3,w*.66+.069,I,"gold"),o(u,.006,.077,.006,M+U*l*.3,w*.66+.069,I+.007,"wood");if(C){const U=o(u,l-.03,.018,.08,M,w*.5+.072,I+.03,C);U.rotation.x=.15,o(u,l-.025,.043,.013,M,w*.5+.05,I+.073,C)}}function P(u,M,d,l,S="coral"){const w=a(u,new i.SphereGeometry(.024,6,4),S,M,d,l);w.scale.y=1.18,o(u,.017,.009,.017,M,d+.03,l,"gold"),c(u,[M,d-.031,l],[M,d-.051,l],.004,"gold",4)}function f(u,M,d,l,S,w=7){c(u,[M,l,S],[d,l,S],.005,"wood",4);for(let C=0;C<w;C++)P(u,M+(d-M)*(C+.5)/w,l-.035,S,C%3===0?"gold":"coral")}function p(u,M,d,l,S,w="cream"){c(u,[M,l+.07,S],[d,l+.07,S],.01,w,4);const C=Math.ceil((d-M)/.1);for(let I=0;I<=C;I++)o(u,.021,.092,.024,M+(d-M)*I/C,l+.039,S,w)}function b(u,M,d,l=0,S=.19){o(u,M,.026,d,l,.053,S,"teal");const w=[],C=[],I=8,U=3;for(let Y=0;Y<I;Y++)for(let X=0;X<U;X++){const ne=l-M/2+Y*M/I,J=ne+M/I,te=S-d/2+X*d/U,ie=te+d/U;for(const Fe of[[[ne,te],[ne,ie],[J,te]],[[J,te],[ne,ie],[J,ie]]]){const Pe=new i.Color((Y+X)%3===0?e.water:e.teal);for(const[rt,Qe]of Fe)w.push(rt,.068,Qe),C.push(Pe.r,Pe.g,Pe.b)}}const F=new i.BufferGeometry;F.setAttribute("position",new i.Float32BufferAttribute(w,3)),F.setAttribute("color",new i.Float32BufferAttribute(C,3)),F.computeVertexNormals();const k=new i.Mesh(F,new i.MeshStandardMaterial({vertexColors:!0,roughness:1,flatShading:!0}));k.receiveShadow=!0,u.add(k)}function A(u,{width:M=.75,y:d=.4,color:l="red",depth:S=.15,lanterns:w=!1}){const C=[-M*.46,-M*.23,M*.23,M*.46];for(const I of C)o(u,.072,.071,.109,I,.1,0,"stone"),o(u,.044,d-.09,.055,I,(d+.09)/2,0,l);o(u,M*.49,.055,.06,0,d-.034,0,l),v(u,M*.61,S+.11,0,d,0,"roof",.075);for(const I of[-1,1]){const U=I*M*.345;o(u,M*.255,.045,.055,U,d-.115,0,l),v(u,M*.32,S,U,d-.09,0,"roof",.056)}if(o(u,M*.34,.049,.01,0,d-.032,.037,"dark"),o(u,M*.27,.007,.006,0,d-.033,.044,"gold"),w)for(const I of[-M*.17,M*.17])P(u,I,d-.11,.035)}function x(u,M,d){const l=new i.Group;l.name=u,d(l),l.updateMatrixWorld(!0);const S=new i.Box3().setFromObject(l),w=S.getCenter(new i.Vector3);for(const X of l.children)X.position.x-=w.x,X.position.z-=w.z,X.position.y-=S.min.y;l.updateMatrixWorld(!0);const C=new Map;l.traverse(X=>{if(!X.isMesh)return;const ne=X.geometry.index?X.geometry.toNonIndexed():X.geometry.clone();ne.applyMatrix4(X.matrixWorld);let J=C.get(X.material);J||(J={positions:[],normals:[],colors:[],count:0},C.set(X.material,J)),J.positions.push(ne.attributes.position.array),J.normals.push(ne.attributes.normal.array),ne.attributes.color&&J.colors.push(ne.attributes.color.array),J.count+=ne.attributes.position.count,ne.dispose()}),l.clear();for(const[X,ne]of C){const J=new i.BufferGeometry;for(const[ie,Fe]of[["position",ne.positions],["normal",ne.normals],["color",ne.colors]]){if(!Fe.length)continue;const Pe=new Float32Array(ne.count*3);let rt=0;for(const Qe of Fe)Pe.set(Qe,rt),rt+=Qe.length;J.setAttribute(ie,new i.BufferAttribute(Pe,3))}J.computeBoundingBox(),J.computeBoundingSphere();const te=new i.Mesh(J,X);te.castShadow=!0,te.receiveShadow=!0,l.add(te)}l.updateMatrixWorld(!0);const I=new i.Box3().setFromObject(l),U=I.getCenter(new i.Vector3);for(const X of l.children)X.position.set(-U.x,-I.min.y,-U.z);l.updateMatrixWorld(!0);const F=new i.Box3().setFromObject(l).getSize(new i.Vector3),Y={id:u,name:{lyg_democracy_road:"民主路老街",lyg_yanhe_lane:"盐河巷",rz_wanpingkou:"万平口",rz_dongyi_town:"东夷小镇",ha_li_canal:"里运河文化长廊",ha_yumatou:"御码头",ha_hexia_town:"河下古镇",wuhu_riverside:"江滨码头"}[u],city:M,group:l,footprint:[F.x,F.z],height:F.y};l.userData.landmarkId=u,l.userData.city=M,s.push(Y)}return x("lyg_democracy_road","lianyungang",u=>{_(u,.9,.59),g(u,.75,.39,0,.035);for(const l of[-.31,.31]){o(u,.091,.065,.104,l,.104,0,"wood");for(const S of[-.031,.031])for(const w of[-.031,.031])c(u,[l+S,.13,w],[l+S,.5,w],.008,"dark");for(const S of[.15,.26,.38,.49])o(u,.079,.011,.079,l,S,0,"gold");for(const S of[-.036,.036])c(u,[l-.03,.26,S],[l+.03,.38,S],.005,"dark"),c(u,[l+.03,.26,S],[l-.03,.38,S],.005,"dark")}o(u,.7,.075,.035,0,.409,0,"dark"),o(u,.58,.009,.007,0,.407,.022,"gold");const M=12,d=.29;for(let l=0;l<M;l++){const S=Math.PI*l/M,w=Math.PI*(l+1)/M;c(u,[Math.cos(S)*d,.449+Math.sin(S)*.2,0],[Math.cos(w)*d,.449+Math.sin(w)*.2,0],.009,"gold"),l>0&&c(u,[Math.cos(S)*d,.447+Math.sin(S)*.2,0],[Math.cos(S)*d*.9,.448,0],.005,"dark")}h(u,.033,0,.675,0,"gold",[.8,1.2,.8]),m(u,-.38,.17,.22),m(u,.38,.16,.19)}),x("lyg_yanhe_lane","lianyungang",u=>{_(u,.99,.68),g(u,.87,.53),y(u,-.28,-.16,.25,.22,.29,"coral"),y(u,0,-.16,.23,.22,.26,"teal"),y(u,.27,-.16,.25,.22,.3,"sand");for(const M of[-.41,.41])c(u,[M,.065,.06],[M,.47,.06],.012,"wood");f(u,-.41,.41,.46,.06,9),f(u,-.35,.35,.385,.2,8);for(const M of[-.23,.23]){o(u,.115,.018,.09,M,.137,.2,"wood"),c(u,[M,.064,.2],[M,.129,.2],.012,"wood");for(const d of[-.077,.077])o(u,.044,.061,.052,M+d,.096,.2,"coral")}m(u,-.41,-.17,.28),m(u,.41,-.18,.23)}),x("rz_wanpingkou","rizhao",u=>{_(u,1.02,.73,"sand"),b(u,.94,.27,0,.2);for(let M=0;M<9;M++){const d=h(u,.069,-.43+M*.106,.07,.055+M%3*.009,"cream",[1.1,.18,.6]);d.rotation.y=M*.7}o(u,.77,.033,.113,0,.09,-.22,"wood");for(let M=0;M<10;M++)o(u,.005,.006,.105,-.35+M*.077,.11,-.22,"sand");for(const M of[-.3,.3])c(u,[M,.11,-.22],[M,.37,-.22],.013,"wood");for(let M=0;M<6;M++)o(u,.105,.018,.18,-.265+M*.106,.375,-.22,M%2?"cream":"teal");for(const M of[-.15,.12]){o(u,.13,.021,.059,M,.14,-.22,"cream");const d=o(u,.057,.072,.059,M-.066,.17,-.22,"cream");d.rotation.z=-.25;for(const l of[-.043,.043])o(u,.012,.039,.035,M+l,.122,-.22,"wood")}m(u,.43,-.2,.23),h(u,.06,-.44,.084,-.07,"stone",[1,.75,.9])}),x("rz_dongyi_town","rizhao",u=>{_(u,.97,.62),g(u,.84,.47,0,.02),A(u,{width:.79,y:.45,color:"red",depth:.15}),m(u,-.4,-.12,.27),m(u,.4,-.13,.24);for(const M of[-.24,.24])o(u,.11,.025,.028,M,.092,.22,"wood"),o(u,.015,.033,.021,M-.04,.065,.22,"wood"),o(u,.015,.033,.021,M+.04,.065,.22,"wood")}),x("ha_li_canal","huaian",u=>{_(u,.85,.7),b(u,.77,.21,0,.225),o(u,.79,.12,.077,0,.113,.086,"stone"),p(u,-.36,.36,.176,.087);const M=-.105;for(let d=0;d<9;d++){const l=.122-d*.006,S=.09+d*.078;a(u,new i.CylinderGeometry(l*.87,l,.058,8),d%2?"sand":"cream",0,S+.03,M),a(u,new i.CylinderGeometry(l*.84,l*1.22,.022,8),"roof",0,S+.065,M),a(u,new i.CylinderGeometry(l*1.22,l*1.2,.013,8),"wood",0,S+.051,M);for(let w=0;w<8;w++){const C=(w+.5)*Math.PI/4,I=o(u,.021,.032,.009,Math.sin(C)*l*.95,S+.027,M+Math.cos(C)*l*.95,"gold");I.rotation.y=C}}a(u,new i.ConeGeometry(.092,.103,8),"roof",0,.821,M),c(u,[0,.87,M],[0,.979,M],.012,"gold",6),h(u,.024,0,.936,M,"gold"),m(u,-.27,-.16,.29),m(u,.28,-.13,.23)}),x("ha_yumatou","huaian",u=>{_(u,1.02,.68),g(u,.9,.52,0,.016),A(u,{width:.86,y:.43,color:"red",depth:.17,lanterns:!0});for(const M of[-1,1])y(u,M*.36,-.22,.22,.13,.2,M===1?"teal":"sand"),m(u,M*.44,.16,.2);f(u,-.28,.28,.31,-.2,6)}),x("ha_hexia_town","huaian",u=>{_(u,.85,.7),g(u,.2,.59,0,.01);for(const M of[-1,1]){const d=new i.Group;u.add(d);for(let l=0;l<2;l++)y(d,M*.26,-.16+l*.29,.22,.26,.22,l%2?"sand":"coral");c(u,[M*.125,.062,.2],[M*.125,.4,.2],.014,"wood")}c(u,[-.145,.365,.2],[0,.415,.2],.012,"wood"),c(u,[0,.415,.2],[.145,.365,.2],.012,"wood");for(let M=0;M<13;M++){const d=M*Math.PI/12,l=.151*Math.cos(d),S=.27+.145*Math.sin(d);h(u,.048,l,S,.205,"leaf",[1,1,.75]),M%2===0&&h(u,.022,l+.006,S+.015,.247,"coral")}for(const M of[-1,1])for(let d=0;d<3;d++)h(u,.04,M*.142,.125+d*.075,.215,"sage"),d%2&&h(u,.018,M*.159,.17+d*.066,.242,"coral")}),x("wuhu_riverside","wuhu",u=>{_(u,1,.74),b(u,.92,.34,0,.16),o(u,.91,.065,.22,0,.111,-.14,"stone");for(let l=0;l<4;l++)o(u,.44,.023,.039,-.19,.08+l*.023,-.007-l*.033,"cream");p(u,-.43,-.045,.152,-.04,"wood"),p(u,.2,.44,.152,-.04,"wood"),o(u,.19,.025,.32,.105,.166,.076,"wood");for(let l=0;l<7;l++)o(u,.175,.007,.007,.105,.183,-.054+l*.048,"sand");for(const l of[.033,.177])for(const S of[-.01,.18])c(u,[l,.07,S],[l,.171,S],.013,"wood");for(const l of[.21,.38])for(const S of[-.26,-.12])c(u,[l,.148,S],[l,.368,S],.013,"wood");v(u,.26,.23,.295,.378,-.19,"roof",.073),o(u,.235,.026,.2,.295,.16,-.19,"cream");const M=new i.CylinderGeometry(.09,.065,.044,6);M.rotateY(Math.PI/6),a(u,M,"coral",-.235,.099,.196).scale.set(2.35,1,.67),o(u,.255,.051,.078,-.245,.134,.196,"cream"),o(u,.28,.015,.09,-.245,.168,.196,"sand");for(let l=0;l<3;l++)o(u,.055,.029,.008,-.324+l*.075,.136,.241,"dark");m(u,-.38,-.19,.28)}),s}function kp(i,{onSelect:e=()=>{},onReady:t=()=>{},onError:n=()=>{},reducedMotion:r=!1,viewMode:s="overview"}={}){i.style.position||(i.style.position="relative");const a=new Vo,o=new gl({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setClearColor(0,0),o.outputColorSpace=Zt,o.toneMapping=4,o.toneMappingExposure=1.23,o.shadowMap.enabled=!0,o.shadowMap.type=1,o.domElement.setAttribute("aria-label","可旋转的立体海岸旅行手账，点击城市查看行程"),o.domElement.setAttribute("role","img"),o.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none;",i.appendChild(o.domElement);const c=()=>{Ue=!1,n()};o.domElement.addEventListener("webglcontextlost",c);const h=new vr(-7,7,8,-8,.1,90);h.name="coastal-overview-camera";const m=new en(60,1,.15,60);m.name="coastal-immersive-camera";let _=s==="immersive"?"immersive":"overview",g=_==="immersive"?m:h;const v=new Tt;a.add(v);const y=new Tt;y.name="static-world",v.add(y);const P=new Tt;v.add(P);let f=271828;const p=()=>(f=f*1664525+1013904223>>>0,f/4294967296),b=(E,L)=>E+p()*(L-E),A=new Map;function x(E,L=.95,D={}){const V=`${E}|${L}|${JSON.stringify(D)}`;return A.has(V)||A.set(V,new el({color:E,roughness:L,flatShading:!0,...D})),A.get(V)}const u={paper:x("#f4e8c9"),paperEdge:x("#e6d3ad"),paperLine:x("#c9b491"),cover:x("#a78763"),sand:x("#e9d9ad"),paleSand:x("#f4e5bd"),ochre:x("#c9b28c"),cliff:x("#c8b698"),rock:x("#b7b39b"),rockLight:x("#ddd1b3"),meadow:x("#b9c28a"),meadowLight:x("#cbd099"),leaf:x("#78986c"),leafLight:x("#a8b776"),leafDark:x("#53785c"),pine:x("#47796d"),pineLight:x("#719684"),trunk:x("#7e7055"),cream:x("#fff1d3"),warmWhite:x("#fff9e9"),blueRoof:x("#568095"),navy:x("#274b59"),roof:x("#bd6344"),roofLight:x("#d97d52"),coral:x("#ee7950"),routeInk:x("#a94631",.9),road:x("#fff0d3"),water:x("#439ba7",.67),shallow:x("#91c7bf",.8),foam:x("#edf1d8",.9),red:x("#bb3e29"),gold:x("#b49155",.38,{metalness:.55}),bronze:x("#927449",.42,{metalness:.38}),car:x("#3f7fa9",.55),rubber:x("#3c4d4b"),window:x("#274d60",.4),glass:x("#a5cad0",.36)};function M(E,L,D=0,V=0,$=0,me=y){const Re=new un(E,L);return Re.position.set(D,V,$),Re.castShadow=!0,Re.receiveShadow=!0,me.add(Re),Re}const d=(E,L,D,V,$,me,Re,Ge)=>M(new Jn(E,L,D),V,$,me,Re,Ge),l=(E,L,D,V,$,me,Re,Ge=8,Ze)=>M(new xr(E,L,D,Ge),V,$,me,Re,Ze),S=(E,L,D,V,$,me=0,Re)=>M(new rs(E,me),L,D,V,$,Re);function w(E,L,D=.015,V=y,$=!0){const me=$?new Ni(E.map(Re=>new B(...Re))):new ha;if(!$)for(let Re=1;Re<E.length;Re++)me.add(new oa(new B(...E[Re-1]),new B(...E[Re])));return M(new os(me,Math.max(8,E.length*4),D,4,!1),L,0,0,0,V)}function C(E,L,D,V=y){const $=new Gi;E.forEach((Re,Ge)=>Ge?$.lineTo(Re[0],-Re[1]):$.moveTo(Re[0],-Re[1])),$.closePath();const me=new ss($);return me.rotateX(-Math.PI/2),M(me,D,0,L,0,V)}function I(E,L,D,V,$,me){const Re=new Gi,Ge=-E/2,Ze=-L/2;Re.moveTo(Ge+D,Ze),Re.lineTo(Ge+E-D,Ze),Re.quadraticCurveTo(Ge+E,Ze,Ge+E,Ze+D),Re.lineTo(Ge+E,Ze+L-D),Re.quadraticCurveTo(Ge+E,Ze+L,Ge+E-D,Ze+L),Re.lineTo(Ge+D,Ze+L),Re.quadraticCurveTo(Ge,Ze+L,Ge,Ze+L-D),Re.lineTo(Ge,Ze+D),Re.quadraticCurveTo(Ge,Ze,Ge+D,Ze);const ft=new gr(Re,{depth:$,bevelEnabled:!1,curveSegments:6});return ft.rotateX(-Math.PI/2),M(ft,me,0,V,0)}I(10.22,15.34,.24,-.12,.16,u.cover),I(10,15.05,.18,.04,.25,u.paperEdge);for(let E=0;E<7;E++)I(10.015-E*.011,15.07-E*.014,.18,.075+E*.033,.014,E%2?u.paper:u.paperEdge);I(9.97,15.03,.19,.303,.045,u.paper);for(let E=0;E<16;E++){const L=-7.12+E*.947;l(.096,.096,.012,u.ochre,-4.57,.357,L,16);const D=M(new Zn(.36,.036,7,28),u.gold,-4.91,.31,L);D.rotation.y=.03,M(new Zn(.36,.012,5,26,Math.PI*.82),u.cream,-4.911,.327,L+.006)}d(.032,.019,14.65,u.paperEdge,-4.27,.36,0),d(.055,.1,.66,u.coral,4.987,.2,4.38),d(.055,.1,.54,u.blueRoof,4.987,.2,3.63),d(.055,.1,.54,u.meadow,4.987,.2,3.02);const U=[[1.08,7.2],[1.4,6.62],[.96,6],[1.12,5.38],[1.62,4.8],[1.53,4.16],[1.14,3.64],[1.56,3.01],[1.75,2.46],[1.48,1.94],[1.79,1.35],[2.13,.81],[2.16,.18],[1.69,-.41],[1.08,-.96],[.93,-1.64],[1.31,-2.31],[1.34,-2.98],[1.82,-3.58],[2.56,-3.97],[2.96,-4.56],[3.05,-5.26],[2.52,-5.94],[2.28,-6.57],[1.39,-7.16]],F=[[-4.08,7.21],...U,[-4.08,-7.16]],k=[...U,[4.77,-7.17],[4.77,7.22]];C(k,.366,u.water),C(F,.57,u.sand);const Y=U.map(([E,L])=>[E-.12,L]);C([[-4.08,7.12],...Y,[-4.08,-7.12]],.583,u.paleSand);function X(E){for(let L=1;L<U.length;L++)if(E<=U[L-1][1]&&E>=U[L][1]){const D=U[L-1],V=U[L],$=(E-D[1])/(V[1]-D[1]);return D[0]+(V[0]-D[0])*$}return 1.4}const ne=[],J=[],te=["#d4bd95","#e1c9a0","#bca68b","#e8d5b1","#cab48f"].map(E=>new lt(E));function ie(E,L,D,V,$=ne,me=J){$.push(...E,...L,...D);for(let Re=0;Re<3;Re++)me.push(V.r,V.g,V.b)}for(let E=1;E<U.length;E++){const L=U[E-1],D=U[E],V=[(L[0]+D[0])/2+.04,(L[1]+D[1])/2];ie([L[0],.582,L[1]],[D[0],.582,D[1]],[V[0]+.16,.369,V[1]],te[E%5]),ie([L[0],.582,L[1]],[V[0]+.16,.369,V[1]],[L[0]+.1,.366,L[1]],te[(E+2)%5]),ie([D[0],.582,D[1]],[D[0]+.1,.366,D[1]],[V[0]+.16,.369,V[1]],te[(E+1)%5])}function Fe(E,L){const D=new yt;return D.setAttribute("position",new tt(E,3)),D.setAttribute("color",new tt(L,3)),D.computeVertexNormals(),D}M(Fe(ne,J),x("#ffffff",.96,{vertexColors:!0,side:2}));const Pe=[],rt=[],Qe=["#499eab","#3c91a1","#54a9b2","#63b4ba","#408f9e","#74bfc0"].map(E=>new lt(E));for(let E=-7.1;E<7.1;E+=.39)for(let L=.8;L<4.7;L+=.4){if(L<Math.max(X(E),X(E+.39))+.11)continue;const D=[L,.371+b(0,.012),E],V=[Math.min(L+.4,4.76),.371+b(0,.012),E],$=[L,.371+b(0,.012),Math.min(E+.39,7.2)],me=[Math.min(L+.4,4.76),.371+b(0,.012),Math.min(E+.39,7.2)];ie(D,$,V,Qe[Math.floor(p()*6)],Pe,rt),ie(V,$,me,Qe[Math.floor(p()*6)],Pe,rt)}M(Fe(Pe,rt),x("#ffffff",.8,{vertexColors:!0})),w(U.map(([E,L])=>[E+.105,.395,L]),u.foam,.023),w(U.map(([E,L])=>[E+.22,.389,L]),x("#a6d8cd"),.026);for(let E=0;E<64;E++){const L=b(-6.9,7),D=b(Math.min(4.25,X(L)+.42),4.55),V=b(.12,.45);w([[D-V/2,.4,L],[D,.404,L-.025],[D+V/2,.401,L]],E%3?x("#bde1d4"):u.foam,E%3?.012:.018)}function at(E,L,D,V,$=u.meadow,me=.59){const Re=[];for(let Ge=0;Ge<9;Ge++){const Ze=Ge/9*Math.PI*2,ft=b(.82,1.1);Re.push([E+Math.cos(Ze)*D*ft,L+Math.sin(Ze)*V*ft])}return C(Re,me,$)}function j(E,L,D,V=.25,$=u.rock){const me=S(V,$,E,L+V*.42,D);return me.scale.set(1,b(.65,1.4),b(.65,1.1)),me.rotation.set(b(0,2),b(0,6),b(0,2)),me}function re(E,L,D=1,V="round",$=.59){const me=.6*D;if(l(.035*D,.055*D,me,u.trunk,E,$+me/2,L,5),V==="pine")l(0,.29*D,.68*D,u.pine,E,$+.61*D,L,5),l(0,.225*D,.58*D,u.pineLight,E,$+.89*D,L,5),l(0,.155*D,.46*D,u.pine,E,$+1.14*D,L,5);else{const Re=S(.34*D,p()>.5?u.leaf:u.leafLight,E,$+.65*D,L,1);Re.scale.set(.85,1.23,.83),Re.rotation.y=b(0,5),S(.23*D,u.leafLight,E+.18*D,$+.69*D,L-.02*D,0),S(.23*D,u.leafDark,E-.13*D,$+.58*D,L+.08*D,0),w([[E,$+.43*D,L],[E+.15*D,$+.67*D,L+.04*D]],u.trunk,.024*D)}}function Te(E,L,D,V,$,me=1,Re=.59){at(E,L,V*1.18,$*1.13,p()>.5?u.meadow:u.meadowLight,Re+.002);for(let Ge=0;Ge<D;Ge++){const Ze=b(0,6.28),ft=Math.sqrt(p());re(E+Math.cos(Ze)*V*ft,L+Math.sin(Ze)*$*ft,b(.55,.94)*me,p()>.67?"pine":"round",Re)}}Te(.32,6.22,10,.59,.64,.7);function Ye(E,L,D,V=.58){const $=new Bi(D,D*1.27,5),me=M($,u.leafDark,E,V+D*.56,L);me.rotation.y=b(0,6),me.scale.z=.78;const Re=M(new Bi(D*.66,D*.76,4),u.leaf,E+D*.29,V+D*.34,L+.14);Re.rotation.y=.6,j(E-D*.48,V,L+D*.42,D*.27,u.meadowLight)}for(let E=0;E<22;E++){let L=b(-6.8,6.9);j(X(L)-b(.13,.39),.56,L,b(.06,.15),E%3?u.rockLight:u.rock)}const De=[[.36,-4],[.9,-3.69],[1.85,-3.8],[2.6,-4.06],[2.89,-4.7],[2.96,-5.25],[2.43,-5.89],[2.18,-6.44],[1.34,-6.76],[.45,-6.2],[-.05,-5.5],[.02,-4.77]];C(De,1.21,u.paleSand);const qe=[],pt=[];for(let E=0;E<De.length;E++){const L=De[E],D=De[(E+1)%De.length],V=[(L[0]+D[0])/2,(L[1]+D[1])/2];ie([L[0],1.21,L[1]],[D[0],1.21,D[1]],[V[0]+.16,.56,V[1]],te[E%5],qe,pt),ie([L[0],1.21,L[1]],[V[0]+.16,.56,V[1]],[L[0],.56,L[1]],te[(E+2)%5],qe,pt),ie([D[0],1.21,D[1]],[D[0],.56,D[1]],[V[0]+.16,.56,V[1]],te[(E+3)%5],qe,pt)}M(Fe(qe,pt),x("#ffffff",.95,{vertexColors:!0,side:2})),Te(.81,-6.03,6,.44,.38,.63,1.21),Te(2.11,-5.98,5,.29,.35,.62,1.21),Te(.23,-4.99,5,.27,.56,.6,1.21);for(let E=0;E<9;E++)j(2.76+b(-.25,.45),.37,-4.85+b(-.5,.7),b(.12,.3),E%2?u.rockLight:u.rock);function oe(E,L,D){const V=[[-E/2,0,-D/2],[E/2,0,-D/2],[0,L,-D/2],[-E/2,0,D/2],[E/2,0,D/2],[0,L,D/2]],$=[0,1,2,5,4,3,0,2,5,0,5,3,2,1,4,2,4,5,3,4,1,3,1,0],me=new yt;return me.setAttribute("position",new tt($.flatMap((Re,Ge)=>V[$[Math.floor(Ge/3)*3+(2-Ge%3)]]),3)),me.computeVertexNormals(),me}function le(E,L,{w:D=.43,d:V=.38,h:$=.48,roof:me=u.roof,y:Re=.59,angle:Ge=0,wall:Ze=u.cream,floors:ft=2,chimney:an=!0}={}){const Ct=new Tt;Ct.position.set(E,Re,L),Ct.rotation.y=Ge,y.add(Ct),d(D,$,V,Ze,0,$/2,0,Ct),M(oe(D+.095,.19,V+.095),me,0,$-.005,0,Ct),d(D+.11,.035,V+.11,me,0,$-.015,0,Ct),d(D+.015,.035,V+.015,u.paperEdge,0,.022,0,Ct);const Tn=Math.min(ft,3),An=D>.5?3:2;for(let $t=0;$t<Tn;$t++)for(let wn=0;wn<An;wn++){const Ln=(wn-(An-1)/2)*D*.32,kn=$*(.29+$t*.31);d(.061,.094,.014,u.navy,Ln,kn,V/2+.005,Ct),d(.075,.012,.024,u.warmWhite,Ln,kn-.051,V/2+.012,Ct),d(.012,.09,.019,u.cream,Ln,kn,V/2+.015,Ct)}for(let $t=0;$t<Tn;$t++)d(.013,.09,.065,u.navy,D/2+.003,$*(.29+$t*.31),0,Ct);return d(.081,.139,.023,u.trunk,-D*.23,.069,V/2+.012,Ct),an&&d(.054,.16,.075,u.cream,D*.25,$+.115,-V*.12,Ct),Ct}at(-.91,-.62,1.03,.89,u.meadowLight),le(-1.16,-.32,{w:.58,d:.45,h:.7,angle:-.13}),le(-.48,-.3,{w:.43,d:.42,h:.58,angle:.05,roof:u.roofLight}),le(-1.49,-.95,{w:.5,d:.4,h:.69,angle:-.13}),le(-.8,-1.05,{w:.51,d:.4,h:.78,angle:-.13}),le(-.4,-1.63,{w:.38,d:.36,h:.62,angle:-.1}),le(-1.72,.38,{w:.48,d:.39,h:.48,angle:.04,roof:u.roofLight}),le(-1.1,.53,{w:.44,d:.38,h:.43,angle:.12}),le(-.95,.43,{w:.39,d:.36,h:.45,angle:.12});const he=new Tt;he.position.set(-1.58,.59,-2.05),he.rotation.y=.08,y.add(he),d(.63,.65,.58,u.cream,0,.325,0,he),M(oe(.68,.3,.63),u.roof,0,.65,0,he);for(const E of[-.29,.29])d(.22,1.1,.28,u.cream,E,.55,.29,he),l(0,.185,.4,u.roof,E,1.3,.29,4,he).rotation.y=Math.PI/4,d(.065,.15,.016,u.navy,E,.82,.437,he),d(.055,.12,.015,u.navy,E,.57,.438,he),d(.013,.13,.013,u.gold,E,1.54,.29,he),d(.07,.013,.013,u.gold,E,1.565,.29,he);l(.071,.071,.018,u.navy,0,.64,.308,12,he).rotation.x=Math.PI/2,d(.17,.25,.014,u.trunk,0,.125,.306,he);for(let E=0;E<4;E++)d(.49+E*.065,.035,.115,u.paperEdge,0,.1-E*.025,.48+E*.08,he);re(-.9,-1.58,.5,"pine"),l(.58,.6,.065,u.paperEdge,1.25,.61,.32,32),l(.51,.51,.015,u.cream,1.25,.657,.32,32),l(.34,.39,.08,u.ochre,1.25,.7,.32,24);const fe=new Tt;fe.position.set(1.25,.76,.32),y.add(fe),l(.13,.17,.08,u.red,0,.04,0,12,fe);const Se=[],ke=[];for(let E=0;E<=168;E++){const L=E/168,D=L*Math.PI*2*4.65,V=.102+.267*Math.pow(Math.sin(L*Math.PI),1.3),$=.13+L*.82;ke.push([[Math.cos(D)*(V-.038),$-.027,Math.sin(D)*(V-.038)],[Math.cos(D)*(V+.038),$-.027,Math.sin(D)*(V+.038)],[Math.cos(D)*(V+.038),$+.027,Math.sin(D)*(V+.038)],[Math.cos(D)*(V-.038),$+.027,Math.sin(D)*(V-.038)]])}for(let E=1;E<ke.length;E++)for(let L=0;L<4;L++){const D=(L+1)%4,V=ke[E-1][L],$=ke[E-1][D],me=ke[E][L],Re=ke[E][D];for(const Ge of[V,$,me,$,Re,me])Se.push(...Ge)}const He=new yt;He.setAttribute("position",new tt(Se,3)),He.computeVertexNormals(),M(He,x("#d8482c",.83,{side:2}),0,0,0,fe),d(.13,.7,.13,u.red,0,.41,0,fe),d(.084,.36,.083,u.red,.026,.875,.018,fe),d(.056,.23,.06,x("#e34d2d"),-.043,.84,-.015,fe);const We=new Tt;We.position.set(1.79,.53,-.15),We.rotation.y=-.08,y.add(We),d(1.32,.075,.27,u.ochre,.58,.02,0,We);for(let E=0;E<13;E++)d(.018,.012,.272,u.paperEdge,.01+E*.1,.065,0,We);for(let E=0;E<5;E++)for(const L of[-.105,.105])l(.027,.03,.37,u.trunk,E*.28,0,L,5,We),l(.018,.018,.16,u.cream,E*.28,.15,L,5,We);for(const E of[-.105,.105])d(1.2,.023,.023,u.cream,.56,.23,E,We);function $e(E,L,D=1.21,V=1,$=!0){const me=new Tt;me.position.set(E,D,L),me.scale.setScalar(V),y.add(me),l(.22,.28,.075,u.paperEdge,0,.037,0,12,me),l(.14,.22,.93,u.warmWhite,0,.54,0,10,me),l(.23,.23,.055,u.paperEdge,0,1.02,0,14,me),l(.14,.14,.23,u.navy,0,1.17,0,10,me),l(.13,.13,.17,u.glass,0,1.18,0,10,me);for(let Ge=0;Ge<8;Ge++){const Ze=Ge/8*Math.PI*2;l(.012,.012,.24,u.warmWhite,Math.cos(Ze)*.141,1.18,Math.sin(Ze)*.141,4,me)}l(.2,.2,.044,$?u.roof:u.blueRoof,0,1.31,0,12,me),l(0,.22,.19,$?u.roof:u.blueRoof,0,1.424,0,10,me),l(.014,.015,.13,u.gold,0,1.57,0,5,me);const Re=M(new Zn(.22,.012,4,20),u.warmWhite,0,1.12,0,me);Re.rotation.x=Math.PI/2;for(let Ge=0;Ge<12;Ge++){const Ze=Ge/12*6.283;l(.01,.01,.105,u.warmWhite,Math.cos(Ze)*.22,1.07,Math.sin(Ze)*.22,4,me)}return d(.07,.12,.025,u.navy,0,.73,.164,me),d(.08,.17,.024,u.trunk,0,.115,.22,me),me}const O=new Tt;O.position.set(1.66,1.21,-5.22),O.rotation.y=-.08,y.add(O);const mt=x("#7699a5",.53),st=x("#567e90",.52),N=x("#e6dcc3");d(1.56,.055,.72,u.paperEdge,0,.025,0,O),d(1.41,.026,.63,u.cream,0,.063,.025,O);for(const E of[-.53,.53]){d(.29,1.38,.32,mt,E,.77,0,O),d(.043,1.41,.35,N,E+Math.sign(E)*.148,.77,0,O),d(.27,1.35,.018,st,E,.77,-.17,O),d(.015,1.35,.013,N,E-.07,.77,.172,O),d(.014,1.35,.013,N,E+.035,.77,.172,O);for(let L=0;L<12;L++)d(.285,.01,.013,N,E,.125+L*.113,.173,O);d(.064,.13,.022,u.navy,E,.145,.176,O),d(.11,.023,.09,N,E,.23,.18,O)}d(1.1,.28,.33,st,0,1.34,0,O),d(1.37,.045,.36,N,0,1.504,0,O),d(.8,.047,.32,N,0,1.17,0,O),d(.8,.065,.245,mt,0,1.055,.026,O),d(.8,.02,.27,N,0,1.015,.025,O);for(const E of[-.23,0,.23])d(.014,.11,.018,N,E,1.12,.08,O);for(let E=0;E<11;E++)d(.012,.28,.012,N,-.48+E*.096,1.34,.176,O);for(let E=0;E<3;E++)d(1.28+E*.08,.02,.1,u.paperEdge,0,.045-E*.02,.4+E*.073,O);le(1.35,-5.2,{w:.5,d:.43,h:.5,roof:u.blueRoof,y:1.21,angle:-.17}),le(.48,-5.58,{w:.39,d:.35,h:.47,roof:u.blueRoof,y:1.21,angle:-.1}),le(1.39,-6.15,{w:.39,d:.33,h:.43,roof:u.roofLight,y:1.21,angle:.08});for(const[E,L]of[[2.27,-5.26],[2.29,-4.66],[1.85,-4.31],[.08,-4.45]])re(E,L,.51,p()>.4?"pine":"round",1.21);Z(new Ni([[.29,1.216,-4.85],[.88,1.216,-4.32],[1.7,1.216,-4.41],[1.93,1.216,-4.93]].map(E=>new B(...E))),.16,u.road,64),w([[1.4,1.4,-3.99],[1.9,1.4,-4.03],[2.46,1.4,-4.26]],u.cream,.016);for(let E=0;E<7;E++)l(.014,.014,.18,u.cream,1.4+E*.16,1.32,-3.99-E*.036,5);const T=[[-4.04,.599,3.43],[-3.44,.599,4.21],[-3.1,.599,4.93],[-2.96,.599,5.62],[-2.12,.599,6.36],[-1.44,.599,7.13]],H=new Ni(T.map(E=>new B(...E)));function Z(E,L,D,V=140,$=0,me=y){const Re=[];for(let Ze=0;Ze<V;Ze++){const ft=E.getPoint(Ze/V),an=E.getPoint((Ze+1)/V),Ct=E.getTangent(Ze/V),Tn=E.getTangent((Ze+1)/V),An=new B(-Ct.z,0,Ct.x).normalize().multiplyScalar(L/2),$t=new B(-Tn.z,0,Tn.x).normalize().multiplyScalar(L/2),wn=ft.clone().add(An),Ln=ft.clone().sub(An),kn=an.clone().add($t),Er=an.clone().sub($t);for(const vi of[wn,kn,Ln,Ln,kn,Er])Re.push(vi.x,vi.y+$,vi.z)}const Ge=new yt;return Ge.setAttribute("position",new tt(Re,3)),Ge.computeVertexNormals(),M(Ge,D,0,0,0,me)}Z(H,.53,u.shallow),Z(H,.4,x("#75aeb7"),100,.003),w(T.map(E=>[E[0]-.21,.606,E[2]]),u.foam,.016);const Q=new Tt;Q.position.set(-2.05,.6,5.45),y.add(Q);const ge=x("#aaa18b"),ve=x("#c1b299");x("#505b60");const ee=x("#444f53");l(.33,.37,.15,ge,0,.075,0,8,Q);function ae(E,L,D,V=x("#536065",.96,{side:2}),$=ee,me=.18){const Re=[];for(let Ze=0;Ze<8;Ze++){const ft=Ze/8*6.283,an=(Ze+1)/8*6.283,Ct=[[E*.29,L+me],[E*.8,L+.015],[E,L+.068]];for(let Tn=1;Tn<Ct.length;Tn++){const[An,$t]=Ct[Tn-1],[wn,Ln]=Ct[Tn],kn=[Math.sin(ft)*An,$t,Math.cos(ft)*An],Er=[Math.sin(an)*An,$t,Math.cos(an)*An],vi=[Math.sin(ft)*wn,Ln,Math.cos(ft)*wn],Sl=[Math.sin(an)*wn,Ln,Math.cos(an)*wn];for(const yl of[kn,Er,vi,Er,Sl,vi])Re.push(...yl)}w([[Math.sin(ft)*E*.3,L+me+.007,Math.cos(ft)*E*.3],[Math.sin(ft)*E*.8,L+.023,Math.cos(ft)*E*.8],[Math.sin(ft)*E,L+.075,Math.cos(ft)*E],[Math.sin(ft)*E*1.025,L+.108,Math.cos(ft)*E*1.025]],$,.014,D)}const Ge=new yt;Ge.setAttribute("position",new tt(Re,3)),Ge.computeVertexNormals(),M(Ge,V,0,0,0,D),l(E*.29,E*.29,.035,V,0,L+me-.01,0,8,D)}for(let E=0;E<4;E++){const L=.13+E*.325,D=.28-E*.027;l(D,D+.013,.245,ge,0,L+.123,0,8,Q),l(D+.024,D+.024,.027,ve,0,L+.023,0,8,Q);for(let V=0;V<8;V++){const $=V/8*6.283+.3927,me=Math.sin($)*D*.934,Re=Math.cos($)*D*.934,Ge=d(.063,.105,.011,u.navy,me,L+.135,Re,Q);Ge.rotation.y=$,l(.0315,.0315,.012,u.navy,me,L+.187,Re,10,Q).rotation.set(Math.PI/2,0,-$);for(let ft=0;ft<3;ft++){const an=d(D*.66,.009,.008,ve,Math.sin($)*(D*.935+.007),L+.06+ft*.069,Math.cos($)*(D*.935+.007),Q);an.rotation.y=$}}ae(D+.105,L+.237,Q)}l(.03,.06,.22,ee,0,1.63,0,8,Q);for(let E=0;E<3;E++)l(.035,.045,.027,ee,0,1.57+E*.065,0,8,Q);l(0,.035,.13,ee,0,1.8,0,6,Q);const de=new Tt;de.position.set(1.16,.065,0),We.add(de);const ze=x("#d3a347",.85,{side:2}),Ee=x("#bc8e38"),be=x("#517d75");l(.41,.45,.075,u.paperEdge,0,.008,0,16,de),l(.33,.36,.045,u.cream,0,.067,0,8,de),l(.176,.176,.255,u.roof,0,.22,0,8,de);for(let E=0;E<8;E++){const L=E/8*6.283;l(.021,.028,.27,u.roof,Math.sin(L)*.272,.227,Math.cos(L)*.272,7,de),l(.034,.039,.032,u.cream,Math.sin(L)*.272,.107,Math.cos(L)*.272,7,de);const D=L+.3927,V=Math.sin(D)*.169,$=Math.cos(D)*.169;d(.075,.16,.014,u.navy,V,.22,$,de).rotation.y=D,d(.01,.14,.018,u.roofLight,V,.22,$,de).rotation.y=D}l(.29,.29,.055,be,0,.348,0,8,de),ae(.39,.371,de,ze,Ee,.16),l(.184,.184,.18,u.roof,0,.583,0,8,de);for(let E=0;E<8;E++){const L=E/8*6.283+.3927,D=Math.sin(L)*.176,V=Math.cos(L)*.176;d(.092,.105,.013,u.glass,D,.588,V,de).rotation.y=L,d(.014,.13,.019,u.roof,D,.588,V,de).rotation.y=L}l(.22,.22,.047,be,0,.692,0,8,de),ae(.32,.715,de,ze,Ee,.205),l(.015,.04,.09,Ee,0,.98,0,8,de),l(0,.012,.1,Ee,0,1.066,0,5,de);const Oe=new Tt;Oe.position.set(-2.82,.63,5.96),Oe.rotation.y=-.62,y.add(Oe);const Ve=new Gi;Ve.moveTo(-.53,0),Ve.lineTo(-.53,.23),Ve.quadraticCurveTo(0,.51,.53,.23),Ve.lineTo(.53,0),Ve.lineTo(.35,0),Ve.quadraticCurveTo(0,.45,-.35,0),Ve.closePath();const je=new gr(Ve,{depth:.28,bevelEnabled:!1,curveSegments:12});je.translate(0,0,-.14),M(je,u.paperEdge,0,0,0,Oe);for(const E of[-.16,.16]){w([[-.53,.26,E],[-.3,.37,E],[0,.415,E],[.3,.37,E],[.53,.26,E]],u.cream,.023,Oe);for(let L=0;L<7;L++){const D=-.51+L*.17,V=.24+.15*(1-(D/.54)**2);l(.018,.018,.15,u.cream,D,V+.025,E,5,Oe)}}le(-1.15,6.25,{w:.37,d:.33,h:.4,roof:u.blueRoof,angle:-.3}),re(-1.3,5.3,.7),re(-1.82,4.59,.67,"pine"),at(-.81,3.94,.66,.59,u.meadowLight),Ye(-1.5,3.41,.45),Ye(-1.87,3.66,.34),le(-.67,4.33,{w:.43,d:.34,h:.37,roof:u.blueRoof,angle:-.22}),le(-1.13,4.6,{w:.37,d:.29,h:.31,roof:u.roofLight,angle:-.14}),d(.72,.1,.18,u.ochre,1.84,.46,4.38);for(let E=0;E<6;E++)d(.08,.06,.21,E%2?u.paperEdge:u.rockLight,1.52+E*.12,.53,4.38);for(let E=0;E<2;E++){const L=1.5+E*.34,D=4.04;d(.055,.46,.055,u.gold,L,.8,D),d(.38,.043,.043,u.gold,L+.1,1.04,D),w([[L-.03,1.07,D],[L+.31,1.07,D],[L+.31,.8,D]],u.navy,.008),d(.19,.1,.13,E?u.roof:u.blueRoof,L,.62,D+.14)}at(.64,2.58,.54,.46,u.paleSand,.592),l(.16,.19,.06,u.ochre,.79,.62,2.54,12),d(.044,.33,.044,u.gold,.79,.8,2.54);const z=M(new Zn(.17,.024,5,20),u.gold,.79,1.055,2.54);z.rotation.y=.22;for(let E=0;E<12;E++){const L=E/12*6.28,D=d(.022,.125,.027,u.gold,.79+Math.sin(L)*.244,1.055+Math.cos(L)*.244,2.54);D.rotation.z=-L}for(let E=0;E<3;E++){const L=.68+E*.3,D=3.06+E*.05;l(.011,.011,.2,u.trunk,L,.7,D,5),l(0,.15,.08,E%2?u.cream:u.coral,L,.84,D,8);const V=d(.105,.025,.22,u.cream,L-.08,.62,D+.09);V.rotation.x=-.15}const pe=new Tt;pe.position.set(1.1,.59,1.83),pe.scale.setScalar(.83),y.add(pe),l(.31,.34,.055,u.paperEdge,0,.027,0,20,pe),l(.26,.26,.19,u.glass,0,.14,0,16,pe),l(.27,.27,.057,u.trunk,0,.252,0,16,pe);for(let E=0;E<12;E++){const L=E/12*6.283;l(.012,.012,.18,u.cream,Math.cos(L)*.261,.145,Math.sin(L)*.261,4,pe)}l(.104,.11,.84,u.warmWhite,0,.7,0,16,pe);for(let E=0;E<5;E++)d(.035,.045,.014,u.navy,0,.41+E*.145,.107,pe);l(.2,.104,.13,u.cream,0,1.15,0,16,pe),l(.216,.216,.065,u.warmWhite,0,1.236,0,20,pe),l(.099,.1,.14,u.warmWhite,0,1.34,0,16,pe),l(.148,.148,.06,u.cream,0,1.427,0,20,pe),l(.079,.079,.16,u.glass,0,1.536,0,10,pe),l(.045,.1,.07,u.navy,0,1.65,0,10,pe),l(.006,.009,.18,u.navy,0,1.77,0,5,pe);for(const[E,L]of[[.213,1.316],[.146,1.507]]){const D=M(new Zn(E,.007,4,24),u.navy,0,L,0,pe);D.rotation.x=Math.PI/2;for(let V=0;V<16;V++){const $=V/16*6.283;l(.004,.004,.058,u.navy,Math.cos($)*E,L-.028,Math.sin($)*E,4,pe)}}le(-.67,2.38,{w:.34,d:.3,h:.26,roof:u.blueRoof,angle:.13,floors:1,chimney:!1}),le(-1.1,2.53,{w:.34,d:.3,h:.27,roof:u.roofLight,angle:.13,floors:1,chimney:!1}),re(-1.22,2,.66),re(-.54,1.91,.58,"pine");const se=_l,_e=Up(ir);Z(_e,.39,u.ochre,260,-.015),Z(_e,.34,u.road,260,.006);const Le=_e.getLength();for(let E=0;E<Le;E+=.28){const L=E/Le,D=Math.min((E+.14)/Le,1),V=_e.getPointAt(L),$=_e.getPointAt(D),me=_e.getPointAt((L+D)/2);V.y+=.019,$.y+=.019,me.y+=.019,w([V.toArray(),me.toArray(),$.toArray()],u.routeInk,.031)}const ue=se.slice(14,17);for(let E=1;E<ue.length;E++){const L=ue[E-1],D=ue[E];C([[L[0]-.28,L[2]],[L[0]+.28,L[2]],[D[0]+.3,D[2]],[D[0]-.3,D[2]]],.605,u.sand);const V=[L[0]-.25,L[1]-.035,L[2],L[0]+.25,L[1]-.035,L[2],D[0]-.25,D[1]-.035,D[2],L[0]+.25,L[1]-.035,L[2],D[0]+.25,D[1]-.035,D[2],D[0]-.25,D[1]-.035,D[2]],$=new yt;$.setAttribute("position",new tt(V,3)),$.computeVertexNormals(),M($,u.sand)}const Ae=new Tt;Ae.name="route-car",Ae.scale.setScalar(.9),P.add(Ae),d(.225,.1,.4,u.car,0,.09,0,Ae),d(.203,.1,.225,u.car,0,.18,-.015,Ae),d(.175,.07,.012,u.glass,0,.184,.103,Ae).rotation.x=-.2,d(.175,.07,.012,u.glass,0,.184,-.133,Ae).rotation.x=.15;for(const E of[-.105,.105]){d(.009,.065,.08,u.window,E,.19,.047,Ae),d(.009,.065,.076,u.window,E,.19,-.055,Ae),d(.013,.012,.032,u.cream,E,.139,-.03,Ae);for(const L of[-.125,.13]){const D=l(.054,.054,.043,u.rubber,E,.065,L,10,Ae);D.rotation.z=Math.PI/2;const V=l(.025,.025,.046,u.paperEdge,E,.065,L,8,Ae);V.rotation.z=Math.PI/2}}d(.185,.03,.023,u.cream,0,.068,.213,Ae),d(.17,.017,.021,u.cream,0,.08,-.211,Ae);for(const E of[-.075,.075])d(.048,.03,.013,u.cream,E,.112,.204,Ae);d(.16,.025,.21,u.ochre,0,.251,-.025,Ae),d(.15,.058,.15,u.paperEdge,0,.277,-.03,Ae);for(const E of[-.065,.065])d(.012,.064,.159,u.trunk,E,.278,-.03,Ae);function Be(E,L,D=1,V=0){const $=new Tt;$.position.set(E,.43,L),$.rotation.y=V,$.scale.setScalar(D),P.add($),M(new as(.22,8,4),u.warmWhite,0,.03,0,$).scale.set(.46,.29,1.35),d(.13,.033,.3,u.trunk,0,.073,0,$),l(.012,.012,.58,u.trunk,0,.37,0,5,$);const Re=new yt;Re.setAttribute("position",new tt([.015,.65,0,.015,.13,.22,.015,.13,.013],3)),Re.computeVertexNormals(),M(Re,x("#fff7db",.9,{side:2}),0,0,0,$);const Ge=new yt;return Ge.setAttribute("position",new tt([-.015,.52,-.015,-.015,.13,-.18,-.015,.13,-.015],3)),Ge.computeVertexNormals(),M(Ge,x("#deb482",.9,{side:2}),0,0,0,$),w([[E-.1,.413,L+.22],[E-.18,.413,L+.36],[E-.16,.413,L+.5]],u.foam,.012),$}const St=[Be(3.42,1.55,1.02,-.5),Be(3.98,-2.12,.8,.45),Be(3.05,5.7,.72,-.6)];at(3.92,3.82,.42,.5,u.shallow,.391),j(3.95,.36,3.86,.42,u.rockLight),j(3.69,.36,3.96,.24,u.rock),j(4.16,.36,3.64,.22,u.rockLight),$e(3.99,3.8,.83,.35,!1),re(3.76,3.75,.24,"round",.8);const gt=[];for(const[E,L,D,V]of[[3.3,2.65,-5.8,.28],[-1,2.15,-4.35,.21],[3.8,1.95,5.03,.28]]){const $=new Tt;$.position.set(E,L,D),P.add($);const me=new yt;me.setAttribute("position",new tt([-V,0,.04,0,-.07,0,-V*.4,.075,-.045,0,-.07,0,V,0,.04,V*.4,.075,-.045],3)),me.computeVertexNormals(),M(me,x("#fff8e2",.9,{side:2}),0,0,0,$),gt.push($)}function Jt(E,L,D,V){const $=new Tt;$.position.set(E,L,D),$.scale.setScalar(V),y.add($);for(const[me,Re,Ge]of[[-.28,0,.28],[.02,.11,.34],[.3,0,.25]])S(Ge,u.warmWhite,me,Re,0,1,$).scale.set(1,.8,.3);return d(.69,.11,.11,u.warmWhite,.01,-.09,0,$),$}Jt(-3.7,1.56,1.3,.45);const Ft=[{id:"huaian",name:"淮安",note:"古镇 · 首晚可选",p:[-2.7,.74,5.65],tag:[-3,1.03,5.6]},{id:"wuhu",name:"芜湖",note:"中江塔 · 江畔出发",p:[-1.86,.72,6.35],tag:[-3.25,1.03,6.3]},{id:"lianyungang",name:"连云港",note:"向海中转",p:[-.12,.74,4.15],tag:[-2.25,1.04,4.15]},{id:"rizhao",name:"日照",note:"灯塔 · 返程可选",p:[.05,.74,2.36],tag:[-2.2,1.04,2.16]},{id:"qingdao",name:"青岛",note:"五月的风 · 红瓦与海",p:[.08,.75,-.38],tag:[-2.45,1.1,-.55]},{id:"weihai",name:"威海",note:"幸福门 · 慢一点看海",p:[1.47,1.39,-4.51],tag:[-1.65,1.35,-4.75]}],$n=document.createElement("div");$n.className="coastal-scene-labels",$n.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",i.appendChild($n);const Xi=document.createElement("style");Xi.textContent=`
    .coastal-city-tag{box-sizing:border-box;min-height:44px;position:absolute;left:0;top:0;pointer-events:auto;display:flex;flex-direction:column;align-items:flex-start;gap:1px;border:1px solid rgba(160,133,88,.19);border-radius:3px 8px 4px 7px;padding:7px 12px 6px;background:rgba(255,248,227,.95);box-shadow:1px 4px 0 rgba(86,80,55,.10),0 4px 13px rgba(68,76,64,.10);color:#193e51;cursor:pointer;white-space:nowrap;font-family:inherit;transition:background .2s,box-shadow .2s;transform:translate(-50%,-50%);line-height:1.2}
    .coastal-city-tag strong{font-size:19px;font-weight:700;letter-spacing:.08em;font-family:MaShan,var(--font-display,'Noto Serif SC','Songti SC',serif)}
    .coastal-city-tag small{font-size:9px;letter-spacing:.09em;color:#7a8276;margin-top:2px}
    .coastal-city-tag::before{content:'';position:absolute;left:-4px;top:12px;width:7px;height:7px;background:#f58b65;border:2px solid #fff8e5;border-radius:50%}
    .coastal-city-tag[data-selected=true]{background:#fff8e7;border-color:#ef9774;box-shadow:1px 4px 0 rgba(185,106,65,.14),0 4px 15px rgba(68,76,64,.1)}
    .coastal-city-tag[data-selected=true]::before{background:#e97046;box-shadow:0 0 0 3px rgba(232,112,65,.16)}
    .coastal-city-tag[data-selected=false] small{display:none}.coastal-city-tag[data-selected=false]{padding:6px 10px;min-height:44px}.coastal-city-tag:hover{background:#fffaf0;box-shadow:1px 5px 0 rgba(86,80,55,.13),0 5px 15px rgba(68,76,64,.13)}
    .coastal-city-tag:focus-visible{outline:3px solid #d56e46;outline-offset:4px}
    @media(max-width:600px){.coastal-city-tag{padding:5px 8px}.coastal-city-tag strong{font-size:16px}.coastal-city-tag small{font-size:8px}}
  `,i.appendChild(Xi);const qi=[];Ft.forEach(E=>{const L=new Tt;L.position.fromArray(E.p),P.add(L);const D=l(.12,.12,.035,u.warmWhite,0,0,0,24,L),V=l(.084,.084,.042,u.coral,0,.023,0,24,L),$=M(new _r(.145,.174,28),x("#f08a60",.9,{transparent:!0,opacity:.3,side:2}),0,-.006,0,L);$.rotation.x=-Math.PI/2,D.userData.cityId=E.id,V.userData.cityId=E.id,qi.push(D,V);const me=document.createElement("button");me.type="button",me.className="coastal-city-tag",me.dataset.city=E.id,me.setAttribute("aria-label",`${E.name}：${E.note}，查看行程`),me.innerHTML=`<strong>${E.name}</strong><small>${E.note}</small>`,me.addEventListener("click",()=>{Mr(E.id),e(E.id)}),$n.appendChild(me),E.el=me,E.marker=L,E.halo=$,E.worldTag=new B(...E.tag)});const Yi=Bp(ir,[...Gp(ir),...zp(ir),...Vp(ir)],y);y.updateMatrixWorld(!0);const zn=[...[["qd_zhanqiao","栈桥 · 回澜阁","qingdao",de],["qd_st_michaels","圣弥厄尔教堂","qingdao",he],["qd_mayfour_square","五四广场 · 五月的风","qingdao",fe],["wh_happiness_gate","幸福门","weihai",O],["rz_lighthouse","日照灯塔","rizhao",pe],["wh_zhongjiang_pagoda","中江塔","wuhu",Q]].map(([E,L,D,V])=>{const $=new hi().setFromObject(V);return{id:E,name:L,city:D,group:V,bounds:$,focus:$.getCenter(new B).toArray(),optional:!1}}),...Yi],Vn=new Tt;Vn.name="landmark-detail",Vn.visible=!1,v.add(Vn);const Mn=new Map;zn.forEach(E=>{const L=E.group.clone(!0);L.traverse(D=>{D.isMesh&&(D.geometry=D.geometry.clone())}),L.matrixAutoUpdate=!1,L.matrix.copy(E.group.matrixWorld),L.visible=!1,Vn.add(L),Mn.set(E.id,L)});const di=[],Zi=new Oi({visible:!1});A.set("landmark-hit-target",Zi),zn.forEach(E=>{const L=E.bounds.getSize(new B),D=new un(new Jn(L.x,Math.max(.12,L.y),L.z),Zi);D.position.fromArray(E.focus),D.userData.landmarkId=E.id,P.add(D),di.push(D)}),a.userData.landmarks=zn.map(({id:E,name:L,city:D,optional:V,bounds:$})=>({id:E,name:L,city:D,optional:V,bounds:{min:$.min.toArray(),max:$.max.toArray()}})),y.updateMatrixWorld(!0);const Qn=new Map;y.traverse(E=>{if(!E.isMesh)return;const L=E.geometry.clone().applyMatrix4(E.matrixWorld),D=L.index?L.toNonIndexed():L;D!==L&&L.dispose(),D.deleteAttribute("uv"),D.deleteAttribute("uv1");const V=`${E.material.uuid}|${D.hasAttribute("color")}`;Qn.has(V)||Qn.set(V,{material:E.material,geos:[]}),Qn.get(V).geos.push(D)}),y.traverse(E=>{E.isMesh&&E.geometry.dispose()}),y.clear();for(const{material:E,geos:L}of Qn.values()){const D=Fp(L,!1);L.forEach(V=>V.dispose()),D&&M(D,E,0,0,0,y)}const pi=new il("#fff8e6","#9da98d",2.6);a.add(pi);const Gt=new Xs("#fff2d9",4.1);Gt.position.set(-6,14,9),Gt.castShadow=!0,Gt.shadow.mapSize.set(window.innerWidth<600?1024:1536,window.innerWidth<600?1024:1536),Gt.shadow.camera.left=-10,Gt.shadow.camera.right=10,Gt.shadow.camera.top=12,Gt.shadow.camera.bottom=-12,Gt.shadow.camera.near=.5,Gt.shadow.camera.far=40,Gt.shadow.normalBias=.03,Gt.shadow.bias=-12e-5,Gt.shadow.radius=3,a.add(Gt);const jn=new Xs("#dcecea",.95);jn.position.set(7,7,-9),a.add(jn);const ei=M(new Hi(200,200),new Ko({color:"#807052",opacity:.17}),0,-.17,0,a);ei.rotation.x=-Math.PI/2,ei.castShadow=!1,ei.receiveShadow=!0;let tn="weihai",nn=!r,mi=!1,qt=1,hn=1,gi=0,R=0,G=0,K=0,q=0,W=0,Me=0,ce=null,ye=!1,Ue=!0,Ie=0,Ke=0,nt=1,we=null,Xe=null;const bt=Object.fromEntries(Ft.map(E=>{let L=0,D=1/0;const V=new B(...E.p);for(let $=0;$<=600;$++){const me=$/600,Re=_e.getPointAt(me).distanceToSquared(V);Re<D&&(D=Re,L=me)}return[E.id,L]})),_t=new Tt;_t.name="day-route-highlight",P.add(_t);const xt=new Oi({color:"#b95e3e",toneMapped:!1});A.set("day-route-focus",xt);const Dt=new Oi({color:"#246478",transparent:!0,opacity:.78,toneMapped:!1,side:2});A.set("car-halo",Dt);const Ne=M(new _r(.2,.235,24),Dt,0,0,0,P);Ne.rotation.x=-Math.PI/2;function Bt(E,L){const D=bt[E],V=bt[L];if(!(D===void 0||V===void 0)){if(Pt(),_t.traverse($=>{$.isMesh&&$.geometry.dispose()}),_t.clear(),Math.abs(V-D)>.005){const $=Array.from({length:72},(Re,Ge)=>{const Ze=_e.getPointAt(D+(V-D)*Ge/71);return Ze.y+=.012,Ze}),me=new Ni($);Z(me,.12,xt,96,.006,_t);for(const Re of[.34,.74]){const Ge=D+(V-D)*Re,Ze=_e.getPointAt(Ge),ft=_e.getTangentAt(Ge).multiplyScalar(V>D?1:-1);M(new Bi(.05,.14,3),xt,Ze.x-ft.z*.23,Ze.y+.06,Ze.z+ft.x*.23,_t).quaternion.setFromUnitVectors(new B(0,1,0),new B(ft.x,0,ft.z).normalize())}}Ie=D,ct(L)}}function ct(E){bt[E]!==void 0&&(Pt(),Ke=bt[E],nt=Ke>=Ie?1:-1,(!nn||r)&&(Ie=Ke),Yt(0))}const Ht=new ol,Kt=new xe,Sn={huaian:{eye:[-.4,2.7,8.5],focus:[-2.9,1.05,5.85],ground:.59},wuhu:{eye:[.9,2.4,7.3],focus:[-2.05,1.1,5.45],ground:.59},lianyungang:{eye:[.8,2.4,5.9],focus:[-1.4,.98,3.9],ground:.59},rizhao:{eye:[1.4,2.5,4.1],focus:[-1,1.05,2.1],ground:.59},qingdao:{eye:[3.25,3.2,3.7],focus:[-.8,1.15,-.65],ground:.59},weihai:{eye:[3.4,3.8,-2.3],focus:[-.4,1.4,-5.4],ground:1.21}},rn=new B,ht=new B,Et=new B,yn=new B(5.7,23.8,21.8),vt=new B(0,.48,-.05);function Pt(){we&&(we=null,m.fov=qt/hn<1?68:60,m.updateProjectionMatrix(),m.userData.transitioning=!1,m.userData.transitionProgress=1)}function fn(){return _==="immersive"?.42:.25}function Ji(){if(_==="immersive"){const L=Xe?Ml(Xe):Sn[tn];if(g.userData.focusCity=(Xe==null?void 0:Xe.city)||tn,g.userData.focusLandmark=(Xe==null?void 0:Xe.id)||null,g.userData.groundHeight=L.ground,g.userData.focusPoint=[...L.focus],we){const D=Math.min(1,we.elapsed/1.15),V=D*D*(3-2*D);g.position.copy(we.eye).lerp(rn.fromArray(L.eye),V),Et.copy(we.focus).lerp(ht.fromArray(L.focus),V),g.lookAt(Et),g.fov=ai.lerp(we.fov,qt/hn<1?68:60,V),g.updateProjectionMatrix(),g.userData.transitioning=!0,g.userData.transitionProgress=D,g.updateMatrixWorld(!0);return}g.userData.transitioning=!1,g.userData.transitionProgress=1,rn.fromArray(L.eye),ht.fromArray(L.focus).sub(rn),ht.applyAxisAngle(new B(0,1,0),K),ht.y+=q*ht.length(),Et.copy(rn).add(ht),g.position.copy(rn),g.lookAt(Et),g.userData.focusCity=(Xe==null?void 0:Xe.city)||tn,g.userData.focusLandmark=(Xe==null?void 0:Xe.id)||null,g.userData.groundHeight=L.ground,g.userData.focusPoint=[...L.focus],g.updateMatrixWorld(!0);return}const E=yn.clone();qt/hn>1.75?E.x=12:qt/hn<.95&&(E.x=2.4),E.applyAxisAngle(new B(0,1,0),K),E.y+=q*10,g.position.copy(E),g.lookAt(vt),g.updateMatrixWorld(!0)}function Sa(){if(mi)return;Pt();const E=i.getBoundingClientRect();qt=Math.max(1,E.width),hn=Math.max(1,E.height),o.setPixelRatio(Math.min(window.devicePixelRatio||1,qt<600?1.6:2)),o.setSize(qt,hn,!1);const L=qt/hn,D=L<.8?16.65:L<1.05?16:L>1.75?14.6:15.4,V=Math.max(D/2,(L<.95?6.2:7)/L)*(qt<320?1.18:qt<600?1.1:1),$=V*L;h.left=-$,h.right=$,h.top=V,h.bottom=-V,h.updateProjectionMatrix(),m.aspect=L,m.fov=L<1?68:60,m.updateProjectionMatrix(),Ji(),Yt(0)}function xl(){if(Ft.forEach(D=>{D.el.style.display=Xe||D.id!==tn?"none":""}),Xe)return;const E=Ft.find(D=>D.id===tn),L=(E.el.offsetWidth||140)/2;E.el.style.left=`${Math.min(qt/2,L+14)}px`,E.el.style.top=`${hn-42}px`,E.el.style.zIndex="2"}function Mr(E){if(!Ft.some(D=>D.id===E))return;const L=tn!==E;tn=E,Xe=null,L&&_==="immersive"&&(Pt(),K=W=0,q=Me=0,sn()),Ft.forEach(D=>{const V=D.id===E;D.el.dataset.selected=String(V),D.el.setAttribute("aria-pressed",String(V)),D.marker.scale.setScalar(V?1.16:1),D.halo.visible=V}),(!nn||_==="immersive")&&Yt(0)}function vl(E){if(E!=="immersive"&&E!=="overview"||E===_)return;Xe=null;const L=E==="immersive"&&!r;if(Pt(),sn(),L){const D=h.position.distanceTo(vt);we={eye:h.position.clone(),focus:vt.clone(),fov:ai.radToDeg(2*Math.atan((h.top-h.bottom)/2/D)),elapsed:0}}_=E,g=_==="immersive"?m:h,K=W=0,q=Me=0,Yt(0)}function Ml(E){const L=E.bounds.getSize(new B),D=E.focus,$=Math.max(L.x,L.z,L.y,.55)*(qt/hn<.85?2.4:1.95);return{focus:D,eye:[D[0]+$*.76,D[1]+$*.85,D[2]+$],ground:E.bounds.min.y}}function ya(E){const L=zn.find(D=>D.id===E);L&&(Pt(),sn(),Xe=L,_="immersive",g=m,K=W=0,q=Me=0,Yt(0),i.dispatchEvent(new window.CustomEvent("landmarkselect",{detail:{id:L.id,name:L.name,city:L.city,optional:L.optional}})))}function Yt(E){y.visible=!Xe,P.visible=!Xe,Vn.visible=!!Xe,Mn.forEach((V,$)=>{V.visible=$===(Xe==null?void 0:Xe.id)}),we&&(we.elapsed+=E,we.elapsed>=1.15&&Pt()),K+=(W-K)*(r||ce?1:.18),q+=(Me-q)*(r||ce?1:.18),Ji(),nn&&E&&(G+=E,Ie+=(Ke-Ie)*Math.min(1,E*2.8),Math.abs(Ke-Ie)<2e-4&&(Ie=Ke));const L=_e.getPointAt(Ie),D=_e.getTangentAt(Ie);Ae.position.copy(L),Ae.position.y+=.018,Ne.position.set(L.x,L.y+.025,L.z),Ae.rotation.set(-Math.atan2(D.y*nt,Math.hypot(D.x,D.z)),Math.atan2(D.x*nt,D.z*nt),0,"YXZ"),St.forEach((V,$)=>{V.rotation.z=nn?Math.sin(G*.8+$*1.3)*.025:0,V.position.y=.43+(nn?Math.sin(G*1.1+$)*.012:0)}),gt.forEach((V,$)=>{V.rotation.z=nn?Math.sin(G*.45+$)*.045:0}),Ft.forEach(V=>{V.id===tn&&nn&&V.halo.scale.setScalar(1+Math.sin(G*2)*.075)}),v.updateMatrixWorld(!0),xl(),o.render(a,g)}function Ea(E){if(mi)return;gi=requestAnimationFrame(Ea);const L=Math.min((E-R)/1e3,.045);R=E,Ue&&(we||nn||Math.abs(K-W)>1e-4||Math.abs(q-Me)>1e-4||ce)&&Yt(L)}let Sr=null,_i=null,En=!1,us=0;function bn(){us=performance.now()+800}function ba(E,L,D,V,$){we&&(Pt(),Yt(0)),ce={x:E,y:L,yaw:W,pitch:Me,isTouch:D,id:V,target:$},ye=!1,us=0}function Ta(E,L){if(!ce)return;const D=E-ce.x,V=L-ce.y;Math.hypot(D,V)>3&&(ye=!0),ye&&(W=ai.clamp(ce.yaw-D*(ce.isTouch?.004:.0035),-fn(),fn()),ce.isTouch||(Me=ai.clamp(ce.pitch+V*.002,_==="immersive"?-.22:-.14,_==="immersive"?.22:.14)),o.domElement.style.cursor="grabbing",ce.x=E,ce.y=L,ce.yaw=W,ce.pitch=Me)}function Aa(E,L){if(Xe)return;const D=o.domElement.getBoundingClientRect();Kt.set((E-D.left)/D.width*2-1,-(L-D.top)/D.height*2+1),Ht.setFromCamera(Kt,g);const V=Ht.intersectObjects([...qi,...di],!1)[0];if(V){const $=V.object.userData.landmarkId;if($){ya($);return}Mr(V.object.userData.cityId),e(V.object.userData.cityId)}}function wa(E){var D,V,$;if(E.pointerType==="touch"||E.button!==0||ce||En)return;const L=E.target===o.domElement?o.domElement:(V=(D=E.target).closest)==null?void 0:V.call(D,".coastal-city-tag");L&&(E.preventDefault(),document.documentElement.classList.add("map-drag-active"),ba(E.clientX,E.clientY,!1,E.pointerId,L),($=L.setPointerCapture)==null||$.call(L,E.pointerId))}function Ra(E){E.pointerType==="touch"||!ce||ce.isTouch||E.pointerId!==ce.id||(E.preventDefault(),Ta(E.clientX,E.clientY),ye&&bn())}function Ca(E){if(E.pointerType==="touch"||!ce||ce.isTouch||E.pointerId!==ce.id)return;const L=ye,D=ce.target===o.domElement;L&&bn(),sn(),!L&&D&&Aa(E.clientX,E.clientY)}function sn(){var L,D;document.documentElement.classList.remove("map-drag-active");const E=ce;ce=null,Sr=null,_i=null,o.domElement.style.cursor="grab",E&&!E.isTouch&&((D=(L=E.target)==null?void 0:L.hasPointerCapture)!=null&&D.call(L,E.id))&&E.target.releasePointerCapture(E.id)}function yr(E){E.pointerType!=="touch"&&ce&&!ce.isTouch&&E.pointerId===ce.id&&(bn(),sn())}function Ki(){we&&(Pt(),Yt(0)),En=!0,bn(),sn()}function Pa(E){const L=i.contains(E.target);if(!L&&!(ce!=null&&ce.isTouch)&&!En)return;if(En||E.touches.length!==1){Ki();return}if(!L||ce)return;const D=E.touches[0];Sr=D.identifier,_i=null,ba(D.clientX,D.clientY,!0,D.identifier,E.target)}function La(E){if(En){bn();return}if(!ce||!ce.isTouch)return;if(E.touches.length!==1){Ki();return}const L=Array.from(E.touches).find($=>$.identifier===Sr);if(!L){Ki();return}const D=L.clientX-ce.x,V=L.clientY-ce.y;if(!_i&&Math.max(Math.abs(D),Math.abs(V))>6&&(_i=Math.abs(D)>Math.abs(V)?"rotate":"scroll"),_i==="scroll"){ye=!0,bn();return}if(_i==="rotate"){if(!E.cancelable){Ki();return}E.preventDefault(),Ta(L.clientX,L.clientY),bn()}}function Da(E){if(En){bn(),E.touches.length===0&&(En=!1);return}if(!ce||!ce.isTouch)return;const L=Array.from(E.changedTouches).find($=>$.identifier===Sr);if(!L)return;const D=ye,V=ce.target===o.domElement;if(D&&bn(),sn(),E.touches.length){Ki();return}!D&&V&&Aa(L.clientX,L.clientY)}function Ia(E){!(ce!=null&&ce.isTouch)&&!En||(bn(),sn(),En=E.touches.length>0)}function Na(E){E.detail!==0&&(En||ce&&ye||performance.now()<us)&&(E.preventDefault(),E.stopPropagation())}o.domElement.style.cursor="grab",i.addEventListener("pointerdown",wa),window.addEventListener("pointermove",Ra),window.addEventListener("pointerup",Ca),window.addEventListener("pointercancel",yr),window.addEventListener("blur",sn),i.addEventListener("lostpointercapture",yr),window.addEventListener("touchstart",Pa,{passive:!0}),i.addEventListener("touchmove",La,{passive:!1}),window.addEventListener("touchend",Da,{passive:!0}),window.addEventListener("touchcancel",Ia,{passive:!0}),i.addEventListener("click",Na,!0);const Fa=new ResizeObserver(Sa);Fa.observe(i);const xi=typeof IntersectionObserver<"u"?new IntersectionObserver(E=>{var L;Ue=((L=E[0])==null?void 0:L.isIntersecting)??!0,Ue&&Yt(0)},{rootMargin:"120px"}):null;return xi==null||xi.observe(i),Mr(tn),Sa(),gi=requestAnimationFrame(Ea),requestAnimationFrame(()=>{mi||t({renderer:"three.js",objects:a.children.length,triangles:o.info.render.triangles})}),{selectCity:Mr,focusLandmark:ya,getLandmarks(){return zn.map(({id:E,name:L,city:D,optional:V})=>({id:E,name:L,city:D,optional:V}))},clearLandmark(){Xe=null,K=W=0,q=Me=0,Yt(0)},setZoom(E){const L=ai.clamp(Number(E)||1,.75,3);h.zoom=L,m.zoom=L,h.updateProjectionMatrix(),m.updateProjectionMatrix(),Yt(0)},setDestination:ct,setDayRoute:Bt,setViewMode:vl,rotate(E){Pt(),W=ai.clamp(W+E*.1,-fn(),fn()),r&&(K=W,Yt(0))},setMotion(E){nn=!!E&&!r,nn||(Ie=Ke,Yt(0))},reset(){Pt(),sn(),W=0,Me=0,r&&(K=0,q=0),Yt(0)},dispose(){mi=!0,we=null,cancelAnimationFrame(gi),Fa.disconnect(),xi==null||xi.disconnect(),sn(),i.removeEventListener("pointerdown",wa),i.removeEventListener("lostpointercapture",yr),window.removeEventListener("pointermove",Ra),window.removeEventListener("pointerup",Ca),window.removeEventListener("pointercancel",yr),window.removeEventListener("blur",sn),window.removeEventListener("touchstart",Pa),i.removeEventListener("touchmove",La),window.removeEventListener("touchend",Da),window.removeEventListener("touchcancel",Ia),i.removeEventListener("click",Na,!0);const E=new Set([...A.values(),ei.material]);a.traverse(L=>{if(L.isMesh){L.geometry.dispose();for(const D of Array.isArray(L.material)?L.material:[L.material])E.add(D)}}),E.forEach(L=>L.dispose()),o.domElement.removeEventListener("webglcontextlost",c),o.dispose(),o.domElement.remove(),$n.remove(),Xi.remove()}}}export{kp as createScene};
