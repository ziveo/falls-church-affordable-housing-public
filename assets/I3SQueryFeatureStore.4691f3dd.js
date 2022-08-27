import{a6 as pe,e as c,d as u,d3 as he,n as K,ai as Z,y as q,aJ as fe,aX as ge,r as y,bl as me,t as m,et as Ee,ef as $,eu as we,ce as z,bE as U,ev as Se,bG as H,ew as be,ex as Fe,bk as Ie,bd as _e,bj as ve,ed as Re,ey as Oe,ez as xe,dz as G,aM as N,aL as k,aK as P,u as Me,E as je,ak as Qe,az as X,eA as Ce,ee as Y,Z as B,b4 as De,W as Te,bZ as Ae,ad as Ge,eB as Ne}from"./index.a0c3159d.js";import{WhereClause as ke}from"./WhereClause.c395dc79.js";import{Y as $e}from"./QueryEngine.b68da516.js";import{e as Je}from"./centroid.b6fe1cdb.js";import{L as T}from"./I3SMeshView3D.da104237.js";const Q=pe.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");let f=class extends q{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){fe(()=>{var e;return((e=ge(this.viewFilter))==null?void 0:e.geometry)||y(this.layerFilter)}).then(()=>this.loadAsyncModule(me(()=>import("./geometryEngine.59935bf0.js"),["geometryEngine.59935bf0.js","geometryEngineBase.0f0d7ecf.js","hydrated.c9acaaf8.js","index.a0c3159d.js","index.0e2a962c.css"],import.meta.url).then(e=>{this.destroyed||(this._geometryEngine=e,this.applyFilters())})))}get sortedObjectIds(){if(m(this.viewFilter)||m(this.viewFilter.objectIds))return null;const e=new Float64Array(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=y(this.viewFilter)?this.viewFilter.where:null;if(m(e)||!e)return null;try{return ke.create(e,this.layerFieldsIndex)}catch(t){Q.error(`Failed to parse filter where clause: ${t}`)}return null}addFilters(e,t,r,n){const s=this.sortedObjectIds;y(s)&&e.push(l=>Ee(s,!0,l)),this.addSqlFilter(e,this.parsedWhereClause);const a=this._layerMaskGeometries,i=this._geometryEngine;if(y(a)&&y(this.layerFilter)&&y(i)){const l=this.layerFilter.spatialRelationship;e.push((p,h)=>te(i,p,h,n,t,r,a,l))}const o=this._viewMaskGeometries;if(y(o)&&y(this.viewFilter)&&y(i)){const l=this.viewFilter.spatialRelationship;e.push((p,h)=>te(i,p,h,n,t,r,o,l))}}isMBSGeometryVisible(e,t,r){const n=this._layerMaskGeometries,s=this._geometryEngine;if(y(n)&&y(this.layerFilter)&&y(s)){const i=this.layerFilter.spatialRelationship,o=n[0].spatialReference||t;return $(e,r,D,o)?ee(s,D,n,o,i):(Q.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const a=this._viewMaskGeometries;if(y(a)&&y(this.viewFilter)&&y(s)){const i=this.viewFilter.spatialRelationship,o=a[0].spatialReference||t;return $(e,r,D,o)?ee(s,D,a,o,i):(Q.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=this._viewMaskGeometries,t=this._layerMaskGeometries;return m(e)||m(t)?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return m(e)||m(this._geometryEngine)?null:A(this._geometryEngine,e.geometry,e.spatialRelationship)}get _viewMaskGeometries(){if(m(this.viewFilter)||m(this._geometryEngine))return null;const{geometry:e}=this.viewFilter;if(m(e))return null;const{distance:t,units:r}=this.viewFilter,n=this.viewFilter.spatialRelationship,s=e.type==="mesh"?e.extent:e;if(m(t)||t===0)return A(this._geometryEngine,s,n);const a=r||we(s.spatialReference);if(s.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(s,t,a);return A(this._geometryEngine,l,n)}const i=z(s,U.WGS84);if(y(i)){const l=z(this._geometryEngine.geodesicBuffer(i,t,a),s.spatialReference);return A(this._geometryEngine,l,n)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Se().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let o=null;try{o=H(s,U.WGS84)}catch{}if(o)try{o=H(this._geometryEngine.geodesicBuffer(o,t,a),s.spatialReference)}catch{o=null}return o||Q.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${s.spatialReference.wkid}) to WGS84.`),A(this._geometryEngine,o,n)}static checkSupport(e){return!m(e)&&(e.timeExtent?(Q.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!Ve(e.spatialRelationship)||(Q.warn(`Filters with spatialRelationship other than ${ne.join(", ")} are not supported for mesh scene layers`),!1))}};c([u()],f.prototype,"layerFilter",void 0),c([u({type:he})],f.prototype,"viewFilter",void 0),c([u()],f.prototype,"layerFieldsIndex",void 0),c([u()],f.prototype,"loadAsyncModule",void 0),c([u()],f.prototype,"applyFilters",void 0),c([u()],f.prototype,"addSqlFilter",void 0),c([u({readOnly:!0})],f.prototype,"sortedObjectIds",null),c([u({readOnly:!0})],f.prototype,"parsedWhereClause",null),c([u({readOnly:!0})],f.prototype,"parsedGeometry",null),c([u({readOnly:!0})],f.prototype,"_layerMaskGeometries",null),c([u({readOnly:!0})],f.prototype,"_viewMaskGeometries",null),c([u()],f.prototype,"_projectionEngineLoaded",void 0),c([u()],f.prototype,"_geometryEngine",void 0),f=c([K("esri.views.3d.layers.i3s.I3SMeshViewFilter")],f);const ne=(e=>e)(["contains","intersects","disjoint"]);function Ve(e){return e!=null&&ne.includes(e)}var d;function A(e,t,r){if(m(t))return null;if(r==="disjoint"&&t.type==="polygon"){const n=new Array(t.rings.length);for(let i=0;i<t.rings.length;++i){const o=be(1/0,1/0,-1/0,-1/0);Fe(o,t.rings[i]),n[i]={type:"polygon",rings:[t.rings[i]],spatialReference:t.spatialReference,aabr:o}}n.sort((i,o)=>i.aabr[0]-o.aabr[0]);const s=new Set,a=new Ie;for(let i=0;i<n.length;++i){const o=n[i];for(let l=i+1;l<n.length;++l){const p=n[l];if(p.aabr[0]>=o.aabr[2])break;s.add(p)}s.forEach(l=>{if(o!==l){if(l.aabr[2]<=o.aabr[0])s.delete(l);else if(e.intersects(o,l)){o.rings=o.rings.concat(l.rings),_e(o.aabr,l.aabr,o.aabr),delete o._geVersion,s.delete(l);const p=ve(n,l,n.length,a);n.splice(p,1)}}}),s.add(o)}for(const i of n)delete i.aabr;return n}return[t]}function ee(e,t,r,n,s){const a=se(e,t,n);return r.every(i=>ie(e,i,a,s)!==d.DISCARD)}function te(e,t,r,n,s,a,i,o){const l=i[0].spatialReference||s.spatialReference;if(!$(r.node.mbs,a,D,l))return void Q.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const p=se(e,D,l),h=Le(o,s,l,n,r.objectHandle);for(const g of i){if(t.length===0)return;switch(ie(e,g,p,o)){case d.DISCARD:return void(t.length=0);case d.KEEP:continue}Re(t,r.featureIds,F=>Be(e,g,F,h))}}(function(e){e[e.KEEP=0]="KEEP",e[e.DISCARD=1]="DISCARD",e[e.TEST=2]="TEST"})(d||(d={}));const D=[0,0,0,0];function Le(e,t,r,n,s){const a=t.renderSpatialReference,i=new Map,o={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:r};o.rings[0][3]=o.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let p,h;switch(e){case"intersects":p=(g,F,O)=>g.intersects(F,O)?d.KEEP:d.TEST,h=W;break;case"contains":p=(g,F,O)=>g.contains(F,O)?d.TEST:d.DISCARD,h=W;break;default:p=(g,F,O)=>g.disjoint(F,O)?d.TEST:d.DISCARD,h=oe}return{collection:n,object:s,type:e,maskSR:r,renderSR:a,aabbCache:i,triangle:o,positions:l,triangleTest:p,geometryTest:h}}function se(e,t,r){const n={x:t[0],y:t[1],hasZ:!1,hasM:!1,type:"point",spatialReference:r},s=!r.isWGS84&&!r.isWebMercator,a=Number.isNaN(t[3])?0:Oe(t[3],0,2*xe.radius),i=s?e.buffer(n,a,1):e.geodesicBuffer(n,a,1);return i.type="polygon",i}function ie(e,t,r,n){switch(n){case"intersects":case"contains":return W(e,t,r);case"disjoint":return oe(e,t,r)}}function W(e,t,r){return e.intersects(t,r)?e.contains(t,r)?d.KEEP:d.TEST:d.DISCARD}function oe(e,t,r){return e.intersects(t,r)?e.contains(t,r)?d.DISCARD:d.TEST:d.KEEP}const Pe=2**-32;function Be(e,t,r,n){const{collection:s,object:a,renderSR:i,maskSR:o,geometryTest:l,aabbCache:p}=n;let h=p.get(r);if(!h){const x=s.getObjectTransform(a);s.getComponentAabb(a,r,R);const S=[[R[0],R[1],0],[R[0],R[4],0],[R[3],R[4],0],[R[3],R[1],0]];for(let E=0;E<4;++E)G(S[E],S[E],x.rotationScale),N(S[E],S[E],x.position),k(S[E],i,S[E],o);h={rings:[S],hasZ:!1,hasM:!1,type:"polygon",spatialReference:o},h.rings[0][4]=h.rings[0][0],p.set(r,h)}switch(l(e,t,h)){case d.DISCARD:return!1;case d.KEEP:return!0}const{triangle:g,triangleTest:F,positions:O}=n,w=g.rings[0][0],I=g.rings[0][1],_=g.rings[0][2],C=s.getObjectTransform(a);s.getComponentPositions(a,r,O);const{indices:J,data:v,stride:V,startIndex:ae,endIndex:le}=O;for(let x=ae;x<le;x+=3){const S=V*J[x+0],E=V*J[x+1],L=V*J[x+2];P(w,v[S+0],v[S+1],v[S+2]),P(I,v[E+0],v[E+1],v[E+2]),P(_,v[L+0],v[L+1],v[L+2]),G(w,w,C.rotationScale),G(I,I,C.rotationScale),G(_,_,C.rotationScale),N(w,w,C.position),N(I,I,C.position),N(_,_,C.position),k(w,i,w,o),k(I,i,I,o),k(_,i,_,o);const ce=I[0]-w[0],ue=I[1]-w[1],de=_[0]-w[0],ye=_[1]-w[1];if(!(Math.abs(ce*ye-ue*de)<Pe))switch(delete g._geVersion,F(e,t,g)){case d.DISCARD:return!1;case d.KEEP:return!0}}return n.type!=="intersects"}const R=Z(),We=$e;let M=class extends q{constructor(e){super(e),this._dataQueryEngineInstance=null,this._handles=new Me}get defaultQueryJSON(){return new je({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this._ensureDataQueryEngine()}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}async executeQueryForCount(e,t){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:r,extent:n}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:Qe.fromJSON(n)}}async executeQueryForIds(e,t){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const r=this._ensureQueryJSON(e);if(r.returnGeometry)throw new X("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(r.returnCentroid)throw new X("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this.dataQueryEngine.executeQuery(r,t),s=Ce.fromJSON(n);return s.features.forEach(a=>{a.geometry=null}),s}_ensureQueryJSON(e){return m(e)?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||"OBJECTID",t="esriGeometryPolygon",r=this.layer.fields.map(o=>o.toJSON()),n=this.layerView.view.resourceController.scheduler,s=this.spatialReference.toJSON(),a=this.priority,i=this.spatialIndex;return this._dataQueryEngineInstance=new We({hasZ:!0,hasM:!1,geometryType:t,fields:r,timeInfo:null,spatialReference:s,objectIdField:e,featureStore:i,scheduler:n,priority:a}),this._dataQueryEngineInstance}};c([u({constructOnly:!0})],M.prototype,"layerView",void 0),c([u({constructOnly:!0})],M.prototype,"priority",void 0),c([u({constructOnly:!0})],M.prototype,"spatialIndex",void 0),c([u({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],M.prototype,"spatialReference",void 0),c([u({readOnly:!0,aliasOf:"layerView.i3slayer"})],M.prototype,"layer",void 0),c([u({readOnly:!0})],M.prototype,"defaultQueryJSON",null),M=c([K("esri.views.3d.layers.i3s.I3SQueryEngine")],M);class Ye{constructor(t){this.objectIdField=t.objectIdField,this.getFeatureExtent=t.getFeatureExtent}getObjectId(t){return t.id}getAttributes(t){const{meta:r,index:n}=t,s={};this.objectIdField&&(s[this.objectIdField]=t.id);const a=y(r.attributeInfo)&&r.attributeInfo.attributeData;if(y(a))for(const i of Object.keys(a))s[i]=Y(a[i],n);return s}getAttribute(t,r){if(r===this.objectIdField)return t.id;const{meta:n,index:s}=t,a=y(n.attributeInfo)&&n.attributeInfo.attributeData;return y(a)?Y(a[r],s):null}getGeometry(t){if(t.geometry)return t.geometry;const[r,n,s,a,i]=this.getFeatureExtent(t,re);return new B([5],[r,n,s,a,n,s,a,i,s,r,i,s,r,n,s])}getCentroid(t,r){if(t.geometry)return Je(new B,t.geometry,r.hasZ,r.hasM);const[n,s,a,i,o,l]=this.getFeatureExtent(t,re);return new B([0],[(n+i)/2,(s+o)/2,(a+l)/2])}cloneWithGeometry(t,r){const{id:n,index:s,meta:a}=t;return{id:n,index:s,meta:a,geometry:r}}}const re=Z();let j=class extends q{constructor(e){super(e),this.events=new Te}forEach(e){this.forAllFeatures(t=>(e(t),T.CONTINUE))}forEachBounds(e,t,r){const n=this.getFeatureExtent;for(const s of e)t(n(s,r))}forEachInBounds(e,t){this.forAllFeatures(r=>{const n=this.getFeatureExtent(r,Ke);return Ae(e,Ge(n,Ze))&&t(r),T.CONTINUE},r=>{if($(r.node.mbs,this.sourceSpatialReference,b,this.viewSpatialReference),b[0]>=e[0]&&b[2]<=e[2]&&b[1]>=e[1]&&b[3]<=e[3])return T.CONTINUE;const n=Math.max(e[0],Math.min(b[0],e[2])),s=Math.max(e[1],Math.min(b[1],e[3])),a=b[0]-n,i=b[1]-s;return a*a+i*i<=b[3]*b[3]?T.CONTINUE:T.SKIP})}};c([u({constructOnly:!0})],j.prototype,"featureAdapter",void 0),c([u({constructOnly:!0})],j.prototype,"toArray",void 0),c([u({constructOnly:!0})],j.prototype,"forAllFeatures",void 0),c([u({constructOnly:!0})],j.prototype,"getFeatureExtent",void 0),c([u({constructOnly:!0})],j.prototype,"sourceSpatialReference",void 0),c([u({constructOnly:!0})],j.prototype,"viewSpatialReference",void 0),j=c([K("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],j);const b=Ne(),Ke=Z(),Ze=De();export{f as C,j as f,Ye as n,M as p};
