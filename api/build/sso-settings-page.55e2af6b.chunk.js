"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[302],{51754:(U,m,e)=>{e.d(m,{F:()=>L});var t=e(16896),S=e(86896),E=e(88767);const L=(p={},M={})=>{const{id:r="",...f}=p,{get:y}=(0,t.kY)(),{locale:d}=(0,S.Z)(),O=(0,t.Xe)(d,{sensitivity:"base"}),{data:n,error:C,isError:h,isLoading:o,refetch:I}=(0,E.useQuery)(["roles",r,f],async()=>{const{data:c}=await y(`/admin/roles/${r??""}`,{params:f});return c},M);let g=[];return r&&n?g=[n.data]:Array.isArray(n?.data)&&(g=n.data),{roles:g.sort((c,A)=>O.compare(c.name,A.name)),error:C,isError:h,isLoading:o,refetch:I}}},29388:(U,m,e)=>{e.r(m),e.d(m,{SingleSignOn:()=>B,default:()=>Z});var t=e(67294),S=e(17034),E=e(185),L=e(53979),p=e(29728),M=e(49066),r=e(11047),f=e(75515),y=e(11276),d=e(67819),O=e(93127),n=e(40619),C=e(82562),h=e(67730),o=e(16896),I=e(85018),g=e(18446),c=e.n(g),A=e(86896),T=e(86706),x=e(92807),F=e(51754),b=e(36364),u=e(87561);const W=u.Ry().shape({autoRegister:u.Xg().required(o.I0.required),defaultRole:u.nK().when("autoRegister",(a,l)=>a?l.required(o.I0.required):l.nullable()),ssoLockedRoles:u.IX().nullable().of(u.nK().when("ssoLockedRoles",(a,l)=>a?l.required(o.I0.required):l.nullable()))}),B=()=>{(0,o.go)();const{formatMessage:a}=(0,A.Z)(),l=(0,T.v9)(b._),{isLoading:G,allowedActions:{canUpdate:P,canReadRoles:X}}=(0,o.ss)({...l.settings.sso,readRoles:l.settings.roles.read}),[{formErrors:i,initialData:z,isLoading:H,modifiedData:v,showHeaderButtonLoader:k},,{handleChange:R,handleSubmit:N}]=(0,x.G4)("/admin/providers/options",W,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:K,isLoading:Q}=(0,F.F)(void 0,{enabled:X}),Y=G||Q||H;return t.createElement(S.A,null,t.createElement(o.SL,{name:"SSO"}),t.createElement(E.o,{tabIndex:-1},t.createElement("form",{onSubmit:N},t.createElement(L.T,{primaryAction:t.createElement(p.z,{"data-testid":"save-button",disabled:c()(z,v),loading:k,startIcon:t.createElement(I.Z,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(M.D,null,Y?t.createElement(o.dO,null):t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(f.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(y.r,{gap:4},t.createElement(d.P,{col:6,m:6,s:12},t.createElement(O.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!P,checked:v.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{R({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(d.P,{col:6,m:6,s:12},t.createElement(n.P,{disabled:!P,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole.id,defaultMessage:i.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{R({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:v.defaultRole},K.map(({id:s,name:D})=>t.createElement(C.W,{key:s,value:s.toString()},D)))),t.createElement(d.P,{col:6,m:6,s:12},t.createElement(h.NU,{disabled:!P,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles.id,defaultMessage:i.ssoLockedRoles.id}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:s=>{R({target:{name:"ssoLockedRoles",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{R({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:v.ssoLockedRoles||[],withTags:!0},K.map(({id:s,name:D})=>t.createElement(h.ML,{key:s,value:s.toString()},D))))))))))},Z=()=>{const a=(0,T.v9)(b._);return t.createElement(o.O4,{permissions:a.settings.sso.main},t.createElement(B,null))}}}]);
