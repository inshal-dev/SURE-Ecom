import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
