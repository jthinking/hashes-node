import {
  md2,
  md4,
  md5,
  sha1,
  sha256,
  sha512,
  sha2_256,
  sha2_512,
  sha3_256,
  sha3_512,
  sm3,
  belt_hash,
  blake2s256,
  blake2b512,
  fsb512,
  fsb256,
  gost94,
  groestl512,
  groestl256,
  ripemd128,
  ripemd160,
  ripemd256,
  ripemd320,
  shabal192,
  shabal224,
  shabal256,
  shabal384,
  shabal512,
  streebog256,
  streebog512,
  tiger,
  tiger2,
  whirlpool,
} from "../index.js";

import test from "ava";

test("md2 from native", (t) => {
  t.is(md2(Buffer.from("123")), "ef1fedf5d32ead6b7aaf687de4ed1b71");
});

test("md4 from native", (t) => {
  t.is(md4(Buffer.from("123")), "c58cda49f00748a3bc0fcfa511d516cb");
});

test("md5 from native", (t) => {
  t.is(md5(Buffer.from("123")), "202cb962ac59075b964b07152d234b70");
});

test("sha1 from native", (t) => {
  t.is(sha1(Buffer.from("123")), "40bd001563085fc35165329ea1ff5c5ecbdbbeef");
});

test("sha256 from native", (t) => {
  t.is(
    sha256(Buffer.from("123")),
    "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
  );
});

test("sha512 from native", (t) => {
  t.is(
    sha512(Buffer.from("123")),
    "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2"
  );
});

test("sha2_256 from native", (t) => {
  t.is(
    sha2_256(Buffer.from("123")),
    "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
  );
});

test("sha2_512 from native", (t) => {
  t.is(
    sha2_512(Buffer.from("123")),
    "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2"
  );
});

test("sha3_256 from native", (t) => {
  t.is(
    sha3_256(Buffer.from("123")),
    "a03ab19b866fc585b5cb1812a2f63ca861e7e7643ee5d43fd7106b623725fd67"
  );
});

test("sha3_512 from native", (t) => {
  t.is(
    sha3_512(Buffer.from("123")),
    "48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc"
  );
});

test("sm3 from native", (t) => {
  t.is(
    sm3(Buffer.from("123")),
    "6e0f9e14344c5406a0cf5a3b4dfb665f87f4a771a31f7edbb5c72874a32b2957"
  );
});

test("belt_hash from native", (t) => {
  t.is(
    belt_hash(Buffer.from("123")),
    "81fcbe3e5a28c3a5d9589013bc92428bd5ea384a9175164d44137e06fb7ffd00"
  );
});


test("blake2s256 from native", (t) => {
  t.is(
    blake2s256(Buffer.from("123")),
    "e906644ad861b58d47500e6c636ee3bf4cb4bb00016bb352b1d2d03d122c1605"
  );
});

test("blake2b512 from native", (t) => {
  t.is(
    blake2b512(Buffer.from("123")),
    "e64cb91c7c1819bdcda4dca47a2aae98e737df75ddb0287083229dc0695064616df676a0c95ae55109fe0a27ba9dee79ea9a5c9d90cceb0cf8ae80b4f61ab4a3"
  );
});

test("fsb512 from native", (t) => {
  t.is(
    fsb512(Buffer.from("123")),
    "59ef07b05ad53639e8af947782fc2248b79610643e698429ea0127cef66ef0beea0b95def9514c0cdc4b72b732d8064121d00bdc86dc7d2b4876293b3d9de40a"
  );
});

test("fsb256 from native", (t) => {
  t.is(
    fsb256(Buffer.from("123")),
    "1bd536c5ec82a7694bc1a6c5a96b9eeb15abb2e5775287695815e4d4aa4f93fe"
  );
});


test("gost94 from native", (t) => {
  t.is(
    gost94(Buffer.from("123")),
    "5ef18489617ba2d8d2d7e0da389aaa4ff022ad01a39512a4fea1a8c45e439148"
  );
});


