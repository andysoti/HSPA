import { IPropertyBase } from "./iPropertybase";

export class Property implements IPropertyBase{
    // THe Property tyep will be saved in the database.
    // This Propertty tyep gets directly attributed to the Property Card (IpropertyBase)

  id!: number;
  SellRent!: number;
  Name!: string;
  PType!: string;
  BHK!: number;
  FType!: string;
  Price!: number;
  BuiltArea!: number;
  CarpetArea?: number;
  Address!: string;
  Address2?: string;
  City!: string;
  FloorNo?: string;
  TotalFloor?: string;
  RTM!: boolean;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn!: string;
  PostedBy!: number;
}