import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _Renderer2: Renderer2
  ) {}

  cartDetails: any = null;

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        console.log(this.cartDetails);
      },
    });
  }

  removeItem(id: string, element: HTMLButtonElement) {
    this._Renderer2.setAttribute(element, 'disabled', 'true ');

    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        this._Renderer2.removeAttribute(element, 'disabled');
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      },
    });
  }
}
