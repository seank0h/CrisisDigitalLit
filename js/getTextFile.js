export function getTextFile(fileName){
    var request = new XMLHttpRequest();
    request.open('GET', fileName, false);
    request.send();
    var text = request.responseText;
    return text;
}

export function displayLog(lexiaName){
    document.getElementById("log").innerText = getTextFile('../lexia/' + lexiaName + '.txt');
}