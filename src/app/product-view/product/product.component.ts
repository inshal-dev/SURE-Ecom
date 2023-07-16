import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  searchTerm:any;
  $productList!:Product | any;
  cartList!:Subscription;
  cart!:Subscription;
  cartDec!:Subscription;
  cartItem:any;
  color:any;
  productTemp:any;
  category:any;
  productCategory!: Subscription;
  productCategoryList:Array<Object> | any;




  productImages:Array<string> = [
    "../../../assets/assets/fossil.jpg",
    "../../../assets/assets/xyz1.jpg",
    "../../../assets/assets/xyz2.jpg",
    "../../../assets/assets/titan 1.svg",
    "../../../assets/assets/xyz3.jpg",
    "../../../assets/assets/xyz4.jpg",
  ]

  productColor:Array<Object> | any = [
   {
     color: 'Red',
     check : false
   },
   {
    color:'Blue',
    check : false
   },
   {
    color: 'Black',
    check: false
   },
   {
    color: 'White',
    check: false
   },
   {
    color: 'Brown',
    check: false
   },
   {
    color: 'Yellow',
    check: false
   }

  ]
  cartLength: any;

  constructor(
    private productService: ProductServiceService,
    private _activatedRoute: ActivatedRoute,
    ){

    this.getCartList()
    this.category = this._activatedRoute.snapshot.paramMap.get("watch")
    console.log(this.category);

    if(this.category === ''){
      this.getAllProducts()
    }else{
      this.getProductsByCategory(this.category)
    }

  }



  getAllProducts(){
    this.productService.getProducts().subscribe((res)=> {
     this.$productList = res
    } );
  }

  getProductsByCategory(category:any){
    this.productCategory = this.productService.getProducts().subscribe(
      (res)=>{
        this.productCategoryList = res
        this.productCategoryList = this.productCategoryList.filter((el:any)=> { return el.category === category})
      }
    )
  }

  //router changed data
  routeValue(event:any){
    this.getProductsByCategory(event)
    this.category = event
  }

  //filter by color

  getProductByColor(event:any, color:any){
    if(event.target.checked){
      console.log(color);
      this.productCategory = this.productService.getProducts().subscribe(
        (res)=>{
          if(this.category == ''){
            this.$productList = this.$productList.filter((el:any)=> { return el.color === color});

          }else{
            this.productCategoryList = res
            this.productCategoryList = this.productCategoryList.filter((el:any)=> { return el.color === color})
          }
        }
      )
    }else {
      this.getAllProducts()
    }

  }

  addCart(item:any){
    this.cartList = this.productService.addCartItem(item).subscribe(res =>console.log(res));

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
        this.cartLength = this.cartItem.length;
        console.log(this.cartLength);

      }
    );
  }

  ngOndestory(){
    this.cartList.unsubscribe()
    this.cart.unsubscribe()
    this.cartDec.unsubscribe()
  }
}
