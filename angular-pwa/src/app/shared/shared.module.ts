import { NgModule } from '@angular/core';
import { DropdownDirective } from 'src/app/shared/background-color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/app/shared/highlight.directive';


@NgModule({

    declarations: [
        DropdownDirective,
        HighlightDirective,
        
    ],
    imports: [
        
    ],
    exports: [
        DropdownDirective,
        HighlightDirective,
        ReactiveFormsModule,
        FormsModule
    ]

})

export class SharedModule { }