import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { DollarOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(...[DollarOutline]);
  }

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  ngOnInit(): void {
  }

}
