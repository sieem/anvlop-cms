import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { tap } from 'rxjs/operators';
import { APP_CONFIG } from '@anvlop/shared/config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private readonly transferStateService: TransferStateService,
    @Inject(APP_CONFIG) private appConfig: any,
  ) { }

  public httpCall(url, key) {
    return isScullyGenerated()
      ? this.transferStateService.getState<any>(key)
      : this.http.get<any>(this.appConfig.apiUrl + '/' + url).pipe(
        tap(item => this.transferStateService.setState<any>(key, item)));
  }
}
