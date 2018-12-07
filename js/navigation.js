import * as g from Graph

// do I need to export these? I don't really know what module formatting requires
var currentNode = 0;

var graph = Graph();

export function move(country){
    adjacencies = graph.getAdjacenciesByID(currentNode);
    for(var i = 0; i < adjacencies.length; i++){
        var id = graph.getCountryID(country);
        if(id == adjacencies[i]){
            currentNode = id;
        }
    }
    
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