// Get references to the buttons
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Initialize variables
let noClickCount = 0;
let yesButtonSize = 16; // Initial font size in pixels

// Array of texts for the No button after the first click
const noTexts = [
  "You sure? :(",
  "Pleaseeee",
  "Mauuuusii",
  "Click here if you stanky",
  "Biiiiiitte",
  "I'll go on my knees",
  "Literally dying if you click here",
  "Do you really want to continue?",
  "Sup, you're talking to Sebastians ghost now",
  "Meanie! :(",
  "What if I give you a forehead kiss?",
  "How about another one?"
];

// Handle No button clicks
noButton.addEventListener('click', function() {
  noClickCount++;

  // Increase Yes button size
  yesButtonSize += 10; // Increase font size by 10 pixels
  yesButton.style.fontSize = yesButtonSize + 'px';

  // Change No button text
  if (noClickCount < noTexts.length) {
    noButton.textContent = noTexts[noClickCount - 1];
  } else {
    noButton.textContent = "No :(";
  }
});

// Function to create hearts
function createHearts() {
  const heartInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 100);

  // Stop the heart rain after 60 seconds
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 60000);
}

// Handle "Yes"-Button Clicks
yesButton.addEventListener('click', function() {
  // Replace page content
  document.body.innerHTML = `
    <div id="container">
      <img src="Image/Tanzende Katze.gif" alt="Excited GIF" id="excitedGif">
      <h1>I'm so excited, eeehhhh!</h1>
      <h1>Hope you're free on 2 Jan at 2:30 pm <3</h1>
    </div>
  `;
  
  // Reset background color if necessary
  document.body.style.backgroundColor = '#ff69b4';

  // Start heart rain
  createHearts();
});
