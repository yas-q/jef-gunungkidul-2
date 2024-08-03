var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_IndeksEkonomi_1 = new ol.format.GeoJSON();
var features_IndeksEkonomi_1 = format_IndeksEkonomi_1.readFeatures(json_IndeksEkonomi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndeksEkonomi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksEkonomi_1.addFeatures(features_IndeksEkonomi_1);
var lyr_IndeksEkonomi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndeksEkonomi_1, 
                style: style_IndeksEkonomi_1,
                popuplayertitle: "Indeks Ekonomi",
                interactive: true,
    title: 'Indeks Ekonomi<br />\
    <img src="styles/legend/IndeksEkonomi_1_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/IndeksEkonomi_1_1.png" /> 0,2 - 0,4<br />\
    <img src="styles/legend/IndeksEkonomi_1_2.png" /> 0,4 - 0,6<br />\
    <img src="styles/legend/IndeksEkonomi_1_3.png" /> 0,6 - 0,8<br />\
    <img src="styles/legend/IndeksEkonomi_1_4.png" /> 0,8 - 1<br />'
        });
var format_IndeksKesehatan_2 = new ol.format.GeoJSON();
var features_IndeksKesehatan_2 = format_IndeksKesehatan_2.readFeatures(json_IndeksKesehatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndeksKesehatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksKesehatan_2.addFeatures(features_IndeksKesehatan_2);
var lyr_IndeksKesehatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndeksKesehatan_2, 
                style: style_IndeksKesehatan_2,
                popuplayertitle: "Indeks Kesehatan",
                interactive: true,
    title: 'Indeks Kesehatan<br />\
    <img src="styles/legend/IndeksKesehatan_2_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/IndeksKesehatan_2_1.png" /> 0,2 - 0,4<br />\
    <img src="styles/legend/IndeksKesehatan_2_2.png" /> 0,4 - 0,6<br />\
    <img src="styles/legend/IndeksKesehatan_2_3.png" /> 0,6 - 0,8<br />\
    <img src="styles/legend/IndeksKesehatan_2_4.png" /> 0,8 - 1<br />'
        });
var format_IndeksPendidikan_3 = new ol.format.GeoJSON();
var features_IndeksPendidikan_3 = format_IndeksPendidikan_3.readFeatures(json_IndeksPendidikan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndeksPendidikan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksPendidikan_3.addFeatures(features_IndeksPendidikan_3);
var lyr_IndeksPendidikan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndeksPendidikan_3, 
                style: style_IndeksPendidikan_3,
                popuplayertitle: "Indeks Pendidikan",
                interactive: true,
    title: 'Indeks Pendidikan<br />\
    <img src="styles/legend/IndeksPendidikan_3_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/IndeksPendidikan_3_1.png" /> 0,2 - 0,4<br />\
    <img src="styles/legend/IndeksPendidikan_3_2.png" /> 0,4 - 0,6<br />\
    <img src="styles/legend/IndeksPendidikan_3_3.png" /> 0,6 - 0,8<br />\
    <img src="styles/legend/IndeksPendidikan_3_4.png" /> 0,8 - 1<br />'
        });
var format_Klaster_4 = new ol.format.GeoJSON();
var features_Klaster_4 = format_Klaster_4.readFeatures(json_Klaster_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klaster_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klaster_4.addFeatures(features_Klaster_4);
var lyr_Klaster_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klaster_4, 
                style: style_Klaster_4,
                popuplayertitle: "Klaster",
                interactive: true,
    title: 'Klaster<br />\
    <img src="styles/legend/Klaster_4_0.png" /> 1, Potensi Sangat Tinggi<br />\
    <img src="styles/legend/Klaster_4_1.png" /> 2, Potensi Tinggi<br />\
    <img src="styles/legend/Klaster_4_2.png" /> 3, Potensi Rendah<br />\
    <img src="styles/legend/Klaster_4_3.png" /> 4, Potensi Sangat Rendah<br />'
        });
