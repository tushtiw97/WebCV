import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCurrentRouterLink } from '../route-store/route.action';
import { CurrentRouterLink } from '../route-store/route.reducer';
import { UtilityFunctionsService } from '../utility-functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /** The field to set the component height */
  componentHeightCssString: string;

  componentInitialized: boolean = false;

  applyTransition: boolean = false;

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
