module.exports=[41997,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={BailoutToCSRError:function(){return g},isBailoutToCSRError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="BAILOUT_TO_CLIENT_SIDE_RENDERING";class g extends Error{constructor(a){super(`Bail out to client-side rendering: ${a}`),this.reason=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===f}},32245,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"BailoutToCSR",{enumerable:!0,get:function(){return e}});let d=a.r(41997);function e({reason:a,children:b}){throw Object.defineProperty(new d.BailoutToCSRError(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0})}},7773,(a,b,c)=>{"use strict";function d(a){return a.split("/").map(a=>encodeURIComponent(a)).join("/")}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"encodeURIPath",{enumerable:!0,get:function(){return d}})},97458,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"PreloadChunks",{enumerable:!0,get:function(){return i}});let d=a.r(87924),e=a.r(35112),f=a.r(56704),g=a.r(7773),h=a.r(68063);function i({moduleIds:a}){let b=f.workAsyncStorage.getStore();if(void 0===b)return null;let c=[];if(b.reactLoadableManifest&&a){let d=b.reactLoadableManifest;for(let b of a){if(!d[b])continue;let a=d[b].files;c.push(...a)}}if(0===c.length)return null;let j=(0,h.getAssetTokenQuery)();return(0,d.jsx)(d.Fragment,{children:c.map(a=>{let c=`${b.assetPrefix}/_next/${(0,g.encodeURIPath)(a)}${j}`;return a.endsWith(".css")?(0,d.jsx)("link",{precedence:"dynamic",href:c,rel:"stylesheet",as:"style",nonce:b.nonce},a):((0,e.preload)(c,{as:"script",fetchPriority:"low",nonce:b.nonce}),null)})})}},69853,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return j}});let d=a.r(87924),e=a.r(72131),f=a.r(32245),g=a.r(97458);function h(a){return{default:a&&"default"in a?a.default:a}}let i={loader:()=>Promise.resolve(h(()=>null)),loading:null,ssr:!0},j=function(a){let b={...i,...a},c=(0,e.lazy)(()=>b.loader().then(h)),j=b.loading;function k(a){let h=j?(0,d.jsx)(j,{isLoading:!0,pastDelay:!0,error:null}):null,i=!b.ssr||!!b.loading,k=i?e.Suspense:e.Fragment,l=b.ssr?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.PreloadChunks,{moduleIds:b.modules}),(0,d.jsx)(c,{...a})]}):(0,d.jsx)(f.BailoutToCSR,{reason:"next/dynamic",children:(0,d.jsx)(c,{...a})});return(0,d.jsx)(k,{...i?{fallback:h}:{},children:l})}return k.displayName="LoadableComponent",k}},19721,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return e}});let d=a.r(33354)._(a.r(69853));function e(a,b){let c={};"function"==typeof a&&(c.loader=a);let e={...c,...b};return(0,d.default)({...e,modules:e.loadableGenerated?.modules})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},40777,a=>{"use strict";let b,c;var d,e=a.i(87924),f=a.i(19721),g=a.i(72131),h=a.i(86723),i=a.i(74290),j=a.i(14800),k=g,l=a.i(65802);class m extends k.Component{getSnapshotBeforeUpdate(a){let b=this.props.childRef.current;if(b&&a.isPresent&&!this.props.isPresent){let a=this.props.sizeRef.current;a.height=b.offsetHeight||0,a.width=b.offsetWidth||0,a.top=b.offsetTop,a.left=b.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function n({children:a,isPresent:b}){let c=(0,k.useId)(),d=(0,k.useRef)(null),f=(0,k.useRef)({width:0,height:0,top:0,left:0}),{nonce:g}=(0,k.useContext)(l.MotionConfigContext);return(0,k.useInsertionEffect)(()=>{let{width:a,height:e,top:h,left:i}=f.current;if(b||!d.current||!a||!e)return;d.current.dataset.motionPopId=c;let j=document.createElement("style");return g&&(j.nonce=g),document.head.appendChild(j),j.sheet&&j.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${e}px !important;
            top: ${h}px !important;
            left: ${i}px !important;
          }
        `),()=>{document.head.removeChild(j)}},[b]),(0,e.jsx)(m,{isPresent:b,childRef:d,sizeRef:f,children:k.cloneElement(a,{ref:d})})}let o=({children:a,initial:b,isPresent:c,onExitComplete:d,custom:f,presenceAffectsLayout:h,mode:k})=>{let l=(0,i.useConstant)(p),m=(0,g.useId)(),o=(0,g.useCallback)(a=>{for(let b of(l.set(a,!0),l.values()))if(!b)return;d&&d()},[l,d]),q=(0,g.useMemo)(()=>({id:m,initial:b,isPresent:c,custom:f,onExitComplete:o,register:a=>(l.set(a,!1),()=>l.delete(a))}),h?[Math.random(),o]:[c,o]);return(0,g.useMemo)(()=>{l.forEach((a,b)=>l.set(b,!1))},[c]),g.useEffect(()=>{c||l.size||!d||d()},[c]),"popLayout"===k&&(a=(0,e.jsx)(n,{isPresent:c,children:a})),(0,e.jsx)(j.PresenceContext.Provider,{value:q,children:a})};function p(){return new Map}var q=a.i(20410);let r=a=>a.key||"";function s(a){let b=[];return g.Children.forEach(a,a=>{(0,g.isValidElement)(a)&&b.push(a)}),b}var t=a.i(1703);let u=({children:a,custom:b,initial:c=!0,onExitComplete:d,presenceAffectsLayout:f=!0,mode:j="sync",propagate:k=!1})=>{let[l,m]=(0,q.usePresence)(k),n=(0,g.useMemo)(()=>s(a),[a]),p=k&&!l?[]:n.map(r),u=(0,g.useRef)(!0),v=(0,g.useRef)(n),w=(0,i.useConstant)(()=>new Map),[x,y]=(0,g.useState)(n),[z,A]=(0,g.useState)(n);(0,t.useIsomorphicLayoutEffect)(()=>{u.current=!1,v.current=n;for(let a=0;a<z.length;a++){let b=r(z[a]);p.includes(b)?w.delete(b):!0!==w.get(b)&&w.set(b,!1)}},[z,p.length,p.join("-")]);let B=[];if(n!==x){let a=[...n];for(let b=0;b<z.length;b++){let c=z[b],d=r(c);p.includes(d)||(a.splice(b,0,c),B.push(c))}"wait"===j&&B.length&&(a=B),A(s(a)),y(n);return}let{forceRender:C}=(0,g.useContext)(h.LayoutGroupContext);return(0,e.jsx)(e.Fragment,{children:z.map(a=>{let g=r(a),h=(!k||!!l)&&(n===z||p.includes(g));return(0,e.jsx)(o,{isPresent:h,initial:(!u.current||!!c)&&void 0,custom:h?void 0:b,presenceAffectsLayout:f,mode:j,onExitComplete:h?void 0:()=>{if(!w.has(g))return;w.set(g,!0);let a=!0;w.forEach(b=>{b||(a=!1)}),a&&(null==C||C(),A(v.current),k&&(null==m||m()),d&&d())},children:a},g)})})};var v=a.i(46271);let w={data:""},x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y=/\/\*[^]*?\*\/|  +/g,z=/\n+/g,A=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?A(g,f):f+"{"+A(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=A(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f="-"==f[1]?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=A.p?A.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},B={},C=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+C(a[c]);return b}return a};function D(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=C(a),h=B[g]||(B[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!B[h]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=x.exec(a.replace(y,""));)b[4]?d.shift():b[3]?(c=b[3].replace(z," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(z," ").trim();return d[0]})(a);B[h]=A(e?{["@keyframes "+h]:b}:b,c?"":"."+h)}let i=c&&B.g;return c&&(B.g=B[h]),f=B[h],i?b.data=b.data.replace(i,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),h})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":A(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||w,d.g,d.o,d.k)}D.bind({g:1});let E,F,G,H=D.bind({k:1});function I(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:F&&F()},h),c.o=/go\d/.test(i),h.className=D.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),G&&j[0]&&G(h),E(j,h)}return b?b(e):e}}var J=(a,b)=>"function"==typeof a?a(b):a,K=(b=0,()=>(++b).toString()),L="default",M=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return M(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},N=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},P={},Q=(a,b=L)=>{P[b]=M(P[b]||O,a),N.forEach(([a,c])=>{a===b&&c(P[b])})},R=a=>Object.keys(P).forEach(b=>Q(a,b)),S=(a=L)=>b=>{Q(b,a)},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},U=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||K()}))(b,a,c);return S(e.toasterId||(d=e.id,Object.keys(P).find(a=>P[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},V=(a,b)=>U("blank")(a,b);V.error=U("error"),V.success=U("success"),V.loading=U("loading"),V.custom=U("custom"),V.dismiss=(a,b)=>{let c={type:3,toastId:a};b?S(b)(c):R(c)},V.dismissAll=a=>V.dismiss(void 0,a),V.remove=(a,b)=>{let c={type:4,toastId:a};b?S(b)(c):R(c)},V.removeAll=a=>V.remove(void 0,a),V.promise=(a,b,c)=>{let d=V.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?J(b.success,a):void 0;return e?V.success(e,{id:d,...c,...null==c?void 0:c.success}):V.dismiss(d),a}).catch(a=>{let e=b.error?J(b.error,a):void 0;e?V.error(e,{id:d,...c,...null==c?void 0:c.error}):V.dismiss(d)}),a};var W=1e3,X=H`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Y=H`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=H`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$=I("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${X} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_=H`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,aa=I("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${_} 1s linear infinite;
`,ab=H`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ac=H`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ad=I("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ab} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ac} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ae=I("div")`
  position: absolute;
`,af=I("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ag=H`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ah=I("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ag} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ai=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?g.createElement(ah,null,b):b:"blank"===c?null:g.createElement(af,null,g.createElement(aa,{...d}),"loading"!==c&&g.createElement(ae,null,"error"===c?g.createElement($,{...d}):g.createElement(ad,{...d})))},aj=I("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ak=I("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,al=g.memo(({toast:a,position:b,style:d,children:e})=>{let f=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${H(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${H(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=g.createElement(ai,{toast:a}),i=g.createElement(ak,{...a.ariaProps},J(a.message,a));return g.createElement(aj,{className:a.className,style:{...f,...d,...a.style}},"function"==typeof e?e({icon:h,message:i}):g.createElement(g.Fragment,null,h,i))});d=g.createElement,A.p=void 0,E=d,F=void 0,G=void 0;var am=({id:a,className:b,style:c,onHeightUpdate:d,children:e})=>{let f=g.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return g.createElement("div",{ref:f,className:b,style:c},e)},an=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ao=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:e,children:f,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=L)=>{let[c,d]=(0,g.useState)(P[b]||O),e=(0,g.useRef)(P[b]);(0,g.useEffect)(()=>(e.current!==P[b]&&d(P[b]),N.push([b,d]),()=>{let a=N.findIndex(([a])=>a===b);a>-1&&N.splice(a,1)}),[b]);let f=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||T[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:f}})(a,b),e=(0,g.useRef)(new Map).current,f=(0,g.useCallback)((a,b=W)=>{if(e.has(a))return;let c=setTimeout(()=>{e.delete(a),h({type:4,toastId:a})},b);e.set(a,c)},[]);(0,g.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&V.dismiss(c.id);return}return setTimeout(()=>V.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,g.useCallback)(S(b),[b]),i=(0,g.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,g.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,g.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,g.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,g.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)f(a.id,a.removeDelay);else{let b=e.get(a.id);b&&(clearTimeout(b),e.delete(a.id))}})},[c,f]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return g.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:e,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return g.createElement(am,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?an:"",style:m},"custom"===d.type?J(d.message,d):f?f(d):g.createElement(al,{toast:d,position:j}))}))},ap=a.i(23292);let aq={stage:"intro",profile:null,noBlocked:!1};var ar=a.i(17772);let as="rd_rsvp_id_v1";var at=a.i(41065),au=a.i(68114),av=a.i(49075);let aw=(0,f.default)(async()=>{},{loadableGenerated:{modules:[6197]},ssr:!1}),ax=(0,f.default)(async()=>{},{loadableGenerated:{modules:[80281]},ssr:!1}),ay=(0,f.default)(async()=>{},{loadableGenerated:{modules:[14856]},ssr:!1}),az=(0,f.default)(async()=>{},{loadableGenerated:{modules:[31892]},ssr:!1}),aA=(0,f.default)(async()=>{},{loadableGenerated:{modules:[99560]},ssr:!1}),aB=(0,f.default)(async()=>{},{loadableGenerated:{modules:[20246]},ssr:!1}),aC=(0,f.default)(async()=>{},{loadableGenerated:{modules:[5408]},ssr:!1});a.s(["default",0,function(){let{stage:a,profile:b,noBlocked:c,setStage:d,setProfile:f,setNoBlocked:h,reset:i}=function(){let[a,b]=(0,g.useState)(aq),c=(0,g.useCallback)(a=>b(b=>({...b,stage:a})),[]),d=(0,g.useCallback)(a=>b(b=>({...b,profile:a})),[]),e=(0,g.useCallback)(a=>b(b=>({...b,noBlocked:a})),[]),f=(0,g.useCallback)(()=>b(aq),[]);return{stage:a.stage,profile:a.profile,noBlocked:a.noBlocked,setStage:c,setProfile:d,setNoBlocked:e,reset:f}}(),j=function(){let[a,b]=(0,g.useState)(null),[c,d]=(0,g.useState)("loading");return(0,g.useEffect)(()=>{try{let a=window.localStorage.getItem(as);b(a),d(a?"returning":"fresh")}catch{d("fresh")}},[]),{id:a,status:c,isReturning:"returning"===c,isLoading:"loading"===c,remember:(0,g.useCallback)(a=>{b(a),d("returning");try{window.localStorage.setItem(as,a)}catch{}},[]),forget:(0,g.useCallback)(()=>{b(null),d("fresh");try{window.localStorage.removeItem(as)}catch{}},[])}}(),k=(0,g.useRef)(!1),[l,m]=(0,g.useState)(null);return(0,g.useEffect)(()=>{let a=()=>(0,ar.unlockAudio)();return window.addEventListener("pointerdown",a,{once:!0}),window.addEventListener("keydown",a,{once:!0}),()=>{window.removeEventListener("pointerdown",a),window.removeEventListener("keydown",a)}},[]),(0,g.useEffect)(()=>{j.isReturning&&!k.current&&(k.current=!0,(0,ap.toast)((0,au.pick)(at.RETURNING_USER_TOASTS),{duration:5500,style:{background:"linear-gradient(90deg, #d90012 0%, #0033a0 100%)",color:"white",fontWeight:800,border:"1px solid rgba(255,204,0,.6)"}}))},[j.isReturning]),(0,e.jsxs)("main",{className:"relative min-h-screen w-full overflow-x-hidden",children:[(0,e.jsx)(av.default,{count:12}),(0,e.jsx)(ao,{}),(0,e.jsx)(ap.Toaster,{theme:"dark",position:"bottom-center"}),j.isReturning&&"intro"!==a&&(0,e.jsx)(v.motion.div,{initial:{y:-40,opacity:0},animate:{y:0,opacity:1},className:"sticky top-0 z-40 w-full border-b border-am-gold/40 bg-black/80 backdrop-blur",children:(0,e.jsx)("div",{className:"mx-auto max-w-3xl px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-widest text-am-gold md:text-xs",children:at.RETURNING_BANNER})}),(0,e.jsxs)(u,{mode:"wait",children:["intro"===a&&(0,e.jsx)(v.motion.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,e.jsx)(aw,{onDone:()=>d(b?"main":"setup")})},"intro"),"setup"===a&&(0,e.jsx)(v.motion.section,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},children:(0,e.jsx)(ax,{onComplete:a=>{f(a),d("quiz")}})},"setup"),"quiz"===a&&b&&(0,e.jsx)(v.motion.section,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},children:(0,e.jsx)(ay,{onComplete:(a,c)=>{f({...b,quizAnswers:a,verdict:c}),d("main")}})},"quiz"),"main"===a&&b&&(0,e.jsx)(v.motion.section,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.04},children:(0,e.jsx)(az,{profile:b,noBlocked:c,onYes:()=>d("enrich"),onNo:()=>d("no")})},"main"),"enrich"===a&&b&&(0,e.jsx)(v.motion.section,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},children:(0,e.jsx)(aA,{profile:b,onContinue:a=>{m(a),d("yes")}})},"enrich"),"yes"===a&&b&&l&&(0,e.jsx)(v.motion.section,{initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0},children:(0,e.jsx)(aB,{profile:b,entry:l,onRestart:i})},"yes"),"no"===a&&(0,e.jsx)(v.motion.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,e.jsx)(aC,{onUnlock:()=>{h(!0),d("main")}})},"no")]})]})}],40777)}];

//# sourceMappingURL=_0yngcig._.js.map