var format_Kecamatan_GunungKidul_5 = new ol.format.GeoJSON();
var features_Kecamatan_GunungKidul_5 = format_Kecamatan_GunungKidul_5.readFeatures(json_Kecamatan_GunungKidul_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_GunungKidul_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_GunungKidul_5.addFeatures(features_Kecamatan_GunungKidul_5);
var lyr_Kecamatan_GunungKidul_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_GunungKidul_5, 
                style: style_Kecamatan_GunungKidul_5,
                popuplayertitle: "Kecamatan_GunungKidul",
                interactive: false,
                title: '<img src="styles/legend/Kecamatan_GunungKidul_5.png" /> Kecamatan_GunungKidul'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_IndeksEkonomi_1.setVisible(true);lyr_IndeksKesehatan_2.setVisible(true);lyr_IndeksPendidikan_3.setVisible(true);lyr_Klaster_4.setVisible(true);lyr_Kecamatan_GunungKidul_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IndeksEkonomi_1,lyr_IndeksKesehatan_2,lyr_IndeksPendidikan_3,lyr_Klaster_4,lyr_Kecamatan_GunungKidul_5];
lyr_IndeksEkonomi_1.set('fieldAliases', {'Desa': 'Desa', 'Kode Desa': 'Kode Desa', 'Kecamatan': 'Kecamatan', 'Kode Kecam': 'Kode Kecam', 'Aktivitas Ekonomi': 'Aktivitas Ekonomi', 'Keterbangunan Wilayah': 'Keterbangunan Wilayah', 'Urbanisasi': 'Urbanisasi', 'Indeks Ekonomi': 'Indeks Ekonomi', 'Klaster': 'Klaster', });
lyr_IndeksKesehatan_2.set('fieldAliases', {'Desa': 'Desa', 'Kode Desa': 'Kode Desa', 'Kecamatan': 'Kecamatan', 'Kode Kecam': 'Kode Kecam', 'Aksesibilitas RS': 'Aksesibilitas RS', 'Aksesibilitas Puskesmas': 'Aksesibilitas Puskesmas', 'Aksesibilitas Dokter Umum dan Klinik': 'Aksesibilitas Dokter Umum dan Klinik', 'Aksesibilitas Dokter Gigi': 'Aksesibilitas Dokter Gigi', 'Aksesibilitas Apotek': 'Aksesibilitas Apotek', 'Indeks Kesehatan': 'Indeks Kesehatan', 'Klaster': 'Klaster', });
lyr_IndeksPendidikan_3.set('fieldAliases', {'Desa': 'Desa', 'Kode Desa': 'Kode Desa', 'Kecamatan': 'Kecamatan', 'Kode Kecam': 'Kode Kecam', 'Keterjangakauan SD': 'Keterjangakauan SD', 'Keterjangakauan SMP': 'Keterjangakauan SMP', 'Keterjangakauan SMA': 'Keterjangakauan SMA', 'Guru SD per Penduduk': 'Guru SD per Penduduk', 'Guru SMP per Penduduk': 'Guru SMP per Penduduk', 'Guru SMA per Penduduk': 'Guru SMA per Penduduk', 'Indeks Pendidikan': 'Indeks Pendidikan', 'Klaster': 'Klaster', });
lyr_Klaster_4.set('fieldAliases', {'Desa': 'Desa', 'Kode Desa': 'Kode Desa', 'Kecamatan': 'Kecamatan', 'Kode Kecam': 'Kode Kecam', 'Indeks Pendidikan': 'Indeks Pendidikan', 'Indeks Kesehatan': 'Indeks Kesehatan', 'Indeks Ekonomi': 'Indeks Ekonomi', 'Populasi': 'Populasi', 'Klaster': 'Klaster', });
lyr_Kecamatan_GunungKidul_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_IndeksEkonomi_1.set('fieldImages', {'Desa': 'TextEdit', 'Kode Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode Kecam': 'TextEdit', 'Aktivitas Ekonomi': 'TextEdit', 'Keterbangunan Wilayah': 'TextEdit', 'Urbanisasi': 'TextEdit', 'Indeks Ekonomi': 'TextEdit', 'Klaster': 'TextEdit', });
lyr_IndeksKesehatan_2.set('fieldImages', {'Desa': 'TextEdit', 'Kode Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode Kecam': 'TextEdit', 'Aksesibilitas RS': 'TextEdit', 'Aksesibilitas Puskesmas': 'TextEdit', 'Aksesibilitas Dokter Umum dan Klinik': 'TextEdit', 'Aksesibilitas Dokter Gigi': 'TextEdit', 'Aksesibilitas Apotek': 'TextEdit', 'Indeks Kesehatan': 'TextEdit', 'Klaster': 'TextEdit', });
lyr_IndeksPendidikan_3.set('fieldImages', {'Desa': 'TextEdit', 'Kode Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode Kecam': 'TextEdit', 'Keterjangakauan SD': 'TextEdit', 'Keterjangakauan SMP': 'TextEdit', 'Keterjangakauan SMA': 'TextEdit', 'Guru SD per Penduduk': 'TextEdit', 'Guru SMP per Penduduk': 'TextEdit', 'Guru SMA per Penduduk': 'TextEdit', 'Indeks Pendidikan': 'TextEdit', 'Klaster': 'TextEdit', });
lyr_Klaster_4.set('fieldImages', {'Desa': 'TextEdit', 'Kode Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode Kecam': 'TextEdit', 'Indeks Pendidikan': 'TextEdit', 'Indeks Kesehatan': 'TextEdit', 'Indeks Ekonomi': 'TextEdit', 'Populasi': 'TextEdit', 'Klaster': 'TextEdit', });
lyr_Kecamatan_GunungKidul_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_IndeksEkonomi_1.set('fieldLabels', {'Desa': 'inline label - visible with data', 'Kode Desa': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Kode Kecam': 'inline label - visible with data', 'Aktivitas Ekonomi': 'inline label - visible with data', 'Keterbangunan Wilayah': 'inline label - visible with data', 'Urbanisasi': 'inline label - visible with data', 'Indeks Ekonomi': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', });
lyr_IndeksKesehatan_2.set('fieldLabels', {'Desa': 'inline label - visible with data', 'Kode Desa': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Kode Kecam': 'inline label - visible with data', 'Aksesibilitas RS': 'inline label - visible with data', 'Aksesibilitas Puskesmas': 'inline label - visible with data', 'Aksesibilitas Dokter Umum dan Klinik': 'inline label - visible with data', 'Aksesibilitas Dokter Gigi': 'inline label - visible with data', 'Aksesibilitas Apotek': 'inline label - visible with data', 'Indeks Kesehatan': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', });
lyr_IndeksPendidikan_3.set('fieldLabels', {'Desa': 'inline label - visible with data', 'Kode Desa': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Kode Kecam': 'inline label - visible with data', 'Keterjangakauan SD': 'inline label - visible with data', 'Keterjangakauan SMP': 'inline label - visible with data', 'Keterjangakauan SMA': 'inline label - visible with data', 'Guru SD per Penduduk': 'inline label - visible with data', 'Guru SMP per Penduduk': 'inline label - visible with data', 'Guru SMA per Penduduk': 'inline label - visible with data', 'Indeks Pendidikan': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', });
lyr_Klaster_4.set('fieldLabels', {'Desa': 'inline label - visible with data', 'Kode Desa': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Kode Kecam': 'inline label - visible with data', 'Indeks Pendidikan': 'inline label - visible with data', 'Indeks Kesehatan': 'inline label - visible with data', 'Indeks Ekonomi': 'inline label - visible with data', 'Populasi': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', });
lyr_Kecamatan_GunungKidul_5.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADM3_EN': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'ADM3_REF': 'hidden field', 'ADM3ALT1EN': 'hidden field', 'ADM3ALT2EN': 'hidden field', 'ADM2_EN': 'hidden field', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', });
lyr_Kecamatan_GunungKidul_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});