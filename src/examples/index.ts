import dataCache from '../index';

dataCache.setGlobalConfig({
  storeIn: 'OBJECT',
});

let test = dataCache.get('test');

if (!test) {
  dataCache.set('test', { name: 'test' });
}

test = dataCache.get('test');
