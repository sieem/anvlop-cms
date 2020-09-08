import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '@anvlop/shared/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: any,
  ) { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.appConfig.apiUrl}/${url}`);
  }

  public post<T>(url: string, payload: any, options?: T): Observable<T> {
    return this.http.post<T>(`${this.appConfig.apiUrl}/${url}`, payload, options);
  }

  public put<T>(url: string, payload: any, options?: T): Observable<T> {
    return this.http.put<T>(`${this.appConfig.apiUrl}/${url}`, payload, options);
  }

  public patch<T>(url: string, payload: any): Observable<T> {
    return this.http.patch<T>(`${this.appConfig.apiUrl}/${url}`, payload);
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.appConfig.apiUrl}/${url}`);
  }
}
