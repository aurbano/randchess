import{g}from"./index-f81e42ad.js";function f(r,t){for(var a=0;a<t.length;a++){const e=t[a];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const o=Object.getOwnPropertyDescriptor(e,n);o&&Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,s;function p(){if(s)return i;s=1;function r(t){const e={$pattern:/[a-zA-Z][a-zA-Z0-9_?]*/,keyword:"if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",literal:"true false nil",built_in:"in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons "+"ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts"},n={className:"string",begin:'"',end:'"',illegal:"\\n"},o={className:"string",begin:"'",end:"'",illegal:"\\n"},c={className:"string",begin:"<<",end:">>"},_={className:"number",begin:"[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"},d={beginKeywords:"import",end:"$",keywords:e,contains:[n]},u={className:"function",begin:/[a-z][^\n]*->/,returnBegin:!0,end:/->/,contains:[t.inherit(t.TITLE_MODE,{starts:{endsWithParent:!0,keywords:e}})]};return{name:"XL",aliases:["tao"],keywords:e,contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,n,o,c,u,d,_,t.NUMBER_MODE]}}return i=r,i}var l=p();const m=g(l),E=f({__proto__:null,default:m},[l]);export{E as x};
