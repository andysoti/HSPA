import { Component, HostListener, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'app-property-card',
    // template: `<h1>I am a card</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: [`h1 {font-weight: normal;}`]
    styleUrls: ['property-card.component.html'],
    // card anim: here, class, and html card wrapper
    // animations: [
    //     trigger('scaleAnimation', [
    //         state('false', style({opacity: '1'})),
    //         state('true', style({opacity: '1'})),
    //            // // transform: 'scale(1.2,1.2)',
    //            // // transition-duration: '500ms',
    //            // // transition-timing-function: 'ease-out'}))
    //         transition('false => true', [
    //             style({transform: 'scale(1.3,1.3)', position: 'absolute' }),
    //             animate('5ms ease-out', style({transform: 'scale(1.2,1.2)', position: 'absolute' }))
    //                         ])
    //                     ]
    //                 )
    //             ]
})


export class PropertyCardComponent {
// @Input() property : IProperty;
@Input()
property!: IProperty;


// public fadeInStart = false;
//     // constructor() {this.fadeInStart = true;};
//     @HostListener('mouseenter')
//     onMouseEnter(){
//         this.fadeInStart = true;
//     }

    
            
        }