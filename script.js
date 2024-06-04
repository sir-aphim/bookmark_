const dialog = document.querySelector('dialog')
const searchInputField = document.getElementById('searchQueryInput')
const titleInputField = document.getElementById('title')
const authorInputField = document.getElementById('author')
const pagesInputField = document.getElementById('pages')
const releaseInputField = document.getElementById('release')
const readStatus = document.getElementById('read')
const favouriteStatus = document.getElementById('star')
const newBook = document.querySelector('.balloon');
const uploadBook = document.querySelector('button.balloon[type="submit"]');
const requiredInputs = document.querySelectorAll('#bookForm input');
const bookForm = document.getElementById('bookForm');
const closeFormModal = document.querySelector('button.close')

const myLibrary = [];

function Book(title, author, release, pages, read, star) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.release = release;
    this.read = read;
    this.star = star;
}

const index = myLibrary.length;


function addBookToLibrary(title, author, release, pages, read, star) {
    const newBook = new Book(title, author, release, pages, read, star);
    newBook.index = myLibrary.length; // Assign index property
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

function search() {
    cardList = document.querySelectorAll('.title');
    cardDiv = document.querySelectorAll('.card')
    for (let i = 0; i < cardList.length; i += 1){

    if (cardList[i].innerText.toLowerCase().includes(searchInputField.value.toLowerCase())){
        cardDiv[i].style.display = "grid";
        cardList[i].style.display = "block";
        console.log(cardList[i])
    } else { 
        cardList[i].style.display = "none";
        cardDiv[i].style.display = "none"
    }   
    }
};

searchInputField.addEventListener("input", search);

function createCard() {
    newBook.index = myLibrary.length - 1; // Assign index property
    // console.log("Creating card for book at index:", newBook.index);

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
    const eyeCheckSVG = createSVG("project-option", "0 0 24 24", '<title>eye-check</title><path d="M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,17C12.5,17 12.97,16.93 13.42,16.79C13.15,17.5 13,18.22 13,19V19.45L12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5C17,4.5 21.27,7.61 23,12C22.75,12.64 22.44,13.26 22.08,13.85C21.18,13.31 20.12,13 19,13C18.22,13 17.5,13.15 16.79,13.42C16.93,12.97 17,12.5 17,12A5,5 0 0,0 12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17Z" />');
    const starCheckSVG = createSVG("project-option", "0 0 24 24", '<title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />');

    trashCanSVG.addEventListener("click", function() { // Add event listener to remove button
        removeBook(newBook.index)
        fadeItem(newCard)
        setTimeout(() => {
            newCard.remove(); // Remove card from DOM
        }, 520);
    });

    newCard.classList.add("card");
    setTimeout(() => {
        newCard.setAttribute("id", "pop-in");
    }, 50)
    
    projectOptions.setAttribute("id", "project-options")
    titlePara.classList.add("title");
    infoPara.classList.add("info")
    mainCard.classList.add("main");

    projectOptions.appendChild(trashCanSVG)

    if (read === "Read") {
        projectOptions.appendChild(eyeCheckSVG);
    } else {
        projectOptions.appendChild(eyePlusSVG);
    }

    if (star === "Favorite") {
        projectOptions.appendChild(starCheckSVG)
    } else {
        projectOptions.appendChild(starPlusSVG)
    }
    
    // Add event listeners for eye icons
    handleEyeClick(eyePlusSVG, eyeCheckSVG, projectOptions, newBook.index);
    
    newCard.appendChild(mainCard)
    cardsDiv.appendChild(newCard);
    mainCard.appendChild(titlePara);
    mainCard.appendChild(infoPara);
    newCard.appendChild(projectOptions);
  };

function createSVG(className, viewBox, pathData) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", className);
    svg.setAttribute("viewBox", viewBox);
    svg.innerHTML = pathData;
    return svg;
}

function handleEyeClick(eyePlus, eyeCheck, container, index) {
    eyePlus.addEventListener("click", function() {
        container.removeChild(eyePlus);
        container.appendChild(eyeCheck);
        myLibrary[index].read = "Read";
        console.log(myLibrary[index]);
    });

    eyeCheck.addEventListener("click", function() {
        container.removeChild(eyeCheck);
        container.appendChild(eyePlus);
        myLibrary[index].read = "Not Read";
        console.log(myLibrary[index]);
    });
}

// Example usage assuming book is associated with each card

function removeBook() {
    // Find the book index in myLibrary array
    const test = myLibrary.findIndex(book => (
        book.title === title &&
        book.author === author &&
        book.release === release &&
        book.pages === pages &&
        book.read === read &&
        book.star === star
    ));

    if (test !== -1) {
        myLibrary.splice(newBook.index, 1)
    }
}

function fadeItem(item) {
    item.classList.remove('fade-in');
    item.classList.add('fade-out');
};

bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get all required inputs
    let isValid = true;

    // Check if all required inputs are valid
    requiredInputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('invalid'); // Optionally add a class for styling invalid inputs
            // Optionally, you can display a message to the user here
        } else {
            input.classList.remove('invalid'); // Remove invalid class if input is valid
        }
    });

    if (isValid) {
        event.preventDefault();

        fadeItem(dialog);
                 
        setTimeout(() => {
            dialog.close();
        }, 520);      
                 
        title = titleInputField.value;
        author = authorInputField.value;
        pages = pagesInputField.value;
        release = releaseInputField.value;
        read = readStatus.checked ? "Read" : "Not Read";
        star = favouriteStatus.checked ? "Favorite" : "Average";
                     
        addBookToLibrary(title, author, release, pages, read, star);
        createCard(title, author, release, pages, read, star);
        console.log(myLibrary);   
    }
});

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read')
// console.log(theHobbit.info())