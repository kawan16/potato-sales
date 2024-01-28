import { CanActivateFn, Router } from '@angular/router';
import { UserStore } from '../store/user.store';
import { inject } from '@angular/core';

export const isAuthenticatedGuard: CanActivateFn = () => {
  const store = inject(UserStore);
  const router = inject(Router);
  const isAuthenticated = store.$state().isAuthenticated;
  console.log('is au', isAuthenticated);
  if (isAuthenticated) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
