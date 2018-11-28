import { Directive,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appFade]'
})
export class FadeDirective {
 
  constructor(private el: ElementRef) { }


  @Input('appFade') flag : boolean;
  ngOnInit(){
   
  }
  ngOnChanges(){
   
    if(this.flag){
      console.log("in fader");    
      this.el.nativeElement.style.backgroundColor = 'grey';
    }
    if(!this.flag){
      console.log("in fader else")
      this.el.nativeElement.style.backgroundColor = 'white'
    }
   
  }





}
