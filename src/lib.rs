#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use napi::bindgen_prelude::Buffer;

#[napi]
pub fn md2(buf: Buffer) -> String {
  use md2::{Md2, Digest};

  // create a Md2 hasher instance
  let mut hasher = Md2::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 16]
  let result = hasher.finalize();
  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn md4(buf: Buffer) -> String {
  use md4::{Md4, Digest};

  // create a Md4 hasher instance
  let mut hasher = Md4::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 16]
  let result = hasher.finalize();
  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn md5(buf: Buffer) -> String {
  use md5::{Md5, Digest};

  // create a Md5 hasher instance
  let mut hasher = Md5::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 16]
  let result = hasher.finalize();
  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn sha1(buf: Buffer) -> String {
  use sha1::{Sha1, Digest};

  // create a Sha1 object
  let mut hasher = Sha1::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 20]
  let result = hasher.finalize();
  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn sha256(buf: Buffer) -> String {
  sha2_256(buf)
}

#[napi]
pub fn sha512(buf: Buffer) -> String {
  sha2_512(buf)
}

#[napi(js_name = "sha2_256")]
pub fn sha2_256(buf: Buffer) -> String {
  use sha2::{Sha256, Digest};

  // create a Sha256 object
  let mut hasher = Sha256::new();

  // write input message
  hasher.update(buf);

  // read hash digest and consume hasher
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi(js_name = "sha2_512")]
pub fn sha2_512(buf: Buffer) -> String {
  use sha2::{Sha512, Digest};

  // same for Sha512
  let mut hasher = Sha512::new();

  hasher.update(buf);
  
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi(js_name = "sha3_256")]
pub fn sha3_256(buf: Buffer) -> String {
  use sha3::{Sha3_256, Digest};

  // create a SHA3-256 object
  let mut hasher = Sha3_256::new();

  // write input message
  hasher.update(buf);

  // read hash digest
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi(js_name = "sha3_512")]
pub fn sha3_512(buf: Buffer) -> String {
  use sha3::{Sha3_512, Digest};

  // create a SHA3-512 object
  let mut hasher = Sha3_512::new();

  // write input message
  hasher.update(buf);

  // read hash digest
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn sm3(buf: Buffer) -> String {
  use sm3::{Sm3, Digest};

  // create a hasher object, to use it do not forget to import `Digest` trait
  let mut hasher = Sm3::new();

  // write input message
  hasher.update(buf);

  // read hash digest and consume hasher
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi(js_name = "belt_hash")]
pub fn belt_hash(buf: Buffer) -> String {
  use belt_hash::{BeltHash, Digest};

  // create a BelT hasher instance
  let mut hasher = BeltHash::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 32]
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi(js_name = "blake2s256")]
pub fn blake2s256(buf: Buffer) -> String {
  use blake2::{Blake2s256, Digest};

  // same example for Blake2s256:
  let mut hasher = Blake2s256::new();

  // write input message
  hasher.update(buf);

  // read hash digest and consume hasher
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi(js_name = "blake2b512")]
pub fn blake2b512(buf: Buffer) -> String {
  use blake2::{Blake2b512, Digest};

  // create a Blake2b512 object
  let mut hasher = Blake2b512::new();

  // write input message
  hasher.update(buf);

  // read hash digest and consume hasher
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn blake3(buf: Buffer) -> String {
  // Hash an input incrementally.
  let mut hasher = blake3::Hasher::new();

  // write input message
  hasher.update(&buf);

  // read hash digest and consume hasher
  let result = hasher.finalize();

  // convert to hex string
  result.to_hex().to_ascii_lowercase()
}

#[napi]
pub fn fsb512(buf: Buffer) -> String {
  use fsb::{Fsb512, Digest};
  
  // create a FSB-512 object
  let mut hasher = Fsb512::new();

  // write input message
  hasher.update(buf);

  // read hash digest
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn fsb256(buf: Buffer) -> String {
  use fsb::{Fsb256, Digest};

  // create a FSB-256 object
  let mut hasher = Fsb256::new();

  // write input message
  hasher.update(buf);

  // read hash digest
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn gost94(buf: Buffer) -> String {
  use gost94::{Gost94CryptoPro, Digest};

  // create Gost94 hasher instance with CryptoPro params
  let mut hasher = Gost94CryptoPro::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 32]
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn groestl256(buf: Buffer) -> String {
  use groestl::{Groestl256, Digest};

  // create a Groestl-256 hasher instance
  let mut hasher = Groestl256::default();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 32]
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn groestl512(buf: Buffer) -> String {
  use groestl::{Groestl512, Digest};

  // create a Groestl-512 hasher instance
  let mut hasher = Groestl512::default();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 32]
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn ripemd128(buf: Buffer) -> String {
  use ripemd::{Ripemd128, Digest};

  // create a RIPEMD-160 hasher instance
  let mut hasher = Ripemd128::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn ripemd160(buf: Buffer) -> String {
  use ripemd::{Ripemd160, Digest};

  // create a RIPEMD-160 hasher instance
  let mut hasher = Ripemd160::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  // which in this case is equivalent to [u8; 20]
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn ripemd256(buf: Buffer) -> String {
  use ripemd::{Ripemd256, Digest};

  // create a RIPEMD-160 hasher instance
  let mut hasher = Ripemd256::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn ripemd320(buf: Buffer) -> String {
  use ripemd::{Ripemd320, Digest};

  // create a RIPEMD-160 hasher instance
  let mut hasher = Ripemd320::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn shabal192(buf: Buffer) -> String {
  use shabal::{Shabal192, Digest};

  // create a Shabal192 hasher instance
  let mut hasher = Shabal192::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn shabal224(buf: Buffer) -> String {
  use shabal::{Shabal224, Digest};

  // create a Shabal224 hasher instance
  let mut hasher = Shabal224::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn shabal256(buf: Buffer) -> String {
  use shabal::{Shabal256, Digest};

  // create a Shabal256 hasher instance
  let mut hasher = Shabal256::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn shabal384(buf: Buffer) -> String {
  use shabal::{Shabal384, Digest};

  // create a Shabal384 hasher instance
  let mut hasher = Shabal384::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn shabal512(buf: Buffer) -> String {
  use shabal::{Shabal512, Digest};

  // create a Shabal512 hasher instance
  let mut hasher = Shabal512::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn streebog256(buf: Buffer) -> String {
  use streebog::{Streebog256, Digest};

  // create Streebog256 hasher state
  let mut hasher = Streebog256::new();
  // write input message
  hasher.update(buf);

  // read hash digest (it will consume hasher)
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn streebog512(buf: Buffer) -> String {
  use streebog::{Streebog512, Digest};

  // create Streebog512 hasher state
  let mut hasher = Streebog512::new();
  // write input message
  hasher.update(buf);
  
  // read hash digest (it will consume hasher)
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn tiger(buf: Buffer) -> String {
  use tiger::{Tiger, Digest};

  // create a Tiger object
  let mut hasher = Tiger::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn tiger2(buf: Buffer) -> String {
  use tiger::{Tiger2, Digest};

  // create a Tiger2 object
  let mut hasher = Tiger2::new();

  // process input message
  hasher.update(buf);

  // acquire hash digest in the form of GenericArray,
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn whirlpool(buf: Buffer) -> String {
  use whirlpool::{Whirlpool, Digest};

  // create a hasher object, to use it do not forget to import `Digest` trait
  let mut hasher = Whirlpool::new();

  // write input message
  hasher.update(buf);

  // read hash digest (it will consume hasher)
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

