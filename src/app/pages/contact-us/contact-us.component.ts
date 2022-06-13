import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/models";
import {ContactService} from "../../components/services/contact.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  model: Contact = new Contact();

  constructor(private _formBuilder: FormBuilder, public contactService: ContactService, private messageService: MessageService) {
  }

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  public checkError = (controlName: string, errorName: string) => {
    // @ts-ignore
    return this.contactForm.controls[controlName].hasError(errorName);
  }

  registerForm(): void {
    this.contactService.addContact(this.contactForm.value as any)
      .subscribe((response: any) => {
        if (response.success) {
          this.messageService.add({severity:'success', summary:'Sending form was success', detail:"Message is sent successfully. You will be contacted very soon!"});
          this.clearContactForm();
        } else {
          this.messageService.add({severity:'warn', summary:'Contact form errors', detail: response.messages ? response.messages.join(", ") : "Unknown error"});
        }
      }, error => {
        console.error(error);
        this.messageService.add({severity:'error', summary:'Contact form errors', detail: error && error.message ? error.message : "Unknown error"});
      });
  }

  public clearContactForm() {
    let tmpValue = {
      fullName: null,
      email: null,
      subject: null
    };
    this.contactForm.setValue(tmpValue as any);
    this.contactForm.clearAsyncValidators();
    this.contactForm.reset();
  }

}
