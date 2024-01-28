import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '../../core/shared/model/action.model';
import { UserCredentials } from '../shared/model/user.model';
import { UserStore } from '../shared/store/user.store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAction extends Action<UserCredentials, Observable<boolean>> {

  readonly router = inject(Router);
  readonly store = inject(UserStore);

  readonly MOCK_CREDENTIALS: UserCredentials = {
    username: "test",
    password: "test"
  } 

  execute( credentials: UserCredentials ): Observable<boolean> {
    const {username, password} = this.MOCK_CREDENTIALS;
    const areCredentialsMatched = 
      credentials.username === username && 
      credentials.password === password;
    this.store.$state.update(state => ({...state, isAuthenticated: areCredentialsMatched}));
    this.router.navigate(['sales']);
    return of(areCredentialsMatched);
  }
}
