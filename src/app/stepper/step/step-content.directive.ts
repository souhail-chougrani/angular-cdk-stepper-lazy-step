import { Directive, TemplateRef } from '@angular/core';
@Directive({
  selector: 'ng-template[stepContent]',
})
export class StepContent {
  constructor(public _template: TemplateRef<any>) { }
}
