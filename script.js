const uploadBook = document.querySelector('.balloon');

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
    console.log("ayoo")
    let bookTitle = prompt("What is the name of the book?")
    let bookAuthor = prompt("Who is the author of the book?")
    let bookPages = prompt("How many pages does it have?")
    title = bookTitle;
    author = bookAuthor
    pages = bookPages
    addBookToLibrary();
    console.log(myLibrary)
});

myLibrary.forEach(element => {
    console.log(element)
})

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read')
// console.log(theHobbit.info());