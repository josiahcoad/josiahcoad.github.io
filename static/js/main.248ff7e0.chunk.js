(this["webpackJsonpgoogle-map-app"]=this["webpackJsonpgoogle-map-app"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(10),c=n.n(i),r=n(12),l=n(142),o=n(74),d=n(144),u=n(143),j=n(45),p=n.n(j),b=n(64),m=n(65),h=n.n(m),x=n(41),f=new Date,g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][f.getDay()];!function(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"P":"A";t=(t%=12)||12,n=n<10?"0"+n:n}(f);var O={Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6,Sunday:7},y=function(e){var t=e.filter((function(e){return O[e.start_day]<=O[g]&&O[e.end_day]>=O[g]}));return t.length>0?t[0]:{}},v=function(e){return"now"===e?"now/".concat(g,"%202:00P"):"today/".concat(g)},w=function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api/places/".concat(v(t)));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),x.a.exception({description:"Error fetching data",fatal:!0}),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),C=n(131),k=n(132),S=n(133),T=n(25),_=n(130),N=n(8),F=Object(_.a)((function(e){return{title:Object(T.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(T.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(T.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),I=n(2),B=function(){var e=F();return Object(I.jsx)(C.a,{position:"static",children:Object(I.jsx)(k.a,{className:e.toolbar,children:Object(I.jsx)(S.a,{variant:"h5",className:e.title,children:"Don't Worry, Be Happy Now!"})})})},P=n(140),z=n(136),D=n(145),E=n(147),A=n(141),R=n(134),L=n(135),M=n(138),W=n(114),V=n(139),H=n(148),Z=n(146),G=n(5),J=n(137),Q=n(71),U=n.n(Q),X=Object(_.a)((function(e){return{expand:{transform:"rotate(0deg)",marginRight:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},root:{display:"flex"},details:{display:"flex",flexDirection:"column",flex:"1"},content:{flex:"1 0 auto"},image:{display:"flex",flexDirection:"column",alignItems:"center",flex:"1",margin:"10px",borderRadius:"5px",maxHeight:"150px",maxWidth:"150px"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}})),K=function(e){var t=e.photos&&e.photos[0];return t?"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(t,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=350"):"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"},$=function(e,t){return"now"===t?"Until "+e.end_time:e.start_time+" - "+e.end_time},Y=function(e,t){return"$"===t?t+e:e+t},q=function(e,t){return t.length>e?t.substring(0,e)+"...":t},ee=function(e){var t,n=e.place,a=e.selected,i=e.refProp,c=e.timeFilter;e.setCoords;a&&(null===i||void 0===i||null===(t=i.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}));var l=X(),o=s.a.useState(!1),d=Object(r.a)(o,2),u=d[0],j=d[1];return Object(I.jsxs)(R.a,{elevation:6,className:l.root,children:[Object(I.jsxs)("div",{className:l.details,children:[Object(I.jsxs)(L.a,{className:l.content,children:[Object(I.jsx)(S.a,{gutterBottom:!0,variant:"h5",children:n.place_name}),Object(I.jsxs)(D.a,{display:"flex",my:0,children:[Object(I.jsx)(D.a,{display:"flex",mr:1,children:Object(I.jsx)(H.a,{value:Number(n.rating),readOnly:!0})}),Object(I.jsxs)(S.a,{children:["(",n.user_ratings_total,")"]})]}),Object(I.jsx)(D.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(I.jsx)(S.a,{variant:"subtitle2",color:"textSecondary",children:$(y(n.times),c)})}),Object(I.jsx)("hr",{}),n.deals.slice(0,5).map((function(e){return Object(I.jsx)(D.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:Object(I.jsxs)(S.a,{variant:"subtitle2",color:"textSecondary",children:[Y(e.discount_amount,e.discount_marker),": ",q(35,e.item)]})})})),n.deals.length>5&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(z.a,{disableSpacing:!0,children:[Object(I.jsxs)(S.a,{variant:"subtitle2",color:"textSecondary",children:["+ ",n.deals.length-5," more!"]}),Object(I.jsx)(J.a,{className:Object(G.a)(l.expand,Object(T.a)({},l.expandOpen,u)),onClick:function(){j(!u)},"aria-expanded":u,"aria-label":"show more",children:Object(I.jsx)(U.a,{})})]}),Object(I.jsx)(Z.a,{in:u,timeout:"auto",unmountOnExit:!0,children:n.deals.slice(5).map((function(e){return Object(I.jsx)(D.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(I.jsxs)(S.a,{variant:"subtitle2",color:"textSecondary",children:[Y(e.discount_amount,e.discount_marker),": ",q(35,e.item)]})})}))})]})]}),Object(I.jsx)(z.a,{children:Object(I.jsx)(M.a,{variant:"outlined",children:n.formatted_address&&Object(I.jsx)(W.a,{size:"small",color:"seconday",onClick:function(){return window.open(n.gmap_url,"_blank")},children:"Google Maps"})})})]}),Object(I.jsx)(V.a,{className:l.image,image:K(n)})]})},te=Object(_.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),ne=function(e){var t=e.places,n=e.timeFilter,s=e.setTimeFilter,i=e.childClicked,c=e.isLoading,o=e.coords,d=e.setCoords,u=Object(a.useState)([]),j=Object(r.a)(u,2),p=j[0],b=j[1],m=te();return Object(a.useEffect)((function(){b((function(e){return Array(t.length).fill().map((function(t,n){return e[n]||Object(a.createRef)()}))}))}),[t]),Object(I.jsx)("div",{className:m.container,children:c?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(S.a,{variant:"h4",children:"Loading Happiness \ud83d\ude00"}),Object(I.jsx)("div",{className:m.loading,children:Object(I.jsx)(P.a,{size:"5rem"})})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(S.a,{variant:"h4",children:["Found ",t.length," happening ","now"===n?"now":"today"," ",0===t.length&&":("]}),Object(I.jsxs)(z.a,{style:{justifyContent:"center"},children:[Object(I.jsxs)(E.a,{value:n,exclusive:!0,onChange:function(e,t){s(t)},children:[Object(I.jsx)(A.a,{value:"now",children:"Now"}),Object(I.jsx)(A.a,{value:"today",children:"Today"})]}),Object(I.jsx)(D.a,{sx:{m:.5}})]}),Object(I.jsx)("br",{}),Object(I.jsx)(l.a,{container:!0,spacing:2,className:m.list,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(I.jsx)(l.a,{ref:p[t],item:!0,xs:12,children:Object(I.jsx)(ee,{selected:Number(i)===t,refProp:p[t],place:e,coords:o,setCoords:d,timeFilter:n})},t)}))})]})})},ae=n(75),se=n(73),ie=n.n(se),ce=[{featureType:"all",elementType:"all",stylers:[{saturation:"32"},{lightness:"-3"},{visibility:"on"},{weight:"1.18"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{saturation:"-70"},{lightness:"14"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{saturation:"100"},{lightness:"-14"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"12"}]}],re=Object(_.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",zIndex:1,"&:hover":{zIndex:2},width:"150px"},pointer:{cursor:"pointer"},placeName:{transform:"translate(20%, -120%)"}}})),le=function(e){var t=e.coords,n=e.places,a=e.setCoords,s=e.setBounds,i=e.setChildClicked,c=(e.cardClicked,re());return Object(I.jsx)("div",{className:c.mapContainer,children:Object(I.jsx)(ae.a,{bootstrapURLKeys:{key:"AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s"},defaultCenter:t,center:t,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!1,zoomControl:!0,styles:ce},onChange:function(e){a({lat:e.center.lat,lng:e.center.lng}),s({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){return i(e)},children:n.map((function(e,t){return Object(I.jsxs)("div",{className:c.markerContainer,lat:Number(e.lat),lng:Number(e.lng),children:[Object(I.jsx)(ie.a,{color:"secondary",fontSize:"large",className:c.pointer}),Object(I.jsx)(S.a,{className:c.placeName,variant:"subtitle2",gutterBottom:!0,children:e.place_name})]},t)}))})})},oe=function(e){var t=e.length,n=e.filter((function(e){return"food"===e.type})).length,a=e.filter((function(e){return"drink"===e.type})).length,s="deal".concat(t>1?"s":"");return n>0&&a>0?"".concat(t," ").concat(s," (").concat(n," food, ").concat(a," drink)"):n>0?"".concat(n," food ").concat(s):"".concat(a," drink ").concat(s)},de=function(e){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(e,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=350")},ue=function(e){var t=e.places,n=e.timeFilter;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{class:"appbar",children:[Object(I.jsx)("div",{class:"searchbar",children:Object(I.jsx)("div",{class:"text",children:"Search Place or Deal..."})}),Object(I.jsxs)("div",{class:"filterbar",children:[Object(I.jsx)("button",{class:"filter text",children:"Sort By \u25bc"}),Object(I.jsx)("button",{class:"filter text",children:"Now \u25bc"}),Object(I.jsx)("button",{class:"filter text",children:"Deals \u25bc"})]})]}),Object(I.jsx)("div",{class:"map",children:Object(I.jsx)("img",{alt:"map",src:"https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"})}),Object(I.jsxs)("div",{class:"places-list",children:[Object(I.jsx)("div",{class:"place-holder"}),Object(I.jsx)("div",{class:"place-holder-seperator",children:Object(I.jsx)("div",{class:"tiny-gray-box"})}),t.map((function(e){return Object(I.jsxs)("div",{class:"place",children:[Object(I.jsx)("div",{class:"image-horizontal-scroll",children:e.photos.map(de).map((function(e){return Object(I.jsx)("img",{alt:"",src:e})}))}),Object(I.jsxs)("div",{class:"place-details",children:[Object(I.jsx)("div",{class:"place-name",children:e.place_name}),Object(I.jsxs)("div",{children:["\u2b50 ",e.rating," (",e.user_ratings_total,")"]}),Object(I.jsxs)("div",{children:[oe(e.deals)," \xb7 ","$".repeat(e.price_level)," \xb7 4.7 mi"]}),Object(I.jsx)("div",{children:$(y(e.times),n)})]}),Object(I.jsx)("div",{class:"deals-preview-container",children:Object(I.jsx)("div",{class:"deals-preview",children:e.deals.slice(0,5).map((function(e){return Y(e.discount_amount,e.discount_marker)+" "+q(35,e.item)})).join(" \xb7 ")})})]})}))]})]})};x.a.initialize("G-0JVNW6YKDD");var je=Object(o.a)({palette:{primary:{main:"#EFC319"},secondary:{main:"#bb94e3"}}}),pe=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(null),c=Object(r.a)(i,2),o=(c[0],c[1]),j=Object(a.useState)([]),p=Object(r.a)(j,2),b=p[0],m=p[1],h=Object(a.useState)([]),x=Object(r.a)(h,2),f=x[0],g=x[1],O=Object(a.useState)(null),y=Object(r.a)(O,2),v=y[0],C=y[1],k=Object(a.useState)(!1),S=Object(r.a)(k,2),T=S[0],_=S[1],N=Object(a.useState)("now"),F=Object(r.a)(N,2),P=F[0],z=F[1];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;s({lat:n,lng:a})}))}),[]),Object(a.useEffect)((function(){m(f)}),[P,f]),Object(a.useEffect)((function(){_(!0),w(P).then((function(e){e=e.filter((function(e){return e.deals.length>0})),g(e),m(e),_(!1)}))}),[P]);var D=Object(u.a)("(min-width:600px)");return Object(I.jsx)(d.a,{theme:je,children:D?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(B,{}),Object(I.jsxs)(l.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(I.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(I.jsx)(ne,{isLoading:T,childClicked:v,setCoords:s,places:b,timeFilter:P,setTimeFilter:z,coords:n})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:8,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(I.jsx)(le,{setChildClicked:C,setBounds:o,setCoords:s,coords:n,places:b.length?b:f})})]})]}):Object(I.jsx)(ue,{places:f,timeFilter:P})})};c.a.render(Object(I.jsx)(pe,{}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.248ff7e0.chunk.js.map