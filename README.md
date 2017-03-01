# env-to-obj

parse `process.env` to a deeply nested camelCase object

```shell
npm install --save env-to-obj
```

## example

```shell
APP__THING=face APP__PORT=8000 APP__IS_CAT=true node -p "require('env-to-obj')(process.env)"
```

```
{
  ...
  app: {
    thing: 'face',
    port: 8000,
    isCat: true
  }
}
```

## usage

### `envToObj = require('env-to-obj')`

### `obj = envToObj(process.env)`

given `process.env` (or a similar object),

where "__" in a variable name indicates a nested property,

(e.g. `foo__bar__baz` => `foo.bar.baz`)

returns a deeply nested object where:

keys are converted to camelCase, and

values are coerced from strings into primitive types (`Number`, `Boolean`, `null`, `undefined`).

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
