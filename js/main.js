import * as gtf from "./getTextFile.js";

gtf.displayLog("the-netherlands");

let containerWidth = $('#map-container').width();
let containerHeight = $('#map-container').height();

var svg = d3.select('#map-container')
    .append("svg")
    .attr('width',containerWidth)
    .attr('height',containerHeight)
    // .attr('viewbox','0 0' + containerWidth + '' + containerHeight)
    // .attr('preserveAspectRatio','xMidYMid meet')
    .attr('id','svg');

console.log($('#map-container').css('background-size'));
   
function drawNode() { //work toward passing in an object
    // if (node) {
    //     console.log("I'm here");
    // }    // erase previous nodes on resize
    //check for nodes

    let nodeWidth = 25;
    containerWidth = $('#map-container').width();
    containerHeight = $('#map-container').height();
    var nodeX =  containerWidth - (containerWidth/ 7.2); //pass the object values here
    console.log(nodeX);
    var nodeY = containerHeight - (containerHeight / 5);
    console.log(nodeY);

    var circles = svg.selectAll('circle').data([
        {cx: nodeX, cy: nodeY, r: nodeWidth}
    ]);    

    circles.enter().append('circle')
        .merge(circles)
        .attr('r', function(d) { console.log(d.r);
            return d.r; })
        .attr('cx', function(d) { return d.cx; })
        .attr('cy', function(d) { return d.cy; })
        .attr('fill','red');
        console.log($('#map-container').css('background-size'));    
}

drawNode();
// var node = svg    
//     .append('circle')
//     .attr('class','svg-icon')
//     .attr('r',nodeWidth)
//     .attr('cx',nodeX)    
//     .attr('cy',nodeY)    
//     .attr('fill','red');
// }
window.addEventListener("resize",drawNode); //redraw the nodes on resize to ensure positioning correct