import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@anvlop/api-interfaces';

@Component({
  selector: 'anvlop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<IUser[]>('/api/users');
  constructor(private http: HttpClient) { }
}
