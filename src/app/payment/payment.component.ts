import { Component, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  
  $finalList!: Subscription;
  data:any;
  amount:number = 0;
  bankList:any= [
    {
      name: 'ICICI', 
      checked: false
    },
    {
      name: 'Axis', 
      checked: false
    },
    {
      name: 'HDFC', 
      checked: false
    },
    {
      name: 'Kotak', 
      checked: false
    },
  ];
  
  bankName!:string;
  paymentOption!:Object;
  disabledCheck:boolean = false;
  totalAmount:any = 0;

  constructor(
    private productService: ProductServiceService,
    private route: Router
  ){ 
    this.getFinalCartList()
  
  }

  getFinalCartList(){
   this.$finalList = this.productService.getFinalCart().subscribe((res)=> {
    this.data = res; 
    console.log(this.data );
    
    if(this.data.productData.length > 1){
      this.data.productData.forEach((element:any) => {
        console.log( element.productQuantity); 
        this.totalAmount += element.productPrice * element.productQuantity
        this.amount += (element.productPrice - ((element.productDiscount / 100) * element.productPrice)) * element.productQuantity
        console.log(this.amount);
        
        console.log(this.totalAmount); 
      });
    }else{
      this.data.productData.forEach((element:any) => {
        this.totalAmount += element.productPrice
        this.amount += (element.productPrice - ((element.productDiscount / 100) * element.productPrice)) * element.productQuantity
        console.log(this.amount); 
      }); 
      
    }
  
   })
  }

  getBankName(item:any){
    this.bankName = item; 
  }

   getPaymentOption(category:any){  
    if(category.length > 1 && typeof(category) != 'string'){
      category = category.find((el:any)=> el.checked === true)
    }else{
      console.log(category); 
    } 
    this.productService.buyProduct(category).subscribe(res=> console.log(res))
    this.route.navigate([''])
   }



  ngOnDestory(){
    this.$finalList.unsubscribe()
  }

}