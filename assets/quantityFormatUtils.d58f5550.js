import{jR as B,az as D,jL as H,jS as g,fV as J,jT as Q,jU as tt,bE as et,aK as at,aM as nt,aN as st,jV as it,jW as rt,jX as G,bK as x,jY as ot,jZ as ct,j_ as ut,j$ as ht,k0 as lt}from"./index.a0c3159d.js";import{b as ft}from"./Segment.b7f04993.js";const _t={readOnly:!0,get(){return B(this.view)}};var F;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(F||(F={}));function T(t){if(!t)return null;if(J(t)&&t.wkid){const e=Q[t.wkid];if(e)return e}if(t.wkt){const e=Mt(t.wkt);if(e)return e}return null}function Mt(t){const e=tt.exec(t);if(!e||e.length!==2)return null;const a=e[1].split(",");if(!a||a.length<3)return null;const n=parseFloat(a[1]),s=parseFloat(a[2]);return isNaN(n)||isNaN(s)?null:{a:n,f:s===0?0:1/s}}function pt(t){const e=T(t||et.WGS84);if(dt(e))return e;const a=e.a*(1-e.f);return Object.assign(e,{b:a,eSq:1-(a/e.a)**2,radius:(2*e.a+a)/3,densificationRatio:1e4/((2*e.a+a)/3)})}function dt(t){return"b"in t&&"eSq"in t&&"radius"in t}function mt(t){return T(t)!==null}function zt(t,e="meters"){if(!t)throw new D("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(n=>!mt(n.spatialReference)))throw new D("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const a=[];for(let n=0;n<t.length;n++){const s=t[n],{spatialReference:m}=s,v=s.type==="polyline"?s.paths:s.rings;let r=0;for(let b=0;b<v.length;b++){const o=v[b];let f=0;for(let M=1;M<o.length;M++){const $=o[M-1][0],_=o[M][0],z=o[M-1][1],u=o[M][1];if(z!==u||$!==_){const c={distance:null};gt(c,[$,z],[_,u],m),f+=c.distance}}r+=f}r=H(r,"meters",e),a.push(r)}return a}function gt(t,e,a,n){const s=e[0]*g,m=e[1]*g,v=a[0]*g,r=a[1]*g,{a:b,b:o,f,radius:M}=pt(n),$=v-s,_=Math.atan((1-f)*Math.tan(m)),z=Math.atan((1-f)*Math.tan(r)),u=Math.sin(_),c=Math.cos(_),j=Math.sin(z),h=Math.cos(z);let q,R,p,i,w,P,N,U,y,A,E=1e3,l=$;do{if(N=Math.sin(l),U=Math.cos(l),p=Math.sqrt(h*N*(h*N)+(c*j-u*h*U)*(c*j-u*h*U)),p===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;w=u*j+c*h*U,P=Math.atan2(p,w),y=c*h*N/p,R=1-y*y,i=w-2*u*j/R,isNaN(i)&&(i=0),A=f/16*R*(4+f*(4-3*R)),q=l,l=$+(1-A)*f*y*(P+A*p*(i+A*w*(2*i*i-1)))}while(Math.abs(l-q)>1e-12&&--E>0);if(E===0){const I=M,L=Math.acos(Math.sin(m)*Math.sin(r)+Math.cos(m)*Math.cos(r)*Math.cos(v-s))*I,S=v-s,X=Math.sin(S)*Math.cos(r),Y=Math.cos(m)*Math.sin(r)-Math.sin(m)*Math.cos(r)*Math.cos(S),Z=Math.atan2(X,Y);return t.azimuth=Z/g,t.distance=L,t.reverseAzimuth=void 0,t}const d=R*(b*b-o*o)/(o*o),k=d/1024*(256+d*(d*(74-47*d)-128)),V=o*(1+d/16384*(4096+d*(d*(320-175*d)-768)))*(P-k*p*(i+k/4*(w*(2*i*i-1)-k/6*i*(4*p*p-3)*(4*i*i-3)))),W=Math.atan2(h*Math.sin(l),c*j-u*h*Math.cos(l)),C=Math.atan2(c*Math.sin(l),c*j*Math.cos(l)-u*h);return t.azimuth=W/g,t.distance=V,t.reverseAzimuth=C/g,t}function Rt(t,e){if(at(e,0,0,0),t.length>0){for(let a=0;a<t.length;++a)nt(e,e,t[a]);st(e,e,1/t.length)}}function wt(t,e,a,n){n.projectToRenderScreen(t,K),n.projectToRenderScreen(e,O),it(a,bt,vt),rt(a,a)}const K=G(),vt=K,O=G(),bt=O;class Nt{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=x(this._spatialReference,1),this._metersPerElevationUnit=x(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}function Ut(t,e,a,n=2,s="abbr"){return ot(t,ft(e,a).value,a,n,s)}function yt(t,e,a=2,n="abbr"){return ct(t,e.value,e.unit,a,n)}function At(t,e,a=2,n="abbr"){return ut(t,e.value,e.unit,a,n)}function Pt(t,e,a=2,n="abbr"){return ht(t,e.value,e.unit,a,n)}function kt(t,e,a=2,n="abbr"){return lt(t,e.value,e.unit,a,n)}export{mt as M,Pt as a,yt as b,Rt as c,F as e,Ut as g,wt as i,kt as j,_t as r,Nt as t,At as w,zt as y,gt as z};
