import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ProductModel } from "../models/ProductModel";

@Injectable()
export class ProductService {

	constructor (private http : HttpClient) { }

	get() : Observable<{ results: ProductModel[] }>{
		return this.http
			.get<{ results: ProductModel[] }>(`scrapper/api/v1/Products`, { })
			.pipe(catchError(() => of({ results: [] })));
	}
}