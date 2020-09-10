import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public initSettings = [
    { setting: 'siteTitle', type: 'text' },
    { setting: 'metaDescription', type: 'text' },
    { setting: 'customCss', type: 'code' },
    { setting: 'copyright', type: 'html' },
  ];

  constructor() { }
}
