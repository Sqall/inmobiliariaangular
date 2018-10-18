import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadDetailComponent } from './propiedad-detail.component';

describe('PropiedadDetailComponent', () => {
  let component: PropiedadDetailComponent;
  let fixture: ComponentFixture<PropiedadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
