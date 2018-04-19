import { Component, OnInit } from '@angular/core';
import { FindStoreService } from '../model/find-store.service';

import {} from '@types/googlemaps';

@Component({
  selector: 'app-findstore',
  templateUrl: './findstore.component.html',
  styleUrls: ['./findstore.component.css'],
  providers: [ FindStoreService ]
})
export class FindstoreComponent implements OnInit {

  lat: string;
  long: string;
  city: string;
  state: string;
  yourLocation: string;
  destination: string;

  constructor(private findStoreService: FindStoreService) { }

  ngOnInit() {
    var coordinatePromise = this.getLocalPosition();
    coordinatePromise.then( (coordinates: any) => {
      console.log(coordinates.latitude);
      console.log(coordinates.longitude);
      this.getClosestGamingStore(coordinates.latitude, coordinates.longitude);
    });

  } //OnInit

   getLocalPosition() {
      return new Promise(function(resolve, reject) {

        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        function success (pos) {
            resolve(pos.coords);
        }

        function fail(error){
            console.log('geolocation failed');
            resolve();
        }

        navigator.geolocation.getCurrentPosition(success, fail, options);
      });
  }

  getClosestGamingStore(lat, long) {
    let mapElement = document.getElementById('map');
    let panelElement = document.getElementById('panel')

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();

    let map = new google.maps.Map(mapElement, {
      zoom:7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(panelElement);

    this.findStoreService
      .findClosestGamingStoreWithCoords(lat, long)
      .subscribe(result => {
        this.city = result.results[0].address_components[2].long_name;
        this.state = result.results[0].address_components[4].short_name;
        this.yourLocation = this.city + ' , ' + this.state;
        this.destination = "magic the gathering " + this.yourLocation;

        let request = {
          origin: this.yourLocation,
          destination: this.destination,
          travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
      });
  }

  getClosestGamingStoreToInputCityAndState(locationInput) {
        let mapElement = document.getElementById('map');
        let panelElement = document.getElementById('panel');
        panelElement.innerHTML = "";  //clear panel so it doesnt append last search directions

        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer();

        let map = new google.maps.Map(mapElement, {
          zoom:7,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(panelElement);

        this.yourLocation = locationInput;
        this.destination = "magic the gathering " + this.yourLocation;

        let request = {
          origin: this.yourLocation,
          destination: this.destination,
          travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
  }


} //end
