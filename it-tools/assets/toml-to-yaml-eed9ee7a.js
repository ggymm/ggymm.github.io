import{_ as m}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-60cc3834.js";import{p as e}from"./toml-esm-9c5f6a1e.js";import{s as i}from"./public-api-1d5b2fbb.js";import{w as s}from"./defaults-4d6daddf.js";import{i as n}from"./toml.services-387bcfeb.js";import{d as p,o as l,c as u}from"./index-e90ef3de.js";import"./TextareaCopyable-6af09a23.js";import"./Copy-589a9d7a.js";import"./Scrollbar-6da86440.js";import"./boolean-c7e7c785.js";const b=p({__name:"toml-to-yaml",setup(f){const r=o=>o.trim()===""?"":s(()=>i(e(o)),""),t=[{validator:n,message:"Provided TOML is not valid."}];return(o,c)=>{const a=m;return l(),u(a,{"input-label":"Your TOML","input-placeholder":"Paste your TOML here...","output-label":"YAML from your TOML","output-language":"yaml","input-validation-rules":t,transformer:r})}}});export{b as default};