// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

const locations = [
    "Marisco's Seafood,,1504 Town Creek Dr Austin TX 78741",
    "Bar Peached,https://barpeached.com/,1315 W 6th St Austin TX 78703",
].map(row => {
    const values = row.split(',');
    return {
        name: values[0],
        url: values[1],
        address: values[2],
    }
});

const deals = [
    "Marisco's Seafood,Food,Fried Calamari,$5.00",
    "Marisco's Seafood,Food,Fried Onion Rings,$5.00",
    "Marisco's Seafood,Food,Fish Nuggets,$5.00",
    "Marisco's Seafood,Drink,Pint of Bud,$2.50",
    "Marisco's Seafood,Drink,Pint of Bud Light,$2.50",
    "Marisco's Seafood,Drink,Pint of Dos Equis,$3.00",
    "Marisco's Seafood,Drink,Pint of Negro Modelo,$3.00",
    "Marisco's Seafood,Drink,Pint of Margarita,$3.00",
    "Bar Peached,Drink,Draft Beer,$5.00",
    "Bar Peached,Drink,Wine,$6.00",
    "Bar Peached,Drink,Draft Cocktail,$7.00",
    "Bar Peached,Food,Tacos,$4.00",
    "Bar Peached,Food,Snacks,$5.00",
    "Bar Peached,Food,A Little More,$7.00",
].map(row => {
    const values = row.split(',');
    return {
        name: values[0],
        type: values[1],
        item: values[2],
        price: values[3]
    }
});

const times = [
    "Marisco's Seafood,Monday,14:00,19:00",
    "Marisco's Seafood,Tuesday,14:00,19:00",
    "Marisco's Seafood,Wednesday,14:00,19:00",
    "Marisco's Seafood,Thursday,14:00,19:00",
    "Bar Peached,Monday,17:00,18:30",
    "Bar Peached,Tuesday,17:00,18:30",
    "Bar Peached,Wednesday,17:00,18:30",
    "Bar Peached,Thursday,17:00,18:30",
    "Bar Peached,Friday,17:00,18:30",
    "Bar Peached,Saturday,17:00,18:30",
    "Bar Peached,Sunday,17:00,18:30",
].map(row => {
    const values = row.split(',');
    return {
        name: values[0],
        day: values[1],
        start: values[2],
        end: values[3]
    }
});


const getDeals = name =>
    deals
    .filter(deal => deal.name == name)
    .map(deal => `<li>${deal.price} - ${deal.item}</li>`)
    .join('\n');


const isOpen = name =>
    times
    .filter(l => l.name == name)
    .filter(l => l.start < time && l.end > time && l.day == today)
    .length > 0

function makeContentString(location) {
    return '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        `<h1 id="firstHeading" class="firstHeading">${location.name}</h1>` +
        '<div id="bodyContent">' +
        `<p>${(isOpen(location.name) ? 'Happyning Now!' : 'No happy rn :(')}</p>` +
        '<hr>' +
        `<p><a href="${location.website}">Website</a>` +
        '<hr>' +
        `Offering: <ul>${getDeals(location.name)}</ul>` +
        '<hr>' +
        "</div>" +
        "</div>";
}

const today = 'Monday';
const time = '17:00';
var geocoder;
var map;


function initMap() {
    geocoder = new google.maps.Geocoder();
    const austin = { lat: 30.267153, lng: -97.743057 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: austin,
    });
    locations.forEach(makeMarker);
}

function makeMarker(location) {
    geocoder.geocode({ 'address': location.address }, function(results, status) {
        if (status == 'OK') {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: location.name,
            });
            const infowindow = new google.maps.InfoWindow({
                content: makeContentString(location),
            });
            marker.addListener("mouseover", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });
            });
            google.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}