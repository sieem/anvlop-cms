import { Component, OnInit } from '@angular/core';
import { SettingsStoreService } from '../../services/settings-store.service';

@Component({
  selector: 'anvlop-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public copyright$ = this.settingsStoreService.getSettingsValue('copyright');

  constructor(
    private settingsStoreService: SettingsStoreService
  ) { }

  ngOnInit(): void {
  }

}
