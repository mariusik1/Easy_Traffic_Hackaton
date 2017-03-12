function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 37.77, lng: -122.447}
        });
        directionsDisplay.setMap(map);

        calculateAndDisplayRoute(directionsService, directionsDisplay);
        document.getElementById('mode').addEventListener('change', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
		//document.getElementById('end').addEventListener('change', function() {
        //  calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var selectedMode = document.getElementById('mode').value;
        var start = document.getElementById('start').value;
		var end = document.getElementById('end').value;
		var latStart = 0;
		var lonStart = 0;
		var latEnd = 0;
		var lonEnd = 0;
		var array = {A:{lat:45.777676, lon:24.158167},
					 B:{lat:45.777013, lon:24.156993},
					 C:{lat:45.776509, lon:24.156175},
					 D:{lat:45.776010, lon:24.155461},
					 E:{lat:45.776640, lon:24.154649},
					 F:{lat:45.777555, lon:24.153584},
					 G:{lat:45.778268, lon:24.152750},
					 I:{lat:45.778803, lon:24.153777},
					 J:{lat:45.779379, lon:24.154783},
					 K:{lat:45.780011, lon:24.155936},
					 L:{lat:45.781104, lon:24.157701},
					 M:{lat:45.780761, lon:24.158203},
					 N:{lat:45.780688, lon:24.158079},
					 O:{lat:45.779957, lon:24.158573},
					 P:{lat:45.779932, lon:24.158907},
					 R:{lat:45.779709, lon:24.159127},
					 Q:{lat:45.779247, lon:24.159677},
					 X:{lat:45.779084, lon:24.159921},
					 Y:{lat:45.778265, lon:24.158926},
					 Z:{lat:45.778033, lon:24.158644},
					 A1:{lat:45.777239, lon:24.156753},
					 B1:{lat:45.778522, lon:24.154107},
					 C1:{lat:45.777094, lon:24.155445},
					 D1:{lat:45.779390, lon:24.156632},
					 E1:{lat:45.779697, lon:24.156287},
					 F1:{lat:45.778429, lon:24.158657},
					 G1:{lat:45.778688, lon:24.158985},
					 H1:{lat:45.779215, lon:24.158346},
					};
		latStart = array[start].lat;
		lonStart = array[start].lon;
		latEnd = array[end].lat;
		lonEnd = array[end].lon;
		directionsService.route({
          origin: {lat: latStart, lng: lonStart},  // Start
          destination: {lat: latEnd, lng:  lonEnd},  // Ocean Beach.
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }