

function displaySystem(system) {
    var html =
`<div id='universe'>
    <div id='galaxy'>
    <div id='star'></div>`
    document.getElementById('systemViewer').innerHTML = ''
    // addPlanetsHTML(system)

    html += `</div></div>`
    document.getElementById('systemViewer').innerHTML = html
}

function addPlanetsHTML(system) {

}


// NOTES
//The base size of the star is 10em - this is sol - we'll then adjust star size based on this - times it by the size is fine








    // <div id="mercury" class="orbit">
    // <div class='pos'>
    // <div class="planet"></div>
    // </div>
    // </div>
    // <div id="venus" class="orbit">
    // <div class='pos'>
    // <div class="planet"></div>
    // </div>
    // </div>
