import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(html: any) {
    return this.sanitizer.bypassSecurityTrustUrl(html);
  }
}
