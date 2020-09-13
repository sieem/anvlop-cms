import { Component, OnInit } from '@angular/core';
import { SettingsStoreService } from '../services/settings-store.service';

@Component({
  selector: 'anvlop-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customCss$ = this.settingsStoreService.getSettingsValue('customCss');
  public theme$ = this.settingsStoreService.getSettingsValue('theme');

  constructor(
    private settingsStoreService: SettingsStoreService,
  ) { }

  ngOnInit(): void {
    this.injectCustomCss();
  }

  async injectCustomCss(): Promise<void> {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = `data:text/css;base64,${btoa(await this.customCss$)}`;
    document.querySelector('head').appendChild(linkElement);
  }

}
