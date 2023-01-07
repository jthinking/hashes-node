import { md2, md4, md5, sha1, sha256, sha512, sha3_256, sm3 } from '../index.js'

import test from 'ava'

test('md2 from native', (t) => {
  t.is(md2(Buffer.from('123')), 'ef1fedf5d32ead6b7aaf687de4ed1b71')
})

test('md4 from native', (t) => {
  t.is(md4(Buffer.from('123')), 'c58cda49f00748a3bc0fcfa511d516cb')
})

test('md5 from native', (t) => {
  t.is(md5(Buffer.from('123')), '202cb962ac59075b964b07152d234b70')
})

test('sha1 from native', (t) => {
  t.is(sha1(Buffer.from('123')), '40bd001563085fc35165329ea1ff5c5ecbdbbeef')
})

test('sha256 from native', (t) => {
  t.is(sha256(Buffer.from('123')), 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3')
})

test('sha512 from native', (t) => {
  t.is(sha512(Buffer.from('123')), '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2')
})

test('sha3_256 from native', (t) => {
  t.is(sha3_256(Buffer.from('123')), 'a03ab19b866fc585b5cb1812a2f63ca861e7e7643ee5d43fd7106b623725fd67')
})

test('sm3 from native', (t) => {
  t.is(sm3(Buffer.from('123')), '6e0f9e14344c5406a0cf5a3b4dfb665f87f4a771a31f7edbb5c72874a32b2957')
})
