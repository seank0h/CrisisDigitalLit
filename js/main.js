import * as gtf from "./getTextFile.js";

gtf.displayLog("the-netherlands");

function drawNode() { //work toward passing in an object
if (node) {
    console.log("I'm here");
}    // erase previous nodes on resize
//check for nodes
let nodeWidth = window.innerWidth * 0.005;
let containerWidth = $('#map-container').width();
let containerHeight = $('#map-container').height();
var nodeX =  containerWidth / 20; //pass the object values here
console.log(nodeX);
var nodeY = containerHeight / 20;
console.log(nodeY);
var svg = d3.select('#map-container')
    .append("svg")
    .attr('viewbox','0 0' + containerWidth + '' + containerHeight)
    .attr('preserveAspectRatio','xMidYMid meet')
    .attr('id','svg');
var node = svg    
    .append('circle')
    .attr('class','svg-icon')
    .attr('r',nodeWidth)
    .attr('cx',nodeX)    
    .attr('cy',nodeY)    
    .attr('fill','red');
}
window.addEventListener("resize",drawNode); //redraw the nodes on resize to ensure positioning correct