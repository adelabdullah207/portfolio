import{a as L,r as p,g as Y,j as c}from"./index-b3oSKnIK.js";import{r as F,m as Z}from"./Hero-D7adsJ-Z.js";import{G as $}from"./iconBase-DhvkGvuZ.js";var b={},E={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var q;function W(){return q||(q=1,function(t){(function(){var e={}.hasOwnProperty;function i(){for(var n="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(n=r(n,a(l)))}return n}function a(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return i.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var o="";for(var l in n)e.call(n,l)&&n[l]&&(o=r(o,l));return o}function r(n,o){return o?n?n+" "+o:n+o:n}t.exports?(i.default=i,t.exports=i):window.classNames=i})()}(E)),E.exports}var D;function ee(){if(D)return b;D=1,b.__esModule=!0,b.default=void 0;var t=a(L()),e=a(F()),i=a(W());function a(o){return o&&o.__esModule?o:{default:o}}const r=({animate:o=!0,className:l="",layout:s="2-columns",lineColor:u="#FFF",children:d})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",u),t.default.createElement("div",{className:(0,i.default)(l,"vertical-timeline",{"vertical-timeline--animate":o,"vertical-timeline--two-columns":s==="2-columns","vertical-timeline--one-column-left":s==="1-column"||s==="1-column-left","vertical-timeline--one-column-right":s==="1-column-right"})},d));r.propTypes={children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]).isRequired,className:e.default.string,animate:e.default.bool,layout:e.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:e.default.string};var n=r;return b.default=n,b}var y={};function S(){return S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},S.apply(this,arguments)}function te(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,C(t,e)}function C(t,e){return C=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},C(t,e)}function re(t,e){if(t==null)return{};var i={},a=Object.keys(t),r,n;for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}var R=new Map,O=new WeakMap,H=0,U=void 0;function ne(t){U=t}function ie(t){return t?(O.has(t)||(H+=1,O.set(t,H.toString())),O.get(t)):"0"}function ae(t){return Object.keys(t).sort().filter(function(e){return t[e]!==void 0}).map(function(e){return e+"_"+(e==="root"?ie(t.root):t[e])}).toString()}function le(t){var e=ae(t),i=R.get(e);if(!i){var a=new Map,r,n=new IntersectionObserver(function(o){o.forEach(function(l){var s,u=l.isIntersecting&&r.some(function(d){return l.intersectionRatio>=d});t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(s=a.get(l.target))==null||s.forEach(function(d){d(u,l)})})},t);r=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:n,elements:a},R.set(e,i)}return i}function z(t,e,i,a){if(i===void 0&&(i={}),a===void 0&&(a=U),typeof window.IntersectionObserver>"u"&&a!==void 0){var r=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var n=le(i),o=n.id,l=n.observer,s=n.elements,u=s.get(t)||[];return s.has(t)||s.set(t,u),u.push(e),l.observe(t),function(){u.splice(u.indexOf(e),1),u.length===0&&(s.delete(t),l.unobserve(t)),s.size===0&&(l.disconnect(),R.delete(o))}}var oe=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function P(t){return typeof t.children!="function"}var N=function(t){te(e,t);function e(a){var r;return r=t.call(this,a)||this,r.node=null,r._unobserveCb=null,r.handleNode=function(n){r.node&&(r.unobserve(),!n&&!r.props.triggerOnce&&!r.props.skip&&r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=n||null,r.observeNode()},r.handleChange=function(n,o){n&&r.props.triggerOnce&&r.unobserve(),P(r.props)||r.setState({inView:n,entry:o}),r.props.onChange&&r.props.onChange(n,o)},r.state={inView:!!a.initialInView,entry:void 0},r}var i=e.prototype;return i.componentDidUpdate=function(r){(r.rootMargin!==this.props.rootMargin||r.root!==this.props.root||r.threshold!==this.props.threshold||r.skip!==this.props.skip||r.trackVisibility!==this.props.trackVisibility||r.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(!(!this.node||this.props.skip)){var r=this.props,n=r.threshold,o=r.root,l=r.rootMargin,s=r.trackVisibility,u=r.delay,d=r.fallbackInView;this._unobserveCb=z(this.node,this.handleChange,{threshold:n,root:o,rootMargin:l,trackVisibility:s,delay:u},d)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!P(this.props)){var r=this.state,n=r.inView,o=r.entry;return this.props.children({inView:n,entry:o,ref:this.handleNode})}var l=this.props,s=l.children,u=l.as,d=re(l,oe);return p.createElement(u||"div",S({ref:this.handleNode},d),s)},e}(p.Component);N.displayName="InView";N.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function se(t){var e=t===void 0?{}:t,i=e.threshold,a=e.delay,r=e.trackVisibility,n=e.rootMargin,o=e.root,l=e.triggerOnce,s=e.skip,u=e.initialInView,d=e.fallbackInView,h=p.useRef(),x=p.useState({inView:!!u}),v=x[0],V=x[1],k=p.useCallback(function(w){h.current!==void 0&&(h.current(),h.current=void 0),!s&&w&&(h.current=z(w,function(I,g){V({inView:I,entry:g}),g.isIntersecting&&l&&h.current&&(h.current(),h.current=void 0)},{root:o,rootMargin:n,threshold:i,trackVisibility:r,delay:a},d))},[Array.isArray(i)?i.toString():i,o,n,l,s,r,d,a]);p.useEffect(function(){!h.current&&v.entry&&!l&&!s&&V({inView:!!u})});var m=[k,v.inView,v.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const ce=Object.freeze(Object.defineProperty({__proto__:null,InView:N,default:N,defaultFallbackInView:ne,observe:z,useInView:se},Symbol.toStringTag,{value:"Module"})),ue=Y(ce);var A;function de(){if(A)return y;A=1,y.__esModule=!0,y.default=void 0;var t=r(L()),e=r(F()),i=r(W()),a=ue;function r(l){return l&&l.__esModule?l:{default:l}}const n=({children:l="",className:s="",contentArrowStyle:u=null,contentStyle:d=null,date:h="",dateClassName:x="",icon:v=null,iconClassName:V="",iconOnClick:k=null,onTimelineElementClick:m=null,iconStyle:w=null,id:I="",position:g="",style:G=null,textClassName:K="",intersectionObserverProps:J={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:_=!1,shadowSize:Q="small"})=>t.default.createElement(a.InView,J,({inView:j,ref:X})=>t.default.createElement("div",{ref:X,id:I,className:(0,i.default)(s,"vertical-timeline-element",{"vertical-timeline-element--left":g==="left","vertical-timeline-element--right":g==="right","vertical-timeline-element--no-children":l===""}),style:G},t.default.createElement(t.default.Fragment,null,t.default.createElement("span",{style:w,onClick:k,className:(0,i.default)(V,"vertical-timeline-element-icon",`shadow-size-${Q}`,{"bounce-in":j||_,"is-hidden":!(j||_)})},v),t.default.createElement("div",{style:d,onClick:m,className:(0,i.default)(K,"vertical-timeline-element-content",{"bounce-in":j||_,"is-hidden":!(j||_)})},t.default.createElement("div",{style:u,className:"vertical-timeline-element-content-arrow"}),l,t.default.createElement("span",{className:(0,i.default)(x,"vertical-timeline-element-date")},h)))));n.propTypes={children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]),className:e.default.string,contentArrowStyle:e.default.shape({}),contentStyle:e.default.shape({}),date:e.default.node,dateClassName:e.default.string,icon:e.default.element,iconClassName:e.default.string,iconStyle:e.default.shape({}),iconOnClick:e.default.func,onTimelineElementClick:e.default.func,id:e.default.string,position:e.default.string,style:e.default.shape({}),textClassName:e.default.string,visible:e.default.bool,shadowSize:e.default.string,intersectionObserverProps:e.default.shape({root:e.default.object,rootMargin:e.default.string,threshold:e.default.number,triggerOnce:e.default.bool})};var o=n;return y.default=o,y}var M,B;function fe(){return B||(B=1,M={VerticalTimeline:ee().default,VerticalTimelineElement:de().default}),M}var T=fe();function he(t){return $({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"},child:[]}]})(t)}function me(t){return $({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"path",attr:{d:"M16 10a4 4 0 0 1-8 0"},child:[]}]})(t)}function be(){return c.jsxs("div",{className:"w-full  min-h-[100vh] text-white bg-[#040428] ",children:[c.jsx(Z.h1,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},className:"lg:text-5xl md:text-4xl text-3xl lg:text-center md:pl-0 pl-5 py-10 ",children:"Projects"}),c.jsxs(T.VerticalTimeline,{lineColor:"white",className:"w-full h-full",children:[c.jsx(T.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"First project",iconStyle:{background:"#eb944c"},icon:c.jsx(he,{}),children:c.jsxs("div",{className:f.customOuterDiv,children:[c.jsxs("div",{children:[c.jsx("h3",{className:f.customHead3,children:"Travel & Tour"}),c.jsx("hr",{className:f.customLine}),c.jsx("img",{loading:"lazy",src:"/projects/pro_one.png",alt:"travel",className:f.customImage})]}),c.jsx("div",{className:f.customInnerDiv,children:c.jsx("a",{href:"https://adelabdullah207.github.io/travel-app/",target:"_blank",children:c.jsx("button",{className:f.customButton,children:"live preview"})})})]})}),c.jsx(T.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"Second project",iconStyle:{background:"#eb944c"},icon:c.jsx(me,{}),children:c.jsxs("div",{className:f.customOuterDiv,children:[c.jsxs("div",{children:[c.jsx("h3",{className:f.customHead3,children:"E-commerce"}),c.jsx("hr",{className:f.customLine}),c.jsx("img",{loading:"lazy",src:"/projects/e-commerce.png",alt:"E-commerce",className:f.customImage})]}),c.jsx("div",{className:f.customInnerDiv,children:c.jsx("a",{href:"https://adelabdullah207.github.io/ecommerce-app",target:"_blank",children:c.jsx("button",{className:f.customButton,children:"live preview"})})})]})})]})]})}const f={customHead3:"text-2xl font-bold text-gray-950 group-hover:scale-95 duration-200 transition-all",customImage:"w-full h-full rounded-lg group-hover:scale-95 duration-200 transition-all",customLine:"text-black opacity-10",customOuterDiv:"group w-full h-full relative overflow-hidden rounded-md",customInnerDiv:"flex justify-center items-center -z-30 group-hover:z-50 cursor-pointer absolute -bottom-10 left-0 w-full h-full bg-black/25 group-hover:bottom-0 opacity-25 group-hover:opacity-100 transition-all duration-200",customButton:" capitalize cursor-pointer bg-[#eb944c] p-2 rounded-md hover:scale-125 transition-all duration-200"};export{be as default};
