// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)
var table = d3.select("tbody")
console.log(table)

addDataToTable(tableData)

function addDataToTable(tableData) {
    table.html('')

    tableData.forEach((dataRow) => {
        var row = table.append('tr')

        // add each column value
        row.append('td').text(dataRow.datetime);

        row.append('td').text(dataRow.city);

        row.append('td').text(dataRow.state);

        row.append('td').text(dataRow.country);

        row.append('td').text(dataRow.shape);

        row.append('td').text(dataRow.durationMinutes);

        row.append('td').text(dataRow.comments);
    })
}

function click() {
    var date = d3.select("#datetime").property("value");
    var filteredData = tableData.filter((row) => row.datetime === date);

    addDataToTable(filteredData)


}

d3.selectAll("#filter-btn").on("click", click);