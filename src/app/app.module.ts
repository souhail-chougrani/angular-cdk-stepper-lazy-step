import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './stepper/step/step.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { PortalModule } from '@angular/cdk/portal';
import {StepContent} from './stepper/step/step-content.directive'
@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepComponent,
    StepContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
