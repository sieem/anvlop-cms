import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class UiAdminAuthInterceptor implements HttpInterceptor {

  constructor(private readonly auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenizedReq = request.clone(
      {
        headers: request.headers.set('Authorization', 'bearer ' + this.auth.getToken())
      }
    );
    return next.handle(tokenizedReq)
  }
}
