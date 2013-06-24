Angular JS based SEO on Node.js backend server.

## Getting Started
Install [phantomjs](http://phantomjs.org/)

## Documentation

_phantomjs show-rendered.js 'http://writebox.co.uk/#!/kanban'_  

will show the fully rendered html.

This can be added as child process that is run on your Node.js server and used as output for the crawlers.

## Needed Snippets
_Nginx config_  

```
if ($args ~ "_escaped_fragment_=(.+)") {
  rewrite ^ /bots/$is_args$args;
}
```

_Add an Express route similar to this :_  
```
/bots/:optional?*
```

_which points to the Express endpoint for serving bots_  
```javascript
var exec = require('child_process').exec;

...

// show-rendered.js lives in "bin/show-rendered.js" under the app
page: function page(req, res) {
  var safe = req.query._escaped_fragment_.match(/[\w\s_-]+/g)[0];
  var cmd = "phantomjs " + process.cwd() + "/bin/show-rendered.js 'http://" + req.host + "/#!/" + safe + "'";
  exec(cmd, function (error, stdout, stderr) {
    res.send(stdout);
  });
}
```

## Contributing
Contact [Mark](mailto:mark@writebox.co.uk)

## Release History
_(0.0.1)_

## License
Just nick it and do what you want.
