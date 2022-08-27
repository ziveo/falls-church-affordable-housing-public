import{v as qe,bE as xe,ah as c,aK as Oe,aM as Y,aN as Q,f4 as Fe,jk as Ne,f6 as $,h9 as q,f5 as je,jl as re,jm as se,ae as J,jn as ne,jo as Te,jp as ke,eB as He,f9 as ae,aW as Ie,jq as Be,h0 as ge,jr as Xe,js as me,jt as _e,i2 as Ze,f8 as ee,gX as fe,aL as Le,ju as Ke,bh as Qe,jv as Je,jw as ye,jx as Ye,jy as et,r as _,ab as Ee,jz as tt,e as o,d as l,n as te,y as ue,x as F,U as ve,jA as it,jB as st,a6 as rt,W as nt,u as We,ag as Se,f as v,jC as at,G as oe,jD as ot,t as N,aX as U,aO as ht,cg as lt,ch as dt,b$ as j,cl as we,cn as ct,cj as ut,jE as Ce,cs as pt,ct as I,cu as gt,bl as mt,jF as _t,cw as X,cz as ft,cA as Lt,cB as yt,cC as vt,cD as St,cF as wt,cG as Ct,cH as bt,cI as Pt,cx as x,cN as Mt,cO as At,cQ as $t,bo as Z,cq as be,cS as Vt,cT as Rt,gZ as Gt,cV as zt,jG as z,ea as Pe,jH as Me,eZ as Ae,e6 as Dt,b_ as xt,dI as Ot,jI as jt,jJ as Tt,jK as It,jL as Et,i8 as Wt,jM as Ut,jN as qt,jO as Ft,jP as Nt,jQ as kt}from"./index.a0c3159d.js";import{z as Ue,c as he,e as le,t as Ht,g as $e,r as Bt}from"./quantityFormatUtils.d58f5550.js";import{n as Xt,C as E,a as Zt}from"./LineVisualElement.b68e53b8.js";import{o as W,a as Ve,v as K,m as Re,b as Kt,l as de}from"./Segment.b7f04993.js";import{geodesicArea as Qt}from"./geometryEngine.59935bf0.js";import{a as Jt}from"./projectionUtils.49303302.js";import{S as Ge,g as Yt,x as ei,p as ti}from"./EditGeometryOperations.c1c61fdd.js";function ii(t,e){const i=e.center;Oe(i,0,0,0);for(let r=0;r<t.length;++r)Y(i,i,t[r]);Q(i,i,1/t.length);let s=0;for(let r=0;r<t.length;++r)s=Math.max(s,Fe(i,t[r]));e.radius=Math.sqrt(s)}function si(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");Ne(t[0],t[1],t[2],e)}function ri(t,e){return $(t,e)+t[3]}function ni(t,e,i){return q(t,V,i)&&q(e,R,i)?je(V,R):0}function ai(t,e){if(!re(t,V)||!re(e,R))return 0;const i={distance:null};return Ue(i,[V[0],V[1]],[R[0],R[1]]),i.distance}function oi(t,e,i){const s={distance:null};return Ue(s,[t[0],t[1]],[e[0],e[1]],i),s.distance}function hi(t,e,i,s){const r=di;return se(t,s,V)&&se(e,s,R)&&se(i,s,ce)?(r.setPoint(0,0,V),r.setPoint(0,1,R),r.setPoint(0,2,ce),Math.abs(Qt(r,"square-meters"))):0}function li(t,e=null,i=!0){const r=(n,a)=>{if(a[0]===0&&a[1]===0&&a[2]===0)return!1;for(let h=0;h<n.length;++h)if($(a,n[h])<-1e-6)return!1;return!0};if(t.length===0)return!1;if(t.length===1)return e&&J(e,t[0]),!0;Oe(S,0,0,0);for(let n=0;n<t.length;++n)Y(S,S,t[n]);if(ne(S,S),r(t,S))return e&&J(e,S),!0;if(!i)return!1;for(let n=0;n<t.length;++n)for(let a=0;a<t.length;++a)if(n!==a&&(Te(S,t[n],t[a]),ne(S,S),r(t,S)))return e&&J(e,S),!0;return!1}const V=c(),R=c(),ce=c(),di=new qe({rings:[[V,R,ce]],spatialReference:xe.WGS84}),S=c();function ze(t){return ke(ci(t),[],2)}function ci(t){const e=new Float64Array(2*t.length);for(let i=0;i<t.length;++i){const s=t[i],r=2*i;e[r+0]=s[0],e[r+1]=s[1]}return e}class ui{constructor(e,i){this.positionsWorldCoords=[],this.positionsRenderCoords=[],this.positionsProjectedWorldCoords=[],this.positionsFittedRenderCoords=[],this.positionsGeographic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.areaCentroidWorldCoords=c(),this.areaCentroidRenderCoords=c(),this.geodesicAreaCentroidRenderCoords=c(),this._length=0,this._centroidRenderCoords=c(),this._planeWorldCoords=He(),this._worldUp=c(),this._worldTangent=c(),this._frame=[c(),c(),c()],this._pathVersion=-1,this._validMeasurement=!1,this._hasCursorPoint=!1,this._mode=null,this._tempU=c(),this._tempV=c(),this._tempVec3=c(),this._tempSphere={center:c(),radius:0},this._sceneView=e,this.unitNormalizer=i}update(e,i,s,r,n,a,h){const d=this.unitNormalizer,p=this._sceneView.renderSpatialReference,u=this.unitNormalizer.spatialReference,m=_(i);if(this._pathVersion===e.version&&this._validMeasurement===r&&!h&&this._hasCursorPoint===m&&this._mode===a)return!e.isValidPolygon&&(this._updateCursorSegmentLength(e,i),!0);this._pathVersion=e.version,this._validMeasurement=r,this._hasCursorPoint=m;const g=e.numVertices;this._resize(g);const y=ae(s.spatialReference),b=Ie(s.spatialReference,y)&&Be(s.spatialReference),{positionsGeographic:P,positionsWorldCoords:k,positionsRenderCoords:M,positionsSpherical:D}=this;e.forEachVertexPosition((L,C)=>{pi(s.elevationProvider,L),q(L,k[C],u),q(L,M[C],p),b&&(re(L,P[C]),q(L,D[C],y),ne(D[C],D[C]))});const H=this._updatePathLengths(r);if(this.pathLength=this._length>1?W(d.normalizeDistance(H),"meters"):null,b){const L=this._updateGeodesicPathLengths(r,u);this.geodesicPathLength=this._length>1?W(L,"meters"):null}else this.geodesicPathLength=null;return this._updateCursorSegmentLength(e,i),this._updateMode(e,a),r?(this._updateArea(s,d,p,u,n),b&&this._updateGeodesicArea(s),!0):(this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),!0)}getData(){return{positionsWorldCoords:this.positionsWorldCoords,positionsRenderCoords:this.positionsRenderCoords,positionsProjectedWorldCoords:this.positionsProjectedWorldCoords,positionsFittedRenderCoords:this.positionsFittedRenderCoords,positionsGeographic:this.positionsGeographic,positionsSpherical:this.positionsSpherical,positionsStereographic:this.positionsStereographic,pathSegmentLengths:this.pathSegmentLengths,geodesicPathSegmentLengths:this.geodesicPathSegmentLengths,perimeterSegmentLengths:this.perimeterSegmentLengths,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidWorldCoords:this.areaCentroidWorldCoords,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,fittingMode:this.fittingMode,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,cursorSegmentLength:this.cursorSegmentLength,geodesicCursorSegmentLength:this.geodesicCursorSegmentLength,unitNormalizer:this.unitNormalizer,actualMeasurementMode:this.actualMeasurementMode}}_resize(e){for(e<this._length&&(this.positionsWorldCoords.length=e,this.positionsRenderCoords.length=e,this.positionsProjectedWorldCoords.length=e,this.positionsFittedRenderCoords.length=e,this.positionsGeographic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorldCoords.push(c()),this.positionsRenderCoords.push(c()),this.positionsProjectedWorldCoords.push(ge()),this.positionsFittedRenderCoords.push(c()),this.positionsGeographic.push(c()),this.positionsSpherical.push(c()),this.positionsStereographic.push(ge()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length}_updatePathLengths(e){const i=this.positionsWorldCoords,s=this.pathSegmentLengths;let r=0;for(let n=0;n<this._length;++n){const a=s[n]=je(i[n],i[(n+1)%this._length]);(n<this._length-1||e)&&(r+=a)}return r}_updateGeodesicPathLengths(e,i){const s=this.positionsGeographic,r=this.geodesicPathSegmentLengths;let n=0;for(let a=0;a<this._length;++a){const h=r[a]=oi(s[a],s[(a+1)%this._length],i);(a<this._length-1||e)&&(n+=h)}return n}_updateArea(e,i,s,r,n){const a=e.renderCoordsHelper,h=this.positionsWorldCoords,d=this.positionsRenderCoords,p=this.positionsProjectedWorldCoords,u=this.positionsFittedRenderCoords,m=this._planeWorldCoords,g=this._centroidRenderCoords;he(d,g),a.worldUpAtPosition(g,this._worldUp),a.worldBasisAtPosition(g,Xe.X,this._worldTangent),me(g,this._worldUp,s,this._worldUp,r),me(g,this._worldTangent,s,this._worldTangent,r),h.length>2&&si(h,m),this.fittingMode=this._selectFittingMode(m,h,this._worldUp,n);let y=0;if(this.fittingMode==="horizontal"){let L=-1/0;d.forEach((C,B)=>{const pe=a.getAltitude(d[B]);pe>L&&(L=pe,y=B)})}const b=h[y];let P=m,k=this._worldTangent;this.fittingMode==="horizontal"?P=this._worldUp:this.fittingMode==="vertical"&&(P=this._tempVec3,k=this._worldUp,_e(m,this._worldUp,P)),J(this._frame[2],P),_e(k,P,this._frame[0]),Te(this._frame[1],this._frame[0],this._frame[2]),Ze(this._frame[1],this._frame[1]);const M=this._tempVec3,D=this._tempU,H=this._tempV;for(let L=0;L<this._length;++L){const C=p[L],B=u[L];ee(M,h[L],b),fe(C,$(this._frame[0],M),$(this._frame[1],M)),Q(D,this._frame[0],C[0]),Q(H,this._frame[1],C[1]),Y(M,D,H),Y(M,M,b),Le(M,r,B,s)}this.perimeterLength=this._length>0?W(i.normalizeDistance(this._updatePerimeterLengths()),"meters"):null,he(u,this.areaCentroidRenderCoords),Le(this.areaCentroidRenderCoords,s,this.areaCentroidWorldCoords,r),this._updateIntersectingSegments(),this.area=this.intersectingSegments.size===0?Ve(i.normalizeArea(this._computeArea()),"square-meters"):null}_updateGeodesicArea(e){const{renderCoordsHelper:i,spatialReference:s}=e,{positionsSpherical:r,positionsStereographic:n}=this,a=this._tempVec3,h=li(r,a);if(!h)return void(this.geodesicArea=null);const d=this._tempU,p=this._tempV;Ke(a,d,p);for(let u=0;u<this._length;++u){const m=$(r[u],d),g=$(r[u],p),y=$(r[u],a);fe(n[u],m/y,g/y)}Q(a,a,Qe(s).radius),i.toRenderCoords(a,ae(s),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=h&&this.geodesicIntersectingSegments.size===0?Ve(this._computeGeodesicArea(),"square-meters"):null}_updatePerimeterLengths(){const e=this.positionsProjectedWorldCoords,i=this.perimeterSegmentLengths;let s=0;for(let r=0;r<this._length;++r)s+=i[r]=Je(e[r],e[(r+1)%this._length]);return s}_updateIntersectingSegments(){const e=this.positionsProjectedWorldCoords,i=this.intersectingSegments;i.clear();for(let s=0;s<this._length;++s)for(let r=s+2;r<this._length;++r){if((r+1)%this._length===s)continue;const n=e[s],a=e[(s+1)%this._length],h=e[r],d=e[(r+1)%this._length];ye(n,a,h,d)&&(i.add(s),i.add(r))}}_computeArea(){const e=this.positionsProjectedWorldCoords,i=this.triangleIndices=new Uint32Array(ze(e));let s=0;for(let r=0;r<i.length;r+=3)s+=Ye(e[i[r]],e[i[r+1]],e[i[r+2]]);return s}_updateGeodesicIntersectingSegments(){const e=this.positionsStereographic,i=this.geodesicIntersectingSegments;i.clear();for(let s=0;s<this._length;++s)for(let r=s+2;r<this._length;++r){if((r+1)%this._length===s)continue;const n=e[s],a=e[(s+1)%this._length],h=e[r],d=e[(r+1)%this._length];ye(n,a,h,d)&&(i.add(s),i.add(r))}}_computeGeodesicArea(){const e=this.positionsGeographic,i=this.positionsStereographic,s=this.geodesicTriangleIndices=new Uint32Array(ze(i));let r=0;for(let n=0;n<s.length;n+=3)r+=hi(e[s[n]],e[s[n+1]],e[s[n+2]],xe.WGS84);return r}_selectFittingMode(e,i,s,r){const n=i.map(u=>Math.abs(ri(e,u))).reduce((u,m)=>Math.max(u,m),0);ii(i,this._tempSphere);const a=n/(2*this._tempSphere.radius),h=a<r.maxRelativeErrorCoplanar,d=a<r.maxRelativeErrorAlmostCoplanar;let p="horizontal";return h?p="oblique":d&&(p=Math.abs($(s,e))>Math.cos(et(r.verticalAngleThreshold))?"horizontal":"vertical"),p}_updateCursorSegmentLength(e,i){const s=e.lastPoint;!e.isValidPolygon&&_(s)&&_(i)?(this.geodesicCursorSegmentLength=W(ai(s,i),"meters"),this.cursorSegmentLength=W(this.unitNormalizer.normalizeDistance(ni(s,i,this.unitNormalizer.spatialReference)),"meters")):(this.geodesicCursorSegmentLength=null,this.cursorSegmentLength=null)}_updateMode(e,i){if(i===le.Auto){this.actualMeasurementMode="euclidean";let s=0;this.geodesicPathLength!=null&&(s+=this.geodesicPathLength.value),!e.isValidPolygon&&_(this.geodesicCursorSegmentLength)&&(s+=this.geodesicCursorSegmentLength.value),s>gi&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=i===le.Euclidean?"euclidean":"geodesic";this.geodesicPathLength==null&&(this.actualMeasurementMode="euclidean"),this._mode=i}}function pi(t,e){e.hasZ||(e.z=Ee(tt(t,e,"ground"),0))}const gi=1e5;let O=class extends ue{constructor(t){super(t)}initialize(){const{spatialReference:t}=this.view,e=ae(t),i=e===it?st:e,s=!t||Ie(t,i)?i:t,r=new Ht(s);this._measurementDataManager=new ui(this.view,r),this.own([this.analysisViewData.path.on("change",()=>this._update()),F(()=>this.analysisViewData.cursorPoint,()=>this._update(),ve),F(()=>this.analysisViewData.mode,()=>this._update(),ve)]),this._update()}_update(t=!1){const{analysisViewData:e,view:i}=this,s={maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80};this._measurementDataManager.update(e.path,e.cursorPoint,i,e.validMeasurement,s,e.mode,t)&&(e.measurementData=this._measurementDataManager.getData())}};o([l({constructOnly:!0})],O.prototype,"view",void 0),o([l({constructOnly:!0})],O.prototype,"analysis",void 0),o([l({constructOnly:!0})],O.prototype,"analysisViewData",void 0),O=o([te("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],O);const mi=rt.getLogger("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper");let A=class extends nt.EventedAccessor{constructor(t={}){super(t),this._handles=new We,this._version=0,this._internalGeometryChange=!1,this._extent=Se()}destroy(){this._handles=v(this._handles)}set areaMeasurement(t){this._set("areaMeasurement",t),_(t)&&_(this.view)&&this._initialize(t,this.view)}set view(t){this._set("view",t),_(t)&&_(this.areaMeasurement)&&this._initialize(this.areaMeasurement,t)}get initialized(){return _(this.areaMeasurement)&&_(this.view)}get version(){return this._version}get isValidPolygon(){return this.initialized&&this.editGeometry.components.length>0&&this.editGeometry.components[0].isClosed()}get extent(){if(this.initialized&&this.editGeometry.components.length>0&&this.editGeometry.components[0].vertices.length>0){const t=Se(this._extent);return this.forEachVertex(e=>{at(t,e.pos)}),t}return null}get spatialReference(){return this.initialized?this.editGeometry.coordinateHelper.spatialReference:null}_initialize(t,e){this._handles.removeAll(),this._handles.add(F(()=>t.geometry,()=>{this._updateEditGeometryFromModelGeometry(t,e)},oe)),this._makeDirty(!0)}_makeDirty(t=!1){this.notifyChange("isValidPolygon"),this.notifyChange("initialized"),this.notifyChange("extent"),t&&this.notifyChange("numVertices")}_updateEditGeometryFromModelGeometry(t,e){if(this._version++,this._internalGeometryChange)return;this._handles.remove("EditGeometry");let i=t.geometry;if(_(i)){const s=ot(i,e.spatialReference);N(s)&&Jt(t,i.spatialReference,mi),i=s}_(i)?this._editGeometryOperations=Ge.fromGeometry(i,e.state.viewingMode):this._editGeometryOperations=new Ge(new Yt("polygon",ei(!0,!1,e.spatialReference))),this._makeDirty(!0),this.emit("change"),this._handles.add(this.editGeometry.on("change",s=>{this._makeDirty(s.addedVertices!=null||s.removedVertices!=null),this._internalGeometryChange=!0,t.geometry=this.numVertices>0?this.editGeometry.geometry:null,this._internalGeometryChange=!1}),"EditGeometry")}get editGeometry(){return this._editGeometryOperations.data}get vertices(){const t=[];return this.forEachVertex(e=>{t.push(e)}),t}get numVertices(){return this.initialized&&this.editGeometry.components.length>0?this.editGeometry.components[0].vertices.length:0}get lastPoint(){if(this.initialized&&this.editGeometry.components.length>0){const t=this.editGeometry.components[0].getLastVertex();if(_(t))return this.editGeometry.coordinateHelper.vectorToPoint(t.pos)}return null}getVertex(t){if(!this.initialized||this.editGeometry.components.length===0||this.editGeometry.components[0].vertices.length===0)return null;const e=this.editGeometry.components[0].vertices[0];let i=e;do{if(i.index===t)return i;i=i.rightEdge.rightVertex}while(i!==e&&i!=null);return null}getVertexPositionAsPoint(t){return this.editGeometry.coordinateHelper.vectorToPoint(t.pos)}getVertexPositionAsPointFromIndex(t){return this.editGeometry.coordinateHelper.vectorToPoint(this.getVertex(t).pos)}forEachVertex(t){this.initialized&&this.editGeometry.components.length>0&&this.editGeometry.components[0].iterateVertices(t)}forEachVertexPosition(t){const e=this.editGeometry.coordinateHelper;this.forEachVertex((i,s)=>{e.vectorToPoint(i.pos,De),t(De,s)})}clear(){_(this.areaMeasurement)&&(this.areaMeasurement.geometry=null)}add(t){if(!this.initialized)return null;if(this.editGeometry.components.length===0){const i=U(this.view);this.editGeometry.components.push(new ti(i.spatialReference,i.state.viewingMode))}const e=this._editGeometryOperations.appendVertex(this.editGeometry.coordinateHelper.pointToVector(t));return this.emit("change"),e}close(){if(!this.initialized||this.editGeometry.components.length===0)return null;const t=this._editGeometryOperations.closeComponent(this.editGeometry.components[0]);return this.emit("change"),t}ensureContains(t,e=""){let i=!1;if(this.editGeometry.components.forEach(s=>{s.iterateVertices(r=>{r===t&&(i=!0)})}),!i)throw new Error(`vertex doesnt exist ${e}`);return i}setVertexPosition(t,e){if(!this.initialized)return null;const i=this._editGeometryOperations.setVertexPosition(t,this.editGeometry.coordinateHelper.pointToVector(e));return this.emit("change"),i}equals(t){if(this.numVertices!==t.numVertices)return!1;let e=!0;return this.forEachVertexPosition((i,s)=>{const r=t.getVertexPositionAsPointFromIndex(s);i.equals(r)||(e=!1)}),!!e}};o([l({value:null})],A.prototype,"areaMeasurement",null),o([l({value:null})],A.prototype,"view",null),o([l()],A.prototype,"isValidPolygon",null),o([l()],A.prototype,"extent",null),o([l()],A.prototype,"spatialReference",null),o([l()],A.prototype,"numVertices",null),A=o([te("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper")],A);const De=new ht;function _i(t){const e=new lt;return e.extensions.add("GL_OES_standard_derivatives"),dt(e,t),e.attributes.add(j.POSITION,"vec3"),e.attributes.add(j.UV0,"vec2"),e.varyings.add("vUV","vec2"),t.hasMultipassTerrain&&e.varyings.add("depth","float"),e.vertex.code.add(we`
    void main(void) {
      vUV = uv0;
      ${t.hasMultipassTerrain?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),e.include(ct,t),e.fragment.uniforms.add(new ut("size",i=>i.size)),e.fragment.uniforms.add(new Ce("color1",i=>i.color1)),e.fragment.uniforms.add(new Ce("color2",i=>i.color2)),e.fragment.include(pt),e.fragment.code.add(we`
    void main() {
      ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      gl_FragColor = mix(color2, color1, t);
      ${t.transparencyPassType===I.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
  `),e}const fi=Object.freeze(Object.defineProperty({__proto__:null,build:_i},Symbol.toStringTag,{value:"Module"}));class ie extends ft{initializeProgram(e){const i=ie.shader.get().build(this.configuration);return new Lt(e.rctx,i,yt)}_setPipelineState(e){const i=this.configuration,s=e===I.NONE,r=e===I.FrontFace;return vt({blending:i.transparent?s?yi:St(e):null,depthTest:{func:wt(e)},depthWrite:s?i.writeDepth&&Ct:bt(e),colorWrite:Pt,polygonOffset:s||r?i.polygonOffset&&Li:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}ie.shader=new gt(fi,()=>mt(()=>import("./CheckerBoard.glsl.da7f6c40.js"),["CheckerBoard.glsl.da7f6c40.js","index.a0c3159d.js","index.0e2a962c.css","quantityFormatUtils.d58f5550.js","Segment.b7f04993.js","LineVisualElement.b68e53b8.js","elevationInfoUtils.0270f3ac.js","geometryEngine.59935bf0.js","geometryEngineBase.0f0d7ecf.js","hydrated.c9acaaf8.js","projectionUtils.49303302.js","EditGeometryOperations.c1c61fdd.js"],import.meta.url));const Li={factor:0,units:-25},yi=_t(X.SRC_ALPHA,X.ONE,X.ONE_MINUS_SRC_ALPHA,X.ONE_MINUS_SRC_ALPHA);class G extends Mt{constructor(){super(...arguments),this.transparencyPassType=I.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([x({count:I.COUNT})],G.prototype,"transparencyPassType",void 0),o([x()],G.prototype,"transparent",void 0),o([x()],G.prototype,"writeDepth",void 0),o([x()],G.prototype,"polygonOffset",void 0),o([x()],G.prototype,"hasMultipassTerrain",void 0),o([x()],G.prototype,"cullAboveGround",void 0);class vi extends At{constructor(e){super(e,new wi),this.techniqueConfig=new G}dispose(){}getConfiguration(e,i){return this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.transparencyPassType=i?i.transparencyPassType:I.NONE,this.techniqueConfig.hasMultipassTerrain=!!i&&i.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=!!i&&i.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,i,s,r,n,a,h){return $t(e,i,r,n,a,void 0,h)}requiresSlot(e){let i=Z.OPAQUE_MATERIAL;return this.parameters.transparent&&(i=this.parameters.writeDepth?Z.TRANSPARENT_MATERIAL:Z.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===i||e===Z.DRAPED_MATERIAL}createGLMaterial(e){return e.output===be.Color||e.output===be.Alpha?new Si(e):null}createBufferWriter(){return new Vt(Rt)}}class Si extends Gt{beginSlot(e){return this.ensureTechnique(ie,e)}}class wi extends zt{constructor(){super(...arguments),this.size=[1,1],this.color1=[.75,.75,.75,1],this.color2=[.5,.5,.5,1],this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1}}class Ci extends Xt{constructor(e){super(e),this._checkerBoardMaterial=null,this._renderOccluded=z.OccludeAndTransparent,this._geometry=null,this._size=[1,1],this._color1=Pe(1,.5,0,.5),this._color2=Pe(1,1,1,.5),this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get size(){return this._size}set size(e){this._size=e,this._updateMaterial()}get color1(){return this._color1}set color1(e){Me(e,this._color1)||(Ae(this._color1,e),this._updateMaterial())}get color2(){return this._color2}set color2(e){Me(e,this._color2)||(Ae(this._color2,e),this._updateMaterial())}_updateMaterial(){_(this._checkerBoardMaterial)&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new vi({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(e){_(this._checkerBoardMaterial)&&e(this._checkerBoardMaterial)}createGeometries(e){if(N(this._geometry)||N(this._checkerBoardMaterial))return;const i=bi;Dt(i,this.transform);const s=this._geometry,r=[],n=c();s.position.forEach(d=>{ee(n,d,i),r.push(n[0],n[1],n[2])});const a=[];s.uv.forEach(d=>{a.push(d[0],d[1])});const h=new xt([[j.POSITION,{size:3,data:r,exclusive:!0}],[j.UV0,{size:2,data:a,exclusive:!0}]],[[j.POSITION,s.triangleIndices],[j.UV0,s.triangleIndices]]);e.addGeometry(h,this._checkerBoardMaterial)}_geometryChanged(){this.recreateGeometry()}}const bi=c();let w=class extends ue{constructor(t){super(t),this._handles=new We,this._params={...Pi},this._path=null,this._intersectedPath=null,this._perimeter=null,this._intersectedPerimeter=null,this._projectionLines=null,this._measurementArea=null,this._areaLabel=null,this._pathLengthLabel=null,this._cursorSegmentLengthLabel=null,this._perimeterLengthLabel=null,this._pathSegments=[],this._perimeterSegments=[],this._cursorSegment=null,this._origin=c(),this._originTransform=Ot(),this._cursorPositionRenderSpace=c(),this.messages=null,this.viewData=Mi,this.areaLabel=null,this.perimeterLengthLabel=null,this.loadingMessages=!0}get visible(){return this.analysisViewData.visible}get testData(){return{labels:{area:this._areaLabel,pathLength:this._pathLengthLabel,cursorSegmentLength:this._cursorSegmentLengthLabel,perimeterLength:this._perimeterLengthLabel}}}initialize(){const{analysisViewData:t,_params:e,view:i}=this;this._path=new E({view:i,attached:!0,width:e.pathLineWidth,color:e.pathLineColor,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent}),this._intersectedPath=new E({view:i,attached:!0,width:e.pathLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent}),this._perimeter=new E({view:i,attached:!0,width:e.perimeterLineWidth,color:e.perimeterLineColor,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent}),this._intersectedPerimeter=new E({view:i,attached:!0,width:e.perimeterLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent}),this._projectionLines=new E({view:i,attached:!0,width:e.projectionLineWidth,color:e.projectionLineColor,stipplePattern:jt(e.projectionLineStippleSize),polygonOffset:!0,renderOccluded:z.OccludeAndTransparent}),this._measurementArea=new Ci({view:i,attached:!0,color1:e.areaColor1,color2:e.areaColor2}),this._areaLabel=new K({view:i,attached:!0,fontSize:T.Large}),this._pathLengthLabel=new K({view:i,attached:!0,fontSize:T.Small}),this._cursorSegmentLengthLabel=new K({view:i,attached:!0,fontSize:T.Small}),this._perimeterLengthLabel=new K({view:i,attached:!0,fontSize:T.Small}),this._handles.add([F(()=>[t.mode,this.visible,t.unit,t.measurementData,t.cursorPoint],()=>this._update(),oe),F(()=>{var s;return(s=i.state)==null?void 0:s.camera},()=>this._updateLabels(),oe),Tt(async()=>this._updateMessageBundle())]),this._updateMessageBundle()}destroy(){this._measurementArea=v(this._measurementArea),this._path=v(this._path),this._intersectedPath=v(this._intersectedPath),this._perimeter=v(this._perimeter),this._intersectedPerimeter=v(this._intersectedPerimeter),this._areaLabel=v(this._areaLabel),this._pathLengthLabel=v(this._pathLengthLabel),this._cursorSegmentLengthLabel=v(this._cursorSegmentLengthLabel),this._perimeterLengthLabel=v(this._perimeterLengthLabel),this._projectionLines=v(this._projectionLines),this._handles=v(this._handles),this.set("view",null)}_update(){if(this.destroyed||!this.view.ready||!this.view.renderCoordsHelper)return;const{analysisViewData:{measurementData:t},analysisViewData:e}=this;N(t)||(this._updateViewData(t,e.path,e.cursorPoint),this._updateOrigin(),this._updatePathSegments(),this._updatePerimeterSegments(),this._updateArea(),this._updateProjectionLines(),this._updateLabels())}_updateViewData(t,e,i){const s=e.isValidPolygon,r=t.actualMeasurementMode==="geodesic",n=r?t.geodesicArea:t.area;let a=1;if(n){const d=this._toPreferredAreaUnit(n,this.analysisViewData.unit);a=It(Math.sqrt(d.value)/Math.sqrt(300)),a*=Math.sqrt(Et(1,d.unit,"square-meters")),a/=t.unitNormalizer.normalizeDistance(1)}const h={validMeasurement:s,path:e,pathVersion:e.version,cursorPoint:i,measurementData:t,mode:t.actualMeasurementMode,positionsGeographic:t.positionsGeographic,positionsRenderCoords:t.positionsRenderCoords,positionsProjected:t.positionsProjectedWorldCoords,positionsFittedRenderCoords:t.positionsFittedRenderCoords,intersectingSegments:r?t.geodesicIntersectingSegments:t.intersectingSegments,triangleIndices:r?t.geodesicTriangleIndices:t.triangleIndices,fittingMode:t.fittingMode,areaCentroid:r?t.geodesicAreaCentroidRenderCoords:t.areaCentroidRenderCoords,pathLengthLabelSegmentIndex:s?0:e.numVertices-2,perimeterLengthLabelSegmentIndex:0,checkerSize:a};this._set("viewData",h)}_updateOrigin(){const t=this.viewData;he(t.positionsRenderCoords,this._origin),Wt(this._originTransform,this._origin),this._measurementArea.transform=this._originTransform,this._projectionLines.transform=this._originTransform}_createSegments(t){const e=this.viewData,i=e.path,s=this.view.renderCoordsHelper.spatialReference,r=e.mode,n=[],a=[],h=[],d=e.validMeasurement?i.numVertices:i.numVertices-1;for(let p=0;p<d;++p){const u=e[t][p],m=e[t][(p+1)%i.numVertices];let g=null;switch(r){case"euclidean":g=new de(u,m);break;case"geodesic":g=new Re(u,m,s)}e.intersectingSegments.has(p)?h.push(g):a.push(g),n.push(g)}return{all:n,nonIntersecting:a,intersecting:h}}_updatePathSegments(){const{view:{renderCoordsHelper:t},viewData:e,visible:i}=this,s=this._createSegments("positionsRenderCoords"),{cursorPoint:r,mode:n,path:a}=e,h=!a.isValidPolygon,d=t.spatialReference;if(this._cursorSegment=null,a.numVertices>0&&h&&_(r)&&t.toRenderCoords(r,this._cursorPositionRenderSpace)){const p=e.positionsRenderCoords[a.numVertices-1],u=this._cursorPositionRenderSpace;let m=null;switch(n){case"euclidean":m=new de(p,u);break;case"geodesic":m=new Re(p,u,d)}s.nonIntersecting.push(m),this._cursorSegment=m}this._path.setGeometryFromSegments(s.nonIntersecting,this._origin),this._path.visible=i,this._intersectedPath.setGeometryFromSegments(s.intersecting,this._origin),this._intersectedPath.visible=i,this._pathSegments=s.all}_updatePerimeterSegments(){const t=this.visible&&this.viewData.mode==="euclidean",e=this._createSegments("positionsFittedRenderCoords");this._perimeter.setGeometryFromSegments(e.nonIntersecting,this._origin),this._perimeter.visible=t,this._intersectedPerimeter.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPerimeter.visible=t,this._perimeterSegments=e.all}_updateArea(){const t=this.viewData;switch(t.mode){case"euclidean":this._updateAreaEuclidean(t);break;case"geodesic":this._updateAreaGeodesic()}}_updateAreaEuclidean(t){const e=this.visible;t.validMeasurement&&t.intersectingSegments.size===0&&t.triangleIndices?(this._measurementArea.geometry={uv:t.positionsProjected,position:t.positionsFittedRenderCoords,triangleIndices:t.triangleIndices},this._measurementArea.size=[t.checkerSize,t.checkerSize],this._measurementArea.visible=e):this._measurementArea.visible=!1}_updateAreaGeodesic(){this._measurementArea.visible=!1}_updateProjectionLines(){const t=this.viewData,e=this.visible,i=t.path,s=t.mode;if(i.numVertices>0&&t.validMeasurement&&s==="euclidean"){const r=[];for(let n=0;n<i.numVertices;++n){const a=c();ee(a,t.positionsRenderCoords[n],this._origin);const h=c();ee(h,t.positionsFittedRenderCoords[n],this._origin),r.push([a,h])}this._projectionLines.geometry=r,this._projectionLines.visible=e}else this._projectionLines.geometry=null,this._projectionLines.visible=!1}_updateLabels(){if(this.destroyed)return;const{viewData:t}=this,{measurementData:e,mode:i,path:s}=t;if(!s)return;const r=!s.isValidPolygon,n=this.visible,a=this._formatAreaLabel(this.messages,i==="geodesic"?e.geodesicArea:e.area,this.analysisViewData.unit);_(a)?(this._areaLabel.geometry={type:"point",point:t.areaCentroid},this._areaLabel.text=a,this._areaLabel.visible=t.validMeasurement&&t.intersectingSegments.size===0&&n):this._areaLabel.visible=!1,this._set("areaLabel",U(a));const h=this._formatLengthLabel(this.messages,i==="geodesic"?e.geodesicPathLength:e.pathLength,this.analysisViewData.unit);if(_(h)&&t.pathLengthLabelSegmentIndex>=0&&t.pathLengthLabelSegmentIndex<this._pathSegments.length){const g=this._pathSegments[t.pathLengthLabelSegmentIndex],y=_(this._cursorSegment)?this._cursorSegment:Ai;this._pathLengthLabel.distance=this._params.labelDistance,this._pathLengthLabel.geometry={type:"corner",left:g,right:y},this._pathLengthLabel.text=h,this._pathLengthLabel.visible=r&&s.numVertices>0&&n}else this._pathLengthLabel.visible=!1;const d=i==="geodesic"?t.measurementData.geodesicCursorSegmentLength:t.measurementData.cursorSegmentLength;if(_(d)){const g=this._formatLengthLabel(this.messages,d,this.analysisViewData.unit);this._cursorSegmentLengthLabel.distance=this._params.labelDistance,this._cursorSegmentLengthLabel.geometry=_(this._cursorSegment)?{type:"segment",segment:this._cursorSegment,sampleLocation:"end"}:null,this._cursorSegmentLengthLabel.anchor="bottom",this._cursorSegmentLengthLabel.text=U(g),this._cursorSegmentLengthLabel.visible=r&&d.value!==0&&n}else this._cursorSegmentLengthLabel.visible=!1;this._cursorSegmentLengthLabel.overlaps(this._pathLengthLabel)&&(this._cursorSegmentLengthLabel.visible=!1),this._pathLengthLabel.overlaps(this._areaLabel)&&(this._pathLengthLabel.visible=!1);const p=t.mode==="geodesic",u=p?e.geodesicPathLength:e.perimeterLength,m=this._formatLengthLabel(this.messages,u,this.analysisViewData.unit);if(this._set("perimeterLengthLabel",U(m)),t.validMeasurement&&t.intersectingSegments.size===0){this._perimeterLengthLabel.distance=this._params.labelDistance,this._perimeterLengthLabel.anchor="top",this._perimeterLengthLabel.text=U(m),this._perimeterLengthLabel.visible=!0;let g=!0;for(let y=0;y<t.path.numVertices;++y){const b=(t.perimeterLengthLabelSegmentIndex+y)%t.path.numVertices,P=p?this._pathSegments[b]:this._perimeterSegments[b];if(g=!0,this._perimeterLengthLabel.geometry={type:"segment",segment:P,sampleLocation:"center"},!this._perimeterLengthLabel.overlaps(this._areaLabel))break;g=!1}this._perimeterLengthLabel.visible=g&&n}else this._perimeterLengthLabel.visible=!1}_toPreferredAreaUnit(t,e){return Kt(t,this._preferredAreaUnit(t,e))}_preferredAreaUnit(t,e){switch(e){case"metric":return qt(t.value,t.unit);case"imperial":return Ut(t.value,t.unit);default:return e}}_preferredLengthUnit(t,e){const i=this._deriveLengthUnitFromAreaUnit(e);switch(i){case"metric":return Nt(t.value,t.unit);case"imperial":return Ft(t.value,t.unit);default:return i}}_deriveLengthUnitFromAreaUnit(t){switch(t){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers"}throw new Error("unhandled area unit")}_formatAreaLabel(t,e,i){return t&&e&&$e(t,e,this._preferredAreaUnit(e,i))}_formatLengthLabel(t,e,i){return t&&e&&$e(t,e,this._preferredLengthUnit(e,i))}_updateMessageBundle(){this.loadingMessages=!0,kt("esri/core/t9n/Units").then(t=>{this.messages=t,this.view&&this._update()}).finally(()=>{this.loadingMessages=!1})}};var T;o([l()],w.prototype,"view",void 0),o([l()],w.prototype,"messages",void 0),o([l()],w.prototype,"analysis",void 0),o([l()],w.prototype,"viewData",void 0),o([l()],w.prototype,"analysisViewData",void 0),o([l({readOnly:!0})],w.prototype,"areaLabel",void 0),o([l({readOnly:!0})],w.prototype,"perimeterLengthLabel",void 0),o([l()],w.prototype,"loadingMessages",void 0),o([l()],w.prototype,"visible",null),w=o([te("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")],w),function(t){t[t.Small=12]="Small",t[t.Large=16]="Large"}(T||(T={}));const Pi={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:1,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25,pathLineColor:[1,.5,0,1],pathLineWidth:3,intersectingLineColor:[1,.2,0,1],perimeterLineColor:[1,.5,0,1],perimeterLineWidth:2,projectionLineColor:[1,.5,0,1],projectionLineWidth:2,projectionLineStippleSize:5,areaColor1:[1,.5,0,.5],areaColor2:[1,1,1,.5],fillColor:[1,.5,0,.5],lineSubdivisions:64,labelDistance:25},Mi={validMeasurement:!1,path:null,pathVersion:-1,cursorPoint:null,measurementData:null,mode:null,positionsGeographic:null,positionsRenderCoords:null,positionsProjected:null,positionsFittedRenderCoords:null,intersectingSegments:null,triangleIndices:null,fittingMode:null,areaCentroid:null,pathLengthLabelSegmentIndex:null,perimeterLengthLabelSegmentIndex:null,checkerSize:null},Ai=new de(c(),c());let f=class extends Zt(ue){constructor(t){super(t),this.type="area-measurement-view-3d",this.analysis=null,this.measurementData=null,this.lastDraggedVertex=null,this.cursorPoint=null,this.mode=le.Auto}initialize(){const{analysis:t,view:e}=this;this.path=new A({view:e,areaMeasurement:t}),this.analysisVisualization=new w({view:e,analysis:t,analysisViewData:this}),this.analysisController=new O({view:e,analysis:t,analysisViewData:this})}destroy(){this.analysisController=v(this.analysisController),this.analysisVisualization=v(this.analysisVisualization),this.path.destroy()}get updating(){var t;return!!((t=this.analysisVisualization)!=null&&t.loadingMessages)}get result(){const{measurementData:t}=this;return N(t)?{area:null,mode:null,perimeter:null}:t.actualMeasurementMode==="euclidean"?{area:t.area,perimeter:t.perimeterLength,mode:"euclidean"}:{area:t.geodesicArea,perimeter:t.pathLength,mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){return Ee(this.analysis.unit,this._defaultUnit)}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController}}};o([l({readOnly:!0})],f.prototype,"type",void 0),o([l({constructOnly:!0,nonNullable:!0})],f.prototype,"analysis",void 0),o([l()],f.prototype,"updating",null),o([l()],f.prototype,"analysisVisualization",void 0),o([l()],f.prototype,"analysisController",void 0),o([l()],f.prototype,"result",null),o([l()],f.prototype,"measurementData",void 0),o([l()],f.prototype,"viewData",null),o([l()],f.prototype,"validMeasurement",null),o([l()],f.prototype,"path",void 0),o([l()],f.prototype,"lastDraggedVertex",void 0),o([l()],f.prototype,"cursorPoint",void 0),o([l()],f.prototype,"mode",void 0),o([l()],f.prototype,"unit",null),o([l(Bt)],f.prototype,"_defaultUnit",void 0),f=o([te("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],f);const $i=f,ji=Object.freeze(Object.defineProperty({__proto__:null,default:$i},Symbol.toStringTag,{value:"Module"}));export{ji as A,_i as n};
