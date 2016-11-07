var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/11P1uupLHALlVtTXUAOm_MJclPvYGx5PX_AgjSsJiPKg/pubhtml'; //Funciona

var date = [];
var exp = [];
var imp = [];
var combinedArray = [];

function renderSpreadsheetData() {
  Tabletop.init( { key: public_spreadsheet_url,
                  debug:true,
                   callback: draw,
                   simpleSheet: true } )
}

function draw(data, tabletop) {
  // draw chart
  console.log("Funciono");
  console.log(data);
  // render the table(s)
  //tabulate(data, ['date', 'exportaciones','importaciones']); // 2 column table


  for(var i = 0;i<data.length;i++){
    date.push(data[i].date);
    tempDate = data[i].date.split("/");
    combinedArray.push([Date.UTC(tempDate[2], tempDate[1], tempDate[0]), parseFloat(data[i].exportaciones)]);
    exp.push(parseFloat(data[i].exportaciones));
    imp.push(parseFloat(data[i].importaciones));

  }

  buildSeries();
  drawCharts();

}

renderSpreadsheetData();
