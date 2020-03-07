const sass = require("node-sass")
const fs = require("fs")

sass.render({
  file: "./src/assets/scss/output.scss",
  outFile: "./dist/output.css",
  outputStyle: "compressed",
}, function(error, result) { // node-style callback from v3.0.0 onwards
  if(!error){
    // No errors during the compilation, write this result on the disk
    fs.writeFile("./dist/output.css", result.css, function(err){
      if(!err){
        // file written on disk
      }
    })
  }
})
