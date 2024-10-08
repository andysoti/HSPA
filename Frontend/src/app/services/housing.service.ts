import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPropertyBase } from '../model/iPropertybase';
import { Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';
// import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HousingService { // shared instance of service
  baseUrl = 'http://localhost:5138/api';
  constructor(private http:HttpClient) { }

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:5138/api/city');
  }

  getProperty(id: number) {
    return this.http.get<Property>(this.baseUrl + '/property/detail/'+id.toString());
  }

  getAllProperties(SellRent?: number): Observable<Property[]>{
    return this.http.get<Property[]>(this.baseUrl + '/property/list/'+SellRent!.toString());


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

  getPropertyAge(dateofEstablishment: Date): string
  {
      const today = new Date();
      const estDate = new Date(dateofEstablishment);
      let age = today.getFullYear() - estDate.getFullYear();
      const m = today.getMonth() - estDate.getMonth();
      // Current month smaller than establishment month or
      // Same month but current date smaller than establishment date
      if (m < 0 || (m === 0 && today.getDate() < estDate.getDate())) {
          age --;
      }
      // Establshment date is future date
      if(today < estDate) {
          return '0';
      }
      // Age is less than a year
      if(age === 0) {
          return 'Less than a year';
      }
      return age.toString();
  }



}












    // return this.http.get('data/properties.json').pipe(
    //   map(data=> {
    //     const propertiesArray: Array<Property> = [];

    //     const localProperties = JSON.parse(localStorage.getItem('newProp')!);
    //     if (localProperties) {
    //       for (const id in localProperties) {
    //         if(SellRent){
    //             if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
    //               propertiesArray.push(localProperties[id]);
    //                 }
    //         }
    //             else{
    //               propertiesArray.push(localProperties[id]);
    //             }
    //       }
    //     }

    //     for (const id in data) {
    //           if (SellRent) {
    //                 if (data.hasOwnProperty(id) && (data as any)[id].SellRent === SellRent){
    //                     propertiesArray.push((data as any)[id]);} // changed from data to (data as any)
    //           }
    //           else {
    //                   propertiesArray.push((data as any)[id]);
    //           }
    //       }

    //     return propertiesArray;
    //   })
    // );
    // return this.http.get<Property[]>('data/properties.json');
