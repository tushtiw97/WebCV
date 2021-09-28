import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BioTimelineModes } from '../models/bio-timeline-modes.enum';
import { userActivityTimeline } from '../models/data-for-export';
import { TimelineData } from '../models/timeline-data';
import { updateCurrentRouterLink } from '../route-store/route.action';
import { CurrentRouterLink } from '../route-store/route.reducer';
import { UtilityFunctionsService } from '../utility-functions.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  public componentHeightCssString: string = '';
  public componentInitialized: boolean = false;
  applyTransition: boolean = false;
  isMobileView: any;
  currentMode: string = BioTimelineModes.BIO;

  public readonly BioTimelineModes = BioTimelineModes;
  public readonly timelineData = userActivityTimeline;

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
    this.isMobileView = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

}
