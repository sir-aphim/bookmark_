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

function addBookToLibrary(title, author, release, pages, read) {
    const newBook = new Book(title, author, release, pages, read);
    myLibrary.push(newBook);
}

newBook.addEventListener("click", () => {
    dialog.classList.remove('fade-out')
    dialog.classList.add('fade-in');
    dialog.showModal();
});

closeFormModal.addEventListener("click", () => {
    event.preventDefault();
    dialog.classList.remove('fade-in')
    dialog.classList.add('fade-out');

    setTimeout(() => {
        dialog.close();
      }, 520);      
});

function createCard() {
    const newCard = document.createElement("div");
    const mainCard = document.createElement("div")
    const titlePara = document.createElement("p")
    const infoPara = document.createElement("p")
    const cardsDiv = document.querySelector(".cards");
    const projectOptions = document.createElement("div");

    titlePara.textContent = `${title}, by ${author} (${release})`;
    infoPara.textContent = `${pages} Pages`;

    // Create and append SVGs
    const starPlusSVG = createSVG("project-option", "0 0 24 24", '<title>star-plus-outline</title><path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" />');
    const trashCanSVG = createSVG("project-option", "0 0 24 24", '<title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />');
    const eyePlusSVG = createSVG("project-option", "0 0 24 24", '<title>eye-plus-outline</title><path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" />');
   
    trashCanSVG.addEventListener("click", function() { // Add event listener to remove button
        removeBook(title, author, release, pages, read);
        newCard.remove(); // Remove card from DOM
    });

    newCard.classList.add("card");
    newCard.classList.add("fade-in");
    projectOptions.setAttribute("id", "project-options")
    titlePara.classList.add("title");
    infoPara.classList.add("info")
    mainCard.classList.add("main");

    projectOptions.appendChild(starPlusSVG); // Append star plus SVG to project options
    projectOptions.appendChild(trashCanSVG)
    projectOptions.appendChild(eyePlusSVG);

    newCard.appendChild(mainCard)
    cardsDiv.appendChild(newCard);
    mainCard.appendChild(titlePara)
    mainCard.appendChild(infoPara)
    newCard.appendChild(projectOptions)
  };

  function createSVG(className, viewBox, pathData) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", className);
    svg.setAttribute("viewBox", viewBox);
    svg.innerHTML = pathData;
    return svg;
}

  function removeBook() {
    // Find the book index in myLibrary array
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
    dialog.classList.remove('fade-in')
    dialog.classList.add('fade-out');

    setTimeout(() => {
        dialog.close();
      }, 520);      

    event.preventDefault();

    title = titleInputField.value;
    author = authorInputField.value;
    pages = pagesInputField.value;
    release = releaseInputField.value;
    read = readStatus.checked ? "Read" : "Not Read";

    addBookToLibrary(title, author, release, pages, read);
    createCard(title, author, release, pages, read);
    console.log(myLibrary);
});


myLibrary.forEach(element => {
    console.log(element)
})

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read')
// console.log(theHobbit.info());