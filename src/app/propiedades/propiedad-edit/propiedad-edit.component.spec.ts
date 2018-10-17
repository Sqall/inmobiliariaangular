import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadEditComponent } from './propiedad-edit.component';

describe('PropiedadEditComponent', () => {
  let component: PropiedadEditComponent;
  let fixture: ComponentFixture<PropiedadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
