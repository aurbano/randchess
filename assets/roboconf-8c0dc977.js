import{g as f}from"./index-f81e42ad.js";function b(t,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,c;function u(){if(c)return s;c=1;function t(n){const o="[a-zA-Z-_][^\\n{]+\\{",e={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet "+o,end:/\}/,keywords:"facet",contains:[e,n.HASH_COMMENT_MODE]},{begin:"^\\s*instance of "+o,end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",e,n.HASH_COMMENT_MODE]},{begin:"^"+o,end:/\}/,contains:[e,n.HASH_COMMENT_MODE]},n.HASH_COMMENT_MODE]}}return s=t,s}var i=u();const l=f(i),g=b({__proto__:null,default:l},[i]);export{g as r};
