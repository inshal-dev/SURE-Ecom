import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressSectionComponent } from './address-section/address-section.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home/home.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailComponent } from './product-view/product-detail/product-detail.component';
import { ProductComponent } from './product-view/product/product.component';

const routes: Routes = [
  {
    path:'', 
    component:HomeComponent,
    title:'Sure'
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'products/:watch', 
    component: ProductComponent,
    title: 'Watches', 
  },
  {
    path:'product-detail/:id', 
    component: ProductDetailComponent,
    title: 'Sure'
  },
  {
    path:'address', 
    component: AddressSectionComponent,
    title: 'Sure'
  },
  {
    path: 'payment',
    component: PaymentComponent,
    title: 'Payment Gateway'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: '404'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
