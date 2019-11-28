import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../../core/@ngrx';

import * as RouterActions from './../../../core/@ngrx/router/router.actions';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from './../../../core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  isAdmin: boolean;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    public authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
      this.setMessage();
  }

  ngOnDestroy() {
      this.unsubscribe.complete();
  }

  onLogin() {
    this.message = 'Log in ...';

    const observer = {
      next: () => {
        this.setMessage();
        if (this.authService.isLoggedIn && this.authService.isAdmin) {
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin';

          this.store.dispatch(new RouterActions.Go({ path: [redirect] }));
        }
      },
      error: (err: any) => console.log(err)
    };
    this.authService.login(this.isAdmin)
      .subscribe(observer);
  }

  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    const userTitle = this.authService.isAdmin ? ' as Admin' : ' as User';
    const logOpt = this.authService.isLoggedIn;

    this.message = 'Logged ' + (logOpt ? 'in' : 'out') +
      (logOpt ? userTitle : '');
  }

}
