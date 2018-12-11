import * as nav from "./navigation.js";
import * as gtf from "./getTextFile.js";


export function loadFromLocal(){
    if(localStorage.getItem('currentNode')){
        nav.setCurrentNode(localStorage.getItem('currentNode'));
    }
    if(localStorage.getItem('path')){
        nav.setPath(JSON.parse(localStorage.getItem('path')));
    }
    if(localStorage.getItem('log')){
        gtf.setLog(JSON.parse(localStorage.getItem('log')));
    }
}

export function reset(){
    nav.setCurrentNode(0);
    nav.setPath([]);
    gtf.setLog([]);
    localStorage.setItem('currentNode', 0);
    localStorage.setItem("path", JSON.stringify([]));
    localStorage.setItem("log", JSON.stringify([]));
}