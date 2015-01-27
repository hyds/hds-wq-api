var Busboy = require('busboy'); // to handle the form
var csv = require('fast-csv');
var http = require('http'),
    inspect = require('util').inspect;


http.createServer(function(req, res) {
  if (req.method === 'POST') {

  var busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    file.pipe(csv())
      .on('data', function (data) {
        //this is where fieldsheet will send data to Maurices mongodb
        //so we really want a simple app front end, and hte Maruice backend running in  a separate box
        
        console.log('YAY, just the data I wanted!', data);
      });
  });
  busboy.on('finish', function() {
    console.log('Done parsing form!');
    res.writeHead(200);
    res.end('<html><head></head><body><h1>Done!</h1></body></html>');
  });
  req.pipe(busboy);
} else if (req.method === 'GET') {
    res.writeHead(200, { Connection: 'close' });
    res.end('<html><head></head><body>\
               <form method="POST" enctype="multipart/form-data">\
                <input type="text" name="textfield"><br />\
                <input type="file" name="filefield"><br />\
                <input type="submit">\
              </form>\
            </body></html>');
  }
}).listen(8000, function() {
  console.log('Listening for requests');
});

