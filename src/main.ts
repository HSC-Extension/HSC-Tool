import { getArrayOfHTMLFiles } from './functions';
import fetch from 'cross-fetch';

let arrayOfHTMLFiles = getArrayOfHTMLFiles();

for (const file of arrayOfHTMLFiles) {
  //POST request with body equal on data in JSON format
  fetch('https://validator.w3.org/nu/?out=json', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '@' + file,
  })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
      console.table(data.messages);
    })
    //Then with the error genereted...
    .catch((error) => {
      console.error('Error:', error);
    });
}
