import * as gtf from "./getTextFile.js";
import * as leaflet from "./leafletFunctions.js";
import * as nav from "./navigation.js";
import * as localStore from "./localStorageFunctions.js"

localStore.loadFromLocal();
// localStore.reset();

// Color key
var currentNodesColor = "blue";
var previousNodesColor = "red";
var didNotGoNodesColor = "black";
var prospectsNodesColor = "green";

//Node drawing function
export function redrawNodes(here, previous){
    var routes = nav.graph.getAdjacenciesByID(here);

    if (previous >= 0){
        // console.log("Get countrycode by id of prev = " +nav.graph.getCountryCodeByID(previous));
        // console.log("Get adjs of prev = " +nav.graph.getAdjacenciesByID(previous));
        
        //change previous to visited
        leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(previous),previousNodesColor);

        //get adjacenciess of previous
        var previousAdjacencies = nav.graph.getAdjacenciesByID(previous);
        // console.log("Previous adjacencies are " +previousAdjacencies);

        //change adjs to didn't go
        for (var i = 0; i<previousAdjacencies.length; i++){
            leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(previousAdjacencies[i]),didNotGoNodesColor);

        }

    }
    // console.log("Previous is " + previous);

    //draw here
    leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(here),currentNodesColor);
    // console.log("here is "+nav.graph.getCountryCodeByID(here));

    //draw prospects
    for(var i = 0; i<routes.length; i++){
        leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(routes[i]),prospectsNodesColor);
    }
}

// Draw different colors for places you've been, didn't go, could go, and are currently at
export function drawAllPaths(){
    for (var i = 0; i < nav.path.length; i++){
        redrawNodes(nav.path[i],nav.path[i-1]);
    }
    redrawNodes(nav.currentNode, nav.path[nav.path.length - 1]);
}

// Add a reset button
export function addResetButton(){
    var resetButton = document.createElement("button");
    var buttonText = document.createTextNode("Reset");
    resetButton.appendChild(buttonText);
    resetButton.setAttribute("id","resetButton");
    document.getElementById('key').append(resetButton);
    document.getElementById('key').addEventListener("click",localStore.reset);
    document.getElementById('key').setAttribute("onclick","location.reload();");
}

// Draw all paths and display log on refresh
drawAllPaths();
gtf.displayLog();
if(document.getElementById("log").innerText == ""){
    gtf.addTextToLog("syria");
    gtf.displayLog();
}