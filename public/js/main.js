document.getElementById('quoteForm').addEventListener('submit', (event) => {
      event.preventDefault(); // stops the form from redirecting
      
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
          
            // lets the user know if what happend
            document.querySelector('#quote-status').innerText = `${data['message']}`;
          
            note.style.visibility = "visible";
            note.style.color = "#6cffb9"; 
   
         
            //hides message after a few seconds
            setTimeout(() => {
                  note.style.visibility = "hidden";
                  note.style.color = "black"; 
            }, 3000);
          
      })
      .catch(error => console.error('Error:', error));
});


