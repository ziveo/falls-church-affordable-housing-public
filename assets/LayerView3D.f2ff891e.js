import{e as s,d as l,n as r,bP as c,H as h,aJ as d,a2 as p,bQ as u}from"./index.a0c3159d.js";const g=o=>{let a=class extends o{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),c(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.handles.add(h(()=>e.abort())),await d(()=>{var n;return(n=this.view.defaultsFromMap)==null?void 0:n.heightModelInfoReady},t),p(t);const i=u(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return s([l()],a.prototype,"view",void 0),s([l()],a.prototype,"slicePlaneEnabled",void 0),a=s([r("esri.views.3d.layers.LayerView3D")],a),a};export{g as n};
