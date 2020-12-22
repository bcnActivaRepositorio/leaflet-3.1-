// set map 
var map = new L.map('mapid');

map = map.on('load', onMapLoad).setView([41.400, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});
	
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
var markers 	 = L.markerClusterGroup();
var data_markers = [];
var dataFood 	 = [];

// leaflet general
var marker = new L.Marker();
var popUp  = new L.Popup();

//  general
let allTypes;
let types;
let findMe;


function onMapLoad() {
	
	let ownUrl = "http://localhost/mapa/api/apiRestaurants.php";
	// get the data 
	// 1) Relleno el data_markers con una petición a la api
	$.getJSON(ownUrl, function(data){
		// we get the whole object
		allTypes = data;
		console.log(allTypes);
		// send it ro render
		render_to_map(allTypes, "all");
		// get rid of repeated types of food
		dataFood = cleanArr(dataFood);
		// 2) Añado de forma dinámica en el select los posibles tipos de restaurantes
		for(let f in dataFood){
			  $('#kind_food_selector').append($('<option>', {value: f, text: dataFood[f]}));
	
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

  render_to_map(dataFood, this.value);
});



function render_to_map(data,filter){
	if (filter == "all" ){
		// clean the arr just in case
		dataFood = cleanArr(dataFood);
		// add todos
		dataFood.unshift("Todos");
		// iterate through each 
		// wouldn't be better a for in?
		$.each(data, function(index){
			// print them all
			makeMarkers(data[index]);
			// kind_food into var, string type
			types = data[index].kind_food;
			// fill the array with the kind of food. Separate them => str to arr
			dataFood.push(types.split(','));
			// unnest the array 
			dataFood = dataFood.flat();
			// all of data has gone here
		});
	} else {
		markers.clearLayers();
		data_markers = [];
		let index = 0;
		let match = "";
		let match2 = [];
		index = parseInt(filter);
		// get rid of repeated types of food
		dataFood = cleanArr(dataFood);
		match = (dataFood[index]);
		console.log(dataFood);
		// if I click on select "Todos"
		if(match == "Todos"){
		// make the makers again
			render_to_map(allTypes, "all");

		} else{
		// even with a million restaurants I MUST iterate through all of them
		for (let unit of allTypes){
			// safe Keeping in an array to iterate again
			match2 = unit.kind_food.split(',');
			// search array for each word | type of food
			findMe = match2.find((e) => e == match);
			if(findMe !== undefined) {
				makeMarkers(unit);
				console.log(unit);
			} 
		}
	}
	}
	
	/*
	FASE 3.2
		1) Limpio todos los marcadores
		2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
	*/	
			
}
/**********************************************AUXILIAR FUNCTIONS*************************************************/
function makeMarkers(data){
			data_markers = [];
	marker = new L.Marker(new L.LatLng(data.lat, data.lng));
			// fill the arr for delete and add
			data_markers.push(marker);
			let info = (`${data.name} <br/> ${data.address}<br/> <strong>Tipo de cocina</strong>:<br/> ${data.kind_food}`);
			popUp = new L.Popup({maxHeigth: 175, maxWidth: 400}).setContent(info);
			markers.addLayer(marker.bindPopup(popUp));
			markers.addTo(map);
}

const cleanArr = (arr) => arr.filter((foodType, position) => arr.indexOf(foodType) == position );
/*****************************************************************************************************************/
// RESEARCH 

// Fill a select
// https://stackoverflow.com/questions/170986/what-is-the-best-way-to-add-options-to-a-select-from-a-javascript-object-with-jq

// Remove repeated items
// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array

// clean markers before making new ones
// https://stackoverflow.com/questions/28636723/how-to-clear-leaflet-map-of-all-markers-and-layers-before-adding-new-ones
// https://github.com/Leaflet/Leaflet/issues/3238