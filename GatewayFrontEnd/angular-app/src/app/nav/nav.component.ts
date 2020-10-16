import { Component } from '@angular/core';
import { AuthService } from '.././auth.service';

@Component({
  selector: 'nav',
  templateUrl: "./nav.component.html",
  styles: ['./../styles.css'],
})
export class NavComponent {
  title = 'frontend';

  constructor(
    public auth: AuthService,
  ) {
  }

  logout() {
    this.auth.logout();
  }
}
