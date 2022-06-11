import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {PackagesService} from "../../components/services/packages.service";
import {ActivatedRoute} from "@angular/router";

export interface Package {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  duration?: number;
  promotionalOffer?: boolean;
  promotionalOfferPrice?: number;
  featured?: boolean;
  imageUrl?: any;
  active?: boolean;
  cityId?: number;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  people = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  contactNumber = new FormControl('', [Validators.required]);
  hide = true;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });
  package: Package | any;

  constructor(private _formBuilder: FormBuilder, private packagesService: PackagesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPackage();
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter your Name';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }

  getSurnameErrorMessage() {
    if (this.surname.hasError('required')) {
      return 'You must enter your Surname';
    }

    return this.surname.hasError('surname') ? 'Not a valid surname' : '';
  }

  getContactNumberErrorMessage() {
    if (this.contactNumber.hasError('required')) {
      return 'You must enter your Contact Number';
    }

    return this.contactNumber.hasError('contactNumber') ? 'Not a valid contact number' : '';
  }

  getAdultsErrorMessage() {
    if (this.people.hasError('required')) {
      return 'You must select a number';
    }

    return this.people.hasError('adults') ? 'Not a valid selection' : '';
  }

  getDateErrorMessage() {
    if (this.date.hasError('required')) {
      return 'You must select a date';
    }

    return this.date.hasError('date') ? 'Not a valid selection' : '';
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value || 0);
  }

  getPackage(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.packagesService.getPackage(id).subscribe(packages => this.package = packages);
  }

}
