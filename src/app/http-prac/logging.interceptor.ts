import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    console.log(request.headers);
    return next.handle(request).pipe(tap(event => {
      if (event.type == HttpEventType.Response) {
        console.log("Response Arrived at:", new Date());
        console.log(event.body);
      }
    }));
  }
}
