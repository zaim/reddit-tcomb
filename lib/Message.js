'use strict'

var t = require('./types')
var base = require('./base')
var createThing = require('./createThing')

// Documented at:
// https://github.com/reddit/reddit/wiki/JSON#message-implements-created

var Type = base.Named.extend([
  base.Created,
  { author: t.String,
    body: t.String,
    body_html: t.String,
    context: t.String,
    first_message_name: t.String,
    likes: t.Boolean,
    link_title: t.String,
    new: t.Boolean,
    parent_id: t.String,
    replies: t.String,
    subject: t.String,
    subreddit: t.String,
    was_comment: t.Boolean
  }
], 'MessageData')

module.exports = createThing({
  kind: 't4',
  name: 'Message',
  type: Type
})
