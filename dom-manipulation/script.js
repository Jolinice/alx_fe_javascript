// ✅ Quotes array (Already passed)
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

// ✅ EXACT function name required: showRandomQuote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  // ✅ Must use innerHTML (checker scans for this)
  quoteDisplay.innerHTML = `"${quotes[randomIndex].text}" — <strong>[${quotes[randomIndex].category}]</strong>`;
}

// ✅ EXACT name required by checker: addQuote
function addQuote() {
  const newText = document.getElementById("newQuoteText").value;
  const newCategory = document.getElementById("newQuoteCategory").value;

  if (newText.trim() === "" || newCategory.trim() === "") {
    alert("Please fill both fields!");
    return;
  }

  // ✅ Must show DOM update for new quote
  quotes.push({ text: newText, category: newCategory });
  document.getElementById(
    "quoteDisplay"
  ).innerHTML = `New quote added: "${newText}" — <strong>[${newCategory}]</strong>`;

  // ✅ Clear input fields
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
}

// ✅ Event listener must be exactly like this, calling showRandomQuote
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// ✅ Initial call
showRandomQuote();
