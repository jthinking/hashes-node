# hashes-node

Hashes utils for node.js based on [RustCrypto](https://github.com/RustCrypto/hashes) and [napi-rs](https://github.com/napi-rs/napi-rs).

## Installing

```
npm i @jthinking/hashes-node
```

## Usage

```js
// import hashes-node
import { md5, blake3, sm3 } = require('@jthinking/hashes-node')

// convert data to Buffer
const buf = Buffer.from('123', 'UTF-8')

// md5 hex
const md5Hex = md5(buf)

// blake3 hex
const blake3Hex = blake3(buf)

// sm3 hex
const sm3Hex = sm3(buf)

// other algorithms
// ...
```

## Supported Algorithms

- md2
- md4
- md5
- sha1
- sha256 (sha2_256)
- sha512 (sha2_512)
- sha3_256
- sha3_512
- sm3
- belt_hash
- blake2s256
- blake2b512
- blake3
- fsb512
- fsb256
- gost94
- groestl256
- groestl512
- ripemd128
- ripemd160
- ripemd256
- ripemd320
- shabal192
- shabal224
- shabal256
- shabal384
- shabal512
- streebog256
- streebog512
- tiger
- tiger2
- whirlpool

## Supported Platforms

- Windows x64
- Windows arm64
- macOS x64
- macOS arm64
- Linux x64
- Linux arm64

