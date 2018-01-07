import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('whoWeAreAnimation', [
      transition('* => *', [
        // this hides everything right away
        query(':enter', style({ opacity: 0 })),

        // starts to animate things with a stagger in between
        query(':enter', stagger('2000ms', [
          animate('2s', style({ opacity: 1 }))
          // animate(1000, keyframes([
          //   style({opacity:1, transform: 'translateX(0)', offset: 0}),
          //   style({opacity:1, transform: 'translateX(-15px)', offset: 0.7}),
          //   style({opacity:0, transform: 'translateX(100%)', offset: 1.0}),
          // ]))
        ]))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  public descriptions: string[] =
  [
    'We are Angular enthusiasts.',
    'We are Angular newbies.',
    'We want to learn about web development using the Angular framework.',
    'We want to share our knowledge about web development with others.',
    'We want to build a highly technical, exciting, and collaborative Angular community in Kansas City.'
    ];

  constructor() { }

  ngOnInit() {
  }

}
