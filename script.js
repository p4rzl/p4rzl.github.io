window.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768 && window.innerHeight <= 1024) {
        window.location.href = "https://p4rzl.github.io/ParziWEB-Mobile/";
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

var audio; // Declare the audio variable outside of the event listeners

document.addEventListener('keydown', function(e) {
    if (e.key === 'Control') {
        var pedroImage = document.getElementById('pedro');
        pedroImage.src = '/img/pedro.gif';

        // Play music
        audio = new Audio('audio/Pedro.mp3');
        audio.play();
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Control') {
        var pedroImage = document.getElementById('pedro');
        pedroImage.src = 'img/logo.jpg';

        // Stop music
        audio.pause(); // Pause the audio
        audio.currentTime = 0;
    }
});

var clickCount = 0;
var image = document.getElementById('gatto');

image.addEventListener('click', function() {
    clickCount++;
    Miao = new Audio('audio/miao.mp3');
    if (clickCount === 7) {
        image.src = 'img/gatto.jpeg';
        Miao.play();
    } else if (clickCount === 14) {
        image.src = 'img/io.jpeg';
        Miao.pause();
        clickCount = 0;
    }
});

var keySequence = [];
var gifElement = document.createElement('img');
gifElement.src = 'img/yoru.gif';
gifElement.style.position = 'fixed';
gifElement.style.top = '0';
gifElement.style.left = '0';
gifElement.style.width = '100%';
gifElement.style.height = '100%';
gifElement.style.zIndex = '9999';
gifElement.style.opacity = '1'; // Set initial opacity to 1

document.addEventListener('keydown', function(e) {
    keySequence.push(e.key);
    checkKeySequence();
});

function checkKeySequence() {
    var targetSequence = ['y', 'o', 'r', 'u']; // Replace with your desired key sequence
    yoru = new Audio('audio/yoru.mp3');
    if (keySequence.length >= targetSequence.length) {
        var sequenceMatch = true;
        for (var i = 0; i < targetSequence.length; i++) {
            if (keySequence[i] !== targetSequence[i]) {
                sequenceMatch = false;
                break;
            }
        }
        if (sequenceMatch) {
            yoru.play();
            document.body.appendChild(gifElement);
            setTimeout(function() {
                gifElement.style.opacity = '0'; // Set opacity to 0 after 4 seconds
                setTimeout(function() {
                    document.body.removeChild(gifElement); // Remove the gif element after 4 seconds
                }, 4000);
            }, 4000);
        }
        keySequence = [];
    }
}

document.addEventListener('keyup', function() {
    keySequence = [];
    gifElement.style.opacity = '1'; // Reset opacity to 1 when key is released
});
