export interface IKeyValue<T> {
  [key: string]: T;
}

export interface IConfig {
  cacheTimer?: number;
  storeIn?: StoreIn;
  maxSize?: number;
}

export type StoreIn = 'OBJECT' | 'LOCALSTORAGE';

export interface IData {
  timer: number;
  data: any;
}

export type IMemo = IKeyValue<IData>;
