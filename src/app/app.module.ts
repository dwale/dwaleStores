import {environment} from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './public-view/home/home.component';
import { ProductsComponent } from './public-view/products/products.component';
import { ShoppingCartComponent } from './public-view/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './public-view/checkout/checkout.component';
import { SuccessfulOrderComponent } from './public-view/successful-order/successful-order.component';
import { UserOrdersComponent } from './public-view/user-orders/user-orders.component';
import { AdminProductsComponent } from './private-view/admin-products/admin-products.component';
import { AdminOrdersComponent } from './private-view/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './public-view/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    SuccessfulOrderComponent,
    UserOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckoutComponent},
      {path: 'success-order', component: SuccessfulOrderComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/products', component: AdminProductsComponent},
      {path: 'admin/orders', component: AdminOrdersComponent},
      {path: 'my/orders', component: UserOrdersComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
