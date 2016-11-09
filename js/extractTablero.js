var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1VSGksDN0dnCGHCVdozWm4JwCR8YbI0jYmHmqEynmLhM/pubhtml'; //Funciona

var columns = [
    { head: 'Indicador', cl: 'title',
      html: function(row) { return r.title; } },
    { head: 'Year', cl: 'center',
      html: function(row) { return r.year; } },
    { head: 'Length', cl: 'center',
      html: function(row) { return r.length; } },
    { head: 'Budget', cl: 'num',
      html: function(row) { return r.budget; } },
    { head: 'Rating', cl: 'num',
      html: function(row) { return r.rating; } }
];

function renderSpreadsheetData() {
  Tabletop.init( { key: public_spreadsheet_url,
                  debug:true,
                  callback: draw,
                  simpleSheet: true } )
}

function draw(dataTablero, tabletop) {
	// draw chart
	console.log("Data Tablero:");
	console.log(dataTablero);
	// render the table(s)

	
	var tr = d3.select('#sectorExterno')
	  .data(dataTablero).enter();

	tr.append('td').html(function(d) { return d.indicador; });
	tr.append('td').html(function(d) { return d.valor; });
	tr.append('td').html(function(d) { return d.variacion_ia; });
	tr.append('td').html(function(d) { return d.val_2016; });
	tr.append('td').html(function(d) { return d.var_16_15; });

}

renderSpreadsheetData();