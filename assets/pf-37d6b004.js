import{g as p}from"./index-f81e42ad.js";function c(o,e){for(var r=0;r<e.length;r++){const t=e[r];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in o)){const n=Object.getOwnPropertyDescriptor(t,a);n&&Object.defineProperty(o,a,n.get?n:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var i,s;function f(){if(s)return i;s=1;function o(e){const r={className:"variable",begin:/\$[\w\d#@][\w\d_]*/},t={className:"variable",begin:/<(?!\/)/,end:/>/};return{name:"Packet Filter config",aliases:["pf.conf"],keywords:{$pattern:/[a-z0-9_<>-]+/,built_in:"block match pass load anchor|5 antispoof|10 set table",keyword:"in out log quick on rdomain inet inet6 proto from port os to route allow-opts divert-packet divert-reply divert-to flags group icmp-type icmp6-type label once probability recieved-on rtable prio queue tos tag tagged user keep fragment for os drop af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin source-hash static-port dup-to reply-to route-to parent bandwidth default min max qlimit block-policy debug fingerprints hostid limit loginterface optimization reassemble ruleset-optimization basic none profile skip state-defaults state-policy timeout const counters persist no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy source-track global rule max-src-nodes max-src-states max-src-conn max-src-conn-rate overload flush scrub|5 max-mss min-ttl no-df|10 random-id",literal:"all any no-route self urpf-failed egress|5 unknown"},contains:[e.HASH_COMMENT_MODE,e.NUMBER_MODE,e.QUOTE_STRING_MODE,r,t]}}return i=o,i}var l=f();const u=p(l),m=c({__proto__:null,default:u},[l]);export{m as p};
