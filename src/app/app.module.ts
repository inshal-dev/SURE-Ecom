import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product-view/product/product.component';
import { ProductDetailComponent } from './product-view/product-detail/product-detail.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressSectionComponent } from './address-section/address-section.component';
import { AddressService } from './services/address.service';
import { ProductServiceService } from './services/product-service.service';
import { PaymentComponent } from './payment/payment.component';
import { HoverUpDirective } from './hover-up.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterNavComponent } from './home/footer-nav/footer-nav.component';
import { OrderHistoryComponent } from './order-history/order-history.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeroComponent,
    NavBarComponent,
    CartComponent,
    ProductComponent,
    ProductDetailComponent,
    SearchFilterPipe,
    AddressSectionComponent,
    PaymentComponent,
    HoverUpDirective,
    PageNotFoundComponent,
    FooterNavComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [
    AddressService,
    ProductServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
