
import mapbox from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here

    console.log(type, "\n\n TYPEEE")
    const element = document.createElement('div');
    element.style.width = "32px";
    element.style.height = "39px";
    if(type === 'hotels'){
    element.style.backgroundImage = `url(iconURLs['hotels'])`
  }
    else if (type === 'restaurants'){
      element.style.backgroundImage = `url(iconURLs['restaurants'])`
    }
    else{element.style.backgroundImage = `url(iconURLs['activities'])`
  }


    new mapbox.Marker(element).setLngLat(coords).addTo(map);
};

export default buildMarker;
