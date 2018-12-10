import * as gtf from "./getTextFile.js";
import * as leaflet from "./leafletFunctions.js";
import * as nav from "./navigation.js";

window.onload = nav.loadFromLocal();
// localStorage.currentNode = 0;
// localStorage.path = JSON.stringify([]);



var currentNodesColor = "blue";
var previousNodesColor = "red";
var didNotGoNodesColor = "black";
var prospectsNodesColor = "green";



export function redrawNodes(){
    var here = nav.currentNode;
    var routes = nav.graph.getAdjacenciesByID(here);

    //get previous
    var previous = nav.path[nav.path.length -1];
    //change previous to visited
    leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(previous),previousNodesColor);
    //get adjs of previous

    //change adjs to didn't go

    //draw here

    //draw prospects
    for(var i = 0; i<routes.length; i++){
        leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(routes[i]),"blue");
    }
}

redrawNodes();
leaflet.drawNodeWithCountryCode("SY","blue");
//Place holder
// gtf.addTextToLog("the-netherlands");
// gtf.addTextToLog('belguim');
// gtf.displayLog();
