import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { skills } from '../models/data-for-export';
import { updateCurrentRouterLink } from '../route-store/route.action';
import { CurrentRouterLink } from '../route-store/route.reducer';
import { UtilityFunctionsService } from '../utility-functions.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  componentInitialized: boolean = false;
  applyTransition: boolean = false;
  componentHeightCssString: string;

  public readonly skills = skills;

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
