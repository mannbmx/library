let library = [];


//Both creates a book and adds it to the DOM for display
function addBook(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
    addToLibrary(this);

    let libCont = document.querySelector('.content');
    let book1 = document.createElement('div');
    book1.className = 'bookCard';
    libCont.appendChild(book1);

    let bookTitle = document.createElement('h4');
    bookTitle.textContent ='Title: ' + this.name;
    bookTitle.classList = 'bookInfo title'
    book1.appendChild(bookTitle);

    let bookAuthor = document.createElement('h4');
    bookAuthor.textContent ='Author: ' + this.author;
    bookAuthor.classList = 'bookInfo author'
    book1.appendChild(bookAuthor);

    let bookPages = document.createElement('h4');
    bookPages.textContent = 'Pages: ' + this.pages;
    bookPages.classList = 'bookInfo pages'
    book1.appendChild(bookPages);
};


// Adds book to the library array
function addToLibrary(newBook){
    library.push(newBook);
}


//Function that takes form input values
function getVal(){
    const titleVal = document.getElementById('title');
    const authorVal = document.querySelector('#author');
    const pagesVal = document.querySelector('#pages');

    const book = new addBook(titleVal.value, authorVal.value, pagesVal.value);
    closeForm();
}


// Functions opens and closes the form.
function openForm(){
    document.querySelector('.formCont').style.display = "grid";
  
}

function closeForm(){
    document.querySelector('.formCont').style.display = 'none';

    //When form is closed it clears the inputs
    const titleVal = document.getElementById('title');
    const authorVal = document.querySelector('#author');
    const pagesVal = document.querySelector('#pages');
    const readVal = document.querySelector('read');
    titleVal.value = '';
    authorVal.value = '';
    pagesVal.value = '';

}


