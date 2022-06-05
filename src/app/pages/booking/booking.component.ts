import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  adults = new FormControl('', [Validators.required]);
  children = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  hide = true;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
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

  getAdultsErrorMessage() {
    if (this.adults.hasError('required')) {
      return 'You must select a number';
    }

    return this.adults.hasError('adults') ? 'Not a valid selection' : '';
  }

  getChildrenErrorMessage() {
    if (this.children.hasError('required')) {
      return 'You must select a number';
    }

    return this.children.hasError('children') ? 'Not a valid selection' : '';
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

}
