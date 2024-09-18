import { Component, HostListener, Input } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { IPropertyBase } from "../../model/iPropertybase";

@Component({
    selector: 'app-property-card',
    // template: `<h1>I am a card</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: [`h1 {font-weight: normal;}`]
    styleUrls: ['property-card.component.css'],

})


export class PropertyCardComponent {
// @Input() property : IProperty;
@Input() property!: IPropertyBase;
@Input() hideIcons!: boolean;
    
            
        }