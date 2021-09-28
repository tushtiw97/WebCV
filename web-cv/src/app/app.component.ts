import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentRouterLink } from './route-store/route.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /** The field to control active links */
  public currentLink: string;

  constructor (
    private store: Store<{routerStore: CurrentRouterLink}>,
  ) { }

  ngOnInit() {
    this.store.select('routerStore').subscribe((data: CurrentRouterLink) => {
      this.currentLink = data.currentRouterLink;
    });
  }

}
