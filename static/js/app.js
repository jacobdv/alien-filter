// setup
var sightings = data;
const tbody = d3.select('tbody')
// appending sightings data in html table
sightings.forEach((sighting) => {
    let row = tbody.append('tr');
    Object.values(sighting).forEach(value => {
        let cell = row.append('td');
        cell.text(value);
    })
});
