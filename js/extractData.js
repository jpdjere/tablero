var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1YaFYOD79oEKs12JfzqO3-mww2o5_Cr4eiZIWxWDynaw/pubhtml'; //Funciona

var date = [];
var exp = [];
var imp = [];

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
    date.push(temp1[i].date);
    exp.push(temp1[i].exportaciones);
    imp.push(temp1[i].importaciones);

  }

}

renderSpreadsheetData();