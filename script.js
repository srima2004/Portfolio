function showPage(pageId) {
    const sections = document.querySelectorAll('main section');
    
    sections.forEach((section) => {
      if (section.id === pageId) {
        section.style.display = 'block'; 
      } else {
        section.style.display = 'none'; 
      }
    });
  }

  
  let currentIndex = 0; 
const carousel = document.querySelector('.carousel');
const totalItems = document.querySelectorAll('.carousel-item').length;

function moveCarousel(direction) {
   
    currentIndex += direction;

    
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

 
    const offset = -currentIndex * 100; 
    carousel.style.transform = `translateX(${offset}%)`;
}
document.querySelector('#contact-form').onsubmit = (event) => {
    event.preventDefault();  // Prevent page reload

    // Perform the form submission via Formspree (Asynchronous)
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Hide the form
            document.querySelector('#contact-form').style.display = 'none';
            
            // Show the success message
            document.getElementById('success-message').style.display = 'block';
        } else {
            alert('Oops! There was a problem. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    });
};
