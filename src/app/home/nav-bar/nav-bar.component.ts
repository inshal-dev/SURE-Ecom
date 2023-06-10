import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
 @Output() item = new EventEmitter<any>; 

  cartLen!:number;
  
  constructor(private productService: ProductServiceService){
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.getCartLength()
    }, 1000)
  }
  getCartLength(){
    this.productService.getCartList().subscribe((res)=>{
      let data = res;
      this.cartLen = data.length; 
    })
  }
 
  setRouteValue(routeName:any){
    this.item.emit(routeName)
  }
   
}
