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