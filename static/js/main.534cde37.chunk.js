(this["webpackJsonpgoogle-map-app"]=this["webpackJsonpgoogle-map-app"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(9),r=n.n(i),c=n(13),l=n(169),o=n(87),d=n(171),u=n(170),p=n(58),j=n.n(p),b=n(78),m=n(79),h=n.n(m),x=n(54),f=new Date,g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][f.getDay()];var O=function(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"P":"A";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+a}(f),y={Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6,Sunday:7},v=function(e){var t=e.filter((function(e){return y[e.start_day]<=y[g]&&y[e.end_day]>=y[g]}));return t.length>0?t[0]:{}},w=function(e){return e.replace("P"," PM").replace("A"," AM")},C=function(e){return"now"===e.toLowerCase()?"now/".concat(g,"%20").concat(O):"now/".concat(g,"%20").concat(e.replace(" PM","P").replace(" AM","A"))},S=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api/places/".concat(C(t)));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),x.a.exception({description:"Error fetching data",fatal:!0}),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),F=n(157),N=n(158),T=n(159),k=n(26),B=n(155),P=n(11),_=Object(B.a)((function(e){return{title:Object(k.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(k.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(k.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),I=n(2),M=function(){var e=_();return Object(I.jsx)(F.a,{position:"static",children:Object(I.jsx)(N.a,{className:e.toolbar,children:Object(I.jsx)(T.a,{variant:"h5",className:e.title,children:"Don't Worry, Be Happy Now!"})})})},z=n(167),D=n(162),L=n(173),A=n(175),E=n(168),R=n(160),W=n(161),H=n(165),V=n(127),Z=n(166),G=n(176),J=n(164),Q=n(5),U=n(163),X=n(84),K=n.n(X),$=Object(B.a)((function(e){return{expand:{transform:"rotate(0deg)",marginRight:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},root:{display:"flex"},details:{display:"flex",flexDirection:"column",flex:"1"},content:{flex:"1 0 auto"},image:{display:"flex",flexDirection:"column",alignItems:"center",flex:"1",margin:"10px",borderRadius:"5px",maxHeight:"150px",maxWidth:"150px"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}})),Y=function(e){var t=e.photos&&e.photos[0];return t?"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(t,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=350"):"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"},q=function(e,t){return"now"===t?"Until "+w(e.end_time):w(e.start_time)+" - "+w(e.end_time)},ee=function(e,t){return"$"===t?t+e:e+t},te=function(e,t){return t.length>e?t.substring(0,e)+"...":t},ne=function(e){var t,n=e.place,a=e.selected,i=e.refProp,r=e.timeFilter;e.setCoords;a&&(null===i||void 0===i||null===(t=i.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}));var l=$(),o=s.a.useState(!1),d=Object(c.a)(o,2),u=d[0],p=d[1];return Object(I.jsxs)(R.a,{elevation:6,className:l.root,children:[Object(I.jsxs)("div",{className:l.details,children:[Object(I.jsxs)(W.a,{className:l.content,children:[Object(I.jsx)(T.a,{gutterBottom:!0,variant:"h5",children:n.place_name}),Object(I.jsxs)(L.a,{display:"flex",my:0,children:[Object(I.jsx)(L.a,{display:"flex",mr:1,children:Object(I.jsx)(G.a,{value:Number(n.rating),readOnly:!0})}),Object(I.jsxs)(T.a,{children:["(",n.user_ratings_total,")"]})]}),Object(I.jsx)(L.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(I.jsx)(T.a,{variant:"subtitle2",color:"textSecondary",children:q(v(n.times),r)})}),Object(I.jsx)("hr",{}),n.deals.slice(0,5).map((function(e){return Object(I.jsx)(L.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:Object(I.jsxs)(T.a,{variant:"subtitle2",color:"textSecondary",children:[ee(e.discount_amount,e.discount_marker),": ",te(35,e.item)]})})})),n.deals.length>5&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(D.a,{disableSpacing:!0,children:[Object(I.jsxs)(T.a,{variant:"subtitle2",color:"textSecondary",children:["+ ",n.deals.length-5," more!"]}),Object(I.jsx)(U.a,{className:Object(Q.a)(l.expand,Object(k.a)({},l.expandOpen,u)),onClick:function(){p(!u)},"aria-expanded":u,"aria-label":"show more",children:Object(I.jsx)(K.a,{})})]}),Object(I.jsx)(J.a,{in:u,timeout:"auto",unmountOnExit:!0,children:n.deals.slice(5).map((function(e){return Object(I.jsx)(L.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(I.jsxs)(T.a,{variant:"subtitle2",color:"textSecondary",children:[ee(e.discount_amount,e.discount_marker),": ",te(35,e.item)]})})}))})]})]}),Object(I.jsx)(D.a,{children:Object(I.jsx)(H.a,{variant:"outlined",children:n.formatted_address&&Object(I.jsx)(V.a,{size:"small",color:"seconday",onClick:function(){return window.open(n.gmap_url,"_blank")},children:"Google Maps"})})})]}),Object(I.jsx)(Z.a,{className:l.image,image:Y(n)})]})},ae=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),se=function(e){var t=e.places,n=e.timeFilter,s=e.setTimeFilter,i=e.childClicked,r=e.isLoading,o=e.coords,d=e.setCoords,u=Object(a.useState)([]),p=Object(c.a)(u,2),j=p[0],b=p[1],m=ae();return Object(a.useEffect)((function(){b((function(e){return Array(t.length).fill().map((function(t,n){return e[n]||Object(a.createRef)()}))}))}),[t]),Object(I.jsx)("div",{className:m.container,children:r?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(T.a,{variant:"h4",children:"Loading Happiness \ud83d\ude00"}),Object(I.jsx)("div",{className:m.loading,children:Object(I.jsx)(z.a,{size:"5rem"})})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(T.a,{variant:"h4",children:["Found ",t.length," happening ","now"===n?"now":"today"," ",0===t.length&&":("]}),Object(I.jsxs)(D.a,{style:{justifyContent:"center"},children:[Object(I.jsxs)(A.a,{value:n,exclusive:!0,onChange:function(e,t){s(t)},children:[Object(I.jsx)(E.a,{value:"now",children:"Now"}),Object(I.jsx)(E.a,{value:"today",children:"Today"})]}),Object(I.jsx)(L.a,{sx:{m:.5}})]}),Object(I.jsx)("br",{}),Object(I.jsx)(l.a,{container:!0,spacing:2,className:m.list,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(I.jsx)(l.a,{ref:j[t],item:!0,xs:12,children:Object(I.jsx)(ne,{selected:Number(i)===t,refProp:j[t],place:e,coords:o,setCoords:d,timeFilter:n})},t)}))})]})})},ie=n(88),re=n(86),ce=n.n(re),le=[{featureType:"all",elementType:"all",stylers:[{saturation:"32"},{lightness:"-3"},{visibility:"on"},{weight:"1.18"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{saturation:"-70"},{lightness:"14"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{saturation:"100"},{lightness:"-14"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"12"}]}],oe=Object(B.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",zIndex:1,"&:hover":{zIndex:2},width:"150px"},pointer:{cursor:"pointer"},placeName:{transform:"translate(20%, -120%)"}}})),de=function(e){var t=e.coords,n=e.places,a=e.setCoords,s=e.setBounds,i=e.setChildClicked,r=(e.cardClicked,oe());return Object(I.jsx)("div",{className:r.mapContainer,children:Object(I.jsx)(ie.a,{bootstrapURLKeys:{key:"AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s"},defaultCenter:t,center:t,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!1,zoomControl:!0,styles:le},onChange:function(e){a({lat:e.center.lat,lng:e.center.lng}),s({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){return i(e)},children:n.map((function(e,t){return Object(I.jsxs)("div",{className:r.markerContainer,lat:Number(e.lat),lng:Number(e.lng),children:[Object(I.jsx)(ce.a,{color:"secondary",fontSize:"large",className:r.pointer}),Object(I.jsx)(T.a,{className:r.placeName,variant:"subtitle2",gutterBottom:!0,children:e.place_name})]},t)}))})})},ue=n(59),pe=n(172),je=n(174),be=Object(B.a)((function(e){return{dropDown:{fontSize:12,backgroundColor:"white",borderRadius:"10px 10px 0  0",width:"90px",paddingLeft:"10px"}}})),me=function(e){var t=e.options,n=e.selection,a=e.setSelection,s=e.textPrompt,i=be();return Object(I.jsxs)(pe.a,{displayEmpty:!0,value:n,onChange:function(e){return a(e.target.value)},className:i.dropDown,children:[s&&Object(I.jsx)(je.a,{value:"",disabled:!0,style:{fontSize:10},children:s}),t.map((function(e,t){return Object(I.jsx)(je.a,{value:t,style:{fontSize:10},children:e},t)}))]})},he=function(e){return Object(I.jsxs)("div",{class:"appbar",children:[Object(I.jsx)("div",{class:"searchbar",children:Object(I.jsx)("div",{class:"text",children:"Search Place or Deal..."})}),Object(I.jsxs)("div",{class:"filterbar",children:[Object(I.jsx)(me,{options:e.sortByOptions,selection:e.sortBy,setSelection:e.setSortBy,textPrompt:"Sort By"}),Object(I.jsx)(me,{options:e.timeFilterOptions,selection:e.timeFilter,setSelection:e.setTimeFilter}),Object(I.jsx)(me,{options:e.dealsFilterOptions,selection:e.dealsFilter,setSelection:e.setDealsFilter})]})]})},xe=function(){return Object(I.jsx)("div",{class:"map",children:Object(I.jsx)("img",{alt:"map",src:"https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"})})},fe=n(89),ge=function(e){var t=e.length,n=e.filter((function(e){return"food"===e.type})).length,a=e.filter((function(e){return"drink"===e.type})).length,s="deal".concat(t>1?"s":"");return n>0&&a>0?"".concat(t," ").concat(s," (").concat(n," food, ").concat(a," drink)"):n>0?"".concat(n," food ").concat(s):"".concat(a," drink ").concat(s)},Oe=function(e){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(e,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=100")},ye=function(e){var t,n=e.place,a=e.timeFilter;return Object(I.jsxs)("div",{class:"place",children:[Object(I.jsx)("div",{class:"image-horizontal-scroll",children:null===(t=n.photos)||void 0===t?void 0:t.map(Oe).map((function(e,t){return Object(I.jsx)("img",{alt:"",src:e},t)}))}),Object(I.jsxs)("div",{class:"place-details",children:[Object(I.jsx)("div",{class:"place-name",children:n.place_name}),Object(I.jsxs)("div",{children:["\u2b50 ",n.rating," (",n.user_ratings_total,")"]}),Object(I.jsxs)("div",{children:[ge(n.deals)," \xb7 ","$".repeat(n.price_level)," \xb7 4.7 mi"]}),Object(I.jsx)("div",{children:q(v(n.times),a)})]}),Object(I.jsx)("div",{class:"deals-preview-container",children:Object(I.jsx)("div",{class:"deals-preview",children:n.deals.slice(0,5).map((function(e){return ee(e.discount_amount,e.discount_marker)+" "+te(35,e.item)})).join(" \xb7 ")})})]})},ve=["places","isLoading"],we=Object(B.a)((function(e){return{loading:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"},resultsCount:{position:"absolute",right:20,top:10,color:"gray",fontSize:12}}})),Ce=function(){var e=document.getElementsByClassName("appbar")[0],t=document.getElementsByClassName("place-holder-seperator")[0].getBoundingClientRect().top<200;e.style.opacity=t?0:1},Se=function(){return Object(I.jsx)(T.a,{variant:"h5",flex:"12",align:"center",style:{marginTop:"40px"},children:"Nothing Found :/"})},Fe=function(e){var t=e.className;return Object(I.jsxs)("div",{children:[Object(I.jsx)(T.a,{variant:"h5",flex:"12",align:"center",style:{marginTop:"40px"},children:"Loading Happiness \ud83d\ude00"}),Object(I.jsx)("div",{className:t,children:Object(I.jsx)(z.a,{size:"3rem"})})]})},Ne=function(e){var t=e.places,n=e.isLoading,a=Object(fe.a)(e,ve),s=we();return Object(I.jsxs)("div",{class:"places-list",onScroll:Ce,children:[Object(I.jsx)("div",{class:"place-holder"}),Object(I.jsxs)("div",{class:"place-holder-seperator",children:[t.length>0&&!n&&Object(I.jsxs)("span",{className:s.resultsCount,children:[t.length," Results"]}),Object(I.jsx)("div",{class:"tiny-gray-box"})]}),Object(I.jsx)("div",{class:"places-list-container",children:n?Object(I.jsx)(Fe,{className:s.loading}):t.length>0?t.map((function(e,t){return Object(I.jsx)(ye,{place:e,timeFilter:a.timeFilter},t)})):Object(I.jsx)(Se,{})})]})},Te=function(e){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(he,Object(ue.a)({},e)),Object(I.jsx)(xe,{}),Object(I.jsx)(Ne,Object(ue.a)({},e))]})};x.a.initialize("G-0JVNW6YKDD");var ke=Object(o.a)({palette:{primary:{main:"#EFC319"},secondary:{main:"#bb94e3"}}}),Be=["Finish Time","Number of Deals","Distance","Popularity"],Pe=["Now","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM"],_e=["All Deals","Margaritas","Beer","Wine","Cocktails","Tacos"],Ie=function(){var e=Object(a.useState)({}),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(null),o=Object(c.a)(r,2),p=(o[0],o[1]),j=Object(a.useState)([]),b=Object(c.a)(j,2),m=b[0],h=b[1],x=Object(a.useState)([]),f=Object(c.a)(x,2),g=f[0],O=f[1],y=Object(a.useState)(null),v=Object(c.a)(y,2),w=v[0],C=v[1],F=Object(a.useState)(!1),N=Object(c.a)(F,2),T=N[0],k=N[1],B=s.a.useState(""),P=Object(c.a)(B,2),_=P[0],z=P[1],D=s.a.useState(0),L=Object(c.a)(D,2),A=L[0],E=L[1],R=s.a.useState(0),W=Object(c.a)(R,2),H=W[0],V=W[1];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;i({lat:n,lng:a})}))}),[]),Object(a.useEffect)((function(){var e=function(e){return function(t){var n=_e[e].toLowerCase();return"all deals"===n||(n.endsWith("s")&&(n=n.substr(0,n.length-1)),t.deals.map((function(e){return e.item})).join(" ").replace(",","").toLowerCase().split(" ").includes(_e[e].toLowerCase()))}}(H);h(g.filter(e))}),[H,g]),Object(a.useEffect)((function(){k(!0),S(Pe[A]).then((function(e){e=e.filter((function(e){return e.deals.length>0})),O(e),k(!1)}))}),[A]);var Z=Object(u.a)("(min-width:600px)");return Object(I.jsx)(d.a,{theme:ke,children:Z?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(M,{}),Object(I.jsxs)(l.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(I.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(I.jsx)(se,{isLoading:T,childClicked:w,setCoords:i,places:m,timeFilter:A,setTimeFilter:E,coords:n})}),Object(I.jsx)(l.a,{item:!0,xs:12,md:8,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(I.jsx)(de,{setChildClicked:C,setBounds:p,setCoords:i,coords:n,places:m})})]})]}):Object(I.jsx)(Te,{places:m,isLoading:T,sortBy:_,setSortBy:z,timeFilter:A,setTimeFilter:E,dealsFilter:H,setDealsFilter:V,sortByOptions:Be,timeFilterOptions:Pe,dealsFilterOptions:_e})})};r.a.render(Object(I.jsx)(Ie,{}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.534cde37.chunk.js.map