import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let startTime;

    if (req.method === 'GET') {
      startTime = +Date.now();
    }

    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => {
        return startTime && event.type === HttpEventType.Response;
      }),
      tap((event: HttpResponse<any>) => {
        console.log(`GET ${event.url} request duration: ${+Date.now() - startTime} ms`);
        return event;
      })
    );
  }
}
