import{c as d,u as s,d as u,h as n}from"./use-dark.010eb87b.js";import{c,h as l,g as q}from"./index.f380d04d.js";var i=d({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const e=q(),t=u(a,e.proxy.$q),o=c(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>l(a.tag,{class:o.value},n(r.default))}});export{i as Q};