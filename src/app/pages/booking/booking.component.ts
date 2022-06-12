import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PackagesService} from "../../components/services/packages.service";
import {ActivatedRoute} from "@angular/router";
import {Package} from "../../models/models";
import {BookingService} from "../../components/services/booking.service";
import {MessageService} from "primeng/api";

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
    packageId: new FormControl('', [])
  })

  package: Package | any;
  id?:number
  loader:boolean = false;

  constructor(private _formBuilder: FormBuilder, private packagesService: PackagesService,
              private route: ActivatedRoute, public bookingService: BookingService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getPackage();
  }

  getPackage(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');

    this.packagesService.getPackage(this.id).subscribe(packages => this.package = packages);
  }

  public checkError = (controlName: string, errorName: string) => {
    // @ts-ignore
    return this.bookingForm.controls[controlName].hasError(errorName);
  }

  addBooking(): void {
    this.loader = true;
    this.bookingForm.controls.packageId.setValue(this.id + "")
    this.bookingService.addBooking(this.bookingForm.value as any)
      .subscribe((response: any) => {
        if (response.success) {
          this.messageService.add({severity:'success', summary:'Booking was success', detail:"Package " + this.bookingForm.value.name + " is booked successfully. You will be contacted very soon!"});
          this.clearForm();
        } else {
          this.messageService.add({severity:'warn', summary:'Booking errors', detail: response.messages ? response.messages.join(", ") : "Unknown error"});
        }
        this.loader = false;
      }, error => {
        console.error(error);
        this.messageService.add({severity:'error', summary:'Booking errors', detail: error && error.message ? error.message : "Unknown error"});
        this.loader = false;
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
