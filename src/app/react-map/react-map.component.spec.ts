import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactMapComponent } from './react-map.component';

describe('ReactMapComponent', () => {
  let component: ReactMapComponent;
  let fixture: ComponentFixture<ReactMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
