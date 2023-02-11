import { TemplatePortal } from '@angular/cdk/portal';
import { CdkStep } from '@angular/cdk/stepper';
import { AfterContentInit, Component, ContentChild, forwardRef, Inject, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { map, startWith, Subscription, switchMap } from 'rxjs';
import { StepperComponent } from '../stepper.component';
import { StepContent } from './step-content.directive';



@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  providers: [
    { provide: CdkStep, useExisting: StepComponent },
  ]

})
export class StepComponent extends CdkStep implements AfterContentInit, OnDestroy {

  private _isSelected = Subscription.EMPTY;
  _portal!: TemplatePortal;

  @ContentChild(StepContent, { static: false }) _lazyContent!: StepContent;

  constructor(
    @Inject(forwardRef(() => StepperComponent)) stepper: StepperComponent,
    private _viewContainerRef: ViewContainerRef,
  ) {
    super(stepper)
  }


  ngAfterContentInit(): void {
    this._isSelected = this._stepper.steps.changes

      .pipe(
        switchMap(() => {
          return this._stepper.selectionChange.pipe(
            map(event => event.selectedStep === this),
            startWith(this._stepper.selected === this),
          );
        }),
      )
      .subscribe(isSelected => {
        if (isSelected && this._lazyContent && !this._portal) {
          this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef!);
        }
      });
  }

  ngOnDestroy() {
    this._isSelected.unsubscribe();
  }

}
