import{g as l}from"./index-f81e42ad.js";function g(i,t){for(var a=0;a<t.length;a++){const e=t[a];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in i)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(i,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var s,o;function b(){if(o)return s;o=1;function i(t){var a={className:"built_in",begin:"\\b(void|bool|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)"},e={className:"symbol",begin:"[a-zA-Z0-9_]+@"},n={className:"keyword",begin:"<",end:">",contains:[a,e]};return a.contains=[n],e.contains=[n],{name:"AngelScript",aliases:["asc"],keywords:"for in|0 break continue while do|0 return if else case switch namespace is cast or and xor not get|0 in inout|10 out override set|0 private public const default|0 final shared external mixin|10 enum typedef funcdef this super import from interface abstract|0 try catch protected explicit property",illegal:"(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunction\\s*[^\\(])",contains:[{className:"string",begin:"'",end:"'",illegal:"\\n",contains:[t.BACKSLASH_ESCAPE],relevance:0},{className:"string",begin:'"""',end:'"""'},{className:"string",begin:'"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE],relevance:0},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{className:"string",begin:"^\\s*\\[",end:"\\]"},{beginKeywords:"interface namespace",end:/\{/,illegal:"[;.\\-]",contains:[{className:"symbol",begin:"[a-zA-Z0-9_]+"}]},{beginKeywords:"class",end:/\{/,illegal:"[;.\\-]",contains:[{className:"symbol",begin:"[a-zA-Z0-9_]+",contains:[{begin:"[:,]\\s*",contains:[{className:"symbol",begin:"[a-zA-Z0-9_]+"}]}]}]},a,e,{className:"literal",begin:"\\b(null|true|false)"},{className:"number",relevance:0,begin:"(-?)(\\b0[xXbBoOdD][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)"}]}}return s=i,s}var c=b();const u=l(c),f=g({__proto__:null,default:u},[c]);export{f as a};
