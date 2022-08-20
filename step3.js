// Step 3.
const fs = require("fs");
const axios = require("axios");
const process = require("process");

// path = "one.txt";

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(`ERROR ${err})`);
      process.exit(1);
    }
    console.log(data);
  });
}

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

// write out to NEW file FROM read file
// node step3.js --out new.txt one.txt
// $ # no output, but new.txt contains contents of one.txt

// let newFile = "new.txt";
// let fromFile = "one.txt";

function writeToo(newFile, fromFile) {
  //

  fs.readFile(`${fromFile}`, "utf8", function (err, data) {
    if (err) {
      console.log(`There is an error ${err}`);
    } else {
      let content = data;
      return fs.writeFile(`${newFile}`, content, "utf8", function () {
        console.log("it worked");
      });
    }
  });
}

// navigation command
let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else if (process.argv[2] === "--out") {
  // newFile, fromFile
  writeToo(process.argv[3], process.argv[4]);
} else {
  cat(path);
}
