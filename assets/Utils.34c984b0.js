import{jd as M,a6 as C,ic as d,az as a,gL as L}from"./index.a0c3159d.js";import{e as I,n as T}from"./enums.4de5fe56.js";import"./number.6e30c64a.js";var n,_,S,h,O,c,N,i;(function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"})(n||(n={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(_||(_={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(S||(S={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(h||(h={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(O||(O={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(c||(c={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(N||(N={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(i||(i={}));class u{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(r,o,l,U,R,f,E,D,P){this.color=r,this.haloColor=o,this.haloSize=l,this.size=U,this.angle=R,this.offsetX=f,this.offsetY=E,this.hAnchor=D,this.vAnchor=P}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}u.pool=new M(u);const A=C.getLogger("esri.views.2d.engine.webgl.Utils"),e="geometry",B=[{name:e,strideInBytes:36}],F=[{name:e,strideInBytes:12}],m=[{name:e,strideInBytes:36}],G=[{name:e,strideInBytes:24}],H=[{name:e,strideInBytes:12}],y=[{name:e,strideInBytes:40}],p=[{name:e,strideInBytes:36}],Y=[{name:e,strideInBytes:36}];function s(t){const r={};for(const o of t)r[o.name]=o.strideInBytes;return r}const v=s(B),w=s(F),g=s(m),$=s(G),X=s(H),Z=s(y),z=s(p),b=s(Y);function j(t,r){switch(t){case n.MARKER:return r===i.HEATMAP?w:v;case n.FILL:switch(r){case i.DOT_DENSITY:return X;case i.SIMPLE:case i.OUTLINE_FILL_SIMPLE:return $;default:return g}case n.LINE:return Z;case n.TEXT:return z;case n.LABEL:return b}}function q(t){switch(t){case"butt":return I.BUTT;case"round":return I.ROUND;case"square":return I.SQUARE;default:return A.error(new a("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),I.ROUND}}function x(t){switch(t){case"miter":return T.MITER;case"bevel":return T.BEVEL;case"round":return T.ROUND;default:return A.error(new a("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),T.ROUND}}e+"",d.STATIC_DRAW;function J(t){switch(t){case L.UNSIGNED_BYTE:return Uint8Array;case L.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case L.FLOAT:return Float32Array;default:return void A.error(new a("webgl-utils",`Unable to handle type ${t}`))}}export{O as A,n as E,j as G,S as I,i as S,c as _,q as e,J as m,x as t};
