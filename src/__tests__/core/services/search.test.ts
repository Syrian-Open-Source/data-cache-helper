import { SearchService } from '../../../core';
import { mockData, mockKey } from '../../../mock';
import { ObjectService } from '../../../modules/object';

const objectService = ObjectService;
const searchService = SearchService;

describe('Search Service: ', () => {
  test('Should be data cached in object store: ', () => {
    objectService.set(mockKey, mockData);
    expect(searchService.isStoreIn(mockKey)).toBe('OBJECT');
  });
  test('Should be data not cached in localstorage: ', () => {
    expect(searchService.isStoreIn(mockKey)).not.toBe('LOCALSTORAGE');
  });
});
