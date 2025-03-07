// Prosty skrypt do obsługi formularza kontaktowego
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
            form.reset();
        });
    }

    // Tutaj możesz dodać więcej funkcji JavaScript, np. do obsługi galerii zdjęć lub animacji
});
