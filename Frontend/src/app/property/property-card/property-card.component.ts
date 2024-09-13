import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    // template: `<h1>I am a card</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: [`h1 {font-weight: normal;}`]
    styleUrls: ['property-card.component.html']
})


export class PropertyCardComponent {
    Property: any = {
        "id":1,
        "Name":"Birla House",
        "Type":"House",
        "Price":12000
    }

}