import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../../model/iproperty';
import { IPropertyBase } from '../../model/iPropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm | undefined;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyTypes: Array<string> = ['House', "Apartment", "Duplex"]
  furnishTypes: Array<string> = ['Fully', "Semi", "Unfurnished"]

  propertyView: IPropertyBase = {
    id: null, SellRent: null, Name: "", PType: null, Price: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null
  };


  constructor(private router: Router) { }

  ngOnInit() {


  }

  
  onBack(){
    this.router.navigate(['/'])
  }

  onSubmit(){
    console.log('Form, submitted.');
    console.log('SellRent=' + this.addPropertyForm!.value.BasicInfo.SellRent)
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
