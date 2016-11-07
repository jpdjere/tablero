var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/11P1uupLHALlVtTXUAOm_MJclPvYGx5PX_AgjSsJiPKg/pubhtml'; //Funciona

var date = [];
var series = {date:[], exportaciones:[], exportaciones_var:[], importaciones:[], importaciones_var:[], balance:[],
              reservas:[], reservas_var:[], actividad:[], actividad_desest:[], actividad_var:[],
              precio_soja:[], precio_soja_var:[], indice_construya:[], indice_construya_var:[]
              };


function renderSpreadsheetData() {
  Tabletop.init( { key: public_spreadsheet_url,
                  debug:true,
                   callback: draw,
                   simpleSheet: true } )
}

function draw(data, tabletop) {
  // draw chart
  console.log("Data:");
  console.log(data);
  // render the table(s)

  for(var i = 0;i<data.length;i++){
    Object.keys(data[i]).forEach(function(key,index) {

      date.push(data[i].date);
      tempDate = data[i].date.split("/");

      if(data[i][key] != false){
        series[key].push([Date.UTC(tempDate[2], tempDate[1], tempDate[0]), parseFloat(data[i][key])]);
      };

    });
  }

  buildSeries();
  drawCharts(dataExportaciones, dataExportaciones_var, 'Miles de USD');

}

renderSpreadsheetData();
