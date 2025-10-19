// LocalStorage handling
function getLocalQuotes() {
  return JSON.parse(localStorage.getItem("quotes")) || [];
}

function saveLocalQuotes(quotes) {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Display quotes
function displayQuotes() {
  const quoteList = document.getElementById("quoteList");
  quoteList.innerHTML = "";
  const quotes = getLocalQuotes();

  quotes.forEach((quote, index) => {
    const li = document.createElement("li");
    li.textContent = quote;
    quoteList.appendChild(li);
  });
}

// Add quote locally
document.getElementById("addQuoteBtn").addEventListener("click", () => {
  const input = document.getElementById("quoteInput");
  const quoteText = input.value.trim();

  if (quoteText !== "") {
    const quotes = getLocalQuotes();
    quotes.push(quoteText);
    saveLocalQuotes(quotes);
    displayQuotes();
    input.value = "";
  }
});

// Sync with JSONPlaceholder API
async function syncWithServer() {
  const status = document.getElementById("syncStatus");
  status.textContent = "Syncing with server...";

  try {
    const serverResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const serverData = await serverResponse.json();

    // Simulate server quotes (taking only titles as quote content)
    const serverQuotes = serverData.slice(0, 10).map((item) => item.title);

    // Conflict Resolution: Server data takes precedence
    saveLocalQuotes(serverQuotes);
    displayQuotes();

    status.textContent = "Sync complete. Server data applied.";
  } catch (error) {
    status.textContent = "Failed to sync with server.";
  }
}

// Trigger manual sync
document
  .getElementById("syncServerBtn")
  .addEventListener("click", syncWithServer);

// Auto sync every 30 seconds
setInterval(syncWithServer, 30000);

// Initial load
displayQuotes();
