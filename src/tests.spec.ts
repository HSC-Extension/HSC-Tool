import { getArrayOfHTMLFiles } from './functions';

test('Number of HTML Files on folder', () => {
  var arrayOfHTMLFiles = getArrayOfHTMLFiles();
  console.log(arrayOfHTMLFiles);
  expect(arrayOfHTMLFiles.length).toBe(2);
});
