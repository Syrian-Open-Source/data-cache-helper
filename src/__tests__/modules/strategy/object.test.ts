import { ObjectStrategy } from '../../../modules/strategy';
import { mockConfig, mockData, mockKey } from '../../../mock';
import { ConfigService } from '../../../core';

const objectStrategy = new ObjectStrategy();

describe('Object Cache Store Strategy: ', () => {
  test('Should cache data with manual config: ', () => {
    objectStrategy.set(mockKey, mockData, mockConfig);
  });
  test('Should get cached data from cache store: ', () => {
    expect(objectStrategy.get(mockKey)).toStrictEqual(mockData);
  });
  test('Should get cached data size from object cache store: ', () => {
    expect(objectStrategy.size(mockKey)).toBeGreaterThan(0);
  });
  jest.setTimeout(11000); // Reset jest time out.
  test('Should expire time of cached data: ', async () => {
    await new Promise((call) => setTimeout(call, 10000));
    expect(objectStrategy.get(mockKey)).toBeNull();
  });
});
