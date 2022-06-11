import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PackagesService} from "../../components/services/packages.service";
import {ActivatedRoute} from "@angular/router";
import {BookingService} from "../../components/services/booking.service";

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
  bookingForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    people: new FormControl('', [Validators.required]),
    reservationDate: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    packageId: new FormControl('', [Validators.required])
  })

  package: Package | any;

  constructor(private _formBuilder: FormBuilder, private packagesService: PackagesService,
              private route: ActivatedRoute, public bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.getPackage();
  }

  getPackage(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.packagesService.getPackage(id).subscribe(packages => this.package = packages);
  }

  public checkError = (controlName: string, errorName: string) => {
    // @ts-ignore
    return this.bookingForm.controls[controlName].hasError(errorName);
  }

  addBooking(): void {
    this.bookingService.addBooking(this.bookingForm.value as any)
      .subscribe((response: any) => {
        if (response.success) {
          alert("Package is booked successfully!");
          this.clearForm();
        } else {
          alert(response.messages.join(", "))
        }
      }, error => {
        console.error(error);
        alert(error.message)
      });
  }

  public clearForm() {
    let tmpValue = {
      name: null,
      surname: null,
      email: null,
      contact: null,
      people: null,
      reservationDate: null,
      packageId: null,
    };
    this.bookingForm.setValue(tmpValue as any);
    this.bookingForm.clearAsyncValidators();
    this.bookingForm.reset()
  }

}
