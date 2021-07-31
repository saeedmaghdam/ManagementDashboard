import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { ProductModel } from "../models/ProductModel";

@Injectable()
export class ProductService {

	private subject = new Subject<any>();

	constructor(private http: HttpClient) { }

	sendNotification(value: any) {
		this.subject.next({ text: value });
	}

	getNotification() {
		return this.subject.asObservable();
	}

	get(): Observable<{ results: ProductModel[] }> {
		return this.http
			.get<{ results: ProductModel[] }>(`scrapper/api/v1/Products`, {})
			.pipe(catchError(() => of({ results: [] })));
	}

	create() {
		this.sendNotification(true);
	}
}