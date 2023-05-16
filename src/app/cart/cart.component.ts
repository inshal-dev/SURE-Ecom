import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
 
   $cart!: Observable<any>;
  totalValue:number = 0;
  sgst:number = 0;


  constructor(
    private productService: ProductServiceService
  ){
   this.getCartLists()
  }
  getCartLists(){
    this.$cart = this.productService.getCartList()
  }

  productImages:Array<string> = [
    "../../../assets/assets/fossil.jpg",
    "../../../assets/assets/xyz1.jpg",
    "../../../assets/assets/xyz2.jpg",
    "../../../assets/assets/titan 1.svg",
    "../../../assets/assets/xyz3.jpg",
    "../../../assets/assets/xyz4.jpg",
    
  ]


  getCartValue(event:any, items:any){  
    if(event.target.checked){
      this.totalValue += items.productPrice * items.productQuantity   
      return this.totalValue  
    }else{
      this.totalValue -= items.productPrice * items.productQuantity
      return this.totalValue
    }
      
  }

  deleteCartItem(id:any){
    this.productService.deleteCartItemFromList(id).subscribe((res)=> console.log(res))
    this.getCartLists()
  }
}
