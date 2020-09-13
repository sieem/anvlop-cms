import { Injectable } from '@angular/core';
import { ISetting } from '@anvlop/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themes = [
    { value:'verhaygen', text: 'Verhaygen' },
  ];

  public initSettings: ISetting[] = [
    { slug: 'siteTitle', text: 'Site title',  type: 'text' },
    { slug: 'metaDescription', text:'Meta description', type: 'text' },
    { slug: 'customCss', text: 'Custom CSS', type: 'code' },
    { slug: 'copyright', text: 'Copyright', type: 'html' },
    { slug: 'theme', text: 'Theme', type: 'select', data: this.themes },
  ];

  constructor() { }
}
