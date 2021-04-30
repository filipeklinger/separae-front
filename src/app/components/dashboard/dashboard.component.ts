import { Component, OnInit } from '@angular/core';
import {HallService} from '../../services/hall.service';
import {ActivityService} from '../../services/activity.service';
import {Route} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activityList = [];
  errorMessage = '';
  restriction = '';

  constructor(
    private hall: HallService,
    private activity: ActivityService,
  ) { }

  ngOnInit(): void {
    this.showActList();
  }

  showActList(): void{
    this.activity.getActivityList().subscribe(
      data => {
        this.activityList = data.data;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
