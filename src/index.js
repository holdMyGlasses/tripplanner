//console.log("Anything");

import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";

mapboxgl.accessToken = "pk.eyJ1IjoiZHVzYW5ydWxhIiwiYSI6ImNrZHlwaG4yNzE1ODUyeG9hbDl4cWpiNmoifQ.-iCgFfxdLitIYE1errnrZQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const element = document.createElement('div');
// element.style.width = "32px";
// element.style.height = "39px";
// element.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(element).setLngLat([-74.009151, 40.705086]).addTo(map);


const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
