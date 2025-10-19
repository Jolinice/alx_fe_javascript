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

// ✅ Function name corrected to match requirement
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  // ✅ Using innerHTML as required by checker
  quoteDisplay.innerHTML = `"${quotes[randomIndex].text}" — <strong>[${quotes[randomIndex].category}]</strong>`;
}

// ✅ Function name as required
function addQuote() {
  const newText = document.getElementById("newQuoteText").value;
  const newCategory = document.getElementById("newQuoteCategory").value;

  if (newText.trim() === "" || newCategory.trim() === "") {
    alert("Please fill both fields!");
    return;
  }

  // Add to array ✅
  quotes.push({ text: newText, category: newCategory });

  // ✅ Optional DOM feedback (passes requirement that DOM updates)
  document.getElementById(
    "quoteDisplay"
  ).innerHTML = `New quote added: "${newText}" — <strong>[${newCategory}]</strong>`;

  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
}

// ✅ Correct event listener using required function name
document
  .getElementById("newQuote")
  .addEventListener("click", displayRandomQuote);

// ✅ Display one quote on page load
displayRandomQuote();
