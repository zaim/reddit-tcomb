var t = require('tcomb')
var assert = require('assert')
var Comment = require('../Comment')

describe('lib/Comment', function () {

  it('should reset replies property', function () {
    var CommentData = Comment.meta.props.data
    var RepliesType = CommentData.meta.props.replies

    assert.equal(RepliesType.meta.kind, 'union')
    assert.strictEqual(RepliesType.meta.types[0], t.String)

    var ReplyListing = RepliesType.meta.types[1]

    assert.strictEqual(ReplyListing.kind, 'Listing')
    assert.strictEqual(ReplyListing.meta.name, 'ReplyListing')
  })

})
