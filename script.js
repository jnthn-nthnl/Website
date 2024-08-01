function showAlert() {
    alert("Thank you for visiting [Your Name]'s Creative Space!");
}

// Example of a simple animation effect
const button = document.querySelector('.interactive-button');
button.addEventListener('click', () => {
    button.classList.add('pulsing');
    setTimeout(() => button.classList.remove('pulsing'), 1000);
});
