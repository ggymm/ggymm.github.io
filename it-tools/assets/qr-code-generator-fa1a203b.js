import{d as q,n as p,o as B,c as U,w as t,k as o,i as l,x as u,g as F,l as N,y as V,X as $,m as y,z}from"./index-6fe72626.js";import{u as D,_ as L}from"./useQRCode-54416a0e.js";import{a as R}from"./downloadBase64-85ebceb2.js";import{_ as T}from"./ColorPicker-f9b055ef.js";import{_ as E}from"./FormItem-67f48709.js";import{_ as Q}from"./Form-1e50c57a.js";import{_ as X,a as Y}from"./Grid-8b348faf.js";import"./is-browser-fc34c9a6.js";import"./use-locale-83e6de7f.js";import"./browser-e933942f.js";import"./index-de9df275.js";import"./___vite-browser-external_commonjs-proxy-e0255119.js";import"./Input-30b77939.js";import"./Button-bdf9db1f.js";import"./use-form-item-35a241b9.js";import"./color-to-class-b0332f36.js";import"./InputGroup-7651c9ff.js";import"./get-slot-1efb97e5.js";const j={flex:"","flex-col":"","items-center":"","gap-3":""},so=q({__name:"qr-code-generator",setup(A){const a=p("#000000ff"),_=p("#ffffffff"),r=p("medium"),f=["low","medium","quartile","high"],s=p("https://it-tools.tech"),{qrcode:i}=D({text:s,color:{background:_,foreground:a},errorCorrectionLevel:r,options:{width:1024}}),{download:g}=R({source:i,filename:"qr-code.png"});return(G,e)=>{const v=V,m=T,c=E,b=$,x=Q,d=X,w=L,h=y,k=Y,C=z;return B(),U(C,null,{default:t(()=>[o(k,{"x-gap":"12","y-gap":"12",cols:"1 600:3"},{default:t(()=>[o(d,{span:"2"},{default:t(()=>[o(v,{value:l(s),"onUpdate:value":e[0]||(e[0]=n=>u(s)?s.value=n:null),"label-position":"left","label-width":"130px","label-align":"right",label:"Text:",multiline:"",rows:"1",autosize:"",placeholder:"Your link or text...","mb-6":""},null,8,["value"]),o(x,{"label-width":"130","label-placement":"left"},{default:t(()=>[o(c,{label:"Foreground color:"},{default:t(()=>[o(m,{value:l(a),"onUpdate:value":e[1]||(e[1]=n=>u(a)?a.value=n:null),modes:["hex"]},null,8,["value"])]),_:1}),o(c,{label:"Background color:"},{default:t(()=>[o(m,{value:l(_),"onUpdate:value":e[2]||(e[2]=n=>u(_)?_.value=n:null),modes:["hex"]},null,8,["value"])]),_:1}),o(b,{value:l(r),"onUpdate:value":e[3]||(e[3]=n=>u(r)?r.value=n:null),label:"Error resistance:","label-position":"left","label-width":"130px","label-align":"right",options:f.map(n=>({label:n,value:n}))},null,8,["value","options"])]),_:1})]),_:1}),o(d,null,{default:t(()=>[F("div",j,[o(w,{src:l(i),width:"200"},null,8,["src"]),o(h,{onClick:l(g)},{default:t(()=>[N(" Download qr-code ")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),_:1})}}});export{so as default};