const fs = require("fs");
const process = require("process");

// Step 1.
function cat(path) {
  //  reading async

  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log("ERROR"(err));
      process.exit(1);
    }
    console.log(data);
  });
}

cat("another.txt");
// cat(process.argv[2]);
// prints path to node, then path to file, then any commands
