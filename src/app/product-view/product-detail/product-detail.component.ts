import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  getId:any;
  product:any;
  productList!:Array<Product>;
  productSubscription!:Subscription;
  productCartQuantity:any

  cartList!:Subscription;
  cart!:Subscription;
  cartDec!:Subscription;
  cartItem:any;
  reload:boolean = false;
  productCartList:any = [];
  productImages:Array<string> = [
    "../../../assets/assets/fossil.jpg",
    "../../../assets/assets/xyz1.jpg",
    "../../../assets/assets/xyz2.jpg",
    "../../../assets/assets/titan 1.svg",
    "../../../assets/assets/xyz3.jpg",
    "../../../assets/assets/xyz4.jpg",
  ]
  cartLength!: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private productService: ProductServiceService,
    private route: Router
  ){

    this.getIdbyRoute()
    this.getProductByID()
    this.getCartList()
  }
  getProductByID(){
     this.productSubscription = this.productService.getProducts().subscribe(
      (res)=>{
        this.productList = res
        this.productList.forEach((element:any)=> {
           if(element.product_id == this.getId ) return this.product = element;
        });
      })
  }

 getIdbyRoute(){
  this.getId = this._activatedRoute.snapshot.paramMap.get("id")
 }

  getCartList(){
    this.cart = this.productService.getCartList().subscribe(
      res => {
         this.cartItem = res
         this.cartLength = this.cartItem.length
        this.cartItem.forEach((e:any)=>{
          if(e.product_id === this.getId){
            return this.productCartQuantity = e.productQuantity
          }
        })
      });
  }

  addCart(item:any){
    this.cartList = this.productService.addCartItem(item).subscribe(res =>console.log(res))
    this.getProductByID()
    this.getCartList()
  }
  removeCart(id:any){
    this.cartDec = this.productService.deleteCartSpecificItem(id).subscribe(res => console.log(res));
    this.getProductByID()
    this.getCartList()
  }

  routeToID(id:any){
    this.getId = id
    this.getProductByID()
    // this.route.navigate(['product-detail'])
    window.scroll(0,0)
  }

  buyNow(items:any){
   this.productService.buyNowCartItemCheck(items).subscribe((res)=> console.log(res))
  }

  ngOnDestory(){
    this.cartList.unsubscribe()
    this.cartDec.unsubscribe()
    this.cart.unsubscribe()
    this.productSubscription.unsubscribe()
  }
}
