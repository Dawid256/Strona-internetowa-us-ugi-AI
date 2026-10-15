document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const websiteInput = document.getElementById('website');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const websiteError = document.getElementById('websiteError');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (websiteInput.value.trim() === '') {
        websiteError.style.display = 'block';
        isValid = false;
    } else {
        try {
            new URL(websiteInput.value.includes('://') ? websiteInput.value : 'http://' + websiteInput.value);
            websiteError.style.display = 'none';
        } catch (_) {
            websiteError.style.display = 'block';
            isValid = false;
        }
    }

    if (isValid) {
        successMessage.style.display = 'block';
        document.getElementById('contactForm').reset();
    } else {
        successMessage.style.display = 'none';
    }
});
