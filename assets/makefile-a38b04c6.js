import{g as c}from"./index-f81e42ad.js";function u(a,e){for(var r=0;r<e.length;r++){const t=e[r];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in a)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(a,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s,o;function m(){if(o)return s;o=1;function a(e){const r={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},t={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r]},n={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[r]},i={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},l={className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{$pattern:/[\.\w]+/,"meta-keyword":".PHONY"}},d={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[r]};return{name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"},contains:[e.HASH_COMMENT_MODE,r,t,n,i,l,d]}}return s=a,s}var f=m();const p=c(f),E=u({__proto__:null,default:p},[f]);export{E as m};
