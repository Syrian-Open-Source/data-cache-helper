export interface ObjectConverter {
  toString(payload: any): string;
  toObject(payload: any): any;
}
