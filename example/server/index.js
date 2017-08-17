// static server code: https://stackoverflow.com/a/12164872/5984380

const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const formidable = require('formidable')

const mimeTypes = {
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "png": "image/png",
  "svg": "image/svg",
  "gif": "image/gif",
  "mp4": "video/mp4",
  "mp3": "audio/mp3"
}

const port = 9090
const fileSaveDir = path.join(__dirname, 'temp')

const uploadServer = (req, res) => {

  !fs.existsSync(fileSaveDir) && fs.mkdirSync(fileSaveDir)
  let responseData = []

  const form = new formidable.IncomingForm()
  form.uploadDir = fileSaveDir
  form.type = true
  form.keepExtensions = true

  form.parse(req, function(err, fields, files){

    if(!err) {

      Object.keys(files).forEach(function(key){

        const file = files[key]
        const filename = path.basename(file.path)

        // 塞入响应数据中
        responseData.push({
          type: file.type,
          name: filename,
          url: 'http://localhost:' + port + '/temp/' + filename,
          size: file.size / 1024 > 1024 ? (~~(10 * file.size / 1024 / 1024)) / 10 + "MB" : ~~(file.size / 1024) + "KB"
        })

      })
    } else {
      console.warn(err)
    }

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200)
    res.end(JSON.stringify(responseData))

  })

}

const staticServer = (req, res) => {

  var uri = url.parse(req.url).pathname;
  var filename = path.join(process.cwd(), unescape(uri));
  var stats;

  try {
    stats = fs.lstatSync(filename); // throws if path doesn't exist
  } catch (e) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found\n');
    res.end();
    return;
  }

  if (stats.isFile()) {
    // path exists, is a file
    var mimeType = mimeTypes[path.extname(filename).split(".").reverse()[0]];
    res.writeHead(200, {'Content-Type': mimeType} );
    var fileStream = fs.createReadStream(filename);
    fileStream.pipe(res);
  } else if (stats.isDirectory()) {
    // path exists, is a directory
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Index of '+uri+'\n');
    res.write('TODO, show index?\n');
    res.end();
  } else {
    // Symbolic link, other?
    // TODO: follow symlinks?  security?
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.write('500 Internal server error\n');
    res.end();
  }

}

const server = http.createServer((req, res) => {

  if (req.method.toLowerCase() === 'get') {
    staticServer(req, res)
  } else {
    uploadServer(req, res)
  }

})

server.listen(port)