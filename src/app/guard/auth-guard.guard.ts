import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  console.log("USO U GUARD");
  console.log(localStorage.getItem('token'));
  let tok = localStorage.getItem('token');
  if (tok === null)
  {
    return false;
  }
  return true;
};
