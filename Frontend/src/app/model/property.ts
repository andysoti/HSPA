import { IPropertyBase } from "./iPropertybase";

export class Property implements IPropertyBase{
    // THe Property tyep will be saved in the database.
    // This Propertty tyep gets directly attributed to the Property Card (IpropertyBase)

  id!: number;
  sellRent!: number;
  name!: string;
  propertyType!: string;
  bhk!: number;
  furnishingType!: string;
  price!: number;
  builtArea!: number;
  carpetArea?: number;
  address!: string;
  address2?: string;
  city!: string;
  floorNo?: string;
  totalFloors?: string;
  readyToMove!: boolean;
  age?: string;
  mainEntrance?: string;
  security?: number;
  gated?: boolean;
  maintenance?: number;
  estPossessionOn?: Date;
  image?: string;
  description?: string;
}
