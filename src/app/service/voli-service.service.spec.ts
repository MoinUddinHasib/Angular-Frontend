import { TestBed } from '@angular/core/testing';
import { VoliService } from './voli-service.service';

describe('VoliServiceService', () => {
  let service: VoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
