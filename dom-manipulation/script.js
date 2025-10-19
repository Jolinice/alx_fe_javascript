// Load quotes from LocalStorage or start empty
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

// Save quotes back to LocalStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Populate category dropdown dynamically
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = ["all", ...new Set(quotes.map((q) => q.category))];

  categoryFilter.innerHTML = categories
    .map((cat) => `<option value="${cat}">${cat}</option>`)
    .join("");

  // Restore last selected filter
  const savedFilter = localStorage.getItem("selectedCategory");
  if (savedFilter) {
    categoryFilter.value = savedFilter;
  }
}

// Display quotes in DOM
function renderQuotes(filteredQuotes) {
  const quoteList = document.getElementById("quoteList");
  quoteList.innerHTML = filteredQuotes
    .map((q) => `<p>${q.text} - <em>${q.author}</em> [${q.category}]</p>`)
    .join("");
}

// Filter quotes based on selected category
function filterQuotes() {
  const category = document.getElementById("categoryFilter").value;
  localStorage.setItem("selectedCategory", category);

  if (category === "all") {
    renderQuotes(quotes);
  } else {
    renderQuotes(quotes.filter((q) => q.category === category));
  }
}

// Handle form submission to add a new quote
document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const text = document.getElementById("quoteText").value;
  const author = document.getElementById("quoteAuthor").value;
  const category = document.getElementById("quoteCategory").value;

  quotes.push({ text, author, category });
  saveQuotes();

  populateCategories();
  filterQuotes();

  this.reset();
});

// Initial load
populateCategories();
filterQuotes();
