// setup
var sightings = data;

// sets up button and form
let button = d3.select("#button"),
    form = d3.select('#form');

// appending sightings data in html table
// selects table body and appends each datapoint, row by row
const tbody = d3.select('tbody')
sightings.forEach((sighting) => {
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
    let dateInput = d3.select('#datetime'), 
        dateValue = dateInput.property('value');
    let dateFilter = sightings.filter(s => s.datetime === dateValue);
};

button.on("click", runFilter);
form.on("submit",runFilter);