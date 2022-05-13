const core = require('@actions/core');
const github = require('@actions/github');

var file = core.getInput('file')
var outputfile = core.getInput('build-name')

require('innosetup-compiler')(`./${file}`, {
    gui: false,
    verbose: false,
    O: `./${outputfile}`
}, function(error) {
    core.setFailed(error)
});

core.setOutput("inno-output", `./${outputfile}`)