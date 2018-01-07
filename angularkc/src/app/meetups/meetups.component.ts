import { Component, OnInit } from '@angular/core';
import { MeetupsService } from './meetups.service';
import { IMeetup } from './meetup';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss'],
  providers: [ MeetupsService ]
})
export class MeetupsComponent implements OnInit {
  public upcomingMeetups: IMeetup[];

  constructor(private meetupsService: MeetupsService) { }

  ngOnInit() {
    this.meetupsService.getUpcomingMeetups()
    .subscribe(events => {
        this.upcomingMeetups = events;
    });
  }

}
