var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/11P1uupLHALlVtTXUAOm_MJclPvYGx5PX_AgjSsJiPKg/pubhtml'; //Funciona

var date = [];
var series = {date:[], exportaciones:[], exportaciones_var:[], importaciones:[], importaciones_var:[], balance:[],
              reservas:[], reservas_var:[], actividad:[], actividad_var:[],  actividad_desest:[],actividad_desest_var:[],
              precio_soja:[], precio_soja_var:[], indice_construya:[], indice_construya_var:[]
              };

//No alterar el ordern
var checkColumns = ['exportaciones','exportaciones_var','importaciones','importaciones_var',
          'reservas','reservas_var','actividad','actividad_var', 'actividad_desest','actividad_desest_var',
          'precio_soja','precio_soja_var','indice_construya','indice_construya_var'];


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
      dateUTC = Date.UTC(tempDate[2], tempDate[1], tempDate[0]);

      //Chequeo si es par. Par es nominal, impar es VAR
      if(jQuery.inArray(key,checkColumns) % 2 === 0){
        if(data[i][key] != false){
          series[key].push([dateUTC, parseFloat(data[i][key])]);
          //busco el Key de la variable en var sumando 1
          complementaryKey = checkColumns[jQuery.inArray(key,checkColumns)+1];
          console.log("complementaryKey");
          console.log(complementaryKey);
          //agrego ese dato si hay data, si no, agrego un NaN (para que highcharts tome la fecha pero no grafique)
          if(data[i][complementaryKey] != false){
            series[complementaryKey].push([dateUTC, parseFloat(data[i][complementaryKey])]);
          }else{
            series[complementaryKey].push([dateUTC, NaN]);
          }
        }else{
          //No cargo data para Nominal ni Var
        };

      }


    });
  }

  buildSeries();
  drawCharts(dataExportaciones, dataExportaciones_var, 'Exportaciones', 'Miles de USD', 'Variación anual [%]');

}

renderSpreadsheetData();