var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental'
            });var format_PreciosPorDepartamento_1 = new ol.format.GeoJSON();
var features_PreciosPorDepartamento_1 = format_PreciosPorDepartamento_1.readFeatures(json_PreciosPorDepartamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreciosPorDepartamento_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PreciosPorDepartamento_1.addFeatures(features_PreciosPorDepartamento_1);var lyr_PreciosPorDepartamento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreciosPorDepartamento_1, 
                style: style_PreciosPorDepartamento_1,
    title: 'Precios Por Departamento <br />\
    <img src="styles/legend/PreciosPorDepartamento_1_0.png" /> 1525<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_1.png" /> 1525,67<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_2.png" /> 1580,58<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_3.png" /> 1665<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_4.png" /> 1700<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_5.png" /> 1841,2<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_6.png" /> 1850<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_7.png" /> 1928,33<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_8.png" /> 2055<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_9.png" /> 2122,835<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_10.png" /> 2487,86<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_11.png" /> 2513,64<br />\
    <img src="styles/legend/PreciosPorDepartamento_1_12.png" /> 2825<br />'
        });var format_MunicipiosTomadePrecios_2 = new ol.format.GeoJSON();
var features_MunicipiosTomadePrecios_2 = format_MunicipiosTomadePrecios_2.readFeatures(json_MunicipiosTomadePrecios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosTomadePrecios_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MunicipiosTomadePrecios_2.addFeatures(features_MunicipiosTomadePrecios_2);var lyr_MunicipiosTomadePrecios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosTomadePrecios_2, 
                style: style_MunicipiosTomadePrecios_2,
                title: '<img src="styles/legend/MunicipiosTomadePrecios_2.png" /> Municipios Toma de Precios'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_PreciosPorDepartamento_1.setVisible(true);lyr_MunicipiosTomadePrecios_2.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_PreciosPorDepartamento_1,lyr_MunicipiosTomadePrecios_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id_espacia': 'id_espacia', 'area_ofici': 'area_ofici', 'nombre_dep': 'nombre_dep', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'AREA  SEMB': 'AREA  SEMB', });
lyr_PreciosPorDepartamento_1.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'MES': 'MES', 'SEMANA': 'SEMANA', '$ Kg Panel': '$ Kg Panel', '$ Prom Año': '$ Prom Año', 'Año': 'Año', 'Prom_ Pais': 'Prom_ Pais', });
lyr_MunicipiosTomadePrecios_2.set('fieldAliases', {'Id': 'Id', 'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', });
lyr_LimiteDepartamental_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'id_espacia': 'TextEdit', 'area_ofici': 'TextEdit', 'nombre_dep': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'AREA  SEMB': 'TextEdit', });
lyr_PreciosPorDepartamento_1.set('fieldImages', {'nombre_dep': 'TextEdit', 'MES': 'TextEdit', 'SEMANA': 'TextEdit', '$ Kg Panel': 'TextEdit', '$ Prom Año': 'TextEdit', 'Año': 'TextEdit', 'Prom_ Pais': 'TextEdit', });
lyr_MunicipiosTomadePrecios_2.set('fieldImages', {'Id': 'TextEdit', 'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'OBJECTID': 'no label', 'id_espacia': 'no label', 'area_ofici': 'no label', 'nombre_dep': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', 'AREA  SEMB': 'no label', });
lyr_PreciosPorDepartamento_1.set('fieldLabels', {'nombre_dep': 'inline label', 'MES': 'inline label', 'SEMANA': 'inline label', '$ Kg Panel': 'inline label', '$ Prom Año': 'inline label', 'Año': 'inline label', 'Prom_ Pais': 'inline label', });
lyr_MunicipiosTomadePrecios_2.set('fieldLabels', {'Id': 'no label', 'DEPT': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_MunicipiosTomadePrecios_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});