import { Component, inject } from '@angular/core';
import { LoginForm } from './login.form';
import { LoginAction } from './login.action';
import { first, tap } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserCredentials } from '../shared/model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    LoginAction
  ]
})
export class LoginComponent {

  readonly loginAction = inject(LoginAction);
  readonly form: LoginForm = new LoginForm();

  readonly onFormSubmitted = (isLoginValid:boolean) => this.form.onSubmitted(isLoginValid)
  readonly login$ = (credentials: UserCredentials) => this.loginAction.execute(credentials).pipe(
    first(),
    tap(this.onFormSubmitted)
  )

  /** Whenever the user tries to log in */
  login() {
   this.login$(this.form.value).subscribe();
  }
}
