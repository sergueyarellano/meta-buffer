import * as metaBuffer from '../index';

test('encode and decode with version and meta', () => {
  const VERSION = 1
  const META = 'my string'
  const buf = Buffer.from('abc')
  const metaBuf = metaBuffer.encode(VERSION, META, buf)
  const decodedMeta = metaBuffer.decode(metaBuf)

  expect(decodedMeta[0]).toBe(1);
  expect(decodedMeta[1]).toBe('my string');
  expect(decodedMeta[2].toString()).toBe(buf.toString());
});
