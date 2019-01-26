
var mymap = L.map('mapid').setView([53.904719, 27.561221], 4);

var marker = L.marker([53.904719, 27.561221]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoidml0YWxpYnJ5Y2giLCJhIjoiY2pyY2t2ZjFwMGIwajQ5czE4NXY5ZndmdyJ9.5hn49IM_UjX3YEr1PpVAdA', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
  }).addTo(mymap);
  
 
