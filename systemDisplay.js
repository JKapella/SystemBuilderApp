

function displaySystem(system) {
    document.getElementById('systemViewer').innerHTML = ''
    var html = `<div id='universe'><div id='galaxy'><div id='star'></div>`
    html += addPlanetsHTML(system)
    html += `</div></div>`
    document.getElementById('systemViewer').innerHTML = html
    addStarStyling(system.createdStar.size)
    setOrbitSizes(system)
    //set the orbit speed, set the planet size, set the planet correct animation speed
    setOrbitSpeeds(system)
}

function addPlanetsHTML(system) {
    var html = ``
    system.planets.forEach(function(planet) {
        html += `
<div id="${planet.name}" class="orbit">
    <div class='pos'>
        <div class="planet"></div>
    </div>
</div>`})
    return html
}

function addStarStyling(size) {
    var newSize = 8 * size //10rem is the 'basic' star size (might want to reduce this?) maybe 8?
    document.getElementById('star').style.fontSize = newSize + 'em'
}

function setOrbitSizes(system) {
    //current min and max for this is 1rem and 7rem - they create the smallest and widest orbits
    var avaliableOrbitRange = 6
    var orbitalMarginSize = avaliableOrbitRange / system.noOfPlanets
    var currentOrbit = 1 + (orbitalMarginSize / 2)
    system.planets.forEach(function(planet) {
        var targetPlanetOrbit = document.getElementById(planet.name)
        targetPlanetOrbit.style.fontSize = currentOrbit + 'em'
        currentOrbit += orbitalMarginSize
    })
}

function setOrbitSpeeds(system) {
    //start with 2secs as the 'base' speed
}

// #mercury.orbit, #mercury .pos {
//     animation-duration: 3s;
// }

//PERHAPS DO SET SIZES TO START?

//BETWEEN 1rem and 7rem for the best distribution
//depending on the number of planets - carve up the 6 avalaible units and add the stuff to them


// html = `
// <div id="mercury" class="orbit">
// <div class='pos'>
// <div class="planet"></div>
// </div>
// </div>
// <div id="venus" class="orbit">
// <div class='pos'>
// <div class="planet"></div>
// </div>
// </div>`