const test = require('tape')

const envToObj = require('../')

test('env-to-obj', function (t) {
  t.ok(envToObj, 'module is require-able')
  t.end()
})

test('env obj primitives', function (t) {
  const input = {
    URL: 'http://localhost/',
    DIRECTORY: '/home/human',
    PORT: '8000',
    FACTOR: '1.5',
    YEAH: 'true',
    NAH: 'false',
    UH: 'null',
    WHAT: 'undefined'
  }
  const expected = {
    url: 'http://localhost/',
    directory: '/home/human',
    port: 8000,
    factor: 1.5,
    yeah: true,
    nah: false,
    uh: null,
    what: undefined
  }
  const actual = envToObj(input)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})

test('nested env obj', function (t) {
  const input = {
    THING_FACE__IS__COOL: 'true',
    THING_FACE__IS__NOT_COOL: 'false',
    YEAH__NAH__WAIT_WHAT: 'sweet as'
  }
  const expected = {
    thingFace: {
      is: {
        cool: true,
        notCool: false
      }
    },
    yeah: {
      nah: {
        waitWhat: 'sweet as'
      }
    }
  }
  const actual = envToObj(input)
  t.deepEqual(actual, expected, 'actual equals expected')
  t.end()
})
