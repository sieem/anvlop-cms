import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlugService {
  public titleChanged: Subject<string> = new Subject<string>();

  constructor() { }

  toSlug(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  }
}
