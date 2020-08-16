import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private readonly transferStateService: TransferStateService,
  ) { }

  public httpCall(url, key) {
    return isScullyGenerated()
      ? this.transferStateService.getState<any>(key)
      : this.http.get<any>(url).pipe(
        tap(item => this.transferStateService.setState<any>(key, item)));
  }
}
