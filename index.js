function pAfter (when, what) {
  return new Promise(resolve => setTimeout(() => resolve(what), when))
}

module.exports = pAfter
