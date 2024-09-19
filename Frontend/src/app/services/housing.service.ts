import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPropertyBase } from '../model/iPropertybase';
import { Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService { // shared instance of service

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=> {
        const propertiesArray: Array<IProperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && (data as any)[id].SellRent === SellRent){
              propertiesArray.push((data as any)[id]);} // changed from data to (data as any)
        }
        return propertiesArray;
      })
    );

    }


  addProperty(property: Property) {
    localStorage.setItem('newProp', JSON.stringify(property));
  }

}
