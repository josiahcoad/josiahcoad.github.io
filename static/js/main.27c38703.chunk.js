(this["webpackJsonpgoogle-map-app"]=this["webpackJsonpgoogle-map-app"]||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),s=n.n(i),c=n(12),o=n(177),l=n(90),d=n(180),u=n(179),p=n(91),j=new Date,b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][j.getDay()];var m=function(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"P":"A";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+a}(j),h={Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6,Sunday:7},f=function(e){var t=e.filter((function(e){return h[e.start_day]<=h[b]&&h[e.end_day]>=h[b]}));return t.length>0?t[0]:{}},g=function(e){return e.replace("P"," PM").replace("A"," AM")},x=function(e){return e.endsWith("s")?e.substr(0,e.length-1):e},O=["Distance","Number of Deals","Popularity","Rating","Ending Time","Cheapest Item"],y=["Now","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM"],v=["All Deals","Beer","Wine","Cocktails","Margaritas","Tacos","Meat","Seafood","Salad","Appetizers"],w={beer:["draft","lone","domestic","ale","ipa","pilsner","porter"],cocktail:["martini","sangaria","margarita","mojito","daiquiri","bloody"],spirit:["well","vodka","wiskey","shot"],wine:["bottle","sake","red","white","rose"],appetizer:["dip","queso","sliders","roll","chips","quesadilla","platter","bite","mini"],meat:["grilled","fried","chicken","beef","burger","brisket","buffalo","bacon","steak","bbq"],seafood:["salmon","maki","crab","shrimp","calamari","tuna","tempura","oyster"]},C=function(e){return function(t,n){var a=function(e,t){var n;if("Popularity"===t&&(n=0),"Number of Deals"===(t=O[t])&&(n=e.deals.length),"Popularity"===t&&(n=e.user_ratings_total),"Rating"===t&&(n=e.rating),"Distance"===t&&(n=-parseFloat(e.distance.split(" ")[0])),"Ending Time"===t&&(n=function(e){var t=e.substr(0,e.length-1),n=e[e.length-1],a=t.split(":"),r=Object(c.a)(a,2),i=r[0],s=r[1];return 3600*(parseInt(i)+("P"===n?12:0))+60*parseInt(s)}(f(e.times).end_time)),"Cheapest Item"===t){var a=e.deals.filter((function(e){return"$"===e.discount_marker}));n=-(a.length>0?Math.min.apply(Math,Object(p.a)(a.map((function(e){return e.discount_amount})))):100)}return n};return a(t,e)-a(n,e)}},k=function(e){return e.item.replace("."," ").replace(","," ").replace("/"," ").replace("&"," ").toLowerCase().split(" ").map(x)},S=function(e,t){var n=v[e].toLowerCase();if("all deals"===n)return!0;var a,r=k(t),i=(n=x(n))in w?w[n]:[];return i.push(n),a=i,r.filter((function(e){return a.includes(e)})).length>0},T=function(e,t){if(""===e)return!0;e=e.toLowerCase();var n=t.place_name.toLowerCase(),a=t.deals.map(k).join(" ");return n===e?3:n.includes(e)?2:a.includes(e)?1:0},_=n(181),F=n(39),N=n.n(F),P=n(61),B=n(62),I=n.n(B),z=n(57),D=function(e){return"now"===e.toLowerCase()?"now?day=".concat(b,"&time=").concat(m):"now?day=".concat(b,"&time=").concat(e.replace(" PM","P").replace(" AM","A"))},M=function(){var e=Object(P.a)(N.a.mark((function e(t,n,a){var r,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api",e.next=4,I.a.get("".concat("https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api","/places/").concat(D(t),"&lat=").concat(a,"&lng=").concat(a));case 4:return r=e.sent,i=r.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),z.a.exception({description:"Error fetching data",fatal:!0}),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,a){return e.apply(this,arguments)}}(),L="ETZSGjtbo4adXd6ndqDKP2NnbmmPrSnc",A="https://media4.giphy.com/media/MeIucAjPKoA120R7sN/200_d.gif?cid=a02e69abh006ugw9bfr38wkz45qsyywvglh4cczq8k1rj4ts&rid=200_d.gif&ct=g",E=function(){var e=Object(P.a)(N.a.mark((function e(){var t,n,a,r,i=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"excited",n="https://api.giphy.com/v1/gifs/random?api_key=".concat(L,"&tag=").concat(t,"&limit=1"),e.prev=2,e.next=5,I.a.get(n);case 5:return a=e.sent,r=a.data.data,e.abrupt("return",r.fixed_height_downsampled_url);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",A);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),R=n(165),W=n(166),q=n(167),H=n(26),U=n(163),V=n(11),Z=Object(U.a)((function(e){return{title:Object(H.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(H.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(V.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(V.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(H.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),$=n(2),G=function(){var e=Z();return Object($.jsx)(R.a,{position:"static",children:Object($.jsx)(W.a,{className:e.toolbar,children:Object($.jsx)(q.a,{variant:"h5",className:e.title,children:"Don't Worry, Be Happy Now!"})})})},K=n(175),X=n(170),J=n(183),Q=n(185),Y=n(176),ee=n(168),te=n(169),ne=n(173),ae=n(135),re=n(174),ie=n(186),se=n(172),ce=n(5),oe=n(171),le=n(86),de=n.n(le),ue=Object(U.a)((function(e){return{expand:{transform:"rotate(0deg)",marginRight:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},root:{display:"flex"},details:{display:"flex",flexDirection:"column",flex:"1"},content:{flex:"1 0 auto"},image:{display:"flex",flexDirection:"column",alignItems:"center",flex:"1",margin:"10px",borderRadius:"5px",maxHeight:"150px",maxWidth:"150px"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}})),pe=function(e){var t=e.photos&&e.photos[0];return t?"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(t,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=350"):"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"},je=function(e,t){return"now"===t?"Until "+g(e.end_time):g(e.start_time)+" - "+g(e.end_time)},be=function(e,t){return"$"===t?t+e:e+t},me=function(e,t){return t.length>e?t.substring(0,e)+"...":t},he=function(e){var t,n=e.place,a=e.selected,i=e.refProp,s=e.timeFilter;e.setCoords;a&&(null===i||void 0===i||null===(t=i.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}));var o=ue(),l=r.a.useState(!1),d=Object(c.a)(l,2),u=d[0],p=d[1];return Object($.jsxs)(ee.a,{elevation:6,className:o.root,children:[Object($.jsxs)("div",{className:o.details,children:[Object($.jsxs)(te.a,{className:o.content,children:[Object($.jsx)(q.a,{gutterBottom:!0,variant:"h5",children:n.place_name}),Object($.jsxs)(J.a,{display:"flex",my:0,children:[Object($.jsx)(J.a,{display:"flex",mr:1,children:Object($.jsx)(ie.a,{value:Number(n.rating),readOnly:!0})}),Object($.jsxs)(q.a,{children:["(",n.user_ratings_total,")"]})]}),Object($.jsx)(J.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object($.jsx)(q.a,{variant:"subtitle2",color:"textSecondary",children:je(f(n.times),s)})}),Object($.jsx)("hr",{}),n.deals.slice(0,5).map((function(e){return Object($.jsx)(J.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:Object($.jsxs)(q.a,{variant:"subtitle2",color:"textSecondary",children:[be(e.discount_amount,e.discount_marker),": ",me(35,e.item)]})})})),n.deals.length>5&&Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(X.a,{disableSpacing:!0,children:[Object($.jsxs)(q.a,{variant:"subtitle2",color:"textSecondary",children:["+ ",n.deals.length-5," more!"]}),Object($.jsx)(oe.a,{className:Object(ce.a)(o.expand,Object(H.a)({},o.expandOpen,u)),onClick:function(){p(!u)},"aria-expanded":u,"aria-label":"show more",children:Object($.jsx)(de.a,{})})]}),Object($.jsx)(se.a,{in:u,timeout:"auto",unmountOnExit:!0,children:n.deals.slice(5).map((function(e){return Object($.jsx)(J.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object($.jsxs)(q.a,{variant:"subtitle2",color:"textSecondary",children:[be(e.discount_amount,e.discount_marker),": ",me(35,e.item)]})})}))})]})]}),Object($.jsx)(X.a,{children:Object($.jsx)(ne.a,{variant:"outlined",children:n.formatted_address&&Object($.jsx)(ae.a,{size:"small",color:"seconday",onClick:function(){return window.open(n.gmap_url,"_blank")},children:"Google Maps"})})})]}),Object($.jsx)(re.a,{className:o.image,image:pe(n)})]})},fe=Object(U.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),ge=function(e){var t=e.places,n=e.timeFilter,r=e.setTimeFilter,i=e.childClicked,s=e.isLoading,l=e.coords,d=e.setCoords,u=Object(a.useState)([]),p=Object(c.a)(u,2),j=p[0],b=p[1],m=fe();return Object(a.useEffect)((function(){b((function(e){return Array(t.length).fill().map((function(t,n){return e[n]||Object(a.createRef)()}))}))}),[t]),Object($.jsx)("div",{className:m.container,children:s?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(q.a,{variant:"h4",children:"Loading Happiness \ud83d\ude00"}),Object($.jsx)("div",{className:m.loading,children:Object($.jsx)(K.a,{size:"5rem"})})]}):Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(q.a,{variant:"h4",children:["Found ",t.length," happening ","now"===n?"now":"today"," ",0===t.length&&":("]}),Object($.jsxs)(X.a,{style:{justifyContent:"center"},children:[Object($.jsxs)(Q.a,{value:n,exclusive:!0,onChange:function(e,t){r(t)},children:[Object($.jsx)(Y.a,{value:"now",children:"Now"}),Object($.jsx)(Y.a,{value:"today",children:"Today"})]}),Object($.jsx)(J.a,{sx:{m:.5}})]}),Object($.jsx)("br",{}),Object($.jsx)(o.a,{container:!0,spacing:2,className:m.list,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object($.jsx)(o.a,{ref:j[t],item:!0,xs:12,children:Object($.jsx)(he,{selected:Number(i)===t,refProp:j[t],place:e,coords:l,setCoords:d,timeFilter:n})},t)}))})]})})},xe=n(92),Oe=n(88),ye=n.n(Oe),ve=[{featureType:"all",elementType:"all",stylers:[{saturation:"32"},{lightness:"-3"},{visibility:"on"},{weight:"1.18"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{saturation:"-70"},{lightness:"14"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{saturation:"100"},{lightness:"-14"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"12"}]}],we=Object(U.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",zIndex:1,"&:hover":{zIndex:2},width:"150px"},pointer:{cursor:"pointer"},placeName:{transform:"translate(20%, -120%)"}}})),Ce=function(e){var t=e.coords,n=e.places,a=e.setCoords,r=e.setBounds,i=e.setChildClicked,s=(e.cardClicked,we());return Object($.jsx)("div",{className:s.mapContainer,children:Object($.jsx)(xe.a,{bootstrapURLKeys:{key:"AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s"},defaultCenter:t,center:t,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!1,zoomControl:!0,styles:ve},onChange:function(e){a({lat:e.center.lat,lng:e.center.lng}),r({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){return i(e)},children:n.map((function(e,t){return Object($.jsxs)("div",{className:s.markerContainer,lat:Number(e.lat),lng:Number(e.lng),children:[Object($.jsx)(ye.a,{color:"secondary",fontSize:"large",className:s.pointer}),Object($.jsx)(q.a,{className:s.placeName,variant:"subtitle2",gutterBottom:!0,children:e.place_name})]},t)}))})})},ke=n(63),Se=n(182),Te=n(184),_e=Object(U.a)((function(e){return{dropDown:{fontSize:12,backgroundColor:"white",borderRadius:"10px 10px 0  0",width:"90px",paddingLeft:"10px"}}})),Fe=function(e){var t=e.options,n=e.selection,a=e.setSelection,r=e.textPrompt,i=_e();return Object($.jsxs)(Se.a,{displayEmpty:!0,value:n,onChange:function(e){return a(e.target.value)},className:i.dropDown,children:[r&&Object($.jsx)(Te.a,{value:"",disabled:!0,style:{fontSize:10},children:r}),t.map((function(e,t){return Object($.jsx)(Te.a,{value:t,style:{fontSize:10},children:e},t)}))]})},Ne=function(e){return Object($.jsxs)("div",{class:"appbar",children:[Object($.jsx)("div",{class:"searchbar",children:Object($.jsx)("input",{class:"text",placeholder:"Search Place or Deal...",style:{border:"none",width:"80%",height:"90%",outline:"none"},value:e.searchText,onChange:function(t){return e.setSearchText(t.target.value)}})}),Object($.jsxs)("div",{class:"filterbar",children:[Object($.jsx)(Fe,{options:O,selection:e.sortBy,setSelection:e.setSortBy,textPrompt:"Sort By"}),Object($.jsx)(Fe,{options:y,selection:e.timeFilter,setSelection:e.setTimeFilter}),Object($.jsx)(Fe,{options:v,selection:e.dealsFilter,setSelection:e.setDealsFilter})]})]})},Pe=function(){return Object($.jsx)("div",{class:"map",children:Object($.jsx)("img",{alt:"map",src:"https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"})})},Be=n(93),Ie=n(178),ze=function(e){var t=e.length,n=e.filter((function(e){return"food"===e.type})).length,a=e.filter((function(e){return"drink"===e.type})).length,r="deal".concat(t>1?"s":"");return n>0&&a>0?"".concat(t," ").concat(r," (").concat(n," food, ").concat(a," drink)"):n>0?"".concat(n," food ").concat(r):"".concat(a," drink ").concat(r)},De=function(e){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(e,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=100")},Me=function(e,t,n,a){var r,i;if("Cheapest Item"===O[n])r=a.filter((function(e){return"$"===e.discount_marker})),i=a.filter((function(e){return"$"!==e.discount_marker})),r.sort((function(e,t){return e.discount_amount-t.discount_amount}));else{var s=function(n){return t?function(e,t){return k(t).includes(e.toLowerCase())}(t,n):S(e,n)};r=a.filter(s),i=a.filter((function(e){return!s(e)}))}return r.concat(i)},Le=function(e){var t,n=e.place,a=e.timeFilter,r=e.dealsFilter,i=e.searchText,s=e.sortBy;return Object($.jsxs)("div",{class:"place",children:[Object($.jsx)("div",{class:"image-horizontal-scroll",children:null===(t=n.photos)||void 0===t?void 0:t.map(De).map((function(e,t){return Object($.jsx)("img",{alt:"",src:e},t)}))}),Object($.jsxs)("div",{class:"place-details",style:{position:"relative"},children:[Object($.jsx)("div",{class:"place-name",children:n.place_name}),Object($.jsxs)("div",{children:["\u2b50 ",n.rating," (",n.user_ratings_total,")"]}),Object($.jsxs)("div",{children:[ze(n.deals)," \xb7 ","$".repeat(n.price_level+1)," \xb7 ",n.distance]}),Object($.jsx)("div",{children:je(f(n.times),a)}),Object($.jsx)(oe.a,{"aria-label":"upload picture",onClick:function(){return window.open(n.gmap_url,"_blank")},style:{backgroundColor:"#1A73E8",position:"absolute",right:20,top:5},size:"small",children:Object($.jsx)(Ie.a,{style:{color:"white"}})})]}),Object($.jsx)("div",{class:"deals-preview-container",children:Object($.jsx)("div",{class:"deals-preview",children:Me(r,i,s,n.deals).map((function(e){return be(e.discount_amount,e.discount_marker)+" "+me(35,e.item)})).join(" \xb7 ")})})]})},Ae=["places","isLoading"],Ee=Object(U.a)((function(e){return{loading:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"},resultsCount:{position:"absolute",right:20,top:10,color:"gray",fontSize:12}}})),Re=function(){var e=document.getElementsByClassName("appbar")[0],t=document.getElementsByClassName("place-holder-seperator")[0].getBoundingClientRect().top<200;e.style.opacity=t?0:1},We=function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(q.a,{variant:"h5",align:"center",style:{marginTop:"40px",display:"block"},children:"Nothing Found \ud83d\ude14"}),Object($.jsx)(q.a,{variant:"body1",align:"center",style:{marginTop:"20px",display:"block",color:"gray"},children:"Try searching a different time or removing a filter."})]})},qe=function(e){var t=e.className,n=e.gifUrl;return Object($.jsxs)("div",{children:[Object($.jsx)(q.a,{variant:"h5",flex:"12",align:"center",style:{marginTop:"40px"},children:"Loading Happiness \ud83d\ude00"}),Object($.jsx)("div",{className:t,children:n?Object($.jsx)("img",{src:n,alt:"happy gif",style:{marginTop:"20px"}}):Object($.jsx)(K.a,{size:"3rem"})})]})},He=function(e){var t=e.places,n=e.isLoading,r=Object(Be.a)(e,Ae),i=Ee(),s=Object(a.useState)(null),o=Object(c.a)(s,2),l=o[0],d=o[1];return Object(a.useEffect)((function(){n||E().then(d)}),[n]),Object($.jsxs)("div",{class:"places-list",onScroll:Re,children:[Object($.jsx)("div",{class:"place-holder"}),Object($.jsxs)("div",{class:"place-holder-seperator",children:[t.length>0&&!n&&Object($.jsxs)("span",{className:i.resultsCount,children:[t.length," Results"]}),Object($.jsx)("div",{class:"tiny-gray-box"})]}),Object($.jsx)("div",{class:"places-list-container",children:n?Object($.jsx)(qe,{className:i.loading,gifUrl:l}):t.length>0?t.map((function(e,t){return Object($.jsx)(Le,{place:e,timeFilter:r.timeFilter,dealsFilter:r.dealsFilter,searchText:r.searchText,sortBy:r.sortBy},t)})):Object($.jsx)(We,{})})]})},Ue=function(e){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ne,Object(ke.a)({},e)),Object($.jsx)(Pe,{}),Object($.jsx)(He,Object(ke.a)({},e))]})},Ve=n(89),Ze=n.n(Ve),$e=function(e){console.log("You swiped: "+e)};z.a.initialize("G-0JVNW6YKDD");var Ge=Object(l.a)({palette:{primary:{main:"#EFC319"},secondary:{main:"#bb94e3"}}}),Ke=function(){var e=Object(a.useState)({}),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(null),l=Object(c.a)(s,2),p=(l[0],l[1]),j=Object(a.useState)([]),b=Object(c.a)(j,2),m=b[0],h=b[1],f=Object(a.useState)([]),g=Object(c.a)(f,2),x=g[0],O=g[1],v=Object(a.useState)(null),w=Object(c.a)(v,2),k=w[0],F=w[1],N=Object(a.useState)(!1),P=Object(c.a)(N,2),B=P[0],I=P[1],z=r.a.useState(0),D=Object(c.a)(z,2),L=D[0],A=D[1],E=r.a.useState(0),R=Object(c.a)(E,2),W=R[0],q=R[1],H=r.a.useState(0),U=Object(c.a)(H,2),V=U[0],Z=U[1],K=Object(a.useState)(""),X=Object(c.a)(K,2),J=X[0],Q=X[1],Y=Object(a.useState)(!1),ee=Object(c.a)(Y,2),te=ee[0],ne=ee[1];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;i({lat:n,lng:a})}))}),[]),Object(a.useEffect)((function(){var e=function(e){return function(t){return t.deals.some((function(t){return S(e,t)}))}}(V),t=x.filter(e),n=C(L),a=t.sort(n).reverse();if(J){var r=function(e){return function(t,n){return T(e,t)-T(e,n)}}(J);a=(a=a.filter((function(e){return T(J,e)>0}))).sort(r).reverse()}h(a)}),[V,J,L,x]),Object(a.useEffect)((function(){I(!0),n&&M(y[W],n.lat,n.lng).then((function(e){e=e.filter((function(e){return e.deals.length>0})),O(e),I(!1)}))}),[W,n]);var ae=Object(u.a)("(min-width:600px)");return Object($.jsx)(d.a,{theme:Ge,children:ae?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(G,{}),Object($.jsxs)(o.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object($.jsx)(o.a,{item:!0,xs:12,md:4,children:Object($.jsx)(ge,{isLoading:B,childClicked:k,setCoords:i,places:m,timeFilter:W,setTimeFilter:q,coords:n})}),Object($.jsx)(o.a,{item:!0,xs:12,md:8,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object($.jsx)(Ce,{setChildClicked:F,setBounds:p,setCoords:i,coords:n,places:m})})]})]}):Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ze.a,{styles:{zIndex:10},onSwipe:$e,onCardLeftScreen:function(){return ne(!0)},preventSwipe:["right","left"],children:Object($.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%",backgroundImage:"linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)"},children:Object($.jsxs)("div",{children:[Object($.jsx)("h1",{styles:{width:"100%"},children:"Happy Hours .Live"}),Object($.jsx)("p",{styles:{width:"100%"},children:"For the explorers out there balling on a budget."}),Object($.jsx)(_.a,{}),Object($.jsx)(_.a,{}),Object($.jsx)(_.a,{}),Object($.jsx)("p",{children:"Swipe to get started"})]})})}),te&&Object($.jsx)(Ue,{places:m,isLoading:B,sortBy:L,setSortBy:A,timeFilter:W,setTimeFilter:q,dealsFilter:V,setDealsFilter:Z,searchText:J,setSearchText:Q})]})})};s.a.render(Object($.jsx)(Ke,{}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.27c38703.chunk.js.map