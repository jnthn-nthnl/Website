function showAlert() {
    alert("Cool");
}

// Example of a simple animation effect
const button = document.querySelector('.interactive-button');
button.addEventListener('click', () => {
    button.classList.add('pulsing');
    setTimeout(() => button.classList.remove('pulsing'), 1000);
});
