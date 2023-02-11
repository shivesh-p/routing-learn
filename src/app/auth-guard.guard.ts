import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      }
      else {
        this.router.navigate(['/']);
        return false;

      }
    })
  }

  canActivateChild({ route, state }: { route: ActivatedRouteSnapshot; state: RouterStateSnapshot; }): boolean | Observable<boolean> | Promise<boolean> {
    return this, this.canActivate(route, state);
  }
}
