import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { IProject } from '@anvlop/api-interfaces';

@Component({
  selector: 'anvlop-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  @Input('projectForm') projectForm: FormGroup;
  @Input('assets') assets: FormArray;
  @Input('events') events: Observable<IProject>;
  private eventsSubscription: Subscription; 

  constructor() { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((project) => {
      // remove the default empty field
      this.assets.removeAt(0);

      for (const asset of project.assets) {
        this.addAsset(asset);
      }
    });
  }

  addAsset(asset: string = '') {
    this.assets.push(new FormControl(asset));
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
}
