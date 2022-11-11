import { ObjectService } from '../../../../modules/object';
import { mockData, mockKey, mockStore } from '../../../../mock';

describe('Object Service: ', () => {
  test('Should set data in object store: ', () => {
    ObjectService.set(mockKey, mockData);
  });
  test('Should get all data from object store: ', () => {
    expect(ObjectService.getAll()).toStrictEqual(mockStore);
  });
  test('Should get stored data by key: ', () => {
    expect(ObjectService.getByKey(mockKey)).toBe(mockData);
  });
  test('Should key exist in object store: ', () => {
    expect(ObjectService.isExist(mockKey)).toBeTruthy();
  });
  test('Should delete data from object store by key: ', () => {
    ObjectService.delete(mockKey);
    expect(ObjectService.isExist(mockKey)).toBeFalsy();
  });
  test('Should key not exist in object store: ', () => {
    expect(ObjectService.isExist(mockKey)).toBeFalsy();
  });
  test('Should clear all data from store: ', () => {
    ObjectService.set(mockKey, mockData);
    ObjectService.clear();
    expect(ObjectService.isExist()).toBeFalsy();
  });
});
