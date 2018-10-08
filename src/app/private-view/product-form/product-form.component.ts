import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {ProductService} from '../services/product.service';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  id;
  product = {title: '',
  price: 0,
  category: '',
  imageUrl: ''};
  constructor(private route: ActivatedRoute, categoryService: CategoriesService, private productService: ProductService, private router: Router) {
    this.categories$ = categoryService.getCategories();
    console.log('Cats', this.categories$);
     this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService.getProduct(this.id).take(1).subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
  }

  saveProduct(product) {
    if (this.id) {
      this.productService.update(this.id, this.product);
    } else {
      this.productService.createProduct(product);
    }
    this.router.navigate(['/admin/products/']);
  }
}
