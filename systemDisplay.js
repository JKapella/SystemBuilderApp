

function displaySystem(system) {
    document.getElementById('systemViewer').innerHTML = ''
    var html = `<div id='universe'><div id='galaxy'><div id='star'></div>`
    html += addPlanetsHTML(system)
    html += `</div></div>`
    document.getElementById('systemViewer').innerHTML = html
    addStarStyling(system.createdStar.size)
    setOrbitSizes(system)
    setPlanetSize(system)
    setPlanetColours(system)
    setAnimationSpeeds(system)
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
    var newSize = 6 * size
    document.getElementById('star').style.width = newSize + 'rem'
    document.getElementById('star').style.height = newSize + 'rem'
    document.getElementById('star').style.marginTop = -(newSize/2) + 'rem'
    document.getElementById('star').style.marginLeft = -(newSize/2) + 'rem'

}

function setOrbitSizes(system) {
    var minOrbitalDistance = 10
    system.planets.forEach(function(planet) {
        var currentOrbit = (planet.orbitalDistance * 2) + minOrbitalDistance
        var targetPlanetOrbit = document.getElementById(planet.name)
        targetPlanetOrbit.style.width = currentOrbit + 'rem'
        targetPlanetOrbit.style.height = currentOrbit + 'rem'
        targetPlanetOrbit.style.marginTop = -(currentOrbit/2) + 'rem'
        targetPlanetOrbit.style.marginLeft = -(currentOrbit/2) + 'rem'
    })
}

function setPlanetSize(system) {
    var minSize = 0.3
    var maxSize = 1.3
    system.planets.forEach(function(planet) {
        var planetSize = Math.random() * (maxSize - minSize) + minSize
        var selector = '#' + planet.name + '> .pos > .planet'
        var targetPlanet = document.querySelector(selector)
        targetPlanet.style.width = planetSize + 'rem'
        targetPlanet.style.height = planetSize + 'rem'
        targetPlanet.style.marginTop = -(planetSize/2) + 'rem'
        targetPlanet.style.marginLeft = -(planetSize/2) + 'rem'
    })

}

function setPlanetColours(system) {
     var colours = [
         '#E27B58',
         '#9E393C',
         '#7502F4',
         '#4F4CB0',
         '#FDA600'
     ]
    system.planets.forEach(function(planet) {
        var random = Math.floor(Math.random() * (5 - 0) + 0)
        var planetColour = colours[random]
        var selector = '#' + planet.name + '> .pos > .planet'
        var targetPlanet = document.querySelector(selector)
        targetPlanet.style.backgroundColor = planetColour

    })

}

function setAnimationSpeeds(system) {
    system.planets.forEach(function(planet) {
        var targetPlanetOrbit = document.getElementById(planet.name)
        var speed = planet.yearLength / 365 //'base' speed is currently 1 sec
        targetPlanetOrbit.style.animationDuration = speed + 's'
        var targetPosSelector = '#' + planet.name + ' > .pos'
        var targetPos = document.querySelector(targetPosSelector)
        targetPos.style.animationDuration = speed + 's'

    })
}