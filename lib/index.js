'use strict'

var t = require('tcomb')

var types = [
  require('./account'),
  require('./comment'),
  require('./link'),
  require('./listing'),
  require('./message'),
  require('./more'),
  require('./subreddit')
]

var kindMap = {}
var typeMap = {}

types.forEach(function (Thing) {
  kindMap[Thing.kind] = Thing
  typeMap[Thing.displayName] = Thing
})

typeMap.Thing = t.union(types, 'Thing')

typeMap.Thing.dispatch = function thingDispatch (thing) {
  return kindMap[t.Object(thing).kind]
}

types.forEach(function (Thing) {
  if (t.Function.is(Thing.finalize)) {
    Thing.finalize(typeMap)
  }
})

module.exports = typeMap
