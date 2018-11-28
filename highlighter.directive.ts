import { Directive,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el: ElementRef) { }


  @Input('appHighlighter') flag1: boolean;
  ngOnInit(){
  }
  ngOnChanges(){
    if(this.flag1){
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    if(!this.flag1){
      console.log("in highlighter else")
      this.el.nativeElement.style.backgroundColor = 'white'
    }
    
  }



}
