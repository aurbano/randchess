import{g as u}from"./index-7c3b1b6c.js";function c(e,s){for(var n=0;n<s.length;n++){const r=s[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const l=Object.getOwnPropertyDescriptor(r,t);l&&Object.defineProperty(e,t,l.get?l:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,a;function f(){if(a)return o;a=1;function e(s){return{name:"Shell Session",aliases:["console"],contains:[{className:"meta",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}return o=e,o}var i=f();const g=u(i),p=c({__proto__:null,default:g},[i]);export{p as s};