import * as gtf from "./getTextFile.js";
import * as leaflet from "./leafletFunctions.js";
import * as nav from "./navigation.js";
import * as localStore from "./localStorageFunctions.js"

window.onload = localStore.loadFromLocal;
// localStorage.currentNode = 0;
// localStorage.path = JSON.stringify([]);

var currentNodesColor = "blue";
var previousNodesColor = "red";
var didNotGoNodesColor = "black";
var prospectsNodesColor = "green";

export function redrawNodes(here, previous){
    var routes = nav.graph.getAdjacenciesByID(here);

    if (previous >= 0){
        console.log("Get countrycode by id of prev = " +nav.graph.getCountryCodeByID(previous));
        console.log("Get adjs of prev = " +nav.graph.getAdjacenciesByID(previous));
        
        //change previous to visited
        leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(previous),previousNodesColor);

        //get adjacenciess of previous
        var previousAdjacencies = nav.graph.getAdjacenciesByID(previous);
        console.log("Previous adjacencies are " +previousAdjacencies);

        //change adjs to didn't go
        for (var i = 0; i<previousAdjacencies.length; i++){
            leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(previousAdjacencies[i]),didNotGoNodesColor);

        }

    }
    console.log("Previous is " + previous);

    //draw here
    leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(here),currentNodesColor);
    console.log("here is "+nav.graph.getCountryCodeByID(here));

    //draw prospects
    for(var i = 0; i<routes.length; i++){
        leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(routes[i]),prospectsNodesColor);
    }
}

export function drawAllPaths(){
    for (var i = 0; i < nav.path.length; i++){
        redrawNodes(nav.path[i],nav.path[i-1]);
    }
    redrawNodes(nav.currentNode, nav.path[nav.path.length - 1]);
}


drawAllPaths();

//Place holder
// gtf.addTextToLog("the-netherlands");
// gtf.addTextToLog('belguim');

gtf.displayLog();
