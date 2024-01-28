import { Injectable } from '@angular/core';
import { Store } from '../../../core/shared/model/store.model';
import { AuthenticatedUser, User, UserCredentials } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStore extends Store<AuthenticatedUser> {
}
