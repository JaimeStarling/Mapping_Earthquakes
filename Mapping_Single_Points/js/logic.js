// 13.2.4 Add console.log to check to see if our code is working.
console.log("working");
// 13.2.4 Create the map object with a center and zoom level.
// 13.4.2 updating for LA
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// Create the map object with a center and zoom level.

// 13.4.1 Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// 13.4.1 Add a circle to the map
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);

 
// 13.2.4 We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {

attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   accessToken: API_KEY
});

// 13.2.4 Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



 
