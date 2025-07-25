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
const container = document.getElementById("container");
function displayBooks(){
    for (let i = 0; i < bookArray.length; i++) {
        const element = bookArray[i];
        container.appendChild(element);
    }
}
const addbtn = document.getElementById("add-button");
const bookForm = document.getElementById("book-form");

addbtn.addEventListener("click", ()=>{
    bookForm.style.display = "block"; // Show the form
})
bookForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById("book-name").value;
    const author = document.getElementById("book-author").value;
    addBook(name, author)
    // Add your book-adding logic here
    console.log("Book Added:", name, author);

    // Clear and hide the form
    bookForm.reset();
    bookForm.style.display = "none";
});
addBook("Crime and Punishment", "Fyodor Dostoevsky");
console.log(bookArray);
displayBooks();
