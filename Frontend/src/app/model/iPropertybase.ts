export interface IPropertyBase {
    id: number | null;
    sellRent: number | null;
    name: string | null;
    propertyType: string | null;
    furnishingType: string | null;
    price: number | null;
    bhk: number | null;
    builtArea: number | null;
    city: string | null;
    readyToMove: boolean | null;
    image?: string;
    estPossessionOn?: Date;
  }
