document.querySelector('.contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const flashMessage = document.createElement('div');
    flashMessage.className = 'flashMessage show';
    flashMessage.innerHTML = '<span class="message">Your message has been sent. We will contact you soon!</span>';

    document.body.appendChild(flashMessage);
    setTimeout(function () {
        flashMessage.classList.remove('show');
        window.location.href = 'index.html';
    }, 3000);
});
