import{g as u}from"./index-0189ba24.js";function d(a,s){for(var n=0;n<s.length;n++){const t=s[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in a)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(a,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var o,c;function g(){if(c)return o;c=1;function a(s){var n={className:"params",begin:"\\(",end:"\\)"},t="attribute block constant cycle date dump include max min parent random range source template_from_string",e={beginKeywords:t,keywords:{name:t},relevance:0,contains:[n]},r={begin:/\|[A-Za-z_]+:?/,keywords:"abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",contains:[e]},i="apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";return i=i+" "+i.split(" ").map(function(m){return"end"+m}).join(" "),{name:"Twig",aliases:["craftcms"],case_insensitive:!0,subLanguage:"xml",contains:[s.COMMENT(/\{#/,/#\}/),{className:"template-tag",begin:/\{%/,end:/%\}/,contains:[{className:"name",begin:/\w+/,keywords:i,starts:{endsWithParent:!0,contains:[r,e],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:["self",r,e]}]}}return o=a,o}var l=g();const p=u(l),b=d({__proto__:null,default:p},[l]);export{b as t};