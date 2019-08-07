import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { EducationBackgroundComponent } from './education-background/education-background.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrintComponent } from './print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WorkExperienceComponent,
    SpecializationComponent,
    EducationBackgroundComponent,
    ContactInformationComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
