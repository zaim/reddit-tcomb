var t = require('tcomb')
var assert = require('assert')
var index = require('../')
var Listing = index.Listing
var Thing = index.Thing

describe('lib/Listing', function () {

  it('should reset children type', function () {
    var ListingData = Listing.meta.props.data
    var ChildrenType = ListingData.meta.props.children
    assert(ChildrenType)
    assert.strictEqual(ChildrenType.meta.type, Thing)
  })

  describe('of()', function () {
    var Person = t.struct({ name: t.Str }, 'Person')

    it('should correctly set children sub-type', function () {
      var People = Listing.of(Person)
      var PData = People.meta.props.data
      assert.strictEqual(
        PData.meta.props.children.meta.type,
        Person
      )
    })

    it('should correct set displayName', function () {
      var People = Listing.of(Person)
      assert.strictEqual(People.displayName, 'PersonListing')
    })
  })

})
