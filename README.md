# DATA CACHE PACKAGE

- This package will help you to cache data in multiple way in your local machine memory
- It's provide many cool feature.

## Installation

```bash
npm install data-cache-helper --save
```

## Configuration:
- You can set a global config for must use cases.
- Config must be define in your root file of project, to make it available in entire project
- Config params:
    - cacheTimer: (type: number, *not required*, default value: 60, value in second)
    - storeIn: (type: OBJECT|LOCALSTORAGE, *not required*, default value: OBJECT)
    - maxSize: (type: number, *not required*, default value: 2, value in MB)
```js
import DataCacheHelper from 'data-cache-helper';

// initApp.js
DataCacheHelper.setGlobalConfig({
    cacheTimer: 10, // in second, default will be 60 second
    storeIn: 'LOCALSTORAGE', // default will be 'OBJECT'
    maxSize: 4 // set the maximum size of cache store in MB, the default will be 2MB
})
``` 

## Usage:

* set():
- to cache data in store, By adding key of this data and the data itself.
- you can add config to this data, to store it in localstorage or in object.
- params: 
    - key: (type: string, *required*)
    - data: (type: any, *required*)
    - config: (type: object, *not required*, default value: global config)
- return: void
```js
import data from 'data-cache-helper';

// this will store data in object store with 1 minute cache time. the config will be the global config.
DataCacheHelper.set('key', 'value');

// This will store data in localstorage, With cache time for 10 second, Maximum size 1MB, And support server side rendering like nuxt, next...
DataCacheHelper.set('key', 'value', { storeIn: 'LOCALSTORAGE', timer: 10, maxSize: 1 });
```

* get():
- to get cached data by passing the key of this data
- params: 
    - key: (type: string, *required*)
- return: any
```js
import DataCacheHelper from 'data-cache-helper';

// this will return cached data of this key
DataCacheHelper.get('key');
```

* size():
    - to get size of data cached.
    - if pass the key to it will give you the value size of this key.
    - params: 
        - key: (type: string, *not required*)
    - return: (string)
```js
import DataCacheHelper from 'data-cache-helper';

// this will return size of cache store
DataCacheHelper.size() // the size of entire cache store in MB

// this will return size of specific cached data by key of its
DataCacheHelper.size('key') // size in MB
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.