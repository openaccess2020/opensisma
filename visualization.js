var map_ae26379126cd4ce79aea9d0f395ec09f = L.map(
                "map_ae26379126cd4ce79aea9d0f395ec09f",
                {
                    center: [44.75, 11.2],
                    crs: L.CRS.EPSG3857,
                    zoom: 10.25,
                    zoomControl: true,
                    preferCanvas: true,
                }
            );
            L.control.scale().addTo(map_ae26379126cd4ce79aea9d0f395ec09f);



            

        
    
            var tile_layer_96014947043e4b0092dc3d83ee621d1d = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_ae26379126cd4ce79aea9d0f395ec09f);
        
    
            L.control.fullscreen(
                {"forceSeparateButton": true, "position": "topleft", "title": "Expand me", "titleCancel": "Exit fullscreen"}
            ).addTo(map_ae26379126cd4ce79aea9d0f395ec09f);
        
    
            var choropleth_51a0ab0b553946e88cc89d15a5d0e903 = L.featureGroup(
                {}
            ).addTo(map_ae26379126cd4ce79aea9d0f395ec09f);

        
    
        function geo_json_dc64d985f99647e7b35676bc82a64cc7_styler(feature) {
            switch(feature.properties.PRO_COM) {
                case 35032: case 36012: case 36037: 
                    return {"color": "black", "fillColor": "#fd8d3c", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                case 36004: case 37024: case 38016: 
                    return {"color": "black", "fillColor": "#feb24c", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                case 36009: 
                    return {"color": "black", "fillColor": "#bd0026", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                case 36010: case 36022: case 36028: 
                    return {"color": "black", "fillColor": "#f03b20", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                case 38022: 
                    return {"color": "black", "fillColor": "#ffffb2", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fed976", "fillOpacity": 0.6, "opacity": 1, "weight": 1};
            }
        }
        function geo_json_dc64d985f99647e7b35676bc82a64cc7_highlighter(feature) {
            switch(feature.properties.PRO_COM) {
                default:
                    return {"fillOpacity": 0.8, "weight": 3};
            }
        }

////////// GRAFICO GENERALE /////////////////////////////

        
const datoa = myJSON
    .map(itm => ({
        x: (itm['LAVORI_NON_INIZIATI'] + itm['LAVORI_IN_CORSO']) / itm['SCUOLE_TOTALI'],
        y: itm['PUNTEGGIO_SCUOLE_STATALI_1516']
    }))
    .sort((a, b) => (a.x === b.x) ? a.y - b.y : a.x - b.x);

    datoa.splice(-1,1)

const datoa2 = myJSON
    .map(itm => ({
        x: (itm['LAVORI_NON_INIZIATI'] + itm['LAVORI_IN_CORSO']) / itm['SCUOLE_TOTALI'],
        y: itm['PUNTEGGIO_SCUOLE_STATALI_1617']
    }))
    .sort((a, b) => (a.x === b.x) ? a.y - b.y : a.x - b.x);

    datoa.splice(-1,1)



    const clean_data = datoa
    .filter(({ x, y }) => {
      return (
        typeof x === typeof y &&  // filter out one string & one number
        !isNaN(x) &&              // filter out `NaN`
        !isNaN(y) &&
        Math.abs(x) !== Infinity && 
        Math.abs(y) !== Infinity
      );
    })
    .map(({ x, y }) => {
      return [x, y];             // we need a list of [[x1, y1], [x2, y2], ...]
    });
    clean_data.pop()

        const clean_data2 = datoa2
    .filter(({ x, y }) => {
      return (
        typeof x === typeof y &&  // filter out one string & one number
        !isNaN(x) &&              // filter out `NaN`
        !isNaN(y) &&
        Math.abs(x) !== Infinity && 
        Math.abs(y) !== Infinity
      );
    })
    .map(({ x, y }) => {
      return [x, y];             // we need a list of [[x1, y1], [x2, y2], ...]
    });
    clean_data2.pop()



    const my_regression = regression.linear(
  clean_data
);

    const my_regression2 = regression.linear(
  clean_data2
);


    const useful_points = my_regression.points.map(([x, y]) => {
    return {x, y};
    //y;    
    //{x, y}
    // or x&y for a 'scatterplot'
})

        const useful_points2 = my_regression2.points.map(([x, y]) => {
    return {x, y};
    //y;    
    //{x, y}
    // or x&y for a 'scatterplot'
})

$("a[href='#pills-contact']").on('shown.bs.tab', function(e) {
    if($.trim($("#pulsante2").html())=='') {
    $("#pulsante2").append('<div id="pulsante2"> <div class="row" id="pulsantino"><div class="col-lg-12"><form><label class="radio-inline btn btn-danger"><input type="radio" id="generale2" value="generale2" name="radiored2" autocomplete="off" checked> Anno 1516 </label> <label class="radio-inline btn btn-danger"><input type="radio" id="dettaglio2" value="dettaglio2" name="radiored2" autocomplete="off"> Anno 1617 </label></form></div>')}

      


var ctx = document.getElementById('Chartline');
$('input[type=radio][name=radiored2]').change(function() {
                                                            switch ($(this).val()) {
                                                                case 'generale2':
                                                             if (window.mixedChart != undefined)
{
    window.mixedChart.destroy();
}
window.mixedChart = new Chart(ctx);

var mixedChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: 'ok',
    datasets: [{
      type: 'line',
      label: 'Predicted',
      data: useful_points,
      fill: false,
      backgroundColor: "rgba(218,83,79, .7)",
      borderColor: "rgba(218,83,79, .7)",
      pointRadius: 0
    }, {
      type: 'bubble',
      label: 'Real',
      data: datoa,
      backgroundColor: "rgba(76,78,80, .7)",
      borderColor: "transparent"
    }]
  },
  options: {

    scales: {
      xAxes: [{
        type: 'linear',
         
        //position: 'bottom',
        //ticks: {
            //min: 0,
          //autoSkip: true,
          beginAtZero: true
        //}
      
        
      }],
      yAxes: [{
        //type: 'linear',
        //position: 'bottom',
        ticks: {

            beginAtZero: true
          //autoSkip: true,
          //beginAtZero: true
        }
      
        
      }],

    }
  }
});

                                                                    break
                                                                case 'dettaglio2':
                                                                

var mixedChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: 'ok',
    datasets: [{
      type: 'line',
      label: 'Predicted',
      data: useful_points2,
      fill: false,
      backgroundColor: "rgba(218,83,79, .7)",
      borderColor: "rgba(218,83,79, .7)",
      pointRadius: 0
    }, {
      type: 'bubble',
      label: 'Real',
      data: datoa2,
      backgroundColor: "rgba(76,78,80, .7)",
      borderColor: "transparent"
    }]
  },
  options: {
    scales: {
      xAxes: [{
        type: 'linear',
         
        //position: 'bottom',
        //ticks: {
            //min: 0,
          //autoSkip: true,
          beginAtZero: true
        //}
      
        
      }],
      yAxes: [{
        //type: 'linear',
        //position: 'bottom',
        ticks: {

            beginAtZero: true
          //autoSkip: true,
          //beginAtZero: true
        }
      
        
      }],

    }
  }
});
break
                                                                

                                                                    
                                                            }
                                                        });
});

$('#chartContainer').append('<canvas id="Chartedu"><canvas>')
$('#descrizione').append('<p>' + 'ok'+ my_regression.r2 + '</p>')
$('#descrizione').append('<p>' + 'ok'+ my_regression.points + '</p>')

//////////////// FINE GRAFICO GENERALE //////////////


        function geo_json_dc64d985f99647e7b35676bc82a64cc7_onEachFeature(feature, layer) {


            
            layer.on({
                mouseout: function(e) {
                    geo_json_dc64d985f99647e7b35676bc82a64cc7.resetStyle(e.target);
                },
                mouseover: function(e) {
                    e.target.setStyle(geo_json_dc64d985f99647e7b35676bc82a64cc7_highlighter(e.target.feature));
                },
                click: function(e) {
                    map_ae26379126cd4ce79aea9d0f395ec09f.fitBounds(e.target.getBounds());

                    ///////// GRAFICO PROCESSI ///////////////

// qua filtra i valori che ci servono //
const findValues = (key) => {
  key = key.toUpperCase();
  return Object.keys(ProcessiJSON[0]).filter(item => item.indexOf(key) !=-1)

  //return Object.keys(ProcessiJSON[1]).filter(item => item.indexOf(key) !=-1)
}  

//creo un array vuoto
var arr = []
var arr2 = []
var arr3 = []
var arr4 = []
var arr5 = []
var arr6 = []
var arr7 = []
var arr8 = []
var arr9 = []
var arr10 = []
var arr11 = []


//creo una variabile con i nomi delle aree 
let clicked = e.target.feature.properties.NOME_COM.toUpperCase();
//questa invece trova i valori che combaciano
let match = findValues(clicked)
// per ogni match inseriamo la object property nell'array vuoto ( quindi ora sono solo numeri)
match.forEach(key => arr.push(ProcessiJSON[0][key]))
match.forEach(key => arr2.push(ProcessiJSON[1][key]))
match.forEach(key => arr3.push(ProcessiJSON[2][key]))
match.forEach(key => arr4.push(ProcessiJSON[3][key]))
match.forEach(key => arr5.push(ProcessiJSON[4][key]))
match.forEach(key => arr6.push(ProcessiJSON[5][key]))
match.forEach(key => arr7.push(ProcessiJSON[6][key]))
match.forEach(key => arr8.push(ProcessiJSON[7][key]))
match.forEach(key => arr9.push(ProcessiJSON[8][key]))
match.forEach(key => arr10.push(ProcessiJSON[9][key]))
match.forEach(key => arr11.push(ProcessiJSON[10][key]))


//
var array_pop_2010 = arr.filter(function(x) {
    return x > 100;
});
var array_pop_2011 = arr2.filter(function(x) {
    return x > 100;
});
var array_pop_2012 = arr3.filter(function(x) {
    return x > 100;
});
var array_pop_2013 = arr4.filter(function(x) {
    return x > 100;
});
var array_pop_2014 = arr5.filter(function(x) {
    return x > 100;
});
var array_pop_2015 = arr6.filter(function(x) {
    return x > 100;
});
var array_pop_2016 = arr7.filter(function(x) {
    return x > 100;
});
var array_pop_2017 = arr8.filter(function(x) {
    return x > 100;
});
var array_pop_2018 = arr9.filter(function(x) {
    return x > 100;
});
var array_pop_2019 = arr10.filter(function(x) {
    return x > 100;
});
var array_pop_2020 = arr11.filter(function(x) {
    return x > 100;
});

var yearArrays = [array_pop_2010, array_pop_2011, array_pop_2012, array_pop_2013, array_pop_2014, array_pop_2015, array_pop_2016, array_pop_2017, array_pop_2018, array_pop_2019, array_pop_2020]
// filtro array così da avere solo numeri minori di 100 e togliere la popolazione
var array2010 = arr.filter(function(x) {
    return x < 100;
});

var array2011 = arr2.filter(function(x) {
    return x < 100;
});
var array2012 = arr3.filter(function(x) {
    return x < 100;
});
var array2013 = arr4.filter(function(x) {
    return x < 100;
});
var array2014 = arr5.filter(function(x) {
    return x < 100;
});
var array2015 = arr6.filter(function(x) {
    return x < 100;
});
var array2016 = arr7.filter(function(x) {
    return x < 100;
});
var array2017 = arr8.filter(function(x) {
    return x < 100;
});
var array2018 = arr9.filter(function(x) {
    return x < 100;
});
var array2019 = arr10.filter(function(x) {
    return x < 100;
});
var array2020 = arr11.filter(function(x) {
    return x < 100;
});
//variabile grafico
var ctx2 = document.getElementById('Chartprocessi');


// se chartprocessi è vuoto
if($.trim($("#Chartprocessi").html())=='') {
    $("#scrivoqua").html('')
// inserisco nel paragrafo con id "scrivo qua" l'array (così controlliamo)
   // $("#scrivoqua").append(array2010, array2011)
   $("#scrivoqua").append('<p>' + 'Popolazione impattata progetti OpenCoesione 2010: ' + '</p>' + array_pop_2010 +
    '<p>' + 'Popolazione impattata progetti OpenCoesione 2011: ' + '</p>' + array_pop_2011 + 
    '<p>' + 'Popolazione impattata progetti OpenCoesione 2012: ' + '</p>' + array_pop_2012 +'<p>' + 'Popolazione impattata progetti OpenCoesione 2013: ' + '</p>' + array_pop_2013 + '<p>' + 'Popolazione impattata progetti OpenCoesione 2014: ' + '</p>'+ array_pop_2014 + '<p>' + 'Popolazione impattata progetti OpenCoesione 2015: ' + '</p>' + array_pop_2015 + '<p>' + 'Popolazione impattata progetti OpenCoesione 2016: ' + '</p>' + array_pop_2016 + '<p>' + 'Popolazione impattata progetti OpenCoesione 2017: ' + '</p>'+ array_pop_2017 + '<p>' + 'Popolazione impattata progetti OpenCoesione 2018: ' + '</p>' + array_pop_2018 + '<p>' + 'Popolazione impattata progetti OpenCoesione 2019: ' + '</p>' +array_pop_2019 + '<p>' + 'Popolazione impattata progetti OpenCoesione 2020: ' + '</p>'+ array_pop_2020)

// faccio partire il grafico
var grafoprocessi = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Processi', 'Startup', 'OpenCoesione'],
        datasets: [{
            label: '2010',
            backgroundColor: 'rgb(255, 230, 230)',
            borderColor: 'rgb(255, 230, 230)',
            data: array2010
        },
        {label:'2011',
        backgroundColor: 'rgb(255, 204, 204)',
            borderColor: 'rgb(255, 204, 204)',
            data: array2011
        },
        {label:'2012',
        backgroundColor: 'rgb(255, 179, 179)',
            borderColor: 'rgb(255, 179, 179)',
            data: array2012
        },
        {label:'2013',
        backgroundColor: 'rgb(255, 102, 102)',
            borderColor: 'rgb(255, 102, 102)',
            data: array2013
        },
        {label:'2014',
        backgroundColor: 'rgb(255, 26, 26)',
            borderColor: 'rgb(255, 26, 26)',
            data: array2014
        },
        {label:'2015',
        backgroundColor: 'rgb(204, 0, 0)',
            borderColor: 'rgb(204, 0, 0)',
            data: array2015
        },
        {label:'2016',
        backgroundColor: 'rgb(153, 0, 0)',
            borderColor: 'rgb(153, 0, 0)',
            data: array2016
        },
        {label:'2017',
        backgroundColor: 'rgb(153, 0, 51)',
            borderColor: 'rgb(153, 0, 51)',
            data: array2017
        },
        {label:'2018',
        backgroundColor: 'rgb(230, 0, 76)',
            borderColor: 'rgb(230, 0, 76)',
            data: array2018
        },
        {label:'2019',
        backgroundColor: 'rgb(255, 26, 102)',
            borderColor: 'rgb(255, 26, 102)',
            data: array2019
        },
        {label:'2020',
        backgroundColor: 'rgb(255, 128, 170)',
            borderColor: 'rgb(255, 128, 170)',
            data: array2020
        }]
    },

    // Configuration options go here
    options: { title: {
            display: true,
            text: 'Custom Chart Title'
        }}
});
// altrimenti

} else {
    // svuoto chartprocessi e lo ripopolo
    $('#scrivoqua').html('')
    $("#Chartprocessi").html('')
    var grafoprocessi = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Processi', 'Startup', 'OpenCoesione'],
        datasets: [{
            label: '2010',
            backgroundColor: 'rgb(255, 230, 230)',
            borderColor: 'rgb(255, 230, 230)',
            data: array2010
        },
        {label:'2011',
        backgroundColor: 'rgb(255, 204, 204)',
            borderColor: 'rgb(255, 204, 204)',
            data: array2011
        },
        {label:'2012',
        backgroundColor: 'rgb(255, 179, 179)',
            borderColor: 'rgb(255, 179, 179)',
            data: array2012
        },
        {label:'2013',
        backgroundColor: 'rgb(255, 102, 102)',
            borderColor: 'rgb(255, 102, 102)',
            data: array2013
        },
        {label:'2014',
        backgroundColor: 'rgb(255, 26, 26)',
            borderColor: 'rgb(255, 26, 26)',
            data: array2014
        },
        {label:'2015',
        backgroundColor: 'rgb(204, 0, 0)',
            borderColor: 'rgb(204, 0, 0)',
            data: array2015
        },
        {label:'2016',
        backgroundColor: 'rgb(153, 0, 0)',
            borderColor: 'rgb(153, 0, 0)',
            data: array2016
        },
        {label:'2017',
        backgroundColor: 'rgb(153, 0, 51)',
            borderColor: 'rgb(153, 0, 51)',
            data: array2017
        },
        {label:'2018',
        backgroundColor: 'rgb(230, 0, 76)',
            borderColor: 'rgb(230, 0, 76)',
            data: array2018
        },
        {label:'2019',
        backgroundColor: 'rgb(255, 26, 102)',
            borderColor: 'rgb(255, 26, 102)',
            data: array2019
        },
        {label:'2020',
        backgroundColor: 'rgb(255, 128, 170)',
            borderColor: 'rgb(255, 128, 170)',
            data: array2020
        }]
    },


    // Configuration options go here
    options: { title: {
            display: true,
            text: 'Custom Chart Title'
        }}
});
// questo sempre per check 
//$("#scrivoqua").append(array2010, array2011)
$("#scrivoqua").append(array_pop_2010, array_pop_2011, array_pop_2012, array_pop_2013, array_pop_2014, array_pop_2015, array_pop_2016, array_pop_2017, array_pop_2018, array_pop_2019, array_pop_2020)
}


                    /// FINEPROCESSI
                    /// INIZIO EDU
                   
                    
                
                 myJSON.forEach(function(arrayItem) {
                                            if (arrayItem["COMUNE"] == e.target.feature.properties.NOME_COM.toUpperCase()) {
                                                    
                                                    $('.lead').html('');
                                                    $('#togliere').remove()
                                                    $('.lead').html('Comune of ' + arrayItem.COMUNE + '<br> Damage entity: ' + arrayItem.MCS_DANNO  +  ' <br>Total number of works: '  + arrayItem['LAVORI_TOTALI'] );
                                                    $('#pulsante').html('')
                                                    $('#pulsante').append('<div id="emptyred"><span style="opacity:0;">FMVPAFSB</span></div>')
                                                    $('#pulsante').append('<div class="row" id="redditiButton"><div class="col-lg-12"><form><label class="radio-inline btn btn-danger"><input type="radio" id="generale" value="generale" name="radiored" autocomplete="off" checked> Lavori per tipo </label><label class="radio-inline btn btn-danger"><input type="radio" id="dettaglio" value="dettaglio" name="radiored" autocomplete="off"> Certificati </label><label class="radio-inline btn btn-danger"><input type="radio" id="grafico3" value="grafico3" name="radiored" autocomplete="off"> Numero lavori e danno</label><label class="radio-inline btn btn-danger"><input type="radio" id="punteggi" value="punteggi" name="radiored" autocomplete="off"> Punteggio scuole Statali/Paritarie </label></form></div>')



                                                    var datiedu = {
                                                            "labels": ['Lavori non terminati', 'Lavori in corso', 'Lavori terminati'],
                                                            "datasets": [{
                                                            label: 'Numero totale dei lavori',
                                                            data: [arrayItem['LAVORI_NON_INIZIATI'], arrayItem['LAVORI_IN_CORSO'], arrayItem['LAVORI_TERMINATI']],
                                                            backgroundColor: ['#D9534F', '#B83536', '#97111F'],
                                                             borderWidth: 1}]
                                                        };



                                                        var datiedu2 = {


                                                            "labels": ['Numero di scuole totali', 'Certificati di agibilità e abilità mancanti', 'Documenti valutazione rischio mancanti', 'Piano emergenza mancante', 'Vincoli paesaggio', 'Edificio vetusto', 'Progettazione antisismica mancante', 'Vincoli idrogeologici'],
                                                            "datasets": [{
                                                            label: 'Total',
                                                            data: [arrayItem['SCUOLE_TOTALI'], arrayItem['CERTIFICATOAGIBILITAABITABILITA_ASSENTE'], arrayItem['DOCUMENTOVALUTAZIONERISCHIO_ASSENTE'], arrayItem['PIANOEMERGENZA_ASSENTE'], arrayItem['VINCOLIPAESAGGIO'],  arrayItem['EDIFICIOVETUSTO'], arrayItem['PROGETTAZIONEANTISISMICA_ASSENTE'], arrayItem['VINCOLIIDROGEOLOGICI']],
                                                            backgroundColor: ['#D9534F', '#B83536', '#97111F', '#770007', '#590000', '#FFB9AD', '#D45B14', '#BC827C'],
                                                             borderWidth: 1}]
                                                        };

                                                        var datigenerici = {
                                                            "labels": ['Total works', 'Damage entity'],
                                                            "datasets": [{
                                                            label: ['Total'],
                                                            data: [arrayItem['LAVORI_TOTALI'], arrayItem['MCS_DANNO']],
                                                            backgroundColor: ['#D9534F', '#B83536', '#97111F'],
                                                             borderWidth: 1}]
                                                        };
                                                        
                                                        var daticonfr= {
                                                        "labels": ['SCUOLE PUBBLICHE 2015-2016', 'SCUOLE PARITARIE 2015-2016', 'SCUOLE PUBBLICHE 2016-2017', 'SCUOLE PARITARIE 2016-2017'],
                                                        "datasets": [{
                                                        label: 'Score',
                                                        data: [arrayItem['PUNTEGGIO_SCUOLE_STATALI_1516'], arrayItem['PUNTEGGIO_SCUOLE_PARITARIE_1516'], arrayItem['PUNTEGGIO_SCUOLE_STATALI_1617'], arrayItem['PUNTEGGIO_SCUOLE_PARITARIE_1617']],
                                                        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 51, 95)', 'rgb(255, 0, 55)'],
                                                        borderWidth: 1}]
                                                        };


                                                    
                                   function grafo(dati, opzioni) {
                                                            var grafobase = document.getElementById('Chartedu').getContext('2d');
                                                            new Chart(grafobase, {
                                                                type: 'doughnut',
                                                                data: dati,
                                                                options: opzioni

                                                            });
                                                        };

                                    grafo(datiedu);
                                              
                                  
                                    

                                    $('input[type=radio][name=radiored]').change(function() {
                                                            switch ($(this).val()) {
                                                                case 'generale':
                                                                    $('#Chartedu').remove();
                                                                    $('#chartContainer').append('<canvas id="Chartedu"><canvas>');
                                                                    grafo(datiedu);
                                                                    break
                                                                case 'dettaglio':
                                                                    $('#Chartedu').remove();
                                                                    $('#chartContainer').append('<canvas id="Chartedu"><canvas>');
                                                                    grafo(datiedu2)
                                                                    break
                                                                case 'grafico3':
                                                                    $('#Chartedu').remove();
                                                                    $('#chartContainer').append('<canvas id="Chartedu"><canvas>');
                                                                    grafo2(datigenerici)
                                                                    break
                                                                case 'punteggi':
                                                                    $('#Chartedu').remove();
                                                                    $('#chartContainer').append('<canvas id="Chartedu"><canvas>');
                                                                    grafo2(daticonfr);
                                                                    break

                                                                    
                                                            }
                                                        });





                                                }
                                            })
                

function grafo2(dati2, opzioni) {
                                                            var grafobase2 = document.getElementById('Chartedu').getContext('2d');
                                                            new Chart(grafobase2, {
                                                                type: 'bar',
                                                                data: dati2,
                                                                options: opzioni

                                                            });
                                                        };

                                    grafo2(datigenerici);
/// processi



                    // chiudi click function
                }


            });


        };


        //////



        //////


 
        
                             
        var geo_json_dc64d985f99647e7b35676bc82a64cc7 = L.geoJson(null, {
                onEachFeature: geo_json_dc64d985f99647e7b35676bc82a64cc7_onEachFeature,
            
                style: geo_json_dc64d985f99647e7b35676bc82a64cc7_styler,
        });
        function geo_json_dc64d985f99647e7b35676bc82a64cc7_add (data) {
            geo_json_dc64d985f99647e7b35676bc82a64cc7.addData(data)
                .addTo(choropleth_51a0ab0b553946e88cc89d15a5d0e903);
        }
            geo_json_dc64d985f99647e7b35676bc82a64cc7_add({"features": [{"geometry": {"coordinates": [[[10.822127594983577, 44.93665449647624], [10.793580300244304, 44.94013425306163], [10.770980358575713, 44.94361400964702], [10.749569887521258, 44.92273547013467], [10.750759358135394, 44.9099763626549], [10.749569887521258, 44.90765652493131], [10.738864651994028, 44.90765652493131], [10.724591004624392, 44.89025774200435], [10.728159416466802, 44.88677798541896], [10.730538357695075, 44.88677798541896], [10.742433063836437, 44.897217255175136], [10.768601417347439, 44.88097839110998], [10.788822417787758, 44.899537092898726], [10.813801300684622, 44.89489741745154], [10.823317065597713, 44.897217255175136], [10.83045388928253, 44.90301684948412], [10.866138007706624, 44.905336687207715], [10.873274831391441, 44.90765652493131], [10.869706419549033, 44.91577595696389], [10.876843243233852, 44.916935875825686], [10.874464302005578, 44.92157555127287], [10.869706419549033, 44.92041563241108], [10.864948537092488, 44.92389538899647], [10.86732747832076, 44.92853506444366], [10.864948537092488, 44.92969498330545], [10.85424330156526, 44.92737514558186], [10.83045388928253, 44.933174739890845], [10.822127594983577, 44.93665449647624]]], "type": "Polygon"}, "properties": {"COD_PRO": 35, "COD_REG": 8, "DANNO": 7, "NOME_COM": "Reggiolo", "PRO_COM": 35032, "SHAPE_Area": 42662318.7797, "SHAPE_Leng": 34196.5412159}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.178968779224498, 44.79746423306058], [11.212273956420319, 44.806743583954955], [11.218221309491, 44.81138325940215], [11.221789721333408, 44.812543178263944], [11.214652897648591, 44.826462204605505], [11.193242426594136, 44.82066261029652], [11.20156872089309, 44.81022334054035], [11.159937249398315, 44.80326382736956], [11.153989896327634, 44.804423746231365], [11.14209519018627, 44.806743583954955], [11.13495836650145, 44.804423746231365], [11.131389954659042, 44.81370309712574], [11.127821542816633, 44.816022934849336], [11.106411071762178, 44.826462204605505], [11.100463718691497, 44.824142366881915], [11.086190071321859, 44.806743583954955], [11.113547895446995, 44.80094398964597], [11.117116307289406, 44.796304314198785], [11.112358424832859, 44.787024963304404], [11.106411071762178, 44.78586504444261], [11.101653189305633, 44.78238528785722], [11.10284265991977, 44.77658569354823], [11.099274248077359, 44.77194601810104], [11.106411071762178, 44.770786099239245], [11.111168954218723, 44.77774561241003], [11.136147837115587, 44.78586504444261], [11.151610955099361, 44.78586504444261], [11.175400367382089, 44.7916646387516], [11.178968779224498, 44.79746423306058]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 6.5, "NOME_COM": "Camposanto", "PRO_COM": 36004, "SHAPE_Area": 22822963.9258, "SHAPE_Leng": 34161.4395915}, "type": "Feature"}, {"geometry": {"coordinates": [[[10.999358716489901, 44.86473952704482], [10.995790304647493, 44.87285895907739], [10.992221892805084, 44.868219283630204], [10.97675877482131, 44.857780013874034], [10.970811421750629, 44.85546017615044], [10.970811421750629, 44.85314033842684], [10.960106186223399, 44.840381230947074], [10.955348303766854, 44.838061393223484], [10.955348303766854, 44.83458163663809], [10.960106186223399, 44.8287820423291], [10.970811421750629, 44.82530228574371], [10.974379833593037, 44.82530228574371], [10.979137716049582, 44.82762212346731], [10.98270612789199, 44.82762212346731], [10.992221892805084, 44.82066261029652], [11.012442893245403, 44.81370309712574], [11.016011305087812, 44.81022334054035], [11.021958658158493, 44.81370309712574], [11.027906011229174, 44.82298244802011], [11.03266389368572, 44.81950269143473], [11.037421776142267, 44.82298244802011], [11.037421776142267, 44.826462204605505], [11.046937541055357, 44.841541149808876], [11.031474423071584, 44.84734074411786], [11.027906011229174, 44.85082050070325], [11.029095481843312, 44.85430025728864], [11.027906011229174, 44.85893993273583], [11.023148128772629, 44.86125977045943], [11.012442893245403, 44.860099851597624], [10.999358716489901, 44.86473952704482]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 8, "NOME_COM": "Cavezzo", "PRO_COM": 36009, "SHAPE_Area": 26730021.0079, "SHAPE_Leng": 22773.8035825, "fill": "#555555", "fill-opacity": 0.5, "stroke": "#555555", "stroke-opacity": 1, "stroke-width": 2}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.030284952457448, 44.9517334416796], [11.008874481402993, 44.95521319826499], [10.996979775261629, 44.95521319826499], [10.991032422190948, 44.952893360541395], [10.966053539294082, 44.93433465875265], [10.95059042131031, 44.933174739890845], [10.951779891924446, 44.92737514558186], [10.9470220094679, 44.92273547013467], [10.951779891924446, 44.916935875825686], [10.957727244995127, 44.914616038102096], [10.96367459806581, 44.90881644379311], [10.955348303766854, 44.89605733631333], [10.949400950696173, 44.89489741745154], [10.945832538853763, 44.88793790428076], [10.961295656837535, 44.879818472248175], [10.962485127451671, 44.885618066557164], [10.975569304207173, 44.89257757972795], [10.985085069120265, 44.90185693062232], [11.001737657718174, 44.90881644379311], [11.025527070000901, 44.9099763626549], [11.030284952457448, 44.90417676834592], [11.035042834913995, 44.90417676834592], [11.043369129212948, 44.914616038102096], [11.063590129653267, 44.93549457761444], [11.060021717810859, 44.938974334199834], [11.060021717810859, 44.949413603956], [11.057642776582586, 44.950573522817805], [11.046937541055357, 44.9517334416796], [11.030284952457448, 44.9517334416796]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7.5, "NOME_COM": "Concordia sulla Secchia", "PRO_COM": 36010, "SHAPE_Area": 40634427.2961, "SHAPE_Leng": 31384.2016902}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.368094606872187, 44.84270106867067], [11.356199900730822, 44.86125977045943], [11.347873606431868, 44.869379202492006], [11.340736782747049, 44.87285895907739], [11.326463135377413, 44.87517879680099], [11.306242134937094, 44.88329822883357], [11.293157958181594, 44.885618066557164], [11.283642193268502, 44.89141766086615], [11.269368545898864, 44.89605733631333], [11.250337016072683, 44.90069701176053], [11.245579133616136, 44.89837717403693], [11.23487389808891, 44.90649660606951], [11.225358133175817, 44.88677798541896], [11.220600250719272, 44.885618066557164], [11.190863485365863, 44.86357960818302], [11.18134772045277, 44.8311018800527], [11.193242426594136, 44.82066261029652], [11.214652897648591, 44.826462204605505], [11.221789721333408, 44.812543178263944], [11.218221309491, 44.81138325940215], [11.212273956420319, 44.806743583954955], [11.178968779224498, 44.79746423306058], [11.177779308610361, 44.796304314198785], [11.18134772045277, 44.79398447647519], [11.208705544577908, 44.804423746231365], [11.217031838876864, 44.804423746231365], [11.22416866256168, 44.80210390850777], [11.236063368703046, 44.804423746231365], [11.293157958181594, 44.80326382736956], [11.301484252480549, 44.81022334054035], [11.312189488007775, 44.82762212346731], [11.322894723535004, 44.832261798914494], [11.347873606431868, 44.8299419611909], [11.351442018274277, 44.832261798914494], [11.352631488888413, 44.83574155549989], [11.366905136258051, 44.838061393223484], [11.368094606872187, 44.84270106867067]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7, "NOME_COM": "Finale Emilia", "PRO_COM": 36012, "SHAPE_Area": 104565857.61, "SHAPE_Leng": 50784.2071059}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.106411071762178, 44.826462204605505], [11.10284265991977, 44.82762212346731], [11.112358424832859, 44.83922131208528], [11.114737366061131, 44.84966058184145], [11.109979483604587, 44.85430025728864], [11.10284265991977, 44.85430025728864], [11.088569012550131, 44.85893993273583], [11.085000600707723, 44.86241968932122], [11.088569012550131, 44.87401887793919], [11.083811130093586, 44.87401887793919], [11.073105894566359, 44.86473952704482], [11.064779600267403, 44.86473952704482], [11.043369129212948, 44.84850066297965], [11.042179658598812, 44.843860987532466], [11.046937541055357, 44.841541149808876], [11.037421776142267, 44.826462204605505], [11.037421776142267, 44.82298244802011], [11.048127011669493, 44.81950269143473], [11.070726953338085, 44.80906342167855], [11.086190071321859, 44.806743583954955], [11.100463718691497, 44.824142366881915], [11.106411071762178, 44.826462204605505]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Medolla", "PRO_COM": 36021, "SHAPE_Area": 27018075.6498, "SHAPE_Leng": 22401.3319654}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.079053247637042, 44.95985287371218], [11.073105894566359, 44.96333263029757], [11.060021717810859, 44.949413603956], [11.060021717810859, 44.938974334199834], [11.063590129653267, 44.93549457761444], [11.038611246756403, 44.90881644379311], [11.035042834913995, 44.90417676834592], [11.037421776142267, 44.90185693062232], [11.030284952457448, 44.897217255175136], [11.024337599386765, 44.89605733631333], [11.016011305087812, 44.89141766086615], [11.01363236385954, 44.88677798541896], [11.016011305087812, 44.885618066557164], [11.014821834473675, 44.88097839110998], [11.007685010788856, 44.87865855338638], [11.001737657718174, 44.87865855338638], [10.995790304647493, 44.87285895907739], [10.999358716489901, 44.86473952704482], [11.004116598946446, 44.86241968932122], [11.012442893245403, 44.860099851597624], [11.023148128772629, 44.86125977045943], [11.027906011229174, 44.85893993273583], [11.029095481843312, 44.85430025728864], [11.027906011229174, 44.85082050070325], [11.031474423071584, 44.84734074411786], [11.042179658598812, 44.843860987532466], [11.043369129212948, 44.84850066297965], [11.055263835354312, 44.857780013874034], [11.067158541495676, 44.86473952704482], [11.073105894566359, 44.86473952704482], [11.083811130093586, 44.87401887793919], [11.098084777463223, 44.87517879680099], [11.106411071762178, 44.87285895907739], [11.119495248517678, 44.8705391213538], [11.130200484044906, 44.87401887793919], [11.132579425273178, 44.877498634524585], [11.13852677834386, 44.87865855338638], [11.156368837555906, 44.87285895907739], [11.174210896767953, 44.87633871566278], [11.178968779224498, 44.87865855338638], [11.190863485365863, 44.88213830997177], [11.22416866256168, 44.88677798541896], [11.236063368703046, 44.9099763626549], [11.243200192387864, 44.916935875825686], [11.25509489852923, 44.925055307858266], [11.259852780985774, 44.933174739890845], [11.246768604230272, 44.9517334416796], [11.242010721773728, 44.94593384737061], [11.238442309931319, 44.944773928508816], [11.213463427034455, 44.94361400964702], [11.20156872089309, 44.938974334199834], [11.157558308170042, 44.93665449647624], [11.151610955099361, 44.933174739890845], [11.143284660800406, 44.93781441533804], [11.118305777903542, 44.9540532794032], [11.104032130533906, 44.958692954850385], [11.09570583623495, 44.95753303598859], [11.079053247637042, 44.95985287371218]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7.5, "NOME_COM": "Mirandola", "PRO_COM": 36022, "SHAPE_Area": 136590701.295, "SHAPE_Leng": 59949.3941677}, "type": "Feature"}, {"geometry": {"coordinates": [[[10.961295656837535, 44.879818472248175], [10.945832538853763, 44.88793790428076], [10.949400950696173, 44.89489741745154], [10.955348303766854, 44.89605733631333], [10.96367459806581, 44.90881644379311], [10.957727244995127, 44.914616038102096], [10.951779891924446, 44.916935875825686], [10.9470220094679, 44.92273547013467], [10.951779891924446, 44.92737514558186], [10.941074656397218, 44.92157555127287], [10.917285244114488, 44.92389538899647], [10.889927419989352, 44.9122962003785], [10.88754847876108, 44.914616038102096], [10.876843243233852, 44.90185693062232], [10.876843243233852, 44.89025774200435], [10.879222184462124, 44.889097823142556], [10.878032713847988, 44.868219283630204], [10.880411655076262, 44.868219283630204], [10.899443184902443, 44.87401887793919], [10.919664185342763, 44.88329822883357], [10.929179950255854, 44.88213830997177], [10.932748362098263, 44.89025774200435], [10.937506244554807, 44.89025774200435], [10.929179950255854, 44.8705391213538], [10.919664185342763, 44.865899445906614], [10.918474714728625, 44.86241968932122], [10.917285244114488, 44.83342171777629], [10.929179950255854, 44.82182252915832], [10.936316773940671, 44.82066261029652], [10.936316773940671, 44.804423746231365], [10.951779891924446, 44.798624151922375], [10.96367459806581, 44.824142366881915], [10.967243009908218, 44.826462204605505], [10.95653777438099, 44.8311018800527], [10.955348303766854, 44.838061393223484], [10.960106186223399, 44.840381230947074], [10.970811421750629, 44.85430025728864], [10.969621951136492, 44.85662009501223], [10.964864068679946, 44.85662009501223], [10.961295656837535, 44.85546017615044], [10.958916715609263, 44.85662009501223], [10.958916715609263, 44.86125977045943], [10.966053539294082, 44.86357960818302], [10.958916715609263, 44.871699040215596], [10.961295656837535, 44.87517879680099], [10.961295656837535, 44.879818472248175]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7.5, "NOME_COM": "Novi di Modena", "PRO_COM": 36028, "SHAPE_Area": 52414847.1039, "SHAPE_Leng": 48457.0619661}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.22416866256168, 44.88677798541896], [11.190863485365863, 44.88213830997177], [11.178968779224498, 44.87865855338638], [11.174210896767953, 44.87633871566278], [11.156368837555906, 44.87285895907739], [11.13852677834386, 44.87865855338638], [11.132579425273178, 44.877498634524585], [11.130200484044906, 44.87401887793919], [11.119495248517678, 44.8705391213538], [11.106411071762178, 44.87285895907739], [11.099274248077359, 44.87517879680099], [11.088569012550131, 44.87401887793919], [11.085000600707723, 44.86241968932122], [11.088569012550131, 44.85893993273583], [11.10284265991977, 44.85430025728864], [11.109979483604587, 44.85430025728864], [11.114737366061131, 44.84966058184145], [11.112358424832859, 44.83922131208528], [11.10284265991977, 44.82762212346731], [11.127821542816633, 44.816022934849336], [11.131389954659042, 44.81370309712574], [11.13495836650145, 44.804423746231365], [11.14209519018627, 44.806743583954955], [11.153989896327634, 44.804423746231365], [11.159937249398315, 44.80326382736956], [11.20156872089309, 44.81022334054035], [11.19205295598, 44.82182252915832], [11.18134772045277, 44.8311018800527], [11.183726661681044, 44.841541149808876], [11.190863485365863, 44.86357960818302], [11.220600250719272, 44.885618066557164], [11.22416866256168, 44.88677798541896]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 7, "NOME_COM": "San Felice sul Panaro", "PRO_COM": 36037, "SHAPE_Area": 51530971.8912, "SHAPE_Leng": 38095.39989}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.030284952457448, 44.90417676834592], [11.026716540615038, 44.9099763626549], [11.012442893245403, 44.9099763626549], [11.001737657718174, 44.90881644379311], [10.985085069120265, 44.90185693062232], [10.975569304207173, 44.89257757972795], [10.962485127451671, 44.885618066557164], [10.961295656837535, 44.87517879680099], [10.958916715609263, 44.871699040215596], [10.966053539294082, 44.86357960818302], [10.958916715609263, 44.86125977045943], [10.958916715609263, 44.85546017615044], [10.966053539294082, 44.85662009501223], [10.970811421750629, 44.85546017615044], [10.97675877482131, 44.857780013874034], [10.992221892805084, 44.868219283630204], [11.001737657718174, 44.87865855338638], [11.007685010788856, 44.87865855338638], [11.014821834473675, 44.88097839110998], [11.016011305087812, 44.885618066557164], [11.01363236385954, 44.88677798541896], [11.016011305087812, 44.89141766086615], [11.024337599386765, 44.89605733631333], [11.030284952457448, 44.897217255175136], [11.037421776142267, 44.90185693062232], [11.035042834913995, 44.90417676834592], [11.030284952457448, 44.90417676834592]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 6, "NOME_COM": "San Possidonio", "PRO_COM": 36038, "SHAPE_Area": 17943972.1178, "SHAPE_Leng": 20392.9262185}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.086190071321859, 44.806743583954955], [11.070726953338085, 44.80906342167855], [11.048127011669493, 44.81950269143473], [11.037421776142267, 44.82298244802011], [11.03266389368572, 44.81950269143473], [11.027906011229174, 44.82298244802011], [11.021958658158493, 44.81370309712574], [11.016011305087812, 44.81022334054035], [11.012442893245403, 44.81370309712574], [11.004116598946446, 44.816022934849336], [11.007685010788856, 44.81022334054035], [11.000548187104037, 44.79978407078417], [11.00292712833231, 44.796304314198785], [11.001737657718174, 44.790504719889796], [10.994600834033356, 44.787024963304404], [10.994600834033356, 44.77194601810104], [10.992221892805084, 44.770786099239245], [10.995790304647493, 44.76382658606846], [10.98984295157681, 44.75570715403588], [10.98270612789199, 44.75222739745049], [10.98270612789199, 44.751067478588695], [10.985085069120265, 44.7487476408651], [10.99341136341922, 44.75222739745049], [11.001737657718174, 44.74990755972689], [11.005306069560582, 44.75686707289768], [11.01957971693022, 44.76730634265385], [11.033853364299857, 44.75686707289768], [11.046937541055357, 44.76614642379206], [11.048127011669493, 44.76962618037745], [11.061211188424995, 44.78122536899542], [11.074295365180495, 44.787024963304404], [11.086190071321859, 44.806743583954955]]], "type": "Polygon"}, "properties": {"COD_PRO": 36, "COD_REG": 8, "DANNO": 6, "NOME_COM": "San Prospero", "PRO_COM": 36039, "SHAPE_Area": 34484217.75, "SHAPE_Leng": 29638.7663362}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.293157958181594, 44.80326382736956], [11.263421192828183, 44.804423746231365], [11.236063368703046, 44.804423746231365], [11.22416866256168, 44.80210390850777], [11.217031838876864, 44.804423746231365], [11.207516073963772, 44.804423746231365], [11.18134772045277, 44.79398447647519], [11.177779308610361, 44.796304314198785], [11.175400367382089, 44.7916646387516], [11.151610955099361, 44.78586504444261], [11.14209519018627, 44.787024963304404], [11.131389954659042, 44.784705125580814], [11.130200484044906, 44.78238528785722], [11.123063660360089, 44.74990755972689], [11.117116307289406, 44.71047031842579], [11.105221601148042, 44.69075169777524], [11.113547895446995, 44.68843186005165], [11.12187418974595, 44.69191161663704], [11.130200484044906, 44.69307153549884], [11.14209519018627, 44.689591778913446], [11.143284660800406, 44.69887112980782], [11.148042543256953, 44.70119096753142], [11.183726661681044, 44.68843186005165], [11.190863485365863, 44.69307153549884], [11.196810838436544, 44.697711210946025], [11.209895015192044, 44.71974966932017], [11.206326603349636, 44.73830837110893], [11.217031838876864, 44.7487476408651], [11.240821251159591, 44.74178812769432], [11.245579133616136, 44.75802699175948], [11.293157958181594, 44.80326382736956]]], "type": "Polygon"}, "properties": {"COD_PRO": 37, "COD_REG": 8, "DANNO": 6.5, "NOME_COM": "Crevalcore", "PRO_COM": 37024, "SHAPE_Area": 102775265.577, "SHAPE_Leng": 50114.4470939}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.388315607312506, 44.778905531271825], [11.382368254241824, 44.78006545013362], [11.374041959942868, 44.78006545013362], [11.359768312573232, 44.77426585582464], [11.340736782747049, 44.75454723517409], [11.320515782306732, 44.74526788427971], [11.30743160555123, 44.734828614523536], [11.301484252480549, 44.72670918249095], [11.289589546339183, 44.713950075011184], [11.28126325204023, 44.711630237287594], [11.277694840197821, 44.709310399563996], [11.312189488007775, 44.69887112980782], [11.313378958621911, 44.70003104866962], [11.319326311692594, 44.7081504807022], [11.325273664763277, 44.711630237287594], [11.331221017833958, 44.72206950704377], [11.33359995906223, 44.734828614523536], [11.332410488448094, 44.73946828997072], [11.33716837090464, 44.74526788427971], [11.345494665203596, 44.753387316312285], [11.35025254766014, 44.751067478588695], [11.351442018274277, 44.75222739745049], [11.377610371785277, 44.77426585582464], [11.388315607312506, 44.778905531271825]]], "type": "Polygon"}, "properties": {"COD_PRO": 37, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Pieve di Cento", "PRO_COM": 37048, "SHAPE_Area": 15965224.9157, "SHAPE_Leng": 26976.2573148}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.42637866696487, 44.950573522817805], [11.42637866696487, 44.9517334416796], [11.408536607752826, 44.950573522817805], [11.399020842839732, 44.95521319826499], [11.377610371785277, 44.95753303598859], [11.36333672441564, 44.95521319826499], [11.359768312573232, 44.950573522817805], [11.357389371344958, 44.950573522817805], [11.33716837090464, 44.95637311712679], [11.326463135377413, 44.96217271143578], [11.312189488007775, 44.958692954850385], [11.306242134937094, 44.96217271143578], [11.301484252480549, 44.96217271143578], [11.296726370024002, 44.95753303598859], [11.284831663882638, 44.95637311712679], [11.271747487127138, 44.93781441533804], [11.266989604670592, 44.94361400964702], [11.246768604230272, 44.9517334416796], [11.259852780985774, 44.933174739890845], [11.256284369143366, 44.92621522672006], [11.243200192387864, 44.916935875825686], [11.23487389808891, 44.90649660606951], [11.245579133616136, 44.89837717403693], [11.250337016072683, 44.90069701176053], [11.269368545898864, 44.89605733631333], [11.283642193268502, 44.89141766086615], [11.293157958181594, 44.885618066557164], [11.306242134937094, 44.88329822883357], [11.326463135377413, 44.87517879680099], [11.340736782747049, 44.87285895907739], [11.347873606431868, 44.869379202492006], [11.356199900730822, 44.86125977045943], [11.368094606872187, 44.84270106867067], [11.366905136258051, 44.83690147436168], [11.372852489328732, 44.83690147436168], [11.377610371785277, 44.83342171777629], [11.38712613669837, 44.8311018800527], [11.401399784068005, 44.83342171777629], [11.41686290205178, 44.841541149808876], [11.437083902492098, 44.83690147436168], [11.444220726176916, 44.83922131208528], [11.441841784948643, 44.85082050070325], [11.446599667405188, 44.860099851597624], [11.456115432318281, 44.865899445906614], [11.468010138459643, 44.86705936476841], [11.488231138899963, 44.86125977045943], [11.490610080128235, 44.86241968932122], [11.48585219767169, 44.87865855338638], [11.489420609514099, 44.89373749858974], [11.490610080128235, 44.897217255175136], [11.488231138899963, 44.897217255175136], [11.491799550742373, 44.913456119240294], [11.487041668285826, 44.91577595696389], [11.470389079687918, 44.916935875825686], [11.464441726617235, 44.93549457761444], [11.432326020035553, 44.92969498330545], [11.42637866696487, 44.92969498330545], [11.423999725736596, 44.93781441533804], [11.42637866696487, 44.950573522817805]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Bondeno", "PRO_COM": 38003, "SHAPE_Area": 175101877.308, "SHAPE_Leng": 66393.1494475}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.372852489328732, 44.83690147436168], [11.36333672441564, 44.838061393223484], [11.352631488888413, 44.83574155549989], [11.351442018274277, 44.832261798914494], [11.347873606431868, 44.8299419611909], [11.322894723535004, 44.832261798914494], [11.312189488007775, 44.82762212346731], [11.301484252480549, 44.81022334054035], [11.245579133616136, 44.75802699175948], [11.272936957741274, 44.74990755972689], [11.252715957300955, 44.71626991273478], [11.275315898969547, 44.705830642978604], [11.278884310811957, 44.71047031842579], [11.289589546339183, 44.713950075011184], [11.301484252480549, 44.72670918249095], [11.308621076165366, 44.73598853338533], [11.320515782306732, 44.74526788427971], [11.33359995906223, 44.751067478588695], [11.34430519458946, 44.759186910621274], [11.331221017833958, 44.762666667206666], [11.339547312132913, 44.778905531271825], [11.33716837090464, 44.784705125580814], [11.340736782747049, 44.787024963304404], [11.349063077046004, 44.788184882166206], [11.351442018274277, 44.79282455761339], [11.35382095950255, 44.816022934849336], [11.362147253801504, 44.81486301598754], [11.38712613669837, 44.8311018800527], [11.377610371785277, 44.83342171777629], [11.372852489328732, 44.83690147436168]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Cento", "PRO_COM": 38004, "SHAPE_Area": 65121310.19, "SHAPE_Leng": 44507.4592363}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.437083902492098, 44.83690147436168], [11.41686290205178, 44.841541149808876], [11.409726078366962, 44.838061393223484], [11.408536607752826, 44.83342171777629], [11.419241843280052, 44.824142366881915], [11.438273373106234, 44.816022934849336], [11.425189196350734, 44.80906342167855], [11.435894431877962, 44.798624151922375], [11.470389079687918, 44.80790350281676], [11.4763364327586, 44.80790350281676], [11.488231138899963, 44.81718285371113], [11.478715373986873, 44.82066261029652], [11.479904844601009, 44.824142366881915], [11.471578550302054, 44.832261798914494], [11.469199609073781, 44.8311018800527], [11.458494373546554, 44.83342171777629], [11.447789138019326, 44.83922131208528], [11.437083902492098, 44.83690147436168]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6.5, "NOME_COM": "Mirabello", "PRO_COM": 38016, "SHAPE_Area": 16268082.4207, "SHAPE_Leng": 18949.4642583}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.503694256883737, 44.81486301598754], [11.501315315655464, 44.81486301598754], [11.497746903813056, 44.816022934849336], [11.495367962584782, 44.82066261029652], [11.491799550742373, 44.81950269143473], [11.4763364327586, 44.80790350281676], [11.470389079687918, 44.80790350281676], [11.425189196350734, 44.79514439533698], [11.41686290205178, 44.7916646387516], [11.414483960823507, 44.787024963304404], [11.402589254682141, 44.78238528785722], [11.400210313453869, 44.77658569354823], [11.399020842839732, 44.768466261515655], [11.43351549064969, 44.76034682948307], [11.452547020475873, 44.76034682948307], [11.473957491530326, 44.74990755972689], [11.508452139340282, 44.73830837110893], [11.5155889630251, 44.733668695661734], [11.526294198552328, 44.731348857938144], [11.552462552063329, 44.72090958818197], [11.583388788030875, 44.7069905618404], [11.592904552943967, 44.711630237287594], [11.546515198992648, 44.75686707289768], [11.559599375748148, 44.787024963304404], [11.503694256883737, 44.81486301598754]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Poggio Renatico", "PRO_COM": 38018, "SHAPE_Area": 80243560.3414, "SHAPE_Leng": 43788.5822917}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.435894431877962, 44.798624151922375], [11.425189196350734, 44.80906342167855], [11.438273373106234, 44.816022934849336], [11.419241843280052, 44.824142366881915], [11.408536607752826, 44.83342171777629], [11.409726078366962, 44.838061393223484], [11.401399784068005, 44.83342171777629], [11.38712613669837, 44.8311018800527], [11.362147253801504, 44.81486301598754], [11.35382095950255, 44.816022934849336], [11.351442018274277, 44.79282455761339], [11.349063077046004, 44.788184882166206], [11.340736782747049, 44.787024963304404], [11.33716837090464, 44.784705125580814], [11.339547312132913, 44.778905531271825], [11.331221017833958, 44.762666667206666], [11.34430519458946, 44.759186910621274], [11.358578841959094, 44.77310593696284], [11.375231430557005, 44.78006545013362], [11.38355772485596, 44.78006545013362], [11.388315607312506, 44.778905531271825], [11.399020842839732, 44.768466261515655], [11.400210313453869, 44.77658569354823], [11.402589254682141, 44.78238528785722], [11.414483960823507, 44.787024963304404], [11.41686290205178, 44.7916646387516], [11.425189196350734, 44.79514439533698], [11.435894431877962, 44.798624151922375]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": 6, "NOME_COM": "Sant\u0027Agostino", "PRO_COM": 38021, "SHAPE_Area": 34629193.9699, "SHAPE_Leng": 30790.65142}, "type": "Feature"}, {"geometry": {"coordinates": [[[11.533431022237146, 44.80094398964597], [11.538188904693692, 44.80790350281676], [11.53580996346542, 44.81022334054035], [11.545325728378511, 44.82066261029652], [11.540567845921966, 44.82182252915832], [11.534620492851282, 44.82066261029652], [11.531052081008873, 44.816022934849336], [11.527483669166465, 44.81718285371113], [11.523915257324056, 44.81950269143473], [11.520346845481647, 44.826462204605505], [11.508452139340282, 44.83342171777629], [11.50607319811201, 44.840381230947074], [11.525104727938192, 44.84502090639426], [11.531052081008873, 44.85546017615044], [11.531052081008873, 44.85662009501223], [11.52272578670992, 44.85430025728864], [11.527483669166465, 44.87517879680099], [11.529862610394737, 44.877498634524585], [11.538188904693692, 44.879818472248175], [11.538188904693692, 44.88329822883357], [11.517967904253373, 44.89257757972795], [11.490610080128235, 44.9099763626549], [11.488231138899963, 44.897217255175136], [11.490610080128235, 44.897217255175136], [11.489420609514099, 44.89373749858974], [11.48585219767169, 44.87865855338638], [11.490610080128235, 44.86241968932122], [11.488231138899963, 44.86125977045943], [11.468010138459643, 44.86705936476841], [11.456115432318281, 44.865899445906614], [11.446599667405188, 44.860099851597624], [11.441841784948643, 44.85082050070325], [11.444220726176916, 44.83922131208528], [11.452547020475873, 44.838061393223484], [11.458494373546554, 44.83342171777629], [11.469199609073781, 44.8311018800527], [11.471578550302054, 44.832261798914494], [11.479904844601009, 44.824142366881915], [11.479904844601009, 44.82066261029652], [11.488231138899963, 44.81718285371113], [11.490610080128235, 44.81950269143473], [11.495367962584782, 44.82066261029652], [11.498936374427192, 44.81486301598754], [11.503694256883737, 44.81486301598754], [11.533431022237146, 44.80094398964597]]], "type": "Polygon"}, "properties": {"COD_PRO": 38, "COD_REG": 8, "DANNO": null, "NOME_COM": "Vigarano Mainarda", "PRO_COM": 38022, "SHAPE_Area": 41789200.959, "SHAPE_Leng": 40891.9826294}, "type": "Feature"}], "type": "FeatureCollection"});
        
    
    var color_map_b452def91dc04900ba6300213954b24a = {};

    
    color_map_b452def91dc04900ba6300213954b24a.color = d3.scale.threshold()
              .domain([5.1, 5.105811623246493, 5.111623246492986, 5.117434869739479, 5.123246492985972, 5.129058116232464, 5.134869739478957, 5.14068136272545, 5.1464929859719435, 5.152304609218437, 5.15811623246493, 5.163927855711423, 5.169739478957916, 5.175551102204408, 5.181362725450901, 5.187174348697394, 5.192985971943887, 5.19879759519038, 5.2046092184368735, 5.210420841683367, 5.21623246492986, 5.222044088176353, 5.227855711422845, 5.233667334669338, 5.239478957915831, 5.245290581162324, 5.251102204408817, 5.2569138276553105, 5.2627254509018035, 5.268537074148297, 5.274348697394789, 5.280160320641282, 5.285971943887775, 5.291783567134268, 5.297595190380761, 5.303406813627254, 5.309218436873747, 5.3150300601202405, 5.320841683366734, 5.326653306613226, 5.332464929859719, 5.338276553106212, 5.344088176352705, 5.349899799599198, 5.355711422845691, 5.361523046092184, 5.367334669338677, 5.37314629258517, 5.378957915831663, 5.384769539078156, 5.390581162324649, 5.396392785571142, 5.402204408817635, 5.408016032064128, 5.413827655310621, 5.4196392785571135, 5.425450901803607, 5.4312625250501, 5.437074148296593, 5.442885771543086, 5.448697394789579, 5.454509018036072, 5.460320641282565, 5.466132264529058, 5.47194388777555, 5.4777555110220435, 5.483567134268537, 5.48937875751503, 5.495190380761523, 5.501002004008016, 5.506813627254509, 5.512625250501002, 5.518436873747494, 5.524248496993987, 5.53006012024048, 5.5358717434869735, 5.541683366733467, 5.54749498997996, 5.553306613226453, 5.559118236472946, 5.564929859719439, 5.570741482965931, 5.576553106212424, 5.582364729458917, 5.5881763527054105, 5.593987975951904, 5.599799599198397, 5.60561122244489, 5.611422845691383, 5.617234468937875, 5.623046092184368, 5.628857715430861, 5.634669338677354, 5.640480961923847, 5.6462925851703405, 5.652104208416834, 5.657915831663327, 5.66372745490982, 5.669539078156312, 5.675350701402805, 5.681162324649298, 5.686973947895791, 5.692785571142284, 5.698597194388777, 5.7044088176352705, 5.710220440881764, 5.716032064128257, 5.721843687374749, 5.727655310621242, 5.733466933867735, 5.739278557114228, 5.745090180360721, 5.750901803607214, 5.7567134268537075, 5.7625250501002, 5.768336673346694, 5.774148296593186, 5.779959919839679, 5.785771543086172, 5.791583166332665, 5.797394789579158, 5.803206412825651, 5.809018036072144, 5.814829659318637, 5.82064128256513, 5.826452905811623, 5.832264529058116, 5.838076152304609, 5.843887775551102, 5.849699398797595, 5.855511022044088, 5.861322645290581, 5.8671342685370735, 5.872945891783567, 5.87875751503006, 5.884569138276553, 5.890380761523046, 5.896192384769539, 5.902004008016032, 5.907815631262524, 5.913627254509018, 5.9194388777555105, 5.925250501002004, 5.931062124248497, 5.93687374749499, 5.942685370741483, 5.948496993987976, 5.954308617234469, 5.960120240480961, 5.965931863727455, 5.971743486973947, 5.9775551102204405, 5.983366733466934, 5.989178356713427, 5.99498997995992, 6.000801603206413, 6.006613226452906, 6.012424849699398, 6.018236472945891, 6.024048096192384, 6.029859719438877, 6.0356713426853705, 6.041482965931864, 6.047294589178357, 6.05310621242485, 6.058917835671343, 6.064729458917835, 6.070541082164328, 6.076352705410821, 6.082164328657314, 6.0879759519038075, 6.093787575150301, 6.099599198396794, 6.105410821643286, 6.11122244488978, 6.117034068136272, 6.122845691382765, 6.128657314629258, 6.134468937875751, 6.140280561122244, 6.1460921843687375, 6.151903807615231, 6.157715430861723, 6.163527054108216, 6.169338677354709, 6.175150300601202, 6.180961923847695, 6.186773547094188, 6.192585170340681, 6.1983967935871735, 6.2042084168336675, 6.21002004008016, 6.215831663326653, 6.221643286573146, 6.227454909819639, 6.233266533066132, 6.239078156312625, 6.244889779559118, 6.2507014028056105, 6.256513026052104, 6.262324649298597, 6.26813627254509, 6.273947895791583, 6.279759519038076, 6.285571142284569, 6.291382765531062, 6.297194388777555, 6.303006012024047, 6.3088176352705405, 6.314629258517034, 6.320440881763527, 6.32625250501002, 6.332064128256513, 6.337875751503006, 6.343687374749498, 6.349498997995992, 6.355310621242484, 6.3611222444889775, 6.3669338677354705, 6.372745490981964, 6.378557114228457, 6.38436873747495, 6.390180360721443, 6.395991983967935, 6.401803607214429, 6.407615230460921, 6.413426853707414, 6.4192384769539075, 6.425050100200401, 6.430861723446894, 6.436673346693387, 6.44248496993988, 6.448296593186372, 6.454108216432865, 6.459919839679358, 6.465731462925851, 6.471543086172344, 6.4773547094188375, 6.483166332665331, 6.488977955911824, 6.494789579158317, 6.500601202404809, 6.506412825651302, 6.512224448897795, 6.518036072144288, 6.523847695390781, 6.5296593186372744, 6.5354709418837675, 6.54128256513026, 6.547094188376754, 6.552905811623246, 6.558717434869739, 6.564529058116232, 6.570340681362725, 6.576152304609218, 6.581963927855711, 6.5877755511022045, 6.593587174348697, 6.599398797595191, 6.605210420841683, 6.611022044088176, 6.616833667334669, 6.622645290581162, 6.628456913827655, 6.634268537074148, 6.640080160320641, 6.645891783567134, 6.651703406813627, 6.65751503006012, 6.663326653306613, 6.669138276553106, 6.674949899799599, 6.680761523046092, 6.686573146292584, 6.692384769539078, 6.6981963927855706, 6.704008016032064, 6.709819639278557, 6.71563126252505, 6.721442885771543, 6.727254509018036, 6.733066132264529, 6.738877755511021, 6.744689378757515, 6.7505010020040075, 6.756312625250501, 6.762124248496994, 6.767935871743487, 6.77374749498998, 6.779559118236473, 6.785370741482966, 6.791182364729458, 6.796993987975952, 6.802805611222444, 6.8086172344689375, 6.814428857715431, 6.820240480961924, 6.826052104208417, 6.83186372745491, 6.837675350701403, 6.843486973947895, 6.849298597194388, 6.855110220440881, 6.8609218436873745, 6.8667334669338675, 6.872545090180361, 6.878356713426854, 6.884168336673346, 6.88997995991984, 6.895791583166332, 6.901603206412825, 6.907414829659318, 6.913226452905811, 6.9190380761523045, 6.924849699398798, 6.930661322645291, 6.936472945891783, 6.942284569138277, 6.948096192384769, 6.953907815631262, 6.959719438877755, 6.965531062124248, 6.971342685370741, 6.9771543086172345, 6.982965931863728, 6.98877755511022, 6.994589178356714, 7.000400801603206, 7.006212424849699, 7.012024048096192, 7.017835671342685, 7.023647294589178, 7.0294589178356714, 7.0352705410821645, 7.041082164328657, 7.046893787575151, 7.052705410821643, 7.058517034068136, 7.064328657314629, 7.070140280561122, 7.075951903807615, 7.0817635270541075, 7.0875751503006015, 7.093386773547094, 7.099198396793587, 7.10501002004008, 7.110821643286573, 7.116633266533066, 7.122444889779559, 7.128256513026052, 7.134068136272544, 7.139879759519038, 7.145691382765531, 7.151503006012025, 7.157314629258517, 7.163126252505011, 7.168937875751503, 7.174749498997996, 7.180561122244489, 7.186372745490981, 7.192184368737475, 7.197995991983968, 7.2038076152304615, 7.209619238476954, 7.215430861723447, 7.22124248496994, 7.227054108216432, 7.232865731462926, 7.238677354709418, 7.244488977955912, 7.2503006012024045, 7.256112224448898, 7.261923847695391, 7.267735470941883, 7.273547094188377, 7.27935871743487, 7.285170340681363, 7.290981963927855, 7.296793587174348, 7.302605210420841, 7.308416833667335, 7.314228456913828, 7.320040080160321, 7.325851703406814, 7.331663326653306, 7.3374749498998, 7.343286573146292, 7.349098196392786, 7.354909819639278, 7.3607214428857715, 7.3665330661322646, 7.372344689378757, 7.378156312625251, 7.383967935871743, 7.389779559118237, 7.395591182364729, 7.401402805611222, 7.407214428857715, 7.4130260521042075, 7.4188376753507015, 7.424649298597195, 7.430460921843688, 7.43627254509018, 7.442084168336673, 7.447895791583166, 7.45370741482966, 7.459519038076152, 7.465330661322645, 7.471142284569138, 7.476953907815631, 7.482765531062125, 7.488577154308617, 7.494388777555111, 7.500200400801603, 7.506012024048096, 7.511823647294589, 7.517635270541081, 7.523446893787575, 7.529258517034068, 7.5350701402805615, 7.540881763527054, 7.546693386773547, 7.55250501002004, 7.558316633266532, 7.564128256513026, 7.569939879759519, 7.575751503006012, 7.5815631262525045, 7.587374749498998, 7.593186372745491, 7.598997995991985, 7.604809619238477, 7.61062124248497, 7.616432865731463, 7.622244488977955, 7.628056112224449, 7.633867735470941, 7.639679358717435, 7.645490981963928, 7.651302605210421, 7.657114228456914, 7.662925851703406, 7.6687374749499, 7.674549098196392, 7.680360721442886, 7.686172344689378, 7.6919839679358715, 7.697795591182365, 7.7036072144288585, 7.709418837675351, 7.715230460921844, 7.721042084168337, 7.726853707414829, 7.732665330661323, 7.738476953907815, 7.744288577154309, 7.7501002004008015, 7.755911823647295, 7.761723446893788, 7.76753507014028, 7.773346693386774, 7.779158316633266, 7.78496993987976, 7.790781563126252, 7.796593186372745, 7.802404809619238, 7.808216432865731, 7.814028056112225, 7.819839679358718, 7.825651302605211, 7.831462925851703, 7.837274549098196, 7.843086172344689, 7.848897795591183, 7.854709418837675, 7.8605210420841685, 7.8663326653306616, 7.872144288577154, 7.877955911823648, 7.88376753507014, 7.889579158316634, 7.895390781563126, 7.901202404809619, 7.907014028056112, 7.9128256513026045, 7.9186372745490985, 7.924448897795591, 7.930260521042085, 7.936072144288577, 7.94188376753507, 7.947695390781563, 7.953507014028056, 7.959318637274549, 7.965130260521042, 7.970941883767535, 7.976753507014028, 7.982565130260521, 7.988376753507014, 7.994188376753508, 8.0])
              .range(['#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#ffffb2', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#fed976', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#feb24c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#fd8d3c', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#f03b20', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026', '#bd0026']);
    

    color_map_b452def91dc04900ba6300213954b24a.x = d3.scale.linear()
              .domain([5.1, 8.0])
              .range([0, 400]);

    color_map_b452def91dc04900ba6300213954b24a.legend = L.control({position: 'topright'});
    color_map_b452def91dc04900ba6300213954b24a.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_b452def91dc04900ba6300213954b24a.legend.addTo(map_ae26379126cd4ce79aea9d0f395ec09f);

    color_map_b452def91dc04900ba6300213954b24a.xAxis = d3.svg.axis()
        .scale(color_map_b452def91dc04900ba6300213954b24a.x)
        .orient("top")
        .tickSize(1)
        .tickValues([5.1, 5.583333333333333, 6.066666666666666, 6.55, 7.033333333333333, 7.516666666666667, 8.0]);

    color_map_b452def91dc04900ba6300213954b24a.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_b452def91dc04900ba6300213954b24a.g = color_map_b452def91dc04900ba6300213954b24a.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_b452def91dc04900ba6300213954b24a.g.selectAll("rect")
        .data(color_map_b452def91dc04900ba6300213954b24a.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_b452def91dc04900ba6300213954b24a.x(color_map_b452def91dc04900ba6300213954b24a.color.domain()[i - 1]) : color_map_b452def91dc04900ba6300213954b24a.x.range()[0],
            x1: i < color_map_b452def91dc04900ba6300213954b24a.color.domain().length ? color_map_b452def91dc04900ba6300213954b24a.x(color_map_b452def91dc04900ba6300213954b24a.color.domain()[i]) : color_map_b452def91dc04900ba6300213954b24a.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_b452def91dc04900ba6300213954b24a.g.call(color_map_b452def91dc04900ba6300213954b24a.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text('Entità del danno');
    
            var marker_cluster_a65134eec0554dd28eae036f46ce6199 = L.markerClusterGroup(
                {}
            );
            map_ae26379126cd4ce79aea9d0f395ec09f.addLayer(marker_cluster_a65134eec0554dd28eae036f46ce6199);
        
    
            var feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f = L.featureGroup.subGroup(
                marker_cluster_a65134eec0554dd28eae036f46ce6199
            );
            feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f.addTo(map_ae26379126cd4ce79aea9d0f395ec09f);
        
    
            var marker_43945afa74934c708b2b336c75c3c245 = L.marker(
                [44.934598, 11.24119],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6185de2aa08e417f99d3c4ec6763c9bc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_43945afa74934c708b2b336c75c3c245.setIcon(icon_6185de2aa08e417f99d3c4ec6763c9bc);
        
    
        var popup_3b82e5a3e14346638eb119507000326b = L.popup({"maxWidth": 2650});

        
            var i_frame_5391711dae2f4c2192f1feb9ff4d78d1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGlmaWNpbyBTb2NpbyBBc3Npc3RlbnppYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjk4ODcxLjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE2NTMwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3b82e5a3e14346638eb119507000326b.setContent(i_frame_5391711dae2f4c2192f1feb9ff4d78d1);
        

        marker_43945afa74934c708b2b336c75c3c245.bindPopup(popup_3b82e5a3e14346638eb119507000326b)
        ;

        
    
    
            var marker_ef7da6a8bf474593beb1b7055508229b = L.marker(
                [44.877249, 11.132249],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f1bcc6b5174d41298563b960750a898d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ef7da6a8bf474593beb1b7055508229b.setIcon(icon_f1bcc6b5174d41298563b960750a898d);
        
    
        var popup_f83890d9fda84c4a845b217c92d1b758 = L.popup({"maxWidth": 2650});

        
            var i_frame_df55401290fa49fdab747d62f740e9ec = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGlmaWNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTk0OTMuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f83890d9fda84c4a845b217c92d1b758.setContent(i_frame_df55401290fa49fdab747d62f740e9ec);
        

        marker_ef7da6a8bf474593beb1b7055508229b.bindPopup(popup_f83890d9fda84c4a845b217c92d1b758)
        ;

        
    
    
            var marker_972ad4ac1ee34e379f0b47b14ff3cb04 = L.marker(
                [44.896599, 11.45853],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2b94faacfcb742b08cfe1b4a1f087521 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_972ad4ac1ee34e379f0b47b14ff3cb04.setIcon(icon_2b94faacfcb742b08cfe1b4a1f087521);
        
    
        var popup_fc82114c1df34f9ba7fa4a021e8cada5 = L.popup({"maxWidth": 2650});

        
            var i_frame_da960de4bda74f8fb0ec5009f276ab8a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBUZWF0cm8gLSBBdWRpdG9yaXVtIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fc82114c1df34f9ba7fa4a021e8cada5.setContent(i_frame_da960de4bda74f8fb0ec5009f276ab8a);
        

        marker_972ad4ac1ee34e379f0b47b14ff3cb04.bindPopup(popup_fc82114c1df34f9ba7fa4a021e8cada5)
        ;

        
    
    
            var marker_0e2a2f87486844d0a598d46d8c402f9d = L.marker(
                [44.841807, 10.950505],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_303773fa621f45e996c33ee2877de81c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0e2a2f87486844d0a598d46d8c402f9d.setIcon(icon_303773fa621f45e996c33ee2877de81c);
        
    
        var popup_aa528d21a0654dbda809ce80350db8cc = L.popup({"maxWidth": 2650});

        
            var i_frame_3b83585b329d49ae8966461e63939911 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBpbnRlcnZlbnRvIGRpIHJpcXVhbGlmaWNhemlvbmUgZWQgYW1wbGlhbWVudG8gZGVsIHBvbG8gZGVsbCdpbmZhbnppYSBkaSBSb3ZlcmV0byBzdWxsYSBTZWNjaGlhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE2NTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aa528d21a0654dbda809ce80350db8cc.setContent(i_frame_3b83585b329d49ae8966461e63939911);
        

        marker_0e2a2f87486844d0a598d46d8c402f9d.bindPopup(popup_aa528d21a0654dbda809ce80350db8cc)
        ;

        
    
    
            var marker_862c9b5e5d2247f285c3f366cd26479a = L.marker(
                [44.890036, 10.898508],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c5bc15e5e1df420eaa8f0321a9314f80 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_862c9b5e5d2247f285c3f366cd26479a.setIcon(icon_c5bc15e5e1df420eaa8f0321a9314f80);
        
    
        var popup_80cb07d340ca479b9b746340fc14cbec = L.popup({"maxWidth": 2650});

        
            var i_frame_7817a31c85eb4ed293f7fd7a6b8ba111 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbnRlcnZlbnRvIGRpIGVmZmljZW50YW1lbnRvIGVuZXJnZXRpY28gY29uIGxhIHJlYWxpenphemlvbmUgZGkgdW4gbnVvdm8gaW1waWFudG8gZm90b3ZvbHRhaWNvIHN1bGxhIGNvcGVydHVyYSBkZWxsYSBwYWxlc3RyYSBkZWxsYSBTY3VvbGEgU2Vjb25kYXJpYSBkaSBQcmltbyBHcmFkbyBkaSBOb3ZpIGRpIE1vZGVuYSAnTW9uaWEgRnJhbmNpb3NpJyAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI4NjI4My43IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNDMxNC4xOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_80cb07d340ca479b9b746340fc14cbec.setContent(i_frame_7817a31c85eb4ed293f7fd7a6b8ba111);
        

        marker_862c9b5e5d2247f285c3f366cd26479a.bindPopup(popup_80cb07d340ca479b9b746340fc14cbec)
        ;

        
    
    
            var marker_1eb4aa7522f04293bc9a302035a1066f = L.marker(
                [44.724973999999996, 11.290364],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f389cf3fa4eb44bcbb248cd98a7ee1d1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1eb4aa7522f04293bc9a302035a1066f.setIcon(icon_f389cf3fa4eb44bcbb248cd98a7ee1d1);
        
    
        var popup_20d72797d3db4d16bc7e7153494722d4 = L.popup({"maxWidth": 2650});

        
            var i_frame_d1ca45e9fb434c26b5db4099161b7aac = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGlmaWNpbyBhZCB1c28gZGVwb3NpdG8tbGF2YW5kZXJpYS1zZXJ2aXppIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1ODk3OC4yNyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzE3Ny4xMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_20d72797d3db4d16bc7e7153494722d4.setContent(i_frame_d1ca45e9fb434c26b5db4099161b7aac);
        

        marker_1eb4aa7522f04293bc9a302035a1066f.bindPopup(popup_20d72797d3db4d16bc7e7153494722d4)
        ;

        
    
    
            var marker_88324bbc39674020950301ad585cb874 = L.marker(
                [44.892981, 11.423525999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a0e85b6a4b2848d8b5789278c16072bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_88324bbc39674020950301ad585cb874.setIcon(icon_a0e85b6a4b2848d8b5789278c16072bb);
        
    
        var popup_87594f5018484a13b98cb6b43675d618 = L.popup({"maxWidth": 2650});

        
            var i_frame_42d23158e7834835a45bdef54f29b136 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNlcm1hIFZWLkZGLiA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_87594f5018484a13b98cb6b43675d618.setContent(i_frame_42d23158e7834835a45bdef54f29b136);
        

        marker_88324bbc39674020950301ad585cb874.bindPopup(popup_87594f5018484a13b98cb6b43675d618)
        ;

        
    
    
            var marker_16da6bcaf0f348bbb4063c481c66d140 = L.marker(
                [44.82114, 11.005901],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_747cdc8ffa9b4148a3e19cec4d27340a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_16da6bcaf0f348bbb4063c481c66d140.setIcon(icon_747cdc8ffa9b4148a3e19cec4d27340a);
        
    
        var popup_42c36ad67456431683c58a9dafa714f3 = L.popup({"maxWidth": 2650});

        
            var i_frame_b10059d705c74b3189468e4f82d9829a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2FldGFubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDQwMTMuNzcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_42c36ad67456431683c58a9dafa714f3.setContent(i_frame_b10059d705c74b3189468e4f82d9829a);
        

        marker_16da6bcaf0f348bbb4063c481c66d140.bindPopup(popup_42c36ad67456431683c58a9dafa714f3)
        ;

        
    
    
            var marker_ac9ebe3a32234aa198ff8c0cc7e63136 = L.marker(
                [44.855565000000006, 11.214264],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2dd4f1c2cd6848c985f6905f07df33d8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ac9ebe3a32234aa198ff8c0cc7e63136.setIcon(icon_2dd4f1c2cd6848c985f6905f07df33d8);
        
    
        var popup_3192f97b1aea4fb391d67709700a3a5c = L.popup({"maxWidth": 2650});

        
            var i_frame_edae1ca2d1c54523ba7fa36acd560470 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdXJvIGRlbCBDaW1pdGVybyBkaSBNYXNzYSBGaW5hbGVzZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0NTU4MC40MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3192f97b1aea4fb391d67709700a3a5c.setContent(i_frame_edae1ca2d1c54523ba7fa36acd560470);
        

        marker_ac9ebe3a32234aa198ff8c0cc7e63136.bindPopup(popup_3192f97b1aea4fb391d67709700a3a5c)
        ;

        
    
    
            var marker_6092a1fb58154e1f862e50cb4923d9f3 = L.marker(
                [44.832153999999996, 11.294462],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_905c6bed9b3248ab92a8f11f00692867 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6092a1fb58154e1f862e50cb4923d9f3.setIcon(icon_905c6bed9b3248ab92a8f11f00692867);
        
    
        var popup_72a13450777540e4b065157c217e52f5 = L.popup({"maxWidth": 2650});

        
            var i_frame_283c13c1267d43ccbd21707b6077b42e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBGb250YW5hIGRpIFBpYXp6YSBCYWNjYXJpbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_72a13450777540e4b065157c217e52f5.setContent(i_frame_283c13c1267d43ccbd21707b6077b42e);
        

        marker_6092a1fb58154e1f862e50cb4923d9f3.bindPopup(popup_72a13450777540e4b065157c217e52f5)
        ;

        
    
    
            var marker_a0bddfe8c48e4205a5e826be25fa0a78 = L.marker(
                [44.833798, 11.297723],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_3a727cf9ee9c4c339904f595e92e3b1d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a0bddfe8c48e4205a5e826be25fa0a78.setIcon(icon_3a727cf9ee9c4c339904f595e92e3b1d);
        
    
        var popup_d68c564cb00d45b5827d3a7578c6bab8 = L.popup({"maxWidth": 2650});

        
            var i_frame_8824e539a200459c87e0f6fb854b3ad0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYXNzb2NvbW9kbyBCIC0gVmlsbGEgRmluZXR0aSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0ODUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d68c564cb00d45b5827d3a7578c6bab8.setContent(i_frame_8824e539a200459c87e0f6fb854b3ad0);
        

        marker_a0bddfe8c48e4205a5e826be25fa0a78.bindPopup(popup_d68c564cb00d45b5827d3a7578c6bab8)
        ;

        
    
    
            var marker_66ce02a849fe4f10b13c372081936056 = L.marker(
                [44.833884000000005, 11.297898],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_27c3bd39b3704f9e806a733a5e11bc52 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_66ce02a849fe4f10b13c372081936056.setIcon(icon_27c3bd39b3704f9e806a733a5e11bc52);
        
    
        var popup_05241c5478d342a588b6e4b9e613d27d = L.popup({"maxWidth": 2650});

        
            var i_frame_195eb604f24049e8a796df1c9f325fa1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYXNzb2NvbW9kbyBBIC0gVmlsbGEgRmluZXR0aSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0ODUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_05241c5478d342a588b6e4b9e613d27d.setContent(i_frame_195eb604f24049e8a796df1c9f325fa1);
        

        marker_66ce02a849fe4f10b13c372081936056.bindPopup(popup_05241c5478d342a588b6e4b9e613d27d)
        ;

        
    
    
            var marker_85fb894583404a49934cd05d52e8dc0e = L.marker(
                [44.827571999999996, 11.329206],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_9f06ff4de23640f1b4ebfbd4816bc235 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_85fb894583404a49934cd05d52e8dc0e.setIcon(icon_9f06ff4de23640f1b4ebfbd4816bc235);
        
    
        var popup_f30be3e5d3f84d38ac4310845ae76568 = L.popup({"maxWidth": 2650});

        
            var i_frame_56f57e3bf8ce45bca7aac54d6db415ca = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEFubmEgZSBjYW1wYW5pbGUgY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI3ODE0LjI0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f30be3e5d3f84d38ac4310845ae76568.setContent(i_frame_56f57e3bf8ce45bca7aac54d6db415ca);
        

        marker_85fb894583404a49934cd05d52e8dc0e.bindPopup(popup_f30be3e5d3f84d38ac4310845ae76568)
        ;

        
    
    
            var marker_c12e55cdc4e445c18895765ba09614f8 = L.marker(
                [44.835913, 11.321213],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f46931486dc0433082bf3005fa7ea796 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c12e55cdc4e445c18895765ba09614f8.setIcon(icon_f46931486dc0433082bf3005fa7ea796);
        
    
        var popup_e5ac3666cfe545968c539be58fe33fd5 = L.popup({"maxWidth": 2650});

        
            var i_frame_67737eaf76e44d4a80a3cc821391b63c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgZGkgUmVubyBGaW5hbGVzZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e5ac3666cfe545968c539be58fe33fd5.setContent(i_frame_67737eaf76e44d4a80a3cc821391b63c);
        

        marker_c12e55cdc4e445c18895765ba09614f8.bindPopup(popup_e5ac3666cfe545968c539be58fe33fd5)
        ;

        
    
    
            var marker_1c286e0bce71461bad96f9ba04b5f2b3 = L.marker(
                [44.836921999999994, 11.143741],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_92a72051278d4b889613e1ca96cbea43 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1c286e0bce71461bad96f9ba04b5f2b3.setIcon(icon_92a72051278d4b889613e1ca96cbea43);
        
    
        var popup_df0d99074a4a4149846f6d51e94b9a9d = L.popup({"maxWidth": 2650});

        
            var i_frame_666d2fede9094e338fcbd4ed6606e80f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgUHJpbWFyaWEgJ011cmF0b3JpJyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjM1NTMuNTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_df0d99074a4a4149846f6d51e94b9a9d.setContent(i_frame_666d2fede9094e338fcbd4ed6606e80f);
        

        marker_1c286e0bce71461bad96f9ba04b5f2b3.bindPopup(popup_df0d99074a4a4149846f6d51e94b9a9d)
        ;

        
    
    
            var marker_4140e595f3e747d3a61607544d099b9f = L.marker(
                [44.829384999999995, 11.287891],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ecf6dcdb43f74e98a801d47c7d6f6c8e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4140e595f3e747d3a61607544d099b9f.setIcon(icon_ecf6dcdb43f74e98a801d47c7d6f6c8e);
        
    
        var popup_b88e4073734649d4bf259e07cb610906 = L.popup({"maxWidth": 2650});

        
            var i_frame_4039075c72054938b936a5c99d8f73dc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBDb211bmFsZSBNb251bWVudGFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b88e4073734649d4bf259e07cb610906.setContent(i_frame_4039075c72054938b936a5c99d8f73dc);
        

        marker_4140e595f3e747d3a61607544d099b9f.bindPopup(popup_b88e4073734649d4bf259e07cb610906)
        ;

        
    
    
            var marker_24f78f693b08443d966e8562f607c54d = L.marker(
                [44.849996000000004, 11.074441],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5914010bfd8c4f66ae5bc8cd947314f1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_24f78f693b08443d966e8562f607c54d.setIcon(icon_5914010bfd8c4f66ae5bc8cd947314f1);
        
    
        var popup_a9198b2f8915426684cf0847cf07630a = L.popup({"maxWidth": 2650});

        
            var i_frame_f04c14cfd4044ebf8b651a5150376731 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaXJjb2xvIEFyY29iYWxlbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1FRE9MTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNDgzMjI0LjA5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a9198b2f8915426684cf0847cf07630a.setContent(i_frame_f04c14cfd4044ebf8b651a5150376731);
        

        marker_24f78f693b08443d966e8562f607c54d.bindPopup(popup_a9198b2f8915426684cf0847cf07630a)
        ;

        
    
    
            var marker_9182ae15a2694fb89b075acd3848fa82 = L.marker(
                [44.892801, 10.899709],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_9d2e872299764b2cb1f54e526b5736be = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9182ae15a2694fb89b075acd3848fa82.setIcon(icon_9d2e872299764b2cb1f54e526b5736be);
        
    
        var popup_a8afc491482e4504a1b91d4632e6a470 = L.popup({"maxWidth": 2650});

        
            var i_frame_c6c9b88a0c6649aca1ddee6e06e60949 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYXJjbyBkZWxsYSBSZXNpc3RlbnphIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzOTk0OS40NiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a8afc491482e4504a1b91d4632e6a470.setContent(i_frame_c6c9b88a0c6649aca1ddee6e06e60949);
        

        marker_9182ae15a2694fb89b075acd3848fa82.bindPopup(popup_a8afc491482e4504a1b91d4632e6a470)
        ;

        
    
    
            var marker_eccb6c9ba6954600afb10f2201103f16 = L.marker(
                [44.893569, 10.901357],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e4413a7ee597482db2506ba3f86391ca = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_eccb6c9ba6954600afb10f2201103f16.setIcon(icon_e4413a7ee597482db2506ba3f86391ca);
        
    
        var popup_0ed73d17c0374fae86d42abf6ca4623a = L.popup({"maxWidth": 2650});

        
            var i_frame_074506a1f4fa445a9af7bd6c61d80f50 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjA4NTEzLjY4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0ed73d17c0374fae86d42abf6ca4623a.setContent(i_frame_074506a1f4fa445a9af7bd6c61d80f50);
        

        marker_eccb6c9ba6954600afb10f2201103f16.bindPopup(popup_0ed73d17c0374fae86d42abf6ca4623a)
        ;

        
    
    
            var marker_d2663c01a5ee42cabda6f5b107cd5899 = L.marker(
                [44.841954, 10.949167999999998],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c9183f444c8247369df6f4ab06d19e44 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_d2663c01a5ee42cabda6f5b107cd5899.setIcon(icon_c9183f444c8247369df6f4ab06d19e44);
        
    
        var popup_a44c2a76d81f4388b0eae3eae9bd8f06 = L.popup({"maxWidth": 2650});

        
            var i_frame_3c1082b27103455ba106f5e287da5bfd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdmkgZGkgUm92ZXJldG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDcwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzNTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a44c2a76d81f4388b0eae3eae9bd8f06.setContent(i_frame_3c1082b27103455ba106f5e287da5bfd);
        

        marker_d2663c01a5ee42cabda6f5b107cd5899.bindPopup(popup_a44c2a76d81f4388b0eae3eae9bd8f06)
        ;

        
    
    
            var marker_dec48332251b4259a026d1e024c866ef = L.marker(
                [44.788233, 11.026955000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_dc6e994f1c064ea193236c360562f0c0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_dec48332251b4259a026d1e024c866ef.setIcon(icon_dc6e994f1c064ea193236c360562f0c0);
        
    
        var popup_9e883f2de1ac407ca9aa4d8476f129f4 = L.popup({"maxWidth": 2650});

        
            var i_frame_6ebd516ba42c4b2aba4a0cf19af19ee4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBOdW92YSBTY3VvbGEgTWVkaWEgc3RhdGFsZSBEYW50ZSBBbGlnaGllcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAyMDcwNzE4LjI5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9e883f2de1ac407ca9aa4d8476f129f4.setContent(i_frame_6ebd516ba42c4b2aba4a0cf19af19ee4);
        

        marker_dec48332251b4259a026d1e024c866ef.bindPopup(popup_9e883f2de1ac407ca9aa4d8476f129f4)
        ;

        
    
    
            var marker_b430eff3c6d54a9ca8b23813f0c3b013 = L.marker(
                [44.789774, 11.024221],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2ae219cce33741eca41f8cfa7549f06e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_b430eff3c6d54a9ca8b23813f0c3b013.setIcon(icon_2ae219cce33741eca41f8cfa7549f06e);
        
    
        var popup_de23acfedc9b4dd98126cb181784ec00 = L.popup({"maxWidth": 2650});

        
            var i_frame_b4c5ca6252a14710923d038ea7c61991 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTZWRlIHB1YmJsaWNhIEFzc2lzdGVuemEgQ3JvY2UgQmx1IChjZW50cm8gZGl1cm5vKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI0OTU4NC4xMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjI0NjI1LjcxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_de23acfedc9b4dd98126cb181784ec00.setContent(i_frame_b4c5ca6252a14710923d038ea7c61991);
        

        marker_b430eff3c6d54a9ca8b23813f0c3b013.bindPopup(popup_de23acfedc9b4dd98126cb181784ec00)
        ;

        
    
    
            var marker_01e360b25f564a599a9f8e53e2937e72 = L.marker(
                [44.860842, 11.077182],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_cace7846d64b4ac38d20bfea1d388648 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_01e360b25f564a599a9f8e53e2937e72.setIcon(icon_cace7846d64b4ac38d20bfea1d388648);
        
    
        var popup_1e9b223e38fb473d8654ef497e5fce2d = L.popup({"maxWidth": 2650});

        
            var i_frame_49b2e88830824579a310b30acd5d8683 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBDYW11cmFuYSAgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1FRE9MTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMDUwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1e9b223e38fb473d8654ef497e5fce2d.setContent(i_frame_49b2e88830824579a310b30acd5d8683);
        

        marker_01e360b25f564a599a9f8e53e2937e72.bindPopup(popup_1e9b223e38fb473d8654ef497e5fce2d)
        ;

        
    
    
            var marker_a79252db42b34bfab1e51d9f5abf3879 = L.marker(
                [44.849874, 11.074485000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2efe69772d584483b9ef5aaf997ed586 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a79252db42b34bfab1e51d9f5abf3879.setIcon(icon_2efe69772d584483b9ef5aaf997ed586);
        
    
        var popup_b6379a3f27c94d3cbcc84d200b538b13 = L.popup({"maxWidth": 2650});

        
            var i_frame_02b8d035166c462f8966f65135630087 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gRGl1cm5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjYxNDYuNDQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b6379a3f27c94d3cbcc84d200b538b13.setContent(i_frame_02b8d035166c462f8966f65135630087);
        

        marker_a79252db42b34bfab1e51d9f5abf3879.bindPopup(popup_b6379a3f27c94d3cbcc84d200b538b13)
        ;

        
    
    
            var marker_0239b575fcc14aef899a7cbc56bbcc5c = L.marker(
                [44.739057, 11.298458],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_54f32be2ac82428496242d8005b936f9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0239b575fcc14aef899a7cbc56bbcc5c.setIcon(icon_54f32be2ac82428496242d8005b936f9);
        
    
        var popup_1d66e0b216c74bba8cdfa71573c3d9c6 = L.popup({"maxWidth": 2650});

        
            var i_frame_4d725d7f0bee4014a7362b313adc2fe0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gdmlhIEZhcmluaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyMjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1d66e0b216c74bba8cdfa71573c3d9c6.setContent(i_frame_4d725d7f0bee4014a7362b313adc2fe0);
        

        marker_0239b575fcc14aef899a7cbc56bbcc5c.bindPopup(popup_1d66e0b216c74bba8cdfa71573c3d9c6)
        ;

        
    
    
            var marker_367ff197c4f747a59d957ad68b5b6083 = L.marker(
                [44.73083, 11.291152],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c96ec84042d44ee0bf260becdea38460 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_367ff197c4f747a59d957ad68b5b6083.setIcon(icon_c96ec84042d44ee0bf260becdea38460);
        
    
        var popup_78e50ee58be14d5892fc1f9b210f7b4b = L.popup({"maxWidth": 2650});

        
            var i_frame_5136139b98c748fba70ca846c7e8251b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCb2NjaW9maWxhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDYwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_78e50ee58be14d5892fc1f9b210f7b4b.setContent(i_frame_5136139b98c748fba70ca846c7e8251b);
        

        marker_367ff197c4f747a59d957ad68b5b6083.bindPopup(popup_78e50ee58be14d5892fc1f9b210f7b4b)
        ;

        
    
    
            var marker_b92c09023a0f48499df803f4ad42b5d5 = L.marker(
                [44.737503000000004, 11.299772],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e1269db784d54a72b8148c825f240112 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_b92c09023a0f48499df803f4ad42b5d5.setIcon(icon_e1269db784d54a72b8148c825f240112);
        
    
        var popup_670a478b3fb34235ab4114b20618e664 = L.popup({"maxWidth": 2650});

        
            var i_frame_2e72c6270e0b41f895442ed5fe803fc6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBWaWdpbGkgZGVsIEZ1b2NvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMDU3MzMuNTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDExMTgxLjU5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_670a478b3fb34235ab4114b20618e664.setContent(i_frame_2e72c6270e0b41f895442ed5fe803fc6);
        

        marker_b92c09023a0f48499df803f4ad42b5d5.bindPopup(popup_670a478b3fb34235ab4114b20618e664)
        ;

        
    
    
            var marker_2ac93715e8a24511a2aeab2ac885bd54 = L.marker(
                [44.714828999999995, 11.283083],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_19c912f594564d4bb0b8e75c401b556a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2ac93715e8a24511a2aeab2ac885bd54.setIcon(icon_19c912f594564d4bb0b8e75c401b556a);
        
    
        var popup_f053414ef3af404bbd7fc21e18787b7d = L.popup({"maxWidth": 2650});

        
            var i_frame_9358489959fb404ba1cde022cdab08f8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gUHJvdGV6aW9uZSBDaXZpbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTMzOTEuNTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f053414ef3af404bbd7fc21e18787b7d.setContent(i_frame_9358489959fb404ba1cde022cdab08f8);
        

        marker_2ac93715e8a24511a2aeab2ac885bd54.bindPopup(popup_f053414ef3af404bbd7fc21e18787b7d)
        ;

        
    
    
            var marker_828220295aa24acf91b6539a195ba5a9 = L.marker(
                [44.808519, 11.343558999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_519d8d3832f4415b81463bebf5f49e59 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_828220295aa24acf91b6539a195ba5a9.setIcon(icon_519d8d3832f4415b81463bebf5f49e59);
        
    
        var popup_55654d02ab584069b09c9169a62b86bc = L.popup({"maxWidth": 2650});

        
            var i_frame_e84a49521ccb4792b03cce8983419826 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgcHJpbWFyaWEgZGkgQnVvbmFjb21wcmEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDEwNzcwNS40MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_55654d02ab584069b09c9169a62b86bc.setContent(i_frame_e84a49521ccb4792b03cce8983419826);
        

        marker_828220295aa24acf91b6539a195ba5a9.bindPopup(popup_55654d02ab584069b09c9169a62b86bc)
        ;

        
    
    
            var marker_1fede63501a342a6b3133e5c43ecd013 = L.marker(
                [44.837934999999995, 11.283987],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_4e8d687c32da46489187d6672fc6e344 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1fede63501a342a6b3133e5c43ecd013.setIcon(icon_4e8d687c32da46489187d6672fc6e344);
        
    
        var popup_230636945e72401699e2575e23a76178 = L.popup({"maxWidth": 2650});

        
            var i_frame_df9e62183e8e473388060987006c70c9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTdXBlcmlvcmUgJ0lnbmF6aW8gQ2FsdmknIC0gTGljZW8gU2NpZW50aWZpY28gJ01vcmFuZGknIC0gcmlwYXJhemlvbmUgY2FwYW5ub25pIGUgY2FzYSBjdXN0b2RlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI5NzkwOS4yNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTgwMTYuODUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_230636945e72401699e2575e23a76178.setContent(i_frame_df9e62183e8e473388060987006c70c9);
        

        marker_1fede63501a342a6b3133e5c43ecd013.bindPopup(popup_230636945e72401699e2575e23a76178)
        ;

        
    
    
            var marker_497ce49818524e1880f48651a32ada69 = L.marker(
                [44.918034000000006, 10.812124],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_d7e3e952b12a43a3828a646c7f8725e8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_497ce49818524e1880f48651a32ada69.setIcon(icon_d7e3e952b12a43a3828a646c7f8725e8);
        
    
        var popup_4763fb09c4be4df68015a0235227854a = L.popup({"maxWidth": 2650});

        
            var i_frame_9220e17746504d8d8cea8595a841ad25 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgVmlhIENhcHBlbGxldHRhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4763fb09c4be4df68015a0235227854a.setContent(i_frame_9220e17746504d8d8cea8595a841ad25);
        

        marker_497ce49818524e1880f48651a32ada69.bindPopup(popup_4763fb09c4be4df68015a0235227854a)
        ;

        
    
    
            var marker_00f485e52fc04bf99dcc6c9855a044d1 = L.marker(
                [44.712031, 11.30787],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f666de52ac1a4910be5069f6caa55cee = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_00f485e52fc04bf99dcc6c9855a044d1.setIcon(icon_f666de52ac1a4910be5069f6caa55cee);
        
    
        var popup_b5b01cab909347358654dc53465e1e4f = L.popup({"maxWidth": 2650});

        
            var i_frame_dbb2eb83831f4b089e285f548eb7854d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIE1hcnRpbmVsbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI2MTUyMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b5b01cab909347358654dc53465e1e4f.setContent(i_frame_dbb2eb83831f4b089e285f548eb7854d);
        

        marker_00f485e52fc04bf99dcc6c9855a044d1.bindPopup(popup_b5b01cab909347358654dc53465e1e4f)
        ;

        
    
    
            var marker_cc05784125f74230a6f106e4207a515d = L.marker(
                [44.837737, 11.029549000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ebfb3682e53444fd8fb2ce0c7c18a3d6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_cc05784125f74230a6f106e4207a515d.setIcon(icon_ebfb3682e53444fd8fb2ce0c7c18a3d6);
        
    
        var popup_ca86fc89047447d681c2c69978b5ebf7 = L.popup({"maxWidth": 2650});

        
            var i_frame_a1335f3621314d4c89cfa403b62d077d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTZWRlIE11bmljaXBhbGUgIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQyNDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ca86fc89047447d681c2c69978b5ebf7.setContent(i_frame_a1335f3621314d4c89cfa403b62d077d);
        

        marker_cc05784125f74230a6f106e4207a515d.bindPopup(popup_ca86fc89047447d681c2c69978b5ebf7)
        ;

        
    
    
            var marker_822082abd16d4d20a9976e6d911690dd = L.marker(
                [44.834666, 11.026834],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a9a714b7d68745158f4838ea2a56ee94 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_822082abd16d4d20a9976e6d911690dd.setIcon(icon_a9a714b7d68745158f4838ea2a56ee94);
        
    
        var popup_56fd9147b37b4e5cbd3849741cf9533e = L.popup({"maxWidth": 2650});

        
            var i_frame_63f9779e8bd44cf48b111352c5b3e3fd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbmkgY29tdW5hbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNTEzNjEyLjEyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNjAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_56fd9147b37b4e5cbd3849741cf9533e.setContent(i_frame_63f9779e8bd44cf48b111352c5b3e3fd);
        

        marker_822082abd16d4d20a9976e6d911690dd.bindPopup(popup_56fd9147b37b4e5cbd3849741cf9533e)
        ;

        
    
    
            var marker_7e213fa676fe402e895693ee6c17ddc5 = L.marker(
                [44.837428, 11.030076],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ddfd775235b5488ea60a27f852c2e8ee = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_7e213fa676fe402e895693ee6c17ddc5.setIcon(icon_ddfd775235b5488ea60a27f852c2e8ee);
        
    
        var popup_c60eb55374104f168f82acae04c4214c = L.popup({"maxWidth": 2650});

        
            var i_frame_23d83ff735214a91b28a5be2ff5d7f21 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb25kb21pbmlvICdHcmV0YScgKEJpYmxpb3RlY2EgQ29tdW5hbGUpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDYzNTI3Ny44MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c60eb55374104f168f82acae04c4214c.setContent(i_frame_23d83ff735214a91b28a5be2ff5d7f21);
        

        marker_7e213fa676fe402e895693ee6c17ddc5.bindPopup(popup_c60eb55374104f168f82acae04c4214c)
        ;

        
    
    
            var marker_c7b9ed9b47154712a3906242100aaf5f = L.marker(
                [44.838321, 11.032274000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6f09927cc3ff456495efd3dd69614db4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c7b9ed9b47154712a3906242100aaf5f.setIcon(icon_6f09927cc3ff456495efd3dd69614db4);
        
    
        var popup_7bcbcce6a0094a4690fe6ddbdf686f8d = L.popup({"maxWidth": 2650});

        
            var i_frame_3e618d3571144bc48207c8fcc6b9d385 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBjb25kb21pbmlvICdpIEdsaWNpbmknIC0gYXV0b3JpbWVzc2EgY29tdW5hbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNzAyNTIuMjYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI0NTY4LjEzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7bcbcce6a0094a4690fe6ddbdf686f8d.setContent(i_frame_3e618d3571144bc48207c8fcc6b9d385);
        

        marker_c7b9ed9b47154712a3906242100aaf5f.bindPopup(popup_7bcbcce6a0094a4690fe6ddbdf686f8d)
        ;

        
    
    
            var marker_4fb55bf88fbc4b4abe034df166d1d9a0 = L.marker(
                [44.791143, 11.290554],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_65dd728f06204754a817e72bb8669ad1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4fb55bf88fbc4b4abe034df166d1d9a0.setIcon(icon_65dd728f06204754a817e72bb8669ad1);
        
    
        var popup_110327d2288d4a3f9f1a697e09f76fc2 = L.popup({"maxWidth": 2650});

        
            var i_frame_fa21f0b885304db09602c8c3f4eb61bb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jaGlhbGUgU2FudGlzc2ltYSBUcmluaXTDoCBkaSBEb2RpY2kgTW9yZWxsaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTgxNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTgxNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_110327d2288d4a3f9f1a697e09f76fc2.setContent(i_frame_fa21f0b885304db09602c8c3f4eb61bb);
        

        marker_4fb55bf88fbc4b4abe034df166d1d9a0.bindPopup(popup_110327d2288d4a3f9f1a697e09f76fc2)
        ;

        
    
    
            var marker_c1999d9d6add417d87b59500a513ec75 = L.marker(
                [44.723253, 11.282264999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_053670ffd9b041bb98b39769196fd283 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c1999d9d6add417d87b59500a513ec75.setIcon(icon_053670ffd9b041bb98b39769196fd283);
        
    
        var popup_e0c9cc156f754fc7974e6748f530b343 = L.popup({"maxWidth": 2650});

        
            var i_frame_d7a7ba55193a4576a69b500a5a9cea40 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgU3Vzc2lkaWFyaWEgZGkgU2FuIEdpb3Zhbm5pIEJvc2NvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxOTUyMC41MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTk1MjAuNTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e0c9cc156f754fc7974e6748f530b343.setContent(i_frame_d7a7ba55193a4576a69b500a5a9cea40);
        

        marker_c1999d9d6add417d87b59500a513ec75.bindPopup(popup_e0c9cc156f754fc7974e6748f530b343)
        ;

        
    
    
            var marker_1ef4aa7270334e0d9abb34f102838d3a = L.marker(
                [44.91769, 10.806254],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f1dd16c5a01d4a3abbcf8d8188416c1f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1ef4aa7270334e0d9abb34f102838d3a.setIcon(icon_f1dd16c5a01d4a3abbcf8d8188416c1f);
        
    
        var popup_fb1048f0a93f4becb61381d56e195282 = L.popup({"maxWidth": 2650});

        
            var i_frame_e403c991ec424eebae761a4d0c355778 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBMb2NhbGUgcGFycm9jY2hpYWxlIFNhbiBHaXVzZXBwZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTI5NDExMi4zMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fb1048f0a93f4becb61381d56e195282.setContent(i_frame_e403c991ec424eebae761a4d0c355778);
        

        marker_1ef4aa7270334e0d9abb34f102838d3a.bindPopup(popup_fb1048f0a93f4becb61381d56e195282)
        ;

        
    
    
            var marker_2002f3274a554e0db8c12ded7d899376 = L.marker(
                [44.713722, 11.304195],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_028386cfddeb4c4ab9c4f806644ed10a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2002f3274a554e0db8c12ded7d899376.setIcon(icon_028386cfddeb4c4ab9c4f806644ed10a);
        
    
        var popup_914ef4a74b344b909e974180ff174f9e = L.popup({"maxWidth": 2650});

        
            var i_frame_836062d7f301412bb1092dda8cba9192 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGlmaWNpbyBkaSBzZXJ2aXppbyBleCBzdGF6aW9uZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUElFVkUgREkgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTk1Mzc4LjcxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_914ef4a74b344b909e974180ff174f9e.setContent(i_frame_836062d7f301412bb1092dda8cba9192);
        

        marker_2002f3274a554e0db8c12ded7d899376.bindPopup(popup_914ef4a74b344b909e974180ff174f9e)
        ;

        
    
    
            var marker_abb1fc6ac7f442b1888f9f989d89ae57 = L.marker(
                [44.726281, 11.292076],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b0924f34c0d94d1f920fc1061246acab = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_abb1fc6ac7f442b1888f9f989d89ae57.setIcon(icon_b0924f34c0d94d1f920fc1061246acab);
        
    
        var popup_cc8d4120e8174270b4e05bf00c373981 = L.popup({"maxWidth": 2650});

        
            var i_frame_74c280e5a4904a51b42571fb8659e33c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gUGlldHJvIEFwb3N0b2xvIGUgY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA4MDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cc8d4120e8174270b4e05bf00c373981.setContent(i_frame_74c280e5a4904a51b42571fb8659e33c);
        

        marker_abb1fc6ac7f442b1888f9f989d89ae57.bindPopup(popup_cc8d4120e8174270b4e05bf00c373981)
        ;

        
    
    
            var marker_c578563a4ad042e394eb9ad9ba33f9a8 = L.marker(
                [44.764676, 11.485528],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_1396928c219240d0921a4efbd8bf9947 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c578563a4ad042e394eb9ad9ba33f9a8.setIcon(icon_1396928c219240d0921a4efbd8bf9947);
        
    
        var popup_9bdb4741d5c04aaca65a567d8566a993 = L.popup({"maxWidth": 2650});

        
            var i_frame_ce3fb9d8ceac459a879af63b1559c2cf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsbyBMYW1iZXJ0aW5pIChNdW5pY2lwaW8pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMzU1MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNzc1MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9bdb4741d5c04aaca65a567d8566a993.setContent(i_frame_ce3fb9d8ceac459a879af63b1559c2cf);
        

        marker_c578563a4ad042e394eb9ad9ba33f9a8.bindPopup(popup_9bdb4741d5c04aaca65a567d8566a993)
        ;

        
    
    
            var marker_55cb7605abad463a8ad168c8c2cb4ff2 = L.marker(
                [44.725127, 11.286534],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a62eb82da92f4e65a253e1ee00d75bda = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_55cb7605abad463a8ad168c8c2cb4ff2.setIcon(icon_a62eb82da92f4e65a253e1ee00d75bda);
        
    
        var popup_e35c72dc4a5d4fc8a28c701bf63650a6 = L.popup({"maxWidth": 2650});

        
            var i_frame_496ed09ef3a447bba035f0a1eed5839b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgZWxlbWVudGFyZSBQYXNjb2xpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMTg5OTg1LjMxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA2MjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e35c72dc4a5d4fc8a28c701bf63650a6.setContent(i_frame_496ed09ef3a447bba035f0a1eed5839b);
        

        marker_55cb7605abad463a8ad168c8c2cb4ff2.bindPopup(popup_e35c72dc4a5d4fc8a28c701bf63650a6)
        ;

        
    
    
            var marker_23ebb8cced3d4bae892673365cb7c5e9 = L.marker(
                [44.727647, 11.290741],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_81536aeaf3d0410e83cad8d5aa8c58d4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_23ebb8cced3d4bae892673365cb7c5e9.setIcon(icon_81536aeaf3d0410e83cad8d5aa8c58d4);
        
    
        var popup_0bf273cdce62427685e5599d562df8bb = L.popup({"maxWidth": 2650});

        
            var i_frame_829eacf7eb3049bb9f4c4942763e0689 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGNvbXVuYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE1NzI5Ny45MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0bf273cdce62427685e5599d562df8bb.setContent(i_frame_829eacf7eb3049bb9f4c4942763e0689);
        

        marker_23ebb8cced3d4bae892673365cb7c5e9.bindPopup(popup_0bf273cdce62427685e5599d562df8bb)
        ;

        
    
    
            var marker_474db7c5db004500ae7a4fafe4c463aa = L.marker(
                [44.835516, 11.36106],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_720f483b7645491895a74c34529762e4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_474db7c5db004500ae7a4fafe4c463aa.setIcon(icon_720f483b7645491895a74c34529762e4);
        
    
        var popup_151a89e6213640a7aaa36e4c3c80c882 = L.popup({"maxWidth": 2650});

        
            var i_frame_22a05134c98341db907a2629dabaddd1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQaW5hY290ZWNhIGNpdmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMDE5MTAuMTggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_151a89e6213640a7aaa36e4c3c80c882.setContent(i_frame_22a05134c98341db907a2629dabaddd1);
        

        marker_474db7c5db004500ae7a4fafe4c463aa.bindPopup(popup_151a89e6213640a7aaa36e4c3c80c882)
        ;

        
    
    
            var marker_77eaa59957494dc28d38e6048229c26e = L.marker(
                [44.726574, 11.289748],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_bd715fafdb04435a977cfc53d309c14a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_77eaa59957494dc28d38e6048229c26e.setIcon(icon_bd715fafdb04435a977cfc53d309c14a);
        
    
        var popup_f5039befb3ed4bc7acdcd7f5e728659d = L.popup({"maxWidth": 2650});

        
            var i_frame_4e7f4437eb6c4f64b4720056795b59e8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gY29tdW5hbGUgQm9yZ2F0dGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTE3NDA4Ljc4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f5039befb3ed4bc7acdcd7f5e728659d.setContent(i_frame_4e7f4437eb6c4f64b4720056795b59e8);
        

        marker_77eaa59957494dc28d38e6048229c26e.bindPopup(popup_f5039befb3ed4bc7acdcd7f5e728659d)
        ;

        
    
    
            var marker_dad07fadfbd848be99959f14929d4954 = L.marker(
                [44.7244, 11.290315],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_eef21e9c48c947c782cf2324bf8a0d43 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_dad07fadfbd848be99959f14929d4954.setIcon(icon_eef21e9c48c947c782cf2324bf8a0d43);
        
    
        var popup_38887bc994c44c618d94bd3bfd7ed478 = L.popup({"maxWidth": 2650});

        
            var i_frame_5d249ae1785c494494aeda7af6867404 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTdHJ1dHR1cmEgT3NwZWRhbGllcmEgU1MuIEFubnVuemlhdGEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgOTIzNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_38887bc994c44c618d94bd3bfd7ed478.setContent(i_frame_5d249ae1785c494494aeda7af6867404);
        

        marker_dad07fadfbd848be99959f14929d4954.bindPopup(popup_38887bc994c44c618d94bd3bfd7ed478)
        ;

        
    
    
            var marker_62d34807dc8648e1b9a731dcacd70054 = L.marker(
                [44.723243, 11.285196000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a4ade297e6b645fcb3ade1d447ceba7e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_62d34807dc8648e1b9a731dcacd70054.setIcon(icon_a4ade297e6b645fcb3ade1d447ceba7e);
        
    
        var popup_1a5f7fff58a64e8680d27f60e9e97012 = L.popup({"maxWidth": 2650});

        
            var i_frame_70b0e63c840b4da89caa3175353383df = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTdGFkaW8gQ29tdW5hbGUgJ0wuIEJ1bGdhcmVsbGknIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1a5f7fff58a64e8680d27f60e9e97012.setContent(i_frame_70b0e63c840b4da89caa3175353383df);
        

        marker_62d34807dc8648e1b9a731dcacd70054.bindPopup(popup_1a5f7fff58a64e8680d27f60e9e97012)
        ;

        
    
    
            var marker_a264e3ec14554d67bd4c76e0693fd41a = L.marker(
                [44.728715, 11.288979],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_de596cfc1cd444328912c33898bb39b4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a264e3ec14554d67bd4c76e0693fd41a.setIcon(icon_de596cfc1cd444328912c33898bb39b4);
        
    
        var popup_fb062cee965c49579ea64a2ed4ab093e = L.popup({"maxWidth": 2650});

        
            var i_frame_e52266f0910546ff95871ffb6248a5c9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIEdhbGxlcmFuaSBGYWx6b25pIHBvaSBSdXNjb25pL1BhbGF6em8gU2NhcnNlbGxpL0JpYmxpb3RlY2EgY29tdW5hbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgODAzMTcuMTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fb062cee965c49579ea64a2ed4ab093e.setContent(i_frame_e52266f0910546ff95871ffb6248a5c9);
        

        marker_a264e3ec14554d67bd4c76e0693fd41a.bindPopup(popup_fb062cee965c49579ea64a2ed4ab093e)
        ;

        
    
    
            var marker_b54da53cc8d1474d8b6809e69af8e350 = L.marker(
                [44.723701, 11.292634],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_170d770bb49e4883b378680226b2ad56 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_b54da53cc8d1474d8b6809e69af8e350.setIcon(icon_170d770bb49e4883b378680226b2ad56);
        
    
        var popup_6ec96cb51cdf4e938d800f3faafd7e3f = L.popup({"maxWidth": 2650});

        
            var i_frame_fd7caea1770a44198206b246e460b022 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb3J0YSBQaWV2ZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA1NzUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6ec96cb51cdf4e938d800f3faafd7e3f.setContent(i_frame_fd7caea1770a44198206b246e460b022);
        

        marker_b54da53cc8d1474d8b6809e69af8e350.bindPopup(popup_6ec96cb51cdf4e938d800f3faafd7e3f)
        ;

        
    
    
            var marker_0d2567b20cf14fa78df7296bc95d46af = L.marker(
                [44.859024, 10.965409],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b10436354456403f930586c4a55ae1be = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0d2567b20cf14fa78df7296bc95d46af.setIcon(icon_b10436354456403f930586c4a55ae1be);
        
    
        var popup_f086ea0594054aa5a58f94ad7a6136b9 = L.popup({"maxWidth": 2650});

        
            var i_frame_76100d0a1c5942efad52e95d9c213924 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUG9udGUgUGlvcHBhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gUE9TU0lET05JTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0OTY4MS45MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f086ea0594054aa5a58f94ad7a6136b9.setContent(i_frame_76100d0a1c5942efad52e95d9c213924);
        

        marker_0d2567b20cf14fa78df7296bc95d46af.bindPopup(popup_f086ea0594054aa5a58f94ad7a6136b9)
        ;

        
    
    
            var marker_886d262762814124926c3245de7bec53 = L.marker(
                [44.790911, 11.288662],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5d283623ce8c4779a79866881f5fd786 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_886d262762814124926c3245de7bec53.setIcon(icon_5d283623ce8c4779a79866881f5fd786);
        
    
        var popup_a6857081621a4decb99a8cbd34845c46 = L.popup({"maxWidth": 2650});

        
            var i_frame_c44c2a410ec74f269251a9df8a2917fe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaXJjb2xvIFhJSSBNb3JlbGxpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDM5MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a6857081621a4decb99a8cbd34845c46.setContent(i_frame_c44c2a410ec74f269251a9df8a2917fe);
        

        marker_886d262762814124926c3245de7bec53.bindPopup(popup_a6857081621a4decb99a8cbd34845c46)
        ;

        
    
    
            var marker_a290bab588304359b71e9b5ad51a8230 = L.marker(
                [44.836285, 11.03093],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_91666e880fbd41e8b8d8f6d459fdacba = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a290bab588304359b71e9b5ad51a8230.setIcon(icon_91666e880fbd41e8b8d8f6d459fdacba);
        
    
        var popup_055754dd0aef4e9090c38359eea76d0a = L.popup({"maxWidth": 2650});

        
            var i_frame_2c7f937267234e8bad6561a4d893d368 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW5lbWEgdGVhdHJvIEhlc3BlcmlhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzA0OTEuMjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_055754dd0aef4e9090c38359eea76d0a.setContent(i_frame_2c7f937267234e8bad6561a4d893d368);
        

        marker_a290bab588304359b71e9b5ad51a8230.bindPopup(popup_055754dd0aef4e9090c38359eea76d0a)
        ;

        
    
    
            var marker_ff4552a2fe854d4d84980633964ae5c9 = L.marker(
                [44.889744, 11.057908],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fdfc8b563d0b49129ba693b1c8143cfc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ff4552a2fe854d4d84980633964ae5c9.setIcon(icon_fdfc8b563d0b49129ba693b1c8143cfc);
        
    
        var popup_ab66961717e6432da136f7e9b31bc19a = L.popup({"maxWidth": 2650});

        
            var i_frame_12a91582be204d57ba9201083584b479 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYWxhIHBvbGl2YWxlbnRlIChwYXJyb2NjaGlhIGRpIFNhbiBCaWFnaW8gVmVzY292byBlIE1hcnRpcmUpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ab66961717e6432da136f7e9b31bc19a.setContent(i_frame_12a91582be204d57ba9201083584b479);
        

        marker_ff4552a2fe854d4d84980633964ae5c9.bindPopup(popup_ab66961717e6432da136f7e9b31bc19a)
        ;

        
    
    
            var marker_715b27f111e54c9bb0483568533353eb = L.marker(
                [44.885667, 11.416259],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_29b3d4b7769140338264e54d7e21e899 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_715b27f111e54c9bb0483568533353eb.setIcon(icon_29b3d4b7769140338264e54d7e21e899);
        
    
        var popup_68c062f399804f71b9f9d90cf1509b14 = L.popup({"maxWidth": 2650});

        
            var i_frame_d547f5833a2c4980af2e88a6bfaa3d67 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbCdBc3N1bnppb25lIGRpIE1hcmlhIFNhbnRpc3NpbWEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMzU0NTA2LjI5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_68c062f399804f71b9f9d90cf1509b14.setContent(i_frame_d547f5833a2c4980af2e88a6bfaa3d67);
        

        marker_715b27f111e54c9bb0483568533353eb.bindPopup(popup_68c062f399804f71b9f9d90cf1509b14)
        ;

        
    
    
            var marker_8adc25fc519c4ba1a087ba8abbaf5379 = L.marker(
                [44.859246999999996, 10.999778],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c243dee4ca0c49fca0bc0ecb9c5233ab = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_8adc25fc519c4ba1a087ba8abbaf5379.setIcon(icon_c243dee4ca0c49fca0bc0ecb9c5233ab);
        
    
        var popup_9b0e87436e174f7e8f23346a835f4ff0 = L.popup({"maxWidth": 2650});

        
            var i_frame_5761b998990143f695f18287ca79696a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGUgZWxlbWVudGFyaSBkaSBEaXN2ZXRybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEwNDEwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9b0e87436e174f7e8f23346a835f4ff0.setContent(i_frame_5761b998990143f695f18287ca79696a);
        

        marker_8adc25fc519c4ba1a087ba8abbaf5379.bindPopup(popup_9b0e87436e174f7e8f23346a835f4ff0)
        ;

        
    
    
            var marker_aab5c7f11d384362b2eddd4d50832968 = L.marker(
                [44.922503999999996, 11.390277000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_7e62ae6ed24544dca3555e597e9654c6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_aab5c7f11d384362b2eddd4d50832968.setIcon(icon_7e62ae6ed24544dca3555e597e9654c6);
        
    
        var popup_6e5d19abc1874cd093dde60b00022a5d = L.popup({"maxWidth": 2650});

        
            var i_frame_5e21f8ec474c46fca78abaf709a2288f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jY2hpYWxlIGRlbCBDdW9yZSBJbW1hY29sYXRvIGRpIE1hcmlhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6e5d19abc1874cd093dde60b00022a5d.setContent(i_frame_5e21f8ec474c46fca78abaf709a2288f);
        

        marker_aab5c7f11d384362b2eddd4d50832968.bindPopup(popup_6e5d19abc1874cd093dde60b00022a5d)
        ;

        
    
    
            var marker_abef11a308f9493cbd42e1ba4c5bc604 = L.marker(
                [44.879971999999995, 11.415921],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_206002ebc9ab45a4a66a84ca4f4d124e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_abef11a308f9493cbd42e1ba4c5bc604.setIcon(icon_206002ebc9ab45a4a66a84ca4f4d124e);
        
    
        var popup_a4b087f72af54d6db6661799ad4e3235 = L.popup({"maxWidth": 2650});

        
            var i_frame_e9347f039ef44ebb95b30d9128be87ac = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPc3BlZGFsZSBGcmF0ZWxsaSBCb3JzZWxsaSAtIHNlY29uZGEgZmFzZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDM2NTUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a4b087f72af54d6db6661799ad4e3235.setContent(i_frame_e9347f039ef44ebb95b30d9128be87ac);
        

        marker_abef11a308f9493cbd42e1ba4c5bc604.bindPopup(popup_a4b087f72af54d6db6661799ad4e3235)
        ;

        
    
    
            var marker_d1c1d4001c0c4b31a53892a03cfd0a63 = L.marker(
                [44.914831, 10.984392999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5eb46ce384aa4e0397387ccc2b3b1808 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_d1c1d4001c0c4b31a53892a03cfd0a63.setIcon(icon_5eb46ce384aa4e0397387ccc2b3b1808);
        
    
        var popup_74b1bc9361194bbaa60bea99effad4dd = L.popup({"maxWidth": 2650});

        
            var i_frame_e335f6b1b1ad4106a10a6766bef81eed = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBPc3BlZGFsZSAtIFBhZGlnbGlvbmUgTXVyYXRvcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDYwOTg3My44OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_74b1bc9361194bbaa60bea99effad4dd.setContent(i_frame_e335f6b1b1ad4106a10a6766bef81eed);
        

        marker_d1c1d4001c0c4b31a53892a03cfd0a63.bindPopup(popup_74b1bc9361194bbaa60bea99effad4dd)
        ;

        
    
    
            var marker_824d29ad562540d1a2e0a33590ae2d1c = L.marker(
                [44.886925, 11.068384],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_49e19130ea204f41be0adb491991abef = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_824d29ad562540d1a2e0a33590ae2d1c.setIcon(icon_49e19130ea204f41be0adb491991abef);
        
    
        var popup_048f73b24d9e4a70acb7b144d56a3705 = L.popup({"maxWidth": 2650});

        
            var i_frame_f0e93a0507f04b5cafcf687bc97f304a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21taXNzYXJpYXRvIGRpIFBvbGl6aWEgLSBkaSBwdWJibGljYSBzaWN1cmV6emEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzNTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_048f73b24d9e4a70acb7b144d56a3705.setContent(i_frame_f0e93a0507f04b5cafcf687bc97f304a);
        

        marker_824d29ad562540d1a2e0a33590ae2d1c.bindPopup(popup_048f73b24d9e4a70acb7b144d56a3705)
        ;

        
    
    
            var marker_0670b1a38075497e8ab65b407d4de058 = L.marker(
                [44.838734, 11.086913000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_0ffb541770ae4276b6b87c46c64c3b48 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0670b1a38075497e8ab65b407d4de058.setIcon(icon_0ffb541770ae4276b6b87c46c64c3b48);
        
    
        var popup_0345fd2fd6dd483d95d04fe81ef92f18 = L.popup({"maxWidth": 2650});

        
            var i_frame_b3afc9b1e0644532891e93eac58eb321 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc29saW5vIChPcmF0b3JpbykgZGkgUy4gR2ltaWduYW5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0345fd2fd6dd483d95d04fe81ef92f18.setContent(i_frame_b3afc9b1e0644532891e93eac58eb321);
        

        marker_0670b1a38075497e8ab65b407d4de058.bindPopup(popup_0345fd2fd6dd483d95d04fe81ef92f18)
        ;

        
    
    
            var marker_e8e21dcb13ed4378a320416e63f72f15 = L.marker(
                [44.833673, 11.294407000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e7d0c21d9fdb40df8b61389eb4494786 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e8e21dcb13ed4378a320416e63f72f15.setIcon(icon_e7d0c21d9fdb40df8b61389eb4494786);
        
    
        var popup_9c8bd75df2e84d058f9e9f98caeefdb3 = L.popup({"maxWidth": 2650});

        
            var i_frame_79987d729c334f39b9d4319f51dae4a6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsIFJvc2FyaW8vQ2hpZXNhIGRlbGxhIEIuVi4gZGVsIFJvc2FyaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTkyOTA3OC4xOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTA1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9c8bd75df2e84d058f9e9f98caeefdb3.setContent(i_frame_79987d729c334f39b9d4319f51dae4a6);
        

        marker_e8e21dcb13ed4378a320416e63f72f15.bindPopup(popup_9c8bd75df2e84d058f9e9f98caeefdb3)
        ;

        
    
    
            var marker_d7e59e3264844b19a06872738eeea68f = L.marker(
                [44.798044, 11.276243],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_db14a271976348d2a90455902c8d414f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_d7e59e3264844b19a06872738eeea68f.setIcon(icon_db14a271976348d2a90455902c8d414f);
        
    
        var popup_15352c3ce3f34f3fb63467540756468b = L.popup({"maxWidth": 2650});

        
            var i_frame_5c4ecf3768234b7bab8d4bb43ad114d8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBzY3VvbGUgZGkgR2FsZWF6emEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_15352c3ce3f34f3fb63467540756468b.setContent(i_frame_5c4ecf3768234b7bab8d4bb43ad114d8);
        

        marker_d7e59e3264844b19a06872738eeea68f.bindPopup(popup_15352c3ce3f34f3fb63467540756468b)
        ;

        
    
    
            var marker_80bc67bfeb584cfd920d2c754d09265f = L.marker(
                [44.788875, 11.020392],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_0491ecd18d304256801bdd260a176356 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_80bc67bfeb584cfd920d2c754d09265f.setIcon(icon_0491ecd18d304256801bdd260a176356);
        
    
        var popup_3928d434fb5548999f3fa465d1cb62ef = L.popup({"maxWidth": 2650});

        
            var i_frame_31e1ba04314845d98372c43eeff3ebe5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21wbGVzc28gVmlsbGEgVHVzaW5pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjkwODQzMy44NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTUwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3928d434fb5548999f3fa465d1cb62ef.setContent(i_frame_31e1ba04314845d98372c43eeff3ebe5);
        

        marker_80bc67bfeb584cfd920d2c754d09265f.bindPopup(popup_3928d434fb5548999f3fa465d1cb62ef)
        ;

        
    
    
            var marker_182d05c82cd64e96a8dbae88a92ea73f = L.marker(
                [44.887570000000004, 11.065749],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f0a6b17de7c74976bc0723d52d7f6ccc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_182d05c82cd64e96a8dbae88a92ea73f.setIcon(icon_f0a6b17de7c74976bc0723d52d7f6ccc);
        
    
        var popup_ac26f45ff13d4986895ebe1752dceb9c = L.popup({"maxWidth": 2650});

        
            var i_frame_96d3b89f63ce4599848ba7e67fa66658 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU2Vydml6aSAtIENvcnBvIE85IDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNDQ3Njg2LjMyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ac26f45ff13d4986895ebe1752dceb9c.setContent(i_frame_96d3b89f63ce4599848ba7e67fa66658);
        

        marker_182d05c82cd64e96a8dbae88a92ea73f.bindPopup(popup_ac26f45ff13d4986895ebe1752dceb9c)
        ;

        
    
    
            var marker_b8fbf18d37564d4c9bf2bcfa3696f0e9 = L.marker(
                [44.883133, 11.064533],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fffbdd82eed949d88d907f01cc25d4d0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_b8fbf18d37564d4c9bf2bcfa3696f0e9.setIcon(icon_fffbdd82eed949d88d907f01cc25d4d0);
        
    
        var popup_2ae06be36ff54aca9ac1752dfc9c0df4 = L.popup({"maxWidth": 2650});

        
            var i_frame_a37c8f19f15c46e086b7781f162b6649 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPc3BlZGFsZSBTYW50YSBNYXJpYSBCaWFuY2EgLSBDb3JwbyA4IDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2ae06be36ff54aca9ac1752dfc9c0df4.setContent(i_frame_a37c8f19f15c46e086b7781f162b6649);
        

        marker_b8fbf18d37564d4c9bf2bcfa3696f0e9.bindPopup(popup_2ae06be36ff54aca9ac1752dfc9c0df4)
        ;

        
    
    
            var marker_962ea98b6cac4f38841ebdae375dd992 = L.marker(
                [44.833975, 11.298052],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ab1140a558ab407494556cea1110dff6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_962ea98b6cac4f38841ebdae375dd992.setIcon(icon_ab1140a558ab407494556cea1110dff6);
        
    
        var popup_1775da200200477eb689b2a14fffeb02 = L.popup({"maxWidth": 2650});

        
            var i_frame_860100e113c14978ad8243e1263f94bc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPc3BlZGFsZSBjaXZpbGUgZGVnbGkgSW5mZXJtaSAgLSBDb3JwbyAxIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQ2NjY5MTEuMjIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1775da200200477eb689b2a14fffeb02.setContent(i_frame_860100e113c14978ad8243e1263f94bc);
        

        marker_962ea98b6cac4f38841ebdae375dd992.bindPopup(popup_1775da200200477eb689b2a14fffeb02)
        ;

        
    
    
            var marker_f6ac3ca59cda4486a1f1b1166b73e728 = L.marker(
                [44.722846000000004, 11.147132000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_dc6e465b66b44d5fbed756fda59fa85d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f6ac3ca59cda4486a1f1b1166b73e728.setIcon(icon_dc6e465b66b44d5fbed756fda59fa85d);
        
    
        var popup_7c80311729cc409a9e4efd842e524d23 = L.popup({"maxWidth": 2650});

        
            var i_frame_8bac9b3a621e48d4a68f1f788b8e67db = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb250ZSBzdWwgY29sbGV0dG9yZSBhY3F1ZSBhbHRlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7c80311729cc409a9e4efd842e524d23.setContent(i_frame_8bac9b3a621e48d4a68f1f788b8e67db);
        

        marker_f6ac3ca59cda4486a1f1b1166b73e728.bindPopup(popup_7c80311729cc409a9e4efd842e524d23)
        ;

        
    
    
            var marker_b184cf835f4d410d8cbca9f529bab2ec = L.marker(
                [44.712368, 11.30304],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2e0b7c269e6c4088b443311c9364a3b3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_b184cf835f4d410d8cbca9f529bab2ec.setIcon(icon_2e0b7c269e6c4088b443311c9364a3b3);
        
    
        var popup_ab3beae69db9442c86eb9f228784e9d6 = L.popup({"maxWidth": 2650});

        
            var i_frame_3070ce22408a4f588fcff38a3c540db6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIENhbnRvbmllcmEgIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBQSUVWRSBESSBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA3MDEwMy4zIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ab3beae69db9442c86eb9f228784e9d6.setContent(i_frame_3070ce22408a4f588fcff38a3c540db6);
        

        marker_b184cf835f4d410d8cbca9f529bab2ec.bindPopup(popup_ab3beae69db9442c86eb9f228784e9d6)
        ;

        
    
    
            var marker_4bf20a2a3a8d4c88a1fc20af1fce004e = L.marker(
                [44.88367, 11.427096],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_3b4d3d92e0124f87a293cb31ec76332e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4bf20a2a3a8d4c88a1fc20af1fce004e.setIcon(icon_3b4d3d92e0124f87a293cb31ec76332e);
        
    
        var popup_ca132072220e4f5a88e11c527c20339c = L.popup({"maxWidth": 2650});

        
            var i_frame_653dd611f50742c8b308fd9b94edc9f5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNlbGxvIGUgbWFnYXp6aW5vIGlkcmF1bGljbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA2MjI4My43NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzExNC4xOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ca132072220e4f5a88e11c527c20339c.setContent(i_frame_653dd611f50742c8b308fd9b94edc9f5);
        

        marker_4bf20a2a3a8d4c88a1fc20af1fce004e.bindPopup(popup_ca132072220e4f5a88e11c527c20339c)
        ;

        
    
    
            var marker_444fda82feb14bc8a78bd0cb35cd4f2d = L.marker(
                [44.820243, 11.193825],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a1284d7b3ce446b4913d153c32dbe5e5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_444fda82feb14bc8a78bd0cb35cd4f2d.setIcon(icon_a1284d7b3ce446b4913d153c32dbe5e5);
        
    
        var popup_43717fba92cd4d8fab46e8c7433f85e6 = L.popup({"maxWidth": 2650});

        
            var i_frame_f3300a1319b8435aac116208dd5f827e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBpZHJvdm9ybyBEb2dhcm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA3MDcwMi43OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTcxODcuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_43717fba92cd4d8fab46e8c7433f85e6.setContent(i_frame_f3300a1319b8435aac116208dd5f827e);
        

        marker_444fda82feb14bc8a78bd0cb35cd4f2d.bindPopup(popup_43717fba92cd4d8fab46e8c7433f85e6)
        ;

        
    
    
            var marker_3e7e69d146284b0d8b276d892b7bef5f = L.marker(
                [44.886052, 11.404853],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_db59ed4f30a7466a92c84002ad38012d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3e7e69d146284b0d8b276d892b7bef5f.setIcon(icon_db59ed4f30a7466a92c84002ad38012d);
        
    
        var popup_ada5bc8042c9423a9ec8c9b545b63f8b = L.popup({"maxWidth": 2650});

        
            var i_frame_e5e47733d3174bd88c0d3aeae5b66ffe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW1wbyBzcG9ydGl2byBCb25kZW5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ada5bc8042c9423a9ec8c9b545b63f8b.setContent(i_frame_e5e47733d3174bd88c0d3aeae5b66ffe);
        

        marker_3e7e69d146284b0d8b276d892b7bef5f.bindPopup(popup_ada5bc8042c9423a9ec8c9b545b63f8b)
        ;

        
    
    
            var marker_d98cf60854904e03b7ad8a87048c9f84 = L.marker(
                [44.917542, 11.353169],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6e70c8faf2d9458aabb8c37cf8c51383 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_d98cf60854904e03b7ad8a87048c9f84.setIcon(icon_6e70c8faf2d9458aabb8c37cf8c51383);
        
    
        var popup_13a32da2056e4dc294a9d34a63999b2f = L.popup({"maxWidth": 2650});

        
            var i_frame_14b256f50cb6450696aa3dab4c814574 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUcmlidW5hIGRlbCBDYW1wbyBzcG9ydGl2byBkaSBTY29ydGljaGlubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAyMjk3MS4wMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_13a32da2056e4dc294a9d34a63999b2f.setContent(i_frame_14b256f50cb6450696aa3dab4c814574);
        

        marker_d98cf60854904e03b7ad8a87048c9f84.bindPopup(popup_13a32da2056e4dc294a9d34a63999b2f)
        ;

        
    
    
            var marker_df8418d2b56546609c45914f45a83bd0 = L.marker(
                [44.885245, 11.418781],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f04fa60aabdc4b08b7a0b1c4995a57a5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_df8418d2b56546609c45914f45a83bd0.setIcon(icon_f04fa60aabdc4b08b7a0b1c4995a57a5);
        
    
        var popup_79fa57ede74542538584194b0a82b844 = L.popup({"maxWidth": 2650});

        
            var i_frame_454a1ba981e74551acbb00c937f17f1f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQLlQuIFNlZGUgQXZpcyAtIFAuMSBBcHBhcnRhbWVudG8gY3VzdG9kZSBtdW5pY2lwaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_79fa57ede74542538584194b0a82b844.setContent(i_frame_454a1ba981e74551acbb00c937f17f1f);
        

        marker_df8418d2b56546609c45914f45a83bd0.bindPopup(popup_79fa57ede74542538584194b0a82b844)
        ;

        
    
    
            var marker_9ad5c1beb5904d859d0b99101fc768a0 = L.marker(
                [44.841252000000004, 11.169108],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_3fc35b4b5d88471d9d1d25daee7f24d7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9ad5c1beb5904d859d0b99101fc768a0.setIcon(icon_3fc35b4b5d88471d9d1d25daee7f24d7);
        
    
        var popup_0b83d8633f414e35b6ec0a513ad168d6 = L.popup({"maxWidth": 2650});

        
            var i_frame_dc9b35105fe84fe7a350be6ff3cb7184 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW5vbmljYSBwYXJyb2NjaGlhbGUgLSB1ZmZpY2kgLSBhcHBhcnRhbWVudGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxOTk2NS4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxOTk2NS4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0b83d8633f414e35b6ec0a513ad168d6.setContent(i_frame_dc9b35105fe84fe7a350be6ff3cb7184);
        

        marker_9ad5c1beb5904d859d0b99101fc768a0.bindPopup(popup_0b83d8633f414e35b6ec0a513ad168d6)
        ;

        
    
    
            var marker_a4d91f49515d4259bc6a10fdbc9c7046 = L.marker(
                [44.862572, 11.178912],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a0e090a91eb94516a80867e8bf8f88cc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a4d91f49515d4259bc6a10fdbc9c7046.setIcon(icon_a0e090a91eb94516a80867e8bf8f88cc);
        
    
        var popup_6372f970fcaa48628ba75953fbeeedb4 = L.popup({"maxWidth": 2650});

        
            var i_frame_ef9b998a37fa457f8f76a864c51301f9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgU3BhbGxhbnphbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6372f970fcaa48628ba75953fbeeedb4.setContent(i_frame_ef9b998a37fa457f8f76a864c51301f9);
        

        marker_a4d91f49515d4259bc6a10fdbc9c7046.bindPopup(popup_6372f970fcaa48628ba75953fbeeedb4)
        ;

        
    
    
            var marker_b5d448e018114a7292a8106565d6b7c3 = L.marker(
                [44.833632, 11.302351],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_964659937b7d4a9690e0c7549d14452c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_b5d448e018114a7292a8106565d6b7c3.setIcon(icon_964659937b7d4a9690e0c7549d14452c);
        
    
        var popup_a3009eb344c7466ab895cb54b159d005 = L.popup({"maxWidth": 2650});

        
            var i_frame_ec747840c7db4f98a1832efc5b89eeab = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBEaXNwZW5zYXJpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a3009eb344c7466ab895cb54b159d005.setContent(i_frame_ec747840c7db4f98a1832efc5b89eeab);
        

        marker_b5d448e018114a7292a8106565d6b7c3.bindPopup(popup_a3009eb344c7466ab895cb54b159d005)
        ;

        
    
    
            var marker_4ee220af8db24c8d814f69ff2bc77d71 = L.marker(
                [44.852616999999995, 11.215296],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fd88d66165164a3b9d2b7d7546dd25d3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4ee220af8db24c8d814f69ff2bc77d71.setIcon(icon_fd88d66165164a3b9d2b7d7546dd25d3);
        
    
        var popup_46747259ef0f41c69418a53ee18620be = L.popup({"maxWidth": 2650});

        
            var i_frame_f3e4b5b4e67744c7ab095e2e3fbbf577 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgc2Vjb25kYXJpYSBMLiBQb2xldHRpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDIyNjcxOC4xMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTMzNzAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_46747259ef0f41c69418a53ee18620be.setContent(i_frame_f3e4b5b4e67744c7ab095e2e3fbbf577);
        

        marker_4ee220af8db24c8d814f69ff2bc77d71.bindPopup(popup_46747259ef0f41c69418a53ee18620be)
        ;

        
    
    
            var marker_0d68dd11c31d4496a5c6bba8df85f943 = L.marker(
                [44.829434, 11.295172],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5e76eb53749d4aa2a2b84717a6baf4b0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0d68dd11c31d4496a5c6bba8df85f943.setIcon(icon_5e76eb53749d4aa2a2b84717a6baf4b0);
        
    
        var popup_b8a1aed4fef34b7086550e6dd1f94a8b = L.popup({"maxWidth": 2650});

        
            var i_frame_0f1b679e26a3415db04997abc7ea7b3d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBQaWV6b21ldHJpY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b8a1aed4fef34b7086550e6dd1f94a8b.setContent(i_frame_0f1b679e26a3415db04997abc7ea7b3d);
        

        marker_0d68dd11c31d4496a5c6bba8df85f943.bindPopup(popup_b8a1aed4fef34b7086550e6dd1f94a8b)
        ;

        
    
    
            var marker_8bc28deb39fd4058848afc97b73dfe3c = L.marker(
                [44.834099, 11.296689],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_58bc9a3e09e040cebfee7dab2e8039e5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_8bc28deb39fd4058848afc97b73dfe3c.setIcon(icon_58bc9a3e09e040cebfee7dab2e8039e5);
        
    
        var popup_27a8bef5d8d54ae794d22ff482bd123e = L.popup({"maxWidth": 2650});

        
            var i_frame_6b0ae1fdb61d4fa796cf92312eae192a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gc29jaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE4MjYwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_27a8bef5d8d54ae794d22ff482bd123e.setContent(i_frame_6b0ae1fdb61d4fa796cf92312eae192a);
        

        marker_8bc28deb39fd4058848afc97b73dfe3c.bindPopup(popup_27a8bef5d8d54ae794d22ff482bd123e)
        ;

        
    
    
            var marker_02099f69b82c41cca50d14c2a97af770 = L.marker(
                [44.833242, 11.298236],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_1652b356a43140aebc4d6d6c8f5ddc98 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_02099f69b82c41cca50d14c2a97af770.setIcon(icon_1652b356a43140aebc4d6d6c8f5ddc98);
        
    
        var popup_bde3b72749654561bfafaa5848e06436 = L.popup({"maxWidth": 2650});

        
            var i_frame_f7256ec30f664b8199210f694c43cca5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBWaWxsYSBGaW5ldHRpIGUgU2N1ZGVyaWUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bde3b72749654561bfafaa5848e06436.setContent(i_frame_f7256ec30f664b8199210f694c43cca5);
        

        marker_02099f69b82c41cca50d14c2a97af770.bindPopup(popup_bde3b72749654561bfafaa5848e06436)
        ;

        
    
    
            var marker_1b7d3873613e454a8a4fdc16833e176a = L.marker(
                [44.83356, 11.293385],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b9e191dea6aa4e5a8c22d66de14be153 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1b7d3873613e454a8a4fdc16833e176a.setIcon(icon_b9e191dea6aa4e5a8c22d66de14be153);
        
    
        var popup_82c0ea532ef44290bee25c54de14a03d = L.popup({"maxWidth": 2650});

        
            var i_frame_df67ede52f6342a798cb36c1d7a57d64 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgRWxlbWVudGFyZSAnRS4gQ2FzdGVsZnJhbmNoaScgKGlzdC4gUHJvZmVzc2lvbmFsZSkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_82c0ea532ef44290bee25c54de14a03d.setContent(i_frame_df67ede52f6342a798cb36c1d7a57d64);
        

        marker_1b7d3873613e454a8a4fdc16833e176a.bindPopup(popup_82c0ea532ef44290bee25c54de14a03d)
        ;

        
    
    
            var marker_a88f7058f85441adbc1ca0a912f931ba = L.marker(
                [44.853010999999995, 11.215347],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e3d4d8d4d2c946c5913ab66bb55ab0a4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a88f7058f85441adbc1ca0a912f931ba.setIcon(icon_e3d4d8d4d2c946c5913ab66bb55ab0a4);
        
    
        var popup_5f0956c81a604088ba81f9deee151b90 = L.popup({"maxWidth": 2650});

        
            var i_frame_87c1522b3dd54a758990897dcfc7458d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgZGkgTXVzaWNhIE1hc3NhIEZpbmFsZXNlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTMxNjcuNTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5f0956c81a604088ba81f9deee151b90.setContent(i_frame_87c1522b3dd54a758990897dcfc7458d);
        

        marker_a88f7058f85441adbc1ca0a912f931ba.bindPopup(popup_5f0956c81a604088ba81f9deee151b90)
        ;

        
    
    
            var marker_6a0d48774e794602960b23f00704a3fa = L.marker(
                [44.833853999999995, 11.294374000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a0ecf9e39ee447d98282fa7a89de44c8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6a0d48774e794602960b23f00704a3fa.setIcon(icon_a0ecf9e39ee447d98282fa7a89de44c8);
        
    
        var popup_306ddb233d9a4b058d3ad79e6544ed2a = L.popup({"maxWidth": 2650});

        
            var i_frame_ae0cbcf6916f46d6ac8b70b37601d81b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIE1hcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_306ddb233d9a4b058d3ad79e6544ed2a.setContent(i_frame_ae0cbcf6916f46d6ac8b70b37601d81b);
        

        marker_6a0d48774e794602960b23f00704a3fa.bindPopup(popup_306ddb233d9a4b058d3ad79e6544ed2a)
        ;

        
    
    
            var marker_3254b819395148d482bd559881764405 = L.marker(
                [44.834487, 11.300936],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_410f89160cbe428d812b67b374e69a25 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3254b819395148d482bd559881764405.setIcon(icon_410f89160cbe428d812b67b374e69a25);
        
    
        var popup_7646200f162f43168e3d8c30e2cc0727 = L.popup({"maxWidth": 2650});

        
            var i_frame_9f6376d0fdb2464da7918d52297a6ce8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIHByb3RldHRhIGUgYWxsb2dnaSBwb2xpZnVuemlvbmFsaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7646200f162f43168e3d8c30e2cc0727.setContent(i_frame_9f6376d0fdb2464da7918d52297a6ce8);
        

        marker_3254b819395148d482bd559881764405.bindPopup(popup_7646200f162f43168e3d8c30e2cc0727)
        ;

        
    
    
            var marker_3757a27839b54518aeb2f39f2c02be14 = L.marker(
                [44.855178, 11.214533],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f9285929ab494302a331f54c0910981a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3757a27839b54518aeb2f39f2c02be14.setIcon(icon_f9285929ab494302a331f54c0910981a);
        
    
        var popup_f27232c8a886448782a11ca740694c91 = L.popup({"maxWidth": 2650});

        
            var i_frame_7e83bb15e4534c6db056f6d0b9d38c98 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBNYXNzYSBGaWxhbmVzZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f27232c8a886448782a11ca740694c91.setContent(i_frame_7e83bb15e4534c6db056f6d0b9d38c98);
        

        marker_3757a27839b54518aeb2f39f2c02be14.bindPopup(popup_f27232c8a886448782a11ca740694c91)
        ;

        
    
    
            var marker_7043372c03ff45a58f9f3964c92f74d4 = L.marker(
                [44.833993, 11.296213],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_1cb38091d5e84f02b8f08cab6ef3bf8f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_7043372c03ff45a58f9f3964c92f74d4.setIcon(icon_1cb38091d5e84f02b8f08cab6ef3bf8f);
        
    
        var popup_609f7a0416584ccd8c7888a230bc0733 = L.popup({"maxWidth": 2650});

        
            var i_frame_8ea3d0e604a54bf09a152e43437ec227 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGN1c3RvZGUgVGVhdHJvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_609f7a0416584ccd8c7888a230bc0733.setContent(i_frame_8ea3d0e604a54bf09a152e43437ec227);
        

        marker_7043372c03ff45a58f9f3964c92f74d4.bindPopup(popup_609f7a0416584ccd8c7888a230bc0733)
        ;

        
    
    
            var marker_29980548ef3b4007afa874f7aa575b76 = L.marker(
                [44.830214, 11.2887],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ddff0c0f6b024eb38b45ce378bbec6fd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_29980548ef3b4007afa874f7aa575b76.setIcon(icon_ddff0c0f6b024eb38b45ce378bbec6fd);
        
    
        var popup_b06a9d71c8fd4de0a1832e612fc3dcc2 = L.popup({"maxWidth": 2650});

        
            var i_frame_c091df95c38541a6b90a0aa193bd1e30 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBYml0YXppb25lIGUgY2FtZXJhIG1vcnR1YXJpYSBDaW1pdGVybyBjb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b06a9d71c8fd4de0a1832e612fc3dcc2.setContent(i_frame_c091df95c38541a6b90a0aa193bd1e30);
        

        marker_29980548ef3b4007afa874f7aa575b76.bindPopup(popup_b06a9d71c8fd4de0a1832e612fc3dcc2)
        ;

        
    
    
            var marker_11cdcb7b3c8c40468ac96d669a2c4179 = L.marker(
                [44.848963, 11.07145],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_19c1dcb7480d4609a35be0e1aec613f5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_11cdcb7b3c8c40468ac96d669a2c4179.setIcon(icon_19c1dcb7480d4609a35be0e1aec613f5);
        
    
        var popup_03fedac42ee148c8939742382bd0cc82 = L.popup({"maxWidth": 2650});

        
            var i_frame_c74a33ed3b634e6fa37d2f3355aed7b3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCaWJsaW90ZWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNzAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_03fedac42ee148c8939742382bd0cc82.setContent(i_frame_c74a33ed3b634e6fa37d2f3355aed7b3);
        

        marker_11cdcb7b3c8c40468ac96d669a2c4179.bindPopup(popup_03fedac42ee148c8939742382bd0cc82)
        ;

        
    
    
            var marker_2799e0b9f29944dd815c8b741bf4cb97 = L.marker(
                [44.831629, 11.28975],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fdc37dfc5ce3437c9f0ac4a45fb3d132 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2799e0b9f29944dd815c8b741bf4cb97.setIcon(icon_fdc37dfc5ce3437c9f0ac4a45fb3d132);
        
    
        var popup_321a7605d1594126b310ba5c27aeb3d2 = L.popup({"maxWidth": 2650});

        
            var i_frame_7a348103f8304ab594b36dc4a8c8865f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTcG9nbGlhdG9pbyBDYW1wbyBTcG9ydGl2byBSb2JpbnNvbiA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_321a7605d1594126b310ba5c27aeb3d2.setContent(i_frame_7a348103f8304ab594b36dc4a8c8865f);
        

        marker_2799e0b9f29944dd815c8b741bf4cb97.bindPopup(popup_321a7605d1594126b310ba5c27aeb3d2)
        ;

        
    
    
            var marker_d202d4283a0f4ba0b980dfcd767403cb = L.marker(
                [44.836428000000005, 11.289553],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5c0873d6f1b8432da87e7cc68be61fd7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_d202d4283a0f4ba0b980dfcd767403cb.setIcon(icon_5c0873d6f1b8432da87e7cc68be61fd7);
        
    
        var popup_2833735bfc6e4ca6a375bb762e32c155 = L.popup({"maxWidth": 2650});

        
            var i_frame_9c82df2cd02b4be893442b5b49cd59d1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW1wbyBTcG9ydGl2byBDYXBvbHVvZ28gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMjUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2833735bfc6e4ca6a375bb762e32c155.setContent(i_frame_9c82df2cd02b4be893442b5b49cd59d1);
        

        marker_d202d4283a0f4ba0b980dfcd767403cb.bindPopup(popup_2833735bfc6e4ca6a375bb762e32c155)
        ;

        
    
    
            var marker_309eec691e9d46e296dcf0e050c2f4d4 = L.marker(
                [44.825549, 11.302816],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_022ed96bb59f4010963209c654490a23 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_309eec691e9d46e296dcf0e050c2f4d4.setIcon(icon_022ed96bb59f4010963209c654490a23);
        
    
        var popup_21aac61ff3814595b982f86185573c2c = L.popup({"maxWidth": 2650});

        
            var i_frame_1d400754160b46dc86193adf990b8255 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb25kb21pbmlvICdNaWFyaSAxNScgKENhcGFubm9uaSBkZWwgQ2FybmV2YWxlKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxNDYyNzYuMzIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEzMTY0OC42OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_21aac61ff3814595b982f86185573c2c.setContent(i_frame_1d400754160b46dc86193adf990b8255);
        

        marker_309eec691e9d46e296dcf0e050c2f4d4.bindPopup(popup_21aac61ff3814595b982f86185573c2c)
        ;

        
    
    
            var marker_9687bfbbf61a4870b8b44e4939291e98 = L.marker(
                [44.833989, 11.300141],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2ac4117c66ad437a96487f770cb6cc0c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9687bfbbf61a4870b8b44e4939291e98.setIcon(icon_2ac4117c66ad437a96487f770cb6cc0c);
        
    
        var popup_6e375dbe08ed40089ebd05aac055feca = L.popup({"maxWidth": 2650});

        
            var i_frame_fb48345c04654260b8eda5b4944a236a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBQcmV0dXJhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6e375dbe08ed40089ebd05aac055feca.setContent(i_frame_fb48345c04654260b8eda5b4944a236a);
        

        marker_9687bfbbf61a4870b8b44e4939291e98.bindPopup(popup_6e375dbe08ed40089ebd05aac055feca)
        ;

        
    
    
            var marker_6f592f250c73405a851c08b4876d58e4 = L.marker(
                [44.834513, 11.296097],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_eb9afd4eb4484805b3367b3b6449f577 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6f592f250c73405a851c08b4876d58e4.setIcon(icon_eb9afd4eb4484805b3367b3b6449f577);
        
    
        var popup_d41b6636ca664e5f8dd1b492b616ec4a = L.popup({"maxWidth": 2650});

        
            var i_frame_eedace9a6eb94a57b57823e1354d6eb5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBzY3VvbGEgbWF0ZXJuYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d41b6636ca664e5f8dd1b492b616ec4a.setContent(i_frame_eedace9a6eb94a57b57823e1354d6eb5);
        

        marker_6f592f250c73405a851c08b4876d58e4.bindPopup(popup_d41b6636ca664e5f8dd1b492b616ec4a)
        ;

        
    
    
            var marker_0fc3a1aa27ce4b2eae3b9ef75e49c743 = L.marker(
                [44.848861, 11.072024],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_15206a0d863b4161859826c906222f20 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0fc3a1aa27ce4b2eae3b9ef75e49c743.setIcon(icon_15206a0d863b4161859826c906222f20);
        
    
        var popup_8cc6966d2c434485a6f85d80fcaa9963 = L.popup({"maxWidth": 2650});

        
            var i_frame_0465472f6a6a4f0889e6a773800ae38e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBNdW5pY2lwaW8gKHVyYmFuIENlbnRlcikgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1FRE9MTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNjkzODgwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDM1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8cc6966d2c434485a6f85d80fcaa9963.setContent(i_frame_0465472f6a6a4f0889e6a773800ae38e);
        

        marker_0fc3a1aa27ce4b2eae3b9ef75e49c743.bindPopup(popup_8cc6966d2c434485a6f85d80fcaa9963)
        ;

        
    
    
            var marker_06667ff5d3864a62bf53ddbfc1cfa82f = L.marker(
                [44.830870000000004, 11.29528],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_8c05fa9dda744e6b837f78577a1f1fa7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_06667ff5d3864a62bf53ddbfc1cfa82f.setIcon(icon_8c05fa9dda744e6b837f78577a1f1fa7);
        
    
        var popup_4ae7516cabc4445782a74271ec9be49b = L.popup({"maxWidth": 2650});

        
            var i_frame_80ca22e8a4af402da31aae52ec1d5617 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYW5jYSBiaWJsaW90ZWNhIGUgdWZmaWNpIGNvbXVuYWxpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4ae7516cabc4445782a74271ec9be49b.setContent(i_frame_80ca22e8a4af402da31aae52ec1d5617);
        

        marker_06667ff5d3864a62bf53ddbfc1cfa82f.bindPopup(popup_4ae7516cabc4445782a74271ec9be49b)
        ;

        
    
    
            var marker_681fa992f9cc472c8e1799b927ea29fb = L.marker(
                [44.832187, 11.295757],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c322a60979ad4903a2def429aa35a4ce = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_681fa992f9cc472c8e1799b927ea29fb.setIcon(icon_c322a60979ad4903a2def429aa35a4ce);
        
    
        var popup_f6feb93171174dfbb3fe2139558757e5 = L.popup({"maxWidth": 2650});

        
            var i_frame_48cd73be1a77410aac28958513f13911 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gLSBDYXNhIEdhbGVpIC0gUGFsYXp6byBCb3J0b2xhenppIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjUyNjQ0LjM3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f6feb93171174dfbb3fe2139558757e5.setContent(i_frame_48cd73be1a77410aac28958513f13911);
        

        marker_681fa992f9cc472c8e1799b927ea29fb.bindPopup(popup_f6feb93171174dfbb3fe2139558757e5)
        ;

        
    
    
            var marker_82da62d70224461b8b71f1b17464c1cd = L.marker(
                [44.832060999999996, 11.295803999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2b999654a61848889376457767d36f7a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_82da62d70224461b8b71f1b17464c1cd.setIcon(icon_2b999654a61848889376457767d36f7a);
        
    
        var popup_dd258ef93a454673bd86c311d16f6085 = L.popup({"maxWidth": 2650});

        
            var i_frame_21ee21fb825b478089e932b4f7a55e3c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIEJvcnRvbGF6emkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dd258ef93a454673bd86c311d16f6085.setContent(i_frame_21ee21fb825b478089e932b4f7a55e3c);
        

        marker_82da62d70224461b8b71f1b17464c1cd.bindPopup(popup_dd258ef93a454673bd86c311d16f6085)
        ;

        
    
    
            var marker_0902b1f4214d40f8a968a6f165fe6758 = L.marker(
                [44.893629, 10.900725999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_30ff55144ede40a69efc6a152bcad45f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0902b1f4214d40f8a968a6f165fe6758.setIcon(icon_30ff55144ede40a69efc6a152bcad45f);
        
    
        var popup_7bddfacaaf9e4a9face06f98dd935f08 = L.popup({"maxWidth": 2650});

        
            var i_frame_335a68452b5d4d0d9db692ba00a319eb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBDaXZpY2EgLSBUb3JyZSBkZWxsJ09yb2xvZ2lvICA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7bddfacaaf9e4a9face06f98dd935f08.setContent(i_frame_335a68452b5d4d0d9db692ba00a319eb);
        

        marker_0902b1f4214d40f8a968a6f165fe6758.bindPopup(popup_7bddfacaaf9e4a9face06f98dd935f08)
        ;

        
    
    
            var marker_ea0b8430268f4bdab5cb0c829e8d86b1 = L.marker(
                [44.892353, 10.899925],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_3468fb8e8de54b1d901043216220ada8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ea0b8430268f4bdab5cb0c829e8d86b1.setIcon(icon_3468fb8e8de54b1d901043216220ada8);
        
    
        var popup_7870ac8fbd0c4531ab9aee3d87d8e332 = L.popup({"maxWidth": 2650});

        
            var i_frame_bc4d8fbbba294ac5a8cbb8f49765d773 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gc29jaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7870ac8fbd0c4531ab9aee3d87d8e332.setContent(i_frame_bc4d8fbbba294ac5a8cbb8f49765d773);
        

        marker_ea0b8430268f4bdab5cb0c829e8d86b1.bindPopup(popup_7870ac8fbd0c4531ab9aee3d87d8e332)
        ;

        
    
    
            var marker_2b9a57a5386e445d861db4a5736bc0f4 = L.marker(
                [44.840562, 10.954057],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fac4d4ff37cb479b9cab416a1acea153 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2b9a57a5386e445d861db4a5736bc0f4.setIcon(icon_fac4d4ff37cb479b9cab416a1acea153);
        
    
        var popup_f08f348439234fd8a8e9e9c9550176d1 = L.popup({"maxWidth": 2650});

        
            var i_frame_e4563caf349d4a99adafb87a9955da9c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTZWRlIGFzc29jaWF6aW9uaSAtIEFSQ0kgZGkgUm92ZXJldG8gLSAgZXggT01OSSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA1MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f08f348439234fd8a8e9e9c9550176d1.setContent(i_frame_e4563caf349d4a99adafb87a9955da9c);
        

        marker_2b9a57a5386e445d861db4a5736bc0f4.bindPopup(popup_f08f348439234fd8a8e9e9c9550176d1)
        ;

        
    
    
            var marker_3575e21e7b9d46eaa7ceb5ebfacd9bc9 = L.marker(
                [44.840609, 10.954292],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ac61275c0046407f9cc05f05943f1f46 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3575e21e7b9d46eaa7ceb5ebfacd9bc9.setIcon(icon_ac61275c0046407f9cc05f05943f1f46);
        
    
        var popup_3b4ffe754a5b4330b50c20fce6c2e50b = L.popup({"maxWidth": 2650});

        
            var i_frame_0cce768a9d1c4f359a1582af6bfc9f94 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgRWxlbWVudGFyZSBlIE1lZGlhIGRpIFJvdmVyZXRvIFMvUyBDZXNhcmUgQmF0dGlzdGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzEwNjg1LjgyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3b4ffe754a5b4330b50c20fce6c2e50b.setContent(i_frame_0cce768a9d1c4f359a1582af6bfc9f94);
        

        marker_3575e21e7b9d46eaa7ceb5ebfacd9bc9.bindPopup(popup_3b4ffe754a5b4330b50c20fce6c2e50b)
        ;

        
    
    
            var marker_567d373eb8234dd4aaa8bf2053d540bf = L.marker(
                [44.882838, 10.896075],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_24ec74f6b35742e4b3bfeae4791b6685 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_567d373eb8234dd4aaa8bf2053d540bf.setIcon(icon_24ec74f6b35742e4b3bfeae4791b6685);
        
    
        var popup_f62c6cd9d8214196ba059ae1b9f28764 = L.popup({"maxWidth": 2650});

        
            var i_frame_203f90def7b441cfa29f46d6115f79f1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYWxhIGRlbGxhIENvcnRlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAyOTEwNS4xIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f62c6cd9d8214196ba059ae1b9f28764.setContent(i_frame_203f90def7b441cfa29f46d6115f79f1);
        

        marker_567d373eb8234dd4aaa8bf2053d540bf.bindPopup(popup_f62c6cd9d8214196ba059ae1b9f28764)
        ;

        
    
    
            var marker_72d3ae0bbfdc4a06989862ed5ccb8eca = L.marker(
                [44.885128, 11.418375],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c9dacee7d9224d688ec50e41a8f5eb3a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_72d3ae0bbfdc4a06989862ed5ccb8eca.setIcon(icon_c9dacee7d9224d688ec50e41a8f5eb3a);
        
    
        var popup_13b7e88c7b5642d2aba2bdba3a53ef66 = L.popup({"maxWidth": 2650});

        
            var i_frame_b0e16f0e2b7043d48e5d0e908ec577fc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_13b7e88c7b5642d2aba2bdba3a53ef66.setContent(i_frame_b0e16f0e2b7043d48e5d0e908ec577fc);
        

        marker_72d3ae0bbfdc4a06989862ed5ccb8eca.bindPopup(popup_13b7e88c7b5642d2aba2bdba3a53ef66)
        ;

        
    
    
            var marker_dcf68152d5374264a866690599c91cf8 = L.marker(
                [44.88505, 11.41991],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5b76630f1d3642b380f3ff6559b6f94b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_dcf68152d5374264a866690599c91cf8.setIcon(icon_5b76630f1d3642b380f3ff6559b6f94b);
        
    
        var popup_ee9240dd4fea4a9fb5ed0a0b6cda2e5e = L.popup({"maxWidth": 2650});

        
            var i_frame_0789393b18cb465e8631b0df8562913d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIEJvdHRhenppL1BhbGF6em8gZGVsIHJpY292ZXJvIEJvdHRhenppIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ee9240dd4fea4a9fb5ed0a0b6cda2e5e.setContent(i_frame_0789393b18cb465e8631b0df8562913d);
        

        marker_dcf68152d5374264a866690599c91cf8.bindPopup(popup_ee9240dd4fea4a9fb5ed0a0b6cda2e5e)
        ;

        
    
    
            var marker_6e17bd30b75240a1a975f1ac155dcc0e = L.marker(
                [44.713795000000005, 11.306689],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_0773beee1def426d8fcdfa0958af261e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6e17bd30b75240a1a975f1ac155dcc0e.setIcon(icon_0773beee1def426d8fcdfa0958af261e);
        
    
        var popup_3f39d73971284d8dacfb686b8ee60696 = L.popup({"maxWidth": 2650});

        
            var i_frame_9514bc37331046b496b3ab5115f444ff = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIE1hc3RlbGxhcmkgLSBQaW5hY290ZWNhIENvbXVuYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBQSUVWRSBESSBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxNDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTQwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3f39d73971284d8dacfb686b8ee60696.setContent(i_frame_9514bc37331046b496b3ab5115f444ff);
        

        marker_6e17bd30b75240a1a975f1ac155dcc0e.bindPopup(popup_3f39d73971284d8dacfb686b8ee60696)
        ;

        
    
    
            var marker_16fb0335900a425ea16fed7e602c5449 = L.marker(
                [44.711348, 11.306886],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_7d0a83a7cd48486f96aa69e4d96100f1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_16fb0335900a425ea16fed7e602c5449.setIcon(icon_7d0a83a7cd48486f96aa69e4d96100f1);
        
    
        var popup_0b900001ffa84b6b996885aef52a461f = L.popup({"maxWidth": 2650});

        
            var i_frame_5e4ef4f379c444bfa0870abb0993df94 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgRWxlbWVudGFyZSBEZSBBbWljaXMgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDU5OTU4My4xNyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgODAyOTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0b900001ffa84b6b996885aef52a461f.setContent(i_frame_5e4ef4f379c444bfa0870abb0993df94);
        

        marker_16fb0335900a425ea16fed7e602c5449.bindPopup(popup_0b900001ffa84b6b996885aef52a461f)
        ;

        
    
    
            var marker_ade982fb5c1343f79b02b3de917caf12 = L.marker(
                [44.785075, 11.170657],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_4aaf79baea72437986a04d964a15fd98 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ade982fb5c1343f79b02b3de917caf12.setIcon(icon_4aaf79baea72437986a04d964a15fd98);
        
    
        var popup_965a4a594b774789a55a214dd7d7cce4 = L.popup({"maxWidth": 2650});

        
            var i_frame_5f6ef7193bb44e70afb22f619818f6f6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBDYXNlbGxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_965a4a594b774789a55a214dd7d7cce4.setContent(i_frame_5f6ef7193bb44e70afb22f619818f6f6);
        

        marker_ade982fb5c1343f79b02b3de917caf12.bindPopup(popup_965a4a594b774789a55a214dd7d7cce4)
        ;

        
    
    
            var marker_4c0cb50d1e8d4a20a8f28013827ee012 = L.marker(
                [44.7901, 11.235695],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2a8f1748e6c744318280ed4c65bb4ad9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4c0cb50d1e8d4a20a8f28013827ee012.setIcon(icon_2a8f1748e6c744318280ed4c65bb4ad9);
        
    
        var popup_99563e2b41474c929b27ba244f4f62bb = L.popup({"maxWidth": 2650});

        
            var i_frame_6b9662cca0fd4555a83e48ce56f36059 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBQYWxhdGEgUGVwb2xpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_99563e2b41474c929b27ba244f4f62bb.setContent(i_frame_6b9662cca0fd4555a83e48ce56f36059);
        

        marker_4c0cb50d1e8d4a20a8f28013827ee012.bindPopup(popup_99563e2b41474c929b27ba244f4f62bb)
        ;

        
    
    
            var marker_2c3be23af2634e88ba91c5d0d1446995 = L.marker(
                [44.755973, 11.138436],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_db0c7de5ab504bfaa2d9a934888e45c3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2c3be23af2634e88ba91c5d0d1446995.setIcon(icon_db0c7de5ab504bfaa2d9a934888e45c3);
        
    
        var popup_d885609f09f8447b8b6400662a5e1881 = L.popup({"maxWidth": 2650});

        
            var i_frame_19cec927c20e4682a0f4d13db2a0c838 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlaSBSb25jaGkgZSBDaGllc2EgZGkgUy4gTWF0dGVvLCBjaWJvcmlvIGUgc3RlbW1hIGRlaSBDYXByYXJhIHJvY2NhL2Nhc3RlbGxvIC0gYWxhIG5vcmQgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d885609f09f8447b8b6400662a5e1881.setContent(i_frame_19cec927c20e4682a0f4d13db2a0c838);
        

        marker_2c3be23af2634e88ba91c5d0d1446995.bindPopup(popup_d885609f09f8447b8b6400662a5e1881)
        ;

        
    
    
            var marker_2891d1260c1d45f9bafe2ba03365dcda = L.marker(
                [44.755916, 11.138366],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_9c89548e0d4948198d3dcbd5f70df0af = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2891d1260c1d45f9bafe2ba03365dcda.setIcon(icon_9c89548e0d4948198d3dcbd5f70df0af);
        
    
        var popup_23cffc4134bd4994b1f4412a2e30fbbe = L.popup({"maxWidth": 2650});

        
            var i_frame_1313340c10524aed9b986079e3b9b301 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlaSBSb25jaGkgZSBDaGllc2EgZGkgUy4gTWF0dGVvLCBjaWJvcmlvIGUgc3RlbW1hIGRlaSBDYXByYXJhIHJvY2NhL2Nhc3RlbGxvIC0gYWxhIHN1ZCA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_23cffc4134bd4994b1f4412a2e30fbbe.setContent(i_frame_1313340c10524aed9b986079e3b9b301);
        

        marker_2891d1260c1d45f9bafe2ba03365dcda.bindPopup(popup_23cffc4134bd4994b1f4412a2e30fbbe)
        ;

        
    
    
            var marker_be0e81e6206d4c1c99c31c0db99555b0 = L.marker(
                [44.755911, 11.138419],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_1686dfe00d444f29a5e12eef1139049a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_be0e81e6206d4c1c99c31c0db99555b0.setIcon(icon_1686dfe00d444f29a5e12eef1139049a);
        
    
        var popup_882bbbf06a4b4f0381b189d0f41be126 = L.popup({"maxWidth": 2650});

        
            var i_frame_7fd33cbc9886420daa7dbf931c8b4a27 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlaSBSb25jaGkgZSBDaGllc2EgZGkgUy4gTWF0dGVvLCBjaWJvcmlvIGUgc3RlbW1hIGRlaSBDYXByYXJhIHJvY2NhL2Nhc3RlbGxvIC0gdmlsbGEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_882bbbf06a4b4f0381b189d0f41be126.setContent(i_frame_7fd33cbc9886420daa7dbf931c8b4a27);
        

        marker_be0e81e6206d4c1c99c31c0db99555b0.bindPopup(popup_882bbbf06a4b4f0381b189d0f41be126)
        ;

        
    
    
            var marker_f1bfe4a17af24d41813a47ef4c2ad2ea = L.marker(
                [44.755872, 11.138309],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_8bf6ef7ce26049dd811cc8005fbc8523 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f1bfe4a17af24d41813a47ef4c2ad2ea.setIcon(icon_8bf6ef7ce26049dd811cc8005fbc8523);
        
    
        var popup_e09db6dc459d4cc789ea770bee602ade = L.popup({"maxWidth": 2650});

        
            var i_frame_dc43bfad0bb44f36949fed014e20fd67 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlaSBSb25jaGkgZSBDaGllc2EgZGkgUy4gTWF0dGVvLCBjaWJvcmlvIGUgc3RlbW1hIGRlaSBDYXByYXJhIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e09db6dc459d4cc789ea770bee602ade.setContent(i_frame_dc43bfad0bb44f36949fed014e20fd67);
        

        marker_f1bfe4a17af24d41813a47ef4c2ad2ea.bindPopup(popup_e09db6dc459d4cc789ea770bee602ade)
        ;

        
    
    
            var marker_e21373bdc2a945eeaeca17b050f1f56a = L.marker(
                [44.795695, 11.276407],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_79e8300c211c4851a3b281073f9c5f8f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e21373bdc2a945eeaeca17b050f1f56a.setIcon(icon_79e8300c211c4851a3b281073f9c5f8f);
        
    
        var popup_d05ab74c341c42fbb5f2a18fc4d1ea8d = L.popup({"maxWidth": 2650});

        
            var i_frame_ba101e3d4b4143a0aadb1ddfe3755abe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBHYWxlYXp6YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d05ab74c341c42fbb5f2a18fc4d1ea8d.setContent(i_frame_ba101e3d4b4143a0aadb1ddfe3755abe);
        

        marker_e21373bdc2a945eeaeca17b050f1f56a.bindPopup(popup_d05ab74c341c42fbb5f2a18fc4d1ea8d)
        ;

        
    
    
            var marker_4a18908f4b424f25853e9542a9b37d3d = L.marker(
                [44.715628, 11.149877],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_d6d101289be8485fac6170449d839cf9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4a18908f4b424f25853e9542a9b37d3d.setIcon(icon_d6d101289be8485fac6170449d839cf9);
        
    
        var popup_9ac0255383c14c9d84f18020912584ee = L.popup({"maxWidth": 2650});

        
            var i_frame_298a08845ca44c7ba23c9313b6e449d2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGRlbCBNYWlhbGUvRmFiYnJpY2F0byBjb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9ac0255383c14c9d84f18020912584ee.setContent(i_frame_298a08845ca44c7ba23c9313b6e449d2);
        

        marker_4a18908f4b424f25853e9542a9b37d3d.bindPopup(popup_9ac0255383c14c9d84f18020912584ee)
        ;

        
    
    
            var marker_00f5c97f31984c12bd813e8451f5b5c2 = L.marker(
                [44.722532, 11.146998],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_baa55c78390b4027a852445a8bf61821 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_00f5c97f31984c12bd813e8451f5b5c2.setIcon(icon_baa55c78390b4027a852445a8bf61821);
        
    
        var popup_ce7de0ed3ea046b1822f33ac07d4d489 = L.popup({"maxWidth": 2650});

        
            var i_frame_0acaa4e69d4b490db462c7830c266130 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGNvbXVuYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTczODg4LjczIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ce7de0ed3ea046b1822f33ac07d4d489.setContent(i_frame_0acaa4e69d4b490db462c7830c266130);
        

        marker_00f5c97f31984c12bd813e8451f5b5c2.bindPopup(popup_ce7de0ed3ea046b1822f33ac07d4d489)
        ;

        
    
    
            var marker_e7e7291281e249ae893ddd3374cf8b27 = L.marker(
                [44.722753000000004, 11.147406],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_de1ca87800674a509e16421070245ac4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e7e7291281e249ae893ddd3374cf8b27.setIcon(icon_de1ca87800674a509e16421070245ac4);
        
    
        var popup_ed8e1a7205e74172b3eb7f725734ea46 = L.popup({"maxWidth": 2650});

        
            var i_frame_84090931266c4d27a25d86d76c034c3e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBjYW1wYW5hcmlhIChkZWxsYSBjaGllc2EgZGkgU2FuIFNpbHZlc3RybykgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ed8e1a7205e74172b3eb7f725734ea46.setContent(i_frame_84090931266c4d27a25d86d76c034c3e);
        

        marker_e7e7291281e249ae893ddd3374cf8b27.bindPopup(popup_ed8e1a7205e74172b3eb7f725734ea46)
        ;

        
    
    
            var marker_2abf3cf79c5648c38e5f1468da9baa20 = L.marker(
                [44.728111, 11.150314],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c1bb5d62ba424b168b8e65382555b096 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2abf3cf79c5648c38e5f1468da9baa20.setIcon(icon_c1bb5d62ba424b168b8e65382555b096);
        
    
        var popup_c978b3a04672478fa274ef9f610e6972 = L.popup({"maxWidth": 2650});

        
            var i_frame_3d2523fbc2904872abe0ac5aea5677b8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBDb211bmFsZSAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI3ODE3NzAuMzggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDM3NTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c978b3a04672478fa274ef9f610e6972.setContent(i_frame_3d2523fbc2904872abe0ac5aea5677b8);
        

        marker_2abf3cf79c5648c38e5f1468da9baa20.bindPopup(popup_c978b3a04672478fa274ef9f610e6972)
        ;

        
    
    
            var marker_1d0258885efa46b18bcd7e15c7ad169d = L.marker(
                [44.723477, 11.145621],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_cd1d5828b7a2477087be838d7fd31310 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1d0258885efa46b18bcd7e15c7ad169d.setIcon(icon_cd1d5828b7a2477087be838d7fd31310);
        
    
        var popup_fd99136f8e6d48e79a1a5384d0816ac5 = L.popup({"maxWidth": 2650});

        
            var i_frame_1c1f9ef550a14c5db4c48c03de04d1a9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbGEgU1MuIENvbmNlemlvbmUgZSBPcmF0b3JpbyBkZWxsYSBwaWV0w6AvQ2hpZXNhIGRlbGwnSW1tYWNvbGF0YSBDb25jZXppb25lIGUgdG9ycmUgY2FtcGFuYXJpYSBjaGllc2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyODQyNC45MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fd99136f8e6d48e79a1a5384d0816ac5.setContent(i_frame_1c1f9ef550a14c5db4c48c03de04d1a9);
        

        marker_1d0258885efa46b18bcd7e15c7ad169d.bindPopup(popup_fd99136f8e6d48e79a1a5384d0816ac5)
        ;

        
    
    
            var marker_81196b5f9e694a5da242461efb173194 = L.marker(
                [44.702391999999996, 11.167147],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_20d5dfa0bbaf4f3e822c61e7ce8a9fd5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_81196b5f9e694a5da242461efb173194.setIcon(icon_20d5dfa0bbaf4f3e822c61e7ce8a9fd5);
        
    
        var popup_a2f989c3874f48f5af6b99146196ba11 = L.popup({"maxWidth": 2650});

        
            var i_frame_7849d7db4bd049e0b69b9e8c7b5faaea = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2l1c2VwcGUvQ2hpZXNhIGRlbGxhIEd1aXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDExODY0OS44MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a2f989c3874f48f5af6b99146196ba11.setContent(i_frame_7849d7db4bd049e0b69b9e8c7b5faaea);
        

        marker_81196b5f9e694a5da242461efb173194.bindPopup(popup_a2f989c3874f48f5af6b99146196ba11)
        ;

        
    
    
            var marker_0bc35d40d21b4d12b323862159ff6d6d = L.marker(
                [44.762121, 11.472714999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_8831a0c9e6824e90b8a27ee766b0aa46 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0bc35d40d21b4d12b323862159ff6d6d.setIcon(icon_8831a0c9e6824e90b8a27ee766b0aa46);
        
    
        var popup_518e406c6f1a48e1887c2296fc241899 = L.popup({"maxWidth": 2650});

        
            var i_frame_fcce1e5226524d6bb20705f38890bcc6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvIChhYmJhemlhbGUpIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNDcwNDUuNTIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_518e406c6f1a48e1887c2296fc241899.setContent(i_frame_fcce1e5226524d6bb20705f38890bcc6);
        

        marker_0bc35d40d21b4d12b323862159ff6d6d.bindPopup(popup_518e406c6f1a48e1887c2296fc241899)
        ;

        
    
    
            var marker_37cf6470c205411796dd79f635de26ca = L.marker(
                [44.777570000000004, 11.425892999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_cb7122379e604ce7995f3291e2574948 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_37cf6470c205411796dd79f635de26ca.setIcon(icon_cb7122379e604ce7995f3291e2574948);
        
    
        var popup_48e795708b924f62ab088a54c6790b3c = L.popup({"maxWidth": 2650});

        
            var i_frame_20573d676330409c9952e98643c2125b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpb3Zhbm5pIEJhdHRpc3RhIGRlY29sbGF0byBjaGllc2EgY29uIGNhbXBhbmlsZSBlIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMDY4Ny41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_48e795708b924f62ab088a54c6790b3c.setContent(i_frame_20573d676330409c9952e98643c2125b);
        

        marker_37cf6470c205411796dd79f635de26ca.bindPopup(popup_48e795708b924f62ab088a54c6790b3c)
        ;

        
    
    
            var marker_b99c620744b54ab0ae5552bf870fd567 = L.marker(
                [44.825458000000005, 11.461103],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_0f56c3fefea94854978d63b1ca65046d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_b99c620744b54ab0ae5552bf870fd567.setIcon(icon_0f56c3fefea94854978d63b1ca65046d);
        
    
        var popup_fc9fd522d45044b694c0c449bb88a6dd = L.popup({"maxWidth": 2650});

        
            var i_frame_1486b784f88d4083af7111f1126f6f4f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21wbGVzc28gZGVsbGEgQ2hpZXNhIFBhcnJvY2NoaWFsZSBkaSBTYW4gUGFvbG8gY2hpZXNhIGNvbiBjYW1wYW5pbGUgLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBQkVMTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyODAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fc9fd522d45044b694c0c449bb88a6dd.setContent(i_frame_1486b784f88d4083af7111f1126f6f4f);
        

        marker_b99c620744b54ab0ae5552bf870fd567.bindPopup(popup_fc9fd522d45044b694c0c449bb88a6dd)
        ;

        
    
    
            var marker_2a54c2fb7252483a8d8421f1ad13c1b0 = L.marker(
                [44.763938, 11.288326],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c7bbb7f80fcd4a98ad6501bbe47bc588 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2a54c2fb7252483a8d8421f1ad13c1b0.setIcon(icon_c7bbb7f80fcd4a98ad6501bbe47bc588);
        
    
        var popup_5c19c7cdbf7f477080497851f6ee87ad = L.popup({"maxWidth": 2650});

        
            var i_frame_2c4757d799b449388f4b52c9966fa516 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBCZWF0YSBWZXJnaW5lIGRlbCBDYXJtaW5lL2RlbGxhIE1hZG9ubmEgZGVsIENhcm1pbmUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDIyNTIxNy43NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTQ2ODcuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5c19c7cdbf7f477080497851f6ee87ad.setContent(i_frame_2c4757d799b449388f4b52c9966fa516);
        

        marker_2a54c2fb7252483a8d8421f1ad13c1b0.bindPopup(popup_5c19c7cdbf7f477080497851f6ee87ad)
        ;

        
    
    
            var marker_53d4cbaa4ff04ebebb91404f2257c447 = L.marker(
                [44.814989000000004, 11.306716999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_17884b8d24d243eabadbbbc3fb460b5f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_53d4cbaa4ff04ebebb91404f2257c447.setIcon(icon_17884b8d24d243eabadbbbc3fb460b5f);
        
    
        var popup_951add8c608c4e75a7a897740c7a2177 = L.popup({"maxWidth": 2650});

        
            var i_frame_301f995a36444b21a5392762704d7afa = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGRlbCBTYWxpY2UgZSBwZXJ0aW5lbnplIHBhbGF6em8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgOTE4Ny41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_951add8c608c4e75a7a897740c7a2177.setContent(i_frame_301f995a36444b21a5392762704d7afa);
        

        marker_53d4cbaa4ff04ebebb91404f2257c447.bindPopup(popup_951add8c608c4e75a7a897740c7a2177)
        ;

        
    
    
            var marker_28b271a117474ad28d2b5716a15ae562 = L.marker(
                [44.814842999999996, 11.306874],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_781fe30564c042df96c14dfb96ba13b3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_28b271a117474ad28d2b5716a15ae562.setIcon(icon_781fe30564c042df96c14dfb96ba13b3);
        
    
        var popup_1c5de59440ef4a6f89615d8af400fa5d = L.popup({"maxWidth": 2650});

        
            var i_frame_eca93bf9b5ac4c8bb885aa1fd0cd3c07 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGRlbCBTYWxpY2UgZSBwZXJ0aW5lbnplIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI4NTYyLjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1c5de59440ef4a6f89615d8af400fa5d.setContent(i_frame_eca93bf9b5ac4c8bb885aa1fd0cd3c07);
        

        marker_28b271a117474ad28d2b5716a15ae562.bindPopup(popup_1c5de59440ef4a6f89615d8af400fa5d)
        ;

        
    
    
            var marker_bb339b9fc0da441fb67cef5a0a72473e = L.marker(
                [44.815426, 11.307553],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ca544dcb7517416692117ad04d3ca42f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_bb339b9fc0da441fb67cef5a0a72473e.setIcon(icon_ca544dcb7517416692117ad04d3ca42f);
        
    
        var popup_0e8c35ece26b4588804beb85b7e15371 = L.popup({"maxWidth": 2650});

        
            var i_frame_383dcbb6493b4753b273e6740f087934 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgZCdpbmZhbnppYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMDA0NjguNzUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0e8c35ece26b4588804beb85b7e15371.setContent(i_frame_383dcbb6493b4753b273e6740f087934);
        

        marker_bb339b9fc0da441fb67cef5a0a72473e.bindPopup(popup_0e8c35ece26b4588804beb85b7e15371)
        ;

        
    
    
            var marker_f7e3779c27be43198ed2e68d9632ce90 = L.marker(
                [44.729263, 11.290416],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_243e4f6806df4791ba71cf562b4c1289 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f7e3779c27be43198ed2e68d9632ce90.setIcon(icon_243e4f6806df4791ba71cf562b4c1289);
        
    
        var popup_9cac0e92ab674f5abef33c7cfa90dae2 = L.popup({"maxWidth": 2650});

        
            var i_frame_66d65628db404469a399d1e45bed3b9b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsIFJvc2FyaW8vQ2hpZXNhIGRlbGxhIE1hZG9ubmEgZGVsIFJvc2FyaW8gZSBjYW1wYW5pbGUvQ2hpZXNhIGRlbCBHdWVyY2lubyBlIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA3NzgxMi41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9cac0e92ab674f5abef33c7cfa90dae2.setContent(i_frame_66d65628db404469a399d1e45bed3b9b);
        

        marker_f7e3779c27be43198ed2e68d9632ce90.bindPopup(popup_9cac0e92ab674f5abef33c7cfa90dae2)
        ;

        
    
    
            var marker_8f8fd593f16a47b88a6d273c7531a7e7 = L.marker(
                [44.728196999999994, 11.286622999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_bb2a2ce1e6c541eb8411151b3fc86fe2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_8f8fd593f16a47b88a6d273c7531a7e7.setIcon(icon_bb2a2ce1e6c541eb8411151b3fc86fe2);
        
    
        var popup_d488abc26d6342f383b9bbf833c3eeda = L.popup({"maxWidth": 2650});

        
            var i_frame_d55f08bda43041eabc7413f2a4889965 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gTWFyaWEgYWRkb2xvcmF0YSBkZXR0YSBEZWkgc2VydmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjEyNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d488abc26d6342f383b9bbf833c3eeda.setContent(i_frame_d55f08bda43041eabc7413f2a4889965);
        

        marker_8f8fd593f16a47b88a6d273c7531a7e7.bindPopup(popup_d488abc26d6342f383b9bbf833c3eeda)
        ;

        
    
    
            var marker_5f439d7b43994793900041daebb19b56 = L.marker(
                [44.726064, 11.289144],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_951e9bddf4a64cc5b88dd8910d35860c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_5f439d7b43994793900041daebb19b56.setIcon(icon_951e9bddf4a64cc5b88dd8910d35860c);
        
    
        var popup_8553ed38823a4aa1b41e8158acf84973 = L.popup({"maxWidth": 2650});

        
            var i_frame_9e306c886c0c402f99a41294a18ff5d8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gRmlsaXBwbyBOZXJpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA4NTQ4OTIuNzcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDQxMjUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8553ed38823a4aa1b41e8158acf84973.setContent(i_frame_9e306c886c0c402f99a41294a18ff5d8);
        

        marker_5f439d7b43994793900041daebb19b56.bindPopup(popup_8553ed38823a4aa1b41e8158acf84973)
        ;

        
    
    
            var marker_5d7630b40cb149b5b2486e2d9829ed6b = L.marker(
                [44.728901, 11.289178999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_832b1a0dc9ef4c689e29c6a6f25698b6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_5d7630b40cb149b5b2486e2d9829ed6b.setIcon(icon_832b1a0dc9ef4c689e29c6a6f25698b6);
        
    
        var popup_c536425b79e94521a6715d7a49486cb2 = L.popup({"maxWidth": 2650});

        
            var i_frame_6ddfb9640c9c46949b8f7d3314d0658d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNb25hc3Rlcm8gZGVsIENvcnB1cyBEb21pbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzYyNTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c536425b79e94521a6715d7a49486cb2.setContent(i_frame_6ddfb9640c9c46949b8f7d3314d0658d);
        

        marker_5d7630b40cb149b5b2486e2d9829ed6b.bindPopup(popup_c536425b79e94521a6715d7a49486cb2)
        ;

        
    
    
            var marker_462496a2b7d04475815fea9c6bcb89b7 = L.marker(
                [44.827622, 11.329044999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_02a0ec2745cd4ebcb2136239ee78e796 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_462496a2b7d04475815fea9c6bcb89b7.setIcon(icon_02a0ec2745cd4ebcb2136239ee78e796);
        
    
        var popup_191da33c83664fff8d750e1eb5dd0324 = L.popup({"maxWidth": 2650});

        
            var i_frame_d832ea0b3d784ab59299ab56cda6b10f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEFubmEgZSBjYW1wYW5pbGUgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI1MDQ4My42NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTI2MDAuNTggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_191da33c83664fff8d750e1eb5dd0324.setContent(i_frame_d832ea0b3d784ab59299ab56cda6b10f);
        

        marker_462496a2b7d04475815fea9c6bcb89b7.bindPopup(popup_191da33c83664fff8d750e1eb5dd0324)
        ;

        
    
    
            var marker_393604b930414416b48d15fa4bb79d9c = L.marker(
                [44.763038, 11.269608999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_54eb51887a654ad7b5a533added7c134 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_393604b930414416b48d15fa4bb79d9c.setIcon(icon_54eb51887a654ad7b5a533added7c134);
        
    
        var popup_aab5b7a5ad1a4646ab4c63ad688a5661 = L.popup({"maxWidth": 2650});

        
            var i_frame_3c3e6984aec34cbca11a6461f4e790e6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2l1c2VwcGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDY0NzQ1LjUyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzNzUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aab5b7a5ad1a4646ab4c63ad688a5661.setContent(i_frame_3c3e6984aec34cbca11a6461f4e790e6);
        

        marker_393604b930414416b48d15fa4bb79d9c.bindPopup(popup_aab5b7a5ad1a4646ab4c63ad688a5661)
        ;

        
    
    
            var marker_64cf5ebf50b44929818952ddf7d10fa9 = L.marker(
                [44.795794, 11.322392],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2f1d593f99204d34af85909bc2e0932b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_64cf5ebf50b44929818952ddf7d10fa9.setIcon(icon_2f1d593f99204d34af85909bc2e0932b);
        
    
        var popup_db3d59e3e9c044aaa24b2ac5b55a025b = L.popup({"maxWidth": 2650});

        
            var i_frame_f41a4a7b9a8246a8b517f72b6ffa7cc7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbGEgQmVhdGEgVmVyZ2luZSBBc3N1bnRhIC0gT3JhdG9yaW8gU2FudGEgTWFyaWEgZGVsIFBpbGFzdHJlbGxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMDE0MzMuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzQzNy41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_db3d59e3e9c044aaa24b2ac5b55a025b.setContent(i_frame_f41a4a7b9a8246a8b517f72b6ffa7cc7);
        

        marker_64cf5ebf50b44929818952ddf7d10fa9.bindPopup(popup_db3d59e3e9c044aaa24b2ac5b55a025b)
        ;

        
    
    
            var marker_d697c8aeb66243bdbc3823e3b6048531 = L.marker(
                [44.807524, 11.34399],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f80258f4cc2b454185693f2dc0f388d7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_d697c8aeb66243bdbc3823e3b6048531.setIcon(icon_f80258f4cc2b454185693f2dc0f388d7);
        
    
        var popup_8b2b3d76b158403bb3717122f61a792e = L.popup({"maxWidth": 2650});

        
            var i_frame_bf750f7eeb594a8ab375a9c9ac0a139c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gZGkgVG91cnMgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8b2b3d76b158403bb3717122f61a792e.setContent(i_frame_bf750f7eeb594a8ab375a9c9ac0a139c);
        

        marker_d697c8aeb66243bdbc3823e3b6048531.bindPopup(popup_8b2b3d76b158403bb3717122f61a792e)
        ;

        
    
    
            var marker_899121436d5b4dd18cd358788e1d77aa = L.marker(
                [44.807673, 11.344087],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fb2e2dda545b48a2b82191009f83a0b8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_899121436d5b4dd18cd358788e1d77aa.setIcon(icon_fb2e2dda545b48a2b82191009f83a0b8);
        
    
        var popup_be6955e65bb04a9b8bb4a4b391fa8eb4 = L.popup({"maxWidth": 2650});

        
            var i_frame_be495d43634647ffbb5940c06ef833a7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gZGkgVG91cnMgKmNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_be6955e65bb04a9b8bb4a4b391fa8eb4.setContent(i_frame_be495d43634647ffbb5940c06ef833a7);
        

        marker_899121436d5b4dd18cd358788e1d77aa.bindPopup(popup_be6955e65bb04a9b8bb4a4b391fa8eb4)
        ;

        
    
    
            var marker_37c3767e58f048ff90ff5e6e657099b4 = L.marker(
                [44.772674, 11.048419],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_8e0f02370e444cc196a0f33520a7c581 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_37c3767e58f048ff90ff5e6e657099b4.setIcon(icon_8e0f02370e444cc196a0f33520a7c581);
        
    
        var popup_a35d1363744045acaadc5f061a058338 = L.popup({"maxWidth": 2650});

        
            var i_frame_c63fff84f7514fa0b862cea13dbf152e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW5vbmljYSBkZWxsYSBDaGllc2EgZGkgU2FuIFBpZXRybyBBcG9zdG9sbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTU2MjUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a35d1363744045acaadc5f061a058338.setContent(i_frame_c63fff84f7514fa0b862cea13dbf152e);
        

        marker_37c3767e58f048ff90ff5e6e657099b4.bindPopup(popup_a35d1363744045acaadc5f061a058338)
        ;

        
    
    
            var marker_a892b86e148a4380a77ebba1f6bfa306 = L.marker(
                [44.802974, 11.052581],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_bf2296097aea44758cacca14eb372dbc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a892b86e148a4380a77ebba1f6bfa306.setIcon(icon_bf2296097aea44758cacca14eb372dbc);
        
    
        var popup_c1834d596b95420499505e660e8a2ca8 = L.popup({"maxWidth": 2650});

        
            var i_frame_5785f1c03a4043a8a9383b7f9a62668f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jY2hpYWxlIGRlbCBTUy5tbyBOb21lIGRpIE1hcmlhIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTIxNjAyMC40NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDY2ODguNzIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c1834d596b95420499505e660e8a2ca8.setContent(i_frame_5785f1c03a4043a8a9383b7f9a62668f);
        

        marker_a892b86e148a4380a77ebba1f6bfa306.bindPopup(popup_c1834d596b95420499505e660e8a2ca8)
        ;

        
    
    
            var marker_e87f291740f347ef92022debad46c2f2 = L.marker(
                [44.789828, 11.017455],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a57e9bd0521946a5aa6f6affd76e4213 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e87f291740f347ef92022debad46c2f2.setIcon(icon_a57e9bd0521946a5aa6f6affd76e4213);
        
    
        var popup_d51caeb3b40e4bdd870a0d5bc04ad95f = L.popup({"maxWidth": 2650});

        
            var i_frame_b464cb97192d4340b969123970a2b254 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuUHJvc3Blcm8gVmVzY292byBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzQzNzUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d51caeb3b40e4bdd870a0d5bc04ad95f.setContent(i_frame_b464cb97192d4340b969123970a2b254);
        

        marker_e87f291740f347ef92022debad46c2f2.bindPopup(popup_d51caeb3b40e4bdd870a0d5bc04ad95f)
        ;

        
    
    
            var marker_ae62aa39941445f1b66f87337a0533a5 = L.marker(
                [44.772689, 11.048685],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_518090fce13a4aa58caca805b52b69e8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ae62aa39941445f1b66f87337a0533a5.setIcon(icon_518090fce13a4aa58caca805b52b69e8);
        
    
        var popup_c9b1d6215d8442f0b93d1265262ee192 = L.popup({"maxWidth": 2650});

        
            var i_frame_c12ae7ba9fad4bc6b412fa6a4e676245 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFBpZXRybyBBcG9zdG9sbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDk4OTUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c9b1d6215d8442f0b93d1265262ee192.setContent(i_frame_c12ae7ba9fad4bc6b412fa6a4e676245);
        

        marker_ae62aa39941445f1b66f87337a0533a5.bindPopup(popup_c9b1d6215d8442f0b93d1265262ee192)
        ;

        
    
    
            var marker_dc288ed47a2e43df8d054bfee1c4bb6b = L.marker(
                [44.843361, 11.144511],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_03eebabc6528408fb17adc7c66814267 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_dc288ed47a2e43df8d054bfee1c4bb6b.setIcon(icon_03eebabc6528408fb17adc7c66814267);
        
    
        var popup_cd791255e4dd44d098ef5c99399d13b9 = L.popup({"maxWidth": 2650});

        
            var i_frame_3d397ebb75324dba9a274aaac7e22f4f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gR2l1c2VwcGUgbyBkZWxsYSBNYWRvbm5hIGRlbCBNdWxpbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cd791255e4dd44d098ef5c99399d13b9.setContent(i_frame_3d397ebb75324dba9a274aaac7e22f4f);
        

        marker_dc288ed47a2e43df8d054bfee1c4bb6b.bindPopup(popup_cd791255e4dd44d098ef5c99399d13b9)
        ;

        
    
    
            var marker_dea45f0525034f1fb8a4b647c9cc8564 = L.marker(
                [44.839465999999994, 11.140594],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6b2d19445bfe4682ad8714b8d3fd34ef = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_dea45f0525034f1fb8a4b647c9cc8564.setIcon(icon_6b2d19445bfe4682ad8714b8d3fd34ef);
        
    
        var popup_45292f7375644c32a9b3e14050c3a51f = L.popup({"maxWidth": 2650});

        
            var i_frame_24541ceb0cf744cc9b94ec641023c4c0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEZlbGljZSBWZXNjb3ZvIGUgTWFydGlyZS9DaGllc2EgZGkgUy4gRmVsaWNlIGUgUy4gR2VtaW5pYW5vL0R1b21vL0Nhbm9uaWNhIFZlY2NoaWEgKmNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_45292f7375644c32a9b3e14050c3a51f.setContent(i_frame_24541ceb0cf744cc9b94ec641023c4c0);
        

        marker_dea45f0525034f1fb8a4b647c9cc8564.bindPopup(popup_45292f7375644c32a9b3e14050c3a51f)
        ;

        
    
    
            var marker_bf978ef6e6d14e67902b0671466c0c56 = L.marker(
                [44.862082, 11.11777],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_0d656b0852d64079baaa0408206847b8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_bf978ef6e6d14e67902b0671466c0c56.setIcon(icon_0d656b0852d64079baaa0408206847b8);
        
    
        var popup_8e863f4a347f4a5c92a9d0b13d98321c = L.popup({"maxWidth": 2650});

        
            var i_frame_ad5e715f0be14f92a54c0edc9a884205 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBCaWFnaW8gVmVzY292by4gQ2hpZXNhIGRpIFNhbiBCaWFnaW8gKmNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8e863f4a347f4a5c92a9d0b13d98321c.setContent(i_frame_ad5e715f0be14f92a54c0edc9a884205);
        

        marker_bf978ef6e6d14e67902b0671466c0c56.bindPopup(popup_8e863f4a347f4a5c92a9d0b13d98321c)
        ;

        
    
    
            var marker_1c7346fa7c824cdd848b619b04bdf9c3 = L.marker(
                [44.847821, 11.071196],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f92e0e28ff6142d188d8143e839887a0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1c7346fa7c824cdd848b619b04bdf9c3.setIcon(icon_f92e0e28ff6142d188d8143e839887a0);
        
    
        var popup_c9f00688093c413db8d09c20d9dde17d = L.popup({"maxWidth": 2650});

        
            var i_frame_5e1914686b224cea863c15f921a3d650 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlaSBTUy4gU2VuZXNpbyBlIFRlb3BvbXBvIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgODY4NzUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c9f00688093c413db8d09c20d9dde17d.setContent(i_frame_5e1914686b224cea863c15f921a3d650);
        

        marker_1c7346fa7c824cdd848b619b04bdf9c3.bindPopup(popup_c9f00688093c413db8d09c20d9dde17d)
        ;

        
    
    
            var marker_10efba8299be49bdad766eab7ce28fe2 = L.marker(
                [44.878912, 11.4101],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f224da7195934dbfb3d77c82d5ba30e5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_10efba8299be49bdad766eab7ce28fe2.setIcon(icon_f224da7195934dbfb3d77c82d5ba30e5);
        
    
        var popup_5ba21c065aa94971ad75c2d5e29e7fe2 = L.popup({"maxWidth": 2650});

        
            var i_frame_1d30060b6e8742d2813da0e66a066b1b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBFbWlzc2FyaWEgZGVsIGNhbmFsZSBlbWlzc2FyaW8gYWNxdWUgYmFzc2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNzY5MzkuMjggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDIwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5ba21c065aa94971ad75c2d5e29e7fe2.setContent(i_frame_1d30060b6e8742d2813da0e66a066b1b);
        

        marker_10efba8299be49bdad766eab7ce28fe2.bindPopup(popup_5ba21c065aa94971ad75c2d5e29e7fe2)
        ;

        
    
    
            var marker_d61633c677a244daa2dae09a9daf6d52 = L.marker(
                [44.872594, 11.049327],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b8923ad3ca554336af1c9013904679d3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_d61633c677a244daa2dae09a9daf6d52.setIcon(icon_b8923ad3ca554336af1c9013904679d3);
        
    
        var popup_3c25d89b663e42abb98d9b6b09f4cadc = L.popup({"maxWidth": 2650});

        
            var i_frame_c78006df240f441db3dd1f6c93b6bf8e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBCZWF0YSBWZXJnaW5lIGRlbCBSb3NhcmlvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3c25d89b663e42abb98d9b6b09f4cadc.setContent(i_frame_c78006df240f441db3dd1f6c93b6bf8e);
        

        marker_d61633c677a244daa2dae09a9daf6d52.bindPopup(popup_3c25d89b663e42abb98d9b6b09f4cadc)
        ;

        
    
    
            var marker_70541296afd34721ae1a7d2c286c28b0 = L.marker(
                [44.756507, 11.310022],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_39b20c00cf8647d9bba1cccc8b443a9e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_70541296afd34721ae1a7d2c286c28b0.setIcon(icon_39b20c00cf8647d9bba1cccc8b443a9e);
        
    
        var popup_e2330565944b49a38f713632a2d127f1 = L.popup({"maxWidth": 2650});

        
            var i_frame_a933e385c93f47a4b12db783b36544bb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsJ0ltbWFjb2xhdGEgQ29uY2V6aW9uZSBkaSBNYXJpYSBjaGllc2EgZSBjYW5vbmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMTg3NS4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e2330565944b49a38f713632a2d127f1.setContent(i_frame_a933e385c93f47a4b12db783b36544bb);
        

        marker_70541296afd34721ae1a7d2c286c28b0.bindPopup(popup_e2330565944b49a38f713632a2d127f1)
        ;

        
    
    
            var marker_174aa1005c4d4156b43061e42a550f5f = L.marker(
                [44.916534000000006, 10.857146],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_9c039735922f4c1fb65146583278eb37 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_174aa1005c4d4156b43061e42a550f5f.setIcon(icon_9c039735922f4c1fb65146583278eb37);
        
    
        var popup_dbf19c4e69214c1e8b6545df506f0698 = L.popup({"maxWidth": 2650});

        
            var i_frame_4bf7999521be455f950c062047760188 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgSXBzaWEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dbf19c4e69214c1e8b6545df506f0698.setContent(i_frame_4bf7999521be455f950c062047760188);
        

        marker_174aa1005c4d4156b43061e42a550f5f.bindPopup(popup_dbf19c4e69214c1e8b6545df506f0698)
        ;

        
    
    
            var marker_9f5918ce9c0e46aea6a57d7a3e0c8c1c = L.marker(
                [44.919478999999995, 10.80363],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_0dc62ac0a1224a6d910b751c89b0ce50 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9f5918ce9c0e46aea6a57d7a3e0c8c1c.setIcon(icon_0dc62ac0a1224a6d910b751c89b0ce50);
        
    
        var popup_f24278907b8e4c8ba5bfbd4dfd81fcc2 = L.popup({"maxWidth": 2650});

        
            var i_frame_21dc026f63eb40e2970e267b77900728 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gY29tdW5hbGUgUmluYWxkaSAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQ4Mjk4MC44OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjY1MDEuMjggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f24278907b8e4c8ba5bfbd4dfd81fcc2.setContent(i_frame_21dc026f63eb40e2970e267b77900728);
        

        marker_9f5918ce9c0e46aea6a57d7a3e0c8c1c.bindPopup(popup_f24278907b8e4c8ba5bfbd4dfd81fcc2)
        ;

        
    
    
            var marker_4046ff358a4c4af498368ecd0eb70d57 = L.marker(
                [44.919938, 10.804646],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_7fb145ea1a3e4f2d9e318b87a05cd199 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4046ff358a4c4af498368ecd0eb70d57.setIcon(icon_7fb145ea1a3e4f2d9e318b87a05cd199);
        
    
        var popup_c1ebc5e7b4b94db5a0e00a0fbb942b6c = L.popup({"maxWidth": 2650});

        
            var i_frame_59adda71fa3448e8a3f772564dc0e4e3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgbWVkaWEgJ0NhcmR1Y2NpJyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c1ebc5e7b4b94db5a0e00a0fbb942b6c.setContent(i_frame_59adda71fa3448e8a3f772564dc0e4e3);
        

        marker_4046ff358a4c4af498368ecd0eb70d57.bindPopup(popup_c1ebc5e7b4b94db5a0e00a0fbb942b6c)
        ;

        
    
    
            var marker_60c9adfe1d874bf89fc18eaebdc83f14 = L.marker(
                [44.916701, 10.809804],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e516c354b2b5498eac0c2ac53f05c4c2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_60c9adfe1d874bf89fc18eaebdc83f14.setIcon(icon_e516c354b2b5498eac0c2ac53f05c4c2);
        
    
        var popup_05c49552d05d4213b8d6b8f6f43e6693 = L.popup({"maxWidth": 2650});

        
            var i_frame_c5cc953854854816bf35da1f20199d9a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2V0dGEgYW5uZXNzYSBhbGxhIENhc2EgcHJvdGV0dGEgJ1ZpbGxhIEF1cm9yYScgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_05c49552d05d4213b8d6b8f6f43e6693.setContent(i_frame_c5cc953854854816bf35da1f20199d9a);
        

        marker_60c9adfe1d874bf89fc18eaebdc83f14.bindPopup(popup_05c49552d05d4213b8d6b8f6f43e6693)
        ;

        
    
    
            var marker_f4b17cc0dbd547bfafa71257d8e38271 = L.marker(
                [44.917768, 10.803519],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_41f763fe95b44e7a8482116bae6e116b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f4b17cc0dbd547bfafa71257d8e38271.setIcon(icon_41f763fe95b44e7a8482116bae6e116b);
        
    
        var popup_3ef8224fc15346a89a32c0d8ed2b3598 = L.popup({"maxWidth": 2650});

        
            var i_frame_583042bfb47e421fa859000e21e7924f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsby9Sb2NjYSBjb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3ef8224fc15346a89a32c0d8ed2b3598.setContent(i_frame_583042bfb47e421fa859000e21e7924f);
        

        marker_f4b17cc0dbd547bfafa71257d8e38271.bindPopup(popup_3ef8224fc15346a89a32c0d8ed2b3598)
        ;

        
    
    
            var marker_02301382d4694533903f86b048e97327 = L.marker(
                [44.869238, 11.388997999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_9907249b2eab4da69a9be6b4afec156d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_02301382d4694533903f86b048e97327.setIcon(icon_9907249b2eab4da69a9be6b4afec156d);
        
    
        var popup_5394c09dbc3f464685046aba7008c919 = L.popup({"maxWidth": 2650});

        
            var i_frame_8e2406db68b64f1496e038d67ddb027e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb250cm9jaGlhdmljYSBJbXBpYW50byBTYW50YSBCaWFuY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTUwNTMxLjA3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5394c09dbc3f464685046aba7008c919.setContent(i_frame_8e2406db68b64f1496e038d67ddb027e);
        

        marker_02301382d4694533903f86b048e97327.bindPopup(popup_5394c09dbc3f464685046aba7008c919)
        ;

        
    
    
            var marker_f8e4e864864546c8a3ac2b711c707e70 = L.marker(
                [44.937606, 11.412397],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_614d187b844548bfba47a88b494aa77e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f8e4e864864546c8a3ac2b711c707e70.setIcon(icon_614d187b844548bfba47a88b494aa77e);
        
    
        var popup_dd98e782d5334cb3a0e3c0fc0858c536 = L.popup({"maxWidth": 2650});

        
            var i_frame_62881a0665ef45ff96f549f7807aaf38 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBRdWF0dHJvIENhc2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dd98e782d5334cb3a0e3c0fc0858c536.setContent(i_frame_62881a0665ef45ff96f549f7807aaf38);
        

        marker_f8e4e864864546c8a3ac2b711c707e70.bindPopup(popup_dd98e782d5334cb3a0e3c0fc0858c536)
        ;

        
    
    
            var marker_37ccff8168d6416891ffb6afa93db927 = L.marker(
                [44.889743, 11.064821],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6a132fca6f604c6db408c1566ddcada1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_37ccff8168d6416891ffb6afa93db927.setIcon(icon_6a132fca6f604c6db408c1566ddcada1);
        
    
        var popup_cff40ab4af8f4623a39300a4900833f6 = L.popup({"maxWidth": 2650});

        
            var i_frame_bdc1a892d06745459cb7e5a7fb467427 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBjYXNhIGRlbCBmYXNjaW8gKGV4IEdpbCkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cff40ab4af8f4623a39300a4900833f6.setContent(i_frame_bdc1a892d06745459cb7e5a7fb467427);
        

        marker_37ccff8168d6416891ffb6afa93db927.bindPopup(popup_cff40ab4af8f4623a39300a4900833f6)
        ;

        
    
    
            var marker_c72b3f22b1584cc992dd09762c47c40a = L.marker(
                [44.830147, 11.294767],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2cbafd1cad814c369c02be216ddba8df = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c72b3f22b1584cc992dd09762c47c40a.setIcon(icon_2cbafd1cad814c369c02be216ddba8df);
        
    
        var popup_04105e1c5dc44ce09313b632bc85e3d9 = L.popup({"maxWidth": 2650});

        
            var i_frame_220a9852317b4f9784cfce691ce52918 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbCdBbm51bnppYXRhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzI2NzEuNzggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_04105e1c5dc44ce09313b632bc85e3d9.setContent(i_frame_220a9852317b4f9784cfce691ce52918);
        

        marker_c72b3f22b1584cc992dd09762c47c40a.bindPopup(popup_04105e1c5dc44ce09313b632bc85e3d9)
        ;

        
    
    
            var marker_e3f38632f465409d959d310e149bfbf1 = L.marker(
                [44.830887, 11.295895],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c71420d22cdc4d3b966d37d1f256aa82 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e3f38632f465409d959d310e149bfbf1.setIcon(icon_c71420d22cdc4d3b966d37d1f256aa82);
        
    
        var popup_deea3dd63edd412bb28d1a2a4ad94587 = L.popup({"maxWidth": 2650});

        
            var i_frame_5b1bf257e21c4c9c89d84cc378435043 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbGEgQ29uZnJhdGVybml0YSBkZWxsYSBCdW9uYSBNb3J0ZS9DaGllc2EgZGkgUy4gQmFydG9sb21lbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMTczMDc2LjkxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA2MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_deea3dd63edd412bb28d1a2a4ad94587.setContent(i_frame_5b1bf257e21c4c9c89d84cc378435043);
        

        marker_e3f38632f465409d959d310e149bfbf1.bindPopup(popup_deea3dd63edd412bb28d1a2a4ad94587)
        ;

        
    
    
            var marker_76d1763b5aba4bd1907d89b1f0362b49 = L.marker(
                [44.888894, 11.064685],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_277d1c6904df423fbf0c3a1ff68f7b11 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_76d1763b5aba4bd1907d89b1f0362b49.setIcon(icon_277d1c6904df423fbf0c3a1ff68f7b11);
        
    
        var popup_83e9240e7e0f4de98fe5d3b1f91214e4 = L.popup({"maxWidth": 2650});

        
            var i_frame_45f3902cbc89489187632891225690fb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsbyBkZWkgUGljbyAocmVzdGkgVmVjY2hpbyBDYXN0ZWxsbyBQaWNvKSByb2NjYS9jYXN0ZWxsbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDUwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_83e9240e7e0f4de98fe5d3b1f91214e4.setContent(i_frame_45f3902cbc89489187632891225690fb);
        

        marker_76d1763b5aba4bd1907d89b1f0362b49.bindPopup(popup_83e9240e7e0f4de98fe5d3b1f91214e4)
        ;

        
    
    
            var marker_43bd6566eed94722aa8446200f822ab3 = L.marker(
                [44.789532, 11.037818],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5902dbbc55fe47c7ac5315a48716ba85 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_43bd6566eed94722aa8446200f822ab3.setIcon(icon_5902dbbc55fe47c7ac5315a48716ba85);
        
    
        var popup_9f32b29c846845619a123fa501be7a4e = L.popup({"maxWidth": 2650});

        
            var i_frame_25d520b013794de484bf3abcc364d556 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTcGVyaW1lbnRhbGUgQWdyaWNvbHR1cmEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzNDk5NTAuOTIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE4NDE4Ljc1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9f32b29c846845619a123fa501be7a4e.setContent(i_frame_25d520b013794de484bf3abcc364d556);
        

        marker_43bd6566eed94722aa8446200f822ab3.bindPopup(popup_9f32b29c846845619a123fa501be7a4e)
        ;

        
    
    
            var marker_84fd8367d6734ff78b6248a8ecad1c07 = L.marker(
                [44.83874, 11.141031],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b79f1174da5b4cc8a35b7f48f48837a3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_84fd8367d6734ff78b6248a8ecad1c07.setIcon(icon_b79f1174da5b4cc8a35b7f48f48837a3);
        
    
        var popup_6835a3e231e54a979050829e463c2d62 = L.popup({"maxWidth": 2650});

        
            var i_frame_cdd7c5679c6146f884ea40668eae60c2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsby9Sb2NjYSBlc3RlbnNlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTA4Mzc5Mi4yOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTQxODkuNjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6835a3e231e54a979050829e463c2d62.setContent(i_frame_cdd7c5679c6146f884ea40668eae60c2);
        

        marker_84fd8367d6734ff78b6248a8ecad1c07.bindPopup(popup_6835a3e231e54a979050829e463c2d62)
        ;

        
    
    
            var marker_dfdcde9e87e745419698c0ebac91259d = L.marker(
                [44.839338, 11.141312],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_78ad593267ad480cb7ec72aad9c1bce6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_dfdcde9e87e745419698c0ebac91259d.setIcon(icon_78ad593267ad480cb7ec72aad9c1bce6);
        
    
        var popup_e66fd39ec9df40fbbb5d32b03b808b41 = L.popup({"maxWidth": 2650});

        
            var i_frame_83d57c722e0b4b039836aad15f4d399c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE0MjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e66fd39ec9df40fbbb5d32b03b808b41.setContent(i_frame_83d57c722e0b4b039836aad15f4d399c);
        

        marker_dfdcde9e87e745419698c0ebac91259d.bindPopup(popup_e66fd39ec9df40fbbb5d32b03b808b41)
        ;

        
    
    
            var marker_2a031ddb48e445299ea7f4ebe947131b = L.marker(
                [44.839258, 11.143042],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5179172adac249e3998b81ac53402e67 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2a031ddb48e445299ea7f4ebe947131b.setIcon(icon_5179172adac249e3998b81ac53402e67);
        
    
        var popup_a0259eb556a34355b8fe62f67a93f74a = L.popup({"maxWidth": 2650});

        
            var i_frame_89ad0ef288d84498acc3b2cb9d80920b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBkZWxs4oCZT3JvbG9naW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a0259eb556a34355b8fe62f67a93f74a.setContent(i_frame_89ad0ef288d84498acc3b2cb9d80920b);
        

        marker_2a031ddb48e445299ea7f4ebe947131b.bindPopup(popup_a0259eb556a34355b8fe62f67a93f74a)
        ;

        
    
    
            var marker_e4db6fdce3314ad88cf0b8e74c2db204 = L.marker(
                [44.837915, 11.144485000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_01af305c9828422eb6fdd1b63f554fba = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e4db6fdce3314ad88cf0b8e74c2db204.setIcon(icon_01af305c9828422eb6fdd1b63f554fba);
        
    
        var popup_ef45f3353626433f97a2083c6a1d16be = L.popup({"maxWidth": 2650});

        
            var i_frame_6bd9626b309540be895f36329eb54811 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNlcm1hIGRlaSBWaWdpbGkgZGVsIEZ1b2NvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ef45f3353626433f97a2083c6a1d16be.setContent(i_frame_6bd9626b309540be895f36329eb54811);
        

        marker_e4db6fdce3314ad88cf0b8e74c2db204.bindPopup(popup_ef45f3353626433f97a2083c6a1d16be)
        ;

        
    
    
            var marker_9a91051950e243cfb9c33b65ba4268aa = L.marker(
                [44.838784000000004, 11.141824],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_830133998e0d449ba0efeb37b61503c2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9a91051950e243cfb9c33b65ba4268aa.setIcon(icon_830133998e0d449ba0efeb37b61503c2);
        
    
        var popup_153fc64fb7ab43eab75cd463b133499d = L.popup({"maxWidth": 2650});

        
            var i_frame_6bd67510d17f46db8b1f3cf37ca959bb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gY29tdW5hbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDIyODUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_153fc64fb7ab43eab75cd463b133499d.setContent(i_frame_6bd67510d17f46db8b1f3cf37ca959bb);
        

        marker_9a91051950e243cfb9c33b65ba4268aa.bindPopup(popup_153fc64fb7ab43eab75cd463b133499d)
        ;

        
    
    
            var marker_7f3d36e95ef34e9ebcf34feafb464bde = L.marker(
                [44.839524, 11.140191999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_8983518aa8584250ad4f4c655b8ab189 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_7f3d36e95ef34e9ebcf34feafb464bde.setIcon(icon_8983518aa8584250ad4f4c655b8ab189);
        
    
        var popup_1224361db68740a1aa5df705918b95ea = L.popup({"maxWidth": 2650});

        
            var i_frame_05b0a91140724943a4c86a6590bb3e8b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZXR0YSAvIFRvcnJlIEJvcmdvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1224361db68740a1aa5df705918b95ea.setContent(i_frame_05b0a91140724943a4c86a6590bb3e8b);
        

        marker_7f3d36e95ef34e9ebcf34feafb464bde.bindPopup(popup_1224361db68740a1aa5df705918b95ea)
        ;

        
    
    
            var marker_0636b453a405458e833651985cb43211 = L.marker(
                [44.828255, 10.947095],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f6e611ca0eae4ab3a02aa0ddf6423bc0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0636b453a405458e833651985cb43211.setIcon(icon_f6e611ca0eae4ab3a02aa0ddf6423bc0);
        
    
        var popup_b0d5ff6e4c5d4cb9badf45198b055e42 = L.popup({"maxWidth": 2650});

        
            var i_frame_4c2dc5864d4e4797b3546a53626f26c6 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNhIE1hZ2lzdHJhdG8gZGVsIFBvIChFeCBzY3VvbGEgZWxlbWVudGFyZSBpbiBSb3ZlcmV0byBzL1MpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b0d5ff6e4c5d4cb9badf45198b055e42.setContent(i_frame_4c2dc5864d4e4797b3546a53626f26c6);
        

        marker_0636b453a405458e833651985cb43211.bindPopup(popup_b0d5ff6e4c5d4cb9badf45198b055e42)
        ;

        
    
    
            var marker_4b98d010b23940eb9474a42214582d67 = L.marker(
                [44.840872, 10.954243],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a86a57d53a474696b3b9e28277d4262d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4b98d010b23940eb9474a42214582d67.setIcon(icon_a86a57d53a474696b3b9e28277d4262d);
        
    
        var popup_59d69614f3f6474883d381ace68afc6f = L.popup({"maxWidth": 2650});

        
            var i_frame_c74a71c9de07404ea6d48def760e259c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBEZWxlZ2F6aW9uZSBNdW5pY2lwYWxlIGluIFJvdmVyZXRvIHMvUyAgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDIzMDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTE1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_59d69614f3f6474883d381ace68afc6f.setContent(i_frame_c74a71c9de07404ea6d48def760e259c);
        

        marker_4b98d010b23940eb9474a42214582d67.bindPopup(popup_59d69614f3f6474883d381ace68afc6f)
        ;

        
    
    
            var marker_0538ba6cec164c6c88e3def6bb8bad4f = L.marker(
                [44.877988, 11.41083],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f1a58e0f6f1040e89fbd024e1c2d4dea = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0538ba6cec164c6c88e3def6bb8bad4f.setIcon(icon_f1a58e0f6f1040e89fbd024e1c2d4dea);
        
    
        var popup_6ba40aab84714560acd11e9e9e019878 = L.popup({"maxWidth": 2650});

        
            var i_frame_419b1227d9c94633acf121f7477bc4cf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBpZHJvdm9ybyBCb25kZW5vLVBhbGF0YSBTYWxhIFBvbXBlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDczMjM4MC4wMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDE1MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6ba40aab84714560acd11e9e9e019878.setContent(i_frame_419b1227d9c94633acf121f7477bc4cf);
        

        marker_0538ba6cec164c6c88e3def6bb8bad4f.bindPopup(popup_6ba40aab84714560acd11e9e9e019878)
        ;

        
    
    
            var marker_7755ddc130ae4486983f56445678981a = L.marker(
                [44.833205, 11.29684],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b88eb94f0a83405fb805c5327da5080c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_7755ddc130ae4486983f56445678981a.setIcon(icon_b88eb94f0a83405fb805c5327da5080c);
        
    
        var popup_38b8c38b788646a2b86a0fe31a8cef62 = L.popup({"maxWidth": 2650});

        
            var i_frame_6dd3a166d47348f4bbdfd9192da826e3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBST0NDQS0gQ2FzdGVsbG8gZGVsbGUgUm9jY2hlLCBDYXN0ZWxsbyBlc3RlbnNlOyBDYXNhIFBpc2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_38b8c38b788646a2b86a0fe31a8cef62.setContent(i_frame_6dd3a166d47348f4bbdfd9192da826e3);
        

        marker_7755ddc130ae4486983f56445678981a.bindPopup(popup_38b8c38b788646a2b86a0fe31a8cef62)
        ;

        
    
    
            var marker_50f793cc77064f849fc15ddf5e87b3c6 = L.marker(
                [44.83227, 11.293928999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b0a864aae0f3440f8009954007a81683 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_50f793cc77064f849fc15ddf5e87b3c6.setIcon(icon_b0a864aae0f3440f8009954007a81683);
        
    
        var popup_92fc38a7792842cbb2f849cc02ddf05e = L.popup({"maxWidth": 2650});

        
            var i_frame_4bdf8f6eb84f4b81ba1a970ddd25ded9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBkZWkgTW9kZW5lc2kgKG8gZGVsbCdPcm9sb2dpbykgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA1MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_92fc38a7792842cbb2f849cc02ddf05e.setContent(i_frame_4bdf8f6eb84f4b81ba1a970ddd25ded9);
        

        marker_50f793cc77064f849fc15ddf5e87b3c6.bindPopup(popup_92fc38a7792842cbb2f849cc02ddf05e)
        ;

        
    
    
            var marker_ffab82b9d21e4ee788e83407c255728d = L.marker(
                [44.829197, 11.291825],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_7fae8575c4dc41d6a57352f88fdbf920 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ffab82b9d21e4ee788e83407c255728d.setIcon(icon_7fae8575c4dc41d6a57352f88fdbf920);
        
    
        var popup_6e1159d92cb74981a64bf5ffb38a0682 = L.popup({"maxWidth": 2650});

        
            var i_frame_110b7066cdd3461a9f80e249085f282e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBJc3JhZWxpdGljbyBlIHBlcnRpbmVuemUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6e1159d92cb74981a64bf5ffb38a0682.setContent(i_frame_110b7066cdd3461a9f80e249085f282e);
        

        marker_ffab82b9d21e4ee788e83407c255728d.bindPopup(popup_6e1159d92cb74981a64bf5ffb38a0682)
        ;

        
    
    
            var marker_dc87f17f69ce4070a25a7f12cf6e8066 = L.marker(
                [44.941998999999996, 11.006341],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fb1353f48e4c4966b689d85c29047b34 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_dc87f17f69ce4070a25a7f12cf6e8066.setIcon(icon_fb1353f48e4c4966b689d85c29047b34);
        
    
        var popup_a1d99824004e445d92c192a8ec2c1eaf = L.popup({"maxWidth": 2650});

        
            var i_frame_4af74f8febf74c3885391204623faf8f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBzY3VvbGEgZWxlbWVudGFyZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a1d99824004e445d92c192a8ec2c1eaf.setContent(i_frame_4af74f8febf74c3885391204623faf8f);
        

        marker_dc87f17f69ce4070a25a7f12cf6e8066.bindPopup(popup_a1d99824004e445d92c192a8ec2c1eaf)
        ;

        
    
    
            var marker_71955b31e421490caff3cfd2129c6709 = L.marker(
                [44.821502, 11.007271000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c9548ac97e534f55a057a9740013926c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_71955b31e421490caff3cfd2129c6709.setIcon(icon_c9548ac97e534f55a057a9740013926c);
        
    
        var popup_cc798c5062e34fbc877ad43fd680c1aa = L.popup({"maxWidth": 2650});

        
            var i_frame_4e401a4559354fca8e7f86b32bb16dcb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBzY3VvbGUgZGkgVWNjaXZlbGxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzQ0MzkuNjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cc798c5062e34fbc877ad43fd680c1aa.setContent(i_frame_4e401a4559354fca8e7f86b32bb16dcb);
        

        marker_71955b31e421490caff3cfd2129c6709.bindPopup(popup_cc798c5062e34fbc877ad43fd680c1aa)
        ;

        
    
    
            var marker_2035f377a6ce4e0a873785012ad52177 = L.marker(
                [44.830763, 10.988649],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6b7f182492304a4e920ad05300aab5d4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2035f377a6ce4e0a873785012ad52177.setIcon(icon_6b7f182492304a4e920ad05300aab5d4);
        
    
        var popup_0b4e9ea008f446dd9085425d05c752b3 = L.popup({"maxWidth": 2650});

        
            var i_frame_5d29263363c94d70acfc5631c42a3819 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBNb3R0YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0NjM0NzEuMzkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDIzMjg4LjMyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0b4e9ea008f446dd9085425d05c752b3.setContent(i_frame_5d29263363c94d70acfc5631c42a3819);
        

        marker_2035f377a6ce4e0a873785012ad52177.bindPopup(popup_0b4e9ea008f446dd9085425d05c752b3)
        ;

        
    
    
            var marker_07e3ddfba2da48b6955aff9d0c0acd4f = L.marker(
                [44.863144, 11.077029],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5410bacb7d9a4228b3018c4d934c02a0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_07e3ddfba2da48b6955aff9d0c0acd4f.setIcon(icon_5410bacb7d9a4228b3018c4d934c02a0);
        
    
        var popup_b8da7d572e114b6c858aedd192401fc7 = L.popup({"maxWidth": 2650});

        
            var i_frame_471f4f5e04fb4669bd96d3e1df3517ae = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGUgY2Fub25pY2EgZGkgUy4gTHVjYSBFdmFuZ2VsaXN0YSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUVET0xMQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE1MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b8da7d572e114b6c858aedd192401fc7.setContent(i_frame_471f4f5e04fb4669bd96d3e1df3517ae);
        

        marker_07e3ddfba2da48b6955aff9d0c0acd4f.bindPopup(popup_b8da7d572e114b6c858aedd192401fc7)
        ;

        
    
    
            var marker_1dc5b170d699462d85e629a3acdfe1c6 = L.marker(
                [44.834407, 11.061129],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_240114265cdb4b72bb2035210c8640b9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1dc5b170d699462d85e629a3acdfe1c6.setIcon(icon_240114265cdb4b72bb2035210c8640b9);
        
    
        var popup_c0d18b0a79da41f282e2a497fc7649c6 = L.popup({"maxWidth": 2650});

        
            var i_frame_9ee3e423d53d4580b63a376a2e1cc69e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEJhcnRvbG9tZW8gQXBvc3RvbG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1FRE9MTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c0d18b0a79da41f282e2a497fc7649c6.setContent(i_frame_9ee3e423d53d4580b63a376a2e1cc69e);
        

        marker_1dc5b170d699462d85e629a3acdfe1c6.bindPopup(popup_c0d18b0a79da41f282e2a497fc7649c6)
        ;

        
    
    
            var marker_757be62537b748c3bb2e564f0658c253 = L.marker(
                [44.83426, 11.295683],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_4403480adf0d43c68945b86b44ce6e90 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_757be62537b748c3bb2e564f0658c253.setIcon(icon_4403480adf0d43c68945b86b44ce6e90);
        
    
        var popup_3e856d7c9d8e4ce6a36e047a727e0db5 = L.popup({"maxWidth": 2650});

        
            var i_frame_d80df4aa51164362bd52a71162417365 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIEJvcnNhcmkgZGkgRmluYWx2ZWNjaGlvIC0gRXggU2N1b2xhIG1hdGVybmEgU2Fjcm8gQ3VvcmUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA2MTA5My43IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3e856d7c9d8e4ce6a36e047a727e0db5.setContent(i_frame_d80df4aa51164362bd52a71162417365);
        

        marker_757be62537b748c3bb2e564f0658c253.bindPopup(popup_3e856d7c9d8e4ce6a36e047a727e0db5)
        ;

        
    
    
            var marker_0d8d1234d8e841aab05b2bdabf9baf72 = L.marker(
                [44.828121, 11.271633999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_72b8c135f54345a394455e8d9781052a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0d8d1234d8e841aab05b2bdabf9baf72.setIcon(icon_72b8c135f54345a394455e8d9781052a);
        
    
        var popup_9aa1351b448c4fd093095e2c72ff9e83 = L.popup({"maxWidth": 2650});

        
            var i_frame_fbfb8e01c3a0493e8042a6d9cc49bbb5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTLiBMb3JlbnpvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDIyMjYyLjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9aa1351b448c4fd093095e2c72ff9e83.setContent(i_frame_fbfb8e01c3a0493e8042a6d9cc49bbb5);
        

        marker_0d8d1234d8e841aab05b2bdabf9baf72.bindPopup(popup_9aa1351b448c4fd093095e2c72ff9e83)
        ;

        
    
    
            var marker_070e0c0aca064b5ca220be127d2ee5ff = L.marker(
                [44.83354, 11.318878],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_7822d6b1e12a4e2491d3fbdadc136a01 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_070e0c0aca064b5ca220be127d2ee5ff.setIcon(icon_7822d6b1e12a4e2491d3fbdadc136a01);
        
    
        var popup_98027c0b5d1f42cba977a56b4bbaafd9 = L.popup({"maxWidth": 2650});

        
            var i_frame_46961bd18a2542f19de6e2f840db5c1f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIFZpc2l0YXppb25lIGRpIE1hcmlhIFNTLm1hIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE5MDI4NTAuMDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDk1NjI1LjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_98027c0b5d1f42cba977a56b4bbaafd9.setContent(i_frame_46961bd18a2542f19de6e2f840db5c1f);
        

        marker_070e0c0aca064b5ca220be127d2ee5ff.bindPopup(popup_98027c0b5d1f42cba977a56b4bbaafd9)
        ;

        
    
    
            var marker_57e1cf50887a44bcaf650d6bead438ce = L.marker(
                [44.834645, 11.297011999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_0ec68b914d43460fb37d053e240ccc13 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_57e1cf50887a44bcaf650d6bead438ce.setIcon(icon_0ec68b914d43460fb37d053e240ccc13);
        
    
        var popup_69efe9126b1a4e2d910a8d9ac8e0f75f = L.popup({"maxWidth": 2650});

        
            var i_frame_d213c4346f9a41acbf16bd35bd600a46 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gRnJhbmNlc2NvIGQnQXNzaXNpIGVkaWZpY2lvIHBhcnJvY2NoaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_69efe9126b1a4e2d910a8d9ac8e0f75f.setContent(i_frame_d213c4346f9a41acbf16bd35bd600a46);
        

        marker_57e1cf50887a44bcaf650d6bead438ce.bindPopup(popup_69efe9126b1a4e2d910a8d9ac8e0f75f)
        ;

        
    
    
            var marker_2b7071838a7540f3a8ce605e9e13898b = L.marker(
                [44.834631, 11.29683],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e93db42bdd1d41d6a60b31daf08e0d04 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2b7071838a7540f3a8ce605e9e13898b.setIcon(icon_e93db42bdd1d41d6a60b31daf08e0d04);
        
    
        var popup_5faddb12321d4273816e7c9f273fd852 = L.popup({"maxWidth": 2650});

        
            var i_frame_1b59c3886bbf411b923c5c852d3f38fe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gRnJhbmNlc2NvIGQnQXNzaXNpIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5faddb12321d4273816e7c9f273fd852.setContent(i_frame_1b59c3886bbf411b923c5c852d3f38fe);
        

        marker_2b7071838a7540f3a8ce605e9e13898b.bindPopup(popup_5faddb12321d4273816e7c9f273fd852)
        ;

        
    
    
            var marker_7401d40931eb401dab797f5b23b9b042 = L.marker(
                [44.834431, 11.302164],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_1ff8fbac90e245a78c182e28db1f9245 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_7401d40931eb401dab797f5b23b9b042.setIcon(icon_1ff8fbac90e245a78c182e28db1f9245);
        
    
        var popup_d6dd397897da469b9e4d4ecc2d1a5050 = L.popup({"maxWidth": 2650});

        
            var i_frame_e3f9e686abf24b8097308f7dcff05605 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gQWdvc3Rpbm8gZGVsIFNlbWluYXJpbyAoZ2nDoCBDaGllc2EgZGkgUy4gTmljb2xhIGRhIFRvbGVudGlubykgLSBJSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDUwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d6dd397897da469b9e4d4ecc2d1a5050.setContent(i_frame_e3f9e686abf24b8097308f7dcff05605);
        

        marker_7401d40931eb401dab797f5b23b9b042.bindPopup(popup_d6dd397897da469b9e4d4ecc2d1a5050)
        ;

        
    
    
            var marker_1c097081a6064fd8b00817ccf9efb02f = L.marker(
                [44.830094, 11.288941000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_366206a90b22416ba77ef5ac881e4b61 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1c097081a6064fd8b00817ccf9efb02f.setIcon(icon_366206a90b22416ba77ef5ac881e4b61);
        
    
        var popup_c4e4896655ee4328a3aa0b2b25c0cd27 = L.popup({"maxWidth": 2650});

        
            var i_frame_88db8964b3034ae3bddc21fd4b6b410e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gRnJhbmNlc2NvIGRpIFBhb2xhIChkZWwgQ2ltaXRlcm8pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTAwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c4e4896655ee4328a3aa0b2b25c0cd27.setContent(i_frame_88db8964b3034ae3bddc21fd4b6b410e);
        

        marker_1c097081a6064fd8b00817ccf9efb02f.bindPopup(popup_c4e4896655ee4328a3aa0b2b25c0cd27)
        ;

        
    
    
            var marker_fb2a52eef024415797a815c8ac32eeeb = L.marker(
                [44.851465000000005, 11.211431],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_70e9aafea76e484c85e50c0a53ae3afb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_fb2a52eef024415797a815c8ac32eeeb.setIcon(icon_70e9aafea76e484c85e50c0a53ae3afb);
        
    
        var popup_a9e8a5778eba447cb216ae72084c5706 = L.popup({"maxWidth": 2650});

        
            var i_frame_afb03c650e344911b61f99762242b308 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBHZW1pbmlhbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a9e8a5778eba447cb216ae72084c5706.setContent(i_frame_afb03c650e344911b61f99762242b308);
        

        marker_fb2a52eef024415797a815c8ac32eeeb.bindPopup(popup_a9e8a5778eba447cb216ae72084c5706)
        ;

        
    
    
            var marker_38b579d40f594d49abc9ad30884aa47b = L.marker(
                [44.832190000000004, 11.297184],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_afd98f0bf4b94d76aff904ef1da6152d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_38b579d40f594d49abc9ad30884aa47b.setIcon(icon_afd98f0bf4b94d76aff904ef1da6152d);
        
    
        var popup_d458cb5c23c34741a7e7d4f2249f77e4 = L.popup({"maxWidth": 2650});

        
            var i_frame_a78c323ef896423aab758c89d058072d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBwYXJyb2NjaGlhIFNTLiBGaWxpcHBvIGUgR2lhY29tbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d458cb5c23c34741a7e7d4f2249f77e4.setContent(i_frame_a78c323ef896423aab758c89d058072d);
        

        marker_38b579d40f594d49abc9ad30884aa47b.bindPopup(popup_d458cb5c23c34741a7e7d4f2249f77e4)
        ;

        
    
    
            var marker_6e0bbc290a194ce89ddeacc00a4b9d54 = L.marker(
                [44.858683, 10.999447],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_bdd85d7713d64ecfb833b9fe4de4f82d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6e0bbc290a194ce89ddeacc00a4b9d54.setIcon(icon_bdd85d7713d64ecfb833b9fe4de4f82d);
        
    
        var popup_19b64a59b7874e2e90abab35bccbe2cd = L.popup({"maxWidth": 2650});

        
            var i_frame_0fd38529bf5d478fbf7c094aa30a8ba4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpb3Zhbm5pIEJhdHRpc3RhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_19b64a59b7874e2e90abab35bccbe2cd.setContent(i_frame_0fd38529bf5d478fbf7c094aa30a8ba4);
        

        marker_6e0bbc290a194ce89ddeacc00a4b9d54.bindPopup(popup_19b64a59b7874e2e90abab35bccbe2cd)
        ;

        
    
    
            var marker_8a638c70337340338de0201d5f72c20c = L.marker(
                [44.828594, 10.986213000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f44df19026a54f869f243c82be986cfe = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_8a638c70337340338de0201d5f72c20c.setIcon(icon_f44df19026a54f869f243c82be986cfe);
        
    
        var popup_78ab84f7fc9e4b4aa95fe888780be74e = L.popup({"maxWidth": 2650});

        
            var i_frame_13a945c6a0154d78a95e8b9ae0989020 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGFkIE5pdmVzIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjQzNzUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_78ab84f7fc9e4b4aa95fe888780be74e.setContent(i_frame_13a945c6a0154d78a95e8b9ae0989020);
        

        marker_8a638c70337340338de0201d5f72c20c.bindPopup(popup_78ab84f7fc9e4b4aa95fe888780be74e)
        ;

        
    
    
            var marker_a7717bae33524d8ab0d7d52590527d96 = L.marker(
                [44.828469, 10.986044999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_831c2f4256a94927adb612ba061db5e4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a7717bae33524d8ab0d7d52590527d96.setIcon(icon_831c2f4256a94927adb612ba061db5e4);
        
    
        var popup_87b855475a204125a12b958971567020 = L.popup({"maxWidth": 2650});

        
            var i_frame_83968d9bb3c04841ac4aa7d565a964e1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGFkIE5pdmVzIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTEwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_87b855475a204125a12b958971567020.setContent(i_frame_83968d9bb3c04841ac4aa7d565a964e1);
        

        marker_a7717bae33524d8ab0d7d52590527d96.bindPopup(popup_87b855475a204125a12b958971567020)
        ;

        
    
    
            var marker_43bcc49b6f3e4a58ab77f12354be5bbc = L.marker(
                [44.842613, 11.499003],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_06c62d7d2080403482ffa0961f08dfc2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_43bcc49b6f3e4a58ab77f12354be5bbc.setIcon(icon_06c62d7d2080403482ffa0961f08dfc2);
        
    
        var popup_67925d657d19442c8d9ce482577dca60 = L.popup({"maxWidth": 2650});

        
            var i_frame_f9ec5a47e4fb45b4b3fb3c6e88a92538 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIE5hdGl2aXTDoCBkZWxsYSBCZWF0YSBWZXJnaW5lIE1hcmlhIGNoaWVzYSBjb24gY2FtcGFuaWxlICsgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFZJR0FSQU5PIE1BSU5BUkRBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNjI1MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_67925d657d19442c8d9ce482577dca60.setContent(i_frame_f9ec5a47e4fb45b4b3fb3c6e88a92538);
        

        marker_43bcc49b6f3e4a58ab77f12354be5bbc.bindPopup(popup_67925d657d19442c8d9ce482577dca60)
        ;

        
    
    
            var marker_d6a71783dce0417981146b992c8dd0c9 = L.marker(
                [44.876719, 11.325595],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a8a6b8235e0e4b23a98c10de43b62f7c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_d6a71783dce0417981146b992c8dd0c9.setIcon(icon_a8a6b8235e0e4b23a98c10de43b62f7c);
        
    
        var popup_52be8636fecb4e5886068bf01b53aadf = L.popup({"maxWidth": 2650});

        
            var i_frame_7ac744b3598f45dd8d98d07ea7feeb95 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbCdBbm51bmNpYXppb25lIGRlbGxhIEJlYXRhIFZlcmdpbmUgTWFyaWEgKGNoaWVzYSB2ZWNjaGlhKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_52be8636fecb4e5886068bf01b53aadf.setContent(i_frame_7ac744b3598f45dd8d98d07ea7feeb95);
        

        marker_d6a71783dce0417981146b992c8dd0c9.bindPopup(popup_52be8636fecb4e5886068bf01b53aadf)
        ;

        
    
    
            var marker_faf9b295fbef4112acbaee414951a616 = L.marker(
                [44.897240000000004, 11.460196],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e88726cea638420799022a91f5e52251 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_faf9b295fbef4112acbaee414951a616.setIcon(icon_e88726cea638420799022a91f5e52251);
        
    
        var popup_5f147a19c1f04b2381752844e711197c = L.popup({"maxWidth": 2650});

        
            var i_frame_9ed0dafc165645fca7f55a3f6ce3c6dc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIE5hdGl2aXTDoCBkaSBNYXJpYSBWZXJnaW5lIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgOTY4Ny41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5f147a19c1f04b2381752844e711197c.setContent(i_frame_9ed0dafc165645fca7f55a3f6ce3c6dc);
        

        marker_faf9b295fbef4112acbaee414951a616.bindPopup(popup_5f147a19c1f04b2381752844e711197c)
        ;

        
    
    
            var marker_e00ef6513e6e4506a9fcd4343471dd28 = L.marker(
                [44.947261, 11.421517999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2df2c3c64c2246789fe9def7adb485ac = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e00ef6513e6e4506a9fcd4343471dd28.setIcon(icon_2df2c3c64c2246789fe9def7adb485ac);
        
    
        var popup_dcc05d239cac41c4ae4a70717ab64177 = L.popup({"maxWidth": 2650});

        
            var i_frame_9042f2679bf244a0a2fe1cc60662af40 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTLiBGcmFuY2VzY28gLSBjaGllc2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dcc05d239cac41c4ae4a70717ab64177.setContent(i_frame_9042f2679bf244a0a2fe1cc60662af40);
        

        marker_e00ef6513e6e4506a9fcd4343471dd28.bindPopup(popup_dcc05d239cac41c4ae4a70717ab64177)
        ;

        
    
    
            var marker_5a589859b8534ad89d970fee02466048 = L.marker(
                [44.947377, 11.422286],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_9f8461fb3a2e459c9d5a8a85f36dd873 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_5a589859b8534ad89d970fee02466048.setIcon(icon_9f8461fb3a2e459c9d5a8a85f36dd873);
        
    
        var popup_9ab1dfce5e2c4af383131c8005168812 = L.popup({"maxWidth": 2650});

        
            var i_frame_0ea7aa60561c4923806eca0468fb9f56 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIE5hdGl2aXTDoCBkaSBNYXJpYSBWZXJnaW5lIGUgT3JhdG9yaW8gZGkgUy4gRG9tZW5pY28gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTU0MjM0Ni45MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNjc4MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9ab1dfce5e2c4af383131c8005168812.setContent(i_frame_0ea7aa60561c4923806eca0468fb9f56);
        

        marker_5a589859b8534ad89d970fee02466048.bindPopup(popup_9ab1dfce5e2c4af383131c8005168812)
        ;

        
    
    
            var marker_2f2829e7a1ef4feba9f173aed080ce5f = L.marker(
                [44.866164000000005, 11.391798],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a69c958389ce4a75869ef1a144124a1e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2f2829e7a1ef4feba9f173aed080ce5f.setIcon(icon_a69c958389ce4a75869ef1a144124a1e);
        
    
        var popup_ef76181522ea4c268f6f5b629e405c5b = L.popup({"maxWidth": 2650});

        
            var i_frame_8066a3fa5381454781b99809b3a0b902 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFBpZXRybyBhcG9zdG9sbyBjaGllc2EgY29uIGNhbXBhbmlsZSBlIGNhcHBlbGxhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDUwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ef76181522ea4c268f6f5b629e405c5b.setContent(i_frame_8066a3fa5381454781b99809b3a0b902);
        

        marker_2f2829e7a1ef4feba9f173aed080ce5f.bindPopup(popup_ef76181522ea4c268f6f5b629e405c5b)
        ;

        
    
    
            var marker_f942436dec5342f0bf0412029e09e8d5 = L.marker(
                [44.884858, 11.419295],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_21d508a76a984dd3aa702e525a82fb21 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f942436dec5342f0bf0412029e09e8d5.setIcon(icon_21d508a76a984dd3aa702e525a82fb21);
        
    
        var popup_32f575e0bd8e4cea8e1fa36077c5e9d7 = L.popup({"maxWidth": 2650});

        
            var i_frame_36c114996aa34ab791884eb9b9de57d1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsbGEgQmVhdGEgVmVyZ2luZSBBZGRvbG9yYXRhIC0gQ2hpZXNhIGRlbGwnQWRkb2xvcmF0YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEzMzc1LjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_32f575e0bd8e4cea8e1fa36077c5e9d7.setContent(i_frame_36c114996aa34ab791884eb9b9de57d1);
        

        marker_f942436dec5342f0bf0412029e09e8d5.bindPopup(popup_32f575e0bd8e4cea8e1fa36077c5e9d7)
        ;

        
    
    
            var marker_c0763826d03e4df08a082940be1db1bb = L.marker(
                [44.885513, 11.417017],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_aa5798f3251b48cba9f471064a0db8fc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c0763826d03e4df08a082940be1db1bb.setIcon(icon_aa5798f3251b48cba9f471064a0db8fc);
        
    
        var popup_ca1fe5765bd94677ad47854b309cc59b = L.popup({"maxWidth": 2650});

        
            var i_frame_21ec7d9c1a544c5982a7b2980950fc09 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsIFNhY3JvIEN1b3JlIC0gZGV0dGEgZGVsbGUgQ2F0ZW5lIC8gQ2hpZXNhIGRlbCBTYWNyYW1lbnRvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNzA2Mi41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ca1fe5765bd94677ad47854b309cc59b.setContent(i_frame_21ec7d9c1a544c5982a7b2980950fc09);
        

        marker_c0763826d03e4df08a082940be1db1bb.bindPopup(popup_ca1fe5765bd94677ad47854b309cc59b)
        ;

        
    
    
            var marker_015cc49c2b554426a25ea5742f3d9e8f = L.marker(
                [44.887158, 11.414407],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_7a71bfc6c4184c7aac1a1e853806a27f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_015cc49c2b554426a25ea5742f3d9e8f.setIcon(icon_7a71bfc6c4184c7aac1a1e853806a27f);
        
    
        var popup_afa4a11c72504f60932c53266c98b4f6 = L.popup({"maxWidth": 2650});

        
            var i_frame_49bc8272ffd74a52bb1fae083c19d65b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBCZWF0YSBWZXJnaW5lIGRpIExvdXJkZXMgLSBDaGllc2EgZGVsbGEgTWFkb25uYSBkZWxsZSBHcmF6aWUgKE9yYXRvcmlvIGRlbCBDcm9jaWZpc3NvOyBDaGllc2luYSBkZWxsZSBTdW9yZSkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMDMxMi4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_afa4a11c72504f60932c53266c98b4f6.setContent(i_frame_49bc8272ffd74a52bb1fae083c19d65b);
        

        marker_015cc49c2b554426a25ea5742f3d9e8f.bindPopup(popup_afa4a11c72504f60932c53266c98b4f6)
        ;

        
    
    
            var marker_aa575cc7897c47b0b31d1143c5ab8950 = L.marker(
                [44.857551, 11.375974000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_d37b6c44daeb4f0e8a2fe1708c95e5d2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_aa575cc7897c47b0b31d1143c5ab8950.setIcon(icon_d37b6c44daeb4f0e8a2fe1708c95e5d2);
        
    
        var popup_8cf92d6be494461287e3820520c437e1 = L.popup({"maxWidth": 2650});

        
            var i_frame_3d4514e5b074428db23912584e15cd51 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2V0dGEgZGVsbGEgQ29yb25lbGxhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQ5NDM0LjYzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8cf92d6be494461287e3820520c437e1.setContent(i_frame_3d4514e5b074428db23912584e15cd51);
        

        marker_aa575cc7897c47b0b31d1143c5ab8950.bindPopup(popup_8cf92d6be494461287e3820520c437e1)
        ;

        
    
    
            var marker_bcf57ce422094f3f92149684e69ebfee = L.marker(
                [44.884949, 11.424474],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_cea830ff231143d691a73e5b433eba36 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_bcf57ce422094f3f92149684e69ebfee.setIcon(icon_cea830ff231143d691a73e5b433eba36);
        
    
        var popup_01795f0524164104b7c0c5f5e6b9dcfc = L.popup({"maxWidth": 2650});

        
            var i_frame_025a5ff7301e40e19c25dcb8572dc696 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpb3Zhbm5pIEJhdHRpc3RhIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDg2MTgxMi44OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDMxMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_01795f0524164104b7c0c5f5e6b9dcfc.setContent(i_frame_025a5ff7301e40e19c25dcb8572dc696);
        

        marker_bcf57ce422094f3f92149684e69ebfee.bindPopup(popup_01795f0524164104b7c0c5f5e6b9dcfc)
        ;

        
    
    
            var marker_60a3ae43ed9d42c39e1eb62ce830fc1c = L.marker(
                [44.889981, 11.066132000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6cc12d99313f49a7a4d261e49fbcda14 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_60a3ae43ed9d42c39e1eb62ce830fc1c.setIcon(icon_6cc12d99313f49a7a4d261e49fbcda14);
        
    
        var popup_8143cd500ae64089aced58c745a3fb75 = L.popup({"maxWidth": 2650});

        
            var i_frame_45cbd5d557144f2baf9de241f65036ad = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCB0cmF0dGEgZmVycm92aWEgTWlyYW5kb2xhLVJvbG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8143cd500ae64089aced58c745a3fb75.setContent(i_frame_45cbd5d557144f2baf9de241f65036ad);
        

        marker_60a3ae43ed9d42c39e1eb62ce830fc1c.bindPopup(popup_8143cd500ae64089aced58c745a3fb75)
        ;

        
    
    
            var marker_7316684af3d54110b919763f8a490a1c = L.marker(
                [44.888201, 11.065586],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_81590b9bac5943489be3b511c7ccc4bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_7316684af3d54110b919763f8a490a1c.setIcon(icon_81590b9bac5943489be3b511c7ccc4bb);
        
    
        var popup_08cd874d354f49588e9f54a4185d998d = L.popup({"maxWidth": 2650});

        
            var i_frame_eb9f9cbb31f94ef9bdcf0ce9a3d99831 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gTnVvdm8gLSBJSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQzODcwOTIuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjI4OTA4LjAzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_08cd874d354f49588e9f54a4185d998d.setContent(i_frame_eb9f9cbb31f94ef9bdcf0ce9a3d99831);
        

        marker_7316684af3d54110b919763f8a490a1c.bindPopup(popup_08cd874d354f49588e9f54a4185d998d)
        ;

        
    
    
            var marker_ea35358142774729ba6c88f6e73b28b1 = L.marker(
                [44.885277, 11.066573],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_224b949aa6bd4469aa44ad1209cc7f41 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ea35358142774729ba6c88f6e73b28b1.setIcon(icon_224b949aa6bd4469aa44ad1209cc7f41);
        
    
        var popup_230f10421625428da16ae505d1787e00 = L.popup({"maxWidth": 2650});

        
            var i_frame_928eb5e021fb4bd89919ffad864fd4a0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBNaWxpemlhIC0gRXggQ2FzZXJtYSBNVlNDIFZpYSBGZW5pY2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI3MTkxMS41MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_230f10421625428da16ae505d1787e00.setContent(i_frame_928eb5e021fb4bd89919ffad864fd4a0);
        

        marker_ea35358142774729ba6c88f6e73b28b1.bindPopup(popup_230f10421625428da16ae505d1787e00)
        ;

        
    
    
            var marker_a9f2a669b7644c41af50334528a04f38 = L.marker(
                [44.888166999999996, 11.068152],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_0f158da912bd45c398da3a2100d0d460 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a9f2a669b7644c41af50334528a04f38.setIcon(icon_0f158da912bd45c398da3a2100d0d460);
        
    
        var popup_9ce344fa1fa1407ea5227db18b990cda = L.popup({"maxWidth": 2650});

        
            var i_frame_4736af6764294fbdaaa7381d3d804c13 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiAoZXggU2N1b2xhIE1lZGlhIFN0YXRhbGUgTGljZW8gUGljbykgQmlibGlvdGVjYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI4NzY5MTIuODMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE1MDI0OC41NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9ce344fa1fa1407ea5227db18b990cda.setContent(i_frame_4736af6764294fbdaaa7381d3d804c13);
        

        marker_a9f2a669b7644c41af50334528a04f38.bindPopup(popup_9ce344fa1fa1407ea5227db18b990cda)
        ;

        
    
    
            var marker_36cdfec555a54e2992a3a45e71022748 = L.marker(
                [44.919638, 10.804647000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2570694dcb5a4995a12d9e410ff6cff7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_36cdfec555a54e2992a3a45e71022748.setIcon(icon_2570694dcb5a4995a12d9e410ff6cff7);
        
    
        var popup_b31fc95e496b4a18b9a6bd37027dd298 = L.popup({"maxWidth": 2650});

        
            var i_frame_ba127b7c1d1f4b67a6c129b798a5f4ac = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBdWRpdG9yaXVtIGUgYmlibGlvdGVjYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b31fc95e496b4a18b9a6bd37027dd298.setContent(i_frame_ba127b7c1d1f4b67a6c129b798a5f4ac);
        

        marker_36cdfec555a54e2992a3a45e71022748.bindPopup(popup_b31fc95e496b4a18b9a6bd37027dd298)
        ;

        
    
    
            var marker_9739aed0f7264987b895748dfb5ad715 = L.marker(
                [44.916859, 10.859534],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e7b2ae1774414e3f95dda82161be7d45 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9739aed0f7264987b895748dfb5ad715.setIcon(icon_e7b2ae1774414e3f95dda82161be7d45);
        
    
        var popup_0ecd44819fb94e1d8f58dbf144be803d = L.popup({"maxWidth": 2650});

        
            var i_frame_eb0b47e69ab84eddb15069a4164b0246 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIEFzc3VudGEgZSBwZXJ0aW5lbnplIC0gSUlJICBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA1MDE2OS4yNyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0ecd44819fb94e1d8f58dbf144be803d.setContent(i_frame_eb0b47e69ab84eddb15069a4164b0246);
        

        marker_9739aed0f7264987b895748dfb5ad715.bindPopup(popup_0ecd44819fb94e1d8f58dbf144be803d)
        ;

        
    
    
            var marker_a11781864886451fa2da57a16fd2e99e = L.marker(
                [44.89685, 11.062337],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b7d4997a54ed4cbd9c10311d420c2fa2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a11781864886451fa2da57a16fd2e99e.setIcon(icon_b7d4997a54ed4cbd9c10311d420c2fa2);
        
    
        var popup_ada2f895ed684db79a2d9980c1c80481 = L.popup({"maxWidth": 2650});

        
            var i_frame_893d6b78bc2f4d79b986c1f07b908f8b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBVcmJhbm8gZGVsIENhcG9sdW9nbyAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ada2f895ed684db79a2d9980c1c80481.setContent(i_frame_893d6b78bc2f4d79b986c1f07b908f8b);
        

        marker_a11781864886451fa2da57a16fd2e99e.bindPopup(popup_ada2f895ed684db79a2d9980c1c80481)
        ;

        
    
    
            var marker_e169d69d6e6245859c97440da59822a4 = L.marker(
                [44.890023, 10.898615],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_244a89c0201c4755be9e787798ca0845 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e169d69d6e6245859c97440da59822a4.setIcon(icon_244a89c0201c4755be9e787798ca0845);
        
    
        var popup_3165d18c04364355a7f9920c521969e3 = L.popup({"maxWidth": 2650});

        
            var i_frame_4280df11d6c8442db327d8b62066d91a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbnRlcnZlbnRvIGRpIGVmZmljZW50YW1lbnRvIGVuZXJnZXRpY28gY29uIGxhIHJlYWxpenphemlvbmUgZGkgdW4gbnVvdm8gaW1waWFudG8gZm90b3ZvbHRhaWNvIHN1bGxhIGNvcGVydHVyYSBkZWxsYSBwYWxlc3RyYSBkZWxsYSBTY3VvbGEgU2Vjb25kYXJpYSBkaSBQcmltbyBHcmFkbyBkaSBOb3ZpIGRpIE1vZGVuYSAnbW9uaWEgRnJhbmNpb3NpJyAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3165d18c04364355a7f9920c521969e3.setContent(i_frame_4280df11d6c8442db327d8b62066d91a);
        

        marker_e169d69d6e6245859c97440da59822a4.bindPopup(popup_3165d18c04364355a7f9920c521969e3)
        ;

        
    
    
            var marker_669b1c8e2ee345149553425434005526 = L.marker(
                [44.887904999999996, 11.069417],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f924fe1e1e2a455da0d9d683553440bf = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_669b1c8e2ee345149553425434005526.setIcon(icon_f924fe1e1e2a455da0d9d683553440bf);
        
    
        var popup_8956f3ce99714ec388247d8a4d3bbf36 = L.popup({"maxWidth": 2650});

        
            var i_frame_1c0d986bbfac412aaf626dfddb75635a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBjb2xsZWdpbyBkZWkgR2VzdWl0aSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTAwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8956f3ce99714ec388247d8a4d3bbf36.setContent(i_frame_1c0d986bbfac412aaf626dfddb75635a);
        

        marker_669b1c8e2ee345149553425434005526.bindPopup(popup_8956f3ce99714ec388247d8a4d3bbf36)
        ;

        
    
    
            var marker_ec4fd70ef40e47388b87c8b9b90c1a5c = L.marker(
                [44.888542, 11.069375],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2ff68f260fcd42cfa3e0361c8266bead = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ec4fd70ef40e47388b87c8b9b90c1a5c.setIcon(icon_2ff68f260fcd42cfa3e0361c8266bead);
        
    
        var popup_296576e978064ded831b55ee69e096e1 = L.popup({"maxWidth": 2650});

        
            var i_frame_d065a6c3b92948c791dd9acff5bf13be = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVsIEdlc8O5IDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyMjUwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_296576e978064ded831b55ee69e096e1.setContent(i_frame_d065a6c3b92948c791dd9acff5bf13be);
        

        marker_ec4fd70ef40e47388b87c8b9b90c1a5c.bindPopup(popup_296576e978064ded831b55ee69e096e1)
        ;

        
    
    
            var marker_1068f18ca76f4f4ba5c9b72b667bba3c = L.marker(
                [44.887746, 11.068118],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b79c72f7c9354d88bdc62d147f51954f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1068f18ca76f4f4ba5c9b72b667bba3c.setIcon(icon_b79c72f7c9354d88bdc62d147f51954f);
        
    
        var popup_88384f6bed8342b695e25d17bd8c9985 = L.popup({"maxWidth": 2650});

        
            var i_frame_e1bcc622af24454ca2752ee85f37e1ed = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgU2FuIEZyYW5jZXNjbyAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzOTQ1OTkuODMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDc1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_88384f6bed8342b695e25d17bd8c9985.setContent(i_frame_e1bcc622af24454ca2752ee85f37e1ed);
        

        marker_1068f18ca76f4f4ba5c9b72b667bba3c.bindPopup(popup_88384f6bed8342b695e25d17bd8c9985)
        ;

        
    
    
            var marker_972cf6ce91c9419f9722a1d02d326973 = L.marker(
                [44.886984000000005, 11.06611],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_74d0403e6db84e74a0572b34dec76f99 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_972cf6ce91c9419f9722a1d02d326973.setIcon(icon_74d0403e6db84e74a0572b34dec76f99);
        
    
        var popup_5c3efbb8c5e245698b2160ca7d39373e = L.popup({"maxWidth": 2650});

        
            var i_frame_d47285b4275147ec843f45b1ec04b0b9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIG11bmljaXBhbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA2MDcxMDE5LjY0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzNzI1MzUuNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5c3efbb8c5e245698b2160ca7d39373e.setContent(i_frame_d47285b4275147ec843f45b1ec04b0b9);
        

        marker_972cf6ce91c9419f9722a1d02d326973.bindPopup(popup_5c3efbb8c5e245698b2160ca7d39373e)
        ;

        
    
    
            var marker_6bb33dadbd4d4c7fa20f4b273f6ca802 = L.marker(
                [44.885596, 11.042849],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_702ef098b30145a7ad4ff9a676c129f6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6bb33dadbd4d4c7fa20f4b273f6ca802.setIcon(icon_702ef098b30145a7ad4ff9a676c129f6);
        
    
        var popup_c912febb0f7747c0a22dc06017daee8a = L.popup({"maxWidth": 2650});

        
            var i_frame_dccdc93bdb2a48df912b7c428515a97b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgU2FuIE1hcnRpbm8gQ2FyYW5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0NTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c912febb0f7747c0a22dc06017daee8a.setContent(i_frame_dccdc93bdb2a48df912b7c428515a97b);
        

        marker_6bb33dadbd4d4c7fa20f4b273f6ca802.bindPopup(popup_c912febb0f7747c0a22dc06017daee8a)
        ;

        
    
    
            var marker_bd74573e34274985b0226e30c6bffe21 = L.marker(
                [44.893028, 10.99509],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_68f60b3fe974408cb33e3a29b73a12a7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_bd74573e34274985b0226e30c6bffe21.setIcon(icon_68f60b3fe974408cb33e3a29b73a12a7);
        
    
        var popup_799d71e7c0934c13b9588f70714e3deb = L.popup({"maxWidth": 2650});

        
            var i_frame_cf70677c85734635a6b98c8c88927b4b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBGYWJicmljYXRvIGFkIHVzbyBzYWxhIHBvbGl2YWxlbnRlICdUZWF0cm8gVmFyaW5pJyAoaW4gdXNvIGFsIENvbXVuZSkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBQT1NTSURPTklPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzY0NTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_799d71e7c0934c13b9588f70714e3deb.setContent(i_frame_cf70677c85734635a6b98c8c88927b4b);
        

        marker_bd74573e34274985b0226e30c6bffe21.bindPopup(popup_799d71e7c0934c13b9588f70714e3deb)
        ;

        
    
    
            var marker_7df543a716c84df298017f5a492f6703 = L.marker(
                [44.893209999999996, 10.990614],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_33241020ee004d6d9becd9174d49e692 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_7df543a716c84df298017f5a492f6703.setIcon(icon_33241020ee004d6d9becd9174d49e692);
        
    
        var popup_685d214d9bf74d7aa7dd6ec3e7189748 = L.popup({"maxWidth": 2650});

        
            var i_frame_1be80aaddc914b80b21992a8f220ea1c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBDb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIFBPU1NJRE9OSU8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_685d214d9bf74d7aa7dd6ec3e7189748.setContent(i_frame_1be80aaddc914b80b21992a8f220ea1c);
        

        marker_7df543a716c84df298017f5a492f6703.bindPopup(popup_685d214d9bf74d7aa7dd6ec3e7189748)
        ;

        
    
    
            var marker_f0ecf2d130324918b66e65d7b57b4355 = L.marker(
                [44.889456, 10.997364],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_1f2bfd4df3ba42428e161b232ca32e11 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f0ecf2d130324918b66e65d7b57b4355.setIcon(icon_1f2bfd4df3ba42428e161b232ca32e11);
        
    
        var popup_6736119ced3a47f5941402f48dd52146 = L.popup({"maxWidth": 2650});

        
            var i_frame_7eceb3658a6545b4af23f526ff9a8fb5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBGYWJicmljYXRvIGV4IHNlZGUgTXVuaWNpcGFsZSAtICBtaWNyb3Jlc2lkZW56YSBBU1AgVU5JT05FIENPTVVOSSBBUkVBIE5PUkQgKFVDTUFOKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIFBPU1NJRE9OSU8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgOTA4NDMyLjI1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6736119ced3a47f5941402f48dd52146.setContent(i_frame_7eceb3658a6545b4af23f526ff9a8fb5);
        

        marker_f0ecf2d130324918b66e65d7b57b4355.bindPopup(popup_6736119ced3a47f5941402f48dd52146)
        ;

        
    
    
            var marker_0599177fdd174490b370edf7211bc516 = L.marker(
                [44.94215, 11.006003],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5b3fb2b9caff4f57a96464ed7263765a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0599177fdd174490b370edf7211bc516.setIcon(icon_5b3fb2b9caff4f57a96464ed7263765a);
        
    
        var popup_e65a7ef07caa4ea296c36b8af963dbd3 = L.popup({"maxWidth": 2650});

        
            var i_frame_1d410c05504e4ee5ac9ee828150bd2b1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gZGVsIHBvcG9sbyBmcmF6aW9uZSBkaSBWYWxsYWx0YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNzk0NjA5Ljk4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzOTczMC41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e65a7ef07caa4ea296c36b8af963dbd3.setContent(i_frame_1d410c05504e4ee5ac9ee828150bd2b1);
        

        marker_0599177fdd174490b370edf7211bc516.bindPopup(popup_e65a7ef07caa4ea296c36b8af963dbd3)
        ;

        
    
    
            var marker_bd8c82a76dfb453098f8cc4831e57033 = L.marker(
                [44.915447, 10.981547],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_cd0599d8bdd4430fab967fcf52042f4b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_bd8c82a76dfb453098f8cc4831e57033.setIcon(icon_cd0599d8bdd4430fab967fcf52042f4b);
        
    
        var popup_050d8099b23a43b3be7a1fe7d5afc985 = L.popup({"maxWidth": 2650});

        
            var i_frame_357d3d2ea6784c0b9bd220596ecb24ad = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gZGVsIFBvcG9sbyBDYXBvbHVvZ28gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTM3MjQyLjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_050d8099b23a43b3be7a1fe7d5afc985.setContent(i_frame_357d3d2ea6784c0b9bd220596ecb24ad);
        

        marker_bd8c82a76dfb453098f8cc4831e57033.bindPopup(popup_050d8099b23a43b3be7a1fe7d5afc985)
        ;

        
    
    
            var marker_6e598de441c44180accac0546849b6d6 = L.marker(
                [44.912259000000006, 10.982788000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fbab8b911b554ff1be7a6f02a04cfe55 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6e598de441c44180accac0546849b6d6.setIcon(icon_fbab8b911b554ff1be7a6f02a04cfe55);
        
    
        var popup_e244b76366c44b019bbd1b48be87f28d = L.popup({"maxWidth": 2650});

        
            var i_frame_6e415d0aac304173ab851893c7d64449 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdW5pY2lwaW8gZXggUGFsYXp6byBDb3JiZWxsaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNzUwODQuMDMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e244b76366c44b019bbd1b48be87f28d.setContent(i_frame_6e415d0aac304173ab851893c7d64449);
        

        marker_6e598de441c44180accac0546849b6d6.bindPopup(popup_e244b76366c44b019bbd1b48be87f28d)
        ;

        
    
    
            var marker_1b5a3ede38cb4d1ba8f8e8ec5399ea5c = L.marker(
                [44.823345, 11.458105999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_4d105a668cb54592a7fb5204307af052 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1b5a3ede38cb4d1ba8f8e8ec5399ea5c.setIcon(icon_4d105a668cb54592a7fb5204307af052);
        
    
        var popup_ebacffaecefe4d5d84d2f13f89e9fbf2 = L.popup({"maxWidth": 2650});

        
            var i_frame_eb688fcb5a424388afd481a0ba6e0a47 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgUHJpbWFyaWEgJ0cuR29uZWxsaScgZSBwYWxlc3RyYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQUJFTExPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTUyMzM4Ljc4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ebacffaecefe4d5d84d2f13f89e9fbf2.setContent(i_frame_eb688fcb5a424388afd481a0ba6e0a47);
        

        marker_1b5a3ede38cb4d1ba8f8e8ec5399ea5c.bindPopup(popup_ebacffaecefe4d5d84d2f13f89e9fbf2)
        ;

        
    
    
            var marker_61dc6991c562416184454cab93a36402 = L.marker(
                [44.937862, 11.420067999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_228b5e8ffd724e6593718dfd9902323a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_61dc6991c562416184454cab93a36402.setIcon(icon_228b5e8ffd724e6593718dfd9902323a);
        
    
        var popup_56faa2bef6634df09affae9f81bf591a = L.popup({"maxWidth": 2650});

        
            var i_frame_71bd8a247ebe4d84bb8e478da00e5d07 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBOdW92YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDUwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_56faa2bef6634df09affae9f81bf591a.setContent(i_frame_71bd8a247ebe4d84bb8e478da00e5d07);
        

        marker_61dc6991c562416184454cab93a36402.bindPopup(popup_56faa2bef6634df09affae9f81bf591a)
        ;

        
    
    
            var marker_57413ae02ed143ad97e0ad6855824a7c = L.marker(
                [44.841096, 11.238195],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e7bdc232de754b34882da8fca098e7ea = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_57413ae02ed143ad97e0ad6855824a7c.setIcon(icon_e7bdc232de754b34882da8fca098e7ea);
        
    
        var popup_be9bfe9467094965a67315e519b1e8fe = L.popup({"maxWidth": 2650});

        
            var i_frame_1c44e2ba0cd9497b99f758fe0896ceee = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBYml0YXppb25pIGUgbWFnYXp6aW5vIGRlbm9taW5hdGkgQ2FuYWxldHRvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI3MzI4NC4wNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_be9bfe9467094965a67315e519b1e8fe.setContent(i_frame_1c44e2ba0cd9497b99f758fe0896ceee);
        

        marker_57413ae02ed143ad97e0ad6855824a7c.bindPopup(popup_be9bfe9467094965a67315e519b1e8fe)
        ;

        
    
    
            var marker_f74431953e6d49f3bd09e5bbcc1d93c6 = L.marker(
                [44.906418, 11.371762],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_7eb6aeba5bba4bc096031d3770e65edc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f74431953e6d49f3bd09e5bbcc1d93c6.setIcon(icon_7eb6aeba5bba4bc096031d3770e65edc);
        
    
        var popup_3bec202375cb4ed1b743d18171165914 = L.popup({"maxWidth": 2650});

        
            var i_frame_83da849dc7aa4e00b5bf5ef987d1a3d2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBGb2xsbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAyNDk4My42MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjQ5ODMuNjMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3bec202375cb4ed1b743d18171165914.setContent(i_frame_83da849dc7aa4e00b5bf5ef987d1a3d2);
        

        marker_f74431953e6d49f3bd09e5bbcc1d93c6.bindPopup(popup_3bec202375cb4ed1b743d18171165914)
        ;

        
    
    
            var marker_fc48d88c9a2d45cfbb939752d2057a3d = L.marker(
                [44.892302, 10.99566],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b06e0f864518451fbbf02e3d507dce17 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_fc48d88c9a2d45cfbb939752d2057a3d.setIcon(icon_b06e0f864518451fbbf02e3d507dce17);
        
    
        var popup_80e228aa64774618a88fbdea0d18cc18 = L.popup({"maxWidth": 2650});

        
            var i_frame_11a4f5e198244787a989730b9fe68d82 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBQb3NzaWRvbmlvIFZlc2Nvdm8gY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBQT1NTSURPTklPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQ4NDMyLjE3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyODc1LjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_80e228aa64774618a88fbdea0d18cc18.setContent(i_frame_11a4f5e198244787a989730b9fe68d82);
        

        marker_fc48d88c9a2d45cfbb939752d2057a3d.bindPopup(popup_80e228aa64774618a88fbdea0d18cc18)
        ;

        
    
    
            var marker_9b041006d1eb4a84b5933d2ebf8e9b32 = L.marker(
                [44.892194, 10.995439],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_146d9d67f56f444a815f3bc54e5d0716 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9b041006d1eb4a84b5933d2ebf8e9b32.setIcon(icon_146d9d67f56f444a815f3bc54e5d0716);
        
    
        var popup_f80639084ec343ceb125db666864d764 = L.popup({"maxWidth": 2650});

        
            var i_frame_7f01b5dbd93f45e2b6d2f0f7c0f4aabb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBQb3NzaWRvbmlvIFZlc2Nvdm8gY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBQT1NTSURPTklPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTEyNTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f80639084ec343ceb125db666864d764.setContent(i_frame_7f01b5dbd93f45e2b6d2f0f7c0f4aabb);
        

        marker_9b041006d1eb4a84b5933d2ebf8e9b32.bindPopup(popup_f80639084ec343ceb125db666864d764)
        ;

        
    
    
            var marker_67d0e3c8053c49a997f57495946da73c = L.marker(
                [44.923466999999995, 10.944021000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_74c399f1b2ba4aba8a1223cf3507e568 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_67d0e3c8053c49a997f57495946da73c.setIcon(icon_74c399f1b2ba4aba8a1223cf3507e568);
        
    
        var popup_bdd497b2a5d54d1593904c2e3d0aab0b = L.popup({"maxWidth": 2650});

        
            var i_frame_1d3233288d224d0ea8d9e5a3c6999b00 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTUy4gVHJpbml0w6AgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQ4NDc2LjYzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMDEyLjI2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bdd497b2a5d54d1593904c2e3d0aab0b.setContent(i_frame_1d3233288d224d0ea8d9e5a3c6999b00);
        

        marker_67d0e3c8053c49a997f57495946da73c.bindPopup(popup_bdd497b2a5d54d1593904c2e3d0aab0b)
        ;

        
    
    
            var marker_0fd77be5db394a93b0241dae19fa0bff = L.marker(
                [44.894233, 10.901301],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_14e1865ecc76457f9ded887bda2c031b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0fd77be5db394a93b0241dae19fa0bff.setIcon(icon_14e1865ecc76457f9ded887bda2c031b);
        
    
        var popup_ca8b14b83437492188bce882fa9f29eb = L.popup({"maxWidth": 2650});

        
            var i_frame_26619424ec454bd5863f3053b68b17c4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2FldGFubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMzQ3MjEuMDEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ca8b14b83437492188bce882fa9f29eb.setContent(i_frame_26619424ec454bd5863f3053b68b17c4);
        

        marker_0fd77be5db394a93b0241dae19fa0bff.bindPopup(popup_ca8b14b83437492188bce882fa9f29eb)
        ;

        
    
    
            var marker_3230013668344cc28d314df546593c85 = L.marker(
                [44.841147, 10.955977],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_781ad6cbbfb14a45ad863fbb667db77b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3230013668344cc28d314df546593c85.setIcon(icon_781ad6cbbfb14a45ad863fbb667db77b);
        
    
        var popup_11c8c7a929434324a3b8c733cb374b07 = L.popup({"maxWidth": 2650});

        
            var i_frame_46c3dbeb26ad4319a6134b2c263c91e2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYXJyb2NjaGlhIGRpIFNhbnRhIENhdGVyaW5hIGRpIEFsZXNzYW5kcmlhIGNvbiBjYW1wYW5pbGUgLyBDaGllc2EgZGkgU2FudGEgQ2F0ZXJpbmEgVk0gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTUwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_11c8c7a929434324a3b8c733cb374b07.setContent(i_frame_46c3dbeb26ad4319a6134b2c263c91e2);
        

        marker_3230013668344cc28d314df546593c85.bindPopup(popup_11c8c7a929434324a3b8c733cb374b07)
        ;

        
    
    
            var marker_e24f32eb2f6440ef985e983a616686e0 = L.marker(
                [44.889926, 10.903286999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_aaeafaf03986449789d1a2fe59c0ef6f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e24f32eb2f6440ef985e983a616686e0.setIcon(icon_aaeafaf03986449789d1a2fe59c0ef6f);
        
    
        var popup_159af5db368545ea8c2eb635e8fe9cea = L.popup({"maxWidth": 2650});

        
            var i_frame_965a52a73d5442e99689d317d848e925 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuTWljaGVsZSBBcmNhbmdlbG8gY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTU2MjUuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_159af5db368545ea8c2eb635e8fe9cea.setContent(i_frame_965a52a73d5442e99689d317d848e925);
        

        marker_e24f32eb2f6440ef985e983a616686e0.bindPopup(popup_159af5db368545ea8c2eb635e8fe9cea)
        ;

        
    
    
            var marker_c79065ee429b4277b78275ab2b1acb76 = L.marker(
                [44.890054, 10.903578999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e8d010a08ff3416fa6e240c6ea72cd25 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c79065ee429b4277b78275ab2b1acb76.setIcon(icon_e8d010a08ff3416fa6e240c6ea72cd25);
        
    
        var popup_cad651cb95324a29adaf36a783e1b671 = L.popup({"maxWidth": 2650});

        
            var i_frame_7b5bfb57dbef4f90b252d11eab09cfd5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuTWljaGVsZSBBcmNhbmdlbG8gY2hpZXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE4NzUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cad651cb95324a29adaf36a783e1b671.setContent(i_frame_7b5bfb57dbef4f90b252d11eab09cfd5);
        

        marker_c79065ee429b4277b78275ab2b1acb76.bindPopup(popup_cad651cb95324a29adaf36a783e1b671)
        ;

        
    
    
            var marker_2eb63895dc254e208cb773de9ebf50af = L.marker(
                [44.958853999999995, 11.087971000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_a601fdc26d764233b970c2f38c8fd35d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_2eb63895dc254e208cb773de9ebf50af.setIcon(icon_a601fdc26d764233b970c2f38c8fd35d);
        
    
        var popup_0eec1c6887514c2b8d52b2a5714bf234 = L.popup({"maxWidth": 2650});

        
            var i_frame_121bf5f7cc4f4cba91f7c63a331fc0ab = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlbGxhIFZpc2l0YXppb25lIGRlbGxhIEJlYXRhIFZlcmdpbmUgTWFyaWEgLyBDaGllc2EgZGVsbGEgUHVyaWZpY2F6aW9uZSBkZWxsYSBTUy4gVmVyZ2luZSBNYXJpYSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTg3MjkuNDcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0eec1c6887514c2b8d52b2a5714bf234.setContent(i_frame_121bf5f7cc4f4cba91f7c63a331fc0ab);
        

        marker_2eb63895dc254e208cb773de9ebf50af.bindPopup(popup_0eec1c6887514c2b8d52b2a5714bf234)
        ;

        
    
    
            var marker_495ccbdaebd94af285e8f57ba5e71780 = L.marker(
                [44.889439, 11.066214],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c695511af4914595af89223b6b26a1ef = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_495ccbdaebd94af285e8f57ba5e71780.setIcon(icon_c695511af4914595af89223b6b26a1ef);
        
    
        var popup_1399192ac8774b4d8dee0cb4155e4804 = L.popup({"maxWidth": 2650});

        
            var i_frame_ac27b2587b8f411b8a195f8aa4d977c2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBNYWRvbm5hIGRlbGxhIFBvcnRhIChMYSBNYWRvbm5pbmEpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyMjUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1399192ac8774b4d8dee0cb4155e4804.setContent(i_frame_ac27b2587b8f411b8a195f8aa4d977c2);
        

        marker_495ccbdaebd94af285e8f57ba5e71780.bindPopup(popup_1399192ac8774b4d8dee0cb4155e4804)
        ;

        
    
    
            var marker_fd06ab56735943748f320931b33f8af5 = L.marker(
                [44.936640000000004, 11.235173],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_af7e21c31c1145f1bbf1bf11d2bcdc76 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_fd06ab56735943748f320931b33f8af5.setIcon(icon_af7e21c31c1145f1bbf1bf11d2bcdc76);
        
    
        var popup_974f50295a64445dbc59336c6c99a712 = L.popup({"maxWidth": 2650});

        
            var i_frame_5c614cf23d504dc09807d5e99374e820 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gVmVzY292byBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzEwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_974f50295a64445dbc59336c6c99a712.setContent(i_frame_5c614cf23d504dc09807d5e99374e820);
        

        marker_fd06ab56735943748f320931b33f8af5.bindPopup(popup_974f50295a64445dbc59336c6c99a712)
        ;

        
    
    
            var marker_1165847036c249889210cec77f6eb9c8 = L.marker(
                [44.862345, 11.026355],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_8030108c42c04047adcf016b620e8438 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_1165847036c249889210cec77f6eb9c8.setIcon(icon_8030108c42c04047adcf016b620e8438);
        
    
        var popup_5308a3de18bf427d9d21b645b2d36c77 = L.popup({"maxWidth": 2650});

        
            var i_frame_48259d5c4d9a4910b353bdbba2d360ba = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTYW4gR2lvdmFubmkgQmF0dGlzdGEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5308a3de18bf427d9d21b645b2d36c77.setContent(i_frame_48259d5c4d9a4910b353bdbba2d360ba);
        

        marker_1165847036c249889210cec77f6eb9c8.bindPopup(popup_5308a3de18bf427d9d21b645b2d36c77)
        ;

        
    
    
            var marker_66d27cb322474a7cbfe86a0bacf2d3fa = L.marker(
                [44.884771, 11.066828999999998],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_89e3101a6f0e4fd6bd47011309597db5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_66d27cb322474a7cbfe86a0bacf2d3fa.setIcon(icon_89e3101a6f0e4fd6bd47011309597db5);
        
    
        var popup_8d5666b2846644df981323929531a176 = L.popup({"maxWidth": 2650});

        
            var i_frame_d782ae011c434b20a83840547c3d9d60 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW5lbWEgVGVhdHJvIEFzdG9yaWEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8d5666b2846644df981323929531a176.setContent(i_frame_d782ae011c434b20a83840547c3d9d60);
        

        marker_66d27cb322474a7cbfe86a0bacf2d3fa.bindPopup(popup_8d5666b2846644df981323929531a176)
        ;

        
    
    
            var marker_fdc11c6a24de4e34af5e53e09b43226f = L.marker(
                [44.860699, 11.058484],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_3f47445b7d22412abe171cd91a04f250 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_fdc11c6a24de4e34af5e53e09b43226f.setIcon(icon_3f47445b7d22412abe171cd91a04f250);
        
    
        var popup_f37dc7d6a36d4857bac26bb0a89709a2 = L.popup({"maxWidth": 2650});

        
            var i_frame_0c067ccbb80340f790efa2fcfe9319a4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlaSBTUy4gRmlsaXBwbyBlIEdpYWNvbW8gY29uIGNhbXBhbmlsZSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgOTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f37dc7d6a36d4857bac26bb0a89709a2.setContent(i_frame_0c067ccbb80340f790efa2fcfe9319a4);
        

        marker_fdc11c6a24de4e34af5e53e09b43226f.bindPopup(popup_f37dc7d6a36d4857bac26bb0a89709a2)
        ;

        
    
    
            var marker_5b0699f31b6d46f59ee2c967f000b063 = L.marker(
                [44.923107, 11.095925999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2602a4ca97224f9d8a5b0a7a8a5066a4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_5b0699f31b6d46f59ee2c967f000b063.setIcon(icon_2602a4ca97224f9d8a5b0a7a8a5066a4);
        
    
        var popup_d29ea69a90454d4890a3fb545567e08a = L.popup({"maxWidth": 2650});

        
            var i_frame_69930cb005a7472fb9ea3fca5be65c65 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGFkIE5pdmVzIC8gQ2hpZXNhIE1hZG9ubmEgZGVsbGEgTmV2ZSBkaSBRdWFyYW50b2xpIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMjAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d29ea69a90454d4890a3fb545567e08a.setContent(i_frame_69930cb005a7472fb9ea3fca5be65c65);
        

        marker_5b0699f31b6d46f59ee2c967f000b063.bindPopup(popup_d29ea69a90454d4890a3fb545567e08a)
        ;

        
    
    
            var marker_a2fba0ffe67c43a2af6e7a6c37263d12 = L.marker(
                [44.874864, 11.12937],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_563efc93ba024a20bb2ec97f173ecb80 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a2fba0ffe67c43a2af6e7a6c37263d12.setIcon(icon_563efc93ba024a20bb2ec97f173ecb80);
        
    
        var popup_11f58154f08e4201ba070aebde8d3345 = L.popup({"maxWidth": 2650});

        
            var i_frame_db2b119ed8bd4b778bdb6dc859b8e3ed = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExlb25hcmRvIExpbW9zaW5vIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0Njg3NS4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_11f58154f08e4201ba070aebde8d3345.setContent(i_frame_db2b119ed8bd4b778bdb6dc859b8e3ed);
        

        marker_a2fba0ffe67c43a2af6e7a6c37263d12.bindPopup(popup_11f58154f08e4201ba070aebde8d3345)
        ;

        
    
    
            var marker_b6297362c61044ada35903803b6b2ef0 = L.marker(
                [44.874891999999996, 11.129161999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_9783755a5de34228be3d38cd989e2f61 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_b6297362c61044ada35903803b6b2ef0.setIcon(icon_9783755a5de34228be3d38cd989e2f61);
        
    
        var popup_4d7e254669574d4d899eae44ad927b9c = L.popup({"maxWidth": 2650});

        
            var i_frame_ba59f2d3466c47648b4b3c2b2880a297 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExlb25hcmRvIExpbW9zaW5vIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4d7e254669574d4d899eae44ad927b9c.setContent(i_frame_ba59f2d3466c47648b4b3c2b2880a297);
        

        marker_b6297362c61044ada35903803b6b2ef0.bindPopup(popup_4d7e254669574d4d899eae44ad927b9c)
        ;

        
    
    
            var marker_0f183268eaf64b3899e7e0ce71c3167b = L.marker(
                [44.92416, 11.182017],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b1f95732d8dd4af49ef3ed361f6c11ed = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0f183268eaf64b3899e7e0ce71c3167b.setIcon(icon_b1f95732d8dd4af49ef3ed361f6c11ed);
        
    
        var popup_2bc65bd0e3b747f4842967d5f67ccdd8 = L.popup({"maxWidth": 2650});

        
            var i_frame_224cba5320f940609a9b5e422ebd499f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jY2hpYWxlIGRpIFMuIEJpYWdpbyBWZXNjb3ZvIGUgTWFydGlyZSAtIGNoaWVzYSBjb24gY2FtcGFuaWxlIGUgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEwNTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2bc65bd0e3b747f4842967d5f67ccdd8.setContent(i_frame_224cba5320f940609a9b5e422ebd499f);
        

        marker_0f183268eaf64b3899e7e0ce71c3167b.bindPopup(popup_2bc65bd0e3b747f4842967d5f67ccdd8)
        ;

        
    
    
            var marker_9b11be86c5b24dd6873d15ec3ac4bd99 = L.marker(
                [44.906025, 10.970533],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_de80da5998674944b2eb4cb5a4fee179 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9b11be86c5b24dd6873d15ec3ac4bd99.setIcon(icon_de80da5998674944b2eb4cb5a4fee179);
        
    
        var popup_7ae950dfdfd6414bbdd29962c29c6b41 = L.popup({"maxWidth": 2650});

        
            var i_frame_ba8de697d1084307ac18da595b9cb7d5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBCZWF0YSBWZXJnaW5lIGRlbGxvIFNwaW5vIC8gTWFkb25uYSBkZWxsbyBTcGlubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjQ3NTcuMjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_7ae950dfdfd6414bbdd29962c29c6b41.setContent(i_frame_ba8de697d1084307ac18da595b9cb7d5);
        

        marker_9b11be86c5b24dd6873d15ec3ac4bd99.bindPopup(popup_7ae950dfdfd6414bbdd29962c29c6b41)
        ;

        
    
    
            var marker_0a4bd985d0c04d4c849f159ee2e24b1a = L.marker(
                [44.924465000000005, 10.97367],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_bd2efe1415d64a358bb39916bd5bdd33 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0a4bd985d0c04d4c849f159ee2e24b1a.setIcon(icon_bd2efe1415d64a358bb39916bd5bdd33);
        
    
        var popup_2605b528d89f4091b4e4efdfb45500a9 = L.popup({"maxWidth": 2650});

        
            var i_frame_a64f94e4e44944c09a9a59a0fed5fe4d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFZGljb2xldHRhIGRlbGxlIEFiYnJpYW5lIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0MjU2NC43IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyODgyLjk5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2605b528d89f4091b4e4efdfb45500a9.setContent(i_frame_a64f94e4e44944c09a9a59a0fed5fe4d);
        

        marker_0a4bd985d0c04d4c849f159ee2e24b1a.bindPopup(popup_2605b528d89f4091b4e4efdfb45500a9)
        ;

        
    
    
            var marker_556af2eb5494432881c3dd23339c5c76 = L.marker(
                [44.923048, 11.036610000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fb60b287bb7c45d7a2e29d9ab13cb41f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_556af2eb5494432881c3dd23339c5c76.setIcon(icon_fb60b287bb7c45d7a2e29d9ab13cb41f);
        
    
        var popup_e9e23573bca944d480e49e842747983a = L.popup({"maxWidth": 2650});

        
            var i_frame_96f14574fcd34dd49ccf75470ecd810c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFBpZXRybyBBcG9zdG9sbyBjb24gb3JhdG9yaW8gZSBjYW1wYW5pbGUgY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjEwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e9e23573bca944d480e49e842747983a.setContent(i_frame_96f14574fcd34dd49ccf75470ecd810c);
        

        marker_556af2eb5494432881c3dd23339c5c76.bindPopup(popup_e9e23573bca944d480e49e842747983a)
        ;

        
    
    
            var marker_84fab520b972420c80fdb59f83aa341e = L.marker(
                [44.913271, 10.982124],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fe23bf83e3814b4e90eadea3c6653585 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_84fab520b972420c80fdb59f83aa341e.setIcon(icon_fe23bf83e3814b4e90eadea3c6653585);
        
    
        var popup_3cd475b8f57543e791feb95de64c68f7 = L.popup({"maxWidth": 2650});

        
            var i_frame_c87b002961d646b8ad14e524c31473a1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gUGFvbG8gQXBvc3RvbG8gZSBjYW1wYW5pbGUgLyBEdW9tbyAtIFBhcnJvY2NoaWEgZGVsbGEgQ29udmVyc2lvbmUgZGkgUy4gUGFvbG8gQXBvc3RvbG8gY2hpZXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDMwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3cd475b8f57543e791feb95de64c68f7.setContent(i_frame_c87b002961d646b8ad14e524c31473a1);
        

        marker_84fab520b972420c80fdb59f83aa341e.bindPopup(popup_3cd475b8f57543e791feb95de64c68f7)
        ;

        
    
    
            var marker_02d493b229bd4b45b59072f3d984acd9 = L.marker(
                [44.925151, 10.979494],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e3ba68610a45456caa30911625f1ee8f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_02d493b229bd4b45b59072f3d984acd9.setIcon(icon_e3ba68610a45456caa30911625f1ee8f);
        
    
        var popup_bd0afcfbe9af453889bc88bfc92a07e4 = L.popup({"maxWidth": 2650});

        
            var i_frame_30390a9066e74662bd48c500c48b40a1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIENhdGVyaW5hIC8gQ2F0ZXJpbmEgVmVyZ2luZSBlIE1hcnRpcmUgLyBDYXRlcmluYSBkJ0FsZXNzYW5kcmlhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDkyNTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bd0afcfbe9af453889bc88bfc92a07e4.setContent(i_frame_30390a9066e74662bd48c500c48b40a1);
        

        marker_02d493b229bd4b45b59072f3d984acd9.bindPopup(popup_bd0afcfbe9af453889bc88bfc92a07e4)
        ;

        
    
    
            var marker_68d78f4dd5654e8f852fd60d5ad13990 = L.marker(
                [44.712455, 11.305703],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b6b325a0de404bd4ab6ae03a30ae8dd4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_68d78f4dd5654e8f852fd60d5ad13990.setIcon(icon_b6b325a0de404bd4ab6ae03a30ae8dd4);
        
    
        var popup_f83e1629206a45388baa9713afaaa498 = L.popup({"maxWidth": 2650});

        
            var i_frame_c17b2f6727f24916b52a39fc02d9822e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTLiBTZWJhc3RpYW5vIGUgUy4gUm9jY28gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNzAzMTIuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f83e1629206a45388baa9713afaaa498.setContent(i_frame_c17b2f6727f24916b52a39fc02d9822e);
        

        marker_68d78f4dd5654e8f852fd60d5ad13990.bindPopup(popup_f83e1629206a45388baa9713afaaa498)
        ;

        
    
    
            var marker_3f2163feb39a4770b1fcdf83e3ef285f = L.marker(
                [44.713118, 11.306996],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_466eb40043af42478cbd19e233106b12 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3f2163feb39a4770b1fcdf83e3ef285f.setIcon(icon_466eb40043af42478cbd19e233106b12);
        
    
        var popup_12473eaf38f34bc69147800ce1557171 = L.popup({"maxWidth": 2650});

        
            var i_frame_8fa3f3560dab417da537ab61b307b3db = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW5vbmljYSBkaSBTYW50YSBNYXJpYSBNYWdnaW9yZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUElFVkUgREkgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_12473eaf38f34bc69147800ce1557171.setContent(i_frame_8fa3f3560dab417da537ab61b307b3db);
        

        marker_3f2163feb39a4770b1fcdf83e3ef285f.bindPopup(popup_12473eaf38f34bc69147800ce1557171)
        ;

        
    
    
            var marker_f19666c5452e4504921347a6e89295aa = L.marker(
                [44.76736, 11.255153],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5c245471610c4457bd12b4a8e1e5ab69 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f19666c5452e4504921347a6e89295aa.setIcon(icon_5c245471610c4457bd12b4a8e1e5ab69);
        
    
        var popup_a3ed1956bc124b17b9e8640192cd214f = L.popup({"maxWidth": 2650});

        
            var i_frame_440043b7ca7a4bdab3f7705dfbc260bb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBHaWFjb21vIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjc1MDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a3ed1956bc124b17b9e8640192cd214f.setContent(i_frame_440043b7ca7a4bdab3f7705dfbc260bb);
        

        marker_f19666c5452e4504921347a6e89295aa.bindPopup(popup_a3ed1956bc124b17b9e8640192cd214f)
        ;

        
    
    
            var marker_38a3b4a0f17f484bbe383e88644c1654 = L.marker(
                [44.745956, 11.157319000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_1848c12728154fe981d98b551f279945 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_38a3b4a0f17f484bbe383e88644c1654.setIcon(icon_1848c12728154fe981d98b551f279945);
        
    
        var popup_79ef3ad3e5b14c39a8cb7ca46eb2f6eb = L.popup({"maxWidth": 2650});

        
            var i_frame_4f37ae2123fe4d858e497f5a8e180bbc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBOYXRpdml0w6AgZGVsbGEgQi4gVmVyZ2luZSBkZXR0byAnTGEgUm90b25kYScgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_79ef3ad3e5b14c39a8cb7ca46eb2f6eb.setContent(i_frame_4f37ae2123fe4d858e497f5a8e180bbc);
        

        marker_38a3b4a0f17f484bbe383e88644c1654.bindPopup(popup_79ef3ad3e5b14c39a8cb7ca46eb2f6eb)
        ;

        
    
    
            var marker_3517774625484947a2423a2016ac4120 = L.marker(
                [44.887677000000004, 11.064516000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b7d8ae2152f74479a7f070baa6d213cd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3517774625484947a2423a2016ac4120.setIcon(icon_b7d8ae2152f74479a7f070baa6d213cd);
        
    
        var popup_fcfdb45ebae8432ba5ade322b9d6d30f = L.popup({"maxWidth": 2650});

        
            var i_frame_ffdd61eb5cef4c07a50a24af3953cc14 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNdXJvIGRpIENpbnRhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fcfdb45ebae8432ba5ade322b9d6d30f.setContent(i_frame_ffdd61eb5cef4c07a50a24af3953cc14);
        

        marker_3517774625484947a2423a2016ac4120.bindPopup(popup_fcfdb45ebae8432ba5ade322b9d6d30f)
        ;

        
    
    
            var marker_6422dc31ead34995a5d85f8a8d5a91a2 = L.marker(
                [44.890613, 11.07719],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_cd448c180bd74d29a3b1c4eb95994575 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6422dc31ead34995a5d85f8a8d5a91a2.setIcon(icon_cd448c180bd74d29a3b1c4eb95994575);
        
    
        var popup_5b013582e2d0447c9a9cb32b443a9837 = L.popup({"maxWidth": 2650});

        
            var i_frame_4b073d4239b9440baaf9069e61fa25f0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBjYXNlcm1hIFZWLkZGLiA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQ2MTQxNy41NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5b013582e2d0447c9a9cb32b443a9837.setContent(i_frame_4b073d4239b9440baaf9069e61fa25f0);
        

        marker_6422dc31ead34995a5d85f8a8d5a91a2.bindPopup(popup_5b013582e2d0447c9a9cb32b443a9837)
        ;

        
    
    
            var marker_6654d5dd90f7435fbb55b23551069a40 = L.marker(
                [44.887617999999996, 11.0679],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_f6c1995613824039ac67c3f30b18a973 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6654d5dd90f7435fbb55b23551069a40.setIcon(icon_f6c1995613824039ac67c3f30b18a973);
        
    
        var popup_c2c96c0385054fdbb03b4ee248950593 = L.popup({"maxWidth": 2650});

        
            var i_frame_80c49bd060984d268a466f4d1f1abc1a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgc2FuIEZyYW5jZXNjbyAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgOTk4NjE2LjUxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c2c96c0385054fdbb03b4ee248950593.setContent(i_frame_80c49bd060984d268a466f4d1f1abc1a);
        

        marker_6654d5dd90f7435fbb55b23551069a40.bindPopup(popup_c2c96c0385054fdbb03b4ee248950593)
        ;

        
    
    
            var marker_5d0c909735814841a8dff34000c2764b = L.marker(
                [44.834216, 11.023396],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b90a36aabc6e42be977cf5cd04263532 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_5d0c909735814841a8dff34000c2764b.setIcon(icon_b90a36aabc6e42be977cf5cd04263532);
        
    
        var popup_c986012ca0ff49f381b8cf03d8e9466b = L.popup({"maxWidth": 2650});

        
            var i_frame_c337c966d1cc4cb1af13b1b44bdca4bc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c986012ca0ff49f381b8cf03d8e9466b.setContent(i_frame_c337c966d1cc4cb1af13b1b44bdca4bc);
        

        marker_5d0c909735814841a8dff34000c2764b.bindPopup(popup_c986012ca0ff49f381b8cf03d8e9466b)
        ;

        
    
    
            var marker_8b34a6f6437f4031855bbd6f67e18846 = L.marker(
                [44.80238, 11.051994],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_d17228f2c4514a42b3eaf8597595f0e4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_8b34a6f6437f4031855bbd6f67e18846.setIcon(icon_d17228f2c4514a42b3eaf8597595f0e4);
        
    
        var popup_24114c15149c4865b18c5f67116a7288 = L.popup({"maxWidth": 2650});

        
            var i_frame_a266e416dc614ce480e60c076967665e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb3J0ZSBCb2NjaGkgZ2nDoCBUb3NhdHRpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_24114c15149c4865b18c5f67116a7288.setContent(i_frame_a266e416dc614ce480e60c076967665e);
        

        marker_8b34a6f6437f4031855bbd6f67e18846.bindPopup(popup_24114c15149c4865b18c5f67116a7288)
        ;

        
    
    
            var marker_148859a03f1c4ecb9e53ac7de8e7a00a = L.marker(
                [44.83517, 11.292558999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_4177363b1218460abf84ef98384fcd2b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_148859a03f1c4ecb9e53ac7de8e7a00a.setIcon(icon_4177363b1218460abf84ef98384fcd2b);
        
    
        var popup_87a383ab1ef04af683d768b53b293d54 = L.popup({"maxWidth": 2650});

        
            var i_frame_c0eca6b9d3024dd5a303a32b9b49db2a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA5NDQwNC42IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_87a383ab1ef04af683d768b53b293d54.setContent(i_frame_c0eca6b9d3024dd5a303a32b9b49db2a);
        

        marker_148859a03f1c4ecb9e53ac7de8e7a00a.bindPopup(popup_87a383ab1ef04af683d768b53b293d54)
        ;

        
    
    
            var marker_c6ad0102f58a43bfb592682bd56c969e = L.marker(
                [44.835444, 11.292508999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_732af0ddb74444c0a97d91a2ff2e2a93 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c6ad0102f58a43bfb592682bd56c969e.setIcon(icon_732af0ddb74444c0a97d91a2ff2e2a93);
        
    
        var popup_d1c7285468f040479572c70a52199f8b = L.popup({"maxWidth": 2650});

        
            var i_frame_95c06bba17bc4477914e7357b1015cfc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdm8gLSBwYWxlc3RyYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d1c7285468f040479572c70a52199f8b.setContent(i_frame_95c06bba17bc4477914e7357b1015cfc);
        

        marker_c6ad0102f58a43bfb592682bd56c969e.bindPopup(popup_d1c7285468f040479572c70a52199f8b)
        ;

        
    
    
            var marker_69a65abc7223412093022b3ae97e9bfa = L.marker(
                [44.727348, 11.290214],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5f43b4a1df8142cda54074645b14643c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_69a65abc7223412093022b3ae97e9bfa.setIcon(icon_5f43b4a1df8142cda54074645b14643c);
        
    
        var popup_fe2d2cb6b28a44e9a6752bddbdb8f8de = L.popup({"maxWidth": 2650});

        
            var i_frame_630da6802a2c4f319acca3c5a9fe0514 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBVZmZpY2lvIGRlbCBSZWdpc3RybyAoRXggQ29udmVudG8gZGVpIEZpbGlwcGluaSkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTM4NTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fe2d2cb6b28a44e9a6752bddbdb8f8de.setContent(i_frame_630da6802a2c4f319acca3c5a9fe0514);
        

        marker_69a65abc7223412093022b3ae97e9bfa.bindPopup(popup_fe2d2cb6b28a44e9a6752bddbdb8f8de)
        ;

        
    
    
            var marker_0cda7cfe0aac48ac977ac5eec5f87155 = L.marker(
                [44.838514, 11.13818],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ce94e12200434e5eacdf759fcc2d0716 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0cda7cfe0aac48ac977ac5eec5f87155.setIcon(icon_ce94e12200434e5eacdf759fcc2d0716);
        
    
        var popup_f716fe1fdf8548c591a07d6246ae0c82 = L.popup({"maxWidth": 2650});

        
            var i_frame_b3285df39257457f831fece29e2e906c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdm8gQ29tdW5hbGUgLSBJSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE0MzQwMDMuMDQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDcxNzAwLjE1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f716fe1fdf8548c591a07d6246ae0c82.setContent(i_frame_b3285df39257457f831fece29e2e906c);
        

        marker_0cda7cfe0aac48ac977ac5eec5f87155.bindPopup(popup_f716fe1fdf8548c591a07d6246ae0c82)
        ;

        
    
    
            var marker_251c46336d6f43ca8ea4effbb32cd0c1 = L.marker(
                [44.729082, 11.299101],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_33889cde28224585a4c909436ecc42c6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_251c46336d6f43ca8ea4effbb32cd0c1.setIcon(icon_33889cde28224585a4c909436ecc42c6);
        
    
        var popup_77876ba949964902ba5eb6aa0bc3a30b = L.popup({"maxWidth": 2650});

        
            var i_frame_2da45953f3a5492e8ff95ef54f9fa12d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gcGVyIGwnaW5mYW56aWEgJ0EuIFBhY2lub3R0aScgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI2MzM5Ni40MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_77876ba949964902ba5eb6aa0bc3a30b.setContent(i_frame_2da45953f3a5492e8ff95ef54f9fa12d);
        

        marker_251c46336d6f43ca8ea4effbb32cd0c1.bindPopup(popup_77876ba949964902ba5eb6aa0bc3a30b)
        ;

        
    
    
            var marker_fdd81f4ebcde43f0aeaecb720645fcd3 = L.marker(
                [44.769664, 11.490813000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_86799782510c498fa21be6d32df96214 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_fdd81f4ebcde43f0aeaecb720645fcd3.setIcon(icon_86799782510c498fa21be6d32df96214);
        
    
        var popup_c3fefeba2c294b3dac9677d6ec7bbea4 = L.popup({"maxWidth": 2650});

        
            var i_frame_d74c478064d748f3864867a3eb37b0a1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gQ29tdW5hbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBPR0dJTyBSRU5BVElDTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA4MDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c3fefeba2c294b3dac9677d6ec7bbea4.setContent(i_frame_d74c478064d748f3864867a3eb37b0a1);
        

        marker_fdd81f4ebcde43f0aeaecb720645fcd3.bindPopup(popup_c3fefeba2c294b3dac9677d6ec7bbea4)
        ;

        
    
    
            var marker_67edf5898e8547edb002e7f26a1c2674 = L.marker(
                [44.887375, 11.414402],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_762412f825a34d6b8348e1b2214468f3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_67edf5898e8547edb002e7f26a1c2674.setIcon(icon_762412f825a34d6b8348e1b2214468f3);
        
    
        var popup_bd4fe530a6c340a492ce633466c723af = L.popup({"maxWidth": 2650});

        
            var i_frame_653cee8ba3b64a6290086368bc4d3c49 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgUGFyaXRhcmlhIGRlbGwnaW5mYW56aWEgJ01hcmlhIEltbWFjb2xhdGEnIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQzMzA1NC41NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_bd4fe530a6c340a492ce633466c723af.setContent(i_frame_653cee8ba3b64a6290086368bc4d3c49);
        

        marker_67edf5898e8547edb002e7f26a1c2674.bindPopup(popup_bd4fe530a6c340a492ce633466c723af)
        ;

        
    
    
            var marker_4ec3ba8e2faf47dbb56c0f1ca96a39c9 = L.marker(
                [44.803584, 11.053442],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_b664c583bbf544ca9b5fd6cfca97fe8f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4ec3ba8e2faf47dbb56c0f1ca96a39c9.setIcon(icon_b664c583bbf544ca9b5fd6cfca97fe8f);
        
    
        var popup_ddaf8eedec6c4dbaa41aadd8a8565167 = L.popup({"maxWidth": 2650});

        
            var i_frame_9cac75f9c013415f8f54ec57ada29578 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNlbGxpIEZlcnJvdmlhcmkgZGkgU2FuIFByb3NwZXJvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyMDUwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ddaf8eedec6c4dbaa41aadd8a8565167.setContent(i_frame_9cac75f9c013415f8f54ec57ada29578);
        

        marker_4ec3ba8e2faf47dbb56c0f1ca96a39c9.bindPopup(popup_ddaf8eedec6c4dbaa41aadd8a8565167)
        ;

        
    
    
            var marker_794e6df32c454c36a469063f52433a65 = L.marker(
                [44.916859, 10.859534],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_7f19821aefc54090bd72efb5e95109af = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_794e6df32c454c36a469063f52433a65.setIcon(icon_7f19821aefc54090bd72efb5e95109af);
        
    
        var popup_b47b2b314db942c892c4a469734658c7 = L.popup({"maxWidth": 2650});

        
            var i_frame_6eab5325593c4f7b8e212d0cb0fc615b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIEFzc3VudGEgZSBwZXJ0aW5lbnplIC0gSUkgIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzNzcxMjQuNDUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE5MDY3Ljc5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b47b2b314db942c892c4a469734658c7.setContent(i_frame_6eab5325593c4f7b8e212d0cb0fc615b);
        

        marker_794e6df32c454c36a469063f52433a65.bindPopup(popup_b47b2b314db942c892c4a469734658c7)
        ;

        
    
    
            var marker_753a8f46bed843fbbf72ddc29b69230c = L.marker(
                [44.840861, 10.95412],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6ff96e194080427fa69dc357be28ec24 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_753a8f46bed843fbbf72ddc29b69230c.setIcon(icon_6ff96e194080427fa69dc357be28ec24);
        
    
        var popup_71c608cdf12846b290ca0daf13d34ceb = L.popup({"maxWidth": 2650});

        
            var i_frame_6fc39a3359c049b19d3ffdacb3805392 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBEZWxlZ2F6aW9uZSBNdW5pY2lwYWxlIGluIFJvdmVyZXRvIHMvUyAgLSBmYWJicmljYXRpIHBlcnRpbmVuemlhbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTc0ODYuMzIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_71c608cdf12846b290ca0daf13d34ceb.setContent(i_frame_6fc39a3359c049b19d3ffdacb3805392);
        

        marker_753a8f46bed843fbbf72ddc29b69230c.bindPopup(popup_71c608cdf12846b290ca0daf13d34ceb)
        ;

        
    
    
            var marker_3c9cf96ac16647199402e24bd982ac79 = L.marker(
                [44.950520000000004, 11.422724],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ccb856fc4a454764b555ff2ce68acf7d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3c9cf96ac16647199402e24bd982ac79.setIcon(icon_ccb856fc4a454764b555ff2ce68acf7d);
        
    
        var popup_e1103168dad74730ac7d774537297294 = L.popup({"maxWidth": 2650});

        
            var i_frame_8e958f73f5cf4c509c3abb481fb88590 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBSb2NjYSBQb3NzZW50ZSAtIHN0YWxjaW8gSUkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e1103168dad74730ac7d774537297294.setContent(i_frame_8e958f73f5cf4c509c3abb481fb88590);
        

        marker_3c9cf96ac16647199402e24bd982ac79.bindPopup(popup_e1103168dad74730ac7d774537297294)
        ;

        
    
    
            var marker_3ce06b1d85954bf7bdecc9de2374a752 = L.marker(
                [44.878498, 11.421831],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_d8f9aba4841e461b907ce99867826aad = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3ce06b1d85954bf7bdecc9de2374a752.setIcon(icon_d8f9aba4841e461b907ce99867826aad);
        
    
        var popup_233b9b040d424a2cb9829492931c32a7 = L.popup({"maxWidth": 2650});

        
            var i_frame_702e27ebddc44d0092a2e5b43829d862 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBjYXBvbHVvZ28gQm9uZGVubyAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE2MjQwMTIuNzYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDgyMzI1LjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_233b9b040d424a2cb9829492931c32a7.setContent(i_frame_702e27ebddc44d0092a2e5b43829d862);
        

        marker_3ce06b1d85954bf7bdecc9de2374a752.bindPopup(popup_233b9b040d424a2cb9829492931c32a7)
        ;

        
    
    
            var marker_eea86e1106d842b090864149635464d3 = L.marker(
                [44.889817, 10.903478999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_8aee626401604a5dbea617d170583543 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_eea86e1106d842b090864149635464d3.setIcon(icon_8aee626401604a5dbea617d170583543);
        
    
        var popup_eda981cbf4d148638da0c0c213c2d4b8 = L.popup({"maxWidth": 2650});

        
            var i_frame_eaacdbd40897428d8f88f2533c474665 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuTWljaGVsZSBBcmNhbmdlbG8gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDIyNTAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_eda981cbf4d148638da0c0c213c2d4b8.setContent(i_frame_eaacdbd40897428d8f88f2533c474665);
        

        marker_eea86e1106d842b090864149635464d3.bindPopup(popup_eda981cbf4d148638da0c0c213c2d4b8)
        ;

        
    
    
            var marker_e807d74d279640d791fd298b7d09b816 = L.marker(
                [44.913309999999996, 10.981861],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e75d1f54e9ce4ebba9ef12d6e54c40fe = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e807d74d279640d791fd298b7d09b816.setIcon(icon_e75d1f54e9ce4ebba9ef12d6e54c40fe);
        
    
        var popup_6bf67da1180a4ae484bf77cf6eb9e39b = L.popup({"maxWidth": 2650});

        
            var i_frame_0a69ac2082a94b93889ec223b8f5fd85 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gUGFvbG8gQXBvc3RvbG8gZSBjYW1wYW5pbGUgLyBEdW9tbyAtIFBhcnJvY2NoaWEgZGVsbGEgQ29udmVyc2lvbmUgZGkgUy4gUGFvbG8gQXBvc3RvbG8gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI1MDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6bf67da1180a4ae484bf77cf6eb9e39b.setContent(i_frame_0a69ac2082a94b93889ec223b8f5fd85);
        

        marker_e807d74d279640d791fd298b7d09b816.bindPopup(popup_6bf67da1180a4ae484bf77cf6eb9e39b)
        ;

        
    
    
            var marker_88b0693e0b744fb89d0479abc2a9c3a6 = L.marker(
                [44.841221999999995, 10.955729],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_3faf13e08165474f8c61bf96ccf82fa6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_88b0693e0b744fb89d0479abc2a9c3a6.setIcon(icon_3faf13e08165474f8c61bf96ccf82fa6);
        
    
        var popup_a23536e9e16f43b1aa3a9c569212a7c7 = L.popup({"maxWidth": 2650});

        
            var i_frame_a03c877f3bb94c4bac18424ae77308ba = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYXJyb2NjaGlhIGRpIFNhbnRhIENhdGVyaW5hIGRpIEFsZXNzYW5kcmlhIGNvbiBjYW1wYW5pbGUgLyBDYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjg2MTkuMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a23536e9e16f43b1aa3a9c569212a7c7.setContent(i_frame_a03c877f3bb94c4bac18424ae77308ba);
        

        marker_88b0693e0b744fb89d0479abc2a9c3a6.bindPopup(popup_a23536e9e16f43b1aa3a9c569212a7c7)
        ;

        
    
    
            var marker_a7102b440c8b494e949dcb76670f7379 = L.marker(
                [44.762147999999996, 11.472658000000001],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c62ee166e8994e428a116ea93b781d51 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_a7102b440c8b494e949dcb76670f7379.setIcon(icon_c62ee166e8994e428a116ea93b781d51);
        
    
        var popup_efff2e6c81ce4068b0166958686b25f1 = L.popup({"maxWidth": 2650});

        
            var i_frame_0812b04f554846dd80b4df6ee6322aa2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBYmJhemlhIGRpIFMuIE1pY2hlbGUgLyBFeCBjaGllc2EgYWJiYXppYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_efff2e6c81ce4068b0166958686b25f1.setContent(i_frame_0812b04f554846dd80b4df6ee6322aa2);
        

        marker_a7102b440c8b494e949dcb76670f7379.bindPopup(popup_efff2e6c81ce4068b0166958686b25f1)
        ;

        
    
    
            var marker_4929f53dad8645c2b834818ee2eee937 = L.marker(
                [44.83283, 11.463131],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_44256ec7d30340c8a6ba0326dff22c46 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4929f53dad8645c2b834818ee2eee937.setIcon(icon_44256ec7d30340c8a6ba0326dff22c46);
        
    
        var popup_847bc11c5b8d40d08b2f5a2967241cbc = L.popup({"maxWidth": 2650});

        
            var i_frame_b989b7ef681a48649172eee9a085c8e9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXBwZWxsYSBkZWxsZSBCZWF0YSBWZXJnaW5lIGRpIFMuIEx1Y2EgKE9yYXRvcmlvKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQUJFTExPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_847bc11c5b8d40d08b2f5a2967241cbc.setContent(i_frame_b989b7ef681a48649172eee9a085c8e9);
        

        marker_4929f53dad8645c2b834818ee2eee937.bindPopup(popup_847bc11c5b8d40d08b2f5a2967241cbc)
        ;

        
    
    
            var marker_4b3ceedd9f604005af0aaf291583d53d = L.marker(
                [44.865299, 11.391478999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_d8d0226263654054a929f7482dff66e8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_4b3ceedd9f604005af0aaf291583d53d.setIcon(icon_d8d0226263654054a929f7482dff66e8);
        
    
        var popup_c1043d9ad0d744e8879dbaa06457104a = L.popup({"maxWidth": 2650});

        
            var i_frame_8e3bf7f1d5944a0281417eafb74d3cb1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXN0ZWxsbyBkaSBTYW50YSBCaWFuY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c1043d9ad0d744e8879dbaa06457104a.setContent(i_frame_8e3bf7f1d5944a0281417eafb74d3cb1);
        

        marker_4b3ceedd9f604005af0aaf291583d53d.bindPopup(popup_c1043d9ad0d744e8879dbaa06457104a)
        ;

        
    
    
            var marker_6f2b54c94923429492a39c44bdf83b88 = L.marker(
                [44.779004, 11.042415],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_dcb3a6f69d7f4be088ccb6bccfdad7bb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_6f2b54c94923429492a39c44bdf83b88.setIcon(icon_dcb3a6f69d7f4be088ccb6bccfdad7bb);
        
    
        var popup_3fd3827362b64879bb573fdea5b70080 = L.popup({"maxWidth": 2650});

        
            var i_frame_465fe7f4a8fb42b488259895dba3819f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlbGxlIFRvcnJpIC8gUGFsYXp6byBpIFRvcnJpb25pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3fd3827362b64879bb573fdea5b70080.setContent(i_frame_465fe7f4a8fb42b488259895dba3819f);
        

        marker_6f2b54c94923429492a39c44bdf83b88.bindPopup(popup_3fd3827362b64879bb573fdea5b70080)
        ;

        
    
    
            var marker_973409adb63349f5bfebc460e0dc5994 = L.marker(
                [44.837958, 11.142955],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_79a353244f0b48128c41ca05020ab0ef = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_973409adb63349f5bfebc460e0dc5994.setIcon(icon_79a353244f0b48128c41ca05020ab0ef);
        
    
        var popup_dd90522c1d0949799aac718c1c4dc0f5 = L.popup({"maxWidth": 2650});

        
            var i_frame_203f3d611b6d48b3b0456bb80e030cd3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBWaWxsYSBleCBEdWNhbGUgZSBwYXJjbyAvIFZpbGxhIEZlcnJpIC8gQ2FzaW5vIGRlbCBEdWNhIC8gVmlsbGlubyBkdWNhbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dd90522c1d0949799aac718c1c4dc0f5.setContent(i_frame_203f3d611b6d48b3b0456bb80e030cd3);
        

        marker_973409adb63349f5bfebc460e0dc5994.bindPopup(popup_dd90522c1d0949799aac718c1c4dc0f5)
        ;

        
    
    
            var marker_0d5177b8d4914d3c9a74626798e8fa6e = L.marker(
                [44.783875, 10.884853999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_5d596cc78d0b4485b5e9c79c92b49daa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0d5177b8d4914d3c9a74626798e8fa6e.setIcon(icon_5d596cc78d0b4485b5e9c79c92b49daa);
        
    
        var popup_c8516420a2074873b1486da4d0469156 = L.popup({"maxWidth": 2650});

        
            var i_frame_78af660a45f041e38a42b508dea52541 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBkaSB2aWEgVGVycmFwaWVuaSAvIFRvcnJlIER1w7IgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c8516420a2074873b1486da4d0469156.setContent(i_frame_78af660a45f041e38a42b508dea52541);
        

        marker_0d5177b8d4914d3c9a74626798e8fa6e.bindPopup(popup_c8516420a2074873b1486da4d0469156)
        ;

        
    
    
            var marker_0875cb8ca551485882231d48988fb639 = L.marker(
                [44.838551, 11.087088],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_fe9578b3170146c29dcf234ae664d3c0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_0875cb8ca551485882231d48988fb639.setIcon(icon_fe9578b3170146c29dcf234ae664d3c0);
        
    
        var popup_10b67d8686294bcba01cfbc5d7495c40 = L.popup({"maxWidth": 2650});

        
            var i_frame_89fc67ea202e45ae86926df1a308efdc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUb3JyZSBNYWxjYW50b25lIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNRURPTExBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_10b67d8686294bcba01cfbc5d7495c40.setContent(i_frame_89fc67ea202e45ae86926df1a308efdc);
        

        marker_0875cb8ca551485882231d48988fb639.bindPopup(popup_10b67d8686294bcba01cfbc5d7495c40)
        ;

        
    
    
            var marker_3dbebbadbaea4904977df811c31fa2bb = L.marker(
                [44.794314, 11.235204],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_2a1eb8df2f0844c097702b4d980d55f5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3dbebbadbaea4904977df811c31fa2bb.setIcon(icon_2a1eb8df2f0844c097702b4d980d55f5);
        
    
        var popup_24ff1a67aec14938bc00f642ac257f31 = L.popup({"maxWidth": 2650});

        
            var i_frame_051adb6102254e1c8aca41654671be14 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGdpw6AgUGVwb2xpIC8gQ2FzdGVsbG8gUGVwb2xpIC8gUGFsYXp6byBUb3Jsb25pYSBlIE9yYXRvcmlvIFZlcmdpbmUgQXNzdW50YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_24ff1a67aec14938bc00f642ac257f31.setContent(i_frame_051adb6102254e1c8aca41654671be14);
        

        marker_3dbebbadbaea4904977df811c31fa2bb.bindPopup(popup_24ff1a67aec14938bc00f642ac257f31)
        ;

        
    
    
            var marker_e8fd8cfd45874699b3f9e1e6e490436f = L.marker(
                [44.728845, 11.287516],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_855f8720d6914e1d962296854e833e04 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e8fd8cfd45874699b3f9e1e6e490436f.setIcon(icon_855f8720d6914e1d962296854e833e04);
        
    
        var popup_8e70bcf327f04dce8dccde48449d7ad1 = L.popup({"maxWidth": 2650});

        
            var i_frame_bbe4234cc4bf4e0087528b2b15ec73c8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gTWFyaWEgTWFkZGFsZW5hIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8e70bcf327f04dce8dccde48449d7ad1.setContent(i_frame_bbe4234cc4bf4e0087528b2b15ec73c8);
        

        marker_e8fd8cfd45874699b3f9e1e6e490436f.bindPopup(popup_8e70bcf327f04dce8dccde48449d7ad1)
        ;

        
    
    
            var marker_7c781ef803344e53842dffaed944c94d = L.marker(
                [44.919138000000004, 10.801507],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_41b9337a100c4b8781b36e0bc314da6b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_7c781ef803344e53842dffaed944c94d.setIcon(icon_41b9337a100c4b8781b36e0bc314da6b);
        
    
        var popup_d8d426e0860c46fa81e25ef021b34f60 = L.popup({"maxWidth": 2650});

        
            var i_frame_ceeaebc099b741c5bbb78ec9d5dfe20b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBWaWxsYSBGYXNzYXRpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d8d426e0860c46fa81e25ef021b34f60.setContent(i_frame_ceeaebc099b741c5bbb78ec9d5dfe20b);
        

        marker_7c781ef803344e53842dffaed944c94d.bindPopup(popup_d8d426e0860c46fa81e25ef021b34f60)
        ;

        
    
    
            var marker_da4bd791068b4e6aad859ceab52c14ed = L.marker(
                [44.913787, 10.801011],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_37deec0839be4e709c0fbe0552122300 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_da4bd791068b4e6aad859ceab52c14ed.setIcon(icon_37deec0839be4e709c0fbe0552122300);
        
    
        var popup_f8530b3087364cc183589a4aa8ae15e8 = L.popup({"maxWidth": 2650});

        
            var i_frame_57caf92286e7413d9f20648f49e7e7fe = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkaSBTLiBWZW5lcmlvIGVkIGFubmVzc2Egem9uYSB2ZXJkZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f8530b3087364cc183589a4aa8ae15e8.setContent(i_frame_57caf92286e7413d9f20648f49e7e7fe);
        

        marker_da4bd791068b4e6aad859ceab52c14ed.bindPopup(popup_f8530b3087364cc183589a4aa8ae15e8)
        ;

        
    
    
            var marker_f9e55dd8a8a349efba581dc9d37c4d95 = L.marker(
                [44.917473, 10.9874],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_4da57902e7bd45b08c4e01244323d04b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_f9e55dd8a8a349efba581dc9d37c4d95.setIcon(icon_4da57902e7bd45b08c4e01244323d04b);
        
    
        var popup_241f6878b16f443bad8c49fdd17958ae = L.popup({"maxWidth": 2650});

        
            var i_frame_03005702cf86422a814f358405b3d429 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBOdW92byBQb2xvIFNjb2xhc3RpY28gKG1lZGllIGUgcGFsZXN0cmEpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDT05DT1JESUEgU1VMTEEgU0VDQ0hJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA3NTQyNTk5LjM1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_241f6878b16f443bad8c49fdd17958ae.setContent(i_frame_03005702cf86422a814f358405b3d429);
        

        marker_f9e55dd8a8a349efba581dc9d37c4d95.bindPopup(popup_241f6878b16f443bad8c49fdd17958ae)
        ;

        
    
    
            var marker_ec375ef5674a477398ba1a2c79809b6a = L.marker(
                [44.894351, 11.078574],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_77aa525dddaf409cbc21b65024c30fb5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_ec375ef5674a477398ba1a2c79809b6a.setIcon(icon_77aa525dddaf409cbc21b65024c30fb5);
        
    
        var popup_e56f987754a3413c9aeb6a939475b323 = L.popup({"maxWidth": 2650});

        
            var i_frame_206fda206f2e40b48da6934d7c59fd45 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbmkgY29tdW5hbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI2NjMwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e56f987754a3413c9aeb6a939475b323.setContent(i_frame_206fda206f2e40b48da6934d7c59fd45);
        

        marker_ec375ef5674a477398ba1a2c79809b6a.bindPopup(popup_e56f987754a3413c9aeb6a939475b323)
        ;

        
    
    
            var marker_9e38ba1d7bf24f4d9c8cf2cbc7687f92 = L.marker(
                [44.88097, 11.07726],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_1c01230f12824abe846da31188518d2f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9e38ba1d7bf24f4d9c8cf2cbc7687f92.setIcon(icon_1c01230f12824abe846da31188518d2f);
        
    
        var popup_814f35abc3db4111933ffd9d5df3c29a = L.popup({"maxWidth": 2650});

        
            var i_frame_a8d3cb9e9f87436296a44a0390bca935 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gTnVvdG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEyMzUwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_814f35abc3db4111933ffd9d5df3c29a.setContent(i_frame_a8d3cb9e9f87436296a44a0390bca935);
        

        marker_9e38ba1d7bf24f4d9c8cf2cbc7687f92.bindPopup(popup_814f35abc3db4111933ffd9d5df3c29a)
        ;

        
    
    
            var marker_9e26c77ea99d42a79d3d4e54be0ab2e5 = L.marker(
                [44.888187, 11.06525],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6e4a4674493d4a95a6bd68339417d013 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_9e26c77ea99d42a79d3d4e54be0ab2e5.setIcon(icon_6e4a4674493d4a95a6bd68339417d013);
        
    
        var popup_cce43a1004f64a94a54857a7a1c36f78 = L.popup({"maxWidth": 2650});

        
            var i_frame_c75be1c7e0654515a39ac82e588796fc = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gTnVvdm8gLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTc5ODM5LjQyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA4OTkxLjk3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cce43a1004f64a94a54857a7a1c36f78.setContent(i_frame_c75be1c7e0654515a39ac82e588796fc);
        

        marker_9e26c77ea99d42a79d3d4e54be0ab2e5.bindPopup(popup_cce43a1004f64a94a54857a7a1c36f78)
        ;

        
    
    
            var marker_69da94e1c1ab4bc8b5b4c6d1e0798dd0 = L.marker(
                [44.935553999999996, 11.233742],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_c010c349610443cd94147608db2a394f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_69da94e1c1ab4bc8b5b4c6d1e0798dd0.setIcon(icon_c010c349610443cd94147608db2a394f);
        
    
        var popup_dc3a8d92f6164e789ea29bb5fc2b2b05 = L.popup({"maxWidth": 2650});

        
            var i_frame_a2f8c3e45cb244ca809420d12273e630 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNhIENvbXVuYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxODAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dc3a8d92f6164e789ea29bb5fc2b2b05.setContent(i_frame_a2f8c3e45cb244ca809420d12273e630);
        

        marker_69da94e1c1ab4bc8b5b4c6d1e0798dd0.bindPopup(popup_dc3a8d92f6164e789ea29bb5fc2b2b05)
        ;

        
    
    
            var marker_56a2311813104e7391d20cdab88cdeda = L.marker(
                [44.863440000000004, 11.059493],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_be7ceb751d724729892399db8a880835 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_56a2311813104e7391d20cdab88cdeda.setIcon(icon_be7ceb751d724729892399db8a880835);
        
    
        var popup_62f23bee491241cfafe1124774f59c9c = L.popup({"maxWidth": 2650});

        
            var i_frame_218c8a0f9904451aa5669129c20ddff8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBTYW4gR2lhY29tbyBSb25jb2xlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_62f23bee491241cfafe1124774f59c9c.setContent(i_frame_218c8a0f9904451aa5669129c20ddff8);
        

        marker_56a2311813104e7391d20cdab88cdeda.bindPopup(popup_62f23bee491241cfafe1124774f59c9c)
        ;

        
    
    
            var marker_e54274d8f3044d938d2e69ac37ea0b39 = L.marker(
                [44.875192, 11.128319],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_e21f0512eb584fd295cd58498f3535c2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_e54274d8f3044d938d2e69ac37ea0b39.setIcon(icon_e21f0512eb584fd295cd58498f3535c2);
        
    
        var popup_dfcd5535875c4e74bdd081708e644da6 = L.popup({"maxWidth": 2650});

        
            var i_frame_9f3cfcca053644ad87a450a78d860d24 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBNb3J0aXp6dW9sbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQyODk4OS45MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjMyNDAuMjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBNYWkgaW5pemlhdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_dfcd5535875c4e74bdd081708e644da6.setContent(i_frame_9f3cfcca053644ad87a450a78d860d24);
        

        marker_e54274d8f3044d938d2e69ac37ea0b39.bindPopup(popup_dfcd5535875c4e74bdd081708e644da6)
        ;

        
    
    
            var marker_5aca00449d334b938565b640f6cda1b2 = L.marker(
                [44.924225, 11.179802],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_6a883c5f5b9747f082358758f42b22d8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_5aca00449d334b938565b640f6cda1b2.setIcon(icon_6a883c5f5b9747f082358758f42b22d8);
        
    
        var popup_ffeacc53f9184603923e6299d0e342c6 = L.popup({"maxWidth": 2650});

        
            var i_frame_7f8890def85042389c47981ac651a2aa = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBHYXZlbGxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMzU0NDYwLjkxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNjQ3My4xOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE1haSBpbml6aWF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ffeacc53f9184603923e6299d0e342c6.setContent(i_frame_7f8890def85042389c47981ac651a2aa);
        

        marker_5aca00449d334b938565b640f6cda1b2.bindPopup(popup_ffeacc53f9184603923e6299d0e342c6)
        ;

        
    
    
            var marker_3b7446232b5847888bcb93d5ac48cca5 = L.marker(
                [44.958257, 11.086097],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_3af051e192f1402db77c6585e8edcd9c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_3b7446232b5847888bcb93d5ac48cca5.setIcon(icon_3af051e192f1402db77c6585e8edcd9c);
        
    
        var popup_4c048ad5f78c4c67bb2126b94dcb1afb = L.popup({"maxWidth": 2650});

        
            var i_frame_0c138c2c1652443bbd7270a83472f195 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBUcmFtdXNjaGlvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjIwOTc3LjQxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNDM4Mi4zIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4c048ad5f78c4c67bb2126b94dcb1afb.setContent(i_frame_0c138c2c1652443bbd7270a83472f195);
        

        marker_3b7446232b5847888bcb93d5ac48cca5.bindPopup(popup_4c048ad5f78c4c67bb2126b94dcb1afb)
        ;

        
    
    
            var marker_664d8cac22764b6286ea75b23b63f457 = L.marker(
                [44.888414000000004, 11.070889999999999],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_ebfb5756fb4b403399c2cdb313d4cd73 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_664d8cac22764b6286ea75b23b63f457.setIcon(icon_ebfb5756fb4b403399c2cdb313d4cd73);
        
    
        var popup_36b5f1aeb59942f58806fd2986cd36e6 = L.popup({"maxWidth": 2650});

        
            var i_frame_92a915fad1c74b1c90155ed60cf9d156 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTdGFkaW8gTG9sbGkgLSBUcmlidW5lIG11cm8gZGkgY2ludGEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDQxNzMxLjUxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_36b5f1aeb59942f58806fd2986cd36e6.setContent(i_frame_92a915fad1c74b1c90155ed60cf9d156);
        

        marker_664d8cac22764b6286ea75b23b63f457.bindPopup(popup_36b5f1aeb59942f58806fd2986cd36e6)
        ;

        
    
    
            var marker_23818e078cba492a9a259177e62c85dd = L.marker(
                [44.825285, 11.461107],
                {}
            ).addTo(feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f);
        
    
            var icon_3dde1e3ae2244f8f9fcd57d6779f258e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_23818e078cba492a9a259177e62c85dd.setIcon(icon_3dde1e3ae2244f8f9fcd57d6779f258e);
        
    
        var popup_106d441a7dd44716b3534ad74525cfce = L.popup({"maxWidth": 2650});

        
            var i_frame_8ffa5ef9ee1b4052b362e5ae61072d81 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21wbGVzc28gZGVsbGEgQ2hpZXNhIFBhcnJvY2NoaWFsZSBkaSBTYW4gUGFvbG8gY2hpZXNhIGNvbiBjYW1wYW5pbGUgLSBJSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQUJFTExPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTWFpIGluaXppYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_106d441a7dd44716b3534ad74525cfce.setContent(i_frame_8ffa5ef9ee1b4052b362e5ae61072d81);
        

        marker_23818e078cba492a9a259177e62c85dd.bindPopup(popup_106d441a7dd44716b3534ad74525cfce)
        ;

        
    
    
            var feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac = L.featureGroup.subGroup(
                marker_cluster_a65134eec0554dd28eae036f46ce6199
            );
            feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac.addTo(map_ae26379126cd4ce79aea9d0f395ec09f);
        
    
            var marker_89a3a413094c49eb8da5062c9e85f9cd = L.marker(
                [44.729456, 11.291151],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_b1c15459aec947b6ae49bdedb658df3c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_89a3a413094c49eb8da5062c9e85f9cd.setIcon(icon_b1c15459aec947b6ae49bdedb658df3c);
        
    
        var popup_a6657c6a93424b0da79c6836aa87e3db = L.popup({"maxWidth": 2650});

        
            var i_frame_3b3f20c6113043f9a5b5a3e78e31d989 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTY29sYXN0aWNvIFRhZGRpYSBjb3JwbyBwcmluY2lwYWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxNjMzNjQuODkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDc2NDU2LjkxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a6657c6a93424b0da79c6836aa87e3db.setContent(i_frame_3b3f20c6113043f9a5b5a3e78e31d989);
        

        marker_89a3a413094c49eb8da5062c9e85f9cd.bindPopup(popup_a6657c6a93424b0da79c6836aa87e3db)
        ;

        
    
    
            var marker_ffbd5fae961647898b9d95b55010c849 = L.marker(
                [44.894698, 10.89531],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_e2564af2a25b4ac1a84b6fad3c1cf749 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_ffbd5fae961647898b9d95b55010c849.setIcon(icon_e2564af2a25b4ac1a84b6fad3c1cf749);
        
    
        var popup_ab54de78ee34426fa59c0d43d2f53b07 = L.popup({"maxWidth": 2650});

        
            var i_frame_e593005dbe6243ee8bafe9bb869244b8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gY29tdW5hbGUgZSBzZWRlIGRlbGxhIEJhbmRhIENpdHRhZGluYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTk9WSSBESSBNT0RFTkEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTM3NTQ5OC4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTEzNzc2Ny44MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ab54de78ee34426fa59c0d43d2f53b07.setContent(i_frame_e593005dbe6243ee8bafe9bb869244b8);
        

        marker_ffbd5fae961647898b9d95b55010c849.bindPopup(popup_ab54de78ee34426fa59c0d43d2f53b07)
        ;

        
    
    
            var marker_23300d00879e4c1593eda73b91d6dd94 = L.marker(
                [44.89454, 10.903153],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_54b53e15f1424becabba629b10338428 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_23300d00879e4c1593eda73b91d6dd94.setIcon(icon_54b53e15f1424becabba629b10338428);
        
    
        var popup_339b4447b2104bb0be229f5c62a7cdf7 = L.popup({"maxWidth": 2650});

        
            var i_frame_d30e01eafe2a4835b2f203c42d465336 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIFByb3RldHRhIFJvYmVydG8gUm9zc2kgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE2MzE5MTYuOTkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEyMDk3OTguMTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_339b4447b2104bb0be229f5c62a7cdf7.setContent(i_frame_d30e01eafe2a4835b2f203c42d465336);
        

        marker_23300d00879e4c1593eda73b91d6dd94.bindPopup(popup_339b4447b2104bb0be229f5c62a7cdf7)
        ;

        
    
    
            var marker_6538cbe2fdf74818b98dba438e4c0d08 = L.marker(
                [44.766876, 11.486249],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_2df53ef5d5074c5f9f51845eb9edd472 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_6538cbe2fdf74818b98dba438e4c0d08.setIcon(icon_2df53ef5d5074c5f9f51845eb9edd472);
        
    
        var popup_aa46f0d59587477694f31b14ba8854ef = L.popup({"maxWidth": 2650});

        
            var i_frame_9c209f5cb75c4fa081d4e9b3258da5dd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgRWxlbWVudGFyZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUE9HR0lPIFJFTkFUSUNPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE0MTUxODAuNTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDYyNzgxMC4zOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aa46f0d59587477694f31b14ba8854ef.setContent(i_frame_9c209f5cb75c4fa081d4e9b3258da5dd);
        

        marker_6538cbe2fdf74818b98dba438e4c0d08.bindPopup(popup_aa46f0d59587477694f31b14ba8854ef)
        ;

        
    
    
            var marker_e2f8b1e0813f4b7db8c13d05b7c0dc58 = L.marker(
                [44.736206, 11.301155],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_2418f457d4564630840c00bc1c1da2b7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_e2f8b1e0813f4b7db8c13d05b7c0dc58.setIcon(icon_2418f457d4564630840c00bc1c1da2b7);
        
    
        var popup_964d3d6b812345469f1ae38464c54eed = L.popup({"maxWidth": 2650});

        
            var i_frame_2e62d94e74cc4a009c5b30cb5d383276 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gQ2FycmkgYWxsZWdvcmljaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTg1NzgxLjY1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxODI0NzMuNiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_964d3d6b812345469f1ae38464c54eed.setContent(i_frame_2e62d94e74cc4a009c5b30cb5d383276);
        

        marker_e2f8b1e0813f4b7db8c13d05b7c0dc58.bindPopup(popup_964d3d6b812345469f1ae38464c54eed)
        ;

        
    
    
            var marker_d4730d0e517d4f36ba9b7dd2806dae66 = L.marker(
                [44.919484000000004, 10.804762],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_4770d89d27d7457e8e85b80230375163 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_d4730d0e517d4f36ba9b7dd2806dae66.setIcon(icon_4770d89d27d7457e8e85b80230375163);
        
    
        var popup_62f24bea1b0e4857b3dd153763c65a7e = L.popup({"maxWidth": 2650});

        
            var i_frame_910719c31899438eae7a369f74fdd6f0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gZGlzYWJpbGkgZWRpZmljaW8gMzIgLSBjZW50cm8gZGlzYWJpbGkgZSBzZWRlIGFzc29jaWF6aW9uaSBkaSB2b2xvbnRhcmlhdG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE2NzgxNzMuODIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDU1MzgxMC45NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_62f24bea1b0e4857b3dd153763c65a7e.setContent(i_frame_910719c31899438eae7a369f74fdd6f0);
        

        marker_d4730d0e517d4f36ba9b7dd2806dae66.bindPopup(popup_62f24bea1b0e4857b3dd153763c65a7e)
        ;

        
    
    
            var marker_10f55228f3604309938c8d5ba0bdd68e = L.marker(
                [44.875037, 11.129891],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_ef02a2ed1a9d4584a5690b314997a26b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_10f55228f3604309938c8d5ba0bdd68e.setIcon(icon_ef02a2ed1a9d4584a5690b314997a26b);
        
    
        var popup_e96153e79c6c45b9a8343aab4c3e6e1a = L.popup({"maxWidth": 2650});

        
            var i_frame_de721c6651dc4be295724b5e604ef739 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExlb25hcmRvIExpbW9zaW5vIGFzaWxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTYzMTMxLjU5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0ODY1MS42MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e96153e79c6c45b9a8343aab4c3e6e1a.setContent(i_frame_de721c6651dc4be295724b5e604ef739);
        

        marker_10f55228f3604309938c8d5ba0bdd68e.bindPopup(popup_e96153e79c6c45b9a8343aab4c3e6e1a)
        ;

        
    
    
            var marker_5b7a06c4018a4d64ba413d7384c40bdf = L.marker(
                [44.724041, 11.148241],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_c501868a50544ae680dcb12b680edeba = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_5b7a06c4018a4d64ba413d7384c40bdf.setIcon(icon_c501868a50544ae680dcb12b680edeba);
        
    
        var popup_b30106b8607c4a7c9caed5644ea39a24 = L.popup({"maxWidth": 2650});

        
            var i_frame_92463bdf205b413cb105957546eff989 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGRlaSBHaW92YW5pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDY0NTExNi41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0NjM0OTEuNTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b30106b8607c4a7c9caed5644ea39a24.setContent(i_frame_92463bdf205b413cb105957546eff989);
        

        marker_5b7a06c4018a4d64ba413d7384c40bdf.bindPopup(popup_b30106b8607c4a7c9caed5644ea39a24)
        ;

        
    
    
            var marker_6b0695e0f55848708c1971fb1c45f4f2 = L.marker(
                [44.732544, 11.554053],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_f24ece4f6a2041e39bf69ae67de519be = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_6b0695e0f55848708c1971fb1c45f4f2.setIcon(icon_f24ece4f6a2041e39bf69ae67de519be);
        
    
        var popup_56402e6659f94521a550b8c9ef8dda78 = L.popup({"maxWidth": 2650});

        
            var i_frame_2ce54a7323584999a87e7a33f28f3f65 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgUGFycm9jY2hpYWxlIGRpIFNhbnRhIENhdGVyaW5hIGRpIEdhbGxvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMzkxOTQ0LjU5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMDQ5MjIuMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_56402e6659f94521a550b8c9ef8dda78.setContent(i_frame_2ce54a7323584999a87e7a33f28f3f65);
        

        marker_6b0695e0f55848708c1971fb1c45f4f2.bindPopup(popup_56402e6659f94521a550b8c9ef8dda78)
        ;

        
    
    
            var marker_a3a42245dc6f40ebba2495a21fd97bd1 = L.marker(
                [44.765886, 11.484209],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_da74d2e81c8647aeada67aacc883b3d5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_a3a42245dc6f40ebba2495a21fd97bd1.setIcon(icon_da74d2e81c8647aeada67aacc883b3d5);
        
    
        var popup_173f98e928e94ddc97d0d9e42834a658 = L.popup({"maxWidth": 2650});

        
            var i_frame_cd6e1c0373c94595b7fdabd05facfeeb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBjYXNhIGRlbCBMaXR0b3JpbyAtIENlbnRybyBjaXZpY28gLyBDYXNhIGRlbCBwb3BvbG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBPR0dJTyBSRU5BVElDTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzMDAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjQ1MDI2LjA1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_173f98e928e94ddc97d0d9e42834a658.setContent(i_frame_cd6e1c0373c94595b7fdabd05facfeeb);
        

        marker_a3a42245dc6f40ebba2495a21fd97bd1.bindPopup(popup_173f98e928e94ddc97d0d9e42834a658)
        ;

        
    
    
            var marker_cd9617d0e3324b1c99cf181b8eb3bc63 = L.marker(
                [44.790925, 11.2966],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_3ae822a4676c4ddba609bac626d9dd73 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_cd9617d0e3324b1c99cf181b8eb3bc63.setIcon(icon_3ae822a4676c4ddba609bac626d9dd73);
        
    
        var popup_2da5c5d2304d44c5937c4e30c0231d00 = L.popup({"maxWidth": 2650});

        
            var i_frame_35b80cb836ba43b5af5f41499531f88e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBYSUkgTW9yZWxsaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjIxODYzLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE5MjU4NS4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_2da5c5d2304d44c5937c4e30c0231d00.setContent(i_frame_35b80cb836ba43b5af5f41499531f88e);
        

        marker_cd9617d0e3324b1c99cf181b8eb3bc63.bindPopup(popup_2da5c5d2304d44c5937c4e30c0231d00)
        ;

        
    
    
            var marker_bc4441f63c914550bfee0f5ac4f0e1ac = L.marker(
                [44.8133, 11.305663000000001],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_882319c86d7f4b8b87ac90622cd2bcef = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_bc4441f63c914550bfee0f5ac4f0e1ac.setIcon(icon_882319c86d7f4b8b87ac90622cd2bcef);
        
    
        var popup_ac5904378fe54a16b302c758c8778ebe = L.popup({"maxWidth": 2650});

        
            var i_frame_2ac7c47ee1cf4ff6982d96cdb12cafea = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBBbGJlcm9uZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjA5MzYyLjU0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA4OTk3NS45NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ac5904378fe54a16b302c758c8778ebe.setContent(i_frame_2ac7c47ee1cf4ff6982d96cdb12cafea);
        

        marker_bc4441f63c914550bfee0f5ac4f0e1ac.bindPopup(popup_ac5904378fe54a16b302c758c8778ebe)
        ;

        
    
    
            var marker_85c643601f46475a9e48f8ecc6342452 = L.marker(
                [44.826811, 11.329367],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6b40f3b447a0456698279ad741a80eaf = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_85c643601f46475a9e48f8ecc6342452.setIcon(icon_6b40f3b447a0456698279ad741a80eaf);
        
    
        var popup_582013cc15644e7992af294504740328 = L.popup({"maxWidth": 2650});

        
            var i_frame_a95fdd565dc04e1c82a47cba7dcb749c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBSZW5vIENlbnRlc2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI5ODk2NS45NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjkzNDY2LjU3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_582013cc15644e7992af294504740328.setContent(i_frame_a95fdd565dc04e1c82a47cba7dcb749c);
        

        marker_85c643601f46475a9e48f8ecc6342452.bindPopup(popup_582013cc15644e7992af294504740328)
        ;

        
    
    
            var marker_68ea3e1ef1454d98b4968289b2a792a8 = L.marker(
                [44.765994, 11.28929],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_a8fd078d401346e2a1689a83edef147a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_68ea3e1ef1454d98b4968289b2a792a8.setIcon(icon_a8fd078d401346e2a1689a83edef147a);
        
    
        var popup_62e0fbde1d2f4222887723b6c9d13d54 = L.popup({"maxWidth": 2650});

        
            var i_frame_d04a5846a957430f8a8bde00abf01227 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSByZW5henpvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0Njk1NzQuNDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDQzNTU4MS43OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_62e0fbde1d2f4222887723b6c9d13d54.setContent(i_frame_d04a5846a957430f8a8bde00abf01227);
        

        marker_68ea3e1ef1454d98b4968289b2a792a8.bindPopup(popup_62e0fbde1d2f4222887723b6c9d13d54)
        ;

        
    
    
            var marker_4aae654e96c544a3817133f634d49dbf = L.marker(
                [44.727096, 11.290417],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_e09521dea7ef485391a003fb2038d342 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_4aae654e96c544a3817133f634d49dbf.setIcon(icon_e09521dea7ef485391a003fb2038d342);
        
    
        var popup_8a42edf68b274d378d6e564911a7656d = L.popup({"maxWidth": 2650});

        
            var i_frame_1a9574de47d74092888c38fa0f136deb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIGRlbCBHb3Zlcm5hdG9yZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjU1MDIzLjY3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyMjk1MjEuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8a42edf68b274d378d6e564911a7656d.setContent(i_frame_1a9574de47d74092888c38fa0f136deb);
        

        marker_4aae654e96c544a3817133f634d49dbf.bindPopup(popup_8a42edf68b274d378d6e564911a7656d)
        ;

        
    
    
            var marker_aff6a886ace641f6b4d88e47092ee944 = L.marker(
                [44.733482, 11.298119],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_1fa8bbc14bc443fab98047cee05beef0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_aff6a886ace641f6b4d88e47092ee944.setIcon(icon_1fa8bbc14bc443fab98047cee05beef0);
        
    
        var popup_27c9f2cb54c244f584863d0d05ad5670 = L.popup({"maxWidth": 2650});

        
            var i_frame_e0978cd55c74442494864851116dd4b2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBDZW50byBlIENhcHBlbGxhIGRlbCBDaW1pdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTI0MDQ1OC4zMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTAzNzEzNi40NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_27c9f2cb54c244f584863d0d05ad5670.setContent(i_frame_e0978cd55c74442494864851116dd4b2);
        

        marker_aff6a886ace641f6b4d88e47092ee944.bindPopup(popup_27c9f2cb54c244f584863d0d05ad5670)
        ;

        
    
    
            var marker_1565d43d6835499a944d1163b18f71df = L.marker(
                [44.950457, 11.422736],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_c0e70db9061d4eeda10523c43a6d9293 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_1565d43d6835499a944d1163b18f71df.setIcon(icon_c0e70db9061d4eeda10523c43a6d9293);
        
    
        var popup_55e91bc12d1b4edfae23bd969df01614 = L.popup({"maxWidth": 2650});

        
            var i_frame_ff9f85b73c73492795b48569dd2cd6e1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBSb2NjYSBQb3NzZW50ZSAtIHN0cmFsY2lvIEkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgODIwNzQ0LjgzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNjYwNjUuOTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_55e91bc12d1b4edfae23bd969df01614.setContent(i_frame_ff9f85b73c73492795b48569dd2cd6e1);
        

        marker_1565d43d6835499a944d1163b18f71df.bindPopup(popup_55e91bc12d1b4edfae23bd969df01614)
        ;

        
    
    
            var marker_ca71b098b0994684aa0a4920e0e81445 = L.marker(
                [44.87862, 11.421575],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_5749d063435149059dae8f8f8c003d8a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_ca71b098b0994684aa0a4920e0e81445.setIcon(icon_5749d063435149059dae8f8f8c003d8a);
        
    
        var popup_1d3a82140ad944179dc89a8c2a381c99 = L.popup({"maxWidth": 2650});

        
            var i_frame_df5b576c61d1438b814fe41cd29844ef = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBjYXBvbHVvZ28gQm9uZGVubyAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTU0MzE5Mi4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTI3NTkyNy41OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1d3a82140ad944179dc89a8c2a381c99.setContent(i_frame_df5b576c61d1438b814fe41cd29844ef);
        

        marker_ca71b098b0994684aa0a4920e0e81445.bindPopup(popup_1d3a82140ad944179dc89a8c2a381c99)
        ;

        
    
    
            var marker_ce77031568a640478c937a532f5c7ca5 = L.marker(
                [44.914774, 10.981239],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_cd6af5db8afb4fd58c54a1c1680f2b53 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_ce77031568a640478c937a532f5c7ca5.setIcon(icon_cd6af5db8afb4fd58c54a1c1680f2b53);
        
    
        var popup_ff31410380374845b06b15aed08cfb3b = L.popup({"maxWidth": 2650});

        
            var i_frame_83ddf0e84ec34a57aa9d0c8694a66fdb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNlbGxvIGUgbWFnYXp6aW5vIGlkcmF1bGljbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ09OQ09SRElBIFNVTExBIFNFQ0NISUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjUzNjc5LjM0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA3OTc0MS4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ff31410380374845b06b15aed08cfb3b.setContent(i_frame_83ddf0e84ec34a57aa9d0c8694a66fdb);
        

        marker_ce77031568a640478c937a532f5c7ca5.bindPopup(popup_ff31410380374845b06b15aed08cfb3b)
        ;

        
    
    
            var marker_6a6f9b834ea645c88894c7a78e573dbc = L.marker(
                [44.848751, 11.070536],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6c47320c7ff3496ab6ca74902da39bfc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_6a6f9b834ea645c88894c7a78e573dbc.setIcon(icon_6c47320c7ff3496ab6ca74902da39bfc);
        
    
        var popup_5b9da8548f6d4ed68927e8719b2a20a9 = L.popup({"maxWidth": 2650});

        
            var i_frame_b9bfb1006d5b41399926724732b01d6c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBUZWF0cm8gQ29tdW5hbGUgRmFjY2hpbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1FRE9MTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjk5OTQzLjkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDIzNTQ4My40NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5b9da8548f6d4ed68927e8719b2a20a9.setContent(i_frame_b9bfb1006d5b41399926724732b01d6c);
        

        marker_6a6f9b834ea645c88894c7a78e573dbc.bindPopup(popup_5b9da8548f6d4ed68927e8719b2a20a9)
        ;

        
    
    
            var marker_8941715068164512b8043b0d63aeb229 = L.marker(
                [44.946889, 11.286980999999999],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_05231aed15184678a42ea876e3a0fd74 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_8941715068164512b8043b0d63aeb229.setIcon(icon_05231aed15184678a42ea876e3a0fd74);
        
    
        var popup_20a65e14256140ce82bc8175a43a8130 = L.popup({"maxWidth": 2650});

        
            var i_frame_a9bd83f5025a40a6a064bfc087e309a8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIE1vc3RpIChBbWJ1bGF0b3JpbyBwcmVsaWV2aSBlIGNlbnRybyByaWNyZWF0aXZvKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxOTEwMjkuNTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEzNzQwNS44OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_20a65e14256140ce82bc8175a43a8130.setContent(i_frame_a9bd83f5025a40a6a064bfc087e309a8);
        

        marker_8941715068164512b8043b0d63aeb229.bindPopup(popup_20a65e14256140ce82bc8175a43a8130)
        ;

        
    
    
            var marker_7e00b12e4a95402bbb7cd2b8a964f979 = L.marker(
                [44.713617, 11.307158],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_80ad6ee3b5cc42c29c289005a149b6b3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_7e00b12e4a95402bbb7cd2b8a964f979.setIcon(icon_80ad6ee3b5cc42c29c289005a149b6b3);
        
    
        var popup_5a6229f0fe114fb3a1a77883e2ca82fc = L.popup({"maxWidth": 2650});

        
            var i_frame_364951d7f3194381a6ad90d6f564eeb2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb211bmUgZGkgUGlldmUgZGkgQ2VudG8gKFNlZGUgdWZmaWNpbyB0ZWNuaWNvKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUElFVkUgREkgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNzQ5MDEuNDUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDY2NjI0LjQxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5a6229f0fe114fb3a1a77883e2ca82fc.setContent(i_frame_364951d7f3194381a6ad90d6f564eeb2);
        

        marker_7e00b12e4a95402bbb7cd2b8a964f979.bindPopup(popup_5a6229f0fe114fb3a1a77883e2ca82fc)
        ;

        
    
    
            var marker_66fb13cf411c40c39632813ff719b9c1 = L.marker(
                [44.918494, 10.807463],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_9a927349b3ce45eea742ab41c0215987 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_66fb13cf411c40c39632813ff719b9c1.setIcon(icon_9a927349b3ce45eea742ab41c0215987);
        
    
        var popup_1d10a0e8219d4c4e8e1a351df4607d16 = L.popup({"maxWidth": 2650});

        
            var i_frame_a0b91543b5b34df3b3d279407ccc7a9d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIEFzc3VudGEgZSBwZXJ0aW5lbnplIC0gSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTg3MzQwOS4wMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTU1MDA1Ni4yMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1d10a0e8219d4c4e8e1a351df4607d16.setContent(i_frame_a0b91543b5b34df3b3d279407ccc7a9d);
        

        marker_66fb13cf411c40c39632813ff719b9c1.bindPopup(popup_1d10a0e8219d4c4e8e1a351df4607d16)
        ;

        
    
    
            var marker_1dad5e4ea40f438398b2bda07d30b594 = L.marker(
                [44.759489, 11.171434],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_b81c0808ef66423cacfed1f18ecf7406 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_1dad5e4ea40f438398b2bda07d30b594.setIcon(icon_b81c0808ef66423cacfed1f18ecf7406);
        
    
        var popup_015fd4c75532439a9f37a96864a94921 = L.popup({"maxWidth": 2650});

        
            var i_frame_0c650fed7ef54baab88f68898a35d43f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVpIFNTLiBGcmFuY2VzY28gZSBDYXJsbyBPcGVyZSBwYXJyb2NjaGlhbGkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTg3MzI3LjI4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMTU3NTQuNDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_015fd4c75532439a9f37a96864a94921.setContent(i_frame_0c650fed7ef54baab88f68898a35d43f);
        

        marker_1dad5e4ea40f438398b2bda07d30b594.bindPopup(popup_015fd4c75532439a9f37a96864a94921)
        ;

        
    
    
            var marker_18184860d863413bb2f09a45de5266f2 = L.marker(
                [44.759510999999996, 11.171363000000001],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_e6686e4021ae420f9b375b35dbb36794 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_18184860d863413bb2f09a45de5266f2.setIcon(icon_e6686e4021ae420f9b375b35dbb36794);
        
    
        var popup_e5a2bacb7ed74d1d83e31bf09023f505 = L.popup({"maxWidth": 2650});

        
            var i_frame_39b742811f584ef3a42e8db1a0ab39ae = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGVpIFNTLiBGcmFuY2VzY28gZSBDYXJsbyBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA3NjE2MjQuMjcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDU5ODc3NS40OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e5a2bacb7ed74d1d83e31bf09023f505.setContent(i_frame_39b742811f584ef3a42e8db1a0ab39ae);
        

        marker_18184860d863413bb2f09a45de5266f2.bindPopup(popup_e5a2bacb7ed74d1d83e31bf09023f505)
        ;

        
    
    
            var marker_d25a11d2d84f4c75bcbfbae227ba7cd6 = L.marker(
                [44.787325, 11.171509],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_383947d013de4df8b2434a91bd8ab4f9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_d25a11d2d84f4c75bcbfbae227ba7cd6.setIcon(icon_383947d013de4df8b2434a91bd8ab4f9);
        
    
        var popup_a95828f0a24f4e589d37d2ddab50ca0d = L.popup({"maxWidth": 2650});

        
            var i_frame_f12e32289e3e472d93a7769f7bb51cbb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gR2l1c2VwcGUgZGkgQ2FzZWxsZSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA2NDEwMDkuNDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDQ4MjU4OC4xIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a95828f0a24f4e589d37d2ddab50ca0d.setContent(i_frame_f12e32289e3e472d93a7769f7bb51cbb);
        

        marker_d25a11d2d84f4c75bcbfbae227ba7cd6.bindPopup(popup_a95828f0a24f4e589d37d2ddab50ca0d)
        ;

        
    
    
            var marker_9c5092ac34184f81b26eb8c06debc282 = L.marker(
                [44.724643, 11.287723],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_3599431962f043ddb47a463bc553697c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_9c5092ac34184f81b26eb8c06debc282.setIcon(icon_3599431962f043ddb47a463bc553697c);
        
    
        var popup_1d165b3ff23a45c7979602f89959540a = L.popup({"maxWidth": 2650});

        
            var i_frame_0d788e26e81c4c35a3a248c2c1f11f24 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYW50dWFyaW8gZGVsbGEgUm9jY2EgL0JlYXRhIHZlcmdpbmUgZGVsbGEgUm9jY2EgLyBnacOgIGRlbGxvIFNwaXJpdG8gU2FudG8gZSBjYW1wYW5pbGUgZSBwYXJ0ZSBkZWwgbW9uYXN0ZXJvIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxNzY1NTI2Ljc0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA3MTExMzEuMTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1d165b3ff23a45c7979602f89959540a.setContent(i_frame_0d788e26e81c4c35a3a248c2c1f11f24);
        

        marker_9c5092ac34184f81b26eb8c06debc282.bindPopup(popup_1d165b3ff23a45c7979602f89959540a)
        ;

        
    
    
            var marker_96759c66cb1f4bc2807ac62e6c25414c = L.marker(
                [44.815104999999996, 11.306929],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6fd0c72e042c4f00af51c131b45bf7a3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_96759c66cb1f4bc2807ac62e6c25414c.setIcon(icon_6fd0c72e042c4f00af51c131b45bf7a3);
        
    
        var popup_4d88a8777b1043699403784a370c2046 = L.popup({"maxWidth": 2650});

        
            var i_frame_f907b5badaba464fa3901d5946b35f86 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGRlbCBTYWxpY2UgZSBwZXJ0aW5lbnplIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMTY1OTQ2Ljc4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0NjQ5NjIuNDcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4d88a8777b1043699403784a370c2046.setContent(i_frame_f907b5badaba464fa3901d5946b35f86);
        

        marker_96759c66cb1f4bc2807ac62e6c25414c.bindPopup(popup_4d88a8777b1043699403784a370c2046)
        ;

        
    
    
            var marker_fdb02338ed084adf96062cebbd4588ab = L.marker(
                [44.755717, 11.310580999999999],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_5965e91cfadd47cba91e61d9f7c8ad1a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_fdb02338ed084adf96062cebbd4588ab.setIcon(icon_5965e91cfadd47cba91e61d9f7c8ad1a);
        
    
        var popup_d5c0c982407b495ba50f475bdf4b9eba = L.popup({"maxWidth": 2650});

        
            var i_frame_7bbd6e90bec54bb28649f722f0de38ea = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBHaW9yZ2lvIGUgY2FtcGFuaWxlIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA2MDYzMDUuNzEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDUwODYxMC4wNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d5c0c982407b495ba50f475bdf4b9eba.setContent(i_frame_7bbd6e90bec54bb28649f722f0de38ea);
        

        marker_fdb02338ed084adf96062cebbd4588ab.bindPopup(popup_d5c0c982407b495ba50f475bdf4b9eba)
        ;

        
    
    
            var marker_c9c5363d4b384553935036b39d2a7bdf = L.marker(
                [44.838038, 11.362873],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6841d07ff8e34b2190f8eff1e5a7c5bd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_c9c5363d4b384553935036b39d2a7bdf.setIcon(icon_6841d07ff8e34b2190f8eff1e5a7c5bd);
        
    
        var popup_e62fd733bdb644a79d90de01baa5b8cc = L.popup({"maxWidth": 2650});

        
            var i_frame_758714c2fa7a450f9919107a384e515b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExvcmVuem8gZSBwZXJ0aW5lbnplIGNoaWVzYSBjb24gY2FtcGFuaWxlIGUgY2Fub25pY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDg0NTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzNDI1NDUuOTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e62fd733bdb644a79d90de01baa5b8cc.setContent(i_frame_758714c2fa7a450f9919107a384e515b);
        

        marker_c9c5363d4b384553935036b39d2a7bdf.bindPopup(popup_e62fd733bdb644a79d90de01baa5b8cc)
        ;

        
    
    
            var marker_92ac3fdc927b40279dd96af017db1a19 = L.marker(
                [44.827689, 11.329274],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_cbc3749f63ab404588f6bde969bb3d14 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_92ac3fdc927b40279dd96af017db1a19.setIcon(icon_cbc3749f63ab404588f6bde969bb3d14);
        
    
        var popup_da2c782297be420a80e704e320375696 = L.popup({"maxWidth": 2650});

        
            var i_frame_f322e71cde6b413885a991b2673ec6f8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEFubmEgZSBjYW1wYW5pbGUgY2hpZXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1NzA1MzguMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDU5NDE5LjI4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_da2c782297be420a80e704e320375696.setContent(i_frame_f322e71cde6b413885a991b2673ec6f8);
        

        marker_92ac3fdc927b40279dd96af017db1a19.bindPopup(popup_da2c782297be420a80e704e320375696)
        ;

        
    
    
            var marker_707a17c41a8844a89acfc57d203dd086 = L.marker(
                [44.839478, 11.143597999999999],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_8de30c684d9c4ee8a7a5be99217757e8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_707a17c41a8844a89acfc57d203dd086.setIcon(icon_8de30c684d9c4ee8a7a5be99217757e8);
        
    
        var popup_31e739a87fc8456898f8a91b6be41c4f = L.popup({"maxWidth": 2650});

        
            var i_frame_abd815d9294b453494adbc35409d15df = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gQ3JvY2UgLSBPcmF0b3JpbyBkaSBQaWF6emEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBGRUxJQ0UgU1VMIFBBTkFSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA5NjAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDIyNjcxLjA0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_31e739a87fc8456898f8a91b6be41c4f.setContent(i_frame_abd815d9294b453494adbc35409d15df);
        

        marker_707a17c41a8844a89acfc57d203dd086.bindPopup(popup_31e739a87fc8456898f8a91b6be41c4f)
        ;

        
    
    
            var marker_46c90fd05a724d07b505a57d35d65c9f = L.marker(
                [44.917742, 10.803579],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6fba49bc2a84402db27f6b8602d7416d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_46c90fd05a724d07b505a57d35d65c9f.setIcon(icon_6fba49bc2a84402db27f6b8602d7416d);
        
    
        var popup_9f8dc8130c694bcca728e73a709f0bf4 = L.popup({"maxWidth": 2650});

        
            var i_frame_18209870a8524df891e2ceada7f0b8bd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxhenpvIFNhcnRvcmV0dGkgZSBwZXJ0aW5lbnplIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1NzkyMjAyLjczIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNDk3Mzc5LjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9f8dc8130c694bcca728e73a709f0bf4.setContent(i_frame_18209870a8524df891e2ceada7f0b8bd);
        

        marker_46c90fd05a724d07b505a57d35d65c9f.bindPopup(popup_9f8dc8130c694bcca728e73a709f0bf4)
        ;

        
    
    
            var marker_c8e311a1210d42409915dd8b7613c165 = L.marker(
                [44.920339, 10.806936],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_bdc93c386a9747509d41037505baaebc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_c8e311a1210d42409915dd8b7613c165.setIcon(icon_bdc93c386a9747509d41037505baaebc);
        
    
        var popup_c44f4139ce5b473bbe6f750ef46ee874 = L.popup({"maxWidth": 2650});

        
            var i_frame_e9dfdcfadf8b4b2d80d6ac67802a69a7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBSZWdnaW9sbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNjA3OTgzLjA5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNTU5MDkuMjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c44f4139ce5b473bbe6f750ef46ee874.setContent(i_frame_e9dfdcfadf8b4b2d80d6ac67802a69a7);
        

        marker_c8e311a1210d42409915dd8b7613c165.bindPopup(popup_c44f4139ce5b473bbe6f750ef46ee874)
        ;

        
    
    
            var marker_8cf5fe961ffe401fb76e577570fb6030 = L.marker(
                [44.790482, 11.017997],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_018bf0480eea488280df75c26712746e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_8cf5fe961ffe401fb76e577570fb6030.setIcon(icon_018bf0480eea488280df75c26712746e);
        
    
        var popup_20cae41f26dc46feb91d0409f911f38c = L.popup({"maxWidth": 2650});

        
            var i_frame_b03aa6c51a854e1e9070fe7f20aca4bd = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBtb251bWVudGFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIFBST1NQRVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE2MjgyMC43OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTI3MDU4LjMzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_20cae41f26dc46feb91d0409f911f38c.setContent(i_frame_b03aa6c51a854e1e9070fe7f20aca4bd);
        

        marker_8cf5fe961ffe401fb76e577570fb6030.bindPopup(popup_20cae41f26dc46feb91d0409f911f38c)
        ;

        
    
    
            var marker_5be63e868a73480b8a14e0df331af307 = L.marker(
                [44.913596000000005, 10.988977],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_246c2bcf656d4eb5a15459995cb1001e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_5be63e868a73480b8a14e0df331af307.setIcon(icon_246c2bcf656d4eb5a15459995cb1001e);
        
    
        var popup_620e2e694c1e4a1aa5c202437bbcbee8 = L.popup({"maxWidth": 2650});

        
            var i_frame_11873d2dbdb3423f8aad1fcc5fcb698a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBNb251bWVudGFsZSAgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE2ODEwOTguOTEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDc3MTIwMi42OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_620e2e694c1e4a1aa5c202437bbcbee8.setContent(i_frame_11873d2dbdb3423f8aad1fcc5fcb698a);
        

        marker_5be63e868a73480b8a14e0df331af307.bindPopup(popup_620e2e694c1e4a1aa5c202437bbcbee8)
        ;

        
    
    
            var marker_1456d3b60cf94763b3eed9df03d6e1d1 = L.marker(
                [44.827037, 11.460897000000001],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_9df3ef201bde4c6595225f8b0f6481e0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_1456d3b60cf94763b3eed9df03d6e1d1.setIcon(icon_9df3ef201bde4c6595225f8b0f6481e0);
        
    
        var popup_9cd7aa092c1f41c18e39d22e6f2278a3 = L.popup({"maxWidth": 2650});

        
            var i_frame_f114be4f1f0c40d28362fcd2e3140bb2 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBDYXNlbGxvIEZlcnJvdmlhcmlvIC0gZGVwb3NpdG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFCRUxMTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1MzU2OC41MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTQ0OTUuMjkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9cd7aa092c1f41c18e39d22e6f2278a3.setContent(i_frame_f114be4f1f0c40d28362fcd2e3140bb2);
        

        marker_1456d3b60cf94763b3eed9df03d6e1d1.bindPopup(popup_9cd7aa092c1f41c18e39d22e6f2278a3)
        ;

        
    
    
            var marker_fa324d8026804bf9baf100f7e4448e3d = L.marker(
                [44.840496, 11.239993],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6f253e2b681c4c62b720804ade3db544 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_fa324d8026804bf9baf100f7e4448e3d.setIcon(icon_6f253e2b681c4c62b720804ade3db544);
        
    
        var popup_fde3ac0eb37c452ebf6ffecd7c2bbf5c = L.popup({"maxWidth": 2650});

        
            var i_frame_8422ccc89ed142ab86dc217f4ed7e73f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gTWFyaWEgZGVsbGUgR3JhemllIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBGSU5BTEUgRU1JTElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDk3ODc3Ljg1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA1Mjc1OS42MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fde3ac0eb37c452ebf6ffecd7c2bbf5c.setContent(i_frame_8422ccc89ed142ab86dc217f4ed7e73f);
        

        marker_fa324d8026804bf9baf100f7e4448e3d.bindPopup(popup_fde3ac0eb37c452ebf6ffecd7c2bbf5c)
        ;

        
    
    
            var marker_c0f6cddf4d9f43bdb9783cc60319a890 = L.marker(
                [44.83238, 11.296317],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6d20c4904b324aeaaa2766d0072be662 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_c0f6cddf4d9f43bdb9783cc60319a890.setIcon(icon_6d20c4904b324aeaaa2766d0072be662);
        
    
        var popup_46cc1e4a53664132ad3a61fd4c057aea = L.popup({"maxWidth": 2650});

        
            var i_frame_b8b4a4a0af254bb48d198e53cb891f2d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBEdW9tbyAtIENoaWVzYSBwYXJyb2NjaGlhbGUgZGVpIFNTLiBGaWxpcHBvIGUgR2lhY29tbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0NzUwMDA2Ljc4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNTAwMDAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_46cc1e4a53664132ad3a61fd4c057aea.setContent(i_frame_b8b4a4a0af254bb48d198e53cb891f2d);
        

        marker_c0f6cddf4d9f43bdb9783cc60319a890.bindPopup(popup_46cc1e4a53664132ad3a61fd4c057aea)
        ;

        
    
    
            var marker_d902906f6b0b4e35b851c8f50c77d977 = L.marker(
                [44.836867, 11.031042],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_36b8377289ad455e9adf2ba7cdbb5a7d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_d902906f6b0b4e35b851c8f50c77d977.setIcon(icon_36b8377289ad455e9adf2ba7cdbb5a7d);
        
    
        var popup_0f07123803844797adf603d8ede09c87 = L.popup({"maxWidth": 2650});

        
            var i_frame_ef9161bf365c449a9656fb9e7797c57c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEVnaWRpbyBBYmF0ZSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzMzEyMzUyLjIzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNzg5NDc1LjY3IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0f07123803844797adf603d8ede09c87.setContent(i_frame_ef9161bf365c449a9656fb9e7797c57c);
        

        marker_d902906f6b0b4e35b851c8f50c77d977.bindPopup(popup_0f07123803844797adf603d8ede09c87)
        ;

        
    
    
            var marker_acd914ca4038437f87e425eae27f3147 = L.marker(
                [44.863396, 11.511562],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_dad086e2337b49da92ce86cc095882b8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_acd914ca4038437f87e425eae27f3147.setIcon(icon_dad086e2337b49da92ce86cc095882b8);
        
    
        var popup_71d765ea8653444e9a746c443f235503 = L.popup({"maxWidth": 2650});

        
            var i_frame_8174efab7a274d558b7115a0be2a0cd1 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRlaSBTUy4gUGlldHJvIGUgUGFvbG8gY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFZJR0FSQU5PIE1BSU5BUkRBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDcwNzE2Mi42OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNjIzMjA3LjMyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_71d765ea8653444e9a746c443f235503.setContent(i_frame_8174efab7a274d558b7115a0be2a0cd1);
        

        marker_acd914ca4038437f87e425eae27f3147.bindPopup(popup_71d765ea8653444e9a746c443f235503)
        ;

        
    
    
            var marker_04e412d4873441daa5844af9875724f7 = L.marker(
                [44.819552, 11.491938000000001],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_8ced0ff1d2a14641aa04dab382a383f5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_04e412d4873441daa5844af9875724f7.setIcon(icon_8ced0ff1d2a14641aa04dab382a383f5);
        
    
        var popup_d47f98027a2d4f4f9f8eb1a88567f63c = L.popup({"maxWidth": 2650});

        
            var i_frame_b05ee107c2994f389a535d9c752841f5 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGRlaSBCb3NjaGkgY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBPR0dJTyBSRU5BVElDTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1OTg3NjYuNDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI2MzI2My42MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d47f98027a2d4f4f9f8eb1a88567f63c.setContent(i_frame_b05ee107c2994f389a535d9c752841f5);
        

        marker_04e412d4873441daa5844af9875724f7.bindPopup(popup_d47f98027a2d4f4f9f8eb1a88567f63c)
        ;

        
    
    
            var marker_c23a573e336a42f1bafcda49715b4d6a = L.marker(
                [44.913402000000005, 11.29705],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_d867b8667cec44bba55d7f543c129b5c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_c23a573e336a42f1bafcda49715b4d6a.setIcon(icon_d867b8667cec44bba55d7f543c129b5c);
        
    
        var popup_849a6413c7e944228ed8eabbd545e5b9 = L.popup({"maxWidth": 2650});

        
            var i_frame_1b27010f86124834b41ad4ccbb73d234 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEFudG9uaW8gZGEgUGFkb3ZhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDM1NDA2NS40OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzAzNzA1LjYyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_849a6413c7e944228ed8eabbd545e5b9.setContent(i_frame_1b27010f86124834b41ad4ccbb73d234);
        

        marker_c23a573e336a42f1bafcda49715b4d6a.bindPopup(popup_849a6413c7e944228ed8eabbd545e5b9)
        ;

        
    
    
            var marker_9a44f4f93051434392d2d2aa3416d517 = L.marker(
                [44.914532, 11.350634],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_b8d3a82b96694a5da0a543e2fbd8ecb7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_9a44f4f93051434392d2d2aa3416d517.setIcon(icon_b8d3a82b96694a5da0a543e2fbd8ecb7);
        
    
        var popup_b425699b53c24a4782540d0bd287af4b = L.popup({"maxWidth": 2650});

        
            var i_frame_b5090bceb3bd4f2ca9957830454a9d51 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpYWNvbW8gTWFnZ2lvcmUgY2hpZXNhIGNvbiBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNjEzNTc3LjM4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNzAxNTcuNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b425699b53c24a4782540d0bd287af4b.setContent(i_frame_b5090bceb3bd4f2ca9957830454a9d51);
        

        marker_9a44f4f93051434392d2d2aa3416d517.bindPopup(popup_b425699b53c24a4782540d0bd287af4b)
        ;

        
    
    
            var marker_62c28e63c8e54a02801b65b8c1f7c094 = L.marker(
                [44.892821999999995, 11.440341],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_565ca4ff6da1446681dbc7e6939fe32d = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_62c28e63c8e54a02801b65b8c1f7c094.setIcon(icon_565ca4ff6da1446681dbc7e6939fe32d);
        
    
        var popup_237828ee152e4d708669f23c578580f9 = L.popup({"maxWidth": 2650});

        
            var i_frame_1b0f543d823d469e96b552d5cf443851 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYW50dWFyaW8gZGVsbGEgTWFkb25uYSBkZWxsYSBQaW9wcGEgLSBDaGllc2EgZGVsbGEgTWFkb25uYSBkZWxsYSBQaW9wcGEvU2FudHVhcmlvIGRlbGxhIFBpb3BwYSBjaGllc2EgY29uIGNhbXBhbmlsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzOTc1NjcuMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzUxMjQxLjcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_237828ee152e4d708669f23c578580f9.setContent(i_frame_1b0f543d823d469e96b552d5cf443851);
        

        marker_62c28e63c8e54a02801b65b8c1f7c094.bindPopup(popup_237828ee152e4d708669f23c578580f9)
        ;

        
    
    
            var marker_c52139e8d4c442dfa31b3ad646f89ad0 = L.marker(
                [44.918781, 11.431499],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6a9f9e53f3e749418b7192184dc07657 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_c52139e8d4c442dfa31b3ad646f89ad0.setIcon(icon_6a9f9e53f3e749418b7192184dc07657);
        
    
        var popup_81a9b6306f3a497cb914ad42ee955ecd = L.popup({"maxWidth": 2650});

        
            var i_frame_7c3dce340d004b6e83d967de2e6bb27c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEJpYWdpbyBWZXNjb3ZvIGUgTWFydGlyZSBjaGllc2EgY29uIGNhbXBhbmlsZSBlIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI5NjY4Ny4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMjcwODcuMjUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_81a9b6306f3a497cb914ad42ee955ecd.setContent(i_frame_7c3dce340d004b6e83d967de2e6bb27c);
        

        marker_c52139e8d4c442dfa31b3ad646f89ad0.bindPopup(popup_81a9b6306f3a497cb914ad42ee955ecd)
        ;

        
    
    
            var marker_a4bde2c1123849afa0a02ebdc7813193 = L.marker(
                [44.842665999999994, 11.494952],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_d63fb1dbf25a4bda98888e66c3139dd9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_a4bde2c1123849afa0a02ebdc7813193.setIcon(icon_d63fb1dbf25a4bda98888e66c3139dd9);
        
    
        var popup_6a428b5d6db440e08a7f10b09a4cc744 = L.popup({"maxWidth": 2650});

        
            var i_frame_500cacae66c14b6f87f452620a462965 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBWaWdhcmFubyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgVklHQVJBTk8gTUFJTkFSREEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNjk2MjIuNDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDYyMzI3LjAxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6a428b5d6db440e08a7f10b09a4cc744.setContent(i_frame_500cacae66c14b6f87f452620a462965);
        

        marker_a4bde2c1123849afa0a02ebdc7813193.bindPopup(popup_6a428b5d6db440e08a7f10b09a4cc744)
        ;

        
    
    
            var marker_3dd893ed9a384af9bf4d654f48f76048 = L.marker(
                [44.791078000000006, 11.020077],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_93ab7ecc71444bf58339a2a5d50e45df = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_3dd893ed9a384af9bf4d654f48f76048.setIcon(icon_93ab7ecc71444bf58339a2a5d50e45df);
        
    
        var popup_a28c1f4c0fa04347be8da6996cadaf92 = L.popup({"maxWidth": 2650});

        
            var i_frame_dc7e4e2e4f094eff828b2a8996f14428 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBc2lsbyBOaWRvICdMZSBGYXJmYWxsZScgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxODg4MDAuOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgODI4NDMuMTYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a28c1f4c0fa04347be8da6996cadaf92.setContent(i_frame_dc7e4e2e4f094eff828b2a8996f14428);
        

        marker_3dd893ed9a384af9bf4d654f48f76048.bindPopup(popup_a28c1f4c0fa04347be8da6996cadaf92)
        ;

        
    
    
            var marker_363a66c08fd447a49fa4d45a0c2b978e = L.marker(
                [44.905134000000004, 11.066955],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_177cbff879b844d8b241887396fe40b8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_363a66c08fd447a49fa4d45a0c2b978e.setIcon(icon_177cbff879b844d8b241887396fe40b8);
        
    
        var popup_b199556e98bf41fba893d4641fb86187 = L.popup({"maxWidth": 2650});

        
            var i_frame_b9562db0d6eb460dad6a3a84e54abd6f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIEdpdXN0aW5hIFZlcmdpbmUgZSBNYXJ0aXJlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNTM0ODQ3LjQzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzNTEwNjkuNjIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b199556e98bf41fba893d4641fb86187.setContent(i_frame_b9562db0d6eb460dad6a3a84e54abd6f);
        

        marker_363a66c08fd447a49fa4d45a0c2b978e.bindPopup(popup_b199556e98bf41fba893d4641fb86187)
        ;

        
    
    
            var marker_57e575f4410a4496b4efdf4c20bcefa0 = L.marker(
                [44.936692, 11.235216000000001],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_6e646896d7ef431390990247a6e7ac9b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_57e575f4410a4496b4efdf4c20bcefa0.setIcon(icon_6e646896d7ef431390990247a6e7ac9b);
        
    
        var popup_50d1837da98c41a481c64c7cb98fa770 = L.popup({"maxWidth": 2650});

        
            var i_frame_319d3ef30bcd4e73a9c70b733e53b62e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gVmVzY292byBjYW5vbmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI4OTcxOS4yMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjY1NTcxLjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_50d1837da98c41a481c64c7cb98fa770.setContent(i_frame_319d3ef30bcd4e73a9c70b733e53b62e);
        

        marker_57e575f4410a4496b4efdf4c20bcefa0.bindPopup(popup_50d1837da98c41a481c64c7cb98fa770)
        ;

        
    
    
            var marker_20c8cf3b09d94a57bee5cadf06026766 = L.marker(
                [44.923107, 11.095925999999999],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_635129a843ef47f1aaac422044674b25 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_20c8cf3b09d94a57bee5cadf06026766.setIcon(icon_635129a843ef47f1aaac422044674b25);
        
    
        var popup_a864c7969ed04881afd9fe5c6a7bc71f = L.popup({"maxWidth": 2650});

        
            var i_frame_39d7c1299d244bf8b95fcf2b3015a1b0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcmlhIGFkIE5pdmVzIC8gQ2hpZXNhIE1hZG9ubmEgZGVsbGEgTmV2ZSBkaSBRdWFyYW50b2xpIC0gYW5uZXNzbyBydXN0aWNvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjQyNTQ3LjU2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMDQ3MDMuNDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a864c7969ed04881afd9fe5c6a7bc71f.setContent(i_frame_39d7c1299d244bf8b95fcf2b3015a1b0);
        

        marker_20c8cf3b09d94a57bee5cadf06026766.bindPopup(popup_a864c7969ed04881afd9fe5c6a7bc71f)
        ;

        
    
    
            var marker_1be51712892445eea39889a13fc91a93 = L.marker(
                [44.890675, 11.089202],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_0f18efa6905c4e138a9d64cd6b498be8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_1be51712892445eea39889a13fc91a93.setIcon(icon_0f18efa6905c4e138a9d64cd6b498be8);
        
    
        var popup_ceab2b724acd4eaa9233f86385b775fa = L.popup({"maxWidth": 2650});

        
            var i_frame_96b85740e4ef4a7d90e48e084073dc4c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvIC0gVGVhdHJvIHBhcnJvY2NoaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDUzNDgyNC45MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDMwMzkzLjMyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ceab2b724acd4eaa9233f86385b775fa.setContent(i_frame_96b85740e4ef4a7d90e48e084073dc4c);
        

        marker_1be51712892445eea39889a13fc91a93.bindPopup(popup_ceab2b724acd4eaa9233f86385b775fa)
        ;

        
    
    
            var marker_95191ee60bd44dc982ce0f0809e056cd = L.marker(
                [44.886055999999996, 11.066599],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_993c0d1649c542ce85a2698a36926b72 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_95191ee60bd44dc982ce0f0809e056cd.setIcon(icon_993c0d1649c542ce85a2698a36926b72);
        
    
        var popup_a6caaa24ab2e4196847e978be4ab5e8b = L.popup({"maxWidth": 2650});

        
            var i_frame_a61331aa1c934e7b92107855a251d96c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgQ2F0dGVkcmFsZSBkaSBTLiBNYXJpYSBNYWdnaW9yZS9EdW9tbyAtIENvbGxlZ2lhdGEgZGkgUy4gTWFyaWEgTWFnZ2lvcmUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1Mzk3OTQyLjM2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0NzEwNTUxLjM4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a6caaa24ab2e4196847e978be4ab5e8b.setContent(i_frame_a61331aa1c934e7b92107855a251d96c);
        

        marker_95191ee60bd44dc982ce0f0809e056cd.bindPopup(popup_a6caaa24ab2e4196847e978be4ab5e8b)
        ;

        
    
    
            var marker_06a23be880224919bb30f81b88de01ee = L.marker(
                [44.923048, 11.036610000000001],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_454845f33bbb483b8abf030c2b5b7684 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_06a23be880224919bb30f81b88de01ee.setIcon(icon_454845f33bbb483b8abf030c2b5b7684);
        
    
        var popup_4e954c90be374aa19ef50fd8edcca1f8 = L.popup({"maxWidth": 2650});

        
            var i_frame_135c666257a94ed79f5af76b62c27706 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFBpZXRybyBBcG9zdG9sbyBjb24gb3JhdG9yaW8gZSBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENPTkNPUkRJQSBTVUxMQSBTRUNDSElBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDM5NjIwOS4xNiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzI4MjE0Ljc5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4e954c90be374aa19ef50fd8edcca1f8.setContent(i_frame_135c666257a94ed79f5af76b62c27706);
        

        marker_06a23be880224919bb30f81b88de01ee.bindPopup(popup_4e954c90be374aa19ef50fd8edcca1f8)
        ;

        
    
    
            var marker_00e78ecf7525424ca6bab2788d5f10b5 = L.marker(
                [44.767209, 11.254988],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_1fb27372db3b42ffa97c0f09687af178 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_00e78ecf7525424ca6bab2788d5f10b5.setIcon(icon_1fb27372db3b42ffa97c0f09687af178);
        
    
        var popup_f1f9401cdae944d5bf7408dfecf2eaed = L.popup({"maxWidth": 2650});

        
            var i_frame_22817a95cec845f29534f4abfefc98ae = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbiBHaWFjb21vIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDUwOTI3OC45OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTA0NTg3LjkxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f1f9401cdae944d5bf7408dfecf2eaed.setContent(i_frame_22817a95cec845f29534f4abfefc98ae);
        

        marker_00e78ecf7525424ca6bab2788d5f10b5.bindPopup(popup_f1f9401cdae944d5bf7408dfecf2eaed)
        ;

        
    
    
            var marker_194a7a0a11ce412e9f7fc7ba79d936b5 = L.marker(
                [44.723102000000004, 11.14738],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_d11f79601f194967aef9e3c37e793ba9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_194a7a0a11ce412e9f7fc7ba79d936b5.setIcon(icon_d11f79601f194967aef9e3c37e793ba9);
        
    
        var popup_fcfadeb38e3c4e5384b2bcb8a402c20d = L.popup({"maxWidth": 2650});

        
            var i_frame_b8ea024e25f54d5a84d22af8f0ad1491 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFNpbHZlc3RybyBjYW5vbmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ1JFVkFMQ09SRSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA5MDUxMi4zNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjk1NTUuMDIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_fcfadeb38e3c4e5384b2bcb8a402c20d.setContent(i_frame_b8ea024e25f54d5a84d22af8f0ad1491);
        

        marker_194a7a0a11ce412e9f7fc7ba79d936b5.bindPopup(popup_fcfadeb38e3c4e5384b2bcb8a402c20d)
        ;

        
    
    
            var marker_a85b382d0b5145adbb8d2a140ca989fc = L.marker(
                [44.723321999999996, 11.147503],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_09c55e7bf372460db35441c90cf466a0 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_a85b382d0b5145adbb8d2a140ca989fc.setIcon(icon_09c55e7bf372460db35441c90cf466a0);
        
    
        var popup_0ec00d3be51545aea8f5d740038c7986 = L.popup({"maxWidth": 2650});

        
            var i_frame_ef6b0c310f454a58a50b685b8557caef = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFNpbHZlc3RybyBjaGllc2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTA0Nzc0My4yNiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNzQ2NzY1LjI0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0ec00d3be51545aea8f5d740038c7986.setContent(i_frame_ef6b0c310f454a58a50b685b8557caef);
        

        marker_a85b382d0b5145adbb8d2a140ca989fc.bindPopup(popup_0ec00d3be51545aea8f5d740038c7986)
        ;

        
    
    
            var marker_bd90424b4e9844f5bfe4d70bb33cb498 = L.marker(
                [44.721877, 11.146676],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_016b403fe63e49aabc0499bb132fa27e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_bd90424b4e9844f5bfe4d70bb33cb498.setIcon(icon_016b403fe63e49aabc0499bb132fa27e);
        
    
        var popup_8f2c9f147a454dd3a390a65259fae7d4 = L.popup({"maxWidth": 2650});

        
            var i_frame_21b289290b9d461780e579ef66713642 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gQ3JvY2UgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNTg3Mjc0LjYxIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyMzcxNjguNzMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8f2c9f147a454dd3a390a65259fae7d4.setContent(i_frame_21b289290b9d461780e579ef66713642);
        

        marker_bd90424b4e9844f5bfe4d70bb33cb498.bindPopup(popup_8f2c9f147a454dd3a390a65259fae7d4)
        ;

        
    
    
            var marker_241ab8fead5f4b359a845f8239ed7c92 = L.marker(
                [44.83585, 11.029721],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_90730e5901eb475eb0b9ad20153df3b7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_241ab8fead5f4b359a845f8239ed7c92.setIcon(icon_90730e5901eb475eb0b9ad20153df3b7);
        
    
        var popup_021c4d0e32a343d99e7dbc13daa64e1c = L.popup({"maxWidth": 2650});

        
            var i_frame_441a18c2c9484663a88085e64d8c97f8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgZWxlbWVudGFyZSAtIElJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDY2ODYzNS41OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjcxNjcwLjc5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogTm9uIFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_021c4d0e32a343d99e7dbc13daa64e1c.setContent(i_frame_441a18c2c9484663a88085e64d8c97f8);
        

        marker_241ab8fead5f4b359a845f8239ed7c92.bindPopup(popup_021c4d0e32a343d99e7dbc13daa64e1c)
        ;

        
    
    
            var marker_70d314be1a8b404eb827ffb4e8bf6ef7 = L.marker(
                [44.919484000000004, 10.804762],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_92a002bdf6aa417a821f90eb6e3c0cba = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_70d314be1a8b404eb827ffb4e8bf6ef7.setIcon(icon_92a002bdf6aa417a821f90eb6e3c0cba);
        
    
        var popup_e5a9697dca9d48f58df44ee35190fd07 = L.popup({"maxWidth": 2650});

        
            var i_frame_d0b8e83afda448ae8cc81cd955a6ecdb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gZGlzYWJpbGkgZWRpZmljaW8gMzIgLSBhdWRpdG9yaXVtIGUgc2N1b2xhIGRpIG11c2ljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgODg1NjI1LjA1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMTM3NDEuNzUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e5a9697dca9d48f58df44ee35190fd07.setContent(i_frame_d0b8e83afda448ae8cc81cd955a6ecdb);
        

        marker_70d314be1a8b404eb827ffb4e8bf6ef7.bindPopup(popup_e5a9697dca9d48f58df44ee35190fd07)
        ;

        
    
    
            var marker_07cbc44254b14829a271fbebb7cacead = L.marker(
                [44.714453999999996, 11.304567],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_4517568225f44181b14f7bb0559f1c8c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_07cbc44254b14829a271fbebb7cacead.setIcon(icon_4517568225f44181b14f7bb0559f1c8c);
        
    
        var popup_0721697479d74d18a5a5cb0dbcfc6408 = L.popup({"maxWidth": 2650});

        
            var i_frame_af0bc80ec350462fafd3ce83bdb1d04b = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb3J0YSBDZW50byA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUElFVkUgREkgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTM5MTU2LjAyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA5NTgxNy4wNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IE5vbiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0721697479d74d18a5a5cb0dbcfc6408.setContent(i_frame_af0bc80ec350462fafd3ce83bdb1d04b);
        

        marker_07cbc44254b14829a271fbebb7cacead.bindPopup(popup_0721697479d74d18a5a5cb0dbcfc6408)
        ;

        
    
    
            var marker_14ba80eac8fe48e786f0ef369baf4374 = L.marker(
                [44.919128, 11.224095],
                {}
            ).addTo(feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac);
        
    
            var icon_025d8a22e8bf47faaaf7c7d6000d2d82 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "orange", "prefix": "glyphicon"}
            );
            marker_14ba80eac8fe48e786f0ef369baf4374.setIcon(icon_025d8a22e8bf47faaaf7c7d6000d2d82);
        
    
        var popup_121ef819e0cf4c5fbfe7cb3e73f56039 = L.popup({"maxWidth": 2650});

        
            var i_frame_7001beb9fa274c388bae054c69b5d231 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYXJjaGVzc29uZSBWZWNjaGlvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNjA5MzQzLjg0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNTUyNjUuMTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBOb24gVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_121ef819e0cf4c5fbfe7cb3e73f56039.setContent(i_frame_7001beb9fa274c388bae054c69b5d231);
        

        marker_14ba80eac8fe48e786f0ef369baf4374.bindPopup(popup_121ef819e0cf4c5fbfe7cb3e73f56039)
        ;

        
    
    
            var feature_group_sub_group_63479bc64099423ab489829c1890183c = L.featureGroup.subGroup(
                marker_cluster_a65134eec0554dd28eae036f46ce6199
            );
            feature_group_sub_group_63479bc64099423ab489829c1890183c.addTo(map_ae26379126cd4ce79aea9d0f395ec09f);
        
    
            var marker_8711baf8ff6a4c94912803ca13c2db1e = L.marker(
                [44.89283, 10.901029],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_7b747c748d0f48cf8fbeab2a0f323375 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_8711baf8ff6a4c94912803ca13c2db1e.setIcon(icon_7b747c748d0f48cf8fbeab2a0f323375);
        
    
        var popup_6926f2fb6ebe420facbae7ed98fc9710 = L.popup({"maxWidth": 2650});

        
            var i_frame_bacd8829b2c24f41addb928a97af767d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBSZWFsaXp6YXppb25lIGltcGlhbnRvIGRpIHJhZmZyZXNjYW1lbnRvIGUgcmljYW1iaW8gZCdhcmlhIHByZXNzbyBsYSBTY3VvbGEgUHJpbWFyaWEgZGkgTm92aSBkaSBNb2RlbmEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE5PVkkgREkgTU9ERU5BIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDgwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA2NjgxOTYuNDUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6926f2fb6ebe420facbae7ed98fc9710.setContent(i_frame_bacd8829b2c24f41addb928a97af767d);
        

        marker_8711baf8ff6a4c94912803ca13c2db1e.bindPopup(popup_6926f2fb6ebe420facbae7ed98fc9710)
        ;

        
    
    
            var marker_64a20964d5ff452f9c91ddeffe28203f = L.marker(
                [44.918182, 10.808569],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_251b572c41454705abd8b672c142d7fa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_64a20964d5ff452f9c91ddeffe28203f.setIcon(icon_251b572c41454705abd8b672c142d7fa);
        
    
        var popup_4340f0d4a08a41cabe751550c5285b49 = L.popup({"maxWidth": 2650});

        
            var i_frame_99e6554f791945098a8f45be060811ba = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBTY29sYXN0aWNhICdSLiBHaW9yZ2knIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxODM0NjMuMDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE4MzQ2My4wOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4340f0d4a08a41cabe751550c5285b49.setContent(i_frame_99e6554f791945098a8f45be060811ba);
        

        marker_64a20964d5ff452f9c91ddeffe28203f.bindPopup(popup_4340f0d4a08a41cabe751550c5285b49)
        ;

        
    
    
            var marker_5aed898e8d584fbdbdac5309d2a75fc1 = L.marker(
                [44.729547, 11.291255],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_f5004ffd4a5745799c7023f9eb0fb860 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_5aed898e8d584fbdbdac5309d2a75fc1.setIcon(icon_f5004ffd4a5745799c7023f9eb0fb860);
        
    
        var popup_885e7b095e0a4886a3e801068331dfbb = L.popup({"maxWidth": 2650});

        
            var i_frame_522164177d0b4e69b9ff2783d0c7378e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTY29sYXN0aWNvIFRhZGRpYSAtIGNvcnBvIGxhYm9yYXRvcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDEyMzYwMi4xMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTIzNjAyLjExIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_885e7b095e0a4886a3e801068331dfbb.setContent(i_frame_522164177d0b4e69b9ff2783d0c7378e);
        

        marker_5aed898e8d584fbdbdac5309d2a75fc1.bindPopup(popup_885e7b095e0a4886a3e801068331dfbb)
        ;

        
    
    
            var marker_6900f0d62f894fb8b32cceadcab84a2b = L.marker(
                [44.889984999999996, 11.415875999999999],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_92fec79cf3ad4d5ab51c348ddd00a8d3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_6900f0d62f894fb8b32cceadcab84a2b.setIcon(icon_92fec79cf3ad4d5ab51c348ddd00a8d3);
        
    
        var popup_850c3139fe3d41a899d4611850319ffc = L.popup({"maxWidth": 2650});

        
            var i_frame_cffd223a539b408c941ab620edc4be12 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJc3RpdHV0byBTY29sYXN0aWNvIFJpY2Npb2xpIE1vZGlnbGlhbmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTkyMjg5LjQ1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNzkzODYuNDcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_850c3139fe3d41a899d4611850319ffc.setContent(i_frame_cffd223a539b408c941ab620edc4be12);
        

        marker_6900f0d62f894fb8b32cceadcab84a2b.bindPopup(popup_850c3139fe3d41a899d4611850319ffc)
        ;

        
    
    
            var marker_5a9fcaa5cf2b4785a145ddb9c03755b4 = L.marker(
                [44.86612, 10.951413],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_c6a321374f324d6da1fea3171c3aad2c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_5a9fcaa5cf2b4785a145ddb9c03755b4.setIcon(icon_c6a321374f324d6da1fea3171c3aad2c);
        
    
        var popup_303b81b046354e3a9372255292680b35 = L.popup({"maxWidth": 2650});

        
            var i_frame_0397345aa85e4dafa75fa1f382375d67 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBVZmZpY2lvIFBvc3RhbGUgZGkgU2FudCdBbnRvbmlvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1MTg0My4yOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTE4NDMuMjkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_303b81b046354e3a9372255292680b35.setContent(i_frame_0397345aa85e4dafa75fa1f382375d67);
        

        marker_5a9fcaa5cf2b4785a145ddb9c03755b4.bindPopup(popup_303b81b046354e3a9372255292680b35)
        ;

        
    
    
            var marker_6b974333b81840a793336e7353653470 = L.marker(
                [44.819863, 11.492599],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_2402e64bdf3b488795d85c5e4330be59 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_6b974333b81840a793336e7353653470.setIcon(icon_2402e64bdf3b488795d85c5e4330be59);
        
    
        var popup_4e4c65f13c4946e0b2559b03ad0ee078 = L.popup({"maxWidth": 2650});

        
            var i_frame_9c7e0c7e8811444497896326629d5d3d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgTWF0ZXJuYSAnU3BhemlvIEJhbWJpbm8nIC0gZXggc2N1b2xhIGVsZW1lbnRhcmUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBPR0dJTyBSRU5BVElDTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxODQzNTYuNDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE4NDM1Ni40OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4e4c65f13c4946e0b2559b03ad0ee078.setContent(i_frame_9c7e0c7e8811444497896326629d5d3d);
        

        marker_6b974333b81840a793336e7353653470.bindPopup(popup_4e4c65f13c4946e0b2559b03ad0ee078)
        ;

        
    
    
            var marker_16906c1d54f14a6c99fc595ad76de277 = L.marker(
                [44.814695, 11.306792999999999],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_517003c374c54a808af6cf6665620e00 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_16906c1d54f14a6c99fc595ad76de277.setIcon(icon_517003c374c54a808af6cf6665620e00);
        
    
        var popup_a7baa8d8d519402d9d1bf4275c8c2dd3 = L.popup({"maxWidth": 2650});

        
            var i_frame_9146afc992d74cd2b216ee230b7952fb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gU3BvcnRpdm8gLSBTUE9HTElBVE9JIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzNzUxNS4xMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzc1MTUuMTIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a7baa8d8d519402d9d1bf4275c8c2dd3.setContent(i_frame_9146afc992d74cd2b216ee230b7952fb);
        

        marker_16906c1d54f14a6c99fc595ad76de277.bindPopup(popup_a7baa8d8d519402d9d1bf4275c8c2dd3)
        ;

        
    
    
            var marker_738cbcfdf85d42da8451586e965389e9 = L.marker(
                [44.921058, 10.802508999999999],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_cd3e488806d3403faa0af5b2851d7ca6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_738cbcfdf85d42da8451586e965389e9.setIcon(icon_cd3e488806d3403faa0af5b2851d7ca6);
        
    
        var popup_e60b58ddd8d64405bdc51726ca250f52 = L.popup({"maxWidth": 2650});

        
            var i_frame_8ac3d38f6eae445d9ccbdbf964dfe498 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBNYWduYW5pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA2MDk2My40NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNjA5NjMuNDQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e60b58ddd8d64405bdc51726ca250f52.setContent(i_frame_8ac3d38f6eae445d9ccbdbf964dfe498);
        

        marker_738cbcfdf85d42da8451586e965389e9.bindPopup(popup_e60b58ddd8d64405bdc51726ca250f52)
        ;

        
    
    
            var marker_733434753de846cd8e6f87292d7fc579 = L.marker(
                [44.818487, 10.936681],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_a9cd87736f104abb82a8230b61bce03e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_733434753de846cd8e6f87292d7fc579.setIcon(icon_a9cd87736f104abb82a8230b61bce03e);
        
    
        var popup_8549817a873d4f1a9cc6cf4b06d8120c = L.popup({"maxWidth": 2650});

        
            var i_frame_9538b8aa2a47412fb3f80a6c1d9b3c56 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gY29tdW5hbGUgIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA2MjI1NC41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA2MjI1NC41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8549817a873d4f1a9cc6cf4b06d8120c.setContent(i_frame_9538b8aa2a47412fb3f80a6c1d9b3c56);
        

        marker_733434753de846cd8e6f87292d7fc579.bindPopup(popup_8549817a873d4f1a9cc6cf4b06d8120c)
        ;

        
    
    
            var marker_e5100aa80b464c398c5029f383e7cb98 = L.marker(
                [44.916306, 10.809573],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_5708d55da2544986906bcea374647579 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_e5100aa80b464c398c5029f383e7cb98.setIcon(icon_5708d55da2544986906bcea374647579);
        
    
        var popup_13503e787b4d4bf1b4723ebbef63c3ce = L.popup({"maxWidth": 2650});

        
            var i_frame_042d95095173409f94c97e9466eb0077 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIHByb3RldHRhIC0gSUkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE1MDY5NC45NiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTUwNjk0Ljk2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_13503e787b4d4bf1b4723ebbef63c3ce.setContent(i_frame_042d95095173409f94c97e9466eb0077);
        

        marker_e5100aa80b464c398c5029f383e7cb98.bindPopup(popup_13503e787b4d4bf1b4723ebbef63c3ce)
        ;

        
    
    
            var marker_a9f4021a747f4bb6bc779e63e4f31455 = L.marker(
                [44.712983, 11.304952],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_bf785e3187c14dc6a3940eb9f83ba334 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_a9f4021a747f4bb6bc779e63e4f31455.setIcon(icon_bf785e3187c14dc6a3940eb9f83ba334);
        
    
        var popup_41ba05ac196f4c28958da6f41725f040 = L.popup({"maxWidth": 2650});

        
            var i_frame_bd723ce4f494456ab1182b2a29cfd870 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBMb2NhbGkgYWNjZXNzb3JpIGNhc2VybWEgY2FyYWJpbmllcmkgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDM4OTY0LjA2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzODk2NC4wNiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_41ba05ac196f4c28958da6f41725f040.setContent(i_frame_bd723ce4f494456ab1182b2a29cfd870);
        

        marker_a9f4021a747f4bb6bc779e63e4f31455.bindPopup(popup_41ba05ac196f4c28958da6f41725f040)
        ;

        
    
    
            var marker_452e52534fa149d5b975e403af6c801d = L.marker(
                [44.883185, 11.428484],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_02d28832dc2a43d7b529f6c3b36f5431 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_452e52534fa149d5b975e403af6c801d.setIcon(icon_02d28832dc2a43d7b529f6c3b36f5431);
        
    
        var popup_605dcf42125e461a97f85adff01fe65a = L.popup({"maxWidth": 2650});

        
            var i_frame_53ed4ce444b14edc866dd2fb9e996408 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCb2NjaW9maWxhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDEyMzQ2My4zOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgOTM3MTkuNDggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_605dcf42125e461a97f85adff01fe65a.setContent(i_frame_53ed4ce444b14edc866dd2fb9e996408);
        

        marker_452e52534fa149d5b975e403af6c801d.bindPopup(popup_605dcf42125e461a97f85adff01fe65a)
        ;

        
    
    
            var marker_685df8a5cde9417a82bf3e4d1c698dc8 = L.marker(
                [44.890073, 10.903948],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_366fda57ac214f1f83331bc4afa0aa3f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_685df8a5cde9417a82bf3e4d1c698dc8.setIcon(icon_366fda57ac214f1f83331bc4afa0aa3f);
        
    
        var popup_ded795d84cbb4603beb5f1509ef22ce9 = L.popup({"maxWidth": 2650});

        
            var i_frame_e4d7595cf2cc47b895045aaf9635b75d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvLCBDZW50cm8gRW1tYXVzIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMTM0MDguODMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDExMzQwOC44MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ded795d84cbb4603beb5f1509ef22ce9.setContent(i_frame_e4d7595cf2cc47b895045aaf9635b75d);
        

        marker_685df8a5cde9417a82bf3e4d1c698dc8.bindPopup(popup_ded795d84cbb4603beb5f1509ef22ce9)
        ;

        
    
    
            var marker_063132529719458e9a380f1924dcef28 = L.marker(
                [44.858676, 10.997898],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_0cd2ee383f284c009c8bd6172e84d0cf = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_063132529719458e9a380f1924dcef28.setIcon(icon_0cd2ee383f284c009c8bd6172e84d0cf);
        
    
        var popup_1cde54d9d3574159931af2bf156711e8 = L.popup({"maxWidth": 2650});

        
            var i_frame_e05367144d9f4908aade3c81b2ff1e47 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBEaXN2ZXRybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxOTY5ODYuOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTU1ODMyLjU1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1cde54d9d3574159931af2bf156711e8.setContent(i_frame_e05367144d9f4908aade3c81b2ff1e47);
        

        marker_063132529719458e9a380f1924dcef28.bindPopup(popup_1cde54d9d3574159931af2bf156711e8)
        ;

        
    
    
            var marker_7bd2d7af6a3146d2963b8d5eaccca675 = L.marker(
                [44.865763, 11.274211],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_2aaee1d03a4c469dbdc942d63155cd09 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_7bd2d7af6a3146d2963b8d5eaccca675.setIcon(icon_2aaee1d03a4c469dbdc942d63155cd09);
        
    
        var popup_917c39e271f649cb8ee57b5c7db7550e = L.popup({"maxWidth": 2650});

        
            var i_frame_e4129b00a22b446dbfcd37f37504c166 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYW5hbGUgYWQgdXNvIHByb21pc2N1byA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgRklOQUxFIEVNSUxJQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzNzg0NS4xMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzc4NDUuMTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_917c39e271f649cb8ee57b5c7db7550e.setContent(i_frame_e4129b00a22b446dbfcd37f37504c166);
        

        marker_7bd2d7af6a3146d2963b8d5eaccca675.bindPopup(popup_917c39e271f649cb8ee57b5c7db7550e)
        ;

        
    
    
            var marker_7c6e4248614a4fb1839854adbb4585f4 = L.marker(
                [44.69773, 11.172527],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_a3d59240b0cc4f8db3e5a0cd55b1e64e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_7c6e4248614a4fb1839854adbb4585f4.setIcon(icon_a3d59240b0cc4f8db3e5a0cd55b1e64e);
        
    
        var popup_1b9b6d11d3ea4aab900fb2e112bd46b7 = L.popup({"maxWidth": 2650});

        
            var i_frame_2558c35e44e5414c97a62157422eb8ba = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBpZHJvdm9ybyBwZXIgaXJyaWdhemlvbmUgc2JvY2NvIFplbmEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMzY3OTAuMjkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDM2NzkwLjI5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1b9b6d11d3ea4aab900fb2e112bd46b7.setContent(i_frame_2558c35e44e5414c97a62157422eb8ba);
        

        marker_7c6e4248614a4fb1839854adbb4585f4.bindPopup(popup_1b9b6d11d3ea4aab900fb2e112bd46b7)
        ;

        
    
    
            var marker_b8405989034449eb859953db7046008d = L.marker(
                [44.824515000000005, 11.287616],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_79856e279452433ca4c8800eaeeedde9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_b8405989034449eb859953db7046008d.setIcon(icon_79856e279452433ca4c8800eaeeedde9);
        
    
        var popup_056b9d1f0fb441808a2a04ea9e969c00 = L.popup({"maxWidth": 2650});

        
            var i_frame_391ced044e114b87b9d6d7308ddec863 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGlhdmljYSBlbWlzc2FyaWEgRm9zY2FnbGlhIGRlbCBDQ0FBIEFsdGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEZJTkFMRSBFTUlMSUEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTg5MTcuNjYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE4OTE3LjY2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_056b9d1f0fb441808a2a04ea9e969c00.setContent(i_frame_391ced044e114b87b9d6d7308ddec863);
        

        marker_b8405989034449eb859953db7046008d.bindPopup(popup_056b9d1f0fb441808a2a04ea9e969c00)
        ;

        
    
    
            var marker_4419e820878a4ce89bc60777a6c21797 = L.marker(
                [44.876575, 11.015544],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_6ccdef44f0314471939034a6d1e28c63 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_4419e820878a4ce89bc60777a6c21797.setIcon(icon_6ccdef44f0314471939034a6d1e28c63);
        
    
        var popup_04889c14db334c93a3045bb571d4a755 = L.popup({"maxWidth": 2650});

        
            var i_frame_e0559b4a014c4732849de9106066e178 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBwbHV2aXJyaWd1byBDb25jb3JkaWEgc3VkICh0dWJhemlvbmkpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNDkyNzA0Ljk1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0OTI3MDQuOTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_04889c14db334c93a3045bb571d4a755.setContent(i_frame_e0559b4a014c4732849de9106066e178);
        

        marker_4419e820878a4ce89bc60777a6c21797.bindPopup(popup_04889c14db334c93a3045bb571d4a755)
        ;

        
    
    
            var marker_57c1754c79cc4c6ab8d29692d80733c1 = L.marker(
                [44.914814, 11.375616],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_c1801d1994f94cc4858d90f9a56931b7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_57c1754c79cc4c6ab8d29692d80733c1.setIcon(icon_c1801d1994f94cc4858d90f9a56931b7);
        
    
        var popup_0786f05fffa84db2bdd021bb8a3e8d66 = L.popup({"maxWidth": 2650});

        
            var i_frame_b1948e21854f4a6aa2f74b8659a64a4a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb2xvIGlkcmF1bGljbyBDaXBvbGxldHRlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDEzODc4LjI5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMzg3OC4yOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0786f05fffa84db2bdd021bb8a3e8d66.setContent(i_frame_b1948e21854f4a6aa2f74b8659a64a4a);
        

        marker_57c1754c79cc4c6ab8d29692d80733c1.bindPopup(popup_0786f05fffa84db2bdd021bb8a3e8d66)
        ;

        
    
    
            var marker_ee5ba92d99e849c1b8e9922adfc45347 = L.marker(
                [44.92078, 10.790525],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_d1be93bc15034e73adceeeee4d5b11f3 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_ee5ba92d99e849c1b8e9922adfc45347.setIcon(icon_d1be93bc15034e73adceeeee4d5b11f3);
        
    
        var popup_84e8477d47434fd9bd7cb9983761da2e = L.popup({"maxWidth": 2650});

        
            var i_frame_4ef2f862798b402d8fb23821b6434f45 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBjYXNhIGRpIEd1YXJkaWEgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFJFR0dJT0xPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDY4Nzc5LjI4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA2ODc3OS4yOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_84e8477d47434fd9bd7cb9983761da2e.setContent(i_frame_4ef2f862798b402d8fb23821b6434f45);
        

        marker_ee5ba92d99e849c1b8e9922adfc45347.bindPopup(popup_84e8477d47434fd9bd7cb9983761da2e)
        ;

        
    
    
            var marker_3e2dbc3754364acea6334ed3664a13fd = L.marker(
                [44.835871000000004, 11.36266],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_c6e0146b41cd4277bf6343310e6a9812 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_3e2dbc3754364acea6334ed3664a13fd.setIcon(icon_c6e0146b41cd4277bf6343310e6a9812);
        
    
        var popup_aec43224c8044ecd9f95e5c264fe9235 = L.popup({"maxWidth": 2650});

        
            var i_frame_3ee7eab280f94cfda58449a33a54b42f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBkaSBDYXN1bWFybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNTExNDgyLjc1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA0NjkxNzIuMjEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aec43224c8044ecd9f95e5c264fe9235.setContent(i_frame_3ee7eab280f94cfda58449a33a54b42f);
        

        marker_3e2dbc3754364acea6334ed3664a13fd.bindPopup(popup_aec43224c8044ecd9f95e5c264fe9235)
        ;

        
    
    
            var marker_f148a31536634d59bd76a1e8b3d8134c = L.marker(
                [44.849722, 11.114869],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_999f82a397414fb08da008450e37f1dc = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_f148a31536634d59bd76a1e8b3d8134c.setIcon(icon_999f82a397414fb08da008450e37f1dc);
        
    
        var popup_08c199b0509e4f66a0abadb7b515800f = L.popup({"maxWidth": 2650});

        
            var i_frame_d6cfb10b697c472ab924e4276bb02e79 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGRpIFZpYSBHYWxlYXp6YSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDQwNTM1Ni4zNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNDA1MzU2LjM0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_08c199b0509e4f66a0abadb7b515800f.setContent(i_frame_d6cfb10b697c472ab924e4276bb02e79);
        

        marker_f148a31536634d59bd76a1e8b3d8134c.bindPopup(popup_08c199b0509e4f66a0abadb7b515800f)
        ;

        
    
    
            var marker_bce4da7166044740b4c93ca092467798 = L.marker(
                [44.713629, 11.310433999999999],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_c1d3dc03b5d047fc8e9d0fb48278c504 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_bce4da7166044740b4c93ca092467798.setIcon(icon_c1d3dc03b5d047fc8e9d0fb48278c504);
        
    
        var popup_6861e6c7889d42b193d80bc54b192711 = L.popup({"maxWidth": 2650});

        
            var i_frame_186c84de3c784d0a828e7a6c08e75e6e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBTUy4gVHJpbml0w6AgKGUgY2hpZXNhKSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUElFVkUgREkgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTcxNzM0LjQyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMzU0NDMuNyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_6861e6c7889d42b193d80bc54b192711.setContent(i_frame_186c84de3c784d0a828e7a6c08e75e6e);
        

        marker_bce4da7166044740b4c93ca092467798.bindPopup(popup_6861e6c7889d42b193d80bc54b192711)
        ;

        
    
    
            var marker_3d1351a43f7d44fab2a210ddba8ed125 = L.marker(
                [44.918867999999996, 11.099446],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_343402a44a4d4979a658a7589f6a5a4e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_3d1351a43f7d44fab2a210ddba8ed125.setIcon(icon_343402a44a4d4979a658a7589f6a5a4e);
        
    
        var popup_b98d460000fa4d078f2f7bb1c7ea52e3 = L.popup({"maxWidth": 2650});

        
            var i_frame_3ca9852d02db4300a4c8ced4f8de8c2a = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBRdWFyYW50b2xpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTQwMjUyLjMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE0MDI1Mi4zIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b98d460000fa4d078f2f7bb1c7ea52e3.setContent(i_frame_3ca9852d02db4300a4c8ced4f8de8c2a);
        

        marker_3d1351a43f7d44fab2a210ddba8ed125.bindPopup(popup_b98d460000fa4d078f2f7bb1c7ea52e3)
        ;

        
    
    
            var marker_47edacda7f064bbf805198e11a256bb4 = L.marker(
                [44.836528, 11.140972999999999],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_82165331072b4684b11f086652c22bd4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_47edacda7f064bbf805198e11a256bb4.setIcon(icon_82165331072b4684b11f086652c22bd4);
        
    
        var popup_1b5f2a80870c47d99abf18b054c82108 = L.popup({"maxWidth": 2650});

        
            var i_frame_ed0b9a7aabe441dfa10cbc819db9729c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBbXBsaWFtZW50byBiaWJsaW90ZWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMzIyMzYxLjA0IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzMjIzNjEuMDQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1b5f2a80870c47d99abf18b054c82108.setContent(i_frame_ed0b9a7aabe441dfa10cbc819db9729c);
        

        marker_47edacda7f064bbf805198e11a256bb4.bindPopup(popup_1b5f2a80870c47d99abf18b054c82108)
        ;

        
    
    
            var marker_2abe0f7e2f27447780be86f9ca2732a5 = L.marker(
                [44.838514, 11.13818],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_5443e619719744bbb2f7b4a1201791f9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_2abe0f7e2f27447780be86f9ca2732a5.setIcon(icon_5443e619719744bbb2f7b4a1201791f9);
        
    
        var popup_90bd109974004d7898d72346d04d7102 = L.popup({"maxWidth": 2650});

        
            var i_frame_3b55980232f8419485a4ef13c63f8748 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gc3BvcnRpdm8gY29tdW5hbGUgLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMzczMjI3Ljc2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAzNzMyMjcuNzYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_90bd109974004d7898d72346d04d7102.setContent(i_frame_3b55980232f8419485a4ef13c63f8748);
        

        marker_2abe0f7e2f27447780be86f9ca2732a5.bindPopup(popup_90bd109974004d7898d72346d04d7102)
        ;

        
    
    
            var marker_40570a5341bb493ca9ea857f4ad1d9b9 = L.marker(
                [44.946104999999996, 11.280998],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_4de6375f187241ff9e097dfef2ec0ea7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_40570a5341bb493ca9ea857f4ad1d9b9.setIcon(icon_4de6375f187241ff9e097dfef2ec0ea7);
        
    
        var popup_3f9e20c3a87942e5beaf5672341a99d4 = L.popup({"maxWidth": 2650});

        
            var i_frame_9706664ea0324270bb7e4169367c81e4 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMjQ4NjcuNTEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEyNDg2Ny41MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3f9e20c3a87942e5beaf5672341a99d4.setContent(i_frame_9706664ea0324270bb7e4169367c81e4);
        

        marker_40570a5341bb493ca9ea857f4ad1d9b9.bindPopup(popup_3f9e20c3a87942e5beaf5672341a99d4)
        ;

        
    
    
            var marker_f3c53fafff9d42068f207254be5e1727 = L.marker(
                [44.888307, 11.318349000000001],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_dc8b04a332d64779aca8521f47980323 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_f3c53fafff9d42068f207254be5e1727.setIcon(icon_dc8b04a332d64779aca8521f47980323);
        
    
        var popup_15fd1e1e11e94ca1b8aa1435cf43f197 = L.popup({"maxWidth": 2650});

        
            var i_frame_8bb2edaac94d415397a2bad1ce28ab41 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBTY29ydGljaGlubyBjaW1pdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAyMDQ4OTkuNjggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDIwNDg5OS42OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_15fd1e1e11e94ca1b8aa1435cf43f197.setContent(i_frame_8bb2edaac94d415397a2bad1ce28ab41);
        

        marker_f3c53fafff9d42068f207254be5e1727.bindPopup(popup_15fd1e1e11e94ca1b8aa1435cf43f197)
        ;

        
    
    
            var marker_ef32363aa74d49c5a03fa04382fb0c8e = L.marker(
                [44.713848999999996, 11.307563],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_8008202272f44b59ad407e75cf14f7f7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_ef32363aa74d49c5a03fa04382fb0c8e.setIcon(icon_8008202272f44b59ad407e75cf14f7f7);
        
    
        var popup_8f93bc2c7aee4a47806c8c9fc5b6f11f = L.popup({"maxWidth": 2650});

        
            var i_frame_9f3f4e2237f046468bd65df3e9b8ab82 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBhcmNoaXZpbyBlIG1hZ2F6emlubyBjb211bmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUElFVkUgREkgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjY0ODYuMzYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI2NDg2LjM2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8f93bc2c7aee4a47806c8c9fc5b6f11f.setContent(i_frame_9f3f4e2237f046468bd65df3e9b8ab82);
        

        marker_ef32363aa74d49c5a03fa04382fb0c8e.bindPopup(popup_8f93bc2c7aee4a47806c8c9fc5b6f11f)
        ;

        
    
    
            var marker_3d523149783d45b589280f3988bda6b2 = L.marker(
                [44.922876, 10.758725],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_42adf9ac503448ba966e1171b30570ae = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_3d523149783d45b589280f3988bda6b2.setIcon(icon_42adf9ac503448ba966e1171b30570ae);
        
    
        var popup_e3d7424d07414350b1613ef7c609cc24 = L.popup({"maxWidth": 2650});

        
            var i_frame_49d8c67af99c444aa791daff93bad1e8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbnRhIE1hcmlhIEFubnVuY2lhdGEgKE1hZG9ubmEgZGVsbG8gU3Bpbm8pIGNoaWVzYSBjb24gY2FtcGFuaWxlIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA4Mzk0ODguNzQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDgzOTQ4OC43NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e3d7424d07414350b1613ef7c609cc24.setContent(i_frame_49d8c67af99c444aa791daff93bad1e8);
        

        marker_3d523149783d45b589280f3988bda6b2.bindPopup(popup_e3d7424d07414350b1613ef7c609cc24)
        ;

        
    
    
            var marker_aa3336487ecf444b9779a264c68ff044 = L.marker(
                [44.796991999999996, 11.277514],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_9a251b5b1cbf4914a7492d793c7e425b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_aa3336487ecf444b9779a264c68ff044.setIcon(icon_9a251b5b1cbf4914a7492d793c7e425b);
        
    
        var popup_885253af0827477aa77c257f7e973d57 = L.popup({"maxWidth": 2650});

        
            var i_frame_b8609adf1eb241488db5c314b74e4343 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gTWFyaWEgZGkgR2FsZWF6emEgUGVwb2xpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDU0NDQ4OS4zOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTQ0NDg5LjM5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_885253af0827477aa77c257f7e973d57.setContent(i_frame_b8609adf1eb241488db5c314b74e4343);
        

        marker_aa3336487ecf444b9779a264c68ff044.bindPopup(popup_885253af0827477aa77c257f7e973d57)
        ;

        
    
    
            var marker_82e1401eea1e4ba5a98843cf4f97880d = L.marker(
                [44.762227, 11.472827],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_a42f8e67c7684cde99f2d5a8f84e18aa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_82e1401eea1e4ba5a98843cf4f97880d.setIcon(icon_a42f8e67c7684cde99f2d5a8f84e18aa);
        
    
        var popup_f59e6ac6f98c4e78bd0760b7b7a0bfdf = L.popup({"maxWidth": 2650});

        
            var i_frame_aa190d488d934b77855ddadaf8a531d0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1pY2hlbGUgQXJjYW5nZWxvIChhYmJhemlhbGUpIGNhbm9uaWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBQT0dHSU8gUkVOQVRJQ08gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgOTgwNDguOTIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDk4MDQ4LjkyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f59e6ac6f98c4e78bd0760b7b7a0bfdf.setContent(i_frame_aa190d488d934b77855ddadaf8a531d0);
        

        marker_82e1401eea1e4ba5a98843cf4f97880d.bindPopup(popup_f59e6ac6f98c4e78bd0760b7b7a0bfdf)
        ;

        
    
    
            var marker_58098e7cb57349b8b3a74ebf6c0b0c59 = L.marker(
                [44.763874, 11.288419000000001],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_21f1592b78284c0aa54b266388f6e828 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_58098e7cb57349b8b3a74ebf6c0b0c59.setIcon(icon_21f1592b78284c0aa54b266388f6e828);
        
    
        var popup_f252132a64144dd68723c8116915fabb = L.popup({"maxWidth": 2650});

        
            var i_frame_5ed83c48f96347f68250f2e616e18bd8 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIFNlYmFzdGlhbm8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE0NzIwMTYuNzMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEzNTc0NjAuOTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f252132a64144dd68723c8116915fabb.setContent(i_frame_5ed83c48f96347f68250f2e616e18bd8);
        

        marker_58098e7cb57349b8b3a74ebf6c0b0c59.bindPopup(popup_f252132a64144dd68723c8116915fabb)
        ;

        
    
    
            var marker_f5fca588de0745219812fcdb89be0ce8 = L.marker(
                [44.724905, 11.288076],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_f3d9a2aeb6ac4a2cb9383db6a96badd6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_f5fca588de0745219812fcdb89be0ce8.setIcon(icon_f3d9a2aeb6ac4a2cb9383db6a96badd6);
        
    
        var popup_e2b37787faf9437d8e74e3c6c067d150 = L.popup({"maxWidth": 2650});

        
            var i_frame_8eb2cab02f144a06a045f741e5ba48d0 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTYW50dWFyaW8gZGVsbGEgUm9jY2EgL0JlYXRhIHZlcmdpbmUgZGVsbGEgUm9jY2EgLyBnacOgIGRlbGxvIFNwaXJpdG8gU2FudG8gZSBjYW1wYW5pbGUgZSBwYXJ0ZSBkZWwgbW9uYXN0ZXJvIGNvbnZlbnRvL21vbmFzdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjkwNDA3LjE4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyOTA0MDcuMTggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_e2b37787faf9437d8e74e3c6c067d150.setContent(i_frame_8eb2cab02f144a06a045f741e5ba48d0);
        

        marker_f5fca588de0745219812fcdb89be0ce8.bindPopup(popup_e2b37787faf9437d8e74e3c6c067d150)
        ;

        
    
    
            var marker_1cdb93c295264e9f80b64406e6414740 = L.marker(
                [44.72779, 11.288696],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_4de290a3410c45c9a841fca8c9f18834 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_1cdb93c295264e9f80b64406e6414740.setIcon(icon_4de290a3410c45c9a841fca8c9f18834);
        
    
        var popup_09b7457415c042b781394b20a67feff0 = L.popup({"maxWidth": 2650});

        
            var i_frame_577057c409fc4b908655306cd71a900c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb2xsZWdpYXRhIGRpIFMuIEJpYWdpbyBlIHBlcnRpbmVuemUgY2hpZXNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA4Nzg3OTQuMTQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDg3ODc5NC4xNCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_09b7457415c042b781394b20a67feff0.setContent(i_frame_577057c409fc4b908655306cd71a900c);
        

        marker_1cdb93c295264e9f80b64406e6414740.bindPopup(popup_09b7457415c042b781394b20a67feff0)
        ;

        
    
    
            var marker_bd1cd6cf3f1e456881695564e234e59d = L.marker(
                [44.733824, 11.282005999999999],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_80bc61509ce7469881dc0b7fbb995b20 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_bd1cd6cf3f1e456881695564e234e59d.setIcon(icon_80bc61509ce7469881dc0b7fbb995b20);
        
    
        var popup_57209f746e464f5dac4c70f21303a739 = L.popup({"maxWidth": 2650});

        
            var i_frame_b9b1afcedf484354b3bfc22d31dc552e = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFNhbnRhIE1hcmlhIGUgU2FudCdJc2lkb3JvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1MzE2MTIuNTUgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDUzMTYxMi41NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_57209f746e464f5dac4c70f21303a739.setContent(i_frame_b9b1afcedf484354b3bfc22d31dc552e);
        

        marker_bd1cd6cf3f1e456881695564e234e59d.bindPopup(popup_57209f746e464f5dac4c70f21303a739)
        ;

        
    
    
            var marker_161827634d144d1bb8f6be2dcb715bf1 = L.marker(
                [44.725603, 11.290725],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_93b0b5223dda4994997a13810902f2b8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_161827634d144d1bb8f6be2dcb715bf1.setIcon(icon_93b0b5223dda4994997a13810902f2b8);
        
    
        var popup_b030f79d8a5a4284aed2f8829505c257 = L.popup({"maxWidth": 2650});

        
            var i_frame_d9a74f7e841745bca06932fae5b44d45 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgZGkgUy4gUm9jY28gZSBTZWJhc3RpYW5vIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxNjk1NTUuODQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE2OTU1NS44NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b030f79d8a5a4284aed2f8829505c257.setContent(i_frame_d9a74f7e841745bca06932fae5b44d45);
        

        marker_161827634d144d1bb8f6be2dcb715bf1.bindPopup(popup_b030f79d8a5a4284aed2f8829505c257)
        ;

        
    
    
            var marker_6043bd65dd0b4bb89cef5d81a1d8dc5e = L.marker(
                [44.72635, 11.291952],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_483a7472a1354286a24ddcd56b6808ec = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_6043bd65dd0b4bb89cef5d81a1d8dc5e.setIcon(icon_483a7472a1354286a24ddcd56b6808ec);
        
    
        var popup_76b76fb717e34f88a050e8edb52a5971 = L.popup({"maxWidth": 2650});

        
            var i_frame_efe1c758a49c4ea690ff933b43bd9c31 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBQaWV0w6AgLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDRU5UTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAzNjk5MS40NyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMzY5OTEuNDcgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_76b76fb717e34f88a050e8edb52a5971.setContent(i_frame_efe1c758a49c4ea690ff933b43bd9c31);
        

        marker_6043bd65dd0b4bb89cef5d81a1d8dc5e.bindPopup(popup_76b76fb717e34f88a050e8edb52a5971)
        ;

        
    
    
            var marker_5d72c23de3064b6faa2bf70db7be4ece = L.marker(
                [44.807567, 11.343466000000001],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_e477d22fe1d844c8bf1c359d725ea83f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_5d72c23de3064b6faa2bf70db7be4ece.setIcon(icon_e477d22fe1d844c8bf1c359d725ea83f);
        
    
        var popup_0880cf539a4d4369a7585dc1695215b7 = L.popup({"maxWidth": 2650});

        
            var i_frame_78c3a50f3a94491080ea455ed51b9482 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIE1hcnRpbm8gZGkgVG91cnMgb3JhdG9yaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDgxODA1LjQzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA4MTgwNS40MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0880cf539a4d4369a7585dc1695215b7.setContent(i_frame_78c3a50f3a94491080ea455ed51b9482);
        

        marker_5d72c23de3064b6faa2bf70db7be4ece.bindPopup(popup_0880cf539a4d4369a7585dc1695215b7)
        ;

        
    
    
            var marker_c1841bb671404fb88fba64d7eee55480 = L.marker(
                [44.741316999999995, 11.28427],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_828e1f592e754fa2b8dfaf7f7d8e9ed2 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_c1841bb671404fb88fba64d7eee55480.setIcon(icon_828e1f592e754fa2b8dfaf7f7d8e9ed2);
        
    
        var popup_f0ff340bf8af44bb928cbcddb0b959c6 = L.popup({"maxWidth": 2650});

        
            var i_frame_bec264d0b6684feb9fddfd9d0a911cf3 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBDcm9jZXR0YS9PcmF0b3JpbyBkaSBTLiBDcm9jZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0VOVE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTg3NTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTg3NTAuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f0ff340bf8af44bb928cbcddb0b959c6.setContent(i_frame_bec264d0b6684feb9fddfd9d0a911cf3);
        

        marker_c1841bb671404fb88fba64d7eee55480.bindPopup(popup_f0ff340bf8af44bb928cbcddb0b959c6)
        ;

        
    
    
            var marker_f8b96060f30a42249b9195f116c478d9 = L.marker(
                [44.7616, 11.003832000000001],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_de599838805e466c934dbe14547133e5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_f8b96060f30a42249b9195f116c478d9.setIcon(icon_de599838805e466c934dbe14547133e5);
        
    
        var popup_1b9e297acc3b462eb87f379cf526d272 = L.popup({"maxWidth": 2650});

        
            var i_frame_0b6dc43821fa4b2394f1b87d8a545611 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaGllc2EgcGFycm9jY2hpYWxlIGRpIFMuIExvcmVuem8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFNBTiBQUk9TUEVSTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAyMjQ0OTQuNzEgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDIyNDQ5NC43MSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_1b9e297acc3b462eb87f379cf526d272.setContent(i_frame_0b6dc43821fa4b2394f1b87d8a545611);
        

        marker_f8b96060f30a42249b9195f116c478d9.bindPopup(popup_1b9e297acc3b462eb87f379cf526d272)
        ;

        
    
    
            var marker_fd5aff9a26ea449f91eb6fd603c8e22d = L.marker(
                [44.87795, 11.409168],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_02f717cabf5142d79db88a4d6dfbc696 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_fd5aff9a26ea449f91eb6fd603c8e22d.setIcon(icon_02f717cabf5142d79db88a4d6dfbc696);
        
    
        var popup_de5a7636c0524b23b09c980b7661a42f = L.popup({"maxWidth": 2650});

        
            var i_frame_958b19eeb5734a11b8ca45cb06038800 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBGYWJicmljYXRvIGFiaXRhdGl2byBjL28gYWxsJ2ltcGlhbnRvIGlkcm92b3JvIEJvbmRlbm8tUGFsYXRhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI1OTA1LjYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI1OTA1LjYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_de5a7636c0524b23b09c980b7661a42f.setContent(i_frame_958b19eeb5734a11b8ca45cb06038800);
        

        marker_fd5aff9a26ea449f91eb6fd603c8e22d.bindPopup(popup_de5a7636c0524b23b09c980b7661a42f)
        ;

        
    
    
            var marker_584d52705fdb4d5b9e34de976089faee = L.marker(
                [44.922346999999995, 10.858755],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_ebc9bec684814781a063f213ed4d9a35 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_584d52705fdb4d5b9e34de976089faee.setIcon(icon_ebc9bec684814781a063f213ed4d9a35);
        
    
        var popup_0659bb8fa7354d73906ab614fcb44481 = L.popup({"maxWidth": 2650});

        
            var i_frame_7094f698ae274d8abb21d5ee418c3aeb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTEyNTQwLjkzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxMTI1NDAuOTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0659bb8fa7354d73906ab614fcb44481.setContent(i_frame_7094f698ae274d8abb21d5ee418c3aeb);
        

        marker_584d52705fdb4d5b9e34de976089faee.bindPopup(popup_0659bb8fa7354d73906ab614fcb44481)
        ;

        
    
    
            var marker_1a508dfd4acc44e8b5d87db477cf1667 = L.marker(
                [44.92242, 10.766716],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_32aad4b322d447ffb5cf17a58a52210e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_1a508dfd4acc44e8b5d87db477cf1667.setIcon(icon_32aad4b322d447ffb5cf17a58a52210e);
        
    
        var popup_b82f0cb7588e4b34b7e869211e45bade = L.popup({"maxWidth": 2650});

        
            var i_frame_c17c07960dd6498bae9cfbbab4912a5f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gY2l2aWNvLW1lZGljbyBjb211bmFsZSAoZXggc2N1b2xlIGVsZW1lbnRhcmkpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBSRUdHSU9MTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0NzI4MTQuODggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDQ3MjgxNC44OCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b82f0cb7588e4b34b7e869211e45bade.setContent(i_frame_c17c07960dd6498bae9cfbbab4912a5f);
        

        marker_1a508dfd4acc44e8b5d87db477cf1667.bindPopup(popup_b82f0cb7588e4b34b7e869211e45bade)
        ;

        
    
    
            var marker_b2b072c3aa1546dbb77dc7efdc209031 = L.marker(
                [44.877897, 11.410433],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_bd5e8a647c554d50907d0032e76b3640 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_b2b072c3aa1546dbb77dc7efdc209031.setIcon(icon_bd5e8a647c554d50907d0032e76b3640);
        
    
        var popup_403a5b90829a4ce1a2935e2067402345 = L.popup({"maxWidth": 2650});

        
            var i_frame_c10a1d9729c24ac29f7017b70b519a06 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBJbXBpYW50byBpZHJvdm9ybyBCb25kZW5vLVBhbGF0YSAtIEJhY2lubyBkaSBjYWxtYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxOTgyOTIuMCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTk4MjkyLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_403a5b90829a4ce1a2935e2067402345.setContent(i_frame_c10a1d9729c24ac29f7017b70b519a06);
        

        marker_b2b072c3aa1546dbb77dc7efdc209031.bindPopup(popup_403a5b90829a4ce1a2935e2067402345)
        ;

        
    
    
            var marker_7f33e0f55b0940ebbb920a1e9a549908 = L.marker(
                [44.868506, 11.390478],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_42d86eb90453429ab69a6f8473f74d26 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_7f33e0f55b0940ebbb920a1e9a549908.setIcon(icon_42d86eb90453429ab69a6f8473f74d26);
        
    
        var popup_c8e38de451044f71836d07abb49c4698 = L.popup({"maxWidth": 2650});

        
            var i_frame_aa050006112345c693e1a576760c19ff = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCYWNpbm8gZGkgY2FsbWEgSW1waWFudG8gU2FudGEgQmlhbmNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBCT05ERU5PIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE1MzM4MC41OSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTUzMzgwLjU5IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_c8e38de451044f71836d07abb49c4698.setContent(i_frame_aa050006112345c693e1a576760c19ff);
        

        marker_7f33e0f55b0940ebbb920a1e9a549908.bindPopup(popup_c8e38de451044f71836d07abb49c4698)
        ;

        
    
    
            var marker_60d9f07153964af99690e90dfb08f779 = L.marker(
                [44.83911, 11.140396],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_fc50d900d7c4414eb85adee21e04a675 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_60d9f07153964af99690e90dfb08f779.setIcon(icon_fc50d900d7c4414eb85adee21e04a675);
        
    
        var popup_50497ceddec7441cb42e8e87e689f87c = L.popup({"maxWidth": 2650});

        
            var i_frame_6bca0d7dc3364b56ba3bdc258e00c387 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNb251bWVudG8gYWkgY2FkdXRpIGRlbGxhIHByaW1hIGd1ZXJyYSBtb25kaWFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgU0FOIEZFTElDRSBTVUwgUEFOQVJPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE0NjU0Ni4yOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMTQ2NTQ2LjI4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_50497ceddec7441cb42e8e87e689f87c.setContent(i_frame_6bca0d7dc3364b56ba3bdc258e00c387);
        

        marker_60d9f07153964af99690e90dfb08f779.bindPopup(popup_50497ceddec7441cb42e8e87e689f87c)
        ;

        
    
    
            var marker_05682956d52e4eae998095c6ddca9b49 = L.marker(
                [44.843136, 10.956078999999999],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_a4582fc3c3fa4fd58b3993564013c996 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_05682956d52e4eae998095c6ddca9b49.setIcon(icon_a4582fc3c3fa4fd58b3993564013c996);
        
    
        var popup_5c42f41b84dc4729b8fbb56639083a7c = L.popup({"maxWidth": 2650});

        
            var i_frame_91400ee32140456b88b1d2699059ebff = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBsb2NhbGl0w6AgUm92ZXJldG8gKHBhcnRlIHN0b3JpY2EpIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBOT1ZJIERJIE1PREVOQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA0OTYzMTYuMDkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDQ5NjMxNi4wOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_5c42f41b84dc4729b8fbb56639083a7c.setContent(i_frame_91400ee32140456b88b1d2699059ebff);
        

        marker_05682956d52e4eae998095c6ddca9b49.bindPopup(popup_5c42f41b84dc4729b8fbb56639083a7c)
        ;

        
    
    
            var marker_7922486176de43a6a36ce45fb25aadad = L.marker(
                [44.835865999999996, 11.030046],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_472e2556d9b84aeab23e9c24c503d928 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_7922486176de43a6a36ce45fb25aadad.setIcon(icon_472e2556d9b84aeab23e9c24c503d928);
        
    
        var popup_f51f02d91c29492489db6c857afbf248 = L.popup({"maxWidth": 2650});

        
            var i_frame_afb0bf275e5e43ebb872cfb27428e454 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBTY3VvbGEgZWxlbWVudGFyZSAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENBVkVaWk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNjcwMzAwLjkzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA2NzAzMDAuOTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f51f02d91c29492489db6c857afbf248.setContent(i_frame_afb0bf275e5e43ebb872cfb27428e454);
        

        marker_7922486176de43a6a36ce45fb25aadad.bindPopup(popup_f51f02d91c29492489db6c857afbf248)
        ;

        
    
    
            var marker_0ebd0c888851428e91cc8b138228616f = L.marker(
                [44.834252, 11.034133],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_c57adabfd3e14763b968006c8a93ad03 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_0ebd0c888851428e91cc8b138228616f.setIcon(icon_c57adabfd3e14763b968006c8a93ad03);
        
    
        var popup_b2a6782e154e42b186a00ba54b97c86e = L.popup({"maxWidth": 2650});

        
            var i_frame_da9401a2547045fc90e9b248f0e45426 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBjZW50cmFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQ0FWRVpaTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA1MDU5OS4xMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTA1OTkuMTMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b2a6782e154e42b186a00ba54b97c86e.setContent(i_frame_da9401a2547045fc90e9b248f0e45426);
        

        marker_0ebd0c888851428e91cc8b138228616f.bindPopup(popup_b2a6782e154e42b186a00ba54b97c86e)
        ;

        
    
    
            var marker_74917cc5f9ed4eddba57c5b3d5eb5968 = L.marker(
                [44.846696, 11.019822],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_85986d6a42774e83a92ad0da895c4952 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_74917cc5f9ed4eddba57c5b3d5eb5968.setIcon(icon_85986d6a42774e83a92ad0da895c4952);
        
    
        var popup_51d6be070f704dceb6a632fac9a6e89b = L.popup({"maxWidth": 2650});

        
            var i_frame_a7c374ddf2d743a2834de3eac7a731aa = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBPcmF0b3JpbyBkZWxsYSBHYXZpb2xhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI3OTg0LjYzIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAyNzk4NC42MyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_51d6be070f704dceb6a632fac9a6e89b.setContent(i_frame_a7c374ddf2d743a2834de3eac7a731aa);
        

        marker_74917cc5f9ed4eddba57c5b3d5eb5968.bindPopup(popup_51d6be070f704dceb6a632fac9a6e89b)
        ;

        
    
    
            var marker_d4c260f62204423ea7185c5df789583f = L.marker(
                [44.713812, 11.307936],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_0b3ddad07d73485d9489e39045fa2b37 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_d4c260f62204423ea7185c5df789583f.setIcon(icon_0b3ddad07d73485d9489e39045fa2b37);
        
    
        var popup_44b6b0ebbe6143fe837ee630643e7709 = L.popup({"maxWidth": 2650});

        
            var i_frame_7bd2c870fa8f46fd89fba457673cdc32 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb2xvIFNhbml0YXJpbyBkaSBQaWV2ZSBkaSBDZW50byAtIENoaWVzYSBTYW50YSBDaGlhcmEgLSBFeCBDb252ZW50byBjbGFyaXNzZSBjb24gbG9jYWxpIGEgZGVzdGluYXppb25lIGQndXNvIGN1bHR1cmFsZSBlIGZvcm1hdGl2byAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDkyODkzMi4xMiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgOTI4OTMyLjEyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_44b6b0ebbe6143fe837ee630643e7709.setContent(i_frame_7bd2c870fa8f46fd89fba457673cdc32);
        

        marker_d4c260f62204423ea7185c5df789583f.bindPopup(popup_44b6b0ebbe6143fe837ee630643e7709)
        ;

        
    
    
            var marker_e1d671a2986d496c92cff133f964dee9 = L.marker(
                [44.72177, 11.149208],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_a53a18e739324c73b14ba34cdea3c9b8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_e1d671a2986d496c92cff133f964dee9.setIcon(icon_a53a18e739324c73b14ba34cdea3c9b8);
        
    
        var popup_f1ed16a9612a48f8acf76b6cda755ed6 = L.popup({"maxWidth": 2650});

        
            var i_frame_1f40881b8e854cc58157cbe6e6565e09 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb2xvIFNhbml0YXJpbyBkaSBDcmV2YWxjb3JlIC0gQ2FzYSBkZWxsYSBTYWx1dGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIENSRVZBTENPUkUgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTcwMDAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICAxNzAwMDAwLjAgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_f1ed16a9612a48f8acf76b6cda755ed6.setContent(i_frame_1f40881b8e854cc58157cbe6e6565e09);
        

        marker_e1d671a2986d496c92cff133f964dee9.bindPopup(popup_f1ed16a9612a48f8acf76b6cda755ed6)
        ;

        
    
    
            var marker_9647519d11644cdc96ed07a8c4301020 = L.marker(
                [44.919401, 11.100936],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_27a9a82431e04c2fb73ddd58bbf8b550 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_9647519d11644cdc96ed07a8c4301020.setIcon(icon_27a9a82431e04c2fb73ddd58bbf8b550);
        
    
        var popup_780c8dbf4c764649b4890283fe7de60c = L.popup({"maxWidth": 2650});

        
            var i_frame_8838fd5538fc42c1a833f535ad92bbdb = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGUgRWxlbWVudGFyaSBEZSBBbWljaXMgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxNjU5ODIuMzkgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE2NTk4Mi4zOSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_780c8dbf4c764649b4890283fe7de60c.setContent(i_frame_8838fd5538fc42c1a833f535ad92bbdb);
        

        marker_9647519d11644cdc96ed07a8c4301020.bindPopup(popup_780c8dbf4c764649b4890283fe7de60c)
        ;

        
    
    
            var marker_613c245e770a4c60b4036df3aa8c2426 = L.marker(
                [44.836627, 11.033096],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_62f7beebdfc9490089a2e25997d0e46b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_613c245e770a4c60b4036df3aa8c2426.setIcon(icon_62f7beebdfc9490089a2e25997d0e46b);
        
    
        var popup_ead4545b9db440b2b696ba5fe53e7608 = L.popup({"maxWidth": 2650});

        
            var i_frame_dbc84c1307204ad3b017615ed687b67d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQYWxlc3RyYSBTY29sYXN0aWNhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDQVZFWlpPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDgxODIzNy4xIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA4MTgyMzcuMSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_ead4545b9db440b2b696ba5fe53e7608.setContent(i_frame_dbc84c1307204ad3b017615ed687b67d);
        

        marker_613c245e770a4c60b4036df3aa8c2426.bindPopup(popup_ead4545b9db440b2b696ba5fe53e7608)
        ;

        
    
    
            var marker_9d872adda79142b0828d9232a8fe6322 = L.marker(
                [44.788233, 11.026955000000001],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_d0e0341c41df4f7c80ef5dd2f059cb49 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_9d872adda79142b0828d9232a8fe6322.setIcon(icon_d0e0341c41df4f7c80ef5dd2f059cb49);
        
    
        var popup_3bf89bd32fa346d5b7b1730b683e5dee = L.popup({"maxWidth": 2650});

        
            var i_frame_1df1c462186144449fed519f1e3a858f = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBTY3VvbGEgRWxlbWVudGFyZSBlIE1lZGlhIHN0YXRhbGUgRGFudGUgQWxpZ2hpZXJpIC0gcGFsZXN0cmEgLSBJIHN0cmFsY2lvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gUFJPU1BFUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjA3NTkxLjQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDIwNzU5MS40IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_3bf89bd32fa346d5b7b1730b683e5dee.setContent(i_frame_1df1c462186144449fed519f1e3a858f);
        

        marker_9d872adda79142b0828d9232a8fe6322.bindPopup(popup_3bf89bd32fa346d5b7b1730b683e5dee)
        ;

        
    
    
            var marker_498aacb3e10f4ed1b79c08394fb9074c = L.marker(
                [44.881469, 11.068949],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_0117d9967e51483097676b1b7a7d574f = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_498aacb3e10f4ed1b79c08394fb9074c.setIcon(icon_0117d9967e51483097676b1b7a7d574f);
        
    
        var popup_9aa3ce00fdb343bb926bd95bc6da1314 = L.popup({"maxWidth": 2650});

        
            var i_frame_21b4c492f67c4a21a7935978af70f167 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBNYWdhenppbm8gIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjgyOTYuNzYgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI4Mjk2Ljc2IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_9aa3ce00fdb343bb926bd95bc6da1314.setContent(i_frame_21b4c492f67c4a21a7935978af70f167);
        

        marker_498aacb3e10f4ed1b79c08394fb9074c.bindPopup(popup_9aa3ce00fdb343bb926bd95bc6da1314)
        ;

        
    
    
            var marker_4aa1bab34353471f9aae430d6fd8573b = L.marker(
                [44.819963, 11.184553999999999],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_f929f6452e2e44ec92911789d41b3158 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_4aa1bab34353471f9aae430d6fd8573b.setIcon(icon_f929f6452e2e44ec92911789d41b3158);
        
    
        var popup_0f26d29d82794e89b199ca2463051972 = L.popup({"maxWidth": 2650});

        
            var i_frame_3c9690c8e28f40a29660ea78e6e22d31 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBBYml0YXppb25lIC0gbWFnYXp6aW5vIC0gZmFiYnIuIHNlcnYuIC0gSW1waWFudG8gRG9nYXJvIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBTQU4gRkVMSUNFIFNVTCBQQU5BUk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMjcwMjYuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjcwMjYuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_0f26d29d82794e89b199ca2463051972.setContent(i_frame_3c9690c8e28f40a29660ea78e6e22d31);
        

        marker_4aa1bab34353471f9aae430d6fd8573b.bindPopup(popup_0f26d29d82794e89b199ca2463051972)
        ;

        
    
    
            var marker_a169ed31f1724c82bacabf97308e2973 = L.marker(
                [44.882345, 11.414098],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_52bfac4a91b14d5891e6f9a32cc24b7a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_a169ed31f1724c82bacabf97308e2973.setIcon(icon_52bfac4a91b14d5891e6f9a32cc24b7a);
        
    
        var popup_a9746f4c05c3444f903affbd83accfe4 = L.popup({"maxWidth": 2650});

        
            var i_frame_bf7701f865b24aedad89a0549778f029 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBCb3R0ZSBOYXBvbGVvbmljYSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICA3ODE1My4yOCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNzgxNTMuMjggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_a9746f4c05c3444f903affbd83accfe4.setContent(i_frame_bf7701f865b24aedad89a0549778f029);
        

        marker_a169ed31f1724c82bacabf97308e2973.bindPopup(popup_a9746f4c05c3444f903affbd83accfe4)
        ;

        
    
    
            var marker_628a62d25115487ab27a241816afa33d = L.marker(
                [44.906395, 11.371867],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_286fc2b74f904951afcd286998307570 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_628a62d25115487ab27a241816afa33d.setIcon(icon_286fc2b74f904951afcd286998307570);
        
    
        var popup_d983cf7328af44be98e0b86a45a8f84a = L.popup({"maxWidth": 2650});

        
            var i_frame_7dc5f74da3b442a4a4a5eb16e9dda854 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBQb250ZSBGb2xsbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgQk9OREVOTyA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAyNDk4My44MiBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgMjQ5ODMuODIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_d983cf7328af44be98e0b86a45a8f84a.setContent(i_frame_7dc5f74da3b442a4a4a5eb16e9dda854);
        

        marker_628a62d25115487ab27a241816afa33d.bindPopup(popup_d983cf7328af44be98e0b86a45a8f84a)
        ;

        
    
    
            var marker_1ebb51eedb634d6385cb91ade71a4800 = L.marker(
                [44.868506, 11.390478],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_27144e6f74dd403e9a470cada2175e42 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_1ebb51eedb634d6385cb91ade71a4800.setIcon(icon_27144e6f74dd403e9a470cada2175e42);
        
    
        var popup_65d05c19ff8f435d931b87d530320d61 = L.popup({"maxWidth": 2650});

        
            var i_frame_1d8ca72739794938b28a3317bb9ed978 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIGRpIEd1YXJkaWEgZGVsbCdpbXBpYW50byBTYW50YSBCaWFuY2EgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIEJPTkRFTk8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgMTc3NDMuNDggZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDE3NzQzLjQ4IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_65d05c19ff8f435d931b87d530320d61.setContent(i_frame_1d8ca72739794938b28a3317bb9ed978);
        

        marker_1ebb51eedb634d6385cb91ade71a4800.bindPopup(popup_65d05c19ff8f435d931b87d530320d61)
        ;

        
    
    
            var marker_771eff2e20f04d2ea05a4d10a0f06df8 = L.marker(
                [44.713211, 11.307288],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_fcf8a9f173974e608960034271d7d1b4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_771eff2e20f04d2ea05a4d10a0f06df8.setIcon(icon_fcf8a9f173974e608960034271d7d1b4);
        
    
        var popup_aea52a116bae4bf795b9001d448990e0 = L.popup({"maxWidth": 2650});

        
            var i_frame_5a92c47d022140f9809344437960f609 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb2xsZWdpYXRhIGRpIFMuIE1hcmlhIG1hZ2dpb3JlIC0gRHVvbW8gZSBjYW1wYW5pbGUgPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIFBJRVZFIERJIENFTlRPIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDI2Mjg4NTcuNjIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDI2Mjg4NTcuNjIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_aea52a116bae4bf795b9001d448990e0.setContent(i_frame_5a92c47d022140f9809344437960f609);
        

        marker_771eff2e20f04d2ea05a4d10a0f06df8.bindPopup(popup_aea52a116bae4bf795b9001d448990e0)
        ;

        
    
    
            var marker_d89b9ddbdb4147d0b55b4efd62021557 = L.marker(
                [44.792169, 11.234524],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_3f88fcf46f63489a8316380342639832 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_d89b9ddbdb4147d0b55b4efd62021557.setIcon(icon_3f88fcf46f63489a8316380342639832);
        
    
        var popup_4b6612956ca24b57b4b931f7c62e5ddd = L.popup({"maxWidth": 2650});

        
            var i_frame_4b11e69b0cf44118b57302c0aa69dca7 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDb21wbGVzc28gcGFycm9jY2hpYWxlIGRpIFMuIEdpb3Zhbm5pIEJhdHRpc3RhIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBDUkVWQUxDT1JFIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDU4ODc0Ny41IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA1ODg3NDcuNSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_4b6612956ca24b57b4b931f7c62e5ddd.setContent(i_frame_4b11e69b0cf44118b57302c0aa69dca7);
        

        marker_d89b9ddbdb4147d0b55b4efd62021557.bindPopup(popup_4b6612956ca24b57b4b931f7c62e5ddd)
        ;

        
    
    
            var marker_00eb3666684e4aada895cd2ddde8503f = L.marker(
                [44.916306, 10.809573],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_66427dd148c74141b894cfabf00f54a8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_00eb3666684e4aada895cd2ddde8503f.setIcon(icon_66427dd148c74141b894cfabf00f54a8);
        
    
        var popup_b1ab126da7e0452da2a1e3b5600b6b3d = L.popup({"maxWidth": 2650});

        
            var i_frame_73193e9e02b54379902c86b509684439 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDYXNhIHByb3RldHRhIC0gSSBzdHJhbGNpbyA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgUkVHR0lPTE8gPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgNzg3NjguODIgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDc4NzY4LjgyIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_b1ab126da7e0452da2a1e3b5600b6b3d.setContent(i_frame_73193e9e02b54379902c86b509684439);
        

        marker_00eb3666684e4aada895cd2ddde8503f.bindPopup(popup_b1ab126da7e0452da2a1e3b5600b6b3d)
        ;

        
    
    
            var marker_d7a57396da74435684aec23c1f1f2fc6 = L.marker(
                [44.880183, 11.077658],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_4d1ed147c2de4004bf414f582491b472 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_d7a57396da74435684aec23c1f1f2fc6.setIcon(icon_4d1ed147c2de4004bf414f582491b472);
        
    
        var popup_8022c4175bb24e59904c3388813056ec = L.popup({"maxWidth": 2650});

        
            var i_frame_92cb233ca11a487c816fce5009c65bc9 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gc3BvcnRpdm8tc29jaWFsZSBwb2xpdmFsZW50ZSAoZXggYm9jY2lvZHJvbW8pIDwvaDM+PGJyPgogICAgICAgICAgICAgICAgPGI+RG92ZTo8L2I+ICBNSVJBTkRPTEEgPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBhc3NlZ25hdG86PC9iPiAgODkzNjQwLjczIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA4OTM2NDAuNzMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPiBTdGF0byBkZWkgbGF2b3JpOiBUZXJtaW5hdGk8L2I+PGJyPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA=" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8022c4175bb24e59904c3388813056ec.setContent(i_frame_92cb233ca11a487c816fce5009c65bc9);
        

        marker_d7a57396da74435684aec23c1f1f2fc6.bindPopup(popup_8022c4175bb24e59904c3388813056ec)
        ;

        
    
    
            var marker_a3c9992ef1e5407782cb228be31e89ab = L.marker(
                [44.877385, 11.130422],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_a3eeab8765a945ed92a2f721c3e41631 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_a3c9992ef1e5407782cb228be31e89ab.setIcon(icon_a3eeab8765a945ed92a2f721c3e41631);
        
    
        var popup_8c6291a1bd994871917c103d29a27b2a = L.popup({"maxWidth": 2650});

        
            var i_frame_91111e761c1b4956a2190ac6535ea04d = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBFeCBhbWJ1bGF0b3JpbyBtZWRpY28gZGkgTW9ydGl6enVvbG8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMDA4MDMuNjQgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEwMDgwMy42NCBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_8c6291a1bd994871917c103d29a27b2a.setContent(i_frame_91111e761c1b4956a2190ac6535ea04d);
        

        marker_a3c9992ef1e5407782cb228be31e89ab.bindPopup(popup_8c6291a1bd994871917c103d29a27b2a)
        ;

        
    
    
            var marker_3e3d23ba04ae43e4a01ff5765002cc3d = L.marker(
                [44.890501, 11.090152],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_8903906d147b480dbd521fb487de5e24 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_3e3d23ba04ae43e4a01ff5765002cc3d.setIcon(icon_8903906d147b480dbd521fb487de5e24);
        
    
        var popup_34daa5cc372145f5beb0342a9a1adc27 = L.popup({"maxWidth": 2650});

        
            var i_frame_5aa690b50fab4502804a40188f8acdcf = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBDaXZpZGFsZSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDUwMDYyNS43NSBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+SW1wb3J0byBwYWdhdG86PC9iPiAgNTAwNjI1Ljc1IGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_34daa5cc372145f5beb0342a9a1adc27.setContent(i_frame_5aa690b50fab4502804a40188f8acdcf);
        

        marker_3e3d23ba04ae43e4a01ff5765002cc3d.bindPopup(popup_34daa5cc372145f5beb0342a9a1adc27)
        ;

        
    
    
            var marker_62fe459ec0c94d888651725167885839 = L.marker(
                [44.897034000000005, 11.061931],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_32e5ce6c5ead4e94a61f758b0e42110c = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_62fe459ec0c94d888651725167885839.setIcon(icon_32e5ce6c5ead4e94a61f758b0e42110c);
        
    
        var popup_cae0170f8fc741a3b74c9f6aacb60730 = L.popup({"maxWidth": 2650});

        
            var i_frame_d6e3d9f8cc994892a295832663c17d5c = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDaW1pdGVybyBVcmJhbm8gZGVsIENhcG9sdW9nbyAtIEkgc3RyYWxjaW8gPC9oMz48YnI+CiAgICAgICAgICAgICAgICA8Yj5Eb3ZlOjwvYj4gIE1JUkFORE9MQSA8YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIGFzc2VnbmF0bzo8L2I+ICAxMjk3MTY1LjMgZXVybzxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gcGFnYXRvOjwvYj4gIDEyOTcxNjUuMyBldXJvPGJyPgogICAgICAgICAgICAgICAgPGI+IFN0YXRvIGRlaSBsYXZvcmk6IFRlcm1pbmF0aTwvYj48YnI+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIA==" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_cae0170f8fc741a3b74c9f6aacb60730.setContent(i_frame_d6e3d9f8cc994892a295832663c17d5c);
        

        marker_62fe459ec0c94d888651725167885839.bindPopup(popup_cae0170f8fc741a3b74c9f6aacb60730)
        ;

        
    
    
            var marker_40646e08d3734d6fa1869fae9b654b66 = L.marker(
                [44.926858, 11.181614],
                {}
            ).addTo(feature_group_sub_group_63479bc64099423ab489829c1890183c);
        
    
            var icon_a86195bf5b024117abce1ad15d81eb91 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "glyphicon glyphicon-map-marker", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_40646e08d3734d6fa1869fae9b654b66.setIcon(icon_a86195bf5b024117abce1ad15d81eb91);
        
    
        var popup_89f5d9cad08e40768a46c81140ec7979 = L.popup({"maxWidth": 2650});

        
            var i_frame_020325df0f964f1cbc82b6339d4ea111 = $(`<iframe src="data:text/html;charset=utf-8;base64,CiAgICA8ZGl2IHN0eWxlPSJmb250LWZhbWlseTpoZWx2ZXRpY2EiPgogICAgICAgICAgICAgICAgPGgzPiBDZW50cm8gY2l2aWNvIGZyYXppb25hbGUgLSBFeCBzY3VvbGUgZWxlbWVudGFyaSA8L2gzPjxicj4KICAgICAgICAgICAgICAgIDxiPkRvdmU6PC9iPiAgTUlSQU5ET0xBIDxicj4KICAgICAgICAgICAgICAgIDxiPkltcG9ydG8gYXNzZWduYXRvOjwvYj4gIDE1NTAwMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj5JbXBvcnRvIHBhZ2F0bzo8L2I+ICA2ODUxMC4wIGV1cm88YnI+CiAgICAgICAgICAgICAgICA8Yj4gU3RhdG8gZGVpIGxhdm9yaTogVGVybWluYXRpPC9iPjxicj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAg" width="300" style="border:none !important;" height="200"></iframe>`)[0];
            popup_89f5d9cad08e40768a46c81140ec7979.setContent(i_frame_020325df0f964f1cbc82b6339d4ea111);
        

        marker_40646e08d3734d6fa1869fae9b654b66.bindPopup(popup_89f5d9cad08e40768a46c81140ec7979)
        ;

        
    
    
            var layer_control_606fd1a7f2734a169a83bc783153d773 = {
                base_layers : {
                    "openstreetmap" : tile_layer_96014947043e4b0092dc3d83ee621d1d,
                },
                overlays :  {
                    "Comuni danneggiati (epicentro)" : choropleth_51a0ab0b553946e88cc89d15a5d0e903,
                    "Lavori mai iniziati" : feature_group_sub_group_a252d0fcd808480488c45690a9e24d4f,
                    "Lavori non terminati" : feature_group_sub_group_2c2c5c8263bd4041afdf6fcb53e6a9ac,
                    "Lavori terminati" : feature_group_sub_group_63479bc64099423ab489829c1890183c,
                },
            };
            L.control.layers(
                layer_control_606fd1a7f2734a169a83bc783153d773.base_layers,
                layer_control_606fd1a7f2734a169a83bc783153d773.overlays,
                {"autoZIndex": true, "collapsed": true, "position": "topright"}
            ).addTo(map_ae26379126cd4ce79aea9d0f395ec09f);

        
        
