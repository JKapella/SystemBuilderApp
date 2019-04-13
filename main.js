document.getElementById("generate").onclick = function generateSystem() {

    var elements = document.getElementsByClassName("generatedTable");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

var createdSystem = {createdStar: {}, planets: []};

createdSystem.createdStar.name = createSystemName()
createdSystem.createdStar.mass = calculateStarMass()
createdSystem.createdStar.age = calculateStarAge()
createdSystem.createdStar.size = calculateStarSize(createdSystem.createdStar.age, createdSystem.createdStar.mass)
createdSystem.createdStar.type = calculateStarType()
createdSystem.noOfPlanets = calculateNoOfPlanets()
createPlanets(createdSystem)

addStarDetailstoHTMLTable(createdSystem.createdStar)
addPlanetDetailsToHTMLTable(createdSystem)

}