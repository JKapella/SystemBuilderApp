function createSystemName() {
	var nameInputFieldContent = document.querySelector('input').value
	var name = 'Anonymous'
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
		ageAdjustment = -((starAge/4.58) * 0.11) //0.11 is the change in size for sun in first 5bya of life
	} else { //it's older than the sun
		ageAdjustment = (((starAge - 4.58)/5.42) * 0.37) //0.37 is the change in size for sun in second 5bya of life
	}
	return (starMass + ageAdjustment).toFixed(2)
}

function calculateStarType() {
	return 'G2V'
}

function calculateNoOfPlanets() {
	var noOfPlanetsMin = 1
	var noOfPlanetsMax = 11
	return Math.floor(Math.random() * (noOfPlanetsMax - noOfPlanetsMin)) + noOfPlanetsMin
}

function createPlanets(system) {
	for (var currentPlanet = 0; currentPlanet < system.noOfPlanets; currentPlanet++) {
		system.planets.push({})
		system.planets[currentPlanet].name = 'Planet: ' + (currentPlanet + 1)
		system.planets[currentPlanet].orbitalDistance = calculateOrbitalDistance(currentPlanet, system.createdStar.mass, system.planets, system.noOfPlanets)
		system.planets[currentPlanet].yearLength = calculateYearLength(currentPlanet, system.planets)
	}
}

function calculateOrbitalDistance(planetNumber, starMass, planets, numberOfPlanets) {
	var solOrbitalRange = 40
	var maxPotentialOrbitalRange = solOrbitalRange * starMass
	var orbitalRangeMin
	if (planetNumber > 0) {
		orbitalRangeMin = (planets[planetNumber - 1].orbitalDistance) + 0.5
	} else {
		orbitalRangeMin = 0.2
	}
	var planetsRemainingToPlace = numberOfPlanets - planetNumber
	var planetPotentialOrbitalRange = (maxPotentialOrbitalRange - orbitalRangeMin) / planetsRemainingToPlace
	var randomNumber = Math.random()
	return (randomNumber * planetPotentialOrbitalRange) + orbitalRangeMin
}

function calculateYearLength(planetNumber, planets) {
	var yearLength = Math.sqrt(Math.pow(planets[planetNumber].orbitalDistance ,3))
	return yearLength * 365
}