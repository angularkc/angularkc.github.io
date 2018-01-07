import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IMeetup } from './meetup';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MeetupsService {
  private MEETUP_URL = './api/meetups/events.json';

  constructor(private http: HttpClient) { }
  
  public getUpcomingMeetups(): Observable<IMeetup[]> {
    return this.http.get<IMeetup[]>(this.MEETUP_URL);
  }
}
