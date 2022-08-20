// Step 2.
const fs = require("fs");
const axios = require("axios");
const process = require("process");

// path = "one.txt";

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log("ERROR"(err));
      process.exit(1);
    }
    console.log(data);
  });
}

// cat("another.txt");

// let url = "http://google.com";

async function webCat(url) {
  try {
    let resp = await axios.get(`${url}`);
    console.log(resp);
  } catch (err) {
    console.log(`Error fetching ${url}`);
    console.log(err);
    process.exit(1);
  }
}

// webCat(sampleUrl);

// argsv = 1 - node directory, 2-path to file, commands
// this only works when the path/url are hard coded into the file?
// if (process.argv[2].includes("http://")) {
//   webCat(url);
// } else {
//   cat(path);
// }

// solution did splicing thru index 0 -4- but a file could be named http.js and be sent in to the wrong function

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
