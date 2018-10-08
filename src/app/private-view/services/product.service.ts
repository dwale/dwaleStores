import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  createProduct(product) {
    return this.db.list('/products').push(product);
  }
  getProducts() {
    return this.db.list('/products');
  }
  getProduct(productId) {
    return this.db.object('/products/' + productId);
  }
}


