function drawCharts(){
  Highcharts.chart('container2',{
    xAxis: {
            type: 'datetime'
        },
    series: serie1,
    exporting: { enabled: false }
  });
};
