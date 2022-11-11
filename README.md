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

## Changelog
Please see the [https://github.com/Syrian-Open-Source/data-cache-helper/CHANGELOG.md](CHANGELOG.md) for more information about what has changed or updated or added recently.

## Security
If you discover any security related issues, please email them first to <a href="mailto:abdo201mohamad@gmail.com?">abdo201mohamad@gmail.com</a>, if we do not fix it within a short period of time please open a new issue describing your problem

## Credits
[https://www.linkedin.com/in/mohammed-abdo-2429581b6/](Mohammed_Abdo)

## About Syrian Open Source
The Syrian Open Source platform is the first platform on GitHub dedicated to bringing Syrian developers from different cultures and experiences together, to work on projects in different languages, tasks, and versions, and works to attract Syrian developers to contribute more under one platform to open source software, work on it, and issue it with high quality and advanced engineering features, which It stimulates the dissemination of the open-source concept in the Syrian software community, and also contributes to raising the efficiency of developers by working on distributed systems and teams.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.