import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsAndCertificationsComponent } from './projects-and-certifications/projects-and-certifications.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'bio', pathMatch: 'full', component: BioComponent},
  {path: 'projects-and-certifications', pathMatch: 'full', component: ProjectsAndCertificationsComponent},
  {path: 'skills', pathMatch: 'full', component: SkillsComponent},
  {path: 'contact', pathMatch: 'full', component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
