// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
    //First clear out any exisiting data 
    tbody.html("");

    //Next, loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
//Append table rows to table body
    let row = tbody.append("tr"); 
//loop through each field in the data row, each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {

        let cell = row.append("td");

        cell.text(val);
     }
    );
  });
}