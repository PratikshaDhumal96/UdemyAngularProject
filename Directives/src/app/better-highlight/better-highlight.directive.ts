import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string = "transparent";
  @Input() highlightedColor : string = "blue"

  @HostBinding ('style.backgroundColor') backgroundColor : string=this.defaultColor;

  constructor(private renderer : Renderer2,private elRef :ElementRef) { }

  ngOnInit(){

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');

  }
  @HostListener('mouseenter') mouseover(eventData : Event){
    this.backgroundColor = this.highlightedColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
   }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
  }

}
