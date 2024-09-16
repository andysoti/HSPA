import { Component, HostListener, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'app-property-card',
    // template: `<h1>I am a card</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: [`h1 {font-weight: normal;}`]
    styleUrls: ['property-card.component.css'],

})


export class PropertyCardComponent {
// @Input() property : IProperty;
@Input()
property!: IProperty;
    
            
        }