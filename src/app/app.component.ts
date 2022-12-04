import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OktaAuthService } from '@okta/okta-angular';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nasa-api-ng';
  //  isAuthenticated: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}
