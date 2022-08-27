import{b4 as J,t as V,hD as A,fO as K,hE as S,hF as N,hG as R,fx as X,fv as D,hH as k,fK as E,hI as F,hJ as G,hK as f}from"./index.a0c3159d.js";function Q(t){return M(t,!0)}function U(t){return M(t,!1)}function M(t,s){if(V(t))return null;const n=t.spatialReference,i=A(n),e="toJSON"in t?t.toJSON():t;if(!i)return e;const h=K(n)?102100:4326,u=S[h].maxX,m=S[h].minX;if(N(e))return T(e,u,m);if(R(e))return e.points=e.points.map(o=>T(o,u,m)),e;if(X(e))return H(e,i);if(D(e)||k(e)){const o=E(q,e),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=f(r.xmin,m)*(2*u),l=x===0?e:F(e,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?L(l,u,s):r.xmin<m?L(l,m,s):l}return e}function H(t,s){if(!s)return t;const n=j(t,s).map(i=>i.extent);return n.length<2?n[0]||t:n.length>2?(t.xmin=s.valid[0],t.xmax=s.valid[1],t):{rings:n.map(i=>[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]])}}function T(t,s,n){if(Array.isArray(t)){const i=t[0];if(i>s){const e=f(i,s);t[0]=i+e*(-2*s)}else if(i<n){const e=f(i,n);t[0]=i+e*(-2*n)}}else{const i=t.x;if(i>s){const e=f(i,s);t.x+=e*(-2*s)}else if(i<n){const e=f(i,n);t.x+=e*(-2*n)}}return t}function j(t,s){const n=[],{ymin:i,ymax:e,xmin:h,xmax:u}=t,m=t.xmax-t.xmin,[o,r]=s.valid,{x,frameId:l}=w(t.xmin,s),{x:c,frameId:p}=w(t.xmax,s),b=x===c&&m>0;if(m>2*r){const g={xmin:h<u?x:c,ymin:i,xmax:r,ymax:e},O={xmin:o,ymin:i,xmax:h<u?c:x,ymax:e},P={xmin:0,ymin:i,xmax:r,ymax:e},C={xmin:o,ymin:i,xmax:0,ymax:e},_=[],y=[];I(g,P)&&_.push(l),I(g,C)&&y.push(l),I(O,P)&&_.push(p),I(O,C)&&y.push(p);for(let d=l+1;d<p;d++)_.push(d),y.push(d);n.push(new a(g,[l]),new a(O,[p]),new a(P,_),new a(C,y))}else x>c||b?n.push(new a({xmin:x,ymin:i,xmax:r,ymax:e},[l]),new a({xmin:o,ymin:i,xmax:c,ymax:e},[p])):n.push(new a({xmin:x,ymin:i,xmax:c,ymax:e},[l]));return n}function w(t,s){const[n,i]=s.valid,e=2*i;let h,u=0;return t>i?(h=Math.ceil(Math.abs(t-i)/e),t-=h*e,u=h):t<n&&(h=Math.ceil(Math.abs(t-n)/e),t+=h*e,u=-h),{x:t,frameId:u}}function I(t,s){const{xmin:n,ymin:i,xmax:e,ymax:h}=s;return v(t,n,i)&&v(t,n,h)&&v(t,e,h)&&v(t,e,i)}function v(t,s,n){return s>=t.xmin&&s<=t.xmax&&n>=t.ymin&&n<=t.ymax}function L(t,s,n=!0){const i=!k(t);if(i&&G(t),n)return new z().cut(t,s);const e=i?t.rings:t.paths,h=i?4:2,u=e.length,m=-2*s;for(let o=0;o<u;o++){const r=e[o];if(r&&r.length>=h){const x=[];for(const l of r)x.push([l[0]+m,l[1]]);e.push(x)}}return i?t.rings=e:t.paths=e,t}class a{constructor(s,n){this.extent=s,this.frameIds=n}}const q=J();class z{constructor(){this.linesIn=[],this.linesOut=[]}cut(s,n){let i;if(this.xCut=n,s.rings)this.closed=!0,i=s.rings,this.minPts=4;else{if(!s.paths)return null;this.closed=!1,i=s.paths,this.minPts=2}for(const h of i){if(!h||h.length<this.minPts)continue;let u=!0;for(const m of h)u?(this.moveTo(m),u=!1):this.lineTo(m);this.closed&&this.close()}this._pushLineIn(),this._pushLineOut(),i=[];for(const h of this.linesIn)h&&h.length>=this.minPts&&i.push(h);const e=-2*this.xCut;for(const h of this.linesOut)if(h&&h.length>=this.minPts){for(const u of h)u[0]+=e;i.push(h)}return this.closed?s.rings=i:s.paths=i,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const n=this._side(s[0]);if(n*this._prevSide==-1){const i=this._intersect(this._prevPt,s);this._lineTo(this.xCut,i,0),this._prevSide=0,this._lineTo(s[0],s[1],n)}else this._lineTo(s[0],s[1],n);this._prevSide=n,this._prevPt=s}close(){const s=this._firstPt,n=this._prevPt;s[0]===n[0]&&s[1]===n[1]||this.lineTo(s),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}_moveTo(s,n,i){this.closed?(this.lineIn.push([i<=0?s:this.xCut,n]),this.lineOut.push([i>=0?s:this.xCut,n])):(i<=0&&this.lineIn.push([s,n]),i>=0&&this.lineOut.push([s,n]))}_lineTo(s,n,i){this.closed?(this._addPolyVertex(this.lineIn,i<=0?s:this.xCut,n),this._addPolyVertex(this.lineOut,i>=0?s:this.xCut,n)):i<0?(this._prevSide===0&&this._pushLineOut(),this.lineIn.push([s,n])):i>0?(this._prevSide===0&&this._pushLineIn(),this.lineOut.push([s,n])):this._prevSide<0?(this.lineIn.push([s,n]),this.lineOut.push([s,n])):this._prevSide>0&&(this.lineOut.push([s,n]),this.lineIn.push([s,n]))}_addPolyVertex(s,n,i){const e=s.length;e>1&&s[e-1][0]===n&&s[e-2][0]===n?s[e-1][1]=i:s.push([n,i])}_checkClosingPt(s){const n=s.length;n>3&&s[0][0]===this.xCut&&s[n-2][0]===this.xCut&&s[1][0]===this.xCut&&(s[0][1]=s[n-2][1],s.pop())}_side(s){return s<this.xCut?-1:s>this.xCut?1:0}_intersect(s,n){const i=(this.xCut-s[0])/(n[0]-s[0]);return s[1]+i*(n[1]-s[1])}_pushLineIn(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}_pushLineOut(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}export{U as f,Q as p};
