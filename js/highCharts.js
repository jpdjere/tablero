function drawCharts(dataset, dataset_var, chartTitle, yAxis, yColumns){
  Highcharts.setOptions({
	lang: {
		months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	},
  chart: {
  }
});


  Highcharts.chart('chart1',{
    series: dataset,
    yAxis: {
              title: {
                enabled: true,
                text: yAxis
              }
        },
    title: {
              text: chartTitle
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
  Highcharts.chart('chart2',{
    xAxis: {
            type: 'datetime'
        },
    legend: {
            enabled: false
    },
    series: dataset_var,
    exporting: { enabled: false },
    credits: { enabled: false,
              text: "Ministerio de Producción y Desarrollo",
              href: false},
    yAxis: {
            	title: {
                enabled: true,
                text: yColumns}
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
