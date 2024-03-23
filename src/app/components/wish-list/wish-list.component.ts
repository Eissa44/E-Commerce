import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { Product } from 'src/app/core/interface/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  constructor(
    private _WishlistService: WishlistService,
    private _ToastrService: ToastrService,
    private _CartService: CartService,
    private _Renderer2: Renderer2
  ) {}
  productsData: Product[] = [];
  wishListData: string[] = [];

  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        this.productsData = response.data;
        const newData = response.data.map((item: any) => item._id);
        this.wishListData = newData;
      },
    });
  }

  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this._CartService.cartNumber.next(response.numOfCartItems);
        this._ToastrService.success(response.message, 'Your FreshCart App');
        this._Renderer2.removeAttribute(element, 'disabled');
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      },
    });
  }

  addWish(id: string | undefined): void {
    this._WishlistService.addToWish(id).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
      },
    });
  }

  removeWish(id: string | undefined): void {
    this._WishlistService.removeWish(id).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message);
        this.wishListData = response.data;
        // this._WishlistService.wishNumber.next(response.count);

        const newData = this.productsData.filter((item: any) =>
          this.wishListData.includes(item._id)
        );
        this.productsData = newData;
      },
    });
  }
}
