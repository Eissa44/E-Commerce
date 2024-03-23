import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
})
export class NavBlankComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService
  ) {}
  cartNumber: number = 0;
  wishNumber: number = 0;

  @ViewChild('reNavbar') navblank!: ElementRef;

  @HostListener('window:scroll')
  onscroll(): void {
    if (scrollY > 250) {
      this._Renderer2.addClass(this.navblank.nativeElement, 'px-5');
      this._Renderer2.addClass(this.navblank.nativeElement, 'shadow');
    } else {
      this._Renderer2.removeClass(this.navblank.nativeElement, 'px-5');
      this._Renderer2.removeClass(this.navblank.nativeElement, 'shadow');
    }
  }

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.cartNumber = data;
      },
    });

    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.cartNumber = response.numOfCartItems;
      },
    });

    this._WishlistService.wishNumber.subscribe({
      next: (data) => {
        this.wishNumber = data;
      },
    });

    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        this.wishNumber = response.count;
      },
    });
  }

  signOut(): void {
    localStorage.removeItem('loginToken');
    this._Router.navigate(['./login']);
  }
}
