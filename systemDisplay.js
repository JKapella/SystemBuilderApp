

function displaySystem(system) {
    document.getElementById('systemViewer').innerHTML = ''
    var html = `<div id='universe'><div id='galaxy'><div id='star'></div>`
    html += addPlanetsHTML(system)
    html += `</div></div>`
    document.getElementById('systemViewer').innerHTML = html
    addStarStyling(system.createdStar.size)
    setPlanetStyles(system)
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

function setPlanetStyles(system) {
    //current min and max for this is 1rem and 7rem - they create the smallest and widest orbits
    //need to set the orbit size, set the orbit speed, set the planet size, set the planet correct animation speed
    // system.planets.forEach(function(planet) {
    //     var targetPlanet
    // })

}



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