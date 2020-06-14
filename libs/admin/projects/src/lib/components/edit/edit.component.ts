import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '@anvlop/api-interfaces';

@Component({
  selector: 'anvlop-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const body: IProject = {
      title: 'test',
      slug: 'test2',
      year: '2020',
      description: 'desc',
      assets: [],
    }
    console.log(this.http.get('api/projects'));
    this.http.post<any>('/api/project', body).subscribe();
  }

}
