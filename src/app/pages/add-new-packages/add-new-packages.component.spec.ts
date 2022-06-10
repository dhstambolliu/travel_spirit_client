import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPackagesComponent } from './add-new-packages.component';

describe('AddNewPackagesComponent', () => {
  let component: AddNewPackagesComponent;
  let fixture: ComponentFixture<AddNewPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
