import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '@anvlop/shared/interfaces';

@Component({
  selector: 'anvlop-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  projects$ = this.http.get<Project[]>('/api/projects');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
