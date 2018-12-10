export class Graph {
    // creates the graph in a set state
    constructor() {
        this.nodes = [];
        this.countries = [];
        
        // assign countries ids:
        this.countries[0] = "Syria";
        this.countries[1] = "Turkey";
        this.countries[2] = "Bulgaria";
        this.countries[3] = "Serbia";
        this.countries[4] = "Romania";
        this.countries[5] = "Hungary";
        this.countries[6] = "Austria";
        this.countries[7] = "Germany";
        this.countries[8] = "Sweden";
        this.countries[9] = "Belgium";
        this.countries[10] = "Netherlands";
        this.countries[11] = "Lebanon";
        this.countries[12] = "Greece";
        this.countries[13] = "Egypt";
        this.countries[14] = "Libya";
        this.countries[15] = "Algeria";
        this.countries[16] = "Spain";
        this.countries[17] = "Iraq";
        this.countries[18] = "Iran";
        this.countries[19] = "Russia";
        this.countries[20] = "Italy";

        // assign country codes to ids
        this.countryCodes[0] = "SY";
        this.countryCodes[1] = "TR";
        this.countryCodes[2] = "BG";
        this.countryCodes[3] = "RS";
        this.countryCodes[4] = "RO";
        this.countryCodes[5] = "HU";
        this.countryCodes[6] = "AT";
        this.countryCodes[7] = "DE";
        this.countryCodes[8] = "SE";
        this.countryCodes[9] = "BE";
        this.countryCodes[10] = "NL";
        this.countryCodes[11] = "LB";
        this.countryCodes[12] = "GR";
        this.countryCodes[13] = "EG";
        this.countryCodes[14] = "LY";
        this.countryCodes[15] = "DZ";
        this.countryCodes[16] = "ES";
        this.countryCodes[17] = "IQ";
        this.countryCodes[18] = "IR";
        this.countryCodes[19] = "RU";
        this.countryCodes[20] = "IT";
        
        // build the graph itself
        this.nodes[0] = new Node(0, [1, 11, 13, 18]);
        this.nodes[1] = new Node(0, [2]);
        this.nodes[2] = new Node(0, [3, 4]);
        this.nodes[3] = new Node(0, [5, 6, 17]);
        this.nodes[4] = new Node(0, [5]);
        this.nodes[5] = new Node(0, [6]);
        this.nodes[6] = new Node(0, [7, 8, 9]);
        this.nodes[7] = new Node(0, []);
        this.nodes[8] = new Node(0, []);
        this.nodes[9] = new Node(0, [10]);
        this.nodes[10] = new Node(0, []);
        this.nodes[11] = new Node(0, [12]);
        this.nodes[12] = new Node(0, [3]);
        this.nodes[13] = new Node(0, [14, 17]);
        this.nodes[14] = new Node(0, [15]);
        this.nodes[15] = new Node(0, [16]);
        this.nodes[16] = new Node(0, []);
        this.nodes[17] = new Node(0, [6, 9]);
        this.nodes[18] = new Node(0, [19]);
        this.nodes[19] = new Node(0, [20]);
        this.nodes[20] = new Node(0, []);
    }
    
    // gets the adjacencies for a country, by name
    getGraphAdjacenciesByCountry(country){
        return nodes[this.getCountryID(country)].getAdjacencies();
    }
    
    getCountryCodeByID(id){
        return this.countryCodes[id];
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