import{b as y,u as b,Z as k,r as v,v as V,x as w,o as N,I as x,e as B,f as r,g as t,m as M,p as $,i as e,E as q,h as l,t as n,l as c,j as C}from"./app-1b332c21.js";/*! 2FAuth version 5.0.0 - Copyright (c) 2023 Bubka - https://github.com/Bubka/2FAuth */const E={key:0,class:"error-message"},R=l("p",{class:"error-404"},null,-1),D={key:1,class:"error-message"},F=l("p",{class:"error-generic"},null,-1),S={key:0,class:"has-text-grey-lighter"},j={key:1,class:"has-text-grey-lighter"},z={key:2,class:"is-size-7 is-family-code"},H=l("br",null,null,-1),T={__name:"Error",props:{closable:{type:Boolean,default:!0}},setup(m){const p=m,s=y(),d=b(),a=k(),u=v(!0),_=V(()=>!1);w(u,o=>{o==!1&&g()}),N(()=>{a.query.err&&(s.message=x("errors."+a.query.err))});function g(){window.history.length>1&&a.name!=="404"&&a.name!=="notFound"&&!a.query.err?d.go(-1):d.push({name:"accounts"})}return(o,i)=>{const h=B("modal");return r(),t("div",null,[M(h,{modelValue:e(u),"onUpdate:modelValue":i[0]||(i[0]=f=>q(u)?u.value=f:null),closable:p.closable},{default:$(()=>[o.$route.name=="404"||o.$route.name=="notFound"?(r(),t("div",E,[R,l("p",null,n(o.$t("errors.resource_not_found")),1)])):(r(),t("div",D,[F,l("p",null,n(o.$t("errors.error_occured")),1),e(s).message?(r(),t("p",S,n(e(s).message),1)):c("",!0),e(s).originalMessage?(r(),t("p",j,n(e(s).originalMessage),1)):c("",!0),e(_)&&e(s).debug?(r(),t("p",z,[H,C(n(e(s).debug),1)])):c("",!0)]))]),_:1},8,["modelValue","closable"])])}}};export{T as default};
