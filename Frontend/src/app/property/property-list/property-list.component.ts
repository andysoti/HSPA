import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
      {
      "id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000},
      {
      "id":2,
      "Name":"Erose Villa",
      "Type":"House",
      "Price":30000},
      {
      "id":3,
      "Name":"Mulberry Suite",
      "Type":"House",
      "Price":9000},
      {
      "id":4,
      "Name":"Soti Residence",
      "Type":"House",
      "Price":170000},
      {
      "id":5,
      "Name":"Valley Home",
      "Type":"House",
      "Price":19500},
      {
      "id":6,
      "Name":"San Diego House",
      "Type":"House",
      "Price":9500}

]

constructor() {}
ngOnInit(): void {
  
}

}
