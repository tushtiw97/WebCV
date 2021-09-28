import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { projectsAndCertifications } from '../models/data-for-export';
import { updateCurrentRouterLink } from '../route-store/route.action';
import { CurrentRouterLink } from '../route-store/route.reducer';
import { UtilityFunctionsService } from '../utility-functions.service';

@Component({
  selector: 'app-projects-and-certifications',
  templateUrl: './projects-and-certifications.component.html',
  styleUrls: ['./projects-and-certifications.component.scss']
})
export class ProjectsAndCertificationsComponent implements OnInit {
  
  componentInitialized: boolean = false;
  applyTransition: boolean = false;
  componentHeightCssString: string;
  public readonly projectsAndCertifications = projectsAndCertifications;

  constructor(
    private store: Store<{routerStore: CurrentRouterLink}>,
    private utilityFunctionService: UtilityFunctionsService
  ) { 
    this.componentHeightCssString = this.utilityFunctionService.computeScreenHeight();
  }

  ngOnInit() {
    this.store.dispatch(updateCurrentRouterLink({currentRouterLink: window.location.pathname}));
    this.componentInitialized = true;
    setTimeout(() => {
      this.applyTransition = true;
    }, 100);
  }

}
