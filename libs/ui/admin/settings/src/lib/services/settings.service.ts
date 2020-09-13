import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themes = [
    { value:'verhaygen', text: 'Verhaygen' },
  ];

  public initSettings = [
    { setting: 'siteTitle', type: 'text' },
    { setting: 'metaDescription', type: 'text' },
    { setting: 'customCss', type: 'code' },
    { setting: 'copyright', type: 'html' },
    { setting: 'theme', type: 'select', data: this.themes },
  ];

  constructor() { }
}
