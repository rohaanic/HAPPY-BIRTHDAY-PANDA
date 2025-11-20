document.addEventListener('DOMContentLoaded', () => {
    // Get elements (added checks to prevent errors if elements don't exist)
    const greeting = document.getElementById('greeting-container');
    const videoContainer = document.getElementById('video-container');
    const cakeContainer = document.getElementById('cake-container');
    const video = document.getElementById('surprise-video');
    const startButton = document.getElementById('start-btn');

    // Ensure elements exist before proceeding
    if (!greeting || !videoContainer || !cakeContainer || !video || !startButton) {
        console.error('One or more required elements are missing from the DOM.');
        return;
    }

    // 1. Button click to start video
    startButton.addEventListener('click', () => {
        greeting.classList.add('hidden'); // Hide greeting
        videoContainer.classList.remove('hidden'); // Show video
        video.play().catch(error => console.error('Error playing video:', error)); // Play video with error handling
    });

    // 2. Video end to show cake
    video.addEventListener('ended', () => {
        videoContainer.classList.add('hidden'); // Hide video
        cakeContainer.classList.remove('hidden'); // Show cake
    });
});

// 3. Cake click for surprise
function cutCake() {
    const cakeImage = document.getElementById('birthday-cake');
    const cakeContainer = document.getElementById('cake-container');
    const yaySound = new Audio('yay-sound.mp3'); // Sound file

    // Ensure elements exist
    if (!cakeImage || !cakeContainer) {
        console.error('Cake image or container not found.');
        return;
    }

    // Change image
    cakeImage.src = 'cut-cake.png';

    // Play sound with error handling
    yaySound.play().catch(error => console.error('Error playing sound:', error));

    // Change text (using querySelector for safety)
    const textElement = document.querySelector('#cake-container p');
    if (textElement) {
        textElement.innerHTML = "YAY! Wish Granted! I love you so much! ❤️";
    }

    // Prevent further clicks
    cakeContainer.onclick = null;
}
