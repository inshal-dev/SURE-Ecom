import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverUp]'
})
export class HoverUpDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseover') mouseOver(){ 
    this.elementRef.nativeElement.style.backgroundColor ='#032433'; 
    this.elementRef.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') mouseLeave(){ 
    this.elementRef.nativeElement.style.backgroundColor ='transparent'; 
    this.elementRef.nativeElement.style.color = '#032433'
  }
  
}
