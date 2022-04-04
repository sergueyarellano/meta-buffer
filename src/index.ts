function encode (unsigned8bitInt: number, meta: string, buf: Buffer): Buffer {
  // create unsigned int buf
  const intBuf = Buffer.allocUnsafe(1)
  intBuf.writeUint8(unsigned8bitInt)

  // create meta buf and create a mark for its length
  const metaBuf = Buffer.from(meta)
  const metaBufLength = metaBuf.length
  const posBuf = Buffer.allocUnsafe(1)
  posBuf.writeUint8(metaBufLength)

  // concat buffers
  return Buffer.concat([intBuf, posBuf, metaBuf, buf])
}

function decode (buf: Buffer): [unsignedInt: number, meta: string, originalBuf: Buffer ] {
  const unsignedInt: number = buf.readUint8(0)
  const metaBufLength: number = buf.readUint8(1)
  const startposition: number = 2
  const endposition: number = metaBufLength + startposition
  const meta: string = buf.slice(startposition, endposition).toString()
  const originalBuf: Buffer = buf.slice(endposition)
  return [unsignedInt, meta, originalBuf]
}

export { encode, decode }
