import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AddNewPackagesService, City} from "../../components/services/add-new-packages.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Package} from "../booking/booking.component";

@Component({
  selector: 'app-add-new-packages',
  templateUrl: './add-new-packages.component.html',
  styleUrls: ['./add-new-packages.component.scss']
})
export class AddNewPackagesComponent implements OnInit {
  nameControl = new FormControl('', [Validators.required]);
  packageNameControl = new FormControl('', [Validators.required]);
  countryControl = new FormControl('', [Validators.required]);
  continentControl = new FormControl('', [Validators.required]);
  packageDescriptionControl = new FormControl('', [Validators.required]);
  imageUrlControl = new FormControl('', [Validators.required]);
  packageDuration = new FormControl('', [Validators.required]);
  packagePrice = new FormControl('', [Validators.required]);
  packageFeatured = new FormControl('', [Validators.required]);
  packagePromotional = new FormControl('', [Validators.required]);
  packagePromotionalOfferPrice = new FormControl('', [Validators.required]);
  packageActive = new FormControl('', [Validators.required]);
  selectCity = new FormControl('', [Validators.required]);
  hide = true;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });
  city: City[] = [];
  cities: City[] | any;
  packages: Package[] = [];

  constructor(private _formBuilder: FormBuilder, public addNewPackage: AddNewPackagesService) {
  }

  ngOnInit(): void {
    this.getCities();
  }

  getNameErrorMessage() {
    if (this.nameControl.hasError('required')) {
      return 'You must enter City Name';
    }

    return this.nameControl.hasError('name') ? 'Not a valid name' : '';
  }

  getCountryErrorMessage() {
    if (this.countryControl.hasError('required')) {
      return 'You must enter Country Name';
    }

    return this.countryControl.hasError('country') ? 'Not a valid name' : '';
  }

  getContinentErrorMessage() {
    if (this.continentControl.hasError('required')) {
      return 'You must enter Continent Name';
    }

    return this.continentControl.hasError('continent') ? 'Not a valid name' : '';
  }

  getPackageNameErrorMessage() {
    if (this.packageNameControl.hasError('required')) {
      return;
    }

    return this.packageNameControl.hasError('name') ? 'Not a valid name' : '';
  }

  getPackageDescriptionErrorMessage() {
    if (this.packageDescriptionControl.hasError('required')) {
      return;
    }

    return this.packageDescriptionControl.hasError('description') ? 'Not a valid name' : '';
  }

  getImageUrlErrorMessage() {
    if (this.imageUrlControl.hasError('required')) {
      return;
    }

    return this.imageUrlControl.hasError('imageUrl') ? 'Not a valid name' : '';
  }

  getPackageDurationErrorMessage() {
    if (this.packageDuration.hasError('required')) {
      return;
    }

    return this.packageDuration.hasError('packageDuration') ? 'Not a valid name' : '';
  }

  getPackagePriceErrorMessage() {
    if (this.packagePrice.hasError('required')) {
      return;
    }

    return this.packagePrice.hasError('packagePrice') ? 'Not a valid name' : '';
  }

  getFeaturedErrorMessage() {
    if (this.packageFeatured.hasError('required')) {
      return;
    }

    return this.packageFeatured.hasError('packageFeatured') ? 'Not a valid name' : '';
  }

  getPromotionalErrorMessage() {
    if (this.packagePromotional.hasError('required')) {
      return;
    }

    return this.packagePromotional.hasError('packageFeatured') ? 'Not a valid name' : '';
  }

  getPromotionalOfferPriceErrorMessage() {
    if (this.packagePromotionalOfferPrice.hasError('required')) {
      return;
    }

    return this.packagePromotionalOfferPrice.hasError('packageFeatured') ? 'Not a valid name' : '';
  }

  getActiveErrorMessage() {
    if (this.packageActive.hasError('required')) {
      return;
    }

    return this.packageActive.hasError('packageFeatured') ? 'Not a valid name' : '';
  }

  getCityErrorMessage() {
    if (this.selectCity.hasError('required')) {
      return;
    }

    return this.selectCity.hasError('packageFeatured') ? 'Not a valid name' : '';
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value || 0);
  }

  addCity(name: string, country: string, continent: string): void {
    name = name.trim();
    country = country.trim();
    continent = continent.trim();

    if (!name || !country || !continent) {
      return;
    }

    this.addNewPackage.addCity({name, country, continent} as City)
      .subscribe(ct => {
        this.city.push(ct);
      });
  }

  addPackage(name: string, description: string, imageUrl: string,
             duration: string, price: string, featured: boolean, promotionalOffer: boolean,
             promotionalOfferPrice: string, cityId: number, active: boolean): void {

    // @ts-ignore
    this.addNewPackage.addPackage({
      name,
      description,
      imageUrl,
      duration,
      price,
      featured,
      promotionalOffer,
      promotionalOfferPrice,
      cityId,
      active
    } as unknown as Package)
      .subscribe(ct => {
        // @ts-ignore
        return this.packages.push(ct);
      });
  }

  public getCities(): void {
    this.addNewPackage.getCities().subscribe(
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
