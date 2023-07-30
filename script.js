// Initialize and add the map
let map;
var geocoder = new google.maps.Geocoder();
async function initMap() {

  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  
  // The map, centered at Google chicago
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "b003ec40387a4e50",
  });

  // The marker, positioned at Google Chicago
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Google Chicago",
  });
  getLocation();
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  var pos = new google.maps.LatLng(lat, lng)
  map.setCenter(pos);
  alert(pos)
  let marker = new google.maps.Marker({
    position: pos,
    map,
    title: "current position"
  })
}

// initMap();