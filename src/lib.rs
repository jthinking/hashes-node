#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use md2::{Md2, Digest};
use md4::Md4;
use md5::Md5;
use sha1::Sha1;
use sha2::{Sha256, Sha512};
use sha3::Sha3_256;
use sm3::Sm3;
use napi::bindgen_prelude::Buffer;

#[napi]
pub fn md2(buf: Buffer) -> String {
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
  // create a Sha256 object
  let mut hasher = Sha256::new();

  // write input message
  hasher.update(buf);

  // read hash digest and consume hasher
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn sha512(buf: Buffer) -> String {
  // same for Sha512
  let mut hasher = Sha512::new();

  hasher.update(buf);
  
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi(js_name = "sha3_256")]
pub fn sha3_256(buf: Buffer) -> String {
  // create a SHA3-256 object
  let mut hasher = Sha3_256::new();

  // write input message
  hasher.update(buf);

  // read hash digest
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}

#[napi]
pub fn sm3(buf: Buffer) -> String {
  // create a hasher object, to use it do not forget to import `Digest` trait
  let mut hasher = Sm3::new();

  // write input message
  hasher.update(buf);

  // read hash digest and consume hasher
  let result = hasher.finalize();

  // convert to hex string
  format!("{:x}", result)
}