//Hard coded variables for changing

var noOfPlanetsMin = 1; 
var noOfPlanetsMax = 10;

var solOrbitalRange = 60;

function createSystemName() {
	var nameInputFieldContent = document.querySelector('input').value
	var name = 'My Star'
	if (nameInputFieldContent !== '') {
		name = nameInputFieldContent
	}
	//TODO add function for proc-gen a star name - using proper stellar classification
	return name
}

function calculateStarMass () {
	var starMassMin = 0.8
	var starMassMax = 1.04
	//This is currently random - but within limits for a g-type main sequence star
	return +(Math.random() * (starMassMax - starMassMin) + starMassMin).toFixed(2)
}

function calculateStarAge() {
	var starAgeMin = 3
	var starAgeMax = 10
	//Currently random, restricted to stellar 'middle age' when planets have formed, but star hasn't yet expanded
	return +(Math.random() * (starAgeMax - starAgeMin) + starAgeMin).toFixed(2)
}

function calculateStarSize(starAge, starMass) {
	//Currently calculates based on relative age and mass to our sun - based on the below table
	//        Age   Radius
	// ZAMS       0.00   0.89
	// present    4.58   1.00
	// MS:ﬁnal   10.00   1.37
	// RGB:tip   12.17   256.
	// ZA-He     12.17   11.2
	// AGB:tip   12.30   149.
	//TODO, create a single scale to set this based on star mass and age from start to end of star life
	var ageAdjustment
	if (starAge < 4.58) { //if star is younger than the sun
		ageAdjustment = -((starAge.age/4.58) * 0.11) //0.11 is the change in size for sun in first 5bya of life
	} else { //it's older than the sun
		ageAdjustment = (((starAge.age - 4.58)/5.42) * 0.37) //0.37 is the change in size for sun in second 5bya of life
	}
	return starMass + ageAdjustment
}



// Execute the whole thing on click!

document.getElementById("generate").onclick = function generateSystem() {

//Delete the previously generated table elements

var elements = document.getElementsByClassName("generatedTable");
while(elements.length > 0){
	elements[0].parentNode.removeChild(elements[0]);
}





function calculateStarType() {
	//TODO, make this dynamic as I introduce other star types
	return "G2V";
}

//Stellar body fucntions - currently limited to planets, but asteroids and comets should go here too ----------------------

function calculateNoOfPlanets() {
	//Disappointingly, there is currently no consensus over what factors (beyond makup of the original cloud the system formed from)
	//define the number of planets - so it's going to have to be a random number for now
	//for now this can be between 1 and 10, because none is boring, and 10 is the limit of what we know of so far...
	//TODO - make this related to original size of pre-stellar gas cloud?
    return Math.floor(Math.random() * (noOfPlanetsMax - noOfPlanetsMin + 1)) + noOfPlanetsMin;
}

//Planet creation functions --------------------------------------------------------------------------------------------------

function calculateOrbitalDistance(planetNumber) {
	//take the mass of the star and calculate the maximum orbital distance
	//TODO - make this much better, the distribution is currently too weighted away from the star, should be the opposite
	
	//adjust the orbital range based on the mass of the parent star
	var potentialOrbitalRange = solOrbitalRange * createdSystem.createdStar.mass;
	
	//take the number of planets and distribute them throughout the potential 'orbital space'
	var randomNumber = Math.random();
	
	if (planetNumber > 0) {
		var orbitalRangeMin = createdSystem.planets[planetNumber - 1].orbitalDistance;
	} else {
		var orbitalRangeMin = 0.2;
	}
	return (randomNumber * randomNumber) * (potentialOrbitalRange - orbitalRangeMin) + orbitalRangeMin;	
}

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