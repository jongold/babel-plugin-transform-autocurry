# babel-plugin-transform-autocurry (WIP)

I want to learn how babel plugins work. I like curried functions. I think it
should be possible to automatically curry functions.

Input:
```js
/* @autocurry */
export const add = (a, b) => a + b;
```

Output
```js
import { curry } from 'ramda';
const _add = (a, b) => a + b;
export const add = curry(add);
```
