// set map 
var map = new L.map('mapid');

map = map.on('load', onMapLoad).setView([41.400, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});
	
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
var markers 	 = L.markerClusterGroup();
var data_markers = [];

// leaflet general
var marker = new L.Marker();
var popUp  = new L.Popup();

//  general
let allTypes;
let types;

function onMapLoad() {
	console.log("Mapa cargado");
	let ownUrl = "http://localhost/mapa/api/apiRestaurants.php";
	console.log(ownUrl);
	// get the data 
	// 1) Relleno el data_markers con una petición a la api
	$.getJSON(ownUrl, function(data){
		// we get the whole object
		console.log(data);
		// iterate through each 
		// wouldn't be better a for in?
		$.each(data, function(index){
			console.log(data[index].kind_food);
			allTypes = data;
			// print them all
			marker = new L.Marker(new L.LatLng(data[index].lat, data[index].lng));
			let info = (`${data[index].name} <br/> ${data[index].address}<br/> <strong>Tipo de cocina</strong>:<br/> ${data[index].kind_food}`);
			popUp = new L.Popup({maxHeigth: 175, maxWidth: 400}).setContent(info);
			console.log(marker);
			markers.addLayer(marker.bindPopup(popUp));
			markers.addTo(map);
			// kind_food into var, string type
			types = data[index].kind_food;
			// fill the array with the kind of food. Separate them => str to arr
			data_markers.push(types.split(','));
			// unnest the array 
			data_markers = data_markers.flat();
			// all of data has gone here
			console.log(data_markers);
		});
		// get rid of repeated types of food
		data_markers = data_markers.filter((foodType, position) => data_markers.indexOf(foodType) == position );
		
		console.log(data_markers);
		// 2) Añado de forma dinámica en el select los posibles tipos de restaurantes
		for(let f in data_markers){
			  $('#kind_food_selector').append($('<option>', {value: f, text: data_markers[f]}));
			  console.log(data_markers[f]);

		  }


	});
	
    /*
	FASE 3.1
		1) Relleno el data_markers con una petición a la api
		2) Añado de forma dinámica en el select los posibles tipos de restaurantes
		3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
	*/

}

$('#kind_food_selector').on('change', function() {
  console.log(this.value);

  render_to_map(data_markers, this.value);
});



function render_to_map(data,filter){
	console.log('render works');
	console.log(data);
	console.log(filter);
	
	/*
	FASE 3.2
		1) Limpio todos los marcadores
		2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
	*/	
			
}

// documentacion 

// Fill a select
// https://stackoverflow.com/questions/170986/what-is-the-best-way-to-add-options-to-a-select-from-a-javascript-object-with-jq

// Remove repeated items
// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array