import {TestBed} from '@angular/core/testing';

import {AddNewPackagesService} from './add-new-packages.service';

describe('AddNewPackagesService', () => {
  let service: AddNewPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
