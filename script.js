const dialog = document.querySelector('dialog')
const titleInputField = document.getElementById('title')
const authorInputField = document.getElementById('author')
const pagesInputField = document.getElementById('pages')
const releaseInputField = document.getElementById('release')
const newBook = document.querySelector('.balloon');
const uploadBook = document.querySelector('input.balloon[type="submit"]');
const closeFormModal = document.querySelector('button.close')

let title = titleInputField.value;
let author = authorInputField.value;
let pages = pagesInputField.value;
let release = releaseInputField.value;

const myLibrary = [];

function Book(title, author, release, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

function addBookToLibrary() {
    myLibrary.push(title, author, pages, release)
}

newBook.addEventListener("click", () => {
    dialog.classList.add('fade-in')
    dialog.showModal();
});

uploadBook.addEventListener("click", () => {
    event.preventDefault();
    addBookToLibrary();
    console.log(title, author, pages, release)
    console.log(myLibrary)
    dialog.close();
})

closeFormModal.addEventListener("click", () => {
    event.preventDefault();
    dialog.close();
    console.log('x')
});

myLibrary.forEach(element => {
    console.log(element)
})

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read')
// console.log(theHobbit.info());