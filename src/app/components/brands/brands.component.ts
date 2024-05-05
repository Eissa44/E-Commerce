import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Categories } from 'src/app/core/interface/category';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}

  brandsData: Categories[] = [];

  ngOnInit(): void {
    this._ProductsService.allBrand().subscribe({
      next: (response) => {
        console.log(response);

        this.brandsData = response.data;
      },
    });
  }
}
