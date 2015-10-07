'use strict'

var t = require('./types')
var createThing = require('./createThing')
var base = require('./base')

// Documented at:
// https://github.com/reddit/reddit/wiki/JSON#more

var Type = base.Named.extend({
  count: t.Number,
  parent_id: t.String,
  children: t.list(t.String)
}, 'MoreData')

module.exports = createThing({
  kind: 'more',
  name: 'More',
  type: Type
})
