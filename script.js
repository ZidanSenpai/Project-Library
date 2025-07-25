function Book(name, author) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
}

let bookArray = [];

const container = document.getElementById("container");
const addbtn = document.getElementById("add-button");
const bookForm = document.getElementById("book-form");

// Handle Add Book form
addbtn.addEventListener("click", () => {
    bookForm.style.display = "block";
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("book-name").value;
    const author = document.getElementById("book-author").value;
    addBook(name, author);
    bookForm.reset();
    bookForm.style.display = "none";
});

function addBook(name, author) {
    const newBook = new Book(name, author);
    bookArray.push(newBook);
    displayBook(newBook); // Immediately display the book
}

// Create and append card
function displayBook(book) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = book.id;

    card.innerHTML = `
        <div class="content">
            <div class="para">
                <h1>${book.name}</h1>
                <p>${book.author}</p>
            </div>
            <div class="buttons">
                <button class="learn-more read-btn">Read</button>
                <button class="learn-more remove-btn">Remove</button>
            </div>
        </div>
    `;

    // Remove card logic
    card.querySelector(".remove-btn").addEventListener("click", () => {
        card.remove();
        bookArray = bookArray.filter(b => b.id !== book.id);
    });

    container.appendChild(card);
}

// Optional: Preload one book
// addBook("Crime and Punishment", "Fyodor Dostoevsky");
