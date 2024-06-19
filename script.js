window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (window.innerWidth <= 768 && window.innerHeight <= 1024) {
            window.location.href = "mobile/";
        } else {
            window.location.href = "pc/";
        }
    }, 2500); // 5000 millisecondi corrispondono a 5 secondi
});