import { writeFile, unlink } from "fs/promises";

let delay = time =>
  new Promise(resolves =>
    setTimeout(resolves, time * 1000)
  );

Promise.all([
  writeFile("readme.md", "# Hello World"),
  writeFile("readme.txt", "Hello World"),
  delay(2),
  writeFile("readme.json", '{ "hello": "world" }')
]).then(() => console.log("files are added"));

// Promise.race([
//   delay(2),
//   unlink("readme.txt"),
//   delay(3),
//   unlink("readme.json"),
//   delay(5),
//   delay(3)
// ]).then(() => console.log("we did it!"));
