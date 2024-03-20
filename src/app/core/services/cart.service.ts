import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';
  myToken: any = {
    token: localStorage.getItem('loginToken'),
  };

  addToCart(productId: string | null): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + `cart`,

      {
        productId: productId,
      },
      {
        headers: this.myToken,
      }
    );
  }

  getUserCart(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `cart`, {
      headers: this.myToken,
    });
  }

  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${productId}`, {
      headers: this.myToken,
    });
  }
}
