import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListOfAllCountriesComponent } from './list-of-all-countries/list-of-all-countries.component';
import { VisitedCountriesComponent } from './visited-countries/visited-countries.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfAllCountriesComponent,
    VisitedCountriesComponent,
    InteractiveMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
