'use strict'

var t = require('./types')
var createThing = require('./createThing')
var base = require('./base')
var Listing = require('./Listing')
var More = require('./More')

// Documented at:
// https://github.com/reddit/reddit/wiki/JSON#comment-implements-votable--created

var Type = base.Named.extend([
  base.Created,
  base.Votable,
  { approved_by: t.maybe(t.String),
    archived: t.Boolean,
    author: t.String,
    author_flair_css_class: t.maybe(t.String),
    author_flair_text: t.maybe(t.String),
    banned_by: t.maybe(t.String),
    body: t.String,
    body_html: t.String,
    controversiality: t.Number,
    distinguished: t.maybe(t.String),
    edited: t.union([t.Number, t.Boolean]),
    gilded: t.Number,
    link_author: t.maybe(t.String),
    link_id: t.String,
    link_title: t.maybe(t.String),
    link_url: t.maybe(t.String),
    mod_reports: t.Array,
    num_reports: t.maybe(t.Number),
    parent_id: t.String,
    removal_reason: t.maybe(t.String),
    replies: Listing.of(t.Any),
    report_reasons: t.maybe(t.String),
    saved: t.Boolean,
    score: t.Number,
    score_hidden: t.Boolean,
    subreddit: t.String,
    subreddit_id: t.String,
    user_reports: t.Array
  }
], 'CommentData')

var Comment = createThing({
  kind: 't1',
  name: 'Comment',
  type: Type
})

var Reply = t.union([Comment, More], 'Reply')

Reply.dispatch = function (reply) {
  return reply.kind === 'more' ? More : Comment
}

var ReplyListing = Listing.of(Reply)

var Replies = Type.meta.props.replies = t.union([
  t.String, ReplyListing
], 'Replies')

Replies.dispatch = function (thing) {
  return t.String.is(thing) ? t.String : ReplyListing
}

Type.prototype.hasReplies = function () {
  return ReplyListing.is(this.replies)
}

module.exports = Comment
