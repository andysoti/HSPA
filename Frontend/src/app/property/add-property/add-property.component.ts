import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
[x: string]: any;
  // @ViewChild('Form') addPropertyForm: NgForm | undefined;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  addPropertyForm!: FormGroup;
  NextClicked: boolean = false;


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


  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
          SellRent: ['1', Validators.required],
          BHK: [null, Validators.required],
          PType: [null, Validators.required],
          FType: [null, Validators.required],
          Name: [null, Validators.required],
          City: [null, Validators.required]
      }),

      PriceInfo: this.fb.group({
          Price: [null, Validators.required],
          BuiltArea: [null, Validators.required],
          CarpetArea: [null],
          Security: [0],
          Maintenance: [0],
      }),

      AddressInfo: this.fb.group({
          FloorNo: [null],
          TotalFloor: [null],
          Address: [null, Validators.required],
          LandMark: [null],
      }),

      OtherInfo: this.fb.group({
          RTM: [null, Validators.required],
          PossessionOn: [null, Validators.required],
          AOP: [null],
          Gated: [null],
          MainEntrance: [null],
          Description: [null]
      })
  });
  }

  
  onBack(){
    this.router.navigate(['/'])
  }

  onSubmit(){
    this.NextClicked = true;


    console.log('Form, submitted.');
    console.log('SellRent=' + this.addPropertyForm!.value.BasicInfo.SellRent)
    console.log(this.addPropertyForm);
  }

  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    this.NextClicked = true;
    if (IsCurrentTabValid) {
        this.formTabs!.tabs[NextTabId].active = true;
        this.NextClicked = false; // not needed
    }
}



  allTabsValid(): boolean{
    if (this.BasicInfo.invalid) {
      this.formTabs!.tabs[0].active = true; // activate that tab
      return false;
  }

  if (this.PriceInfo.invalid) {
      this.formTabs!.tabs[1].active = true;
      return false;
  }

  if (this.AddressInfo.invalid) {
      this.formTabs!.tabs[2].active = true;
      return false;
  }

  if (this.OtherInfo.invalid) {
      this.formTabs!.tabs[3].active = true;
      return false;
  }
    return true;

  }



// #region <Getter Methods>
  // #region <FormGroups>
    get BasicInfo() {
      return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceInfo() {
      return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get AddressInfo() {
      return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
  }

  get OtherInfo() {
      return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
  }

// control getters
get SellRent() {
  return this.BasicInfo.controls['SellRent'] as FormControl;
}

get BHK() {
  return this.BasicInfo.controls['BHK'] as FormControl;
}

get PType() {
  return this.BasicInfo.controls['PType'] as FormControl;
}

get FType() {
  return this.BasicInfo.controls['FType'] as FormControl;
}

get RTM() {
  return this.BasicInfo.controls['RTM'] as FormControl;
}


get Name() {
  return this.BasicInfo.controls['Name'] as FormControl;
}

get City() {
  return this.BasicInfo.controls['City'] as FormControl;
}

get Price() {
  return this.PriceInfo.controls['Price'] as FormControl;
}

get BuiltArea() {
  return this.PriceInfo.controls['BuiltArea'] as FormControl;
}

get CarpetArea() {
  return this.PriceInfo.controls['CarpetArea'] as FormControl;
}

get Security() {
  return this.PriceInfo.controls['Security'] as FormControl;
}

get Maintenance() {
  return this.PriceInfo.controls['Maintenance'] as FormControl;
}

}
