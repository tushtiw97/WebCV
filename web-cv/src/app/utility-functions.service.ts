import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityFunctionsService {

  public navBarHeight: string;

  computeScreenHeight(): string {
    if (!this.navBarHeight) {
      this.navBarHeight = getComputedStyle(document.querySelector('#navBarDiv')).height;
    }
    return 'calc(100vh - ' + this.navBarHeight + ')';
  }

}
