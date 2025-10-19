// Retrieve stored quotes or initialize empty array
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

// Save quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Populate categories dynamically from quotes array
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = ["all", ...new Set(quotes.map((quote) => quote.category))];

  categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");

  // Restore last selected category filter
  const savedFilter = localStorage.getItem("selectedCategory");
  if (savedFilter) {
    categoryFilter.value = savedFilter;
  }
}

// Render quotes to the DOM
function renderQuotes(filteredQuotes) {
  const quoteList = document.getElementById("quoteList");
  quoteList.innerHTML = filteredQuotes
    .map(
      (quote) =>
        `<p>${quote.text} - <em>${quote.author}</em> [${quote.category}]</p>`
    )
    .join("");
}

// Filter quotes based on selected category
function filterQuotes() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  localStorage.setItem("selectedCategory", selectedCategory);

  if (selectedCategory === "all") {
    renderQuotes(quotes);
  } else {
    const filtered = quotes.filter(
      (quote) => quote.category === selectedCategory
    );
    renderQuotes(filtered);
  }
}

// Handle new quote submission
document
  .getElementById("quoteForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const text = document.getElementById("quoteText").value;
    const author = document.getElementById("quoteAuthor").value;
    const category = document.getElementById("quoteCategory").value;

    quotes.push({ text, author, category });
    saveQuotes();

    populateCategories();
    filterQuotes();

    this.reset();
  });

// Initial execution
populateCategories();
filterQuotes();
