// Initialize and add the map
let map;
// var geocoder = new google.maps.Geocoder()
async function initMap() {

  //getting current location:
  getLocation();
  // showPosition()

  // The location of Uluru
  // const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: showPosition,
    mapId: "b003ec40387a4e50",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: pos,
    title: "Current Location",
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }});
    alert(pos)
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// function showPosition(position) {
//   var lat = position.coords.latitude;
//   var lng = position.coords.longitude;
//   return position = {lat, lng}
//   // map.setCenter(new google.maps.LatLng(lat, lng));
// }

initMap();