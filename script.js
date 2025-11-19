document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting-container');
    const videoContainer = document.getElementById('video-container');
    const cakeContainer = document.getElementById('cake-container');
    const video = document.getElementById('surprise-video');
    const startButton = document.getElementById('start-btn');

    //  1. Button Click Par Video Start 
    startButton.onclick = () => {
        greeting.classList.add('hidden'); // Greeting chupa do
        videoContainer.classList.remove('hidden'); // Video dikhao
        video.play(); // Video chalao
    };

    //  2. Video End Par Cake Dikhao 
    video.onended = () => {
        videoContainer.classList.add('hidden'); // Video chupa do
        cakeContainer.classList.remove('hidden'); // Cake dikhao
    };
});

//  3. Cake Click Par Surprise 
function cutCake() {
    const cakeImage = document.getElementById('birthday-cake');
    const yaySound = new Audio('yay-sound.mp3'); // Sound file chalane ke liye

    // Image badal do
    cakeImage.src = 'cut-cake.png'; 

    // Sound bajao
    yaySound.play();

    // Text badal do
    document.querySelector('#cake-container p').innerHTML = "YAY! Wish Granted! I love you so much! ❤️";

    // Double click rokne ke liye
    document.getElementById('cake-container').onclick = null; 
}