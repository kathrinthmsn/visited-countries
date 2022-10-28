import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import $ from "jquery";

@Component({
  selector: 'app-visited-countries',
  templateUrl: './visited-countries.component.html',
  styleUrls: ['./visited-countries.component.scss']
})
export class VisitedCountriesComponent implements OnInit {
   @Input() numberVisited: number=0;
   @Input() visitedC =[];

  constructor(public cs:CountryService) { }

  ngOnInit(): void {
  }


  showNumber(){
    this.numberVisited= document.querySelectorAll('input[type="checkbox"]:checked').length;
  }
  getValue(){
    var visited =[];
    
    $('input[type="checkbox"]:checked').each(function(){
      visited.push($(this).val());
    });
    this.visitedC = visited;  
    }
    
}

