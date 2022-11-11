import { IConfig, IMemo } from '../interfaces';

export const mockKey = 'mock_key';

export const mockConfig: IConfig = {
  cacheTimer: 10,
  maxSize: 2,
  storeIn: 'OBJECT',
};

export const mockData = {
  timer: mockConfig.cacheTimer!,
  data: {
    name: 'mock name',
  },
};

export const mockStore: IMemo = {
  [mockKey]: mockData,
};
