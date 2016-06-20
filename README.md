# babel-plugin-transform-autocurry

I want to learn how babel plugins work. I like curried functions. I think it
should be possible to automatically curry functions.

## Example

**In**

```js
export const add = function (a, b) { return a + b; }

export const min = (a, b) => a - b;

export default (a, b) => a + b;
```

**Out**

```js
import { curry as _curry } from "ramda";

export const add = _curry(function (a, b) {
  return a + b;
});

export const min = _curry((a, b) => a - b);

export default _curry((a, b) => c);
```

## Installation

```sh
$ npm install babel-plugin-transform-autocurry
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-autocurry"]
}
```

### Via CLI

```sh
$ babel --plugins transform-autocurry script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-autocurry"]
});
```