test("groestl512 from native", (t) => {
  t.is(
    groestl512(Buffer.from("123")),
    "659c4a2cfaa26c49bcd2c6d45b2749e74aac80b6a51d110d31845eacbaf6c2e7ae4cc1a164a9ac825079039f5ef00f97d2add48a31b0c24c307bced3c4a36ec6"
  );
});


test("groestl256 from native", (t) => {
  t.is(
    groestl256(Buffer.from("123")),
    "1f372f3c492a7936542f21d38a0ea317551eeb280c95bfd626569563d99c8f03"
  );
});

test("ripemd128 from native", (t) => {
  t.is(
    ripemd128(Buffer.from("123")),
    "781f357c35df1fef3138f6d29670365a"
  );
});


test("ripemd160 from native", (t) => {
  t.is(
    ripemd160(Buffer.from("123")),
    "e3431a8e0adbf96fd140103dc6f63a3f8fa343ab"
  );
});

test("ripemd256 from native", (t) => {
  t.is(
    ripemd256(Buffer.from("123")),
    "8536753ad7bface2dba89fb318c95b1b42890016057d4c3a2f351cec3acbb28b"
  );
});

test("ripemd320 from native", (t) => {
  t.is(
    ripemd320(Buffer.from("123")),
    "bfa11b73ad4e6421a8ba5a1223d9c9f58a5ad456be98bee5bfcd19a3ecdc6140ce4c700be860fda9"
  );
});

test("shabal192 from native", (t) => {
  t.is(
    shabal192(Buffer.from("123")),
    "a6aeb3a157e9bd0e3dd2881ac35aa74a576345a34f10326c"
  );
});

test("shabal224 from native", (t) => {
  t.is(
    shabal224(Buffer.from("123")),
    "db74237d80920b13093476b4906f81e3fd33575c303f0914989c75c8"
  );
});

test("shabal256 from native", (t) => {
  t.is(
    shabal256(Buffer.from("123")),
    "7c27872733401cef0c8b34618a3763840a51852d0dcd29b6cfdd1df5879fc708"
  );
});

test("shabal384 from native", (t) => {
  t.is(
    shabal384(Buffer.from("123")),
    "667a593eb81ed793a34fc68e27a0c394c50c7413322d07415fff92b32429d0fc87d6875ce7b4faaa45da960e29ab1cb5"
  );
});

test("shabal512 from native", (t) => {
  t.is(
    shabal512(Buffer.from("123")),
    "19e1fc17e71271c97e59c4d1e6406c630d81e90eb8f48785e7e209c810b811874ca7637716f83ad9798148bdd0946a7b267be304985cf2b26a033ea98fc23e0c"
  );
});

test("streebog256 from native", (t) => {
  t.is(
    streebog256(Buffer.from("123")),
    "a78dc2b36dac63abe7b8f01789c3a75626f1b78db9183edfadeb1e0bfbcef5d4"
  );
});

test("streebog512 from native", (t) => {
  t.is(
    streebog512(Buffer.from("123")),
    "41fa84bcdbf646a101be2c7d5497131bc4cc48c58f7966272207fb0e3132d45ec18374c19f64b6b61ec53bd6c9556b95f0c9fa153d68f590a53e39d6a32d9ed2"
  );
});

test("tiger from native", (t) => {
  t.is(
    tiger(Buffer.from("123")),
    "a86807bb96a714fe9b22425893e698334cd71e36b0eef2be"
  );
});

test("tiger2 from native", (t) => {
  t.is(
    tiger2(Buffer.from("123")),
    "598b54a953f0abf9ba647793a3c7c0c4eb8a68698f3594f4"
  );
});

test("whirlpool from native", (t) => {
  t.is(
    whirlpool(Buffer.from("123")),
    "344907e89b981caf221d05f597eb57a6af408f15f4dd7895bbd1b96a2938ec24a7dcf23acb94ece0b6d7b0640358bc56bdb448194b9305311aff038a834a079f"
  );
});