
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IPropertyBase } from '../../model/iPropertybase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
SellRent = 1;

  properties!: IPropertyBase[];

constructor(private route: ActivatedRoute, private housingService: HousingService) {}

ngOnInit(): void {

  if(this.route.snapshot.url.toString()){
    this.SellRent = 2; // if this is 1 we are on base url, otherwise we have enetered the sell page
  }
  this.housingService.getAllProperties(this.SellRent).subscribe(
    data=>{
          this.properties=data;
          // const newProperty = JSON.parse(localStorage.getItem('newProp')!);
          // if (newProperty.SellRent === this.SellRent) {
          //   this.properties = [newProperty, ...this.properties];
          // }

          console.log(data);
          
        },
    error => {console.log('httperror:'); console.log(error);}
        );
  
  // this.http.get('data/properties.json').subscribe(
  //   data=>{
  //     this.properties=data;
  //     console.log(data)}
  //   );
  
}

}
