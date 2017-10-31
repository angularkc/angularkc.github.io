import { TestBed, inject } from '@angular/core/testing';

import { SocialDataService } from './social-data.service';

describe('SocialDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialDataService]
    });
  });

  it('should be created', inject([SocialDataService], (service: SocialDataService) => {
    expect(service).toBeTruthy();
  }));
});
