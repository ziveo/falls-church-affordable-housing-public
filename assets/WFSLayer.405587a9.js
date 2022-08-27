import{bU as T,rc as P,c0 as $,r as S,eA as E,ak as I,az as U,aX as _,he as c,aB as N,iS as C,a4 as J,mT as k,e as t,d as r,n as x,dc as W,s5 as X,rv as D,s4 as Y,q_ as L,ru as Q,r0 as z,q$ as V,my as B,mz as G,mA as M,bE as j,s6 as F,s7 as A,g7 as q,q7 as H,bH as Z,dg as K,E as y,r9 as ee,s8 as te,fo as ie,sa as re,rZ as se,s9 as oe,rk as ae,d9 as O,su as ne,dp as le,dq as pe,r_ as de,dn as ue,sb as ye,mE as ce,dt as me,B as fe}from"./index.a0c3159d.js";import{D as he,X as ge,z as we,W as ve,C as Fe}from"./wfsUtils.d493fd07.js";import"./geojson.06a0f01a.js";import"./xmlUtils.fe1322c5.js";let d=class extends T(W){constructor(){super(...arguments),this.capabilities=P(!1,!1),this.type="wfs",this.refresh=$(async e=>{await this.load();const{extent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=i,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){var o;const i=(o=S(e)&&e.signal)!=null?o:null;return this.addResolvingPromise(this._startWorker({signal:i})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,i={}){await this.load(i);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,i);return E.fromJSON(o)}async queryFeaturesJSON(e,i={}){return await this.load(i),this._connection.invoke("queryFeatures",e?e.toJSON():null,i)}async queryFeatureCount(e,i={}){return await this.load(i),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,i)}async queryObjectIds(e,i={}){return await this.load(i),this._connection.invoke("queryObjectIds",e?e.toJSON():null,i)}async queryExtent(e,i={}){await this.load(i);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,i);return{count:o.count,extent:I.fromJSON(o.extent)}}async querySnapping(e,i={}){return await this.load(i),this._connection.invoke("querySnapping",e,i)}async _createLoadOptions(e){const{url:i,customParameters:o,name:n,namespaceUri:l,spatialReference:a,fields:u,geometryType:m,swapXY:f}=this.layer;if(!i)throw new U("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await he(i,{customParameters:o,...e}));const h=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some(w=>this.layer[w]==null),p=h?await ge(this.wfsCapabilities,n,l,{spatialReference:a,customParameters:o,signal:e==null?void 0:e.signal}):{...we(u),geometryType:m,name:n,namespaceUri:l,spatialReference:a,swapXY:f},g=_(ve(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri)),R=c.toJSON(p.geometryType);return{customParameters:o,featureType:g,fields:p.fields.map(w=>w.toJSON()),geometryField:p.geometryField,geometryType:R,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:p.objectIdField,spatialReference:p.spatialReference.toJSON(),swapXY:p.swapXY}}async _startWorker(e){const[i,o]=await N([this._createLoadOptions(e),C("WFSSourceWorker",{...e,strategy:J("feature-layers-workers")?"dedicated":"local"})]),n=i.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=i.value;this._connection=o.value;const{extent:u}=await this._connection.invoke("load",a,e);this.sourceJSON={extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:k(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([r()],d.prototype,"capabilities",void 0),t([r({constructOnly:!0})],d.prototype,"layer",void 0),t([r()],d.prototype,"sourceJSON",void 0),t([r()],d.prototype,"type",void 0),t([r()],d.prototype,"wfsCapabilities",void 0),d=t([x("esri.layers.graphics.sources.WFSSource")],d);var v;const b=me();let s=v=class extends X(D(Y(L(Q(z(V(B(G(M(fe)))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=j.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:i,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:m,spatialReference:f,swapXY:h,url:p,wfsCapabilities:g}=e;return new v({customParameters:i,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:m,spatialReference:f,swapXY:h,url:p,wfsCapabilities:g})}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),F(this.renderer,this.fieldsIndex),A(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,i,o){const n=e.filter(l=>l.name!==Fe);this.geometryField&&n.unshift(new q({name:this.geometryField,alias:this.geometryField,type:"geometry"})),H(o,n.map(l=>l.toJSON()),i)}get parsedUrl(){return this.url?Z(this.url):null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return K(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:o}=this;return e.timeExtent=i!=null&&o!=null?o.offset(-i.value,i.unit):o||null,e}getFieldDomain(e,i){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,i){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),i)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,i){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),i))}queryFeatureCount(e,i){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),i))}queryExtent(e,i){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),i))}async hasDataChanged(){try{const{dataChanged:e,updates:i}=await this.source.refresh(this.customParameters);return S(i)&&this.read(i,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([r({readOnly:!0,aliasOf:"source.capabilities"})],s.prototype,"capabilities",void 0),t([r({type:String})],s.prototype,"copyright",void 0),t([r({readOnly:!0})],s.prototype,"createQueryVersion",null),t([r({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],s.prototype,"customParameters",void 0),t([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([r({type:String})],s.prototype,"displayField",void 0),t([r(ee)],s.prototype,"elevationInfo",void 0),t([r(te)],s.prototype,"featureReduction",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),t([r({type:[q],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),t([ie("fields")],s.prototype,"writeFields",null),t([r(b.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([r({type:I,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),t([r()],s.prototype,"geometryField",void 0),t([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:c.read},write:{target:"layerDefinition.geometryType",writer:c.write,ignoreOrigin:!0},origins:{service:{read:c.read}}}})],s.prototype,"geometryType",void 0),t([r({type:String})],s.prototype,"id",void 0),t([r(re)],s.prototype,"labelsVisible",void 0),t([r({type:[se],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:oe},write:!0}})],s.prototype,"labelingInfo",void 0),t([r(ae)],s.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],s.prototype,"listMode",void 0),t([r({type:String})],s.prototype,"objectIdField",void 0),t([r({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),t([r({type:O,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxFeatures",void 0),t([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),t([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),t([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),t([r(ne)],s.prototype,"opacity",void 0),t([r(b.outFields)],s.prototype,"outFields",void 0),t([r({readOnly:!0})],s.prototype,"parsedUrl",null),t([r(le)],s.prototype,"popupEnabled",void 0),t([r({type:pe,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([r({types:de,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ue,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),t([r(ye)],s.prototype,"screenSizePerspectiveEnabled",void 0),t([r({readOnly:!0})],s.prototype,"source",void 0),t([r({type:j,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),t([r({readOnly:!0,type:[O],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),t([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),t([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),t([r({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([r(ce)],s.prototype,"url",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),t([r({aliasOf:"source.wfsCapabilities"})],s.prototype,"wfsCapabilities",void 0),s=v=t([x("esri.layers.WFSLayer")],s);const xe=s;export{xe as default};
