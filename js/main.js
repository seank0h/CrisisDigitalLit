import * as gtf from "./getTextFile.js";

gtf.displayLog("the-netherlands");

d3.select('#map-container')
    .append("svg")
    .attr('class','svg-icon')
    .append('circle')
    .attr('class','svg-icon')
    .attr('r',50)
    .attr('cx',50)    
    .attr('cy',50)    
    .attr('fill','red');
