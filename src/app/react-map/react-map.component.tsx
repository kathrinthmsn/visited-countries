import { Component, OnInit, AfterViewInit} from '@angular/core';
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData  from '../data/countries.json';
import "./react-map.component.scss";
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
    selector: 'app-react-map',
    templateUrl: './react-map.component.html',
    styleUrls: ['./react-map.component.scss']
  })
export class ReactMapComponent implements OnInit, AfterViewInit   {

public Countries:any = mapData;
private map3: L.Map;

ngOnInit(): void {}

ngAfterViewInit() {   
    //console.log(this.Countries.properties.ADMIN);
    console.log(mapData);

    this.map3 = L.map('map3').setView([0, 0], 1);
    
    L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=dyQmlIJcLTxhQ3N3uubc', {
    }).addTo(this.map3); 

    this.initCountryLayer();
}

private initCountryLayer() {
    
    const stateLayer = L.geoJSON(this.Countries, {
      style: (feature) => ({
        fillColor: "red",
        fillOpacity: 0.7,
        color: "black",
        weight: 2,
      }),
      onEachFeature: (feature, layer) => {
        var numberOfClicks = 0;
        var fillColorSelected ="red";
        layer.on({
            click: (e)=> {
            
                if(numberOfClicks % 2 === 0){
                
                e.target.setStyle({
                    fillColor: "blue",
                });
                fillColorSelected = "blue";                
                numberOfClicks++;}
        else {
                e.target.setStyle({
                    fillColor: "red"
                });
                fillColorSelected = "red";    
            numberOfClicks++;
        }
    },
    mouseover: (event) =>{
        const countryName = feature.properties.ADMIN;
        layer.bindPopup(countryName);
        
        if(fillColorSelected ==="red"){
        event.target.setStyle({
            fillColor: "yellow"
        });
        fillColorSelected = "yellow";
    }
    },
    mouseout: (event) => {
        if(fillColorSelected ==="yellow"){
            event.target.setStyle({
                fillColor: "red"
            });
            fillColorSelected = "red";
    }}
        })}
    });
    this.map3.addLayer(stateLayer);
  }
}

export default ReactMapComponent;