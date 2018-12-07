export class Graph {
    // creates the graph in a set state
    constructor() {
        this.nodes = [];
        this.countries = [];
        
        // build the graph itself
    }
    
    // gets the adjacencies for a country, by name
    getGraphAdjacenciesByCountry(country){
        return nodes[this.getCountryID(country)].getAdjacencies();
    }
    
    // gets the adjacencies for a country, by id
    getAdjacenciesByID(id){
        return this.nodes[id].getAdjacencies();
    }
    
    // gets the id for the node for a country, returns -1 if no id for that country is found
    getCountryID(country){
        for(var i = 0; i < this.countries.length; i++){
            if(country == this.countries[i]){
                return i;
            }
        }
        // error code
        return -1
    }
    
    // gets the country for a node by an id
    getCountry(id){
        return this.countries[id];
    }
}

export class Node {
    // id is the numerical id, country is the name of the country, adjcencies is a list of id's
    constructor(id, adjacencies) {
        this.id = id;
        this.adjacencies = adjacencies;
    }
    
    // add an adjacency by numerical id
    addAdjacency(adjID){
        this.adjacencies[this.adjacencies.length] = adjID;
    }
    
    // getters
    getID(){
        return this.id;
    }
    getAdjacencies(){
        return this.adjacencies;
    }
    
    
}