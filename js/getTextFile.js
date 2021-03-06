import * as main from './main.js';

export function getTextFile(fileName){
    var request = new XMLHttpRequest();
    request.open('GET', fileName, false);
    request.send();
    var text = request.responseText;
    return text;
}

export var log;
export function setLog(value){
    log = value;
}

export function addTextToLog(lexiaName){
   log.unshift(getTextFile('../lexia/' + lexiaName + '.txt'));
   localStorage.setItem("log",JSON.stringify(log));
}

export function displayLog(){
    document.getElementById("log").innerText = log.join('\n\n<------------>\n\n');
}