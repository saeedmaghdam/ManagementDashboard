import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductAddUpdateFormComponent } from 'src/app/shared/components/product-add-update-form/product-add-update-form.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private modalService : ModalService, private viewContainerRef : ViewContainerRef) { }

  openAddProduct(){
    this.modalService.open(this.viewContainerRef, ProductAddUpdateFormComponent, "Add Product");
  }

  ngOnInit(): void {
  }

}
