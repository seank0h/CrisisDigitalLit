export function getTextFile(fileName){
    var request = new XMLHttpRequest();
    request.open('GET', fileName, false);
    request.send();
    var text = request.responseText;
    return text;
}

export var log = [];

export function addTextToLog(lexiaName){
   log.unshift(getTextFile('../lexia/' + lexiaName + '.txt'));
}

export function displayLog(){
    document.getElementById("log").innerText = log.join('\n\n<------------>\n\n');
}