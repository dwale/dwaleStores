import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(categoryService: CategoriesService, private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
    console.log('Cats', this.categories$);
  }

  ngOnInit() {
  }

  saveProduct(product) {
  this.productService.createProduct(product);
  }
}
