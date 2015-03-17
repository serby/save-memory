function getEngine(options, callback) {

  if (callback === undefined) {
    callback = options
    options = {}
  }

  callback(undefined, require('../lib/engine')(options))
}

require('save/test/engine.tests')('_id', getEngine)
