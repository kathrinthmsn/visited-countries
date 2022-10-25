import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllCountriesComponent } from './list-of-all-countries.component';

describe('ListOfAllCountriesComponent', () => {
  let component: ListOfAllCountriesComponent;
  let fixture: ComponentFixture<ListOfAllCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAllCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfAllCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
