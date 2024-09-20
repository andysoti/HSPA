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

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.id === id);
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=> {
        const propertiesArray: Array<IProperty> = [];
        
        const localProperties = JSON.parse(localStorage.getItem('newProp')!);
        if (localProperties) {
          for (const id in localProperties) {
            if(SellRent){
                if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
                  propertiesArray.push(localProperties[id]);
                    }
            }
                else{
                  propertiesArray.push(localProperties[id]);
                }
          }
        }

        for (const id in data) {
              if (SellRent) {
                    if (data.hasOwnProperty(id) && (data as any)[id].SellRent === SellRent){
                        propertiesArray.push((data as any)[id]);} // changed from data to (data as any)
              } 
              else {
                      propertiesArray.push((data as any)[id]);
              }
          }

        return propertiesArray;
      })
    );

    }


  addProperty(property: Property) {
    let newProp = [property];
    // Add new property in array if newProp alreay exists in local storage
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp')!)];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));


  }


  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
      return +localStorage.getItem('PID')!;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
