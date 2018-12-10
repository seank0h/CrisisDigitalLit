import * as gtf from "./getTextFile.js";
import * as leaflet from "./leafletFunctions.js";
import * as nav from "./navigation.js";



gtf.addTextToLog("the-netherlands");

gtf.addTextToLog('belguim');
gtf.displayLog();
leaflet.drawNodeWithCountryCode("SY");
leaflet.drawNodeWithCountryCode("TR");