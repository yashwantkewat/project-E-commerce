 // Smooth scroll functionality
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetY = target.getBoundingClientRect().top + window.pageYOffset;
            const startingY = window.pageYOffset;
            const diff = targetY - startingY;
            const duration = 3000; // Duration of the scroll animation in milliseconds
            let start;

            // Step function for the scroll animation
            function step(timestamp) {
                if (!start) start = timestamp;
                const time = timestamp - start;
                const percentage = Math.min(time / duration, 1);

                window.scrollTo(0, startingY + diff * percentage);

                if (time < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            // Start the animation
            window.requestAnimationFrame(step);
        }
    });
});


// email submission

document.getElementById("submitButton").addEventListener("click", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the email entered by the user
    var email = document.getElementById("emailInput").value;

    // Email validation regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the validation regex
    if (emailRegex.test(email)) {
        // If the email is valid, display it in an alert
        alert("Email submitted: " + email);
    } else {
        // If the email is not valid, display an error message
        alert("Please enter a valid email address.");
    }
});



// hide and show effect 
// Array of words to display
var words = ["our partners__Amazon ", "our Partners__Flipcart", "our Partners__Shopify", "our Partners__Snapdeal", "our Partners__JioMart"];

// Index for tracking the current word
var wordIndex = 0;

// Index for tracking the current letter
var letterIndex = 0;

// Get the word element
var wordElement = document.getElementById("word");

// Function to display the words letter by letter
function displayWords() {
  var currentWord = words[wordIndex];
  var currentLetter = currentWord.substring(0, letterIndex);
  wordElement.textContent = currentLetter;
  letterIndex++;
  if (letterIndex > currentWord.length) {
    letterIndex = 0;
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
  }
  setTimeout(displayWords, 200); // Change the delay here (milliseconds)
}

// Start displaying words
displayWords();