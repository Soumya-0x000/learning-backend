const fs = require("fs");

// fs.appendFile(
//   "any.txt",
//   `\nappending file through fs.appendFile`,
//   (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   }
// );

// fs.readFile("IIFE.js", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.rename("any.js", "logging.js", (err) => {
//   if (err) throw err;
//   console.log("File renamed!");
// });

// fs.createReadStream("any.txt")
//   .pipe(fs.createWriteStream("any.txt", { flags: "a" }))
//   .on("finish", () => console.log("done"));

fs.copyFile("any.txt", "IIFE.js", (err) => {
    if (err) throw err;
    console.log("File copied!");
})


fs.writeFile(
  "IIFE.js",
  `(() => {
        console.log("creating new file through fs.writeFile")
    })()`,
  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  }
);
