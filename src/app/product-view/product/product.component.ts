import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  

  searchTerm:any;
  $productList!:Observable<any>;
  cartList!:Subscription;
  cart!:Subscription;
  cartDec!:Subscription;
  cartItem:any;

  productTemp:any;

  productImages:Array<string> = [
    "../../../assets/assets/fossil.jpg",
    "../../../assets/assets/xyz1.jpg",
    "../../../assets/assets/xyz2.jpg",
    "../../../assets/assets/titan 1.svg",
    "../../../assets/assets/xyz3.jpg",
    "../../../assets/assets/xyz4.jpg",
    
  ]
  constructor(private productService: ProductServiceService){
    this.getAllProducts()
    this.getCartList()
  }
  
  getAllProducts(){
    this.$productList = this.productService.getProducts()
  }
  
  addCart(item:any){
    this.cartList = this.productService.addCartItem(item).subscribe(res =>console.log(res))
    this.getCartList()
  }
 
  removeCart(id:any){
    this.cartDec = this.productService.deleteCartSpecificItem(id).subscribe(res => console.log(res));
    this.getCartList()
  }

  getCartList(){
    this.cart = this.productService.getCartList().subscribe(
      res => { 
        this.cartItem = res 
      }
    );
  }

  ngOndestory(){
    this.cartList.unsubscribe()
    this.cart.unsubscribe()
    this.cartDec.unsubscribe()
  }
}
