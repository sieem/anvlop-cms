import { Component, OnInit } from '@angular/core';
import { Page } from '@anvlop/shared/interfaces';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'anvlop-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public readonly pages$: Observable<Page[]> = this.api.httpCall('pages', 'pages').pipe(shareReplay(1));

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
  }

}
