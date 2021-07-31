import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/ProductModel';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  total = 1;
  products: ProductModel[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];

  subscription: Subscription;

  loadDataFromServer(): void {
    this.loading = true;
    this.productService.get().subscribe(data => {
      console.log(data.results);
      this.loading = false;
      this.total = 200; // mock the total data here
      this.products = data.results;
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    this.loadDataFromServer();
  }

  copy(event: Event, value: string) {
    var element = event.target;

    const el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    let originalColor = "#000";

    let className = (element as HTMLElement).className;
    if (className.indexOf("details") != -1)
      originalColor = "#949494";

    (element as HTMLElement).style.color = "#1ac537";
    setTimeout(() => { (element as HTMLElement).style.color = originalColor; }, 1000);
  };

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getNotification().subscribe(data => {
      if (data) {
        this.loadDataFromServer();
      }
    });
  }

  ngOnInit(): void {
    this.loadDataFromServer();
  }

}