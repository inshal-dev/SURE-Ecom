import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  url:any = 'http://localhost:3000/'

  constructor(
    private http: HttpClient
  ) { }

  getAddress():Observable<any>{
    return this.http.get(this.url + 'address');
  }
  postAddress(item:any):Observable<any>{
    return this.http.post(this.url + 'user-address', {item: item});
  }
  getCities(){
    return this.http.get(this.url + 'cities');
  }

  deleteAddress(_id:any):any{
    return this.http.post(this.url + 'remove-address', {id: _id})
  }
  editAddress(item:any){
    return this.http.post(this.url + 'update-address', {item: item})
  }
  
  userAddressList(data:any){
    return this.http.post(this.url + 'cart-data', { addressData: data })
  }
}
