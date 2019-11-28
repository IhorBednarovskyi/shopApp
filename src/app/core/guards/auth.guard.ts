import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
    RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

// @Ngrx
import { Store } from '@ngrx/store';
import { AppState } from './../@ngrx';
import * as RouterActions from './../@ngrx/router/router.actions';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { url } = state;
    return this.isUserAdmin(url);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const url = `/${route.path}`;
    return this.isUserAdmin(url) as boolean;
  }


  private isUserAdmin(url: string): boolean | UrlTree {
    if (this.authService.isAdmin) { return true; }

    this.authService.redirectUrl = url;
    this.store.dispatch(new RouterActions.Go({ path: ['/login'] }));
    return false;
  }

}
