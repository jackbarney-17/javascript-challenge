// from data.js
var tableData = data;
console.log(tableData);


// // create reference to ufo table body
var table_body = d3.select('tbody')

// console.log each columns' ufo sighting record
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    // appending table row 'tr' for each ufo sighting
    var row = table_body.append('tr');
    // use object.entries to console.log each ufo sighting value
    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key, value);
        // append cell to row for each ufo sighting value
        var cell = row.append('td');
        cell.text(value);
    });
});

// create function to populate table after filtering
function populate(arr) {
    // getting references
    table_body.attr("class", "table");
    table_body.html("");
    // appending rows with ufo sighting object values
    arr.forEach(function (obj) {
        row = table_body.append("tr");
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.durationMinutes);
        row.append("td").text(obj.comments);
    })
};

// create function filtering ufo sightings by date
function ufoFilter(){
    // setting up inputs 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // function to match input with correct ufo sighting table
    function filterData(input){
        return input.datetime == inputValue
    };
    var filteredData = tableData.filter(filterData);
    // populate table with filtered ufo sighting data
    populate(filteredData);
};

// setting up filter button
var button = d3.select("#filter-btn");
button.on("click", ufoFilter);
