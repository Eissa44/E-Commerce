import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Categories } from 'src/app/core/interface/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}

  categoryData: Categories[] = [];

  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next: (response) => {
        this.categoryData = response.data;
      },
    });
  }
}
