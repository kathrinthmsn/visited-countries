import { Component } from '@angular/core';
import mapData from './data/countries.json'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  
  title = 'visited-countries-project';
  public Countries:any = mapData;
}

