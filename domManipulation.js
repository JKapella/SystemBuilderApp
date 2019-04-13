function outputHTMLTables(createdSystem) {
    document.getElementById('systemDetails').innerHTML = ''
    var systemDetailsHTML = ''
    systemDetailsHTML += createSystemNameHTML(createdSystem.name)
    systemDetailsHTML += addStarDetailsHTML(createdSystem.createdStar)
    systemDetailsHTML += addPlanetDetailsHTML(createdSystem)
    document.getElementById('systemDetails').innerHTML = systemDetailsHTML
}

function createSystemNameHTML(starName) {
    var html = `<h4>The ${starName} system</h4>`
    return html
}

function addStarDetailsHTML(starInfo) {
    var html =
`<table>
    <tr>
        <th>Star Name</th>
        <th>Mass (M&#8853;)</th>
        <th>Age (bya)</th>
        <th>Size (R&#8853;)</th>
        <th>Type (Stellar Class)</th>
    </tr>
    <tr>
        <td>${starInfo.name}</td>
        <td>${starInfo.mass}</td>
        <td>${starInfo.age}</td>
        <td>${starInfo.size}</td>
        <td>${starInfo.type}</td>
    </tr> 
</table>`
    return html
}

function addPlanetDetails(planetName,PlanetOrbit,PlanetYear) {
    html = `
    <tr>
        <td>${planetName}</td>
        <td>${PlanetOrbit}</td>
        <td>${PlanetYear}</td>
    </tr>`
    return html
}

function addPlanetDetailsHTML(system) {
    var html =
    `<h4>Planets</h4>
        <table>
        <tr>
            <th>Name</th>
            <th>Orbital Distance (AU)</th>
            <th>Year Length (Earth Days)</th>
        </tr>`
    for (var currentPlanet = 0; currentPlanet < system.noOfPlanets; currentPlanet++) {
        html += addPlanetDetails(
            system.planets[currentPlanet].name,
            system.planets[currentPlanet].orbitalDistance,
            system.planets[currentPlanet].yearLength
        )
    }
    html += `</table>`
    return html
}