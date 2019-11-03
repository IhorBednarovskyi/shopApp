import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;

  redirectUrl: string;

  login(isAdmin: boolean): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = val;
        this.isAdmin = isAdmin;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
