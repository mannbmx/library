let library = [];

function addBook(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
};


// Adds book to the library array
function addToLibrary(newBook){
    library.push(newBook);
}

// For loop iterates through library array and adds the books to the dom
for(let book of library){
    let libCont = document.querySelector('.content');
    let book1 = document.createElement(div);
    book1.className = 'bookCard';
    libCont.appendChild(book1);

    let bookTitle = document.createElement(h4);
    bookTitle.textContent ='Title: ' + this.name;
    book1.appendChild(bookTitle);

    let bookAuthor = document.createElement(h4);
    bookAuthor.textContent ='Author: ' + this.author;
    book1.appendChild(bookAuthor);

    let bookPages = document.createElement(h4);
    bookPages.textContent = 'Pages: ' + this.pages;
    book1.appendChild(bookPages);
}

function openForm(){
    document.querySelector('.formCont').style.display = "grid";
  
}

function closeForm(){
    document.querySelector('.formCont').style.display = 'none';
}


