import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allowHtml'
})
export class AllowHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {

  }

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
