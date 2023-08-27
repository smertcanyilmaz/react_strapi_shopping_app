"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[4121],{38542:(O,m,t)=>{t.r(m),t.d(m,{default:()=>le});var e=t(67294),n=t(16896),i=t(86706),c=t(36364),h=t(14087),u=t(17034),b=t(185),M=t(53979),o=t(36989),l=t(75515),g=t(29728),E=t(49066),x=t(41580),T=t(38939),S=t(49386),j=t(8060),U=t(79031),d=t(37909),K=t(92155),q=t(63237),_=t(15234),F=t(11047),ee=t(3566),V=t(12028),te=t(89722),B=t(96315),z=t(20022),ae=t(4585),ne=t(86031),se=t(86896),k=t(88767),H=t(16550);const oe=()=>{const[A,C]=(0,e.useState)(!1),[W,f]=(0,e.useState)([]),re=(0,i.v9)(c._),{formatMessage:s}=(0,se.Z)(),{formatAPIError:y}=(0,n.So)(),p=(0,n.lm)();(0,n.go)();const{push:ie}=(0,H.k6)(),{pathname:N}=(0,H.TH)(),{isLoading:de,allowedActions:{canCreate:$,canUpdate:Q,canDelete:Y}}=(0,n.ss)(re.settings.webhooks),{get:ce,post:me,put:he}=(0,n.kY)(),{notifyStatus:G}=(0,h.G)(),ue="webhooks",{isLoading:ge,data:v,error:w,refetch:X}=(0,k.useQuery)(ue,async()=>{const{data:{data:a}}=await ce("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(w){p({type:"warning",message:y(w)});return}v&&G(s({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[v,w,p,s,G,y]);const J=(0,k.useMutation)(async()=>{await me("/admin/webhooks/batch-delete",{ids:W})},{onError(a){p({type:"warning",message:y(a)}),C(!1)},onSuccess(){f([]),C(!1),X()}}),Ee=(0,k.useMutation)(async({isEnabled:a,id:r})=>{const{id:P,...I}=v.find(xe=>xe.id===r)??{},Me={...I,isEnabled:a};await he(`/admin/webhooks/${r}`,Me)},{onError(a){p({type:"warning",message:y(a)})},onSuccess(){X()}}),fe=()=>J.mutate(),ve=a=>f(a?v.map(r=>r.id):[]),be=(a,r)=>f(a?P=>[...P,r]:P=>P.filter(I=>I!==r)),R=a=>ie(`${N}/${a}`),Z=de||ge,D=v?.length??0,L=W.length;return e.createElement(u.A,null,e.createElement(n.SL,{name:"Webhooks"}),e.createElement(b.o,{"aria-busy":Z},e.createElement(M.T,{title:s({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:s({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:$&&!Z&&e.createElement(n.Qj,{startIcon:e.createElement(B.Z,null),variant:"default",to:`${N}/create`,size:"S"},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),L>0&&Y&&e.createElement(o.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},s({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:L})),e.createElement(g.z,{onClick:()=>C(!0),startIcon:e.createElement(z.Z,null),size:"L",variant:"danger-light"},s({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(E.D,null,Z?e.createElement(x.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(n.dO,null)):D>0?e.createElement(T.i,{colCount:5,rowCount:D+1,footer:e.createElement(S.c,{onClick:()=>$?R("create"):{},icon:e.createElement(B.Z,null)},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(j.h,null,e.createElement(U.Tr,null,e.createElement(d.Th,null,e.createElement(K.C,{"aria-label":s({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:L>0&&L<D,value:L===D,onValueChange:ve})),e.createElement(d.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(d.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(d.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(d.Th,null,e.createElement(q.T,null,s({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(_.p,null,v.map(a=>e.createElement(U.Tr,{key:a.id,...(0,n.X7)({fn:()=>R(a.id),condition:Q})},e.createElement(d.Td,{...n.UW},e.createElement(K.C,{"aria-label":`${s({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:W?.includes(a.id),onValueChange:r=>be(r,a.id),name:"select"})),e.createElement(d.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(d.Td,null,e.createElement(l.Z,{textColor:"neutral800"},a.url)),e.createElement(d.Td,null,e.createElement(F.k,null,e.createElement(ee.r,{onLabel:s({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:s({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${s({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:r=>{r.stopPropagation(),Ee.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(d.Td,null,e.createElement(F.k,{gap:1},Q&&e.createElement(V.h,{label:s({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(ae.Z,null),noBorder:!0}),Y&&e.createElement(V.h,{onClick:r=>{r.stopPropagation(),f([a.id]),C(!0)},label:s({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(z.Z,null),noBorder:!0}))))))):e.createElement(te.x,{icon:e.createElement(ne.Z,{width:"160px"}),content:s({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(g.z,{variant:"secondary",startIcon:e.createElement(B.Z,null),onClick:()=>$?R("create"):{}},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(n.QH,{isOpen:A,onToggleDialog:()=>C(a=>!a),onConfirm:fe,isConfirmButtonLoading:J.isLoading}))},le=()=>{const A=(0,i.v9)(c._);return e.createElement(n.O4,{permissions:A.settings.webhooks.main},e.createElement(oe,null))}},36989:(O,m,t)=>{t.d(m,{Z:()=>i});var e=t(85893),n=t(11047);const i=({startActions:c,endActions:h})=>!c&&!h?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:c}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:h})]})},3566:(O,m,t)=>{t.d(m,{r:()=>M});var e=t(85893),n=t(67294),i=t(88972),c=t(11047),h=t(41580);const u=i.ZP.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,b=i.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${u} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${u}:before {
    transform: translateX(1rem);
  }
`,M=n.forwardRef(({label:o,onChange:l,onLabel:g="On",offLabel:E="Off",selected:x,visibleLabels:T=!1,...S},j)=>(0,e.jsx)(b,{ref:j,role:"switch","aria-checked":x,"aria-label":o,onClick:l,visibleLabels:T,type:"button",...S,children:(0,e.jsxs)(c.k,{children:[(0,e.jsxs)(u,{children:[(0,e.jsx)("span",{children:g}),(0,e.jsx)("span",{children:E})]}),T&&(0,e.jsx)(h.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:x?"success600":"danger600",children:x?g:E})]})}))},49386:(O,m,t)=>{t.d(m,{c:()=>o});var e=t(85893),n=t(88972),i=t(41580),c=t(70004),h=t(11047),u=t(75515);const b=(0,n.ZP)(i.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,M=(0,n.ZP)(i.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,o=({children:l,icon:g,...E})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(c.i,{}),(0,e.jsx)(M,{as:"button",background:"primary100",padding:5,...E,children:(0,e.jsxs)(h.k,{children:[(0,e.jsx)(b,{"aria-hidden":!0,background:"primary200",children:g}),(0,e.jsx)(i.x,{paddingLeft:3,children:(0,e.jsx)(u.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
