import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _HttpClient: HttpClient) {}

  userInfo: any;
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/auth/';

  userRigister(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signup', userData);
  }

  userLogin(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signin', userData);
  }

  decodeInfo(): void {
    const encode = localStorage.getItem('loginToken');

    if (encode !== null) {
      const decode = jwtDecode(encode);
      this.userInfo = decode;
    }
  }
}
