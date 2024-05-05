import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Categories } from 'src/app/core/interface/category';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss'],
})
export class CategorydetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}
  categoryId: string | null = '';
  CategoryDetails: Categories = {
    name: '',
    image: '',
    createdAt: '',
    updatedAt: '',
  };

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.categoryId = params.get('id');
      },
    });

    this._ProductsService.getCategoryDetails(this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.CategoryDetails = response.data;
      },
    });
  }
}
