import{g as u}from"./index-f81e42ad.js";function p(t,n){for(var i=0;i<n.length;i++){const r=n[i];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const o=Object.getOwnPropertyDescriptor(r,e);o&&Object.defineProperty(t,e,o.get?o:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,c;function l(){if(c)return s;c=1;function t(n){return{name:"VBScript in HTML",subLanguage:"xml",contains:[{begin:"<%",end:"%>",subLanguage:"vbscript"}]}}return s=t,s}var a=l();const b=u(a),g=p({__proto__:null,default:b},[a]);export{g as v};
