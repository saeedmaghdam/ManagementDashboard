import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Guid } from 'guid-typescript';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { SourceModel } from '../../models/SourceModel';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add-update-form',
  templateUrl: './product-add-update-form.component.html',
  styleUrls: ['./product-add-update-form.component.scss']
})
export class ProductAddUpdateFormComponent implements OnInit {

  productName: string = "";
  productExternalId: string = "";
  productUrl: string = "";
  sourceType: string = "";
  sourceAddress: string = "";

  @ViewChild('productNameElem') productNameElem !: ElementRef;
  @ViewChild('productExternalIdElem') productExternalIdElem !: ElementRef;
  @ViewChild('productUrlElem') productUrlElem !: ElementRef;
  @ViewChild('sourceTypeElem') sourceTypeElem !: ElementRef;
  @ViewChild('sourceAddressElem') sourceAddressElem !: ElementRef;
  @ViewChild('saveAndCloseElem') saveAndCloseElem !: ElementRef;

  sources: Array<SourceModel> = [];

  stateChanged: EventEmitter<any> = new EventEmitter();
  isReadyToSubmit = false;

  constructor(private modalRef: NzModalRef, private productService: ProductService) {
    this.stateChanged.subscribe(() => {
      if (this.productName && this.productExternalId && this.productUrl && this.sources.length > 0){
        this.isReadyToSubmit = true;
        this.saveAndCloseElem.nativeElement.disabled = false;
        this.saveAndCloseElem.nativeElement.className = "button-blue";
      }
      else {
        this.isReadyToSubmit = false;
        this.saveAndCloseElem.nativeElement.disabled = true;
        this.saveAndCloseElem.nativeElement.className = "button-gray";
      }
    });
  }

  emitEmitter() {
    this.stateChanged.emit();
  }

  saveAndClose() {
    if (!this.productName) {
      alert('Product name is required.');
      this.productNameElem.nativeElement.focus();
      return;
    }
    if (!this.productExternalId) {
      alert('Product external id is required.');
      this.productExternalIdElem.nativeElement.focus();
      return;
    }
    if (!this.productUrl) {
      alert('Product url is required.');
      this.productUrlElem.nativeElement.focus();
      return;
    }
    if (this.sources.length == 0) {
      alert('At least, enter one source.');
      this.sourceAddressElem.nativeElement.focus();
      return;
    }

    if (this.isReadyToSubmit){
      this.productService.create();
      this.modalRef.destroy({ data: 'this the result data' });
    }
  }

  addSource() {
    if (!this.sourceType) {
      alert('Source type is required.');
      this.sourceTypeElem.nativeElement.focus();
      return;
    }
    if (!this.sourceAddress) {
      alert('Source address is required.');
      this.sourceAddressElem.nativeElement.focus();
      return;
    }

    this.sources = [
      ...this.sources,
      {
        id: Guid.create(),
        type: this.sourceType,
        address: this.sourceAddress
      }
    ];

    this.emitEmitter();
  }

  deleteSourceAddress(id: Guid) {
    if (this.sources.length == 0) {
      alert('There\'s not source item to remove.');
      return;
    }

    this.sources = this.sources.filter(x => x.id != id);

    this.emitEmitter();
  }

  ngOnInit(): void {

  }

}