(this["webpackJsonpgoogle-map-app"]=this["webpackJsonpgoogle-map-app"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(9),r=n.n(s),c=n(12),o=n(142),l=n(139),d=n(73),p=n(141),u=n(47),j=n.n(u),b=n(61),m=n(62),h=n.n(m),y=n(44),f=new Date,g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][f.getDay()];var O=function(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"P":"A";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+a}(f),x=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api/places/now/".concat(g,"%20").concat(O));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),y.a.exception({description:"Error fetching data",fatal:!0}),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=n(129),w=n(130),_=n(131),C=n(23),S=n(128),T=n(10),k=Object(S.a)((function(e){return{title:Object(C.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),P=n(3),E=function(){var e=k();return Object(P.jsx)(v.a,{position:"static",children:Object(P.jsx)(w.a,{className:e.toolbar,children:Object(P.jsx)(_.a,{variant:"h5",className:e.title,children:"Don't Worry, Be Happy Now!"})})})},N=n(138),I=n(132),A=n(133),R=n(134),B=n(143),D=n(135),F=n(137),L=n(69),z=n.n(L),H=n(70),G=n.n(H),K=n(145),W=n(144),M=n(5),V=n(136),U=n(68),J=n.n(U),Y=Object(S.a)((function(e){return{chip:{margin:"5px 5px 5px 0"},subtitle:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px"},spacing:{display:"flex",alignItems:"center",justifyContent:"space-between"},expand:{transform:"rotate(0deg)",marginRight:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),Z=function(e){var t=e.photos&&e.photos[0];return t?"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(t,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=350"):"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"},Q=function(e){var t,n=e.place,a=e.selected,s=e.refProp;a&&(null===s||void 0===s||null===(t=s.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}));var r=Y(),o=i.a.useState(!1),l=Object(c.a)(o,2),d=l[0],p=l[1];return Object(P.jsxs)(I.a,{elevation:6,children:[Object(P.jsx)(A.a,{style:{height:350},image:Z(n),title:n.name}),Object(P.jsxs)(R.a,{children:[Object(P.jsx)(_.a,{gutterBottom:!0,variant:"h5",children:n.place_name}),Object(P.jsxs)(B.a,{display:"flex",justifyContent:"space-between",my:2,children:[Object(P.jsx)(K.a,{name:"read-only",value:Number(n.rating),readOnly:!0}),Object(P.jsxs)(_.a,{component:"legend",children:[n.user_ratings_total," review",n.user_ratings_total>1&&"s"]})]}),Object(P.jsx)(B.a,{display:"flex",justifyContent:"space-between",children:void 0!==n.price_level&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(_.a,{component:"legend",children:"Price"}),Object(P.jsx)(_.a,{gutterBottom:!0,variant:"subtitle1",children:"$".repeat(n.price_level+1)})]})}),n.times.map((function(e){return Object(P.jsx)(B.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(P.jsxs)(_.a,{variant:"subtitle2",color:"textSecondary",children:[(t=e.start_day,n=e.end_day,t===n?t:t+"-"+n),": ",e.start_time,"-",e.end_time]})});var t,n})),Object(P.jsx)("hr",{}),n.deals.slice(0,5).map((function(e){return Object(P.jsx)(B.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(P.jsxs)(_.a,{variant:"subtitle2",color:"textSecondary",children:[e.discount_amount,e.discount_marker,": ",e.item]})})})),n.deals.length>5&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(D.a,{disableSpacing:!0,children:[Object(P.jsxs)(_.a,{variant:"subtitle2",color:"textSecondary",children:["+ ",n.deals.length-5," more!"]}),Object(P.jsx)(V.a,{className:Object(M.a)(r.expand,Object(C.a)({},r.expandOpen,d)),onClick:function(){p(!d)},"aria-expanded":d,"aria-label":"show more",children:Object(P.jsx)(J.a,{})})]}),Object(P.jsx)(W.a,{in:d,timeout:"auto",unmountOnExit:!0,children:n.deals.slice(5).map((function(e){return Object(P.jsx)(B.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(P.jsxs)(_.a,{variant:"subtitle2",color:"textSecondary",children:[e.discount_amount,e.discount_marker,": ",e.item]})})}))})]}),n.formatted_address&&Object(P.jsxs)(_.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",className:r.subtitle,children:[Object(P.jsx)(z.a,{}),Object(P.jsx)(F.a,{size:"small",color:"seconday",onClick:function(){return window.open(n.gmap_url,"_blank")},children:n.formatted_address})]}),n.formatted_phone&&Object(P.jsxs)(_.a,{variant:"body2",color:"textSecondary",className:r.spacing,children:[Object(P.jsx)(G.a,{})," ",n.formatted_phone]})]}),Object(P.jsx)(D.a,{children:Object(P.jsx)(F.a,{size:"small",color:"seconday",onClick:function(){return window.open(n.website,"_blank")},children:"Website"})})]})},X=Object(S.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),$=function(e){var t=e.places,n=(e.happyNow,e.setHappyNow,e.happyToday,e.setHappyToday,e.childClicked),i=e.isLoading,s=e.coords,r=Object(a.useState)([]),o=Object(c.a)(r,2),d=o[0],p=o[1],u=X();return Object(a.useEffect)((function(){p((function(e){return Array(t.length).fill().map((function(t,n){return e[n]||Object(a.createRef)()}))}))}),[t]),Object(P.jsx)("div",{className:u.container,children:i?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(_.a,{variant:"h4",children:"Loading Happiness \ud83d\ude00"}),Object(P.jsx)("div",{className:u.loading,children:Object(P.jsx)(N.a,{size:"5rem"})})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(_.a,{variant:"h4",children:["Found ",t.length," happening now"]}),Object(P.jsx)("br",{}),Object(P.jsx)(l.a,{container:!0,spacing:3,className:u.list,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(P.jsx)(l.a,{ref:d[t],item:!0,xs:12,children:Object(P.jsx)(Q,{selected:Number(n)===t,refProp:d[t],place:e,coords:s})},t)}))})]})})},q=n(74),ee=n(140),te=n(76),ne=n(72),ae=n.n(ne),ie=[{featureType:"all",elementType:"all",stylers:[{saturation:"32"},{lightness:"-3"},{visibility:"on"},{weight:"1.18"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{saturation:"-70"},{lightness:"14"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{saturation:"100"},{lightness:"-14"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"12"}]}],se=Object(S.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",transform:"translate(-50%, -50%)",zIndex:1,"&:hover":{zIndex:2}},pointer:{cursor:"pointer"}}})),re=function(e){var t=e.coords,n=e.places,a=e.setCoords,i=e.setBounds,s=e.setChildClicked,r=Object(ee.a)("(min-width:600px)"),c=se();return Object(P.jsx)("div",{className:c.mapContainer,children:Object(P.jsx)(q.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s",REACT_APP_RAPID_API_TRAVEL_API_KEY:"i9fZeDjHQ9mshwxyGc2nw99PboG1p14gXUSjsnfrglvSGlT5Jh"}).REACT_APP_GOOGLE_MAP_API_KEY},defaultCenter:t,center:t,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!1,zoomControl:!0,styles:ie},onChange:function(e){a({lat:e.center.lat,lng:e.center.lng}),i({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){return s(e)},children:n.length&&n.map((function(e,t){return Object(P.jsx)("div",{className:c.markerContainer,lat:Number(e.lat),lng:Number(e.lng),children:r?Object(P.jsxs)(te.a,{elevation:3,className:c.paper,children:[Object(P.jsxs)(_.a,{className:c.typography,variant:"subtitle2",gutterBottom:!0,children:[" ",e.name]}),Object(P.jsx)(_.a,{variant:"subtitle3",color:"textSecondary",children:e.deals.slice(0,3).map((function(e){return e.discount_amount+e.discount_marker+": "+e.item})).join(", ")+"..."})]}):Object(P.jsx)(ae.a,{color:"primary",fontSize:"large"})},t)}))})})};y.a.initialize("G-0JVNW6YKDD");var ce=Object(d.a)({palette:{primary:{main:"#EFC319"},secondary:{main:"#bb94e3"}}}),oe=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!1),r=Object(c.a)(s,2),d=r[0],u=r[1],j=Object(a.useState)({}),b=Object(c.a)(j,2),m=b[0],h=b[1],y=Object(a.useState)(null),f=Object(c.a)(y,2),g=(f[0],f[1]),O=Object(a.useState)([]),v=Object(c.a)(O,2),w=v[0],_=v[1],C=Object(a.useState)([]),S=Object(c.a)(C,2),T=S[0],k=S[1],N=Object(a.useState)(null),I=Object(c.a)(N,2),A=I[0],R=I[1],B=Object(a.useState)(!1),D=Object(c.a)(B,2),F=D[0],L=D[1];return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;h({lat:n,lng:a})}))}),[]),Object(a.useEffect)((function(){_(T)}),[n,d,T]),Object(a.useEffect)((function(){L(!0),x().then((function(e){e=e.filter((function(e){return e.deals.length>0})),k(e),_(e),i(!1),L(!1)}))}),[]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(p.a,{theme:ce,children:[Object(P.jsx)(o.a,{}),Object(P.jsx)(E,{}),Object(P.jsxs)(l.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(P.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(P.jsx)($,{isLoading:F,childClicked:A,places:w,happyNow:n,setHappyNow:i,happyToday:d,setHappyToday:u,coords:m})}),Object(P.jsx)(l.a,{item:!0,xs:12,md:8,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(P.jsx)(re,{setChildClicked:R,setBounds:g,setCoords:h,coords:m,places:w.length?w:T})})]})]})})};r.a.render(Object(P.jsx)(oe,{}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.132a0069.chunk.js.map