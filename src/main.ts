import axios from 'axios';
import { getArrayOfHTMLFiles } from './functions';

let arrayOfHTMLFiles = getArrayOfHTMLFiles();

for (const file of arrayOfHTMLFiles) {

  //POST request with body equal on data in JSON format
  axios({
    method: 'post',
    url: 'https://validator.w3.org/nu/?out=json',
    data: '@' + file,
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


