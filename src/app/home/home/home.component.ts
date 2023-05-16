import { Component, EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable, Subscribable, Subscriber, Subscription, take } from 'rxjs';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 
  
  $products!:Observable<any>;
  cartList!: Subscription;
  cart!:Subscription;
  cartItem:any
  cartDec!:Subscription;

  productImages:Array<string> = [
    "../../../assets/assets/fossil.jpg",
    "../../../assets/assets/xyz1.jpg",
    "../../../assets/assets/xyz2.jpg",
    "../../../assets/assets/titan 1.svg",
    "../../../assets/assets/xyz3.jpg",
    "../../../assets/assets/xyz4.jpg",
    
  ]

  constructor(
    private productService: ProductServiceService
  ){
    //get all product data using productService
    this.getProductList();
    this.getCartList();
  }

  getProductList(){
    this.$products = this.productService.getProducts();
  }

  getCartList(){
    this.cart = this.productService.getCartList().subscribe(
      res => {
        this.cartItem = res 
      }
    );
  }
  addCart(item:any){
    this.cartList = this.productService.addCartItem(item).subscribe(res =>console.log(res))
    this.getCartList();
  }

  removeCart(id:any){
    this.cartDec = this.productService.deleteCartSpecificItem(id).subscribe(res => console.log(res));
    this.getCartList();
  }
 
  ngOndestory(){
    this.cartList.unsubscribe()
    this.cartDec.unsubscribe()
    this.cart.unsubscribe()
  }

  

}
