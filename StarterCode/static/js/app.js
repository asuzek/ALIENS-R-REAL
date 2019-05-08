// from data.js
var tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the ufos data from data.js
// console.log(data);
// Step 1: Loop Through `data` and console.log each object
data.forEach(ufos => {
    // console.log(ufos);
    const row = tbody.append("tr");
    for (const key in ufos){
        row.append("td").text(ufos[key])
    }
})

// Select the submit button
const submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    const inputElement = d3.select("#datetime");

    // Get the value property of the input element
    const inputValue = inputElement.property("value");

    console.log(inputValue);
    // Remove the existing table
    d3.select("#ufo-table tbody").remove();
    // Append the new tbody to the existing table with header
    let tbody2 = d3.select("#ufo-table").append("tbody");

    data.forEach(ufos2 => {
            if (ufos2["datetime"]==inputValue) {
           
                const row = tbody2.append("tr");
                for (const key in ufos2){
                    row.append("td").text(ufos2[key])
                }
            }
    })
});