import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CalculationService} from '../../services/calculation.service';
import {ActivityService} from '../../services/activity.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  form = {
    width: null,
    length: null,
    activityId: '',
    currentLevel: ''
  };
  userId: any = '';
  isSuccessful = false;
  errorMessage = '';
  activityList = [];
  calculated = { currentDistance: 0, maxCapacity: 0 };

  constructor(
    private calculate: CalculationService,
    private actList: ActivityService,
    private router: Router,
    private userData: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.userId = this.userData.getToken();

    this.actList.getActivityList().subscribe(
      data => {
        this.activityList = data.data;
        console.log(data.data);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  onSubmit(): void {
    const {} = this.form;
    console.log(this.form);

    this.calculate.addHall(this.form).subscribe(
      response => {
        this.isSuccessful = true;
        this.calculated = response.data;
        },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  // redirect(): void{
  //   if ( this.isSuccessful ) {
  //     this.router.navigate(['login']);
  //   }
  // }
}
