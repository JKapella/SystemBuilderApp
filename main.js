document.getElementById("generate").addEventListener('click', function () {
    var createdSystem = {createdStar: {}, planets: []}
    createdSystem.createdStar.name = createSystemName()
    createdSystem.createdStar.mass = calculateStarMass()
    createdSystem.createdStar.age = calculateStarAge()
    createdSystem.createdStar.size = calculateStarSize(createdSystem.createdStar.age, createdSystem.createdStar.mass)
    createdSystem.createdStar.type = calculateStarType()
    createdSystem.noOfPlanets = calculateNoOfPlanets()
    createPlanets(createdSystem)
    outputHTMLTables(createdSystem)
})





