(this["webpackJsonpgoogle-map-app"]=this["webpackJsonpgoogle-map-app"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),s=n.n(i),c=n(12),o=n(174),l=n(89),d=n(177),u=n(176),p=n(90),j=new Date,m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][j.getDay()];var b=function(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"P":"A";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+a}(j),h={Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6,Sunday:7},f=function(e){var t=e.filter((function(e){return h[e.start_day]<=h[m]&&h[e.end_day]>=h[m]}));return t.length>0?t[0]:{}},g=function(e){return e.replace("P"," PM").replace("A"," AM")},x=function(e){return e.endsWith("s")?e.substr(0,e.length-1):e},y=["Number of Deals","Popularity","Rating","Distance","Ending Time","Cheapest Item"],O=["Now","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM"],v=["All Deals","Beer","Wine","Cocktails","Margaritas","Tacos","Meat","Seafood","Salad","Appetizers"],w={beer:["draft","lone","domestic","ale","ipa","pilsner","porter"],cocktail:["martini","sangaria","margarita","mojito","daiquiri","bloody"],spirit:["well","vodka","wiskey","shot"],wine:["bottle","sake","red","white","rose"],appetizer:["dip","queso","sliders","roll","chips","quesadilla","platter","bite","mini"],meat:["grilled","fried","chicken","beef","burger","brisket","buffalo","bacon","steak","bbq"],seafood:["salmon","maki","crab","shrimp","calamari","tuna","tempura","oyster"]},C=function(e){return function(t,n){var a=function(e,t){var n;if("Popularity"===t&&(n=0),"Number of Deals"===(t=y[t])&&(n=e.deals.length),"Popularity"===t&&(n=e.user_ratings_total),"Rating"===t&&(n=e.rating),"Distance"===t&&(n=-parseFloat(e.distance.split(" ")[0])),"Ending Time"===t&&(n=function(e){var t=e.substr(0,e.length-1),n=e[e.length-1],a=t.split(":"),r=Object(c.a)(a,2),i=r[0],s=r[1];return 3600*(parseInt(i)+("P"===n?12:0))+60*parseInt(s)}(f(e.times).end_time)),"Cheapest Item"===t){var a=e.deals.filter((function(e){return"$"===e.discount_marker}));n=-(a.length>0?Math.min.apply(Math,Object(p.a)(a.map((function(e){return e.discount_amount})))):100)}return n};return a(t,e)-a(n,e)}},k=function(e){return e.item.replace("."," ").replace(","," ").replace("/"," ").replace("&"," ").toLowerCase().split(" ").map(x)},S=function(e,t){var n=v[e].toLowerCase();if("all deals"===n)return!0;var a,r=k(t),i=(n=x(n))in w?w[n]:[];return i.push(n),a=i,r.filter((function(e){return a.includes(e)})).length>0},T=function(e,t){if(""===e)return!0;e=e.toLowerCase();var n=t.place_name.toLowerCase(),a=t.deals.map(k).join(" ");return n===e?3:n.includes(e)?2:a.includes(e)?1:0},_=n(45),N=n.n(_),F=n(61),P=n(62),B=n.n(P),I=n(57),z=function(e){return"now"===e.toLowerCase()?"now?day=".concat(m,"&time=").concat(b):"now?day=".concat(m,"&time=").concat(e.replace(" PM","P").replace(" AM","A"))},M=function(){var e=Object(F.a)(N.a.mark((function e(t,n,a){var r,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api",e.next=4,B.a.get("".concat("https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api","/places/").concat(z(t),"&lat=").concat(a,"&lng=").concat(a));case 4:return r=e.sent,i=r.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),I.a.exception({description:"Error fetching data",fatal:!0}),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,a){return e.apply(this,arguments)}}(),D="ETZSGjtbo4adXd6ndqDKP2NnbmmPrSnc",L="https://media4.giphy.com/media/MeIucAjPKoA120R7sN/200_d.gif?cid=a02e69abh006ugw9bfr38wkz45qsyywvglh4cczq8k1rj4ts&rid=200_d.gif&ct=g",A=function(){var e=Object(F.a)(N.a.mark((function e(){var t,n,a,r,i=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"excited",n="https://api.giphy.com/v1/gifs/random?api_key=".concat(D,"&tag=").concat(t,"&limit=1"),e.prev=2,e.next=5,B.a.get(n);case 5:return a=e.sent,r=a.data.data,e.abrupt("return",r.fixed_height_downsampled_url);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",L);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),E=n(162),R=n(163),W=n(164),q=n(26),H=n(160),U=n(11),V=Object(H.a)((function(e){return{title:Object(q.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(q.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(U.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(U.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(q.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),Z=n(2),$=function(){var e=V();return Object(Z.jsx)(E.a,{position:"static",children:Object(Z.jsx)(R.a,{className:e.toolbar,children:Object(Z.jsx)(W.a,{variant:"h5",className:e.title,children:"Don't Worry, Be Happy Now!"})})})},G=n(172),K=n(167),X=n(179),J=n(181),Q=n(173),Y=n(165),ee=n(166),te=n(170),ne=n(130),ae=n(171),re=n(180),ie=n(169),se=n(5),ce=n(168),oe=n(86),le=n.n(oe),de=Object(H.a)((function(e){return{expand:{transform:"rotate(0deg)",marginRight:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},root:{display:"flex"},details:{display:"flex",flexDirection:"column",flex:"1"},content:{flex:"1 0 auto"},image:{display:"flex",flexDirection:"column",alignItems:"center",flex:"1",margin:"10px",borderRadius:"5px",maxHeight:"150px",maxWidth:"150px"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}})),ue=function(e){var t=e.photos&&e.photos[0];return t?"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(t,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=350"):"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"},pe=function(e,t){return"now"===t?"Until "+g(e.end_time):g(e.start_time)+" - "+g(e.end_time)},je=function(e,t){return"$"===t?t+e:e+t},me=function(e,t){return t.length>e?t.substring(0,e)+"...":t},be=function(e){var t,n=e.place,a=e.selected,i=e.refProp,s=e.timeFilter;e.setCoords;a&&(null===i||void 0===i||null===(t=i.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}));var o=de(),l=r.a.useState(!1),d=Object(c.a)(l,2),u=d[0],p=d[1];return Object(Z.jsxs)(Y.a,{elevation:6,className:o.root,children:[Object(Z.jsxs)("div",{className:o.details,children:[Object(Z.jsxs)(ee.a,{className:o.content,children:[Object(Z.jsx)(W.a,{gutterBottom:!0,variant:"h5",children:n.place_name}),Object(Z.jsxs)(X.a,{display:"flex",my:0,children:[Object(Z.jsx)(X.a,{display:"flex",mr:1,children:Object(Z.jsx)(re.a,{value:Number(n.rating),readOnly:!0})}),Object(Z.jsxs)(W.a,{children:["(",n.user_ratings_total,")"]})]}),Object(Z.jsx)(X.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(Z.jsx)(W.a,{variant:"subtitle2",color:"textSecondary",children:pe(f(n.times),s)})}),Object(Z.jsx)("hr",{}),n.deals.slice(0,5).map((function(e){return Object(Z.jsx)(X.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:Object(Z.jsxs)(W.a,{variant:"subtitle2",color:"textSecondary",children:[je(e.discount_amount,e.discount_marker),": ",me(35,e.item)]})})})),n.deals.length>5&&Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(K.a,{disableSpacing:!0,children:[Object(Z.jsxs)(W.a,{variant:"subtitle2",color:"textSecondary",children:["+ ",n.deals.length-5," more!"]}),Object(Z.jsx)(ce.a,{className:Object(se.a)(o.expand,Object(q.a)({},o.expandOpen,u)),onClick:function(){p(!u)},"aria-expanded":u,"aria-label":"show more",children:Object(Z.jsx)(le.a,{})})]}),Object(Z.jsx)(ie.a,{in:u,timeout:"auto",unmountOnExit:!0,children:n.deals.slice(5).map((function(e){return Object(Z.jsx)(X.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:Object(Z.jsxs)(W.a,{variant:"subtitle2",color:"textSecondary",children:[je(e.discount_amount,e.discount_marker),": ",me(35,e.item)]})})}))})]})]}),Object(Z.jsx)(K.a,{children:Object(Z.jsx)(te.a,{variant:"outlined",children:n.formatted_address&&Object(Z.jsx)(ne.a,{size:"small",color:"seconday",onClick:function(){return window.open(n.gmap_url,"_blank")},children:"Google Maps"})})})]}),Object(Z.jsx)(ae.a,{className:o.image,image:ue(n)})]})},he=Object(H.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),fe=function(e){var t=e.places,n=e.timeFilter,r=e.setTimeFilter,i=e.childClicked,s=e.isLoading,l=e.coords,d=e.setCoords,u=Object(a.useState)([]),p=Object(c.a)(u,2),j=p[0],m=p[1],b=he();return Object(a.useEffect)((function(){m((function(e){return Array(t.length).fill().map((function(t,n){return e[n]||Object(a.createRef)()}))}))}),[t]),Object(Z.jsx)("div",{className:b.container,children:s?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(W.a,{variant:"h4",children:"Loading Happiness \ud83d\ude00"}),Object(Z.jsx)("div",{className:b.loading,children:Object(Z.jsx)(G.a,{size:"5rem"})})]}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(W.a,{variant:"h4",children:["Found ",t.length," happening ","now"===n?"now":"today"," ",0===t.length&&":("]}),Object(Z.jsxs)(K.a,{style:{justifyContent:"center"},children:[Object(Z.jsxs)(J.a,{value:n,exclusive:!0,onChange:function(e,t){r(t)},children:[Object(Z.jsx)(Q.a,{value:"now",children:"Now"}),Object(Z.jsx)(Q.a,{value:"today",children:"Today"})]}),Object(Z.jsx)(X.a,{sx:{m:.5}})]}),Object(Z.jsx)("br",{}),Object(Z.jsx)(o.a,{container:!0,spacing:2,className:b.list,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(Z.jsx)(o.a,{ref:j[t],item:!0,xs:12,children:Object(Z.jsx)(be,{selected:Number(i)===t,refProp:j[t],place:e,coords:l,setCoords:d,timeFilter:n})},t)}))})]})})},ge=n(91),xe=n(88),ye=n.n(xe),Oe=[{featureType:"all",elementType:"all",stylers:[{saturation:"32"},{lightness:"-3"},{visibility:"on"},{weight:"1.18"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{saturation:"-70"},{lightness:"14"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{saturation:"100"},{lightness:"-14"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"12"}]}],ve=Object(H.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",zIndex:1,"&:hover":{zIndex:2},width:"150px"},pointer:{cursor:"pointer"},placeName:{transform:"translate(20%, -120%)"}}})),we=function(e){var t=e.coords,n=e.places,a=e.setCoords,r=e.setBounds,i=e.setChildClicked,s=(e.cardClicked,ve());return Object(Z.jsx)("div",{className:s.mapContainer,children:Object(Z.jsx)(ge.a,{bootstrapURLKeys:{key:"AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s"},defaultCenter:t,center:t,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!1,zoomControl:!0,styles:Oe},onChange:function(e){a({lat:e.center.lat,lng:e.center.lng}),r({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){return i(e)},children:n.map((function(e,t){return Object(Z.jsxs)("div",{className:s.markerContainer,lat:Number(e.lat),lng:Number(e.lng),children:[Object(Z.jsx)(ye.a,{color:"secondary",fontSize:"large",className:s.pointer}),Object(Z.jsx)(W.a,{className:s.placeName,variant:"subtitle2",gutterBottom:!0,children:e.place_name})]},t)}))})})},Ce=n(63),ke=n(178),Se=n(182),Te=Object(H.a)((function(e){return{dropDown:{fontSize:12,backgroundColor:"white",borderRadius:"10px 10px 0  0",width:"90px",paddingLeft:"10px"}}})),_e=function(e){var t=e.options,n=e.selection,a=e.setSelection,r=e.textPrompt,i=Te();return Object(Z.jsxs)(ke.a,{displayEmpty:!0,value:n,onChange:function(e){return a(e.target.value)},className:i.dropDown,children:[r&&Object(Z.jsx)(Se.a,{value:"",disabled:!0,style:{fontSize:10},children:r}),t.map((function(e,t){return Object(Z.jsx)(Se.a,{value:t,style:{fontSize:10},children:e},t)}))]})},Ne=function(e){return Object(Z.jsxs)("div",{class:"appbar",children:[Object(Z.jsx)("div",{class:"searchbar",children:Object(Z.jsx)("input",{class:"text",placeholder:"Search Place or Deal...",style:{border:"none",width:"80%",height:"90%",outline:"none"},value:e.searchText,onChange:function(t){return e.setSearchText(t.target.value)}})}),Object(Z.jsxs)("div",{class:"filterbar",children:[Object(Z.jsx)(_e,{options:y,selection:e.sortBy,setSelection:e.setSortBy,textPrompt:"Sort By"}),Object(Z.jsx)(_e,{options:O,selection:e.timeFilter,setSelection:e.setTimeFilter}),Object(Z.jsx)(_e,{options:v,selection:e.dealsFilter,setSelection:e.setDealsFilter})]})]})},Fe=function(){return Object(Z.jsx)("div",{class:"map",children:Object(Z.jsx)("img",{alt:"map",src:"https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"})})},Pe=n(92),Be=n(175),Ie=function(e){var t=e.length,n=e.filter((function(e){return"food"===e.type})).length,a=e.filter((function(e){return"drink"===e.type})).length,r="deal".concat(t>1?"s":"");return n>0&&a>0?"".concat(t," ").concat(r," (").concat(n," food, ").concat(a," drink)"):n>0?"".concat(n," food ").concat(r):"".concat(a," drink ").concat(r)},ze=function(e){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(e,"&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s&maxheight=100")},Me=function(e,t,n,a){var r,i;if("Cheapest Item"===y[n])r=a.filter((function(e){return"$"===e.discount_marker})),i=a.filter((function(e){return"$"!==e.discount_marker})),r.sort((function(e,t){return e.discount_amount-t.discount_amount}));else{var s=function(n){return t?function(e,t){return k(t).includes(e.toLowerCase())}(t,n):S(e,n)};r=a.filter(s),i=a.filter((function(e){return!s(e)}))}return r.concat(i)},De=function(e){var t,n=e.place,a=e.timeFilter,r=e.dealsFilter,i=e.searchText,s=e.sortBy;return Object(Z.jsxs)("div",{class:"place",children:[Object(Z.jsx)("div",{class:"image-horizontal-scroll",children:null===(t=n.photos)||void 0===t?void 0:t.map(ze).map((function(e,t){return Object(Z.jsx)("img",{alt:"",src:e},t)}))}),Object(Z.jsxs)("div",{class:"place-details",style:{position:"relative"},children:[Object(Z.jsx)("div",{class:"place-name",children:n.place_name}),Object(Z.jsxs)("div",{children:["\u2b50 ",n.rating," (",n.user_ratings_total,")"]}),Object(Z.jsxs)("div",{children:[Ie(n.deals)," \xb7 ","$".repeat(n.price_level+1)," \xb7 ",n.distance]}),Object(Z.jsx)("div",{children:pe(f(n.times),a)}),Object(Z.jsx)(ce.a,{"aria-label":"upload picture",onClick:function(){return window.open(n.gmap_url,"_blank")},style:{backgroundColor:"#1A73E8",position:"absolute",right:20,top:5},size:"small",children:Object(Z.jsx)(Be.a,{style:{color:"white"}})})]}),Object(Z.jsx)("div",{class:"deals-preview-container",children:Object(Z.jsx)("div",{class:"deals-preview",children:Me(r,i,s,n.deals).map((function(e){return je(e.discount_amount,e.discount_marker)+" "+me(35,e.item)})).join(" \xb7 ")})})]})},Le=["places","isLoading"],Ae=Object(H.a)((function(e){return{loading:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"},resultsCount:{position:"absolute",right:20,top:10,color:"gray",fontSize:12}}})),Ee=function(){var e=document.getElementsByClassName("appbar")[0],t=document.getElementsByClassName("place-holder-seperator")[0].getBoundingClientRect().top<200;e.style.opacity=t?0:1},Re=function(){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(W.a,{variant:"h5",align:"center",style:{marginTop:"40px",display:"block"},children:"Nothing Found \ud83d\ude14"}),Object(Z.jsx)(W.a,{variant:"body1",align:"center",style:{marginTop:"20px",display:"block",color:"gray"},children:"Try searching a different time or removing a filter."})]})},We=function(e){var t=e.className,n=e.gifUrl;return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(W.a,{variant:"h5",flex:"12",align:"center",style:{marginTop:"40px"},children:"Loading Happiness \ud83d\ude00"}),Object(Z.jsx)("div",{className:t,children:n?Object(Z.jsx)("img",{src:n,alt:"happy gif",style:{marginTop:"20px"}}):Object(Z.jsx)(G.a,{size:"3rem"})})]})},qe=function(e){var t=e.places,n=e.isLoading,r=Object(Pe.a)(e,Le),i=Ae(),s=Object(a.useState)(null),o=Object(c.a)(s,2),l=o[0],d=o[1];return Object(a.useEffect)((function(){n||A().then(d)}),[n]),Object(Z.jsxs)("div",{class:"places-list",onScroll:Ee,children:[Object(Z.jsx)("div",{class:"place-holder"}),Object(Z.jsxs)("div",{class:"place-holder-seperator",children:[t.length>0&&!n&&Object(Z.jsxs)("span",{className:i.resultsCount,children:[t.length," Results"]}),Object(Z.jsx)("div",{class:"tiny-gray-box"})]}),Object(Z.jsx)("div",{class:"places-list-container",children:n?Object(Z.jsx)(We,{className:i.loading,gifUrl:l}):t.length>0?t.map((function(e,t){return Object(Z.jsx)(De,{place:e,timeFilter:r.timeFilter,dealsFilter:r.dealsFilter,searchText:r.searchText,sortBy:r.sortBy},t)})):Object(Z.jsx)(Re,{})})]})},He=function(e){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(Ne,Object(Ce.a)({},e)),Object(Z.jsx)(Fe,{}),Object(Z.jsx)(qe,Object(Ce.a)({},e))]})};I.a.initialize("G-0JVNW6YKDD");var Ue=Object(l.a)({palette:{primary:{main:"#EFC319"},secondary:{main:"#bb94e3"}}}),Ve=function(){var e=Object(a.useState)({}),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(null),l=Object(c.a)(s,2),p=(l[0],l[1]),j=Object(a.useState)([]),m=Object(c.a)(j,2),b=m[0],h=m[1],f=Object(a.useState)([]),g=Object(c.a)(f,2),x=g[0],y=g[1],v=Object(a.useState)(null),w=Object(c.a)(v,2),k=w[0],_=w[1],N=Object(a.useState)(!1),F=Object(c.a)(N,2),P=F[0],B=F[1],I=r.a.useState(0),z=Object(c.a)(I,2),D=z[0],L=z[1],A=r.a.useState(0),E=Object(c.a)(A,2),R=E[0],W=E[1],q=r.a.useState(0),H=Object(c.a)(q,2),U=H[0],V=H[1],G=Object(a.useState)(""),K=Object(c.a)(G,2),X=K[0],J=K[1];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;i({lat:n,lng:a})}))}),[]),Object(a.useEffect)((function(){var e=function(e){return function(t){return t.deals.some((function(t){return S(e,t)}))}}(U),t=x.filter(e),n=C(D),a=t.sort(n).reverse();if(X){var r=function(e){return function(t,n){return T(e,t)-T(e,n)}}(X);a=(a=a.filter((function(e){return T(X,e)>0}))).sort(r).reverse()}h(a)}),[U,X,D,x]),Object(a.useEffect)((function(){B(!0),n&&M(O[R],n.lat,n.lng).then((function(e){e=e.filter((function(e){return e.deals.length>0})),y(e),B(!1)}))}),[R,n]);var Q=Object(u.a)("(min-width:600px)");return Object(Z.jsx)(d.a,{theme:Ue,children:Q?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)($,{}),Object(Z.jsxs)(o.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(Z.jsx)(o.a,{item:!0,xs:12,md:4,children:Object(Z.jsx)(fe,{isLoading:P,childClicked:k,setCoords:i,places:b,timeFilter:R,setTimeFilter:W,coords:n})}),Object(Z.jsx)(o.a,{item:!0,xs:12,md:8,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(Z.jsx)(we,{setChildClicked:_,setBounds:p,setCoords:i,coords:n,places:b})})]})]}):Object(Z.jsx)(He,{places:b,isLoading:P,sortBy:D,setSortBy:L,timeFilter:R,setTimeFilter:W,dealsFilter:U,setDealsFilter:V,searchText:X,setSearchText:J})})};s.a.render(Object(Z.jsx)(Ve,{}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.0b1df9fe.chunk.js.map