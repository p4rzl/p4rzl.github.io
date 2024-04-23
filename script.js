window.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768 && window.innerHeight <= 1024) {
        window.location.href = "https://p4rzl.github.io/ParziWEB-Mobile/";
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Control') {
        var pedroImage = document.getElementById('pedro');
        pedroImage.src = '/img/pedro.gif';

        // Play music
        var audio = new Audio('audio/Pedro.mp3');
        audio.play();
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Control') {
        var pedroImage = document.getElementById('pedro');
        pedroImage.src = 'img/logo.jpg';

        // Stop music
        audio.pause();
        audio.currentTime = 0;
    }
});
