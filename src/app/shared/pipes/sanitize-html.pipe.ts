import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'sanitizeHtml' })

/* DomSanitizer, a service of Angular helps to prevent attackers from injecting
   malicious client-side scripts into web pages, which is often referred as
   Cross-site Scripting or XSS.
*/

export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
