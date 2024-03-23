import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';
  wishNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  addToWish(itemId: string | undefined): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `wishlist`, {
      productId: itemId,
    });
  }

  getWishList(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `wishlist`);
  }

  removeWish(itemId: string | undefined): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `wishlist/${itemId}`);
  }
}
