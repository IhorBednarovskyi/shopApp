import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

interface Config {
    urlApi: string;
    urlList: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private defaultConfig: Config = {
    urlApi: 'http://localhost:3000',
    urlList: [
      { productsList: '/products' },
      { cartProductsList: '/cart' },
      { ordersList: '/orders'}
    ]
  };

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient
  ) { }

  getSettings() {
    const config: Config = this.localStorage.get('appConfig');
    if (config) {
      return of(config);
    }

    return this.http.get<Config>('/assets/app-settings.json')
      .pipe(
        retry(2),
        tap(serverConfig => this.localStorage.save('appConfig', serverConfig)),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      return of(this.defaultConfig);
    }
  }
}
