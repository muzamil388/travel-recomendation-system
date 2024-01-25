// Function to display the destination recommendations
function displayRecommendations(destinationList) {
    // Get the destination container element
    const destinationContainer = document.getElementById('destination-container');
  
    // Clear any existing destination recommendations
    destinationContainer.innerHTML = '';
  
    // Loop through each destination in the list and create a card
    destinationList.forEach(destination => {
      // Create a card element
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Create a card image element and set the source to the destination image
      const cardImg = document.createElement('img');
      cardImg.classList.add('card-img-top');
      cardImg.src = destination.image;
  
      // Create a card body element
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      // Create a card title element and set the text to the destination name
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = destination.name;
  
      // Create a card text element and set the text to the destination description
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = destination.description;
  
      // Create a button element to book the destination
      const bookButton = document.createElement('button');
      bookButton.classList.add('btn', 'btn-primary');
      bookButton.textContent = 'Book Now';
  
      // Append the card elements to the destination container
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(bookButton);
      card.appendChild(cardImg);
      card.appendChild(cardBody);
      destinationContainer.appendChild(card);
    });
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the form input values
    const budget = parseInt(document.getElementById('budget').value);
    const activity = document.getElementById('activity').value;
    const weather = document.getElementById('weather').value;
  
    // Send a GET request to the server to get the destination recommendations based on the form inputs
    fetch(`/recommendations?budget=${budget}&activity=${activity}&weather=${weather}`)
      .then(response => response.json())
      .then(destinationList => {
        // Display the destination recommendations on the page
        displayRecommendations(destinationList);
      })
      .catch(error => console.error(error));
  }
  
  // Add an event listener to the form submit button
  const form = document.getElementById('recommendation-form');
  form.addEventListener('submit', handleFormSubmit);
  