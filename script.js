// Get the current image element
const currentImage = document.querySelector('.current-image');

// Get the image array (replace with your actual image URLs)
const images = [
  'https://github.com/GeorgeYT9769/cardabase-app/raw/main/mockups/app-mockup-ios-screenshot-5-cardabase-5.5-inch-1%20(Small).png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/raw/main/mockups/app-mockup-ios-screenshot-5-cardabase-5.5-inch-2%20(Small).png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/raw/main/mockups/app-mockup-ios-screenshot-5-cardabase-5.5-inch-3%20(Small).png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/raw/main/mockups/app-mockup-ios-screenshot-5-cardabase-5.5-inch-4%20(Small).png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/raw/main/mockups/app-mockup-ios-screenshot-5-cardabase-5.5-inch-5%20(Small).png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/raw/main/mockups/app-mockup-ios-screenshot-5-cardabase-5.5-inch-6%20(Small).png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/raw/main/mockups/app-mockup-ios-screenshot-5-cardabase-5.5-inch-7%20(Small).png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/raw/main/mockups/app-mockup-ios-screenshot-5-cardabase-5.5-inch-8%20(Small).png?raw=true'
];

// Initialize the current image index
let currentIndex = 0;

// Function to update the current image
function updateImage(index) {
  currentImage.src = images[index];
  currentIndex = index;
}

// Add event listeners to the buttons
document.querySelector('#prev-button').addEventListener('click', () => {
  updateImage((currentIndex - 1 + images.length) % images.length);
});

document.querySelector('#next-button').addEventListener('click', () => {
  updateImage((currentIndex + 1) % images.length);
});

// Initialize the current image
updateImage(0);
