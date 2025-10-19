// Initial Quotes Array
let quotes = [
  {
    text: "Success is not final; failure is not fatal.",
    category: "Motivation",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    category: "Programming",
  },
  { text: "Stay focused and never give up.", category: "Motivation" },
];

// Function to show a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerText = `"${quotes[randomIndex].text}" — [${quotes[randomIndex].category}]`;
}

// Event Listener for New Quote Button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Function to Add a New Quote
function addQuote() {
  const newText = document.getElementById("newQuoteText").value;
  const newCategory = document.getElementById("newQuoteCategory").value;

  if (newText.trim() === "" || newCategory.trim() === "") {
    alert("Please fill both fields!");
    return;
  }

  // Push new quote into array
  quotes.push({ text: newText, category: newCategory });

  // Clear input fields
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";

  alert("Quote added successfully!");
}

// Event Listener for Add Quote Button
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Show a quote on first load
showRandomQuote();
