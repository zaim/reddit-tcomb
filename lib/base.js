'use strict'

var t = require('./types')

var Created = t.struct({
  created: t.Number,
  created_utc: t.Number
},'Created')

Created.prototype.createdDate = function () {
  return new Date(this.created_utc)
}

var Named = t.struct({
  id: t.String,
  name: t.String
}, 'Named')

var Votable = t.struct({
  ups: t.Number,
  downs: t.Number,
  likes: t.maybe(t.Boolean)
}, 'Votable')

Votable.prototype.getScore = function () {
  return this.ups - this.downs
}

module.exports = {
  Created: Created,
  Named: Named,
  Votable: Votable
}
