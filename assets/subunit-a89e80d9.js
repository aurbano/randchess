import{g as c}from"./index-f81e42ad.js";function g(s,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in s)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(s,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var u,a;function b(){if(a)return u;a=1;function s(i){return{name:"SubUnit",case_insensitive:!0,contains:[{className:"string",begin:`\\[
(multipart)?`,end:`\\]
`},{className:"string",begin:"\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"},{className:"string",begin:"(\\+|-)\\d+"},{className:"keyword",relevance:10,variants:[{begin:"^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"},{begin:"^progress(:?)(\\s+)?(pop|push)?"},{begin:"^tags:"},{begin:"^time:"}]}]}}return u=s,u}var o=b();const f=c(o),d=g({__proto__:null,default:f},[o]);export{d as s};
