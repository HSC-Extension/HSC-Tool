export function getArrayOfHTMLFiles(): String[] {
  const fs = require('fs');

  try {
    const arrayOfFiles = fs.readdirSync('./src/');
    var arrayOfHTMLFiles = arrayOfFiles.filter((name) =>
      name.includes('.html'),
    );
  } catch (e) {
    console.log(e);
  }
  return arrayOfHTMLFiles;
}
