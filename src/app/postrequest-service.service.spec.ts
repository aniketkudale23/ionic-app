import { TestBed } from '@angular/core/testing';

import { PostrequestServiceService } from './postrequest-service.service';

describe('PostrequestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostrequestServiceService = TestBed.get(PostrequestServiceService);
    expect(service).toBeTruthy();
  });
});
