import * as g from "./graph.js";

export var currentNode = 0;

export var path = [0];

export var graph = new g.Graph();

var adjacencies,count;
export function loadFromLocal(){
    if(localStorage.getItem('currentNode')){
        count = localStorage.getItem('currentNode');
    }
    if(localStorage.getItem('path'){
        path = JSON.parse(localStorage.getItem('path'));
    })
}

export function move(country){
    adjacencies = graph.getAdjacenciesByID(currentNode);
    for(var i = 0; i < adjacencies.length; i++){
        var id = graph.getCountryID(country);
        if(id == -1){
            return false;
        }
        if(id == adjacencies[i]){
            currentNode = id;
            path[path.length] = i;
            localStorage.setItem('currentNode', currentNode);
            localStorage.setItem('path', JSON.stringify(path));
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