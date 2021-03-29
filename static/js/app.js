// setup
const sightings = data;

// sets up button and form
let button = d3.select("#filter-btn"),
    form = d3.select('#form');

// appending sightings data in html table
// selects table body and appends each datapoint, row by row
const tbody = d3.select('tbody')
sightings.forEach(sighting => {
    let row = tbody.append('tr');
    Object.values(sighting).forEach(value => {
        let cell = row.append('td');
        cell.text(value);
    })
});

// filters
// date
const runFilter = () => {
    d3.event.preventDefault();

    // takes user input
    let dateInput = (d3.select('#datetime')).property('value'), 
        cityInput = (d3.select('#city')).property('value'),
        stateInput = (d3.select('#state')).property('value'),
        countryInput = (d3.select('#country')).property('value'),
        shapeInput = (d3.select('#shape')).property('value'),
        durationInput = (d3.select('#duration')).property('value'),
        commentInput = (d3.select('#comment')).property('value');
    
    let filterObject = {};

    if (dateInput) {
        filterObject.datetime = dateInput;
    };

    console.log(filterObject);
//
// Filters multiple right now, only if all fields are filled 
//
    // sightings.forEach(sighting => {
    //     let i = 0;
    //     filterObject.values.forEach(value => {  
    //         if (Object.values(sighting).includes(value)) {
    //             i += 1;
    //         };
    //     });
    //     if (i === filterObject.length) {
    //         outputSightings.push(sighting);
    //     }
    // });
        
    // // filters data output for user
    // tbody.html('')
    // outputSightings.forEach(sighting => {
    //     let row = tbody.append('tr');
    //     Object.values(sighting).forEach(value => {
    //         let cell = row.append('td');
    //         cell.text(value); 
    //     })
    // })
};

button.on("click",runFilter);
form.on("submit",runFilter);