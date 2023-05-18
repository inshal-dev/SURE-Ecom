import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address-section',
  templateUrl: './address-section.component.html',
  styleUrls: ['./address-section.component.scss']
})
export class AddressSectionComponent {
 
  $addressList!:Observable<any>;
  city!:any;
  cityDefault:any
  addressForm = new FormGroup({
    firstLine: new FormControl(''),
    secondLine: new FormControl(''),
    landmark: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl('')
  })
  address:boolean = true;

 constructor(
  private addressService: AddressService,
  private ref: ChangeDetectorRef
 ){
  this.getAddressList()
  this.getCities()
 }

 getAddressList(){
  this.$addressList = this.addressService.getAddress()
 }
   
 addNewAddress(){
  this.addressService.postAddress(this.addressForm.value).subscribe(res => console.log(res))
 }

 getCities(){
   this.addressService.getCities().subscribe(
    (res) =>{
      this.city = res
    }
   ) 
    this.addressForm.reset()
   this.getAddressList()  
   this.ref.detectChanges()
   this.address = false
 } 
}
