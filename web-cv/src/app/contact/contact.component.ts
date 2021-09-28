import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCurrentRouterLink } from '../route-store/route.action';
import { CurrentRouterLink } from '../route-store/route.reducer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private store: Store<{routerStore: CurrentRouterLink}>
  ) { }

  ngOnInit() {
    this.store.dispatch(updateCurrentRouterLink({currentRouterLink: window.location.pathname}));
  }

}
