import{aP as M,aO as R,d as k,i as V,o as c,b as S,g as f,t as Y,as as j,at as G,e as H,u as K,a3 as J,P as Q,K as U,E as C,G as X,W as Z,N as tt,m as t,w as n,c as T,au as et,f as a,aq as nt,F as b,l as at,n as st,O as ot,av as rt,Y as it,ax as ct,aw as lt,q as ut}from"./app-Dx3bcPrs.js";import{_ as mt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-BKpa27Fv.js";import{a as pt,u as _t}from"./animation-B0dIlpJi.js";import{_ as ft}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BKT-b5DK.js";import"./index-x8TNrC4q.js";function gt(u={primary:"#0078E7"}){const s=M(),o=new R("#999999"),r=new R(u.primary);return{tags:s,getTagStyle:i=>{const p=Array.from(s.value).map(([d,h])=>h.count),g=Math.max(...p),e=Math.min(...p),y=g-e,_=(i-e)/y;return{"--yun-tag-color":o.mix(r,_*100).toString(),fontSize:`${_*36+12}px`}}}}const yt={"inline-flex":""},dt={"inline-flex":"",text:"xs"},ht=k({__name:"YunLayoutPostTag",props:{i:{},title:{},count:{}},setup(u){const s=u,o=V();return pt(o,{i:s.i||0,delay:25}),(r,m)=>(c(),S("span",{ref_key:"tagRef",ref:o,"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},[f("span",yt,"#"+Y(r.title),1),f("span",dt,"["+Y(r.count)+"]",1)],512))}}),vt={class:"yun-text-light",text:"center",p:"2"},xt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},Pt=k({__name:"tags",setup(u){j([G({"@type":"CollectionPage"})]);const s=H(),o=K(),r=J(),{t:m}=Q(),i=U(),{tags:p,getTagStyle:g}=gt({primary:r.value.colors.primary}),e=C(()=>s.query.tag||""),y=X(),_=C(()=>y.postList.filter(l=>l.tags?typeof l.tags=="string"?l.tags===e.value:l.tags.includes(e.value):!1)),d=V(),{show:h}=_t(d);function q(v){o.push({query:{tag:v}}),h()}const A=Z(i),$=C(()=>Array.from(p.value).sort());return(v,l)=>{const B=rt,w=ft,E=ht,P=tt("RouterView"),F=mt,N=it,O=ct,W=lt,z=ut;return c(),S(b,null,[t(W,null,{default:n(()=>[t(B),t(P,null,{default:n(({Component:D})=>[(c(),T(et(D),null,{"main-header":n(()=>[t(w,{title:a(A)||a(m)("menu.tags"),icon:a(i).icon||"i-ri-tag-line",color:a(i).color,"page-title-class":a(i).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":n(()=>[t(nt,{"enter-active-class":"animate-fade-in animate-duration-400",appear:""},{default:n(()=>[f("div",vt,Y(a(m)("counter.tags",$.value.length)),1)]),_:1}),f("div",xt,[(c(!0),S(b,null,at($.value,([x,L],I)=>(c(),T(E,{key:x,i:I,title:x,count:L.count,style:st(a(g)(L.count)),onClick:Ct=>q(x.toString())},null,8,["i","title","count","style","onClick"]))),128))]),t(P)]),"main-nav-before":n(()=>[e.value?(c(),T(N,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:n(()=>[t(w,{title:e.value,icon:"i-ri-hashtag"},null,8,["title"]),t(F,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:_.value},null,8,["posts"])]),_:1},512)):ot("v-if",!0)]),_:2},1024))]),_:1}),t(O)]),_:1}),t(z)],64)}}});export{Pt as default};