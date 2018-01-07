import { ISocial } from './social';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public socialContacts: ISocial[] = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/search?q=angularkc',
      logoUrl: 'fa-twitter'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/angularkc/',
    logoUrl: 'fa-facebook'
  },
  {
    name: 'Meetup',
    url: 'https://www.meetup.com/angularkc/',
    logoUrl: 'fa-meetup'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/angularkc/',
    logoUrl: 'fa-github'
  },
  {
    name: 'Slack',
    url: 'https://angularkc.slack.com',
    logoUrl: 'fa-slack'
  }
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon('angular', sanitizer.bypassSecurityTrustResourceUrl('assets/angular.svg'))
      .registerFontClassAlias('fontawesome', 'fa');
  }

}
