const { existsSync, readFileSync } = require('fs')
const { join } = require('path')

const { platform, arch } = process

let nativeBinding = null
let localFileExisted = false
let loadError = null

function isMusl() {
  // For Node 10
  if (!process.report || typeof process.report.getReport !== 'function') {
    try {
      const lddPath = require('child_process').execSync('which ldd').toString().trim();
      return readFileSync(lddPath, 'utf8').includes('musl')
    } catch (e) {
      return true
    }
  } else {
    const { glibcVersionRuntime } = process.report.getReport().header
    return !glibcVersionRuntime
  }
}

switch (platform) {
  case 'android':
    switch (arch) {
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'hashes-node.android-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hashes-node.android-arm64.node')
          } else {
            nativeBinding = require('@jthinking/hashes-node-android-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm':
        localFileExisted = existsSync(join(__dirname, 'hashes-node.android-arm-eabi.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hashes-node.android-arm-eabi.node')
          } else {
            nativeBinding = require('@jthinking/hashes-node-android-arm-eabi')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Android ${arch}`)
    }
    break
  case 'win32':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(
          join(__dirname, 'hashes-node.win32-x64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./hashes-node.win32-x64-msvc.node')
          } else {
            nativeBinding = require('@jthinking/hashes-node-win32-x64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'ia32':
        localFileExisted = existsSync(
          join(__dirname, 'hashes-node.win32-ia32-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./hashes-node.win32-ia32-msvc.node')
          } else {
            nativeBinding = require('@jthinking/hashes-node-win32-ia32-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'hashes-node.win32-arm64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./hashes-node.win32-arm64-msvc.node')
          } else {
            nativeBinding = require('@jthinking/hashes-node-win32-arm64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Windows: ${arch}`)
    }
    break
  case 'darwin':
    localFileExisted = existsSync(join(__dirname, 'hashes-node.darwin-universal.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./hashes-node.darwin-universal.node')
      } else {
        nativeBinding = require('@jthinking/hashes-node-darwin-universal')
      }
      break
    } catch {}
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(join(__dirname, 'hashes-node.darwin-x64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./hashes-node.darwin-x64.node')
          } else {
            nativeBinding = require('@jthinking/hashes-node-darwin-x64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'hashes-node.darwin-arm64.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./hashes-node.darwin-arm64.node')
          } else {
            nativeBinding = require('@jthinking/hashes-node-darwin-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on macOS: ${arch}`)
    }
    break
  case 'freebsd':
    if (arch !== 'x64') {
      throw new Error(`Unsupported architecture on FreeBSD: ${arch}`)
    }
    localFileExisted = existsSync(join(__dirname, 'hashes-node.freebsd-x64.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./hashes-node.freebsd-x64.node')
      } else {
        nativeBinding = require('@jthinking/hashes-node-freebsd-x64')
      }
    } catch (e) {
      loadError = e
    }
    break
  case 'linux':
    switch (arch) {
      case 'x64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'hashes-node.linux-x64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./hashes-node.linux-x64-musl.node')
            } else {
              nativeBinding = require('@jthinking/hashes-node-linux-x64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'hashes-node.linux-x64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./hashes-node.linux-x64-gnu.node')
            } else {
              nativeBinding = require('@jthinking/hashes-node-linux-x64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'hashes-node.linux-arm64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./hashes-node.linux-arm64-musl.node')
            } else {
              nativeBinding = require('@jthinking/hashes-node-linux-arm64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'hashes-node.linux-arm64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./hashes-node.linux-arm64-gnu.node')
            } else {
              nativeBinding = require('@jthinking/hashes-node-linux-arm64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm':
        localFileExisted = existsSync(
          join(__dirname, 'hashes-node.linux-arm-gnueabihf.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./hashes-node.linux-arm-gnueabihf.node')
          } else {
            nativeBinding = require('@jthinking/hashes-node-linux-arm-gnueabihf')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Linux: ${arch}`)
    }
    break
  default:
    throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)
}

if (!nativeBinding) {
  if (loadError) {
    throw loadError
  }
  throw new Error(`Failed to load native binding`)
}

const { md2, md4, md5, sha1, sha256, sha512, sha2_256, sha2_512, sha3_256, sha3_512, sm3, belt_hash, blake2s256, blake2b512, blake3, fsb512, fsb256, gost94, groestl256, groestl512, ripemd128, ripemd160, ripemd256, ripemd320, shabal192, shabal224, shabal256, shabal384, shabal512, streebog256, streebog512, tiger, tiger2, whirlpool } = nativeBinding

module.exports.md2 = md2
module.exports.md4 = md4
module.exports.md5 = md5
module.exports.sha1 = sha1
module.exports.sha256 = sha256
module.exports.sha512 = sha512
module.exports.sha2_256 = sha2_256
module.exports.sha2_512 = sha2_512
module.exports.sha3_256 = sha3_256
module.exports.sha3_512 = sha3_512
module.exports.sm3 = sm3
module.exports.belt_hash = belt_hash
module.exports.blake2s256 = blake2s256
module.exports.blake2b512 = blake2b512
module.exports.blake3 = blake3
module.exports.fsb512 = fsb512
module.exports.fsb256 = fsb256
module.exports.gost94 = gost94
module.exports.groestl256 = groestl256
module.exports.groestl512 = groestl512
module.exports.ripemd128 = ripemd128
module.exports.ripemd160 = ripemd160
module.exports.ripemd256 = ripemd256
module.exports.ripemd320 = ripemd320
module.exports.shabal192 = shabal192
module.exports.shabal224 = shabal224
module.exports.shabal256 = shabal256
module.exports.shabal384 = shabal384
module.exports.shabal512 = shabal512
module.exports.streebog256 = streebog256
module.exports.streebog512 = streebog512
module.exports.tiger = tiger
module.exports.tiger2 = tiger2
module.exports.whirlpool = whirlpool
