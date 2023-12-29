import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertService } from '../services/alert-service/alert.service';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router, private alertService: AlertService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({ url: environment.api + request.url });
    }
    request = this.setToken(request);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((response: HttpErrorResponse) => {
        scrollTo(0, 0);
        console.log(response.error);

        if (response.error.message == 'Provided user has not found.') {
          this.router.navigate(['/auth/login']);
        }

        this.alertService.onError(
          response.error['message'] ?? 'Falha na operação'
        );
        return throwError(() => new Error());
      })
    );
  }

  setToken(request: HttpRequest<any>) {
    let token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`,
        },
      });
    }
    return request;
  }
}
