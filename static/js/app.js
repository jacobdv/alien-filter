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
    
    // creates object of user input for filtering
    let filterObject = {};
    if (dateInput) {
        filterObject.datetime = dateInput;
    };
    if (cityInput) {
        filterObject.city = cityInput;
    };
    if (stateInput) {
        filterObject.state = stateInput;
    };
    if (countryInput) {
        filterObject.country = countryInput;
    };
    if (shapeInput) {
        filterObject.shape = shapeInput;
    };
    if (durationInput) {
        filterObject.duration = durationInput;
    };
    if (commentInput) {
        filterObject.comment = commentInput;
    };

    // array of output objects from data
    let outputSightings = [];

    // for each sighting, compare to user input requirements
    sightings.forEach(sighting => {
        let i = 0;

        // for each user input value, increase iterator by one if it matches data
        Object.values(filterObject).forEach(value => {  
            if (Object.values(sighting).includes(value)) {
                i += 1;
            };
        });

        // if the data object matches all user input filters, push it to the output array
        if (i === Object.values(filterObject).length) {
            outputSightings.push(sighting);
        }
    });
        
    // visually filters data output for user
    tbody.html('')
    outputSightings.forEach(sighting => {
        let row = tbody.append('tr');
        Object.values(sighting).forEach(value => {
            let cell = row.append('td');
            cell.text(value); 
        })
    })
};

// runs filter function on button click
button.on("click",runFilter);
form.on("submit",runFilter);