const dialog = document.querySelector('dialog')
const titleInputField = document.getElementById('title')
const authorInputField = document.getElementById('author')
const pagesInputField = document.getElementById('pages')
const releaseInputField = document.getElementById('release')
const readStatus = document.getElementById('read')
const newBook = document.querySelector('.balloon');
const uploadBook = document.querySelector('input.balloon[type="submit"]');
const closeFormModal = document.querySelector('button.close')

const myLibrary = [];

function Book(title, author, release, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.release = release;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

function addBookToLibrary() {
    myLibrary.push(title, author, pages, release, read)
}

newBook.addEventListener("click", () => {
    dialog.classList.add('fade-in')
    dialog.showModal();
});

closeFormModal.addEventListener("click", () => {
    event.preventDefault();
    dialog.close();
    console.log('x')
});

function createCard() {
    let newCard = document.createElement("div");
    let mainCard = document.createElement("div")
    let titlePara = document.createElement("p")
    let infoPara = document.createElement("p")
    let cardsDiv = document.querySelector(".cards");

    titlePara.textContent = `${title}, by ${author} (${release})`;
    infoPara.textContent = `${pages} Pages`;

    newCard.classList.add("card");
    newCard.classList.add("fade-in")
    titlePara.classList.add("title");
    infoPara.classList.add("info")
    mainCard.classList.add("main");

    newCard.appendChild(mainCard)
    cardsDiv.appendChild(newCard);
    mainCard.appendChild(titlePara)
    mainCard.appendChild(infoPara)
  };

uploadBook.addEventListener("click", () => {
    event.preventDefault();

    title = titleInputField.value;
    author = authorInputField.value;
    pages = pagesInputField.value;
    release = releaseInputField.value;
    read = readStatus.value;

    addBookToLibrary();
    createCard();
    console.log(title, author, pages, release, read)
    console.log(myLibrary)
    dialog.close();
});



myLibrary.forEach(element => {
    console.log(element)
})

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read')
// console.log(theHobbit.info());