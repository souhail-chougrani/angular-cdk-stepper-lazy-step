import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],

})
export class StepperComponent extends CdkStepper implements AfterContentInit {
  @ContentChildren(CdkStep) cdkSteps!: QueryList<CdkStep>;

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
  OnInit() {

  }


  override ngAfterContentInit() {
    super.ngAfterContentInit();
    this.cdkSteps.forEach(step => console.log(step.content))
  }
}
