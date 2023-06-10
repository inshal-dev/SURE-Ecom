import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty, Observable, Subscription, of } from 'rxjs';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address-section',
  templateUrl: './address-section.component.html',
  styleUrls: ['./address-section.component.scss']
})
export class AddressSectionComponent {
 
  $addressList!:Observable<any>;
  cityList!: Subscription;
  city!:any;
  cityDefault:any
  stateList:any;  
  editAddress!:any; 

  addressForm = new FormGroup({
    firstLine: new FormControl('', Validators.required),
    secondLine: new FormControl('', Validators.required),
    landmark: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    pincode: new FormControl('',Validators.required)
  })
  address:boolean = true;
  check:boolean = true;
  stateListedit: any;
  addressCart:any;
  
  index!:number;

 constructor(
  private addressService: AddressService,
  private ref: ChangeDetectorRef,
  private route: Router
 ){
  this.getAddressList()
  this.getCities() 
  
}

 getAddressList(){
  this.$addressList = this.addressService.getAddress()  
  
 }
   
 addNewAddress(){
  this.addressService.postAddress(this.addressForm.value).subscribe(res => console.log(res))
    this.addressForm.reset()
   this.getAddressList()  
   this.ref.detectChanges()
  this.address = false
 }

 getCities(){
   this.cityList = this.addressService.getCities().subscribe(
    (res) =>{
      this.city = res
      this.city = this.city.cities; 
    })  
 } 


 //get State
 getState(state:any){ 
  console.log(state);

  this.stateList =  this.city.filter((el:any)=> el.State == state); 
  console.log(this.stateList);
  
 }

 getCityForEdit(state:any){  
  this.stateListedit = this.city.filter((el:any)=> el.State == state); 
  console.log(this.stateList);
  
 }
 
  checkValue(event:any, item:any, i:number){
    if(event.target.checked){
      this.check = false
      this.addressCart = item
      this.index = i
      
    }else{
      this.check = true
      this.addressCart = ''
    }
  }

  rmAddress(_id:any){ 
    this.addressService.deleteAddress(_id).subscribe((res:any)=>console.log(res))
    this.getAddressList();
  }

  updateAddress(item:any){
    this.address = true
    this.editAddress = item;  
    console.log(this.stateList);
  }
  edit_Address(){
    this.addressService.editAddress(this.editAddress).subscribe((res:any)=> console.log(res))
    this.editAddress = false
  }

 sendAddress(){
  this.addressService.userAddressList(this.addressCart).subscribe(res => console.log(res))
  this.route.navigate(['payment'])
 }

  ngOnDestory(){
    this.cityList.unsubscribe()
  }

}
