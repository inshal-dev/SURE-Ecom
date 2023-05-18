import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url:any = 'http://localhost:3000/'
  constructor(
    private http: HttpClient
  ) { }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  addCartItem(item:any){
    return this.http.post(this.url + 'cart', {item: item})
  }

  getCartList():Observable<any>{
    return this.http.get(this.url + 'cart-item')
  }

  deleteCartItemFromList(id:any){
    return this.http.post(this.url+ 'cart-remove', {id:id});
  }

  deleteCartSpecificItem(id:any){
    return this.http.post(this.url + 'cart-remove-item', {product_id: id});
  }

  buyNowCartItemCheck(item:any){
    return this.http.post(this.url + 'buy-now', {item: item})
  }
}
