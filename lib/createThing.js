'use strict'

var t = require('./types')

var ThingOptions = t.struct({
  kind: t.String,
  name: t.String,
  type: t.Function
}, 'ThingOptions')

module.exports = function createThing (options) {
  options = ThingOptions(options)

  var kind = options.kind
  var name = options.name
  var type = options.type

  var Thing = t.struct({
    kind: t.constant(kind),
    data: type
  }, name)

  Object.keys(type.prototype).forEach(function (key) {
    if (t.Function.is(type.prototype[key])) {
      Thing.prototype[key] = function () {
        return this.data[key].apply(this.data, arguments)
      }
    }
  })

  Thing.kind = kind

  return Thing
}
