'use strict'

var t = require('./types')
var base = require('./base')
var createThing = require('./createThing')

// Documented at:
// https://github.com/reddit/reddit/wiki/JSON#account-implements-created

var Type = base.Named.extend([
  base.Created,
  { comment_karma: t.Number,
    has_mail: t.Boolean,
    has_mod_mail: t.Boolean,
    has_verified_email: t.Boolean,
    inbox_count: t.Number,
    is_friend: t.Boolean,
    is_gold: t.Boolean,
    is_mod: t.Boolean,
    link_karma: t.Number,
    modhash: t.String,
    over_18: t.Boolean
  }
], 'AccountType')

module.exports = createThing({
  kind: 't2',
  name: 'Account',
  type: Type
})
