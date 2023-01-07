# hashes-node

Hashes utils for node.js based on [RustCrypto](https://github.com/RustCrypto/hashes) and [napi-rs](https://github.com/napi-rs/napi-rs).

## Installing

```
npm i @jthinking/hashes-node
```

## Supported Algorithms

- md2
- md4
- md5
- sha1
- sha256
- sha512
- sha3_256
- sm3

## Supported Platforms

- Windows x64
- Windows arm64
- macOS x64
- macOS aarch64
- Linux x64 gnu
- Linux aarch64 gnu

## Usage

```
// import hashes-node
import { md2, md4, md5, sha1, sha256, sha512, sha3_256, sm3 } = require('@jthinking/hashes-node')

// convert data to Buffer
const buf = Buffer.from('123', 'UTF-8')

// md2 hex
const md2Hex = md2(buf)

// md4 hex
const md4Hex = md4(buf)

// md5 hex
const md5Hex = md5(buf)

// sha1 hex
const sha1Hex = sha1(buf)

// sha256 hex
const sha256Hex = sha256(buf)

// sha512 hex
const sha512Hex = sha512(buf)

// sha3_256 hex
const sha3_256Hex = sha3_256(buf)

// sm3 hex
const sm3Hex = sm3(buf)

```