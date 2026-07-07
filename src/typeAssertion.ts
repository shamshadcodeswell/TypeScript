type book = { name: string };
let bookString = '{"name" : "harry porter"}';
let bookObject = JSON.parse(bookString) as book;

let bookName = bookObject.name;
