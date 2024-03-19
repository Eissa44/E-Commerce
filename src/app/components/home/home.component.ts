import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/interface/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CuttextPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}

  productsData: Product[] = [];

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.productsData = response.data;
      },
    });
  }
}
