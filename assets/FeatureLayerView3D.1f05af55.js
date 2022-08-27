import{e as t,d as o,n as s,hi as p,az as r,aW as l}from"./index.a0c3159d.js";import{w as m}from"./FeatureLayerViewBase3D.9c952de8.js";import"./FeatureLikeLayerView3D.dce5c1bd.js";import"./dehydratedFeatureComparison.46ca5791.js";import"./Graphics3DFeatureProcessor.afe5de96.js";import"./Graphics3DScaleVisibility.935d1efb.js";import"./optimizedFeatureQueryEngineAdapter.ccd4095f.js";import"./centroid.b6fe1cdb.js";import"./PooledRBush.240e2876.js";import"./quickselect.bb286034.js";import"./Graphics3DObjectStates.f45b9ab1.js";import"./QueryEngine.b68da516.js";import"./QueryEngineResult.9885fa73.js";import"./WhereClause.c395dc79.js";import"./utils.5e3fd577.js";import"./ClassBreaksDefinition.c5cbbd6d.js";import"./json.8bd707cf.js";import"./attributeUtils.72e006d3.js";import"./FeatureStore.4f146d77.js";import"./projectExtentUtils.84613448.js";import"./LayerView3D.f2ff891e.js";import"./EventedSet.73d8b515.js";import"./popupUtils.bf30376b.js";import"./LayerView.93cef2a0.js";import"./RefreshableLayerView.faed2da7.js";let e=class extends m{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=p()}initialize(){"capabilities"in this.layer&&this.layer.capabilities.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new r("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:this.layer}))),this.layer.infoFor3D&&!this.direct3DObjectFeatureLayerDisplayEnabled&&this.addResolvingPromise(Promise.reject(new r("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`))),this.layer.geometryType!=="mesh"||l(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new r("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var i,a;return(a=(i=this.view.featureTiles)==null?void 0:i.tilingScheme)==null?void 0:a.spatialReference}};t([o({constructOnly:!0})],e.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),t([o()],e.prototype,"layer",void 0),e=t([s("esri.views.3d.layers.FeatureLayerView3D")],e);const Q=e;export{Q as default};
