import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    name: null,
    email: null,
    birthDate: null,
    login: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  onSubmit(): void {
    const {  } = this.form;

    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.redirect();
      },
      badData => {
        try {
          this.errorMessage = badData.error.errors;
        } catch (ex) {
          this.errorMessage = 'Ops! algo deu errado';
        }
        this.isSignUpFailed = true;
      }
    );

  }

  redirect(): void{
    if ( this.isSuccessful ) {
      this.router.navigate(['login']);
    }
  }

}
