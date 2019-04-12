function createSystemName() {
	var nameInputFieldContent = document.querySelector('input').value
	var name = 'Star'
	if (nameInputFieldContent !== '') {
		name = nameInputFieldContent
	}
	return name
}

function calculateStarMass () {
	var starMassMin = 0.8
	var starMassMax = 1.04
	return +(Math.random() * (starMassMax - starMassMin) + starMassMin).toFixed(2)
}

function calculateStarAge() {
	var starAgeMin = 3
	var starAgeMax = 10
	return +(Math.random() * (starAgeMax - starAgeMin) + starAgeMin).toFixed(2)
}

function calculateStarSize(starAge, starMass) {
	//TODO, in general sort this function out, not good or clear
	var ageAdjustment
	if (starAge < 4.58) { //if star is younger than the sun
		ageAdjustment = -((starAge.age/4.58) * 0.11) //0.11 is the change in size for sun in first 5bya of life
	} else { //it's older than the sun
		ageAdjustment = (((starAge.age - 4.58)/5.42) * 0.37) //0.37 is the change in size for sun in second 5bya of life
	}
	return starMass + ageAdjustment
}

function calculateStarType() {
	return 'G2V'
}

function calculateNoOfPlanets() {
	var noOfPlanetsMin = 1;
	var noOfPlanetsMax = 10;
	return Math.floor(Math.random() * (noOfPlanetsMax - noOfPlanetsMin + 1)) + noOfPlanetsMin
}

function calculateOrbitalDistance(planetNumber) {
	//TODO - make this much better, the distribution is currently too weighted away from the star, should be the opposite
	var solOrbitalRange = 60;
	var potentialOrbitalRange = solOrbitalRange * createdSystem.createdStar.mass;
	var randomNumber = Math.random();
	var orbitalRangeMin
	if (planetNumber > 0) {
		orbitalRangeMin = createdSystem.planets[planetNumber - 1].orbitalDistance;
	} else {
		orbitalRangeMin = 0.2;
	}
	return (randomNumber * randomNumber) * (potentialOrbitalRange - orbitalRangeMin) + orbitalRangeMin;
}

// Execute the whole thing on click!

document.getElementById("generate").onclick = function generateSystem() {

//Delete the previously generated table elements

var elements = document.getElementsByClassName("generatedTable");
while(elements.length > 0){
	elements[0].parentNode.removeChild(elements[0]);
}

//Planet creation functions --------------------------------------------------------------------------------------------------


function calculateYearLength(planetNumber) {
	//using a simplified version of Keplers First Law! - apparently only works for the sun
	//The square of the period equals the cube of the distance multiplied by a constant that depends on the mass of the central body?
	var yearLength = Math.sqrt(Math.pow(createdSystem.planets[planetNumber].orbitalDistance ,3));
	return yearLength * 365;
}

//DOM Manipulation script --------------------------------------------------------------------------

function addStarDetailsHTML(info) {
	//create the cell
	var starInfoCell = document.createElement("td");
	starInfoCell.setAttribute("class", "generatedTable");
	//create the content for the cell
	var content = document.createTextNode(info); 
	//add content to the cell
	starInfoCell.appendChild(content);
	//add the cell to the doc
	document.getElementById("starDetails").appendChild(starInfoCell);
}

//TODO This function and the star details function can be merged (maybe?)
function addPlanetDetailsHTML(planetName,PlanetOrbit,PlanetYear) {
	//create the row
	var planetInfoRow = document.createElement("tr");
	planetInfoRow.setAttribute("id", planetName);
	planetInfoRow.setAttribute("class", "generatedTable");
	//add the row to the doc
	document.getElementById("planetDetails").appendChild(planetInfoRow);
	//add name cell
	var planetNameCell = document.createElement("td");
	var planetNameContent = document.createTextNode(planetName); 
	planetNameCell.appendChild(planetNameContent);
	document.getElementById(planetName).appendChild(planetNameCell);
	//add orbit cell
	var planetOrbitCell = document.createElement("td");
	var planetOrbitContent = document.createTextNode(PlanetOrbit); 
	planetOrbitCell.appendChild(planetOrbitContent);
	document.getElementById(planetName).appendChild(planetOrbitCell);
	//add Year Length cell
	var planetYearCell = document.createElement("td");
	var planetYearContent = document.createTextNode(PlanetYear); 
	planetYearCell.appendChild(planetYearContent);
	document.getElementById(planetName).appendChild(planetYearCell);	
}

function addStarDetailstoHTMLTable() {
	addStarDetailsHTML(createdSystem.createdStar.name);
	addStarDetailsHTML(createdSystem.createdStar.mass);
	addStarDetailsHTML(createdSystem.createdStar.age);
	addStarDetailsHTML(createdSystem.createdStar.size);
	addStarDetailsHTML(createdSystem.createdStar.type);	
}

function addPlanetDetailstoHTMLTable(noOfPlanets) {
	for (currentPlanet = 0; currentPlanet < createdSystem.noOfPlanets; currentPlanet++) {
		addPlanetDetailsHTML(
			createdSystem.planets[currentPlanet].name,
			createdSystem.planets[currentPlanet].orbitalDistance,
			createdSystem.planets[currentPlanet].yearLength
			);
	}
}

//MAIN CODE ------------------------------------------------------------------------------------------------------

//create system

var createdSystem = {createdStar: {}, planets: []};

//create the star

createdSystem.createdStar.name = createSystemName(); //string for the name of the system
createdSystem.createdStar.mass = calculateStarMass(); //In solar masses
createdSystem.createdStar.age = calculateStarAge(); //In Billions of Years
createdSystem.createdStar.size = calculateStarSize(createdSystem.createdStar.age, createdSystem.createdStar.mass); //In solar Radius
createdSystem.createdStar.type = calculateStarType(); //only G-type main sequence stars for now...

//how many planets in the system?

createdSystem.noOfPlanets = calculateNoOfPlanets();
 
//create the planets

for (currentPlanet = 0; currentPlanet < createdSystem.noOfPlanets; currentPlanet++) {
	// var currentName = 'Planet: ' + currentPlanet; //improve this to at least stellar classification
	createdSystem.planets.push({}); //create empty planet object
	createdSystem.planets[currentPlanet].name = 'Planet: ' + (currentPlanet + 1); //give it a name
	createdSystem.planets[currentPlanet].orbitalDistance = calculateOrbitalDistance(currentPlanet); //return in AU
	createdSystem.planets[currentPlanet].yearLength = calculateYearLength(currentPlanet); //return in earth days
}

//loop through the different bits of info and add to the HTML...

addStarDetailstoHTMLTable();
addPlanetDetailstoHTMLTable(createdSystem.noOfPlanets);


};

//NOTES ON STUFF

//https://en.wikipedia.org/wiki/Stellar_classification

//https://en.wikipedia.org/wiki/Formation_and_evolution_of_the_Solar_System

//EXOPLANET ARCHIVE - As cool as it sounds... https://exoplanetarchive.ipac.caltech.edu/

///good links to papers on planetary disribtion in this article https://en.wikipedia.org/wiki/Planetary_system