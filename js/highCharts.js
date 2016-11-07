function drawCharts(){
  Highcharts.chart('container1',{
    xAxis: {
            type: 'datetime'
        },
    plotOptions: {
            series: {
                allowPointSelect: false
            }
        },
    series: datasets,
    exporting: { enabled: false },
    credits: { enabled: false },
    yAxis: {
            	title: {
                enabled: true,
                text: 'Miles de USD'}
        },
    title: {
              text: 'RESERVAS'
            },
  });
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
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
