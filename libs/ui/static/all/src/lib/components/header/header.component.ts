import { Component, OnInit } from '@angular/core';
import { SettingsStoreService } from '../../services/settings-store.service';

@Component({
  selector: 'anvlop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public siteTitle$ = this.settingsStoreService.getSettingsValue('siteTitle');

  constructor(
    private settingsStoreService: SettingsStoreService
  ) { }

  ngOnInit(): void {
  }

}
