import{c as d,u as l,h,e as r,d as s,v as g,n as p}from"./index.a0c3159d.js";import{b as c}from"./TileTreeDebugger.d9a3080b.js";let i=class extends c{constructor(e){super(e),this.watchUpdatingTracking=new d,this.handles=new l}initialize(){const{featureTiles:e}=this.view;this.handles.add(e.addClient()),this.watchUpdatingTracking.addOnCollectionChange(()=>e==null?void 0:e.tiles,()=>this.update(),h)}destroy(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy()}getTiles(){const e=t=>{const[a,n,o]=t.lij;return g.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(a,n,o))};return this.view.featureTiles.tiles.toArray().sort((t,a)=>t.loadPriority-a.loadPriority).map(t=>({...t,geometry:e(t)}))}};r([s({readOnly:!0})],i.prototype,"watchUpdatingTracking",void 0),r([s({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],i.prototype,"updating",void 0),r([s()],i.prototype,"view",void 0),i=r([p("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],i);export{i as FeatureTileTree3DDebugger};
