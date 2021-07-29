import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { HomeFill, CaretDownFill } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private iconService: NzIconService) { 
    this.iconService.addIcon(...[ HomeFill, CaretDownFill ]);
  }

  ngOnInit(): void {
  }

}
