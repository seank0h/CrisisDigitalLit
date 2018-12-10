import * as gtf from "./getTextFile.js";
import * as leaflet from "./leafletFunctions.js";
import * as nav from "./navigation.js";

window.onload = nav.loadFromLocal();

export function redrawNodes(){
    var here = nav.currentNode;
    var routes = nav.graph.getAdjacenciesByID(here);

    for(var i = 0; i<routes.length; i++){
        leaflet.drawNodeWithCountryCode(nav.graph.getCountryCodeByID(routes[i]),"blue");
    }
}

redrawNodes();

//Place holder
// gtf.addTextToLog("the-netherlands");

// gtf.addTextToLog('belguim');
// gtf.displayLog();
