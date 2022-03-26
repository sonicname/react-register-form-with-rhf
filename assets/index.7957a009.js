var D=Object.defineProperty,E=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var N=(a,e,s)=>e in a?D(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,m=(a,e)=>{for(var s in e||(e={}))y.call(e,s)&&N(a,s,e[s]);if(g)for(var s of g(e))j.call(e,s)&&N(a,s,e[s]);return a},k=(a,e)=>E(a,O(e));var u=(a,e)=>{var s={};for(var l in a)y.call(a,l)&&e.indexOf(l)<0&&(s[l]=a[l]);if(a!=null&&g)for(var l of g(a))e.indexOf(l)<0&&j.call(a,l)&&(s[l]=a[l]);return s};import{j as L,u as w,R as f,a as R,c as F,b as h,d as $,e as V,o as A,f as H}from"./vendor.fb8ed9ff.js";const I=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};I();const r=L.exports.jsx,n=L.exports.jsxs,v=s=>{var l=s,{control:a}=l,e=u(l,["control"]);const{field:t}=w({control:a,name:e.name,defaultValue:""});return r("input",m(m({type:"text",className:"p-4 border border-gray-100 rounded-lg bg-white outline-none focus:border-blue-500 transition-all"},t),e))},S=s=>{var l=s,{control:a}=l,e=u(l,["control"]);const{field:t}=w({control:a,name:e.name});return n("label",{className:"cursor-pointer custom-radio",children:[r("input",k(m({className:"hidden",type:"radio"},t),{value:e.value})),r("div",{className:"bg-white w-full h-full rounded-full"})]})},M=l=>{var t=l,{control:a,text:e}=t,s=u(t,["control","text"]);const{field:o}=w({control:a,name:s.name,defaultValue:!1});return n("label",{className:"cursor-pointer custom-checkbox",children:[r("input",m({type:"checkbox",value:s.value,className:"hidden",id:s.name,checked:o.value},o)),n("div",{className:"flex items-center gap-x-3",children:[r("div",{className:"flex items-center justify-center w-full h-full transition-all bg-white rounded-md custom-checkbox-square",children:r("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z",fill:"white"})})}),r("label",{htmlFor:s.name,className:"text-sm cursor-pointer select-none",children:e})]})]})};function Y(a="button"){const[e,s]=f.useState(!1),l=f.useRef(null);return f.useEffect(()=>{const t=o=>{l.current&&!l.current.contains(o.target)&&!o.target.matches(a)&&s(!1)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]),{show:e,setShow:s,nodeRef:l}}const Z=c=>{var p=c,{control:a,setValue:e,name:s,data:l,dropdownLabel:t="Select your job"}=p,o=u(p,["control","setValue","name","data","dropdownLabel"]);const{show:b,setShow:i,nodeRef:x}=Y(),[P,C]=f.useState(t);R({control:a,name:"job",defaultValue:""});const q=d=>{e(s,d.target.dataset.value),C(d.target.textContent),i(!1)};return n("div",{className:"relative",ref:x,children:[r("div",{className:"p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer",onClick:()=>i(!b),children:r("span",{children:P||"Select your job"})}),r("div",{className:`absolute top-full left-0 w-full rounded-lg bg-white ${b?"":"opacity-0 invisible"}`,children:l.map(d=>r("div",{className:"p-5 cursor-pointer hover:bg-gray-100",onClick:q,"data-value":d.value,children:d.text},d.id))})]})},z=[{id:1,value:"teacher",text:"Teacher"},{id:2,value:"dev",text:"Dev"},{id:3,value:"doctor",text:"Doctor"}],B=F({username:h().required("Please enter your username"),email:h().email("Please enter valid email address").required("Please enter your email address"),password:h().min(8,"Your password must be at least 8 characters or greater").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{message:"Your password must have at least 1 uppercase, 1 lowercase, 1 special character"}).required("Please enter your password"),gender:h().required("Please select your gender").oneOf(["male","female"],"You can only select male or female"),job:h().required("Please select your job").oneOf(["teacher","developer","doctor","constructor"]),term:$().required("Please accept the terms and conditions")}).required(),G=()=>{const{handleSubmit:a,formState:{errors:e,isValid:s,isSubmitting:l},control:t,setValue:o,reset:c,watch:p}=V({resolver:A(B),mode:"onChange",defaultValues:{gender:"male"}}),b=()=>{if(!!s)return new Promise(x=>{setTimeout(()=>{x(),c({username:"",email:"",password:"",gender:"male",job:"",term:!1})},5e3)})},i=p("gender");return n("form",{onSubmit:a(b),className:"max-w-[300px] mx-auto my-10",autoComplete:"off",children:[n("div",{className:"flex flex-col gap-3 mb-5",children:[r("label",{htmlFor:"username",className:"cursor-pointer",children:"Username"}),r(v,{name:"username",placeholder:"Enter your username",id:"username",control:t,type:"text"}),e.username&&r("p",{className:"text-sm text-red-500",children:e.username.message})]}),n("div",{className:"flex flex-col gap-3 mb-5",children:[r("label",{htmlFor:"email",className:"cursor-pointer",children:"Email address"}),r(v,{name:"email",placeholder:"Enter your email",id:"email",control:t,type:"email"}),e.email&&r("p",{className:"text-sm text-red-500",children:e.email.message})]}),n("div",{className:"flex flex-col gap-3 mb-5",children:[r("label",{htmlFor:"password",className:"cursor-pointer",children:"Password"}),r(v,{name:"password",placeholder:"Enter your password",id:"password",control:t,type:"password"}),e.password&&r("p",{className:"text-sm text-red-500",children:e.password.message})]}),n("div",{className:"flex flex-col gap-3 mb-5",children:[r("label",{className:"cursor-pointer",children:"Gender"}),n("div",{className:"flex items-center gap-5",children:[n("div",{className:"flex items-center gap-x-3",children:[r(S,{control:t,name:"gender",value:"male",checked:i==="male"}),r("span",{children:"Male"})]}),n("div",{className:"flex items-center gap-x-3",children:[r(S,{control:t,name:"gender",value:"female",checked:i==="female"}),r("span",{children:"Female"})]})]}),e.gender&&r("p",{className:"text-sm text-red-500",children:e.gender.message})]}),n("div",{className:"flex flex-col gap-3 mb-5",children:[r("label",{className:"cursor-pointer",children:"Are you"}),r(Z,{control:t,setValue:o,name:"job",data:z,dropdownLabel:"Select your job"}),e.job&&r("p",{className:"text-sm text-red-500",children:e.job.message})]}),n("div",{className:"flex flex-col gap-3",children:[r(M,{control:t,text:"I accept the terms and conditions",name:"term"}),e.term&&r("p",{className:"text-sm text-red-500",children:e.term.message})]}),r("button",{className:`w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg ${l?"opacity-50":""}`,disabled:l,children:l?r("div",{className:"w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"}):"Submit"})]})},T=()=>r("div",{className:"",children:r(G,{})});H.render(r(f.StrictMode,{children:r(T,{})}),document.getElementById("root"));