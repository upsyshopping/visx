_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[99],{"+QfW":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n("jg1C"),r=(n("ERkP"),n("HNTK")),i=n("i9k6"),s=n("lUgi");n.d(t,"packageJson",(function(){return s}));var c={background:"#0a0a0a"},l={color:"#ccc"};function o(){return Object(a.jsx)(i.a,{title:"Zoom",description:"<Zoom />",exampleRenderer:r.a,exampleUrl:"/zoom-i",tileStyles:c,detailsStyles:l})}},"5vgB":function(e,t,n){"use strict";n.r(t);var a=n("jg1C"),r=n("ERkP"),i=n("zjfJ"),s=n("zygG"),c=n("jpI8"),l=n("lUse"),o=n("fGyu");function u(e){var t=e.scaleX,n=void 0===t?1:t,a=e.scaleY,r=void 0===a?1:a,i=e.translateX,s=void 0===i?0:i,c=e.translateY,l=void 0===c?0:c,o=e.skewX,u=void 0===o?0:o,d=e.skewY;return{scaleX:n,scaleY:r,translateX:s,translateY:l,skewX:u,skewY:void 0===d?0:d}}function d(e){var t=e.scaleX,n=e.scaleY,a=e.translateX,r=e.translateY,i=e.skewX,s=e.skewY,c=t*n-s*i;return{scaleX:n/c,scaleY:t/c,translateX:(n*a-i*r)/-c,translateY:(s*a-t*r)/c,skewX:i/-c,skewY:s/-c}}function f(e,t){var n=t.x,a=t.y;return{x:e.scaleX*n+e.skewX*a+e.translateX,y:e.skewY*n+e.scaleY*a+e.translateY}}function m(e,t){var n=t.x,a=t.y;return f(d(e),{x:n,y:a})}function p(e,t){return u({translateX:e,translateY:t})}function x(e,t){return{scaleX:e.scaleX*t.scaleX+e.skewX*t.skewY,scaleY:e.skewY*t.skewX+e.scaleY*t.scaleY,translateX:e.scaleX*t.translateX+e.skewX*t.translateY+e.translateX,translateY:e.skewY*t.translateX+e.scaleY*t.translateY+e.translateY,skewX:e.scaleX*t.skewX+e.skewX*t.scaleY,skewY:e.skewY*t.scaleX+e.scaleY*t.skewY}}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];switch(t.length){case 0:throw new Error("composeMatrices() requires arguments: was called with no args");case 1:return t[0];case 2:return x(t[0],t[1]);default:var a=t[0],r=t[1],i=t.slice(2),s=x(a,r);return b.apply(void 0,[s].concat(Object(o.a)(i)))}}try{u.displayName="createMatrix",u.__docgenInfo={description:"",displayName:"createMatrix",props:{scaleX:{defaultValue:{value:1},description:"",name:"scaleX",required:!1,type:{name:"number | undefined"}},scaleY:{defaultValue:{value:1},description:"",name:"scaleY",required:!1,type:{name:"number | undefined"}},translateX:{defaultValue:{value:0},description:"",name:"translateX",required:!1,type:{name:"number | undefined"}},translateY:{defaultValue:{value:0},description:"",name:"translateY",required:!1,type:{name:"number | undefined"}},skewX:{defaultValue:{value:0},description:"",name:"skewX",required:!1,type:{name:"number | undefined"}},skewY:{defaultValue:{value:0},description:"",name:"skewY",required:!1,type:{name:"number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-zoom/src/util/matrix.ts#createMatrix"]={docgenInfo:u.__docgenInfo,name:"createMatrix",path:"../visx-zoom/src/util/matrix.ts#createMatrix"})}catch(S){}try{d.displayName="inverseMatrix",d.__docgenInfo={description:"",displayName:"inverseMatrix",props:{scaleX:{defaultValue:null,description:"",name:"scaleX",required:!0,type:{name:"number"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!0,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!0,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!0,type:{name:"number"}},skewX:{defaultValue:null,description:"",name:"skewX",required:!0,type:{name:"number"}},skewY:{defaultValue:null,description:"",name:"skewY",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-zoom/src/util/matrix.ts#inverseMatrix"]={docgenInfo:d.__docgenInfo,name:"inverseMatrix",path:"../visx-zoom/src/util/matrix.ts#inverseMatrix"})}catch(S){}try{b.displayName="composeMatrices",b.__docgenInfo={description:"",displayName:"composeMatrices",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-zoom/src/util/matrix.ts#composeMatrices"]={docgenInfo:b.__docgenInfo,name:"composeMatrices",path:"../visx-zoom/src/util/matrix.ts#composeMatrices"})}catch(S){}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0},j=function(e){return-e.deltaY>0?{scaleX:1.1,scaleY:1.1}:{scaleX:.9,scaleY:.9}},g=function(e){var t=Object(s.a)(e.offset,1)[0],n=Object(s.a)(e.lastOffset,1)[0];return{scaleX:t-n<0?.9:1.1,scaleY:t-n<0?.9:1.1}};function O(e){var t=e.scaleXMin,n=void 0===t?0:t,i=e.scaleXMax,o=void 0===i?1/0:i,x=e.scaleYMin,h=void 0===x?0:x,O=e.scaleYMax,w=void 0===O?1/0:O,k=e.initialTransformMatrix,Y=void 0===k?v:k,M=e.wheelDelta,X=void 0===M?j:M,S=e.pinchDelta,E=void 0===S?g:S,T=e.width,C=e.height,P=e.constrain,_=e.children,N=Object(r.useRef)(null),z=Object(r.useRef)(Y),R=Object(r.useState)(Y),q=R[0],V=R[1],A=Object(r.useState)(!1),D=A[0],I=A[1],B=Object(r.useState)(void 0),G=B[0],K=B[1],L=Object(r.useState)(void 0),Z=L[0],W=L[1],F=Object(r.useCallback)((function(e,t){if(P)return P(e,t);var a=e.scaleX,r=e.scaleY;return a>o||a<n||(r>w||r<h)?t:e}),[P,n,o,h,w]),H=Object(r.useCallback)((function(e){V((function(t){var n=F(e,t);return z.current=n,n}))}),[F]),U=Object(r.useCallback)((function(e){var t=e.x,n=e.y;return f(q,{x:t,y:n})}),[q]),J=Object(r.useCallback)((function(e){var t=e.x,n=e.y;return m(q,{x:t,y:n})}),[q]),Q=Object(r.useCallback)((function(){H(Y)}),[Y,H]),$=Object(r.useCallback)((function(e){var t=e.scaleX,n=e.scaleY,a=e.point,r=n||t,i=a||{x:T/2,y:C/2},s=m(z.current,i),c=b(z.current,p(s.x,s.y),function(e){return u({scaleX:e,scaleY:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0)||e})}(t,r),p(-s.x,-s.y));if(H(c),D){var l=z.current,o=l.translateX,d=l.translateY;W(a),K({translateX:o,translateY:d})}}),[C,T,D,H]),ee=Object(r.useCallback)((function(e){var t=e.translateX,n=e.translateY,a=b(q,p(t,n));H(a)}),[H,q]),te=Object(r.useCallback)((function(e){var t=e.translateX,n=e.translateY,a=y(y({},q),{},{translateX:t,translateY:n});H(a)}),[H,q]),ne=Object(r.useCallback)((function(e){var t=e.x,n=e.y,a=m(q,{x:t,y:n});te({translateX:a.x,translateY:a.y})}),[te,q]),ae=Object(r.useCallback)((function(){return d(q)}),[q]),re=Object(r.useCallback)((function(){var e=ae(),t=e.translateX,n=e.translateY,a=e.scaleX,r=e.scaleY,i=e.skewX,s=e.skewY;return"matrix(".concat(a,", ").concat(s,", ").concat(i,", ").concat(r,", ").concat(t,", ").concat(n,")")}),[ae]),ie=Object(r.useCallback)((function(e){var t=q.translateX,n=q.translateY;W(Object(c.a)(e)||void 0),K({translateX:t,translateY:n}),I(!0)}),[q]),se=Object(r.useCallback)((function(e,t){if(D&&Z&&G){var n=Object(c.a)(e),a=n?-(Z.x-n.x):-Z.x,r=n?-(Z.y-n.y):-Z.y,i=G.translateX+a;(null===t||void 0===t?void 0:t.offsetX)&&(i+=null===t||void 0===t?void 0:t.offsetX);var s=G.translateY+r;(null===t||void 0===t?void 0:t.offsetY)&&(s+=null===t||void 0===t?void 0:t.offsetY),te({translateX:i,translateY:s})}}),[D,te,Z,G]),ce=Object(r.useCallback)((function(){W(void 0),K(void 0),I(!1)}),[]),le=Object(r.useCallback)((function(e){e.preventDefault();var t=Object(c.a)(e)||void 0,n=X(e),a=n.scaleX,r=n.scaleY;$({scaleX:a,scaleY:r,point:t})}),[$,X]),oe=Object(r.useCallback)((function(e){var t=Object(s.a)(e.origin,2),n=t[0],a=t[1],r=e.memo;if(N.current){var i,c=null!==(i=r)&&void 0!==i?i:N.current.getBoundingClientRect(),l=c.top,o=c.left;r||(r={top:l,left:o});var u=E(e),d=u.scaleX,f=u.scaleY;$({scaleX:d,scaleY:f,point:{x:n-o,y:a-l}})}return r}),[$,E]),ue=Object(r.useCallback)((function(){var e=q.translateX,t=q.translateY,n=q.scaleX,a=q.scaleY,r=q.skewX,i=q.skewY;return"matrix(".concat(n,", ").concat(i,", ").concat(r,", ").concat(a,", ").concat(e,", ").concat(t,")")}),[q]),de=Object(r.useCallback)((function(){var e={x:T/2,y:C/2},t=J(e);ee({translateX:t.x-e.x,translateY:t.y-e.y})}),[C,T,J,ee]),fe=Object(r.useCallback)((function(){H({scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0})}),[H]);Object(l.useGesture)({onDragStart:function(e){var t=e.event;t instanceof KeyboardEvent||ie(t)},onDrag:function(e){var t=e.event,n=e.pinching,a=e.cancel;n?(a(),ce()):t instanceof KeyboardEvent||se(t)},onDragEnd:ce,onPinch:oe,onWheel:function(e){var t=e.event;e.active&&le(t)}},{target:N,eventOptions:{passive:!1},drag:{filterTaps:!0}});var me={initialTransformMatrix:Y,transformMatrix:q,isDragging:D,center:de,clear:fe,scale:$,translate:ee,translateTo:ne,setTranslate:te,setTransformMatrix:H,reset:Q,handleWheel:le,handlePinch:oe,dragEnd:ce,dragMove:se,dragStart:ie,toString:ue,invert:ae,toStringInvert:re,applyToPoint:U,applyInverseToPoint:J,containerRef:N};return Object(a.jsx)(a.Fragment,{children:_(me)})}var w=O;try{O.displayName="Zoom",O.__docgenInfo={description:"",displayName:"Zoom",props:{width:{defaultValue:null,description:"Width of the zoom container.",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"Height of the zoom container.",name:"height",required:!0,type:{name:"number"}},wheelDelta:{defaultValue:null,description:"```js\n  wheelDelta(event)\n```\n\nA function that returns { scaleX,scaleY } factors to scale the matrix by.\nScale factors greater than 1 will increase (zoom in), less than 1 will decrease (zoom out).",name:"wheelDelta",required:!1,type:{name:'((event: WheelEvent | React.WheelEvent<Element>) => Pick<TransformMatrix, "scaleX" | "scaleY">) | undefined'}},pinchDelta:{defaultValue:null,description:"```js\n  pinchDelta(state)\n```\n\nA function that returns { scaleX, scaleY, point } factors to scale the matrix by.\nScale factors greater than 1 will increase (zoom in), less than 1 will decrease (zoom out), the point is used to find where to zoom.\nThe state parameter is from react-use-gestures onPinch handler",name:"pinchDelta",required:!1,type:{name:"PinchDelta | undefined"}},scaleXMin:{defaultValue:{value:0},description:"Minimum x scale value for transform.",name:"scaleXMin",required:!1,type:{name:"number | undefined"}},scaleXMax:{defaultValue:null,description:"Maximum x scale value for transform.",name:"scaleXMax",required:!1,type:{name:"number | undefined"}},scaleYMin:{defaultValue:{value:0},description:"Minimum y scale value for transform.",name:"scaleYMin",required:!1,type:{name:"number | undefined"}},scaleYMax:{defaultValue:null,description:"Maximum y scale value for transform.",name:"scaleYMax",required:!1,type:{name:"number | undefined"}},constrain:{defaultValue:null,description:"By default constrain() will only constrain scale values. To change\nconstraints you can pass in your own constrain function as a prop.\n\nFor example, if you wanted to constrain your view to within [[0, 0], [width, height]]:\n\n```js\nfunction constrain(transformMatrix, prevTransformMatrix) {\n   const min = applyMatrixToPoint(transformMatrix, { x: 0, y: 0 });\n   const max = applyMatrixToPoint(transformMatrix, { x: width, y: height });\n   if (max.x < width || max.y < height) {\n     return prevTransformMatrix;\n   }\n   if (min.x > 0 || min.y > 0) {\n     return prevTransformMatrix;\n   }\n   return transformMatrix;\n}\n```",name:"constrain",required:!1,type:{name:"((transform: TransformMatrix, prevTransform: TransformMatrix) => TransformMatrix) | undefined"}},initialTransformMatrix:{defaultValue:null,description:"Initial transform matrix to apply.",name:"initialTransformMatrix",required:!1,type:{name:"TransformMatrix | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-zoom/src/Zoom.tsx#Zoom"]={docgenInfo:O.__docgenInfo,name:"Zoom",path:"../visx-zoom/src/Zoom.tsx#Zoom"})}catch(S){}var k=n("QnPE"),Y=n("+QfW"),M=[w],X=[Y.default];t.default=function(){return Object(a.jsx)(k.a,{components:M,examples:X,readme:'# @visx/Zoom\n\n<a title="@visx/zoom npm downloads" href="https://www.npmjs.com/package/@visx/zoom">\n  <img src="https://img.shields.io/npm/dm/@visx/zoom.svg?style=flat-square" />\n</a>\n\n`@visx/zoom` provides `react` components that make it easy to apply transforms to a viewport or\nchart.\n\n## Installation\n\n```\nnpm install --save @visx/zoom\n```\n',visxPackage:"zoom"})}},"67po":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("uKU/"),r=n("xx0A"),i=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function s(e){return i(Object(a.a)(),e)}},"9u7d":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.radius,n=e.width,a=e.height,r=Math.PI*(3-Math.sqrt(5));return function(e){var i=t*Math.sqrt(e),s=r*e;return{x:n/2+i*Math.cos(s),y:a/2+i*Math.sin(s)}}}},HNTK:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("fGyu"),r=n("jg1C"),i=n("yFcC"),s=n.n(i),c=n("ERkP"),l=n.n(c),o=n("N0d9"),u=n("L4Da"),d=(Object(u.a)(Object(o.a)(-100,.75,.35),Object(o.a)(80,1.5,.8)),Object(u.a)(Object(o.a)(260,.75,.35),Object(o.a)(80,1.5,.8)),Object(o.a)()),f=function(e){(e<0||e>1)&&(e-=Math.floor(e));var t=Math.abs(e-.5);return d.h=360*e-100,d.s=1.5-1.5*t,d.l=.8-.9*t,d+""},m=n("fxj8"),p=n("jpI8"),x=n("IacN"),b=n("9u7d"),h=n.n(b),y=n("67po"),v=Object(a.a)(new Array(1e3)),j=Object(y.a)({range:[0,1],domain:[0,1e3]}),g=Object(y.a)({domain:[0,600],range:[.5,8]}),O={scaleX:1.27,scaleY:1.27,translateX:-211.62,translateY:162.59,skewX:0,skewY:0};function w(e){var t=e.width,n=e.height,a=Object(c.useState)(!0),i=a[0],o=a[1],u=h()({radius:10,width:t,height:n}),d=v.map((function(e,t){return u(t)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.a,{width:t,height:n,scaleXMin:.5,scaleXMax:4,scaleYMin:.5,scaleYMax:4,initialTransformMatrix:O,children:function(e){return Object(r.jsxs)("div",{className:"jsx-2155104041 relative",children:[Object(r.jsxs)("svg",{width:t,height:n,style:{cursor:e.isDragging?"grabbing":"grab",touchAction:"none"},ref:e.containerRef,className:"jsx-2155104041",children:[Object(r.jsx)(x.a,{id:"zoom-clip",width:t,height:n}),Object(r.jsx)("rect",{width:t,height:n,rx:14,fill:"#0a0a0a",className:"jsx-2155104041"}),Object(r.jsx)("g",{transform:e.toString(),className:"jsx-2155104041",children:d.map((function(e,t){var n,a=e.x,i=e.y;return Object(r.jsx)(l.a.Fragment,{children:Object(r.jsx)("circle",{cx:a,cy:i,r:g(t>500?1e3-t:t),fill:f(null!==(n=j(t))&&void 0!==n?n:0),className:"jsx-2155104041"})},"dot-".concat(t))}))}),Object(r.jsx)("rect",{width:t,height:n,rx:14,fill:"transparent",onTouchStart:e.dragStart,onTouchMove:e.dragMove,onTouchEnd:e.dragEnd,onMouseDown:e.dragStart,onMouseMove:e.dragMove,onMouseUp:e.dragEnd,onMouseLeave:function(){e.isDragging&&e.dragEnd()},onDoubleClick:function(t){var n=Object(p.a)(t)||{x:0,y:0};e.scale({scaleX:1.1,scaleY:1.1,point:n})},className:"jsx-2155104041"}),i&&Object(r.jsxs)("g",{clipPath:"url(#zoom-clip)",transform:"\n                    scale(0.25)\n                    translate(".concat(4*t-t-60,", ").concat(4*n-n-60,")\n                  "),className:"jsx-2155104041",children:[Object(r.jsx)("rect",{width:t,height:n,fill:"#1a1a1a",className:"jsx-2155104041"}),d.map((function(e,t){var n,a=e.x,i=e.y;return Object(r.jsx)(l.a.Fragment,{children:Object(r.jsx)("circle",{cx:a,cy:i,r:g(t>500?1e3-t:t),fill:f(null!==(n=j(t))&&void 0!==n?n:0),className:"jsx-2155104041"})},"dot-sm-".concat(t))})),Object(r.jsx)("rect",{width:t,height:n,fill:"white",fillOpacity:.2,stroke:"white",strokeWidth:4,transform:e.toStringInvert(),className:"jsx-2155104041"})]})]}),Object(r.jsxs)("div",{className:"jsx-2155104041 controls",children:[Object(r.jsx)("button",{type:"button",onClick:function(){return e.scale({scaleX:1.2,scaleY:1.2})},className:"jsx-2155104041 btn btn-zoom",children:"+"}),Object(r.jsx)("button",{type:"button",onClick:function(){return e.scale({scaleX:.8,scaleY:.8})},className:"jsx-2155104041 btn btn-zoom btn-bottom",children:"-"}),Object(r.jsx)("button",{type:"button",onClick:e.center,className:"jsx-2155104041 btn btn-lg",children:"Center"}),Object(r.jsx)("button",{type:"button",onClick:e.reset,className:"jsx-2155104041 btn btn-lg",children:"Reset"}),Object(r.jsx)("button",{type:"button",onClick:e.clear,className:"jsx-2155104041 btn btn-lg",children:"Clear"})]}),Object(r.jsx)("div",{className:"jsx-2155104041 mini-map",children:Object(r.jsxs)("button",{type:"button",onClick:function(){return o(!i)},className:"jsx-2155104041 btn btn-lg",children:[i?"Hide":"Show"," Mini Map"]})})]})}}),Object(r.jsxs)("div",{className:"jsx-2155104041 description",children:["Based on Mike Bostock's"," ",Object(r.jsx)("a",{href:"https://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45",className:"jsx-2155104041",children:"Pan & Zoom III"})]}),Object(r.jsx)(s.a,{id:"2155104041",children:[".btn.jsx-2155104041{margin:0;text-align:center;border:none;background:#2f2f2f;color:#888;padding:0 4px;border-top:1px solid #0a0a0a;}",".btn-lg.jsx-2155104041{font-size:12px;line-height:1;padding:4px;}",".btn-zoom.jsx-2155104041{width:26px;font-size:22px;}",".btn-bottom.jsx-2155104041{margin-bottom:1rem;}",".description.jsx-2155104041{font-size:12px;margin-right:0.25rem;}",".controls.jsx-2155104041{position:absolute;top:15px;right:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}",".mini-map.jsx-2155104041{position:absolute;bottom:25px;right:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}",".relative.jsx-2155104041{position:relative;}"]})]})}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-zoom-i/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-zoom-i/Example.tsx#Example"})}catch(k){}},IacN:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("aWzz"),r=n.n(a),i=n("ERkP"),s=n.n(i),c=n("hNR5"),l=["id","x","y","width","height"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e){var t=e.id,n=e.x,a=void 0===n?0:n,r=e.y,i=void 0===r?0:r,u=e.width,d=void 0===u?1:u,f=e.height,m=void 0===f?1:f,p=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);return s.a.createElement(c.a,{id:t},s.a.createElement("rect",o({x:a,y:i,width:d,height:m},p)))}u.propTypes={id:r.a.string.isRequired,x:r.a.oneOfType([r.a.string,r.a.number]),y:r.a.oneOfType([r.a.string,r.a.number]),width:r.a.oneOfType([r.a.string,r.a.number]),height:r.a.oneOfType([r.a.string,r.a.number])}},"VB+g":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("rkTo"),r=n("ZQHj");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={x:0,y:0};function c(e,t){if(!e||!t)return null;var n=function(e){if(!e)return i({},s);if(Object(r.g)(e))return e.changedTouches.length>0?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:i({},s);if(Object(r.c)(e))return{x:e.clientX,y:e.clientY};var t=null==e?void 0:e.target,n=t&&"getBoundingClientRect"in t?t.getBoundingClientRect():null;return n?{x:n.x+n.width/2,y:n.y+n.height/2}:i({},s)}(t),c=Object(r.d)(e)?e.ownerSVGElement:e,l=Object(r.e)(c)?c.getScreenCTM():null;if(Object(r.f)(c)&&l){var o=c.createSVGPoint();return o.x=n.x,o.y=n.y,o=o.matrixTransform(l.inverse()),new a.a({x:o.x,y:o.y})}var u=e.getBoundingClientRect();return new a.a({x:n.x-u.left-e.clientLeft,y:n.y-u.top-e.clientTop})}},ZQHj:function(e,t,n){"use strict";function a(e){return!!e&&e instanceof Element}function r(e){return!!e&&(e instanceof SVGElement||"ownerSVGElement"in e)}function i(e){return!!e&&"createSVGPoint"in e}function s(e){return!!e&&"getScreenCTM"in e}function c(e){return!!e&&"changedTouches"in e}function l(e){return!!e&&"clientX"in e}function o(e){return!!e&&(e instanceof Event||"nativeEvent"in e&&e.nativeEvent instanceof Event)}n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return o}))},Zbhd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("PB0s"),r=n("XAd9"),i=n("Cyas"),s=n("VBI3");function c(e,t,n,c){var l,o=Object(a.c)(e,t,n);switch((c=Object(r.a)(null==c?",f":c)).type){case"s":var u=Math.max(Math.abs(e),Math.abs(t));return null!=c.precision||isNaN(l=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(e)))}(o,u))||(c.precision=l),Object(s.b)(c,u);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(l=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Object(i.a)(t)-Object(i.a)(e))+1}(o,Math.max(Math.abs(e),Math.abs(t))))||(c.precision=l-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(l=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(o))||(c.precision=l-2*("%"===c.type))}return Object(s.a)(c)}},hNR5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("aWzz"),r=n.n(a),i=n("ERkP"),s=n.n(i),c=["id","children"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e){var t=e.id,n=e.children,a=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,c);return s.a.createElement("defs",null,s.a.createElement("clipPath",l({id:t},a),n))}o.propTypes={id:r.a.string.isRequired,children:r.a.node}},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=f;var a=o(n("aWzz")),r=o(n("FGHv")),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n("ERkP")),s=n("Br7l"),c=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=[];function f(e){var t=e.className,n=e.children,a=e.debounceTime,l=void 0===a?300:a,o=e.ignoreDimensions,f=void 0===o?d:o,m=e.parentSizeStyles,p=void 0===m?{width:"100%",height:"100%"}:m,x=e.enableDebounceLeadingCall,b=void 0===x||x,h=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,c),y=(0,i.useRef)(null),v=(0,i.useRef)(0),j=(0,i.useState)({width:0,height:0,top:0,left:0}),g=j[0],O=j[1],w=(0,i.useMemo)((function(){var e=Array.isArray(f)?f:[f];return(0,r.default)((function(t){O((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),l,{leading:b})}),[l,b,f]);return(0,i.useEffect)((function(){var e=new s.ResizeObserver((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,a=t.top,r=t.width,i=t.height;v.current=window.requestAnimationFrame((function(){w({width:r,height:i,top:a,left:n})}))}))}));return y.current&&e.observe(y.current),function(){window.cancelAnimationFrame(v.current),e.disconnect(),null!=w&&w.cancel&&w.cancel()}}),[w]),i.default.createElement("div",u({style:p,ref:y,className:t},h),n(u({},g,{ref:y.current,resize:w})))}f.propTypes={className:a.default.string,debounceTime:a.default.number,enableDebounceLeadingCall:a.default.bool,ignoreDimensions:a.default.oneOfType([a.default.any,a.default.arrayOf(a.default.any)]),children:a.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("zjfJ"),r=n("jg1C"),i=n("yFcC"),s=n.n(i),c=n("ERkP"),l=n.n(c),o=n("jvFD"),u=n.n(o),d=n("i6Tx"),f=n.n(d);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){var t,n,i=e.description,c=e.detailsHeight,o=void 0===c?76:c,d=e.detailsStyles,p=e.exampleProps,x=e.exampleRenderer,b=e.exampleUrl,h=e.tileStyles,y=e.title;return Object(r.jsxs)(r.Fragment,{children:[(t=b,n=Object(r.jsxs)("div",{style:h,className:"jsx-713312509 gallery-tile",children:[Object(r.jsx)("div",{className:"jsx-713312509 image",children:Object(r.jsx)(f.a,{children:function(e){var t=e.width,n=e.height;return l.a.createElement(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(y||i?o:0)},p))}})}),(y||i)&&Object(r.jsxs)("div",{style:d,className:"jsx-713312509 details",children:[y&&Object(r.jsx)("div",{className:"jsx-713312509 title",children:y}),i&&Object(r.jsx)("div",{className:"jsx-713312509 description",children:Object(r.jsx)("pre",{className:"jsx-713312509",children:i})})]})]}),t?Object(r.jsx)(u.a,{href:t,children:n}):n),Object(r.jsx)(s.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{p.displayName="GalleryTile",p.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:p.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(x){}},jpI8:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("VB+g"),r=n("ZQHj");function i(e,t){if(Object(r.a)(e)&&t)return Object(a.a)(e,t);if(Object(r.b)(e)){var n=e,i=n.target;if(i)return Object(a.a)(i,n)}return null}},lUgi:function(e){e.exports=JSON.parse('{"name":"@visx/demo-zoom-i","description":"Standalone visx zoom demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/clip-path":"latest","@visx/event":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/zoom":"latest","d3-scale-chromatic":"^1.5.0","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","zoom"]}')},rkTo:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}));var r=function(){function e(e){var t=e.x,n=void 0===t?0:t,r=e.y,i=void 0===r?0:r;a(this,"x",0),a(this,"y",0),this.x=n,this.y=i}var t=e.prototype;return t.value=function(){return{x:this.x,y:this.y}},t.toArray=function(){return[this.x,this.y]},e}()},"uKU/":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var a=n("PB0s"),r=n("2+fR"),i=n("W1cA"),s=n("Zbhd");function c(e){var t=e.domain;return e.ticks=function(e){var n=t();return Object(a.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var a=t();return Object(s.a)(a[0],a[a.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var r,i,s=t(),c=0,l=s.length-1,o=s[c],u=s[l],d=10;for(u<o&&(i=o,o=u,u=i,i=c,c=l,l=i);d-- >0;){if((i=Object(a.b)(o,u,n))===r)return s[c]=o,s[l]=u,t(s);if(i>0)o=Math.floor(o/i)*i,u=Math.ceil(u/i)*i;else{if(!(i<0))break;o=Math.ceil(o*i)/i,u=Math.floor(u*i)/i}r=i}return e},e}function l(){var e=Object(r.b)();return e.copy=function(){return Object(r.a)(e,l())},i.b.apply(e,arguments),c(e)}},w8ZM:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/zoom",function(){return n("5vgB")}])},zjfJ:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},zygG:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("HO86");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(l){r=!0,i=l}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["w8ZM",0,2,1,3,4,5,8,9,10,23]]]);