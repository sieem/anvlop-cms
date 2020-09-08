import { Injectable } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiService } from '@anvlop/ui/shared';

@Injectable({
  providedIn: 'root'
})
export class UploadAssetService {

  constructor(private api: ApiService) { }

  public upload(projectId: string, formData: FormData) {
    return this.api.post<any>(`asset/${projectId}`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }
}
