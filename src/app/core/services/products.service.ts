import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';

  getProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'products');
  }

  getCategories(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'categories');
  }

  getProductDetails(id: string | null): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `products/${id}`);
  }
}
