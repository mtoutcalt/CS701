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

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      // console.log(parseFloat(crd.latitude));
      // this.lat = parseFloat(crd.latitude);
      console.log(`Longitude: ${crd.longitude}`);
      // console.log(parseFloat(crd.longitude));
      // this.long = parseFloat(crd.longitude);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    this.findStoreService
      .findClosestGamingStoreWithCoords('41.878114','-87.629798')
      .subscribe(result => {
        console.log('got it');
        console.log(result);
        console.log(result.results[0].address_components[2].long_name);
        this.city = result.results[0].address_components[2].long_name;
        console.log(result.results[0].address_components[4].short_name);
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

  } //OnInit



} //end
