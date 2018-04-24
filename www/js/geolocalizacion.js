var map, lat, lng;

$(function () {
	alert("estamos usando geolocalizacion");
	
	function geolocalizar() {
		GMaps.geolocate({
			success:function (position){
				lat= position.coords.latitude;
				lng=position.coords.longitude;
				
				map = new GMaps({
					el:'#map',
					lat:lat,
					lng:lng
					});
				map.addMarker({lat: lat, lng: lng});
			},
			error: function (error){alert('Error: '+error.message);},
			not_supported:function () {alert("No soporta geolocalización");},
			 });
		}
	geolocalizar();
});