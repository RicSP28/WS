import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  map: mapboxgl.Map;

  style = 'mapbox://styles/bdchere/ck2yegmrk0cx61clul2vbqx6j';
  lat = -22.8994473;
  lng = -43.5589886;
                
  constructor(private geolocation: Geolocation) {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    

    this.geolocation.getCurrentPosition().then((resp) => {

    
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [resp.coords.longitude, resp.coords.latitude]
    });

  }).catch((error) => {
    console.log('Error getting location', error);
  })

  }

 

}