import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { EducationBackgroundComponent } from './education-background/education-background.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';


const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'experience', component: WorkExperienceComponent},
  {path: 'specialization', component: SpecializationComponent},
  {path: 'education', component: EducationBackgroundComponent},
  {path: 'contact', component: ContactInformationComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
