import{t as c,dE as S,ae as a,b8 as u,dF as h,v as b,e as o,d,n as v,dI as g,ah as m}from"./index.a0c3159d.js";import{b as z}from"./TileTreeDebugger.d9a3080b.js";let p=class extends z{constructor(n){super(n)}getTiles(){const n=this.lv.getVisibleNodes(),i=this.view.renderSpatialReference,l=this.nodeSR;return n.map(t=>j(t,i,l)).sort((t,s)=>t.lij[0]===s.lij[0]?t.label>s.label?-1:1:t.lij[0]-s.lij[0])}};function j(n,i,l){const t=n.serviceObb;if(c(t)||c(i))return null;S(r,t.quaternion),a(e,t.center),u(e,l,0,e,i,0,1),r[12]=e[0],r[13]=e[1],r[14]=e[2];const s=[[],[],[]];a(e,t.halfSize),h(e,e,r),u(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),a(e,t.halfSize),e[0]=-e[0],h(e,e,r),u(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),a(e,t.halfSize),e[0]=-e[0],e[1]=-e[1],h(e,e,r),u(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),a(e,t.halfSize),e[1]=-e[1],h(e,e,r),u(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),a(e,t.halfSize),e[0]=-e[0],e[2]=-e[2],h(e,e,r),u(e,i,0,e,l,0,1),s[1].push([e[0],e[1]]),a(e,t.halfSize),e[2]=-e[2],h(e,e,r),u(e,i,0,e,l,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),a(e,t.halfSize),e[1]=-e[1],e[2]=-e[2],h(e,e,r),u(e,i,0,e,l,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new b({rings:s,spatialReference:l});return{lij:[n.level,n.childCount,0],label:n.id,geometry:f}}o([d({constructOnly:!0})],p.prototype,"lv",void 0),o([d({constructOnly:!0})],p.prototype,"nodeSR",void 0),p=o([v("esri.views.3d.layers.support.I3STreeDebugger")],p);const r=g(),e=m();export{p as I3STreeDebugger};
