meta-buffer
===

Append version and meta info to your buffers.

```js
const metaBuf = require('@sergueyarellano/meta-buffer')
const VERSION = 1
const AVRO_SCHEMA_NAME = 'UserCreatedSchemaName' 

const encodedBuf = metaBuf.encode(VERSION, AVRO_SCHEMA_NAME, originalBuffer)
```

Read the meta info without parsing the original buffer.

```js
const [ version, meta, originalBuffer ] = metaBuf.decode(encodedBuf)

console.log(version) // 1
console.log(meta) // UserCreatedSchemaName
console.log(originalBuffer) // <Buffer 00 00 00 00 1f>
```

- `version` has to be an 8 bit uint. (number between 0 and 255)
- `meta` has to be a string of any length. The smaller the string, the smaller the resulting buffer.
- `buf` is the original buffer
