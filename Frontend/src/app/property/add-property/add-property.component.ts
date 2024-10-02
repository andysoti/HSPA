import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../../model/iproperty';
import { IPropertyBase } from '../../model/iPropertybase';
import { Property } from '../../model/property';
import { HousingService } from '../../services/housing.service';
import { AlertifyService } from '../../services/alertify.service';

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
  property = new Property();


  propertyTypes: Array<string> = ['House', "Apartment", "Duplex"]
  furnishTypes: Array<string> = ['Fully', "Semi", "Unfurnished"]
  cityList!: any[];


  propertyView: IPropertyBase = {
    id: null, sellRent: null, name: "", propertyType: null, price: null,
    furnishingType: null,
    bhk: null,
    builtArea: null,
    city: '',
    readyToMove: null
  };


  constructor(private fb: FormBuilder, private router: Router,
                private housingService: HousingService,
               private alertify: AlertifyService) { }
  ngOnInit() {
    this.CreateAddPropertyForm();
    this.housingService.getAllCities().subscribe(data => {
      this.cityList = data;
      console.log(data);
    })
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
    if(this.allTabsValid()){
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success('Form, submitted.');
    // console.log('SellRent=' + this.addPropertyForm!.value.BasicInfo.SellRent)
       console.log(this.addPropertyForm);

      if(this.SellRent.value === '2'){
       this.router.navigate(['/rent-property'])
      } else{
        this.router.navigate(['/'])
      }
    }
    else{
      console.log(this.addPropertyForm);
      this.alertify.error('Form failed, please review.');

    }
  }

  mapProperty(): void {
    this.property.id = this.housingService.newPropID();
    this.property.sellRent = +this.SellRent.value; // the + converts to number
    this.property.bhk = this.BHK.value;
    this.property.propertyType = this.PType.value;
    this.property.name = this.Name.value;
    this.property.city = this.City.value;
    this.property.furnishingType = this.FType.value;
    this.property.price = this.Price.value;
    this.property.security = this.Security.value;
    this.property.maintenance = this.Maintenance.value;
    this.property.builtArea = this.BuiltArea.value;
    this.property.carpetArea = this.CarpetArea.value;
    this.property.floorNo = this['FloorNo'].value;
    this.property.totalFloors = this['TotalFloor'].value;
    this.property.address = this['Address'].value;
    this.property.address2 = this['LandMark'].value;
    this.property.readyToMove = this.RTM.value;
    this.property.age = this['AOP'].value;
    this.property.gated = this['Gated'].value;
    this.property.mainEntrance = this['MainEntrance'].value;
    this.property.estPossessionOn = this['PossessionOn'].value;
    this.property.description = this['Description'].value;
    this.property.image = 'propNA'; // not done yet
    // this.property.PostedOn = new Date().toString(); // gets the date of user subsmission
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

get FloorNo() {
  return this.AddressInfo.controls['FloorNo'] as FormControl;
}

get TotalFloor() {
  return this.AddressInfo.controls['TotalFloor'] as FormControl;
}

get Address() {
  return this.AddressInfo.controls['Address'] as FormControl;
}

get LandMark() {
  return this.AddressInfo.controls['LandMark'] as FormControl;
}

get RTM() {
  return this.OtherInfo.controls['RTM'] as FormControl;
}

get PossessionOn() {
  return this.OtherInfo.controls['PossessionOn'] as FormControl;
}

get AOP() {
  return this.OtherInfo.controls['AOP'] as FormControl;
}

get Gated() {
  return this.OtherInfo.controls['Gated'] as FormControl;
}

get MainEntrance() {
  return this.OtherInfo.controls['MainEntrance'] as FormControl;
}

get Description() {
  return this.OtherInfo.controls['Description'] as FormControl;
}

}
