import * as marked from 'marked';
import * as fs from 'fs';
fs.readFile('./test.md', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  let content = data;

  marked(content, (err, parseResult) => {
    fs.writeFile('./test_out.html', parseResult, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('The file was saved!');
    });
  });
});
/* marked(,(err,parseResult)=>{

}) */
