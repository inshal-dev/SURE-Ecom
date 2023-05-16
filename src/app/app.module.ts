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
import { FormsModule } from '@angular/forms';
import { AddressSectionComponent } from './address-section/address-section.component';

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
    AddressSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
