import * as fs from 'fs';
import * as xml2js from 'xml2js';
let books = [];
let filePaths: string[] = fs.readdirSync('source_files');
var parser = new xml2js.Parser({ explicitArray: false });
for (let filePath of filePaths) {
  const input = fs.readFileSync(`source_files/${filePath}`, 'utf8');
  parser.parseString(input, (err, results: any) => {
    if (err) {
      console.log(err);
    } else {
      let book: Book = {
        id: results.GoodreadsResponse.book.id,
        title: results.GoodreadsResponse.book.title,
        isbn: results.GoodreadsResponse.book.isbn,
        isbn13: results.GoodreadsResponse.book.isbn13,
        description: results.GoodreadsResponse.book.description.replace(
          /<[^>]*>/g,
          ''
        ),
        image_url: getLargeImageUrl(results.GoodreadsResponse.book.image_url),
        price: Math.floor(Math.random() * 4) + 5.99,
        authors: Array.isArray(results.GoodreadsResponse.book.authors.author)
          ? results.GoodreadsResponse.book.authors.author.map(author => {
              return author.name;
            })
          : [results.GoodreadsResponse.book.authors.author.name]
      };
      books.push(book);
    }
  });
}
fs.writeFileSync('1.json', JSON.stringify(books));
interface Book {
  id: string;
  title: string;
  description: string;
  image_url: string;
  isbn: string;
  isbn13: string;
  price: number;
  authors: string[];
}
interface Author {
  id: string;
  name: string;
  role?: string;
}
function getLargeImageUrl(url: string): string {
  if (url.indexOf('nophoto') === -1) {
    let tokens: string[] = url.split('/');
    tokens[tokens.length - 2] =
      tokens[tokens.length - 2].substring(
        0,
        tokens[tokens.length - 2].length - 1
      ) + 'l';
    return tokens.join('/');
  }
  return url;
}
