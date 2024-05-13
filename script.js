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
}

function addBookToLibrary(title, author, release, pages, read) { // since it is related to the object, we should include the paramaters
    const newBook = new Book(title, author, release, pages, read);
    myLibrary.push(newBook);
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
    const removeButton = document.createElement("button"); // New remove button

    titlePara.textContent = `${title}, by ${author} (${release})`;
    infoPara.textContent = `${pages} Pages`;
    removeButton.textContent = "Remove"; // Set button text
    removeButton.addEventListener("click", function() { // Add event listener to remove button
        removeBook();
        newCard.remove(); // Remove card from DOM
    });

    newCard.classList.add("card");
    newCard.classList.add("fade-in")
    titlePara.classList.add("title");
    infoPara.classList.add("info")
    mainCard.classList.add("main");

    newCard.appendChild(mainCard)
    newCard.appendChild(removeButton)
    cardsDiv.appendChild(newCard);
    mainCard.appendChild(titlePara)
    mainCard.appendChild(infoPara)
  };

  function removeBook(title, author, release, pages, read) {
    const index = myLibrary.findIndex(book => (
        book.title === title &&
        book.author === author &&
        book.release === release &&
        book.pages === pages &&
        book.read === read
    ));

    // Remove the book from myLibrary array
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
}

uploadBook.addEventListener("click", (event) => {
    event.preventDefault();

    title = titleInputField.value;
    author = authorInputField.value;
    pages = pagesInputField.value;
    release = releaseInputField.value;
    read = readStatus.checked ? "Read" : "Not Read";

    addBookToLibrary(title, author, release, pages, read);
    createCard(title, author, release, pages, read);
    console.log(myLibrary);
    dialog.close();
});


myLibrary.forEach(element => {
    console.log(element)
})

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read')
// console.log(theHobbit.info());