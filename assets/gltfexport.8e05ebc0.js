import{hZ as d,aB as D,t as U,aK as S,f8 as $,jo as Q,jn as tt,r as m,aO as F,ah as B,az as v,tk as et,ms as st,kP as Y,k3 as it,kG as P,tl as rt,tm as nt,tn as at,to as K,tp as ot,tq as ht,c9 as y,a3 as ct,mX as ft,tr as ut,ts as lt}from"./index.a0c3159d.js";import{P as dt}from"./georeference.7d411cd4.js";var I;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(I||(I={}));class A{constructor(t,e){if(!t)throw new Error("GLB requires a JSON gltf chunk");this.length=A.HEADER_SIZE,this.length+=A.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(t);if(this.length+=this._alignTo(s.byteLength,4),e&&(this.length+=A.CHUNK_HEADER_SIZE,this.length+=e.byteLength,e.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,I.JSON,32);e&&this._writeChunk(e,r,I.BIN)}_writeHeader(){this.outView.setUint32(0,A.MAGIC,!0),this.outView.setUint32(4,A.VERSION,!0),this.outView.setUint32(8,this.length,!0)}_writeChunk(t,e,s,r=0){const n=this._alignTo(t.byteLength,4);for(this.outView.setUint32(e,n,!0),this.outView.setUint32(e+=4,s,!0),this._writeArrayBuffer(this.outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this.outView.setUint8(e,r),e++;return e}_writeArrayBuffer(t,e,s,r,n){new Uint8Array(t,s,n).set(new Uint8Array(e,r,n),0)}_textToArrayBuffer(t){return new TextEncoder().encode(t).buffer}_alignTo(t,e){return e*Math.ceil(t/e)}}A.HEADER_SIZE=12,A.CHUNK_HEADER_SIZE=8,A.MAGIC=1179937895,A.VERSION=2;var R,_,x,g,k,M,H;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(R||(R={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(_||(_={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(x||(x={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(g||(g={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(k||(k={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(M||(M={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(H||(H={}));class pt{constructor(t,e,s,r,n){this.buffer=t,this.componentType=s,this.dataType=r,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this.bufferView={buffer:t.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==x.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=a),e.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this.data.length;if(this.data.push(t),this.accessorIndex>=0){const s=e%this.numComponentsForDataType,r=this.accessorMin[s];this.accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const n=this.accessorMax[s];this.accessorMax[s]=typeof n!="number"?t:Math.max(n,t)}}get dataSize(){return this.data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this.componentType){case d.BYTE:return new Int8Array(t,e);case d.FLOAT:return new Float32Array(t,e);case d.SHORT:return new Int16Array(t,e);case d.UNSIGNED_BYTE:return new Uint8Array(t,e);case d.UNSIGNED_INT:return new Uint32Array(t,e);case d.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this.data)}writeAsync(t){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this.data.push(s[r]);delete this.asyncWritePromise}),this.asyncWritePromise}startAccessor(t){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=t;const e=this.numComponentsForDataType;this.accessorMin=new Array(e),this.accessorMax=new Array(e)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this.numComponentsForDataType,s=(this.data.length-this.accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this.accessorMin.length;++n)typeof this.accessorMin[n]!="number"&&(this.accessorMin[n]=0),typeof this.accessorMax[n]!="number"&&(this.accessorMax[n]=0);const r={byteOffset:t*(this.accessorIndex/e),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case d.UNSIGNED_BYTE:case d.UNSIGNED_SHORT:r.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise(t=>this.finalizedPromiseResolve=t)}finalize(){const t=this.bufferView;return new Promise(e=>{const s=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&s.push(this.asyncWritePromise),e(D(s))}).then(()=>{this.isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()})}_getElementSize(){return this._sizeComponentType()*this.numComponentsForDataType}_sizeComponentType(){switch(this.componentType){case d.BYTE:case d.UNSIGNED_BYTE:return 1;case d.SHORT:case d.UNSIGNED_SHORT:return 2;case d.UNSIGNED_INT:case d.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this.dataType){case g.SCALAR:return 1;case g.VEC2:return 2;case g.VEC3:return 3;case g.VEC4:case g.MAT2:return 4;case g.MAT3:return 9;case g.MAT4:return 16}}}class j{constructor(t){this.gltf=t,this.bufferViews=[],this.isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this.buffer=e}addBufferView(t,e,s){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new pt(this,this.gltf,t,e,s);return this.bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this.bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this.bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this.bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise(t=>{t(D(this.getViewFinalizePromises()))}).then(()=>{this.isFinalized=!0;const t=this.getArrayBuffer();this.buffer.byteLength=t.byteLength,this.buffer.uri=t}),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}_getTotalSize(){let t=0;for(const e of this.bufferViews)t+=e.byteSize;return t}}function gt(i,t){if(i.components)for(const e of i.components)e.faces&&e.shading==="smooth"&&mt(e,t)}function mt(i,t){U(t.normal)&&(t.normal=new Float32Array(t.position.length));const e=i.faces,{position:s,normal:r}=t,n=e.length/3;for(let a=0;a<n;++a){const h=3*e[3*a+0],o=3*e[3*a+1],c=3*e[3*a+2],l=S(At,s[h+0],s[h+1],s[h+2]),p=S(Tt,s[o+0],s[o+1],s[o+2]),w=S(yt,s[c+0],s[c+1],s[c+2]),T=$(p,p,l),b=$(w,w,l),u=Q(T,T,b);r[h+0]+=u[0],r[h+1]+=u[1],r[h+2]+=u[2],r[o+0]+=u[0],r[o+1]+=u[1],r[o+2]+=u[2],r[c+0]+=u[0],r[c+1]+=u[1],r[c+2]+=u[2]}for(let a=0;a<r.length;a+=3)S(N,r[a],r[a+1],r[a+2]),tt(N,N),r[a+0]=N[0],r[a+1]=N[1],r[a+2]=N[2]}function wt(i){if(m(i.transform))return i.transform.getOriginPoint(i.spatialReference);const t=i.extent.xmax-i.extent.width/2,e=i.extent.ymax-i.extent.height/2,s=i.extent.zmin;return new F({x:t,y:e,z:s,spatialReference:i.extent.spatialReference})}const At=B(),Tt=B(),yt=B(),N=B();function _t(i){const t=J(i);return m(t)?t.toDataURL():""}async function Z(i){const t=J(i);if(U(t))throw new v("imageToArrayBuffer","Unsupported image type");const e=await bt(i),s=await new Promise(r=>t.toBlob(r,e));if(!s)throw new v("imageToArrayBuffer","Failed to encode image");return{data:await s.arrayBuffer(),type:e}}async function bt(i){if(!(i instanceof HTMLImageElement))return"image/png";const t=i.src;if(et(t)){const{mediaType:e}=st(t);return e==="image/jpeg"?e:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}function J(i){if(i instanceof HTMLCanvasElement)return i;if(i instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=i.width,t.height=i.height;const e=t.getContext("2d");return i instanceof HTMLImageElement?e.drawImage(i,0,0,i.width,i.height):i instanceof ImageData&&e.putImageData(i,0,0),t}function Et(i){const t=[],e=new Uint8Array(i);for(let s=0;s<e.length;s++)t.push(String.fromCharCode(e[s]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function xt(i){if(i.byteLength<8)return!1;const t=new Uint8Array(i);return t[0]===137&&t[1]===80&&t[2]===78&&t[3]===71&&t[4]===13&&t[5]===10&&t[6]===26&&t[7]===10}class Rt{constructor(t,e,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:e,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(t)}_addScenes(t){this.gltf.scene=t.defaultScene;const e=this.gltf.extras.options.bufferOutputType===R.GLB||this.gltf.extras.options.imageOutputType===_.GLB;e&&(this.gltf.extras.binChunkBuffer=new j(this.gltf)),t.forEachScene(s=>{this._addScene(s)}),e&&this.gltf.extras.binChunkBuffer.finalize()}_addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const e={};t.name&&(e.name=t.name),t.forEachNode(s=>{e.nodes||(e.nodes=[]);const r=this._addNode(s);e.nodes.push(r)}),this.gltf.scenes.push(e)}_addNode(t){this.gltf.nodes||(this.gltf.nodes=[]);const e={};t.name&&(e.name=t.name);const s=t.translation;Y(s,it)||(e.translation=P(s));const r=t.rotation;rt(r,nt)||(e.rotation=at(r));const n=t.scale;Y(n,K)||(e.scale=P(n)),t.mesh&&t.mesh.vertexAttributes.position?e.mesh=this._addMesh(t.mesh):t.forEachNode(h=>{e.children||(e.children=[]);const o=this._addNode(h);e.children.push(o)});const a=this.gltf.nodes.length;return this.gltf.nodes.push(e),a}_addMesh(t){this.gltf.meshes||(this.gltf.meshes=[]);const e={primitives:[]},s=this.gltf.extras.options.bufferOutputType===R.GLB;let r;r=s?this.gltf.extras.binChunkBuffer:new j(this.gltf),this.params.origin||(this.params.origin=wt(t));const n=dt(t.vertexAttributes,t.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});gt(t,n),this._flipYZAxis(n);const a=r.addBufferView(d.FLOAT,g.VEC3,x.ARRAY_BUFFER);let h,o,c,l;n.normal&&(h=r.addBufferView(d.FLOAT,g.VEC3,x.ARRAY_BUFFER)),t.vertexAttributes.uv&&(o=r.addBufferView(d.FLOAT,g.VEC2,x.ARRAY_BUFFER)),n.tangent&&(c=r.addBufferView(d.FLOAT,g.VEC4,x.ARRAY_BUFFER)),t.vertexAttributes.color&&(l=r.addBufferView(d.UNSIGNED_BYTE,g.VEC4,x.ARRAY_BUFFER)),a.startAccessor("POSITION"),h&&h.startAccessor("NORMAL"),o&&o.startAccessor("TEXCOORD_0"),c&&c.startAccessor("TANGENT"),l&&l.startAccessor("COLOR_0");const p=n.position.length/3,{position:w,normal:T,tangent:b}=n,{color:u,uv:E}=t.vertexAttributes;for(let f=0;f<p;++f)a.push(w[3*f+0]),a.push(w[3*f+1]),a.push(w[3*f+2]),h&&m(T)&&(h.push(T[3*f+0]),h.push(T[3*f+1]),h.push(T[3*f+2])),o&&m(E)&&(o.push(E[2*f+0]),o.push(E[2*f+1])),c&&m(b)&&(c.push(b[4*f+0]),c.push(b[4*f+1]),c.push(b[4*f+2]),c.push(b[4*f+3])),l&&m(u)&&(l.push(u[4*f+0]),l.push(u[4*f+1]),l.push(u[4*f+2]),l.push(u[4*f+3]));const X=a.endAccessor(),G=this._addAccessor(a.index,X);let C,L,z,V,O;if(h){const f=h.endAccessor();C=this._addAccessor(h.index,f)}if(o){const f=o.endAccessor();L=this._addAccessor(o.index,f)}if(c){const f=c.endAccessor();z=this._addAccessor(c.index,f)}if(l){const f=l.endAccessor();V=this._addAccessor(l.index,f)}t.components&&t.components.length>0&&t.components[0].faces?(O=r.addBufferView(d.UNSIGNED_INT,g.SCALAR,x.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(O,t.components,e,G,C,L,z,V)):this._addMeshVertexNonIndexed(t.components,e,G,C,L,z,V),a.finalize(),h&&h.finalize(),o&&o.finalize(),c&&c.finalize(),O&&O.finalize(),l&&l.finalize(),s||r.finalize();const q=this.gltf.meshes.length;return this.gltf.meshes.push(e),q}_flipYZAxis({position:t,normal:e,tangent:s}){this._flipYZBuffer(t,3),this._flipYZBuffer(e,3),this._flipYZBuffer(s,4)}_flipYZBuffer(t,e){if(!U(t))for(let s=1,r=2;s<t.length;s+=e,r+=e){const n=t[s],a=t[r];t[s]=a,t[r]=-n}}_addMaterial(t){if(t===null)return;const e=this.materialMap.indexOf(t);if(e!==-1)return e;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(t.alphaMode){case"mask":s.alphaMode=M.MASK;break;case"auto":case"blend":s.alphaMode=M.BLEND}t.alphaCutoff!==.5&&(s.alphaCutoff=t.alphaCutoff),t.doubleSided&&(s.doubleSided=t.doubleSided),s.pbrMetallicRoughness={};const r=h=>h**2.1,n=h=>{const o=h.toRgba();return o[0]=r(o[0]/255),o[1]=r(o[1]/255),o[2]=r(o[2]/255),o};if(m(t.color)&&(s.pbrMetallicRoughness.baseColorFactor=n(t.color)),m(t.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(t.colorTexture)}),m(t.normalTexture)&&(s.normalTexture={index:this._addTexture(t.normalTexture)}),t instanceof ot){if(m(t.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(t.emissiveTexture)}),m(t.emissiveColor)){const h=n(t.emissiveColor);s.emissiveFactor=[h[0],h[1],h[2]]}m(t.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(t.occlusionTexture)}),m(t.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(t.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=t.metallic,s.pbrMetallicRoughness.roughnessFactor=t.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1;const a=this.gltf.materials.length;return this.gltf.materials.push(s),this.materialMap.push(t),a}_addTexture(t){return this.gltf.textures||(this.gltf.textures=[]),ht(this.textureMap,t,()=>{const e={sampler:this._addSampler(t),source:this._addImage(t)},s=this.gltf.textures.length;return this.gltf.textures.push(e),s})}_addImage(t){const e=this.imageMap.get(t);if(e!=null)return e;this.gltf.images||(this.gltf.images=[]);const s={};if(t.url)s.uri=t.url;else{s.extras=t.data;for(let n=0;n<this.gltf.images.length;++n)if(t.data===this.gltf.images[n].extras)return n;switch(this.gltf.extras.options.imageOutputType){case _.GLB:{const n=this.gltf.extras.binChunkBuffer.addBufferView(d.UNSIGNED_BYTE,g.SCALAR),a=Z(t.data).then(({data:h,type:o})=>(s.mimeType=o,h));n.writeAsync(a).then(()=>{n.finalize()}),s.bufferView=n.index;break}case _.DataURI:s.uri=_t(t.data);break;default:this.gltf.extras.promises.push(Z(t.data).then(({data:n,type:a})=>{s.uri=n,s.mimeType=a}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(t,r),r}_addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let e=y.REPEAT,s=y.REPEAT;if(typeof t.wrap=="string")switch(t.wrap){case"clamp":e=y.CLAMP_TO_EDGE,s=y.CLAMP_TO_EDGE;break;case"mirror":e=y.MIRRORED_REPEAT,s=y.MIRRORED_REPEAT}else{switch(t.wrap.vertical){case"clamp":s=y.CLAMP_TO_EDGE;break;case"mirror":s=y.MIRRORED_REPEAT}switch(t.wrap.horizontal){case"clamp":e=y.CLAMP_TO_EDGE;break;case"mirror":e=y.MIRRORED_REPEAT}}const r={wrapS:e,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(t,e){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:t,byteOffset:e.byteOffset,componentType:e.componentType,count:e.count,type:e.type,min:e.min,max:e.max,name:e.name};e.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(t,e,s,r,n,a,h,o){for(const c of e){t.startAccessor("INDICES");for(let w=0;w<c.faces.length;++w)t.push(c.faces[w]);const l=t.endAccessor(),p={attributes:{POSITION:r},indices:this._addAccessor(t.index,l),material:this._addMaterial(c.material)};n&&c.shading!=="flat"&&(p.attributes.NORMAL=n),a&&(p.attributes.TEXCOORD_0=a),h&&c.shading!=="flat"&&(p.attributes.TANGENT=h),o&&(p.attributes.COLOR_0=o),s.primitives.push(p)}}_addMeshVertexNonIndexed(t,e,s,r,n,a,h){const o={attributes:{POSITION:s}};r&&(o.attributes.NORMAL=r),n&&(o.attributes.TEXCOORD_0=n),a&&(o.attributes.TANGENT=a),h&&(o.attributes.COLOR_0=h),t&&(o.material=this._addMaterial(t[0].material)),e.primitives.push(o)}}class Nt{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.includes(t))throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){ct(this._scenes,t)}forEachScene(t){this._scenes.forEach(t)}}class Bt{constructor(){this.name="",this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}}class Ot{constructor(t){this.mesh=t,this.name="",this.translation=B(),this.rotation=ft(),this.scale=P(K),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(t){ut(this.rotation,t[0],t[1],t[2])}}const St="model.gltf",W="model.glb";function It(i,t,e){const s=new Rt(i,t=t||{},e);let r=s.params;r?r.origin||(r.origin=new F({x:-1,y:-1,z:-1})):r={origin:new F({x:-1,y:-1,z:-1})};const n=r.origin,a=s.gltf,h=a.extras.promises;let o=1,c=1,l=null;return D(h).then(()=>{const p={origin:n};delete a.extras;const w=typeof t.jsonSpacing=="number"?t.jsonSpacing:4,T=JSON.stringify(a,(b,u)=>{if(b!=="extras"){if(u instanceof ArrayBuffer){if(xt(u))switch(t.imageOutputType){case _.DataURI:case _.GLB:break;case _.External:default:{const E=`img${c}.png`;return c++,p[E]=u,E}}switch(t.bufferOutputType){case R.DataURI:return Et(u);case R.GLB:if(l)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(l=u);case R.External:default:{const E=`data${o}.bin`;return o++,p[E]=u,E}}}return u}},w);return t.bufferOutputType===R.GLB||t.imageOutputType===_.GLB?p[W]=new A(T,l).buffer:p[St]=T,p})}function Mt(i,t){return It(i,{bufferOutputType:R.GLB,imageOutputType:_.GLB,jsonSpacing:0},t)}class Ct{constructor(t,e){this._file={type:"model/gltf-binary",data:t},this.origin=e}buffer(){return Promise.resolve(this._file)}download(t){lt(new Blob([this._file.data],{type:this._file.type}),t)}}function Vt(i,t){const e=new Nt,s=new Bt;return e.addScene(s),s.addNode(new Ot(i)),Mt(e,t).then(r=>new Ct(r[W],r.origin))}export{Vt as toBinaryGLTF};
