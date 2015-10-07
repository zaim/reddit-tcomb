var assert = require('assert')
var t = require('tcomb')
var createThing = require('../createThing')

describe('lib/createThing', function () {

  it('should use provided name as type name', function () {
    var Thing = createThing({
      kind: 't1000',
      name: 'TheThing',
      type: t.struct({
        key: t.String
      })
    })

    assert.strictEqual(Thing.displayName, 'TheThing')
  })

  it('should set kind static property', function () {
    var Thing = createThing({
      kind: 't1000',
      name: 'TheThing',
      type: t.struct({
        key: t.String
      })
    })

    assert.strictEqual(Thing.kind, 't1000')
  })

  it('should delegate data type methods', function () {
    var Type = t.struct({
      key: t.String
    })

    Type.prototype.getKey = function () {
      return this.key.toUpperCase()
    }

    var Thing = createThing({
      kind: 't1000',
      name: 'TheThing',
      type: Type
    })

    var thing = Thing({
      kind: 't1000',
      data: {
        key: 'value'
      }
    })

    assert.strictEqual(thing.getKey(), 'VALUE')
  })

})
