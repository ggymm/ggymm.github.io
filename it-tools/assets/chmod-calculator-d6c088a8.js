import{e as u,d as C,a4 as V,a5 as S,n as B,b as f,o as p,f as _,k as m,w as I,g as t,F as b,h as x,t as h,i as a,B as G,C as P,D as R}from"./index-e90ef3de.js";import{_ as j}from"./InputCopyable.vue_vue_type_script_setup_true_lang-c8a8c3ca.js";import{_ as D}from"./Table-c1725d5b.js";import{_ as E}from"./Checkbox-e4f46686.js";import"./use-form-item-76098b35.js";function F({permissions:e}){const n={read:4,write:2,execute:1},o=r=>u.reduce(r,(s,c,l)=>s+(c?u.get(n,l,0):0),0);return[o(e.owner),o(e.group),o(e.public)].join("")}function N({permissions:e}){const n={read:"r",write:"w",execute:"x"},o=r=>u.reduce(r,(s,c,l)=>s+(c?u.get(n,l,""):"-"),"");return[o(e.owner),o(e.group),o(e.public)].join("")}const O=e=>(G("data-v-be35b141"),e=e(),P(),e),U=O(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-center",scope:"col"}),t("th",{class:"text-center",scope:"col"}," Owner (u) "),t("th",{class:"text-center",scope:"col"}," Group (g) "),t("th",{class:"text-center",scope:"col"}," Public (o) ")])],-1)),$={class:"line-header"},z={class:"octal-result"},L={class:"octal-result"},T=C({__name:"chmod-calculator",setup(e){V(g=>({"54630dbe":a(n).primaryColor}));const n=S(),o=[{scope:"read",title:"Read (4)"},{scope:"write",title:"Write (2)"},{scope:"execute",title:"Execute (1)"}],r=["owner","group","public"],s=B({owner:{read:!1,write:!1,execute:!1},group:{read:!1,write:!1,execute:!1},public:{read:!1,write:!1,execute:!1}}),c=f(()=>F({permissions:s.value})),l=f(()=>N({permissions:s.value}));return(g,W)=>{const w=E,v=D;return p(),_("div",null,[m(v,{bordered:!1,"bottom-bordered":!1,"single-column":"",class:"permission-table"},{default:I(()=>[U,t("tbody",null,[(p(),_(b,null,x(o,({scope:i,title:k})=>t("tr",{key:i},[t("td",$,h(k),1),(p(),_(b,null,x(r,d=>t("td",{key:d,class:"text-center"},[m(w,{checked:a(s)[d][i],"onUpdate:checked":y=>a(s)[d][i]=y,size:"large"},null,8,["checked","onUpdate:checked"])])),64))])),64))])]),_:1}),t("div",z,h(a(c)),1),t("div",L,h(a(l)),1),m(j,{value:`chmod ${a(c)} path`,readonly:""},null,8,["value"])])}}});const M=R(T,[["__scopeId","data-v-be35b141"]]);export{M as default};