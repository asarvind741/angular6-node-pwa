import { Directive , ElementRef, OnInit} from '@angular/core';



@Directive({
    selector: '[appDropDownDirective]'
})

export class DropdownDirective {

    constructor(private el: ElementRef){
    }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = 'grey';
    }
}