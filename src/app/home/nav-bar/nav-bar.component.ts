import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {
 @Input() cartLen!:any;
 @Output() item = new EventEmitter<any>;



  constructor(private productService: ProductServiceService){
  }

  ngOnInit(): void {
    this.getCartLength()
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
