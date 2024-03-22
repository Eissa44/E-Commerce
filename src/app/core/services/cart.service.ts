import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';

  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  addToCart(productId: string | null): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + `cart`,

      {
        productId: productId,
      }
    );
  }

  getUserCart(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `cart`);
  }

  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${productId}`);
  }

  updateCartItem(productId: string, countNum: number): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `cart/${productId}`, {
      count: countNum,
    });
  }

  clearCartItems(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart`);
  }
}
