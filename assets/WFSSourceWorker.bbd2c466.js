import{a2 as h,fG as l,fW as o,r as g,fJ as _,no as f,dd as d,aX as w,az as u,hm as E,w as q,a6 as F}from"./index.a0c3159d.js";import{u as S}from"./FeatureStore.4f146d77.js";import{g as x,f as T}from"./QueryEngineResult.9885fa73.js";import{Y as b}from"./QueryEngine.b68da516.js";import{O as I,L as j}from"./geojson.06a0f01a.js";import{m as C}from"./sourceUtils.419de772.js";import{K as P}from"./wfsUtils.d493fd07.js";import"./PooledRBush.240e2876.js";import"./quickselect.bb286034.js";import"./optimizedFeatureQueryEngineAdapter.ccd4095f.js";import"./centroid.b6fe1cdb.js";import"./WhereClause.c395dc79.js";import"./utils.5e3fd577.js";import"./ClassBreaksDefinition.c5cbbd6d.js";import"./json.8bd707cf.js";import"./xmlUtils.fe1322c5.js";class Y{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await P(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await I(s),h(e);const a=j(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=_(x(f(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};C(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:p,objectIdField:y,customParameters:m}=e;this._featureType=p,this._customParameters=m,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new d(r),await this._checkProjection(n),h(t),this._queryEngine=new b({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:i,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(w(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),q(s)||F.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await T(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{Y as default};
