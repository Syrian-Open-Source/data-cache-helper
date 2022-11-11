import { IConfig } from '../../interfaces';

export const defaultConfig: IConfig = {
  cacheTimer: 60, // One minute
  storeIn: 'OBJECT',
  maxSize: 2, // 2MB
};
