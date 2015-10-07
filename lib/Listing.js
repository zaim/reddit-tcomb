'use strict'

var t = require('./types')
var createThing = require('./createThing')

// Documented at:
// https://github.com/reddit/reddit/wiki/JSON#listing

function listingData (Type) {
  return t.struct({
    children: t.list(Type),
    modhash: t.maybe(t.String),
    before: t.maybe(t.String),
    after: t.maybe(t.String)
  }, t.getTypeName(Type) + 'Data')
}

var Listing = createThing({
  kind: 'Listing',
  name: 'Listing',
  type: listingData(t.Any)
})

Listing.of = function listingOf (Type) {
  return createThing({
    kind: 'Listing',
    name: t.getTypeName(Type) + 'Listing',
    type: listingData(Type)
  })
}

Listing.finalize = function listingFinalize (things) {
  Listing.meta.props.data.meta.props.children = t.list(things.Thing)
}

module.exports = Listing
