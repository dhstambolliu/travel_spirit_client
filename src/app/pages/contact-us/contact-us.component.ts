import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/models";
import {ContactService} from "../../components/services/contact.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  model: Contact = new Contact();

  constructor(private _formBuilder: FormBuilder, public contactService: ContactService) {
  }

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }


  public checkError = (controlName: string, errorName: string) => {
    // @ts-ignore
    return this.packageForm.controls[controlName].hasError(errorName);
  }

  registerForm(): void {
    this.contactService.addContact(this.contactForm.value as Contact)
      .subscribe((response: any) => {
        if (response.success) {
          alert("Message sent!");
          this.clearContactForm();
        } else {
          alert(response.messages.join(", "))
        }
      }, error => {
        console.error(error);
        alert(error.message)
      });
  }

  public clearContactForm() {
    let tmpValue = {
      fullName: null,
      email: null,
      subject: null,
    };
    this.contactForm.setValue(tmpValue as any);
    this.contactForm.clearAsyncValidators();
    this.contactForm.reset()
  }

}
