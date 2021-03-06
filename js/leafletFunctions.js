import * as nav from "./navigation.js";
import * as main from "./main.js";
import * as gtf from "./getTextFile.js";

var mymap = L.map('mapid')
.setView([47.1625, 19.09], 4);

var _lat;
var _lng;
var circle;

export function drawNodeWithCountryCode(_countryCode,_color){
    $.ajax({ url:'http://api.geonames.org/countryInfo?country=' +_countryCode + '&type=json&username=LeoHolman',
             success: function(data){
                saveLatLng(data.geonames[0].north,data.geonames[0].east);
                circle = L.circle([data.geonames[0].north - ((data.geonames[0].north - data.geonames[0].south)/2), data.geonames[0].east - ((data.geonames[0].east - data.geonames[0].west)/2)] , {
                    color: _color,
                    fillColor: _color,
                    fillOpacity: 1,
                    radius: 50000
                }).addTo(mymap);
             }
    }) 
}

function saveLatLng(lat,lng){
    _lat = lat;
    _lng = lng;
}

function returnLatLng(){
    return [_lat,_lng];
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 4,
    minZoom: 4,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGVvaG9sbWFuIiwiYSI6ImNqcGgxOHZhMjBlNGIzd3RlYmVmdmp0ZzEifQ.BoCaFJg56cfva3CHDIOsZw'
}).addTo(mymap);

mymap.dragging.disable();

var popup = L.popup();
var country;
mymap.on('click', function(e){
    $.ajax({ url:'http://api.geonames.org/countryCode?lat='+e.latlng.lat+'&lng='+e.latlng.lng+'&type=json&username=LeoHolman',
             success: function(data){
                 country = data.countryName;
                 $('.leaflet-popup-content').text(country);
                //  console.log("Moving to :" +country);
                 nav.move(country);
                //  console.log("Current node is " +nav.currentNode);
                 main.redrawNodes(nav.currentNode,nav.path[nav.path.length-1]);
                 gtf.displayLog();
                 if(nav.adjacencies.length == 0){
                    main.addResetButton();
                }
             }         
    });
   popup.setLatLng(e.latlng).setContent('').openOn(mymap);
});

