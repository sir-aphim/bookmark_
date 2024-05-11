const dialog = document.querySelector('dialog')
const uploadBook = document.querySelector('button');
const closeFormModal = document.querySelector('dialog > button.close')

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

function addBookToLibrary() {
    myLibrary.push(title, author, pages)
}

uploadBook.addEventListener("click", () => {
    dialog.classList.add('fade-in')
    dialog.showModal();
    console.log("ayoo")
    // let bookTitle = prompt("What is the name of the book?")
    // let bookAuthor = prompt("Who is the author of the book?")
    // let bookPages = prompt("How many pages does it have?")
    title = bookTitle;
    author = bookAuthor
    pages = bookPages
    addBookToLibrary();
    console.log(myLibrary)
});

closeFormModal.addEventListener("click", () => {
    dialog.close();
});

myLibrary.forEach(element => {
    console.log(element)
})

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read')
// console.log(theHobbit.info());