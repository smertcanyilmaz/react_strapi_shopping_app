"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[5013],{71926:(p,o,t)=>{t.d(o,{q:()=>l});var e=t(67294),d=t(16896),s=t(88767);function l({enabled:E}={enabled:!0}){const{get:_}=(0,d.kY)(),{data:c,isError:a,isLoading:m}=(0,s.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:i}}=await _("/admin/license-limit-information");return i},{enabled:E}),n=c??{},g=e.useCallback(i=>(n?.features??[]).find(L=>L.name===i)?.options??{},[n?.features]);return{license:n,getFeature:g,isError:a,isLoading:m}}},65013:(p,o,t)=>{t.r(o),t.d(o,{AdminSeatInfoEE:()=>f});var e=t(67294),d=t(67819),s=t(75515),l=t(11047),E=t(84495),_=t(52624),c=t(36182),a=t(16896),m=t(51277),n=t(17772),g=t(86896),i=t(86706),M=t(36364),L=t(71926);const C="https://cloud.strapi.io/profile/billing",I="https://strapi.io/billing/request-seats",f=()=>{const{formatMessage:r}=(0,g.Z)(),A=(0,i.v9)(M._),{isLoading:O,allowedActions:{canRead:v,canCreate:R,canUpdate:U,canDelete:B}}=(0,a.ss)(A.settings.users),{license:{licenseLimitStatus:T,enforcementUserCount:D,permittedSeats:u,isHostedOnStrapiCloud:P},isError:W,isLoading:h}=(0,L.q)({enabled:!O&&v&&R&&U&&B});return W||(O||h)||!u?null:e.createElement(d.P,{col:6,s:12},e.createElement(s.Z,{variant:"sigma",textColor:"neutral600"},r({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),e.createElement(l.k,{gap:2},e.createElement(l.k,null,e.createElement(s.Z,{as:"p"},r({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:u,enforcementUserCount:D,text:K=>e.createElement(s.Z,{fontWeight:"semiBold",textColor:D>u?"danger500":null},K)}))),T==="OVER_LIMIT"&&e.createElement(E.u,{description:r({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},e.createElement(_.J,{width:`${(0,a.Q1)(14)}rem`,height:`${(0,a.Q1)(14)}rem`,color:"danger500",as:m.Z}))),e.createElement(c.r,{href:P?C:I,isExternal:!0,endIcon:e.createElement(n.Z,null)},r({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:P})))}}}]);
