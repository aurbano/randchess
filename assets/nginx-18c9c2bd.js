import{g as c}from"./index-f81e42ad.js";function u(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,o;function d(){if(o)return s;o=1;function t(e){const n={className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/\}/},{begin:/[$@]/+e.UNDERSCORE_IDENT_RE}]},r={endsWithParent:!0,keywords:{$pattern:"[a-z/_]+",literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[n]},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:"\\s\\^",end:"\\s|\\{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|\\{|;",returnEnd:!0},{begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},n]};return{name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{begin:e.UNDERSCORE_IDENT_RE+"\\s+\\{",returnBegin:!0,end:/\{/,contains:[{className:"section",begin:e.UNDERSCORE_IDENT_RE}],relevance:0},{begin:e.UNDERSCORE_IDENT_RE+"\\s",end:";|\\{",returnBegin:!0,contains:[{className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:r}],relevance:0}],illegal:"[^\\s\\}]"}}return s=t,s}var g=d();const l=c(g),b=u({__proto__:null,default:l},[g]);export{b as n};
