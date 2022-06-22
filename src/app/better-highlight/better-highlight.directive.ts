import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string="transparent";
  @Input('appBetterHighlight') highlightColor:string="blue";

  @HostBinding('style.backgroundColor') bgcolor:string=this.defaultColor;
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
 ngOnInit(): void {
  // this.bgcolor=this.defaultColor;
  //  this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
 }
 @HostListener('mouseenter') mouseover(eventData:Event){
  // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  this.bgcolor=this.highlightColor;
 }
 @HostListener('mouseleave') mouseleave(eventData:Event){
  // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  this.bgcolor=this.defaultColor;
 }

}
