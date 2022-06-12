import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {City} from "../../models/models";
import {AddNewPackagesService} from "../../components/services/add-new-packages.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-new-packages',
  templateUrl: './add-new-packages.component.html',
  styleUrls: ['./add-new-packages.component.scss']
})
export class AddNewPackagesComponent implements OnInit {

  cityForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    continent: new FormControl('', [Validators.required])
  })

  packageForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    featured: new FormControl('', [Validators.required]),
    promotionalOffer: new FormControl('', [Validators.required]),
    promotionalOfferPrice: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required])
  })

  hide = true;
  city: City[] = [];
  cities: City[] | any;
  loader:boolean = false;

  constructor(private _formBuilder: FormBuilder, public addNewPackagesService: AddNewPackagesService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getCities();
  }

  public checkError = (controlName: string, errorName: string) => {
    // @ts-ignore
    return this.packageForm.controls[controlName].hasError(errorName);
  }

  addCity(): void {

    this.addNewPackagesService.addCity(this.cityForm.value as any)
      .subscribe((response: any) => {
        if (response.success) {
          this.loader = true;
          this.messageService.add({severity:'success', summary:'Action was success', detail:"City is created successfully."});
          this.clearCityForm();
        } else {
          this.messageService.add({severity:'warn', summary:'Adding City errors', detail: response.messages ? response.messages.join(", ") : "Unknown error"});
          this.loader = false;
        }
      }, error => {
        console.error(error);
        this.messageService.add({severity:'error', summary:'Booking City errors', detail: error && error.message ? error.message : "Unknown error"});
        this.loader = false;
      });
  }

  addPackage(): void {
    this.addNewPackagesService.addPackage(this.packageForm.value as any)
      .subscribe((response: any) => {
        if (response.success) {
          this.loader = true;
          this.messageService.add({severity:'success', summary:'Action was success', detail:"Package is added successfully!"});
          this.clearForm();
        } else {
          this.messageService.add({severity:'warn', summary:'Adding package errors', detail: response.messages ? response.messages.join(", ") : "Unknown error"});
          this.loader = false;
        }
      }, error => {
        console.error(error);
        this.messageService.add({severity:'error', summary:'Adding package errors', detail: error && error.message ? error.message : "Unknown error"});
        this.loader = false;
      });
  }

  public clearForm() {
    let tmpValue = {
      active: null,
      cityId: null,
      description: null,
      duration: null,
      featured: null,
      imageUrl: null,
      name: null,
      price: null,
      promotionalOffer: null,
      promotionalOfferPrice: null
    };
    this.packageForm.setValue(tmpValue as any);
    this.packageForm.clearAsyncValidators();
    this.packageForm.reset()
  }

  public clearCityForm() {
    let tmpValue = {
      name: null,
      country: null,
      continent: null,
    };
    this.cityForm.setValue(tmpValue as any);
    this.cityForm.clearAsyncValidators();
    this.cityForm.reset()
  }

  public getCities(): void {
    this.addNewPackagesService.getCities().subscribe(
      (response: City[]) => {
        this.cities = response;
        console.log(this.cities);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
