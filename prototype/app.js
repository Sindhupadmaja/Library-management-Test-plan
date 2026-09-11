const users = [
  { username: "student", password: "library123" },
  { username: "librarian", password: "admin123" }
];

let books = [
  { id: "B001", title: "The Hobbit", author: "J.R.R. Tolkien", status: "Available" },
  { id: "B002", title: "1984", author: "George Orwell", status: "Borrowed" },
  { id: "B003", title: "To Kill a Mockingbird", author: "Harper Lee", status: "Available" },
  { id: "B004", title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Available" },
  { id: "B005", title: "ZZZ Test Book", author: "Test Author", status: "Available" }
];

const loginPanel = document.getElementById("loginPanel");
const libraryPanel = document.getElementById("libraryPanel");
const loginMessage = document.getElementById("loginMessage");
const libraryMessage = document.getElementById("libraryMessage");
const bookList = document.getElementById("bookList");
const currentUser = document.getElementById("currentUser");

document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("searchBtn").addEventListener("click", searchBooks);
document.getElementById("showAllBtn").addEventListener("click", () => renderBooks(books));

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username) {
    loginMessage.textContent = "Username is required.";
    return;
  }
  if (!password) {
    loginMessage.textContent = "Password is required.";
    return;
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    loginMessage.textContent = "Invalid username or password.";
    return;
  }

  loginPanel.classList.add("hidden");
  libraryPanel.classList.remove("hidden");
  currentUser.textContent = username;
  loginMessage.textContent = "";
  renderBooks(books);
}

function logout() {
  libraryPanel.classList.add("hidden");
  loginPanel.classList.remove("hidden");
  document.getElementById("password").value = "";
}

function searchBooks() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();

  if (!query) {
    renderBooks(books);
    libraryMessage.textContent = "Showing all books.";
    return;
  }

  const matches = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    libraryMessage.textContent = "No matching books found.";
  } else {
    libraryMessage.textContent = `${matches.length} matching book(s) found.`;
  }

  renderBooks(matches);
}

function renderBooks(items) {
  bookList.innerHTML = "";

  if (items.length === 0) {
    bookList.innerHTML = "<p>No books to display.</p>";
    return;
  }

  items.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";

    const action = book.status === "Available"
      ? `<button onclick="borrowBook('${book.id}')">Borrow</button>`
      : `<button onclick="returnBook('${book.id}')">Return</button>`;

    div.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p class="status">Status: ${book.status}</p>
      ${action}
    `;

    bookList.appendChild(div);
  });
}

function borrowBook(id) {
  const book = books.find(b => b.id === id);

  if (!book) {
    libraryMessage.textContent = "Book was not found.";
    return;
  }

  if (book.status !== "Available") {
    libraryMessage.textContent = "This book is not available for borrowing.";
    return;
  }

  book.status = "Borrowed";
  libraryMessage.textContent = `"${book.title}" was borrowed successfully.`;
  renderBooks(books);
}

function returnBook(id) {
  const book = books.find(b => b.id === id);

  if (!book) {
    libraryMessage.textContent = "Book was not found.";
    return;
  }

  if (book.status !== "Borrowed") {
    libraryMessage.textContent = "This book is already available.";
    return;
  }

  book.status = "Available";
  libraryMessage.textContent = `"${book.title}" was returned successfully.`;
  renderBooks(books);
}
