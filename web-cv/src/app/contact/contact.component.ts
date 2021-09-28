import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCurrentRouterLink } from '../route-store/route.action';
import { CurrentRouterLink } from '../route-store/route.reducer';
import { UtilityFunctionsService } from '../utility-functions.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  componentInitialized: boolean = false;
  applyTransition: boolean = false;
  componentHeightCssString: string;

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
