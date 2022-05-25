import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count = 0;
  title = 'shared-component-app';

  onClick(): void {
    this.count++;
  }
}
