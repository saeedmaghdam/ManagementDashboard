import { Injectable, ViewContainerRef } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzModalRef } from 'ng-zorro-antd/modal';


@Injectable()
export class ModalService {

	constructor(private modal: NzModalService) { }

	open(viewContainerRef: ViewContainerRef, component: any, title: string): void {
		const modal = this.modal.create({
			nzTitle: title,
			nzContent: component,
			nzViewContainerRef: viewContainerRef,
			nzComponentParams: { },
			nzOnOk: () => {},
			nzFooter: [ ]
		});
		// const instance = modal.getContentComponent();
		// modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
		// // Return a result when closed
		// modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
	}
}