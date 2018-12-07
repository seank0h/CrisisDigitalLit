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
