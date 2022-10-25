import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-list-of-all-countries',
  templateUrl: './list-of-all-countries.component.html',
  styleUrls: ['./list-of-all-countries.component.scss']
})
export class ListOfAllCountriesComponent implements OnInit {
  @Input() country ='';

  constructor(public cs: CountryService) { }

  ngOnInit(): void {
  }

}
