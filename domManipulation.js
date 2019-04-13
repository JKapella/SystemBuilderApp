function outputHTMLTables(createdSystem) {
    var elements = document.getElementsByClassName("generatedTable")
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0])
    }

    addStarDetailstoHTMLTable(createdSystem.createdStar)
    addPlanetDetailsToHTMLTable(createdSystem)
}


// <h4 id='starName'>Star</h4>
//     <table id="mainTable">
//     <tr>
//     <th>Star Name</th>
// <th>Mass (M⊕)</th>
// <th>Age (bya)</th>
// <th>Size (R⊕)</th>
// <th>Type (Stellar Class)</th>
// </tr>
// <tr id="starDetails"></tr>
//     </table>
//     <h4>Planets</h4>
//     <table id="planetDetails">
//     <tr>
//     <th>Name</th>
//     <th>Orbital Distance (AU)</th>
// <th>Year Length (Earth Days)</th>
// </tr>
// </table>



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

function addStarDetailstoHTMLTable(star) {
    addStarDetailsHTML(star.name);
    addStarDetailsHTML(star.mass);
    addStarDetailsHTML(star.age);
    addStarDetailsHTML(star.size);
    addStarDetailsHTML(star.type);
}

function addPlanetDetailsToHTMLTable(system) {
    for (var currentPlanet = 0; currentPlanet < system.noOfPlanets; currentPlanet++) {
        addPlanetDetailsHTML(
            system.planets[currentPlanet].name,
            system.planets[currentPlanet].orbitalDistance,
            system.planets[currentPlanet].yearLength
        );
    }
}