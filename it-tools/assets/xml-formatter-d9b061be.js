import{_ as x}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-adb7c2b5.js";import{f as w,i as b}from"./xml-formatter.service-cc27e2cf.js";import{d as g,E as i,o as h,f as X,g as m,k as t,w as s,i as p,x as u,F as L}from"./index-6fe72626.js";import{_ as M}from"./Switch-419c65ca.js";import{_ as k}from"./FormItem-67f48709.js";import{_ as C}from"./InputNumber-b5cfb497.js";import"./TextareaCopyable-af7c040b.js";import"./Copy-87ce90b2.js";import"./Scrollbar-be290c9b.js";import"./defaults-4d6daddf.js";import"./use-form-item-35a241b9.js";import"./use-locale-83e6de7f.js";import"./Input-30b77939.js";import"./Button-bdf9db1f.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-7cfbe71a.js";const V={"important:flex-full":"","important:flex-shrink-0":"","important:flex-grow-0":""},y={flex:"","justify-center":""},z="<hello><world>foo</world><world>bar</world></hello>",K=g({__name:"xml-formatter",setup(B){const e=i("xml-formatter:indent-size",2),o=i("xml-formatter:collapse-content",!0);function _(a){return w(a,{indentation:" ".repeat(e.value),collapseContent:o.value,lineSeparator:`
`})}const f=[{validator:b,message:"Provided XML is not valid."}];return(a,n)=>{const d=M,r=k,c=C,v=x;return h(),X(L,null,[m("div",V,[m("div",y,[t(r,{label:"Collapse content:","label-placement":"left"},{default:s(()=>[t(d,{value:p(o),"onUpdate:value":n[0]||(n[0]=l=>u(o)?o.value=l:null)},null,8,["value"])]),_:1}),t(r,{label:"Indent size:","label-placement":"left","label-width":"100","show-feedback":!1},{default:s(()=>[t(c,{value:p(e),"onUpdate:value":n[1]||(n[1]=l=>u(e)?e.value=l:null),min:"0",max:"10","w-100px":""},null,8,["value"])]),_:1})])]),t(v,{"input-label":"Your XML","input-placeholder":"Paste your XML here...","output-label":"Formatted XML from your XML","output-language":"xml","input-validation-rules":f,transformer:_,"input-default":z})],64)}}});export{K as default};