import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router: Router, private _CartService: CartService) {}
  cartNumber: number = 0;

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
  }

  signOut(): void {
    localStorage.removeItem('loginToken');
    this._Router.navigate(['./login']);
  }
}
