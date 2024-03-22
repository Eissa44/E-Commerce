import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CuttextPipe,
    NgxPaginationModule,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _Renderer2: Renderer2,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  productsData: Product[] = [];
  pageSize: number = 0;
  currentPage: number = 1;
  totalPage: number = 0;
  term: string = '';

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        this.productsData = response.data;
        this.pageSize = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.totalPage = response.results;
        console.log(response);
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

  pageChanged(event: any): void {
    this._ProductsService.getProducts(event).subscribe({
      next: (response) => {
        this.productsData = response.data;
        this.pageSize = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.totalPage = response.results;
        console.log(response);
      },
    });
  }
}
