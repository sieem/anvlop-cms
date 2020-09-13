import { Component, OnInit } from '@angular/core';
import { Page } from '@anvlop/shared/interfaces';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'anvlop-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public readonly pages$: Observable<Page[]> = this.api.httpCall('pages', 'pages').pipe(shareReplay(1));
  public menuOpen: boolean;

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => this.menuOpen = false);
  }

  toggleMenu(close): void {
    close ? this.menuOpen = false : this.menuOpen = !this.menuOpen;
  }

}
