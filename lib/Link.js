'use strict'

var t = require('./types')
var base = require('./base')
var createThing = require('./createThing')

// Documented at:
// https://github.com/reddit/reddit/wiki/JSON#link-implements-votable--created

var Type = base.Named.extend([
  base.Created,
  base.Votable,
  { approved_by: t.maybe(t.String),
    archived: t.Boolean,
    author: t.maybe(t.String),
    author_flair_css_class: t.maybe(t.String),
    author_flair_text: t.maybe(t.String),
    banned_by: t.maybe(t.String),
    clicked: t.Boolean,
    distinguished: t.maybe(t.String),
    domain : t.String,
    edited: t.union([t.Number, t.Boolean]),
    from: t.Any,
    from_id: t.Any,
    from_kind: t.Any,
    gilded: t.Number,
    hidden: t.Boolean,
    hide_score: t.Boolean,
    is_self: t.Boolean,
    link_flair_css_class: t.maybe(t.String),
    link_flair_text: t.maybe(t.String),
    media: t.maybe(t.Object),
    media_embed: t.Object,
    mod_reports: t.Array,
    num_comments: t.Number,
    num_reports: t.maybe(t.Number),
    over_18: t.Boolean,
    permalink: t.String,
    quarantine: t.Boolean,
    removal_reason: t.Any,
    report_reasons: t.Any,
    saved: t.Boolean,
    score: t.Number,
    secure_media: t.maybe(t.Object),
    secure_media_embed: t.Object,
    selftext: t.String,
    selftext_html: t.maybe(t.String),
    stickied: t.Boolean,
    subreddit: t.String,
    subreddit_id: t.String,
    suggested_sort: t.Any,
    thumbnail: t.String,
    title: t.String,
    upvote_ratio: t.maybe(t.Number),
    url: t.String,
    user_reports: t.Array,
    visited: t.Boolean
  }
], 'LinkData')

module.exports = createThing({
  kind: 't3',
  name: 'Link',
  type: Type
})
