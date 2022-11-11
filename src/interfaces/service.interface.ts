import { IData, IMemo } from './config.interface';

export interface BaseService {
  set(key: string, data: any): void;
  getAll(): IMemo;
  getByKey(key: string): IData;
  delete(key: string): void;
  clear(): void;
  isExist(key: string): boolean;
}
