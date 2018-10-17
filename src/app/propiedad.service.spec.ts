import { TestBed, inject } from '@angular/core/testing';

import { PropiedadService } from './propiedad.service';

describe('PropiedadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropiedadService]
    });
  });

  it('should be created', inject([PropiedadService], (service: PropiedadService) => {
    expect(service).toBeTruthy();
  }));
});
