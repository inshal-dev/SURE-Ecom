import { Component, Inject, inject } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {


  constructor(@Inject(ProductServiceService) private _productService:any){}
  ngOnInit(){
   console.log('order is workign');

   this.getPlaceItemList()
  }
  getPlaceItemList(){
    this._productService.orderHistory().subscribe(
      (res:any) => console.log(res)

    );

  }
}
