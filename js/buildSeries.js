function buildSeries(){
//RESERVAS
dataReservas = [{
    name: "Reservas",
    data: series.reservas,
    type: "area",
    valueDecimals: 2
}];
dataReservas_var = [{
    name: "Variación anual",
    data: series.reservas_var,
    type: "column",
    valueDecimals: 2
}];
//EXPORTACIONES
dataExportaciones = [{
    name: "Exportaciones",
    data: series.exportaciones,
    "type": "area",
    "valueDecimals": 2
}];
dataExportaciones_var = [{
    "name": "Variación anual",
    "data": series.exportaciones_var,
    "type": "column",
    "valueDecimals": 2
}];
//IMPORTACIONES
dataImportaciones = [{
    "name": "Importaciones",
    "data": series.importaciones,
    "type": "area",
    "valueDecimals": 2
}];
dataImportaciones_var = [{
    "name": "Variación anual",
    "data": series.importaciones_var,
    "type": "column",
    "valueDecimals": 2
}];
//PRECIO DE LA SOJA
dataSoja = [{
    "name": "Precio de la Soja",
    "data": series.precio_soja,
    "type": "area",
    "valueDecimals": 2
}];
dataSoja_var = [{
    "name": "Variación anual",
    "data": series.precio_soja_var,
    "type": "column",
    "valueDecimals": 2
}];
//INDICE CONSTRUYA
dataConstruya = [{
    "name": "Importaciones",
    "data": series.indice_construya,
    "type": "area",
    "valueDecimals": 2
}];
dataConstruya_var = [{
    "name": "Variación anual",
    "data": series.indice_construya_var,
    "type": "column",
    "valueDecimals": 2
}];
//ACTIVIDAD
dataActividad = [{
    name: "Actividad",
    data: series.actividad,
    type: "area",
    valueDecimals: 2
},
{
    name: "Actividad Desestacionalizada",
    data: series.actividad_desest,
    type: "line",
    lineWidth: 1,
    marker: false,
    valueDecimals: 2
}

];
dataReservas_var = [{
    name: "Variación anual",
    data: series.reservas_var,
    type: "column",
    valueDecimals: 2
}];
}
