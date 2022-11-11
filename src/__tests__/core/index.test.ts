import { ConfigService } from '../../core';
import DataCacheHelper from '../../index';
import { mockConfig, mockData } from '../../mock';

const keys = {
  first: 'new_key',
  secound: 'new_test_key',
};

describe('Data Cache Helper: ', () => {
  test('Should set global config: ', () => {
    ConfigService.setGlobal(mockConfig);
  });
  test('Should cache data by global config: ', () => {
    DataCacheHelper.set(keys.first, mockData.data);
  });
  test('Should get cached data by global config: ', () => {
    expect(DataCacheHelper.get(keys.first)).toStrictEqual(mockData.data);
  });
  test('Should get size of cache store: ', () => {
    expect(DataCacheHelper.size()).toBeGreaterThan(0);
  });
  test('Should get size of cached data by key: ', () => {
    expect(DataCacheHelper.size({ key: keys.first })).toBeLessThanOrEqual(DataCacheHelper.size());
  });
  jest.setTimeout(11000); // Reset jest time out.
  test('Should cache timer has expired: ', async () => {
    await new Promise((call) => setTimeout(call, 10000));
    expect(DataCacheHelper.get(keys.first)).toBeNull();
  });
});
