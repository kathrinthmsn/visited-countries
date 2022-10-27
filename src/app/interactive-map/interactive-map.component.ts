import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';



@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit, AfterViewInit {

  private map: L.Map;

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() { }

  

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {

      var map = L.map('map').setView([0, 0], 1);
      
      L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=dyQmlIJcLTxhQ3N3uubc', {
      }).addTo(map); 
  }

  

}

