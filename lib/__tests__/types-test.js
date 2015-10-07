var assert = require('assert')
var t = require('../types')

describe('lib/types', function () {

  describe('constant()', function () {

    it('should throw if used with wrong value', function () {
      var constant = t.constant('value')
      assert.throws(function () {
        constant('not value')
      }, '[tcomb] Invalid value "not value" supplied to Constant<"value">')
    })

  })

})
