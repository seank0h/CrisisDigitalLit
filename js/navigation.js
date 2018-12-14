import * as g from "./graph.js";
import * as gtf from "./getTextFile.js";
import * as main from "./main.js";

export var currentNode = 0;
export var path = [];
export var graph = new g.Graph();
export var adjacencies;

export function setCurrentNode(value){
    currentNode = value;
    adjacencies = graph.getAdjacenciesByID(value);
}

export function setPath(value){
    path = value;
}

export function move(country){
    for(var i = 0; i < adjacencies.length; i++){
        var id = graph.getCountryID(country);
        if(id == -1){
            return false;
        }
        if(id == adjacencies[i]){
            path[path.length] = currentNode;
            currentNode = id;
            gtf.addTextToLog(country);
            localStorage.setItem('currentNode', currentNode);
            localStorage.setItem('path', JSON.stringify(path));

            adjacencies = graph.getAdjacenciesByID(currentNode);
            
            return true;
        }
    }
    
    return false;
    
    
    // do code to reveal paths + nodes either here or in some other file that either consults:
    // 1. graph.getAdjacenciesByID(currentNode) 
    // OR
    // 2. graph.getAdjacenciesByCountry(whateverCountryYouWant)
    
    // the adjcencies are numerical, but you can convert them to countries by graph.getCountry(id)
    
}

// notes:
// on click -> move(countryClicked).
// reveal adjacent nodes and paths to the new country.
// change the path used to a different color (to show path traveled).
// possibly identify special effects depending on country (Nation X deports you to nation Y, one node changes routes for future node, end node resets?)
// ^ All of those effects are pretty doable