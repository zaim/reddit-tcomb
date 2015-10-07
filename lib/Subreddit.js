'use strict'

var t = require('./types')
var base = require('./base')
var createThing = require('./createThing')

var SUBTYPES = ['public', 'private', 'restricted', 'gold_restricted', 'archived']

var Type = base.Named.extend({
  accounts_active: t.Number,
  comment_score_hide_mins: t.Number,
  description: t.String,
  description_html: t.String,
  display_name: t.String,
  header_img: t.maybe(t.String),
  header_size: t.maybe(t.list(t.Number)),
  header_title: t.maybe(t.String),
  over18: t.Boolean,
  public_description: t.String,
  public_traffic: t.Boolean,
  subscribers: t.Number,
  submission_type: t.enums.of(['any', 'link', 'self']),
  submit_link_label: t.String,
  submit_text_label: t.String,
  subreddit_type: t.enums.of(SUBTYPES),
  title: t.String,
  url: t.String,
  user_is_banned: t.Boolean,
  user_is_contributor: t.Boolean,
  user_is_moderator: t.Boolean,
  user_is_subscriber: t.Boolean
}, 'SubredditData')

module.exports = createThing({
  kind: 't5',
  name: 'Subreddit',
  type: Type
})
