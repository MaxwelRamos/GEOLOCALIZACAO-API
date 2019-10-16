window.onload = function(){
	var ondeEstou = document.getElementById('ondeEstou');

	ondeEstou.addEventListener('click', function(){
		verMapa();
	});

	function verMapa() {
		if(navigator.geolocation)
			navigator.geolocation.getCurrentPosition(mostrarMapa);
		else
			alert('Este navegador não tem suporte a Geolocalização');
	}

	function mostrarMapa(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		alert('Latidude.:' + latitude + ' - Longitude.: ' + longitude);
	}
  }