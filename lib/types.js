var t = require('tcomb')

function constant (value) {
  return t.irreducible('Constant<' + t.stringify(value) + '>', function (v) {
    return v === value
  })
}

module.exports = Object.assign({}, t, {
  constant: constant
})
