import{S as v,u as G,Z as h,v as w,d as y,_ as N,K as S,e as m,f as E,k as I,p as V,i as t,h as C,m as i,D as $}from"./app-1b332c21.js";import{F as k}from"./Form-940b5f6c.js";import{u as K}from"./bus-84126a4e.js";/*! 2FAuth version 5.0.0 - Copyright (c) 2023 Bubka - https://github.com/Bubka/2FAuth */const M=["onSubmit"],W={__name:"CreateUpdate",props:{groupId:[Number,String]},setup(c){const s=c,p=v(),d=G(),l=h(),a=K(),r=w(()=>s.groupId!=null),o=y(new k({name:""}));N(()=>{l.name=="editGroup"&&(a.editedGroupName?(o.name=a.editedGroupName,a.editedGroupName=void 0):S.get(s.groupId).then(e=>{o.name=e.data.name}))});function f(){r.value?B():g()}async function g(){o.post("/api/v1/groups").then(e=>{p.addOrEdit(e.data),d.push({name:"groups"})})}async function B(){o.put("/api/v1/groups/"+s.groupId).then(e=>{p.addOrEdit(e.data),d.push({name:"groups"})})}return(e,n)=>{const b=m("FormField"),F=m("FormButtons"),_=m("FormWrapper");return E(),I(_,{title:t(r)?e.$t("groups.forms.rename_group"):e.$t("groups.forms.new_group")},{default:V(()=>[C("form",{onSubmit:$(f,["prevent"]),onKeydown:n[1]||(n[1]=u=>t(o).onKeydown(u))},[i(b,{modelValue:t(o).name,"onUpdate:modelValue":n[0]||(n[0]=u=>t(o).name=u),fieldName:"name",fieldError:t(o).errors.get("name"),label:"commons.name",autofocus:""},null,8,["modelValue","fieldError"]),i(F,{submitId:t(r)?"btnEditGroup":"btnCreateGroup",isBusy:t(o).isBusy,caption:t(r)?e.$t("commons.save"):e.$t("commons.create"),showCancelButton:!0,cancelLandingView:"groups"},null,8,["submitId","isBusy","caption"])],40,M)]),_:1},8,["title"])}}};export{W as default};
