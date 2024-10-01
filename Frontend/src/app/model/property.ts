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
  CarpetArea?: number;
  Address!: string;
  Address2?: string;
  city!: string;
  FloorNo?: string;
  TotalFloor?: string;
  readyToMove!: boolean;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  image?: string;
  Description?: string;
  PostedOn!: string;
  PostedBy!: number;
}
