import { writeFile } from "fs/promises";

writeFile("sample.txt", "This is a sample")
  .then(() => console.log("file successfully created"))
  .catch(error =>
    console.error(`error creating file: ${error}`)
  );
