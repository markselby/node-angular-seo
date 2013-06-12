var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Usage: show-rendered.js <some URL>');
  phantom.exit();
}

address = system.args[1];

page.open(address, function (status) {
  if (status !== 'success') {
    console.log('Load failed');
  } else {
    console.log(page.content);
  }
  phantom.exit();
});
