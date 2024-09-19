export interface IPropertyBase {
    id: number | null;
    SellRent: number | null;
    Name: string | null;
    PType: string | null;
    FType: string | null;
    Price: number | null;
    BHK: number | null;
    BuiltArea: number | null;
    City: string | null;
    RTM: boolean | null;
    Image?: string;
    estPossessionOn?: string;
  }