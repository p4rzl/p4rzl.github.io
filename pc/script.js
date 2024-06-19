// Disable context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Declare variables
var firsttime_1 = false;
var firsttime_2 = false;
var firsttime_3 = false;
var firsttime_4 = false;
var audio;
var Miao;
var yoru;
var gifElement;
var clickCount = 0;
var keySequence = [];
var easterEggCount = 0;
var totalEasterEggs = 4;

// Get DOM elements
var pedroImage = document.getElementById('pedro');
var image = document.getElementById('gatto');

// Event listeners
document.addEventListener('keydown', function(e) {
    if (e.key === 'Control') {
        pedroImage.src = '/img/pedro.gif';
        firsttime_1 = true;
        discoverEasterEgg();
        audio = new Audio('audio/Pedro.mp3');
        audio.play();
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Control') {
        pedroImage.src = 'img/logo.jpg';
        audio.pause();
        audio.currentTime = 0;
    }
});

image.addEventListener('click', function() {
    clickCount++;
    Miao = new Audio('audio/miao.mp3');
    if (clickCount === 7) {
        firsttime_2 = true;
        discoverEasterEgg();
        image.src = 'img/gatto.jpeg';
        Miao.play();
    } else if (clickCount === 14) {
        image.src = 'img/io.jpeg';
        Miao.pause();
        clickCount = 0;
    }
});

document.addEventListener('keydown', function(e) {
    keySequence.push(e.key);
    checkKeySequence();
});

document.addEventListener('keyup', function() {
    keySequence = [];
    gifElement.style.opacity = '1';
});

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'immagine') {
        firsttime_4 = true;
        discoverEasterEgg();
        window.location.href = event.target.href;
    }
});

// Functions
function checkKeySequence() {
    firsttime_3 = true;
    discoverEasterEgg();
    var targetSequence = ['y', 'o', 'r', 'u'];
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
                gifElement.style.opacity = '0';
                setTimeout(function() {
                    document.body.removeChild(gifElement);
                }, 4000);
            }, 4000);
        }
        keySequence = [];
    }
}

function discoverEasterEgg() {
    updateEasterEggCount();
    if (!localStorage.getItem('firsttime_1') || !localStorage.getItem('firsttime_2') || !localStorage.getItem('firsttime_3') || !localStorage.getItem('firsttime_4')) {
        easterEggCount++;
        updateEasterEggCount();
        console.log('Easter egg found!');
    } else {
        console.log('No easter egg found!');
    }
    playEasterEggSound();
}

function playEasterEggSound() {
    if (easterEggCount === totalEasterEggs) {
        var easterEggSound = new Audio('audio/victory.mp3');
        easterEggSound.play();
    }
}

function updateEasterEggCount() {
    localStorage.setItem('firsttime_1', firsttime_1);
    localStorage.setItem('firsttime_2', firsttime_2);
    localStorage.setItem('firsttime_3', firsttime_3);
    localStorage.setItem('firsttime_4', firsttime_4);
    localStorage.setItem('easterEggCount', easterEggCount);
}

// Initialize gifElement
gifElement = document.createElement('img');
gifElement.src = 'img/yoru.gif';
gifElement.style.position = 'fixed';
gifElement.style.top = '0';
gifElement.style.left = '0';
gifElement.style.width = '100%';
gifElement.style.height = '100%';
gifElement.style.zIndex = '9999';
gifElement.style.opacity = '1';
