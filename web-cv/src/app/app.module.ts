import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsAndCertificationsComponent } from './projects-and-certifications/projects-and-certifications.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { StoreModule } from '@ngrx/store';
import { updateRouterLinkReducer } from './route-store/route.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    ProjectsAndCertificationsComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      routerStore: updateRouterLinkReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
