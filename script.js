// Get the current image element
const currentImage = document.querySelector('.current-image');

// Get the image array (replace with your actual image URLs)
const images = [
  'https://github.com/GeorgeYT9769/cardabase-app/blob/main/fastlane/metadata/android/en-US/images/phoneScreenshots/1.png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/blob/main/fastlane/metadata/android/en-US/images/phoneScreenshots/2.png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/blob/main/fastlane/metadata/android/en-US/images/phoneScreenshots/3.png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/blob/main/fastlane/metadata/android/en-US/images/phoneScreenshots/4.png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/blob/main/fastlane/metadata/android/en-US/images/phoneScreenshots/5.png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/blob/main/fastlane/metadata/android/en-US/images/phoneScreenshots/6.png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/blob/main/fastlane/metadata/android/en-US/images/phoneScreenshots/7.png?raw=true',
  'https://github.com/GeorgeYT9769/cardabase-app/blob/main/fastlane/metadata/android/en-US/images/phoneScreenshots/8.png?raw=true'
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
