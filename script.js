function Book(name, author){
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
}
let bookArray = [];
function addBook(name, author){
    const newBook = new Book(name, author);
    bookArray.push(newBook);
}
addBook("Crime and Punishment", "Fyodor Dostoevsky");
console.log(bookArray);
