import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {NewsletterService} from "../services/newsletter.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  active: boolean = true;

  newsletterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    active: new FormControl('', [])
  });

  constructor(private dialogRef: MatDialogRef<any>, private newsLetterService: NewsletterService,
              private messageService: MessageService) {

  }

  public closeDialog() {
    this.dialogRef.close();
  }

  subscribe() {
    this.newsletterForm.controls.active.setValue(this.active + "")
    this.newsLetterService.addNewsLetterEmail(this.newsletterForm.value as any)
      .subscribe((response: any) => {
        if (response.success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Action was success',
            detail: "You are subscribed successfully!"
          });
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Subscribe errors',
            detail: response.messages ? response.messages.join(", ") : "Unknown error"
          });
        }
      }, error => {
        console.error(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Subscribe errors',
          detail: error && error.message ? error.message : "Unknown error"
        });
      });
  }

  ngOnInit(): void {

  }


}
