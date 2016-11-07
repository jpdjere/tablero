function drawCharts(){
  Highcharts.chart('container1',{
    series: datasets,
    yAxis: {
              title: {
                enabled: true,
                text: 'Miles de USD'}
        },
    title: {
              text: 'RESERVAS'
            },
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    exporting: { enabled: false },
    credits: { enabled: false }
  });
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: serie1,
    exporting: { enabled: false },
    credits: { enabled: true,
              text: "Ministerio de Producción y Desarrollo",
              href: "http://www.produccion.gob.ar"},
    yAxis: {
            	title: {
                enabled: true,
                text: 'Variación anual [%]'}
        },
    title: {
              enabled: false,
              text: ''
            },
  });
};

function drawReservas(){
  Highcharts.chart('container1',{
    series: series.reservas,
    yAxis: {
              title: {
                enabled: true,
                text: 'Miles de USD'}
        },
    title: {
              text: 'Resrvas'
            },
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    exporting: { enabled: false },
    credits: { enabled: false }
  });
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: series.reservas_var,
    exporting: { enabled: false },
    credits: { enabled: true,
              text: "Ministerio de Producción y Desarrollo",
              href: "http://www.produccion.gob.ar"},
    yAxis: {
            	title: {
                enabled: true,
                text: 'Variación anual [%]'}
        },
    title: {
              enabled: false,
              text: ''
            },
  });
};
function drawExportaciones(){
  Highcharts.chart('container1',{
    series: series.exportaciones,
    yAxis: {
              title: {
                enabled: true,
                text: 'Miles de USD'}
        },
    title: {
              text: 'Exportaciones'
            },
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    exporting: { enabled: false },
    credits: { enabled: false }
  });
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: series.exportaciones_var,
    exporting: { enabled: false },
    credits: { enabled: true,
              text: "Ministerio de Producción y Desarrollo",
              href: "http://www.produccion.gob.ar"},
    yAxis: {
            	title: {
                enabled: true,
                text: 'Variación anual [%]'}
        },
    title: {
              enabled: false,
              text: ''
            },
  });
};
function drawImportaciones(){
  Highcharts.chart('container1',{
    series: series.importaciones,
    yAxis: {
              title: {
                enabled: true,
                text: 'Miles de USD'}
        },
    title: {
              text: 'Importaciones'
            },
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    exporting: { enabled: false },
    credits: { enabled: false }
  });
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: series.importaciones_var,
    exporting: { enabled: false },
    credits: { enabled: true,
              text: "Ministerio de Producción y Desarrollo",
              href: "http://www.produccion.gob.ar"},
    yAxis: {
            	title: {
                enabled: true,
                text: 'Variación anual [%]'}
        },
    title: {
              enabled: false,
              text: ''
            },
  });
};
function drawSoja(){
  Highcharts.chart('container1',{
    series: series.precio_soja,
    yAxis: {
              title: {
                enabled: true,
                text: 'USD por Tn'}
        },
    title: {
              text: 'Precio de la Soja'
            },
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    exporting: { enabled: false },
    credits: { enabled: false }
  });
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: series.precio_soja_var,
    exporting: { enabled: false },
    credits: { enabled: true,
              text: "Ministerio de Producción y Desarrollo",
              href: "http://www.produccion.gob.ar"},
    yAxis: {
            	title: {
                enabled: true,
                text: 'Variación anual [%]'}
        },
    title: {
              enabled: false,
              text: ''
            },
  });
};
function drawConstruya(){
  Highcharts.chart('container1',{
    series: series.indice_construya,
    yAxis: {
              title: {
                enabled: true,
                text: 'Índice base Enero 2015 = 100'}
        },
    title: {
              text: 'Índice Construya'
            },
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    exporting: { enabled: false },
    credits: { enabled: false }
  });
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: series.indice_construya_var,
    exporting: { enabled: false },
    credits: { enabled: true,
              text: "Ministerio de Producción y Desarrollo",
              href: "http://www.produccion.gob.ar"},
    yAxis: {
            	title: {
                enabled: true,
                text: 'Variación anual [%]'}
        },
    title: {
              enabled: false,
              text: ''
            },
  });
};
function drawActividad(){
  Highcharts.chart('container1',{
    series: series.actividad,
    yAxis: {
              title: {
                enabled: true,
                text: 'Índice base 2004 = 100'}
        },
    title: {
              text: 'Actividad'
            },
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    exporting: { enabled: false },
    credits: { enabled: false }
  });
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: series.actividad_var,
    exporting: { enabled: false },
    credits: { enabled: true,
              text: "Ministerio de Producción y Desarrollo",
              href: "http://www.produccion.gob.ar"},
    yAxis: {
            	title: {
                enabled: true,
                text: 'Variación anual [%]'}
        },
    title: {
              enabled: false,
              text: ''
            },
  });
};
