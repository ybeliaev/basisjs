var remote = require('../../basisjs-tools-sync.js').remoteInspectors;
// var View = require('./view/index.js');
var data = require('./data/index.js');

require('api')
  .local(require('./api.js'), data)
  .channel(data.output, remote.send);

module.exports = {
  // view: new View({ container: document.body })
};
