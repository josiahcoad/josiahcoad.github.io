// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

let data = `Location Name,URL,Address,Type,Deal,Price,Day Of Week,Time Begin,Time End
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Beer,$5.00,Monday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Beer,$5.00,Tuesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Beer,$5.00,Wednesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Beer,$5.00,Thursday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Beer,$5.00,Friday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Beer,$5.00,Saturday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Beer,$5.00,Sunday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Wine,$6.00,Monday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Wine,$6.00,Tuesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Wine,$6.00,Wednesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Wine,$6.00,Thursday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Wine,$6.00,Friday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Wine,$6.00,Saturday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Wine,$6.00,Sunday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Cocktail,$7.00,Monday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Cocktail,$7.00,Tuesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Cocktail,$7.00,Wednesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Cocktail,$7.00,Thursday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Cocktail,$7.00,Friday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Cocktail,$7.00,Saturday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Drink,Draft Cocktail,$7.00,Sunday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Tacos,$4.00,Monday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Tacos,$4.00,Tuesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Tacos,$4.00,Wednesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Tacos,$4.00,Thursday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Tacos,$4.00,Friday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Tacos,$4.00,Saturday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Tacos,$4.00,Sunday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Snacks,$5.00,Monday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Snacks,$5.00,Tuesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Snacks,$5.00,Wednesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Snacks,$5.00,Thursday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Snacks,$5.00,Friday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Snacks,$5.00,Saturday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,Snacks,$5.00,Sunday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,A Little More,$7.00,Monday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,A Little More,$7.00,Tuesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,A Little More,$7.00,Wednesday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,A Little More,$7.00,Thursday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,A Little More,$7.00,Friday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,A Little More,$7.00,Saturday,17:00,18:30
Bar Peached,https://barpeached.com/,"1315 W 6th St, Austin, TX 78703",Food,A Little More,$7.00,Sunday,17:00,18:30
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fried Calamari,$5.00,Monday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fried Calamari,$5.00,Tuesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fried Calamari,$5.00,Wednesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fried Calamari,$5.00,Thursday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fried Onion Rings,$5.00,Monday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fried Onion Rings,$5.00,Tuesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fried Onion Rings,$5.00,Wednesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fried Onion Rings,$5.00,Thursday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fish Nuggets,$5.00,Monday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fish Nuggets,$5.00,Tuesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fish Nuggets,$5.00,Wednesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Food,Fish Nuggets,$5.00,Thursday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Bud,$2.50,Monday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Bud,$2.50,Tuesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Bud,$2.50,Wednesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Bud,$2.50,Thursday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Bud Light,$2.50,Monday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Bud Light,$2.50,Tuesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Bud Light,$2.50,Wednesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Bud Light,$2.50,Thursday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Dos Equis,$3.00,Monday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Dos Equis,$3.00,Tuesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Dos Equis,$3.00,Wednesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Dos Equis,$3.00,Thursday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Negro Modelo,$3.00,Monday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Negro Modelo,$3.00,Tuesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Negro Modelo,$3.00,Wednesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Negro Modelo,$3.00,Thursday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Margarita,$3.00,Monday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Margarita,$3.00,Tuesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Margarita,$3.00,Wednesday,14:00,19:00
Marisco's Seafood,,"1504 Town Creek Dr, Austin, TX 78741",Drink,Pint of Margarita,$3.00,Thursday,14:00,19:00`


function makeContentString(location) {
  return '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    `<h1 id="firstHeading" class="firstHeading">${location.name}</h1>` +
    '<div id="bodyContent">' +
    `<p>Happyning ${location.day} between ${location.start}-${location.end}!</p>` +
    '</hr>'
      `<p>: Uluru, <a href="${location.website}">Website</a>` +
    '</hr>' +
    `${location.deal}` +
    '</hr>' +
    "</div>" +
    "</div>";
}


function loadLocations(data) {
  return data.split('\n').map(row => {
    values = row.split(',')
    location = {
      name: row[0],
      url: row[1],
      address: row[2],
      typ4e: row[3],
      deal: row[4],
      price: row[5],
      day: row[6],
      begin: row[7],
      end: row[8]
    }
  })
}

var geocoder;
var map;

function initMap() {
  geocoder = new google.maps.Geocoder();
  const austin = { lat: 30.267153, lng: -97.743057 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: austin,
  });
  loadLocations(data).forEach(location => {
    makeMarker(location);
  });
}

function makeMarker(location) {
  geocoder.geocode({ 'address': location.address }, function (results, status) {
    if (status == 'OK') {
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        title: location.name,
      });
      const infowindow = new google.maps.InfoWindow({
        content: makeContentString(location),
      });
      marker.addListener("hover", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
