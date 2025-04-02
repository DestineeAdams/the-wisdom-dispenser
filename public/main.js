console.log("test");

document.getElementById('quoteForm').addEventListener('submit', (event) => {
      event.preventDefault(); // Stop the form from redirecting
      
      let quote = document.getElementById("inputQuote").value;
      let author = document.getElementById("inputAuthor").value;
      
      console.log("front", quote, author);
      
      
      fetch('/submit-quote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quote, author })
      })
      .then(response => response.json())
      .then(data => console.log("Success:", data))
      .catch(error => console.error('Error:', error));
});