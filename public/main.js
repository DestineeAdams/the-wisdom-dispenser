console.log("test");


document.getElementById('quoteForm').addEventListener('submit', (event) => {
      event.preventDefault(); // Stop the form from redirecting
      
      let quote = document.getElementById("inputQuote").value;
      let author = document.getElementById("inputAuthor").value;
      const note = document.querySelector('#quote-status');
      
      
      fetch('/submit-quote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quote, author })
      })
      .then(response => response.json())
      .then(data => {
          // console.log("Success:", data);
          
          // lets the user know if what happend
          document.querySelector('#quote-status').innerText = `✅${data['message']}✅`;
          
          
          note.style.visibility = "visible";
          note.style.color = "red"; 
         
          setTimeout(() => {
            note.style.visibility = "hidden";
            note.style.color = "black"; 
          }, 2000);
          
      })
      .catch(error => console.error('Error:', error));
});


