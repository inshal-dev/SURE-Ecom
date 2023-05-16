import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address-section',
  templateUrl: './address-section.component.html',
  styleUrls: ['./address-section.component.scss']
})
export class AddressSectionComponent {
 
  $addressList!:Observable<any>;

 constructor(
  private addressService: AddressService
 ){
  this.getAddressList()
 }

 getAddressList(){
  this.$addressList = this.addressService.getAddress()
 }
   
}
