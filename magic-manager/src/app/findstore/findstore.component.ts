import { Component, OnInit } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-findstore',
  templateUrl: './findstore.component.html',
  styleUrls: ['./findstore.component.css']
})
export class FindstoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let mapElement = document.getElementById('map');
    let otherMapElement = document.getElementById('othermap');
    let panelElement = document.getElementById('panel')

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();

    let map = new google.maps.Map(mapElement, {
      zoom:7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(panelElement);

    let request = {
      origin: 'Epping, NH',
      destination: 'magic the gathering epping nh',
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });

    //////////////////////////////////////////////////////
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

  }

}
