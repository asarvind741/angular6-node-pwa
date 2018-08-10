import { Directive, HostListener, HostBinding, ElementRef, OnInit, Renderer2} from '@angular/core';

// Host Binding Tutorial
// https://alligator.io/angular/hostbinding-hostlistener/


@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {

    @HostBinding('class.card') private isHovering: boolean;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2){
    }

    ngOnInit(){
      
    }
    // @HostListener('mouseover') onmouseover(){
    //     this.el.nativeElement.style.backgroundColor = 'red';
        
    // }

    // @HostListener('mouseleave') onmouseleave(){
    //     this.el.nativeElement.style.backgroundColor = '';
        
    // }

    @HostListener('mouseleave') onmouseleave(){
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
        this.isHovering =false;
    }

    @HostListener('mouseover') onmouseover(){
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
        this.isHovering =true;
    }

    
    
}