import { mockData } from '../../../../mock';
import { ObjectConverterService } from '../../../../modules/object';

describe('Object Converter Service: ', () => {
  test('Should convert object to string: ', () => {
    expect(ObjectConverterService.toString(mockData)).toStrictEqual(JSON.stringify(mockData));
  });

  test('Should convert string to object: ', () => {
    expect(ObjectConverterService.toObject(JSON.stringify(mockData))).toEqual(mockData);
  });
});
