window.addEventListener('scroll', function() {
    var button = document.getElementById('floating-button');
    var scrollPosition = window.scrollY;
    var threshold = 300; // Adjust this value as needed

    if (scrollPosition > threshold) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
});
