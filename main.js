// Execute the whole thing on click!

document.getElementById("generate").onclick = function generateSystem() {

//Delete the previously generated table elements

    var elements = document.getElementsByClassName("generatedTable");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }


//MAIN CODE ------------------------------------------------------------------------------------------------------

//create system

var createdSystem = {createdStar: {}, planets: []};

//create the star

createdSystem.createdStar.name = createSystemName()
createdSystem.createdStar.mass = calculateStarMass()
createdSystem.createdStar.age = calculateStarAge()
createdSystem.createdStar.size = calculateStarSize(createdSystem.createdStar.age, createdSystem.createdStar.mass)
createdSystem.createdStar.type = calculateStarType()
createdSystem.noOfPlanets = calculateNoOfPlanets()
createPlanets(createdSystem)

//loop through the different bits of info and add to the HTML...

addStarDetailstoHTMLTable(createdSystem.createdStar)
addPlanetDetailsToHTMLTable(createdSystem)


}