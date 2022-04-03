import axios from 'axios';
import { readFileSync } from 'fs';
import getAllFilePaths from './functions';

let arrayOfHTMLFiles = getAllFilePaths('/home/marcos/Repositories/HSC-Tool/src/');

for (const file of arrayOfHTMLFiles) {
  const content = readFileSync(file, 'utf-8');
  //POST request with body equal on data in JSON format
  axios({
    method: 'post',
    url: 'https://validator.w3.org/nu/?out=json',
    data: content,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
    .then((response) => response.data)
    .then((data) => {
      console.table(data.messages);
    })
    //Then with the error genereted...
    .catch((error) => {
      console.error('Error:', error);
    });
}
