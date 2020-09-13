import { Component, OnInit, Input } from '@angular/core';
import { IAsset } from '@anvlop/shared/interfaces';

@Component({
  selector: 'anvlop-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  @Input() asset: IAsset;

  constructor() { }

  ngOnInit(): void {
  }

}
